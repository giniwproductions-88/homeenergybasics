#!/usr/bin/env node
/**
 * check-sources.mjs — homeenergybasics.com source change detector
 * Zero dependencies. Node 18+. Reads source URLs directly from src/data/incentives.ts
 * AND src/data/utilities.ts (utility pilot pages, if present) so the watch list can
 * never drift from the site. URLs on JS-walled hosts (HUMAN_VERIFY_HOSTS, e.g.
 * my.xcelenergy.com portals) are never fetched — automated fetches false-miss there —
 * and are instead listed in every report as standing browser-check reminders.
 *
 * USAGE (from repo root):
 *   node scripts/check-sources.mjs parse                 # sanity: list states + URL counts, no network
 *   node scripts/check-sources.mjs baseline              # snapshot all sources -> scripts/source-baseline.json (COMMIT THIS)
 *   node scripts/check-sources.mjs baseline --only NY,MA # re-snapshot just these, merged into the existing baseline
 *   node scripts/check-sources.mjs check                 # fetch fresh, diff vs baseline -> scripts/source-diff-report.md
 *   node scripts/check-sources.mjs check --only NY,MA    # limit to specific states
 *   node scripts/check-sources.mjs accept NY MA          # after verifying a flagged state, fold its fresh snapshot into baseline
 *   node scripts/check-sources.mjs accept all
 *   node scripts/check-sources.mjs accept SHARED         # adopt shared/federal URLs (IRS etc.) — a state accept never sweeps these in
 *   node scripts/check-sources.mjs prune                 # drop baseline entries for URLs removed from the data files
 *   node scripts/check-sources.mjs unbaselined           # list watched URLs with no baseline entry (no network)
 *   node scripts/check-sources.mjs selftest              # offline test of the diff engine
 *   node scripts/check-sources.mjs verify --states NY --figures '$14,000' --files a.ts b.tsx
 *                                                       # read-only pre-commit audit of the working tree (no network)
 *
 * Targets: anywhere a state code is accepted (`--only`, `accept`), a utility
 * code works too — utilities.ts entries bucket by uppercased slug, so
 * "efficiency-maine" becomes `accept EFFICIENCY-MAINE`. `parse` prints the
 * current list of utility codes.
 *
 * CAUTION — `baseline --only X` is not a cheaper `accept X`. It fetches fresh
 * and adopts blind: no diff is produced for you to read, and it applies no
 * shared/federal guard, so any IRS/TVA/Duke URL that X cites is re-baselined
 * along with X — the tripwire `accept X` deliberately preserves. Prefer
 * `check --only X` -> read the report -> `accept X`.
 *
 * WORKFLOW (playbook Phase 4): baseline once -> check every ~2 days -> HIGH items get
 * manual verification at full checklist depth -> page updated -> `accept <STATE>` -> commit baseline.
 * Never `accept` a state you haven't actually verified: the baseline is the honesty ledger.
 * Shared/federal URLs (cited by more than SHARED_STATE_MAX states — the IRS pages, the TVA
 * and Duke program hubs) are deliberately NOT swept in by `accept <STATE>`: one state's
 * verification is no evidence about a page many states cite, which is why the report also
 * keeps them out of its triage list. Verify such a page on its own, then `accept SHARED`
 * (or `accept all`) to adopt it. A state accept reports how many it skipped.
 *
 * Files:
 *   scripts/source-baseline.json   committed. The asset.
 *   scripts/source-latest.json     regenerated every check. gitignore.
 *   scripts/source-diff-report.md  regenerated every check. gitignore.
 *   scripts/source-ignore.json     optional array of URLs to skip/mute (bot-blocked or known-noisy).
 *                                  A mute suppresses the diff row. It does NOT suppress the
 *                                  report's MUTED AND HOLLOW section: a muted URL that is also
 *                                  erroring or carrying no signal is watching nothing, and the
 *                                  mute would otherwise hide the only row that said so.
 *   scripts/source-nosignal-accepted.json
 *                                  committed. Suppresses rows from the report's NO SIGNAL section.
 *                                  Shape: { "<url>": { "reason": "by-design" | "js-rendered", "note": "..." } }
 *                                  by-design   = the page never publishes figures; nothing is lost.
 *                                  js-rendered = figures never reach the raw HTML; the state is
 *                                                genuinely unwatched and the URL is the wrong target.
 *                                  Separate from source-ignore.json on purpose: muting a URL from
 *                                  FETCHING and accepting that it carries NO SIGNAL are different
 *                                  decisions, and one must not silently perform the other.
 */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import path from "node:path";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(scriptDir, "..");
const INCENTIVES = path.join(ROOT, "src", "data", "incentives.ts");
const UTILITIES = path.join(ROOT, "src", "data", "utilities.ts"); // optional; parsed if present

// JS-walled hosts: a plain fetch returns a shell page, so hash/dollar diffs are
// guaranteed false-misses. These are excluded from fetching entirely and surfaced
// in every report as HUMAN VERIFY reminders. Matches the host and all subdomains.
const HUMAN_VERIFY_HOSTS = [
  "my.xcelenergy.com",
  // mn.gov: both MN Commerce pages sit behind a perfdrive/ShieldSquare bot
  // wall that returns HTTP 200 — the scraper diffed wall-vs-wall and reported
  // "unchanged" while blind (proven 7/24: the 6/12 banner update happened
  // behind the wall). Host-level match catches exactly the two Commerce
  // pages; minneapolismn.gov does NOT match (different host suffix).
  "mn.gov",
];

function isHumanVerify(url) {
  try {
    const h = new URL(url).host.toLowerCase();
    return HUMAN_VERIFY_HOSTS.some((d) => h === d || h.endsWith("." + d));
  } catch {
    return false;
  }
}

// Off-domain redirect detection (bot-wall class). A redirect to a different
// registrable domain (perfdrive.com, validate.*, captcha hosts) means the
// content fetched is NOT the target page — diffing it produces silent
// blindness that is strictly worse than a fetch failure. Approximation:
// last two host labels, www-stripped ("savings.austinenergy.com" ->
// "austinenergy.com"), so subdomain/apex moves do NOT trip it but any
// third-party wall does. Good enough for this watch list (US .gov/.com/.org).
function registrableHost(u) {
  try {
    const h = new URL(u).host.toLowerCase().replace(/^www\./, "");
    return h.split(".").slice(-2).join(".");
  } catch {
    return u;
  }
}

// Same-domain bot-wall interstitials. The off-domain detector above misses
// walls served from the target's OWN host: efficiencymaine.com returned
// "You are being redirected... Javascript is required" from efficiencymaine.com
// itself (observed 2026-08-23 on /federal-funding/). Diffing wall-vs-wall
// reports "unchanged" while blind (MN lesson, 7/24), so short pages matching
// interstitial phrasing are classified as FETCH failures instead. Real pages
// keep such text inside <noscript>, which htmlToText strips — a match in
// extracted text is the wall itself. Length guard avoids false-positives on
// long real pages that happen to mention these phrases in prose.
// 2026-09-06: every one of the eight bodies probed — the six large-body 403s
// and both known-block controls — returned false here. Cloudflare's challenge
// extracts to "Just a moment..." (16 chars) and matched nothing in the list, so
// the clearest walls on the site fell through to NO SIGNAL. The added phrasings
// are challenge titles and hard-block templates, not content vocabulary.
//
// `blocked` is a bare token and is the one alternative that could match prose.
// It is tolerable only because of the WALL_TEXT_MAXLEN guard below: no real
// program page in this corpus extracts to under 2000 characters. If that ever
// stops being true, scope this alternative before widening the ceiling.
const WALL_TEXT_RE =
  /you are being redirected|javascript is required|checking your browser|enable javascript and cookies|verify(?:ing)? (?:that )?you are (?:a )?human|are you a robot|request unsuccessful\. incapsula|just a moment|attention required|something went wrong|share the following error information|\bblocked\b/i;
const WALL_TEXT_MAXLEN = 2000;
function isWallText(text) {
  return text.length < WALL_TEXT_MAXLEN && WALL_TEXT_RE.test(text);
}

// No-signal fingerprints. A snapshot with no dollars AND no keywords has
// nothing for diffEntry to compare except textHash, which on such a page
// tracks boilerplate only — so "unchanged" says nothing about the rebate
// figures the URL is watched for, and the entry can never reach HIGH.
// PDFs are excluded: they are byte-compared, and bytesHash IS a signal.
// Error entries are excluded: they already surface as FETCH.
//
// Note what this does NOT need to catch: a page that GOES dark is already
// caught, because losing its figures fires "dollar figures REMOVED" -> HIGH.
// This class is about arming failures — URLs baselined already dark, whose
// tripwire was never armed. Found 2026-09-06 across many state codes, five
// of them extracting no text at all (ComEd and PECO byte-identical).
function hasNoSignal(e) {
  if (!e || e.error) return false;
  if (e.kind === "pdf") return false;
  return (e.dollars || []).length === 0 && Object.keys(e.keywords || {}).length === 0;
}

// Sub-classification: htmlToText returned "" outright, so the fetch did not
// land on the target page at all. Derived from sha("") rather than a literal
// so it cannot drift if the hash length or algorithm changes.
let _emptyTextHash = null;
const emptyTextHash = () => (_emptyTextHash ??= sha(""));
function extractedNothing(e) {
  return !!e && !!e.textHash && e.textHash === emptyTextHash();
}

// Is this watch watching nothing? Two independent ways to be hollow, and they
// must be tested in this order: hasNoSignal() returns false for error entries,
// so testing it first would classify a 403 as healthy. Same trap as
// classifyAcceptance() below.
//
// Keyed on error status and signal, never on length. Length corroborates
// (nothing under 8KB in the current baseline carries signal, against a 44KB p10
// for entries that do) but a short page that publishes figures is legitimate
// and a 1.5MB block page is not, so length would decide both cases wrongly.
//
// PDFs are excluded from the no-signal branch, matching hasNoSignal(): a PDF
// with no extracted dollars is compared by bytesHash and is still a real watch.
// An erroring PDF is still hollow.
// Returns null when the entry is a healthy watch.
function hollowReason(e) {
  if (!e) return null;
  if (e.error) return { kind: "fetch-error", detail: e.error };
  if (hasNoSignal(e)) {
    return {
      kind: "no-signal",
      detail: `fetched ${e.httpStatus ?? "?"} but 0 dollar figures and 0 status keywords`,
    };
  }
  return null;
}

// Version-encoded document urls. If a reissue lands at a NEW url, the watched
// one keeps returning 200 with an unchanged hash and reports UNCHANGED forever —
// healthy-looking, watching a fossil. Nothing else in the report can see this:
// a never-changed document and a superseded one are byte-identical in the diff,
// and hollowReason() deliberately treats a PDF with a bytesHash as a real watch.
//
// Keyed on url shape alone. No fetching, no new data, and the failure mode is a
// name that merely contains a year — which is why the year patterns require a
// path or extension position rather than matching a bare four-digit run.
const VERSION_MARKERS = [
  [/\/(19|20)\d{2}\/\d{2}\//, "year/month upload path"],
  [/_\d{6,8}\.pdf(\?|$)/i, "date-stamped filename"],
  [/-(19|20)\d{2}\.pdf(\?|$)/i, "year-stamped filename"],
  [/\/media\/\d+\//, "opaque media id"],
];
function versionEncodedUrl(url) {
  if (!url) return null;
  const hit = VERSION_MARKERS.find(([re]) => re.test(url));
  return hit ? hit[1] : null;
}

// Why an acceptance may no longer hold. Three distinct states, and collapsing
// them is actively dangerous: hasNoSignal() returns false for error entries as
// well as for healthy ones, so a single `!hasNoSignal(e)` test reports a URL
// that has started 403-ing as "now carries signal" — an accepted URL that
// began failing to fetch would render as an improvement. Order matters: the
// error branch must precede the hasNoSignal branch for that reason.
// Returns null while the acceptance is still valid.
function classifyAcceptance(entry) {
  if (!entry) {
    return { kind: "dead", message: "no longer in watch list; acceptance is dead" };
  }
  if (entry.error) {
    return {
      kind: "masking",
      message: `now failing to fetch (${entry.error}); acceptance is masking a fetch failure`,
    };
  }
  if (!hasNoSignal(entry)) {
    return { kind: "recovered", message: "now carries signal; acceptance can be removed" };
  }
  return null;
}

// Reasons a no-signal URL may be accepted (scripts/source-nosignal-accepted.json).
// The distinction is load-bearing, not cosmetic:
//   by-design   — the page never publishes figures (EIA profile, contractor
//                 landing page). Permanently fine; nothing is lost.
//   js-rendered — figures exist but load client-side and never reach the raw
//                 HTML. The state is GENUINELY UNWATCHED and the URL is the
//                 wrong target. Accepting it silences the row; it does not
//                 fix the gap. These stay counted by reason for that reason.
// An entry whose reason is missing or unrecognised is NOT accepted — it is
// reported as malformed, so a broken file cannot silently suppress rows.
const NOSIGNAL_REASONS = ["by-design", "js-rendered"];
// Extra state tags: URLs whose page serves more states than the data files
// reference. The OG&E /ord/ rebates page carries BOTH the AR tab and the
// Oklahoma closure sentence ("Oklahoma rebates are closed and will return
// in 2027") — a flag there implicates both states (7/24 AR/OG&E lesson).
// Tags affect report labels, triage lists, --only filters, and accept.
const EXTRA_STATE_TAGS = {
  "https://www.oge.com/wps/portal/ord/energy-solutions/efficiency-programs/rebates": ["OK"],
};

// Monitor-only targets: watched URLs that are NOT reader-facing sources in
// incentives.ts/utilities.ts (funding trackers etc). They join the watch
// list and survive prune, but never render on any page. Keep this list
// short — the watch list is supposed to derive from the site.
const EXTRA_TARGETS = [
  {
    url: "https://cleanheatri.com/resources/remaining-funds/",
    label: "Clean Heat RI — Remaining Funds tracker (monitor-only)",
    states: ["RI"], // RI's #1 trigger: depletion or program closure
  },
  // ---- 8/23B adds: DOE 26-2 conformance tripwires (CONSOLIDATED-FORWARD-2026-08-23B §11).
  // All five URLs fetch-verified live 2026-08-23 before adding. Canary text at add
  // time is recorded in the forward's §7 registry — a diff on any of these during
  // the Aug 31 conformance window is presumptively a 26-2 implementation.
  {
    url: "https://www.efficiencymaine.com/docs/MHI-Rebate-Claim-Form.pdf",
    label: "Efficiency Maine — MHI Rebate Claim Form PDF (monitor-only; fuel-tank cap/remove field = ME 26-2 tripwire; rev 8/20/2026 at add)",
    states: ["ME"],
  },
  {
    url: "https://www.efficiencymaine.com/federal-funding/",
    label: "Efficiency Maine — Federal Funding page (monitor-only; DOE-notice paragraph = ME 26-2 acknowledgment tripwire; HER 'conditionally awarded' = launch tripwire)",
    states: ["ME"], // Served a SAME-domain JS interstitial on 8/23 verify — wall-text detector below covers it
  },
  {
    url: "https://www.efficiencymaine.com/docs/All-Rebates-Brochure.pdf",
    label: "Efficiency Maine — All Rebates Brochure PDF (monitor-only; full residential matrix; rev 211 8/18/2026 at add)",
    states: ["ME"],
  },
  {
    url: "https://www.masssave.com/frequently-asked-questions",
    label: "Mass Save — FAQ page (monitor-only; 'working to seamlessly integrate' sentence = MA HEAR flip tripwire; 'updated HEAT Loan guide' watch)",
    states: ["MA"],
  },
  {
    url: "https://www.nyserda.ny.gov/All-Programs/EmPower-New-York-Program",
    label: "NYSERDA — EmPower+ program page (monitor-only; four-measure HEAR caps; fuel-condition language APPEARING here = NY visible-conformance tripwire)",
    states: ["NY"],
  },
  // Carried from 8/23 (same forward, §11): GA's own program-update feed. At add
  // time (fetch-verified 8/23): HEAR submissions paused eff. 8/14, fuel-switching
  // projects dead eff. 8/10, Program Notice 26-2 cited by name. A diff here is
  // GA's next move (reopen, HER changes, or post-8/31 rules).
  {
    url: "https://energyrebates.georgia.gov/hear-program-updates",
    label: "GA Home Energy Rebates — HEAR Program Updates feed (monitor-only; reopen/26-2 tripwire)",
    states: ["GA"],
  },
];

const BASELINE_F = path.join(scriptDir, "source-baseline.json");
const LATEST_F = path.join(scriptDir, "source-latest.json");
const REPORT_F = path.join(scriptDir, "source-diff-report.md");
const IGNORE_F = path.join(scriptDir, "source-ignore.json");
const NOSIGNAL_F = path.join(scriptDir, "source-nosignal-accepted.json");

const CONCURRENCY = 6;
const TIMEOUT_MS = 25000;
const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36";

// Playbook tiers (JULY-REVERIFY-PLAYBOOK.md). Unlisted -> tier 2. Used only to sort the report.
const TIER1 = ["NY", "MA", "ME", "PA", "WA", "MI", "CO", "AZ", "MN", "CT", "HI", "NH", "CA"];
const TIER3 = ["AK", "AL", "AR", "IA", "ID", "KS", "MS", "MT", "ND", "NE", "SD", "WV", "WY"];
const tierOf = (codes) => {
  if (codes.some((c) => TIER1.includes(c))) return 1;
  if (codes.every((c) => TIER3.includes(c))) return 3;
  return 2;
};

// "Shared/federal" cutoff: a URL cited by more than this many states (the IRS
// pages, the TVA and Duke program hubs). Classify through isShared() so the
// rule lives in one place: pick() in writeReport (keeps such URLs out of the
// verify-triage list), the accept handler (adopts them only when named —
// `accept SHARED` or `accept all`), baseline's targeted hold-back, and
// parse's shared-URL listing, whose printed label uses the constant directly.
// A literal, or an open-coded comparison, is how these drift apart.
const SHARED_STATE_MAX = 3;
const isShared = (states) => states.length > SHARED_STATE_MAX;

// Program-status phrases. Count changes = HIGH signal. Counted as literal
// lowercase substrings — consistency between runs matters, not linguistics.
const KEYWORDS = [
  "waitlist", "wait list", "closed", "suspended", "paused", "on hold",
  "fully reserved", "fully subscribed", "exhausted", "depleted",
  "no longer", "discontinued", "expired", "now open", "now available",
  "applications open", "accepting applications", "coming soon",
  "temporarily", "sold out", "while funds last", "first-come",
];

// Keywords that false-flag on site furniture ("temporarily" in a cookie
// banner or outage notice — MN Power class, 7/24). Scoped keywords only
// count when program vocabulary appears within `window` chars either side.
// NOTE: scoping changes counts vs an unscoped baseline — expect a one-time
// keyword-shift flag on pages where the old count included furniture hits;
// glance and accept.
const KEYWORD_SCOPE = {
  temporarily: { window: 120, near: /rebate|program|incentiv|applicat|fund|waitlist|offer|enroll/ },
};

/* ------------------------------------------------------------------ */
/* incentives.ts parsing                                               */
/* ------------------------------------------------------------------ */

function decodeEscapes(s) {
  return s
    .replace(/\\u([0-9a-fA-F]{4})/g, (_, h) => String.fromCharCode(parseInt(h, 16)))
    .replace(/\\"/g, '"')
    .replace(/\\\\/g, "\\");
}

function parseIncentives() {
  const src = readFileSync(INCENTIVES, "utf8");
  const re = /stateCode:\s*"([A-Z]{2})"/g;
  const marks = [];
  let m;
  while ((m = re.exec(src))) marks.push({ code: m[1], idx: m.index });
  const MIN = Number(process.env.MIN_STATES || 40);
  if (marks.length < MIN) {
    throw new Error(`Parsed only ${marks.length} state entries from ${INCENTIVES} — structure changed?`);
  }
  const urls = new Map(); // url -> { label, states: [] }
  for (let i = 0; i < marks.length; i++) {
    const end = i + 1 < marks.length ? marks[i + 1].idx : src.length;
    const chunk = src.slice(marks[i].idx, end);
    const pair = /label:\s*"((?:[^"\\]|\\.)*)"\s*,\s*url:\s*"((?:[^"\\]|\\.)*)"/g;
    let p;
    while ((p = pair.exec(chunk))) {
      const label = decodeEscapes(p[1]);
      const url = decodeEscapes(p[2]);
      if (!urls.has(url)) urls.set(url, { label, states: [] });
      if (!urls.get(url).states.includes(marks[i].code)) urls.get(url).states.push(marks[i].code);
    }
  }
  return { states: marks.map((x) => x.code), urls };
}

function parseUtilities() {
  // Optional second data file for utility pilot pages (Xcel etc.). Same
  // label/url source convention as incentives.ts. Entries are grouped by the
  // utility's slug ("xcel-energy" -> code "XCEL-ENERGY") so `--only` and
  // `accept XCEL-ENERGY` work exactly like state codes.
  const urls = new Map();
  if (!existsSync(UTILITIES)) return { utilities: [], urls };
  const src = readFileSync(UTILITIES, "utf8");
  const re = /slug:\s*"([a-z0-9-]+)"/g;
  const marks = [];
  let m;
  while ((m = re.exec(src))) marks.push({ code: m[1].toUpperCase(), idx: m.index });
  if (!marks.length) marks.push({ code: "UTILITY", idx: 0 }); // no slug field found: single bucket
  for (let i = 0; i < marks.length; i++) {
    const end = i + 1 < marks.length ? marks[i + 1].idx : src.length;
    const chunk = src.slice(marks[i].idx, end);
    const pair = /label:\s*"((?:[^"\\]|\\.)*)"\s*,\s*url:\s*"((?:[^"\\]|\\.)*)"/g;
    let p;
    while ((p = pair.exec(chunk))) {
      const label = decodeEscapes(p[1]);
      const url = decodeEscapes(p[2]);
      if (!urls.has(url)) urls.set(url, { label, states: [] });
      if (!urls.get(url).states.includes(marks[i].code)) urls.get(url).states.push(marks[i].code);
    }
  }
  if (!urls.size) {
    console.error(
      `WARNING: ${UTILITIES} exists but 0 label/url source pairs were parsed — its structure differs from incentives.ts. Utility sources are NOT being watched. Fix the parser before trusting a "clean" run.`
    );
  }
  return { utilities: marks.map((x) => x.code), urls };
}

/* ------------------------------------------------------------------ */
/* fetching + fingerprinting                                           */
/* ------------------------------------------------------------------ */

function htmlToText(html) {
  let s = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<[^>]+>/g, " ");
  s = s
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&ndash;/gi, "\u2013")
    .replace(/&mdash;/gi, "\u2014")
    .replace(/&#(\d+);/g, (_, d) => String.fromCharCode(+d));
  return s.replace(/\s+/g, " ").trim();
}

function extractDollars(text) {
  // Must end on a digit. [\d,] alone swallowed a trailing separator, so
  // "$400–$1,200, OPPD" yielded "$1,200," — a stored figure that differs from
  // the same figure written without the comma, and so diffs as a change.
  const raw = text.match(/\$\s?\d(?:[\d,]{0,13}\d)?(?:\.\d\d)?/g) || [];
  const set = new Set(raw.map((d) => d.replace(/\s+/g, "")));
  return [...set].sort((a, b) => {
    const na = parseFloat(a.replace(/[$,]/g, ""));
    const nb = parseFloat(b.replace(/[$,]/g, ""));
    return na - nb;
  }).slice(0, 300);
}

// A stored figure ending on a separator is an artifact of the pre-fix
// extractDollars, not something a page said.
const TRAILING_SEP = /[,.]+$/;

// PURE. Strings in, strings out — no I/O, no clock, no network, no argument
// it could not have been handed. That purity is the whole licence for
// `accept --renormalize` to write the baseline (CLAUDE.md 6): a function that
// cannot observe the world cannot adopt a change in it. Dedupe and sort must
// mirror extractDollars exactly, or the next fetch diffs against a shape this
// never produces.
function renormalizeDollarList(list) {
  const mapped = (list || []).map((d) => d.replace(TRAILING_SEP, ""));
  return [...new Set(mapped)].sort((a, b) => {
    const na = parseFloat(a.replace(/[$,]/g, ""));
    const nb = parseFloat(b.replace(/[$,]/g, ""));
    return na - nb;
  });
}

// HELD from renormalize, deliberately. TWO KINDS OF HOLD, and they do not lift
// together — clearing all three at once is the mistake this comment exists to
// prevent.
//
// KIND 1 — EXTRACTOR (IA, ME). An open question about what the figure even is.
// These carry fragments — "$2," "$5," "$10," — not whole figures with a stray
// separator. Stripping the comma yields "$2", a clean string that may still be
// the wrong number, and a plausible-looking wrong figure outranks an obviously
// broken one as a hazard. Two mechanisms fit and the stored fingerprint does not
// separate them: a literal list ("$2, $5, $10", already correct) or a split
// thousands separator ("$2,<tag>500" -> "$2, 500", really $2,500). Lifts only
// when someone reads the page and settles which.
//
// KIND 2 — TEMPORARY, PENDING ADJUDICATION (KS). Nothing is wrong with the
// extraction here; the comma artifact is ordinary. The entry is held because it
// also carries a REAL unadjudicated change — `applications open` went 2 -> 0 as
// of the 2026-09-07 17:38 check run — and renormalizing would tidy the artifact
// on an entry that should stay visibly dirty until that keyword shift is read.
// Lifts as soon as KS is adjudicated. No question about the extractor is
// involved, so it must not wait on KIND 1.
const RENORMALIZE_HOLD = [
  ["cityofames.org", "IA (extractor): $2, $5, $10 are fragments or list items, not $2,500-style figures with a stray comma"],
  ["efficiencymaine.com/home-energy-loans", "ME (extractor): $10, may be a truncated $10,000 or a list item"],
  ["kshousingcorp.org/weatherization-assistance", "KS (temporary, pending adjudication): real change on this entry — applications open 2 -> 0 at the 2026-09-07 17:38 check. Keep it visibly dirty until that is read; lift this hold once it is."],
];

function keywordCounts(text) {
  const t = text.toLowerCase();
  const out = {};
  for (const k of KEYWORDS) {
    const scope = KEYWORD_SCOPE[k];
    let n = 0, i = 0;
    while ((i = t.indexOf(k, i)) !== -1) {
      if (!scope) {
        n++;
      } else {
        const ctx = t.slice(Math.max(0, i - scope.window), i + k.length + scope.window);
        if (scope.near.test(ctx)) n++;
      }
      i += k.length;
    }
    if (n) out[k] = n;
  }
  return out;
}

const sha = (buf) => createHash("sha256").update(buf).digest("hex").slice(0, 16);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchSnapshot(url, meta) {
  const attempt = async () => {
    const ac = new AbortController();
    const t = setTimeout(() => ac.abort(), TIMEOUT_MS);
    try {
      const res = await fetch(url, {
        signal: ac.signal,
        redirect: "follow",
        headers: {
          "user-agent": UA,
          accept: "text/html,application/xhtml+xml,application/pdf,*/*;q=0.8",
          "accept-language": "en-US,en;q=0.9",
        },
      });
      const buf = Buffer.from(await res.arrayBuffer());
      const ct = (res.headers.get("content-type") || "").toLowerCase();
      const finalUrl = res.url || url;
      const base = {
        url, finalUrl, label: meta.label, states: meta.states,
        httpStatus: res.status, fetchedAt: new Date().toISOString(), length: buf.length,
      };
      if (registrableHost(finalUrl) !== registrableHost(url)) {
        // Bot wall / interstitial host. Classify as FETCH failure so it is
        // never diffed and never counts as "unchanged" (MN lesson, 7/24).
        let fh = finalUrl; try { fh = new URL(finalUrl).host; } catch {}
        return { ...base, error: `off-domain redirect -> ${fh} (bot wall?)` };
      }
      if (!res.ok) return { ...base, error: `HTTP ${res.status}` };
      if (ct.includes("pdf") || /\.pdf(\?|$)/i.test(finalUrl)) {
        return { ...base, kind: "pdf", bytesHash: sha(buf) };
      }
      const text = htmlToText(buf.toString("utf8"));
      if (isWallText(text)) {
        // Same-domain interstitial: content is NOT the target page. Classify
        // as fetch failure so it is never baselined-as-content or diffed.
        return { ...base, error: `same-domain bot wall (interstitial text, ${text.length} chars)` };
      }
      return {
        ...base, kind: "html", textHash: sha(text),
        dollars: extractDollars(text), keywords: keywordCounts(text),
      };
    } catch (e) {
      return {
        url, finalUrl: url, label: meta.label, states: meta.states,
        fetchedAt: new Date().toISOString(),
        error: e.name === "AbortError" ? "timeout" : String(e.message || e).slice(0, 120),
      };
    } finally {
      clearTimeout(t);
    }
  };
  let snap = await attempt();
  if (snap.error) { await sleep(1500); snap = await attempt(); } // one retry
  return snap;
}

async function pool(items, n, fn, label) {
  const out = new Array(items.length);
  let i = 0, done = 0;
  const workers = Array.from({ length: n }, async () => {
    while (i < items.length) {
      const idx = i++;
      await sleep(100 + Math.random() * 200); // politeness jitter
      out[idx] = await fn(items[idx]);
      done++;
      if (done % 25 === 0) process.stderr.write(`  ${label}: ${done}/${items.length}\n`);
    }
  });
  await Promise.all(workers);
  return out;
}

/* ------------------------------------------------------------------ */
/* diff engine                                                          */
/* ------------------------------------------------------------------ */

function pathOf(u) {
  try { const x = new URL(u); return x.host + x.pathname.replace(/\/+$/, ""); }
  catch { return u; }
}

function diffEntry(base, cur) {
  const notes = [];
  let level = "UNCHANGED";
  const bump = (l) => {
    const rank = { UNCHANGED: 0, LOW: 1, HIGH: 2, FETCH: 2 };
    if (rank[l] > rank[level]) level = l;
  };

  if (base.error && cur.error) { bump("FETCH"); notes.push(`still failing (${cur.error})`); return { level, notes }; }
  if (!base.error && cur.error) { bump("FETCH"); notes.push(`NEW fetch failure: ${cur.error} (was OK in baseline)`); return { level, notes }; }
  if (base.error && !cur.error) { bump("LOW"); notes.push(`recovered (baseline had: ${base.error}) — consider accept`); }

  if (pathOf(base.finalUrl) !== pathOf(cur.finalUrl)) {
    bump("HIGH");
    notes.push(`redirect target changed: ${pathOf(base.finalUrl)} -> ${pathOf(cur.finalUrl)}`);
  }

  if (cur.kind === "pdf" || base.kind === "pdf") {
    if (base.bytesHash !== cur.bytesHash) { bump("HIGH"); notes.push("PDF bytes changed (document reissued)"); }
    return { level, notes };
  }

  const bD = new Set(base.dollars || []), cD = new Set(cur.dollars || []);
  const added = [...cD].filter((d) => !bD.has(d));
  const removed = [...bD].filter((d) => !cD.has(d));
  if (added.length || removed.length) {
    bump("HIGH");
    if (added.length) notes.push(`dollar figures ADDED: ${added.slice(0, 12).join(", ")}${added.length > 12 ? ` (+${added.length - 12} more)` : ""}`);
    if (removed.length) notes.push(`dollar figures REMOVED: ${removed.slice(0, 12).join(", ")}${removed.length > 12 ? ` (+${removed.length - 12} more)` : ""}`);
  }

  const keys = new Set([...Object.keys(base.keywords || {}), ...Object.keys(cur.keywords || {})]);
  const kd = [];
  for (const k of keys) {
    const a = (base.keywords || {})[k] || 0, b = (cur.keywords || {})[k] || 0;
    if (a !== b) kd.push(`${k}: ${a}->${b}`);
  }
  if (kd.length) { bump("HIGH"); notes.push(`status keywords shifted: ${kd.join("; ")}`); }

  if (level === "UNCHANGED" && base.textHash !== cur.textHash) {
    bump("LOW"); notes.push("text drift only (no dollar/keyword change)");
  }
  return { level, notes };
}


/* ------------------------------------------------------------------ */
/* cross-page status vocabulary (verify check 7)                        */
/* ------------------------------------------------------------------ */

// Closed vocabulary. Two polarities; FUTURE and HEDGED are separate classes
// so "when HEAR launches" never reads as "launched" and "expected Fall 2026"
// never reads as an assertion either way.
const STATUS_AVAILABLE = [
  "is open", "are open", "now open", "applications open", "accepting applications",
  "is live", "are live", "live statewide", "is active", "are active", "launched",
  "available now", "currently available", "remains open", "still open", "in effect",
];
const STATUS_UNAVAILABLE = [
  "not launched", "not yet launched", "pending", "paused", "on pause", "closed",
  "declined", "opted out", "rejected", "exhausted", "fully reserved", "not available",
  "suspended", "frozen", "unlaunched", "awaits", "on hold", "not accepting", "has not opened",
];
const STATUS_NEG = /\b(not|no|never|cannot|without|yet to)\b|n't\b/i;
const STATUS_FUTURE = /\b(will|would|could|when|once|if|plans? to|expects? to|set to|upcoming)\b/i;
const STATUS_HEDGE = /\b(unclear|expected|anticipated|no confirmed date|not yet confirmed|targets?|may|likely|should)\b/i;

// Clause boundary, searching LEFT from a match. A fixed character window both
// over-reaches (crossing into a neighbouring clause) and under-reaches (missing
// a negator further left in the same clause). "…did not happen and it now awaits"
// put "not" 41 chars from "awaits" across an "and", which flipped the polarity
// and produced a false OR finding. Boundaries: , ; : ( ) dash, or a coordinating
// /subordinating conjunction, or the start of the sentence. "yet" is deliberately
// NOT a boundary: "not yet launched" would put the break between the negator and
// the phrase, making "not" unreachable and inverting every not-yet-launched claim.
const CLAUSE_BREAK = /[,;:()\u2013\u2014]|\b(and|but|or|nor|while|whereas|though|although|because|since|so|then)\b/gi;
function clauseBefore(text, idx) {
  let start = 0;
  CLAUSE_BREAK.lastIndex = 0;
  let m;
  while ((m = CLAUSE_BREAK.exec(text)) && m.index < idx) start = m.index + m[0].length;
  return text.slice(start, idx);
}

// Sentence split that does not break on abbreviations. "awaits U.S. DOE approval"
// was being cut after "U.S.", truncating the clause the negation rule then read.
const ABBREV_SENTINEL = "\u0001";
function splitSentences(text) {
  const t = text
    .replace(/\b(?:[A-Za-z]\.){2,}/g, (s) => s.split(".").join(ABBREV_SENTINEL))
    .replace(/\b(Inc|Corp|Co|Ltd|St|Mt|Dr|No|Est|Sr|Jr|vs|approx|etc|Sec|Fig)\./g, (_, w) => w + ABBREV_SENTINEL)
    .replace(/\b(\d+)\./g, (_, d) => d + ABBREV_SENTINEL);
  return t.split(/(?<=[.;])\s+/).map((s) => s.split(ABBREV_SENTINEL).join("."));
}

const statusProgram = (s) =>
  /\bHEAR\b|HEEHRA?|Home Electrification/i.test(s) ? "HEAR"
    : /\bHOMES\b|\bHER\b|Home Efficiency Rebates/i.test(s) ? "HOMES" : "GENERAL";

// Word-boundary matched, so "unlaunched" does not also register the substring
// "launched" with the opposite polarity.
function statusPhrases(text) {
  const out = [];
  for (const [list, base] of [[STATUS_AVAILABLE, "AVAILABLE"], [STATUS_UNAVAILABLE, "UNAVAILABLE"]]) {
    for (const p of list) {
      const re = new RegExp("\\b" + p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\b", "gi");
      let m;
      while ((m = re.exec(text))) {
        const clause = clauseBefore(text, m.index);
        const ahead = text.slice(m.index, m.index + 60);
        let cls = base;
        if (STATUS_NEG.test(clause)) cls = base === "AVAILABLE" ? "UNAVAILABLE" : "AVAILABLE";
        if (STATUS_FUTURE.test(clause)) cls = "FUTURE";
        else if (STATUS_HEDGE.test(clause) || STATUS_HEDGE.test(ahead)) cls = "HEDGED";
        out.push({ phrase: p, cls, program: statusProgram(text) });
      }
    }
  }
  return out;
}

// SCOPE — recorded decision, not an oversight. Only these two files are scanned.
// when-not-to, cost and vs-furnace were measured on 2026-09-07: between them they
// carry 16 status phrases and attribute ZERO to any state, because their status
// language is about no state in particular ("if your state has approved HEAR
// funding but hasn't launched"). Scanning them adds noise and no coverage.
// KNOWN COVERAGE GAP — the program bucket. statusProgram() reads one sentence at
// a time, so a tier note naming no program buckets GENERAL while the state's
// summary sentence naming HEAR/HOMES buckets HEAR, and the two are never
// compared. FL is the live example: the note "$346M IRA unlaunched." is GENERAL,
// its summary sentence is HEAR, so a real disagreement between them passes
// unseen. Tier notes rarely name a program, so this is the common shape, not an
// edge case. Stated, not queued: widening the bucket would pair HEAR claims with
// utility-rebate claims, which is a worse error than the one it fixes.
const CROSSPAGE_FILES = ["rebates-by-state", "stacking-rebates"];

/* ------------------------------------------------------------------ */
/* report                                                               */
/* ------------------------------------------------------------------ */

function writeReport(baseline, latest, ignoreSet, humanVerify = [], accepted = {}) {
  const rows = []; // {states, tier, label, url, level, notes}
  const mutedHollow = []; // muted AND watching nothing — see hollowReason()
  const baseMap = baseline.entries, curMap = latest.entries;
  let unchanged = 0, ignored = 0;

  for (const url of Object.keys(curMap)) {
    if (ignoreSet.has(url)) {
      ignored++;
      // Muting is correct for a URL that fetches and carries figures — it drops
      // known noise. When the muted URL is hollow, this `continue` is precisely
      // why it has never reported: diffEntry would have returned FETCH, and the
      // NO SIGNAL walk skips muted URLs too, so nothing downstream sees it.
      const hollow = hollowReason(curMap[url]);
      if (hollow) {
        const e = curMap[url];
        mutedHollow.push({
          url, states: e.states || [], label: e.label, length: e.length,
          reason: hollow, declared: accepted[url] || null,
        });
      }
      continue;
    }
    const cur = curMap[url];
    const base = baseMap[url];
    if (!base) {
      rows.push({ ...pick(cur), level: "NEW", notes: ["not in baseline (source added to incentives.ts/utilities.ts) — run accept to adopt"] });
      continue;
    }
    const { level, notes } = diffEntry(base, cur);
    if (level === "UNCHANGED") { unchanged++; continue; }
    rows.push({ ...pick(cur), level, notes });
  }
  for (const url of Object.keys(baseMap)) {
    if (!curMap[url] && !ignoreSet.has(url) && !isHumanVerify(url)) {
      rows.push({ ...pick(baseMap[url]), level: "REMOVED", notes: ["in baseline but no longer in incentives.ts/utilities.ts"] });
    }
  }

  function pick(e) {
    const shared = isShared(e.states);
    return { states: e.states, tier: shared ? 9 : tierOf(e.states), shared, label: e.label, url: e.url };
  }

  const order = { HIGH: 0, FETCH: 1, NEW: 2, REMOVED: 3, LOW: 4 };
  rows.sort((a, b) => order[a.level] - order[b.level] || a.tier - b.tier || a.states[0].localeCompare(b.states[0]));

  const statesToVerify = [...new Set(rows.filter((r) => r.level === "HIGH" && !r.shared).flatMap((r) => r.states))];

  let md = `# Source Diff Report\n\nGenerated: ${latest.generatedAt}\nBaseline: ${baseline.generatedAt}\n`;
  // NO-SIGNAL: walked from curMap independently, the way baseMap is walked for
  // REMOVED above. These entries are UNCHANGED by definition, so they never
  // enter `rows` — that they cannot surface through the diff is the point.
  const noSignal = [];
  const reasonTally = {};
  const malformedAccept = [];
  const staleAccept = [];
  let acceptedCount = 0;
  for (const url of Object.keys(curMap)) {
    if (ignoreSet.has(url)) continue;
    const e = curMap[url];
    if (!hasNoSignal(e)) continue;
    const a = accepted[url];
    if (a && NOSIGNAL_REASONS.includes(a.reason)) {
      acceptedCount++;
      reasonTally[a.reason] = (reasonTally[a.reason] || 0) + 1;
      continue;
    }
    if (a) malformedAccept.push(`${url} (reason ${JSON.stringify(a.reason)} not one of ${NOSIGNAL_REASONS.join("/")})`);
    noSignal.push({
      url, states: e.states || [], label: e.label, length: e.length,
      textHash: e.textHash, empty: extractedNothing(e),
    });
  }
  // Acceptances that no longer apply. Without this the file rots silently and
  // the header's "(N accepted)" becomes a number nobody can account for.
  for (const url of Object.keys(accepted)) {
    const c = classifyAcceptance(curMap[url]);
    if (!c) continue;
    // A masking acceptance is a warning, not a removal candidate — mark it so
    // it cannot be skimmed as one.
    staleAccept.push(`${c.kind === "masking" ? "**[MASKING]** " : ""}${url} — ${c.message}`);
  }
  // Version-encoded urls, walked independently like the NO SIGNAL walk above.
  // Scoped to entries that currently report as healthy: a muted one is already in
  // MUTED AND HOLLOW and an erroring one already reports FETCH, so listing them
  // here would double-count the visible cases and bury the invisible ones.
  const versioned = [];
  for (const url of Object.keys(curMap)) {
    if (ignoreSet.has(url)) continue;
    const e = curMap[url];
    if (!e || e.error) continue;
    const marker = versionEncodedUrl(url);
    if (!marker) continue;
    // Triage inputs. Same-state corroboration answers "is this state blind?";
    // same-domain answers "could a landing page here survive the version bump?".
    // Shared/federal sources are excluded from the state count — the IRS FAQ is
    // not corroboration for a state program's figures.
    const states = e.states || [];
    const corroborators = {};
    for (const st of states) {
      corroborators[st] = Object.keys(curMap).filter((u) => {
        const x = curMap[u];
        if (u === url || !x || x.error || ignoreSet.has(u)) return false;
        if (!(x.states || []).includes(st)) return false;
        if (isShared(x.states || [])) return false;
        if (versionEncodedUrl(u)) return false;
        return (x.dollars || []).length > 0;
      }).length;
    }
    const sameDomain = Object.keys(curMap).filter((u) =>
      u !== url && !ignoreSet.has(u) && curMap[u] && !curMap[u].error &&
      registrableHost(u) === registrableHost(url)).length;
    versioned.push({ url, states, label: e.label, kind: e.kind, marker, corroborators, sameDomain });
  }
  versioned.sort((a, b) =>
    (a.kind === "pdf" ? 0 : 1) - (b.kind === "pdf" ? 0 : 1) ||
    a.states.join(",").localeCompare(b.states.join(",")));

  noSignal.sort((a, b) =>
    (a.empty === b.empty ? 0 : a.empty ? -1 : 1) ||
    a.states.join(",").localeCompare(b.states.join(",")) ||
    (a.length || 0) - (b.length || 0));

  md += `URLs checked: ${Object.keys(curMap).length} | unchanged: ${unchanged} | flagged: ${rows.length} | muted (ignore list): ${ignored} (${mutedHollow.length} of them hollow) | no-signal: ${noSignal.length} (${acceptedCount} accepted) | version-encoded urls: ${versioned.length}\n\n`;
  md += `## Triage: states to promote to manual verification\n\n${statesToVerify.length ? statesToVerify.join(", ") : "(none)"}\n\n`;
  for (const lvl of ["HIGH", "FETCH", "NEW", "REMOVED", "LOW"]) {
    const grp = rows.filter((r) => r.level === lvl);
    if (!grp.length) continue;
    md += `## ${lvl} (${grp.length})\n\n`;
    for (const r of grp) {
      const tag = r.shared ? "SHARED/FEDERAL" : `${r.states.join(",")} (Tier ${r.tier})`;
      md += `- **[${tag}]** ${r.label}\n  ${r.url}\n`;
      for (const n of r.notes) md += `  - ${n}\n`;
    }
    md += "\n";
  }
  if (humanVerify.length) {
    md += `## HUMAN VERIFY (${humanVerify.length}) — JS-walled, never fetched\n\n`;
    md += `Automated fetches false-miss on these hosts. Check each in a browser on the regular cadence; a quiet report does NOT cover them.\n\n`;
    for (const hv of humanVerify) {
      md += `- **[${hv.states.join(",")}]** ${hv.label}\n  ${hv.url}\n`;
    }
    md += "\n";
  }
  if (mutedHollow.length) {
    mutedHollow.sort((a, b) =>
      a.reason.kind.localeCompare(b.reason.kind) ||
      a.states.join(",").localeCompare(b.states.join(",")));
    const errN = mutedHollow.filter((m) => m.reason.kind === "fetch-error").length;
    md += `## MUTED AND HOLLOW (${mutedHollow.length}) — suppressed, and watching nothing\n\n`;
    md += `Every URL below is in scripts/source-ignore.json, so the diff skips it. That is the right`;
    md += ` outcome for a muted URL that fetches and carries figures — the mute drops known noise.`;
    md += ` It is the wrong outcome here: these are **also hollow**, so the mute is hiding the only`;
    md += ` row that would have reported them. A muted URL that 403s on every run produces no output`;
    md += ` at all and is indistinguishable, in the counts above, from a healthy quiet watch.\n\n`;
    md += `${errN} fetch-error, ${mutedHollow.length - errN} zero-signal. Un-muting any of these surfaces`;
    md += ` it as FETCH or NO SIGNAL on the next run. Nothing here changes the baseline, and like`;
    md += ` NO SIGNAL this is a standing condition, not an event: it does not affect the exit code.\n\n`;
    for (const m of mutedHollow) {
      md += `- **[${m.states.join(",") || "?"}]** ${m.label || "(no label)"}\n  ${m.url}\n`;
      md += `  - muted: yes (scripts/source-ignore.json)\n`;
      md += `  - hollow: ${m.reason.kind} — ${m.reason.detail}\n`;
      md += `  - ${m.length ?? "?"} bytes\n`;
      if (m.declared) {
        md += `  - declared in source-nosignal-accepted.json: ${m.declared.reason} — ${m.declared.note}\n`;
      }
    }
    md += "\n";
  }
  if (versioned.length) {
    const docs = versioned.filter((v) => v.kind === "pdf");
    md += `## VERSION-ENCODED URLS (${versioned.length}) — a reissue would land elsewhere\n\n`;
    md += `The url itself encodes a version — an upload date, a year, or an opaque media id.`;
    md += ` If the publisher issues a revision at a NEW url, this watch keeps returning 200 with`;
    md += ` an unchanged hash and reports **healthy forever**, while the document it points at`;
    md += ` quietly becomes a fossil. No other section can see this: in the diff a never-changed`;
    md += ` document and a superseded one are identical, and both count as \`unchanged\`.\n\n`;
    md += `${docs.length} document(s), ${versioned.length - docs.length} dated permalink(s). A dated news`;
    md += ` permalink is normally immutable by design and is the expected false positive here; a`;
    md += ` rebate schedule at a dated path is the real risk. Muted and erroring urls are omitted —`;
    md += ` they already report in MUTED AND HOLLOW and FETCH. Standing condition, not an event:`;
    md += ` it does not affect the exit code.\n\n`;
    for (const v of versioned) {
      const corr = v.states.map((s) => `${s}:${v.corroborators[s]}`).join(" ");
      md += `- **[${v.states.join(",") || "?"}]** ${v.label || "(no label)"}\n  ${v.url}\n`;
      md += `  - marker: ${v.marker} (${v.kind === "pdf" ? "document" : "dated permalink"})\n`;
      md += `  - other figure-bearing sources on a stable path, per state: ${corr || "(none)"}\n`;
      md += `  - other live sources on the same domain: ${v.sameDomain}\n`;
    }
    md += "\n";
  }
  if (noSignal.length || acceptedCount || staleAccept.length || malformedAccept.length) {
    md += `## NO SIGNAL (${noSignal.length}) — fetched fine, but cannot flag\n\n`;
    md += `These returned content, but their fingerprint has no dollar figures and no status keywords. The only thing left to compare is \`textHash\`, which on such a page tracks boilerplate — so UNCHANGED here means the shell is unchanged and says nothing about the figures. They can never reach HIGH. **[EMPTY]** marks entries where text extraction returned nothing at all; those did not land on the target page.\n\n`;
    md += `Accepted and suppressed: ${acceptedCount}`;
    if (Object.keys(reasonTally).length) {
      md += ` (${NOSIGNAL_REASONS.filter((r) => reasonTally[r]).map((r) => `${reasonTally[r]} ${r}`).join(", ")})`;
    }
    md += ` — see scripts/source-nosignal-accepted.json. A \`js-rendered\` acceptance silences the row; it does not close the gap.\n\n`;
    for (const n of noSignal) {
      md += `- ${n.empty ? "**[EMPTY]** " : ""}**[${n.states.join(",")}]** ${n.label || "(no label)"}\n  ${n.url}\n  - ${n.length} bytes, textHash ${n.textHash}\n`;
    }
    if (staleAccept.length) {
      md += `\n### Stale acceptances (${staleAccept.length})\n\n`;
      for (const s of staleAccept) md += `- ${s}\n`;
    }
    if (malformedAccept.length) {
      md += `\n### Malformed acceptances (${malformedAccept.length}) — NOT suppressed\n\n`;
      for (const s of malformedAccept) md += `- ${s}\n`;
    }
    md += "\n";
  }
  md += `---\nWorkflow: verify HIGH states at full checklist depth -> update pages -> \`node scripts/check-sources.mjs accept <STATE>\` -> commit source-baseline.json.\nDate-stamp rule: a flag here is NOT verification. Bump lastVerified only after real source verification.\nNO SIGNAL is a standing condition, not an event: it does not affect the exit code.\n`;
  writeFileSync(REPORT_F, md);
  return { rows, statesToVerify, unchanged, noSignal, acceptedCount, reasonTally, staleAccept, malformedAccept, mutedHollow, versioned };
}

/* ------------------------------------------------------------------ */
/* modes                                                                */
/* ------------------------------------------------------------------ */

function loadJson(f, fallback) {
  // BOM strip: PS 5.1 Set-Content writes UTF-8 with BOM by default, which
  // JSON.parse rejects (crashed the 7/24 run on source-ignore.json).
  return existsSync(f) ? JSON.parse(readFileSync(f, "utf8").replace(/^\uFEFF/, "")) : fallback;
}

function filterUrls(urls, onlyArg) {
  if (!onlyArg) return new Map(urls); // copy: caller deletes human-verify entries from the result
  const want = onlyArg.split(",").map((s) => s.trim().toUpperCase()).filter(Boolean);
  const out = new Map();
  for (const [u, meta] of urls) if (meta.states.some((s) => want.includes(s))) out.set(u, meta);
  return out;
}

async function snapshotAll(urls) {
  const items = [...urls.entries()];
  const snaps = await pool(items, CONCURRENCY, ([u, meta]) => fetchSnapshot(u, meta), "fetched");
  const entries = {};
  for (const s of snaps) entries[s.url] = s;
  return { generatedAt: new Date().toISOString(), entries };
}

/* ------------------------------------------------------------------ */
/* accept --renormalize                                                 */
/* ------------------------------------------------------------------ */
//
// Rewrites stored dollar strings to what the corrected extractDollars would
// produce. Sanctioned baseline write (CLAUDE.md 6), on one ground only: it
// never observes the world. Every input is a string already in the baseline,
// so it cannot absorb a real change — which is the thing an accept is
// dangerous for. It is not a substitute for accept and adopts nothing.
function acceptRenormalize(apply) {
  // STRUCTURAL no-network guard, not an intention. fetchSnapshot() is the only
  // code in this file that reaches the network, and it calls the global fetch.
  // Poisoning that binding for the duration of this call means the path CANNOT
  // fetch: an accidental call throws loudly instead of quietly succeeding.
  const savedFetch = globalThis.fetch;
  globalThis.fetch = () => { throw new Error("accept --renormalize must not fetch: it rewrites stored strings only"); };
  try {
    const baseline = loadJson(BASELINE_F, null);
    if (!baseline || !baseline.entries) { console.error(`No baseline at ${BASELINE_F}. Run: baseline`); process.exitCode = 2; return; }

    const held = [], changes = [];
    for (const [u, e] of Object.entries(baseline.entries)) {
      if (!Array.isArray(e.dollars) || !e.dollars.some((d) => TRAILING_SEP.test(d))) continue;
      const states = (e.states || []).join("/");
      const rewritten = e.dollars.filter((d) => TRAILING_SEP.test(d));
      const hold = RENORMALIZE_HOLD.find(([frag]) => u.includes(frag));
      if (hold) { held.push({ u, states, rewritten, why: hold[1] }); continue; }
      const after = renormalizeDollarList(e.dollars);
      changes.push({ u, e, states, before: e.dollars.slice(), after, rewritten,
        collided: after.length !== e.dollars.length });
    }

    console.log(`accept --renormalize \u2014 ${apply ? "APPLY" : "DRY RUN (add --apply to write)"}`);
    console.log(`baseline: ${BASELINE_F}\n`);

    for (const ch of changes) {
      console.log(`  ${ch.states.padEnd(6)} ${ch.u}`);
      console.log(`         before ${JSON.stringify(ch.rewritten)}`);
      console.log(`         after  ${JSON.stringify(ch.rewritten.map((d) => d.replace(TRAILING_SEP, "")))}`);
      console.log(`         figures ${ch.before.length} -> ${ch.after.length}`);
      // A count that drops is the one outcome that looks like data loss, so it
      // is stated here rather than left to be inferred from the numbers.
      if (ch.collided) {
        const lost = ch.before.length - ch.after.length;
        console.log(`         COLLISION: the cleaned form was ALREADY stored, so the set dedupes and the count drops by ${lost}. No figure is lost \u2014 the value survives as the clean form.`);
      }
    }
    if (!changes.length) console.log("  nothing to renormalize");

    if (held.length) {
      console.log(`\n  HELD \u2014 not renormalized, by decision:`);
      for (const h of held) {
        console.log(`    ${h.states.padEnd(6)} ${h.u}`);
        console.log(`           ${JSON.stringify(h.rewritten)} \u2014 ${h.why}`);
      }
    }

    const figs = changes.reduce((n, ch) => n + ch.rewritten.length, 0);
    const collisions = changes.filter((ch) => ch.collided);
    console.log(`\n  ${changes.length} entr(y/ies), ${figs} figure(s) rewritten; ${collisions.length} with a dedupe collision; ${held.length} held.`);
    if (collisions.length) console.log(`  collisions: ${collisions.map((ch) => ch.states).join(", ")}`);

    if (!apply) { console.log("\n  DRY RUN \u2014 baseline not written. Re-run with --apply."); return; }

    for (const ch of changes) ch.e.dollars = ch.after;
    baseline.generatedAt = new Date().toISOString();
    writeFileSync(BASELINE_F, JSON.stringify(baseline, null, 1));
    console.log("\n  Baseline written.");
    console.log("  Commit it: git add scripts/source-baseline.json");
  } finally {
    globalThis.fetch = savedFetch;
  }
}

async function main() {
  const [, , mode = "check", ...rest] = process.argv;
  const onlyIx = rest.indexOf("--only");
  const only = onlyIx !== -1 ? rest[onlyIx + 1] : null;

  if (mode === "selftest") return selftest();
  // Before parseIncentives(): verify needs none of the URL machinery, and
  // parseIncentives throws below MIN_STATES — an audit tool must not die for
  // reasons unrelated to what it audits.
  if (mode === "verify") return verify(rest);

  const { states, urls: stateUrls } = parseIncentives();
  const { utilities, urls: utilUrls } = parseUtilities();
  const allUrls = new Map(stateUrls);
  for (const [u, meta] of utilUrls) {
    if (!allUrls.has(u)) allUrls.set(u, { ...meta, states: [...meta.states] });
    else for (const c of meta.states) if (!allUrls.get(u).states.includes(c)) allUrls.get(u).states.push(c);
  }
  // Monitor-only targets (never rendered on pages; survive prune).
  for (const x of EXTRA_TARGETS) {
    if (!allUrls.has(x.url)) allUrls.set(x.url, { label: x.label, states: [...x.states] });
    else for (const c of x.states) if (!allUrls.get(x.url).states.includes(c)) allUrls.get(x.url).states.push(c);
  }
  // Extra state tags (pages serving more states than the data files reference).
  for (const [u, extra] of Object.entries(EXTRA_STATE_TAGS)) {
    if (!allUrls.has(u)) continue; // URL left the data files: tag is moot, not an error
    for (const c of extra) if (!allUrls.get(u).states.includes(c)) allUrls.get(u).states.push(c);
  }
  const urls = filterUrls(allUrls, only);
  // Partition out JS-walled URLs: never fetched, always reported for manual checks.
  const humanVerify = [...urls.entries()]
    .filter(([u]) => isHumanVerify(u))
    .map(([url, meta]) => ({ url, label: meta.label, states: meta.states }));
  for (const hv of humanVerify) urls.delete(hv.url);

  if (mode === "parse") {
    console.log(`states: ${states.length} | unique URLs: ${allUrls.size}`);
    const perState = {};
    for (const meta of allUrls.values()) for (const s of meta.states) perState[s] = (perState[s] || 0) + 1;
    console.log(states.map((s) => `${s}:${perState[s] || 0}`).join(" "));
    const shared = [...allUrls.entries()].filter(([, m]) => isShared(m.states));
    console.log(`shared URLs (>${SHARED_STATE_MAX} states): ${shared.length}`);
    for (const [u, m] of shared) console.log(`  [${m.states.length} states] ${u}`);
    console.log(`utilities (from utilities.ts): ${utilities.length ? utilities.join(", ") : "(none)"} | utility URLs: ${utilUrls.size}`);
    for (const [u, m] of utilUrls) {
      console.log(`  [${m.states.join(",")}]${isHumanVerify(u) ? " [HUMAN VERIFY]" : ""} ${m.label} — ${u}`);
    }
    if (humanVerify.length) {
      console.log(`human-verify URLs (never fetched): ${humanVerify.length}`);
    }
    return;
  }

  if (mode === "baseline") {
    // A targeted baseline holds back shared/federal URLs for the same reason
    // `accept <STATE>` skips them: re-snapshotting a page many states cite, on
    // the strength of one state's work, removes a tripwire without producing a
    // wrong number. Partitioned out BEFORE the fetch (same shape as the
    // humanVerify partition above), so both write paths below — merge into a
    // prior baseline, and first-write when none exists — are covered, and the
    // URLs are never even requested. A full `baseline` with no --only stays a
    // deliberate all-in snapshot and keeps them.
    const sharedHeld = only ? [...urls].filter(([, m]) => isShared(m.states)).map(([u]) => u) : [];
    for (const u of sharedHeld) urls.delete(u);
    console.log(`Snapshotting ${urls.size} URLs (concurrency ${CONCURRENCY})...`);
    const snap = await snapshotAll(urls);
    const prior = loadJson(BASELINE_F, null);
    if (prior && only) {
      // partial baseline: merge into existing
      for (const [u, e] of Object.entries(snap.entries)) prior.entries[u] = e;
      prior.generatedAt = snap.generatedAt;
      writeFileSync(BASELINE_F, JSON.stringify(prior, null, 1));
    } else {
      writeFileSync(BASELINE_F, JSON.stringify(snap, null, 1));
    }
    const errs = Object.values(snap.entries).filter((e) => e.error);
    console.log(`Baseline written: ${BASELINE_F}`);
    if (humanVerify.length) console.log(`Excluded ${humanVerify.length} HUMAN VERIFY URL(s) (JS-walled) — these are never baselined; browser-check them on schedule.`);
    if (sharedHeld.length) console.log(`Skipped ${sharedHeld.length} shared/federal URL(s) (cited by >${SHARED_STATE_MAX} states) — a targeted baseline never re-snapshots these; adopt via: check -> accept SHARED`);
    console.log(`OK: ${Object.keys(snap.entries).length - errs.length} | errors: ${errs.length}`);
    for (const e of errs) console.log(`  ERROR [${e.states.join(",")}] ${e.url} -> ${e.error}`);
    console.log(`\nCommit the baseline: git add scripts/source-baseline.json`);
    if (errs.length) console.log(`403/blocked URLs that persist: add them to scripts/source-ignore.json (an array of URL strings) and verify those manually on schedule.`);
    return;
  }

  if (mode === "check") {
    const baseline = loadJson(BASELINE_F, null);
    if (!baseline) { console.error("No baseline. Run: node scripts/check-sources.mjs baseline"); process.exit(2); }
    console.log(`Checking ${urls.size} URLs against baseline of ${baseline.generatedAt}...`);
    const latest = await snapshotAll(urls);
    writeFileSync(LATEST_F, JSON.stringify(latest, null, 1));
    const ignoreSet = new Set(loadJson(IGNORE_F, []));
    const accepted = loadJson(NOSIGNAL_F, {});
    const { rows, statesToVerify, unchanged, noSignal, acceptedCount, reasonTally, staleAccept, malformedAccept, mutedHollow, versioned } =
      writeReport(baseline, latest, ignoreSet, humanVerify, accepted);
    console.log(`\nReport: ${REPORT_F}`);
    if (humanVerify.length) {
      console.log(`HUMAN VERIFY (JS-walled, browser-check on schedule): ${humanVerify.length}`);
      for (const hv of humanVerify) console.log(`  [${hv.states.join(",")}] ${hv.label} — ${hv.url}`);
    }
    console.log(`unchanged: ${unchanged} | flagged: ${rows.length}`);
    console.log(`HIGH: ${rows.filter((r) => r.level === "HIGH").length} | FETCH: ${rows.filter((r) => r.level === "FETCH").length} | LOW: ${rows.filter((r) => r.level === "LOW").length}`);
    const reasonStr = NOSIGNAL_REASONS.filter((r) => reasonTally[r]).map((r) => `${reasonTally[r]} ${r}`).join(", ");
    console.log(`NO SIGNAL (cannot flag; not counted in exit code): ${noSignal.length} (${acceptedCount} accepted${reasonStr ? " — " + reasonStr : ""})`);
    // Muted AND hollow. Printed here rather than left to the report because check
    // is read from a terminal: a report-only line leaves these as invisible on the
    // console as the mute made them in the diff.
    const hollowErr = mutedHollow.filter((m) => m.reason.kind === "fetch-error").length;
    console.log(`MUTED AND HOLLOW (suppressed, watching nothing; not counted in exit code): ${mutedHollow.length}`);
    if (mutedHollow.length) console.log(`  (${hollowErr} fetch-error, ${mutedHollow.length - hollowErr} zero-signal)`);
    const vDocs = versioned.filter((v) => v.kind === "pdf").length;
    console.log(`VERSION-ENCODED URLS (reissue lands elsewhere; not counted in exit code): ${versioned.length}`);
    if (versioned.length) console.log(`  (${vDocs} document, ${versioned.length - vDocs} dated permalink)`);
    if (staleAccept.length) console.log(`  stale acceptances: ${staleAccept.length} — see report`);
    if (malformedAccept.length) console.log(`  MALFORMED acceptances (not suppressed): ${malformedAccept.length} — see report`);
    console.log(`States to verify: ${statesToVerify.join(", ") || "(none)"}`);
    process.exit(rows.some((r) => r.level === "HIGH" || r.level === "FETCH") ? 1 : 0);
  }

  if (mode === "unbaselined") {
    // No network. Lists fetchable targets that have no baseline entry —
    // these show as NEW every check run and are silently un-watched between
    // runs. (Built for the 404-entries-vs-405-targets gap, 7/24.)
    const baseline = loadJson(BASELINE_F, null);
    if (!baseline) { console.error("No baseline."); process.exit(2); }
    const missing = [...urls.entries()].filter(([u]) => !baseline.entries[u]);
    console.log(`fetchable targets: ${urls.size} | baseline entries: ${Object.keys(baseline.entries).length} | un-baselined: ${missing.length}`);
    for (const [u, m] of missing) console.log(`  [${m.states.join(",")}] ${m.label} — ${u}`);
    if (missing.length) console.log(`\nAdopt after a check run with: accept <STATE>  (or baseline --only <STATE> to snapshot now)`);
    return;
  }

  if (mode === "prune") {
    // Remove baseline entries whose URL is no longer present in
    // incentives.ts/utilities.ts (the REMOVED rows in the report). accept
    // never deletes, so deliberate source swaps leave orphans behind —
    // this is the cleanup. HUMAN VERIFY URLs are excluded from the keep
    // set on purpose: they are never baselined, so any baseline entry on
    // those hosts is itself an orphan. Ignores --only by design: prune is
    // all-or-nothing so the keep set always reflects the full data files.
    const baseline = loadJson(BASELINE_F, null);
    if (!baseline) { console.error("No baseline to prune."); process.exit(2); }
    const keep = new Set([...allUrls.keys()].filter((u) => !isHumanVerify(u)));
    const orphans = Object.keys(baseline.entries).filter((u) => !keep.has(u));
    if (!orphans.length) { console.log("No orphaned baseline entries. Nothing to prune."); return; }
    for (const u of orphans) {
      console.log(`  pruned [${(baseline.entries[u].states || []).join(",")}] ${baseline.entries[u].label || ""} — ${u}`);
      delete baseline.entries[u];
    }
    baseline.generatedAt = new Date().toISOString();
    writeFileSync(BASELINE_F, JSON.stringify(baseline, null, 1));
    console.log(`Pruned ${orphans.length} orphaned entr${orphans.length === 1 ? "y" : "ies"} from baseline.`);
    console.log(`Commit it: git add scripts/source-baseline.json`);
    return;
  }

  if (mode === "accept") {
    // Inside the accept path deliberately, so the baseline write stays under
    // the same rule and the same review habit as every other accept. It takes
    // no target codes and adopts no snapshot: it rewrites stored strings only.
    // Read off `rest` directly, never through the target parser below, which
    // uppercases every token and would turn the flag into a bogus state code.
    if (rest.includes("--renormalize")) return acceptRenormalize(rest.includes("--apply"));

    const baseline = loadJson(BASELINE_F, null);
    const latest = loadJson(LATEST_F, null);
    if (!baseline || !latest) { console.error("Need both baseline and a prior `check` run (source-latest.json)."); process.exit(2); }
    const targets = rest.filter((r) => r !== "--only").map((s) => s.toUpperCase());
    if (!targets.length) { console.error("accept requires target codes: states (NY MA), utility codes (EFFICIENCY-MAINE), SHARED, or all"); process.exit(2); }
    let n = 0, skippedShared = 0;
    for (const [u, e] of Object.entries(latest.entries)) {
      // A shared/federal URL is cited by many states, so verifying one state
      // is no evidence about it — the report already keeps these out of the
      // triage list for that reason. Adopt only when named: `accept SHARED`,
      // or `accept all`.
      const shared = isShared(e.states);
      const named = shared
        ? targets.includes("SHARED")
        : e.states.some((s) => targets.includes(s));
      if (targets.includes("ALL") || named) {
        baseline.entries[u] = e; n++;
      } else if (shared) {
        skippedShared++;
      }
    }
    baseline.generatedAt = new Date().toISOString();
    writeFileSync(BASELINE_F, JSON.stringify(baseline, null, 1));
    console.log(`Accepted ${n} URL snapshots into baseline for: ${targets.join(", ")}`);
    if (skippedShared) {
      console.log(`Skipped ${skippedShared} shared/federal URL(s) (cited by >${SHARED_STATE_MAX} states) — adopt with: accept SHARED`);
    }
    console.log(`Commit it: git add scripts/source-baseline.json`);
    return;
  }

  console.error(`Unknown mode: ${mode}. Modes: parse | baseline | check | accept | prune | unbaselined | selftest | verify`);
  process.exit(2);
}

/* ------------------------------------------------------------------ */
/* verify mode — read-only pre-commit audit                             */
/* ------------------------------------------------------------------ */
//
// READ-ONLY. verify writes no file, stages nothing, commits nothing. It
// shells out only to `git show`, `git diff`, and `npm run build`. The build
// writes .next/, which is inherent to running a build and is gitignored —
// that is the only thing this mode causes to be written.
//
// "Zero dependencies" (see header) still holds: node:child_process is a
// runtime builtin, not an npm package.
//
// NAME: this mode is unrelated to the two other "verify" concepts in this
// file. HUMAN_VERIFY_HOSTS / isHumanVerify() are JS-walled URLs needing a
// browser check; the report's "states to promote to manual verification" is
// scraper triage. `verify` here audits the git working tree before a commit.
//
// KNOWN GAP: date scoping anchors on `stateCode:` blocks, so it covers
// incentives.ts only. utilities.ts keys on `slug:` and is not scoped yet —
// a date change there is reported as unscopeable and FAILS rather than
// passing silently.
//
// NO TRUNCATION anywhere in this mode. A survey that hides a match is worse
// than no survey; that exact failure cost an edit on 2026-09-06, when a
// 160-column-truncated grep hid a $28,000 claim that then shipped unfixed.

// Variadic, case-preserving flag reader. Deliberately NOT the accept-mode
// parser: that one uppercases every token (which would destroy file paths)
// and its .filter(r => r !== "--only") drops the flag but keeps its value.
function flagValues(rest, name) {
  const out = [];
  const i = rest.indexOf(`--${name}`);
  if (i === -1) return out;
  for (let j = i + 1; j < rest.length && !rest[j].startsWith("--"); j++) out.push(rest[j]);
  return out;
}

// Split a figure list on separators that are not thousands separators.
// "$14,000,$28,000" -> ["$14,000","$28,000"];  "14000 28000" -> both.
// Genuinely ambiguous input exists ("14000,280"), which is why the compiled
// pattern for every figure is echoed in the output — never trust a zero.
function splitFigures(raw) {
  return raw.split(/\s+|,(?!\d{3}(?!\d))/).map((f) => f.trim()).filter(Boolean);
}

// "14000" and "$14,000" must both find "$14,000" in a source file: a literal
// grep for 14000 finds ZERO in files that write $14,000, and a mode that
// reports a false zero defeats its own purpose. Digits are regrouped in 3s
// with optional separators. Lookbehind/lookahead stop $14,000 from matching
// inside $114,000 or $14,0001.
function figurePattern(fig) {
  const digits = String(fig).replace(/[^0-9]/g, "");
  if (!digits) return null;
  const parts = [];
  let s = digits;
  while (s.length > 3) { parts.unshift(s.slice(-3)); s = s.slice(0, -3); }
  parts.unshift(s);
  return new RegExp(`(?<![\\d,.])\\$?${parts.join("[,]?")}(?!\\d)`, "g");
}

// { stateCode: { lastVerified, lastUpdated } } — anchored on the state block,
// never on the date string. Four states shared 2026-08-23 on 2026-09-06, so
// matching by date value would have implicated ME/MA/GA alongside NY.
function parseStateDates(src) {
  const out = {};
  const re = /stateCode:\s*"([A-Z]{2})"/g;
  const marks = [];
  let m;
  while ((m = re.exec(src))) marks.push({ code: m[1], idx: m.index });
  for (let i = 0; i < marks.length; i++) {
    const end = i + 1 < marks.length ? marks[i + 1].idx : src.length;
    const chunk = src.slice(marks[i].idx, end);
    const lv = chunk.match(/lastVerified:\s*"(\d{4}-\d{2}-\d{2})"/);
    const lu = chunk.match(/lastUpdated:\s*"(\d{4}-\d{2}-\d{2})"/);
    out[marks[i].code] = { lastVerified: lv && lv[1], lastUpdated: lu && lu[1] };
  }
  return out;
}

function git(args) {
  const r = spawnSync("git", args, { encoding: "utf8" });
  return { ok: r.status === 0, out: r.stdout || "", err: r.stderr || "" };
}

function verify(rest) {
  const wantStates = flagValues(rest, "states").map((s) => s.toUpperCase()).sort();
  const figures = splitFigures(flagValues(rest, "figures").join(" "));
  const files = flagValues(rest, "files"); // case preserved, verbatim
  const results = [];
  const add = (name, kind, pass, note) => results.push({ name, kind, pass, note });

  if (!files.length) { console.error("verify requires --files <path> [path...]"); process.exit(2); }
  console.log(`verify — read-only audit\n  states:  ${wantStates.join(", ") || "(none)"}\n  figures: ${figures.join(" | ") || "(none)"}\n  files:   ${files.join(", ")}\n`);

  /* 1. FIGURE SWEEP — report only, never truncated. */
  console.log("=".repeat(70) + "\n1. FIGURE SWEEP (report only — you judge whether a survivor is correct)\n" + "=".repeat(70));
  for (const fig of figures) {
    const pat = figurePattern(fig);
    console.log(`\nfigure ${fig}  ->  compiled pattern: ${pat}`);
    if (!pat) { console.log("  (no digits — skipped)"); continue; }
    for (const f of files) {
      if (!existsSync(f)) { console.log(`  ${f}: MISSING`); continue; }
      const lines = readFileSync(f, "utf8").split(/\r?\n/);
      let lineHits = 0, matchHits = 0;
      const rows = [];
      lines.forEach((line, i) => {
        const n = (line.match(pat) || []).length;
        if (n) { lineHits++; matchHits += n; rows.push(`    ${f}:${i + 1}: ${line}`); }
      });
      console.log(`  ${f}: ${lineHits} line(s), ${matchHits} match(es)`);
      for (const r of rows) console.log(r);
    }
  }
  add("1. figure sweep", "report", null, `${figures.length} figure(s) x ${files.length} file(s)`);

  /* 2. DATE GUARD */
  console.log("\n" + "=".repeat(70) + "\n2. DATE GUARD\n" + "=".repeat(70));
  const d = git(["diff", "HEAD", "--", ...files]);
  const dateLines = d.out.split(/\r?\n/).filter((l) => /^[+-][^+-]/.test(l) && /(lastVerified|lastUpdated)/.test(l));
  if (!dateLines.length) {
    console.log("  no lastVerified/lastUpdated lines in the diff");
    add("2. date guard", "check", true, "no date lines changed");
  } else {
    for (const l of dateLines) console.log(`  ${l}`);
    const pass = wantStates.length > 0;
    add("2. date guard", "check", pass, pass ? `${dateLines.length} date line(s), --states supplied` : `${dateLines.length} date line(s) changed with NO --states`);
  }

  /* 3. DATE SCOPE — anchored on state blocks, both file versions parsed. */
  console.log("\n" + "=".repeat(70) + "\n3. DATE SCOPE\n" + "=".repeat(70));
  const changed = new Set();
  const pairs = {};
  let unscopeable = [];
  for (const f of files) {
    const fileDiff = git(["diff", "HEAD", "--", f]);
    const fileHasDateChange = fileDiff.out.split(/\r?\n/).some((l) => /^[+-][^+-]/.test(l) && /(lastVerified|lastUpdated)/.test(l));
    if (!fileHasDateChange) continue;
    const head = git(["show", `HEAD:${f}`]);
    const work = existsSync(f) ? readFileSync(f, "utf8") : "";
    if (!/stateCode:\s*"[A-Z]{2}"/.test(work)) { unscopeable.push(f); continue; }
    const a = head.ok ? parseStateDates(head.out) : {};
    const b = parseStateDates(work);
    for (const code of Object.keys(b)) {
      const o = a[code] || {}, n = b[code];
      if (o.lastVerified !== n.lastVerified || o.lastUpdated !== n.lastUpdated) {
        changed.add(code);
        pairs[code] = { old: o, now: n };
      }
    }
  }
  const got = [...changed].sort();
  console.log(`  states with changed dates: ${got.join(", ") || "(none)"}`);
  console.log(`  --states requested:        ${wantStates.join(", ") || "(none)"}`);
  for (const f of unscopeable) console.log(`  UNSCOPEABLE: ${f} has date changes but no stateCode blocks`);
  const scopeMatch = got.length === wantStates.length && got.every((s, i) => s === wantStates[i]);
  const scopePass = scopeMatch && !unscopeable.length;
  add("3. date scope", "check", scopePass,
    unscopeable.length ? `unscopeable file(s): ${unscopeable.join(", ")}`
      : scopeMatch ? `exact match {${got.join(",")}}` : `MISMATCH: got {${got.join(",")}} want {${wantStates.join(",")}}`);

  /* 4. MONOTONICITY — of each date field, tested separately.
     Two distinct properties, and conflating them is what went wrong before.
     MONOTONIC: neither field moves backward. Tested here, per field.
     INDEPENDENT: there is no ordering rule BETWEEN the fields (CLAUDE.md 1.4).
     lastUpdated records an edit and needs no source, so a page corrected
     without being re-verified carries a lastUpdated LATER than its
     lastVerified. That is the normal case. The lastUpdated <= lastVerified
     ordering test was removed here and must not be re-added — it would fail
     exactly that case. */
  console.log("\n" + "=".repeat(70) + "\n4. MONOTONICITY\n" + "=".repeat(70));
  let invPass = true;
  const invNotes = [];
  for (const code of got) {
    const { old: o, now: n } = pairs[code];
    // Absent field → parseStateDates null: a null OLD side is skipped, a null NEW side reports "BACKWARD ... -> null". Intended — deletion is not a forward move.
    const forward = !o.lastVerified || n.lastVerified >= o.lastVerified;
    const updatedForward = !o.lastUpdated || n.lastUpdated >= o.lastUpdated;
    if (!forward) { invPass = false; invNotes.push(`${code}: lastVerified moved BACKWARD ${o.lastVerified} -> ${n.lastVerified}`); }
    if (!updatedForward) { invPass = false; invNotes.push(`${code}: lastUpdated moved BACKWARD ${o.lastUpdated} -> ${n.lastUpdated}`); }
    console.log(`  ${code}: lastVerified ${o.lastVerified} -> ${n.lastVerified} (${forward ? "forward/equal OK" : "BACKWARD"}); lastUpdated ${o.lastUpdated} -> ${n.lastUpdated} (${updatedForward ? "forward/equal OK" : "BACKWARD"})`);
  }
  if (!got.length) console.log("  (no states with changed dates)");
  add("4. monotonicity", "check", invPass, invNotes.join("; ") || "lastVerified forward/equal; lastUpdated forward/equal");

  /* 5. COUNT CLAIMS — report only. */
  console.log("\n" + "=".repeat(70) + "\n5. COUNT CLAIMS (report only — verify each against current reality)\n" + "=".repeat(70));
  const countRe = /\b(two|three|four|five|six|seven|eight|nine|ten|both|either)\b/i;
  let claimTotal = 0;
  for (const f of files) {
    const fd = git(["diff", "HEAD", "--", f]);
    if (!fd.out.trim()) { console.log(`  ${f}: unchanged vs HEAD — skipped`); continue; }
    if (!existsSync(f)) continue;
    const lines = readFileSync(f, "utf8").split(/\r?\n/);
    const rows = [];
    lines.forEach((line, i) => { if (countRe.test(line)) rows.push(`    ${f}:${i + 1}: ${line}`); });
    console.log(`  ${f}: ${rows.length} line(s) with numeric prose`);
    for (const r of rows) console.log(r);
    claimTotal += rows.length;
  }
  add("5. count claims", "report", null, `${claimTotal} line(s) for review`);

  /* 6. BUILD */
  console.log("\n" + "=".repeat(70) + "\n6. BUILD\n" + "=".repeat(70));
  const b = spawnSync("npm", ["run", "build"], { encoding: "utf8", shell: process.platform === "win32" });
  const buildCode = b.status === null ? 1 : b.status;
  const tail = (b.stdout || "").split(/\r?\n/).filter(Boolean).slice(-4);
  for (const l of tail) console.log(`  ${l}`);
  if (buildCode !== 0) console.log((b.stderr || "").split(/\r?\n/).slice(-20).map((l) => `  ${l}`).join("\n"));
  console.log(`  npm run build exit=${buildCode}`);
  add("6. build", "check", buildCode === 0, `exit ${buildCode}`);

  /* 7. CROSS-PAGE STATUS — report only. Detects internal disagreement between a
     cross-page file and incentives[code].summary. No fetch, no source: this is
     the repo disagreeing with itself, which nothing else here can see. */
  console.log("\n" + "=".repeat(70) + "\n7. CROSS-PAGE STATUS (report only — adjudicate each pair)\n" + "=".repeat(70));
  const xpFindings = [];
  const incSrc = existsSync(INCENTIVES) ? readFileSync(INCENTIVES, "utf8") : "";
  const nameToCode = {}, sumText = {};
  for (const blk of incSrc.split(/\n  (?=[A-Z]{2}: \{)/).slice(1)) {
    const code = blk.match(/stateCode:\s*"([A-Z]{2})"/)?.[1];
    if (!code) continue;
    const nm = blk.match(/stateName:\s*"([^"]+)"/);
    const sm = blk.match(/summary:\s*\n?\s*("(?:[^"\\]|\\.)*")/);
    if (nm) nameToCode[nm[1]] = code;
    if (sm) { try { sumText[code] = JSON.parse(sm[1]); } catch { /* skip */ } }
  }
  const sumPh = {};
  for (const [code, s] of Object.entries(sumText)) {
    sumPh[code] = [];
    for (const sent of splitSentences(s)) for (const p of statusPhrases(sent)) sumPh[code].push({ ...p, sent: sent.trim() });
  }
  const stateNameRe = Object.keys(nameToCode).length
    ? new RegExp("\\b(" + Object.keys(nameToCode).sort((a, b) => b.length - a.length).join("|") + ")\\b", "g")
    : null;
  const stripTags = (s) => s.replace(/<[^>]+>/g, " ").replace(/&[a-z]+;/g, " ").replace(/\{"\s*[^"]*"\}/g, " ").replace(/\s+/g, " ").trim();
  const byKey = new Map();
  for (const short of CROSSPAGE_FILES) {
    const p = path.join(ROOT, "src", "app", "heat-pumps", short, "page.tsx");
    if (!existsSync(p) || !stateNameRe) { console.log(`  ${short}: not found — skipped`); continue; }
    const lines = readFileSync(p, "utf8").split(/\r?\n/);
    lines.forEach((raw, i) => {
      const flat = stripTags(raw);
      if (!flat) return;
      const tier = raw.match(/\{ code: "([A-Z]{2})"/);
      for (const sent of splitSentences(flat)) {
        const ps = statusPhrases(sent);
        if (!ps.length) continue;
        let codes;
        if (tier) codes = [tier[1]];
        else {
          const set = new Set();
          for (const m of sent.matchAll(stateNameRe)) set.add(nameToCode[m[1]]);
          for (const m of raw.matchAll(/\/heat-pumps\/states\/([a-z]{2})\b/g)) set.add(m[1].toUpperCase());
          codes = [...set];
        }
        if (!codes.length) continue;
        for (const code of codes) {
          for (const ph of ps) {
            const clashes = (sumPh[code] || []).filter((s) => s.program === ph.program &&
              ((ph.cls === "AVAILABLE" && s.cls === "UNAVAILABLE") || (ph.cls === "UNAVAILABLE" && s.cls === "AVAILABLE")));
            if (!clashes.length) continue;
            const key = `${code}|${short}|${i + 1}|${ph.phrase}`;
            if (!byKey.has(key)) byKey.set(key, { code, file: short, line: i + 1, program: ph.program,
              multi: codes.length, pagePhrase: ph.phrase, pageCls: ph.cls, pageSent: sent.trim(), sums: [] });
            const rec = byKey.get(key);
            for (const c of clashes) if (!rec.sums.some((x) => x.phrase === c.phrase && x.sent === c.sent)) rec.sums.push(c);
          }
        }
      }
    });
  }
  for (const f of [...byKey.values()].sort((a, b) => a.code.localeCompare(b.code) || a.file.localeCompare(b.file) || a.line - b.line)) xpFindings.push(f);
  if (!xpFindings.length) console.log("  no cross-page status disagreements found");
  for (const f of xpFindings) {
    const tags = [f.program, f.multi > 1 ? `multi-state sentence (${f.multi})` : null].filter(Boolean).join(", ");
    console.log(`\n  DISAGREES — ${f.code} [${tags}]  src/app/heat-pumps/${f.file}/page.tsx:${f.line}`);
    console.log(`    page    (${f.pageCls}, "${f.pagePhrase}"): ${f.pageSent.slice(0, 220)}`);
    for (const s of f.sums) console.log(`    summary (${s.cls}, "${s.phrase}"): ${s.sent.slice(0, 220)}`);
  }
  add("7. cross-page status", "report", null, `${xpFindings.length} disagreement(s) across ${new Set(xpFindings.map((f) => f.code)).size} state(s)`);

  /* SUMMARY */
  console.log("\n" + "=".repeat(70) + "\nSUMMARY\n" + "=".repeat(70));
  const w = Math.max(...results.map((r) => r.name.length));
  for (const r of results) {
    const verdict = r.kind === "report" ? "REPORT-ONLY" : r.pass ? "PASS" : "FAIL";
    console.log(`  ${r.name.padEnd(w)}  ${verdict.padEnd(11)}  ${r.note}`);
  }
  const failed = results.filter((r) => r.kind === "check" && !r.pass);
  const nonBuildFail = failed.some((r) => r.name !== "6. build");
  const exit = failed.length === 0 ? 0 : nonBuildFail ? 1 : buildCode;
  console.log(`\n  ${failed.length} failing check(s). exit=${exit}`);
  process.exit(exit);
}

/* ------------------------------------------------------------------ */
/* offline selftest of the diff engine                                  */
/* ------------------------------------------------------------------ */

function selftest() {
  const mk = (o) => ({ url: "u", finalUrl: "https://x.gov/a", label: "L", states: ["ME"], kind: "html", textHash: "t1", dollars: ["$500", "$3,000"], keywords: { closed: 1 }, ...o });
  const cases = [
    ["unchanged", mk({}), mk({}), "UNCHANGED"],
    ["text drift only", mk({}), mk({ textHash: "t2" }), "LOW"],
    ["dollar added", mk({}), mk({ textHash: "t2", dollars: ["$500", "$3,000", "$9,000"] }), "HIGH"],
    ["dollar removed", mk({}), mk({ textHash: "t2", dollars: ["$500"] }), "HIGH"],
    ["keyword shift", mk({}), mk({ textHash: "t2", keywords: { closed: 1, waitlist: 2 } }), "HIGH"],
    ["redirect change", mk({}), mk({ finalUrl: "https://x.gov/" }), "HIGH"],
    ["new fetch failure", mk({}), { ...mk({}), error: "HTTP 404", dollars: undefined, keywords: undefined }, "FETCH"],
    ["still failing", { ...mk({}), error: "timeout" }, { ...mk({}), error: "timeout" }, "FETCH"],
    ["pdf reissued", mk({ kind: "pdf", bytesHash: "a", dollars: undefined, keywords: undefined }), mk({ kind: "pdf", bytesHash: "b", dollars: undefined, keywords: undefined }), "HIGH"],
    ["pdf same", mk({ kind: "pdf", bytesHash: "a" }), mk({ kind: "pdf", bytesHash: "a" }), "UNCHANGED"],
  ];
  let fail = 0;
  for (const [name, a, b, want] of cases) {
    const { level, notes } = diffEntry(a, b);
    const ok = level === want;
    if (!ok) fail++;
    console.log(`${ok ? "PASS" : "FAIL"}  ${name}: got ${level} (want ${want})${notes.length ? " — " + notes.join(" | ") : ""}`);
  }
  // hollowReason: a muted URL only reports when it is ALSO hollow. The ordering
  // case is the one that matters — hasNoSignal() is false for error entries, so
  // testing signal first would call a 403 healthy and re-hide it.
  const hollowCases = [
    ["healthy watch", mk({}), null],
    ["fetch error", { ...mk({}), error: "HTTP 403" }, "fetch-error"],
    ["zero signal", mk({ dollars: [], keywords: {} }), "no-signal"],
    ["error outranks no-signal", { ...mk({ dollars: [], keywords: {} }), error: "HTTP 403" }, "fetch-error"],
    ["pdf with no dollars is not hollow", mk({ kind: "pdf", dollars: [], keywords: {} }), null],
    ["erroring pdf is hollow", { ...mk({ kind: "pdf" }), error: "HTTP 404" }, "fetch-error"],
    ["missing entry", undefined, null],
  ];
  for (const [name, entry, want] of hollowCases) {
    const got = hollowReason(entry);
    const ok = (got?.kind ?? null) === want;
    if (!ok) fail++;
    console.log(`${ok ? "PASS" : "FAIL"}  hollowReason ${name}: got ${got?.kind ?? "null"} (want ${want ?? "null"})`);
  }

  // versionEncodedUrl: the near-misses matter more than the hits. A year in a
  // slug, a query string, or a bare /YYYY/ directory is NOT a version marker —
  // over-flagging here would train the reader to skim the advisory.
  const verCases = [
    // real members of the class
    ["wp year/month upload", "https://energizedelaware.org/wp-content/uploads/2025/09/Rebate-Pricing.pdf", "year/month upload path"],
    ["date-stamped filename", "https://x.com/ppl/media/allresrebates_612026.pdf", "date-stamped filename"],
    ["year-stamped filename", "https://x.com/downloads/2026/REIP_Incentive_Table-2026.pdf", "year-stamped filename"],
    ["opaque media id", "https://www.energizect.com/media/12241/download?inline=", "opaque media id"],
    // near misses — must NOT match
    ["year inside a slug", "https://x.gov/2026-rebate-guide", null],
    ["year in a query string", "https://x.gov/rebates?year=2026", null],
    ["bare year directory", "https://x.gov/news/2026/announcement", null],
    ["stable path with digits", "https://www.efficiencymaine.com/docs/HPWH_Rebate.pdf", null],
    ["digits in a document code", "https://x.com/staticfiles/24-1-201%20Res%20Rebate.pdf", null],
    ["year in a document title", "https://cleanheat.ny.gov/assets/pdf/Program%20Manual%202025_v2.pdf", null],
    ["form number", "https://dor.sc.gov/forms-site/Forms/TC38.pdf", null],
    ["empty url", "", null],
  ];
  for (const [name, url, want] of verCases) {
    const got = versionEncodedUrl(url);
    const ok = got === want;
    if (!ok) fail++;
    console.log(`${ok ? "PASS" : "FAIL"}  versionEncodedUrl ${name}: got ${got ?? "null"} (want ${want ?? "null"})`);
  }

  // fingerprint helpers
  const text = htmlToText(`<html><script>var x="$99";</script><p>Rebates up to $3,000 &ndash; now &amp; waitlist closed. <b>$500</b>/ton</p></html>`);
  const d = extractDollars(text), k = keywordCounts(text);
  const commaOk = extractDollars("$400\u2013$1,200, OPPD").join(",") === "$400,$1,200"; // trailing separator is not part of the figure
  const fpOk = d.join(",") === "$500,$3,000" && k.waitlist === 1 && k.closed === 1 && !text.includes("$99") && commaOk;
  if (!fpOk) fail++;
  console.log(`${fpOk ? "PASS" : "FAIL"}  fingerprint: dollars=[${d.join(", ")}] keywords=${JSON.stringify(k)} (script content excluded; trailing comma ${commaOk ? "stripped" : "RETAINED"})`);
  // scoped keyword: "temporarily" only counts near program vocabulary
  const kFurniture = keywordCounts("This website is temporarily experiencing display issues.");
  const kProgram = keywordCounts("Rebate applications are temporarily unavailable while funds are reallocated.");
  const scopeOk = !kFurniture.temporarily && kProgram.temporarily === 1;
  if (!scopeOk) fail++;
  console.log(`${scopeOk ? "PASS" : "FAIL"}  keyword scoping: furniture=${JSON.stringify(kFurniture)} program=${JSON.stringify(kProgram)}`);
  // same-domain wall-text detector. The block-page strings below are modelled on
  // the head text reported by the 2026-09-06 probe of the six large-body 403s and
  // the two small-block controls; each previously returned false.
  const wallCases = [
    // challenge and block pages — must be TRUE
    ["cloudflare challenge (CT and AZ controls, 16 chars)", "Just a moment...", true],
    ["cloudflare attention-required title", "Attention Required! | Cloudflare", true],
    ["EVT error template", "Error | Efficiency Vermont Blocked", true],
    ["VEIC hard block with error id", "Blocked please call VEIC and share the following error information: Ray ID 9a2f", true],
    ["generic soft failure template", "Something went wrong. Please try again later.", true],
    ["legacy interstitial still matches", "You are being redirected...Javascript is required. Please enable javascript before you are allowed to see this page.", true],
    // near-misses — must be FALSE
    ["long real page mentioning blocked in prose", "Rebates up to $3,000 for qualifying heat pump installations. ".repeat(40) + " Do not install where airflow is blocked.", false],
    ["long real page mentioning javascript", "Rebates up to $3,000 for qualifying heat pump installations. ".repeat(40) + "javascript is required", false],
    ["short clean page", "Efficiency Maine offers rebates up to $12,900 for single-wide mobile homes heated with propane or kerosene.", false],
    // documented limit, not a defect: under the length guard a bare token wins.
    // Accepted because no real program page in this corpus is this short.
    ["short prose containing blocked (known limit of the bare token)", "Do not install where airflow is blocked.", true],
  ];
  for (const [name, text, want] of wallCases) {
    const got = isWallText(text);
    const ok = got === want;
    if (!ok) fail++;
    console.log(`${ok ? "PASS" : "FAIL"}  wall-text ${name}: got ${got} (want ${want})`);
  }
  // registrable-host approximation (off-domain wall detector)
  const rhCases = [
    ["https://mn.gov/commerce/x", "https://validate.perfdrive.com/y", false],
    ["https://savings.austinenergy.com/a", "https://austinenergy.com/b", true],
    ["https://www.oge.com/a", "https://oge.com/b", true],
    ["https://cleanheatri.com/a", "https://captcha.shieldsquare.com/b", false],
  ];
  for (const [a, b, same] of rhCases) {
    const got = registrableHost(a) === registrableHost(b);
    const ok = got === same;
    if (!ok) fail++;
    console.log(`${ok ? "PASS" : "FAIL"}  registrableHost: ${a} vs ${b} -> same=${got} (want ${same})`);
  }
  // no-signal predicate: dollars OR keywords present = has signal
  const nsCases = [
    ["dollars only", { kind: "html", dollars: ["$500"], keywords: {} }, false],
    ["keywords only", { kind: "html", dollars: [], keywords: { closed: 1 } }, false],
    ["neither", { kind: "html", dollars: [], keywords: {} }, true],
    ["pdf (bytesHash is signal)", { kind: "pdf", bytesHash: "a" }, false],
    ["error entry", { error: "HTTP 403", dollars: [], keywords: {} }, false],
  ];
  for (const [name, e, want] of nsCases) {
    const got = hasNoSignal(e);
    const ok = got === want;
    if (!ok) fail++;
    console.log(`${ok ? "PASS" : "FAIL"}  hasNoSignal ${name}: got ${got} (want ${want})`);
  }
  // empty-extraction sub-classification, derived from sha("") not a literal
  const nsEmpty = extractedNothing({ textHash: sha("") });
  const nsNotEmpty = extractedNothing({ textHash: sha("some real page text") });
  const nsNoHash = extractedNothing({});
  const nsSubOk = nsEmpty && !nsNotEmpty && !nsNoHash;
  if (!nsSubOk) fail++;
  console.log(`${nsSubOk ? "PASS" : "FAIL"}  extractedNothing: empty=${nsEmpty} realText=${nsNotEmpty} noHash=${nsNoHash} (want true/false/false)`);

  // acceptance staleness — three branches. The masking case is the point:
  // an accepted URL that starts failing must never read as an improvement.
  const acCases = [
    ["absent from curMap", undefined, "dead"],
    ["error entry (403)", { error: "HTTP 403", dollars: [], keywords: {} }, "masking"],
    ["now carries dollars", { kind: "html", dollars: ["$500"], keywords: {} }, "recovered"],
    ["still no-signal", { kind: "html", dollars: [], keywords: {} }, null],
  ];
  for (const [name, entry, want] of acCases) {
    const got = classifyAcceptance(entry);
    const kind = got ? got.kind : null;
    const ok = kind === want;
    if (!ok) fail++;
    console.log(`${ok ? "PASS" : "FAIL"}  classifyAcceptance ${name}: got ${kind} (want ${want})`);
  }
  // the specific regression: an error entry must NOT be described as improved
  const maskMsg = classifyAcceptance({ error: "HTTP 403" }).message;
  const maskOk = /masking a fetch failure/.test(maskMsg) && !/carries signal|can be removed/.test(maskMsg);
  if (!maskOk) fail++;
  console.log(`${maskOk ? "PASS" : "FAIL"}  classifyAcceptance error wording: ${JSON.stringify(maskMsg)}`);

  // shared/federal classification — boundary is > SHARED_STATE_MAX, not >=
  const shBelow = isShared(new Array(SHARED_STATE_MAX).fill("XX"));
  const shAbove = isShared(new Array(SHARED_STATE_MAX + 1).fill("XX"));
  const shOk = !shBelow && shAbove;
  if (!shOk) fail++;
  console.log(`${shOk ? "PASS" : "FAIL"}  isShared: ${SHARED_STATE_MAX} states=${shBelow} ${SHARED_STATE_MAX + 1} states=${shAbove} (want false/true)`);
  console.log(fail ? `\n${fail} FAILURES` : "\nAll selftests passed.");
  process.exit(fail ? 1 : 0);
}

main().catch((e) => { console.error(e); process.exit(2); });
