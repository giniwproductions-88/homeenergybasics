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
 *   node scripts/check-sources.mjs check                 # fetch fresh, diff vs baseline -> scripts/source-diff-report.md
 *   node scripts/check-sources.mjs check --only NY,MA    # limit to specific states
 *   node scripts/check-sources.mjs accept NY MA          # after verifying a flagged state, fold its fresh snapshot into baseline
 *   node scripts/check-sources.mjs accept all
 *   node scripts/check-sources.mjs prune                 # drop baseline entries for URLs removed from the data files
 *   node scripts/check-sources.mjs unbaselined           # list watched URLs with no baseline entry (no network)
 *   node scripts/check-sources.mjs selftest              # offline test of the diff engine
 *
 * WORKFLOW (playbook Phase 4): baseline once -> check every ~2 days -> HIGH items get
 * manual verification at full checklist depth -> page updated -> `accept <STATE>` -> commit baseline.
 * Never `accept` a state you haven't actually verified: the baseline is the honesty ledger.
 *
 * Files:
 *   scripts/source-baseline.json   committed. The asset.
 *   scripts/source-latest.json     regenerated every check. gitignore.
 *   scripts/source-diff-report.md  regenerated every check. gitignore.
 *   scripts/source-ignore.json     optional array of URLs to skip/mute (bot-blocked or known-noisy).
 */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
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
const WALL_TEXT_RE =
  /you are being redirected|javascript is required|checking your browser|enable javascript and cookies|verify(?:ing)? (?:that )?you are (?:a )?human|are you a robot|request unsuccessful\. incapsula/i;
const WALL_TEXT_MAXLEN = 2000;
function isWallText(text) {
  return text.length < WALL_TEXT_MAXLEN && WALL_TEXT_RE.test(text);
}
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
  const raw = text.match(/\$\s?\d[\d,]{0,14}(\.\d\d)?/g) || [];
  const set = new Set(raw.map((d) => d.replace(/\s+/g, "")));
  return [...set].sort((a, b) => {
    const na = parseFloat(a.replace(/[$,]/g, ""));
    const nb = parseFloat(b.replace(/[$,]/g, ""));
    return na - nb;
  }).slice(0, 300);
}

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
/* report                                                               */
/* ------------------------------------------------------------------ */

function writeReport(baseline, latest, ignoreSet, humanVerify = []) {
  const rows = []; // {states, tier, label, url, level, notes}
  const baseMap = baseline.entries, curMap = latest.entries;
  let unchanged = 0, ignored = 0;

  for (const url of Object.keys(curMap)) {
    if (ignoreSet.has(url)) { ignored++; continue; }
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
    const shared = e.states.length > 3;
    return { states: e.states, tier: shared ? 9 : tierOf(e.states), shared, label: e.label, url: e.url };
  }

  const order = { HIGH: 0, FETCH: 1, NEW: 2, REMOVED: 3, LOW: 4 };
  rows.sort((a, b) => order[a.level] - order[b.level] || a.tier - b.tier || a.states[0].localeCompare(b.states[0]));

  const statesToVerify = [...new Set(rows.filter((r) => r.level === "HIGH" && !r.shared).flatMap((r) => r.states))];

  let md = `# Source Diff Report\n\nGenerated: ${latest.generatedAt}\nBaseline: ${baseline.generatedAt}\n`;
  md += `URLs checked: ${Object.keys(curMap).length} | unchanged: ${unchanged} | flagged: ${rows.length} | muted (ignore list): ${ignored}\n\n`;
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
  md += `---\nWorkflow: verify HIGH states at full checklist depth -> update pages -> \`node scripts/check-sources.mjs accept <STATE>\` -> commit source-baseline.json.\nDate-stamp rule: a flag here is NOT verification. Bump lastVerified only after real source verification.\n`;
  writeFileSync(REPORT_F, md);
  return { rows, statesToVerify, unchanged };
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

async function main() {
  const [, , mode = "check", ...rest] = process.argv;
  const onlyIx = rest.indexOf("--only");
  const only = onlyIx !== -1 ? rest[onlyIx + 1] : null;

  if (mode === "selftest") return selftest();

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
    const shared = [...allUrls.entries()].filter(([, m]) => m.states.length > 3);
    console.log(`shared URLs (>3 states): ${shared.length}`);
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
    const { rows, statesToVerify, unchanged } = writeReport(baseline, latest, ignoreSet, humanVerify);
    console.log(`\nReport: ${REPORT_F}`);
    if (humanVerify.length) {
      console.log(`HUMAN VERIFY (JS-walled, browser-check on schedule): ${humanVerify.length}`);
      for (const hv of humanVerify) console.log(`  [${hv.states.join(",")}] ${hv.label} — ${hv.url}`);
    }
    console.log(`unchanged: ${unchanged} | flagged: ${rows.length}`);
    console.log(`HIGH: ${rows.filter((r) => r.level === "HIGH").length} | FETCH: ${rows.filter((r) => r.level === "FETCH").length} | LOW: ${rows.filter((r) => r.level === "LOW").length}`);
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
    const baseline = loadJson(BASELINE_F, null);
    const latest = loadJson(LATEST_F, null);
    if (!baseline || !latest) { console.error("Need both baseline and a prior `check` run (source-latest.json)."); process.exit(2); }
    const targets = rest.filter((r) => r !== "--only").map((s) => s.toUpperCase());
    if (!targets.length) { console.error("accept requires state codes or 'all'"); process.exit(2); }
    let n = 0;
    for (const [u, e] of Object.entries(latest.entries)) {
      if (targets.includes("ALL") || e.states.some((s) => targets.includes(s))) {
        baseline.entries[u] = e; n++;
      }
    }
    baseline.generatedAt = new Date().toISOString();
    writeFileSync(BASELINE_F, JSON.stringify(baseline, null, 1));
    console.log(`Accepted ${n} URL snapshots into baseline for: ${targets.join(", ")}`);
    console.log(`Commit it: git add scripts/source-baseline.json`);
    return;
  }

  console.error(`Unknown mode: ${mode}. Modes: parse | baseline | check | accept | prune | unbaselined | selftest`);
  process.exit(2);
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
  // fingerprint helpers
  const text = htmlToText(`<html><script>var x="$99";</script><p>Rebates up to $3,000 &ndash; now &amp; waitlist closed. <b>$500</b>/ton</p></html>`);
  const d = extractDollars(text), k = keywordCounts(text);
  const fpOk = d.join(",") === "$500,$3,000" && k.waitlist === 1 && k.closed === 1 && !text.includes("$99");
  if (!fpOk) fail++;
  console.log(`${fpOk ? "PASS" : "FAIL"}  fingerprint: dollars=[${d.join(", ")}] keywords=${JSON.stringify(k)} (script content excluded)`);
  // scoped keyword: "temporarily" only counts near program vocabulary
  const kFurniture = keywordCounts("This website is temporarily experiencing display issues.");
  const kProgram = keywordCounts("Rebate applications are temporarily unavailable while funds are reallocated.");
  const scopeOk = !kFurniture.temporarily && kProgram.temporarily === 1;
  if (!scopeOk) fail++;
  console.log(`${scopeOk ? "PASS" : "FAIL"}  keyword scoping: furniture=${JSON.stringify(kFurniture)} program=${JSON.stringify(kProgram)}`);
  // same-domain wall-text detector
  const wallHit = isWallText("You are being redirected...Javascript is required. Please enable javascript before you are allowed to see this page.");
  const wallMissLong = isWallText("Rebates up to $3,000 for qualifying heat pump installations. ".repeat(40) + "javascript is required");
  const wallMissClean = isWallText("Efficiency Maine offers rebates up to $12,900 for single-wide mobile homes heated with propane or kerosene.");
  const wallOk = wallHit && !wallMissLong && !wallMissClean;
  if (!wallOk) fail++;
  console.log(`${wallOk ? "PASS" : "FAIL"}  wall-text: interstitial=${wallHit} longRealPage=${wallMissLong} cleanPage=${wallMissClean} (want true/false/false)`);
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
  console.log(fail ? `\n${fail} FAILURES` : "\nAll selftests passed.");
  process.exit(fail ? 1 : 0);
}

main().catch((e) => { console.error(e); process.exit(2); });
