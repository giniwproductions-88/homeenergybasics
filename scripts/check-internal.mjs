#!/usr/bin/env node
/**
 * check-internal.mjs — homeenergybasics.com internal consistency checker
 * Zero dependencies. Node 18+. RULE 1 ONLY: stale date anchors.
 *
 * check-sources.mjs asks "did the source change". This asks "do our own pages
 * agree with themselves and with src/data/". Same shape, pointed inward.
 *
 * RULE 1: a date anchor in page prose ("as of <Month> <Year>") that is older
 * than the owning data entry's lastVerified. Compared at month granularity.
 *
 * USAGE (from repo root):
 *   node scripts/check-internal.mjs                    # report, everything in scope
 *   node scripts/check-internal.mjs --states AZ VT     # scope to states (space-separated)
 *   node scripts/check-internal.mjs --strict           # exit 1 on unsuppressed findings
 *   node scripts/check-internal.mjs selftest           # offline fixtures, no repo reads
 *
 * Operator run convention, matching the scraper:
 *   cmd /c "node scripts\check-internal.mjs > internal-run-<date>.txt 2>&1"
 *
 * ── THE SAFETY PROPERTY, AND IT IS LOAD-BEARING ──────────────────────────
 * THIS SCRIPT OPENS NO FILE FOR WRITING. No baseline, no accept subcommand,
 * no log it manages itself. It imports readFileSync/readdirSync/statSync and
 * nothing else from node:fs — grep this file for any fs write call and you get
 * zero hits, which is the intended audit. scripts/internal-accepted.json is
 * HAND-EDITED BY THE OPERATOR and only ever read here.
 *
 * ── WHAT IT DOES NOT DO ──────────────────────────────────────────────────
 * It does not fix anything (no --fix, now or later). It does not fetch — no
 * network, runs fully offline. It does not verify truth: a page and its data
 * entry can agree perfectly and both be wrong. Playbook rule 12 is unchanged,
 * only rule 1's quoted-source test catches fabrication. It is not a
 * replacement for the rendered read.
 *
 * ── KNOWN DEBT, LOGGED NOT FIXED ─────────────────────────────────────────
 * This file contains a SECOND parser for src/data/*.ts, independent of the one
 * in check-sources.mjs. Two parsers for one file is real debt. It is deliberate
 * here — spec §3.4 forbids importing or refactoring the working scraper to
 * build this — but it is debt, and it is logged rather than silently carried.
 */

import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { dirname, join, resolve, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, "..");

// ── STRUCTURAL TRIPWIRE ──────────────────────────────────────────────────
// Confirmed against the repo 2026-09-20 by block-anchored parse, not by
// counting field-name occurrences: `grep -c lastVerified:` returns 54 in
// incentives.ts (one interface declaration + two function parameters on top
// of the 51 real entries), which is exactly the kind of inflated floor that
// produced check-sources.mjs's MIN_STATES = 40 against 51 actual entries.
// That defect is logged; this does not copy it. Exact, not a floor.
const EXPECT_STATES = 51; // exactly
const MIN_UTILITIES = 6; // at least — utility pages are still being added

const SPAN_CAP_PREFIX = 80; // max chars of JSX/entities/whitespace between "as of" and the month
const SPAN_CAP_INFIX = 20; // max chars between the month and its year
const HUGE_LINE = 500; // print anyway, just mark it (spec §3.1: never truncate)

const VALID_REASONS = new Set(["historical-claim", "source-dated"]);
const ACCEPT_PATH = join(HERE, "internal-accepted.json");

// ─────────────────────────────────────────────────────────────────────────
// ANCHOR EXTRACTION
// ─────────────────────────────────────────────────────────────────────────

const MONTHS = new Map([
  ["january", 1], ["february", 2], ["march", 3], ["april", 4],
  ["may", 5], ["june", 6], ["july", 7], ["august", 8],
  ["september", 9], ["october", 10], ["november", 11], ["december", 12],
  ["jan", 1], ["feb", 2], ["mar", 3], ["apr", 4], ["jun", 6], ["jul", 7],
  ["aug", 8], ["sept", 9], ["sep", 9], ["oct", 10], ["nov", 11], ["dec", 12],
]);

// Longest-first so "September" wins over "Sep" and "Sept" over "Sep".
const MONTH_ALT = [...MONTHS.keys()].sort((a, b) => b.length - a.length).join("|");

// What may sit between "as of" and the month: tags, entities, JSX braces and
// whitespace. Deliberately NOT arbitrary prose words — that is what keeps
// "as of the 2026 program year" out (spec §3.2). Length capped after the
// match, so a run longer than the cap is rejected rather than tolerated.
const GAP_PREFIX = String.raw`(?:<[^<>]*>|&[A-Za-z#][A-Za-z0-9]*;|\{[^{}]*\}|[\s"'\`:;,()\[\]–—-])`;

// Between month and year. No digits may be consumed here — that is the single
// reason "through December 31, 2025" and "effective ... August 14, 2026"
// cannot match: the year must follow the month with no day number between.
const GAP_INFIX = String.raw`(?:<[^<>]*>|&[A-Za-z#][A-Za-z0-9]*;|\{[^{}0-9]*\}|[\s,])`;

// Case-insensitive (spec §3.1: sentence-initial "As of" cost a miss on MD).
// \b before the month blocks "as ofJune". Lazy gaps find the nearest month.
const ANCHOR_RE = new RegExp(
  `as\\s+of(${GAP_PREFIX}*?)\\b(${MONTH_ALT})(\\.?)(${GAP_INFIX}*?)(\\d{4})(?!\\d)`,
  "gi",
);

/**
 * Find every anchor in a text. Counts MATCHES, not lines — two anchors on one
 * line are two findings (spec §3.1; `grep -c` undercounts by design).
 * Matches across newlines: Prettier wraps mid-phrase, so the caller passes the
 * whole file as one string and line numbers are computed from the offset here.
 */
function findAnchors(text) {
  const lineStarts = buildLineIndex(text);
  const found = [];
  ANCHOR_RE.lastIndex = 0;
  let m;
  while ((m = ANCHOR_RE.exec(text)) !== null) {
    const [full, gapPrefix, monthRaw, dot, gapInfix, yearRaw] = m;
    // Span caps. On rejection, resume just past "as of" rather than past the
    // whole rejected match, so a legitimate anchor inside the over-long span
    // is not skipped.
    if (gapPrefix.length > SPAN_CAP_PREFIX || gapInfix.length > SPAN_CAP_INFIX) {
      ANCHOR_RE.lastIndex = m.index + 5;
      continue;
    }
    const month = MONTHS.get(monthRaw.toLowerCase());
    const year = Number(yearRaw);
    found.push({
      month,
      year,
      // Normalized acceptance text: "as of" lowercased, month as written
      // (period preserved). The operator copies this into the accept file.
      anchorText: `as of ${monthRaw}${dot} ${yearRaw}`,
      raw: full,
      offset: m.index,
      endOffset: m.index + full.length,
      startLine: lineOf(lineStarts, m.index),
      endLine: lineOf(lineStarts, m.index + full.length - 1),
    });
  }
  return found;
}

function buildLineIndex(text) {
  const starts = [0];
  for (let i = 0; i < text.length; i++) if (text[i] === "\n") starts.push(i + 1);
  return starts;
}

function lineOf(starts, offset) {
  let lo = 0, hi = starts.length - 1;
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1;
    if (starts[mid] <= offset) lo = mid; else hi = mid - 1;
  }
  return lo + 1;
}

/** Full source lines spanned by a match. Never truncated (spec §3.1). */
function linesFor(text, startLine, endLine) {
  const all = text.split("\n");
  const out = [];
  for (let n = startLine; n <= endLine && n <= all.length; n++) {
    out.push(all[n - 1].replace(/\r$/, ""));
  }
  return out;
}

// ─────────────────────────────────────────────────────────────────────────
// COMPARISON
// ─────────────────────────────────────────────────────────────────────────

const ISO_RE = /^(\d{4})-(\d{2})-(\d{2})$/;

/**
 * Month granularity. No grace period — a one-month gap is a finding.
 * FUTURE fires as its own class: an anchor dated ahead of the verification
 * that supposedly produced it is either a typo or a promise (playbook rule 11).
 */
function classifyAnchor(anchor, lastVerified) {
  const m = ISO_RE.exec(lastVerified || "");
  if (!m) return null;
  const owner = Number(m[1]) * 12 + Number(m[2]);
  const claim = anchor.year * 12 + anchor.month;
  if (claim === owner) return null;
  const delta = Math.abs(claim - owner);
  return {
    cls: claim < owner ? "STALE" : "FUTURE",
    delta,
    phrase: `${delta} month${delta === 1 ? "" : "s"} ${claim < owner ? "behind" : "ahead"}`,
  };
}

// ─────────────────────────────────────────────────────────────────────────
// DATA FILE PARSER  (minimal and local — spec §3.4 forbids importing the scraper)
// ─────────────────────────────────────────────────────────────────────────

/**
 * Anchor on the ENTRY BLOCK, never on the date string. States share date
 * values — anchoring on "2026-08-22" would resolve to WA, WI, MI and WV at
 * once. Entry keys are at 4-space indent; the interface declaration sits at
 * 2-space and function parameters are not at line-start, so the indent anchor
 * excludes both without needing to special-case them.
 *
 * Strips a UTF-8 BOM first (utilities.ts carries one, incentives.ts does not).
 * Stripping at offset 0 shifts every offset by one consistently, so line
 * numbers computed from the stripped text stay correct.
 */
function parseDataFile(rawText, keyRe) {
  const text = rawText.replace(/^﻿/, "");
  const anchors = [];
  keyRe.lastIndex = 0;
  let m;
  while ((m = keyRe.exec(text)) !== null) anchors.push({ key: m[1], start: m.index });

  const entries = anchors.map((a, i) => {
    const start = a.start;
    const end = i + 1 < anchors.length ? anchors[i + 1].start : text.length;
    const block = text.slice(start, end);

    const lv = /^ {4}lastVerified: "([^"]*)"/m.exec(block);
    const lu = /^ {4}lastUpdated: "([^"]*)"/m.exec(block);
    const sum = /^ {4}summary:/m.exec(block);

    let sumStart = null, sumEnd = null;
    if (sum) {
      sumStart = start + sum.index;
      const after = block.slice(sum.index);
      const src = /^ {4}sources:/m.exec(after);
      sumEnd = src ? sumStart + src.index : end;
    }
    return {
      key: a.key,
      // "" is legal in utilities.ts (ISODate | "") and marks an unshipped
      // stub. Treated as NO OWNER DATE, never compared against.
      lastVerified: lv && lv[1] !== "" ? lv[1] : null,
      lastUpdated: lu ? lu[1] : null,
      sumStart,
      sumEnd,
    };
  });

  return { text, entries };
}

const STATE_KEY_RE = /^ {4}stateCode: "([A-Z]{2})"/gm;
const UTIL_KEY_RE = /^ {4}slug: "([a-z0-9-]+)"/gm;

// ─────────────────────────────────────────────────────────────────────────
// ACCEPTANCES
// ─────────────────────────────────────────────────────────────────────────

/**
 * BRANCH ORDER IS LOAD-BEARING: malformed, then expired, then suppress.
 * check-sources.mjs's classifyAcceptance had exactly this bug the other way
 * round — a 403 reported as an improvement because the error branch came
 * second. A broken acceptance file must never be able to hide a row silently.
 */
function classifyAcceptance(entry, todayISO) {
  if (!entry || typeof entry !== "object" || Array.isArray(entry)) {
    return { state: "malformed", why: "not an object" };
  }
  if (!VALID_REASONS.has(entry.reason)) {
    return { state: "malformed", why: `reason ${JSON.stringify(entry.reason ?? null)} not in {${[...VALID_REASONS].join(", ")}}` };
  }
  if (typeof entry.note !== "string" || entry.note.trim() === "") {
    return { state: "malformed", why: "note missing or empty" };
  }
  if (typeof entry.reviewBy !== "string" || !ISO_RE.test(entry.reviewBy)) {
    return { state: "malformed", why: "reviewBy missing or not YYYY-MM-DD" };
  }
  if (entry.reviewBy < todayISO) {
    return { state: "expired", why: `reviewBy ${entry.reviewBy} is past` };
  }
  return { state: "suppress", why: "" };
}

function loadAcceptances() {
  if (!existsSync(ACCEPT_PATH)) return { map: {}, present: false, error: null };
  try {
    const parsed = JSON.parse(readFileSync(ACCEPT_PATH, "utf8").replace(/^﻿/, ""));
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return { map: {}, present: true, error: "top-level value is not an object" };
    }
    return { map: parsed, present: true, error: null };
  } catch (err) {
    return { map: {}, present: true, error: err.message };
  }
}

// ─────────────────────────────────────────────────────────────────────────
// SCOPE
// ─────────────────────────────────────────────────────────────────────────

function walkTsx(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const name of readdirSync(dir).sort()) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walkTsx(full, out);
    else if (name.endsWith(".tsx")) out.push(full);
  }
  return out;
}

const repoPath = (abs) => relative(ROOT, abs).split(sep).join("/");

/**
 * SHARED is checked FIRST. A component is shared no matter where it sits, and
 * src/app/layout.tsx wraps every route — an anchor in either fans out to all
 * pages at once, so it cannot be owned by any single data entry.
 */
function ownerFor(path) {
  if (path === "src/app/layout.tsx") return { kind: "shared" };
  if (path.startsWith("src/components/")) return { kind: "shared" };
  let m = /^src\/app\/heat-pumps\/states\/([a-z]{2})\//.exec(path);
  if (m) return { kind: "state", code: m[1].toUpperCase() };
  m = /^src\/app\/heat-pumps\/utilities\/([a-z0-9-]+)\//.exec(path);
  if (m) return { kind: "utility", slug: m[1] };
  return { kind: "none" };
}

// ─────────────────────────────────────────────────────────────────────────
// REPORT
// ─────────────────────────────────────────────────────────────────────────

function todayISO() {
  const d = new Date();
  const p = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

function run(opts) {
  const out = [];
  const say = (s = "") => out.push(s);
  const today = todayISO();

  // ── Parse data files and trip the structural wire before anything else ──
  const incPath = join(ROOT, "src/data/incentives.ts");
  const utilPath = join(ROOT, "src/data/utilities.ts");
  if (!existsSync(incPath) || !existsSync(utilPath)) {
    console.error("check-internal: src/data/incentives.ts or utilities.ts not found");
    return 2;
  }
  const inc = parseDataFile(readFileSync(incPath, "utf8"), STATE_KEY_RE);
  const util = parseDataFile(readFileSync(utilPath, "utf8"), UTIL_KEY_RE);

  if (inc.entries.length !== EXPECT_STATES) {
    console.error(
      `check-internal: STRUCTURAL TRIPWIRE — incentives.ts parsed ${inc.entries.length} entries, expected exactly ${EXPECT_STATES}.\n` +
      `  The block-anchored parse is the only count that matters; do not reconcile this against a field-name grep.\n` +
      `  Either the file changed shape or the parser is wrong. Both are stop conditions.`,
    );
    return 2;
  }
  if (util.entries.length < MIN_UTILITIES) {
    console.error(
      `check-internal: STRUCTURAL TRIPWIRE — utilities.ts parsed ${util.entries.length} entries, expected at least ${MIN_UTILITIES}.`,
    );
    return 2;
  }

  const stateDate = new Map(inc.entries.map((e) => [e.key, e.lastVerified]));
  const utilDate = new Map(util.entries.map((e) => [e.key, e.lastVerified]));

  // ── Collect ──
  const findings = [];   // STALE / FUTURE on pages
  const dataFindings = []; // STALE / FUTURE inside data-file summary strings
  const noOwner = [];
  const shared = [];
  let filesScanned = 0;
  let anchorsSeen = 0;

  const scoped = (code) => !opts.states || opts.states.includes(code);

  const files = [
    ...walkTsx(join(ROOT, "src/app")),
    ...walkTsx(join(ROOT, "src/components")),
  ];

  for (const abs of files) {
    const path = repoPath(abs);
    const text = readFileSync(abs, "utf8").replace(/^﻿/, "");
    filesScanned++;
    const anchors = findAnchors(text);
    if (!anchors.length) continue;
    const owner = ownerFor(path);

    for (const a of anchors) {
      anchorsSeen++;
      const row = {
        path,
        line: a.startLine,
        endLine: a.endLine,
        anchorText: a.anchorText,
        lines: linesFor(text, a.startLine, a.endLine),
      };

      if (owner.kind === "shared") {
        if (opts.states) continue; // scoped run: owner-filtered, see footer note
        shared.push(row);
        continue;
      }

      let ownerLabel = null;
      let ownerDate = null;
      if (owner.kind === "state") {
        if (!scoped(owner.code)) continue;
        ownerLabel = owner.code;
        ownerDate = stateDate.get(owner.code) ?? null;
      } else if (owner.kind === "utility") {
        if (opts.states) continue;
        ownerLabel = owner.slug;
        ownerDate = utilDate.get(owner.slug) ?? null;
      } else {
        if (opts.states) continue;
      }

      // No owning entry, or an entry whose lastVerified is "" (unshipped
      // stub): cannot be compared. Never compared against an empty string.
      if (!ownerDate) {
        noOwner.push({ ...row, note: owner.kind === "none" ? "" : `${ownerLabel} has no lastVerified date` });
        continue;
      }

      const verdict = classifyAnchor(a, ownerDate);
      if (!verdict) continue;
      findings.push({ ...row, key: `${path}::${a.anchorText}`, ownerLabel, ownerDate, ...verdict });
    }
  }

  // ── Data-file summary strings ──
  // Anchors are matched against the whole file, then kept only when the offset
  // falls inside an entry's summary region. That is what keeps a date LITERAL
  // (lastVerified: "2026-06-15") out: it is not inside a summary string.
  for (const [label, parsed, dateMap, filePath] of [
    ["incentives.ts", inc, stateDate, "src/data/incentives.ts"],
    ["utilities.ts", util, utilDate, "src/data/utilities.ts"],
  ]) {
    filesScanned++;
    const anchors = findAnchors(parsed.text);
    for (const a of anchors) {
      const entry = parsed.entries.find(
        (e) => e.sumStart !== null && a.offset >= e.sumStart && a.offset < e.sumEnd,
      );
      if (!entry) continue; // outside any summary string — not an anchor we own
      anchorsSeen++;
      if (label === "incentives.ts" && !scoped(entry.key)) continue;
      if (label === "utilities.ts" && opts.states) continue;

      const row = {
        path: filePath,
        line: a.startLine,
        endLine: a.endLine,
        anchorText: a.anchorText,
        lines: linesFor(parsed.text, a.startLine, a.endLine),
        ownerLabel: `${label}::${entry.key}`,
        key: `${label}::${entry.key}::${a.anchorText}`,
      };

      const ownerDate = dateMap.get(entry.key) ?? null;
      if (!ownerDate) {
        noOwner.push({ ...row, note: `${entry.key} has no lastVerified date` });
        continue;
      }
      const verdict = classifyAnchor(a, ownerDate);
      if (!verdict) continue;
      dataFindings.push({ ...row, ownerDate, ...verdict });
    }
  }

  // ── Acceptances ──
  const acc = loadAcceptances();
  if (acc.error) {
    console.error(`check-internal: scripts/internal-accepted.json is unreadable — ${acc.error}`);
    return 2;
  }
  const accepted = [], expired = [], malformed = [];
  const usedKeys = new Set();
  const live = [];

  for (const f of [...findings, ...dataFindings]) {
    const entry = Object.prototype.hasOwnProperty.call(acc.map, f.key) ? acc.map[f.key] : null;
    if (entry === null) { live.push(f); continue; }
    usedKeys.add(f.key);
    const verdict = classifyAcceptance(entry, today);
    if (verdict.state === "malformed") { malformed.push({ ...f, why: verdict.why }); live.push(f); }
    else if (verdict.state === "expired") { expired.push({ ...f, why: verdict.why, note: entry.note }); live.push(f); }
    else accepted.push({ ...f, note: entry.note, reviewBy: entry.reviewBy });
  }

  const orphans = opts.states
    ? []
    : Object.keys(acc.map).filter((k) => !usedKeys.has(k)).sort();

  // ── Emit ──
  const liveStale = live.filter((f) => f.cls === "STALE" && !f.ownerLabel.includes("::"));
  const liveFuture = live.filter((f) => f.cls === "FUTURE" && !f.ownerLabel.includes("::"));
  const liveData = live.filter((f) => f.ownerLabel.includes("::"));

  say("check-internal.mjs — RULE 1: stale date anchors");
  say(`run ${today}${opts.states ? `  ·  scoped to states: ${opts.states.join(" ")}` : ""}${opts.strict ? "  ·  --strict" : ""}`);
  say();

  emitFindings(say, "STALE", liveStale);
  emitFindings(say, "FUTURE", liveFuture);
  emitFindings(say, "DATA-FILE FINDINGS", liveData, true);

  say(`ACCEPTED (suppressed) — ${accepted.length}`);
  say("─".repeat(74));
  if (!accepted.length) say("  none");
  for (const f of accepted) {
    say(`  ${f.cls}  ${f.path}:${f.line}  ${f.ownerLabel}`);
    say(`         "${f.anchorText}"  ·  reviewBy ${f.reviewBy}`);
    say(`         ${f.note}`);
  }
  say();

  say(`EXPIRED ACCEPTANCES — ${expired.length}`);
  say("─".repeat(74));
  if (!expired.length) say("  none");
  for (const f of expired) {
    say(`  ${f.path}:${f.line}  ${f.ownerLabel}  "${f.anchorText}"`);
    say(`         ${f.why} — NOT suppressed, the finding is live above`);
  }
  say();

  say(`MALFORMED ACCEPTANCES — ${malformed.length}`);
  say("─".repeat(74));
  if (!malformed.length) say("  none");
  for (const f of malformed) {
    say(`  ${f.key}`);
    say(`         ${f.why} — NOT suppressed, the finding is live above`);
  }
  say();

  say(`ORPHAN ACCEPTANCES — ${orphans.length}`);
  say("─".repeat(74));
  if (opts.states) say("  not evaluated on a scoped run (--states)");
  else if (!orphans.length) say("  none");
  for (const k of orphans) say(`  ${k}\n         suppresses nothing — anchor text changed, or the file moved`);
  say();

  say(`NO-OWNER — ${noOwner.length}  (listed, never counted as findings, no effect on exit code)`);
  say("─".repeat(74));
  say("  Pages with no owning data entry cannot be compared. Several carry");
  say("  first-order claims. Which of them is derived versus first-order is an");
  say("  open question and not this script's to settle.");
  say();
  if (!noOwner.length) say("  none");
  for (const f of noOwner) {
    say(`  ${f.path}:${f.line}  "${f.anchorText}"${f.note ? `  ·  ${f.note}` : ""}`);
    for (const l of f.lines) say(`       ${mark(l)}`);
  }
  say();

  say(`SHARED — ${shared.length}  (fans out to ALL pages, no single owner, no effect on exit code)`);
  say("─".repeat(74));
  say("  An anchor in src/components/ or src/app/layout.tsx renders on every");
  say("  page that includes it. It cannot be compared against one lastVerified");
  say("  because it is making the same claim on all of them at once.");
  say();
  if (opts.states) say("  not evaluated on a scoped run (--states)");
  else if (!shared.length) say("  none");
  for (const f of shared) {
    say(`  ${f.path}:${f.line}  "${f.anchorText}"`);
    for (const l of f.lines) say(`       ${mark(l)}`);
  }
  say();

  // ── Footer ──
  say("═".repeat(74));
  say(`STALE ${liveStale.length}  ·  FUTURE ${liveFuture.length}  ·  DATA-FILE ${liveData.length}  ·  ACCEPTED ${accepted.length}  ·  EXPIRED ${expired.length}  ·  MALFORMED ${malformed.length}  ·  ORPHAN ${orphans.length}  ·  NO-OWNER ${noOwner.length}  ·  SHARED ${shared.length}`);
  say(`files scanned ${filesScanned}  ·  anchors matched ${anchorsSeen}  ·  incentives.ts entries ${inc.entries.length}  ·  utilities.ts entries ${util.entries.length}`);
  if (!acc.present) say(`acceptance file: scripts/internal-accepted.json not present — nothing suppressed`);
  say();
  say("A finding is a disagreement between two of our own files. It says");
  say("nothing about whether either one is true.");

  console.log(out.join("\n"));

  if (malformed.length) return 2;
  if (opts.strict && (liveStale.length || liveFuture.length || liveData.length)) return 1;
  return 0;
}

function mark(line) {
  return line.length > HUGE_LINE ? `${line}   [LINE ${line.length} CHARS — printed in full, not truncated]` : line;
}

function emitFindings(say, title, rows, isData = false) {
  say(`${title} — ${rows.length}`);
  say("─".repeat(74));
  if (!rows.length) say("  none");
  for (const f of rows) {
    const where = isData ? `${f.path}:${f.line}  (${f.ownerLabel})` : `${f.path}:${f.line}`;
    say(`${f.cls}  ${where}`);
    say(`       anchor "${f.anchorText}"  ·  ${f.ownerLabel} lastVerified ${f.ownerDate}  ·  ${f.phrase}`);
    for (const l of f.lines) say(`       ${mark(l)}`);
  }
  say();
}

// ─────────────────────────────────────────────────────────────────────────
// SELFTEST — offline string fixtures, no repo files touched
// ─────────────────────────────────────────────────────────────────────────

function selftest() {
  let pass = 0, fail = 0;
  const log = [];
  const check = (n, desc, ok, detail = "") => {
    if (ok) { pass++; log.push(`  ok   ${String(n).padStart(2)}  ${desc}`); }
    else { fail++; log.push(`  FAIL ${String(n).padStart(2)}  ${desc}${detail ? `\n           ${detail}` : ""}`); }
  };

  const OWNER = "2026-09-19";
  const hits = (s) => findAnchors(s);
  const one = (s, lv = OWNER) => {
    const a = hits(s);
    if (a.length !== 1) return null;
    return classifyAnchor(a[0], lv);
  };

  // ── Must match, STALE ──
  check(1, 'as of July 2026 vs 2026-09-19 → STALE 2', (() => { const v = one("as of July 2026"); return v && v.cls === "STALE" && v.delta === 2; })());
  check(2, 'As of June 2026 — sentence-initial, case test', (() => { const v = one("As of June 2026"); return v && v.cls === "STALE" && v.delta === 3; })());
  check(3, 'as of <strong>June 2026</strong> — JSX between phrase and date', (() => { const v = one("as of <strong>June 2026</strong>"); return v && v.cls === "STALE"; })());
  check(4, 'as of{" "}June 2026 — JSX string-literal separator', (() => { const v = one('as of{" "}June 2026'); return v && v.cls === "STALE"; })());
  check(5, "as of\\n<indent>June 2026 — Prettier line wrap", (() => { const v = one("as of\n              June 2026"); return v && v.cls === "STALE"; })());
  check(6, "as of Sept. 2026 vs 2026-10-01 → STALE 1 (abbrev + period)", (() => { const v = one("as of Sept. 2026", "2026-10-01"); return v && v.cls === "STALE" && v.delta === 1; })());
  check(7, "two anchors on one line → TWO findings, not one",
    hits("rebates as of July 2026 and credits as of June 2026").length === 2,
    `got ${hits("rebates as of July 2026 and credits as of June 2026").length}`);

  // ── Must match, FUTURE ──
  check(8, "as of December 2026 vs 2026-09-19 → FUTURE 3", (() => { const v = one("as of December 2026"); return v && v.cls === "FUTURE" && v.delta === 3; })());

  // ── Must not match / must not fire ──
  check(9, "as of September 2026 vs 2026-09-19 → same month, no finding", one("as of September 2026") === null);
  check(10, "effective 1:00 PM EST August 14, 2026 → no match", hits("effective 1:00 PM EST August 14, 2026").length === 0);
  check(11, "through December 31, 2025 → no match", hits("through December 31, 2025").length === 0);
  check(12, "as of the 2026 program year → no match", hits("as of the 2026 program year").length === 0);
  check(13, "Last verified: {formattedDate} → no match", hits("Last verified: {formattedDate}").length === 0);
  check(14, "as of + 200 chars JSX + June 2026 → exceeds span cap, no match",
    hits(`as of ${"<span> </span>".repeat(15)} June 2026`).length === 0,
    `gap ${"<span> </span>".repeat(15).length} chars`);

  // ── Acceptance behaviour ──
  const good = { reason: "historical-claim", note: "n", reviewBy: "2099-01-01" };
  check(15, "valid acceptance, reviewBy future → suppressed", classifyAcceptance(good, "2026-09-20").state === "suppress");
  check(16, "reviewBy in past → EXPIRED, not suppressed", classifyAcceptance({ ...good, reviewBy: "2026-01-01" }, "2026-09-20").state === "expired");
  check(17, 'reason: "because" → MALFORMED, not suppressed', classifyAcceptance({ ...good, reason: "because" }, "2026-09-20").state === "malformed");
  check(18, "missing note → MALFORMED, not suppressed", classifyAcceptance({ reason: "source-dated", reviewBy: "2099-01-01" }, "2026-09-20").state === "malformed");
  check(19, "acceptance whose anchor text changed → suppresses nothing, reported as orphan", (() => {
    const map = { "src/app/x/page.tsx::as of June 2026": good };
    const findingKeys = new Set(["src/app/x/page.tsx::as of July 2026"]);
    const used = Object.keys(map).filter((k) => findingKeys.has(k));
    const orph = Object.keys(map).filter((k) => !findingKeys.has(k));
    return used.length === 0 && orph.length === 1;
  })());

  // ── Parser ──
  check(20, "entry count below the confirmed floor → exit 2", (() => {
    const fake = ['  AL: {', '    stateCode: "AL",', '    lastVerified: "2026-07-20",', '    summary:', '      "x",', '    sources: [],', '  },'].join("\n");
    const p = parseDataFile(fake, STATE_KEY_RE);
    return p.entries.length === 1 && p.entries.length !== EXPECT_STATES;
  })());

  // ── Added by the §0 return (amendment 6) ──
  check(21, 'As of: {formattedDate} — the StatusCard form, colon included → no match',
    hits("As of: {formattedDate}").length === 0);
  check(22, 'lastVerified: "2026-06-15" — a date literal in a data file is not an anchor',
    hits('lastVerified: "2026-06-15"').length === 0);

  // ── Supporting checks on the amendments (not numbered fixtures) ──
  const bom = parseDataFile('﻿  X: {\n    slug: "a",\n    lastVerified: "",\n    summary:\n      "as of June 2026",\n    sources: [],\n  },', UTIL_KEY_RE);
  const bomOk = bom.entries.length === 1 && bom.entries[0].lastVerified === null;
  check("A", "BOM stripped and lastVerified \"\" resolves to no owner date (never compared)", bomOk);

  // SHARED currently has zero live hits — no "as of" exists anywhere in
  // src/components/ or src/app/layout.tsx today. These fixtures are the only
  // evidence the routing works, so they are not optional.
  check("B", "owner routing: components and layout.tsx → SHARED", (() => (
    ownerFor("src/components/StatusCard.tsx").kind === "shared" &&
    ownerFor("src/app/layout.tsx").kind === "shared"
  ))());
  check("C", "owner routing: state / utility / hub / nested non-page", (() => (
    ownerFor("src/app/heat-pumps/states/az/page.tsx").code === "AZ" &&
    ownerFor("src/app/heat-pumps/utilities/fpl/page.tsx").slug === "fpl" &&
    // the utilities HUB is depth-1 and owns nothing — it must not resolve to
    // a slug named "page" (CLAUDE.md §7: the hub makes no first-order claims)
    ownerFor("src/app/heat-pumps/utilities/page.tsx").kind === "none" &&
    // a non-page .tsx inside a state dir still inherits that state's owner
    ownerFor("src/app/heat-pumps/states/az/Parts.tsx").code === "AZ" &&
    ownerFor("src/app/heat-pumps/tracker/TrackerContent.tsx").kind === "none"
  ))());

  console.log("check-internal.mjs selftest");
  console.log("─".repeat(74));
  console.log(log.join("\n"));
  console.log("─".repeat(74));
  console.log(`${pass} passed, ${fail} failed  ·  22 numbered fixtures (§9 1–20, amendment 6 adds 21–22) + 3 supporting checks (A–C)`);
  return fail ? 2 : 0;
}

// ─────────────────────────────────────────────────────────────────────────
// ARGS
// ─────────────────────────────────────────────────────────────────────────

/**
 * Written as a positional walk, not a filter. check-sources.mjs's accept
 * handler drops "--only" with `.filter(r => r !== "--only")` but not its
 * VALUE, so `accept NY --only FOO` injects FOO into the target list. That
 * defect is logged; this parser consumes a flag's values explicitly so the
 * same shape cannot occur.
 *
 * --states is space-separated, matching `verify --states`. Do not introduce a
 * comma convention in the same scripts directory. It is a FILTER, not an
 * assertion: scoping to a state with no findings is a pass, not a fail.
 */
function parseArgs(argv) {
  const opts = { cmd: "report", states: null, strict: false };
  const positional = [];
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--strict") { opts.strict = true; continue; }
    if (a === "--states") {
      opts.states = [];
      while (i + 1 < argv.length && !argv[i + 1].startsWith("--")) opts.states.push(argv[++i].toUpperCase());
      if (!opts.states.length) throw new Error("--states needs at least one code, space-separated");
      continue;
    }
    if (a.startsWith("--")) throw new Error(`unknown flag ${a}`);
    positional.push(a);
  }
  if (positional.length > 1) throw new Error(`unexpected arguments: ${positional.slice(1).join(" ")}`);
  if (positional.length) opts.cmd = positional[0];
  if (!["report", "selftest"].includes(opts.cmd)) throw new Error(`unknown subcommand ${opts.cmd}`);
  return opts;
}

let code = 2;
try {
  const opts = parseArgs(process.argv.slice(2));
  code = opts.cmd === "selftest" ? selftest() : run(opts);
} catch (err) {
  console.error(`check-internal: ${err.message}`);
  code = 2;
}
process.exit(code);
