// src/app/heat-pumps/states/vt/page.tsx

import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Vermont Heat Pump Rebates 2026: Efficiency Vermont + Utility Programs | Home Energy Basics",
  description:
    "Vermont heat pump rebates typically range from $2,000 to $7,950 depending on your utility and income. Efficiency Vermont offers $2,200 for ducted systems. Burlington Electric leads with up to $7,950 for income-qualified installations. Federal 25C is gone. Here's what's actually available.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/vt",
  },
  openGraph: {
    title: "Vermont Heat Pump Rebates 2026",
    description:
      "Efficiency Vermont $2,200 ducted rebate, Burlington Electric up to $7,950, GMP income bonuses to $2,200. Complete stacking guide.",
    url: "https://homeenergybasics.com/heat-pumps/states/vt",
    type: "article",
  },
};

export default function VermontPage() {
  const vtIncentive = incentives.VT;
  const formattedDate = formatDate(vtIncentive.lastVerified);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What heat pump rebates are available in Vermont in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vermont heat pump rebates come primarily from Efficiency Vermont (up to $2,200 for ducted systems, $375–$475 per ductless head) and your electric utility. Burlington Electric Department offers the richest incentives — up to $7,950 for income-qualified high-performance ducted systems. Green Mountain Power customers can get up to $2,200 in income-qualified bonuses per condenser. Federal tax credits (25C/25D) ended December 31, 2025.",
        },
      },
      {
        "@type": "Question",
        name: "Does Vermont have HEAR rebates for heat pumps?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vermont's HEAR (Home Electrification and Appliance Rebates) program is currently on pause. The Vermont Department of Public Service recommends not planning on HEAR funds for projects in 2026. The $29.2 million allocation has not been released for consumer applications.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get 0% financing for a heat pump in Vermont?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The Home Energy Loan program offers 0% interest for low- and moderate-income households, with loans up to $40,000 and terms up to 15 years. Lending partners include VSECU, EastRise Credit Union, and Opportunities Credit Union. Work must be done by an Efficiency Excellence Network contractor.",
        },
      },
      {
        "@type": "Question",
        name: "What's the difference between Burlington Electric and Efficiency Vermont rebates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Burlington Electric Department (BED) operates its own rebate program, separate from Efficiency Vermont. BED rebates are significantly higher — up to $7,450 for a high-performance ducted system over 4 tons, compared to $2,200 from Efficiency Vermont. Burlington residents are not eligible for EVT income bonuses but BED's standalone program more than compensates. All other Vermont electric customers access rebates through Efficiency Vermont.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a cold-climate heat pump in Vermont?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. All Vermont rebate programs require ENERGY STAR Cold Climate certification. With ASHRAE design temperatures of -12°F in Burlington and -10°F in Montpelier, standard heat pumps cannot provide adequate heating. Equipment must appear on the NEEP Cold Climate Air Source Heat Pump Qualified Product List.",
        },
      },
      {
        "@type": "Question",
        name: "Can I stack Vermont heat pump rebates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Efficiency Vermont rebates and utility income bonuses are designed to stack and are applied through a single streamlined process. For Green Mountain Power customers earning under 80% AMI, the total stack for a ducted system plus heat pump water heater can reach $5,400. Burlington Electric caps all rebates at 75% of installed cost. BED and EVT rebates do not combine — you access one system based on your utility territory.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd data={faqJsonLd} />

      {/* Hero */}
      <section className="py-12 md:py-16">
        <div className="container-narrow">
          <nav className="text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-brand-600">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/heat-pumps" className="hover:text-brand-600">
              Heat Pumps
            </Link>{" "}
            / Vermont
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Vermont Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p className="text-lg text-gray-700 mb-2">
            Vermont still offers heat pump rebates in 2026 — but they're smaller
            and more fragmented than before. With federal tax credits gone and
            the Clean Heat Standard canceled, most homeowners now rely on utility
            programs through Efficiency Vermont and Burlington Electric.
          </p>
          <p className="text-lg text-gray-700 mb-2">
            In most cases, rebates range from about{" "}
            <strong>$2,000 to $7,950</strong> depending on your utility and
            income.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Here's what's actually available.
          </p>
          <p className="text-sm text-gray-500">
            Last verified: {formattedDate}
          </p>
        </div>
      </section>

      {/* Status Card */}
      <section className="pb-8">
        <div className="container-narrow">
          <StatusCard incentive={vtIncentive} />
        </div>
      </section>

      {/* Short Version */}
      <section className="py-8">
        <div className="container-narrow">
          <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              The short version
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="font-semibold text-green-900 mb-1">
                  ✓ Efficiency Vermont
                </p>
                <p className="text-sm text-green-800">
                  $375–$475/head ductless, $2,200 ducted, $600 HPWH — applied
                  at purchase
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="font-semibold text-green-900 mb-1">
                  ✓ Burlington Electric
                </p>
                <p className="text-sm text-green-800">
                  Up to $7,450 ducted + $500 income bonus — highest in Vermont
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="font-semibold text-green-900 mb-1">
                  ✓ GMP income bonus
                </p>
                <p className="text-sm text-green-800">
                  $2,200/condenser for ≤80% AMI households (75% of VT customers)
                </p>
              </div>
              <div className="p-4 bg-red-50 rounded-lg">
                <p className="font-semibold text-red-900 mb-1">
                  ✗ Federal tax credits
                </p>
                <p className="text-sm text-red-800">
                  25C ($2,000) and 25D both ended December 31, 2025
                </p>
              </div>
              <div className="p-4 bg-amber-50 rounded-lg">
                <p className="font-semibold text-amber-900 mb-1">
                  ⚠ HEAR rebates
                </p>
                <p className="text-sm text-amber-800">
                  $29.2M allocated but on pause — VT DPS says don't count on it
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="font-semibold text-green-900 mb-1">
                  ✓ 0% financing
                </p>
                <p className="text-sm text-green-800">
                  Home Energy Loan up to $40,000, 0% for low/moderate income
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Federal credits — short */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Federal tax credits are gone
          </h2>
          <div className="p-5 bg-red-50 border border-red-200 rounded-xl">
            <p className="text-red-900 mb-3">
              The <strong>One Big Beautiful Bill Act</strong> (signed July 4,
              2025) terminated both Section 25C and Section 25D seven to nine
              years ahead of schedule. The $2,000 annual heat pump credit and
              the 30% residential clean energy credit no longer apply to
              anything installed after December 31, 2025.{" "}
              <Link
                href="/federal-heat-pump-tax-credit-expired"
                className="underline text-red-800"
              >
                Full details on what changed
              </Link>
              .
            </p>
            <p className="text-red-900 text-sm">
              If you bought a heat pump in late 2025 but it wasn't installed
              until 2026, you{" "}
              <strong>cannot claim the credit</strong>. The IRS defines
              eligibility based on when equipment is "placed in service" — not
              when you paid.
            </p>
          </div>
        </div>
      </section>

      {/* What's available now */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            What heat pump incentives are available in Vermont right now
          </h2>

          {/* EVT */}
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Efficiency Vermont — the statewide baseline
          </h3>
          <p className="text-gray-700 mb-4">
            Efficiency Vermont operates the baseline rebate program that covers
            nearly all Vermont electric customers (except Burlington Electric
            territory). Rebates are applied as instant point-of-sale discounts
            through participating HVAC distributors. Equipment must be new,
            installed in Vermont, and carry{" "}
            <strong>ENERGY STAR Cold Climate certification</strong>.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 border-b font-semibold">
                    Equipment
                  </th>
                  <th className="text-left p-3 border-b font-semibold">
                    2026 Rebate
                  </th>
                  <th className="text-left p-3 border-b font-semibold">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Ductless mini-split</td>
                  <td className="p-3 font-medium">$375–$475 per head</td>
                  <td className="p-3 text-gray-600">
                    Amount depends on qualifying tier
                  </td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-3">Integrated controls</td>
                  <td className="p-3 font-medium">$600 per system</td>
                  <td className="p-3 text-gray-600">
                    Smart controls for multi-head systems
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ducted whole-home</td>
                  <td className="p-3 font-medium">$2,200 per system</td>
                  <td className="p-3 text-gray-600">
                    Central ducted cold-climate ASHP
                  </td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-3">Air-to-water heat pump</td>
                  <td className="p-3 font-medium">Up to $6,000</td>
                  <td className="p-3 text-gray-600">
                    Hydronic distribution systems
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-medium">$600</td>
                  <td className="p-3 text-gray-600">
                    Instant discount at purchase
                  </td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-3">Heat pump clothes dryer</td>
                  <td className="p-3 font-medium">$400</td>
                  <td className="p-3 text-gray-600">
                    ENERGY STAR certified models
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Utility programs */}
          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-10">
            Utility programs — where you live changes the math
          </h3>
          <p className="text-gray-700 mb-6">
            Vermont's six major electric utilities offer strikingly different
            incentive levels. Your utility determines whether you get about $2,200 or as much as
            $7,950 for the same installation.
          </p>

          {/* GMP */}
          <div className="p-5 bg-white border border-gray-200 rounded-xl mb-6">
            <h4 className="font-semibold text-gray-900 mb-2">
              Green Mountain Power (GMP) — 75% of Vermont customers
            </h4>
            <p className="text-gray-700 mb-3">
              GMP coordinates with Efficiency Vermont and channels rebates
              through EVT's streamlined process. Since January 2024, GMP
              discontinued its separate $400/condenser midstream rebate for
              ductless systems.
            </p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>
                <strong>Ductless:</strong> EVT $375–$475/head (applied at
                purchase)
              </li>
              <li>
                <strong>Ducted:</strong> EVT $2,200
              </li>
              <li>
                <strong>HPWH:</strong> $200 GMP + $600 EVT ={" "}
                <strong>$800 total</strong>
              </li>
              <li>
                <strong>Geothermal:</strong> $1,800/ton GMP + $300 EVT ={" "}
                <strong>$2,100/ton</strong> (up to 10 tons)
              </li>
              <li>
                <strong>Income bonus (≤80% AMI):</strong> $2,000 GMP + $200 EVT
                = <strong>$2,200 per condenser</strong> — single streamlined
                form
              </li>
            </ul>
          </div>

          {/* BED */}
          <div className="p-5 bg-white border border-brand-200 rounded-xl mb-6">
            <h4 className="font-semibold text-gray-900 mb-2">
              Burlington Electric Department (BED) — highest rebates in Vermont
            </h4>
            <p className="text-gray-700 mb-3">
              BED operates its own program, independent from Efficiency Vermont.
              Burlington residents are <strong>not eligible</strong> for EVT
              income bonuses but benefit from BED's significantly more generous
              standalone rebates (valid through December 31, 2026). Because BED
              runs its own program, Burlington homeowners should ignore most
              statewide EVT income-bonus guidance and use BED's rules instead.
            </p>

            <p className="text-sm font-semibold text-gray-700 mb-2">
              Centrally ducted ASHP — high performance:
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-2 border-b">Size</th>
                    <th className="text-left p-2 border-b">Contractor POS</th>
                    <th className="text-left p-2 border-b">Online Rebate</th>
                    <th className="text-left p-2 border-b">Base total</th>
                    <th className="text-left p-2 border-b">With income bonus</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">≤2 ton</td>
                    <td className="p-2">$1,000</td>
                    <td className="p-2">$1,350</td>
                    <td className="p-2 font-medium">$2,350</td>
                    <td className="p-2 font-medium">$2,850</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-2">&gt;2–≤4 ton</td>
                    <td className="p-2">$1,500</td>
                    <td className="p-2">$3,950</td>
                    <td className="p-2 font-medium">$5,450</td>
                    <td className="p-2 font-medium">$5,950</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">&gt;4 ton</td>
                    <td className="p-2">$2,000</td>
                    <td className="p-2">$5,450</td>
                    <td className="p-2 font-medium">$7,450</td>
                    <td className="p-2 font-medium">$7,950</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm font-semibold text-gray-700 mb-2">
              Ductless mini-split:
            </p>
            <ul className="text-sm text-gray-700 space-y-1 mb-3">
              <li>
                ≤2 tons: $2,100 online + $350–$450 POS ={" "}
                <strong>$2,450–$2,550</strong> (+$400 income bonus)
              </li>
              <li>
                &gt;2 tons: $2,500 online + $350–$450 POS ={" "}
                <strong>$2,850–$2,950</strong> (+$500 income bonus)
              </li>
            </ul>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>
                <strong>HPWH:</strong> Up to $800 (+$400 income bonus)
              </li>
              <li>
                <strong>Air-to-water:</strong> Up to $12,000 ($2,000/ton)
              </li>
              <li>
                All BED rebates capped at <strong>75% of installed cost</strong>
              </li>
            </ul>
          </div>

          {/* VEC */}
          <div className="p-5 bg-white border border-gray-200 rounded-xl mb-6">
            <h4 className="font-semibold text-gray-900 mb-2">
              Vermont Electric Cooperative (VEC)
            </h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>
                <strong>Ductless/Ducted:</strong> EVT base rebates apply
              </li>
              <li>
                <strong>Thermal efficiency bill credit:</strong> $150/unit if
                installed in a weatherized building
              </li>
              <li>
                <strong>Income bonus (≤80% AMI):</strong>{" "}
                <strong>$1,000</strong> ($800 VPPSA + $200 EVT)
              </li>
              <li>
                <strong>Ground-source:</strong> Up to $2,100/ton (up to 10 tons)
              </li>
            </ul>
          </div>

          {/* VGS */}
          <div className="p-5 bg-white border border-gray-200 rounded-xl mb-6">
            <h4 className="font-semibold text-gray-900 mb-2">
              Vermont Gas Systems (VGS)
            </h4>
            <p className="text-sm text-gray-700">
              VGS serves Chittenden, Franklin, and Addison counties. It does not
              offer a gas-to-electric conversion rebate. Instead, VGS sells and
              leases heat pump equipment and incorporates EVT and electric
              utility rebates into its pricing. VGS positions heat pumps as a
              hybrid complement to gas systems, with smart thermostats toggling
              between heat sources. VGS also offers 0% APR financing for 60
              months (up to $15,000) through Green Mountain Credit Union for gas
              equipment.{" "}
              <strong>
                Heat pumps purchased through VGS are not eligible for GMP income
                bonuses.
              </strong>
            </p>
          </div>

          {/* WEC + Stowe */}
          <div className="p-5 bg-white border border-gray-200 rounded-xl mb-6">
            <h4 className="font-semibold text-gray-900 mb-2">
              Washington Electric Cooperative &amp; Stowe Electric
            </h4>
            <p className="text-sm text-gray-700 mb-2">
              Both participate in Efficiency Vermont programs. WEC offers an
              Energy Coach service to help members navigate rebates and
              eliminated transformer upgrade costs for members increasing
              electricity usage. Stowe Electric recently rejoined VPPSA, making
              the <strong>$1,000 income bonus</strong> available to
              income-qualified customers.
            </p>
          </div>
        </div>
      </section>

      {/* HEAR / HOMES */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Federal IRA rebates (HEAR &amp; HOMES) — mostly on pause
          </h2>
          <div className="p-5 bg-amber-50 border border-amber-200 rounded-xl mb-6">
            <p className="text-amber-900 mb-3">
              Vermont was allocated <strong>$58.5 million</strong> in IRA Home
              Energy Rebate funding: $29.3M for HOMES and $29.2M for HEAR.
            </p>
            <p className="text-amber-900 mb-3">
              <strong>HEAR is on pause.</strong> The Vermont Department of Public
              Service recommends not planning on HEAR funds for projects in
              2026. The program was caught in the Trump administration's January
              2025 executive order freezing IRA funding. No consumer-facing
              application portal exists.
            </p>
            <p className="text-amber-900 mb-3">
              <strong>HOMES was targeted for January 2026 launch</strong>{" "}
              through the Weatherization Assistance Program for low-income
              households (≤80% AMI), providing up to $16,000 in efficiency
              upgrades at no cost. However, no official launch announcement has
              been confirmed.
            </p>
            <p className="text-amber-900 text-sm">
              ⚠ Some third-party rebate calculator websites show HEAR and HOMES
              as "Open" in Vermont. These sites are often outdated or rely on
              projected program timelines rather than confirmed launches. Always
              check the{" "}
              <a
                href="https://publicservice.vermont.gov/efficiency/inflation-reduction-act-bolster-vermont-weatherization-and-electrification-efforts"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-amber-800"
              >
                official VT DPS page
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Stacking */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How Vermont rebates stack
          </h2>
          <p className="text-gray-700 mb-6">
            EVT rebates and utility income bonuses stack automatically through a
            single streamlined form. Burlington Electric operates separately.
            The key variable is which utility serves your home.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 border-b font-semibold">
                    Scenario
                  </th>
                  <th className="text-left p-3 border-b font-semibold">
                    Ducted System
                  </th>
                  <th className="text-left p-3 border-b font-semibold">
                    + HPWH
                  </th>
                  <th className="text-left p-3 border-b font-semibold">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">GMP customer, above 150% AMI</td>
                  <td className="p-3">$2,200</td>
                  <td className="p-3">$800</td>
                  <td className="p-3 font-semibold">$3,000</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-3">GMP customer, ≤80% AMI</td>
                  <td className="p-3">$4,400</td>
                  <td className="p-3">$1,000</td>
                  <td className="p-3 font-semibold">$5,400</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">BED customer, above income threshold</td>
                  <td className="p-3">Up to $7,450</td>
                  <td className="p-3">$800</td>
                  <td className="p-3 font-semibold">Up to $8,250</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-3">BED customer, income-qualified</td>
                  <td className="p-3">Up to $7,950</td>
                  <td className="p-3">$1,200</td>
                  <td className="p-3 font-semibold">Up to $9,150*</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">
            *BED caps all rebates at 75% of installed cost. Actual amount may be
            lower than the sum of individual incentives.
          </p>
        </div>
      </section>

      {/* Climate context */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why cold-climate heat pumps are non-negotiable in Vermont
          </h2>
          <p className="text-gray-700 mb-4">
            All Vermont incentive programs require ENERGY STAR Cold Climate
            certification. This isn't arbitrary — Vermont's ASHRAE winter design
            temperatures demand it:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 border-b font-semibold">City</th>
                  <th className="text-left p-3 border-b font-semibold">
                    99.6% Design Temp
                  </th>
                  <th className="text-left p-3 border-b font-semibold">
                    IECC Zone
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Burlington</td>
                  <td className="p-3 font-medium">-12°F</td>
                  <td className="p-3">6A</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-3">Montpelier</td>
                  <td className="p-3 font-medium">-10°F</td>
                  <td className="p-3">6A</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Brattleboro</td>
                  <td className="p-3 font-medium">-5 to -7°F</td>
                  <td className="p-3">6A</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mb-4">
            About <strong>60% of Vermont homes</strong> still heat with fuel oil
            or propane — more expensive and volatile than electricity. Heating
            oil runs roughly $3.70–$3.96/gallon, propane about $3.74–$3.77/gallon.
            Electric heating adoption has more than tripled since 2013, with
            Green Mountain Power alone spurring installation of over 28,000
            mini-splits and 2,700 whole-building systems between 2020 and 2024.
          </p>
        </div>
      </section>

      {/* How to apply */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How to apply for Vermont heat pump rebates
          </h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-100 text-brand-700 rounded-full flex items-center justify-center font-bold text-sm">
                1
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  Find your electric utility
                </p>
                <p className="text-sm text-gray-600">
                  GMP, BED, VEC, WEC, Stowe Electric, or another provider. This
                  determines your rebate levels and application path.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-100 text-brand-700 rounded-full flex items-center justify-center font-bold text-sm">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  Choose a participating contractor
                </p>
                <p className="text-sm text-gray-600">
                  For most utilities, the contractor must be in the Efficiency
                  Excellence Network (EEN). BED has its own approved contractor
                  list.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-100 text-brand-700 rounded-full flex items-center justify-center font-bold text-sm">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  Confirm cold-climate certification
                </p>
                <p className="text-sm text-gray-600">
                  Equipment must be ENERGY STAR Cold Climate certified and on the{" "}
                  <a
                    href="https://ashp.neep.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-600 underline"
                  >
                    NEEP Qualified Product List
                  </a>
                  .
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-100 text-brand-700 rounded-full flex items-center justify-center font-bold text-sm">
                4
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  Rebate applied at purchase
                </p>
                <p className="text-sm text-gray-600">
                  Most EVT and utility rebates are instant point-of-sale
                  discounts — your contractor applies them automatically.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-100 text-brand-700 rounded-full flex items-center justify-center font-bold text-sm">
                5
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  Income-qualified? Complete the bonus form
                </p>
                <p className="text-sm text-gray-600">
                  If your household earns ≤80% AMI, file the single streamlined
                  income bonus application (for GMP customers) or verify
                  eligibility with BED/VEC directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to watch */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What to watch
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li>
              <strong>HEAR program:</strong> If the federal freeze lifts,
              Vermont's $29.2M HEAR allocation could activate — adding up to
              $8,000/household for heat pumps. Check the{" "}
              <a
                href="https://publicservice.vermont.gov/efficiency/inflation-reduction-act-bolster-vermont-weatherization-and-electrification-efforts"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 underline"
              >
                VT DPS page
              </a>{" "}
              for updates.
            </li>
            <li>
              <strong>HOMES for low-income:</strong> If HOMES launches through
              WAP, low-income households (≤80% AMI) could receive up to $16,000
              in free whole-home efficiency upgrades. Contact your{" "}
              <a
                href="https://dcf.vermont.gov/benefits/weatherization"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 underline"
              >
                local Community Action Agency
              </a>{" "}
              regardless.
            </li>
            <li>
              <strong>New England Heat Pump Accelerator:</strong> A $450 million
              group-purchasing program across VT, MA, CT, RI, ME, and NH
              launched in early 2026. This may reduce installed costs but
              details are still emerging.
            </li>
            <li>
              <strong>Clean Heat Standard is dead:</strong> The PUC officially
              closed the case in February 2026. Vermont's legally binding
              emissions targets remain but no replacement policy has been
              proposed.
            </li>
          </ul>
        </div>
      </section>

      {/* Bottom line */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            The bottom line
          </h2>
          <div className="p-6 bg-gray-50 rounded-xl">
            <p className="text-gray-700 mb-3">
              Vermont still offers meaningful heat pump rebates — but far less
              than in 2025.
            </p>
            <p className="text-gray-700">
              Most homeowners will see <strong>$2,000–$5,000</strong> in
              incentives, with higher rebates available only through Burlington
              Electric or income-qualified programs. Without federal tax credits,
              financing and fuel savings now play a much bigger role in whether a
              heat pump makes financial sense.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-8">
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
                <div key={index}>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {faq.name}
                  </h3>
                  <p className="text-gray-700 text-sm">
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="space-y-2">
            {vtIncentive.sources.map(
              (source: { label: string; url: string }, index: number) => (
                <li key={index}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-600 hover:underline text-sm"
                  >
                    {source.label}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-4">See also</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/heat-pumps/states/nh"
              className="card hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 mb-2">
                New Hampshire Heat Pump Rebates
              </h3>
              <p className="text-gray-600 text-sm">
                NHSaves program, Eversource NH, and Liberty utilities.
              </p>
            </Link>
            <Link
              href="/heat-pumps/states/ma"
              className="card hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 mb-2">
                Massachusetts Heat Pump Rebates
              </h3>
              <p className="text-gray-600 text-sm">
                Mass Save restructured rebates and utility programs.
              </p>
            </Link>
            <Link
              href="/heat-pumps/states/ny"
              className="card hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 mb-2">
                New York Heat Pump Incentives
              </h3>
              <p className="text-gray-600 text-sm">
                Clean Heat Program, 6 utilities, EmPower+, and geothermal.
              </p>
            </Link>
            <Link
              href="/heat-pumps/states/me"
              className="card hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 mb-2">
                Maine Heat Pump Rebates
              </h3>
              <p className="text-gray-600 text-sm">
                Efficiency Maine rebates up to $9,000 for whole-home systems.
              </p>
            </Link>
            <Link
              href="/federal-heat-pump-tax-credit-expired"
              className="card hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 mb-2">
                Federal Heat Pump Tax Credits Ended
              </h3>
              <p className="text-gray-600 text-sm">
                What happened to 25C and 25D, and what it means for 2026.
              </p>
            </Link>
            <Link
              href="/heat-pumps"
              className="card hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 mb-2">
                All State Heat Pump Incentives
              </h3>
              <p className="text-gray-600 text-sm">
                Day-accurate status tracker for every state we cover.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8">
        <div className="container-narrow">
          <div className="p-6 bg-gray-50 rounded-xl">
            <p className="text-gray-600 text-sm">
              <strong>Disclaimer:</strong> This information is for educational
              purposes only and should not be considered tax or financial advice.
              Program details, rebate amounts, and eligibility rules can change
              without notice. Always verify current program status directly with
              the program administrator or your utility before making purchasing
              decisions.
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
            ← Back to Heat Pump Incentive Tracker
          </Link>
        </div>
      </section>
    </>
  );
}
