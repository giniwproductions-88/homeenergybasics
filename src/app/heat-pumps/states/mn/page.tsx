// src/app/heat-pumps/states/mn/page.tsx

import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Minnesota Heat Pump Rebates 2026: $2,000–$14,000+ Xcel + CenterPoint + HEAR | Home Energy Basics",
  description:
    "Xcel Energy offers up to $2,600 for cold-climate heat pumps. CenterPoint adds $1,100 dual-fuel. Federal credits ended. Here's every Minnesota incentive.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/mn",
  },
  openGraph: {
    title: "Minnesota Heat Pump Rebates 2026",
    description:
      "Xcel Energy, CenterPoint, Minnesota Power, Minneapolis Green Cost Share, and pending HEAR — the complete guide to Minnesota heat pump incentives after federal credits expired.",
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
        name: "Can I combine Xcel and CenterPoint heat pump rebates in Minnesota?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — if you have Xcel electric service and CenterPoint gas service, you can stack both utility rebates on a qualifying dual-fuel system for up to $3,100 combined. The system must meet both programs' requirements, including CenterPoint's dual-fuel pairing with a 92%+ AFUE gas furnace with switchover at 40°F or lower.",
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
        name: "Does CenterPoint rebate heat pumps that replace gas heating?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. CenterPoint's sole heat pump rebate requires the heat pump to be paired with a high-efficiency gas furnace as a dual-fuel system. The heat pump must switch to the gas furnace at 40°F or lower. Mini-splits, ground-source systems, and full-electric replacements are not eligible.",
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
        name: "Who administers Minnesota's heat pump rebate programs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Utility rebates are administered directly by Xcel Energy, CenterPoint Energy, and Minnesota Power. Minneapolis city rebates are administered through the Center for Energy and Environment (CEE). The pending Save Energy Minnesota program (HEAR + state HP rebate) will be administered by the Minnesota Department of Commerce. Weatherization assistance is coordinated through local community action agencies.",
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
            {" "}/ Minnesota
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Minnesota Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Federal heat pump tax credits ended December 31, 2025. Utility rebates from Xcel Energy (up to <strong>$2,600</strong> with insulation bonus), CenterPoint (<strong>$1,100</strong> dual-fuel), and Minnesota Power (<strong>$400</strong>) are what&apos;s available now, plus up to <strong>$14,000</strong> in Minneapolis city rebates. Save Energy Minnesota (HEAR + a <strong>$4,000</strong> state rebate) has not launched. This guide covers all major Minnesota heat pump incentives available in 2026, including Xcel Energy, CenterPoint Energy, Minnesota Power, Minneapolis Green Cost Share, and the pending Save Energy Minnesota program. Here&apos;s what&apos;s actually available.
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
          <StatusCard incentive={mnIncentive} />
        </div>
      </section>

      {/* 3. Short Version */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Short Version</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Xcel Energy rebates</p>
              <p className="text-sm text-green-900">Up to $2,000 for cold-climate heat pumps + $600 insulation bonus. $400–$500 for heat pump water heaters.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ CenterPoint + Minneapolis</p>
              <p className="text-sm text-green-900">CenterPoint adds $1,100 for dual-fuel systems. Minneapolis Green Cost Share stacks up to $14,000 for Green Zone homes.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Total potential savings</p>
              <p className="text-sm text-green-900">$2,000–$3,100 (above 150% AMI) to $14,100+ (below 80% AMI, after HEAR launches). Full electrification packages with Minneapolis rebates can reach ~$17,000+ total incentives.</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">✗ Federal tax credits expired</p>
              <p className="text-sm text-red-900">Both Section 25C ($2,000) and Section 25D (30% geothermal) ended December 31, 2025. No replacement exists.</p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 md:col-span-2">
              <p className="font-semibold text-amber-800 mb-1">⚠ HEAR + state heat pump rebate not launched</p>
              <p className="text-sm text-amber-900">Save Energy Minnesota (up to $8,000 HEAR + $4,000 state rebate) has no launch date. Projects completed before launch will not qualify for retroactive rebates. Utility rebates are the only option today.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Federal Expired */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Federal Tax Credits: Gone for 2026</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <p className="text-red-900 leading-relaxed">
              The <strong>Section 25C Energy Efficient Home Improvement Credit</strong> and <strong>Section 25D Residential Clean Energy Credit</strong> apply only to qualifying property placed in service through December 31, 2025. The One Big Beautiful Bill Act (signed July 4, 2025) accelerated their expiration by nine years. Equipment purchased in 2025 but not installed until 2026 does not qualify. See our{" "}
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                federal heat pump tax credit explainer
              </Link>{" "}
              for full details.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Before expiration, Minnesota homeowners could claim <strong>$2,000</strong> for a heat pump or <strong>30%</strong> of geothermal system costs under Section 25D. Those credits are now zero for any installation completed in 2026 or later.
          </p>
        </div>
      </section>

      {/* 5. HEAR / Primary — Save Energy Minnesota */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Save Energy Minnesota: Not Yet Launched</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            As of the Minnesota Department of Commerce&apos;s February 2, 2026 update, Save Energy Minnesota has not launched. The state is waiting for formal DOE approval. There is <strong>no estimated program launch date</strong>. When it does launch, two programs will be available.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Home Electrification and Appliance Rebates (HEAR)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            HEAR will provide point-of-sale rebates for heat pumps, heat pump water heaters, electric stoves, and electrical panel upgrades. Heat pump rebates will reach up to <strong>$8,000</strong> per unit.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Income Tier</th>
                  <th className="text-left p-3 font-semibold">HP Rebate Cap</th>
                  <th className="text-left p-3 font-semibold">Household Cap</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Below 80% AMI</td>
                  <td className="p-3 font-semibold">Up to $8,000</td>
                  <td className="p-3 font-semibold">$14,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">80–150% AMI</td>
                  <td className="p-3 font-semibold">Up to $8,000</td>
                  <td className="p-3 font-semibold">$7,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-gray-500">Above 150% AMI</td>
                  <td className="p-3 text-gray-500">—</td>
                  <td className="p-3 text-gray-500">Not eligible</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">MN Residential Heat Pump Rebate</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            A separate state-funded rebate of up to <strong>$4,000</strong> for cold-climate air-source heat pumps. This is designed to stack with HEAR. You must qualify for HEAR first. Like HEAR, this program has not launched.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="font-semibold text-amber-800 mb-1">⚠ No retroactive rebates</p>
            <p className="text-sm text-amber-900">Federal guidelines do not allow retroactive rebates. Any heat pump installed before Save Energy Minnesota officially launches will not qualify for HEAR or the state HP rebate. The Department of Commerce does not recommend delaying necessary repairs, but if your system still works and you may qualify by income, waiting could save $11,000–$12,000.</p>
          </div>
        </div>
      </section>

      {/* 7. Utility Programs */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Utility Rebates — Available Now</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Utility rebates are the primary incentive available to Minnesota homeowners today. Your electric utility (Xcel Energy, Minnesota Power, or a co-op) and gas utility (CenterPoint, Xcel Gas, or propane) determine which rebates you can access.
          </p>

          {/* Xcel Energy */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Xcel Energy — Statewide (Electric Service Areas)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Xcel Energy offers Minnesota&apos;s broadest utility heat pump rebate program, covering ducted systems, ductless mini-splits, ground-source, and heat pump water heaters. Rebate amounts depend on equipment type and your fuel relationship with Xcel.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Combo / Gas Customer</th>
                  <th className="text-left p-3 font-semibold">Electric Only</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Central ASHP</td>
                  <td className="p-3 font-semibold">$1,600</td>
                  <td className="p-3 font-semibold">$1,100</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Cold-climate ASHP</td>
                  <td className="p-3 font-semibold">$2,000</td>
                  <td className="p-3 font-semibold">$1,500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ductless mini-split</td>
                  <td className="p-3 font-semibold" colSpan={2}>$1,600</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Cold-climate mini-split</td>
                  <td className="p-3 font-semibold" colSpan={2}>$2,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ground-source (geothermal)</td>
                  <td className="p-3 font-semibold" colSpan={2}>$500/heating ton</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold" colSpan={2}>$400 (ENERGY STAR) / $500 (with Demand Mgmt)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            &quot;Combo&quot; customers have both Xcel electric and Xcel gas. &quot;Electric Only&quot; customers have Xcel electric but heat with propane, fuel oil, or another non-Xcel fuel. Combo/Gas customers receive higher rebates. Central ASHP and ground-source rebates require installation by an Xcel participating contractor. Mini-split rebates do not require a participating contractor.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-blue-800 mb-1">Insulation bonus: $600 extra</p>
            <p className="text-sm text-blue-900">Xcel offers a $600 bonus if you install qualifying insulation and air sealing followed by a qualifying heat pump within two years. Applied automatically when you submit the heat pump rebate. That brings a cold-climate ASHP to $2,600 total for Combo/Gas customers.</p>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            All equipment must be listed on the{" "}
            <a href="https://www.ahridirectory.org" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">AHRI directory</a>. Cold-climate systems must also appear on the{" "}
            <a href="https://ashp.neep.org" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">NEEP cold-climate product list</a>{" "}
            with COP ≥ 1.75 at 5°F and capacity at 5°F ≥ 70% of 47°F rated capacity.
          </p>

          {/* CenterPoint Energy */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">CenterPoint Energy — Dual-Fuel Only</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            CenterPoint is a natural gas utility, and its rebate reflects that. CenterPoint offers one heat pump rebate: <strong>$1,100</strong> for ducted air-source heat pumps installed alongside a high-efficiency gas furnace as a dual-fuel system.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-amber-800 mb-1">⚠ Common mistake: assuming CenterPoint covers full replacement</p>
            <p className="text-sm text-amber-900">CenterPoint does not rebate mini-splits, ground-source systems, or any heat pump that replaces gas heating entirely. The heat pump must be programmed to switch to the gas furnace at 40°F or lower. The gas furnace must be 92%+ AFUE. If you&apos;re going full-electric, CenterPoint&apos;s rebate does not apply.</p>
          </div>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Scenario</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                  <th className="text-left p-3 font-semibold">Requirements</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Existing home</td>
                  <td className="p-3 font-semibold">$1,100</td>
                  <td className="p-3">HSPF2 ≥ 7.8; paired with ≥ 92% AFUE gas furnace</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">New construction</td>
                  <td className="p-3 font-semibold">$400</td>
                  <td className="p-3">Same efficiency requirements; paired with new gas furnace</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Minnesota Power */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Minnesota Power — Northeastern MN</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Minnesota Power serves northeastern Minnesota (Duluth, Iron Range, Grand Rapids). Their rebate program covers ducted ASHP, geothermal, and heat pump water heaters. All require a participating contractor and ENERGY STAR certification. Rebates cannot exceed 75% of project cost.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                  <th className="text-left p-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Ducted ASHP</td>
                  <td className="p-3 font-semibold">$400</td>
                  <td className="p-3">ENERGY STAR certified; participating contractor required</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ground-source (geothermal)</td>
                  <td className="p-3 font-semibold">$800–$1,000/ton</td>
                  <td className="p-3">Must replace electric heat or new construction</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">$300</td>
                  <td className="p-3">Must replace electric water heater</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 8. Local Programs — Minneapolis */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Minneapolis Green Cost Share</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Minneapolis offers bonus rebates through the Green Cost Share program that stack on top of Xcel and CenterPoint utility rebates. These are administered through the Center for Energy and Environment (CEE). Only 1–4 unit residential properties in Minneapolis qualify. Funds are first come, first served.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Location</th>
                  <th className="text-left p-3 font-semibold">Max City Rebate</th>
                  <th className="text-left p-3 font-semibold">Requirements</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Minneapolis — Green Zone</td>
                  <td className="p-3 font-semibold">Up to $14,000</td>
                  <td className="p-3">Must qualify for Xcel or CenterPoint rebate first</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Minneapolis — non-Green Zone</td>
                  <td className="p-3 font-semibold">Up to $5,000</td>
                  <td className="p-3">Same — must qualify for utility rebate first</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Combined city + utility rebate cannot exceed total project cost. Check if you&apos;re in a Green Zone at{" "}
            <a href="https://www.minneapolismn.gov/government/programs-initiatives/environmental-programs/green-cost-share/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">minneapolismn.gov</a>.
          </p>
        </div>
      </section>

      {/* 9. Stacking */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Programs Stack</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Most Minnesota homeowners outside Minneapolis will see <strong>$2,000–$3,700</strong> in utility rebates today (depending on Xcel insulation bonus eligibility). If Save Energy Minnesota launches, income-qualifying households could see <strong>$10,000–$15,000+</strong>. Minneapolis residents can stack city rebates on top of everything. Below are realistic scenarios for a 3-ton cold-climate ducted system at <strong>$15,000</strong> installed cost in Xcel + CenterPoint territory.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 150% AMI — Utilities Only (Available Now)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Xcel cold-climate ASHP (Combo/Gas): $2,000</li>
                <li>CenterPoint dual-fuel: $1,100</li>
                <li>Xcel insulation bonus (if eligible): $600</li>
                <li>Federal tax credit: $0</li>
                <li>HEAR / state HP rebate: not eligible above 150% AMI</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$3,700</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">80–150% AMI — After HEAR Launches (Not Yet Available)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Xcel cold-climate ASHP (Combo/Gas): $2,000</li>
                <li>CenterPoint dual-fuel: $1,100</li>
                <li>HEAR (capped at $7,000 household): up to $7,000</li>
                <li>MN State HP Rebate: up to $4,000</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$14,100</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">Below 80% AMI — After HEAR Launches (Not Yet Available)</p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>Xcel cold-climate ASHP (Combo/Gas): $2,000</li>
                <li>CenterPoint dual-fuel: $1,100</li>
                <li>HEAR (up to $8,000 per HP, $14,000 household cap): up to $8,000</li>
                <li>MN State HP Rebate: up to $4,000</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$15,100</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-5">
            <p className="font-semibold text-gray-900 mb-1">What you&apos;ll actually pay</p>
            <p className="text-sm text-gray-700">On a $15,000 installed system: <strong>$11,300 to $11,900 out of pocket</strong> with today&apos;s utility rebates. If HEAR launches and you qualify at 80–150% Area Median Income (AMI), that drops to roughly <strong>$900</strong>. Below 80% AMI, the system could be free or near-free. Minneapolis Green Zone residents can stack an additional $5,000–$14,000 on top of any scenario above.</p>
          </div>

          <p className="text-gray-700 leading-relaxed mt-6 mb-4">
            Final stacking rules between HEAR, the state HP rebate, and utility rebates have not been confirmed. The state program is &quot;designed to be stacked&quot; per the Department of Commerce, but specific rules depend on final DOE approval. No state loan program or state tax credit for heat pumps exists in Minnesota.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <p className="font-semibold text-green-800 mb-1">✓ Best candidates for installing now</p>
            <p className="text-sm text-green-900">Homeowners with failed or failing HVAC systems who can&apos;t wait for HEAR. Minneapolis residents who can stack Green Cost Share ($5,000–$14,000) with Xcel/CenterPoint. Xcel Combo/Gas customers switching to dual-fuel who also qualify for the insulation bonus ($3,700 available today). Propane or fuel oil users in Minnesota Power territory where operating cost savings are highest.</p>
          </div>
        </div>
      </section>

      {/* 10. Weatherization */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Weatherization Assistance</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Minnesota&apos;s Weatherization Assistance Program (WAP) provides free energy upgrades — insulation, air sealing, and sometimes heating system repairs — for income-qualifying households. WAP is administered through local community action agencies and does not need to be repaid.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Eligibility is generally at or below 200% of the federal poverty level. Contact your local community action agency or call the Minnesota Department of Commerce energy helpline. Weatherization improvements can reduce heating costs and improve comfort, making a future heat pump installation more effective. If you pair WAP upgrades with a heat pump later, the combined savings are significant — especially in Minnesota&apos;s cold climate where proper insulation and air sealing directly affect heat pump performance.
          </p>
        </div>
      </section>

      {/* 11. Climate Context */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Climate Context: Cold-Climate Territory</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Minnesota is one of the coldest states in the lower 48, making cold-climate heat pump specifications essential. About <strong>66%</strong> of Minnesota homes heat with natural gas, with propane and fuel oil significant in rural areas outside the gas pipeline network. This is why the dual-fuel approach (heat pump + gas furnace) is particularly popular and why CenterPoint&apos;s program specifically targets this configuration.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Location</th>
                  <th className="text-left p-3 font-semibold">Design Temp (99%)</th>
                  <th className="text-left p-3 font-semibold">Climate Zone</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Minneapolis–St. Paul</td>
                  <td className="p-3">-12°F</td>
                  <td className="p-3">6A (Cold, Moist)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Duluth</td>
                  <td className="p-3">-21°F</td>
                  <td className="p-3">7 (Very Cold)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">International Falls</td>
                  <td className="p-3">-31°F</td>
                  <td className="p-3">7 (Very Cold)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Cold-climate heat pumps qualifying for Xcel&apos;s top-tier rebate must have a COP ≥ 1.75 at 5°F — but Minnesota&apos;s design temperatures go well below that. Backup heat (typically a gas furnace in a dual-fuel setup) remains essential for reliable comfort during the coldest stretches.
          </p>
          <p className="text-gray-700 leading-relaxed">
            For homeowners considering battery storage alongside a heat pump, see our{" "}
            <Link href="/battery" className="text-brand-600 hover:underline">guide to home batteries in 2026</Link>.
          </p>
        </div>
      </section>

      {/* 12. How to Apply */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Apply</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <p className="font-semibold text-gray-900">Identify your utilities</p>
                <p className="text-sm text-gray-700">Your electric utility (Xcel Energy, Minnesota Power, or a co-op) and gas utility (CenterPoint, Xcel Gas, or propane) determine which rebates you can access.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <p className="font-semibold text-gray-900">For Xcel central/ground-source: use a participating contractor</p>
                <p className="text-sm text-gray-700">Find one at <a href="https://hvacree.net/Xcel/Public_Search.cfm" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">HVACree.net/Xcel</a>. Mini-split rebates do not require a participating contractor.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <p className="font-semibold text-gray-900">Confirm cold-climate specs for top-tier rebate</p>
                <p className="text-sm text-gray-700">For the $2,000 rebate, verify your system is on the <a href="https://ashp.neep.org" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">NEEP cold-climate product list</a> with COP ≥ 1.75 at 5°F.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
              <div>
                <p className="font-semibold text-gray-900">Submit rebates after installation</p>
                <p className="text-sm text-gray-700">Xcel: apply at <a href="https://www.xcelenergy.com/digital_application" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">xcelenergy.com/digital_application</a> (deadline: Sept 30 of the following year). CenterPoint: dealer submits via form CNP-1375 (deadline: Dec 31 of installation year). Minnesota Power: contractor files on your behalf (8–10 weeks processing).</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">5</div>
              <div>
                <p className="font-semibold text-gray-900">Minneapolis residents: apply through CEE for city bonus</p>
                <p className="text-sm text-gray-700">The Green Cost Share bonus is applied after your utility rebate qualifies. Contact CEE at <a href="https://www.mncee.org/minneapolis-bonus-rebate-program" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">mncee.org</a>.</p>
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
              <p className="font-semibold text-gray-900">Save Energy Minnesota launch</p>
              <p className="text-sm text-gray-600 mt-1">No date set as of February 2, 2026. Monitor <a href="https://mn.gov/commerce/energy/consumer/energy-programs/save-energy-mn.jsp" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">mn.gov/commerce</a> for the official announcement. Projects before launch don&apos;t qualify for HEAR.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">MN Residential Heat Pump Rebate ($4,000)</p>
              <p className="text-sm text-gray-600 mt-1">Designed to stack with HEAR. Expected to launch at the same time or shortly after Save Energy Minnesota goes live.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">IRA funding runway</p>
              <p className="text-sm text-gray-600 mt-1">Federal HEAR and HOMES funding was appropriated under the IRA. If political conditions change or funding is redirected, programs that have not yet launched could be affected. Monitor federal developments alongside state announcements.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Minneapolis Green Cost Share funding</p>
              <p className="text-sm text-gray-600 mt-1">Funds are first come, first served. If you&apos;re in Minneapolis, check availability before committing to a project timeline.</p>
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
              <Link href="/heat-pumps/states/wi" className="text-brand-600 hover:underline">Wisconsin Heat Pump Rebates &amp; Incentives (2026)</Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/ia" className="text-brand-600 hover:underline">Iowa Heat Pump Rebates &amp; Incentives (2026)</Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/nd" className="text-brand-600 hover:underline">North Dakota Heat Pump Rebates &amp; Incentives (2026)</Link>
            </li>
            <li>
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">Why Federal Heat Pump Tax Credits Ended</Link>
            </li>
            <li>
              <Link href="/heat-pumps" className="text-brand-600 hover:underline">All State Heat Pump Incentives</Link>
            </li>
          </ul>
        </div>
      </section>

      {/* 16. Sources */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="space-y-2 text-sm">
            {mnIncentive.sources.map((source: { label: string; url: string }, index: number) => (
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
              <strong>Disclaimer:</strong> This page covers the main statewide, utility, and IRA heat pump incentives available to Minnesota homeowners in 2026. It does not calculate savings, guarantee eligibility, or represent any incentive program. Co-op rebates (e.g., Dakota Electric, Lake Region Electric) vary and are not individually listed. We verify status regularly but programs can change without notice. Always confirm current amounts and eligibility with your utility, the Minnesota Department of Commerce, and your contractor before making decisions.
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
