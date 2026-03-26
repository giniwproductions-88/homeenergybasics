import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "South Carolina Heat Pump Rebates 2026: What You Can Actually Get ($300–$1,000 + HEAR Coming) | Home Energy Basics",
  description:
    "Duke Energy offers $500–$1,000. Dominion covers up to $750. Federal tax credits ended. Here\u2019s every South Carolina heat pump incentive in 2026.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/sc",
  },
  openGraph: {
    title: "South Carolina Heat Pump Rebates 2026",
    description:
      "Utility rebates of $300–$1,000 plus pending HEAR/HOMES rebates up to $14,000 — the complete guide to South Carolina heat pump incentives after federal credits expired.",
    url: "https://homeenergybasics.com/heat-pumps/states/sc",
    type: "article",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What heat pump rebates are available in South Carolina in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "South Carolina homeowners can access utility rebates of $300\u2013$1,000 from Duke Energy, Dominion Energy, and Santee Cooper for air-source heat pumps. A state geothermal tax credit covers 25% of costs up to $3,500. Federal HEAR rebates (up to $8,000 for heat pumps) and HOMES rebates (up to $8,000 for whole-home efficiency) are expected to launch later in 2026 but are not yet available. Federal Section 25C and 25D tax credits expired December 31, 2025.",
      },
    },
    {
      "@type": "Question",
      name: "Can I stack utility rebates with HEAR and HOMES rebates in South Carolina?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, when HEAR and HOMES launch, utility rebates can stack with both programs. However, HEAR and HOMES cannot be applied to the same individual upgrade \u2014 they must cover different measures within the same home. Total combined incentives cannot exceed the project cost. Utility rebates from Duke Energy, Dominion, or Santee Cooper can be claimed alongside either federal rebate program.",
      },
    },
    {
      "@type": "Question",
      name: "Why do most South Carolina homes not qualify for HEAR heat pump rebates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "About 71% of South Carolina homes already heat with electricity. HEAR rebates are designed for fuel-switching \u2014 replacing fossil fuel systems (gas, propane, oil) or electric resistance heating with heat pumps. Replacing an existing heat pump with a new one is not eligible under HEAR. This means most SC households will need to rely on HOMES rebates or utility programs instead.",
      },
    },
    {
      "@type": "Question",
      name: "Which South Carolina utility offers the best heat pump rebates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Duke Energy Carolinas currently offers the highest standard heat pump rebates in South Carolina, up to $1,000 for converting from strip heat to a high-efficiency heat pump. For heat pump water heaters, Dominion Energy SC leads at $750. Santee Cooper offers lower rebates but uniquely provides low-interest loans up to $20,000 for qualifying equipment.",
      },
    },
    {
      "@type": "Question",
      name: "Who administers South Carolina\u2019s HEAR and HOMES rebate programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The South Carolina Energy Office, part of the Office of Regulatory Staff (energy.sc.gov), administers both the Home Electrification and Appliance Rebates (HEAR) and Home Efficiency Rebates (HOMES) programs. South Carolina\u2019s total allocation exceeds $137 million. The programs are expected to launch in 2026 but exact dates have not been announced.",
      },
    },
  ],
};

export default function SouthCarolinaPage() {
  const scIncentive = incentives.SC;
  const formattedDate = formatDate(scIncentive.lastVerified);

  return (
    <>
      <JsonLd data={faqJsonLd} />

      {/* 1. Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="container-narrow">
          <nav className="text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-brand-600">Home</Link>
            {" "}/{" "}
            <Link href="/heat-pumps" className="hover:text-brand-600">Heat Pumps</Link>
            {" "}/ South Carolina
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            South Carolina Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            South Carolina heat pump incentives are limited in 2026 but not nonexistent. With federal tax credits gone and state HEAR/HOMES rebate programs still pending launch, most homeowners rely on <strong>utility rebates worth $300–$1,000</strong> from Duke Energy, Dominion Energy, or Santee Cooper, plus a <strong>$3,500 geothermal tax credit</strong> if applicable. This guide covers all major South Carolina heat pump incentives available in 2026, including utility rebates, pending federal rebates, electric cooperative programs, and the state geothermal credit. Here&apos;s what&apos;s actually available.
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
          <StatusCard incentive={scIncentive} />
        </div>
      </section>

      {/* 3. Short Version */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The short version</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Utility rebates are active now</p>
              <p className="text-sm text-green-900">Duke Energy, Dominion Energy SC, and Santee Cooper offer <strong>$300–$1,000</strong> for air-source heat pumps and <strong>$400–$800</strong> for heat pump water heaters. Available to all income levels.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ SC geothermal tax credit: up to $3,500</p>
              <p className="text-sm text-green-900">South Carolina offers a <strong>25% state income tax credit up to $3,500</strong> for geothermal heat pump installations. Air-source heat pumps do not qualify. Unused credit carries forward up to 10 years.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Potential savings: $650 to $22,000+</p>
              <p className="text-sm text-green-900">$650 (above 150% AMI) to $22,000+ (below 80% AMI, when HEAR/HOMES launch). Full electrification packages can reach ~$23,000 total incentives for income-qualified households switching from fossil fuels.</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">✗ Federal tax credits expired</p>
              <p className="text-sm text-red-900">Section 25C ($2,000/year for heat pumps) and Section 25D (30% for geothermal) both expired December 31, 2025. No placed-in-service exception applies to 2026 installations.</p>
            </div>
            <div className="md:col-span-2 bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="font-semibold text-amber-800 mb-1">⚠ HEAR/HOMES rebates have not launched in South Carolina</p>
              <p className="text-sm text-amber-900">South Carolina&apos;s $137 million in IRA-funded HEAR and HOMES rebates remain in development. When they launch, HEAR could cover up to <strong>$8,000</strong> for a heat pump (income-qualified, fuel-switching only). But about 71% of SC homes already heat with electricity — meaning most households will not qualify for HEAR&apos;s largest rebates because replacing an existing electric heat pump is not eligible.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Federal Expired */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Federal tax credits have expired</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <p className="text-red-900 leading-relaxed">
              <strong>Both Section 25C and Section 25D tax credits expired December 31, 2025</strong> after the One Big Beautiful Bill Act (Public Law 119-21) accelerated their termination. The IRA had originally extended these credits through 2032 and 2034 respectively. Section 25C provided up to <strong>$2,000 per year</strong> for heat pumps and heat pump water heaters. Section 25D provided <strong>30% of costs with no cap</strong> for geothermal heat pumps. Neither credit is available for equipment installed in 2026, regardless of when it was purchased or contracted.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            The operative date is when the equipment is installed, not purchased. South Carolina homeowners who contracted for a heat pump in 2025 but had it installed in 2026 receive no credit. The only exception involves Section 25D carryforward: taxpayers who earned but could not fully use a 25D credit from installations completed before January 1, 2026 may carry unused amounts forward.
          </p>
          <p className="text-gray-700 leading-relaxed">
            For full details, see our{" "}
            <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
              guide to the federal heat pump tax credit expiration
            </Link>.
          </p>
        </div>
      </section>

      {/* 5. HEAR / Primary — pending */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Home Electrification and Appliance Rebates (HEAR)</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The SC Energy Office (within the Office of Regulatory Staff) administers HEAR, which is funded through the IRA with approximately <strong>$69 million</strong> allocated to South Carolina. The program has not launched yet — SC submitted its full application in January 2025 and the program remains in development as of March 2026.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-amber-800 mb-1">⚠ Critical limitation for South Carolina</p>
            <p className="text-sm text-amber-900">About 71% of SC homes already heat with electricity. HEAR rebates do not apply to replacing an existing electric heat pump — the program targets fuel-switching from gas, propane, oil, or electric resistance (strip heat) to heat pumps. This means the majority of SC households may not qualify for HEAR&apos;s largest rebates.</p>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">HEAR rebate amounts (when program launches)</h3>
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
                <tr className="border-b">
                  <td className="p-3">Electric stove/cooktop/range/oven</td>
                  <td className="p-3 font-semibold">$840</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump clothes dryer</td>
                  <td className="p-3 font-semibold">$840</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3 font-semibold">Household cap</td>
                  <td className="p-3 font-semibold">$14,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Income eligibility</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Income tier</th>
                  <th className="text-left p-3 font-semibold">Cost coverage</th>
                  <th className="text-left p-3 font-semibold">Heat pump example</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Below 80% of Area Median Income (AMI)</td>
                  <td className="p-3 font-semibold">100% of costs</td>
                  <td className="p-3 font-semibold">Up to $8,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">80–150% AMI</td>
                  <td className="p-3 font-semibold">50% of costs</td>
                  <td className="p-3 font-semibold">Up to $4,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Above 150% AMI</td>
                  <td className="p-3 text-gray-500">Not eligible</td>
                  <td className="p-3 text-gray-500">$0</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed">
            HEAR is a point-of-sale rebate applied by contractors at purchase. It is not retroactive — projects completed before program launch do not qualify. HEAR rebates are not taxable income per IRS Announcement 2024-19. The program runs through September 30, 2031 or until funds are depleted.
          </p>
        </div>
      </section>

      {/* 6. HOMES / Secondary */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Home Efficiency Rebates (HOMES)</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            HOMES is the second IRA-funded rebate program, with approximately <strong>$68 million</strong> allocated to South Carolina. Unlike HEAR, HOMES is available to <strong>all income levels</strong> and focuses on whole-home energy savings rather than fuel-switching. This makes HOMES the more broadly applicable program for SC homeowners, since most already heat with electricity.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Income tier</th>
                  <th className="text-left p-3 font-semibold">20%+ energy savings</th>
                  <th className="text-left p-3 font-semibold">35%+ energy savings</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Below 80% AMI</td>
                  <td className="p-3 font-semibold">Up to $4,000 (80% of costs)</td>
                  <td className="p-3 font-semibold">Up to $8,000 (80% of costs)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">80–150% AMI</td>
                  <td className="p-3 font-semibold">Up to $2,000 (50% of costs)</td>
                  <td className="p-3 font-semibold">Up to $4,000 (50% of costs)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Above 150% AMI</td>
                  <td className="p-3 font-semibold">Up to $2,000 (50% of costs)</td>
                  <td className="p-3 font-semibold">Up to $4,000 (50% of costs)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            HOMES requires a home energy assessment by an approved contractor. Eligible upgrades include insulation, air sealing, HVAC systems, windows and doors, duct sealing, and smart thermostats. HOMES rebates are not taxable income. Retroactive rebates may be available under limited DOE-defined circumstances for projects completed before launch.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="font-semibold text-blue-800 mb-1">HOMES may matter more than HEAR in South Carolina</p>
            <p className="text-sm text-blue-900">Because 71% of SC homes already heat with electricity, HEAR&apos;s fuel-switching requirement disqualifies most households from its largest rebates. HOMES — which is open to all incomes and focuses on overall energy reduction — will likely be the more relevant program for the majority of South Carolina homeowners.</p>
          </div>
        </div>
      </section>

      {/* 7. Utility Programs */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Utility rebate programs</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Utility rebates are the primary active incentives for South Carolina homeowners right now. Four major utilities serve the state, each with different programs, amounts, and requirements.
          </p>
          <p className="text-sm text-gray-500 mb-6">
            Duke Energy Carolinas currently offers the highest standard rebates (up to $1,000 for strip heat conversion), while Dominion Energy SC leads on heat pump water heater incentives ($750).
          </p>

          {/* Duke Energy Carolinas */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Duke Energy Carolinas — Home Energy Improvement</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Serves upstate SC including Greenville, Spartanburg, Anderson, and Rock Hill. All rebates require completing a free Home Energy Check within 24 months prior to application. Rebate paid via prepaid Mastercard within 4–6 weeks.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Measure</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                  <th className="text-left p-3 font-semibold">Minimum efficiency</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Strip heat → heat pump (higher eff.)</td>
                  <td className="p-3 font-semibold">$1,000</td>
                  <td className="p-3">16 SEER2 / 7.5 HSPF2</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Strip heat → heat pump (high eff.)</td>
                  <td className="p-3 font-semibold">$600</td>
                  <td className="p-3">15.2 SEER2 / 7.5 HSPF2</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump replacement</td>
                  <td className="p-3 font-semibold">$500</td>
                  <td className="p-3">15.2 SEER2 / 7.5 HSPF2</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">HPWH — 50 gallon</td>
                  <td className="p-3 font-semibold">$500</td>
                  <td className="p-3">UEF ≥ 3.3, ENERGY STAR</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">HPWH — 80 gallon</td>
                  <td className="p-3 font-semibold">$800</td>
                  <td className="p-3">UEF ≥ 3.3, ENERGY STAR</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Income-qualified HVAC replacement</td>
                  <td className="p-3 font-semibold">Up to $8,000</td>
                  <td className="p-3">Below 200% FPG</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Duke Energy Progress */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Duke Energy Progress — Smart $aver</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Serves parts of the Pee Dee, Florence, and some coastal areas. Requires a Smart $aver participating contractor. Has two tiers: non-operational (broken) equipment replacement and early replacement (still working, with duct sealing).
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Measure</th>
                  <th className="text-left p-3 font-semibold">Non-operational</th>
                  <th className="text-left p-3 font-semibold">Early replacement</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">ASHP — Tier 1 (15.2 SEER2)</td>
                  <td className="p-3 font-semibold">$300</td>
                  <td className="p-3 font-semibold">$600</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">ASHP — Tier 2 (16 SEER2)</td>
                  <td className="p-3 font-semibold">$400</td>
                  <td className="p-3 font-semibold">$700</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">ASHP — Tier 3 (17+ SEER2)</td>
                  <td className="p-3 text-gray-500">—</td>
                  <td className="p-3 font-semibold">$800</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">HPWH — 50 gallon</td>
                  <td className="p-3 font-semibold">$500</td>
                  <td className="p-3 text-gray-500">—</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">HPWH — 80 gallon</td>
                  <td className="p-3 font-semibold">$800</td>
                  <td className="p-3 text-gray-500">—</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Dominion Energy SC */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Dominion Energy South Carolina — EnergyWise</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Serves the Columbia metro, Aiken, and Lowcountry areas (formerly SCE&amp;G). Application within 90 days of installation; rebate paid by check in 4–6 weeks. Ground-source heat pumps and ductless mini-splits are not eligible.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Measure</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                  <th className="text-left p-3 font-semibold">Minimum efficiency</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Electric furnace → heat pump</td>
                  <td className="p-3 font-semibold">$650</td>
                  <td className="p-3">ENERGY STAR qualified</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump — Tier 2 (16 SEER2)</td>
                  <td className="p-3 font-semibold">$500</td>
                  <td className="p-3">16.0 SEER2 / 7.2 HSPF2</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump — Tier 1 (15.2 SEER2)</td>
                  <td className="p-3 font-semibold">$400</td>
                  <td className="p-3">15.2 SEER2 / 7.2 HSPF2</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">$750</td>
                  <td className="p-3">ENERGY STAR certified</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            Dominion Energy SC has a unique rule: <strong>no fuel switching allowed</strong>. Heat pumps must replace heat pumps, and ACs must replace ACs. This is the opposite of HEAR&apos;s fuel-switching requirement, creating a situation where the two programs target different households.
          </p>

          {/* Santee Cooper */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Santee Cooper — EmpowerHome</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            South Carolina&apos;s state-owned utility serves residential customers directly in parts of Berkeley, Georgetown, and Horry counties. Also provides wholesale power to 20 electric cooperatives.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Measure</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                  <th className="text-left p-3 font-semibold">Minimum efficiency</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Ducted HP — split system</td>
                  <td className="p-3 font-semibold">$300/system</td>
                  <td className="p-3">15.2 SEER2 / 7.8 HSPF2</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Mini-split HP — Tier 1</td>
                  <td className="p-3 font-semibold">$40 per ½ ton</td>
                  <td className="p-3">15.3 SEER2 / 7.8 HSPF2</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Mini-split HP — Tier 2</td>
                  <td className="p-3 font-semibold">$80 per ½ ton</td>
                  <td className="p-3">18.4 SEER2 / 8.7 HSPF2</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">$400</td>
                  <td className="p-3">ENERGY STAR certified</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            Maximum 3 qualifying HP units per address. Trade Ally contractor required for HP installations (not required for HPWH). Santee Cooper uniquely offers <strong>low-interest loans up to $20,000</strong> for qualifying equipment, with payments added to the monthly electric bill.
          </p>

          {/* Electric Cooperatives */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Electric cooperatives</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            South Carolina&apos;s 20 distribution cooperatives set rebate programs independently. Most co-ops emphasize dual-fuel systems (heat pump plus gas furnace backup). Several participate in the <strong>Help My House</strong> on-bill financing program (5% interest, up to $12,500, funded by USDA) for whole-house efficiency including HVAC replacement.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Cooperative</th>
                  <th className="text-left p-3 font-semibold">Dual-fuel HP</th>
                  <th className="text-left p-3 font-semibold">Geothermal HP</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Palmetto Electric</td>
                  <td className="p-3 font-semibold">$700/system</td>
                  <td className="p-3 font-semibold">$200/ton (max $1,000)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Berkeley Electric</td>
                  <td className="p-3 font-semibold">$500–$1,000</td>
                  <td className="p-3 font-semibold">$250/ton (max $1,250)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Laurens Electric</td>
                  <td className="p-3 font-semibold">$1,000</td>
                  <td className="p-3 text-gray-500">—</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">York Electric</td>
                  <td className="p-3 font-semibold">$700 + $200/add&apos;l</td>
                  <td className="p-3 text-gray-500">—</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Blue Ridge Electric</td>
                  <td className="p-3 text-gray-500">—</td>
                  <td className="p-3 font-semibold">$500/ton</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Skip section 8 — no local programs in SC */}

      {/* 9. Stacking */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How incentives stack in South Carolina</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            HOMES and HEAR rebates cannot be applied to the same individual upgrade but can be strategically combined across different measures within the same home. Both can stack with utility rebates. Total combined incentives cannot exceed project cost. South Carolina has no state air-source heat pump tax credit and no state loan program for homeowners.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 150% AMI — ducted heat pump system</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>HEAR heat pump rebate: $0 (not eligible above 150% AMI)</li>
                <li>HOMES rebate (35%+ savings): up to $4,000</li>
                <li>Utility rebate (Duke Energy Carolinas): $500–$1,000</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$5,000</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">80–150% AMI — ducted heat pump + HPWH</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>HEAR heat pump rebate (fuel-switching): up to $4,000</li>
                <li>HEAR HPWH rebate: up to $875</li>
                <li>HOMES rebate (separate measures, 35%+): up to $4,000</li>
                <li>Utility rebate (Dominion Energy SC): $650 HP + $750 HPWH</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$10,275</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">Below 80% AMI — full electrification package (fuel-switching)</p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>HEAR heat pump: $8,000</li>
                <li>HEAR HPWH: $1,750</li>
                <li>HEAR electrical panel: $4,000</li>
                <li>HEAR household cap applies: $14,000</li>
                <li>HOMES (separate whole-home measures, 35%+): $8,000</li>
                <li>Utility rebate (Duke Energy Carolinas): $1,000</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$23,000</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-5 mb-4">
            <p className="font-semibold text-gray-900 mb-1">What you&apos;ll actually pay</p>
            <p className="text-sm text-gray-700">A typical heat pump installation in South Carolina costs <strong>$8,000–$15,000</strong>. With only utility rebates (the current reality), expect <strong>$7,000–$14,500 out of pocket</strong>. When HEAR/HOMES launch, income-qualified homeowners switching from fossil fuels could pay <strong>$0–$6,000</strong>. Most SC homeowners in 2026 will fall in the <strong>$7,000–$12,000</strong> range unless they qualify for future federal rebates. Pairing with <Link href="/battery" className="text-brand-600 hover:underline">a home battery</Link> or time-of-use rates can further offset ongoing energy costs.</p>
          </div>
          <p className="text-sm text-gray-500">
            South Carolina has no state air-source heat pump tax credit and no state residential loan program. The geothermal tax credit ($3,500) applies only to ground-source systems.
          </p>
        </div>
      </section>

      {/* 10. Weatherization */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Weatherization Assistance Program</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The SC Office of Economic Opportunity (OEO) administers the Weatherization Assistance Program through eight Community Action Agencies covering all 46 counties. WAP provides <strong>free</strong> insulation, air sealing, duct sealing, HVAC repair or replacement, and energy-efficient lighting to qualifying homeowners.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Eligibility requires household income at or below <strong>200% of federal poverty guidelines</strong>. SSI and TANF recipients automatically qualify. Priority goes to elderly residents (60+), persons with disabilities, families with children under 18, and high energy-burden households.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <p className="font-semibold text-green-800 mb-1">✓ Best candidates for SC incentives in 2026</p>
            <p className="text-sm text-green-900">Homes switching from gas, propane, or electric resistance (strip heat) to a heat pump. Low-income households below 200% FPG (WAP) or below 150% AMI (HEAR, when it launches). Duke Energy Carolinas customers in the Upstate (highest standard rebates). Geothermal system installers (state tax credit still active).</p>
          </div>
        </div>
      </section>

      {/* 11. Climate */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">South Carolina climate and heat pump performance</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            All 46 South Carolina counties fall within IECC Climate Zone 3A (Warm-Humid). The state is cooling-dominant along the coast and approaches mixed climate in the Upstate, but standard air-source heat pumps handle both conditions well. Cold-climate heat pump ratings are unnecessary in South Carolina — even Greenville&apos;s design temperature of ~19°F is far above the ~5°F threshold where cold-climate models become relevant.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">ASHRAE design temperatures</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">City</th>
                  <th className="text-left p-3 font-semibold">99% heating (°F)</th>
                  <th className="text-left p-3 font-semibold">1% cooling (°F)</th>
                  <th className="text-left p-3 font-semibold">Climate type</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Charleston</td>
                  <td className="p-3">28–30</td>
                  <td className="p-3">93</td>
                  <td className="p-3">Cooling-dominant</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Columbia</td>
                  <td className="p-3">24–26</td>
                  <td className="p-3">96–97</td>
                  <td className="p-3">Cooling-dominant</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Greenville</td>
                  <td className="p-3">22–24</td>
                  <td className="p-3">93–94</td>
                  <td className="p-3">Mixed, near-balanced</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Myrtle Beach</td>
                  <td className="p-3">27–29</td>
                  <td className="p-3">92–93</td>
                  <td className="p-3">Cooling-dominant</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            About <strong>71% of South Carolina homes already heat with electricity</strong>, followed by utility gas (23%) and propane (3.5%). Dual-fuel systems (heat pump plus gas furnace backup) are popular in the Upstate but reflect historical practice more than thermal necessity — a high-efficiency heat pump (16+ SEER2, 9+ HSPF2) handles 95%+ of SC heating hours without backup.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Pairing a heat pump with a <Link href="/battery" className="text-brand-600 hover:underline">home battery system</Link> can further reduce energy costs, especially for homeowners on time-of-use rates or with solar panels.
          </p>
        </div>
      </section>

      {/* 12. How to Apply */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to apply for South Carolina heat pump rebates</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The process varies by utility. For most SC homeowners, the utility rebate is the only active incentive right now. Here&apos;s the general process for Duke Energy Carolinas (the largest provider in the state):
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-gray-900">Schedule a free Home Energy Check</p>
                <p className="text-sm text-gray-700">Duke Energy Carolinas requires a home energy assessment within 24 months before applying for HVAC rebates. Dominion Energy SC and Santee Cooper do not require a pre-assessment.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900">Get quotes from qualified contractors</p>
                <p className="text-sm text-gray-700">Confirm equipment meets the minimum efficiency requirements for your utility (typically 15.2+ SEER2 / 7.2+ HSPF2). Duke Energy Progress requires a Smart $aver participating contractor. Santee Cooper requires a Trade Ally contractor.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-900">Install the equipment and submit your rebate application</p>
                <p className="text-sm text-gray-700">Filing deadlines vary: Duke Energy Carolinas allows 12 months after installation, Dominion Energy SC requires 90 days, and Santee Cooper requires 30 business days. Your contractor may submit on your behalf depending on the program.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <p className="font-semibold text-gray-900">Receive your rebate</p>
                <p className="text-sm text-gray-700">Duke Energy pays via prepaid Mastercard in 4–6 weeks. Dominion Energy pays by check in 4–6 weeks. Santee Cooper pays by check in 6–8 weeks.</p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="font-semibold text-amber-800 mb-1">⚠ Common mistake: assuming Dominion allows fuel switching</p>
            <p className="text-sm text-amber-900">Dominion Energy SC requires that new equipment match the type being replaced — heat pumps must replace heat pumps, ACs must replace ACs. If you&apos;re switching from a gas furnace to a heat pump in Dominion territory, the utility rebate does not apply. Wait for HEAR instead, or check if your cooperative offers fuel-switching incentives.</p>
          </div>
        </div>
      </section>

      {/* 13. What to Watch */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to watch in South Carolina</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">HEAR/HOMES launch date</p>
              <p className="text-sm text-gray-600 mt-1">South Carolina&apos;s $137 million in IRA-funded rebates are still in development. When they launch, income-qualified homeowners switching from fossil fuels could access up to $14,000 in HEAR rebates plus HOMES rebates. Monitor energy.sc.gov/rebates for updates.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">IRA funding runway</p>
              <p className="text-sm text-gray-600 mt-1">The One Big Beautiful Bill Act rescinded some unobligated IRA funds. South Carolina&apos;s HEAR/HOMES allocations were already obligated to the state but final disbursement and program design may be affected by federal policy changes. Programs are currently authorized through September 30, 2031.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Duke Energy SC incentive changes</p>
              <p className="text-sm text-gray-600 mt-1">Duke Energy increased SC rebates effective August 2025 with SC Public Service Commission approval. Further changes are possible as Duke files updated demand-side management plans. Income-qualified programs (up to $8,000) could expand.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">SC geothermal credit sunset</p>
              <p className="text-sm text-gray-600 mt-1">The SC geothermal tax credit (25%, up to $3,500) is currently authorized through 2032. With federal 25D credits gone, this state credit is now the only remaining tax-based incentive for geothermal installations in South Carolina.</p>
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

      {/* 15. See Also */}
      <section className="py-8 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-3">See also</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/heat-pumps/states/ga" className="text-brand-600 hover:underline">
                Georgia Heat Pump Rebates
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/va" className="text-brand-600 hover:underline">
                Virginia Heat Pump Rebates
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/nc" className="text-brand-600 hover:underline">
                North Carolina Heat Pump Rebates 2026
              </Link>
            </li>
            <li>
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                Federal Heat Pump Tax Credits Ended — What to Know
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
            {scIncentive.sources.map((source: { label: string; url: string }, index: number) => (
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
              <strong>Disclaimer:</strong> This page covers the main statewide,
              utility, and IRA heat pump incentives available to South Carolina
              homeowners in 2026. It does not calculate savings, guarantee
              eligibility, or represent any incentive program. Electric cooperative rebates vary by co-op and may change without notice — contact your cooperative directly for current offers.
              We verify status regularly but programs can change
              without notice. Always confirm current amounts and eligibility with
              the SC Energy Office, your utility provider, and your contractor before making decisions.
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
