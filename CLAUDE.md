# CLAUDE.md

Operating rules for Claude Code in this repo. Read before acting. These
are not style preferences — they are the guardrails the site's accuracy
model rests on. When this file and a request conflict, say so and stop.

---

## 0. WHAT THIS REPO IS

A Next.js site: 51 state heat-pump rebate pages, a growing set of
utility/program pages, and a hub that indexes them.

The product is **accuracy**. Every dollar figure a reader sees is a claim
we must be able to defend against the program administrator's own page.
A stale-but-honest page beats a fresh-looking wrong one, always. The
failure mode that matters here is not a broken build — it's a confident
number no one verified.

---

## 1. HARD BOUNDARIES

Do not cross these. If a task seems to require it, stop and say why.

**1.1 — No git writes.**
Allowed: `git status`, `git diff`, `git log`, `git show`, `git fetch`.
Forbidden: `git add`, `git commit`, `git push`, `git checkout`,
`git restore`, `git stash`, `git reset`, `git rm`, `git clean`.

The operator stages, reads, and commits every change by hand from the
Source Control panel. That review **is** the safety model. It only works
if the operator runs it.

**1.2 — Your last step is `npm run build`.**
The pattern is: propose → operator reads the diff → apply → build →
report and stop. Do not continue past a green build on your own
initiative.

**1.3 — Never `git add .`** — not even if the request sounds casual, not
even to "clean up." Explicit paths only. This is the single most common
way junk enters this repo.

**1.4 — Never originate a verification date.**
Applies to `src/data/incentives.ts` and `src/data/utilities.ts`. That
date asserts that a human read a primary source on that day.

You may never originate a `lastVerified` date. You may not infer one from
today's date, from a build, or from your own reading of a page — you
cannot fetch, so you cannot verify. You MAY write `lastVerified` when the
operator's instruction supplies the literal date AND names the source that
was verified. Absent both, refuse and say the date should move.

`lastUpdated` is the opposite: directive, not permissive. It records the
edit, not a claim about the world. When an edit changes rendered page
content, move `lastUpdated` to that date — without asking, and without
needing a source. The two fields are independent. A page can be corrected
without being re-verified, so `lastUpdated` may be later than
`lastVerified`; there is no ordering rule between them.

**1.5 — Do not fetch program-administrator or IRS pages to verify a
claim.** Rule-1 verification happens in the chat session, where the
operator can read the quoted source text and audit it. You may identify
what needs verifying and name the URL. Fetching a page and reporting what
it says is **assertion, not verification** (rule 12) — the operator never
sees the input, and a summary of a page reads identically whether it was
fetched or remembered.

**1.6 — Prefer a temp script file over `node -e` one-liners.** A file can
be read before it runs. Never ask for a wildcard allowlist on an
interpreter; that silently converts Manual mode into automatic-for-
anything-routed-through-node.

---

## 2. THE DATE STAMP NEVER LIES (rule 1)

`lastVerified` moves only after source text was **returned and quoted**
into the conversation. Not paraphrased. Not summarized. Quoted.

- An empty or failed fetch is a failed verification. Say so and stop on
  that claim. Do not fall back to what you remember.
- A page's meta description or search snippet can be staler than its
  body. Trust the body's own as-of stamp. Never conclude "unchanged"
  from a snippet.
- Dates are monotonic. Neither `lastVerified` nor `lastUpdated` moves
  backward, and the entry count does not change without a stated reason.
- Monotonicity and independence are separate properties, and the file
  states each. Monotonic: each field only moves forward, on its own.
  Independent: there is no ordering rule *between* the fields, so
  `lastUpdated` may be later than `lastVerified` — a page can be
  corrected without being re-verified (see 1.4).

---

## 3. WHAT COUNTS AS CHECKED (rules 4, 7, 12)

Your **reading** of this repo has held up on every spot-check — line
numbers, file contents, commit hashes, all exact. Your **conclusions on
top of that reading** have not. Two logged misses, both the same shape:

- "Stale downgrade is likely firing across much of the site." It wasn't.
  The dates were never enumerated.
- "WV is a lone outlier." Eight entries did it.

So:

- **Enumerate before you generalize.** "Likely," "probably," and "across
  much of the site" are not findings. Count the cases or don't make the
  claim.
- **Before calling anything a lone outlier, grep for siblings.** Errors
  here repeat 2–4x per page — body, FAQ, Short Version, best-candidates
  (rule 7). Fix one, grep for the rest.
- **Corollary:** when a program *structure* is removed, grep its
  *vocabulary* (tier names, "income-eligible", "market-rate"), not just
  its numbers. The stale sibling that survives often contains no digit.
- **Verify before patching (rule 4).** The suspected error is frequently
  the page being right. Confirm the defect exists before proposing a fix.
- **Name your source for any number.** When proposing a threshold, a
  constant, or a limit, state which existing constant or documented rule
  it came from. If you can't name one, you invented it — say that.
- **Report what you checked AND what you did not.** A verdict that omits
  the second half is not a verdict.

**Survey method — anchor plus window**

- **Anchor on the entity, not the claim.** Take a ±2 line window around
  each anchor hit, filter for the relevant vocabulary, then read the
  candidates.
- **The ±2 window is load-bearing.** Claims sit on lines that don't
  themselves contain the anchor word, and a single-line grep cannot see
  them.
- **A grep confirms a known set is gone. It never discovers the set.**
- **A federal or state rule change triggers an immediate anchored survey
  across all 51 states before any page edits.** Applying a new rule
  state-by-state as pages come up guarantees a split where some pages
  state the old rule and some the new one, shipping simultaneously.
- **`incentives.ts` summary strings are a second claim surface**, rendered
  by `StatusCard` on every state page. A page survey that doesn't include
  them will miss card/page disagreements, which occur in both directions.

---

## 4. POST-EDIT SWEEP (rule 3 — runs on every edit, before you report)

A grep sweep verifies edits **landed**. It does not verify the document
is still **coherent**. Both are required before the word "clean."

**Layer 1 — Mechanical**
- [ ] diff against original shows ONLY intended changes
- [ ] Residual-string grep: every replaced string returns 0 hits
- [ ] New-string grep: every inserted string returns expected count
- [ ] `lastVerified` monotonic; entry count unchanged
- [ ] Brace/paren/quote balance; `<div>`/`<tr>`/`<table>` open-close match
- [ ] FAQ count 4–6; escaped apostrophes in any new JSX text

**Layer 2 — Consistency**
- [ ] Count-claim grep on the touched file:
      `\b(two|three|four|both|either)\b` — verify EVERY hit against
      current reality
- [ ] After any structural insertion (table row, scenario card, list
      item): READ the full enclosing section linearly, plus one section
      either side. Insertions invalidate nearby counts and totals.
- [ ] Range claims match table extremes (hero/meta "$X–$Y" = lowest and
      highest tier actually shown)
- [ ] "What you'll actually pay" math re-derived from current scenario
      cards, not assumed unchanged
- [ ] Short Version cards vs body: no card headline contradicted by the
      section it summarizes

**Layer 3 — Verdict**
- [ ] Report states both what was checked and what was not
- [ ] "Clean" is never issued on Layer 1 alone
- [ ] The rendered read belongs to the operator; don't claim it

Sweep the **written file**, never the script's intent (rule 5).
Expired calendar claims outrank the 30-day clock — grep touched pages for
month names + "through" + "expires" (rule 6).

---

## 5. NO CROSS-STATE FACT TRANSPLANTS (rule 9)

A figure verified for one state is never evidence for another. MN Xcel
and CO Xcel are different programs with different sources. This applies
**inside a single utility page** as hard as it does across state pages —
never blend territories into one table.

A federal cause asserted on a state's page must be sourced on that
state's page (rule 10).

Claims with dates rot; claims with conditions don't. Anchor to a
verification date or a condition, never to a promised future date
(rule 11).

---

## 6. SCRAPER (`scripts/check-sources.mjs`)

- **A flag is triage, not verification.** The script's own footer says
  so. A HIGH row means look, not fix.
- `accept <STATE>` adopts that state's URLs and **skips shared URLs** —
  any URL cited by more than `SHARED_STATE_MAX` (3) states. It prints
  the skip count.
- Shared/federal URLs are adopted only by `accept SHARED`, as a separate
  deliberate step, after the page has been verified on its own.
- Reason: the IRS FAQ is attached to 19 states, so `accept ME` used to
  fold a fresh federal snapshot into the baseline as a side effect. That
  doesn't produce a wrong number — it removes a tripwire, invisibly.
- Every shared/federal classification goes through `isShared()` — never
  open-code the comparison. A literal or a fourth copy is a latent bug.
- `accept all` still adopts everything. Use deliberately.
- `selftest` must pass before any scraper change is proposed as done.
- Never open `scripts/source-baseline.json` for writing outside an
  accept run.
- **`accept --renormalize` is the one sanctioned exception to what an
  accept run may write without a fetch behind it.** It rewrites stored
  dollar strings to what a corrected `extractDollars` would produce and
  **never observes the world** — its whole input is strings already in the
  baseline, so it cannot adopt a real change. It is dry-run by default,
  prints per-URL before/after, names every dedupe collision, and poisons
  the global `fetch` for the duration so the path cannot reach the network.
  Any other baseline write outside a fetch-backed accept is still
  forbidden.

---

## 7. REPO MAP

```
src/app/heat-pumps/states/<xx>/page.tsx   state pages (51)
src/app/heat-pumps/utilities/             utility hub
src/components/                           shared components (StatusCard.tsx)
src/data/incentives.ts                    canonical state data
src/data/utilities.ts                     canonical utility data
scripts/check-sources.mjs                 scraper
scripts/source-baseline.json              scraper baseline
```

Conventions:
- Canonical data lives in `src/data/`. The hub derives its inventory from
  `shippedUtilities()` — never render raw `utilities.ts` entries, and
  shipping a new utility page must require **zero edits to the hub**.
- The hub carries no `lastVerified` and no Sources section. It makes no
  first-order factual claims, so a verification date there would be a
  claim about nothing.
- One duplicate state page has already been removed (`lapage.tsx`,
  `depage.tsx`). If you find another orphaned sibling, diff it fully and
  confirm nothing references it before proposing removal.

---

## 8. ALREADY LOGGED — do not re-report as new findings

These are known and queued. Note them if they block you; don't rediscover
them.

2. `lastUpdated` is read at eleven sites across nine files: NJ's OpenGraph
   `modifiedTime` and JSON-LD `dateModified`, a rendered "Updated … ·
   Verified …" line on FL, IN, NC, SC, KY, OH, NJ and duke-energy, and
   FPL's synthesized `StatusCard` object. It is not inert. What is inert
   is its value: identical to `lastVerified` on all 51 states and all 6
   utilities, so the eight dual-date pages render the same date twice
   under two labels. The invariant `lastUpdated <= lastVerified` is false
   — a page can be corrected without being re-verified.
3. Stale downgrade is client-side only (`useEffect`), so SSR HTML and
   crawlers never see it. Undecided design question, not a defect.
4. `ISODate` is declared twice — `incentives.ts:9-11` and
   `utilities.ts:17-18`.
5. `MIN_STATES` defaults to 40 against 51 entries.
6. Fetch-failure recovery reports as a misleading HIGH: baseline has no
   dollars, so every figure reads as "ADDED."
7. Mixed unicode escaping (`\u2013` vs literal). Renders fine; makes
   grepping unreliable. Do not mass-fix.
8. Arg parser, accept handler: `.filter((r) => r !== "--only")` drops the
   flag but not its value, so `accept NY --only FOO` injects `FOO` into
   the target list.
9. Arg parser, accept handler: the blanket `.toUpperCase()` on targets
   means no argument can carry case-sensitive meaning. Any new flag
   taking a path or a figure must not route through that parser \u2014
   `verify` uses its own case-preserving reader for exactly this reason.
10. `accept SHARED` cannot be scoped to a URL. A URL argument is
    uppercased into a target code that never matches, while
    `targets.includes("SHARED")` stays true \u2014 so it silently runs at full
    scope instead of erroring. There is no per-URL accept path.
11. Shared status is derived from fanout, so any edit to a `url:` field
    can strip a page of accept protection. Predict the shared-list delta
    before the edit and check `parse` against it afterward.
12. Survey greps must run untruncated. A truncated grep reports a false
    negative that looks like coverage.
13. Date edits anchor on the `stateCode` block, never on the date string.
    States share date values.
14. `nehpa.org` returns persistent 403 and is cited by ME, MA, and NH. It
    is already muted in `scripts/source-ignore.json`, so the watch on that
    source is already surrendered for every state citing it \u2014 a standing
    blind spot, not a pending decision. Revisit deliberately: unmuting
    restores the noise, leaving it keeps the blind spot.

    It is not alone. `nehpa.org`, `efficiencyvermont.com` (x2) and
    `dcseu.com` (x3) are all operated by **VEIC** \u2014 Efficiency Vermont's
    error page names EVT, NEHPA's copyright is VEIC, DCSEU's block says
    "call VEIC". One operator, one blocking policy, **six of the twenty-four**
    dead watches, spanning VT, ME, MA, NH and DC. They will recover or fail
    together: per-site work on any one of them is wasted effort, and a fix
    that works on one should be tried on all six at once. Probed 2026-09-06 \u2014
    all six return a 296\u2013503 character error template behind a large body,
    so there is no content to recover from the 403 response.
15. Co-op sites on shared templates inject closure vocabulary sitewide via
    rotating announcement banners. `closed` is the keyword most prone to
    false positives on utility sites.
16. Claude Code's working-tree and VCS view drifts stale. Its file reads are
    accurate; its account of repo state is not, and cannot gate a decision.
    `git status` from the terminal is authoritative.
17. One `git add` + `git commit` pair at a time. Read the reported file
    count before running the next; `1 file changed` is the check. A
    duplicated command commits an already-staged index and lands unrelated
    states under the wrong subject.
18. Never re-run a commit command. `git log --oneline -2` answers "did it
    run."
19. Line endings: `src/` is LF, `scripts/` is CRLF. An earlier "the repo is
    LF" note was true only of `src/`.
20. Commit messages carry no trailers and no external entity names — no
    `Co-Authored-By`, no model name, no tool attribution. Subject and body
    describe the change only.
21. An announcement channel is never muted; only a consumer portal may be.
    Watching the portal while muting the announcement channel produces a
    silent watch over a stale page with no flag.
22. A mute with no expiry is indistinguishable from coverage. Every
    ignore-list entry needs a reason and a review date.
23. Internal contradiction is detectable from the repo alone — no fetch, no
    source. The scraper watches the outside world and has no view of
    whether the repo agrees with itself.
24. NJ wires `dateModified`/`modifiedTime` to `lastUpdated`; the other 50
    states use `lastVerified`. NJ is the schema-correct one. Propagate the
    NJ pattern only after `lastUpdated` is enforced and the values can
    actually differ.
25. A count or enumeration handed up from a survey and written into a
    guardrail document is a second-hand claim, not a verified one. Two
    entries in this file were wrong on first write — `lastUpdated` "read by
    nothing in `src/`" (nine files read it) and "ten sites" (eleven). Both
    came from summaries adopted without re-deriving. Re-derive counts at the
    point of writing, or omit the count and state the shape.
26. Three timestamp fields here assert more than they hold. `lastUpdated` is
    byte-identical to `lastVerified` on all 51 states and all 6 utilities, so
    it records nothing (item 2). `fetchedAt` records when a snapshot was
    FETCHED — it is written only inside `fetchSnapshot()` and copied verbatim
    by accept — so it advances only when an accept adopts a newer snapshot and
    never tracks when a page changed; 157 of 408 baseline entries still carry
    a 2026-07-09 fetch. `generatedAt` records when the baseline FILE was last
    written, not when its contents were observed: `prune` stamps it with no
    fetch behind it, and `accept` stamps `now` rather than the fetch time of
    the snapshots it adopts. Before trusting a timestamp field here, read what
    writes it. Before adding one, establish what will keep it honest.
27. Mutes are fetch-through. A muted URL is still fetched on every run —
    `snapshotAll` runs before the ignore set loads — so the mute suppresses the
    report row, not the request. "Muted" means watched and silenced, not
    unwatched. Two consequences. The baseline holds continuous history for a
    muted URL, so a change that landed while it was muted may be recoverable
    from stored snapshots rather than lost — look before assuming it is gone.
    And any wording that calls a mute a "skip" is wrong about what happens; fix
    it where it appears rather than reading past it.
28. Two shapes of source failure, needing different fixes. When a source stops
    being usable, ask which shape it is before reaching for a remedy.
    (a) An ANNOUNCEMENT CHANNEL muted while a portal stays watched — AZ,
    `resilient.az.gov` against `efficiencyarizona.com`. The channel publishes
    the rule change; the portal goes on reporting UNCHANGED. The fix is to
    un-mute the channel, and the deeper path is never a substitute for it.
    (b) The ONLY watch on a program, muted, with no deeper path cited —
    Philadelphia, `philaenergy.org` and Built to Last. Un-muting restores the
    noise without restoring a usable watch, so the fix is to find and cite a
    program page. Both of those were muted in one commit under one label. They
    are not the same defect, and a label shared by two entries is not evidence
    they share a cause.

---

## 9. WHEN IN DOUBT

Stop and ask. An unasked question costs one message. A wrong rebate
figure costs a reader money and costs the site the only thing it has.
