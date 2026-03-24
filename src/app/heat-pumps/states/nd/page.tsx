import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "North Dakota Heat Pump Rebates 2026: $800/Ton Utility Rebates + HEAR Status | Home Energy Basics",
  description:
    "Otter Tail Power offers $800/ton. Xcel rebates reach $2,000. Federal credits ended. Here&apos;s every North Dakota heat pump incentive in 2026.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/nd",
  },
  openGraph: {
    title: "North Dakota Heat Pump Rebates 2026",
    description:
      "Utility rebates up to $3,200 for cold-climate systems — the complete guide to North Dakota heat pump incentives after federal credits expired.",
    url: "https://homeenergybasics.com/heat-pumps/states/nd",
    type: "article",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What heat pump rebates are available in North Dakota in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "With federal tax credits expired and state HEAR/HOMES programs not yet launched, utility rebates are the only active incentives. Otter Tail Power offers $300\u2013$800 per ton for air-source heat pumps. Xcel Energy offers $1,600\u2013$2,000 flat-rate rebates. Minnkota Power co-ops offer $150 per ton. Montana-Dakota Utilities offers no rebates.",
      },
    },
    {
      "@type": "Question",
      name: "Can I stack utility and HEAR rebates in North Dakota?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When HEAR launches, federal guidelines generally permit stacking with utility rebates since they come from different funding sources. However, total combined incentives typically cannot exceed 100% of project cost. As of March 2026, HEAR has not launched in North Dakota, so utility rebates are the only layer available.",
      },
    },
    {
      "@type": "Question",
      name: "Do heat pumps work in North Dakota winters?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cold-climate air-source heat pumps (ccASHP) rated to NEEP specifications can operate effectively in North Dakota, maintaining a COP of 1.75 or higher at 5\u00b0F. However, with ASHRAE design temperatures of -19\u00b0F to -25\u00b0F, a dual-fuel configuration with gas or propane backup is strongly recommended for the coldest hours. Ground-source (geothermal) heat pumps avoid this limitation entirely, maintaining COP values of 3.0\u20134.5 year-round.",
      },
    },
    {
      "@type": "Question",
      name: "Who administers North Dakota\u2019s heat pump programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The North Dakota Department of Commerce, Division of Community Services administers the state\u2019s IRA-funded HEAR and HOMES programs (not yet launched) and the Weatherization Assistance Program. Utility rebates are administered directly by each utility: Xcel Energy, Otter Tail Power Company, and individual rural electric cooperatives.",
      },
    },
    {
      "@type": "Question",
      name: "Why hasn\u2019t North Dakota launched HEAR or HOMES rebates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "North Dakota received $37.1 million for HEAR and $37.2 million for HOMES under the IRA. The state contracted with Franklin Energy for implementation, but applications are still pending DOE approval. No launch date has been announced. The Commerce Department warns that any current offers claiming to be HEAR/HOMES rebates are likely scams.",
      },
    },
  ],
};

export default function NorthDakotaPage() {
  const ndIncentive = incentives.ND;
  const formattedDate = formatDate(ndIncentive.lastVerified);

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
            {" "}/ North Dakota
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            North Dakota Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            North Dakota&apos;s heat pump incentives come entirely from utilities in 2026.
            Otter Tail Power offers up to <strong>$800 per ton</strong> for cold-climate systems,
            and Xcel Energy provides up to <strong>$2,000</strong> in flat-rate rebates.
            Federal tax credits are gone, and the state&apos;s IRA-funded HEAR and HOMES programs
            have not launched. This guide covers all major North Dakota heat pump incentives
            available in 2026, including Xcel Energy, Otter Tail Power, Minnkota Power co-ops,
            and the pending HEAR/HOMES programs. Here&apos;s what&apos;s actually available.
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
          <StatusCard incentive={ndIncentive} />
        </div>
      </section>

      {/* 3. Short Version */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Short Version</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Otter Tail Power: Up to $800/Ton</p>
              <p className="text-sm text-green-900">Cold-climate air-source heat pumps qualify for $800 per ton. A typical 4-ton system yields $3,200 in rebates. Geothermal systems qualify for $1,200 per ton.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Xcel Energy: Up to $2,000 Flat Rate</p>
              <p className="text-sm text-green-900">Cold-climate heat pumps earn a $2,000 rebate for combined gas and electric customers. Standard heat pumps earn $1,600. Heat pump water heaters add $400.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Total Potential Savings</p>
              <p className="text-sm text-green-900">$900 (Minnkota co-op territory) to $3,400 (Otter Tail Power territory) from utility rebates alone. If HEAR launches, income-qualified households could reach ~$17,000 total incentives.</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">✗ Federal Tax Credits Expired</p>
              <p className="text-sm text-red-900">Section 25C ($2,000 heat pump credit) and Section 25D (30% geothermal credit) both expired December 31, 2025. No replacement legislation has been introduced.</p>
            </div>
            <div className="md:col-span-2 bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="font-semibold text-amber-800 mb-1">⚠ HEAR and HOMES Have Not Launched</p>
              <p className="text-sm text-amber-900">North Dakota received $74.3 million in IRA funding for HEAR ($37.1M) and HOMES ($37.2M), but neither program is accepting applications. No launch date exists. The ND Commerce Department warns that any current offers related to these programs are likely scams.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Federal Expired */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Federal Tax Credits Have Ended</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <p className="text-red-900 leading-relaxed">
              <strong>Section 25C</strong> (Energy Efficient Home Improvement Credit) and{" "}
              <strong>Section 25D</strong> (Residential Clean Energy Credit) both expired on{" "}
              <strong>December 31, 2025</strong>, under the One Big Beautiful Bill Act (Public Law 119-21).
              The 25C credit previously covered up to <strong>$2,000</strong> for qualifying heat pumps.
              The 25D credit covered <strong>30% of installed cost</strong> for geothermal heat pumps
              with no dollar cap. Neither credit is available for systems installed in 2026.
              For details, see our{" "}
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-red-700 underline hover:text-red-900">
                federal heat pump tax credit explainer
              </Link>.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            The IRS has clarified that eligibility depends on when <strong>installation is completed</strong>,
            not when payment is made. A heat pump purchased in December 2025 but installed in January 2026
            does not qualify. However, homeowners who completed qualifying installations before the deadline
            but lacked sufficient tax liability may carry forward unused credit amounts to future tax years.
          </p>
        </div>
      </section>

      {/* 5. HEAR / Primary State Program */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Home Electrification and Appliance Rebates (HEAR)</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            North Dakota received <strong>$37.1 million</strong> in federal IRA funding for HEAR,
            which would provide point-of-sale rebates on heat pumps, heat pump water heaters,
            insulation, electrical panels, and wiring. The program is administered by the
            North Dakota Department of Commerce, Division of Community Services, with
            Franklin Energy contracted for implementation. As of March 2026, the program
            has not launched and no estimated start date has been announced.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Planned HEAR Rebate Amounts (When Launched)</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Maximum Rebate</th>
                  <th className="text-left p-3 font-semibold">Income Requirement</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Heat pump (ASHP or GSHP)</td>
                  <td className="p-3 font-semibold">$8,000</td>
                  <td className="p-3">100% at ≤80% AMI; 50% at 80–150% AMI</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">$1,750</td>
                  <td className="p-3">100% at ≤80% AMI; 50% at 80–150% AMI</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Electrical panel upgrade</td>
                  <td className="p-3 font-semibold">$4,000</td>
                  <td className="p-3">100% at ≤80% AMI; 50% at 80–150% AMI</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Insulation and air sealing</td>
                  <td className="p-3 font-semibold">$1,600</td>
                  <td className="p-3">100% at ≤80% AMI; 50% at 80–150% AMI</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Electric wiring</td>
                  <td className="p-3 font-semibold">$2,500</td>
                  <td className="p-3">100% at ≤80% AMI; 50% at 80–150% AMI</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">Per-household cap</td>
                  <td className="p-3 font-semibold">$14,000</td>
                  <td className="p-3">Above 150% AMI not eligible</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="font-semibold text-amber-800 mb-1">⚠ Beware of Scams</p>
            <p className="text-sm text-amber-900">The ND Department of Commerce has warned that any offers in North Dakota currently claiming to be HEAR or HOMES rebates are likely scams or fraudulent. These programs are not yet accepting applications.</p>
          </div>
        </div>
      </section>

      {/* 6. HOMES / Secondary */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Home Owner Managing Energy Savings (HOMES)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            North Dakota also received <strong>$37.2 million</strong> for the HOMES program,
            which funds whole-house energy-saving retrofits based on measured or modeled energy
            reductions. Like HEAR, the HOMES application has been submitted to DOE but the
            program has not launched and no timeline exists.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Both HEAR and HOMES were <strong>not repealed</strong> by the One Big Beautiful Bill Act
            and remain federally authorized with funds available until expended or September 30, 2031.
            North Dakota could still launch these programs, but no public timeline has been provided.
          </p>
        </div>
      </section>

      {/* 7. Utility Programs */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Utility Rebate Programs</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            With no federal or state rebates active, utility programs are the only financial
            incentive for North Dakota heat pump buyers in 2026. Rebate amounts vary significantly
            by utility territory.
          </p>

          {/* Xcel Energy */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Xcel Energy (Fargo Area)</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Xcel Energy serves the Fargo metropolitan area with both gas and electric service. Its
            joint Minnesota/North Dakota residential rebate program runs through the 2024–2026 cycle.
            Rebates are per-unit (not per-ton), making them particularly attractive for smaller systems.
            Quality Installation requires using an Xcel-registered contractor.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Requirements</th>
                  <th className="text-left p-3 font-semibold">Rebate (Gas+Electric)</th>
                  <th className="text-left p-3 font-semibold">Rebate (Electric Only)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Standard ASHP</td>
                  <td className="p-3">15.2 SEER2, 7.8 HSPF2 + QI</td>
                  <td className="p-3 font-semibold">$1,600</td>
                  <td className="p-3 font-semibold">$1,100</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Cold-climate ASHP</td>
                  <td className="p-3">15.2 SEER2, 8.1 HSPF2, NEEP-listed</td>
                  <td className="p-3 font-semibold">$2,000</td>
                  <td className="p-3 font-semibold">$1,500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Mini-split HP</td>
                  <td className="p-3">15.2 SEER2, 8.5 HSPF2</td>
                  <td className="p-3 font-semibold">$1,600</td>
                  <td className="p-3 text-gray-500">—</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Cold-climate mini-split</td>
                  <td className="p-3">16.0 SEER2, 9.5 HSPF2, NEEP-listed</td>
                  <td className="p-3 font-semibold">$2,000</td>
                  <td className="p-3 text-gray-500">—</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ground-source HP</td>
                  <td className="p-3">16 EER2, 3.3 COP + QI</td>
                  <td className="p-3 font-semibold">$500/ton</td>
                  <td className="p-3 text-gray-500">—</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3">ENERGY STAR rated</td>
                  <td className="p-3 font-semibold">$400</td>
                  <td className="p-3 font-semibold">$400</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-blue-800 mb-1">Xcel Bonus Opportunities</p>
            <p className="text-sm text-blue-900">Xcel offers a $600 insulation + heat pump bonus for customers who install qualifying insulation followed by a heat pump within two years. A Whole Home Efficiency bonus adds 25% to standard rebates when you complete three or more qualifying projects. An Electric Space Heating Rate provides discounted electricity from October through May.</p>
          </div>

          {/* Otter Tail Power */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Otter Tail Power Company (Eastern ND)</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Otter Tail Power (OTP) serves parts of eastern North Dakota and provides the most
            aggressive per-ton rebates in the state. Rebates are calculated per cooling ton,
            and a typical residential system runs 3–5 tons. Rebates cannot exceed{" "}
            <strong>75% of project cost</strong> (50% for geothermal), and requests over $10,000
            require prior approval.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Requirements</th>
                  <th className="text-left p-3 font-semibold">Base Rebate</th>
                  <th className="text-left p-3 font-semibold">With Energy Control</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Cold-climate ASHP (ducted)</td>
                  <td className="p-3">SEER2 ≥16.0, HSPF2 ≥8.0</td>
                  <td className="p-3 font-semibold">$800/ton</td>
                  <td className="p-3 font-semibold">$840/ton</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Cold-climate ASHP (ductless)</td>
                  <td className="p-3">SEER2 ≥16.0, HSPF2 ≥8.0</td>
                  <td className="p-3 font-semibold">$600/ton</td>
                  <td className="p-3 font-semibold">$640/ton</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Standard ASHP</td>
                  <td className="p-3">SEER2 ≥14.3, HSPF2 ≥7.5</td>
                  <td className="p-3 font-semibold">$300/ton</td>
                  <td className="p-3 font-semibold">$340/ton</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Geothermal HP</td>
                  <td className="p-3">—</td>
                  <td className="p-3 font-semibold">$1,200/ton</td>
                  <td className="p-3 text-gray-500">—</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3">ENERGY STAR</td>
                  <td className="p-3 font-semibold">$200</td>
                  <td className="p-3 text-gray-500">—</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            The <strong>$40/ton energy control bonus</strong> applies when the system operates on
            OTP&apos;s Dual Fuel, Deferred Load, or Residential Demand Control rate. OTP&apos;s
            Deferred Load rate can reduce electric heating costs by up to 30%. OTP also offers
            a <strong>$150 heat pump tune-up rebate</strong> (once per 10 years).
          </p>

          {/* Montana-Dakota Utilities */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Montana-Dakota Utilities (Western ND)</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            MDU serves Bismarck, Dickinson, Williston, and other western communities primarily
            as a natural gas utility. MDU explicitly states:{" "}
            <strong>&quot;There are no incentive programs for North Dakota residential customers
            at this time.&quot;</strong> No heat pump, heat pump water heater, or energy efficiency
            rebates of any kind are available from MDU in North Dakota.
          </p>

          {/* Electric Cooperatives */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Electric Cooperatives</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            North Dakota&apos;s rural electric cooperatives fall into two generation-and-transmission
            structures, each with distinct rebate programs.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Minnkota Power Co-ops (Eastern ND)</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Minnkota Power operates the centralized Value of Electricity (VOE) program across its
            member cooperatives, including Cass County Electric (Fargo area), Nodak Electric
            (Grand Forks area), and Cavalier Rural Electric.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                  <th className="text-left p-3 font-semibold">Maximum</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Air-source heat pump</td>
                  <td className="p-3 font-semibold">$150/ton</td>
                  <td className="p-3">$1,500 per off-peak meter</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ground-source heat pump</td>
                  <td className="p-3 font-semibold">$250/ton</td>
                  <td className="p-3">$1,500 per off-peak meter</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            Minnkota co-ops do <strong>not</strong> require heat pumps to participate in off-peak load
            management to receive the rebate. Off-peak electric rates range from{" "}
            <strong>$0.064–$0.081/kWh</strong>, providing significant ongoing savings beyond the
            upfront rebate.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Basin Electric Co-ops (Western/Central ND)</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Basin Electric does not operate a centralized rebate program. Each member cooperative
            sets its own terms:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Co-op</th>
                  <th className="text-left p-3 font-semibold">ASHP Rebate</th>
                  <th className="text-left p-3 font-semibold">GSHP Rebate</th>
                  <th className="text-left p-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Capital Electric (Bismarck)</td>
                  <td className="p-3 font-semibold">Varies</td>
                  <td className="p-3 font-semibold">Varies</td>
                  <td className="p-3">Call 701-223-1513; submetered heat rate available</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Verendrye Electric (Minot)</td>
                  <td className="p-3 font-semibold">$125/ton</td>
                  <td className="p-3 font-semibold">$250/ton</td>
                  <td className="p-3">Max $500 ASHP, $1,000 GSHP; 5% financing available</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">McLean Electric (Garrison)</td>
                  <td className="p-3 font-semibold">$100/ton</td>
                  <td className="p-3 font-semibold">$300/ton</td>
                  <td className="p-3">5-ton max for ASHP</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Roughrider Electric (western ND)</td>
                  <td className="p-3 font-semibold">Active</td>
                  <td className="p-3 font-semibold">Active</td>
                  <td className="p-3">Program runs through December 31, 2026</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">
            No cooperative in North Dakota offers income-qualified enhanced rebates or adders.
          </p>
        </div>
      </section>

      {/* Skip section 8 (Local Programs) — none exist in ND */}

      {/* 9. Stacking */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Programs Stack</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Stacking in North Dakota is straightforward — because so few programs are active.
            Utility rebates are currently the only layer available. When HEAR launches, federal
            guidelines generally permit stacking with utility rebates since they come from different
            funding sources, but total combined incentives cannot exceed 100% of project cost.
            The scenarios below show what a 4-ton ducted cold-climate air-source heat pump with a
            heat pump water heater looks like in each utility territory, assuming a total installed
            cost of <strong>$16,000–$20,000</strong>.
          </p>

          <div className="space-y-4 mb-8">
            {/* Above 150% AMI */}
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 150% AMI — 4-Ton Cold-Climate ASHP + HPWH</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Otter Tail Power ccASHP rebate (4 tons × $800): $3,200</li>
                <li>OTP heat pump water heater rebate: $200</li>
                <li>Federal tax credit: $0 (expired)</li>
                <li>HEAR: $0 (not launched; above 150% AMI ineligible even when active)</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$3,400</p>
              <p className="text-sm text-gray-500 mt-1">Xcel territory: ~$3,000 (ccASHP $2,000 + insulation bonus $600 + HPWH $400). Minnkota co-op territory: ~$900. MDU territory: $0.</p>
            </div>

            {/* 80–150% AMI */}
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">80–150% AMI — 4-Ton Cold-Climate ASHP + HPWH (if HEAR Launches)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>HEAR heat pump rebate (50% coverage): up to $4,000</li>
                <li>HEAR heat pump water heater (50%): up to $875</li>
                <li>OTP ccASHP rebate (4 tons × $800): $3,200</li>
                <li>OTP heat pump water heater rebate: $200</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum if HEAR launches: ~$8,275</p>
              <p className="text-sm text-gray-500 mt-1">Without HEAR (current reality): same as above 150% AMI — utility rebates only.</p>
            </div>

            {/* Below 80% AMI */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">Below 80% AMI — 4-Ton Cold-Climate ASHP + HPWH (if HEAR Launches)</p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>HEAR heat pump rebate (100% coverage): up to $8,000</li>
                <li>HEAR heat pump water heater (100%): up to $1,750</li>
                <li>HEAR electrical panel (if needed): up to $4,000</li>
                <li>OTP ccASHP rebate (4 tons × $800): $3,200</li>
                <li>OTP heat pump water heater rebate: $200</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Theoretical maximum if HEAR launches: ~$17,150 (capped at $14,000 HEAR + $3,400 utility)</p>
              <p className="text-sm text-green-800 mt-1">Without HEAR (current reality): utility rebates only — ~$3,400 in OTP territory.</p>
            </div>
          </div>

          {/* What you'll actually pay */}
          <div className="bg-gray-100 rounded-lg p-5">
            <p className="font-semibold text-gray-900 mb-1">What You&apos;ll Actually Pay (2026, Utility Rebates Only)</p>
            <p className="text-sm text-gray-700">
              For a 4-ton cold-climate system installed for $16,000–$20,000: expect to pay{" "}
              <strong>$12,600–$19,100 out of pocket</strong> depending on your utility territory.
              OTP customers pay the least (~$12,600–$16,600). Xcel customers pay ~$13,000–$17,000.
              Minnkota co-op customers pay ~$15,100–$19,100. MDU customers pay the full cost with
              no utility offset.
            </p>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            North Dakota has no state tax credits, no state heat pump loan program, and no
            local municipal rebates. These figures reflect utility rebates as the sole incentive layer.
          </p>
        </div>
      </section>

      {/* 10. Weatherization */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Weatherization Assistance Program</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Weatherization Assistance Program (WAP) is the one active state-administered program
            that can help low-income North Dakota households reduce energy costs. Funded by the
            U.S. Department of Energy and administered through eight regional Community Action Agencies,
            WAP provides free weatherization services — insulation, weather stripping, furnace repair
            or replacement, and other cost-effective energy measures.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Eligibility requires household income at or below <strong>200% of the federal poverty
            level</strong>. LIHEAP clients are automatically eligible. Households may receive
            weatherization only once unless the home was last weatherized more than 15 years ago.
            Contact the Division of Community Services at <strong>701-328-5341</strong> or your
            local Community Action Agency to apply.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <p className="font-semibold text-green-800 mb-1">✓ Best Candidates for WAP + Heat Pump</p>
            <p className="text-sm text-green-900">Low-income homeowners heating with propane or fuel oil in rural North Dakota stand to benefit most. WAP can address insulation and air sealing at no cost, improving the home envelope before a heat pump installation. If HEAR launches, these households would qualify for the maximum rebate tier.</p>
          </div>
        </div>
      </section>

      {/* 11. Climate Context */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Climate Context: Extreme Cold Demands the Right Equipment</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            North Dakota is among the coldest states in the continental U.S. Three of the state&apos;s
            four largest cities fall in <strong>IECC Climate Zone 7</strong> (&quot;Very Cold&quot;),
            with Bismarck in Zone 6A. These temperatures push current air-source heat pump technology
            to its limits and make equipment selection critical.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">City</th>
                  <th className="text-left p-3 font-semibold">ASHRAE 99.6% Design Temp</th>
                  <th className="text-left p-3 font-semibold">IECC Climate Zone</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Bismarck</td>
                  <td className="p-3 font-semibold">-20.8°F</td>
                  <td className="p-3">6A</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Fargo</td>
                  <td className="p-3 font-semibold">-19°F to -22°F</td>
                  <td className="p-3">7</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Grand Forks</td>
                  <td className="p-3 font-semibold">-22°F to -25°F</td>
                  <td className="p-3">7</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Minot</td>
                  <td className="p-3 font-semibold">-22°F to -24°F</td>
                  <td className="p-3">7</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-amber-800 mb-1">⚠ Common Mistake: Installing a Standard Heat Pump Without Backup</p>
            <p className="text-sm text-amber-900">Standard air-source heat pumps lose capacity rapidly below 5°F and may shut down entirely at -10°F or colder. In North Dakota, a dual-fuel configuration — pairing a cold-climate heat pump (NEEP-listed, COP ≥1.75 at 5°F) with a gas or propane furnace for backup — is essential, not optional. The heat pump handles the majority of heating hours efficiently while backup engages only during the coldest 35–88 hours per year.</p>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Natural gas is the dominant heating fuel</strong> in North Dakota at roughly 46% of
            households, followed by electricity (34%, mostly resistance heat), propane (15%), and fuel
            oil (4%). North Dakota has the <strong>highest residential energy consumption per
            capita</strong> of any U.S. state, reflecting both the extreme climate and older housing stock.
            Natural gas prices in North Dakota run approximately 41% below the national average,
            which weakens the operating cost case for switching from gas to heat pump.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            The strongest candidates for air-source heat pumps are the <strong>~15% of households
            heating with propane</strong> and the 4% using fuel oil, where heat pump operating costs
            can be competitive even with North Dakota&apos;s extreme temperatures.{" "}
            <strong>Ground-source (geothermal) heat pumps</strong> sidestep the cold-air problem
            entirely — ground temperatures remain ~45–50°F year-round at typical loop depths,
            enabling consistent COP values of 3.0–4.5 regardless of outdoor conditions. For
            more on energy storage options, see our{" "}
            <Link href="/battery" className="text-brand-600 hover:underline">home battery guide</Link>.
          </p>
        </div>
      </section>

      {/* 12. How to Apply */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Apply</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Since utility rebates are the only active incentive, the application process depends
            on your electric utility. Here&apos;s the general process:
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-gray-900">Identify Your Electric Utility</p>
                <p className="text-sm text-gray-700">Check your electric bill to confirm whether you&apos;re served by Xcel Energy, Otter Tail Power, a Minnkota co-op (Cass County, Nodak, Cavalier), a Basin Electric co-op (Capital, Verendrye, McLean, Roughrider), or MDU. Your rebate options depend entirely on this.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900">Choose a Qualifying System and Contractor</p>
                <p className="text-sm text-gray-700">Select a cold-climate heat pump that meets your utility&apos;s minimum efficiency requirements (SEER2, HSPF2, NEEP listing). Xcel requires a registered Quality Installation contractor. For OTP, confirm the per-ton rebate tier before purchasing.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-900">Complete Installation and Submit Rebate Application</p>
                <p className="text-sm text-gray-700">After installation, submit the rebate form through your utility&apos;s website or by mail. Xcel and OTP both offer online rebate applications. Co-op members should contact their local cooperative office directly. Keep all invoices, model numbers, and AHRI certificates.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <p className="font-semibold text-gray-900">Enroll in Off-Peak or Dual Fuel Rates</p>
                <p className="text-sm text-gray-700">Ask about discounted heating rates. OTP&apos;s Deferred Load rate saves up to 30% on electric heating. Minnkota co-ops offer off-peak rates as low as $0.064/kWh. These ongoing savings often exceed the one-time rebate value over the system&apos;s lifetime.</p>
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
              <p className="font-semibold text-gray-900">HEAR/HOMES Launch Timeline</p>
              <p className="text-sm text-gray-600 mt-1">North Dakota&apos;s $74.3 million in IRA-funded rebates remain authorized but unlaunched. The Commerce Department&apos;s Home Energy Rebates page is the official source for launch announcements. When active, HEAR alone could provide up to $8,000 per household for heat pump installations.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">IRA Funding Runway</p>
              <p className="text-sm text-gray-600 mt-1">While the OBBB Act repealed federal tax credits, it did not rescind IRA rebate funding already allocated to states. North Dakota&apos;s HEAR and HOMES funds remain available until expended or September 30, 2031. However, political pressure to claw back unspent IRA funds could change this.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Xcel Energy 2024–2026 Program Cycle</p>
              <p className="text-sm text-gray-600 mt-1">Xcel&apos;s current rebate program runs through the end of 2026. Rebate amounts and efficiency requirements may change when the next program cycle begins in 2027. If you&apos;re in Xcel territory, locking in current rebates before year-end is worth considering.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Cold-Climate Heat Pump Technology Advances</p>
              <p className="text-sm text-gray-600 mt-1">The DOE Cold Climate Heat Pump Challenge has produced units operating at -23°F in lab testing. As these next-generation ccASHPs reach market, North Dakota homeowners may eventually be able to reduce or eliminate backup heating requirements — making the economics more favorable.</p>
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
              <Link href="/heat-pumps/states/mn" className="text-brand-600 hover:underline">
                Minnesota Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li className="text-gray-500">
              South Dakota Heat Pump Rebates <em>(coming soon)</em>
            </li>
            <li className="text-gray-500">
              Montana Heat Pump Rebates <em>(coming soon)</em>
            </li>
            <li>
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                Federal Heat Pump Tax Credits Have Ended — What to Know
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
            {ndIncentive.sources.map((source: { label: string; url: string }, index: number) => (
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
              utility, and IRA heat pump incentives available to North Dakota
              homeowners in 2026. It does not calculate savings, guarantee
              eligibility, or represent any incentive program. Utility rebate
              amounts and program terms may differ from what is shown here;
              cooperative rebates in particular vary by member and may change
              without notice. We verify status regularly but programs can change
              without notice. Always confirm current amounts and eligibility with
              your electric utility, the ND Department of Commerce, and your
              contractor before making decisions.
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
