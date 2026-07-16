// src/app/heat-pumps/utilities/xcel-energy/page.tsx

import Link from "next/link";
import type { Metadata } from "next";
import { formatDate } from "@/data/incentives";
import { utilities } from "@/data/utilities";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Xcel Energy Heat Pump Rebates 2026: Up to $2,250/Ton in CO, $2,000 in MN | Home Energy Basics",
  description:
    "Xcel pays up to $2,250/heating ton in Colorado and $2,000 in Minnesota for heat pumps; New Mexico rebates are installer-quoted. All 8 Xcel states covered.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/utilities/xcel-energy",
  },
  openGraph: {
    title: "Xcel Energy Heat Pump Rebates 2026",
    description:
      "Up to $2,250/heating ton in Colorado and $2,000 per system in Minnesota — the complete territory-by-territory guide to Xcel Energy heat pump rebates after federal credits expired.",
    url: "https://homeenergybasics.com/heat-pumps/utilities/xcel-energy",
    type: "article",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What heat pump rebates does Xcel Energy offer in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Xcel Energy offers residential heat pump rebates in three of its eight states. Colorado pays $750 per heating ton standard, or $2,250 per heating ton with the bonus for homes with a fuel-burning system. Minnesota pays up to $2,000 per cold-climate system ($1,500 for electric-only customers), plus a $600 insulation bundle bonus. New Mexico offers rebates through participating installers, with amounts quoted by the installer rather than published. Xcel customers in Wisconsin use the statewide Focus on Energy program instead, and there is no Xcel heat pump purchase rebate in North Dakota, South Dakota, Texas, or Michigan.",
      },
    },
    {
      "@type": "Question",
      name: "Can I stack Xcel heat pump rebates with state or federal programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Often, yes — but not automatically. Xcel rebates are utility incentives and may stack with separate state-run programs such as Colorado's state incentives and income-based HEAR rebates, and with Minnesota state programs. The federal Section 25C and 25D tax credits ended December 31, 2025, so those no longer stack for new installations. Check the stacking rules on your state's incentive guide, since some programs cap total incentives at a percentage of project cost.",
      },
    },
    {
      "@type": "Question",
      name: "Why does Xcel pay $2,250 per ton in Colorado but a flat $2,000 in Minnesota?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Xcel Energy is one company, but its efficiency programs are separate state programs approved by each state's regulators and funded by each state's ratepayers. Colorado's program is structured per heating ton of capacity at 5 degrees F, while Minnesota's pays a flat amount per system under its 2024-2026 program cycle. The same heat pump model can earn very different rebates depending on which Xcel state it is installed in.",
      },
    },
    {
      "@type": "Question",
      name: "Does Xcel offer heat pump rebates in Texas, North Dakota, South Dakota, or Michigan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Xcel's own pages for those states show no heat pump purchase rebate. North Dakota and South Dakota customers whose primary heat source is an electric heat pump can enroll in a reduced electric space-heating rate by phone. Texas offers a general efficiency-services program and demand-response bill credits. Michigan Xcel customers access efficiency rebates through the statewide Efficiency United program rather than through Xcel directly.",
      },
    },
    {
      "@type": "Question",
      name: "What counts as a cold-climate heat pump for Xcel rebates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In both Minnesota and Colorado, a cold-climate heat pump must have a heating COP of at least 1.75 at 5 degrees F, must retain at least 70 percent of its 47-degree rated heating capacity at 5 degrees F, and must appear on the NEEP cold-climate heat pump directory (ashp.neep.org). SEER2, EER2, and HSPF2 minimums also apply and differ slightly by state and by ducted versus non-ducted configuration.",
      },
    },
  ],
};

const STATE_NAMES: Record<string, string> = {
  CO: "Colorado",
  MN: "Minnesota",
  NM: "New Mexico",
  WI: "Wisconsin",
  ND: "North Dakota",
  SD: "South Dakota",
  TX: "Texas",
  MI: "Michigan",
};

// State pages that exist today; non-members render as plain text.
const LIVE_STATE_PAGES = new Set(["CO", "MN", "WI", "TX"]);

export default function XcelEnergyPage() {
  const utility = utilities["xcel-energy"];

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
            {" "}/ Utilities / Xcel Energy
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Xcel Energy Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Xcel Energy serves customers in eight states, but its heat pump
            rebates depend entirely on which one you&apos;re in. Colorado pays up
            to <strong>$2,250 per heating ton</strong> for cold-climate systems,
            Minnesota pays up to <strong>$2,000 per system</strong> plus a{" "}
            <strong>$600</strong> insulation bundle bonus, New Mexico offers
            installer-quoted rebates, and the other five states have no
            standalone Xcel rebate — Wisconsin customers use the statewide
            Focus on Energy program instead. This guide covers all major Xcel
            Energy heat pump incentives available in 2026, including the
            Colorado and Minnesota rebate programs, the New Mexico installer
            program, and territory-by-territory availability. Here&apos;s
            what&apos;s actually available.
          </p>
          <p className="text-sm text-gray-500">
            Last verified: {formatDate(utility.lastVerified)}
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Rates and program availability may change after this date.
          </p>
        </div>
      </section>

      {/* 2. STATUS */}
      <section className="py-8">
        <div className="container-narrow">
          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <p className="font-semibold text-green-800 mb-1">
              ✓ Open — rebates available in 3 of 8 Xcel states
            </p>
            <p className="text-sm text-green-900">
              Heat pump rebates are open in Minnesota (program cycle through
              2026), Colorado (installations through Dec. 31, 2026,
              applications through Sept. 30, 2027), and New Mexico
              (installer-administered). Colorado funding is first-come,
              first-served until the amount approved by the Public Utilities
              Commission is expended.
            </p>
          </div>
        </div>
      </section>

      {/* 3. SHORT VERSION */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            The Short Version
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">
                ✓ Colorado: up to $2,250 per heating ton
              </p>
              <p className="text-sm text-green-900">
                Cold-climate heat pumps earn <strong>$2,250/heating ton</strong>{" "}
                at 5°F with the bonus (fuel-burning system required) or
                $750/ton standard. A typical 3-ton cold-climate system reaches
                ~$6,750 at the bonus tier.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">
                ✓ Minnesota: up to $2,000 per system
              </p>
              <p className="text-sm text-green-900">
                Cold-climate ASHPs earn <strong>$2,000</strong> for combined or
                gas-only customers ($1,500 electric-only), with a{" "}
                <strong>$600</strong> bonus for pairing insulation and air
                sealing with the heat pump.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">
                ✓ From Xcel alone: ~$2,600 in MN, ~$6,750 in CO
              </p>
              <p className="text-sm text-green-900">
                Before stacking any state programs: Minnesota reaches ~$2,600
                with the bundle bonus, and a Colorado 3-ton cold-climate system
                reaches ~$6,750 at the bonus tier. State and HEAR programs
                may stack on top, subject to each program&apos;s rules — see
                the state guides.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">
                ✗ Federal tax credits ended
              </p>
              <p className="text-sm text-red-900">
                The Section 25C and Section 25D federal tax credits expired
                Dec. 31, 2025. There is no federal heat pump tax credit for
                2026 installations.
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 md:col-span-2">
              <p className="font-semibold text-amber-800 mb-1">
                ⚠ Your rebate depends entirely on your state
              </p>
              <p className="text-sm text-amber-900">
                Xcel offers heat pump purchase rebates in only 3 of its 8
                states. Wisconsin customers use Focus on Energy instead. North
                Dakota, South Dakota, Texas, and Michigan customers have no
                Xcel heat pump rebate, and New Mexico amounts are quoted by
                participating installers rather than published.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICE TERRITORY */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Where Xcel Heat Pump Rebates Apply
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Xcel Energy serves customers in eight states. Heat pump purchase
            rebates are available in three of them: Colorado, Minnesota, and
            New Mexico. Every territory is listed below so you can see exactly
            where your address stands.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">State</th>
                  <th className="text-left p-3 font-semibold">Heat pump rebate?</th>
                  <th className="text-left p-3 font-semibold">What&apos;s there</th>
                </tr>
              </thead>
              <tbody>
                {utility.territories.map((t) => (
                  <tr
                    key={t.state}
                    className={t.hasHeatPumpProgram ? "border-b bg-green-50" : "border-b"}
                  >
                    <td className="p-3">
                      {LIVE_STATE_PAGES.has(t.state) ? (
                        <Link
                          href={`/heat-pumps/states/${t.state.toLowerCase()}`}
                          className="text-brand-600 hover:underline"
                        >
                          {STATE_NAMES[t.state]}
                        </Link>
                      ) : (
                        <span className="text-gray-500">{STATE_NAMES[t.state]}</span>
                      )}
                    </td>
                    <td className={t.hasHeatPumpProgram ? "p-3 font-semibold" : "p-3 text-gray-500"}>
                      {t.rebateLabel ?? (t.hasHeatPumpProgram ? "Yes" : "No")}
                    </td>
                    <td className="p-3">{t.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="font-semibold text-blue-800 mb-1">
              Why the same heat pump earns different rebates
            </p>
            <p className="text-sm text-blue-900">
              Xcel Energy is one company, but each state&apos;s efficiency
              program is approved by that state&apos;s regulators and funded by
              that state&apos;s ratepayers. Colorado pays per heating ton of
              cold-weather capacity; Minnesota pays flat amounts per system.
              Identical equipment can earn $2,000 in Minneapolis and roughly
              $6,750 in Denver.
            </p>
          </div>
        </div>
      </section>

      {/* 5. REBATE DETAILS */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Rebate Details by State
          </h2>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Colorado</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Colorado rebates are paid per ton under the 2025–2026 summary
            effective Nov. 16, 2025. Every heat pump measure has two tiers: a
            standard rebate available to Xcel electric or gas customers, and a
            bonus tier — roughly triple — for homes with a fuel-burning
            heating system. Invoices and installations must be completed by
            Dec. 31, 2026, with applications accepted through Sept. 30, 2027.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">With bonus</th>
                  <th className="text-left p-3 font-semibold">Standard</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Cold-climate ASHP (ducted, non-ducted, or mixed)</td>
                  <td className="p-3 font-semibold">$2,250/heating ton at 5°F</td>
                  <td className="p-3 font-semibold">$750/heating ton at 5°F</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Standard ASHP</td>
                  <td className="p-3 font-semibold">$900/cooling ton at 95°F</td>
                  <td className="p-3 font-semibold">$300/cooling ton at 95°F</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ground source heat pump</td>
                  <td className="p-3 font-semibold">$3,300/heating ton</td>
                  <td className="p-3 font-semibold">$1,100/heating ton</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">$2,250</td>
                  <td className="p-3 font-semibold">$750</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-amber-800 mb-1">
              ⚠ Common mistake: assuming every home gets $2,250/ton
            </p>
            <p className="text-sm text-amber-900">
              The bonus tier requires a fuel-burning heating system. Effective
              Nov. 16, 2025, homes with existing electric heating (baseboard,
              for example) no longer qualify for bonuses on heat pumps or heat
              pump water heaters — they receive the standard tier of $750 per
              heating ton.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Colorado also offers the <strong>$600</strong>{" "}
            insulation-before-heat-pump bundle bonus, a 25% Whole Home
            Efficiency bonus on standard rebates when three or more qualifying
            measures are completed within two years, home energy audit rebates
            of $100–$200, and income-qualified Home Energy Squad support that
            can cover 50–100% of upgrade costs for eligible households. Gas
            furnace and boiler rebates were removed effective Jan. 1, 2026.
            Full state-level stacking is covered in the{" "}
            <Link href="/heat-pumps/states/co" className="text-brand-600 hover:underline">
              Colorado heat pump guide
            </Link>.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Minnesota</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Minnesota rebates run under Xcel&apos;s 2024–2026 program cycle.
            Amounts depend on the equipment and on your customer type: homes
            with Xcel gas service (or both gas and electric) earn the higher
            tier, while electric-only customers earn a reduced tier on ducted
            systems. Applications must be postmarked by September 30 of the
            year following installation.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Key requirements</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Cold-climate ASHP (ducted)</td>
                  <td className="p-3">15.2 SEER2, 10 EER2, 8.1 HSPF2; COP ≥ 1.75 at 5°F; NEEP-listed</td>
                  <td className="p-3 font-semibold">$2,000 combo/gas · $1,500 electric-only</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Standard ASHP (ducted)</td>
                  <td className="p-3">15.2 SEER2, 9.6 EER2, 7.8 HSPF2; quality installation</td>
                  <td className="p-3 font-semibold">$1,600 combo/gas · $1,100 electric-only</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Cold-climate mini-split</td>
                  <td className="p-3">16 SEER2, 9 EER2, 9.5 HSPF2; COP ≥ 1.75 at 5°F</td>
                  <td className="p-3 font-semibold">$2,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Standard mini-split</td>
                  <td className="p-3">15.2 SEER2, 9.3 EER2, 8.5 HSPF2</td>
                  <td className="p-3 font-semibold">$1,600</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ground source heat pump</td>
                  <td className="p-3">16 EER2, 3.3 COP; quality installation</td>
                  <td className="p-3 font-semibold">$500/heating ton</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3">ENERGY STAR rated</td>
                  <td className="p-3 font-semibold">$400–$500</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Minnesota adds a <strong>$600</strong> bonus when qualifying
            insulation and air sealing are installed before a rebate-qualifying
            heat pump, within two years of each other. Mini-splits can be
            self-installed and still qualify. Customers using a heat pump as
            their primary heat source are also eligible for a reduced electric
            space-heating rate. Full state-level stacking is covered in the{" "}
            <Link href="/heat-pumps/states/mn" className="text-brand-600 hover:underline">
              Minnesota heat pump guide
            </Link>.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">New Mexico</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Xcel&apos;s New Mexico territory (served by its Southwestern Public
            Service subsidiary) offers heat pump rebates to residential
            electric customers, but the program works differently: it is fully
            installer-administered. A participating installer quotes your
            rebate, handles the installation, and submits the application on
            your behalf. Xcel does not publish New Mexico rebate amounts —
            its own page directs customers to verify the amount with an
            Xcel-approved installer, so get the figure in writing before you
            sign. The current participating installer list is on Xcel&apos;s
            New Mexico heat pumps page. A reduced electric space-heating rate
            is also available. A dedicated New Mexico state guide is{" "}
            <em>coming soon</em>.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <p className="font-semibold text-green-800 mb-1">
              ✓ Best positioned for Xcel rebates
            </p>
            <p className="text-sm text-green-900">
              Gas-heated Colorado homes replacing a furnace or boiler capture
              the full bonus tier, and Minnesota customers with both Xcel gas
              and electric service capture the top flat rebates. In both
              states, pairing insulation work with the heat pump adds the $600
              bundle bonus.
            </p>
          </div>
        </div>
      </section>

      {/* 6. EQUIPMENT REQUIREMENTS */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Equipment Requirements
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Both Minnesota and Colorado use the same cold-climate definition:
            a heating COP of at least <strong>1.75 at 5°F</strong>, heating
            capacity at 5°F of at least <strong>70%</strong> of the 47°F rated
            capacity, and a listing on the NEEP cold-climate heat pump
            directory (ashp.neep.org). SEER2, EER2, and HSPF2 minimums vary by
            state and by ducted versus non-ducted configuration — see the
            tables above. Equipment generally must appear in the AHRI
            directory, ducted systems in Minnesota require quality
            installation, and rebates are paid per outdoor unit, not per
            indoor head. Rebates cannot exceed installed cost, and eligibility
            is limited to single-family homes, duplexes, and four-plexes.
          </p>
        </div>
      </section>

      {/* 7. FEDERAL EXPIRED */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Federal Tax Credits Have Ended
          </h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <p className="text-red-900 leading-relaxed">
              The federal <strong>Section 25C</strong> credit (up to $2,000
              for heat pumps) and <strong>Section 25D</strong> credit (30% for
              geothermal) both expired on <strong>Dec. 31, 2025</strong>.
              Xcel&apos;s utility rebates are now the largest incentives
              available to most of its customers, alongside state programs.
              See{" "}
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                what the federal expiration means for your project
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* 8. STACKING */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What Xcel Rebates Add Up To
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Xcel rebates are utility incentives, which means separate state
            programs — and, where open, income-based HEAR rebates — may stack
            on top of them, subject to each program&apos;s current rules and
            any total-incentive caps. The scenarios below show what Xcel itself pays; your
            full stack depends on your state&apos;s programs, covered in the
            state guides.
          </p>
          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">
                Minnesota — cold-climate ducted ASHP, combo customer
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Cold-climate ASHP rebate: $2,000</li>
                <li>Insulation + air sealing bundle bonus: $600</li>
                <li>Reduced electric space-heating rate: ongoing bill savings</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">
                Realistic maximum from Xcel: ~$2,600
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">
                Colorado — 3-ton cold-climate ASHP, gas-heated home
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Bonus-tier rebate: 3 heating tons × $2,250 = $6,750</li>
                <li>Insulation bundle bonus (if paired): $600</li>
                <li>Income-qualified households: Home Energy Squad support can reach 50–100% of upgrade costs</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">
                Realistic maximum from Xcel: ~$7,350 (income-qualified: up to full cost)
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">
                New Mexico — installer-quoted rebate
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Amounts are not published — the participating installer quotes and files your rebate</li>
                <li>Get the rebate figure in writing on the project quote</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">
                Realistic maximum: quoted per project
              </p>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg p-5">
            <p className="font-semibold text-gray-900 mb-1">
              What Xcel actually covers
            </p>
            <p className="text-sm text-gray-700">
              Depending on your state, equipment, and tier, Xcel pays anywhere
              from a few hundred dollars for standard-tier equipment to{" "}
              <strong>~$7,350</strong> for a bonus-tier Colorado cold-climate
              system with the insulation bundle — before counting any state or
              HEAR programs, which may stack subject to their own rules and
              caps. Your final out-of-pocket cost
              depends on that state-level stacking: see the{" "}
              <Link href="/heat-pumps/states/co" className="text-brand-600 hover:underline">Colorado</Link>{" "}
              and{" "}
              <Link href="/heat-pumps/states/mn" className="text-brand-600 hover:underline">Minnesota</Link>{" "}
              guides for the full math.
            </p>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Xcel does not offer a 0% heat pump loan program, and the federal
            25C/25D credits ended Dec. 31, 2025.
          </p>
        </div>
      </section>

      {/* 9. HOW TO APPLY */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How to Apply
          </h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-gray-900">Confirm your state&apos;s program</p>
                <p className="text-sm text-gray-700">
                  Check the territory table above. Rebates, tiers, and
                  deadlines are set per state — Minnesota, Colorado, and New
                  Mexico each run different programs.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900">Get a quote from a participating contractor</p>
                <p className="text-sm text-gray-700">
                  Use Xcel&apos;s Trade Partner Network in Minnesota and
                  Colorado, or a participating installer in New Mexico (where
                  the installer is required). Mini-splits in Minnesota and
                  Colorado can be self-installed and still qualify. Have the
                  quote list your rebate amounts.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-900">Install and keep your documentation</p>
                <p className="text-sm text-gray-700">
                  Keep dated invoices and the AHRI certificate for your
                  equipment. Rebates cannot exceed installed cost, and
                  invoices must precisely match the application.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <p className="font-semibold text-gray-900">Submit before the deadline</p>
                <p className="text-sm text-gray-700">
                  Your contractor typically files for you, or use Xcel&apos;s
                  digital application for DIY installs. Minnesota applications
                  are due by Sept. 30 of the year after installation; Colorado
                  installations must be completed by Dec. 31, 2026, with
                  applications accepted through Sept. 30, 2027; New Mexico
                  installers submit on your behalf.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. WHAT TO WATCH */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What to Watch
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">
                Colorado funding is first-come, first-served
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Xcel&apos;s own rebate summary states rebates are available
                until the funding approved by the Public Utilities Commission
                is expended or the program is discontinued. Confirm
                availability before signing a contract.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">
                Minnesota&apos;s program cycle runs through 2026
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Current amounts come from Xcel&apos;s 2024–2026 rebate summary.
                Rebate levels for the next program cycle have not been
                published, so installations planned for 2027 should not assume
                today&apos;s amounts.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">
                New Mexico amounts are unpublished
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Xcel directs New Mexico customers to verify rebate amounts
                with a participating installer. Get the figure in writing —
                and if Xcel publishes amounts later, this page will be
                updated.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">
                IRA funding runway for stacked rebates
              </p>
              <p className="text-sm text-gray-600 mt-1">
                State-administered HEAR rebates that may stack with Xcel&apos;s
                (such as Colorado&apos;s income-based rebates) draw on finite
                federal IRA allocations. Check your state guide for current
                funding status before counting on the stack.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqJsonLd.mainEntity.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.name}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. SEE ALSO */}
      <section className="py-8 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-3">See also</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/heat-pumps/states/mn" className="text-brand-600 hover:underline">
                Minnesota Heat Pump Rebates
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/co" className="text-brand-600 hover:underline">
                Colorado Heat Pump Rebates
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/wi" className="text-brand-600 hover:underline">
                Wisconsin Heat Pump Rebates (Focus on Energy)
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/tx" className="text-brand-600 hover:underline">
                Texas Heat Pump Rebates
              </Link>
            </li>
            <li>
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                Federal Heat Pump Tax Credits Ended — What It Means
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

      {/* 13. SOURCES */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="space-y-2 text-sm">
            {utility.sources.map((source, index) => (
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

      {/* 14. DISCLAIMER */}
      <section className="py-8">
        <div className="container-narrow">
          <div className="bg-gray-100 rounded-lg p-6">
            <p className="text-gray-500 text-xs leading-relaxed">
              <strong>Disclaimer:</strong> This page covers the main Xcel
              Energy residential heat pump rebates available in Minnesota,
              Colorado, and New Mexico in 2026, and the absence of such
              rebates in Xcel&apos;s other territories. It does not calculate
              savings, guarantee eligibility, or represent Xcel Energy or any
              incentive program. Rebate amounts vary with equipment capacity
              and customer type, and Colorado funding is first-come,
              first-served. We verify status regularly but programs can change
              without notice. Always confirm current amounts and eligibility
              with Xcel Energy and your contractor before making decisions.
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
