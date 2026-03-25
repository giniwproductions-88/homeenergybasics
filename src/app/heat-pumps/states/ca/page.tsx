import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "California Heat Pump Rebates 2026: $3,000–$4,000 SMUD + LADWP $2,500/Ton | Home Energy Basics",
  description:
    "SMUD offers up to $4,000. LADWP pays $2,500/ton. TECH and HEEHRA are exhausted. Federal credits ended. Here\u2019s every California heat pump incentive in 2026.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/ca",
  },
  openGraph: {
    title: "California Heat Pump Rebates 2026",
    description:
      "SMUD up to $4,000, LADWP $2,500/ton, statewide programs exhausted — the complete guide to California heat pump incentives after federal credits expired.",
    url: "https://homeenergybasics.com/heat-pumps/states/ca",
    type: "article",
  },
};

export default function CaliforniaPage() {
  const caIncentive = incentives.CA;
  const formattedDate = formatDate(caIncentive.lastVerified);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What heat pump rebates are available in California in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "California\u2019s statewide programs (TECH Clean California and HEEHRA Phase I) are fully reserved for single-family homes. Utility rebates are the primary path: SMUD offers up to $3,000 for heat pump HVAC and $4,000 for heat pump water heaters. LADWP offers up to $2,500 per ton. The California Energy Smart Homes program provides $4,250 or more for full electrification projects. Federal tax credits (Section 25C and Section 25D) expired December 31, 2025. HOMES and HEEHRA Phase II are funded but have not launched.",
        },
      },
      {
        "@type": "Question",
        name: "Can I stack utility rebates with future state programs in California?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "When multiple programs are active, stacking is generally allowed in California. HEEHRA rebates were explicitly stackable with utility incentives. Future HOMES and HEEHRA Phase II rebates are also expected to be stackable with utility programs. Right now, stacking opportunities are limited to utility rebates plus the Energy Smart Homes program for full electrification projects.",
        },
      },
      {
        "@type": "Question",
        name: "Why are California heat pump rebates so limited right now?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "California\u2019s statewide programs were massively oversubscribed. TECH Clean California single-family HVAC incentives were fully reserved by January 2025. HEEHRA single-family rebates were fully reserved statewide by February 24, 2026. Federal tax credits expired December 31, 2025 under the One Big Beautiful Bill Act. Two major replacement programs \u2014 HOMES ($291 million) and HEEHRA Phase II ($152 million) \u2014 are funded but have not launched yet.",
        },
      },
      {
        "@type": "Question",
        name: "Which California utilities offer the best heat pump rebates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SMUD (Sacramento) boosted rebates in February 2026 \u2014 up to $3,000 for gas-to-electric HVAC and $4,000 for gas-to-electric water heater conversions. LADWP (Los Angeles) offers up to $2,500 per ton for heat pump HVAC and $2,500 for heat pump water heaters. PG&E, SCE, and SDG&E primarily administer statewide programs rather than offering standalone heat pump rebates. Use the Switch Is On incentive finder at switchison.org to check your specific utility.",
        },
      },
      {
        "@type": "Question",
        name: "What refrigerant requirements apply to California heat pump rebates in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "As of January 1, 2026, heat pump systems must use refrigerants with a Global Warming Potential (GWP) of 700 or lower per EPA Technology Transition Rule requirements. R-410A (GWP 2,000+) is no longer eligible. Systems must use R-32, R-454B, or similar next-generation refrigerants. This applies to all current and future California rebate programs.",
        },
      },
    ],
  };

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
            {" "}/ California
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            California Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            California&apos;s statewide heat pump programs are fully reserved for single-family homes. SMUD offers up to <strong>$3,000&#8211;$4,000</strong> and LADWP up to <strong>$2,500/ton</strong> through utility rebates. Federal tax credits ended December 31, 2025. Two major programs &#8212; HOMES (~$291 million) and HEEHRA Phase II ($152 million) &#8212; are funded but have not launched. This guide covers all major California heat pump incentives available in 2026, including TECH Clean California status, HEEHRA, utility programs, and Energy Smart Homes. Here&apos;s what&apos;s actually available.
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
          <StatusCard incentive={caIncentive} />
        </div>
      </section>

      {/* 3. Short Version */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            The Short Version
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ SMUD (Sacramento) &#8212; Boosted February 2026</p>
              <p className="text-sm text-green-900">Up to $3,000 for gas-to-electric heat pump HVAC, $4,000 for gas-to-electric heat pump water heaters, $1,000 for electric-to-electric upgrades. Must use SMUD Contractor Network.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ LADWP (Los Angeles) &#8212; Active</p>
              <p className="text-sm text-green-900">Up to $2,500/ton for heat pump HVAC (a 3-ton system = up to $7,500) and $2,500 for heat pump water heaters. No income qualification required.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Energy Smart Homes &#8212; Full Electrification</p>
              <p className="text-sm text-green-900">$4,250+ for homeowners going fully electric (capping gas meter). Bonuses for variable-capacity heat pumps and load management. Confirmed through 2027.</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">✗ Federal Tax Credits &#8212; Expired</p>
              <p className="text-sm text-red-900">Section 25C (up to $2,000) and Section 25D (30% for geothermal) both expired December 31, 2025. No federal tax credit is available for heat pumps installed in 2026.</p>
            </div>
            <div className="md:col-span-2 bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="font-semibold text-amber-800 mb-1">⚠ TECH &amp; HEEHRA Phase I &#8212; Fully Reserved</p>
              <p className="text-sm text-amber-900">TECH Clean California single-family incentives and HEEHRA single-family rebates are fully reserved statewide. No new reservations or income verifications are being accepted. HOMES (~$291M) and HEEHRA Phase II ($152M) are funded but not yet launched &#8212; no start date announced. Rebates will not be retroactive.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Federal Expired */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Federal Tax Credits Are Gone
          </h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <p className="text-red-900 leading-relaxed">
              <strong>Section 25C</strong> (up to $2,000 for air-source heat pumps) and <strong>Section 25D</strong> (30% for geothermal heat pumps, solar, and battery storage) both expired December 31, 2025 under the One Big Beautiful Bill Act. No federal tax credit is available for heat pump systems installed in 2026. If your system was installed before December 31, 2025, you can still claim the credit on your 2025 federal tax return (IRS Form 5695). Read more about <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">what the federal heat pump tax credit expiration means</Link>.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            The loss of federal credits is especially significant in California, where statewide programs are also exhausted. Most California homeowners now have utility rebates as their sole incentive source &#8212; a sharp change from 2024 when federal credits, TECH, HEEHRA, and utility programs could all stack.
          </p>
        </div>
      </section>

      {/* 5. HEEHRA / Primary (California's IRA HEAR equivalent) */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            HEEHRA Phase I &#8212; Fully Reserved
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Home Electrification and Appliance Rebates (HEEHRA) program &#8212; California&apos;s version of the IRA-funded HEAR program &#8212; was administered through TECH Clean California. It provided up to <strong>$8,000</strong> per heat pump for households below 80% of Area Median Income (AMI) and up to <strong>$4,000</strong> for households at 80&#8211;150% AMI.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-amber-800 mb-1">⚠ Current Status: Fully Reserved Statewide</p>
            <p className="text-sm text-amber-900">As of February 24, 2026, HEEHRA single-family rebates are fully reserved for projects statewide. The program is no longer accepting new income verification applications. Central and Southern California regions were exhausted by January 7, 2026. All unapproved reservation requests have been waitlisted. Waitlisted projects are only eligible if the heat pump is installed after the reservation is approved.</p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            TECH Clean California single-family HVAC incentives were fully reserved by January 17, 2025. Single-family heat pump water heater incentives were fully reserved by November 14, 2025. Commercial incentives were exhausted by October 31, 2025.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            HEEHRA Phase II &#8212; $152 Million (Not Yet Launched)
          </h3>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-blue-800 mb-1">Phase II Design in Progress</p>
            <p className="text-sm text-blue-900">HEEHRA Phase II will expand on Phase I with additional funding for income-eligible households. It is expected to cover heat pump HVAC, heat pump water heaters, cooktops, dryers, and other electric appliances. Administered by the California Energy Commission (CEC) through TECH Clean California. No launch date has been announced. Rebates will not be retroactive &#8212; do not begin a project expecting Phase II reimbursement.</p>
          </div>
        </div>
      </section>

      {/* 6. HOMES / Secondary */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            HOMES Program &#8212; ~$291 Million (Not Yet Launched)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The HOMES (Home Efficiency Rebates) program provides rebates based on measured whole-home energy savings. California&apos;s DOE application was approved in January 2025.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            California&apos;s HOMES allocation will be split: 60% to the Equitable Building Decarbonization Direct Install Program and 40% to a new Pay for Performance program available to all income levels. This means HOMES will serve both income-qualified households through direct install and market-rate homeowners through performance-based rebates.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="font-semibold text-amber-800 mb-1">⚠ Not Retroactive</p>
            <p className="text-sm text-amber-900">Neither HOMES nor HEEHRA Phase II will apply retroactively. If you install a heat pump before these programs launch, you will not be eligible for their rebates. If you are counting on these programs, wait until they are officially accepting applications before beginning your project.</p>
          </div>
        </div>
      </section>

      {/* 7. Utility Programs */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Utility Rebates &#8212; The Primary Path in 2026
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            With statewide programs exhausted, your utility service area is the most important factor in determining what&apos;s available. California has over 60 electric utilities, each running their own programs. Availability and amounts vary significantly.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            SMUD (Sacramento) &#8212; Boosted February 2026
          </h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Upgrade Type</th>
                  <th className="text-left p-3 font-semibold">Rebate Amount</th>
                  <th className="text-left p-3 font-semibold">Requirements</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Gas-to-electric heat pump water heater</td>
                  <td className="p-3 font-semibold">Up to $4,000</td>
                  <td className="p-3">NEEA Tier III/IV, UEF &#8805; 2.87</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Gas-to-electric heat pump HVAC</td>
                  <td className="p-3 font-semibold">Up to $3,000</td>
                  <td className="p-3">Two-stage (15.2 SEER2 min) or variable-stage</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Electric-to-electric HVAC or HPWH upgrade</td>
                  <td className="p-3 font-semibold">$1,000</td>
                  <td className="p-3">Same efficiency requirements</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Go Electric panel + circuits bonus</td>
                  <td className="p-3 font-semibold">Up to $2,000</td>
                  <td className="p-3">Gas-to-electric conversion required</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            Must use a participating contractor in the SMUD Contractor Network. Rebates are subject to funding availability on a first-come, first-served basis. A SMUD customer doing a full gas-to-electric HVAC + HPWH conversion with panel upgrade can reach <strong>~$9,000</strong> in combined SMUD rebates.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            LADWP (Los Angeles) &#8212; Boosted November 2025
          </h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Upgrade Type</th>
                  <th className="text-left p-3 font-semibold">Rebate Amount</th>
                  <th className="text-left p-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Heat pump HVAC</td>
                  <td className="p-3 font-semibold">Up to $2,500/ton</td>
                  <td className="p-3">3-ton system = up to $7,500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">Up to $2,500/unit</td>
                  <td className="p-3">No income qualification</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            Universal &#8212; no income qualification. Building permit required. Apply within 12 months of installation.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Other Utilities
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            PG&amp;E, SCE, and SDG&amp;E primarily serve as administrators for statewide programs (TECH, SGIP) rather than offering standalone heat pump rebates. Municipal utilities like Silicon Valley Clean Energy may have separate offerings. PG&amp;E&apos;s Energy Savings Assistance program provides no-cost heat pump water heater and furnace upgrades for income-eligible homeowners. Use the <a href="https://incentives.switchison.org/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Switch Is On incentive finder</a> to check your specific utility.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            California Energy Smart Homes Program
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            For homeowners going fully electric (capping their gas meter), Energy Smart Homes provides at least <strong>$4,250</strong> in incentives, with bonuses for variable-capacity heat pumps, thermal energy storage, and load management that can push totals above <strong>$12,000</strong>. Confirmed through 2027 with no reductions to incentive levels expected. Applies to existing home alterations, not just new construction.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            GoGreen Financing
          </h3>
          <p className="text-gray-700 leading-relaxed">
            California&apos;s GoGreen Financing program was expanded with $30 million in new state funding. It provides low-interest loans for energy efficiency and electrification upgrades, including heat pumps. This is a financing option, not a rebate &#8212; but it can help bridge the gap when upfront incentives are limited.
          </p>
        </div>
      </section>

      {/* 9. Stacking */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How Programs Stack in California
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            California&apos;s stacking picture is unusual in 2026 because most statewide programs are exhausted. Stacking right now depends almost entirely on your utility. When HOMES and HEEHRA Phase II launch, stacking will improve significantly &#8212; both programs are expected to be stackable with utility incentives.
          </p>
          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">SMUD Customer &#8212; Gas-to-Electric Full Conversion</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>SMUD heat pump HVAC rebate: $3,000</li>
                <li>SMUD heat pump water heater rebate: $4,000</li>
                <li>SMUD Go Electric panel/circuits bonus: $2,000</li>
                <li>Federal tax credits: $0 (expired)</li>
                <li>TECH/HEEHRA: $0 (exhausted)</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$9,000</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">LADWP Customer &#8212; 3-Ton Heat Pump HVAC + HPWH</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>LADWP heat pump HVAC: $7,500 (3 tons &#215; $2,500)</li>
                <li>LADWP heat pump water heater: $2,500</li>
                <li>Federal tax credits: $0 (expired)</li>
                <li>TECH/HEEHRA: $0 (exhausted)</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$10,000</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">PG&amp;E / SCE / SDG&amp;E Customer &#8212; No Income Qualification</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Utility standalone rebate: likely $0 (most run statewide programs)</li>
                <li>Energy Smart Homes (if capping gas): $4,250+</li>
                <li>Federal tax credits: $0 (expired)</li>
                <li>TECH/HEEHRA: $0 (exhausted)</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$0&#8211;$4,250+</p>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg p-5 mb-6">
            <p className="font-semibold text-gray-900 mb-1">What You&apos;ll Actually Pay</p>
            <p className="text-sm text-gray-700">A typical whole-home heat pump HVAC installation in California costs <strong>$8,000&#8211;$16,000</strong> before incentives. SMUD customers installing now may pay <strong>$0&#8211;$7,000 out of pocket</strong> after rebates. LADWP customers may pay <strong>$0&#8211;$6,000</strong>. PG&amp;E/SCE/SDG&amp;E customers without Energy Smart Homes may pay <strong>$8,000&#8211;$16,000</strong> &#8212; the full cost &#8212; until HOMES or HEEHRA Phase II launch.</p>
          </div>
          <p className="text-sm text-gray-500">
            No state tax credit for heat pumps is available in California. GoGreen Financing provides low-interest loans but is not a rebate.
          </p>
        </div>
      </section>

      {/* 10. Weatherization */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Weatherization &amp; Income-Eligible Programs
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            California operates several weatherization and low-income energy programs that may cover heat pump installations at no cost for qualifying households.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>PG&amp;E Energy Savings Assistance Program</strong> provides no-cost heat pump water heater and furnace upgrades for income-eligible homeowners in PG&amp;E territory. Participants must live in a home at least five years old and meet income guidelines. The program runs through May 31, 2026.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Community Action Agencies</strong> administer California&apos;s Weatherization Assistance Program (WAP) with federal DOE and LIHEAP funding. Eligible households can receive free weatherization services and in some cases heating system replacements.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The TECH Clean California Low-Income Leveraging Pilot helped 520 households access electrification by partnering with existing efficiency programs.
          </p>
        </div>
      </section>

      {/* 11. Climate */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Climate Context: Why Heat Pumps Work Well in California
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            California&apos;s mild climate makes it one of the best states for air-source heat pumps. Most of the state falls within IECC Climate Zone 3, meaning standard (non-cold-climate) heat pumps can handle the heating season efficiently. The primary use case in California is cooling, where heat pumps are equally or more efficient than traditional central air conditioning.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">City</th>
                  <th className="text-left p-3 font-semibold">ASHRAE 99% Design Temp</th>
                  <th className="text-left p-3 font-semibold">Cold-Climate HP Needed?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Los Angeles</td>
                  <td className="p-3">43&#176;F</td>
                  <td className="p-3 text-gray-500">No</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">San Francisco</td>
                  <td className="p-3">40&#176;F</td>
                  <td className="p-3 text-gray-500">No</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Sacramento</td>
                  <td className="p-3">32&#176;F</td>
                  <td className="p-3 text-gray-500">No (standard ASHP sufficient)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">San Diego</td>
                  <td className="p-3">44&#176;F</td>
                  <td className="p-3 text-gray-500">No</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            In California&apos;s inland valleys (Sacramento, Central Valley), summer cooling loads are the bigger concern. Heat pumps replace both a furnace and an air conditioner in one system, simplifying the equipment and reducing maintenance costs. The primary fuel being displaced is natural gas &#8212; most California homes heat with gas furnaces.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Homeowners considering a heat pump alongside rooftop solar or battery storage should read our <Link href="/battery" className="text-brand-600 hover:underline">home battery guide</Link> &#8212; battery economics changed significantly in 2026 with the expiration of the federal Section 25D credit.
          </p>
        </div>
      </section>

      {/* 12. How to Apply */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How to Find and Claim California Heat Pump Rebates
          </h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-gray-900">Identify your electric utility</p>
                <p className="text-sm text-gray-700">Check your electricity bill for your utility provider. California has investor-owned utilities (PG&amp;E, SCE, SDG&amp;E), municipal utilities (SMUD, LADWP), and community choice aggregators. Your utility determines which rebates are available.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900">Check the Switch Is On incentive finder</p>
                <p className="text-sm text-gray-700">Visit <a href="https://incentives.switchison.org/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">incentives.switchison.org</a> and enter your ZIP code. This CPUC-partnered tool shows all available rebates for your location.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-900">Choose a qualified contractor</p>
                <p className="text-sm text-gray-700">For utility-specific programs (like SMUD), you need a contractor in their network. SMUD publishes average installation costs by system type on their rebate page. Request multiple bids.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <p className="font-semibold text-gray-900">Verify equipment eligibility and refrigerant</p>
                <p className="text-sm text-gray-700">As of January 2026, R-410A systems are ineligible &#8212; only systems using low-GWP refrigerants (R-32, R-454B) qualify. Equipment must meet ENERGY STAR program standards.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                5
              </div>
              <div>
                <p className="font-semibold text-gray-900">Explore financing if needed</p>
                <p className="text-sm text-gray-700">GoGreen Financing offers low-interest loans. Some utilities offer their own financing. Income-eligible households should contact their local Community Action Agency for additional support.</p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="font-semibold text-amber-800 mb-1">⚠ Common Mistake: Assuming HEEHRA Is Still Available</p>
            <p className="text-sm text-amber-900">Many websites still advertise $8,000 HEEHRA rebates in California. Single-family HEEHRA is fully reserved statewide. Anyone claiming they can get you an immediate federal rebate for a single-family home in California is not being accurate. The California Energy Commission has issued warnings about scam contacts. Never provide financial information to unsolicited callers.</p>
          </div>

          <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-5">
            <p className="font-semibold text-green-800 mb-1">✓ Best Candidates for Installing Now</p>
            <p className="text-sm text-green-900">SMUD customers (up to $9,000 combined for full conversion), LADWP customers (up to $10,000 for HVAC + HPWH), homeowners capping their gas meter (Energy Smart Homes $4,250+), and homeowners whose existing heating system is failing and cannot afford to wait for HOMES/HEEHRA Phase II.</p>
          </div>
        </div>
      </section>

      {/* 13. What to Watch */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What to Watch
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">HOMES Program Launch</p>
              <p className="text-sm text-gray-600 mt-1">California&apos;s ~$291 million HOMES allocation is approved but the program has not launched. The 60/40 split between direct install and Pay for Performance means both income-qualified and market-rate homeowners will eventually benefit. No launch date has been announced.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">HEEHRA Phase II ($152 Million)</p>
              <p className="text-sm text-gray-600 mt-1">Phase II funding is separate from the exhausted Phase I budget. The CEC is in the design phase. When launched, this will provide additional income-qualified rebates for heat pump HVAC, water heaters, and other electric appliances.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">IRA Funding Runway</p>
              <p className="text-sm text-gray-600 mt-1">Both HOMES and HEEHRA Phase II are funded through the IRA. Political uncertainty and potential federal funding freezes could affect timeline or availability. California&apos;s allocations are approved but not yet disbursed for consumer programs.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Refrigerant Transition</p>
              <p className="text-sm text-gray-600 mt-1">The January 2026 low-GWP refrigerant requirement eliminates R-410A from all California rebate programs. Contractors must install R-32 or R-454B systems. Equipment availability and pricing may shift as the industry transitions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 14. FAQ */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
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
              <Link href="/heat-pumps/states/or" className="text-brand-600 hover:underline">
                Oregon Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/nv" className="text-brand-600 hover:underline">
                Nevada Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/az" className="text-brand-600 hover:underline">
                Arizona Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li>
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                Federal Heat Pump Tax Credits Ended &#8212; What It Means
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

      {/* 16. Sources */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="space-y-2 text-sm">
            {caIncentive.sources.map((source: { label: string; url: string }, index: number) => (
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
              <strong>Disclaimer:</strong> This page covers the main statewide, utility, and IRA heat pump incentives available to California homeowners in 2026. It does not calculate savings, guarantee eligibility, or represent any incentive program. California has dozens of utilities and overlapping programs &#8212; your specific situation depends on your service area, income, home type, and timing. We verify status regularly but programs can change without notice. Always confirm current amounts and eligibility with your utility, the California Energy Commission, and your contractor before making decisions.
            </p>
          </div>
          <div className="mt-6 text-center">
            <Link href="/heat-pumps" className="text-brand-600 hover:underline text-sm">
              &#8592; Back to Heat Pumps overview
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
