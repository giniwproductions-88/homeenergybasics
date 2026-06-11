// add-article-dates.mjs
// Injects date signals into every state page:
//   1. openGraph publishedTime (from git first commit) + modifiedTime (from incentives lastVerified)
//   2. Article JSON-LD with datePublished / dateModified
//   3. Rewords visible hero line: "Last verified:" -> "Updated ... — verified against official program sources"
//
// Usage (from repo root):
//   node add-article-dates.mjs            <- dry run (default, changes nothing)
//   node add-article-dates.mjs --write    <- apply changes
//
// Idempotent: pages already containing articleJsonLd are skipped.

import { readdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { execSync } from "node:child_process";
import path from "node:path";

const WRITE = process.argv.includes("--write");
const STATES_DIR = path.join("src", "app", "heat-pumps", "states");
const SITE = "https://homeenergybasics.com";

// Pull stateName per code from incentives.ts (regex parse — read-only).
const incentivesSrc = readFileSync(path.join("src", "data", "incentives.ts"), "utf8");
function stateNameFor(code) {
  const re = new RegExp(
    `stateCode:\\s*"${code}"[\\s\\S]{0,120}?stateName:\\s*"([^"]+)"`
  );
  const m = incentivesSrc.match(re);
  return m ? m[1] : null;
}

function gitFirstCommitISO(file) {
  try {
    const out = execSync(
      `git log --diff-filter=A --follow --format=%aI -- "${file}"`,
      { encoding: "utf8" }
    ).trim();
    if (!out) return null;
    const lines = out.split("\n");
    return lines[lines.length - 1]; // oldest
  } catch {
    return null;
  }
}

const results = { changed: [], skippedDone: [], failed: [] };

const dirs = readdirSync(STATES_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .sort();

for (const abbr of dirs) {
  const file = path.join(STATES_DIR, abbr, "page.tsx");
  if (!existsSync(file)) continue;
  // Skip backup files implicitly (we only read page.tsx).

  const ABBR = abbr.toUpperCase();
  let src = readFileSync(file, "utf8");
  const problems = [];

  if (src.includes("articleJsonLd")) {
    results.skippedDone.push(abbr);
    continue;
  }

  const stateName = stateNameFor(ABBR);
  if (!stateName) problems.push(`no incentives.ts entry for ${ABBR}`);

  // --- anchor checks ---
  const ogAnchor = `type: "article",`;
  const faqRenderRe = /^([ \t]*)<JsonLd data=\{faqJsonLd\} \/>[ \t]*$/m;
  const exportRe = /^export default function /m;
  const heroAnchor = "Last verified: {formattedDate}";

  if (!src.includes(ogAnchor)) problems.push('missing `type: "article",`');
  if (!faqRenderRe.test(src)) problems.push("missing <JsonLd data={faqJsonLd} />");
  if (!exportRe.test(src)) problems.push("missing export default function");
  if (!src.includes(heroAnchor)) problems.push("missing hero `Last verified: {formattedDate}`");
  if (src.includes("publishedTime")) problems.push("openGraph already has publishedTime");

  if (problems.length) {
    results.failed.push({ abbr, problems });
    continue;
  }

  // datePublished: git first commit, fallback to lastVerified midnight UTC
  let published = gitFirstCommitISO(file);
  if (!published) {
    const lv = src.match(/lastVerified/) ? null : null; // not derivable here
    published = null;
  }
  const publishedLiteral = published
    ? `"${published}"`
    : `\`\${incentives.${ABBR}.lastVerified}T00:00:00Z\``; // fallback: same as modified

  // --- 1. openGraph dates (insert after `type: "article",` preserving indent) ---
  src = src.replace(
    /^([ \t]*)type: "article",[ \t]*$/m,
    (line, indent) =>
      `${line}\n${indent}publishedTime: ${publishedLiteral},\n${indent}modifiedTime: \`\${incentives.${ABBR}.lastVerified}T00:00:00Z\`,`
  );

  // --- 2. Article JSON-LD at module level, before the component ---
  const articleBlock = `const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "${stateName} Heat Pump Rebates & Incentives (2026)",
  datePublished: ${publishedLiteral},
  dateModified: \`\${incentives.${ABBR}.lastVerified}T00:00:00Z\`,
  author: { "@type": "Organization", name: "Home Energy Basics", url: "${SITE}" },
  publisher: { "@type": "Organization", name: "Home Energy Basics", url: "${SITE}" },
  mainEntityOfPage: "${SITE}/heat-pumps/states/${abbr}",
};

`;
  src = src.replace(exportRe, (m) => articleBlock + m);

  // --- 3. Render it right after the FAQ schema ---
  src = src.replace(faqRenderRe, (line, indent) => `${line}\n${indent}<JsonLd data={articleJsonLd} />`);

  // --- 4. Visible hero line reword ---
  src = src.replace(
    heroAnchor,
    "Updated {formattedDate} — verified against official program sources"
  );

  if (WRITE) writeFileSync(file, src, "utf8");
  results.changed.push({ abbr, published: published || "(fallback: lastVerified)" });
}

// --- report ---
console.log(`\n${WRITE ? "APPLIED" : "DRY RUN — nothing written"}\n`);
console.log(`Would change / changed: ${results.changed.length}`);
for (const c of results.changed) console.log(`  ${c.abbr}  datePublished=${c.published}`);
if (results.skippedDone.length) {
  console.log(`\nAlready done (skipped): ${results.skippedDone.join(", ")}`);
}
if (results.failed.length) {
  console.log(`\nNEEDS MANUAL EDIT (${results.failed.length}):`);
  for (const f of results.failed) console.log(`  ${f.abbr}: ${f.problems.join("; ")}`);
}
console.log(
  WRITE
    ? "\nNext: npm run build, hand-check MN, then commit."
    : "\nIf the list looks right: node add-article-dates.mjs --write"
);
