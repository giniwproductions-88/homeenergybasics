import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Louisiana Heat Pump Rebates 2026: Up to $3,500 + SWEPCO & Cleco Programs | Home Energy Basics",
  description:
    "SWEPCO and Cleco offer up to $3,500. Entergy covers $500. Federal credits ended. Here\u2019s every Louisiana heat pump incentive in 2026.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/la",
  },
  openGraph: {
    title: "Louisiana Heat Pump Rebates 2026",
    description:
      "Utility rebates up to $3,500 from SWEPCO and Cleco \u2014 the complete guide to Louisiana heat pump incentives after federal credits expired.",
    url: "https://homeenergybasics.com/heat-pumps/states/la",
    type: "article",
    publishedTime: "2026-03-24",
    modifiedTime: "2026-03-24",
    section: "Heat Pumps",
  },
};

export default function LouisianaPage() {
  const laIncentive = incentives.LA;
  const formattedDate = formatDate(laIncentive.lastVerified);
  const sources = laIncentive.sources;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What heat pump rebates are available in Louisiana in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Louisiana heat pump rebates in 2026 come entirely from utility programs. SWEPCO offers up to $3,500 per heat pump plus $1,150 for heat pump water heaters. Cleco Power offers up to $3,500 through its Power Wise program. Entergy Louisiana offers up to $500. Entergy New Orleans (Energy Smart) offers $200\u2013$500 depending on efficiency tier. Federal tax credits (Section 25C and 25D) expired December 31, 2025. Louisiana\u2019s IRA-funded HEAR and HOMES rebate programs have not yet launched.",
        },
      },
      {
        "@type": "Question",
        name: "Can I stack utility rebates with IRA rebates in Louisiana?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, when Louisiana\u2019s HEAR and HOMES programs launch, utility rebates will stack with federal IRA rebates. HEAR and HOMES cannot be combined for the same measure, but each can stack with utility incentives. A below-80% AMI homeowner in SWEPCO territory could potentially combine $8,000 from HEAR with $3,500 from SWEPCO for a single heat pump installation. Total combined incentives from all sources cannot exceed 100% of project costs.",
        },
      },
      {
        "@type": "Question",
        name: "Why do heat pumps make sense in Louisiana\u2019s hot climate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Louisiana sits entirely in IECC Climate Zone 2A (Hot-Humid), making it ideal for heat pumps. Heat pumps are essentially high-efficiency air conditioners that reverse for heating. With winter design temperatures of 23\u201334\u00b0F across the state, standard air-source heat pumps handle Louisiana winters easily without cold-climate ratings. Variable-speed models are especially valuable because they run longer cycles at lower speeds, removing far more humidity \u2014 critical in a state where outdoor humidity regularly exceeds 80%. About 62% of Louisiana homes already heat with electricity, mostly inefficient resistance heating that heat pumps can replace with 50\u201360% energy savings.",
        },
      },
      {
        "@type": "Question",
        name: "Who administers Louisiana\u2019s heat pump incentive programs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Utility rebates are administered directly by each utility: SWEPCO, Cleco Power (Power Wise program), Entergy Louisiana (Entergy Solutions), and Entergy New Orleans (Energy Smart). The upcoming IRA-funded HEAR and HOMES rebate programs are administered by the Louisiana Department of Conservation and Energy (DCE), formerly the Department of Energy and Natural Resources, in partnership with the Office of Community Development. The Weatherization Assistance Program is administered by the Louisiana Housing Corporation.",
        },
      },
      {
        "@type": "Question",
        name: "When will Louisiana\u2019s HEAR and HOMES rebate programs launch?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "As of March 2026, Louisiana has not launched either the HEAR (up to $8,000 for heat pumps) or HOMES ($2,000\u2013$4,000 performance-based) rebate programs, despite receiving over $200 million in IRA funding. The Department of Conservation and Energy previously indicated a late 2025 to early 2026 timeline, but that has slipped. Homeowners should monitor dce.louisiana.gov for launch announcements.",
        },
      },
    ],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://homeenergybasics.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Heat Pumps",
        item: "https://homeenergybasics.com/heat-pumps",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Louisiana",
        item: "https://homeenergybasics.com/heat-pumps/states/la",
      },
    ],
  };

  return (
    <>
      <JsonLd data={faqJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      {/* 1. Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="container-narrow">
          <nav className="text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-brand-600">Home</Link>
            {" "}/{" "}
            <Link href="/heat-pumps" className="hover:text-brand-600">Heat Pumps</Link>
            {" "}/ Louisiana
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Louisiana Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Louisiana heat pump incentives in 2026 are a utility-by-utility story. SWEPCO and Cleco customers can claim up to <strong>$3,500</strong> per heat pump, while Entergy Louisiana offers <strong>$500</strong>. Federal tax credits expired December 31, 2025, and the state&apos;s IRA-funded HEAR program (up to <strong>$8,000</strong>) has not yet launched. This guide covers all major Louisiana heat pump incentives available in 2026, including SWEPCO, Cleco, Entergy, and Energy Smart programs. Here&apos;s what&apos;s actually available.
          </p>
          <p className="text-sm text-gray-500">
            Last verified: {formattedDate}
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Rates and program availability may change after this date.
          </p>
        </div>
      </section>

      {/* 2. Status Card */}
      <section className="py-8">
        <div className="container-narrow">
          <StatusCard incentive={laIncentive} />
        </div>
      </section>

      {/* 3. Short Version */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Short Version</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ SWEPCO &amp; Cleco utility rebates</p>
              <p className="text-sm text-green-900">Up to <strong>$3,500</strong> per qualifying heat pump through contractor-based instant rebates. SWEPCO also offers <strong>$1,150</strong> for heat pump water heaters.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Entergy programs</p>
              <p className="text-sm text-green-900">Entergy Louisiana offers up to <strong>$500</strong> per heat pump. Energy Smart (New Orleans) offers <strong>$200–$500</strong> per system plus <strong>$1,000</strong> for heat pump water heaters.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Total potential savings</p>
              <p className="text-sm text-green-900"><strong>$500</strong> (Entergy territory) to <strong>$4,650</strong> (SWEPCO territory) from utility rebates alone. When HEAR launches, income-qualified homeowners below 80% of Area Median Income (AMI) could see combined incentives exceeding <strong>$11,000</strong>.</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">✗ Federal tax credits expired</p>
              <p className="text-sm text-red-900">Section 25C (up to $2,000) and Section 25D (30% geothermal) both ended December 31, 2025. No credit for systems installed in 2026.</p>
            </div>
            <div className="md:col-span-2 bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="font-semibold text-amber-800 mb-1">⚠ HEAR &amp; HOMES rebates not yet launched</p>
              <p className="text-sm text-amber-900">Louisiana received over <strong>$200 million</strong> in IRA funding for HEAR (up to $8,000 per heat pump) and HOMES ($2,000–$4,000 performance-based) rebates, but neither program is accepting applications yet. Monitor the Department of Conservation and Energy at dce.louisiana.gov for launch announcements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Federal Expired */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Federal Tax Credits Have Expired</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <p className="text-red-900 leading-relaxed">
              The <strong>Section 25C Energy Efficient Home Improvement Credit</strong> (up to $2,000 for heat pumps) and the <strong>Section 25D Residential Clean Energy Credit</strong> (30% of geothermal heat pump costs) both expired December 31, 2025. The One Big Beautiful Bill Act accelerated the expiration. The IRS confirmed that <strong>systems placed in service after December 31, 2025 are not eligible</strong>, regardless of when payment was made or the contract was signed.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Louisiana homeowners installing heat pumps in 2026 must rely on utility rebates and the upcoming IRA rebate programs instead. No legislation to reinstate either credit has been introduced. For a full overview of which states still have active programs, see our{" "}
            <Link href="/heat-pumps" className="text-brand-600 hover:underline">heat pump incentives hub</Link>.
          </p>
          <p className="text-sm text-gray-500">
            <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
              Full details on the federal credit expiration →
            </Link>
          </p>
        </div>
      </section>

      {/* 5. HEAR / Primary — IRA rebates (not yet launched) */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">IRA Rebates: HEAR (Home Electrification and Appliance Rebates)</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Louisiana was allocated over <strong>$200 million</strong> in combined IRA funding for the Home Electrification and Appliance Rebates (HEAR) and Home Efficiency Rebates (HOMES) programs. The administering agency is the Louisiana Department of Conservation and Energy (DCE). As of March 2026, neither program has launched for applications.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-amber-800 mb-1">⚠ Not yet accepting applications</p>
            <p className="text-sm text-amber-900">DCE previously indicated a late 2025 to early 2026 timeline, but that has slipped. Louisiana is not among the roughly dozen states that have launched their programs.</p>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">When HEAR launches, expected rebates include:</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Measure</th>
                  <th className="text-left p-3 font-semibold">Maximum rebate</th>
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
                  <td className="p-3">Electrical panel upgrade</td>
                  <td className="p-3 font-semibold">$4,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Insulation, air sealing, ventilation</td>
                  <td className="p-3 font-semibold">$1,600</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Electric wiring</td>
                  <td className="p-3 font-semibold">$2,500</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Household cap</td>
                  <td className="p-3 font-semibold">$14,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Income eligibility</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            At or below <strong>80% AMI</strong>: 100% of project costs covered (up to caps). Between <strong>80–150% AMI</strong>: 50% of project costs covered. Above <strong>150% AMI</strong>: not eligible for HEAR.
          </p>
        </div>
      </section>

      {/* 6. HOMES / Secondary */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">IRA Rebates: HOMES (Home Efficiency Rebates)</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The HOMES program provides performance-based rebates for whole-home energy efficiency improvements. Unlike HEAR, HOMES is open to all income levels but also has not launched in Louisiana.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Energy savings achieved</th>
                  <th className="text-left p-3 font-semibold">Rebate (above 80% AMI)</th>
                  <th className="text-left p-3 font-semibold">Rebate (below 80% AMI)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">20% or more</td>
                  <td className="p-3 font-semibold">$2,000</td>
                  <td className="p-3 font-semibold">$4,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">35% or more</td>
                  <td className="p-3 font-semibold">$4,000</td>
                  <td className="p-3 font-semibold">$8,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            HOMES and HEAR cannot be combined for the same measure but can fund different measures within the same project. Both programs can stack with utility rebates.
          </p>
        </div>
      </section>

      {/* 7. Utility Programs */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Utility Rebate Programs</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Utility rebates are the primary source of heat pump incentives available to Louisiana homeowners today. The amounts vary significantly by service territory.
          </p>

          {/* SWEPCO */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">SWEPCO — Up to $4,650 (Northwest Louisiana)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            SWEPCO customers in the Shreveport/Bossier City area have access to the most generous rebate package in Louisiana. The HVAC Incentive Program provides an instant rebate of up to <strong>$3,500</strong> per qualifying high-efficiency heat pump. The rebate is applied directly to the contractor&apos;s quote through SWEPCO-approved contractors.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            SWEPCO also offers <strong>$1,150</strong> for ENERGY STAR heat pump water heaters (up to two per home), delivered as a prepaid Visa gift card within 30 days of application. Income-qualified households meeting federal poverty guidelines can access free weatherization through SWEPCO&apos;s Louisiana Weatherization Program.
          </p>

          {/* Cleco */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Cleco Power Wise — Up to $3,500 (Central Louisiana)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Cleco&apos;s Power Wise HVAC Replacement Program offers up to <strong>$3,500</strong> per qualifying heat pump. Rebates are tiered by efficiency rating at <strong>$350–$600 per ton</strong> (up to 5.4 tons), based on SEER2, EER2, and HSPF2 ratings. Minimum requirement is <strong>14.3 SEER2</strong>. AHRI certification is required.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                  <th className="text-left p-3 font-semibold">Minimum efficiency</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Heat pump (per ton)</td>
                  <td className="p-3 font-semibold">$350–$600</td>
                  <td className="p-3">14.3 SEER2</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">A/C non-heat-pump (per ton)</td>
                  <td className="p-3 font-semibold">$150–$250</td>
                  <td className="p-3">15.2 SEER2</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">New construction heat pump</td>
                  <td className="p-3 font-semibold">$1,000 + 10% bill discount</td>
                  <td className="p-3 text-gray-500">—</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Smart thermostat</td>
                  <td className="p-3 font-semibold">Up to $100</td>
                  <td className="p-3 text-gray-500">—</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-blue-800 mb-1">Cleco new construction bonus</p>
            <p className="text-sm text-blue-900">Cleco offers a <strong>$1,000</strong> rebate plus a <strong>10% discount on electric bills from November through April for the first five years</strong> for new homes with a qualified central heat pump and electric water heater. This is one of the few new-construction-specific incentives in Louisiana.</p>
          </div>

          {/* Entergy Louisiana */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Entergy Louisiana — Up to $500 (Most of the State)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Entergy Louisiana, the state&apos;s largest utility, offers more limited heat pump incentives through the Entergy Solutions program: up to <strong>$500</strong> per heat pump, <strong>$200</strong> per central air conditioner, and <strong>$150</strong> for an A/C tune-up through participating trade allies. ENERGY STAR certification and SEER2/HSPF2 ratings are required. Income-qualified weatherization is available for households at or below 200% of the federal poverty level.
          </p>

          {/* Entergy New Orleans */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Entergy New Orleans (Energy Smart) — $200–$500 (Orleans Parish)</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Orleans Parish has its own Energy Smart program, administered by Entergy New Orleans under New Orleans City Council oversight. This program offers tiered heat pump rebates based on efficiency:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Efficiency requirement</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Heat pump (Tier 1)</td>
                  <td className="p-3">SEER2 ≥ 15.2, HSPF2 ≥ 7.1</td>
                  <td className="p-3 font-semibold">$200</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump (Tier 2)</td>
                  <td className="p-3">SEER2 ≥ 16, HSPF2 ≥ 7.7</td>
                  <td className="p-3 font-semibold">$225</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump (Tier 3)</td>
                  <td className="p-3">SEER2 ≥ 17, HSPF2 ≥ 7.8</td>
                  <td className="p-3 font-semibold">$250</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Mini-split (replacing electric strip)</td>
                  <td className="p-3">SEER2 ≥ 17, HSPF2 ≥ 7.7</td>
                  <td className="p-3 font-semibold">$500</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3">ENERGY STAR certified</td>
                  <td className="p-3 font-semibold">$1,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump clothes dryer</td>
                  <td className="p-3 text-gray-500">—</td>
                  <td className="p-3 font-semibold">$300</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-amber-800 mb-1">⚠ Common mistake: assuming Entergy Louisiana and Entergy New Orleans are the same</p>
            <p className="text-sm text-amber-900">Entergy New Orleans (Orleans Parish only) runs the separate Energy Smart program with higher rebates and more tiers than Entergy Louisiana. If you live in Orleans Parish, check Energy Smart at energysmartnola.info — not the Entergy Louisiana site. If you live outside Orleans Parish but are an Entergy customer, you&apos;re on the Entergy Louisiana program.</p>
          </div>

          {/* Atmos note */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Atmos Energy — Gas Incentives Only</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Atmos Energy, Louisiana&apos;s major natural gas utility, runs the SmartChoice Rebates program with <strong>$400–$500</strong> for high-efficiency gas furnaces and <strong>$100–$350</strong> for gas water heaters. Atmos does not offer any incentives for heat pumps or electrification.
          </p>

          {/* Co-ops */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Electric Cooperatives — Limited Options</h3>
          <p className="text-gray-700 leading-relaxed">
            Among Louisiana&apos;s rural electric cooperatives, offerings are sparse. DEMCO (greater Baton Rouge area) has a Touchstone Energy Home program offering <strong>$0.10 per square foot</strong> for heat pumps in all-electric new construction only. Most other cooperatives — including SLECA, Beauregard Electric, and Washington-St. Tammany Electric — do not offer heat pump rebate programs.
          </p>
        </div>
      </section>

      {/* 9. Stacking */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Programs Stack</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Federal DOE guidance allows stacking of IRA rebates with utility incentives. HEAR and HOMES cannot be combined for the same measure but can fund different measures within the same project. Total combined incentives from all sources cannot exceed 100% of project costs. Today, only utility rebates are available — the stacking math will improve significantly when HEAR launches.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 150% AMI — Ducted heat pump (SWEPCO or Cleco territory)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>SWEPCO or Cleco heat pump rebate: $3,500</li>
                <li>SWEPCO heat pump water heater rebate: $1,150</li>
                <li>Federal tax credit: $0 (expired)</li>
                <li>HEAR: not eligible above 150% AMI</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$4,650</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 150% AMI — Ducted heat pump (Entergy Louisiana territory)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Entergy Louisiana heat pump rebate: $500</li>
                <li>Federal tax credit: $0 (expired)</li>
                <li>HEAR: not eligible above 150% AMI</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$500</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">Below 80% AMI — Ducted heat pump (SWEPCO or Cleco territory, when HEAR launches)</p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>HEAR heat pump rebate: $8,000 (100% of costs up to cap)</li>
                <li>SWEPCO or Cleco utility rebate: $3,500</li>
                <li>SWEPCO heat pump water heater (HEAR + utility): $1,750 + $1,150</li>
                <li>WAP weatherization: free insulation and air sealing</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$14,400+</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-5 mb-4">
            <p className="font-semibold text-gray-900 mb-1">What you&apos;ll actually pay</p>
            <p className="text-sm text-gray-700">
              For a typical <strong>$8,000–$14,000</strong> ducted heat pump installation: above-150% AMI homeowners in SWEPCO/Cleco territory pay roughly <strong>$3,350–$9,350 out of pocket</strong> today. In Entergy territory, expect <strong>$7,500–$13,500</strong>. When HEAR launches, below-80% AMI homeowners could pay <strong>$0 out of pocket</strong> for a standard system.
            </p>
          </div>
          <p className="text-xs text-gray-400">
            Louisiana has no state tax credit and no state-funded rebate to add to these stacks.
          </p>
        </div>
      </section>

      {/* 10. Weatherization */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Weatherization &amp; Low-Income Programs</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Louisiana Weatherization Assistance Program (WAP), administered by the Louisiana Housing Corporation, provides free energy efficiency upgrades to households at or below <strong>200% of the federal poverty level</strong> (approximately $62,400 for a family of four). Services include insulation, air sealing, duct repair, window improvements, and in some cases HVAC replacement — including heat pumps when determined cost-effective.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Priority is given to elderly, disabled, and households with children. Automatic eligibility applies to TANF, SSI, and LIHEAP recipients. Wait lists are common. Previously weatherized homes (within 15 years) are generally ineligible.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">HELP (Home Energy Loan Program)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Department of Conservation and Energy administers the HELP program, offering loans of up to <strong>$12,000 over 5 years</strong> for qualifying energy improvements including heat pumps. DCE provides half (up to $6,000) at a fixed <strong>2% interest rate</strong>, while a participating lender provides the other half at market rate. Contact DCE at (225) 342-4498 to verify participating lenders are currently active.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <p className="font-semibold text-green-800 mb-1">✓ Best candidates for Louisiana heat pump incentives</p>
            <p className="text-sm text-green-900">SWEPCO or Cleco customers replacing aging equipment (highest utility rebates). Homeowners currently using electric resistance heating (50–60% energy savings with no fuel switching). Low-income households below 80% AMI (will qualify for HEAR when it launches, plus WAP and utility programs). New Orleans homeowners (Energy Smart offers the best-tiered program plus $1,000 for heat pump water heaters).</p>
          </div>
        </div>
      </section>

      {/* 11. Climate */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Climate Context</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Louisiana sits entirely within IECC Climate Zone 2A (Hot-Humid). The state is overwhelmingly cooling-dominant, which makes heat pumps — essentially high-efficiency air conditioners that reverse direction for heating — the natural HVAC choice. Standard air-source heat pumps handle Louisiana winters without cold-climate ratings.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">City</th>
                  <th className="text-left p-3 font-semibold">Winter design temp (99%)</th>
                  <th className="text-left p-3 font-semibold">Summer design temp (1%)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">New Orleans</td>
                  <td className="p-3">34°F</td>
                  <td className="p-3">92°F</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Baton Rouge</td>
                  <td className="p-3">30°F</td>
                  <td className="p-3">92°F</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Shreveport</td>
                  <td className="p-3">~23°F</td>
                  <td className="p-3">96°F</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-blue-800 mb-1">Dehumidification is the critical factor</p>
            <p className="text-sm text-blue-900">Variable-speed (inverter-driven) heat pumps run at lower speeds for longer cycles, extracting far more moisture than single-stage units. In a state where outdoor humidity regularly exceeds 80%, this is a major comfort advantage and the single most important feature Louisiana homeowners should prioritize when choosing a system.</p>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            About <strong>62% of Louisiana homes already heat with electricity</strong> — the highest category — much of it inefficient electric resistance heating. Converting from electric resistance to a heat pump can cut heating energy use by 50–60% with no fuel-switching required. About 33% of homes use natural gas (concentrated in urban areas), and 3–5% use propane in rural areas where heat pumps offer the most dramatic savings. The federal minimum efficiency for the Southeast region is <strong>14.3 SEER2</strong>, and Louisiana&apos;s extended cooling season means higher-efficiency systems (16–20+ SEER2) pay back faster than in northern states.
          </p>
          <p className="text-gray-700 leading-relaxed">
            For homeowners considering whole-home electrification alongside a heat pump, see our guide to{" "}
            <Link href="/battery" className="text-brand-600 hover:underline">home batteries and whether they&apos;re worth it in 2026</Link>.
          </p>
        </div>
      </section>

      {/* 12. How to Apply */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Apply</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The application process depends on your utility. For most programs, rebates are handled through the contractor at the point of installation.
          </p>

          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-gray-900">Identify your electric utility</p>
                <p className="text-sm text-gray-700">Check your electric bill for SWEPCO, Cleco, Entergy Louisiana, Entergy New Orleans, or your cooperative. This determines which programs you can access and the rebate amounts.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900">Use a participating contractor</p>
                <p className="text-sm text-gray-700">SWEPCO, Cleco, and Entergy all require work through approved or participating trade allies. For SWEPCO and Cleco, the rebate is applied directly to the contractor&apos;s quote as an instant discount. Contact your utility for a list of approved contractors.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-900">Confirm equipment qualifies before installation</p>
                <p className="text-sm text-gray-700">All programs require ENERGY STAR certification and minimum SEER2/HSPF2 ratings. Have your contractor verify the specific model qualifies before committing. AHRI certification is required for Cleco rebates.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <p className="font-semibold text-gray-900">Check for income-qualified add-ons</p>
                <p className="text-sm text-gray-700">If your household income is at or below 200% of the federal poverty level, ask about free weatherization through your utility or the Louisiana WAP program. When HEAR launches, below-80% AMI households will qualify for the highest rebate tier.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. What to Watch */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Watch</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">HEAR and HOMES program launch</p>
              <p className="text-sm text-gray-600 mt-1">Louisiana&apos;s $200 million+ IRA allocation could transform the incentive landscape overnight. When HEAR launches, income-qualified homeowners below 80% AMI could access up to $8,000 for a heat pump — stacking with existing utility rebates. Monitor dce.louisiana.gov for announcements.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">IRA funding runway</p>
              <p className="text-sm text-gray-600 mt-1">The IRA&apos;s rebate funding survived the One Big Beautiful Bill Act, but the political environment remains uncertain. Congress could modify or rescind unobligated funds in future legislation. States that have already launched their programs have the strongest claim to their allocations.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">LPSC statewide energy efficiency program</p>
              <p className="text-sm text-gray-600 mt-1">The Louisiana Public Service Commission terminated the APTIM-administered statewide efficiency program in April 2025 and reinstated older utility-run programs. The structure of the next-generation program remains contested, which could change utility rebate amounts and availability.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Utility rebate fund depletion</p>
              <p className="text-sm text-gray-600 mt-1">SWEPCO and Cleco rebates are first-come, first-served with annual funding caps. If demand increases — particularly as homeowners who were waiting for federal credits redirect to utility programs — funds could deplete before year-end.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 14. FAQ */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
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

      {/* 15. See Also */}
      <section className="py-8 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-3">See also</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/heat-pumps/states/tx" className="text-brand-600 hover:underline">
                Texas Heat Pump Rebates &amp; Incentives (2026)
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/ms" className="text-brand-600 hover:underline">
                Mississippi Heat Pump Rebates
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/ar" className="text-brand-600 hover:underline">
                Arkansas Heat Pump Rebates
              </Link>
            </li>
            <li>
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                Federal Heat Pump Tax Credits — What Expired and Why
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

      {/* 16. Sources */}
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

      {/* 17. Disclaimer */}
      <section className="py-8">
        <div className="container-narrow">
          <div className="bg-gray-100 rounded-lg p-6">
            <p className="text-gray-500 text-xs leading-relaxed">
              <strong>Disclaimer:</strong> This page covers the main statewide, utility, and IRA heat pump incentives available to Louisiana homeowners in 2026. It does not calculate savings, guarantee eligibility, or represent any incentive program. Louisiana&apos;s incentive landscape is primarily utility-driven, and program availability varies significantly by service territory. Entergy New Orleans (Energy Smart) operates under separate rules from Entergy Louisiana. We verify status regularly but programs can change without notice. Always confirm current amounts and eligibility with your electric utility and your contractor before making decisions.
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
