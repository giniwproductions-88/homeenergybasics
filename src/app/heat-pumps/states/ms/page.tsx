import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Mississippi Heat Pump Rebates 2026: Up to $1,500 + TVA EnergyRight | Home Energy Basics",
  description:
    "TVA EnergyRight offers up to $1,500. Entergy MS covers up to $1,100. Federal tax credits ended. Here\u2019s every Mississippi heat pump incentive in 2026.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/ms",
  },
  openGraph: {
    title: "Mississippi Heat Pump Rebates 2026",
    description:
      "Utility rebates up to $1,500 from TVA and $1,100 from Entergy \u2014 the complete guide to Mississippi heat pump incentives after federal credits expired.",
    url: "https://homeenergybasics.com/heat-pumps/states/ms",
    type: "article",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What heat pump rebates are available in Mississippi in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mississippi heat pump rebates come from three utility providers. TVA EnergyRight offers up to $1,500 for qualifying air-source heat pumps in northeast Mississippi. Entergy Mississippi offers $500\u2013$1,100 depending on efficiency tier. Mississippi Power offers $160\u2013$200 per ton. Federal tax credits (25C and 25D) expired December 31, 2025. Mississippi\u2019s IRA-funded HEAR and HOMES rebates have not yet launched.",
      },
    },
    {
      "@type": "Question",
      name: "Can I stack utility rebates with HEAR in Mississippi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When Mississippi\u2019s HEAR program launches, utility rebates and HEAR rebates are expected to be stackable \u2014 but final rules depend on the Mississippi Development Authority\u2019s program design. HEAR could add up to $8,000 for households at or below 150% of Area Median Income. HOMES rebates of up to $4,000\u2013$8,000 may also be available. Stacking details have not been finalized.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a cold-climate heat pump in Mississippi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Mississippi sits in IECC Climate Zones 2A and 3A (Hot-Humid), with winter design temperatures ranging from about 19\u00b0F in Tupelo to 32\u00b0F on the Gulf Coast. Standard air-source heat pumps operate efficiently year-round across the entire state. Cold-climate rated systems are unnecessary and may cost more without meaningful benefit.",
      },
    },
    {
      "@type": "Question",
      name: "Which Mississippi utility offers the highest heat pump rebate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TVA EnergyRight offers the highest rebate at $1,500 for TVA Preferred air-source heat pumps \u2014 available through 26+ local distributors in northeast Mississippi including Tupelo Water & Light, Oxford Utilities, and Central Electric Power Association. The system must use a variable-speed compressor and produce 100% rated heating at 17\u00b0F. Entergy Mississippi\u2019s top tier is $1,100 for systems meeting 18.05+ SEER2.",
      },
    },
    {
      "@type": "Question",
      name: "When will Mississippi\u2019s IRA HEAR rebates launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As of March 2026, no launch date has been announced. The Mississippi Development Authority accepted the state\u2019s $104.8 million IRA allocation for HOMES and HEAR programs but has not opened a consumer application portal. Monitor the MDA Office of Energy page at mississippi.org for updates.",
      },
    },
  ],
};

export default function MississippiPage() {
  const msIncentive = incentives.MS;
  const formattedDate = formatDate(msIncentive.lastVerified);

  return (
    <>
      <JsonLd data={faqJsonLd} />

      {/* 1. HERO */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="container-narrow">
          <nav className="text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-brand-600">Home</Link>
            {" "}/{" "}
            <Link href="/heat-pumps" className="hover:text-brand-600">Heat Pumps</Link>
            {" "}/ Mississippi
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mississippi Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            With federal tax credits expired and the state&apos;s IRA rebate programs still pending,
            Mississippi homeowners rely on utility rebates for heat pump savings in 2026. TVA
            EnergyRight offers up to <strong>$1,500</strong> in northeast Mississippi, and Entergy
            Mississippi covers up to <strong>$1,100</strong> statewide. This guide covers all major
            Mississippi heat pump incentives available in 2026, including Entergy Mississippi,
            TVA EnergyRight, Mississippi Power, and rural cooperative programs.
            Here&apos;s what&apos;s actually available.
          </p>
          <p className="text-sm text-gray-500">
            Last verified: {formattedDate}
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Rates and program availability may change after this date.
          </p>
        </div>
      </section>

      {/* 2. STATUS CARD */}
      <section className="py-8">
        <div className="container-narrow">
          <StatusCard incentive={msIncentive} />
        </div>
      </section>

      {/* 3. SHORT VERSION */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Short version</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ TVA EnergyRight (northeast MS)</p>
              <p className="text-sm text-green-900">Up to $1,500 for TVA Preferred air-source heat pumps through 26+ local distributors. Up to $900 instant rebate on heat pump water heaters at participating retailers.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Entergy Mississippi (central/south MS)</p>
              <p className="text-sm text-green-900">$500–$1,100 for ducted heat pumps depending on efficiency tier. Up to $750 for heat pump water heaters. Must use a participating trade ally contractor.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Potential savings when HEAR launches</p>
              <p className="text-sm text-green-900">$500–$1,500 (above 150% AMI, utility only) to $9,500+ (below 80% AMI with HEAR). Full electrification packages can reach ~$17,000+ total incentives for income-qualified households.</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">✗ Federal tax credits expired</p>
              <p className="text-sm text-red-900">Both the Section 25C ($2,000 heat pump credit) and Section 25D (30% geothermal credit) ended December 31, 2025. Equipment installed in 2026 does not qualify.</p>
            </div>
            <div className="md:col-span-2 bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="font-semibold text-amber-800 mb-1">⚠ IRA HEAR and HOMES programs not yet launched</p>
              <p className="text-sm text-amber-900">Mississippi accepted $104.8 million in IRA funding for HEAR and HOMES rebates, but the Mississippi Development Authority has not opened consumer applications. HEAR could provide up to $8,000 per heat pump for households below 150% AMI. Do not delay a needed replacement waiting for these programs — utility rebates are available now.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEDERAL EXPIRED */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Federal tax credits have ended</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <p className="text-red-900 leading-relaxed">
              The <strong>Section 25C</strong> Energy Efficient Home Improvement Credit and{" "}
              <strong>Section 25D</strong> Residential Clean Energy Credit both expired on{" "}
              <strong>December 31, 2025</strong>. The One Big Beautiful Bill Act (signed July 4, 2025)
              terminated these credits for any equipment placed in service after that date. Equipment
              purchased in 2025 but installed in 2026 does <strong>not</strong> qualify — the IRS
              uses the installation completion date, not the purchase date.{" "}
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                Full details on the federal credit expiration →
              </Link>
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Mississippi has <strong>no state income tax credit</strong> for heat pumps and no state-level
            replacement for the expired federal credits. The IRA-funded HEAR and HOMES rebate programs
            were not repealed and remain funded through September 30, 2031 — but Mississippi has not
            yet launched these programs for consumers.
          </p>
        </div>
      </section>

      {/* 5. HEAR / PRIMARY — white py-12 */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Home Electrification and Appliance Rebates (HEAR)</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Mississippi was allocated <strong>$52,237,320</strong> in HEAR funding under the Inflation
            Reduction Act. The <strong>Mississippi Development Authority (MDA), Office of Energy</strong> is
            the administering agency. As of March 2026, no consumer application portal has been opened
            and no launch date has been announced.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            When launched, HEAR rebates will be available to households at or below 150% of Area Median
            Income (AMI). Households below 80% AMI receive 100% of costs up to item caps.
            Those between 80–150% AMI receive 50% of costs. Households above 150% AMI are not eligible.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Maximum HEAR rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Heat pump (HVAC)</td>
                  <td className="p-3 font-semibold">$8,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">$1,750</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Electric panel upgrade</td>
                  <td className="p-3 font-semibold">$4,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Insulation and air sealing</td>
                  <td className="p-3 font-semibold">$1,600</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Electric wiring</td>
                  <td className="p-3 font-semibold">$2,500</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3 font-semibold">Household cap</td>
                  <td className="p-3 font-semibold">$14,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="font-semibold text-amber-800 mb-1">⚠ Common mistake: waiting for HEAR to replace your failing system</p>
            <p className="text-sm text-amber-900">If your current HVAC system is failing, do not wait for HEAR — there is no confirmed launch date. Install now using available utility rebates. If HEAR launches retroactive provisions, you may still qualify, but this is not guaranteed. A broken system costs more in emergency repairs and discomfort than the potential rebate difference.</p>
          </div>
        </div>
      </section>

      {/* 6. HOMES / SECONDARY — bg-gray-50 py-12 */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Home Efficiency Rebates (HOMES)</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Mississippi was allocated <strong>$52,543,050</strong> in HOMES funding. Unlike HEAR,
            HOMES rebates are available at all income levels — but the amount depends on measured or
            modeled energy savings achieved by the whole-home project.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Energy savings achieved</th>
                  <th className="text-left p-3 font-semibold">Standard household</th>
                  <th className="text-left p-3 font-semibold">≤80% AMI household</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">20–34% reduction</td>
                  <td className="p-3 font-semibold">Up to $2,000</td>
                  <td className="p-3 font-semibold">Up to $4,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">≥35% reduction</td>
                  <td className="p-3 font-semibold">Up to $4,000</td>
                  <td className="p-3 font-semibold">Up to $8,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed">
            HOMES requires a pre- and post-retrofit energy assessment to verify savings. Like HEAR,
            this program has not launched in Mississippi. MDA&apos;s program design details — including
            whether measured or modeled pathway will be used — have not been published.
          </p>
        </div>
      </section>

      {/* 7. UTILITY PROGRAMS — white py-12 */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Utility rebate programs</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Utility rebates are the only active heat pump incentives in Mississippi in 2026.
            Your rebate depends on which utility serves your home. Mississippi is split between
            three major providers: Entergy Mississippi (central and southern), TVA distributors
            (northeast), and Mississippi Power (southeast).
          </p>

          {/* Entergy Mississippi */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Entergy Mississippi</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Entergy Mississippi serves approximately 459,000 customers across 45 counties.
            All HVAC rebates require installation by a participating Entergy Solutions trade ally
            contractor — this is not a consumer mail-in program.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Ducted split-system heat pumps</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Tier</th>
                  <th className="text-left p-3 font-semibold">SEER2 / HSPF2 minimum</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Tier 1</td>
                  <td className="p-3">≥15.20 SEER2 and ≥7.8 HSPF2</td>
                  <td className="p-3 font-semibold">$500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Tier 2</td>
                  <td className="p-3">≥16.15 SEER2 and ≥8.0 HSPF2</td>
                  <td className="p-3 font-semibold">$750</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Tier 3</td>
                  <td className="p-3">≥18.05 SEER2 and ≥8.0 HSPF2</td>
                  <td className="p-3 font-semibold">$1,100</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Single-package and ductless heat pumps</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Type</th>
                  <th className="text-left p-3 font-semibold">Requirements</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Single-package Tier 1</td>
                  <td className="p-3">≥14.30 SEER2 / ≥7.2 HSPF2</td>
                  <td className="p-3 font-semibold">$500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Single-package Tier 2</td>
                  <td className="p-3">≥15.20 SEER2 / ≥7.4 HSPF2</td>
                  <td className="p-3 font-semibold">$750</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Single-package Tier 3</td>
                  <td className="p-3">≥17.10 SEER2 / ≥7.4 HSPF2</td>
                  <td className="p-3 font-semibold">$1,100</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ductless mini-split Tier 1</td>
                  <td className="p-3">≥16.0 SEER2 / ≥9.0 HSPF2</td>
                  <td className="p-3 font-semibold">$140/ton</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ductless mini-split Tier 2</td>
                  <td className="p-3">≥18.0 SEER2 / ≥9.0 HSPF2</td>
                  <td className="p-3 font-semibold">$165/ton</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            Entergy also offers up to <strong>$750</strong> for ENERGY STAR certified heat pump water
            heaters through its appliance rebate program. HPWH rebates can be submitted online or by
            mail within 30 days of purchase — no trade ally required.
          </p>

          {/* TVA EnergyRight */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">TVA EnergyRight (northeast Mississippi)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            TVA serves parts of 36 Mississippi counties through 26+ local distributors — cooperatives
            like Central Electric Power Association and North East Mississippi EPA, and municipal
            utilities like Tupelo Water &amp; Light and Oxford Utilities. All distributors use the
            same standardized EnergyRight rebate schedule.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Requirements</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">TVA Preferred ASHP</td>
                  <td className="p-3">Variable-speed, ≥15.2 SEER2, ≥8.1 HSPF2, 100% heating at 17°F</td>
                  <td className="p-3 font-semibold">$1,500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Geothermal heat pump</td>
                  <td className="p-3">Replaces existing electric heat</td>
                  <td className="p-3 font-semibold">$1,500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump, 17+ SEER2</td>
                  <td className="p-3">Air source or dual fuel</td>
                  <td className="p-3 font-semibold">$800</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump, 15–16.99 SEER2</td>
                  <td className="p-3">Air source or dual fuel</td>
                  <td className="p-3 font-semibold">$500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ductless mini-split, 17+ SEER2</td>
                  <td className="p-3">{"\u2014"}</td>
                  <td className="p-3 font-semibold">$800</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3">ENERGY STAR certified</td>
                  <td className="p-3 font-semibold">Up to $900 instant</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            The <strong>$1,500 TVA Preferred</strong> tier requires a variable-speed compressor (two-stage
            excluded), 100% rated heating capacity at 17°F without backup heat, cooling capacity no more
            than 125% of cooling load, a Manual J 8th Edition load calculation, and installation by a
            Quality Contractor Network (QCN) member. All TVA rebates require QCN installation.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The <strong>$900 HPWH instant rebate</strong> is applied at the point of sale at participating
            Lowe&apos;s and Home Depot locations — this is the only true point-of-sale rebate in Mississippi.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-blue-800 mb-1">TVA Home Uplift: free upgrades for income-eligible households</p>
            <p className="text-sm text-blue-900">TVA&apos;s Home Uplift program provides an average of $10,000 in free home energy upgrades — including HVAC replacement, insulation, and appliances — for households at or below 200% of the federal poverty level. Contact your local TVA distributor to check availability in your area.</p>
          </div>

          {/* Mississippi Power */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Mississippi Power (southeast Mississippi)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Mississippi Power (a Southern Company subsidiary) serves the southeastern portion of the
            state. Rebates use a per-ton model and are delivered as a digital gift card or bill credit.
            Customers are limited to two HVAC rebates per premise every ten years.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Requirement</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Heat pump, ≥15.2 SEER</td>
                  <td className="p-3">~14.3 SEER2 equivalent</td>
                  <td className="p-3 font-semibold">$160/ton</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump, ≥16.15 SEER</td>
                  <td className="p-3">{"\u2014"}</td>
                  <td className="p-3 font-semibold">$200/ton</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ductless heat pump, &gt;16.15 SEER</td>
                  <td className="p-3">{"\u2014"}</td>
                  <td className="p-3 font-semibold">$200/ton</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3">ENERGY STAR, EF ≥2.0</td>
                  <td className="p-3 font-semibold">$350</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            A typical 3-ton, 16+ SEER system yields a <strong>$600</strong> rebate. The maximum for a
            5-ton system is roughly <strong>$1,000</strong>.
          </p>

          {/* Rural co-ops */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Rural electric cooperatives</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Cooperatives in southern and western Mississippi operate under the Comfort Advantage brand
            promoted by Cooperative Energy. Rebate amounts vary by cooperative and are generally more
            modest than Entergy or TVA programs.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Cooperative</th>
                  <th className="text-left p-3 font-semibold">Heat pump rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Singing River Electric</td>
                  <td className="p-3 font-semibold">$300–$500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Coast Electric</td>
                  <td className="p-3 font-semibold">$150–$500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Pearl River Valley EPA</td>
                  <td className="p-3 font-semibold">Up to $500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Southern Pine Electric</td>
                  <td className="p-3 font-semibold">$300–$500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-gray-500">Delta, Southwest MS, Twin County, others</td>
                  <td className="p-3 text-gray-500">No documented rebate programs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SKIP section 8 (Local Programs) — no MS city programs exist */}

      {/* 9. STACKING — bg-gray-50 py-12 */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How programs stack</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            In 2026, utility rebates are the only active incentive. When HEAR and HOMES launch,
            Mississippi homeowners may be able to stack utility rebates with IRA rebates — but final
            stacking rules depend on MDA&apos;s program design, which has not been finalized.
            The scenarios below show current utility-only stacking and projected stacking
            after IRA programs launch.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Current stacking (utility rebates only)</h3>
          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 150% AMI — ducted heat pump + HPWH (Entergy territory)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Entergy Tier 3 ducted HP: $1,100</li>
                <li>Entergy HPWH: $750</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$1,850</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 150% AMI — TVA Preferred HP + HPWH (TVA territory)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>TVA Preferred ASHP: $1,500</li>
                <li>TVA HPWH instant rebate: $900</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$2,400</p>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Projected stacking (when HEAR launches)</h3>
          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">80–150% AMI — ducted HP + HPWH (TVA territory)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>TVA Preferred ASHP: $1,500</li>
                <li>TVA HPWH instant rebate: $900</li>
                <li>HEAR HP (50% of cost, up to): $4,000</li>
                <li>HEAR HPWH (50% of cost, up to): $875</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Projected maximum: ~$7,275</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">Below 80% AMI — full electrification (TVA territory)</p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>TVA Preferred ASHP: $1,500</li>
                <li>TVA HPWH instant rebate: $900</li>
                <li>HEAR HP (100% of cost, up to): $8,000</li>
                <li>HEAR HPWH (100% of cost, up to): $1,750</li>
                <li>HEAR panel upgrade (up to): $4,000</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Projected maximum: ~$16,150</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-5">
            <p className="font-semibold text-gray-900 mb-1">What you&apos;ll actually pay</p>
            <p className="text-sm text-gray-700">
              For a typical <strong>$12,000–$18,000</strong> ducted heat pump installation: with utility
              rebates only, expect to pay <strong>$10,500–$16,500</strong> out of pocket. If HEAR launches
              and you qualify at the 80% AMI tier, out-of-pocket costs could drop to{" "}
              <strong>$2,000–$6,000</strong>. Mississippi Power territory customers receive the smallest
              utility rebates and will benefit the most when HEAR launches.
            </p>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Mississippi has no state tax credit, no state loan program, and no PACE financing. Stacking
            is limited to utility rebates plus future IRA programs.
          </p>
        </div>
      </section>

      {/* 10. WEATHERIZATION — white py-12 */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Weatherization Assistance Program</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Mississippi Weatherization Assistance Program (WAP) is administered by the{" "}
            <strong>Mississippi Department of Human Services (MDHS)</strong> through six Community Action
            Agencies covering all 82 counties. WAP provides free weatherization services — including
            insulation, air sealing, and furnace repair or replacement — at no cost to eligible households.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Eligibility requires household income at or below <strong>200% of the federal poverty level</strong>{" "}
            ($64,300 for a family of four in 2026). Priority goes to seniors, disabled individuals,
            households with young children, and those with high energy burden. Applications are submitted
            through the Access MS portal at{" "}
            <a href="https://access.ms.gov" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">access.ms.gov</a>.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <p className="font-semibold text-green-800 mb-1">✓ Best candidates for Mississippi heat pump upgrades</p>
            <p className="text-sm text-green-900">Homeowners replacing electric resistance heating (baseboard, wall heaters, or portable space heaters) — a heat pump can cut heating costs by 50% or more. Propane-heated homes in rural areas where propane prices are volatile. Income-qualifying households in TVA territory who can combine $1,500 TVA rebate with future HEAR rebates. Mississippi Power customers who should lock in current per-ton rebates before any program changes.</p>
          </div>
        </div>
      </section>

      {/* 11. CLIMATE — bg-gray-50 py-12 */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Climate context</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Mississippi sits in IECC Climate Zones 2A (southern) and 3A (northern) — both classified
            as Hot-Humid. Standard air-source heat pumps operate efficiently year-round across the
            entire state. Cold-climate rated heat pumps are unnecessary and may cost more without
            meaningful benefit. A properly sized system should rarely need backup electric resistance
            heat, even in Tupelo&apos;s coldest nights.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">City</th>
                  <th className="text-left p-3 font-semibold">99% heating design temp</th>
                  <th className="text-left p-3 font-semibold">1% cooling design temp</th>
                  <th className="text-left p-3 font-semibold">Annual HDD (base 65°F)</th>
                  <th className="text-left p-3 font-semibold">Annual CDD (base 65°F)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Jackson</td>
                  <td className="p-3">23–26°F</td>
                  <td className="p-3">~95°F</td>
                  <td className="p-3">~2,400</td>
                  <td className="p-3">~2,400</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Gulfport</td>
                  <td className="p-3">29–32°F</td>
                  <td className="p-3">~93°F</td>
                  <td className="p-3">~1,700</td>
                  <td className="p-3">~2,800</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Tupelo</td>
                  <td className="p-3">19–22°F</td>
                  <td className="p-3">~95°F</td>
                  <td className="p-3">~2,900</td>
                  <td className="p-3">~2,200</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Hattiesburg</td>
                  <td className="p-3">25–28°F</td>
                  <td className="p-3">~95°F</td>
                  <td className="p-3">~2,200</td>
                  <td className="p-3">~2,500</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Approximately <strong>56%</strong> of Mississippi homes already heat with electricity — many
            using inefficient electric resistance heating. Another <strong>32%</strong> use natural gas
            and roughly <strong>10%</strong> use propane (double the national rate). Upgrading from
            electric resistance to a heat pump can cut heating energy use by 50% or more. Propane-heated
            homes represent the highest per-household savings opportunity due to volatile propane prices.
          </p>
          <p className="text-gray-700 leading-relaxed">
            For homeowners considering pairing a heat pump with battery storage, see our{" "}
            <Link href="/battery" className="text-brand-600 hover:underline">
              guide to home batteries in 2026
            </Link>.
          </p>
        </div>
      </section>

      {/* 12. HOW TO APPLY — white py-12 */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to apply</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The process depends on your utility. Here&apos;s the typical path for the two largest programs.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Entergy Mississippi</h3>
          <div className="space-y-4 mb-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-gray-900">Find a participating trade ally</p>
                <p className="text-sm text-gray-700">Search the Entergy Solutions contractor directory at entergymississippi.com. Only installations by approved trade allies qualify for HVAC rebates.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900">Get a qualifying system installed</p>
                <p className="text-sm text-gray-700">Your trade ally will verify the system meets efficiency tier requirements (SEER2/HSPF2 minimums) and submit the rebate paperwork.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-900">Rebate is applied</p>
                <p className="text-sm text-gray-700">The trade ally handles submission. HPWH rebates can be submitted directly by the homeowner online or by mail within 30 days of purchase.</p>
              </div>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">TVA EnergyRight</h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-gray-900">Find a Quality Contractor Network (QCN) member</p>
                <p className="text-sm text-gray-700">Search at energyright.com/find-a-contractor. All TVA HVAC rebates require QCN installation.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900">Get a Manual J load calculation</p>
                <p className="text-sm text-gray-700">Required for TVA Preferred tier ($1,500). The QCN contractor will perform this as part of the installation process.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-900">Contractor submits rebate</p>
                <p className="text-sm text-gray-700">The QCN contractor submits documentation to your local power company. For HPWHs, purchase at a participating Lowe&apos;s or Home Depot for the instant $900 rebate at checkout.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. WHAT TO WATCH — bg-gray-50 py-12 */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to watch</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">MDA HEAR/HOMES launch date</p>
              <p className="text-sm text-gray-600 mt-1">The Mississippi Development Authority has not announced when consumer applications will open for the state&apos;s $104.8 million in IRA rebate funding. This is the single largest pending incentive for Mississippi homeowners. Monitor mississippi.org/community-resources/office-of-energy/ for updates.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">IRA funding runway</p>
              <p className="text-sm text-gray-600 mt-1">HEAR and HOMES funding is available through September 30, 2031 or until exhausted. However, federal funding freezes and political uncertainty could affect disbursement timing. States that launched early (Wisconsin, North Carolina) are already distributing rebates.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Entergy Mississippi rate cases</p>
              <p className="text-sm text-gray-600 mt-1">Entergy&apos;s rebate programs are funded through ratepayer charges approved by the Mississippi Public Service Commission. Program funding levels and rebate amounts can change with each rate case cycle.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">TVA rebate schedule updates</p>
              <p className="text-sm text-gray-600 mt-1">TVA periodically updates its EnergyRight rebate schedule. The current schedule (v26) has been in effect since early 2024. Check energyright.com for any changes to amounts or efficiency requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 14. FAQ — white py-12 */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently asked questions</h2>
          <div className="space-y-6">
            {faqJsonLd.mainEntity.map((faq: { name: string; acceptedAnswer: { text: string } }, index: number) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.name}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 15. SEE ALSO — bg-gray-50 py-8 */}
      <section className="py-8 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-3">See also</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/heat-pumps/states/al" className="text-brand-600 hover:underline">
                Alabama Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/tn" className="text-brand-600 hover:underline">
                Tennessee Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/la" className="text-brand-600 hover:underline">
                Louisiana Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li>
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                Federal Heat Pump Tax Credits Have Ended
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps" className="text-brand-600 hover:underline">
                All State Heat Pump Incentives
              </Link>
            </li>
            <li>
              <Link href="/battery" className="text-brand-600 hover:underline">
                Are Home Batteries Worth It in 2026?
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* 16. SOURCES — white py-12 */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="space-y-2 text-sm">
            {msIncentive.sources.map((source: { label: string; url: string }, index: number) => (
              <li key={index}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 hover:underline"
                >
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 17. DISCLAIMER — white py-8 */}
      <section className="py-8">
        <div className="container-narrow">
          <div className="bg-gray-100 rounded-lg p-6">
            <p className="text-gray-500 text-xs leading-relaxed">
              <strong>Disclaimer:</strong> This page covers the main statewide,
              utility, and IRA heat pump incentives available to Mississippi
              homeowners in 2026. It does not calculate savings, guarantee
              eligibility, or represent any incentive program. Mississippi has three
              distinct utility territories (Entergy, TVA, Mississippi Power) plus rural
              cooperatives — rebate availability depends on which provider serves your address.
              We verify status regularly but programs can change
              without notice. Always confirm current amounts and eligibility with
              your utility provider and your contractor before making decisions.
            </p>
          </div>
          <div className="mt-6 text-center">
            <Link href="/heat-pumps" className="text-brand-600 hover:underline text-sm">
              ← Back to Heat Pumps overview
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
