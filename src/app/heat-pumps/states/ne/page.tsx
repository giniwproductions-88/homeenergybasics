import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Nebraska Heat Pump Rebates 2026: $525–$1,200 Utility Rebates + 1.5% Energy Loans | Home Energy Basics",
  description:
    "NPPD EnergyWise offers up to $1,200. OPPD pays $525. LES adds $800. Federal tax credits ended. Here\u2019s every Nebraska heat pump incentive in 2026.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/ne",
  },
  openGraph: {
    title: "Nebraska Heat Pump Rebates 2026",
    description:
      "Utility rebates from $525 to $1,200 plus 1.5% state energy loans \u2014 the complete guide to Nebraska heat pump incentives after federal credits expired.",
    url: "https://homeenergybasics.com/heat-pumps/states/ne",
    type: "article",
  },
};

export default function NebraskaPage() {
  const neIncentive = incentives.NE;
  const formattedDate = formatDate(neIncentive.lastVerified);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What heat pump rebates are available in Nebraska in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nebraska heat pump rebates come from public power utilities. NPPD EnergyWise offers $400\u2013$1,200 for air-source heat pumps depending on efficiency. OPPD pays a flat $525 for all heat pumps. Lincoln Electric System offers $800. The City of Lincoln adds up to $3,000 for low-income homeowners. Federal tax credits (25C/25D) expired December 31, 2025. Nebraska\u2019s IRA-funded HEAR and HOMES programs have not launched.",
        },
      },
      {
        "@type": "Question",
        name: "Can I stack utility rebates and HEAR in Nebraska?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, when HEAR launches in Nebraska, federal rules allow stacking HEAR rebates with utility rebates. However, there is one important Nebraska-specific anti-stacking rule: the NPPD 1.5% Dollar and Energy Saving Loan and the NPPD EnergyWise rebate cannot be combined. You must choose one or the other. The standard 5% state loan can be combined with any utility rebate.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a cold-climate heat pump in Nebraska?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Nebraska\u2019s ASHRAE 99.6% heating design temperatures range from \u22126.3\u00b0F in Lincoln to \u22128.1\u00b0F in Omaha, with western Nebraska even colder. Cold-climate-rated, inverter-driven heat pumps are strongly recommended for all Nebraska installations. A dual-fuel setup pairing a heat pump with a gas furnace backup is a practical option in urban areas with existing natural gas service.",
        },
      },
      {
        "@type": "Question",
        name: "What is Nebraska\u2019s Dollar and Energy Saving Loans program?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Dollar and Energy Saving Loans program is administered by the Nebraska Department of Water, Energy, and Environment (DWEE). It offers low-interest financing for heat pump installations through participating Nebraska banks. Rates range from 1.5% (NPPD territory) to 3% (OPPD territory) to 5% (standard). Loans go up to $125,000 with terms up to 15 years. No income requirement applies.",
        },
      },
      {
        "@type": "Question",
        name: "Who administers heat pump programs in Nebraska?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nebraska is the only all-public-power state in the U.S., so there are no investor-owned utilities. Heat pump rebates are administered by individual public power districts (OPPD, NPPD), municipal utilities (Lincoln Electric System, Hastings Utilities), and rural cooperatives. The Dollar and Energy Saving Loans program is administered by the Nebraska DWEE. The state\u2019s IRA rebate programs will also be administered by DWEE when they launch.",
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
            {" "}/ Nebraska
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nebraska Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Nebraska heat pump incentives are limited in 2026. <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">Federal tax credits expired</Link> in December 2025, and the state&apos;s IRA-funded rebate programs have not launched. Most homeowners rely on utility rebates from OPPD (<strong>$525</strong>), LES (<strong>$800</strong>), or NPPD (up to <strong>$1,200</strong>). Nebraska&apos;s Dollar and Energy Saving Loans offer financing as low as <strong>1.5%</strong> interest. This guide covers all major Nebraska heat pump incentives available in 2026, including utility rebates, state energy loans, the Lincoln city incentive, and IRA program status. Here&apos;s what&apos;s actually available.
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
          <StatusCard incentive={neIncentive} />
        </div>
      </section>

      {/* 3. SHORT VERSION */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Short version</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ NPPD EnergyWise: up to $1,200</p>
              <p className="text-sm text-green-900">Nebraska Public Power District offers $400–$1,200 for air-source heat pumps through participating local utilities across rural and outstate Nebraska. High-efficiency inverter units qualify for the top tier.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ LES + Lincoln city: up to $3,800</p>
              <p className="text-sm text-green-900">Lincoln Electric System pays $800 for heat pumps. The City of Lincoln adds up to $3,000 for low-to-moderate income homeowners (at or below 80% Lincoln AMI). General-population city incentives are sold out.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Total potential: $525–$3,800</p>
              <p className="text-sm text-green-900">$525 (above 150% AMI, OPPD territory) to $3,800 (below 80% AMI, Lincoln). If HEAR launches, income-qualifying households could stack up to ~$9,200–$11,800 depending on location.</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">✗ Federal tax credits expired</p>
              <p className="text-sm text-red-900">Section 25C and Section 25D credits ended December 31, 2025. No federal tax credit is available for heat pumps installed in 2026.</p>
            </div>
            <div className="md:col-span-2 bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="font-semibold text-amber-800 mb-1">⚠ HEAR/HOMES not launched — and watch the NPPD anti-stacking rule</p>
              <p className="text-sm text-amber-900">Nebraska&apos;s $91 million IRA allocation (HEAR + HOMES) is still in &quot;Preparing Application&quot; status. No launch date has been set. Separately, NPPD-territory homeowners must choose between the 1.5% Dollar and Energy Saving Loan or the EnergyWise rebate — they cannot be combined.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEDERAL EXPIRED */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Federal tax credits are gone</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <p className="text-red-900 leading-relaxed">
              <strong>Section 25C</strong> (Energy Efficient Home Improvement Credit) and <strong>Section 25D</strong> (Residential Clean Energy Credit) were terminated by the One Big Beautiful Bill Act, signed July 4, 2025. Both credits applied to property placed in service through <strong>December 31, 2025</strong>. No federal tax credit is available for heat pumps installed in 2026. If your system was fully installed and operational by December 31, 2025, you can still claim the credit on your 2025 tax return.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            The &quot;placed in service&quot; date is when installation was complete and the system was operational — not the purchase or contract date. Equipment purchased in 2025 but installed in January 2026 or later does not qualify. For Section 25D (geothermal), carryforward of unused credits from 2025 or earlier is permitted.
          </p>
          <p className="text-gray-700 leading-relaxed">
            For full details, see{" "}
            <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
              Federal Heat Pump Tax Credits Ended
            </Link>.
          </p>
        </div>
      </section>

      {/* 5. HEAR + HOMES STATUS */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">IRA rebates: HEAR and HOMES status</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Nebraska received approximately <strong>$91 million</strong> in IRA formula funding for the Home Electrification and Appliance Rebates (HEAR) and Home Owner Managing Energy Savings (HOMES) programs. Both programs remain in &quot;Preparing Application&quot; status with the Nebraska Department of Water, Energy, and Environment (DWEE). No launch date has been announced.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">What HEAR would offer when it launches</h3>
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
                  <td className="p-3">Heat pump (space heating/cooling)</td>
                  <td className="p-3 font-semibold">$8,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">$1,750</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Electric panel/service upgrade</td>
                  <td className="p-3 font-semibold">$4,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Insulation/air sealing/ventilation</td>
                  <td className="p-3 font-semibold">$1,600</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Electric wiring</td>
                  <td className="p-3 font-semibold">$2,500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Total household cap</td>
                  <td className="p-3 font-semibold">$14,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            HEAR eligibility is income-based. Households at or below <strong>80% of Area Median Income (AMI)</strong> can receive up to 100% of project costs (within the caps above). Households at <strong>80–150% AMI</strong> receive up to 50% of costs. Households <strong>above 150% AMI are not eligible</strong> for HEAR.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="font-semibold text-blue-800 mb-1">Nebraska&apos;s all-public-power structure</p>
            <p className="text-sm text-blue-900">Nebraska is the only state where every electric utility is publicly owned. There are no investor-owned utilities and no mandated efficiency spending. Every utility rebate in Nebraska is voluntary, which is why rebate amounts and availability vary significantly across the state. This also means IRA program implementation depends entirely on DWEE coordination with dozens of independent public power entities.</p>
          </div>
        </div>
      </section>

      {/* 6. DOLLAR AND ENERGY SAVING LOANS */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Dollar and Energy Saving Loans</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Nebraska&apos;s Dollar and Energy Saving Loans (DESL) program is the state&apos;s primary financing mechanism for heat pump installations. Administered by DWEE through participating Nebraska banks, savings institutions, and credit unions, it offers below-market interest rates with no income requirement.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Loan type</th>
                  <th className="text-left p-3 font-semibold">Interest rate</th>
                  <th className="text-left p-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">NPPD territory</td>
                  <td className="p-3 font-semibold">1.5%</td>
                  <td className="p-3">Cannot combine with EnergyWise rebate</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">OPPD territory</td>
                  <td className="p-3 font-semibold">3%</td>
                  <td className="p-3">Can combine with OPPD rebate</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Standard (all other areas)</td>
                  <td className="p-3 font-semibold">5%</td>
                  <td className="p-3">Available statewide</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Loans cover up to <strong>$125,000</strong> for residential improvements with terms up to <strong>15 years</strong>. Heat pumps (air-source and geothermal), backup furnaces, thermostats, ductwork, and electrical wiring associated with heat pump installation are all eligible. Equipment must be AHRI-listed. An emergency provision allows work to begin before DWEE approval when heating systems fail between September and May.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="font-semibold text-amber-800 mb-1">⚠ Common mistake: choosing both the 1.5% loan and NPPD rebate</p>
            <p className="text-sm text-amber-900">In NPPD territory, you must pick one: the 1.5% Dollar and Energy Saving Loan or the EnergyWise utility rebate. They cannot be combined. For a $1,200 top-tier heat pump rebate, the rebate is usually the better deal. The 1.5% loan is more valuable for larger projects where the interest savings over 15 years exceed the rebate amount. Homes built within the last 5 years are not eligible for the 1.5% loan but can still claim the rebate.</p>
          </div>
        </div>
      </section>

      {/* 7. UTILITY PROGRAMS */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Utility rebates</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Utility rebates are the main cash incentives available to Nebraska homeowners in 2026. Amounts vary significantly depending on your electric utility territory.
          </p>

          {/* OPPD */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Omaha Public Power District (OPPD)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            OPPD serves the Omaha metro area and offers heat pump rebates through its HVAC Smart Rebates program. All heat pumps — including ductless, ducted, and geothermal — receive a flat <strong>$525</strong> rebate regardless of efficiency rating.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Air-source heat pump (any SEER2)</td>
                  <td className="p-3 font-semibold">$525</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ductless mini-split heat pump</td>
                  <td className="p-3 font-semibold">$525</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Geothermal heat pump</td>
                  <td className="p-3 font-semibold">$525</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 text-gray-500">—</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            OPPD also offers <strong>Residential Conservation Rate 115</strong>, a lower rate on the last block of winter energy charges (October–May) for heat pump customers. The heat pump must supply at least 50% of space conditioning with an outdoor thermostat setting of 20°F or lower. This ongoing rate benefit can exceed the one-time rebate value over several years.
          </p>

          {/* LES + Lincoln */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Lincoln Electric System (LES) + City of Lincoln</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            LES offers an <strong>$800</strong> incentive for qualifying air-source or mini-split heat pumps through its Sustainable Energy Program (SEP), available to all LES customers. LES also offers <strong>$500</strong> for heat pump water heaters (minimum UEF 2.0) and <strong>$550–$1,500</strong> for geothermal ground loop installations.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The <strong>City of Lincoln Heat Pump Incentive</strong> stacks on top of the LES rebate. Funded through the Resilient Lincoln sustainability initiative, the current round runs September 1, 2025 through August 31, 2026.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Scenario</th>
                  <th className="text-left p-3 font-semibold">City incentive</th>
                  <th className="text-left p-3 font-semibold">LES incentive</th>
                  <th className="text-left p-3 font-semibold">Combined</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">HP replacing a heat pump (general)</td>
                  <td className="p-3">$500</td>
                  <td className="p-3">$800</td>
                  <td className="p-3 font-semibold">$1,300</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">HP replacing an AC (general)</td>
                  <td className="p-3">$1,500</td>
                  <td className="p-3">$800</td>
                  <td className="p-3 font-semibold">$2,300</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">HP replacing HP or AC (≤80% AMI)</td>
                  <td className="p-3">$3,000</td>
                  <td className="p-3">$800</td>
                  <td className="p-3 font-semibold">$3,800</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mb-6">
            General-population City of Lincoln incentives sold out November 3, 2025. The low-to-moderate income tier ($3,000) and the LES $800 incentive remain available.
          </p>

          {/* NPPD */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Nebraska Public Power District (NPPD) EnergyWise</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            NPPD is a wholesale supplier serving local retail utilities across outstate Nebraska. Its EnergyWise℠ program is the broadest incentive vehicle in the state, available through participating public power districts, municipal utilities, and rural cooperatives.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Specification</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">ASHP (standard, 15.2–16 SEER2)</td>
                  <td className="p-3">11.7 EER2, 7.5 HSPF2 min</td>
                  <td className="p-3 font-semibold">$400</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">ASHP (mid-tier, 16.1–18 SEER2)</td>
                  <td className="p-3">11.7 EER2, 7.5 HSPF2 min</td>
                  <td className="p-3 font-semibold">$800</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">ASHP (high-tier, 18.1+ SEER2 or inverter)</td>
                  <td className="p-3">Variable capacity, inverter driven</td>
                  <td className="p-3 font-semibold">$1,200</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ductless mini-split (standard)</td>
                  <td className="p-3">16+ SEER2, 12.5 EER2, 7.7 HSPF2</td>
                  <td className="p-3 font-semibold">$400</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ductless mini-split (inverter)</td>
                  <td className="p-3">Inverter driven</td>
                  <td className="p-3 font-semibold">$600</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Multi-head ductless (3+ ton, variable)</td>
                  <td className="p-3">Inverter driven</td>
                  <td className="p-3 font-semibold">$1,200</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Geothermal (1–2 stage)</td>
                  <td className="p-3">Water-to-air/water</td>
                  <td className="p-3 font-semibold">$2,400</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Geothermal (variable capacity)</td>
                  <td className="p-3">35+ EER, 5.0+ COP</td>
                  <td className="p-3 font-semibold">$3,300</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">HPWH (air-source)</td>
                  <td className="p-3">UEF &gt; 1.9</td>
                  <td className="p-3 font-semibold">$400</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">HPWH (water/ground-source)</td>
                  <td className="p-3">COP &gt; 2.8</td>
                  <td className="p-3 font-semibold">$650</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            An AHRI certificate is required for all EnergyWise claims — without it, the maximum incentive is capped at $100. Participating local utilities include Dawson Public Power, Southwest Public Power, North Central Public Power, and Niobrara Valley EMC, among others. Beatrice Board of Public Works runs an independent program offering up to <strong>$3,000</strong> for high-efficiency heat pumps.
          </p>

          {/* MUD note */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Metropolitan Utilities District (MUD) — gas only</h3>
          <p className="text-gray-700 leading-relaxed">
            MUD serves Omaha for natural gas and water only (OPPD provides electricity). MUD does not offer heat pump rebates. It runs a &quot;Go Gas, Get Cash&quot; program that pays a <strong>$100</strong> bill credit to homeowners who replace a heat pump with a gas furnace — actively incentivizing against electrification. Dual-fuel and heat pump systems are not eligible for MUD gas furnace rebates.
          </p>
        </div>
      </section>

      {/* 9. STACKING */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How programs stack</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Federal rules allow stacking IRA rebates (HEAR/HOMES) with utility rebates and local government programs. The Dollar and Energy Saving Loans, as financing rather than grants, are generally stackable with all rebate programs — except the NPPD 1.5% loan, which cannot combine with the EnergyWise rebate. Below are realistic scenarios for a typical <strong>$10,000</strong> whole-home heat pump installation.
          </p>

          <div className="space-y-4 mb-8">
            {/* Above 150% AMI */}
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 150% AMI — OPPD territory (Omaha)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Federal 25C/25D: $0 (expired)</li>
                <li>HEAR: $0 (not eligible above 150% AMI)</li>
                <li>OPPD HVAC Smart: $525</li>
                <li>Dollar and Energy Saving Loan: 3% financing available</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$525</p>
            </div>

            {/* Above 150% AMI — NPPD */}
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 150% AMI — NPPD territory (outstate)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Federal 25C/25D: $0 (expired)</li>
                <li>HEAR: $0 (not eligible above 150% AMI)</li>
                <li>NPPD EnergyWise (high-tier ASHP): $1,200</li>
                <li>Dollar and Energy Saving Loan: 5% (or choose 1.5% and forgo rebate)</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$1,200</p>
            </div>

            {/* Below 80% AMI — Lincoln */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">Below 80% AMI — Lincoln (best current case)</p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>Federal 25C/25D: $0 (expired)</li>
                <li>HEAR: $0 (not yet launched — would add up to $8,000)</li>
                <li>LES Sustainable Energy Program: $800</li>
                <li>City of Lincoln LMI incentive: $3,000</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$3,800</p>
            </div>
          </div>

          {/* What you'll actually pay */}
          <div className="bg-gray-100 rounded-lg p-5">
            <p className="font-semibold text-gray-900 mb-1">What you&apos;ll actually pay</p>
            <p className="text-sm text-gray-700">For a typical $10,000 whole-home heat pump installation, most Nebraska homeowners above 150% AMI will pay <strong>$8,800 to $9,475 out of pocket</strong> after utility rebates. Low-income Lincoln homeowners can reduce that to roughly <strong>$6,200</strong>. Dollar and Energy Saving Loans at 1.5%–5% interest can spread remaining costs over up to 15 years. When HEAR launches, income-qualifying households below 80% AMI could see out-of-pocket costs drop to near zero.</p>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            Nebraska has no state tax credit and no statewide rebate. The numbers above reflect the current gap between utility-only support and the potential impact of IRA rebates if they launch.
          </p>
        </div>
      </section>

      {/* 10. WEATHERIZATION */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Weatherization Assistance Program</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Nebraska&apos;s WAP is federally funded and administered by DWEE through 8 nonprofit community action agencies. Households at or below <strong>200% of the federal poverty level</strong> are eligible, with priority given to persons over 60, persons with disabilities, and families with children under 6. Services are free and include insulation, air sealing, and furnace safety inspection.
          </p>
          <p className="text-gray-700 leading-relaxed">
            WAP does not typically cover heat pump installation, but weatherizing your home before installing a heat pump can reduce the size (and cost) of the system you need. Contact your{" "}
            <a href="https://dee.nebraska.gov/aid/nebraska-weatherization-assistance-program" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">
              local community action agency
            </a>{" "}
            to check eligibility.
          </p>
        </div>
      </section>

      {/* 11. CLIMATE */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Climate context</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Nebraska falls entirely within IECC Climate Zone 5A. Cold-climate-rated, inverter-driven heat pumps are essential for all installations. ASHRAE 99.6% heating design temperatures confirm how cold it gets:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">City</th>
                  <th className="text-left p-3 font-semibold">99.6% heating design temp</th>
                  <th className="text-left p-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Omaha</td>
                  <td className="p-3 font-semibold">−8.1°F</td>
                  <td className="p-3">Largest metro, OPPD territory</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Lincoln</td>
                  <td className="p-3 font-semibold">−6.3°F</td>
                  <td className="p-3">LES territory</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">North Platte / Scottsbluff</td>
                  <td className="p-3 font-semibold">−8°F to −12°F</td>
                  <td className="p-3">Western NE, up to 7,862 HDD65</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Modern variable-speed cold-climate heat pumps maintain heating capacity down to −10°F to −15°F, covering the vast majority of Nebraska hours. A <strong>dual-fuel (hybrid) configuration</strong> — pairing a cold-climate heat pump with a natural gas furnace backup for the coldest hours — is a practical approach in urban areas with existing gas service. Natural gas heats approximately 59% of Nebraska homes. Rural homeowners using propane often see stronger economics from switching to a heat pump, since propane prices are more volatile and typically higher per BTU.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-green-800 mb-1">✓ Best candidates for a heat pump in Nebraska</p>
            <p className="text-sm text-green-900">Rural homeowners replacing propane heating (highest fuel cost savings plus NPPD&apos;s $1,200 rebate). Lincoln homeowners below 80% AMI ($3,800 in stacked incentives). Homeowners with aging air conditioners who need both heating and cooling replacement (dual-purpose value). Anyone in NPPD territory who can take advantage of the $1,200 top-tier inverter rebate.</p>
          </div>

          <p className="text-gray-700 leading-relaxed">
            For more on how home batteries interact with heat pumps and time-of-use rates, see our{" "}
            <Link href="/battery" className="text-brand-600 hover:underline">
              home battery guide
            </Link>.
          </p>
        </div>
      </section>

      {/* 12. HOW TO APPLY */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to apply</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-gray-900">Identify your electric utility</p>
                <p className="text-sm text-gray-700">Check whether you&apos;re served by OPPD (Omaha metro), LES (Lincoln), or an NPPD wholesale customer (most of outstate Nebraska). Your utility determines which rebate program and loan rate you qualify for.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900">Choose an AHRI-rated cold-climate heat pump</p>
                <p className="text-sm text-gray-700">Work with a licensed contractor to select a system. All Nebraska utility rebates require AHRI certification. For the best NPPD rebate ($1,200), choose a variable-capacity inverter-driven unit rated 18.1+ SEER2.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-900">Apply for rebates through your utility</p>
                <p className="text-sm text-gray-700">Submit your rebate application through your utility&apos;s website or through your contractor. OPPD applications must be filed within 4 months of installation and within the calendar year. NPPD EnergyWise applications go through your local retail utility.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <p className="font-semibold text-gray-900">Apply for financing if needed</p>
                <p className="text-sm text-gray-700">Contact a participating Nebraska bank or credit union for a Dollar and Energy Saving Loan. In NPPD territory, decide whether the 1.5% loan or the EnergyWise rebate is the better deal for your project before applying.</p>
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
              <p className="font-semibold text-gray-900">Nebraska HEAR/HOMES launch</p>
              <p className="text-sm text-gray-600 mt-1">The $91 million IRA allocation is still in &quot;Preparing Application&quot; status. When DWEE launches these programs, income-qualifying households could access up to $8,000 per heat pump (HEAR) or up to $10,000 for whole-home projects (HOMES). No timeline has been announced.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">IRA funding runway</p>
              <p className="text-sm text-gray-600 mt-1">Federal IRA rebate funding is available through September 30, 2031. The OBBBA did not repeal HEAR/HOMES — only the 25C/25D tax credits. However, political uncertainty and administrative delays continue to slow state-level launches nationwide.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">City of Lincoln incentive renewal</p>
              <p className="text-sm text-gray-600 mt-1">The current round ends August 31, 2026. General-population incentives are already sold out, but the LMI tier ($3,000) remains. Whether Lincoln funds a fourth round depends on City Council action and remaining Resilient Lincoln budget.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">OPPD rebate modernization</p>
              <p className="text-sm text-gray-600 mt-1">OPPD&apos;s flat $525 rebate does not differentiate by efficiency — unlike NPPD&apos;s tiered structure. Any OPPD program update that adds efficiency tiers or increases the heat pump rebate would significantly improve the incentive landscape in Nebraska&apos;s largest metro.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 14. FAQ */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently asked questions</h2>
          <div className="space-y-6">
            {faqJsonLd.mainEntity.map((faq, index) => (
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
              <Link href="/heat-pumps/states/co" className="text-brand-600 hover:underline">
                Colorado Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li className="text-gray-500">
              Iowa Heat Pump Rebates <em>(coming soon)</em>
            </li>
            <li className="text-gray-500">
              South Dakota Heat Pump Rebates <em>(coming soon)</em>
            </li>
            <li className="text-gray-500">
              Kansas Heat Pump Rebates <em>(coming soon)</em>
            </li>
            <li>
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                Federal Heat Pump Tax Credits Ended
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
            {neIncentive.sources.map((source, index) => (
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
              <strong>Disclaimer:</strong> This page covers the main utility, state financing, and IRA heat pump incentives available to Nebraska homeowners in 2026. It does not calculate savings, guarantee eligibility, or represent any incentive program. Nebraska&apos;s all-public-power structure means rebate availability varies by utility territory — not all programs listed here apply in all areas. We verify status regularly but programs can change without notice. Always confirm current amounts and eligibility with your local electric utility and contractor before making decisions.
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
