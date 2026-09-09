# FORWARD — 2026-09-08B — New York pass

Scope: `src/app/heat-pumps/states/ny/page.tsx`, `src/data/incentives.ts`, and three
cross-page files (`rebates-by-state`, `stacking-rebates`, `tracker`). Page content
and published dollar figures changed throughout. `lastVerified` moved once, for NY
only, on the operator's authorisation with sources named.

**Sourcing.** Everything derivable from the repo was derived at the point of
writing, at `c58b604`: `git log`, per-commit diffs, file contents, and
`scripts/source-diff-report.md`. Facts read from program documents are marked
**[operator-supplied, verified from source on 2026-09-08]** with the document and
section named. Counts were re-derived, and where mine differ from the request that
produced this file, mine are used and the difference is stated.

**Count correction.** The request said twelve commits from `eab2aec` to `c58b604`.
`git rev-list --count eab2aec^..c58b604` returns **11**. Eleven is used throughout.

**This document goes stale the way the last one did.** Its line numbers are true at
`c58b604` and nowhere else; §12 of `FORWARD-2026-09-08-SCANNER-TUNING.md` explains
why a handoff doc is evidence about a past session and never about current repo
state. That applies to this file. Re-anchor before acting on any line number here.

---

## 1. What shipped

Eleven commits: `eab2aec` (2026-09-07 23:05) through `c58b604` (2026-09-08 18:46).
Working tree clean at `c58b604` apart from an untracked scratch file.

### Group A — unsourced figures removed (3 commits)

**`eab2aec`** — deleted the four Weatherized Tier "How to Qualify" cards from the NY
page, including the R-38 and ACH50 thresholds, and the two places that restated them
(JSON-LD FAQ 3 and the next-steps card). 9 insertions, 22 deletions.

**`2526eb4`** — removed the `$24,000` EmPower+ attribution from `rebates-by-state`
and `stacking-rebates`. No stacked total was restated; see §4.

**`d1dfaa3`** — removed the same figure from the tracker, plus the generic
HEAR/HOMES/utility stacking claim, and aligned a contradictory utility ceiling. See
§7.

### Group B — the NY page pass (8 commits)

In the order they ran, which was not arbitrary:

| # | commit | change |
|---|---|---|
| 1 | `ceef35b` | EmPower+ income tiers: Tier 1 is ≤60%, Tier 3 is <80%; downstate defined once |
| 2 | `c70d936` | the impossible stack removed; moderate-tier worked example added; PSEG deduction; Appliance Upgrade concurrency |
| 3 | `ab54361` | Weatherized Tier is a rate tier, not an 85% cap trigger; DAC narrowed to a DAC project *receiving DAC-specific incentives* |
| 4 | `ba98074` | tier status flipped from scheduled/unconfirmed to in effect since September 1, 2026 |
| 5 | `5f0d5f4` | Con Edison table rebuilt for the tier split — the commit that changed published dollar figures |
| 6 | `ec52683` | Clean Heat range re-derived from the rebuilt tables and propagated |
| 7 | `edb90b4` | EmPower+ eligibility gates added above the amounts |
| 8 | `c58b604` | `incentives.NY` summary reconciled; `lastVerified` and `lastUpdated` to 2026-09-08; EmPower+ Program Manual added to sources |

**Why that order was required.**

**The range had to follow the table rebuild.** CLAUDE.md §4 Layer 2 requires a range
claim to match table extremes. Re-deriving the range before the extremes existed
would have meant deriving it from figures about to change — the exact patch-rather-
than-derive failure the rule exists to prevent. Running 6 after 5 meant the range was
computed from the table it describes. It moved the floor from `$2,500` to `$1,000`.

**The stack had to follow the income tiers.** The low-income worked example's card
title carries the income threshold. Fixing the stack first would have written the
corrected stack under a title still saying "Below 80% SMI/AMI", and the tier commit
would then have had to edit the same card again — two passes over one card, with a
window where the card was internally inconsistent.

Two further ordering constraints, less obvious:

- **The cap fix (3) ran before the status flip (4)** because the cap error lived
  inside the same sentences as the status framing. Fixing status first would have
  meant rewriting those sentences twice.
- **The gates (7) ran after everything else** so they could sit above amounts that
  were already correct. A gate above stale figures is a gate on the wrong page.

---

## 2. The four source documents

**[operator-supplied, verified from source on 2026-09-08]** for all four. I did not
fetch any of them; §1.5 puts that verification in the chat session where the quoted
text can be audited.

**Con Edison — heat pump incentives**
`coned.com/en/save-money/rebates-incentives-tax-credits/…/save-on-a-central-air-source-heat-pump`
Established the September 1 rate split and all eight Category 2b cells (weatherized
and standard × DAC and non-DAC × apartment and single family), Category 2a and
Category 4 amounts, and that **an approved contractor determines which tier a project
qualifies for**. Our Con Edison tables, the `$7,000`/`$10,000` contrast in the
Weatherized Tier section, the Con Edison worked example and the "What You'll Actually
Pay" ranges all rest on it.

**NYS Clean Heat Program Manual v2** (filed 2026-03-05)
`cleanheat.ny.gov/assets/pdf/NYS%20Clean%20Heat%20Program%20Manual%202025_v2.pdf`
§2.1.5 — the Weatherized Tier was introduced September 1, 2026 and the manual
**announces it without defining the standard**. §2.4 — EmPower+ and Clean Heat cannot
both cover the same installed measure. §2.1 and §2.2.1 — the cap is 70%, or 85% for
Central Hudson territory or a DAC project receiving DAC-specific incentives. Table 1 —
Con Edison does not offer plain Category 2; footnote 17 — Con Ed Category 4 also
requires decommissioning. Tables 5, 6, 7 — the pre-split Category 2b figures, GSHP,
and the midstream HPWH amount. Already in `incentives.NY.sources`.

**NYSERDA — EmPower+ program page and FAQ**
`nyserda.ny.gov/All-Programs/EmPower-New-York-Program`
Established that heat pump approval depends on existing heating fuel and current
insulation level; that **customers heating with natural gas are generally not
eligible**, with availability limited to pilots in certain utility regions including
the Energy Affordability Guarantee program administered by the Department of Public
Service; and that EmPower+ and the Appliance Upgrade Program **cannot run
concurrently**. Our gas gate and the Appliance Upgrade correction rest on it.

**EmPower+ Program Manual rev 09.01.2026**
`hpwescontractorsupport.com/wp-content/uploads/2026/09/EmPower-Program-Manual-0902026.pdf`
§1.1, §4.4.1, §4.4.2 — Tier 1 is 60% or less of SMI or AMI, whichever is greater;
Tier 3 moderate is under 80%. Table 3 — caps and the downstate definition (counties
south of and including Dutchess and Ulster). §4.4 — PSEG incentives deducted from the
downstate caps. §4.5.2 — HEAR's $1,600 only on projects without a heat pump or HPWH.
§4.5.3 — SFP cannot combine with HEAR. §6.10 and Table 7 — the minimum insulation
requirement. Added to sources in `c58b604`, taking NY from 9 to **10** entries.

> **Version-encoded URL.** The manual's path carries its revision under
> `/uploads/2026/09/`. A reissue lands at a new path while this one keeps returning
> 200, so the watch freezes healthy rather than failing. I tested it against
> `versionEncodedUrl()` rather than assuming: it matches the **year/month upload
> path** marker and will report under VERSION-ENCODED URLS in the scraper's standing
> advisory. The reasoning is recorded as a comment above the source entry, not left
> to this document.

---

## 3. What was wrong, ranked by what it cost a reader

**1. The impossible stack.** The page's headline low-income scenario stacked EmPower+
base + SFP + HEAR `$1,600` on a heat pump project. Two source rules independently
forbid it: §4.5.2 bars the HEAR money from any project including a heat pump or HPWH,
and §4.5.3 bars SFP from any project taking HEAR. Five places, two of them JSON-LD.
This is the only error that invented a category of money rather than misstating one —
a reader budgeted around funds that cannot exist. Fixed in `c70d936`.

**2. The 60/80 income error.** The page used 80% as the low-income line throughout.
80% is the *program* boundary; **Tier 1 is ≤60%**. Every household between 60% and 80%
was promoted from moderate treatment (50% of cost, capped `$6,000`/`$7,000`) to
low-income treatment (no cost, capped `$12,000`/`$14,000`). The worst instance told a
household at 70% AMI they would receive "100% of project costs covered with zero
out-of-pocket". Fixed in `ceef35b`.

Worth recording how the scope changed on inspection: the request listed ten sites as
wrong. Reading each against the tiers showed **80% is correct as program scope**, so
three sites needed no change and one — the disclaimer — was right as written. Five
substantive corrections, two definitional additions, three left alone.

**3. The missing gas gate.** The page said nothing about heating fuel determining
eligibility, while its own statistic says roughly 61% of New York homes heat with gas.
A reader could work the entire EmPower+ section and never learn they were likely
ineligible. Not a wrong figure — an absent gate, which is why no sweep had caught it.
Fixed in `edb90b4`.

**4. Con Edison mislabelled, with no apartment dimension.** The table showed two
columns where the program now has eight cells. `$8,000` and `$10,000` both still exist
but under different conditions; the default case — un-weatherized, non-DAC, single
family — is `$7,000`. Apartment readers were shown single-family numbers: `$8,000`
against a real standard non-DAC apartment rate of `$3,500`. Separately, the Category 2a
row was labelled "full load heating (fossil retained as backup)", a category Con Edison
does not offer. Fixed in `5f0d5f4`.

**5. The unsourced R-38 and ACH50 thresholds.** The page published four qualification
pathways for a standard that has no published definition, one of them carrying numeric
envelope criteria. Fixed in `eab2aec`; provenance in §5.

**6. The `$24,000`.** Its own section, below.

---

## 4. The `$24,000` — a correction that stopped where someone was looking

`baeaeaf` (2026-07-09) carries the subject *"fix EmPower+ ceiling ($24k unsourced ->
$12-14k base + $14k HEAR)"*. Its diff strips the figure from the NY page title, meta
description, OpenGraph, two JSON-LD answers, the hero, a Short Version card, a section
heading, a stacking line and the next-steps text.

It was never removed from anywhere else. Verified from `git log -S`: `stacking-rebates`
and `rebates-by-state` have carried it since `f02397f` (2026-03-26), and `78a34aa`
touched `rebates-by-state` in September without removing it. The tracker carried the
same figure in three places, in a file set that had never appeared in a handoff doc.

Three commits today finished it: `2526eb4` (cross-page), `d1dfaa3` (tracker), and
`ec52683`, which also corrected `stacking-rebates:331` — that line had carried
`$5,000–$12,000`, disagreeing with the page's own range independently of the `$24,000`.

**The pattern is the finding.** A claim was adjudicated as unsourced, corrected
thoroughly *within the file being read*, and left standing everywhere else — including
in structured data, where it is the copy machines consume. Fourteen months of commits
passed over it.

This is precisely the failure the cross-page status check built yesterday
(`b45310c`, verify check 7) exists to catch: the repo disagreeing with itself, which
nothing that watches the outside world can see. That check is scoped to
`rebates-by-state` and `stacking-rebates` and looks at status vocabulary, not figures —
so it would **not** have caught this particular instance. The tracker is outside its
scope entirely. Worth weighing whether the scope should widen, against the noise
measurement recorded in its scope comment.

---

## 5. What the page cannot say, and the phrasing used

Recorded verbatim so nobody later fills either gap with plausible specifics — which is
exactly what `:446` did before `eab2aec` removed it.

**The Weatherized Tier qualification standard.** Manual v2 §2.1.5 announces the tier
without defining the standard; Con Edison states an approved contractor determines
which tier a project qualifies for. There is no published test a reader can apply. The
page now says, at `:496`:

> Con Edison's published rates are now split in two: a weatherized rate and a standard
> rate. On a non-DAC single-family Category 2b project the difference is **$10,000**
> weatherized against **$7,000** standard — $3,000 of real money riding on which tier a
> project lands in (Con Edison rate pages, read 2026-09-08). NYSERDA has not published
> the qualification standard — Program Manual Version 2 announces the tier without
> defining it, and Con Edison states that an approved contractor determines which tier
> a project qualifies for. Ask your contractor which rate applies before signing.

The same position is stated at `:51` (JSON-LD) and `:678` (watch card).

**The EmPower+ minimum insulation figures.** §6.10 and Table 7 define a requirement;
the fetch truncated twice at the same point and the figures were never retrieved. The
page says, at `:467`:

> **Insulation.** EmPower+ also sets a minimum insulation level a home must meet before
> a heat pump is installed. The EmPower+ Program Manual defines it in Table 7. We have
> not been able to retrieve those figures and will not guess them — ask NYSERDA or your
> contractor what your home needs before assuming a heat pump is approvable.

Stating that a gate exists and that we do not have its numbers is more useful than
silence, which lets a reader assume there is no gate at all.

---

## 6. Open, in priority order

Derived from `scripts/source-diff-report.md`. **That report is stale**: it is dated
2026-09-07 21:22 and predates both the NY accept (`a6f33ba`) and all eleven commits
here. Re-run `check` before working from it.

It lists **44 HIGH**. Three are NY — EmPower+, Con Edison and PSEG Long Island — and
all three are resolved: the accept adopted them and today's pass verified the figures
against source. **41 remain**, splitting 6 / 24 / 11 across Tiers 1 / 2 / 3.

### 6.1 — Redirects (6). A moved URL is a citation that will rot

Fix by repointing the `url:` field, not by accepting. CLAUDE.md §8 item 11: editing a
`url:` can change shared-status fanout, so predict the delta first.

- DC — DOEE Weatherization Assistance Program
- LA — Entergy Louisiana Residential Energy Efficiency
- MD — DHCD BeSMART Home Loans
- TX — CenterPoint Energy Residential Efficiency (also `dollars REMOVED: $50, $350, $500`)
- VT — Vermont Gas Systems (also 10 dollar figures removed, `closed: 0->1`)
- ID — Idaho Power Heating and Cooling Efficiency

### 6.2 — Tier 1 figure and status drift (6)

- AZ City of Flagstaff — six figures added, `$41,670` removed
- HI DLIR WAP — `$317,619.00 → $357,521.00`
- **ME Efficiency Maine Whole-Home — `$12,900 → $13,900`**
- ME Efficiency Maine Home Energy Loans — `$10,` → `$10`, the renormalize hold surfacing
- ME All Rebates Brochure — PDF reissued
- PA PHFA HEELP — `closed: 1->2`

### 6.3 — Named Tier 2 and Tier 3 items

- **VT Burlington Electric** — eight figures replaced wholesale (`$72,700…$137,100` → `$69,850…$131,700`); looks like an income-table reissue, not a rate change
- **WI Focus on Energy IRA HEAR** — `expired: 1->0`, a status keyword moving the right way
- **KS KHRC** — `applications open: 2->0`, plus the comma artifact. **The renormalize
  hold on this entry lifts once that keyword shift is adjudicated** — it is KIND 2 in
  `RENORMALIZE_HOLD`, temporary and independent of the IA/ME extractor questions
- KS KCC — recovered from a fetch failure; consider accept

### 6.4 — NEW (2), awaiting accept

Both CT Energize CT rate-table PDFs, added in an earlier session and never baselined.
Run `accept CT` once verified.

---

## 7. The tracker pass

`src/app/heat-pumps/tracker/` — `page.tsx` and `TrackerContent.tsx`. **This file set
had never appeared in a handoff document**, and it ships a route (`/heat-pumps/tracker`).
It surfaced only because a repo-wide `$24,000` sweep reached it.

Its load-bearing content is sound: the status table and the National Snapshot counts
are computed from `incentives`, so they cannot go stale. The problems were all in
hand-written prose around them.

`d1dfaa3` removed the `$24,000` claims and the generic HEAR/HOMES/utility stack, and
fixed a `$4,000`/`$5,000` contradiction where the same sentence appeared twice with
different ceilings — once rendered, once in JSON-LD.

**Four items logged and deliberately not fixed**, so that a `$24,000` commit did not
become an unexamined-file rewrite:

1. **`:357`** — utility-only states "often `$200–$1,500`". A national aggregate with no
   derivation in the repo.
2. **`:376`** — "Above 150% AMI, you're typically limited to utility rebates and HOMES
   only." A national eligibility assertion, unsourced.
3. **`:166`** — "As of June 2026, `{counts.open}` U.S. states have active…". The counts
   recompute at build time; the date does not. It currently stamps September data as
   June.
4. **`:393`** — "We do not rely on third-party aggregators, blog posts, or outdated
   databases," under the heading "How We Verify This Data". `incentives.ts` cites four
   third-party news domains: `coloradosun.com`, `idahocapitalsun.com`,
   `wyomingpublicmedia.org`, `news.duke-energy.com`. News outlets are neither
   aggregators nor blogs, so this is not a flat falsehood — but **it is a methodology
   claim about the entire site**, stated without qualification, on a page nobody had
   audited. It is the item on this list most likely to cost credibility if a reader
   checks it.

---

## 8. Rules that fired on themselves

Each of these is a logged CLAUDE.md item that caught a live error today.

**§8 item 12 — a truncated grep reports a false negative that looks like coverage.**
Fired **twice in one commit**, both in the cap fix.
- A `cut -c1-130` on grep output hid an `85%` claim that sat past column 130 on a long
  line; the line looked like a date reference. Caught by re-sweeping with `grep -o` per
  match instead of per line.
- A line carrying **two** `85%` claims — the first correct (DAC), the second the tier
  error — passed a line-level check clean. Caught by the same per-match sweep.
Both sites (`:609`, `:513` at the time) would have shipped. The request had named five
sites; nine existed.

**§8 item 7 — mixed unicode escaping.** `incentives.ts` uses literal en-dashes; the NY
page uses `–` escapes. The range propagation's first anchor assumed the escape form
and matched **zero** occurrences in `incentives.ts`. Caught by the edit script's
match-count guard, which refuses on anything but exactly one hit.

**§8 item 16 — the VCS view drifts stale.** Three times. Each time the working tree was
reported as modified when the operator had already committed; each time `git status`
from the terminal was authoritative. The last instance was flagged by the operator
before I acted on it.

**§8 item 25 — second-hand counts must be re-derived.** Several. The request for this
document said twelve commits; the range holds eleven. The cap request named five sites;
nine existed. The `$24,000` request said five sites; six were listed. An `stateCode:`
count of 52 looked like an entry-count regression until re-derived — 51 entries plus one
interface declaration, identical in HEAD.

---

## 9. Method notes worth keeping

**`grep -o` per match, never per line.** A line-level grep answers "does this line
contain the string", which is not the question. Two of today's errors survived a
line-level check: one because the match sat past a truncation column, one because the
line carried two claims and only the second was wrong. Per-match with surrounding
context is the only sweep that reports what is actually there.

**A figure is never its own discriminator.** `$7,000` appears 13 times on the NY page:
six are the Con Edison standard-tier single-family rate, seven are the EmPower+ moderate
downstate cap. No line carries both. A grep for `$7,000` cannot separate them — only the
surrounding clause can. Any future edit touching one must not sweep on the number alone.

**A range scoped silently to one dwelling type reproduces the flattening a table fix
removes.** The published `$2,500–$12,000` was never wrong — it was the correct
*single-family* floor. The defect was that nothing said so. Having just given Con Edison
an apartment dimension, keeping a range that silently excluded apartments would have
re-introduced the same omission one layer up. The range is now `$1,000–$12,000` with
dwelling type named among its variables.

**A correction scoped by line range rather than by claim can make the surviving copy
more authoritative.** Deleting the four qualification cards from rendered prose while
leaving the same four pathways in JSON-LD would have been worse than doing nothing: the
version a reader could weigh was gone, and the version machines consume remained. The
sweep after `eab2aec`'s first pass caught it, and the JSON-LD and next-steps copies were
folded into the same commit. **Scope a correction by claim, then find every surface that
carries it.**

---

## 10. What to verify by hand next time

**EmPower+ Program Manual, pages 77–81.** §6.10 and Table 7 define the minimum
insulation requirement that gates heat pump approval. No fetch has reached them — the
attempt truncated twice at the same point. The page currently states the requirement
exists and that we do not have its figures. Until someone reads those pages, that is the
most-consequential unquantified claim on a page that has otherwise been reconciled to
source.

**The `(SF)` column labels on National Grid and Orange & Rockland.** Both tables label
their value columns `Non-DAC (SF)` / `DAC (SF)`. That parenthetical is an admission that
an apartment dimension exists and is not shown — the same flattening Con Edison no
longer has. It was defensible when every utility flattened it; after `5f0d5f4` it is
conspicuous. Central Hudson's single value column may be genuinely degenerate (it
applies the 85% cap to all customers regardless of DAC status), but that is about the
cap, not the rates, and is not established by anything supplied.

Related, and not yet touched: **`ny/page.tsx:444`** states that "RG&E's DAC adder applies
only to apartments" — a DAC × dwelling interaction recorded in prose, for a utility with
no table at all. It has been there since March.

**The unverified "50% of cost" rate.** The moderate-income coverage rate appears at
`:35`, `:59`, `:143`, `:475`, `:478` and `:551`. Table 3 gives the moderate caps but none of the
supplied material states the percentage. It was carried across every edit unchanged
rather than removed or hardened, and remains the one figure on the EmPower+ side with no
source behind it.
