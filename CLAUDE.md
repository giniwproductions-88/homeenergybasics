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

**1.4 — Never bump `lastVerified`.**
Not in `src/data/incentives.ts`, not in `src/data/utilities.ts`. That
date asserts that a human read a primary source on that day. You cannot
make it true, so you cannot write it. If an edit ought to carry a date
bump, say so and leave the date alone.

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
- Dates are monotonic. No `lastVerified` moves backward, and the entry
  count does not change without a stated reason.

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
- - Every site that classifies a URL as shared reads `SHARED_STATE_MAX` —
  `pick()`, the accept handler, and parse's listing including its printed
  label. A literal is a latent bug. Keep it that way.
- `accept all` still adopts everything. Use deliberately.
- `selftest` must pass before any scraper change is proposed as done.
- Never open `scripts/source-baseline.json` for writing outside an
  accept run.

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

1. 8 entries mislabel the OBBB provisions hub as "IRS — 25C/25D
   Termination FAQ" (FS-2025-05 is the FAQ). That hub is also a scraper
   noise machine — a live newsroom index full of unrelated dollar
   figures. Repointing the 8 to FS-2025-05 fixes label and noise at once.
2. `src/components/StatusCard.tsx` renders one date under both "As of:" and
   "Last verified:". `lastUpdated` is byte-identical to `lastVerified`
   everywhere and read by nothing in `src/`.
3. Stale downgrade is client-side only (`useEffect`), so SSR HTML and
   crawlers never see it. Undecided design question, not a defect.
4. `ISODate` is declared twice — `incentives.ts:9-11` and
   `utilities.ts:17-18`.
5. `MIN_STATES` defaults to 40 against 51 entries.
6. Fetch-failure recovery reports as a misleading HIGH: baseline has no
   dollars, so every figure reads as "ADDED."
7. Mixed unicode escaping (`\u2013` vs literal). Renders fine; makes
   grepping unreliable. Do not mass-fix.

---

## 9. WHEN IN DOUBT

Stop and ask. An unasked question costs one message. A wrong rebate
figure costs a reader money and costs the site the only thing it has.
