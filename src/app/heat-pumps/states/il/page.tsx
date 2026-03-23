import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Illinois Heat Pump Rebates & Incentives 2026: ComEd, Ameren, MidAmerican | Home Energy Basics",
  description:
    "Federal tax credits ended. Utility rebates of $300–$2,000 through ComEd, Ameren Illinois, and MidAmerican Energy are the primary incentive. Illinois HEAR and HOMES remain pending. Here's the complete 2026 picture.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/il",
  },
  openGraph: {
    title: "Illinois Heat Pump Rebates & Incentives 2026",
    description:
      "ComEd, Ameren Illinois, MidAmerican Energy — utility-by-utility heat pump rebate guide for Illinois. Federal credits gone, state IRA programs pending.",
    url: "https://homeenergybasics.com/heat-pumps/states/il",
    type: "article",
  },
};

export default function IllinoisPage() {
  const ilIncentive = incentives.IL;
  const formattedDate = formatDate(ilIncentive.lastVerified);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What heat pump rebates are available in Illinois in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Illinois heat pump rebates in 2026 come from your electric utility. ComEd offers up to $2,000 for ducted heat pumps and up to $1,000 for ductless systems. Ameren Illinois offers $900 for ducted and $630 for ductless. MidAmerican Energy offers $300–$713 with a cold-climate premium. The federal 25C tax credit expired December 31, 2025. Illinois HEAR and HOMES rebate programs have not yet launched.",
        },
      },
      {
        "@type": "Question",
        name: "Is there a federal tax credit for heat pumps in Illinois in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. The federal Section 25C Energy Efficient Home Improvement Credit expired December 31, 2025 under the One Big Beautiful Bill Act. Equipment purchased in 2025 but installed in 2026 does not qualify. There is no federal tax credit for heat pump installations in 2026.",
        },
      },
      {
        "@type": "Question",
        name: "What is the status of Illinois HEAR rebates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Illinois received $131.5 million for the HEAR program (Home Electrification and Appliance Rebates), but as of March 2026 the program is not operational. DOE approval has not been finalized. Illinois is initially allocating 100% of HEAR funds to low-income households at or below 80% AMI. Retroactive rebates will not be offered.",
        },
      },
      {
        "@type": "Question",
        name: "Do Nicor Gas or Peoples Gas offer heat pump rebates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Illinois gas utilities — Nicor Gas, Peoples Gas, and North Shore Gas — do not offer rebates for electric heat pumps. Their programs support only gas equipment. If you have both ComEd and Nicor Gas service, your heat pump rebate comes from ComEd.",
        },
      },
      {
        "@type": "Question",
        name: "Can I stack utility rebates with HEAR or HOMES rebates in Illinois?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, when those programs launch. Utility rebates can stack with HEAR or HOMES rebates. HEAR and HOMES cannot be combined on the same measure, but can cover different measures on the same project. Total rebates cannot exceed total project cost.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a cold-climate heat pump in Illinois?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Chicago's ASHRAE winter design temperature is −5°F. Cold-climate-rated heat pumps — meeting ENERGY STAR's Cold Climate specification of COP ≥1.75 at 5°F — are essential for reliable heating performance in most of Illinois.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd data={faqJsonLd} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="container-narrow">
          <nav className="text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-brand-600">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/heat-pumps" className="hover:text-brand-600">
              Heat Pumps
            </Link>{" "}
            / Illinois
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Illinois heat pump rebates and incentives in 2026
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            With federal tax credits gone and state IRA rebate programs still
            pending launch, utility rebates are the main financial incentive
            available to Illinois homeowners in 2026. ComEd customers in the
            Chicago area can access up to $2,000, Ameren Illinois serves central
            and southern Illinois with instant discounts up to $900, and
            MidAmerican Energy is the only major utility offering a cold-climate
            heat pump premium. Here&apos;s what&apos;s actually available.
          </p>
          <p className="text-sm text-gray-500">
            Last verified: {formattedDate}
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Rates and program availability may change after this date.
          </p>
        </div>
      </section>

      {/* Status Card */}
      <section className="py-8">
        <div className="container-narrow">
          <StatusCard incentive={ilIncentive} />
        </div>
      </section>

      {/* Short Version */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            The short version
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <div className="text-green-700 font-semibold text-sm mb-1">
                ✓ Available now
              </div>
              <p className="text-gray-900 font-medium">
                ComEd rebates (up to $2,000)
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Ducted heat pumps in Chicago metro and northern Illinois.
                Up to $1,000 for ductless mini-splits.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <div className="text-green-700 font-semibold text-sm mb-1">
                ✓ Available now
              </div>
              <p className="text-gray-900 font-medium">
                Ameren Illinois instant discounts ($900)
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Central and southern Illinois. Applied at point of purchase
                through participating distributors.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <div className="text-green-700 font-semibold text-sm mb-1">
                ✓ Available now
              </div>
              <p className="text-gray-900 font-medium">
                MidAmerican Energy ($300–$713)
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Western Illinois / Quad Cities. Only major IL utility with a
                cold-climate heat pump premium.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <div className="text-red-700 font-semibold text-sm mb-1">
                ✗ Gone
              </div>
              <p className="text-gray-900 font-medium">
                Federal tax credits (25C and 25D)
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Both expired December 31, 2025 under the One Big Beautiful Bill
                Act. Equipment installed in 2026 does not qualify even if
                purchased in 2025.
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
              <div className="text-amber-700 font-semibold text-sm mb-1">
                ⚠ Pending
              </div>
              <p className="text-gray-900 font-medium">
                Illinois HEAR &amp; HOMES ($263M allocated)
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Not yet operational. DOE approval not finalized. Initially
                targeting 100% of funds to households ≤80% AMI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Federal Credits */}
      <section className="py-8 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Federal tax credits — gone for 2026
          </h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-4">
            <p className="font-semibold text-red-800 mb-2">
              Both credits expired December 31, 2025
            </p>
            <p className="text-gray-700 leading-relaxed">
              The <strong>25C</strong> (Energy Efficient Home Improvement Credit,
              up to $2,000 for heat pumps) and <strong>25D</strong> (Residential
              Clean Energy Credit, 30% for geothermal) were both terminated by
              the One Big Beautiful Bill Act. Equipment purchased in 2025 but
              installed in 2026 does not qualify — the IRS defines eligibility by
              when installation is completed, not when equipment is purchased.
              Homeowners who completed qualifying 25D installations (geothermal)
              by December 31, 2025 may still carry forward unused credit to
              future tax years.
            </p>
          </div>
          <p className="text-sm text-gray-500">
            Sources:{" "}
            <a
              href="https://www.irs.gov/credits-deductions/energy-efficient-home-improvement-credit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              IRS — 25C
            </a>
            {" · "}
            <a
              href="https://www.irs.gov/newsroom/faqs-for-modification-of-sections-25c-25d-25e-30c-30d-45l-45w-and-179d-under-public-law-119-21-139-stat-72-july-4-2025-commonly-known-as-the-one-big-beautiful-bill-obbb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              IRS — OBBB FAQs
            </a>
          </p>
        </div>
      </section>

      {/* State Programs */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            State programs — funded but pending
          </h2>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-4">
            <p className="font-semibold text-amber-800 mb-2">
              ⚠ HEAR (Home Electrification and Appliance Rebates) — not yet
              operational
            </p>
            <p className="text-gray-700 leading-relaxed">
              Illinois received $131.5 million for HEAR. The Illinois EPA
              administers it, but DOE approval has not been finalized. When
              launched, HEAR will offer up to{" "}
              <strong>$8,000 for a heat pump</strong>, up to $1,750 for a heat
              pump water heater, and up to $14,000 total per household. Illinois
              is initially allocating 100% of HEAR funds to{" "}
              <strong>low-income households (≤80% AMI)</strong>, with rebates
              covering up to 100% of costs. Retroactive rebates will not be
              offered.
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-4">
            <p className="font-semibold text-amber-800 mb-2">
              ⚠ HOMES (Home Efficiency Rebates) — pilot phase, pending DOE
              approval
            </p>
            <p className="text-gray-700 leading-relaxed">
              Illinois received $132 million for HOMES, administered by DCEO
              through local agencies. Final consumer-facing rebate pathways and
              pilot details are not yet fully live. Rebates will be based on
              modeled whole-home energy savings, with higher amounts for
              income-qualified households. Illinois is initially targeting 100%
              of HOMES funds to low-income households (≤80% AMI).
            </p>
          </div>

          <div className="space-y-3 mt-6">
            <p className="text-gray-700 leading-relaxed">
              <strong>State tax credits:</strong> Illinois does not currently
              offer a state income tax credit for residential heat pumps.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Financing:</strong> The{" "}
              <a
                href="https://www.ilenergyloan.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 hover:underline"
              >
                Illinois Energy Loan Program
              </a>{" "}
              offers on-bill financing for heat pumps at 7.74% fixed APR with
              terms of 1–10 years. This is not a subsidized low-interest
              program.
            </p>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Sources:{" "}
            <a
              href="https://epa.illinois.gov/topics/energy/energy-rebates.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              Illinois EPA — Energy Rebates
            </a>
            {" · "}
            <a
              href="https://www.ilsag.info/wp-content/uploads/IEPA-Office-of-Energy-IRA-Home-Energy-Rebate-Update-7.23.2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              ILSAG IRA Update (July 2025)
            </a>
          </p>
        </div>
      </section>

      {/* Utility Rebates */}
      <section className="py-8 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Utility rebates — this is where the money is
          </h2>
          <p className="text-gray-600 mb-6">
            Your electric utility determines which rebate you can access. Gas
            utilities (Nicor Gas, Peoples Gas, North Shore Gas) do not offer
            electric heat pump rebates.
          </p>

          {/* ComEd */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              ComEd — Chicago metro &amp; northern Illinois
            </h3>
            <div className="grid md:grid-cols-3 gap-3 mb-4">
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-green-700">Up to $2,000</p>
                <p className="text-sm text-gray-600">Ducted heat pump</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-green-700">Up to $1,000</p>
                <p className="text-sm text-gray-600">Ductless mini-split</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-green-700">Up to $2,075</p>
                <p className="text-sm text-gray-600">With smart thermostat</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-3">
              Rebates are tiered by efficiency — higher SEER2 and HSPF2 ratings
              earn larger rebates. A{" "}
              <strong>
                ComEd Residential Heating and Cooling Trade Ally
              </strong>{" "}
              must perform the installation. Check ComEd&apos;s current program
              materials for application deadlines.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Income-eligible customers</strong> can access enhanced
              rebates and whole-home electrification improvements (including heat
              pump water heaters) through ComEd&apos;s Income Eligible Solutions
              program.
            </p>
            <p className="text-sm text-gray-500 mt-3">
              <a
                href="https://www.comed.com/ways-to-save/for-your-home/rebates-discounts/heating-cooling-discounts"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 hover:underline"
              >
                ComEd Heating &amp; Cooling Rebates ↗
              </a>
              {" · "}
              <a
                href="https://goelectric.comed.com/incentives-and-financing/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 hover:underline"
              >
                ComEd Go Electric ↗
              </a>
            </p>
          </div>

          {/* Ameren */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Ameren Illinois — central &amp; southern Illinois
            </h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Ameren offers <strong>instant discounts</strong> applied at the
              point of purchase through participating distributors — no separate
              rebate application needed:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-2 px-3">Equipment</th>
                    <th className="text-right py-2 px-3">Discount</th>
                    <th className="text-left py-2 px-3">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { equip: "Ducted ASHP", amt: "$900", notes: "≥15.2 SEER2, ≥8.1 HSPF2; limit 2/acct" },
                    { equip: "Ductless mini-split", amt: "$630", notes: "≥16 SEER2, ≥8.55 HSPF2; limit 2/acct" },
                    { equip: "HPWH (installed)", amt: "$1,150", notes: "Through Program Ally contractor" },
                    { equip: "HPWH (self-install)", amt: "$800", notes: "Online rebate or Lowe's/HD coupon" },
                    { equip: "Geothermal", amt: "$1,350–$5,400", notes: "+$500 with desuperheater" },
                  ].map((row) => (
                    <tr key={row.equip} className="border-b border-gray-100">
                      <td className="py-2 px-3">{row.equip}</td>
                      <td className="py-2 px-3 text-right font-semibold">
                        {row.amt}
                      </td>
                      <td className="py-2 px-3 text-gray-500 text-xs">
                        {row.notes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 leading-relaxed mt-3">
              <strong>Income-qualified customers</strong> can receive up to 80%
              cost coverage through the Home Efficiency Income Qualified Program,
              including heating and cooling upgrades.
            </p>
            <p className="text-sm text-gray-500 mt-3">
              <a
                href="https://amerenillinoissavings.com/residential/products-discounts-and-rebates/hvac-and-water-heating-discounts/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 hover:underline"
              >
                Ameren Illinois HVAC Discounts ↗
              </a>
            </p>
          </div>

          {/* MidAmerican */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              MidAmerican Energy — western Illinois (Quad Cities)
            </h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              MidAmerican is the only major Illinois utility with an explicit{" "}
              <strong>cold-climate heat pump premium</strong>:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-2 px-3">Equipment</th>
                    <th className="text-right py-2 px-3">Standard</th>
                    <th className="text-right py-2 px-3">Cold-Climate</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { equip: "Air-source HP", std: "$300–$563", cc: "$563–$713" },
                    { equip: "Ductless mini-split", std: "$375", cc: "$525" },
                    { equip: "Geothermal", std: "$900–$1,200", cc: "—" },
                    { equip: "HPWH", std: "$225", cc: "—" },
                  ].map((row) => (
                    <tr key={row.equip} className="border-b border-gray-100">
                      <td className="py-2 px-3">{row.equip}</td>
                      <td className="py-2 px-3 text-right font-semibold">
                        {row.std}
                      </td>
                      <td className="py-2 px-3 text-right font-semibold text-brand-600">
                        {row.cc}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              Rebates capped at 70% of equipment cost. Limit 2 per equipment
              type per address.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              <a
                href="https://www.midamericanenergy.com/home-discounts-and-rebates"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 hover:underline"
              >
                MidAmerican Home Discounts ↗
              </a>
            </p>
          </div>

          {/* Gas Utilities */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Nicor Gas · Peoples Gas · North Shore Gas — no electric heat pump
              rebates
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Illinois&apos;s three largest gas utilities do not offer rebates
              for electric heat pumps. Their programs support only gas equipment.
              Peoples Gas and North Shore Gas offer a niche rebate for gas
              absorption heat pumps ($575–$700), but that&apos;s a gas-fired
              technology. If you have both ComEd and Nicor Gas service, your heat
              pump rebate comes from ComEd.
            </p>
          </div>

          {/* Municipal */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Municipal utilities
            </h3>
            <ul className="space-y-2 text-gray-700 leading-relaxed">
              <li>
                <strong>Springfield CWLP:</strong> $200 per ton of cooling
                capacity, plus a 9% Electric Heat Rate Discount on your bill
                from mid-September through mid-May
              </li>
              <li>
                <strong>Naperville Electric:</strong> $500–$600 depending on
                efficiency tier (limit 1, until funding runs out)
              </li>
              <li>
                <strong>Rural electric co-ops</strong> (EnerStar, Corn Belt,
                MJM, Eastern Illini): up to $700–$1,800 depending on co-op —
                check with yours directly
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Stacking */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How programs stack
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Utility rebates can stack with HEAR or HOMES rebates once those
            programs launch. HEAR and HOMES cannot be combined on the same
            measure but can cover different measures on the same project. Total
            rebates cannot exceed total project cost.
          </p>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Median-income homeowner (above 150% AMI)
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              For a typical whole-home ducted cold-climate heat pump at
              $15,000–$20,000:
            </p>
            <table className="w-full text-sm">
              <tbody>
                {[
                  { label: "Federal 25C", amt: "$0", note: "Expired" },
                  { label: "HEAR rebate", amt: "$0", note: "Not eligible above 150% AMI" },
                  { label: "ComEd utility rebate", amt: "Up to $2,000", note: "Available now" },
                ].map((row) => (
                  <tr key={row.label} className="border-b border-gray-100">
                    <td className="py-2 px-3">{row.label}</td>
                    <td className="py-2 px-3 text-right font-semibold">
                      {row.amt}
                    </td>
                    <td className="py-2 px-3 text-gray-500 text-xs">
                      {row.note}
                    </td>
                  </tr>
                ))}
                <tr className="bg-blue-50">
                  <td className="py-2 px-3 font-bold">Realistic total</td>
                  <td className="py-2 px-3 text-right font-bold text-green-700">
                    $1,400–$2,000
                  </td>
                  <td className="py-2 px-3"></td>
                </tr>
              </tbody>
            </table>
            <p className="text-sm text-gray-600 mt-3">
              This is a significant drop from 2025, when the same homeowner
              could stack a $2,000 federal credit on top of the utility rebate
              for $3,400–$4,000 total.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Income-qualified homeowner (≤80% AMI)
            </h3>
            <table className="w-full text-sm">
              <tbody>
                {[
                  { label: "HEAR (heat pump)", amt: "Up to $8,000", note: "When launched" },
                  { label: "HEAR (panel + wiring)", amt: "Up to $6,500", note: "When launched" },
                  { label: "ComEd income-eligible", amt: "~$2,000+", note: "Available now" },
                ].map((row) => (
                  <tr key={row.label} className="border-b border-gray-100">
                    <td className="py-2 px-3">{row.label}</td>
                    <td className="py-2 px-3 text-right font-semibold">
                      {row.amt}
                    </td>
                    <td className="py-2 px-3 text-gray-500 text-xs">
                      {row.note}
                    </td>
                  </tr>
                ))}
                <tr className="bg-blue-50">
                  <td className="py-2 px-3 font-bold">Potential total</td>
                  <td className="py-2 px-3 text-right font-bold text-green-700">
                    Up to ~$16,000
                  </td>
                  <td className="py-2 px-3 text-gray-500 text-xs">
                    Subject to cost cap
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>Available now:</strong>{" "}
              <a
                href="https://www.chicago.gov/city/en/depts/doh/provdrs/homeowners/svcs/green-homes-chicago.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 hover:underline"
              >
                Green Homes Chicago
              </a>{" "}
              covers up to $50,000 in free upgrades for eligible Chicago
              homeowners (≤80% AMI, owner-occupied 1–4 units). The{" "}
              <a
                href="https://dceo.illinois.gov/communityservices/homeweatherization.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 hover:underline"
              >
                Illinois Home Weatherization Assistance Program (IHWAP)
              </a>{" "}
              provides up to $20,000 in free improvements including HVAC
              replacement for households at or below 200% of the Federal Poverty
              Level.
            </p>
          </div>
        </div>
      </section>

      {/* Climate Context */}
      <section className="py-8 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Climate context — cold-climate heat pumps are essential
          </h2>
          <div className="grid md:grid-cols-3 gap-3 mb-6">
            {[
              { city: "Chicago", temp: "−5°F", zone: "5A" },
              { city: "Springfield", temp: "−3°F", zone: "5A" },
              { city: "Carbondale", temp: "~5°F", zone: "4A" },
            ].map((loc) => (
              <div
                key={loc.city}
                className="bg-blue-50 rounded-lg p-4 text-center"
              >
                <p className="font-semibold text-gray-900">{loc.city}</p>
                <p className="text-xl font-bold text-brand-600">{loc.temp}</p>
                <p className="text-xs text-gray-500">
                  Design temp · Zone {loc.zone}
                </p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mb-3">
            Cold-climate-rated heat pumps — meeting ENERGY STAR&apos;s
            specification of COP ≥1.75 at 5°F — are essential for reliable
            performance in most of Illinois. MidAmerican Energy is currently the
            only major Illinois utility offering a cold-climate premium in its
            rebate tiers.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Roughly three-quarters of Illinois households heat with natural gas,
            making most heat pump installations a gas-to-electric fuel switch.
            That means potentially eliminating your gas service charges but
            possibly requiring an electrical panel upgrade. Gas utilities offer
            no support for this transition — your electric utility is where the
            rebates are.
          </p>
        </div>
      </section>

      {/* Local Programs */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Local programs
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">
                Chicago — Green Homes Chicago
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Chicago has periodically reopened Green Homes Chicago, which can
                cover up to <strong>$50,000 in free energy upgrades</strong> per
                home, including cold-climate heat pump systems, weatherization,
                and high-efficiency appliances. Administered by the Department of
                Housing with Elevate and Zero Homes. Eligibility: owner-occupied
                1–4 unit properties, household income ≤80% AMI.{" "}
                <a
                  href="https://www.chicago.gov/city/en/depts/doh/provdrs/homeowners/svcs/green-homes-chicago.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 hover:underline"
                >
                  Check the city website for current enrollment status ↗
                </a>
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">
                Evanston — Sustain Evanston
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Grants up to $25,000 per business for sustainability projects
                including heat pumps. Evanston also passed the Healthy Buildings
                Ordinance in 2025, the first building performance standard in
                Illinois.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Other cities</p>
              <p className="text-sm text-gray-600 mt-1">
                Cook County has no direct residential heat pump rebate.
                Springfield, Peoria, Champaign, and Rockford have no
                city-specific programs — residents rely on their utility programs
                and Springfield residents benefit from CWLP.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-8 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How to apply
          </h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  Identify your electric utility
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  ComEd (Chicago metro / northern IL), Ameren Illinois (central /
                  southern IL), or MidAmerican Energy (Quad Cities). Your
                  electric utility — not your gas utility — is where heat pump
                  rebates come from.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  ComEd: find a Trade Ally
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  ComEd requires installation by a Residential Heating and
                  Cooling Trade Ally. Visit{" "}
                  <a
                    href="https://www.comed.com/ways-to-save/for-your-home/rebates-discounts/heating-cooling-discounts"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-600 hover:underline"
                  >
                    comed.com
                  </a>{" "}
                  or call 855-433-2700.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  Ameren: buy through a participating distributor
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  The instant discount is applied at checkout — no separate
                  application. For the income-qualified program, visit{" "}
                  <a
                    href="https://amerenillinoissavings.com/residential/energy-efficiency-home-upgrades/single-family-homeowners/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-600 hover:underline"
                  >
                    amerenillinoissavings.com
                  </a>
                  .
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  MidAmerican: apply online or by mail
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Visit{" "}
                  <a
                    href="https://www.midamericanenergy.com/home-discounts-and-rebates"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-600 hover:underline"
                  >
                    midamericanenergy.com
                  </a>{" "}
                  after purchase.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                5
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  Income-qualified: IHWAP or Green Homes Chicago
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Contact your local Community Action Agency or call
                  1-833-711-0374. Email: communityassist@illinois.gov.
                </p>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-6">
            New to heat pumps?{" "}
            <Link
              href="/heat-pumps"
              className="text-brand-600 hover:underline"
            >
              Start with our overview
            </Link>{" "}
            to understand how they work and whether one makes sense for your
            home.
          </p>
        </div>
      </section>

      {/* What to Watch */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What to watch in 2026
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">
                HEAR and HOMES launch
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Illinois&apos;s $263 million in IRA rebate funding remains
                pending. When these programs go live, income-qualified
                homeowners could access up to $8,000–$16,000 in additional
                rebates. Monitor the{" "}
                <a
                  href="https://epa.illinois.gov/topics/energy/energy-rebates.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 hover:underline"
                >
                  Illinois EPA Energy Rebates page
                </a>{" "}
                for updates.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">
                Utility program continuity
              </p>
              <p className="text-sm text-gray-600 mt-1">
                The approved 2026–2029 utility energy efficiency plans represent
                nearly $2.79 billion in total investment with expanded
                electrification focus. Utility heat pump rebates are likely to
                continue and potentially increase through this period.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Frequently asked questions
          </h2>
          <div className="space-y-6">
            {faqJsonLd.mainEntity.map(
              (
                faq: { name: string; acceptedAnswer: { text: string } },
                index: number
              ) => (
                <div key={index} className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {faq.name}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* See Also */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-3">See also</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/heat-pumps/states/mn"
                className="text-brand-600 hover:underline"
              >
                Minnesota Heat Pump Rebates
              </Link>
            </li>
            <li className="text-gray-500">
              Wisconsin Heat Pump Rebates{" "}
              <em>(coming soon)</em>
            </li>
            <li>
              <Link
                href="/federal-heat-pump-tax-credit-expired"
                className="text-brand-600 hover:underline"
              >
                Federal Heat Pump Tax Credits Ended
              </Link>
            </li>
            <li>
              <Link
                href="/battery"
                className="text-brand-600 hover:underline"
              >
                Are Home Batteries Worth It in 2026?
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* Sources */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="space-y-2 text-sm">
            {ilIncentive.sources.map(
              (source: { url: string; label: string }, index: number) => (
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
              )
            )}
          </ul>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8">
        <div className="container-narrow">
          <div className="bg-gray-100 rounded-lg p-6">
            <p className="text-gray-500 text-xs leading-relaxed">
              <strong>Disclaimer:</strong> This page covers the main utility and
              state heat pump incentives available to Illinois homeowners in
              2026. It does not calculate savings, guarantee eligibility, or
              represent any incentive program. Illinois has additional local,
              co-op, and municipal programs that may apply in your area. We
              verify status regularly but programs can change without notice.
              Always confirm current amounts and eligibility with your utility
              and contractor before making decisions.
            </p>
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/heat-pumps"
              className="text-brand-600 hover:underline text-sm"
            >
              ← Back to Heat Pumps overview
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
