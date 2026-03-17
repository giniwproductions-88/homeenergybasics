// src/app/heat-pumps/states/mn/page.tsx
//
// Minnesota Heat Pump Rebates — 2026 Upgrade
// Last content update: March 2026
//
// Sources verified against:
// - IRS.gov (25C, 25D, OBBB provisions)
// - Xcel Energy MN 2024-2026 Rebate Summary PDF
// - CenterPoint Energy MN Ducted ASHP Rebate page + terms
// - mn.gov/commerce HEAR program page

import type { Metadata } from "next";
import Link from "next/link";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";

export const metadata: Metadata = {
  title:
    "Minnesota Heat Pump Rebates 2026: What's Actually Available | Home Energy Basics",
  description:
    "Minnesota heat pump rebates in 2026: Xcel Energy up to $2,000, CenterPoint $1,100 dual-fuel, pending HEAR program. Federal 25C/25D credits ended Dec 2025.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/mn",
  },
  openGraph: {
    title: "Minnesota Heat Pump Rebates 2026: What's Actually Available",
    description:
      "Federal credits ended. Utility rebates are what's active now in Minnesota. HEAR/HOMES funded but not launched.",
    url: "https://homeenergybasics.com/heat-pumps/states/mn",
    type: "article",
  },
};

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// FAQ data — used for both visible FAQ section and JSON-LD schema.
// These MUST match exactly.
const faqData = [
  {
    question: "What heat pump rebates are available in Minnesota in 2026?",
    answer:
      "Utility rebates are the primary incentive. Xcel Energy offers up to $2,000 for cold-climate air-source heat pumps. CenterPoint offers $1,100 for ducted heat pumps paired with a gas furnace. The federal Section 25C and 25D tax credits are not available for property placed in service after December 31, 2025, according to current IRS guidance.",
  },
  {
    question: "Can I combine Xcel and CenterPoint heat pump rebates?",
    answer:
      "If you have Xcel electric service and CenterPoint gas service, you can potentially stack both rebates on a qualifying dual-fuel system — up to $3,100 combined. The system must meet both programs' requirements, including CenterPoint's dual-fuel pairing with a high-efficiency gas furnace. Final eligibility depends on meeting both utilities' equipment and application requirements.",
  },
  {
    question:
      "Does CenterPoint rebate heat pumps that replace gas heating?",
    answer:
      "No. CenterPoint's sole heat pump rebate requires the heat pump to be paired with a high-efficiency gas furnace as a dual-fuel system. The heat pump must switch to the gas furnace at 40°F or lower. Mini-splits, ground-source systems, and full-electric replacements are not eligible.",
  },
  {
    question: "Are federal heat pump tax credits available in 2026?",
    answer:
      "The IRS states that the Energy Efficient Home Improvement Credit (Section 25C) applies to qualifying improvements placed in service through December 31, 2025. The Residential Clean Energy Credit (Section 25D), which covered geothermal heat pumps, is also not available for expenditures made after December 31, 2025. For 2026 installations, no federal heat pump tax credit is currently listed as available by the IRS.",
  },
  {
    question: "Are geothermal heat pump tax credits still available?",
    answer:
      "The IRS currently states that the Residential Clean Energy Credit (Section 25D) is not available for property placed in service after December 31, 2025. This means the 30% geothermal tax credit is no longer available for new installations in 2026.",
  },
  {
    question: "Has Minnesota's HEAR rebate program launched?",
    answer:
      "No. As of the Minnesota Department of Commerce's February 2, 2026 update, Save Energy Minnesota has not launched yet, the state is waiting for formal DOE approval, and there is no estimated launch date. Federal guidelines do not allow retroactive rebates for installations completed before the program launches.",
  },
  {
    question: "What is the Xcel Energy insulation bonus?",
    answer:
      "Xcel offers a $600 bonus if you install qualifying insulation and air sealing followed by a qualifying heat pump within two years. The bonus is applied automatically when you submit your heat pump rebate application.",
  },
  {
    question: "What is a cold-climate heat pump?",
    answer:
      "A cold-climate heat pump is designed to maintain heating capacity at low temperatures. For Xcel's rebate, it must appear on the NEEP cold-climate product list, have a COP of at least 1.75 at 5°F, and maintain at least 70% of its rated capacity at 5°F compared to 47°F.",
  },
];

export default function MinnesotaHeatPumpPage() {
  const mnIncentive = incentives.MN;
  const formattedDate = formatDate(mnIncentive.lastVerified);

  // Dedicated verification date — use this for "Last verified" display.
  // Update this when you re-verify sources, not just when you edit copy.
  const lastVerified = "March 16, 2026";

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={faqJsonLd} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-50 via-white to-energy-50 py-12 md:py-16">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-brand-600 font-medium mb-2">
              <Link href="/" className="hover:underline">
                Home
              </Link>{" "}
              /{" "}
              <Link href="/heat-pumps" className="hover:underline">
                Heat Pumps
              </Link>{" "}
              / Minnesota
            </p>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Minnesota Heat Pump Rebates 2026: What&apos;s Actually Available
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              There are no federal residential heat pump tax credits in 2026.
              Here&apos;s what Minnesota homeowners can actually use right
              now — and what&apos;s coming.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: {formattedDate}
            </p>
          </div>
        </div>
      </section>

      {/* Status Card */}
      <section className="py-8">
        <div className="container-narrow">
          <StatusCard incentive={mnIncentive} />
        </div>
      </section>

      {/* 2026 Minnesota rebate upgrade start */}

      {/* Intro + Last Verified */}
      <section className="py-8 pb-0">
        <div className="container-narrow">
          <p className="text-gray-700 text-lg leading-relaxed">
            Minnesota heat pump rebates in 2026 are primarily coming from
            utilities, not the federal government. Xcel Energy currently
            offers the broadest utility rebate program, CenterPoint Energy
            offers a narrower dual-fuel rebate, and Minnesota&apos;s
            income-based state rebate programs have not yet launched.
          </p>
          <p className="text-sm text-gray-500 mt-3">
            Last verified: {lastVerified}
          </p>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-8">
        <div className="container-narrow">
          <div className="bg-brand-50 border border-brand-200 rounded-xl p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-3">
              Minnesota Heat Pump Rebates at a Glance
            </h2>
            <p className="text-gray-600 mb-4">
              Minnesota homeowners installing a heat pump in 2026 may
              qualify for utility rebates and, when available, future state
              rebates:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-brand-600 font-bold mt-0.5">•</span>
                <span>
                  <strong>Up to $2,000 from Xcel Energy</strong> —
                  cold-climate air-source heat pumps receive the highest
                  rebates
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-600 font-bold mt-0.5">•</span>
                <span>
                  <strong>$1,100 from CenterPoint Energy</strong> — for
                  ducted heat pumps paired with a high-efficiency gas furnace
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-600 font-bold mt-0.5">•</span>
                <span>
                  <strong>Pending state programs</strong> — the Minnesota
                  HEAR program has not yet launched as of {lastVerified}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Federal Heat Pump Tax Credit */}
      <section className="py-12 border-b">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Federal Heat Pump Tax Credit
          </h2>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
            <p className="text-gray-700 mb-4">
              The IRS states that the Energy Efficient Home Improvement
              Credit (Section 25C) applies to qualifying improvements placed
              in service between January 1, 2023 and December 31, 2025.
              Qualifying heat pumps were eligible for a credit equal to 30%
              of project cost, up to $2,000 per year.
            </p>
            <p className="text-gray-700 mb-4">
              For heat pumps installed in 2026 or later, the IRS does not
              list the credit as available. The IRS&apos;s One, Big,
              Beautiful Bill provisions page confirms: the 25C credit is
              &quot;not allowed for any property placed in service after Dec.
              31, 2025.&quot;
            </p>
            <p className="text-gray-700 mb-4">
              The Residential Clean Energy Credit (Section 25D), which
              previously applied to geothermal heat pumps, is also not
              available for expenditures made after December 31, 2025,
              according to the current IRS guidance.
            </p>
            <p className="text-sm text-gray-500">
              Sources:{" "}
              <a
                href="https://www.irs.gov/credits-deductions/energy-efficient-home-improvement-credit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 underline"
              >
                IRS — Energy Efficient Home Improvement Credit
              </a>
              {" | "}
              <a
                href="https://www.irs.gov/credits-deductions/residential-clean-energy-credit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 underline"
              >
                IRS — Residential Clean Energy Credit
              </a>
              {" | "}
              <a
                href="https://www.irs.gov/newsroom/one-big-beautiful-bill-provisions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 underline"
              >
                IRS — One, Big, Beautiful Bill Provisions
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Xcel Energy Heat Pump Rebates */}
      <section className="py-12 border-b">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Xcel Energy Heat Pump Rebates (Minnesota)
          </h2>
          <p className="text-gray-600 mb-8">
            Xcel Energy offers Minnesota&apos;s broadest utility heat pump
            rebate program, covering ducted systems, ductless mini-splits,
            and ground-source heat pumps. Rebate amounts depend on equipment
            type and your fuel relationship with Xcel.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Rebate Amounts
          </h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="py-3 pr-4 font-semibold">Equipment</th>
                  <th className="py-3 pr-4 font-semibold">
                    Combo / Gas Customer
                  </th>
                  <th className="py-3 font-semibold">Electric Only</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 pr-4">
                    Central air-source heat pump
                  </td>
                  <td className="py-3 pr-4 font-medium">$1,600</td>
                  <td className="py-3 font-medium">$1,100</td>
                </tr>
                <tr className="border-b bg-brand-50">
                  <td className="py-3 pr-4 font-medium">
                    Cold-climate air-source heat pump
                  </td>
                  <td className="py-3 pr-4 font-bold text-brand-700">
                    $2,000
                  </td>
                  <td className="py-3 font-bold text-brand-700">$1,500</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">Ductless mini-split</td>
                  <td className="py-3 pr-4 font-medium" colSpan={2}>
                    $1,600
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">Cold-climate mini-split</td>
                  <td className="py-3 pr-4 font-medium" colSpan={2}>
                    $2,000
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">
                    Ground-source (geothermal)
                  </td>
                  <td className="py-3 pr-4 font-medium" colSpan={2}>
                    $500 per heating ton
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">Heat pump water heater</td>
                  <td className="py-3 pr-4 font-medium" colSpan={2}>
                    $400 (ENERGY STAR) / $500 (with Demand Mgmt)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-600 text-sm mb-8">
            &quot;Combo&quot; customers have both Xcel electric and Xcel gas
            service. &quot;Electric Only&quot; customers have Xcel electric
            service but use a non-Xcel fuel source (propane, fuel oil, etc.)
            for heating. Xcel offers higher rebate amounts for Combo / Gas
            customers than for Electric Only customers.
          </p>

          <div className="bg-energy-50 border border-energy-200 rounded-lg p-4 mb-8">
            <p className="text-gray-700 text-sm">
              <strong>Insulation bonus:</strong> Xcel offers a $600 bonus if
              you install qualifying insulation and air sealing followed by a
              qualifying heat pump within two years. The bonus is applied
              automatically when you submit the heat pump rebate application.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Eligibility
          </h3>
          <ul className="space-y-2 text-gray-700 mb-8">
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              Must have residential electric service from Xcel Energy (for
              heat pump rebates) or residential gas service (for furnace
              rebates)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              Single-family homes, duplexes, and four-plexes
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              Central ASHP and ground-source rebates require Quality
              Installation by an Xcel participating contractor
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              Mini-split rebates do not require a participating contractor
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Equipment Requirements
          </h3>
          <p className="text-gray-600 mb-4">
            All equipment must be listed on the{" "}
            <a
              href="https://www.ahridirectory.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 underline"
            >
              AHRI directory
            </a>
            . Cold-climate heat pumps must additionally appear on the{" "}
            <a
              href="https://ashp.neep.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 underline"
            >
              NEEP cold-climate product list
            </a>{" "}
            and meet cold-climate specifications: COP ≥ 1.75 at 5°F, with
            maximum capacity at 5°F at least 70% of capacity at 47°F.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            How to Apply
          </h3>
          <ol className="space-y-3 text-gray-700 mb-6">
            <li>
              <strong>1.</strong> Install a qualifying system. For central
              and ground-source heat pumps, use an Xcel participating
              contractor.
            </li>
            <li>
              <strong>2.</strong> Submit a rebate application through
              Xcel&apos;s{" "}
              <a
                href="https://www.xcelenergy.com/digital_application"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 underline"
              >
                digital application portal
              </a>{" "}
              (approximately 14 minutes) or mail form 24-01-506.
            </li>
            <li>
              <strong>3.</strong> Applications must be postmarked by
              September 30 of the year following installation.
            </li>
            <li>
              <strong>4.</strong> Processing takes up to 8 weeks. Rebates
              are paid by check, bill credit, or direct deposit.
            </li>
          </ol>
          <p className="text-sm text-gray-500">
            Source:{" "}
            <a
              href="https://www.xcelenergy.com/staticfiles/xe-responsive/Working%20With%20Us/24-1-201%20MN%20Res%20Rebate%20Summary%20Information%20Sheet.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 underline"
            >
              Xcel Energy Minnesota 2024–2026 Residential Rebate Summary
              (PDF)
            </a>
          </p>
        </div>
      </section>

      {/* CenterPoint Energy Heat Pump Rebates */}
      <section className="py-12 border-b">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            CenterPoint Energy Heat Pump Rebates (Minnesota)
          </h2>
          <p className="text-gray-600 mb-6">
            CenterPoint Energy is a natural gas utility, and its rebate
            program reflects that. CenterPoint offers one heat pump
            rebate — for ducted air-source heat pumps installed alongside a
            high-efficiency gas furnace as a dual-fuel system.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
            <p className="text-gray-700 text-sm">
              <strong>Important:</strong> CenterPoint does not rebate
              mini-splits, ground-source systems, or any heat pump that
              replaces gas heating entirely. The heat pump must be programmed
              to switch to the gas furnace at 40°F or lower.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Rebate Amounts
          </h3>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="py-3 pr-4 font-semibold">Scenario</th>
                  <th className="py-3 pr-4 font-semibold">Rebate</th>
                  <th className="py-3 font-semibold">Requirements</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium">Existing home</td>
                  <td className="py-3 pr-4 font-bold text-brand-700">
                    $1,100
                  </td>
                  <td className="py-3 text-gray-600">
                    HSPF2 ≥ 7.8; paired with ≥ 92% AFUE gas furnace
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium">
                    New construction
                  </td>
                  <td className="py-3 pr-4 font-bold">$400</td>
                  <td className="py-3 text-gray-600">
                    Same efficiency requirements; paired with new gas furnace
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Eligibility
          </h3>
          <ul className="space-y-2 text-gray-700 mb-8">
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              Active Minnesota residential natural gas account with
              CenterPoint
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              Single-family homes, townhomes, and two- to four-plexes
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              Heat pump and furnace must be listed as a system on the AHRI
              directory
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              No specific contractor certification required
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            How to Apply
          </h3>
          <ol className="space-y-3 text-gray-700 mb-6">
            <li>
              <strong>1.</strong> Install a qualifying ducted ASHP paired
              with a qualifying gas furnace.
            </li>
            <li>
              <strong>2.</strong> Your heating dealer typically submits the
              rebate through CenterPoint&apos;s dealer portal or by
              mailing{" "}
              <a
                href="https://www.centerpointenergy.com/en-us/Documents/CIP-Rebate-Forms/CNP-1375.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 underline"
              >
                form CNP-1375 (PDF)
              </a>
              .
            </li>
            <li>
              <strong>3.</strong> Applications must be submitted by December
              31 of the installation year.
            </li>
            <li>
              <strong>4.</strong> Processing takes 8–10 weeks. The rebate
              check expires 90 days from issuance.
            </li>
          </ol>
          <p className="text-sm text-gray-500">
            Source:{" "}
            <a
              href="https://www.centerpointenergy.com/en-us/SaveEnergyandMoney/Pages/Residential-Ducted-Air-Source-Heat-Pump-Rebate.aspx?sa=mn&au=res"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 underline"
            >
              CenterPoint Energy — MN Ducted Air Source Heat Pump Rebate
            </a>
          </p>
        </div>
      </section>

      {/* Minnesota State Heat Pump Rebates (HEAR Program) */}
      <section className="py-12 border-b">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Minnesota State Heat Pump Rebates (HEAR Program)
          </h2>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
            <p className="text-amber-700 font-semibold mb-2">
              Not yet available
            </p>
            <p className="text-gray-700 mb-4">
              As of the Minnesota Department of Commerce&apos;s February 2,
              2026 update: &quot;Save Energy Minnesota has not launched yet.
              Minnesota is waiting for formal approval from US Department of
              Energy to launch the program. There is no estimated program
              launch date.&quot;
            </p>
            <p className="text-gray-700 mb-4">
              When launched, HEAR eligibility and rebate amounts will vary
              based on household income relative to area median income (AMI).
              Minnesota has also approved a separate state Residential Heat
              Pump Rebate program that is structured to work alongside HEAR,
              subject to final program rules.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Important:</strong> The Minnesota Department of
              Commerce states that federal guidelines do not allow
              retroactive rebates. Installations completed before the program
              launches will not qualify for HEAR. The Department does not
              recommend delaying necessary repairs, but homeowners planning
              ahead should be aware of this limitation.
            </p>
            <p className="text-sm text-gray-500">
              Source:{" "}
              <a
                href="https://mn.gov/commerce/energy/consumer/energy-programs/hear.jsp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 underline"
              >
                Minnesota Department of Commerce — HEAR Program
              </a>
            </p>
          </div>
          <p className="text-gray-600 text-sm">
            If you may be income-qualified and can wait, monitoring the HEAR
            launch could save significant money. If you need a system now,
            utility rebates from Xcel Energy and CenterPoint Energy are
            available today.
          </p>
        </div>
      </section>

      {/* Can Minnesota Heat Pump Rebates Be Combined? */}
      <section className="py-12 border-b">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Can Minnesota Heat Pump Rebates Be Combined?
          </h2>
          <p className="text-gray-600 mb-6">
            In many cases, yes. Here&apos;s how the available incentives can
            potentially stack for Minnesota homeowners.
          </p>

          <div className="bg-brand-50 border border-brand-200 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Xcel Electric + CenterPoint Gas Customers
            </h3>
            <p className="text-gray-700 mb-4">
              Homeowners with both Xcel electric and CenterPoint gas service
              can potentially stack both utility rebates on a qualifying
              dual-fuel cold-climate heat pump system:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex justify-between">
                <span>Xcel Energy cold-climate ASHP rebate</span>
                <span className="font-semibold">$2,000</span>
              </li>
              <li className="flex justify-between">
                <span>CenterPoint dual-fuel rebate</span>
                <span className="font-semibold">$1,100</span>
              </li>
              <li className="flex justify-between border-t pt-2 mt-2">
                <span className="font-bold">Combined utility rebates</span>
                <span className="font-bold text-brand-700">$3,100</span>
              </li>
            </ul>
            <p className="text-gray-600 text-sm">
              The system must meet both programs&apos; requirements:
              Xcel&apos;s cold-climate specs (NEEP listed, COP ≥ 1.75 at
              5°F) and CenterPoint&apos;s dual-fuel requirement (paired with
              ≥ 92% AFUE gas furnace, switchover at 40°F or lower). Final
              eligibility depends on meeting both utilities&apos; equipment
              and application requirements.
            </p>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            What About Future State Programs?
          </h3>
          <p className="text-gray-600 mb-4">
            CenterPoint&apos;s program terms state that their rebate is
            &quot;independent of any state, electric utility, or co-op rebate
            offers.&quot; The Minnesota Department of Commerce has indicated
            that the state Residential Heat Pump Rebate is &quot;designed to
            be stacked with the federal rebates.&quot; When the HEAR program
            launches, combining state and utility rebates may be possible,
            but specific stacking rules have not been finalized.
          </p>
          <p className="text-gray-600 text-sm">
            We will update this section when the program launches and
            stacking rules are confirmed.
          </p>
        </div>
      </section>

      {/* How to Apply for Heat Pump Rebates */}
      <section className="py-12 border-b">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How to Apply for Heat Pump Rebates in Minnesota
          </h2>
          <p className="text-gray-600 mb-8">
            The process depends on your utility provider. Here are the key
            steps and links for each program.
          </p>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Xcel Energy Customers
              </h3>
              <ol className="space-y-2 text-gray-700 text-sm mb-4">
                <li>
                  <strong>1.</strong> Find a participating contractor at{" "}
                  <a
                    href="https://hvacree.net/Xcel/Public_Search.cfm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-600 underline"
                  >
                    HVACree.net/Xcel
                  </a>{" "}
                  (required for central and ground-source systems)
                </li>
                <li>
                  <strong>2.</strong> Install qualifying equipment
                </li>
                <li>
                  <strong>3.</strong> Apply online at{" "}
                  <a
                    href="https://www.xcelenergy.com/digital_application"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-600 underline"
                  >
                    xcelenergy.com/digital_application
                  </a>
                </li>
                <li>
                  <strong>4.</strong> Deadline: September 30 of the year
                  after installation
                </li>
              </ol>
              <p className="text-gray-500 text-xs">
                No pre-approval needed. Processing: ~8 weeks.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                CenterPoint Energy Customers
              </h3>
              <ol className="space-y-2 text-gray-700 text-sm mb-4">
                <li>
                  <strong>1.</strong> Install qualifying ducted ASHP + gas
                  furnace system
                </li>
                <li>
                  <strong>2.</strong> Your dealer submits the rebate via{" "}
                  <a
                    href="https://www.centerpointenergy.com/en-us/Documents/CIP-Rebate-Forms/CNP-1375.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-600 underline"
                  >
                    form CNP-1375
                  </a>
                </li>
                <li>
                  <strong>3.</strong> Deadline: December 31 of the
                  installation year
                </li>
              </ol>
              <p className="text-gray-500 text-xs">
                Processing: 8–10 weeks. Rebate check expires 90 days from
                issuance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqData.map((faq) => (
              <div key={faq.question} className="border-b pb-6">
                <h3 className="text-lg font-semibold mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2026 Minnesota rebate upgrade end */}

      {/* Sources */}
      <section className="py-8 bg-gray-50">
        <div className="container-narrow">
          <p className="text-xs text-gray-400">
            Sources: IRS.gov (25C, 25D, OBBB provisions), Xcel Energy MN
            2024–2026 Rebate Summary, CenterPoint Energy MN Ducted ASHP
            Rebate page, Minnesota Department of Commerce HEAR program page.
            All information verified as of {lastVerified}. Rebate programs
            can change without notice — verify current terms with your
            utility before purchasing equipment.
          </p>
        </div>
      </section>
    </>
  );
}
