import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Heat Pump Rebates by State (2026): Where Incentives Are Still Available | Home Energy Basics",
  description:
    "All 50 states ranked by heat pump rebates in 2026. Federal tax credits ended. See which states still offer $2,000–$16,000 in incentives — and which have almost nothing.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/rebates-by-state",
  },
  openGraph: {
    title: "Heat Pump Rebates by State (2026)",
    description:
      "Federal tax credits ended. Here's every state ranked by how much heat pump rebates you can actually get in 2026.",
    url: "https://homeenergybasics.com/heat-pumps/rebates-by-state",
    type: "article",
  },
};

/* ------------------------------------------------------------------ */
/*  EDITORIAL TIER DATA                                                */
/*  Each state gets a tier, a headline rebate figure, and a one-line   */
/*  summary. This is editorial judgment based on verified data in       */
/*  incentives.ts — not auto-generated from status alone.              */
/* ------------------------------------------------------------------ */

interface StateTier {
  code: string;
  name: string;
  headlineAmount: string;
  primaryProgram: string;
  note: string;
}

const strongStates: StateTier[] = [
  { code: "NY", name: "New York", headlineAmount: "$5,000–$24,000", primaryProgram: "Clean Heat + EmPower+", note: "Six utilities, DAC bonuses, geothermal credit. Best overall program." },
  { code: "MD", name: "Maryland", headlineAmount: "Up to $15,000", primaryProgram: "EmPOWER Maryland", note: "75% of electrification costs covered. Potomac Edison Switch-to-Electric adds $4,000." },
  { code: "RI", name: "Rhode Island", headlineAmount: "Up to $11,500", primaryProgram: "Clean Heat RI", note: "Covers up to 60% of heat pump costs. Strong per-capita program." },
  { code: "CO", name: "Colorado", headlineAmount: "Up to $11,250", primaryProgram: "HEAR + Xcel + state credit", note: "HEAR active. $1,000 state tax credit stacks with $2,250/ton utility rebates." },
  { code: "WI", name: "Wisconsin", headlineAmount: "Up to $18,900", primaryProgram: "HEAR + HOMES + Focus on Energy", note: "First state to launch HOMES. HEAR and Focus on Energy stack." },
  { code: "MI", name: "Michigan", headlineAmount: "Up to $8,000", primaryProgram: "MiHER (HEAR)", note: "Point-of-sale rebates for ≤150% AMI. Ann Arbor A2ZERO adds $4,000–$5,500." },
  { code: "ME", name: "Maine", headlineAmount: "$1,000–$9,000", primaryProgram: "Efficiency Maine", note: "Well-funded through Triennial Plan VI ($529M). Income-tiered rebates." },
  { code: "MA", name: "Massachusetts", headlineAmount: "Up to $8,500", primaryProgram: "Mass Save", note: "Restructured rebates. R-410A excluded. $500 weatherization bonus." },
  { code: "NJ", name: "New Jersey", headlineAmount: "Up to $7,500+", primaryProgram: "Whole Home + utility rebates", note: "Cash-back plus 0% financing. Four utilities stack on top." },
  { code: "WA", name: "Washington", headlineAmount: "Up to $14,000+", primaryProgram: "HEAR + PSE", note: "HEAR launched 2025. PSE offers up to $4,000 for ducted systems." },
  { code: "NC", name: "North Carolina", headlineAmount: "Up to $16,000", primaryProgram: "Energy Saver NC", note: "HEAR + HOMES live statewide. Duke Energy adds $500–$1,000." },
  { code: "GA", name: "Georgia", headlineAmount: "Up to $16,000", primaryProgram: "HEAR + HER", note: "HEAR up to $8,000. HER whole-home up to $16,000 for ≤80% AMI." },
  { code: "IN", name: "Indiana", headlineAmount: "Up to $8,000+", primaryProgram: "Indiana Energy Saver (HEAR)", note: "HEAR and HOMES both active. Utility rebates add $275–$3,000." },
  { code: "AZ", name: "Arizona", headlineAmount: "Up to $8,000", primaryProgram: "Efficiency Arizona HEAR", note: "HEAR for ≤150% AMI. SRP Cool Cash adds $1,125. APS eliminated rebates." },
  { code: "DC", name: "Washington DC", headlineAmount: "Up to $9,800", primaryProgram: "DCSEU electrification", note: "Up to $5,000 for heat pumps + $3,200 electrification service rebates." },
  { code: "VT", name: "Vermont", headlineAmount: "Up to $7,950", primaryProgram: "Efficiency VT + BED", note: "Burlington Electric pays up to $7,950 for income-qualified ducted systems." },
];

const moderateStates: StateTier[] = [
  { code: "NH", name: "New Hampshire", headlineAmount: "$250–$1,900/ton", primaryProgram: "NHSaves + NE Accelerator", note: "HEAR approved, expected mid-summer 2026. R-410A banned from qualified list." },
  { code: "OR", name: "Oregon", headlineAmount: "$800–$3,500+", primaryProgram: "Energy Trust of Oregon", note: "RETC state tax credit adds value. HEAR launched 2025." },
  { code: "CT", name: "Connecticut", headlineAmount: "$250–$1,000/ton", primaryProgram: "Energize CT", note: "Smart-E Loan at 0.99% APR through March 2026. HEAR funded but not available." },
  { code: "MN", name: "Minnesota", headlineAmount: "Up to $2,600", primaryProgram: "Xcel + CenterPoint", note: "Save Energy MN (HEAR + $4,000 state rebate) has not launched." },
  { code: "NV", name: "Nevada", headlineAmount: "$510–$3,400", primaryProgram: "NV Energy PowerShift", note: "First-come first-served. HEAR/HOMES approved but not launched." },
  { code: "NM", name: "New Mexico", headlineAmount: "Up to $8,000", primaryProgram: "HEAR + geothermal credit", note: "HEAR restricted to ≤80% AMI only. PNM adds $550–$700." },
  { code: "DE", name: "Delaware", headlineAmount: "$800–$2,200", primaryProgram: "Energize Delaware", note: "HPwES program. DEMEC customers can stack Efficiency Smart rebates." },
  { code: "UT", name: "Utah", headlineAmount: "$2,450–$2,650", primaryProgram: "RMP + Enbridge stack", note: "Wattsmart + ThermWise dual-fuel stack. HEAR/HOMES not launched." },
  { code: "KY", name: "Kentucky", headlineAmount: "$500–$3,000", primaryProgram: "TVA EnergyRight + EKPC", note: "EKPC co-ops offer $1,000 cold-climate bonus. HEAR approved but not launched." },
  { code: "PA", name: "Pennsylvania", headlineAmount: "$350–$1,950", primaryProgram: "Act 129 utility rebates", note: "Act 129 Phase IV expiring May 2026. Penn Energy Savers ($258M) not launched." },
  { code: "VA", name: "Virginia", headlineAmount: "Up to $2,000", primaryProgram: "Washington Gas (NoVA only)", note: "$188M IRA funding pending. Most areas limited to small utility rebates." },
  { code: "MO", name: "Missouri", headlineAmount: "$200–$5,000", primaryProgram: "Ameren + Evergy + Columbia W&L", note: "No statewide program. Ameren offers $2,000 for ducted ASHPs." },
  { code: "HI", name: "Hawaii", headlineAmount: "$450–$700", primaryProgram: "Hawaii Energy", note: "eHale HEAR expected 2026. KIUC offers separate $500 HPWH on Kauai." },
  { code: "LA", name: "Louisiana", headlineAmount: "Up to $3,500", primaryProgram: "SWEPCO + Cleco", note: "SWEPCO strongest. Entergy only $500. HEAR/HOMES not launched." },
  { code: "IL", name: "Illinois", headlineAmount: "Up to $2,000", primaryProgram: "ComEd + Ameren", note: "Utility-only. HEAR and HOMES still pending launch." },
];

const limitedStates: StateTier[] = [
  { code: "TX", name: "Texas", headlineAmount: "Varies widely", primaryProgram: "Utility-by-utility", note: "No statewide program. Austin Energy best (~$3,000). $690M IRA not launched." },
  { code: "CA", name: "California", headlineAmount: "Utility-only", primaryProgram: "SMUD, LADWP", note: "TECH and HEEHRA single-family exhausted statewide. Utility rebates remain." },
  { code: "TN", name: "Tennessee", headlineAmount: "$500–$1,500", primaryProgram: "TVA EnergyRight", note: "TVA only active incentive. HEAR/HOMES expected Q3 2026." },
  { code: "AL", name: "Alabama", headlineAmount: "$500–$1,500", primaryProgram: "TVA + Alabama Power", note: "Northern AL gets TVA rebates. Alabama Power $1,000 gas-to-electric." },
  { code: "SC", name: "South Carolina", headlineAmount: "$300–$1,000", primaryProgram: "Duke + Dominion + Santee Cooper", note: "Geothermal credit 25% up to $3,500. HEAR/HOMES pending." },
  { code: "IA", name: "Iowa", headlineAmount: "$300–$713", primaryProgram: "MidAmerican + Alliant", note: "Cold-climate models get top tier. $121M IRA not launched." },
  { code: "MT", name: "Montana", headlineAmount: "$450–$1,560", primaryProgram: "NorthWestern + BPA co-ops", note: "Bozeman and Missoula offer local HPWH rebates. HEAR/HOMES paused." },
  { code: "WY", name: "Wyoming", headlineAmount: "$500–$1,700", primaryProgram: "RMP Wattsmart + co-ops", note: "HESP ($69M) not launched. Several co-ops offer $500–$1,800." },
  { code: "ND", name: "North Dakota", headlineAmount: "$300–$2,000", primaryProgram: "Otter Tail + Xcel", note: "Xcel $1,600–$2,000 flat rate. MDU offers nothing. HEAR/HOMES not launched." },
  { code: "FL", name: "Florida", headlineAmount: "$40–$1,150", primaryProgram: "FPL, Duke, TECO", note: "$346M IRA unlaunched. Utility rebates range from almost nothing to modest." },
  { code: "OH", name: "Ohio", headlineAmount: "Almost none", primaryProgram: "ECO-Link loans only", note: "HB 6 gutted utility programs. $249M IRA not launched. ECO-Link offers rate reduction." },
  { code: "ID", name: "Idaho", headlineAmount: "$400–$800", primaryProgram: "Idaho Power + Avista", note: "Rejected IRA HEAR/HOMES rebates. Utility rebates are all that remain." },
  { code: "SD", name: "South Dakota", headlineAmount: "$0–$4,000+", primaryProgram: "Varies by utility", note: "Opted out of IRA rebates ($68.5M declined). Otter Tail customers fare best." },
  { code: "AK", name: "Alaska", headlineAmount: "Limited", primaryProgram: "Utility-specific", note: "High heating costs but sparse utility programs. HEAR/HOMES status varies." },
  { code: "AR", name: "Arkansas", headlineAmount: "Limited", primaryProgram: "Utility-specific", note: "Entergy Arkansas and co-ops offer modest rebates. HEAR/HOMES pending." },
  { code: "KS", name: "Kansas", headlineAmount: "Limited", primaryProgram: "Utility-specific", note: "Evergy and municipal utilities offer small rebates. HEAR/HOMES pending." },
  { code: "MS", name: "Mississippi", headlineAmount: "Limited", primaryProgram: "TVA + utility-specific", note: "TVA EnergyRight in northern MS. Limited programs elsewhere." },
  { code: "NE", name: "Nebraska", headlineAmount: "Limited", primaryProgram: "OPPD + public power", note: "Public power districts offer varying rebates. HEAR/HOMES pending." },
  { code: "OK", name: "Oklahoma", headlineAmount: "Limited", primaryProgram: "OG&E + PSO", note: "Utility rebates are the primary incentive. HEAR/HOMES pending." },
  { code: "WV", name: "West Virginia", headlineAmount: "Limited", primaryProgram: "Utility-specific", note: "Appalachian Power and Mon Power offer modest rebates. HEAR/HOMES pending." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which states have the best heat pump rebates in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "New York, Maryland, Rhode Island, Colorado, Wisconsin, and Michigan offer the strongest heat pump rebates in 2026, with programs reaching $8,000–$24,000 for qualifying households. These states have active IRA-funded HEAR or HOMES programs stacking with utility rebates.",
      },
    },
    {
      "@type": "Question",
      name: "Are federal heat pump tax credits still available in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Federal heat pump tax credits under Sections 25C and 25D expired on December 31, 2025. They were repealed by the One Big Beautiful Bill Act signed July 4, 2025. No federal tax credit is available for heat pumps installed in 2026.",
      },
    },
    {
      "@type": "Question",
      name: "What is the HEAR program and which states have it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HEAR (Home Electrification and Appliance Rebates) is a federally funded, state-administered rebate program offering up to $8,000 per heat pump for income-qualifying households (below 150% of Area Median Income). As of March 2026, about a dozen states have launched HEAR programs including Colorado, Wisconsin, Michigan, North Carolina, Georgia, Indiana, Arizona, and Washington. Many other states have received funding but have not launched consumer-facing programs.",
      },
    },
    {
      "@type": "Question",
      name: "Can you stack heat pump rebates from different programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In most states, yes. Utility rebates, state programs, and IRA-funded HEAR or HOMES rebates can typically stack. The rules vary by state. Some states like Colorado and Wisconsin explicitly allow stacking all three layers. The main restriction is that total incentives generally cannot exceed 100% of project cost. Check your specific state guide for stacking rules.",
      },
    },
    {
      "@type": "Question",
      name: "How much do heat pump rebates actually reduce the cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For a typical ducted heat pump system costing $12,000–$18,000 installed, rebates in strong states can cover $5,000–$10,000 or more. Income-qualified households (below 80% AMI) in states with active HEAR programs can sometimes get systems for $2,000–$5,000 out of pocket. In limited states, expect $500–$2,000 off at most.",
      },
    },
  ],
};

export default function RebatesByStatePage() {
  const verifiedDate = "2026-03-24";
  const formattedDate = formatDate(verifiedDate);

  function StateRow({ state }: { state: StateTier }) {
    const incentive = incentives[state.code as keyof typeof incentives];
    const statusEmoji = incentive?.status === "open" ? "🟢" : incentive?.status === "limited" ? "🟡" : "🔴";

    return (
      <tr className="border-b">
        <td className="p-3">
          <Link
            href={`/heat-pumps/states/${state.code.toLowerCase()}`}
            className="text-brand-600 hover:underline font-semibold"
          >
            {state.name}
          </Link>
        </td>
        <td className="p-3 text-center">{statusEmoji}</td>
        <td className="p-3 font-semibold">{state.headlineAmount}</td>
        <td className="p-3 text-sm text-gray-600">{state.primaryProgram}</td>
        <td className="p-3 text-sm text-gray-600 hidden md:table-cell">{state.note}</td>
      </tr>
    );
  }

  function TierTable({ states, id }: { states: StateTier[]; id: string }) {
    return (
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full text-sm" id={id}>
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left p-3 font-semibold">State</th>
              <th className="text-left p-3 font-semibold">Status</th>
              <th className="text-left p-3 font-semibold">Rebate Range</th>
              <th className="text-left p-3 font-semibold">Primary Program</th>
              <th className="text-left p-3 font-semibold hidden md:table-cell">Notes</th>
            </tr>
          </thead>
          <tbody>
            {states.map((state) => (
              <StateRow key={state.code} state={state} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <>
      <JsonLd data={faqJsonLd} />

      {/* ---- 1. HERO ---- */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="container-narrow">
          <nav className="text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-brand-600">Home</Link>
            {" "}/{" "}
            <Link href="/heat-pumps" className="hover:text-brand-600">Heat Pumps</Link>
            {" "}/ Rebates by State
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Heat Pump Rebates by State: Where Incentives Are Still Available (2026)
          </h1>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Federal heat pump tax credits ended December 31, 2025. But{" "}
            <Link href="/heat-pumps" className="text-brand-600 hover:underline">
              state and utility heat pump incentives
            </Link>{" "}
            still range from <strong>$0 to over $16,000</strong> depending on where
            you live and your household income. Some states have launched IRA-funded HEAR
            and HOMES programs worth thousands. Others have almost nothing. This guide
            covers heat pump rebates in all 50 states and DC in 2026, ranked
            by how much you can realistically get. Here&apos;s what&apos;s actually available.
          </p>

          <p className="text-sm text-gray-500">
            Last verified: {formattedDate}
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Rates and program availability may change after this date.
          </p>
        </div>
      </section>

      {/* ---- 2. QUICK STATS + SUMMARY ---- */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Short Version</h2>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5 text-center">
              <p className="text-3xl font-bold text-green-800">{strongStates.length}</p>
              <p className="text-sm text-green-900">States with strong rebates ($5,000+)</p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 text-center">
              <p className="text-3xl font-bold text-amber-800">{moderateStates.length}</p>
              <p className="text-sm text-amber-900">States with moderate rebates ($1,000–$5,000)</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-5 text-center">
              <p className="text-3xl font-bold text-gray-700">{limitedStates.length}</p>
              <p className="text-sm text-gray-600">States with limited or no rebates</p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <p className="text-gray-700 leading-relaxed">
              <strong>Highest rebates:</strong> New York, Maryland, Wisconsin, Colorado,
              Washington, Rhode Island, and North Carolina — all offer $10,000+ for
              income-qualifying households through stacked programs.{" "}
              <strong>Lowest incentives:</strong> Ohio, Idaho, South Dakota, and states
              that declined IRA funding have little beyond small utility rebates. Federal
              tax credits (25C/25D) are gone for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* ---- 3. TOP 10 LIST ---- */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            The 10 Best States for Heat Pump Rebates in 2026
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Ranked by realistic maximum rebates available to a homeowner installing a
            ducted heat pump system, combining all stackable programs.
          </p>

          <div className="space-y-3 mb-6">
            {[
              { rank: 1, code: "ny", name: "New York", amount: "$5,000–$24,000", detail: "Clean Heat + EmPower+ + HEAR + geothermal credit" },
              { rank: 2, code: "wi", name: "Wisconsin", amount: "Up to $18,900", detail: "HEAR + HOMES + Focus on Energy (first state to launch HOMES)" },
              { rank: 3, code: "md", name: "Maryland", amount: "Up to $15,000", detail: "EmPOWER (75% of costs) + Potomac Edison Switch-to-Electric" },
              { rank: 4, code: "wa", name: "Washington", amount: "Up to $14,000+", detail: "HEAR + Puget Sound Energy + utility stack" },
              { rank: 5, code: "co", name: "Colorado", amount: "Up to $11,250", detail: "HEAR + Xcel Energy + $1,000 state tax credit" },
              { rank: 6, code: "ri", name: "Rhode Island", amount: "Up to $11,500", detail: "Clean Heat RI (60% of costs) + RI Energy rebates" },
              { rank: 7, code: "nc", name: "North Carolina", amount: "Up to $16,000", detail: "Energy Saver NC (HEAR + HOMES) + Duke Energy" },
              { rank: 8, code: "ga", name: "Georgia", amount: "Up to $16,000", detail: "HEAR + HER whole-home + Georgia Power" },
              { rank: 9, code: "dc", name: "Washington DC", amount: "Up to $9,800", detail: "DCSEU electrification + AHEP for low-income" },
              { rank: 10, code: "me", name: "Maine", amount: "$1,000–$9,000", detail: "Efficiency Maine (Triennial Plan VI, $529M funded)" },
            ].map((s) => (
              <div key={s.rank} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {s.rank}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    <Link
                      href={`/heat-pumps/states/${s.code}`}
                      className="text-brand-600 hover:underline"
                    >
                      {s.name}
                    </Link>
                    {" "}— <span className="text-green-700">{s.amount}</span>
                  </p>
                  <p className="text-sm text-gray-600">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="font-semibold text-blue-800 mb-1">Close runners-up</p>
            <p className="text-sm text-blue-900">
              <Link href="/heat-pumps/states/ma" className="text-brand-600 hover:underline">Massachusetts</Link>,{" "}
              <Link href="/heat-pumps/states/nj" className="text-brand-600 hover:underline">New Jersey</Link>,{" "}
              <Link href="/heat-pumps/states/mi" className="text-brand-600 hover:underline">Michigan</Link>, and{" "}
              <Link href="/heat-pumps/states/vt" className="text-brand-600 hover:underline">Vermont</Link>{" "}
              all offer $7,000–$8,500 in realistic rebates and could move higher as
              programs expand.
            </p>
          </div>
        </div>
      </section>

      {/* ---- 4. FEDERAL EXPIRED ALERT ---- */}
      <section className="py-8 bg-gray-50">
        <div className="container-narrow">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <p className="text-red-900 leading-relaxed">
              <strong>Federal tax credits are gone.</strong> The Section 25C Energy Efficient
              Home Improvement Credit and Section 25D Residential Clean Energy Credit both
              expired December 31, 2025. They were repealed by the One Big Beautiful Bill Act
              (signed July 4, 2025). No federal tax credit applies to heat pumps installed
              in 2026.{" "}
              <Link
                href="/federal-heat-pump-tax-credit-expired"
                className="text-brand-600 hover:underline"
              >
                Full details on the federal credit expiration →
              </Link>
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="font-semibold text-blue-800 mb-1">
              What replaced federal credits?
            </p>
            <p className="text-sm text-blue-900">
              Nothing directly. But IRA-funded HEAR and HOMES rebate programs — administered
              by individual states — are the main replacement. HEAR offers up to $8,000 per
              heat pump for households below 150% of Area Median Income (AMI). HOMES offers
              up to $4,000–$10,000 for whole-home efficiency projects at any income level.
              The catch: many states have not launched these programs yet, and funding
              availability varies.
            </p>
          </div>
        </div>
      </section>

      {/* ---- 4. STRONG REBATES ---- */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            States With Strong Heat Pump Rebates ($5,000+)
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            These {strongStates.length} states have active programs that can realistically
            cover <strong>$5,000 or more</strong> of a heat pump installation for qualifying
            homeowners. Most have launched IRA-funded HEAR or HOMES rebates, have strong
            state-administered programs, or both. Income-qualified households (below 80%
            AMI) often qualify for the highest amounts.
          </p>

          <TierTable states={strongStates} id="strong-states" />

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <p className="font-semibold text-green-800 mb-1">✓ Best overall programs</p>
            <p className="text-sm text-green-900">
              New York, Maryland, Wisconsin, and Colorado stand out for having the deepest
              stacking — multiple program layers that combine to cover a large share of
              project costs. Income-qualified households in these states can often get a
              heat pump system for <strong>$2,000–$5,000 out of pocket</strong> on a
              $12,000–$18,000 project.
            </p>
          </div>
        </div>
      </section>

      {/* ---- 5. MODERATE REBATES ---- */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            States With Moderate Heat Pump Rebates ($1,000–$5,000)
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            These {moderateStates.length} states offer meaningful rebates — typically through
            utility programs, state energy offices, or approved-but-not-yet-launched HEAR
            programs. The amounts are helpful but generally will not cover a large share of
            installation costs. Some of these states will move into the &ldquo;strong&rdquo;
            tier once their HEAR or HOMES programs launch.
          </p>

          <TierTable states={moderateStates} id="moderate-states" />

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="font-semibold text-amber-800 mb-1">⚠ Watch these states</p>
            <p className="text-sm text-amber-900">
              New Hampshire, Connecticut, Nevada, and Pennsylvania all have approved IRA
              funding that has not launched yet. When those programs go live, rebates in
              those states could jump by $4,000–$8,000. Check individual state guides for
              the latest status.
            </p>
          </div>
        </div>
      </section>

      {/* ---- 6. LIMITED REBATES ---- */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            States With Limited or No Heat Pump Rebates
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            These {limitedStates.length} states have sparse incentives — typically utility-only
            programs with modest amounts, or no active programs at all. A few (South Dakota,
            Idaho) have declined IRA rebate funding entirely. For homeowners in these states,
            the math depends almost entirely on energy savings rather than upfront rebates.
          </p>

          <TierTable states={limitedStates} id="limited-states" />

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="font-semibold text-blue-800 mb-1">
              Even in limited states, check your utility
            </p>
            <p className="text-sm text-blue-900">
              Rebate availability often depends more on your electric utility than your state.
              In Texas, Austin Energy customers can get ~$3,000 while most of the state gets
              nothing. In South Dakota, Otter Tail Power customers get $4,000+ while
              NorthWestern Energy customers get $0. Always check with your specific utility
              before assuming nothing is available.
            </p>
          </div>
        </div>
      </section>

      {/* ---- 7. KEY PATTERNS ---- */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What Determines How Much You Can Get
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Heat pump rebates in 2026 depend on four factors. Understanding these helps
            explain why the same heat pump installation might cost $4,000 out of pocket in
            Colorado but $15,000 in Florida.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                1. Whether your state launched HEAR or HOMES
              </h3>
              <p className="text-gray-700 leading-relaxed">
                This is the single biggest factor. States that have launched IRA-funded HEAR
                programs offer up to <strong>$8,000 per heat pump</strong> for households below
                150% AMI. HOMES adds up to <strong>$4,000–$10,000</strong> for whole-home
                projects. About a dozen states have active programs. The rest have approved
                funding sitting unused — some by choice, some waiting for federal approval.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                2. Your household income relative to AMI
              </h3>
              <p className="text-gray-700 leading-relaxed">
                HEAR and many state programs use Area Median Income (AMI) thresholds. Households
                below 80% AMI get the highest rebates (often 100% of costs). Households at
                80–150% AMI get partial rebates. Above 150% AMI, HEAR does not apply — you are
                limited to utility rebates and state programs that do not income-qualify.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                3. Your electric utility
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Utility rebates range from $0 to $4,000+ and vary dramatically even within the
                same state. In New York, Con Edison and National Grid offer very different amounts
                for the same equipment. Municipal utilities and rural electric cooperatives often
                have separate programs. Always check your specific utility.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                4. Stacking rules
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The best outcomes come from stacking multiple program layers: HEAR + utility +
                state tax credit + local municipal rebate. Most states allow stacking as long
                as total incentives do not exceed 100% of project cost. A few states restrict
                it. The stacking math is where the real value is — check your{" "}
                <Link href="/heat-pumps" className="text-brand-600 hover:underline">
                  state guide
                </Link>{" "}
                for specific scenarios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- 8. COMMON MISTAKES ---- */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Common Mistakes When Searching for Rebates
          </h2>

          <div className="space-y-4">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="font-semibold text-amber-800 mb-1">⚠ Assuming the federal credit still exists</p>
              <p className="text-sm text-amber-900">
                Many websites and contractors still list the $2,000 federal tax credit (Section
                25C) as available. It is not. It ended December 31, 2025. If someone tells you
                the credit is still available, they are wrong or out of date.
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="font-semibold text-amber-800 mb-1">⚠ Confusing HEAR with the federal tax credit</p>
              <p className="text-sm text-amber-900">
                HEAR is a point-of-sale rebate administered by your state — not a tax credit you
                claim on your return. It also has income limits (150% AMI). These are different
                programs with different rules.
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="font-semibold text-amber-800 mb-1">⚠ Starting work before checking HEAR eligibility</p>
              <p className="text-sm text-amber-900">
                In most states, HEAR rebates must be applied for before installation begins.
                Projects started before your state&apos;s HEAR program launches are not
                retroactively eligible. If HEAR is coming soon to your state, it may be worth
                waiting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- 9. FIND YOUR STATE ---- */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Find Your State&apos;s Full Guide
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            We publish detailed guides for every state with verified dollar amounts,
            stacking scenarios, and application steps. Select your state below.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-6">
            {(Object.keys(incentives) as Array<keyof typeof incentives>)
              .sort((a, b) => incentives[a].stateName.localeCompare(incentives[b].stateName))
              .map((code) => {
                const incentive = incentives[code];
                const statusEmoji = incentive.status === "open" ? "🟢" : incentive.status === "limited" ? "🟡" : "🔴";
                const statusLabel = incentive.status === "open" ? "Active programs" : incentive.status === "limited" ? "Limited programs" : "Paused";
                return (
                  <Link
                    key={code}
                    href={`/heat-pumps/states/${code.toLowerCase()}`}
                    className="bg-white border border-gray-200 rounded-lg p-4 hover:border-brand-600 hover:bg-blue-50 transition-colors"
                  >
                    <p className="font-semibold text-gray-900">{incentive.stateName}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {statusEmoji} {statusLabel}
                    </p>
                  </Link>
                );
              })}
          </div>

          <p className="text-sm text-gray-500">
            Or browse by tier in the tables above, or use the{" "}
            <Link href="/heat-pumps" className="text-brand-600 hover:underline">
              heat pump hub
            </Link>{" "}
            to search by state.
          </p>
        </div>
      </section>

      {/* ---- 10. BATTERIES TIE-IN ---- */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What About Home Batteries?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            If you are considering a heat pump, you may also be weighing home battery
            storage — especially in states with time-of-use rates or net metering. The
            federal battery tax credit (Section 25D) also expired at the end of 2025,
            which changes the economics significantly.
          </p>

          <p className="text-gray-700 leading-relaxed">
            <Link href="/battery" className="text-brand-600 hover:underline">
              Are home batteries worth it in 2026? →
            </Link>
          </p>
        </div>
      </section>

      {/* ---- 11. FAQ ---- */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqJsonLd.mainEntity.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.name}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- 12. SEE ALSO ---- */}
      <section className="py-8 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-3">See also</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/heat-pumps"
                className="text-brand-600 hover:underline"
              >
                All State Heat Pump Incentives — Hub Page
              </Link>
            </li>
            <li>
              <Link
                href="/federal-heat-pump-tax-credit-expired"
                className="text-brand-600 hover:underline"
              >
                Federal Heat Pump Tax Credits Ended — Full Explainer
              </Link>
            </li>
            <li>
              <Link
                href="/battery"
                className="text-brand-600 hover:underline"
              >
                Are Home Batteries Worth It in 2026?
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* ---- WHY REBATES VARY ---- */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why Heat Pump Rebates Vary So Much by State
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            The gap between a $24,000 rebate package in New York and almost nothing
            in Ohio is not random. Four structural factors drive the differences.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Utility regulation model.</strong> States with strong public utility
            commissions (New York, Maryland, Massachusetts) can mandate that utilities
            fund energy efficiency programs through ratepayer charges. Deregulated states
            like Texas and Ohio leave incentive decisions to individual utilities, creating
            a patchwork where one utility territory has rebates and the next has none.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>State climate policy.</strong> States with aggressive decarbonization
            goals (New York&apos;s Climate Leadership and Community Protection Act,
            Colorado&apos;s GHG Pollution Reduction Roadmap) dedicate state funding to
            electrification. States without those commitments rely entirely on IRA
            federal funding — which many have been slow to deploy.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>IRA deployment speed.</strong> Every state received IRA HEAR and HOMES
            funding allocations. But states had to apply to the Department of Energy,
            build administrative infrastructure, and select program administrators. Some
            (Wisconsin, Colorado, North Carolina) moved fast. Others (Florida, Texas, Ohio)
            have not launched programs despite receiving hundreds of millions. A few (South
            Dakota, Idaho) declined the money outright.
          </p>

          <p className="text-gray-700 leading-relaxed">
            <strong>Heating fuel mix.</strong> States where homes primarily heat with oil
            or propane (Maine, Vermont, New Hampshire) tend to have stronger heat pump
            programs because the economics of switching are clearer. States where natural
            gas is cheap and dominant (Texas, Oklahoma, Kansas) have less political and
            economic incentive to fund electrification programs.
          </p>
        </div>
      </section>

      {/* ---- 13. METHODOLOGY ---- */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Methodology &amp; Sources</h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            State tier rankings are based on the realistic maximum rebate available to a
            homeowner installing a ducted air-source heat pump system in 2026. We verified
            program status, dollar amounts, and eligibility rules directly against official
            state energy office websites, utility program pages, and IRS guidance. Each
            state&apos;s individual guide lists all sources with verification dates.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Tier placement reflects editorial judgment — not just the &ldquo;status&rdquo;
            field in program databases. A state marked &ldquo;open&rdquo; may still have
            limited practical value if programs are restricted to narrow income bands or
            specific utility territories.
          </p>

          <p className="text-gray-700 leading-relaxed">
            <Link href="/about" className="text-brand-600 hover:underline">
              Read our full verification methodology →
            </Link>
          </p>
        </div>
      </section>

      {/* ---- AUTHOR BLOCK ---- */}
      <section className="py-8 bg-gray-50">
        <div className="container-narrow">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <p className="text-sm text-gray-500 mb-1">About this guide</p>
            <p className="text-gray-700 leading-relaxed">
              Researched and maintained by Giniw at{" "}
              <Link href="/" className="text-brand-600 hover:underline">
                Home Energy Basics
              </Link>
              , an independent guide tracking U.S. heat pump rebates and home
              electrification incentives. Every rebate amount, program status,
              and source link is verified against official state, utility, and
              federal program pages before publishing.{" "}
              <Link href="/about" className="text-brand-600 hover:underline">
                See our verification methodology
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ---- 14. DISCLAIMER ---- */}
      <section className="py-8">
        <div className="container-narrow">
          <div className="bg-gray-100 rounded-lg p-6">
            <p className="text-gray-500 text-xs leading-relaxed">
              <strong>Disclaimer:</strong> This page summarizes heat pump rebates and
              incentives available across U.S. states in 2026. It does not calculate savings,
              guarantee eligibility, or represent any incentive program. Tier rankings
              reflect editorial judgment based on verified data and may not capture every
              local program or recent change. We verify status regularly but programs can
              change without notice. Always confirm current amounts and eligibility with
              your state energy office, utility, and contractor before making decisions.
            </p>
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/heat-pumps"
              className="text-brand-600 hover:underline text-sm"
            >
              ← Back to Heat Pumps overview
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
