# FORWARD — 2026-09-08 — Scanner tuning

Scope: `scripts/check-sources.mjs`, `scripts/source-ignore.json`,
`scripts/source-baseline.json`, `CLAUDE.md`. No page content changed in this
session; no `lastVerified` moved.

**Format note.** This document was asked to match `FORWARD-2026-09-07-26-2-SWEEP.md`.
That file does not exist in this repo — not in the working tree, not tracked, not
in any branch's history, and there are no untracked files at root. The structure
below is therefore mine, not matched to a precedent I could read.

**Sourcing.** Everything here is derived from the repo at `a6f33ba`: `git log`,
per-commit diffs, file contents, `scripts/source-diff-report.md`, and
`check-out.txt`. Counts were re-derived at the point of writing. Anything I
could not verify from the repo is marked inline.

---

## 1. What shipped

Twelve commits, `d3660e5` through `a6f33ba`, all on 2026-09-07 between 19:45 and
21:31. Working tree clean at `a6f33ba`.

**A. The date-field invariant (`d3660e5`, `ad9474c`)**
`d3660e5` removed the `lastUpdated <= lastVerified` ordering assertion from verify
check 4 — the assertion was false, since a page corrected without being
re-verified legitimately carries a later `lastUpdated`. `ad9474c` added a
monotonicity test for `lastUpdated` mirroring the existing one for `lastVerified`,
and amended CLAUDE.md §2 to state monotonicity and independence as separate
properties. Net effect: each field is tested on its own; no ordering between them
is asserted anywhere.

**B. The cross-page status check (`b45310c`)**
153 lines added to `check-sources.mjs`: verify check 7, a report-only detector for
disagreement between a cross-page file and `incentives[code].summary`. Detail in §3.

**C. Scraper correctness and self-description (`d1de0e2`, `79df309`)**
`d1de0e2` did four things: renamed verify check 4 from `INVARIANT` to
`MONOTONICITY` (the ordering test it was named for no longer exists); commented
the null guard in that check; fixed `extractDollars` so a match must end on a
digit, stopping `"$400–$1,200, OPPD"` from yielding `"$1,200,"`; and recorded the
status check's program-bucket coverage gap. `79df309` added CLAUDE.md §8 items 27
and 28 and corrected the file-header line that called a mute a "skip".

**D. Baseline renormalization (`3044943`, `08bccf4`, `fd89ab0`, `9a93cfa`)**
`3044943` added `accept --renormalize` (110 lines) plus the CLAUDE.md §6 sanction.
`08bccf4` added KS to the hold list and split the hold list into two kinds.
`fd89ab0` stopped renormalize stamping `generatedAt` and added CLAUDE.md §8 item
26. `9a93cfa` is the only data commit in the group: 9 insertions, 12 deletions in
`source-baseline.json`. Detail in §7.

**E. The ignore list (`84ff45e`, `2c9e423`)**
`84ff45e` migrated `source-ignore.json` from a flat array to
`{url: {reason, note, review}}`, changed the reader to accept both shapes, and
added the announcement-channel rule note at the read site. `2c9e423` un-muted
three announcement channels. Detail in §6.

**F. The NY accept (`a6f33ba`)**
Baseline only: 29 insertions, 24 deletions, 8 NY URLs adopted. Detail in §9.

---

## 2. The `lastUpdated` gate

Re-derived at the point of writing, not carried from any summary.

**11 read sites across 9 files.** All read the data field from `incentives.ts` or
`utilities.ts`:

| file | lines |
|---|---|
| `src/app/heat-pumps/states/fl/page.tsx` | 88 |
| `src/app/heat-pumps/states/in/page.tsx` | 40 |
| `src/app/heat-pumps/states/ky/page.tsx` | 87 |
| `src/app/heat-pumps/states/nc/page.tsx` | 42 |
| `src/app/heat-pumps/states/nj/page.tsx` | 22, 86, 95 |
| `src/app/heat-pumps/states/oh/page.tsx` | 95 |
| `src/app/heat-pumps/states/sc/page.tsx` | 87 |
| `src/app/heat-pumps/utilities/duke-energy/page.tsx` | 77 |
| `src/app/heat-pumps/utilities/fpl/page.tsx` | 117 |

Trap for the next survey: `src/app/battery/page.tsx` declares its own local
`const lastUpdated = "March 22, 2026"` at :15 and reads it at :96 and :549. A bare
grep returns 3 extra hits that are a name collision, not reads of the data field.

**Decision: keep the field.** Removal is not inert. Eight of these sites render a
visible "Updated … · Verified …" line, so removing the field changes published
output on FL, IN, KY, NC, NJ, OH, SC and duke-energy. `fpl/page.tsx:117`
synthesizes a `StatusCard` object that requires it. And on NJ the field feeds
structured data, so removal changes what ships to search engines and assistants,
not just what a reader sees.

**Inconsistency, flagged not adjudicated.** NJ wires both its OpenGraph
`modifiedTime` (:22) and its JSON-LD `dateModified` (:86) to `lastUpdated`. Across
`src/app/heat-pumps/states/`, `dateModified` is wired to `lastVerified` in **50**
files and to `lastUpdated` in **1** — NJ. I am not asserting which is correct:
schema.org `dateModified` describes the document, which argues for `lastUpdated`,
but 50 pages do the other thing and the two fields currently hold identical values
everywhere, so nothing observable distinguishes them today. This needs a decision,
not a patch.

---

## 3. The status-vocabulary check (verify check 7)

Report-only. No auto-fix, no writes, no date changes. Findings are phrased as
"DISAGREES", never "wrong".

**What it does.** Classifies status phrases from a closed vocabulary
(`STATUS_AVAILABLE`, `STATUS_UNAVAILABLE`, `check-sources.mjs:676-685`) into
AVAILABLE / UNAVAILABLE / FUTURE / HEDGED, on both sides of a comparison: a
cross-page file and the matching `incentives[code].summary`. It reports pairs where
one side reads AVAILABLE and the other UNAVAILABLE for the same state and the same
program bucket. FUTURE and HEDGED are separate classes precisely so "when HEAR
launches" never reads as "launched" and "expected Fall 2026" never reads as an
assertion either way.

State attribution is per sentence: a tier object's `code:` field, state names
matched against `incentives.ts`, or `/heat-pumps/states/xx` links on the raw line.
JSON-LD FAQ blocks are in scope — they are ordinary lines in the same files.

**What it excludes, and that the exclusion is recorded.** `CROSSPAGE_FILES`
(`:757`) is `["rebates-by-state", "stacking-rebates"]`. The scope comment at
`:744-748` records why, as a decision rather than an oversight:

> `when-not-to`, `cost` and `vs-furnace` were measured on 2026-09-07: between them
> they carry 16 status phrases and attribute ZERO to any state, because their
> status language is about no state in particular.

I re-derived that 16 while writing this: when-not-to 12, cost 1, vs-furnace 3,
attributed 0. It holds.

A second recorded limit sits at `:749-756`, the **program-bucket gap**:
`statusProgram()` reads one sentence at a time, so a tier note naming no program
buckets GENERAL while a summary sentence naming HEAR/HOMES buckets HEAR, and the
two are never compared. FL is the worked example in the comment. Tier notes rarely
name a program, so this is the common shape rather than an edge case.

**Why this and not a figure-comparison check.** The decision came from a dry run
whose output is not in the repo. The conclusion — that cross-page contradictions
were predominantly status and date prose rather than figures, and that figure
comparison would mostly surface unattributable numbers — is recorded here; the
supporting measurements are **[operator-supplied, not verified from repo]**:
that roughly 11 of 13 known contradictions were status/date prose, and that only
about 31% of cross-page dollar figures were attributable to a single state. I could
not reproduce either number from repo contents. What I *can* verify is the
attribution asymmetry the scope comment rests on, above, and that the shipped check
is status-based.

---

## 4. The `yet` finding

`yet` was in the clause-boundary set. In "approved but not yet launched" it sits
between the negator and the phrase, so the nearest boundary left of `launched` was
`yet` itself, the clause reduced to a single space, `not` became unreachable, and
the polarity inverted — turning every not-yet-launched claim into an AVAILABLE
assertion.

**The code comment records it**, at `check-sources.mjs:690-697`:

> Clause boundary, searching LEFT from a match. A fixed character window both
> over-reaches (crossing into a neighbouring clause) and under-reaches (missing a
> negator further left in the same clause). "…did not happen and it now awaits" put
> "not" 41 chars from "awaits" across an "and", which flipped the polarity and
> produced a false OR finding. Boundaries: , ; : ( ) dash, or a coordinating
> /subordinating conjunction, or the start of the sentence. "yet" is deliberately
> NOT a boundary: "not yet launched" would put the break between the negator and
> the phrase, making "not" unreachable and inverting every not-yet-launched claim.

**That comment is the only record.** `yet` in this sense appears nowhere in
CLAUDE.md, and no commit message in `d3660e5..a6f33ba` mentions it — `b45310c`
ships the check without describing the bug found while building it. If that comment
is ever tidied, the finding is gone.

---

## 5. Mutes are fetch-through

Verified against the shipped code. In `check` mode:

- `check-sources.mjs:1179` — `const latest = await snapshotAll(urls);`
- `check-sources.mjs:1202` — `const ignoreRaw = loadJson(IGNORE_F, []);`
- `check-sources.mjs:1203` — `const ignoreSet = new Set(Array.isArray(ignoreRaw) ? ignoreRaw : Object.keys(ignoreRaw));`

The fetch completes 23 lines before the ignore set exists. Nothing between them
consults it. **A muted URL is fetched on every run and written into
`source-latest.json` like any other.** The mute suppresses the report row, not the
request: muted means watched and silenced, not unwatched.

**Consequence for baseline history.** Because muted URLs keep being fetched and can
still be adopted by `accept`, the baseline holds continuous history for them. A
change that landed while a URL was muted may be recoverable from stored snapshots
rather than lost — the place to look before assuming it is gone. This is now
CLAUDE.md §8 item 27, and the file header at `:49-52` was corrected in `79df309`,
which had said "URLs to skip/mute".

The one sweep worth recording: `skip` appears elsewhere in the file, and every
other occurrence is accurate about what it skips (the diff row, the NO SIGNAL walk,
shared URLs in accept, files in verify). The misleading wording existed in exactly
one place.

---

## 6. Two shapes of source failure

The rule note lives at `check-sources.mjs:1181-1194`, immediately above the ignore
read site, and is the record — not restated from scratch here.

It states the rule (an announcement channel is never muted; only a consumer portal
may be), the reasoning (muting a portal is a coverage decision with a known cost;
muting the channel that announces a change is a blind spot, because the portal goes
on reporting UNCHANGED while the rule moved somewhere nobody is looking), the
logged AZ instance, the three channels that sat muted in this file until
2026-09-07, and the second form: if no deeper path is cited, the fix is to cite one
rather than mute the only watch, with `philaenergy.org` named as the live example.

CLAUDE.md §8 item 28 carries the same distinction in guardrail form. The closing
generalization there is the part that outlives these URLs: a label shared by two
entries is not evidence they share a cause — those two were muted in one commit
under one label and are not the same defect.

---

## 7. `accept --renormalize`

**What it does.** Rewrites stored dollar strings in the baseline to what the
corrected `extractDollars` produces: strips a trailing separator, re-dedupes,
re-sorts. Dry-run by default; `--apply` writes. Prints per-URL before/after either
way, and names every dedupe collision explicitly, because a figure count dropping
is the one outcome that looks like data loss.

It lives inside the accept path (`:1274`), reached by a flag read directly off
`rest` rather than through the accept target parser, which uppercases every token
and would turn the flag into a bogus state code.

**No-fetch enforcement, two mechanisms.** First, the transformation is a pure
function — `renormalizeDollarList` (`:484-491`) takes strings and returns strings,
with no I/O, no clock and no argument it could not have been handed. That purity is
the stated licence for writing the baseline without a fetch behind it. Second, the
global `fetch` binding is replaced with a thrower for the duration of the call and
restored in a `finally` (`:1021-1022`); `fetchSnapshot` is the only code in the file
that reaches the network and it calls the global `fetch`, so the path cannot reach
it. CLAUDE.md §6 records the sanction and both properties.

**The run.** `9a93cfa` — 12 entries rewritten, 12 figures, 3 dedupe collisions
(CO, VA, RI), 3 held. Baseline delta: 9 insertions, 12 deletions, no other field
touched.

**The three holds, two kinds** (`:493-518`). The comment exists to stop all three
being cleared together:

- **KIND 1 — EXTRACTOR** (`cityofames.org`, `efficiencymaine.com/home-energy-loans`).
  An open question about what the figure *is*. `"$2,"`, `"$5,"`, `"$10,"` may be a
  literal list (already correct) or a split thousands separator (really $2,500).
  Stripping the comma yields a clean string that may still be the wrong number.
  Lifts only when someone reads the page. Note for whoever does: the 2026-09-07
  run does **not** settle it — the fixed extractor returns `$2` under either
  mechanism, so the HIGH rows in §9 are not evidence for either reading.
- **KIND 2 — TEMPORARY** (`kshousingcorp.org/weatherization-assistance`). The
  extraction is fine; the entry is held because it carries a real unadjudicated
  change. Lifts as soon as KS is adjudicated, independently of KIND 1.

**Field-level accept was considered and rejected.** The reasoning was that
`dollars` is the tripwire — a dollar-set delta bumps straight to HIGH while a
`textHash` change is only LOW — so adopting "just the dollars" adopts precisely the
field that matters and leaves the harmless ones un-adopted; and it would still
require a `check` run, so it would absorb whatever the site served that day, real
changes included. **That reasoning is recorded nowhere in the repo.** Grep for
`field-level`, `--fields`, `single field`, `whole entry`, `whole snapshot` across
`check-sources.mjs` and `CLAUDE.md` returns nothing. If it matters, it needs
writing down; this paragraph is currently its only home.

---

## 8. The full check run

Run at 2026-09-07 21:22 local (fetch timestamps 2026-09-08T02:21Z), against
baseline `2026-09-07T19:29:41.953Z`. Numbers from `check-out.txt` and
`scripts/source-diff-report.md`, both regenerated by that run and both gitignored.

The run sits between `79df309` (21:20) and `a6f33ba` (21:31), so it used the
renormalized baseline, the fixed `extractDollars`, and the post-un-mute ignore list
— but predates the NY accept.

| | |
|---|---|
| URLs checked | 409 |
| unchanged | 158 |
| flagged | 220 |
| HIGH | 44 |
| FETCH | 12 |
| LOW | 162 |
| NEW | 2 |
| NO SIGNAL | 52 (17 accepted — 15 by-design, 2 js-rendered) |
| MUTED AND HOLLOW | 23 (21 fetch-error, 2 zero-signal) |
| VERSION-ENCODED URLS | 4 (3 document, 1 dated permalink) |
| HUMAN VERIFY | 9 |
| states to verify | 30 |

`source-ignore.json` now holds **33** entries: 27 `bot-wall`, 4
`UNKNOWN - needs adjudication`, 1 `homepage-churn`, 1 `carousel-churn`.

One incidental confirmation: the report header reads "baseline of
2026-09-07T19:29:41.953Z" even though the baseline was rewritten at 21:02 by
`9a93cfa`. That is the `fd89ab0` fix visible in production — renormalize left
`generatedAt` alone.

These counts supersede any earlier figures. I cannot state what they supersede
*from*, because the prior handoff file named in the request is not in this repo.

---

## 9. Open, in priority order

Built from the HIGH and FETCH sections of `source-diff-report.md`. HIGH splits by
tier as 9 / 24 / 11 (Tier 1 / 2 / 3) and by note type as 28 with a dollar change,
14 with a keyword shift, 6 with a redirect (4 redirect-only).

### 9.0 — Con Edison. Read the source before anything else on this list.

`a6f33ba` adopted a Con Edison snapshot carrying **four dollar figures that were
not there before — $3,500, $5,500, $7,000, $11,000 — with none removed.** Our NY
page states Con Edison rates of `$8,000` and `$10,000` (`ny/page.tsx:209`, table
under the heading at `:196`). **None of the four new figures matches either.**

The rate table on a Tier 1 page appears to have moved, and we are still publishing
the old numbers.

**The tripwire is gone.** The accept wrote those four figures into the baseline, so
the next `check` compares the live page against them and reports UNCHANGED — no
matter what the page says. Re-running the scraper will not resurface this, and no
amount of waiting will. It comes back only from a human reading the Con Edison
page. Nothing else in §9 has that property.

Action: read the source, correct `ny/page.tsx` if the rates moved, and do it before
the redirects and the drift below.

### 9.1 — The rest of the NY accept

`a6f33ba` accepted 8 NY URLs. I checked the diff rather than taking this on trust.
Five carry a `fetchedAt` bump only. Besides Con Edison, two carry content changes:

- **PSEG Long Island — Heat Pump Rebates.** `dollars ADDED: $1`. Almost certainly a
  fragment, but adopted unverified all the same.
- **NYSERDA — EmPower+.** `$4,000, $8,000` → `$5,000, $10,000`. This one *was*
  verified: the page already carried $10,000 ASHP / $5,000 HPWH at `ny/page.tsx:59`,
  `:409` and `:484`. Only the baseline was stale.

### 9.2 — Redirects (6, of which 4 are redirect-only)

A moved URL is a citation that will rot, distinct from a figure that drifted:

- DC — DOEE WAP → `/service/weatherization-assistance-program-wap`
- LA — Entergy Louisiana → `/energyefficiency/residential`
- MD — DHCD BeSMART → `dhcd.maryland.gov/energy-home-repair/energy-grants`
- VT — Vermont Gas Systems → `vgsvt.com/energy-efficiency/residential-services`
  (also `dollars REMOVED` ×10 and `closed: 0->1`)
- TX — CenterPoint Residential Efficiency (also `dollars REMOVED: $50, $350, $500`)
- ID — Idaho Power Heating and Cooling Efficiency

Fix by repointing the `url:` field, not by accepting. Note CLAUDE.md §8 item 11:
editing a `url:` can change shared-status fanout, so predict the delta first.

### 9.3 — Tier 1 figure and status drift

- AZ — City of Flagstaff: `ADDED $840, $1,600, $1,750, $4,000, $8,000, $25,103`;
  `REMOVED $41,670`
- HI — DLIR WAP: `$317,619.00 → $357,521.00`
- ME — Efficiency Maine Whole-Home: `$12,900 → $13,900`
- ME — All Rebates Brochure: PDF reissued
- PA — PHFA HEELP: `closed: 1->2`

### 9.4 — FETCH (12)

Four are new failures against a baseline that was OK: MN CenterPoint (404), DE
DNREC WAP (404), TN MTE (403), UT UAMPS (404), plus MT Bozeman (new off-domain
redirect to a bot wall). Seven are standing failures: AZ resilient.az.gov (403 —
now un-muted, so it reports here rather than silently), CO Power Ahead (403), MI
TCLP (404), OR Energy Trust (404), TN TDEC, TVA (403), MT Missoula County
(off-domain redirect).

### 9.5 — Expected noise, do not investigate

The three renormalize holds surfaced exactly as the hold predicted, because the
baseline kept the comma and the fixed extractor does not:

- IA City of Ames — `ADDED $2, $5, $10` / `REMOVED $2,, $5,, $10,`
- KS KHRC — `ADDED $225,000, $250,000` / `REMOVED $225,000,, $250,000,` **plus
  `applications open: 2->0`, which is the real signal and the reason for the hold**
- ME Home Energy Loans — `ADDED $10` / `REMOVED $10,`
- NC Duke press release — `REMOVED $1` (un-muted in `2c9e423`; this is the row
  the un-mute was expected to produce)

### 9.6 — NEW (2)

Both CT Energize CT rate-table PDFs added in an earlier session; never baselined.
Run `accept CT` once verified.

---

## 10. Pending small bundle for the next scraper touch

Each verified against `a6f33ba` before listing.

**Still outstanding — 3:**

1. **`/*.txt` in `.gitignore`.** Currently five specific patterns cover run logs:
   `scraper-run-*.txt`, `check-out.txt`, `scraper-parse-*.txt`, `accept-*.txt`,
   `prune-*.txt`. Nothing is presently untracked, so this is consolidation, not a
   leak — a new log name that matches none of the five would be the failure.
2. **Skip the baseline write when renormalize rewrites nothing.** After the apply
   gate the `writeFileSync` at `:1081` runs unconditionally, so an
   `accept --renormalize --apply` with an empty change set rewrites a byte-identical
   file. Harmless but untrue to the intent, and it makes a no-op look like a write.
3. **Two findings exist in exactly one place each, and both are one tidy-up away
   from being lost.** The `yet` clause-boundary inversion (§4) lives only in the
   comment at `check-sources.mjs:690-697` — not in CLAUDE.md, not in any commit
   message. The reasoning for rejecting field-level accept (§7) lives only in this
   document. Neither is protected by anything: a comment gets tidied, a handoff doc
   gets superseded, and in both cases the finding goes with it and the next session
   re-derives it from scratch or repeats the mistake. Two options, and the point is
   to pick one rather than drift: move both into CLAUDE.md §8, where they sit under
   the same review as every other logged item; or leave them and accept the risk
   knowingly, having read this. Do not leave it undecided.

**Already done, do not re-do — 2:**

4. ~~Rename `4. INVARIANT` to `4. MONOTONICITY`~~ — landed in `d1de0e2`; present at
   `:1471`, `:1480`, `:1493`, with the summary-table key updated to match.
5. ~~Comment the null guard in check 4~~ — landed in `d1de0e2`; present at `:1485`.

---

## 11. Second-hand claims that were wrong

**[operator-supplied — these are chat-session events with no repo trace beyond the
corrections themselves.]**

Three assertions were made in the working session, adopted from summaries rather
than derived, and were false:

1. `lastUpdated` is "read by nothing in `src/`". Nine files read it.
2. `lastUpdated` has ten read sites. It has eleven.
3. Our NY page carried stale Sustainable Futures figures. The page was already
   correct; only the baseline was stale.

Two of these do have repo traces, so the blanket marking above is more cautious
than needed and I would rather say which is which. Claims 1 and 2 are recorded as
corrections in CLAUDE.md §8 item 2 and item 25, item 25 quoting both errors
verbatim. Claim 3 is independently verifiable from the `a6f33ba` diff: the
EmPower+ baseline entry moved `$4,000, $8,000` → `$5,000, $10,000`, while
`ny/page.tsx:59`, `:409` and `:484` already carried `$10,000` / `$5,000`. What has
no repo trace is the sequence — who asserted what, and when.

My own re-derivation in §2 above returns 11 sites across 9 files, matching the
corrected figures rather than the original claims.

**CLAUDE.md §8 item 25 documents this pattern**: a count handed up from a survey
and written into a guardrail document is a second-hand claim, not a verified one.
Two of the three above were caught by exactly the rule item 25 states — re-derive
at the point of writing — and item 25 exists because the first two were written
into CLAUDE.md before that rule did.

Worth noting that the rule fired again while this document was being written: a
count for §2 taken from a ten-row view would have missed rows outside it, and the
16-status-phrase figure in the scope comment was re-derived rather than quoted. The
failure mode is not carelessness; it is that a truncated view looks exactly like a
complete one.

---

## 12. Where the handoff docs live, and why it matters

**[operator-supplied — the absence of these files is verifiable here; their
existence elsewhere is not.]**

The handoff documents — `FORWARD-*.md`, playbooks, rulesets — live in the
operator's project knowledge, not in this repository. Claude Code cannot read them.
This document is the first `FORWARD-*.md` to exist as a repo file; the one named in
the request that produced it is not here, which is how the gap surfaced.

That is the root cause of §11. Every second-hand claim corrected in this document
originated the same way: a handoff doc was read chat-side, its contents were
restated as fact, and the restatement was treated as though it described the repo.
It did not. It described a repo as it stood when someone else wrote that sentence.

**A statement in a handoff doc is evidence about a past session. It is never
evidence about current repo state.** The two look identical in a chat message —
same confident tone, same specificity, same plausible line numbers — and nothing
in the conversation marks which is which. The only thing that distinguishes them is
whether someone re-derived it against the working tree.

So: verify against the repo before acting on anything a handoff doc says. Treat a
count from one as a hypothesis, a line number as a starting point, and a claim about
what some file contains as a question. This applies to this document too — by the
time it is read, its line numbers will have moved and its counts will be stale.
Every reference in it was verified at `a6f33ba`, and that is the only commit at
which it is known to be true.
