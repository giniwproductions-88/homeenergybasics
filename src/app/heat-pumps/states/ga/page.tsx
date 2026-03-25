import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Georgia Heat Pump Rebates 2026: Up to $8,000 HEAR + Georgia Power HEIP | Home Energy Basics",
  description:
    "HEAR offers up to $8,000 for heat pumps. Georgia Power covers up to $1,000. Federal tax credits ended. Here\u2019s every Georgia heat pump incentive in 2026.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/ga",
  },
  openGraph: {
    title: "Georgia Heat Pump Rebates 2026",
    description:
      "HEAR rebates up to $8,000, Georgia Power HEIP up to $1,000, EMC rebates $100\u2013$600 \u2014 the complete guide to Georgia heat pump incentives after federal credits expired.",
    url: "https://homeenergybasics.com/heat-pumps/states/ga",
    type: "article",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What heat pump rebates are available in Georgia in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Georgia\u2019s main heat pump rebates in 2026 come from the IRA-funded HEAR program (up to $8,000 for households at or below 150% AMI), the HER whole-home program (up to $4,000 for above-median-income or up to $16,000 for low-income households), Georgia Power\u2019s HEIP rebate (up to $1,000), and EMC rebates ranging from $100 to $600 depending on the cooperative. Federal Section 25C and 25D tax credits expired December 31, 2025.",
      },
    },
    {
      "@type": "Question",
      name: "Can I stack HEAR, HER, and utility rebates in Georgia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, but not on the same upgrade. GEFA allows stacking HER and HEAR with utility rebates (Georgia Power HEIP or EMC rebates) as long as each program covers a different improvement. You cannot combine HEAR and HER on the same piece of equipment. A low-income household could use HEAR for a heat pump and a utility rebate for a heat pump water heater, for example.",
      },
    },
    {
      "@type": "Question",
      name: "Does Georgia\u2019s climate work well for heat pumps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Georgia is one of the best states in the country for heat pump performance. Atlanta\u2019s winter design temperature is 21.7\u00b0F, meaning outdoor temperatures rarely drop below levels where standard heat pumps lose efficiency. Georgia\u2019s cooling-dominant climate means high-SEER2 heat pumps deliver outsized savings across a five-to-seven-month cooling season.",
      },
    },
    {
      "@type": "Question",
      name: "Who administers Georgia\u2019s HEAR and HER rebate programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Georgia Environmental Finance Authority (GEFA) administers both the HEAR and HER programs through its Division of Energy Resources. Applications are processed through energyrebates.georgia.gov, and all projects require a GEFA-approved contractor. The helpline is (877) 348-5237.",
      },
    },
    {
      "@type": "Question",
      name: "Do I qualify for HEAR if I\u2019m replacing an existing electric furnace?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Generally no. HEAR requires a Qualified Electrification Project, meaning the upgrade must be first-time electrification or replace a non-electric appliance. Replacing a gas furnace with a heat pump qualifies. Replacing an existing electric furnace with a heat pump does not qualify under HEAR. However, you may still qualify for HER whole-home rebates if the project achieves at least 20% modeled energy savings.",
      },
    },
  ],
};

export default function GeorgiaPage() {
  const gaIncentive = incentives.GA;
  const formattedDate = formatDate(gaIncentive.lastVerified);
  const sources = gaIncentive.sources;

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
            {" "}/ Georgia
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Georgia heat pump rebates and incentives in 2026
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Georgia homeowners can still access <strong>$4,000 to $14,000+</strong> in heat pump rebates in 2026 {"\u2014"} but the landscape shifted after federal tax credits expired. The main incentives now come from Georgia&apos;s IRA-funded HEAR and HER programs, plus utility rebates from Georgia Power and the state&apos;s EMCs. This guide covers all major Georgia heat pump incentives available in 2026, including HEAR, HER, Georgia Power HEIP, and EMC programs. Here&apos;s what&apos;s actually available {"\u2014"} and what you&apos;ll realistically get after rebates.
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
          <StatusCard incentive={gaIncentive} />
        </div>
      </section>

      {/* 3. SHORT VERSION */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The short version</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ HEAR rebates up to $8,000</p>
              <p className="text-sm text-green-900">The Home Electrification and Appliance Rebates program covers up to <strong>$8,000</strong> for a heat pump, applied at point of sale. Households at or below 80% of Area Median Income (AMI) receive up to 100% of costs. Households at 80{"\u2013"}150% AMI receive up to 50%.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ HER whole-home rebates up to $16,000</p>
              <p className="text-sm text-green-900">The Home Efficiency Rebates program rewards whole-home energy reductions. All income levels qualify: up to <strong>$4,000</strong> for above-median-income households, up to <strong>$16,000</strong> for low-income households achieving 35%+ energy savings.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Total potential: $4,000{"\u2013"}$18,000+</p>
              <p className="text-sm text-green-900"><strong>$4,000{"\u2013"}$6,000</strong> (above 150% AMI) to <strong>$12,000{"\u2013"}$18,000+</strong> (below 80% AMI). Utility rebates add another <strong>$100{"\u2013"}$1,000</strong> depending on your provider. Full electrification packages combining HEAR, HER, and utility rebates can reach ~$18,000 total incentives.</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">✗ Federal tax credits expired</p>
              <p className="text-sm text-red-900">Both Section 25C ($2,000/year for heat pumps) and Section 25D (30% for geothermal) expired December 31, 2025 under the One Big Beautiful Bill Act. No replacement has been enacted.</p>
            </div>
            <div className="md:col-span-2 bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="font-semibold text-amber-800 mb-1">⚠ HEAR only covers households at or below 150% AMI</p>
              <p className="text-sm text-amber-900">Households above 150% AMI are not eligible for HEAR. The HER program is the primary incentive for higher-income homeowners, but requires a whole-home approach with documented energy savings {"\u2014"} not a standalone equipment swap.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEDERAL EXPIRED */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Federal tax credits have expired</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <p className="text-red-900 leading-relaxed">
              <strong>Both Section 25C and Section 25D federal tax credits expired on December 31, 2025.</strong> The One Big Beautiful Bill Act (signed July 4, 2025) terminated these credits seven years ahead of their original 2032 sunset. Section 25C had provided up to <strong>$2,000/year</strong> for air-source heat pumps. Section 25D had provided <strong>30% with no cap</strong> for geothermal heat pumps. Neither is available for systems installed in 2026 or later. <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">Read more about what changed</Link>.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            The &quot;placed in service&quot; rule is critical for Georgia homeowners in the transition period. Per IRS guidance, the <strong>installation date</strong> {"\u2014"} not the payment date {"\u2014"} controls eligibility. A heat pump installed before December 31, 2025 but paid for in January 2026 qualifies for the 2025 credit. A heat pump paid for in 2025 but installed in 2026 does not. Section 25D does permit carryforward of unused credit amounts to future tax years.
          </p>
        </div>
      </section>

      {/* 5. HEAR (PRIMARY) */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Home Electrification and Appliance Rebates (HEAR)</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            HEAR provides <strong>point-of-sale rebates</strong> {"\u2014"} the discount is applied at purchase through a GEFA-approved contractor, not claimed on taxes later. Only households earning at or below 150% of Area Median Income (AMI) qualify. The Georgia Environmental Finance Authority (GEFA) administers the program through <a href="https://energyrebates.georgia.gov" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">energyrebates.georgia.gov</a>.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">HEAR rebate amounts</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Maximum rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Heat pump (space heating/cooling)</td>
                  <td className="p-3 font-semibold">$8,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">$1,750</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Electric stove, cooktop, range, or heat pump dryer</td>
                  <td className="p-3 font-semibold">$840</td>
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
                  <td className="p-3 font-semibold">Maximum total per household</td>
                  <td className="p-3 font-semibold">$14,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Income tiers</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Households at or below 80% AMI receive up to <strong>100% of project costs</strong>. Households between 80{"\u2013"}150% AMI receive up to <strong>50% of costs</strong>. Households above 150% AMI are <strong>not eligible</strong> for HEAR.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="font-semibold text-amber-800 mb-1">⚠ Common mistake: HEAR requires electrification</p>
            <p className="text-sm text-amber-900">HEAR generally requires a Qualified Electrification Project {"\u2014"} the upgrade must be first-time electrification or replace a non-electric appliance. Replacing a gas furnace with a heat pump qualifies. Replacing an existing electric furnace with a heat pump does not qualify under HEAR. All products must be ENERGY STAR-certified.</p>
          </div>
        </div>
      </section>

      {/* 6. HER (SECONDARY) */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Home Efficiency Rebates (HER)</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            HER takes a whole-home, performance-based approach. Unlike HEAR, <strong>all income levels qualify</strong> {"\u2014"} but rebate amounts vary by income. Projects must achieve a minimum <strong>20% modeled or measured energy reduction</strong> through qualifying improvements. All HER projects require a BPI-certified, GEFA-approved contractor who performs energy modeling.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">HER rebate amounts by income</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Income tier</th>
                  <th className="text-left p-3 font-semibold">{"\u2265"}20% energy savings</th>
                  <th className="text-left p-3 font-semibold">{"\u2265"}35% energy savings</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">At or below 80% AMI</td>
                  <td className="p-3 font-semibold">Up to $10,000</td>
                  <td className="p-3 font-semibold">Up to $16,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Above 80% AMI</td>
                  <td className="p-3 font-semibold">Up to $4,000</td>
                  <td className="p-3 font-semibold">Up to $4,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Eligible improvements include heat pump HVAC, heat pump water heaters, insulation, air sealing, duct sealing, and window/door upgrades. A single household can use both HEAR and HER {"\u2014"} but <strong>not for the same upgrade</strong>.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="font-semibold text-blue-800 mb-1">HER is the key program for above-median-income homeowners</p>
            <p className="text-sm text-blue-900">With federal credits gone and HEAR limited to households below 150% AMI, HER is now the single most valuable tool for higher-income Georgia homeowners. The tradeoff: it requires a whole-home approach with documented energy savings rather than a simple equipment swap. Pair a heat pump with insulation and air sealing to hit the 20% savings threshold.</p>
          </div>
        </div>
      </section>

      {/* 7. UTILITY PROGRAMS */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Utility rebates: Georgia Power and EMCs</h2>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Georgia Power {"\u2014"} Home Energy Improvement Program (HEIP)</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Georgia Power, the state&apos;s largest utility serving roughly 2.7 million customers, offers rebates at <strong>50% of installed cost</strong> up to the listed cap. Applications must be submitted within 60 days of the paid-in-full invoice. Equipment must be ENERGY STAR-certified.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Improvement</th>
                  <th className="text-left p-3 font-semibold">HEIP rebate (50% of cost, up to cap)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Air-source heat pump conversion</td>
                  <td className="p-3 font-semibold">Up to $1,000</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Mini-split heat pump</td>
                  <td className="p-3 font-semibold">Up to $1,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ground-source heat pump</td>
                  <td className="p-3 font-semibold">Up to $300</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">Up to $1,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Home Comfort Bundle (insulation + air sealing + duct sealing)</td>
                  <td className="p-3 font-semibold">Up to $1,250</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">EMC rebates across Georgia&apos;s cooperatives</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Georgia&apos;s 41 Electric Membership Cooperatives serve roughly 4 million residents, primarily in suburban and rural areas. Rebate programs differ significantly by cooperative. No consolidated statewide EMC rebate list exists.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">EMC</th>
                  <th className="text-left p-3 font-semibold">Heat pump rebate</th>
                  <th className="text-left p-3 font-semibold">HPWH rebate</th>
                  <th className="text-left p-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Jackson EMC</td>
                  <td className="p-3 font-semibold">$400</td>
                  <td className="p-3 font-semibold">$500</td>
                  <td className="p-3">Min 15.2 SEER2, total electric only</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">GreyStone Power</td>
                  <td className="p-3 font-semibold">$300{"\u2013"}$600</td>
                  <td className="p-3 font-semibold">$200{"\u2013"}$400</td>
                  <td className="p-3">Gas-to-electric conversion only</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Sawnee EMC</td>
                  <td className="p-3 font-semibold">$100/ton</td>
                  <td className="p-3 font-semibold">$200</td>
                  <td className="p-3">Min 16.2 SEER2, load mgmt required</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Central Georgia EMC</td>
                  <td className="p-3 font-semibold">$200{"\u2013"}$400</td>
                  <td className="p-3 text-gray-500">{"\u2014"}</td>
                  <td className="p-3">Min 14.3 SEER2, no dual fuel</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Walton EMC</td>
                  <td className="p-3 font-semibold">$200</td>
                  <td className="p-3 font-semibold">$200</td>
                  <td className="p-3">Fossil fuel conversion only</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Cobb EMC</td>
                  <td className="p-3 font-semibold">$500</td>
                  <td className="p-3 text-gray-500">{"\u2014"}</td>
                  <td className="p-3">General energy efficiency incentive, once per 5 years</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Coweta-Fayette EMC</td>
                  <td className="p-3 font-semibold">$100</td>
                  <td className="p-3 font-semibold">$250</td>
                  <td className="p-3">SmartChoice Home Program</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Marietta Power</td>
                  <td className="p-3 font-semibold">$150{"\u2013"}$500</td>
                  <td className="p-3 font-semibold">$250</td>
                  <td className="p-3">Gas-to-electric conversion; $500 for bundled HVAC + water heater</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">
            Contact your EMC directly for current program details. Rebate amounts and eligibility can change without notice.
          </p>
        </div>
      </section>

      {/* 8. LOCAL PROGRAMS — SKIPPED: No Georgia city or county runs a direct heat pump rebate */}

      {/* 9. STACKING */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How programs stack in Georgia</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Per GEFA&apos;s official FAQ, state HER and HEAR rebates <strong>can be combined with utility rebates</strong> (Georgia Power HEIP or EMC programs), but not for the same single upgrade. Different upgrades within the same home can draw from different programs. HER and HEAR cannot be combined on the same upgrade either. These rebates are treated as purchase price reductions {"\u2014"} <strong>not taxable income</strong>.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 150% AMI {"\u2014"} ducted heat pump + insulation</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>HER whole-home rebate (20%+ energy savings): up to $4,000</li>
                <li>Georgia Power HEIP heat pump water heater: up to $1,000</li>
                <li>Georgia Power Home Comfort Bundle: up to $1,250</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$5,000{"\u2013"}$6,000</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">80{"\u2013"}150% AMI {"\u2014"} gas-to-heat-pump conversion + water heater</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>HEAR heat pump rebate (50% of cost): up to $8,000</li>
                <li>Georgia Power HEIP heat pump water heater: up to $1,000</li>
                <li>HER (additional insulation/air sealing): up to $4,000</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$8,000{"\u2013"}$12,000</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">Below 80% AMI {"\u2014"} full electrification package</p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>HEAR heat pump rebate (100% of cost): up to $8,000</li>
                <li>HEAR heat pump water heater: up to $1,750</li>
                <li>HEAR electrical panel + wiring: up to $6,500</li>
                <li>Georgia Power HEIP Home Comfort Bundle: up to $1,250</li>
                <li>HER whole-home (additional measures, 35%+ savings): up to $16,000</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$12,000{"\u2013"}$18,000+</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-5">
            <p className="font-semibold text-gray-900 mb-1">What you&apos;ll actually pay</p>
            <p className="text-sm text-gray-700">On a <strong>$12,000{"\u2013"}$18,000</strong> whole-home heat pump project, expect to pay <strong>$0{"\u2013"}$6,000 out of pocket</strong> if below 80% AMI, <strong>$4,000{"\u2013"}$10,000</strong> at 80{"\u2013"}150% AMI, or <strong>$7,000{"\u2013"}$14,000</strong> above 150% AMI. Georgia has no state tax credit or state loan program to fill the gap for higher-income households.</p>
          </div>
        </div>
      </section>

      {/* 10. WEATHERIZATION */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Weatherization Assistance Program</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Georgia&apos;s Weatherization Assistance Program (WAP), also administered by GEFA through local Community Action Agencies, provides <strong>free</strong> energy efficiency improvements to households earning at or below 200% of the federal poverty level. The program can include heat pump installation {"\u2014"} GEFA received a <strong>$7.5 million DOE grant</strong> in 2024 specifically for clean energy technology including heat pumps.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Services include energy audits, insulation, air/duct sealing, and HVAC improvements at no cost to the homeowner. Waiting lists may exist due to high demand. Apply through your local Community Action Agency.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <p className="font-semibold text-green-800 mb-1">✓ Best candidates for Georgia heat pump rebates</p>
            <p className="text-sm text-green-900">Homeowners replacing gas furnaces or propane heating (HEAR-eligible electrification), households below 80% AMI (100% cost coverage through HEAR), Georgia Power customers doing bundled projects (HEIP + HER stacking), and anyone in EMC territory with an aging electric resistance system (lower bills plus EMC rebates).</p>
          </div>
        </div>
      </section>

      {/* 11. CLIMATE */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Georgia&apos;s climate and heat pump performance</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Georgia sits in IECC Climate Zones 2A (southern/coastal) and 3A (northern/Atlanta metro) {"\u2014"} a mixed-humid, cooling-dominant climate where heat pumps deliver exceptional year-round performance. Cold-climate heat pumps are unnecessary for the vast majority of Georgia.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">ASHRAE design temperatures</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">City</th>
                  <th className="text-left p-3 font-semibold">Winter design (99.6%)</th>
                  <th className="text-left p-3 font-semibold">Summer design (0.4%)</th>
                  <th className="text-left p-3 font-semibold">IECC zone</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Atlanta</td>
                  <td className="p-3 font-semibold">21.7°F</td>
                  <td className="p-3">93.7°F</td>
                  <td className="p-3">3A</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Augusta</td>
                  <td className="p-3 font-semibold">~23°F</td>
                  <td className="p-3">~98°F</td>
                  <td className="p-3">3A</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Savannah</td>
                  <td className="p-3 font-semibold">~27°F</td>
                  <td className="p-3">~96°F</td>
                  <td className="p-3">2A</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Atlanta&apos;s winter design temperature of <strong>21.7°F</strong> means outdoor air drops below that level for fewer than 35 hours per year. A standard ENERGY STAR heat pump maintains strong efficiency at 25{"\u2013"}35°F, covering well over 99% of Georgia&apos;s heating hours. The cooling season runs five to seven months, meaning <strong>high SEER2 ratings generate outsized savings</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Variable-speed (inverter-driven) heat pumps are strongly recommended for Georgia&apos;s humid climate. They run at lower speeds for longer periods, pulling more moisture from the air {"\u2014"} critical for comfort in a state where latent humidity loads are substantial. The federal minimum for the Southeast is <strong>14.3 SEER2</strong> and <strong>7.5 HSPF2</strong> for split-system heat pumps.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Per the 2020 EIA Residential Energy Consumption Survey, Georgia homes split nearly evenly between natural gas (47%) and electricity (46%), with propane at 5%. Metro Atlanta heavily favors natural gas. Rural and coastal areas rely more on electric resistance heating and propane. If you&apos;re also considering battery storage, see our <Link href="/battery" className="text-brand-600 hover:underline">guide to home batteries in 2026</Link>.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="font-semibold text-blue-800 mb-1">Georgia&apos;s climate is the hidden subsidy</p>
            <p className="text-sm text-blue-900">Heat pumps in Georgia operate near peak efficiency for the vast majority of hours, delivering both heating and cooling savings in a state where every home needs air conditioning. The payback period is shorter than in most of the country even with reduced incentives.</p>
          </div>
        </div>
      </section>

      {/* 12. HOW TO APPLY */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to apply for Georgia heat pump rebates</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-gray-900">Check income eligibility</p>
                <p className="text-sm text-gray-700">Visit <a href="https://energyrebates.georgia.gov" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">energyrebates.georgia.gov</a> to determine your AMI tier. HEAR requires household income at or below 150% AMI. HER is open to all income levels.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900">Find a GEFA-approved contractor</p>
                <p className="text-sm text-gray-700">Both HEAR and HER require a contractor registered with GEFA. The approved contractor list is available on the energyrebates.georgia.gov portal. HER additionally requires a BPI-certified contractor for energy modeling.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-900">Get a quote with eligible equipment</p>
                <p className="text-sm text-gray-700">Your contractor will confirm ENERGY STAR certification and, for HEAR, that the project qualifies as electrification. For HER, the contractor performs a Manual J load calculation and energy model to project savings.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <p className="font-semibold text-gray-900">Complete the project and claim rebates</p>
                <p className="text-sm text-gray-700">HEAR rebates are applied at point of sale through the contractor. HER rebates require post-installation verification. Apply for utility rebates (Georgia Power HEIP or your EMC) separately after installation {"\u2014"} Georgia Power requires submission within 60 days.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. WHAT TO WATCH */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to watch for</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">IRA funding runway</p>
              <p className="text-sm text-gray-600 mt-1">Georgia&apos;s HEAR and HER programs are funded through September 2031 or until funds are exhausted. However, future Congressional action could modify IRA appropriations. Once funding runs out, these rebates end with no guarantee of renewal.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">GEFA contractor availability</p>
              <p className="text-sm text-gray-600 mt-1">Both HEAR and HER require GEFA-approved contractors. As demand increases, scheduling may take longer. Getting on a contractor&apos;s calendar early {"\u2014"} especially before summer cooling season {"\u2014"} improves your timeline.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">EMC program changes</p>
              <p className="text-sm text-gray-600 mt-1">EMC rebate programs are set by each cooperative&apos;s board independently. Amounts, eligibility rules, and program availability can change at any board meeting. Verify current terms with your EMC before committing to a project.</p>
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
              <Link href="/heat-pumps/states/nc" className="text-brand-600 hover:underline">
                North Carolina Heat Pump Rebates
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/fl" className="text-brand-600 hover:underline">
                Florida Heat Pump Rebates
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/al" className="text-brand-600 hover:underline">
                Alabama Heat Pump Rebates
              </Link>
            </li>
            <li>
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                Federal Heat Pump Tax Credits {"\u2014"} What Changed
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
              <strong>Disclaimer:</strong> This page covers the main statewide, utility, and IRA heat pump incentives available to Georgia homeowners in 2026. It does not calculate savings, guarantee eligibility, or represent any incentive program. Georgia&apos;s 41 EMCs each set their own rebate terms independently; we cover the largest cooperatives but cannot list every program. We verify status regularly but programs can change without notice. Always confirm current amounts and eligibility with GEFA, Georgia Power, your EMC, and your contractor before making decisions.
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
