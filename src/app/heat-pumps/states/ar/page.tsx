import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Arkansas Heat Pump Rebates 2026: Up to $3,000 OG&amp;E + $2,200 SWEPCO | Home Energy Basics",
  description:
    "SWEPCO offers up to $2,200 for heat pumps. OG&E adds up to $3,000. Federal tax credits ended. Here\u2019s every Arkansas heat pump incentive in 2026.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/ar",
  },
  openGraph: {
    title: "Arkansas Heat Pump Rebates 2026",
    description:
      "SWEPCO offers up to $2,200 and OG&E up to $3,000 for heat pumps \u2014 the complete guide to Arkansas heat pump incentives after federal credits expired.",
    url: "https://homeenergybasics.com/heat-pumps/states/ar",
    type: "article",
  },
};

export default function ArkansasPage() {
  const arIncentive = incentives.AR;
  const formattedDate = formatDate(arIncentive.lastVerified);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What heat pump rebates are available in Arkansas in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Arkansas heat pump rebates come from your electric utility. SWEPCO offers up to $2,200 for qualifying air-source heat pumps in northwest and western Arkansas. OG\u0026E offers up to $3,000 in the Fort Smith area. Entergy Arkansas does not offer a central heat pump rebate but provides $500 for heat pump water heaters. Federal tax credits (25C/25D) expired December 31, 2025. The state\u2019s $105 million in IRA-funded HEAR/HOMES rebates have not launched yet.",
        },
      },
      {
        "@type": "Question",
        name: "Can I stack utility rebates with HEAR in Arkansas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. When Arkansas launches its HEAR program, federal guidelines allow HEAR rebates to stack with utility rebates. A household below 80% AMI could combine up to $8,000 in HEAR with up to $3,000 in utility rebates for roughly $11,000 total. HEAR and HOMES cannot be combined for the same measure, and total incentives cannot exceed project cost.",
        },
      },
      {
        "@type": "Question",
        name: "Does Entergy Arkansas offer heat pump rebates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Entergy Arkansas does not offer a central air-source heat pump rebate. This is a significant gap since Entergy is the state\u2019s largest electric utility, serving most of central and eastern Arkansas. Entergy does offer up to $500 for heat pump water heaters through its Point of Purchase Solutions program at participating retailers.",
        },
      },
      {
        "@type": "Question",
        name: "Do heat pumps work well in Arkansas winters?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Most of Arkansas falls in IECC Climate Zone 3A with winter design temperatures around 17\u201320\u00b0F. Standard air-source heat pumps perform well here. In the Ozark counties (Zone 4A), winter design temperatures drop to 11\u201315\u00b0F. Cold-climate heat pump models are advisable in northern Arkansas but not strictly necessary across most of the state.",
        },
      },
      {
        "@type": "Question",
        name: "When will Arkansas launch its IRA rebate program?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Arkansas was allocated roughly $105 million in IRA HEAR/HOMES funding. The Arkansas Energy Office anticipated launching in early 2026, but as of March 2026 the program remains unavailable. The program page at ADEQ says the Home Energy Rebates Program is not yet available in Arkansas. Contact Home.Energy.Rebates@arkansas.gov for updates.",
        },
      },
    ],
  };

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
            {" "}/ Arkansas
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Arkansas Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Arkansas heat pump incentives in 2026 are limited to utility rebates. SWEPCO offers up to <strong>$2,200</strong> and OG&amp;E up to <strong>$3,000</strong> for qualifying systems, but Entergy Arkansas &mdash; the state&apos;s largest utility &mdash; has no central heat pump rebate. The state&apos;s <strong>$105 million</strong> in IRA-funded HEAR/HOMES rebates have not launched yet. This guide covers all major Arkansas heat pump incentives available in 2026, including SWEPCO, OG&amp;E, Entergy, cooperative programs, and the pending IRA rebates. Here&apos;s what&apos;s actually available.
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
          <StatusCard incentive={arIncentive} />
        </div>
      </section>

      {/* 3. SHORT VERSION */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Short Version</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ SWEPCO utility rebates</p>
              <p className="text-sm text-green-900">Up to <strong>$2,200</strong> for qualifying air-source heat pumps in northwest and western Arkansas. Up to $1,150 for heat pump water heaters.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ OG&amp;E utility rebates</p>
              <p className="text-sm text-green-900">Up to <strong>$3,000</strong> for HVAC replacement in the Fort Smith area. Must be an existing home built before 2016.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Potential savings</p>
              <p className="text-sm text-green-900"><strong>$3,000</strong> (above 150% AMI) to <strong>$11,000+</strong> (below 80% AMI, when HEAR launches). Full electrification packages can reach ~$17,000 total incentives.</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">✗ Federal tax credits expired</p>
              <p className="text-sm text-red-900">Section 25C and 25D both ended December 31, 2025. No federal heat pump tax credit is available for 2026 installations.</p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 md:col-span-2">
              <p className="font-semibold text-amber-800 mb-1">⚠ IRA rebates not yet available</p>
              <p className="text-sm text-amber-900">Arkansas was allocated ~$105 million in IRA HEAR/HOMES funding, but the program has not launched. The Arkansas Energy Office anticipated early 2026 &mdash; no date has been set. Do not start a project expecting these rebates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEDERAL EXPIRED */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Federal Tax Credits Have Ended</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <p className="text-red-900 leading-relaxed">
              <strong>Section 25C</strong> (Energy Efficient Home Improvement Credit) and <strong>Section 25D</strong> (Residential Clean Energy Credit) both expired for equipment placed in service after <strong>December 31, 2025</strong>. The One Big Beautiful Bill Act (signed July 4, 2025) accelerated their sunset. If you had a qualifying heat pump installed and operational on or before December 31, 2025, you can still claim the credit on your 2025 tax return. Systems purchased in 2025 but installed in 2026 do not qualify.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            When active, Section 25C provided <strong>30% of cost up to $2,000</strong> specifically for heat pumps. Section 25D covered geothermal heat pumps at 30% with no dollar cap. Neither credit has been reinstated or replaced.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">Full details on what changed and why &rarr;</Link>
          </p>
        </div>
      </section>

      {/* 5. HEAR (PRIMARY IRA PROGRAM) */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">IRA HEAR Rebates &mdash; Approved but Not Launched</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Home Electrification and Appliance Rebates (HEAR) program is the largest potential incentive for Arkansas homeowners. The Arkansas Energy Office (AEO), part of the Division of Environmental Quality, is the administering agency. Arkansas was allocated roughly <strong>$52.4 million</strong> in HEAR funding. As of {formattedDate}, the program has not launched &mdash; the AEO states the Home Energy Rebates Program is not yet available in Arkansas.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">HEAR rebate amounts (when launched)</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Household Income</th>
                  <th className="text-left p-3 font-semibold">Heat Pump (ASHP)</th>
                  <th className="text-left p-3 font-semibold">HPWH</th>
                  <th className="text-left p-3 font-semibold">Electrical Panel</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Below 80% AMI</td>
                  <td className="p-3 font-semibold">Up to $8,000</td>
                  <td className="p-3 font-semibold">Up to $1,750</td>
                  <td className="p-3 font-semibold">Up to $4,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">80&ndash;150% AMI</td>
                  <td className="p-3 font-semibold">Up to $4,000</td>
                  <td className="p-3 font-semibold">Up to $1,750</td>
                  <td className="p-3 font-semibold">Up to $4,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Above 150% AMI</td>
                  <td className="p-3 text-gray-500">&mdash;</td>
                  <td className="p-3 text-gray-500">&mdash;</td>
                  <td className="p-3 text-gray-500">&mdash;</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            The total HEAR cap per household is <strong>$14,000</strong>. Projects initiated after August 16, 2022 may be eligible for retroactive rebates, though this is not guaranteed. Contact: Home.Energy.Rebates@arkansas.gov.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="font-semibold text-amber-800 mb-1">⚠ Do not count on HEAR for projects starting now</p>
            <p className="text-sm text-amber-900">There is no launch date. Projects completed before the program opens may not qualify for rebates. Plan your budget using utility rebates only, and treat HEAR as a potential bonus.</p>
          </div>
        </div>
      </section>

      {/* 6. HOMES (SECONDARY IRA PROGRAM) */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">IRA HOMES Rebates &mdash; Also Pending</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Home Efficiency Rebates (HOMES) program covers whole-home energy retrofits. Arkansas was allocated roughly <strong>$52.7 million</strong> in HOMES funding. HOMES offers rebates based on measured or modeled energy savings across the entire home &mdash; not per-appliance like HEAR. HOMES is available at all income levels.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Household Income</th>
                  <th className="text-left p-3 font-semibold">20%+ Energy Savings</th>
                  <th className="text-left p-3 font-semibold">35%+ Energy Savings</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Below 80% AMI</td>
                  <td className="p-3 font-semibold">Up to $8,000</td>
                  <td className="p-3 font-semibold">Up to $8,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">80&ndash;150% AMI</td>
                  <td className="p-3 font-semibold">Up to $4,000</td>
                  <td className="p-3 font-semibold">Up to $4,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Above 150% AMI</td>
                  <td className="p-3 font-semibold">Up to $2,000</td>
                  <td className="p-3 font-semibold">Up to $4,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed">
            HOMES and HEAR cannot be combined for the same measure. HOMES is best suited for homeowners doing comprehensive upgrades (insulation + HVAC + air sealing). Like HEAR, HOMES has not launched in Arkansas.
          </p>
        </div>
      </section>

      {/* 7. UTILITY PROGRAMS */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Utility Rebates &mdash; What&apos;s Actually Available Now</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Utility rebates are the only active heat pump incentives in Arkansas in 2026. These are mandated by the Arkansas Public Service Commission and funded through ratepayer cost-recovery riders. Your rebate depends entirely on which utility serves your home.
          </p>

          {/* SWEPCO */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">SWEPCO (Northwest &amp; Western Arkansas)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Southwestern Electric Power Company offers the strongest heat pump incentives in Arkansas through its Residential Energy Improvement Pathway.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Measure</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                  <th className="text-left p-3 font-semibold">Requirements</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Air-source heat pump (ducted)</td>
                  <td className="p-3 font-semibold">Up to $2,200</td>
                  <td className="p-3">&ge;15.2 SEER2, &ge;7.25 HSPF2</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">$1,150</td>
                  <td className="p-3">ENERGY STAR, replaces electric tank</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Smart thermostat</td>
                  <td className="p-3 font-semibold">$75</td>
                  <td className="p-3">ENERGY STAR certified, limit 2</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            All SWEPCO HVAC work must use a SWEPCO-approved contractor. The program page confirms Arkansas customers receive up to <strong>$2,200</strong> per qualifying unit (Louisiana and Texas customers receive higher amounts).
          </p>

          {/* OG&E */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">OG&amp;E (Fort Smith Area)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Oklahoma Gas &amp; Electric serves western Arkansas including Fort Smith. Their Home Energy Efficiency Program offers up to <strong>$3,000</strong> for HVAC replacement in existing homes built before 2016. An Arkansas-licensed HVAC professional and AHRI Certificate are required. Applications must be submitted within 30 days of installation. Funds are first-come, first-served. Income-qualified weatherization services (free caulking, sealing, insulation) are available through their partner Skyline Energy Solutions.
          </p>

          {/* Entergy */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Entergy Arkansas (Central &amp; Eastern Arkansas)</h3>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-amber-800 mb-1">⚠ No central heat pump rebate from Entergy</p>
            <p className="text-sm text-amber-900">Entergy Arkansas is the state&apos;s largest electric utility, covering most of central and eastern Arkansas. It does not offer a rebate for central air-source heat pumps. Entergy provides up to <strong>$500</strong> for heat pump water heaters through its Point of Purchase Solutions program at participating Lowe&apos;s locations.</p>
          </div>

          {/* Liberty */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Liberty Utilities / Empire District (NW Arkansas Corridor)</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Liberty Utilities serves the Fayetteville&ndash;Springdale&ndash;Rogers corridor. No residential HVAC rebate program has been confirmed for 2026. Contact 1-800-206-2300 for current offerings.
          </p>

          {/* Cooperatives */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Electric Cooperatives</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Most Arkansas electric cooperatives offer loan programs rather than direct cash rebates for heat pumps.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Cooperative</th>
                  <th className="text-left p-3 font-semibold">Incentive Type</th>
                  <th className="text-left p-3 font-semibold">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Carroll Electric</td>
                  <td className="p-3 font-semibold">Cash rebate</td>
                  <td className="p-3">Heat pump rebate available (contact for current amounts)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">North Arkansas Electric</td>
                  <td className="p-3">1% interest loan</td>
                  <td className="p-3">Up to $20,000, 8-year term for ASHP</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">First Electric</td>
                  <td className="p-3">Home improvement loan</td>
                  <td className="p-3">$500&ndash;$15,000, repaid on monthly bill</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ozarks Electric</td>
                  <td className="p-3">Free energy audit</td>
                  <td className="p-3">No direct HVAC rebate confirmed</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="font-semibold text-blue-800 mb-1">Your utility territory determines your rebate</p>
            <p className="text-sm text-blue-900">The gap between SWEPCO/OG&amp;E customers ($2,200&ndash;$3,000) and Entergy customers ($0 for central heat pumps) is the defining feature of Arkansas heat pump incentives. Check your electric bill to confirm your utility before planning.</p>
          </div>
        </div>
      </section>

      {/* 9. STACKING */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Incentives Stack</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Federal guidelines confirm that HEAR rebates can stack with utility rebates. HEAR and HOMES cannot be combined for the same measure. Since federal 25C/25D expired, the only stacking question in 2026 is utility + HEAR (when launched). Total combined incentives cannot exceed total project cost. Arkansas has no state tax credit and no statewide loan program to add to the stack.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 150% AMI &mdash; Ducted heat pump replacement</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>SWEPCO or OG&amp;E utility rebate: $2,200&ndash;$3,000</li>
                <li>HEAR: not eligible</li>
                <li>Federal tax credit: expired</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$3,000</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">80&ndash;150% AMI &mdash; Ducted heat pump replacement (when HEAR launches)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>HEAR heat pump rebate (50% of cost): up to $4,000</li>
                <li>SWEPCO or OG&amp;E utility rebate: $2,200&ndash;$3,000</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$7,000</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">Below 80% AMI &mdash; Ducted heat pump replacement (when HEAR launches)</p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>HEAR heat pump rebate (100% of cost): up to $8,000</li>
                <li>SWEPCO or OG&amp;E utility rebate: $2,200&ndash;$3,000</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$11,000</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-5">
            <p className="font-semibold text-gray-900 mb-1">What you&apos;ll actually pay</p>
            <p className="text-sm text-gray-700">A typical ducted heat pump system in Arkansas costs $12,000&ndash;$18,000 installed. Today, with utility rebates only, expect <strong>$9,000 to $15,000 out of pocket</strong>. If you qualify for HEAR when it launches, that drops to <strong>$1,000 to $7,000 out of pocket</strong> depending on income and utility territory. Entergy customers have the least support &mdash; plan for higher out-of-pocket costs.</p>
          </div>

          <p className="text-sm text-gray-700 mt-4">
            For comparison, <Link href="/heat-pumps/states/tx" className="text-brand-600 hover:underline">Texas</Link> also lacks a statewide program but Austin Energy offers up to $3,000 plus 0% financing. Arkansas and Texas share the same challenge: your incentives depend heavily on which utility serves your address.
          </p>

          <p className="text-xs text-gray-400 mt-4">
            Arkansas has no state tax credit and no statewide low-interest loan program. Entergy Arkansas customers receive $0 for central heat pumps, reducing maximum stacks significantly in central and eastern Arkansas.
          </p>
        </div>
      </section>

      {/* 10. WEATHERIZATION */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Weatherization Assistance Program</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Arkansas Weatherization Assistance Program (WAP) provides free energy efficiency improvements averaging roughly <strong>$5,000 per home</strong>. The program is managed by the Arkansas Energy Office through six regional Community Action Agencies covering all 75 counties. Heat pumps may be installed when the required energy audit determines cost-effectiveness.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Eligible households must earn at or below <strong>200% of Federal Poverty Guidelines</strong>, with priority for elderly, disabled, and families with children. The utility-funded Arkansas Weatherization Program (AWP) adds $1,058&ndash;$2,116 per home.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <p className="font-semibold text-green-800 mb-1">✓ Best candidates for WAP</p>
            <p className="text-sm text-green-900">Low-income homeowners heating with electric resistance or propane, especially in rural areas without gas service. If you qualify, WAP can cover weatherization measures that reduce heating costs by 20&ndash;30% before you even consider a heat pump upgrade.</p>
          </div>
        </div>
      </section>

      {/* 11. CLIMATE */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Climate Context</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Arkansas spans IECC Climate Zone 3A (warm-humid) across most of the state and Zone 4A (mixed-humid) in the northern Ozark counties. Heat pumps perform well across the entire state.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">City</th>
                  <th className="text-left p-3 font-semibold">Winter Design Temp (99%)</th>
                  <th className="text-left p-3 font-semibold">Climate Zone</th>
                  <th className="text-left p-3 font-semibold">Heat Pump Type</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Little Rock</td>
                  <td className="p-3 font-semibold">20&deg;F</td>
                  <td className="p-3">3A</td>
                  <td className="p-3">Standard ASHP</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Fort Smith</td>
                  <td className="p-3 font-semibold">20&deg;F</td>
                  <td className="p-3">3A</td>
                  <td className="p-3">Standard ASHP</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Fayetteville</td>
                  <td className="p-3 font-semibold">15&deg;F</td>
                  <td className="p-3">4A</td>
                  <td className="p-3">Cold-climate recommended</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Jonesboro</td>
                  <td className="p-3 font-semibold">19&deg;F</td>
                  <td className="p-3">3A</td>
                  <td className="p-3">Standard ASHP</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Roughly half of Arkansas homes already heat with electricity (a mix of heat pumps and resistance heating), while about 40% use natural gas. An estimated 5&ndash;8% rely on propane in rural areas. Propane and electric-resistance households see the largest savings from heat pump conversions &mdash; typically 30&ndash;55% reduction in heating costs. Arkansas&apos;s residential electricity rate of roughly <strong>$0.13/kWh</strong> is well below the national average, further strengthening the economics.
          </p>

          <p className="text-gray-700 leading-relaxed">
            For more on battery storage and whole-home energy strategy, see our <Link href="/battery" className="text-brand-600 hover:underline">home battery guide</Link>.
          </p>
        </div>
      </section>

      {/* 12. HOW TO APPLY */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Apply</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <p className="font-semibold text-gray-900">Check your utility territory</p>
                <p className="text-sm text-gray-700">Look at your electric bill to confirm whether you&apos;re served by SWEPCO, OG&amp;E, Entergy, Liberty, or a cooperative. This determines which rebates you can access.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <p className="font-semibold text-gray-900">Get quotes from approved contractors</p>
                <p className="text-sm text-gray-700">SWEPCO requires a SWEPCO-approved contractor. OG&amp;E requires an Arkansas-licensed HVAC professional. Get 2&ndash;3 quotes and confirm they&apos;ll handle rebate paperwork.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <p className="font-semibold text-gray-900">Submit your utility rebate application</p>
                <p className="text-sm text-gray-700">OG&amp;E applications must be submitted within 30 days of installation. SWEPCO rebates are processed through approved contractors. Keep all receipts, AHRI certificates, and contractor documentation.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
              <div>
                <p className="font-semibold text-gray-900">Watch for HEAR launch</p>
                <p className="text-sm text-gray-700">If your household earns below 150% of Area Median Income (AMI), the HEAR program could add $4,000&ndash;$8,000 when it launches. Monitor the AEO website or email Home.Energy.Rebates@arkansas.gov for updates.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. WHAT TO WATCH */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Watch</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">HEAR/HOMES launch date</p>
              <p className="text-sm text-gray-600 mt-1">The AEO anticipated early 2026 but has not announced a launch date. When activated, this will be the single largest incentive available to most Arkansas homeowners. Check adeq.state.ar.us/energy regularly.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">IRA funding runway</p>
              <p className="text-sm text-gray-600 mt-1">The One Big Beautiful Bill Act preserved IRA home rebate funding but did not add to it. Once Arkansas launches HEAR/HOMES, the $105 million is first-come, first-served until exhausted. States that launched early (like Wisconsin) are drawing down funds faster.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Utility program renewals</p>
              <p className="text-sm text-gray-600 mt-1">Arkansas utility efficiency programs are mandated by the APSC and renewed periodically. Rebate amounts and qualifying equipment can change between program cycles. Confirm current amounts before committing.</p>
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

      {/* 15. SEE ALSO */}
      <section className="py-8 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-3">See also</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/heat-pumps/states/tx" className="text-brand-600 hover:underline">Texas Heat Pump Rebates &amp; Incentives</Link>
            </li>
            <li className="text-gray-500">
              Louisiana Heat Pump Rebates <em>(coming soon)</em>
            </li>
            <li className="text-gray-500">
              Missouri Heat Pump Rebates <em>(coming soon)</em>
            </li>
            <li>
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">Federal Heat Pump Tax Credits Have Ended</Link>
            </li>
            <li>
              <Link href="/heat-pumps" className="text-brand-600 hover:underline">All State Heat Pump Incentives</Link>
            </li>
          </ul>
        </div>
      </section>

      {/* 16. SOURCES */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="space-y-2 text-sm">
            {arIncentive.sources.map((source: { label: string; url: string }, index: number) => (
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
              <strong>Disclaimer:</strong> This page covers the main utility and IRA heat pump incentives available to Arkansas homeowners in 2026. It does not calculate savings, guarantee eligibility, or represent any incentive program. Cooperative rebates and municipal utility programs may vary &mdash; contact your local utility for current details. We verify status regularly but programs can change without notice. Always confirm current amounts and eligibility with your utility and contractor before making decisions.
            </p>
          </div>
          <div className="mt-6 text-center">
            <Link href="/heat-pumps" className="text-brand-600 hover:underline text-sm">
              &larr; Back to Heat Pumps overview
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
