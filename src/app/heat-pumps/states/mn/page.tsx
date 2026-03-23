// src/app/heat-pumps/states/mn/page.tsx

import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Minnesota Heat Pump Rebates 2026: Xcel, CenterPoint + What's Coming | Home Energy Basics",
  description:
    "Xcel Energy offers up to $2,600 for cold-climate heat pumps. CenterPoint adds $1,100 for dual-fuel. Minneapolis stacks up to $14,000. HEAR hasn't launched. Federal credits are gone. Here's the complete Minnesota picture.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/mn",
  },
  openGraph: {
    title: "Minnesota Heat Pump Rebates 2026",
    description:
      "Xcel Energy, CenterPoint, Minnesota Power, city rebates, and pending state programs — what's available now and what's coming for MN homeowners.",
    url: "https://homeenergybasics.com/heat-pumps/states/mn",
    type: "article",
  },
};

export default function MinnesotaPage() {
  const mnIncentive = incentives.MN;
  const formattedDate = formatDate(mnIncentive.lastVerified);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What heat pump rebates are available in Minnesota in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Utility rebates are the primary incentive. Xcel Energy offers up to $2,000 for cold-climate air-source heat pumps (plus a $600 insulation bonus). CenterPoint offers $1,100 for ducted heat pumps paired with a gas furnace. Minnesota Power offers $400 for ducted systems. Minneapolis residents can stack up to $14,000 in additional city rebates. Federal 25C/25D tax credits ended December 31, 2025. The state HEAR program and MN Residential Heat Pump Rebate ($4,000) have not launched.",
        },
      },
      {
        "@type": "Question",
        name: "Can I combine Xcel and CenterPoint heat pump rebates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If you have Xcel electric service and CenterPoint gas service, you can stack both utility rebates on a qualifying dual-fuel system — up to $3,100 combined. The system must meet both programs' requirements, including CenterPoint's dual-fuel pairing with a 92%+ AFUE gas furnace with switchover at 40°F or lower.",
        },
      },
      {
        "@type": "Question",
        name: "Does CenterPoint rebate heat pumps that replace gas heating?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. CenterPoint's sole heat pump rebate requires the heat pump to be paired with a high-efficiency gas furnace as a dual-fuel system. The heat pump must switch to the gas furnace at 40°F or lower. Mini-splits, ground-source systems, and full-electric replacements are not eligible.",
        },
      },
      {
        "@type": "Question",
        name: "Has Minnesota's HEAR rebate program launched?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. As of the Minnesota Department of Commerce's February 2, 2026 update, Save Energy Minnesota has not launched. The state is waiting for formal DOE approval. There is no estimated launch date. Federal guidelines do not allow retroactive rebates for installations before launch. A separate state Residential Heat Pump Rebate of up to $4,000 is designed to stack with HEAR but also has not launched.",
        },
      },
      {
        "@type": "Question",
        name: "What is the Minneapolis Green Cost Share program?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Minneapolis offers bonus rebates through the Green Cost Share program that stack on top of Xcel and CenterPoint utility rebates. Homes in a designated Green Zone can receive up to $14,000 for energy improvements. Homes outside a Green Zone can receive up to $5,000. Projects must qualify for a CenterPoint or Xcel rebate first. Only 1-4 unit residential properties in Minneapolis qualify.",
        },
      },
      {
        "@type": "Question",
        name: "Should I wait for HEAR before installing a heat pump in Minnesota?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on your situation. If your system still works and you may qualify by income, the combined HEAR (up to $8,000) plus state HP rebate ($4,000) could add $12,000 to the incentive stack — far more than the $2,000–$3,100 available today from utilities. But there is no launch date, and waiting could mean months. If your system has failed or you live in Minneapolis (where city rebates are substantial), installing now may make sense.",
        },
      },
      {
        "@type": "Question",
        name: "What is the Xcel Energy insulation bonus?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Xcel offers a $600 bonus if you install qualifying insulation and air sealing followed by a qualifying heat pump within two years. The bonus is applied automatically when you submit your heat pump rebate application.",
        },
      },
      {
        "@type": "Question",
        name: "What is a cold-climate heat pump?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A cold-climate heat pump maintains heating capacity at very low temperatures. For Xcel's rebate, it must appear on the NEEP cold-climate product list, have a COP of at least 1.75 at 5°F, and maintain at least 70% of its rated capacity at 5°F compared to 47°F.",
        },
      },
    ],
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
              Federal heat pump tax credits ended December 31, 2025. Minnesota&apos;s
              HEAR program and state heat pump rebate have not launched and have
              no estimated launch date. Right now, utility rebates from Xcel
              Energy (up to $2,600 with insulation bonus), CenterPoint ($1,100
              dual-fuel), and Minnesota Power ($400) are what&apos;s available —
              plus significant city rebates in Minneapolis. Here&apos;s the
              complete picture.
            </p>
            <p className="text-base text-gray-500 mt-3">
              This guide is for Minnesota homeowners trying to understand what
              heat pump rebates are actually available right now and whether
              it&apos;s worth installing in 2026.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last verified: {formattedDate}
            </p>
            <p className="text-sm text-gray-400">
              Rates and program availability may change after this date.
            </p>
          </div>
        </div>
      </section>

      {/* Status Card */}
      <section className="pb-8">
        <div className="container-narrow">
          <StatusCard incentive={mnIncentive} />
        </div>
      </section>

      {/* The Short Version */}
      <section className="pb-12">
        <div className="container-narrow">
          <div className="bg-gray-50 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              The Short Version
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold text-lg">✓</span>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Xcel Energy rebates
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Up to $2,000 for cold-climate heat pumps + $600
                      insulation bonus. $400–$500 for HPWH.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold text-lg">✓</span>
                  <div>
                    <p className="font-semibold text-gray-900">
                      CenterPoint Energy rebate
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      $1,100 for ducted heat pumps paired with a gas furnace
                      (dual-fuel only).
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-amber-200">
                <div className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold text-lg">⚠</span>
                  <div>
                    <p className="font-semibold text-gray-900">
                      HEAR + state HP rebate (not launched)
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Up to $8,000 HEAR + $4,000 state — no launch date set.
                      Projects before launch don&apos;t qualify.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-red-200">
                <div className="flex items-start gap-2">
                  <span className="text-red-500 font-bold text-lg">✗</span>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Federal tax credits
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Both 25C ($2,000) and 25D (30% geothermal) expired
                      December 31, 2025. No replacement exists.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="container-narrow">
          <div className="prose prose-lg max-w-none">
            {/* Federal Credits */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12">
              <h2 className="text-xl font-bold text-red-900 mt-0">
                Federal Tax Credits: $0 for 2026 Installations
              </h2>
              <p className="text-red-800 mb-0">
                The IRS states that the Section 25C Energy Efficient Home
                Improvement Credit and the Section 25D Residential Clean Energy
                Credit apply only to qualifying property placed in service
                through December 31, 2025. The{" "}
                <strong>One Big Beautiful Bill Act</strong> (signed July 4, 2025)
                accelerated their expiration by nine years. Equipment purchased
                in 2025 but not installed until 2026 does not qualify. For more
                detail, see our{" "}
                <Link
                  href="/federal-heat-pump-tax-credit-expired"
                  className="text-red-700 underline hover:text-red-900"
                >
                  federal heat pump tax credit explainer
                </Link>
                .
              </p>
            </div>

            {/* HEAR Status */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-12">
              <h2 className="text-xl font-bold text-amber-900 mt-0">
                Save Energy Minnesota: Not Yet Launched
              </h2>
              <p className="text-amber-800">
                As of the Minnesota Department of Commerce&apos;s February 2,
                2026 update: Save Energy Minnesota has not launched. The state
                is waiting for formal DOE approval. There is{" "}
                <strong>no estimated program launch date</strong>.
              </p>
              <p className="text-amber-800">
                When launched, two programs will be available:
              </p>
              <div className="overflow-x-auto mt-4">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="bg-amber-100">
                      <th className="text-left p-3 text-amber-900">Program</th>
                      <th className="text-left p-3 text-amber-900">Amount</th>
                      <th className="text-left p-3 text-amber-900">
                        Eligibility
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-amber-200">
                      <td className="p-3 text-amber-800 font-semibold">
                        HEAR (federal)
                      </td>
                      <td className="p-3 text-amber-800">
                        Up to $8,000 for heat pumps
                      </td>
                      <td className="p-3 text-amber-800">
                        ≤80% AMI: $14,000 cap; 80–150% AMI: $7,000 cap
                      </td>
                    </tr>
                    <tr className="border-t border-amber-200">
                      <td className="p-3 text-amber-800 font-semibold">
                        MN State HP Rebate
                      </td>
                      <td className="p-3 text-amber-800">
                        Up to $4,000 for cold-climate ASHP
                      </td>
                      <td className="p-3 text-amber-800">
                        Must qualify for HEAR first; designed to stack
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-amber-800 text-sm mt-3 mb-0">
                <strong>Critical:</strong> Federal guidelines do not allow
                retroactive rebates. Installations completed before the program
                launches will not qualify for HEAR.
              </p>
            </div>

            {/* Xcel Energy */}
            <h2>Xcel Energy Heat Pump Rebates — Active Now</h2>

            <p>
              Xcel Energy offers Minnesota&apos;s broadest utility heat pump
              rebate program, covering ducted systems, ductless mini-splits,
              ground-source, and heat pump water heaters. Rebate amounts depend
              on equipment type and your fuel relationship with Xcel.
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-3 font-semibold">Equipment</th>
                    <th className="text-left p-3 font-semibold">
                      Combo / Gas Customer
                    </th>
                    <th className="text-left p-3 font-semibold">
                      Electric Only
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3">Central ASHP</td>
                    <td className="p-3 font-semibold">$1,600</td>
                    <td className="p-3 font-semibold">$1,100</td>
                  </tr>
                  <tr className="border-t bg-green-50">
                    <td className="p-3 font-medium">Cold-climate ASHP</td>
                    <td className="p-3 font-bold text-green-700">$2,000</td>
                    <td className="p-3 font-bold text-green-700">$1,500</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">Ductless mini-split</td>
                    <td className="p-3 font-semibold" colSpan={2}>
                      $1,600
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">Cold-climate mini-split</td>
                    <td className="p-3 font-semibold" colSpan={2}>
                      $2,000
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">Ground-source (geothermal)</td>
                    <td className="p-3 font-semibold" colSpan={2}>
                      $500/heating ton
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">Heat pump water heater</td>
                    <td className="p-3 font-semibold" colSpan={2}>
                      $400 (ENERGY STAR) / $500 (with Demand Mgmt)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 mt-3">
              &quot;Combo&quot; customers have both Xcel electric and Xcel gas.
              &quot;Electric Only&quot; have Xcel electric but heat with propane,
              fuel oil, etc. Combo/Gas customers receive higher rebates.
            </p>

            <div className="bg-energy-50 border border-energy-200 rounded-lg p-4 my-6">
              <p className="text-gray-700 text-sm mb-0">
                <strong>Insulation bonus:</strong> Xcel offers a{" "}
                <strong>$600 bonus</strong> if you install qualifying insulation
                and air sealing followed by a qualifying heat pump within two
                years. Applied automatically when you submit the heat pump
                rebate. That brings a cold-climate ASHP to{" "}
                <strong>$2,600 total</strong> for Combo/Gas customers.
              </p>
            </div>

            <h3>Xcel eligibility &amp; equipment requirements</h3>

            <p>
              Single-family homes, duplexes, and four-plexes with residential
              Xcel electric service. Central ASHP and ground-source rebates
              require installation by an Xcel participating contractor. Mini-split
              rebates do not require a participating contractor. All equipment
              must be listed on the{" "}
              <a
                href="https://www.ahridirectory.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 underline"
              >
                AHRI directory
              </a>
              . Cold-climate systems must also appear on the{" "}
              <a
                href="https://ashp.neep.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 underline"
              >
                NEEP cold-climate product list
              </a>{" "}
              with COP ≥ 1.75 at 5°F and capacity at 5°F ≥ 70% of 47°F rated
              capacity.
            </p>

            {/* CenterPoint Energy */}
            <h2>CenterPoint Energy — Dual-Fuel Only</h2>

            <p>
              CenterPoint is a natural gas utility, and its rebate reflects
              that. CenterPoint offers one heat pump rebate: for ducted
              air-source heat pumps installed alongside a high-efficiency gas
              furnace as a dual-fuel system.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
              <p className="text-gray-700 text-sm mb-0">
                <strong>Important:</strong> CenterPoint does not rebate
                mini-splits, ground-source systems, or any heat pump that
                replaces gas heating entirely. The heat pump must be programmed
                to switch to the gas furnace at 40°F or lower.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-3 font-semibold">Scenario</th>
                    <th className="text-left p-3 font-semibold">Rebate</th>
                    <th className="text-left p-3 font-semibold">Requirements</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Existing home</td>
                    <td className="p-3 font-bold text-brand-700">$1,100</td>
                    <td className="p-3 text-gray-600">
                      HSPF2 ≥ 7.8; paired with ≥ 92% AFUE gas furnace
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">New construction</td>
                    <td className="p-3 font-bold">$400</td>
                    <td className="p-3 text-gray-600">
                      Same efficiency requirements; paired with new gas furnace
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Minnesota Power */}
            <h2>Minnesota Power — Northeastern MN</h2>

            <p>
              Minnesota Power serves northeastern Minnesota (Duluth, Iron Range,
              Grand Rapids). Their rebate program covers ducted ASHP,
              geothermal, and heat pump water heaters. All require a
              participating contractor and ENERGY STAR certification.
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-3 font-semibold">Equipment</th>
                    <th className="text-left p-3 font-semibold">Rebate</th>
                    <th className="text-left p-3 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3">Ducted ASHP</td>
                    <td className="p-3 font-semibold">$400</td>
                    <td className="p-3 text-gray-600">
                      ENERGY STAR certified; participating contractor required
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">Ground-source (geothermal)</td>
                    <td className="p-3 font-semibold">
                      $800–$1,000/ton
                    </td>
                    <td className="p-3 text-gray-600">
                      Must replace electric heat or new construction
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">Heat pump water heater</td>
                    <td className="p-3 font-semibold">$300</td>
                    <td className="p-3 text-gray-600">
                      Must replace electric water heater
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 mt-3">
              Rebates cannot exceed 75% of project cost. Contractors file the
              rebate for you. Processing: 8–10 weeks.
            </p>

            {/* City Rebates */}
            <h2>City Rebates — Minneapolis</h2>

            <p>
              Minneapolis offers bonus rebates through the{" "}
              <strong>Green Cost Share program</strong> that stack on top of
              Xcel and CenterPoint utility rebates. These are administered
              through the Center for Energy and Environment (CEE).
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-3 font-semibold">Location</th>
                    <th className="text-left p-3 font-semibold">
                      Max City Rebate
                    </th>
                    <th className="text-left p-3 font-semibold">Requirements</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t bg-green-50">
                    <td className="p-3 font-medium">
                      Minneapolis — Green Zone
                    </td>
                    <td className="p-3 font-bold text-green-700">
                      Up to $14,000
                    </td>
                    <td className="p-3 text-gray-600">
                      Must qualify for Xcel or CenterPoint rebate first
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">
                      Minneapolis — non-Green Zone
                    </td>
                    <td className="p-3 font-bold">Up to $5,000</td>
                    <td className="p-3 text-gray-600">
                      Same — must qualify for utility rebate first
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 mt-3">
              1–4 unit residential properties only. Combined city + utility
              rebate cannot exceed total project cost. Funds are first come,
              first served. Check if you&apos;re in a Green Zone at{" "}
              <a
                href="https://www.minneapolismn.gov/government/programs-initiatives/environmental-programs/green-cost-share/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 underline"
              >
                minneapolismn.gov
              </a>
              .
            </p>

            {/* Stacking Section */}
            <h2>How Programs Stack: What You&apos;d Actually Pay</h2>

            <p>
              <strong>Bottom line:</strong> Most Minnesota homeowners will see{" "}
              <strong>$2,000–$3,700 in rebates today</strong>. If Save Energy
              Minnesota launches, that could jump to{" "}
              <strong>$10,000–$14,000+</strong> depending on income and location.
            </p>

            <h3>
              Today — 3-ton cold-climate system, $15,000 installed (Xcel +
              CenterPoint territory)
            </h3>

            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-3 font-semibold">Incentive</th>
                    <th className="text-right p-3 font-semibold">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3">
                      Xcel cold-climate ASHP (Combo/Gas customer)
                    </td>
                    <td className="p-3 text-right font-semibold">$2,000</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">
                      CenterPoint dual-fuel rebate
                    </td>
                    <td className="p-3 text-right font-semibold">$1,100</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">Federal tax credit</td>
                    <td className="p-3 text-right text-gray-400">$0</td>
                  </tr>
                  <tr className="border-t bg-brand-50">
                    <td className="p-3 font-bold">Total available now</td>
                    <td className="p-3 text-right font-bold text-brand-700">
                      $3,100
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-semibold">
                      Your cost after incentives
                    </td>
                    <td className="p-3 text-right font-semibold">~$11,900</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 mt-3">
              Add $600 if you also did Xcel-qualifying insulation in the past
              two years = <strong>$3,700 total</strong>. Minneapolis Green Zone
              residents could add up to $14,000 more.
            </p>

            <h3>
              After Save Energy MN launches — same system, household at
              80–150% AMI
            </h3>

            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-3 font-semibold">Incentive</th>
                    <th className="text-right p-3 font-semibold">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3">Xcel cold-climate ASHP</td>
                    <td className="p-3 text-right font-semibold">$2,000</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">CenterPoint dual-fuel</td>
                    <td className="p-3 text-right font-semibold">$1,100</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">
                      HEAR (80–150% AMI, capped at $7,000 household)
                    </td>
                    <td className="p-3 text-right font-semibold">
                      Up to $7,000
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">
                      MN State HP Rebate (stacks with HEAR)
                    </td>
                    <td className="p-3 text-right font-semibold">
                      Up to $4,000
                    </td>
                  </tr>
                  <tr className="border-t bg-brand-50">
                    <td className="p-3 font-bold">Potential total</td>
                    <td className="p-3 text-right font-bold text-brand-700">
                      Up to $14,100
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-semibold">
                      Your cost after incentives
                    </td>
                    <td className="p-3 text-right font-semibold">
                      ~$900 or less
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 mt-3">
              Final stacking rules between HEAR, the state HP rebate, and
              utility rebates have not been confirmed. The state program is
              &quot;designed to be stacked&quot; per the Department of Commerce,
              but specific rules depend on final DOE approval.
            </p>

            <p className="text-sm text-gray-600 mt-3">
              For comparison,{" "}
              <Link
                href="/heat-pumps/states/ny"
                className="text-brand-600 underline"
              >
                New York
              </Link>{" "}
              offers $5,000–$12,000 through the Clean Heat Program, and{" "}
              <Link
                href="/heat-pumps/states/ma"
                className="text-brand-600 underline"
              >
                Massachusetts
              </Link>{" "}
              reaches $8,500 through Mass Save — both available today without
              waiting for HEAR.
            </p>

            {/* Should You Wait? */}
            <div className="bg-brand-50 border border-brand-200 rounded-xl p-6 my-8">
              <h2 className="text-xl font-bold text-brand-900 mt-0">
                Should You Wait for Save Energy Minnesota?
              </h2>
              <p className="text-brand-800">
                If your system still works and you may qualify by income, the
                combined HEAR + state HP rebate could add{" "}
                <strong>$11,000–$12,000</strong> to the incentive stack — far
                more than the <strong>$3,100</strong> available today from
                utilities alone. But there is{" "}
                <strong>no estimated launch date</strong>, and waiting could
                mean months of uncertainty.
              </p>
              <p className="text-brand-800 mb-0">
                If your system has failed, don&apos;t wait — utility rebates are
                available now. If you live in{" "}
                <strong>Minneapolis</strong> (where Green Cost Share can add up
                to $14,000), installing now with city + utility rebates may
                already cover most of the cost. The Department of Commerce does
                not recommend delaying necessary repairs.
              </p>
            </div>

            {/* Climate Context */}
            <h2>Climate Context: Minnesota Is Cold-Climate Territory</h2>

            <p>
              Minnesota is one of the coldest states in the lower 48, making
              cold-climate heat pump specifications essential. About{" "}
              <strong>66% of MN homes</strong> heat with natural gas, with
              propane and fuel oil significant in rural areas outside the gas
              pipeline network.
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-3 font-semibold">Location</th>
                    <th className="text-left p-3 font-semibold">
                      Design Temp (99%)
                    </th>
                    <th className="text-left p-3 font-semibold">
                      Climate Zone
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3">Minneapolis–St. Paul</td>
                    <td className="p-3">-12°F</td>
                    <td className="p-3">6A (Cold, Moist)</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">Duluth</td>
                    <td className="p-3">-21°F</td>
                    <td className="p-3">7 (Very Cold)</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">International Falls</td>
                    <td className="p-3">-31°F</td>
                    <td className="p-3">7 (Very Cold)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Cold-climate heat pumps qualifying for Xcel&apos;s top-tier rebate
              must have a COP ≥ 1.75 at 5°F — but Minnesota&apos;s design
              temperatures go well below that. Backup heat (typically a gas
              furnace in a dual-fuel setup) remains essential for reliable
              comfort during the coldest stretches. This is why the dual-fuel
              approach (heat pump + gas furnace) is particularly popular in
              Minnesota and why CenterPoint&apos;s program specifically targets
              this configuration.
            </p>

            {/* How to Apply */}
            <h2>How to Apply</h2>

            <div className="bg-gray-50 rounded-xl p-6">
              <ol className="space-y-4 mb-0">
                <li>
                  <strong>Identify your utilities.</strong> Your electric utility
                  (Xcel, Minnesota Power, or a co-op) and gas utility
                  (CenterPoint, Xcel Gas, or propane) determine which rebates
                  you can access.
                </li>
                <li>
                  <strong>
                    For Xcel central/ground-source: use a participating
                    contractor.
                  </strong>{" "}
                  Find one at{" "}
                  <a
                    href="https://hvacree.net/Xcel/Public_Search.cfm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-600 underline"
                  >
                    HVACree.net/Xcel
                  </a>
                  . Mini-split rebates do not require a participating contractor.
                </li>
                <li>
                  <strong>Confirm cold-climate specs.</strong> For the top-tier
                  $2,000 rebate, verify your system is on the{" "}
                  <a
                    href="https://ashp.neep.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-600 underline"
                  >
                    NEEP cold-climate product list
                  </a>
                  .
                </li>
                <li>
                  <strong>Submit rebates after installation.</strong> Xcel:
                  apply at{" "}
                  <a
                    href="https://www.xcelenergy.com/digital_application"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-600 underline"
                  >
                    xcelenergy.com/digital_application
                  </a>{" "}
                  (deadline: Sept 30 of the following year). CenterPoint: dealer
                  submits via form CNP-1375 (deadline: Dec 31 of installation
                  year).
                </li>
                <li>
                  <strong>Minneapolis residents: apply through CEE.</strong>{" "}
                  The Green Cost Share bonus is applied after your utility rebate
                  qualifies. Contact CEE at{" "}
                  <a
                    href="https://www.mncee.org/minneapolis-bonus-rebate-program"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-600 underline"
                  >
                    mncee.org
                  </a>
                  .
                </li>
                <li>
                  <strong>Consider waiting for Save Energy MN.</strong> If your
                  system still works and you may qualify by income, monitoring
                  the program at{" "}
                  <a
                    href="https://mn.gov/commerce/energy/consumer/energy-programs/save-energy-mn.jsp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-600 underline"
                  >
                    mn.gov/commerce
                  </a>{" "}
                  could save $11,000+.
                </li>
              </ol>
            </div>

            {/* What to Watch */}
            <h2>What to Watch</h2>

            <ul>
              <li>
                <strong>Save Energy Minnesota launch</strong> — no date set as
                of February 2, 2026. Monitor mn.gov/commerce for the official
                announcement. Projects before launch don&apos;t qualify.
              </li>
              <li>
                <strong>MN Residential Heat Pump Rebate ($4,000)</strong> —
                designed to stack with HEAR. Expected to launch at the same
                time or shortly after.
              </li>
              <li>
                <strong>Xcel Clean Heat Plan</strong> — Xcel&apos;s integrated
                resource plan includes expanded heat pump programs. Could
                increase rebate levels in future CIP cycles.
              </li>
              <li>
                <strong>Minneapolis Green Cost Share funding</strong> — funds
                are first come, first served. Monitor availability.
              </li>
              <li>
                <strong>Utility rebate levels</strong> — current Xcel and
                CenterPoint amounts are set through 2026. 2027 could change.
              </li>
            </ul>

            {/* FAQ */}
            <h2>Frequently Asked Questions</h2>

            {faqJsonLd.mainEntity.map(
              (
                faq: { name: string; acceptedAnswer: { text: string } },
                index: number,
              ) => (
                <div key={index} className="mb-6">
                  <h3 className="text-lg font-semibold">{faq.name}</h3>
                  <p className="text-gray-700">{faq.acceptedAnswer.text}</p>
                </div>
              ),
            )}

            {/* Sources */}
            <h2>Sources</h2>

            <ul className="text-sm">
              {mnIncentive.sources.map(
                (source: { label: string; url: string }, index: number) => (
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
                ),
              )}
            </ul>
          </div>

          {/* Cross-links */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <Link
              href="/heat-pumps/states/nh"
              className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
            >
              <span className="text-brand-600 font-medium">
                New Hampshire Heat Pump Rebates →
              </span>
              <span className="block text-sm text-gray-500 mt-1">
                NHSaves $250–$1,250/ton + $650 Accelerator
              </span>
            </Link>
            <Link
              href="/heat-pumps/states/ny"
              className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
            >
              <span className="text-brand-600 font-medium">
                New York Heat Pump Rebates →
              </span>
              <span className="block text-sm text-gray-500 mt-1">
                Clean Heat Program up to $12,000+
              </span>
            </Link>
            <Link
              href="/heat-pumps/states/il"
              className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
            >
              <span className="text-brand-600 font-medium">
                Illinois Heat Pump Rebates →
              </span>
              <span className="block text-sm text-gray-500 mt-1">
                ComEd + Ameren utility programs
              </span>
            </Link>
            <Link
              href="/federal-heat-pump-tax-credit-expired"
              className="block p-4 bg-red-50 rounded-lg hover:bg-red-100 transition"
            >
              <span className="text-red-700 font-medium">
                Why Federal Credits Ended →
              </span>
              <span className="block text-sm text-red-500 mt-1">
                What happened with 25C and 25D
              </span>
            </Link>
          </div>

          {/* Disclaimer */}
          <div className="mt-12 p-6 bg-gray-50 rounded-xl">
            <p className="text-gray-600 text-sm">
              <strong>Disclaimer:</strong> This information is for educational
              purposes only and does not constitute tax, legal, or financial
              advice. Program details, rebate amounts, and eligibility
              requirements can change. Verify all information with official
              program administrators before making purchasing decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Back link */}
      <section className="py-8">
        <div className="container-narrow">
          <Link
            href="/heat-pumps"
            className="text-brand-600 hover:underline font-medium"
          >
            ← Back to Heat Pump Hub
          </Link>
        </div>
      </section>
    </>
  );
}
