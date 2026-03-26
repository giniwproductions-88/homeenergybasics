import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "West Virginia Heat Pump Rebates & Incentives (2026): HEAR + HOMES | Home Energy Basics",
  description:
    "HEAR offers up to $8,000 for heat pumps. HOMES covers up to $20,000. Federal tax credits ended. Here\u2019s every West Virginia heat pump incentive in 2026.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/wv",
  },
  openGraph: {
    title: "West Virginia Heat Pump Rebates 2026",
    description:
      "HEAR rebates up to $8,000 and HOMES up to $20,000 for qualifying households \u2014 the complete guide to West Virginia heat pump incentives after federal credits expired.",
    url: "https://homeenergybasics.com/heat-pumps/states/wv",
    type: "article",
  },
};

export default function WestVirginiaPage() {
  const wvIncentive = incentives.WV;
  const formattedDate = formatDate(wvIncentive.lastVerified);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What heat pump rebates are available in West Virginia in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "West Virginia\u2019s primary incentives are the IRA-funded HEAR program (up to $8,000 for heat pumps for households at or below 150% AMI) and the HOMES program (up to $20,000 for whole-home retrofits for low-income households). Appalachian Power offers smaller rebates of $300 for mini-splits and $400 for heat pump water heaters. Federal Section 25C and 25D tax credits expired December 31, 2025. Mon Power and Potomac Edison customers have no utility-level heat pump rebates.",
        },
      },
      {
        "@type": "Question",
        name: "Can I stack HEAR and HOMES rebates in West Virginia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "HEAR and HOMES rebates cannot be applied to the same measure on the same project. However, they can be combined when applied to different components \u2014 for example, HEAR for the heat pump equipment and HOMES for insulation and air sealing. Appalachian Power utility rebates are independent programs and stack with both HEAR and HOMES. Total rebates typically cannot exceed total project cost.",
        },
      },
      {
        "@type": "Question",
        name: "Do Mon Power and Potomac Edison offer heat pump rebates in West Virginia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Mon Power and Potomac Edison (both FirstEnergy subsidiaries) do not offer heat pump rebates, HVAC equipment incentives, or energy efficiency rebate programs for West Virginia residential customers. Their heat pump rebate programs are limited to Maryland customers under EmPOWER Maryland. West Virginia customers of these utilities are limited to the state-level HEAR and HOMES programs.",
        },
      },
      {
        "@type": "Question",
        name: "Are cold-climate heat pumps necessary in West Virginia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. West Virginia spans ASHRAE climate zones 4A and 5A, with winter design temperatures ranging from about 7\u00B0F in Charleston to below 0\u00B0F in mountain communities like Elkins. Cold-climate air-source heat pumps (ccASHP) are recommended statewide. Mountain communities in zone 5A should plan for backup heat during extreme cold events, though modern ccASHP models maintain meaningful output down to -5\u00B0F to -15\u00B0F.",
        },
      },
      {
        "@type": "Question",
        name: "Who administers West Virginia\u2019s heat pump rebate programs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The West Virginia Office of Energy (WVOE) administers both the HEAR and HOMES programs. Contact WVOE at 800-982-3386 or WVOEInfo@wv.gov. Appalachian Power\u2019s TakeCharge WV program is administered by CLEAResult \u2014 contact them at 888-261-4567 or visit takechargewv.com. The Weatherization Assistance Program is administered by WVCAD through local Community Action Agencies in all 55 counties.",
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
            {" "}/ West Virginia
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            West Virginia Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            West Virginia&apos;s <strong>$88.2 million</strong> in IRA-funded
            Home Electrification and Appliance Rebates (HEAR) and Home Efficiency
            Rebates (HOMES) represent the state&apos;s primary heat pump incentives
            in 2026, covering up to <strong>$8,000–$20,000</strong> depending on
            income and project scope. Federal tax credits ended December 31, 2025.
            Most homeowners can expect about <strong>$4,000</strong> in incentives
            today. Low-income households may qualify for{" "}
            <strong>$14,000–$20,000</strong>.
            Utility rebates exist only in Appalachian Power territory. This guide
            covers all major West Virginia heat pump incentives available in 2026,
            including HEAR, HOMES, and Appalachian Power&apos;s TakeCharge WV
            program. Here&apos;s what&apos;s actually available.
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
          <StatusCard incentive={wvIncentive} />
        </div>
      </section>

      {/* 3. SHORT VERSION */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Short Version</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ HEAR rebates up to $8,000</p>
              <p className="text-sm text-green-900">
                The Home Electrification and Appliance Rebates program covers up to
                $8,000 per heat pump for households at or below 150% of Area Median
                Income (AMI). Administered by the WV Office of Energy.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ HOMES rebates up to $20,000</p>
              <p className="text-sm text-green-900">
                Performance-based whole-home rebates cover up to $20,000 for
                low-income households achieving 35%+ energy savings. Available at
                all income levels, with smaller rebates for higher earners.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Total potential: $4,000–$20,000+</p>
              <p className="text-sm text-green-900">
                $4,000 (above 150% AMI) to $20,000+ (below 80% AMI). Full
                electrification packages can reach ~$14,400 through HEAR or
                ~$20,400 through HOMES with utility rebates stacked.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">✗ Federal tax credits expired</p>
              <p className="text-sm text-red-900">
                Section 25C and Section 25D both ended December 31, 2025 under the
                One Big Beautiful Bill. No federal tax credit is available for heat
                pumps installed in 2026.
              </p>
            </div>
            <div className="md:col-span-2 bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="font-semibold text-amber-800 mb-1">⚠ HEAR and HOMES launch status unclear</p>
              <p className="text-sm text-amber-900">
                The WV Office of Energy received DOE approval in January 2025 and
                has published contractor lists and qualification forms, but
                consumer-facing applications may still be in a pilot phase. Contact
                WVOE at 800-982-3386 to confirm current availability before
                starting any project.
              </p>
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
              <strong>Section 25C</strong> (Energy Efficient Home Improvement Credit)
              and <strong>Section 25D</strong> (Residential Clean Energy Credit) both
              expired on <strong>December 31, 2025</strong>. The One Big Beautiful Bill
              Act accelerated their termination. A heat pump must have been fully
              installed and operational by December 31, 2025 to qualify &mdash;
              equipment purchased in 2025 but installed in 2026 does not count. No
              replacement legislation has been enacted.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            For West Virginia homeowners, this means the former $2,000 heat pump
            tax credit and 30% geothermal credit are both gone. The remaining
            incentives are the IRA-funded HEAR and HOMES rebate programs (which
            survived the OBBB as DOE grants, not tax provisions) and utility
            rebates from Appalachian Power.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
              Read more about why federal heat pump tax credits ended →
            </Link>
          </p>
        </div>
      </section>

      {/* 5. HEAR / PRIMARY */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            HEAR: Up to $8,000 Per Heat Pump
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Home Electrification and Appliance Rebates (HEAR) program provides
            point-of-sale rebates for specific appliance upgrades. It is restricted
            to households at or below <strong>150% of Area Median Income (AMI)</strong>.
            Households below 80% AMI receive 100% of rebate amounts; those between
            80–150% AMI receive 50%. The program is administered by the West Virginia
            Office of Energy with a <strong>$44 million</strong> allocation.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Upgrade</th>
                  <th className="text-left p-3 font-semibold">Max Rebate (≤80% AMI)</th>
                  <th className="text-left p-3 font-semibold">Max Rebate (80–150% AMI)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Heat pump (space heating/cooling)</td>
                  <td className="p-3 font-semibold">$8,000</td>
                  <td className="p-3 font-semibold">$4,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">$1,750</td>
                  <td className="p-3 font-semibold">$875</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Electrical panel upgrade</td>
                  <td className="p-3 font-semibold">$4,000</td>
                  <td className="p-3 font-semibold">$2,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Insulation, air sealing, ventilation</td>
                  <td className="p-3 font-semibold">$1,600</td>
                  <td className="p-3 font-semibold">$800</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Electric wiring</td>
                  <td className="p-3 font-semibold">$2,500</td>
                  <td className="p-3 font-semibold">$1,250</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Electric stove/range/oven</td>
                  <td className="p-3 font-semibold">$840</td>
                  <td className="p-3 font-semibold">$420</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump clothes dryer</td>
                  <td className="p-3 font-semibold">$840</td>
                  <td className="p-3 font-semibold">$420</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">Maximum per household</td>
                  <td className="p-3 font-semibold">$14,000</td>
                  <td className="p-3 font-semibold">$7,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="font-semibold text-amber-800 mb-1">⚠ Common mistake: HEAR usually requires fuel switching</p>
            <p className="text-sm text-amber-900">
              HEAR rebates generally apply only to fuel-switching upgrades (e.g.,
              replacing a gas furnace with a heat pump) or first-time purchases.
              Replacing an existing electric system with a newer electric system
              typically does not qualify, with limited exceptions for tank water
              heater to heat pump water heater conversions. A certified energy
              assessment is required before installation.
            </p>
          </div>
        </div>
      </section>

      {/* 6. HOMES / SECONDARY */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            HOMES: Up to $20,000 for Whole-Home Retrofits
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Home Efficiency Rebates (HOMES) program takes a whole-home,
            performance-based approach. A certified energy audit determines
            projected energy savings, and rebate amounts scale with the savings
            achieved. Unlike HEAR, <strong>all income levels qualify</strong>,
            though low-income households receive substantially higher rebates. The
            HOMES allocation for West Virginia is <strong>$44.3 million</strong>.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Income Level</th>
                  <th className="text-left p-3 font-semibold">20–34% Savings</th>
                  <th className="text-left p-3 font-semibold">35%+ Savings</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Below 80% AMI</td>
                  <td className="p-3 font-semibold">100% of cost, max $16,000</td>
                  <td className="p-3 font-semibold">100% of cost, max $20,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">80% AMI and above</td>
                  <td className="p-3 font-semibold">50% of cost, max $2,000</td>
                  <td className="p-3 font-semibold">50% of cost, max $4,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Eligible measures include heat pumps, high-efficiency furnaces and
            boilers, insulation, air sealing, and duct repair or replacement. For
            low-income households, HOMES can cover the <strong>entire project
            cost</strong>, potentially making heat pump installations zero
            out-of-pocket.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="font-semibold text-blue-800 mb-1">West Virginia&apos;s electric resistance opportunity</p>
            <p className="text-sm text-blue-900">
              About 46% of West Virginia households heat with electricity &mdash;
              much of it inefficient electric resistance and space heaters.
              Converting from electric resistance (COP 1.0) to a heat pump
              (seasonal COP ~3.0) delivers a 60–70% reduction in heating energy
              costs with no fuel-switching complexity. This makes West Virginia
              one of the strongest states for heat pump economics, even without
              large utility rebates.
            </p>
          </div>
        </div>
      </section>

      {/* 7. UTILITY PROGRAMS — white */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Utility Rebates</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            West Virginia&apos;s utility rebate picture is starkly divided.
            Appalachian Power customers have access to modest rebates through
            TakeCharge WV. Mon Power and Potomac Edison (FirstEnergy) customers
            have no heat pump rebate programs. Rural cooperatives, municipal
            utilities, and gas utilities offer nothing.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Appalachian Power &mdash; TakeCharge WV
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Appalachian Power (including subsidiary Wheeling Power) serves
            approximately 1 million customers across southern and western West
            Virginia. Its TakeCharge WV program, administered by CLEAResult,
            offers the following heat-pump-relevant rebates:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Product</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                  <th className="text-left p-3 font-semibold">Requirement</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Ductless mini-split heat pump</td>
                  <td className="p-3 font-semibold">$300</td>
                  <td className="p-3">ENERGY STAR certified</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">$400</td>
                  <td className="p-3">ENERGY STAR certified</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Central air conditioner</td>
                  <td className="p-3 font-semibold">$700</td>
                  <td className="p-3">ENERGY STAR certified</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Smart thermostat</td>
                  <td className="p-3 font-semibold">$50</td>
                  <td className="p-3">ENERGY STAR certified</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-amber-800 mb-1">⚠ No ducted heat pump rebate from Appalachian Power</p>
            <p className="text-sm text-amber-900">
              The $700 rebate is specifically for central air conditioners
              (cooling-only units), not heat pump systems. Homeowners installing
              a ducted whole-home air-source heat pump &mdash; the most common
              configuration &mdash; receive no Appalachian Power rebate for the
              primary unit. Only the $300 mini-split and $400 HPWH rebates apply
              to heat pump equipment.
            </p>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Mon Power &amp; Potomac Edison (FirstEnergy)
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Mon Power serves approximately 395,000 customers in 34 counties across
            north-central West Virginia. Potomac Edison serves about 155,000
            customers in the Eastern Panhandle. <strong>Neither utility offers heat
            pump rebates, HVAC equipment incentives, or energy efficiency rebate
            programs</strong> for West Virginia residential customers. Potomac
            Edison&apos;s heat pump rebates under Maryland&apos;s EmPOWER program
            are exclusively for Maryland customers and do not extend to West
            Virginia.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Rural Cooperatives, Municipal Utilities &amp; Gas Utilities
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Research across every smaller utility found zero heat pump rebate
            programs. Harrison Rural Electrification, Black Diamond Power,
            Philippi Municipal Electric, New Martinsville Municipal Electric,
            Hope Gas (formerly Dominion Energy WV), and Mountaineer Gas Company
            offer no heat pump or HVAC rebates. West Virginia has only two
            municipal electric utilities and approximately three electric
            cooperatives with in-state customers.
          </p>
        </div>
      </section>

      {/* 8. LOCAL PROGRAMS — skipped (none exist in WV) */}

      {/* 9. STACKING — bg-gray-50 */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Programs Stack</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            HEAR and HOMES rebates cannot be applied to the same measure on the
            same project, but they can be combined when applied to different
            components (e.g., HEAR for the heat pump, HOMES for insulation).
            Appalachian Power utility rebates are independent and stack with both
            programs. Total rebates cannot exceed total project cost. West Virginia
            has no state tax credit for heat pumps. A limited state energy loan
            program may be available through the West Virginia Housing Development
            Fund.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 150% AMI &mdash; Ducted Heat Pump System</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>HEAR heat pump rebate: $0 (income too high)</li>
                <li>HOMES rebate (35%+ savings): $4,000</li>
                <li>Appalachian Power HPWH rebate: $400</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$4,400</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">80–150% AMI &mdash; Ducted Heat Pump + HPWH</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>HEAR heat pump rebate: $4,000 (50% tier)</li>
                <li>HEAR HPWH rebate: $875 (50% tier)</li>
                <li>HEAR panel upgrade: $2,000 (50% tier)</li>
                <li>Appalachian Power HPWH rebate: $400</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$7,275</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">Below 80% AMI &mdash; Full Electrification Package</p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>HEAR heat pump rebate: $8,000 (100% tier)</li>
                <li>HEAR HPWH rebate: $1,750</li>
                <li>HEAR panel upgrade: $4,000</li>
                <li>HEAR insulation/air sealing: $1,600</li>
                <li>Appalachian Power HPWH rebate: $400</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$15,750</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-5">
            <p className="font-semibold text-gray-900 mb-1">What you&apos;ll actually pay</p>
            <p className="text-sm text-gray-700">
              For a typical ducted heat pump installation costing $12,000–$18,000:
              homeowners above 150% AMI can expect <strong>$8,000 to $14,000 out
              of pocket</strong>. Homeowners below 80% AMI using HEAR may pay
              <strong> $0 to $3,000 out of pocket</strong> for the heat pump
              itself, and HOMES can cover entire project costs up to $20,000.
              Mon Power and Potomac Edison customers receive no utility rebates,
              so their stacks are $400 lower.
            </p>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            West Virginia has no state tax credit for heat pumps and no statewide
            low-interest loan program. The WV Housing Development Fund&apos;s
            Energy Conservation Revolving Loan may be available for qualifying
            homeowners &mdash; contact WVHDF to confirm.
          </p>
        </div>
      </section>

      {/* 10. WEATHERIZATION — white */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Weatherization Assistance Program</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            West Virginia&apos;s Weatherization Assistance Program (WAP) is
            administered by the WV Community Advancement and Development division
            (WVCAD) and delivered through local nonprofit Community Action Agencies
            in all 55 counties. Income eligibility requires household income at or
            below <strong>200% of federal poverty guidelines</strong> (roughly
            $66,000 for a family of four in 2026).
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Heat pumps can be installed under WAP if the DOE-approved energy audit
            (NEAT software) identifies a heat pump as the most cost-effective
            measure &mdash; but this is determined case by case, not guaranteed.
            Priority is given to elderly, disabled, and high-energy-burden
            households. There is typically a waitlist.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <p className="font-semibold text-green-800 mb-1">✓ Best candidates for WV heat pump incentives</p>
            <p className="text-sm text-green-900">
              Households heating with electric resistance or space heaters (46% of
              WV homes) stand to gain the most &mdash; conversion to a heat pump
              reduces heating costs by 60–70% with no fuel-switching barriers.
              Propane-heated homes ($2.50–$3.50/gallon) are also strong candidates.
              Low-income households below 80% AMI can potentially get full project
              coverage through HEAR or HOMES.
            </p>
          </div>
        </div>
      </section>

      {/* 11. CLIMATE — bg-gray-50 */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Climate Context</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            West Virginia spans ASHRAE climate zones 4A (Ohio River valley) and
            5A (Appalachian highlands). Cold-climate air-source heat pumps
            (ccASHP) are recommended statewide. Mountain communities face
            substantially harsher winters with 25–40% more heating degree days
            than valley cities.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">City</th>
                  <th className="text-left p-3 font-semibold">Zone</th>
                  <th className="text-left p-3 font-semibold">Design Temp (99.6%)</th>
                  <th className="text-left p-3 font-semibold">Annual HDD</th>
                  <th className="text-left p-3 font-semibold">Elevation</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Charleston</td>
                  <td className="p-3">4A</td>
                  <td className="p-3 font-semibold">7°F</td>
                  <td className="p-3">~4,476</td>
                  <td className="p-3">982 ft</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Huntington</td>
                  <td className="p-3">4A</td>
                  <td className="p-3 font-semibold">6°F</td>
                  <td className="p-3">~4,400</td>
                  <td className="p-3">828 ft</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Morgantown</td>
                  <td className="p-3">5A</td>
                  <td className="p-3 font-semibold">2°F</td>
                  <td className="p-3">~5,183</td>
                  <td className="p-3">1,245 ft</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Wheeling</td>
                  <td className="p-3">5A</td>
                  <td className="p-3 font-semibold">1°F</td>
                  <td className="p-3">~5,300</td>
                  <td className="p-3">1,195 ft</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Beckley</td>
                  <td className="p-3">5A</td>
                  <td className="p-3 font-semibold">2°F</td>
                  <td className="p-3">~5,700</td>
                  <td className="p-3">2,504 ft</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Elkins</td>
                  <td className="p-3">5A</td>
                  <td className="p-3 font-semibold">-3°F</td>
                  <td className="p-3">~6,000</td>
                  <td className="p-3">1,945 ft</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            In Ohio River valley cities (zone 4A), standard cold-climate heat
            pumps work well as sole-source heating. In mountain communities (zone
            5A), backup heat (electric strip or existing furnace in dual-fuel
            configuration) remains advisable for extreme cold events. Modern
            ccASHP models from manufacturers like Mitsubishi, Daikin, and Fujitsu
            maintain meaningful output down to -5°F to -15°F continuous operation.
          </p>

          <p className="text-gray-700 leading-relaxed">
            West Virginia&apos;s average residential electricity rate of roughly
            15–16¢/kWh is below the national average, which strengthens the heat
            pump value proposition compared to many states. For homes on propane,
            heat pumps offer substantial operating cost savings. For homes on
            natural gas, a heat pump with seasonal COP of approximately 2.8 or
            higher breaks even with an 80% AFUE gas furnace. Consider pairing a
            heat pump with a{" "}
            <Link href="/battery" className="text-brand-600 hover:underline">
              home battery system
            </Link>{" "}
            if you&apos;re also evaluating solar or backup power options.
          </p>
        </div>
      </section>

      {/* 12. HOW TO APPLY — white */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Apply</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-gray-900">Check your income eligibility</p>
                <p className="text-sm text-gray-700">
                  HEAR requires household income at or below 150% AMI. HOMES is
                  available at all income levels but provides higher rebates below
                  80% AMI. Use the WVOE income calculator or contact them at
                  800-982-3386 to determine your tier.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900">Schedule a home energy assessment</p>
                <p className="text-sm text-gray-700">
                  Both HEAR and HOMES require a certified energy assessment before
                  installation. WVOE maintains a list of approved energy auditors
                  and contractors on{" "}
                  <a href="https://energywv.org/funding-opportunities/home-energy-rebate-programs/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">
                    energywv.org
                  </a>. For HOMES, the audit determines projected energy savings
                  and your rebate tier.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-900">Work with a participating contractor</p>
                <p className="text-sm text-gray-700">
                  HEAR rebates are applied at point of sale through participating
                  contractors. Make sure your contractor is registered with the
                  WVOE program before work begins. Ask them to specify cold-climate
                  rated equipment (NEEP-listed or ENERGY STAR Cold Climate certified).
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <p className="font-semibold text-gray-900">File for Appalachian Power rebates separately</p>
                <p className="text-sm text-gray-700">
                  If you&apos;re in Appalachian Power territory, submit TakeCharge
                  WV rebate applications separately at{" "}
                  <a href="https://takechargewv.com/rebates" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">
                    takechargewv.com
                  </a>{" "}
                  within 45 days of purchase. These stack with HEAR and HOMES.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. WHAT TO WATCH — bg-gray-50 */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Watch</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">HEAR and HOMES launch confirmation</p>
              <p className="text-sm text-gray-600 mt-1">
                The WV Office of Energy received DOE approval in January 2025 but
                consumer-facing applications may still be in a pilot phase as of
                March 2026. Monitor energywv.org or call 800-982-3386 for launch
                updates before committing to a project timeline.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">IRA funding runway</p>
              <p className="text-sm text-gray-600 mt-1">
                West Virginia&apos;s $88.2 million allocation is designed to serve
                an estimated 10,000 households. Once funds are exhausted, the
                programs close. IRA rebate funds must be obligated by September 30,
                2031. Early applicants are more likely to receive full rebate
                amounts.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Mon Power / Potomac Edison efficiency programs</p>
              <p className="text-sm text-gray-600 mt-1">
                The WV Public Service Commission approved expanded energy efficiency
                programs for Appalachian Power in recent years. Advocacy groups
                continue to push for similar programs from FirstEnergy&apos;s WV
                utilities. If Mon Power or Potomac Edison launch heat pump rebates,
                it would significantly expand access across northern and eastern
                West Virginia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 14. FAQ — white */}
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

      {/* 15. SEE ALSO — bg-gray-50 */}
      <section className="py-8 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-3">See also</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/heat-pumps/states/va" className="text-brand-600 hover:underline">
                Virginia Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/pa" className="text-brand-600 hover:underline">
                Pennsylvania Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/md" className="text-brand-600 hover:underline">
                Maryland Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/ky" className="text-brand-600 hover:underline">
                Kentucky Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/oh" className="text-brand-600 hover:underline">
                Ohio Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li>
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                Federal Heat Pump Tax Credits Ended &mdash; What It Means
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

      {/* 16. SOURCES — white */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="space-y-2 text-sm">
            {wvIncentive.sources.map((source: { label: string; url: string }, index: number) => (
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

      {/* 17. DISCLAIMER — white */}
      <section className="py-8">
        <div className="container-narrow">
          <div className="bg-gray-100 rounded-lg p-6">
            <p className="text-gray-500 text-xs leading-relaxed">
              <strong>Disclaimer:</strong> This page covers the main statewide,
              utility, and IRA heat pump incentives available to West Virginia
              homeowners in 2026. It does not calculate savings, guarantee
              eligibility, or represent any incentive program. West Virginia&apos;s
              HEAR and HOMES programs may still be in a pilot phase &mdash; confirm
              current application status before starting work. We verify status
              regularly but programs can change without notice. Always confirm
              current amounts and eligibility with the WV Office of Energy, your
              utility, and your contractor before making decisions.
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
