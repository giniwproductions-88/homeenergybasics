# SPEC — `check-internal.mjs` RULE 1: STALE DATE ANCHORS

Build brief for Claude Code. v1 scope only. Read §0 before anything else.

---

## 0. THE TWO ASSERTIONS — CONFIRMED 2026-09-20

This spec was written chat-side from project knowledge, not from the repo.
Per the 9/06B operator note — *verify against the repo before writing a
brief that depends on it* — the two assertions below were inherited, not
observed. **Both were checked against the repo on 2026-09-20 and both
held.** Nothing in §1–§9 rests on an unverified count any more.

1. **Routes — confirmed.** `src/app/heat-pumps/states/{abbr}/page.tsx` =
   **51**. `src/app/heat-pumps/utilities/{slug}/page.tsx` = **6**. No
   orphaned siblings: a `*.tsx` sweep of `states/` returns the same 51
   files, so there is no third `lapage.tsx`-shaped duplicate.
2. **Date fields — confirmed, and the open question answered.**
   `incentives.ts` carries **51** entries, every one with `lastVerified`
   **and** `lastUpdated`, all matching `^\d{4}-\d{2}-\d{2}$`.
   `utilities.ts` carries **6** entries, every one with `lastVerified`,
   and **it does also carry `lastUpdated`** — that was the open question
   in the original brief.

Page-to-entry mapping is **1:1 in both directions**: 51 state dirs ↔ 51
`stateCode`s, 6 utility dirs ↔ 6 slugs, `diff` clean. No page without an
entry, no entry without a page.

### Two things the §0 return turned up that the brief did not predict

- **`lastUpdated` is no longer inert.** `CLAUDE.md` §8 items 2 and 26
  both assert it is byte-identical to `lastVerified` on all 51 states and
  all 6 utilities. That is **false as of 2026-09-20**: eight entries
  diverge — states **OR, CO, TX, WI, MO, KY, NE**, and utility
  **efficiency-maine** (`lastVerified 2026-07-16` vs `lastUpdated
  2026-09-16`). §3.3's "`lastVerified`, not `lastUpdated`" is therefore
  load-bearing on live data, not a precaution. Reported, not fixed —
  correcting `CLAUDE.md` is the operator's call.
- **`utilities.ts` carries a UTF-8 BOM**; `incentives.ts` does not. See
  amendment 4.

### The six amendments from the §0 return

Folded into the sections below rather than appended, so there is one
current spec and not a spec plus a correction sheet.

| # | Amendment | Lives in |
|---|---|---|
| 1 | Scan scope widened to all `.tsx`, plus `src/components/`, plus data-file summary strings | §1.1, §3.3 |
| 2 | New `SHARED` class for `src/components/` and `src/app/layout.tsx` | §4.1, §5 |
| 3 | Data-file summary anchors resolve to their own entry and classify normally | §3.3, §5, §6 |
| 4 | `utilities.ts`: strip BOM; `lastVerified: ""` means no owner date | §3.4 |
| 5 | Tripwire: exactly 51 states, at least 6 utilities, block-anchored count only | §3.4 |
| 6 | Two added must-not-match fixtures | §9 |

---

## 1. WHAT THIS IS

A read-only cross-file consistency checker. Rule 1 is the first and
dumbest rule: **a date anchor in page prose that is older than the page's
own `lastVerified`.**

`check-sources.mjs` asks *did the source change*. This asks *do our own
pages agree with themselves and with `src/data/`*. Same shape, pointed
inward.

### 1.1 Scan scope (amendment 1)

- `src/app/**/*.tsx` — **every** `.tsx`, not just `page.tsx`.
- `src/components/*.tsx`
- The **`summary:` strings** in `src/data/incentives.ts` and
  `src/data/utilities.ts`.

Scoping to `page.tsx` would have missed
`src/app/heat-pumps/tracker/TrackerContent.tsx`, which holds the
tracker's prose while `page.tsx` is a thin wrapper — and which does in
fact carry an anchor. The `.tsx` sweep also picks up `src/app/layout.tsx`
(2 non-page `.tsx` files under `src/app/` as of 2026-09-20).

Data files are scanned **summary strings only**, not whole-file. The
region runs from an entry's `summary:` to its `sources:`, and an anchor
counts only if its offset falls inside that region. This is what keeps a
date *literal* out: `lastVerified: "2026-06-15"` is not inside a summary
string, so it can never be read as an anchor (fixture 22 guards the
regex independently). `incentives.ts` summary strings are a second claim
surface, rendered by `StatusCard` on every state page — a survey that
skips them misses card/page disagreements, which occur in both
directions.

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

Map each scanned file to its owning data entry. **Checked top to bottom;
first match wins** — `SHARED` must be tested before the route patterns,
because a shared file's location is not what makes it shared.

| Path | Owner | Class |
|---|---|---|
| `src/components/**/*.tsx` | none | `SHARED` |
| `src/app/layout.tsx` | none | `SHARED` |
| `states/{abbr}/**/*.tsx` | `incentives.{ABBR}` | compared on `lastVerified` |
| `utilities/{slug}/**/*.tsx` | `utilities["{slug}"]` | compared on `lastVerified` |
| `incentives.ts` summary of entry `{ABBR}` | that entry | compared on `lastVerified` |
| `utilities.ts` summary of entry `{slug}` | that entry | compared on `lastVerified` |
| everything else under `src/app/` | none | `NO-OWNER` |

Two consequences of the widened scope (amendment 1), both deliberate:

- A **non-page** `.tsx` inside a state or utility directory inherits that
  entry's owner. None exist today; the rule is stated so the answer is
  not invented later.
- `src/app/heat-pumps/utilities/page.tsx` is the **hub**, at depth 1. It
  must resolve to `NO-OWNER`, not to a slug named `"page"`. `CLAUDE.md`
  §7: the hub carries no `lastVerified` because it makes no first-order
  claims. Selftest check C pins this.

**Data-file anchors (amendment 3).** An anchor inside a `summary:` string
resolves to the `lastVerified` of **the entry it sits inside** — never to
a neighbouring entry, and never to a file-level date. It then classifies
`STALE`/`FUTURE` exactly like a page anchor and **counts toward the exit
code**. It is reported in its own section (§5) keyed `incentives.ts::AZ`,
because "which entry" is the thing the operator needs and a bare
`src/data/incentives.ts:759` does not say it.

**`lastVerified`, not `lastUpdated`.** An "as of" anchor is a claim about
when someone last checked the world. `lastUpdated` is a fact about when
we last typed. If the two diverge — **and as of 2026-09-20 they do, on
eight entries, see §0** — the anchor is making the `lastVerified` claim.

### 3.4 Parsing the data files

Do **not** import or refactor `check-sources.mjs`. Write a minimal local
parser for just `stateCode` + `lastVerified`.

Anchor on the entry block, never on the date string. `verify`'s date
scope already works this way and it is why NC's bump resolved to `{NC}`
alone while WA, WI, MI and WV sat on the same `2026-08-22` string.
Anchor on `stateCode: "XX"`, take the next `lastVerified:` within the
block.

**`utilities.ts` handling (amendment 4).** Two specifics, both observed
in the §0 return:

- **Strip the UTF-8 BOM before parsing.** `utilities.ts` carries one,
  `incentives.ts` does not. Stripping at offset 0 shifts every subsequent
  offset consistently, so line numbers computed from the stripped text
  stay correct.
- **`lastVerified: ""` means NO OWNER DATE.** The schema is
  `ISODate | ""` and `""` marks an unshipped stub that `shippedUtilities()`
  gates out. Such an entry's anchors go to `NO-OWNER`. They are **never
  compared against an empty string** — an empty string sorts before every
  real date and would otherwise manufacture a `FUTURE` on every anchor in
  the entry. No entry is empty today; the rule exists so the first stub
  does not produce a page of phantom findings.

**Structural tripwire (amendment 5).** Exit 2 and report unless:

- `incentives.ts` yields **exactly 51** entries, and
- `utilities.ts` yields **at least 6** entries.

Exact for states because 51 is all of them and a 52nd is a different kind
of event; a floor for utilities because that set is still growing.

**Never count field-name occurrences. The block-anchored parse is the
only count.** `grep -c 'lastVerified:'` returns **54** against
`incentives.ts` — one interface declaration plus two function parameters
on top of the 51 real entries. A tripwire calibrated against that number
is calibrated against a number that does not mean what it looks like,
which is the same family of error as `check-sources.mjs`'s
`MIN_STATES = 40` against 51 actual entries. That defect is logged; do
not copy it, and do not reconcile the parse against a field grep.

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

This is not filler. **Exactly 17** `page.tsx` routes have no
`lastVerified`, enumerated 2026-09-20, not estimated:

```
src/app/page.tsx                                  ← site root
src/app/about/page.tsx
src/app/contact/page.tsx
src/app/privacy/page.tsx
src/app/affiliate-disclosure/page.tsx
src/app/battery/page.tsx
src/app/battery/what-changed/page.tsx
src/app/federal-heat-pump-tax-credit-expired/page.tsx
src/app/heat-pumps/page.tsx                       ← hub
src/app/heat-pumps/cost/page.tsx
src/app/heat-pumps/rebates-by-state/page.tsx
src/app/heat-pumps/savings-by-state/page.tsx
src/app/heat-pumps/stacking-rebates/page.tsx
src/app/heat-pumps/tracker/page.tsx
src/app/heat-pumps/utilities/page.tsx             ← hub
src/app/heat-pumps/vs-furnace/page.tsx
src/app/heat-pumps/when-not-to/page.tsx
```

The original brief named 13 of these. The four it did not name are
**`/about`, `/contact`, `/battery`, and `/` (site root)** — which is
precisely why the list is enumerated here rather than described. Under
amendment 1, `src/app/heat-pumps/tracker/TrackerContent.tsx` also lands
in `NO-OWNER`; it is not a `page.tsx` and a `page.tsx`-only sweep would
have skipped it while it carries an anchor.

Arithmetic, so a later reader can re-derive it: 51 + 6 + 17 = 74
`page.tsx`, plus 2 non-page `.tsx` = 76 `.tsx` under `src/app/`.

Several of those carry first-order claims. The `NO-OWNER` list is the
free survey of the eight directories `CLAUDE.md` §7 documents nowhere.

**Do not propose adding `lastVerified` to any of them.** Derived pages
carry no verification date by ruleset, and which of those pages is
derived versus first-order is an open question, not yours to settle. List
what you find and stop.

### 4.1 The `SHARED` class (amendment 2)

Anchors in `src/components/**/*.tsx` and `src/app/layout.tsx` get their
own class, **`SHARED`**. Reported in full, never counted as a finding,
**no effect on exit code** — the same contract as `NO-OWNER`.

`SHARED` is not a flavour of `NO-OWNER` and must not be merged into it.
A `NO-OWNER` anchor makes a claim on **one** page that happens to have no
data entry. A `SHARED` anchor is rendered into **every page that includes
the component**, so it is making the same claim against 51 different
`lastVerified` dates simultaneously. There is no single date to compare
it to, and the fan-out is the whole point of reporting it — the section
must say so on its face.

`SHARED` sits between `NO-OWNER` and the footer (§5).

**Currently empty, and that is a real state, not a silent failure.** No
`as of` exists anywhere in `src/components/` or `src/app/layout.tsx` as
of 2026-09-20, independently grep-confirmed. Because a live run therefore
exercises none of this routing, selftest check B pins it instead. A
`SHARED` count of 0 in a report means the class is wired and empty, not
that it was skipped.

---

## 5. OUTPUT

Plain text, grouped by owner, pasted into chat as-is. Per finding:

```
STALE  src/app/heat-pumps/states/az/page.tsx:412
       anchor "as of June 2026"  ·  AZ lastVerified 2026-09-19  ·  3 months behind
       <full source line, untruncated>
```

A data-file finding (amendment 3) uses the same three-line shape, with
the owning entry named in the location line:

```
STALE  src/data/incentives.ts:759  (incentives.ts::MI)
       anchor "as of July 2026"  ·  incentives.ts::MI lastVerified 2026-08-22  ·  1 month behind
       <full source line, untruncated>
```

Sections in this order:

1. `STALE`
2. `FUTURE`
3. `DATA-FILE FINDINGS` — amendment 3
4. `ACCEPTED (suppressed)`
5. `EXPIRED ACCEPTANCES`
6. `MALFORMED ACCEPTANCES`
7. `ORPHAN ACCEPTANCES` — required by fixture 19, which the original
   section list omitted
8. `NO-OWNER`
9. `SHARED` — amendment 2
10. Footer

`DATA-FILE FINDINGS` sits third so that everything which can move the
exit code stays contiguous at the top, ahead of the acceptance
bookkeeping and the two no-effect classes. `NO-OWNER` and `SHARED` are
last for the same reason, in that order, with `SHARED` immediately
before the footer.

Footer: counts per class, files scanned, anchors matched, entries parsed
per data file, whether an acceptance file was present at all, and this
line, verbatim:

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
- **Data-file findings key on the entry, not the file** (amendment 3):
  `incentives.ts::AZ::as of June 2026`, `utilities.ts::fpl::as of June
  2026`. A plain `src/data/incentives.ts::as of June 2026` would suppress
  that anchor text in **every one of the 51 summaries at once** — the
  same blast-radius mistake as anchoring a date edit on the date string
  instead of the `stateCode` block.
- **`anchorText` is the normalized anchor**, exactly as the report prints
  it between quotes: `as of` lowercased, month as written with any
  trailing period kept, single spaces. So `As of <strong>June 2026</strong>`
  keys as `as of June 2026`. Copy it from the report rather than from the
  source line — the source line may contain JSX the key does not.
- **An acceptance that matches no finding is an orphan.** It suppresses
  nothing and is reported under `ORPHAN ACCEPTANCES`, because the usual
  cause is that the anchor text was edited and the acceptance is now
  silently protecting a string that no longer exists. Orphans are not
  evaluated on a `--states` run, where a key legitimately matches nothing
  because its page was filtered out; the report says so rather than
  listing every key as an orphan.
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
| 1 | `--strict` and at least one unsuppressed `STALE` / `FUTURE`, **including a data-file finding** (amendment 3) |
| 2 | script error, parse failure, structural tripwire, malformed acceptance |

`NO-OWNER`, `SHARED` and `ORPHAN ACCEPTANCES` never affect the exit code,
under any flag. They are survey output. A run whose only output is those
three sections exits 0 even under `--strict`.

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

**Added by the §0 return (amendment 6) — both must-not-match:**

21. `As of: {formattedDate}` — the `StatusCard` form, **colon included**.
    The colon means a naive "as of" phrase match sees the phrase and then
    a JSX brace; nothing may match, because a template contains no month
    literal. Related to fixture 13 and distinct from it: 13 covers
    `Last verified:`, which does not contain the phrase "as of" at all,
    so it proves nothing about the phrase-plus-template case.
22. `lastVerified: "2026-06-15"` — a date literal in a data file is
    **not** an anchor. Under amendment 1 the checker reads data files, so
    this is now a live confusion and not a hypothetical one. Two
    independent defences: the regex requires the literal phrase "as of",
    and the scan only considers offsets inside a `summary:` region.

**Supporting checks (not numbered fixtures), required because a live run
exercises none of them:**

- **A** — BOM stripped, and `lastVerified: ""` resolves to *no owner
  date* rather than to a comparable empty string (amendment 4).
- **B** — `src/components/**` and `src/app/layout.tsx` route to `SHARED`
  (amendment 2). `SHARED` is empty against the current repo, so this is
  the only evidence the routing works.
- **C** — owner routing for state, utility, the depth-1 utilities **hub**
  (must be `NO-OWNER`, never a slug named `"page"`), a non-page `.tsx`
  inside a state directory, and `TrackerContent.tsx`.

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
