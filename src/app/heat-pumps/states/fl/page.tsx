import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Florida Heat Pump Rebates 2026: $40–$1,150 Available (No Federal Credits) | Home Energy Basics",
  description:
    "Duke Energy offers up to $1,000. FPL, TECO, JEA offer $40–$550. Federal tax credits ended. Here's every Florida heat pump incentive in 2026.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/fl",
  },
  openGraph: {
    title: "Florida Heat Pump Rebates 2026",
    description:
      "Utility rebates of $40–$1,150 are the primary incentive after federal credits expired — the complete guide to Florida heat pump incentives in 2026.",
    url: "https://homeenergybasics.com/heat-pumps/states/fl",
    type: "article",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What heat pump rebates are available in Florida in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Florida heat pump incentives in 2026 come almost entirely from utility companies. Duke Energy Florida offers up to $1,000 for strip-heat-to-heat-pump conversions. FPL offers a $200 flat rebate. Tampa Electric (TECO) offers $40–$550 depending on efficiency tier. JEA offers $200 per heat pump. OUC offers $45–$1,150 scaled by tonnage and SEER2 rating. Federal Section 25C and 25D tax credits expired December 31, 2025. Florida has no state income tax and no state-level credits. The IRA-funded HEAR and HOMES programs remain unlaunched.",
      },
    },
    {
      "@type": "Question",
      name: "Can I stack utility rebates with HEAR or HOMES in Florida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If HEAR and HOMES launch in Florida, DOE rules permit combining them with utility rebates on the same project, provided the same equipment cost is not double-counted and total rebates do not exceed total project cost. HEAR and HOMES cannot be combined with each other on the same single upgrade but can cover different measures in a multi-measure project. As of March 2026, only utility rebates are available to stack.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a cold-climate heat pump in Florida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Florida falls entirely within IECC Climate Zones 1A and 2A, making it the most cooling-dominant large state in the country. Even Jacksonville and Pensacola, the coldest major Florida cities, have heating design temperatures of 27–32°F — well within the operating range of standard air-source heat pumps. Standard heat strip backup handles the rare sub-freezing hours. The primary value of heat pumps in Florida is cooling efficiency and dehumidification, not cold-weather heating performance.",
      },
    },
    {
      "@type": "Question",
      name: "Which Florida utility offers the best heat pump rebates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Duke Energy Florida offers the most comprehensive program, with up to $1,000 for converting from strip heat to a high-efficiency heat pump, plus $500–$800 for heat pump water heaters. OUC in Orlando offers the highest single rebate at up to $1,150 for high-efficiency heat pump AC systems. FPL, despite serving nearly 6 million customers, offers a comparatively modest $200 flat rebate with no heat pump water heater or mini-split coverage.",
      },
    },
    {
      "@type": "Question",
      name: "What happened to the federal heat pump tax credit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Section 25C Energy Efficient Home Improvement Credit and the Section 25D Residential Clean Energy Credit both expired December 31, 2025. The One Big Beautiful Bill Act (signed July 4, 2025) accelerated their termination seven years ahead of the original 2032 deadline set by the Inflation Reduction Act. Homeowners who completed qualifying installations by December 31, 2025 can still claim the credit on their 2025 tax return.",
      },
    },
  ],
};

export default function FloridaPage() {
  const flIncentive = incentives.FL;
  const { sources } = flIncentive;
  const formattedDate = formatDate(flIncentive.lastVerified);

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
            {" "}/ Florida
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Florida heat pump rebates and incentives in 2026
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Florida&apos;s heat pump incentive landscape in 2026 is defined by absence. Federal tax credits expired seven years early, and the state&apos;s <strong>$346 million</strong> IRA allocation for HEAR and HOMES rebates remains unlaunched with an uncertain future. Utility rebates of <strong>$40–$1,150</strong> depending on your provider are currently the only widely available incentives. This guide covers all major Florida heat pump incentives available in 2026, including FPL, Duke Energy, TECO, JEA, and OUC utility programs, HEAR/HOMES status, and financing options. Here&apos;s what&apos;s actually available.
          </p>
          <p className="text-sm text-gray-600 mt-2 mb-6">
            Florida has no statewide rebate program in 2026.
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
          <StatusCard incentive={flIncentive} />
        </div>
      </section>

      {/* 3. SHORT VERSION */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The short version</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Utility rebates available</p>
              <p className="text-sm text-green-900"><strong>$40–$1,150</strong> for heat pumps depending on your utility. Duke Energy Florida offers the best program at up to <strong>$1,000</strong> for strip-heat conversions.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Heat pump water heater rebates</p>
              <p className="text-sm text-green-900"><strong>$350–$800</strong> from Duke Energy, JEA, OUC, and Lakeland Electric for ENERGY STAR certified heat pump water heaters.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Current savings potential</p>
              <p className="text-sm text-green-900"><strong>$200</strong> (FPL territory) to <strong>$1,150+</strong> (OUC territory) for most homeowners. Low-income households below 200% FPL may qualify for full HVAC replacement via Weatherization Assistance at no cost.</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">✗ Federal tax credits expired</p>
              <p className="text-sm text-red-900">Section 25C and 25D credits ended December 31, 2025 — seven years early due to the One Big Beautiful Bill Act. No replacements have been passed.</p>
            </div>
            <div className="md:col-span-2 bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="font-semibold text-amber-800 mb-1">⚠ HEAR and HOMES programs not launched</p>
              <p className="text-sm text-amber-900">Florida&apos;s <strong>$346 million</strong> IRA allocation for Home Electrification and Appliance Rebates (HEAR) and Home Efficiency Rebates (HOMES) remains unlaunched as of March 2026. Credible reports suggest Florida may have declined the funding entirely. Do not count on these programs being available.</p>
            </div>
            <div className="md:col-span-2 bg-gray-100 border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-1">→ Bottom line</p>
              <p className="text-sm text-gray-700">Most Florida homeowners will save under $1,000 in 2026 unless HEAR launches.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEDERAL EXPIRED */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Federal tax credits ended seven years early</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <p className="text-red-900 leading-relaxed">
              <strong>Both the Section 25C Energy Efficient Home Improvement Credit and Section 25D Residential Clean Energy Credit expired December 31, 2025.</strong> The One Big Beautiful Bill Act (P.L. 119-21), signed July 4, 2025, accelerated their termination from the original 2032 deadline. Section 25C previously covered 30% of heat pump costs up to <strong>$2,000</strong>. Section 25D covered geothermal heat pumps at 30%. Neither credit is available for equipment installed in 2026. For more details, see our{" "}
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                guide to federal heat pump tax credit changes
              </Link>.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Per IRS Fact Sheet FS-2025-05, the &quot;placed in service&quot; date — meaning completion of installation — determines eligibility, not the purchase or payment date. A Florida homeowner who bought a heat pump in 2025 but had it installed in January 2026 does not qualify.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Homeowners who completed qualifying installations by December 31, 2025 should claim the credit on their 2025 federal tax return using IRS Form 5695. One important distinction: taxpayers with unused 25D credits from qualifying 2025 expenditures can carry those forward to future tax years. Section 25C offers no such carryforward.
          </p>
        </div>
      </section>

      {/* 5. HEAR (PRIMARY IRA PROGRAM) */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Home Electrification and Appliance Rebates (HEAR)</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Florida&apos;s Department of Agriculture and Consumer Services (FDACS) Office of Energy was allocated approximately <strong>$346 million</strong> in combined IRA funding for HEAR and HOMES. As of March 2026, neither program has launched, and the program&apos;s future is uncertain. The official FDACS portal still displays the message that programs are &quot;expected to launch in the future&quot; with no timeline.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-amber-800 mb-1">⚠ Status: not launched — timeline unknown</p>
            <p className="text-sm text-amber-900">The FDACS portal accepts user registrations but provides no launch date. One third-party tracker reports that Florida returned its IRA allocation entirely, though the FDACS portal remains live and still references the $346M allocation. Treat this program as unavailable until officially launched.</p>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            If HEAR does launch, the published rebate structure would be:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Maximum rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Heat pump (space heating/cooling)</td>
                  <td className="p-3 font-semibold">$8,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">$1,750</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Electric load service center</td>
                  <td className="p-3 font-semibold">$4,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Electric wiring</td>
                  <td className="p-3 font-semibold">$2,500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Insulation, air sealing, ventilation</td>
                  <td className="p-3 font-semibold">$1,600</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Electric stove/cooktop or HP clothes dryer</td>
                  <td className="p-3 font-semibold">$840</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed">
            HEAR eligibility is income-restricted: households below 80% of Area Median Income (AMI) receive up to 100% of project cost; households at 80–150% AMI receive up to 50%; households above 150% AMI are not eligible. Maximum per household: <strong>$14,000</strong>. Rebates would be delivered as point-of-sale discounts through qualified contractors.
          </p>
        </div>
      </section>

      {/* 6. HOMES (SECONDARY IRA PROGRAM) */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Home Efficiency Rebates (HOMES)</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            HOMES requires verified whole-home energy savings of at least 20%, confirmed through a home energy assessment. Unlike HEAR, HOMES would be open to all income levels, though higher-income households receive substantially smaller rebates. Like HEAR, this program has not launched in Florida.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Energy savings achieved</th>
                  <th className="text-left p-3 font-semibold">Below 80% AMI</th>
                  <th className="text-left p-3 font-semibold">At or above 80% AMI</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">20–34% reduction</td>
                  <td className="p-3 font-semibold">$8,000 (100% of cost)</td>
                  <td className="p-3 font-semibold">$2,000 (50% of cost)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">35%+ reduction</td>
                  <td className="p-3 font-semibold">$16,000 (100% of cost)</td>
                  <td className="p-3 font-semibold">$4,000 (50% of cost)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed">
            The IRA prohibits combining HEAR and HOMES rebates on the same single upgrade, though a household could use HEAR for an appliance (e.g., heat pump) and HOMES for whole-home measures (e.g., insulation package). Both programs survived the One Big Beautiful Bill Act — the legislation did not repeal IRA appropriations.
          </p>
        </div>
      </section>

      {/* 7. UTILITY PROGRAMS */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Utility rebate programs</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            With federal credits expired and state IRA programs unlaunched, utility rebate programs are the most accessible financial incentive for Florida heat pump buyers in 2026. Amounts and requirements vary significantly across providers.
          </p>

          {/* FPL */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Florida Power &amp; Light (FPL) — $200 flat rebate</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            FPL serves approximately 5.8 million customers across most of eastern and southern Florida, including the former Gulf Power territory in Northwest Florida. The Residential HVAC Program provides a <strong>$200</strong> instant rebate applied as a credit on the contractor&apos;s invoice. Requirements include a minimum SEER2 of 15.2 (approximately 16 SEER), complete system replacement (condenser, air handler, and coil), and installation by an FPL Participating Independent Contractor (PIC). FPL does not offer rebates for heat pump water heaters or mini-split systems.
          </p>

          {/* Duke Energy */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Duke Energy Florida — up to $1,000, most comprehensive program</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Duke Energy Florida serves approximately 2 million customers in central and northern Florida and offers the most generous utility rebates in the state through its Home Energy Improvement (HEI) Program. A free Home Energy Check must be completed within 24 months before work begins (12-month grace period for emergency replacements).
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Scenario</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Strip heat to heat pump (higher efficiency, 16 SEER2+)</td>
                  <td className="p-3 font-semibold">$1,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Strip heat to heat pump (standard, 15.2 SEER2+)</td>
                  <td className="p-3 font-semibold">$600</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Replacing existing heat pump</td>
                  <td className="p-3 font-semibold">$500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Replacing existing AC (straight cool)</td>
                  <td className="p-3 font-semibold">$300</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">80-gallon heat pump water heater</td>
                  <td className="p-3 font-semibold">$800</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">50-gallon heat pump water heater</td>
                  <td className="p-3 font-semibold">$500</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Efficiency minimums: <strong>15.2 SEER2 and 7.5 HSPF2</strong> for the standard tier; <strong>16 SEER2 and 7.5 HSPF2</strong> for the higher tier on strip-heat conversions. Heat pump water heaters must be ENERGY STAR certified with UEF of 3.3 or higher. Rebates are delivered via prepaid Mastercard. Duke also offers up to <strong>$800</strong> for attic insulation and <strong>$450</strong> for duct repair.
          </p>

          {/* TECO */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Tampa Electric (TECO) — $40–$550, two-tier structure</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            TECO serves approximately 800,000 customers in the Tampa Bay area. Its updated DSM plan introduced a two-tier rebate structure: <strong>Tier 1 pays $40</strong> per qualifying unit (15.2 SEER2 or higher, one SEER above code) and <strong>Tier 2 pays $550</strong> per qualifying unit (16.2 SEER2 or higher, two SEER above code). Both heat pumps and mini-splits qualify. TECO does not offer heat pump water heater rebates. Applications must be submitted within 90 days of installation.
          </p>

          {/* JEA */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">JEA (Jacksonville) — $200 per heat pump, $350 for HPWH</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            JEA&apos;s rebate program runs October 2025 through September 2026. Rebates are <strong>$200 each</strong> for air-source heat pumps, central AC, and ductless mini-splits (all ENERGY STAR certified). Heat pump water heaters earn a <strong>$350</strong> rebate (ENERGY STAR certified, 50 gallons or less). Equipment minimums for split-system heat pumps: SEER2 of 16 or higher, EER2 of 11.0, and HSPF2 of 8.0. Maximum two rebates per product type per premise every seven years.
          </p>

          {/* OUC */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Orlando Utilities Commission (OUC) — $45–$1,150, highest potential</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            OUC offers the widest rebate range: <strong>$45–$1,150</strong> for heat pump AC systems, scaled by tonnage and SEER2 rating (minimum 15.2 SEER2). Heat pump water heaters earn up to <strong>$500</strong> (ENERGY STAR certified). OUC&apos;s Efficiency Delivered program provides up to <strong>$2,500</strong> in energy and water efficiency upgrades with interest-free on-bill financing over 24 months, with enhanced cost-sharing for income-qualified participants.
          </p>

          {/* Others */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Other notable utilities</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Lakeland Electric</strong> offers <strong>$300</strong> for central heat pumps, <strong>$450</strong> for heat pump water heaters, and <strong>$150 per condensing unit</strong> for mini-splits (maximum 2 per location), all requiring 15.2 SEER2 or higher, plus a zero-interest energy efficiency loan program. <strong>Gainesville Regional Utilities (GRU)</strong> historically offers up to approximately <strong>$550</strong> for central AC/heat pump systems and <strong>$200</strong> for heat pump water heaters. <strong>Florida Public Utilities (FPU)</strong> provides a dealer incentive for qualifying HVAC systems with a minimum 15.0 SEER. No Florida utility specifies refrigerant type requirements — rebate eligibility is refrigerant-agnostic.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="font-semibold text-blue-800 mb-1">FPL serves nearly 6 million customers but offers the lowest rebate</p>
            <p className="text-sm text-blue-900">FPL&apos;s <strong>$200</strong> flat rebate with no heat pump water heater or mini-split coverage is notably modest compared to Duke Energy&apos;s <strong>$1,000</strong> maximum or OUC&apos;s <strong>$1,150</strong>. If you&apos;re in FPL territory, the utility rebate alone may not significantly offset installation costs. Focus on operational savings: replacing strip heat with a heat pump cuts heating energy use by 60–75%.</p>
          </div>
        </div>
      </section>

      {/* SKIP Section 8 — no local programs in Florida */}

      {/* 9. STACKING */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How programs stack</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            With federal credits expired and HEAR/HOMES unlaunched, the stacking picture is straightforward: utility rebates are essentially the only game in town for most homeowners. PACE and SELF are financing mechanisms, not rebates. If HEAR and HOMES launch, DOE rules permit combining them with utility rebates on the same project, provided the same equipment cost is not double-counted and total rebates do not exceed total project cost.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            For a typical <strong>$12,000</strong> ducted heat pump installation in Duke Energy Florida territory:
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 150% AMI — ducted heat pump (strip-heat conversion)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Duke Energy rebate (higher efficiency): $1,000</li>
                <li>Federal tax credit: $0 (expired)</li>
                <li>State tax credit: $0 (none — no state income tax)</li>
                <li>HEAR: $0 (not eligible above 150% AMI)</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$1,000</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">80–150% AMI — ducted heat pump (if HEAR launches)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>HEAR heat pump rebate (50% of cost): $6,000</li>
                <li>Duke Energy utility rebate: $1,000</li>
                <li>Federal tax credit: $0 (expired)</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$7,000</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">Below 80% AMI — ducted heat pump (if HEAR launches)</p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>HEAR heat pump rebate (100% of cost, capped): $8,000</li>
                <li>Duke Energy utility rebate: $1,000</li>
                <li>Federal tax credit: $0 (expired)</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$9,000</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-5 mb-6">
            <p className="font-semibold text-gray-900 mb-1">What you&apos;ll actually pay today</p>
            <p className="text-sm text-gray-700">With only utility rebates available, most Florida homeowners pay <strong>$10,800 to $11,800 out of pocket</strong> for a typical $12,000 ducted heat pump installation. In FPL territory, the rebate drops to $200. The gap between what&apos;s theoretically possible (if HEAR launches) and what&apos;s actually accessible today is enormous.</p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-amber-800 mb-1">⚠ The biggest mistake Florida homeowners make</p>
            <p className="text-sm text-amber-900">Waiting for HEAR rebates to launch. There is no confirmed timeline — and credible reports suggest Florida may have declined the funding entirely. If your system is failing, waiting could cost you months (or years) of savings from reduced energy bills. The operational savings from replacing strip heat with a heat pump (60–75% heating energy reduction) often exceed the rebate value within a few years.</p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <p className="font-semibold text-green-800 mb-1">✓ Best candidates for a heat pump in Florida right now</p>
            <p className="text-sm text-green-900">Homeowners currently using electric resistance (strip) heat — approximately 90% of Florida households use electric heating. Duke Energy customers converting from strip heat (up to $1,000 rebate). Households needing AC replacement anyway (a heat pump replaces both heating and cooling). Low-income households below 200% FPL who may qualify for free HVAC replacement through WAP.</p>
          </div>
        </div>
      </section>

      {/* 10. WEATHERIZATION */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Weatherization Assistance Program (WAP)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Florida&apos;s WAP is administered by the Florida Department of Commerce through a network of approximately 16 Community Action Agencies statewide. Eligible households (income at or below 200% of the Federal Poverty Level) receive free energy audits and improvements including HVAC repair or replacement, duct sealing, insulation, and air sealing — all at no cost.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Maximum benefit is approximately <strong>$15,000 per household</strong>, though annual state funding of roughly $4.1 million limits the program to approximately 500 households per year. Priority goes to elderly (60+), disabled, and families with young children. This is a one-time benefit — households cannot re-apply once weatherized.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Contact your{" "}
            <a href="https://youthrivefl.org/program/weatherization-assistance-program/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">local Community Action Agency</a>{" "}
            to apply. Wait times vary by region but can exceed 12 months due to limited funding.
          </p>
        </div>
      </section>

      {/* 11. CLIMATE */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Climate context: cooling-dominant statewide</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Florida falls entirely within IECC Climate Zones 1A (Very Hot-Humid: Miami-Dade, Broward, Monroe counties) and 2A (Hot-Humid: all remaining counties). This is the most cooling-dominant large state in the country. Heat pumps in Florida are primarily valued for cooling efficiency and dehumidification, with supplemental heating a secondary benefit.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">City</th>
                  <th className="text-left p-3 font-semibold">Heating design (99%)</th>
                  <th className="text-left p-3 font-semibold">Cooling design (1%)</th>
                  <th className="text-left p-3 font-semibold">Annual CDD</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Miami</td>
                  <td className="p-3">44–47°F</td>
                  <td className="p-3">91–92°F</td>
                  <td className="p-3 font-semibold">~4,361</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Tampa</td>
                  <td className="p-3">36–40°F</td>
                  <td className="p-3">91–92°F</td>
                  <td className="p-3 font-semibold">~3,500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Orlando</td>
                  <td className="p-3">38–42°F</td>
                  <td className="p-3">93°F</td>
                  <td className="p-3 font-semibold">~2,963</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Jacksonville</td>
                  <td className="p-3">29–32°F</td>
                  <td className="p-3">94–95°F</td>
                  <td className="p-3 font-semibold">~2,665</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Pensacola</td>
                  <td className="p-3">27–29°F</td>
                  <td className="p-3">93°F</td>
                  <td className="p-3 font-semibold">~2,621</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Approximately 90% of Florida households use electricity as their primary heating fuel. The dominant incumbent system is a central air conditioner with electric resistance heat strips, which operates at a COP of 1.0 for heating. A modern heat pump operating at COP 2.5–4.0 cuts heating energy consumption by 60–75% compared to strip heat. No Florida location requires a cold-climate heat pump — even Pensacola&apos;s design temperature of 27–29°F is well within standard heat pump operating range.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-blue-800 mb-1">Florida banned electric resistance heat in new homes</p>
            <p className="text-sm text-blue-900">The 2023 Florida Building Code prohibits electric resistance space heating as the primary system in Climate Zone 2 new construction under prescriptive compliance (FBC-EC R403.7.2). This effectively mandates heat pumps for all new homes outside of South Florida — a provision more stringent than the base IECC.</p>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Variable-speed and inverter-driven heat pumps are particularly valuable in Florida&apos;s humid climate, running longer at lower capacity to remove more moisture. Proper Manual J load calculations are critical — oversized systems short-cycle and fail to dehumidify adequately, leading to mold risk. For homeowners also considering battery storage, see our{" "}
            <Link href="/battery" className="text-brand-600 hover:underline">guide to home batteries in 2026</Link>.
          </p>
        </div>
      </section>

      {/* 12. HOW TO APPLY */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to apply for Florida heat pump rebates</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-gray-900">Identify your electric utility</p>
                <p className="text-sm text-gray-700">Florida has no statewide rebate — programs are run by FPL, Duke Energy, TECO, JEA, OUC, and other local utilities. Your utility determines your rebate amount and requirements.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900">Complete any required pre-install steps</p>
                <p className="text-sm text-gray-700">Duke Energy requires a free Home Energy Check within 24 months before work begins (12-month grace period for emergencies). FPL requires use of a Participating Independent Contractor. Check your utility&apos;s specific prerequisites.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-900">Confirm equipment meets efficiency thresholds</p>
                <p className="text-sm text-gray-700">Most utilities require a minimum SEER2 of 15.2. Duke Energy&apos;s higher tier requires 16 SEER2. JEA requires SEER2 of 16 and HSPF2 of 8.0. Verify your selected equipment qualifies before purchasing.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <p className="font-semibold text-gray-900">Have the system installed by a licensed contractor</p>
                <p className="text-sm text-gray-700">All Florida HVAC installations require a DBPR Class A or Class B Air-Conditioning Contractor license, building permits, and code compliance inspection. FPL and Duke require use of their approved contractor networks.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                5
              </div>
              <div>
                <p className="font-semibold text-gray-900">Submit your rebate application within the required window</p>
                <p className="text-sm text-gray-700">TECO requires applications within 90 days of installation. FPL processes instant rebates at point of sale through approved contractors. Duke Energy delivers rebates via prepaid Mastercard after verification. Keep all invoices and permit documentation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. WHAT TO WATCH */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to watch</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">HEAR/HOMES launch status</p>
              <p className="text-sm text-gray-600 mt-1">The FDACS portal remains live but provides no timeline. Monitor floridaenergysaverprogram.fdacs.gov for official announcements. If Florida did decline the funding, other states may absorb the allocation.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">IRA funding runway</p>
              <p className="text-sm text-gray-600 mt-1">The One Big Beautiful Bill Act repealed federal tax credits but did not rescind IRA appropriations for state-administered rebates. However, political and administrative uncertainty could affect how long remaining IRA funds are available.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Utility DSM plan updates</p>
              <p className="text-sm text-gray-600 mt-1">The Florida Public Service Commission approves utility demand-side management plans on multi-year cycles. TECO&apos;s 2025–2034 plan introduced new tiers. FPL and Duke Energy plans are subject to periodic revision — rebate amounts can increase or decrease.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Refrigerant transition</p>
              <p className="text-sm text-gray-600 mt-1">The DOE&apos;s AIM Act is phasing down R-410A in favor of lower-GWP alternatives like R-32 and R-454B. Equipment costs may shift as manufacturers transition. No Florida utility currently restricts rebates by refrigerant type.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 14. FAQ */}
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

      {/* 15. SEE ALSO */}
      <section className="py-8 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-3">See also</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/heat-pumps/states/ga" className="text-brand-600 hover:underline">
                Georgia Heat Pump Rebates 2026
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/tx" className="text-brand-600 hover:underline">
                Texas Heat Pump Rebates 2026
              </Link>
            </li>
            <li className="text-gray-500">
              North Carolina Heat Pump Rebates <em>(coming soon)</em>
            </li>
            <li>
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                Federal Heat Pump Tax Credits Ended — What Changed
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps" className="text-brand-600 hover:underline">
                All State Heat Pump Incentives
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* 16. SOURCES */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="space-y-2 text-sm">
            {sources.map((source: { label: string; url: string }, index: number) => (
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

      {/* 17. DISCLAIMER */}
      <section className="py-8">
        <div className="container-narrow">
          <div className="bg-gray-100 rounded-lg p-6">
            <p className="text-gray-500 text-xs leading-relaxed">
              <strong>Disclaimer:</strong> This page covers the main statewide,
              utility, and IRA heat pump incentives available to Florida
              homeowners in 2026. It does not calculate savings, guarantee
              eligibility, or represent any incentive program. Florida has no state income tax and therefore no state-level tax credits for energy efficiency.
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
