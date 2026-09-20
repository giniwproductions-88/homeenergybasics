# SPEC — `check-internal.mjs` RULE 1: STALE DATE ANCHORS

Build brief for Claude Code. v1 scope only. Read §0 before anything else.

---

## 0. TWO THINGS TO CONFIRM BEFORE YOU BUILD

This spec was written chat-side from project knowledge, not from the repo.
Per the 9/06B operator note — *verify against the repo before writing a
brief that depends on it* — two assertions below are inherited, not
observed. Confirm both first and report what you find. If either is
wrong, say so and stop; do not adapt silently.

1. **Routes.** `src/app/heat-pumps/states/{abbr}/page.tsx` (51 expected)
   and `src/app/heat-pumps/utilities/{slug}/page.tsx` (6 expected).
   Source: `SITE-STATE-2026-08-22.md`, which is known stale in other
   respects.
2. **Date fields.** `incentives.ts` entries carry `lastVerified` and
   `lastUpdated` as `"YYYY-MM-DD"`; `utilities.ts` entries carry
   `lastVerified`, keyed by slug. Confirm `utilities.ts` actually has
   `lastVerified` per entry and whether it also has `lastUpdated`.

Report the actual file counts you find. A count that isn't 51 and 6 is
itself a finding.

---

## 1. WHAT THIS IS

A read-only cross-file consistency checker. Rule 1 is the first and
dumbest rule: **a date anchor in page prose that is older than the page's
own `lastVerified`.**

`check-sources.mjs` asks *did the source change*. This asks *do our own
pages agree with themselves and with `src/data/`*. Same shape, pointed
inward.

### Non-goals, stated so they don't creep in

- It does not fix anything. There is no `--fix`, now or later.
- It does not fetch. No network. It must run fully offline.
- It does not verify truth. A page and its data entry can agree
  perfectly and both be wrong. Rule 12 is unchanged: only rule 1's
  quoted-source test catches fabrication.
- It is not a replacement for the rendered read. It catches arithmetic
  and agreement, not meaning. It would not have caught the APS watch
  item, which contains no number and contradicts the body only
  semantically.

### The safety property, and it is load-bearing

**This script opens no file for writing.** No baseline, no accept
subcommand, no log it manages itself. The acceptance file (§6) is
hand-edited by the operator. If you find yourself needing a write path
in v1, the design is wrong — stop and say so.

---

## 2. INVOCATION

```
node scripts/check-internal.mjs                      # report, all pages
node scripts/check-internal.mjs --states AZ VT       # scope to states
node scripts/check-internal.mjs --strict             # exit 1 on findings
node scripts/check-internal.mjs selftest             # fixtures, §9
```

`--states` takes **space-separated** codes, not commas. This matches
`verify`'s existing behaviour and its logged limitation — do not
introduce a second convention in the same scripts directory.

Unlike `verify --states`, this flag is a **filter, not an assertion**.
Scoping to a state that has no findings is a pass, not a fail.

Operator run convention, matching the scraper:

```
cmd /c "node scripts\check-internal.mjs > internal-run-<date>.txt 2>&1"
```

Add `internal-run-*.txt` to `.gitignore` in the same commit that adds the
script. Run logs have been committed accidentally before.

`scripts/` is CRLF. Match it.

---

## 3. THE RULE

### 3.1 Anchor extraction

Match, case-insensitively, the phrase **"as of" followed by a month and a
four-digit year**.

Month names: full (`January`…`December`) and abbreviated (`Jan`, `Feb`,
`Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Sept`, `Oct`, `Nov`,
`Dec`), with or without a trailing period.

Three things the regex must tolerate, each of which has already cost a
miss on this site:

1. **Case.** `As of June 2026` sentence-initial is the most prominent
   form and the one a case-sensitive grep missed on MD. Case-insensitive
   is mandatory.
2. **Intervening JSX.** `as of <strong>June 2026</strong>` and
   `as of{" "}June 2026` are both live patterns in these files. Allow an
   arbitrary run of tags, entities, braces and whitespace between "as of"
   and the month, capped at ~80 characters so it can't span a paragraph.
3. **Line breaks.** Prettier wraps mid-phrase. Read each file as one
   string and match across newlines; compute the line number from the
   match offset afterwards.

**Count matches, not lines.** `grep -c` undercounts by design — MD's
`$15,000` moved 21→22 on an edit that added two. Two anchors on one line
are two findings.

**Print the full line, never truncated.** If a line is genuinely enormous,
print it anyway and mark it. Every claim made from truncated output last
session needed correction.

### 3.2 Out of scope, deliberately

These do **not** match and must not be added to rule 1:

- `effective August 14, 2026` — an event date, not a verification anchor.
- `through December 31, 2025` / `expires` — calendar claims. Those are
  playbook rule 6's grep and belong to a later rule, not this one.
- `2026` alone, `as of the 2026 program year` — no month, no comparison
  possible.
- The rendered `Last verified: {formattedDate}` line — it is a template
  and contains no month literal, so it will not match. Confirm that.

### 3.3 Date resolution

Map each page file to its owning data entry:

| Path | Owner | Field |
|---|---|---|
| `states/{abbr}/page.tsx` | `incentives.{ABBR}` | `lastVerified` |
| `utilities/{slug}/page.tsx` | `utilities["{slug}"]` | `lastVerified` |
| everything else under `src/app/` | none | — |

**`lastVerified`, not `lastUpdated`.** An "as of" anchor is a claim about
when someone last checked the world. `lastUpdated` is a fact about when
we last typed. If the two diverge — and they now can — the anchor is
making the `lastVerified` claim.

### 3.4 Parsing the data files

Do **not** import or refactor `check-sources.mjs`. Write a minimal local
parser for just `stateCode` + `lastVerified`.

Anchor on the entry block, never on the date string. `verify`'s date
scope already works this way and it is why NC's bump resolved to `{NC}`
alone while WA, WI, MI and WV sat on the same `2026-08-22` string.
Anchor on `stateCode: "XX"`, take the next `lastVerified:` within the
block.

Structural tripwire: if the parse yields fewer entries than the count you
confirmed in §0, **exit 2 and report**. Do not hardcode a floor below the
real count — `check-sources.mjs` has `MIN_STATES = 40` against 51 actual
entries, which is a logged defect. Do not copy it.

Two parsers for one file is a real debt. Log it in the handoff; do not
fix it by touching the working script.

### 3.5 The comparison

Compare at **month granularity**. Anchor `(year, month)` against
`lastVerified`'s `(year, month)`.

| Relation | Class | Fires |
|---|---|---|
| anchor month < lastVerified month | `STALE` | yes |
| anchor month == lastVerified month | — | no |
| anchor month > lastVerified month | `FUTURE` | yes |

`FUTURE` is a separate class and it fires. Playbook rule 11: claims with
dates rot, claims with conditions don't — an anchor dated ahead of the
verification that supposedly produced it is either a typo or a promise,
and both are defects.

No grace period. A one-month gap is a finding.

---

## 4. THE `NO-OWNER` CLASS

Pages with no owning data entry cannot be compared. Every anchor on them
goes into a separate `NO-OWNER` section: listed in full, never counted as
a finding, **no effect on exit code.** This mirrors the scraper's
NO-SIGNAL class exactly.

This is not filler. Roughly 17 pages have no `lastVerified` —
`/federal-heat-pump-tax-credit-expired`, `/battery/what-changed`,
`/heat-pumps/cost`, `/stacking-rebates`, `/tracker`, `/vs-furnace`,
`/when-not-to`, `/rebates-by-state`, `/savings-by-state`, the two hubs,
the legal pages. Several of those carry first-order claims. The
`NO-OWNER` list is the free survey of the eight directories `CLAUDE.md`
§7 documents nowhere.

**Do not propose adding `lastVerified` to any of them.** Derived pages
carry no verification date by ruleset, and which of those pages is
derived versus first-order is an open question, not yours to settle. List
what you find and stop.

---

## 5. OUTPUT

Plain text, grouped by owner, pasted into chat as-is. Per finding:

```
STALE  src/app/heat-pumps/states/az/page.tsx:412
       anchor "as of June 2026"  ·  AZ lastVerified 2026-09-19  ·  3 months behind
       <full source line, untruncated>
```

Sections in this order: `STALE`, `FUTURE`, `ACCEPTED (suppressed)`,
`EXPIRED ACCEPTANCES`, `MALFORMED ACCEPTANCES`, `NO-OWNER`.

Footer: counts per class, pages scanned, entries parsed, and this line,
verbatim:

> A finding is a disagreement between two of our own files. It says
> nothing about whether either one is true.

The scraper's footer already says a flag is triage, not verification.
Same discipline, same place.

---

## 6. ACCEPTANCES

`scripts/internal-accepted.json`. Hand-edited by the operator. Shape
follows `source-nosignal-accepted.json`, including its failure mode.

```json
{
  "src/app/heat-pumps/states/az/page.tsx::as of June 2026": {
    "reason": "historical-claim",
    "note": "Describes when APS closed the program, not when we checked.",
    "reviewBy": "2026-12-31"
  }
}
```

- **Key is `file::anchorText`. Never the line number.** Line numbers
  drift on every edit; a line-keyed acceptance either silently expires or
  migrates onto a different anchor.
- `reason` is an enum: `historical-claim` | `source-dated`. Nothing else.
- `note` and `reviewBy` are both **required**.
- Unrecognised or missing `reason`, `note` or `reviewBy` → **not
  suppressed.** The row lands in `MALFORMED ACCEPTANCES`. A broken file
  must not be able to hide rows silently.
- `reviewBy` in the past → **not suppressed.** The row returns under
  `EXPIRED ACCEPTANCES`. A mute with no expiry is what hid AZ for seven
  weeks; this is that lesson made mechanical.

**Branch order is load-bearing.** Check malformed first, then expired,
then suppress. The scraper's `classifyAcceptance` had exactly this bug —
a 403 reported as an improvement because the error branch came second.

---

## 7. EXIT CODES

| Code | Meaning |
|---|---|
| 0 | ran clean, or ran with findings and no `--strict` |
| 1 | `--strict` and at least one unsuppressed `STALE` / `FUTURE` |
| 2 | script error, parse failure, structural tripwire |

Default exit 0 on findings is deliberate. The first run is a survey and
will fire on multiple pages; it should not break anything. `--strict` is
what a pre-commit hook would call later, so the flag exists from day one
and no flag day is needed to turn it on.

`MALFORMED` rows exit 2 even without `--strict`. A broken acceptance file
is a tooling failure, not a content finding.

---

## 8. WHAT "DONE" LOOKS LIKE

1. `selftest` passes, fixture count reported.
2. A full run against the repo, output pasted into chat.
3. A one-paragraph account of which assumptions in §0 held and which
   didn't.

Nothing is fixed in this pass. Findings are triaged in chat, and any
`lastVerified` consequence goes through the normal rule-1 verification —
the checker never authorizes a date.

---

## 9. SELFTEST FIXTURES

Offline string fixtures, not repo files. Every case below is required;
each one is drawn from a real miss or a real pattern in these files.

**Must match, `STALE`:**

1. `as of July 2026` — page owner `lastVerified: 2026-09-19`
2. `As of June 2026` — sentence-initial, case test
3. `as of <strong>June 2026</strong>` — JSX between phrase and date
4. `as of{" "}June 2026` — JSX string-literal separator
5. `as of\n              June 2026` — Prettier line wrap
6. `as of Sept. 2026` against `2026-10-01` — abbreviation + period
7. Two anchors on one line → **two** findings, not one

**Must match, `FUTURE`:**

8. `as of December 2026` — owner `lastVerified: 2026-09-19`

**Must not match:**

9. `as of September 2026` — owner `lastVerified: 2026-09-19`, same month
10. `effective 1:00 PM EST August 14, 2026`
11. `through December 31, 2025`
12. `as of the 2026 program year`
13. `Last verified: {formattedDate}`
14. `as of` followed by 200 characters of JSX and then `June 2026` —
    exceeds the span cap, must not match

**Acceptance behaviour:**

15. Valid acceptance, `reviewBy` in future → suppressed
16. `reviewBy` in past → `EXPIRED`, not suppressed
17. `reason: "because"` → `MALFORMED`, not suppressed
18. Missing `note` → `MALFORMED`, not suppressed
19. Acceptance keyed to a file whose anchor text has since changed → does
    not suppress anything, and is reported as an orphan

**Parser:**

20. Entry count below the confirmed floor → exit 2

---

## 10. WHAT COMES AFTER, NOT NOW

Logged so it isn't invented mid-build. Do not build any of it in v1.

- **Rule 2 — `incentives.ts` summary vs page dollar set.** Fifty-one
  summaries, fifty-one pages, nothing checking they agree. This is where
  the real risk lives and it is the next thing built.
- **Rule 3 — pay-box arithmetic.** Re-derive the "what you'll actually
  pay" range from the stacking scenario cards on the same page. The AZ
  pay box subtracted a water-heater rebate from a heat-pump-only install:
  every figure correct, the arithmetic across them wrong.
- **Rule 4 — Short Version card dollar sets vs body.** The reconcilable
  half of Layer 2's card-vs-body check.

Rule 1 ships alone. One rule, run across the site, see what it finds.
