import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Alabama Heat Pump Rebates 2026: $500–$1,500 TVA + Alabama Power | Home Energy Basics",
  description:
    "TVA EnergyRight offers $500–$1,500. Alabama Power covers $1,000 for gas-to-electric. Federal tax credits ended. Every Alabama heat pump incentive in 2026.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/al",
  },
  openGraph: {
    title: "Alabama Heat Pump Rebates 2026",
    description:
      "TVA EnergyRight $500–$1,500, Alabama Power $1,000 gas-to-electric, co-op rebates $300–$400/ton — the complete guide to Alabama heat pump incentives after federal credits expired.",
    url: "https://homeenergybasics.com/heat-pumps/states/al",
    type: "article",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What heat pump rebates are available in Alabama in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alabama has no statewide heat pump rebate program. The main incentives come from utilities: TVA EnergyRight offers $500–$1,500 for qualifying heat pumps in northern Alabama, Alabama Power offers $1,000 for gas-to-electric conversions statewide, and rural electric cooperatives offer approximately $300–$400 per ton. Federal tax credits (Sections 25C and 25D) expired December 31, 2025. Alabama\u2019s IRA-funded HEAR rebates have not launched yet.",
      },
    },
    {
      "@type": "Question",
      name: "Can I stack TVA EnergyRight and Alabama Power rebates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. TVA EnergyRight and Alabama Power serve different territories — you cannot be a customer of both for the same home. You can stack your utility rebate with future HEAR rebates once Alabama launches that program. TVA customers can combine heat pump, water heater, insulation, and duct sealing rebates on the same project for up to roughly $2,100 total.",
      },
    },
    {
      "@type": "Question",
      name: "Does Alabama\u2019s climate work well for heat pumps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alabama is one of the best states in the country for heat pumps. Most of the state falls in IECC Climate Zone 3A (warm-humid) with mild winters. Heating design temperatures range from about 14\u00b0F in Huntsville to 29\u00b0F in Mobile. Standard air-source heat pumps perform efficiently year-round. Cold-climate models are not required but can eliminate backup heat needs during rare cold snaps in northern Alabama.",
      },
    },
    {
      "@type": "Question",
      name: "Who administers heat pump rebate programs in Alabama?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alabama Power administers its own rebate program for customers in central and southern Alabama. TVA EnergyRight manages rebates through local distributors like Huntsville Utilities and Joe Wheeler EMC in northern Alabama. Rural electric cooperatives run independent programs. The Alabama Department of Economic and Community Affairs (ADECA) is the designated administrator for future IRA-funded HEAR and HOMES rebates.",
      },
    },
    {
      "@type": "Question",
      name: "When will Alabama launch HEAR rebates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As of March 2026, ADECA has not announced a launch date for Alabama\u2019s Home Electrification and Appliance Rebates (HEAR) program. The program remains under development. When launched, HEAR could provide up to $8,000 per heat pump for households below 80% of Area Median Income. Sign up for notifications at rebates@adeca.alabama.gov.",
      },
    },
  ],
};

export default function AlabamaPage() {
  const alIncentive = incentives.AL;
  const formattedDate = formatDate(alIncentive.lastVerified);

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
            {" "}/ Alabama
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Alabama Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Alabama has no statewide heat pump rebate, but utility programs still
            offer <strong>$500–$1,500</strong> through TVA EnergyRight in
            northern Alabama and <strong>$1,000</strong> through Alabama Power
            for gas-to-electric conversions. Federal tax credits ended December 31,
            2025, and the state&apos;s IRA-funded rebate programs have not launched.
            This guide covers all major Alabama heat pump incentives available in
            2026, including TVA EnergyRight, Alabama Power, and rural electric
            cooperative rebates. Here&apos;s what&apos;s actually available.
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
          <StatusCard incentive={alIncentive} />
        </div>
      </section>

      {/* 3. Short Version */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The short version</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ TVA EnergyRight: $500–$1,500</p>
              <p className="text-sm text-green-900">
                Northern Alabama residents served by TVA distributors can claim
                $500–$1,500 for qualifying heat pumps, plus $900 for heat pump
                water heaters. The $1,500 &quot;Preferred&quot; tier requires a
                variable-speed system rated 15.2+ SEER2 and 8.1+ HSPF2.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Alabama Power: $1,000 gas-to-electric</p>
              <p className="text-sm text-green-900">
                Alabama Power customers replacing a gas furnace with a heat pump
                can claim a $1,000 rebate. Requires 18+ SEER2. Does not apply to
                replacing an existing electric system. Also offers $600 for heat
                pump water heaters converting from gas.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Total potential savings: $1,200–$15,700</p>
              <p className="text-sm text-green-900">
                $1,200 (above 150% AMI, Alabama Power territory) to $2,100
                (above 150% AMI, TVA territory). When HEAR launches,
                income-qualified households below 80% AMI could reach ~$15,700
                in total incentives. Rural co-ops add $900–$1,200 for a
                typical 3-ton system.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">✗ Federal tax credits expired</p>
              <p className="text-sm text-red-900">
                Both the Section 25C credit (up to $2,000/year for heat pumps) and
                Section 25D credit (30% for geothermal) ended December 31, 2025.
                No replacement legislation has been introduced.
              </p>
            </div>
            <div className="md:col-span-2 bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="font-semibold text-amber-800 mb-1">⚠ Alabama&apos;s HEAR rebates have not launched</p>
              <p className="text-sm text-amber-900">
                The IRA&apos;s Home Electrification and Appliance Rebates (HEAR)
                program could provide up to $8,000 per heat pump for
                income-qualified households, but ADECA has not set a launch date.
                Alabama is one of the last states to bring this program online.
                Sign up for updates at rebates@adeca.alabama.gov.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Federal Expired */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Federal tax credits are gone
          </h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <p className="text-red-900 leading-relaxed">
              The <strong>Section 25C Energy Efficient Home Improvement Credit</strong> and
              the <strong>Section 25D Residential Clean Energy Credit</strong> both
              expired December 31, 2025, under the One Big Beautiful Bill Act (P.L. 119-21).
              Heat pumps installed in 2026 receive <strong>no federal tax credit</strong>.
              Equipment purchased in 2025 but installed in 2026 does not qualify. The only
              exception: unused 25D credits from prior years can still be carried forward
              on your tax return. The 25C credit cannot be carried forward.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Before expiration, Section 25C provided <strong>30% of costs up to $2,000 per
            year</strong> for qualifying air-source heat pumps, and Section 25D covered{" "}
            <strong>30% of total installed cost with no annual cap</strong> for geothermal
            heat pump systems. No legislation to restore either credit has been introduced.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
              Full details on what changed with federal heat pump tax credits →
            </Link>
          </p>
        </div>
      </section>

      {/* 5. HEAR/HOMES (both pending — combined) */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            IRA rebates: HEAR and HOMES not yet available
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Inflation Reduction Act created two rebate programs that survived
            the OBBBA — the Home Electrification and Appliance Rebates (HEAR) and
            the Home Efficiency Rebates (HOMES). Both are funded through 2031, but{" "}
            <strong>Alabama has not launched either program</strong>. The Alabama
            Department of Economic and Community Affairs (ADECA) is the designated
            administrator.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            HEAR (when launched)
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            HEAR provides point-of-sale rebates (not tax credits) and the amounts
            are not taxable income. For heat pumps specifically:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Income tier</th>
                  <th className="text-left p-3 font-semibold">Heat pump rebate</th>
                  <th className="text-left p-3 font-semibold">Cost coverage</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Below 80% AMI</td>
                  <td className="p-3 font-semibold">Up to $8,000</td>
                  <td className="p-3">100% of project costs</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">80–150% AMI</td>
                  <td className="p-3 font-semibold">Up to $4,000</td>
                  <td className="p-3">50% of project costs</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-gray-500">Above 150% AMI</td>
                  <td className="p-3 text-gray-500">—</td>
                  <td className="p-3 text-gray-500">Not eligible</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            Additional HEAR rebates include up to <strong>$1,750</strong> for heat
            pump water heaters, up to <strong>$4,000</strong> for electrical panel
            and wiring upgrades, and up to <strong>$1,600</strong> for insulation
            and air sealing. The total household cap is <strong>$14,000</strong>.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            HOMES (when launched)
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            The HOMES program provides whole-home rebates based on verified energy
            savings: up to <strong>$8,000</strong> for low-income households
            achieving 35%+ energy reduction, and up to <strong>$4,000</strong> for
            moderate-income households at the same threshold.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="font-semibold text-amber-800 mb-1">⚠ No launch date set</p>
            <p className="text-sm text-amber-900">
              ADECA issued an RFP for a program implementation consultant in late
              2024, but the program remains in the planning phase. As of early 2026,
              23 states have launched HEAR programs — Alabama is not among them. Sign
              up for notifications at rebates@adeca.alabama.gov or call 334-353-3004.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Alabama Power */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Alabama Power rebates
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Alabama Power serves approximately <strong>1.5 million customers</strong> across
            Birmingham, Montgomery, Mobile, Tuscaloosa, and most of southern and central
            Alabama. Its rebate program is exclusively a gas-to-electric fuel-switching
            incentive — customers replacing an existing electric system with a new heat pump
            do not qualify.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                  <th className="text-left p-3 font-semibold">Key requirements</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Air-source heat pump (gas-to-electric)</td>
                  <td className="p-3 font-semibold">$1,000</td>
                  <td className="p-3">18+ SEER2, must replace gas furnace, licensed contractor</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater (gas-to-electric)</td>
                  <td className="p-3 font-semibold">$600</td>
                  <td className="p-3">ENERGY STAR, 50–80 gal, must replace gas water heater</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Smart thermostat</td>
                  <td className="p-3 font-semibold">Up to $200</td>
                  <td className="p-3">Must be on Alabama Power qualifying list</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Smart Peak Rewards enrollment</td>
                  <td className="p-3 font-semibold">$50</td>
                  <td className="p-3">Demand response program for smart thermostats</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-amber-800 mb-1">⚠ Common mistake: assuming all heat pump upgrades qualify</p>
            <p className="text-sm text-amber-900">
              Alabama Power rebates are only for gas-to-electric conversions. If your home
              already has electric heat (including an older heat pump or electric furnace),
              you do not qualify for the $1,000 rebate even if you install a much more
              efficient system. Applications must be filed within 90 days of purchase.
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Alabama Power also offers <strong>Smart Financing</strong> with loans of
            $2,000–$25,000 at 9.9%–19.9% APR repayable on the monthly power bill.
            This covers heat pumps, water heaters, insulation, ductwork, and
            electrical wiring. Note: these are market-rate loans, not subsidized.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Alabama Power does not offer ductless mini-split rebates, geothermal rebates,
            insulation rebates, home energy audit subsidies, or enhanced rebates for
            low-income customers.
          </p>
        </div>
      </section>

      {/* 7. TVA EnergyRight + Rural cooperatives */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            TVA EnergyRight and rural cooperative rebates
          </h2>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            TVA EnergyRight (northern Alabama)
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Tennessee Valley Authority serves approximately{" "}
            <strong>461,000 Alabama households</strong> in 16 northern counties
            through distributors including Huntsville Utilities, Decatur Utilities,
            Florence Utilities, Athens Utilities, and Joe Wheeler EMC. TVA&apos;s
            EnergyRight program offers the strongest heat pump rebates in the state.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                  <th className="text-left p-3 font-semibold">Key requirements</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">TVA Preferred air-source heat pump</td>
                  <td className="p-3 font-semibold">$1,500</td>
                  <td className="p-3">Variable-speed, 15.2+ SEER2, 8.1+ HSPF2, 100% capacity at 17°F</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump or dual fuel, 17+ SEER2</td>
                  <td className="p-3 font-semibold">$800</td>
                  <td className="p-3">Must replace existing electric heat</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Mini-split, 17+ SEER2</td>
                  <td className="p-3 font-semibold">$800</td>
                  <td className="p-3">Must replace existing electric heat</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump, 15–16.99 SEER2</td>
                  <td className="p-3 font-semibold">$500</td>
                  <td className="p-3">Must replace existing electric heat</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Geothermal heat pump</td>
                  <td className="p-3 font-semibold">$1,500</td>
                  <td className="p-3">Verify current amount at energyright.com</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">$900</td>
                  <td className="p-3">ENERGY STAR, must replace electric water heater</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Duct sealing/repair/insulation</td>
                  <td className="p-3 font-semibold">$300</td>
                  <td className="p-3">Per system</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Attic insulation</td>
                  <td className="p-3 font-semibold">$300</td>
                  <td className="p-3">Per home</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-blue-800 mb-1">TVA territory is Alabama&apos;s best incentive zone</p>
            <p className="text-sm text-blue-900">
              A Huntsville homeowner installing a TVA Preferred heat pump, heat pump
              water heater, and duct sealing can stack up to <strong>$2,700</strong> in
              rebates from a single program — more than double what&apos;s available
              in Alabama Power territory. TVA also runs the Home Uplift program,
              providing an average of <strong>~$10,000</strong> in free home energy
              upgrades for income-eligible customers.
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            All TVA rebates require work by a TVA Quality Contractor Network member.
            Unlike Alabama Power, TVA rebates require replacing an existing{" "}
            <strong>electric</strong> heating system — gas-to-electric conversions
            do not qualify. Rebates are delivered as paper checks mailed to homeowners.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Rural electric cooperatives
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Alabama&apos;s 22 electric cooperatives run independent rebate programs.
            Most offer <strong>$300–$400 per ton</strong> for qualifying heat pumps.
            For a typical 3-ton system, that translates to <strong>$900–$1,200</strong>.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Cooperative</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                  <th className="text-left p-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Baldwin EMC</td>
                  <td className="p-3 font-semibold">$400/ton (manufactured home conversion)</td>
                  <td className="p-3">Plus tiered rebates for dual-fuel and mini-splits</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Central Alabama EC (CAEC)</td>
                  <td className="p-3 font-semibold">$350/ton</td>
                  <td className="p-3">15+ SEER, efficiency loan up to $20,000 available</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Wiregrass EC</td>
                  <td className="p-3 font-semibold">$300–$350/ton</td>
                  <td className="p-3">SEER-dependent, $400/ton for manufactured homes</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Pioneer EC</td>
                  <td className="p-3 font-semibold">Up to $350/ton</td>
                  <td className="p-3">Dual-fuel and 16+ SEER mini-splits</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Coosa Valley EC</td>
                  <td className="p-3 font-semibold">$300–$350/ton</td>
                  <td className="p-3">Requires 1+ SEER improvement, minimum 15 SEER</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-500">
            Contact your cooperative directly for current rebate amounts and
            requirements. Programs vary and may change without notice.
          </p>
        </div>
      </section>

      {/* 9. Stacking */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How incentives stack in Alabama
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Alabama&apos;s stacking picture is straightforward but limited. TVA
            EnergyRight and Alabama Power serve different territories, so you
            cannot combine them. Within each territory, you can stack your utility
            rebate with future HEAR rebates once Alabama launches that program.
            There is no state tax credit or state rebate to add. Below are
            realistic scenarios for a whole-home heat pump installation costing{" "}
            <strong>$15,000–$20,000</strong>.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Alabama Power territory — above 150% of Area Median Income (AMI)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Alabama Power gas-to-electric rebate: $1,000</li>
                <li>Smart thermostat rebate: $200</li>
                <li>Federal tax credit: $0 (expired)</li>
                <li>State rebate: $0 (none exists)</li>
                <li>HEAR: $0 (not launched)</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$1,200</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">TVA territory — above 150% AMI</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>TVA EnergyRight Preferred heat pump: $1,500</li>
                <li>TVA duct sealing: $300</li>
                <li>TVA attic insulation: $300</li>
                <li>Federal tax credit: $0 (expired)</li>
                <li>HEAR: $0 (not launched)</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$2,100</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">TVA territory — below 80% AMI (best case, when HEAR launches)</p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>TVA EnergyRight Preferred heat pump: $1,500</li>
                <li>TVA duct sealing + insulation: $600</li>
                <li>HEAR heat pump rebate: up to $8,000</li>
                <li>HEAR panel/wiring upgrade: up to $4,000</li>
                <li>HEAR insulation/air sealing: up to $1,600</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$15,700 (HEAR not yet available)</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-5 mb-6">
            <p className="font-semibold text-gray-900 mb-1">What you&apos;ll actually pay</p>
            <p className="text-sm text-gray-700">
              Without HEAR, most Alabama homeowners will pay{" "}
              <strong>$13,000–$19,000 out of pocket</strong> for a whole-home heat
              pump system after utility rebates. In TVA territory, that drops to
              roughly <strong>$12,900–$17,900</strong>. When HEAR eventually
              launches, income-qualified households could see costs drop dramatically
              — potentially to under $5,000 with full stacking.
            </p>
          </div>

          <p className="text-sm text-gray-500">
            Alabama has no state tax credit, no state loan program, and no
            municipal incentives to add to these stacks.
          </p>
        </div>
      </section>

      {/* 10. Weatherization */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Weatherization Assistance Program
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Alabama Weatherization Assistance Program (WAP), administered by
            ADECA through local community action agencies in all 67 counties, provides
            free home energy upgrades — including potential heat pump installation —
            for qualifying low-income households. Eligibility requires household
            income at or below <strong>200% of the federal poverty level</strong>{" "}
            (approximately $62,400 for a family of four in 2026).
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            WAP covers a home energy audit, air sealing, insulation, and HVAC
            replacement when an audit determines it is cost-effective. Priority goes
            to elderly residents, people with disabilities, and families with
            children. Wait times can be significant depending on regional demand.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <p className="font-semibold text-green-800 mb-1">✓ Best candidates for Alabama heat pump incentives</p>
            <p className="text-sm text-green-900">
              TVA-territory homeowners replacing electric resistance heat (highest rebates,
              largest energy savings). Alabama Power customers converting from gas furnaces
              (only way to qualify for the $1,000 rebate). Low-income households in any
              territory (TVA Home Uplift averages ~$10,000 in free upgrades; WAP covers full
              costs). Co-op members replacing older systems (per-ton rebates add up on larger
              homes).
            </p>
          </div>
        </div>
      </section>

      {/* 11. Climate */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Alabama&apos;s climate and heat pumps
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Alabama spans IECC Climate Zone 3A (warm-humid) across most of the state,
            with Zone 2A (hot-humid) along the Gulf Coast in Baldwin County. Northern
            counties near the Tennessee border approach Zone 4A. Heating loads are
            modest, and standard air-source heat pumps perform efficiently year-round.
            Cold-climate models are not required but eliminate the need for backup heat
            during rare cold snaps below 25°F in the northern part of the state.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">City</th>
                  <th className="text-left p-3 font-semibold">Heating design temp (99.6%)</th>
                  <th className="text-left p-3 font-semibold">Cooling design temp</th>
                  <th className="text-left p-3 font-semibold">Annual HDD</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Huntsville</td>
                  <td className="p-3 font-semibold">~14–16°F</td>
                  <td className="p-3">93°F</td>
                  <td className="p-3">~3,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Birmingham</td>
                  <td className="p-3 font-semibold">18.6°F</td>
                  <td className="p-3">94°F</td>
                  <td className="p-3">~2,600</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Montgomery</td>
                  <td className="p-3 font-semibold">23.7°F</td>
                  <td className="p-3">95°F</td>
                  <td className="p-3">~2,100</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Mobile</td>
                  <td className="p-3 font-semibold">~29°F</td>
                  <td className="p-3">93°F</td>
                  <td className="p-3">~1,655</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Approximately <strong>70% of Alabama households</strong> already heat
            with electricity (heat pumps plus electric resistance combined), giving
            the state one of the highest existing heat pump penetration rates
            nationally. The primary conversion opportunity is the roughly 475,000
            gas-heated homes and homes still using inefficient electric resistance
            heating. Alabama&apos;s long cooling season means a heat pump does
            double duty — delivering both heating and air conditioning from a
            single system.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Considering pairing a heat pump with battery storage?{" "}
            <Link href="/battery" className="text-brand-600 hover:underline">
              See our guide to whether home batteries are worth it in 2026
            </Link>.
          </p>
        </div>
      </section>

      {/* 12. How to Apply */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How to apply for Alabama heat pump rebates
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The application process depends on which utility serves your home. Here
            are the general steps:
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-gray-900">Confirm your electric utility</p>
                <p className="text-sm text-gray-700">
                  Check your electric bill to determine if you&apos;re served by Alabama Power,
                  a TVA distributor (Huntsville Utilities, Decatur Utilities, etc.), or a
                  rural electric cooperative. This determines which rebates you can access.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900">Choose a qualifying system and contractor</p>
                <p className="text-sm text-gray-700">
                  TVA requires a Quality Contractor Network member. Alabama Power requires
                  a licensed HVAC contractor. Cooperatives may require pre-approval. Confirm
                  efficiency ratings meet your program&apos;s minimums before purchasing.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-900">Install the system and file your rebate</p>
                <p className="text-sm text-gray-700">
                  Keep all receipts, the AHRI certificate, and contractor documentation.
                  Alabama Power requires applications within 90 days of purchase. TVA
                  rebates are processed through your local distributor. Cooperative
                  timelines vary — contact yours before installation.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <p className="font-semibold text-gray-900">Register for ADECA updates</p>
                <p className="text-sm text-gray-700">
                  If you are below 150% AMI, sign up at rebates@adeca.alabama.gov for
                  HEAR launch notifications. When the program opens, you may be able to
                  claim additional rebates retroactively depending on program rules.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. What to Watch */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What to watch for
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">ADECA HEAR launch</p>
              <p className="text-sm text-gray-600 mt-1">
                The biggest potential shift for Alabama homeowners. When ADECA
                launches the HEAR program, income-qualified households could access
                up to $8,000 per heat pump. No timeline has been set, but the
                federal funding is allocated and waiting.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">IRA funding runway</p>
              <p className="text-sm text-gray-600 mt-1">
                HEAR and HOMES are funded until September 30, 2031, or until
                money runs out. Some states are already drawing down allocations
                quickly. Alabama&apos;s delay means its full allocation remains
                available, but the program must launch before the deadline.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Alabama Power program changes</p>
              <p className="text-sm text-gray-600 mt-1">
                All Alabama Power rebates are labeled &quot;limited time&quot; and
                can be discontinued without notice. The gas-to-electric structure
                may shift as the utility&apos;s customer mix evolves.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">TVA EnergyRight updates</p>
              <p className="text-sm text-gray-600 mt-1">
                TVA&apos;s $1.5 billion energy initiative runs through 2027.
                Rebate amounts and equipment tiers may be updated as the program
                evolves. The Preferred tier specification could change with new
                equipment standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 14. FAQ */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Frequently asked questions
          </h2>
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
              <Link href="/heat-pumps/states/tn" className="text-brand-600 hover:underline">
                Tennessee Heat Pump Rebates
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/fl" className="text-brand-600 hover:underline">
                Florida Heat Pump Rebates
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/ms" className="text-brand-600 hover:underline">
                Mississippi Heat Pump Rebates
              </Link>
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

      {/* 16. Sources */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="space-y-2 text-sm">
            {alIncentive.sources.map((source: { label: string; url: string }, index: number) => (
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
              <strong>Disclaimer:</strong> This page covers the main utility
              and IRA heat pump incentives available to Alabama homeowners in 2026.
              It does not calculate savings, guarantee eligibility, or represent
              any incentive program. Alabama has no statewide rebate program —
              incentives vary by electric utility territory. We verify status
              regularly but programs can change without notice. Always confirm
              current amounts and eligibility with your electric utility and
              contractor before making decisions.
            </p>
          </div>
              <p className="text-sm text-gray-600 mt-4">
            See how this state compares →{" "}
            <Link
              href="/heat-pumps/rebates-by-state"
              className="text-brand-600 hover:underline"
            >
              Heat Pump Rebates by State (2026)
            </Link>
          </p>
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
