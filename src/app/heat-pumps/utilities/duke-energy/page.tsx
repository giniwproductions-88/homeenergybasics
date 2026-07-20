// src/app/heat-pumps/utilities/duke-energy/page.tsx

import Link from "next/link";
import type { Metadata } from "next";
import { utilities } from "@/data/utilities";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Duke Energy Heat Pump Rebates 2026: Up to $3,000 by State (NC, SC, FL, IN, KY) | Home Energy Basics",
  description:
    "Duke Energy Smart $aver pays $300–$3,000 for heat pumps in NC, SC, FL, IN and KY. Ohio has no residential rebate. Every Duke heat pump incentive for 2026.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/utilities/duke-energy",
  },
  openGraph: {
    title: "Duke Energy Heat Pump Rebates 2026",
    description:
      "Smart $aver rebates up to $3,000 across five states, verified state by state — the complete guide to Duke Energy heat pump incentives after federal credits expired.",
    url: "https://homeenergybasics.com/heat-pumps/utilities/duke-energy",
    type: "article",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What heat pump rebates does Duke Energy offer in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Duke Energy offers residential heat pump rebates in five of its six states through the Smart $aver program (North Carolina, South Carolina, Indiana, Kentucky) and the Home Energy Improvement program (Florida). Amounts range from $300 for a base-tier replacement in Kentucky to $3,000 for a dual-fuel conversion in Indiana. Ohio has no residential heat pump rebate. Each state has its own rebate table, efficiency requirements, and effective dates.",
      },
    },
    {
      "@type": "Question",
      name: "Are Duke Energy heat pump rebates the same in every state?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Each state's program is separately approved by that state's utility commission, so amounts, eligible measures, and effective dates differ. North Carolina and South Carolina share identical Smart $aver tables (up to $900 for replacements, up to $2,500 for conversions), Indiana tops out at $3,000 for a dual-fuel conversion, Florida runs a separate Home Energy Improvement program with a required Home Energy Check, Kentucky pays $300–$800, and Ohio offers no residential rebates at all.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a Replace on Failure rebate and an Early Replacement rebate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Duke's Smart $aver tables pay two different amounts for the same equipment: a lower Replace on Failure amount when your old system has already died, and a higher Early Replacement amount when you proactively replace working equipment. The difference can be substantial — in the Carolinas, a 15.2 SEER2 heat pump earns $350 on failure but $700 as an early replacement. If your system is old but still running, replacing it before it fails pays more.",
      },
    },
    {
      "@type": "Question",
      name: "Can I stack Duke Energy rebates with state HEAR rebates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, where a state HEAR program is open. In North Carolina, NC DEQ confirms households can receive both home energy rebates and utility incentives for the same product, as long as the combined rebates do not exceed the purchase price of the product. Indiana's state rebate program is also open. South Carolina, Florida, and Kentucky had not launched consumer HEAR rebates as of our last verification, so Duke rebates are the primary layer there.",
      },
    },
    {
      "@type": "Question",
      name: "Does Duke Energy Ohio offer heat pump rebates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Duke Energy Ohio's residential offerings include supplier choice, renewable energy programs, and billing tools, but no heat pump, HVAC, or efficiency rebates. The Smart $aver program is not available to Ohio customers. Ohio homeowners should check the Ohio state incentives page for what exists outside the utility.",
      },
    },
  ],
};

export default function DukeEnergyPage() {
  const duke = utilities["duke-energy"];
  const formattedVerified = formatDate(duke.lastVerified);
  const formattedUpdated = formatDate(duke.lastUpdated);

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
            {" "}/ Utilities / Duke Energy
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Duke Energy Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Duke Energy serves about 8 million electric customers across six
            states, and its heat pump rebates are different in every one of
            them. Smart $aver pays up to <strong>$900</strong> for a heat pump
            replacement and up to <strong>$2,500</strong> for a conversion in
            the Carolinas, up to <strong>$3,000</strong> in Indiana, and
            $300&ndash;$800 in Kentucky, while Florida runs a separate Home
            Energy Improvement program and Ohio has no residential rebate at
            all. This guide covers all major Duke Energy heat pump incentives
            available in 2026, verified state by state on Duke&apos;s own
            program pages, including Smart $aver, Home Energy Improvement, and
            heat pump water heater rebates. Here&apos;s what&apos;s actually
            available.
          </p>
          <p className="text-sm text-gray-500">
            Updated {formattedUpdated} &middot; Verified {formattedVerified}
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Rates and program availability may change after this date.
          </p>
        </div>
      </section>

      {/* 2. STATUS CARD */}
      <section className="py-8">
        <div className="container-narrow">
          {/* Adapter: utilities.ts entries mirror incentives.ts fields.
              Reconcile with the StatusCard usage in xcel-energy-page.tsx. */}
          <StatusCard
            incentive={{
              stateCode: "NC",
              stateName: duke.name,
              status: duke.status,
              lastVerified: duke.lastVerified,
              summary: duke.summary,
              sources: duke.sources,
            } as unknown as (typeof incentives)["NC"]}
          />
        </div>
      </section>

      {/* 3. SHORT VERSION */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The short version</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Carolinas: up to $2,500</p>
              <p className="text-sm text-green-900">North and South Carolina share identical Smart $aver tables: $350&ndash;$900 for heat pump replacements, $1,500 for converting electric resistance heat to a heat pump, and up to $2,500 for dual-fuel, cold-climate, or geothermal conversions. Plus a $500 heat pump water heater rebate.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Indiana: up to $3,000</p>
              <p className="text-sm text-green-900">Indiana&apos;s Smart $aver pays $400&ndash;$700 for replacements, $800 for converting electric resistance heat, and its dual-fuel conversion tops the whole Duke system at $2,500&ndash;$3,000. Heat pump water heaters earn $350.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Stacks with state rebates</p>
              <p className="text-sm text-green-900">Where state HEAR programs are open, Duke rebates stack on top. In North Carolina, an income-qualified household converting from electric resistance heat can combine up to $8,000 in HEAR with Duke&apos;s $1,500 conversion rebate and both water heater rebates.</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">✗ Federal tax credits expired</p>
              <p className="text-sm text-red-900">The Section 25C and 25D federal tax credits ended December 31, 2025. Duke rebates and state programs are now the main sources of heat pump savings in Duke territory.</p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 md:col-span-2">
              <p className="font-semibold text-amber-800 mb-1">⚠ Rebates differ by state — and Ohio has none</p>
              <p className="text-sm text-amber-900">Each state&apos;s rebate table is separately approved by its utility commission. Amounts, eligible measures, program names, and effective dates all differ, and Duke Energy Ohio customers have no residential heat pump rebate at all. Always check your own state&apos;s table below, not a neighbor&apos;s.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICE TERRITORY */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Where Duke Energy offers heat pump rebates</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Duke Energy serves customers in six states; residential heat pump
            rebates are available in five of them. In North Carolina and South
            Carolina, Duke operates as two utilities — Duke Energy Carolinas
            and Duke Energy Progress — but both offer the same Smart $aver
            rebates in each state.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">State</th>
                  <th className="text-left p-3 font-semibold">Heat pump rebate?</th>
                  <th className="text-left p-3 font-semibold">Note</th>
                </tr>
              </thead>
              <tbody>
                {duke.territories.map((t) => (
                  <tr key={t.state} className={`border-b${t.hasHeatPumpProgram ? " bg-green-50" : ""}`}>
                    <td className="p-3">
                      <Link href={`/heat-pumps/states/${t.state.toLowerCase()}`} className="text-brand-600 hover:underline">
                        {t.state}
                      </Link>
                    </td>
                    <td className={`p-3 font-semibold${t.hasHeatPumpProgram ? "" : " text-gray-500"}`}>
                      {t.rebateLabel ?? (t.hasHeatPumpProgram ? "Yes" : "No")}
                    </td>
                    <td className="p-3">{t.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">
            Duke&apos;s website shows each visitor their own state&apos;s
            program after a one-time location prompt, so the rebate links on
            this page resolve to your state&apos;s version automatically.
          </p>
        </div>
      </section>

      {/* 5. REBATE DETAILS — one subsection per program territory */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Rebate details by state</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Every table below was verified on Duke&apos;s own program pages
            with the site set to that state. Smart $aver rebates pay two
            amounts per measure: a lower <strong>Replace on Failure</strong>{" "}
            value when your old system has already died, and a higher{" "}
            <strong>Early Replacement</strong> value for proactively replacing
            working equipment.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="font-semibold text-blue-800 mb-1">Replacing early pays up to twice as much</p>
            <p className="text-sm text-blue-900">Duke&apos;s two-column structure rewards planning ahead: in the Carolinas, the same 15.2 SEER2 heat pump earns $350 after a failure but $700 as an early replacement. If your system is past 12&ndash;15 years old and still running, getting the rebate quote before it dies can double your rebate — and spares you an emergency install at list price.</p>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-8">North Carolina — Smart $aver</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Duke Energy Carolinas and Duke Energy Progress offer the same
            Smart $aver rebates across North Carolina for projects completed
            after August 1, 2025. Your participating contractor completes the
            work and submits the rebate application for you; the rebate
            arrives as a physical card or digital Mastercard. Equipment must
            be AHRI certified with ECM motors, and conversion rebates require
            an existing heat pump with electric resistance strip heat serving
            at least 1,000 sq. ft.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Measure</th>
                  <th className="text-left p-3 font-semibold">Minimum efficiency</th>
                  <th className="text-left p-3 font-semibold">Replace on Failure</th>
                  <th className="text-left p-3 font-semibold">Early Replacement</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Air-source heat pump</td>
                  <td className="p-3">15.2 SEER2 / 7.5 HSPF2</td>
                  <td className="p-3 font-semibold">$350</td>
                  <td className="p-3 font-semibold">$700</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Air-source heat pump</td>
                  <td className="p-3">16 SEER2 / 7.5 HSPF2</td>
                  <td className="p-3 font-semibold">$450</td>
                  <td className="p-3 font-semibold">$800</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Air-source heat pump</td>
                  <td className="p-3">&ge;17 SEER2 / 7.5 HSPF2</td>
                  <td className="p-3 font-semibold">$700</td>
                  <td className="p-3 font-semibold">$900</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Mini/multi split (min. 1,000 sq. ft.)</td>
                  <td className="p-3">&ge;18 SEER2 / 9.0 HSPF2</td>
                  <td className="p-3 font-semibold">$700</td>
                  <td className="p-3 font-semibold">$900</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Electric furnace/baseboard &rarr; heat pump</td>
                  <td className="p-3">&ge;15.2 SEER2 / 7.5 HSPF2</td>
                  <td className="p-3 font-semibold">$1,500</td>
                  <td className="p-3 font-semibold">$1,500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump &rarr; dual fuel (&ge;80% AFUE)</td>
                  <td className="p-3">&ge;15.2 SEER2 / 7.5 HSPF2</td>
                  <td className="p-3 font-semibold">$2,000</td>
                  <td className="p-3 font-semibold">$2,500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump &rarr; cold-climate heat pump (COP &ge;2.0)</td>
                  <td className="p-3">&ge;21 SEER2 / 9.0 HSPF2</td>
                  <td className="p-3 font-semibold">$2,100</td>
                  <td className="p-3 font-semibold">$2,400</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump &rarr; geothermal heat pump</td>
                  <td className="p-3">&ge;20.7 EER2</td>
                  <td className="p-3 font-semibold">$2,300</td>
                  <td className="p-3 font-semibold">$2,500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater (after 1/1/2025)</td>
                  <td className="p-3">ENERGY STAR, UEF &ge;3.3</td>
                  <td className="p-3 font-semibold" colSpan={2}>$500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Smart thermostat (with eligible HVAC)</td>
                  <td className="p-3 text-gray-500">&mdash;</td>
                  <td className="p-3 font-semibold" colSpan={2}>$125</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            North Carolina customers can stack these with Energy Saver NC HEAR
            rebates — see the stacking section below. Full state context:{" "}
            <Link href="/heat-pumps/states/nc" className="text-brand-600 hover:underline">North Carolina heat pump incentives</Link>.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-8">South Carolina — Smart $aver</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            South Carolina&apos;s Smart $aver rebate values are identical to
            North Carolina&apos;s, line for line, for projects completed after
            August 1, 2025 — including the heat pump water heater rebate,
            which in South Carolina also applies to projects after August 1,
            2025. The application flow is the same: a participating contractor
            submits for you, and the rebate arrives as a Mastercard.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Measure</th>
                  <th className="text-left p-3 font-semibold">Minimum efficiency</th>
                  <th className="text-left p-3 font-semibold">Replace on Failure</th>
                  <th className="text-left p-3 font-semibold">Early Replacement</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Air-source heat pump (three tiers)</td>
                  <td className="p-3">15.2 to &ge;17 SEER2 / 7.5 HSPF2</td>
                  <td className="p-3 font-semibold">$350&ndash;$700</td>
                  <td className="p-3 font-semibold">$700&ndash;$900</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Mini/multi split (min. 1,000 sq. ft.)</td>
                  <td className="p-3">&ge;18 SEER2 / 9.0 HSPF2</td>
                  <td className="p-3 font-semibold">$700</td>
                  <td className="p-3 font-semibold">$900</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Electric furnace/baseboard &rarr; heat pump</td>
                  <td className="p-3">&ge;15.2 SEER2 / 7.5 HSPF2</td>
                  <td className="p-3 font-semibold">$1,500</td>
                  <td className="p-3 font-semibold">$1,500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Conversions (dual fuel, cold-climate, geothermal)</td>
                  <td className="p-3">varies by measure</td>
                  <td className="p-3 font-semibold">$2,000&ndash;$2,300</td>
                  <td className="p-3 font-semibold">$2,400&ndash;$2,500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater (after 8/1/2025)</td>
                  <td className="p-3">ENERGY STAR, UEF &ge;3.3</td>
                  <td className="p-3 font-semibold" colSpan={2}>$500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Smart thermostat (with eligible HVAC)</td>
                  <td className="p-3 text-gray-500">&mdash;</td>
                  <td className="p-3 font-semibold" colSpan={2}>$125</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            One territory caveat: Duke&apos;s own FAQ notes that some
            customers in the Greenwood, S.C. area are not eligible for the
            heat pump water heater rebate — confirm with Duke if you&apos;re
            in that area. Full state context:{" "}
            <Link href="/heat-pumps/states/sc" className="text-brand-600 hover:underline">South Carolina heat pump incentives</Link>.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-8">Indiana — Smart $aver</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Indiana&apos;s Smart $aver uses its own table for projects
            completed after July 31, 2025, with lower replacement tiers than
            the Carolinas but the largest single rebate in Duke&apos;s system:
            a $2,500&ndash;$3,000 dual-fuel conversion. Note that dual fuel
            pairs the heat pump with a gas furnace — the biggest number on
            this table is not an all-electric measure.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Measure</th>
                  <th className="text-left p-3 font-semibold">Minimum efficiency</th>
                  <th className="text-left p-3 font-semibold">Replace on Failure</th>
                  <th className="text-left p-3 font-semibold">Early Replacement</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Air-source heat pump</td>
                  <td className="p-3">15.2 SEER2 / 7.5 HSPF2</td>
                  <td className="p-3 font-semibold">$400</td>
                  <td className="p-3 font-semibold">$600</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Air-source heat pump</td>
                  <td className="p-3">&ge;16 SEER2 / 7.5 HSPF2</td>
                  <td className="p-3 font-semibold">$500</td>
                  <td className="p-3 font-semibold">$700</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Mini/multi split (min. 1,000 sq. ft.)</td>
                  <td className="p-3">&ge;18 SEER2 / 9.0 HSPF2</td>
                  <td className="p-3 font-semibold">$500</td>
                  <td className="p-3 font-semibold">$700</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Electric furnace/baseboard &rarr; heat pump</td>
                  <td className="p-3">&ge;15.2 SEER2 / 7.5 HSPF2</td>
                  <td className="p-3 font-semibold">$800</td>
                  <td className="p-3 font-semibold">$800</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump &rarr; dual fuel (&ge;80% AFUE)</td>
                  <td className="p-3">&ge;15.2 SEER2 / 7.5 HSPF2</td>
                  <td className="p-3 font-semibold">$2,500</td>
                  <td className="p-3 font-semibold">$3,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump &rarr; cold-climate heat pump (COP &ge;2.0)</td>
                  <td className="p-3">&ge;21 SEER2 / 9.0 HSPF2</td>
                  <td className="p-3 font-semibold">$2,000</td>
                  <td className="p-3 font-semibold">$2,500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump &rarr; geothermal (COP &ge;3.6)</td>
                  <td className="p-3">&ge;17.1 EER2</td>
                  <td className="p-3 font-semibold" colSpan={2}>$2,300</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3">ENERGY STAR, UEF &ge;3.3</td>
                  <td className="p-3 font-semibold" colSpan={2}>$350</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Smart thermostat (with eligible HVAC)</td>
                  <td className="p-3 text-gray-500">&mdash;</td>
                  <td className="p-3 font-semibold" colSpan={2}>$65</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Indiana&apos;s state rebate program is open and can stack on top.
            Full state context:{" "}
            <Link href="/heat-pumps/states/in" className="text-brand-600 hover:underline">Indiana heat pump incentives</Link>.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-8">Florida — Home Energy Improvement</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Duke Energy Florida runs a different program with a different
            process: the Home Energy Improvement (HEI) rebate requires a free
            Home Energy Check before work begins (or within the prior 24
            months; for emergency replacements, within 12 months after
            installation). The condensing unit and air handler must be
            replaced at the same time, and you may use your own licensed,
            insured contractor.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Measure</th>
                  <th className="text-left p-3 font-semibold">Minimum efficiency</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Heat pump replacement</td>
                  <td className="p-3">15.2 SEER2 / 7.5 HSPF2</td>
                  <td className="p-3 font-semibold">$500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Strip heat &rarr; heat pump (standard tier)</td>
                  <td className="p-3">15.2 SEER2 / 7.5 HSPF2</td>
                  <td className="p-3 font-semibold">$600</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Strip heat &rarr; heat pump (high tier)</td>
                  <td className="p-3">16 SEER2</td>
                  <td className="p-3 font-semibold">$1,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">AC replacement</td>
                  <td className="p-3">15.2 SEER2</td>
                  <td className="p-3 font-semibold">$300</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater, 50-gallon</td>
                  <td className="p-3">ENERGY STAR, UEF &ge;3.3</td>
                  <td className="p-3 font-semibold">$500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater, 80-gallon</td>
                  <td className="p-3">ENERGY STAR, UEF &ge;3.3</td>
                  <td className="p-3 font-semibold">$800</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Florida rebates are claimed through the HEI Rebate Portal after
            installation. Full state context:{" "}
            <Link href="/heat-pumps/states/fl" className="text-brand-600 hover:underline">Florida heat pump incentives</Link>.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-8">Kentucky — Smart $aver</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Duke Energy Kentucky (the Cincinnati-adjacent northern Kentucky
            territory) runs a compact Smart $aver table: replacement rebates
            by tier and timing, one conversion measure, and no dual-fuel or
            cold-climate conversion tiers. A heat pump water heater rebate is
            offered; Duke&apos;s Kentucky page did not display the amount at
            our last verification, so confirm it on Duke&apos;s site before
            counting on it.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Measure</th>
                  <th className="text-left p-3 font-semibold">Minimum efficiency</th>
                  <th className="text-left p-3 font-semibold">Replace on Failure</th>
                  <th className="text-left p-3 font-semibold">Early Replacement</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Air-source heat pump</td>
                  <td className="p-3">15.2 SEER2 / 7.5 HSPF2</td>
                  <td className="p-3 font-semibold">$300</td>
                  <td className="p-3 font-semibold">$600</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Air-source heat pump</td>
                  <td className="p-3">16 SEER2 / 7.5 HSPF2</td>
                  <td className="p-3 font-semibold">$400</td>
                  <td className="p-3 font-semibold">$700</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Air-source heat pump</td>
                  <td className="p-3">&ge;17 SEER2 / 7.5 HSPF2</td>
                  <td className="p-3 font-semibold">$500</td>
                  <td className="p-3 font-semibold">$800</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Mini/multi split (min. 1,000 sq. ft.)</td>
                  <td className="p-3">&ge;18 SEER2 / 9.0 HSPF2</td>
                  <td className="p-3 font-semibold">$500</td>
                  <td className="p-3 font-semibold">$800</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Electric furnace/baseboard &rarr; heat pump</td>
                  <td className="p-3">&ge;15.2 SEER2 / 7.5 HSPF2</td>
                  <td className="p-3 font-semibold">$800</td>
                  <td className="p-3 font-semibold">$800</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Geothermal heat pump</td>
                  <td className="p-3">&ge;19 EER2 full load</td>
                  <td className="p-3 font-semibold">$500</td>
                  <td className="p-3 font-semibold">$800</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Smart thermostat (with eligible HVAC)</td>
                  <td className="p-3 text-gray-500">&mdash;</td>
                  <td className="p-3 font-semibold" colSpan={2}>$65</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Full state context:{" "}
            <Link href="/heat-pumps/states/ky" className="text-brand-600 hover:underline">Kentucky heat pump incentives</Link>.
          </p>
        </div>
      </section>

      {/* 6. EQUIPMENT REQUIREMENTS */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Equipment requirements</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Across all Smart $aver states, eligible equipment must be AHRI
            certified with ECM motors, and program-specific duct sealing is
            required with HVAC replacements. Conversion rebates require that
            the existing system being converted is a heat pump with electric
            resistance strip heat serving at least 1,000 sq. ft. of
            conditioned living space, and mini/multi splits must condition at
            least 1,000 sq. ft. to qualify.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Heat pump water heaters must be ENERGY STAR certified with a
            uniform energy factor (UEF) of at least 3.3 in every state that
            publishes the spec; standard electric, standard gas, and tankless
            water heaters are not eligible. Systems must be installed and
            operable before the rebate application is submitted, and
            participating contractors must submit within 60 days of
            installation. Florida&apos;s HEI program adds its own rules: the
            Home Energy Check prerequisite and simultaneous replacement of the
            condensing unit and air handler.
          </p>
        </div>
      </section>

      {/* 7. FEDERAL EXPIRED — short version per U4 */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Federal tax credits have ended</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <p className="text-red-900 leading-relaxed">
              The <strong>Section 25C</strong> Energy Efficient Home
              Improvement Credit (up to $2,000 for heat pumps) and the{" "}
              <strong>Section 25D</strong> Residential Clean Energy Credit
              (30% for geothermal) both expired <strong>December 31, 2025</strong>.
              Duke Energy rebates and state programs are now the main sources
              of heat pump savings in Duke territory. See{" "}
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                what the federal expiration means
              </Link>{" "}
              for details.
            </p>
          </div>
        </div>
      </section>

      {/* 8. STACKING */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Duke rebates stack with state programs</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Duke rebates stack with state IRA rebates where a state program is
            open, and the stacking rule comes from the state side: in North
            Carolina, NC DEQ confirms households can receive both home energy
            rebates and utility incentives for the same product, as long as
            combined rebates do not exceed the purchase price of that product.
            North Carolina is the clearest worked example, because both layers
            are live and verified. Indiana&apos;s state program is also open;
            South Carolina, Florida, and Kentucky had not launched consumer
            HEAR rebates at our last verification, so Duke rebates are the
            primary layer in those states — check each state page for current
            status.
          </p>
          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">North Carolina, above 150% AMI — electric resistance to heat pump</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Not HEAR-eligible above 150% of Area Median Income (AMI)</li>
                <li>Duke Smart $aver conversion rebate: $1,500</li>
                <li>Duke heat pump water heater rebate: $500</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$2,000</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">North Carolina, 80&ndash;150% AMI — electric resistance to heat pump</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Energy Saver NC HEAR heat pump: 50% of cost, up to $8,000</li>
                <li>Energy Saver NC HEAR heat pump water heater: 50% of cost, up to $1,750</li>
                <li>Duke Smart $aver conversion rebate: $1,500</li>
                <li>Duke heat pump water heater rebate: $500</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$11,750 in combined rebate caps</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">North Carolina, below 80% AMI — electric resistance to heat pump</p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>Energy Saver NC HEAR heat pump: 100% of cost, up to $8,000</li>
                <li>Energy Saver NC HEAR heat pump water heater: 100% of cost, up to $1,750</li>
                <li>Duke Smart $aver conversion rebate: $1,500</li>
                <li>Duke heat pump water heater rebate: $500</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$11,750, capped at the purchase price of each product</p>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg p-5">
            <p className="font-semibold text-gray-900 mb-1">What you&apos;ll actually pay (North Carolina example)</p>
            <p className="text-sm text-gray-700">For a household below 80% AMI converting electric resistance heat, HEAR can cover up to 100% of the heat pump&apos;s cost within its caps, with Duke rebates absorbing part of the remainder — <strong>$0 to a few thousand dollars out of pocket</strong> depending on project size. Above 150% AMI, Duke is the only rebate layer, so expect the project cost minus <strong>~$2,000</strong>. Per-state numbers for South Carolina, Florida, Indiana, and Kentucky live on their state pages.</p>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Combined rebates cannot exceed the purchase price of each product,
            and HEAR heat pump rebates only apply when upgrading from a
            non-heat-pump system. Duke&apos;s biggest Carolina and Indiana
            conversion rebates (dual fuel, cold-climate, geothermal) start
            from an existing heat pump, so they generally do not pair with a
            HEAR heat pump rebate on the same project.
          </p>
        </div>
      </section>

      {/* 9. HOW TO APPLY */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to apply</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            In the Smart $aver states (North Carolina, South Carolina,
            Indiana, Kentucky), the contractor handles the paperwork:
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-gray-900">Find a participating contractor</p>
                <p className="text-sm text-gray-700">Use Duke&apos;s Find It Duke referral tool from the <a href="https://www.duke-energy.com/home/products/smart-saver" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Smart $aver page</a> to connect with a participating contractor for your project.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900">Confirm the equipment qualifies before install</p>
                <p className="text-sm text-gray-700">Check your state&apos;s table above for the SEER2/HSPF2 tier you&apos;re buying, and whether it counts as Replace on Failure or Early Replacement — the difference can double the rebate.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-900">The contractor completes the work and submits the application</p>
                <p className="text-sm text-gray-700">The system must be installed and operable first; contractors submit within 60 days of installation. Retail-purchased heat pump water heaters can be self-submitted at smartsaverincentives.com.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <p className="font-semibold text-gray-900">Receive your rebate as a Mastercard</p>
                <p className="text-sm text-gray-700">Choose a physical card in the mail or a digital Mastercard for your virtual wallet.</p>
              </div>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mt-6">
            <p className="font-semibold text-amber-800 mb-1">⚠ Florida&apos;s process is different</p>
            <p className="text-sm text-amber-900">Duke Energy Florida&apos;s HEI program requires a free Home Energy Check before work begins (or within the prior 24 months; within 12 months after installation for emergency replacements). After installation, submit and track the rebate through the HEI Rebate Portal. Skipping the Home Energy Check is the most common way Florida customers lose the rebate.</p>
          </div>
        </div>
      </section>

      {/* 10. WHAT TO WATCH */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to watch</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Commission-approved program cycles</p>
              <p className="text-sm text-gray-600 mt-1">Duke&apos;s rebate tables are set through state utility commission filings and have changed twice in roughly a year — North Carolina amounts increased in January 2025, and new tables took effect August 1, 2025 (July 31 in Indiana). Expect the next cycle to revise amounts again; the effective-date lines on Duke&apos;s tables are the tell.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Multifamily tiers marked &quot;Coming Soon&quot;</p>
              <p className="text-sm text-gray-600 mt-1">The Carolinas and Indiana multifamily tables list several 1.5-ton measures as Coming Soon. When those rows get amounts, small-unit owners gain new rebates.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">State HEAR launches change the stacking math</p>
              <p className="text-sm text-gray-600 mt-1">North Carolina and Indiana state rebates are live today. If South Carolina, Florida, or Kentucky launch consumer HEAR rebates, Duke customers there gain a second layer worth thousands — watch each state page for launch status.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently asked questions</h2>
          <div className="space-y-6">
            {faqJsonLd.mainEntity.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.name}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.acceptedAnswer.text}</p>
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
              <Link href="/heat-pumps/states/nc" className="text-brand-600 hover:underline">
                North Carolina Heat Pump Rebates 2026
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/sc" className="text-brand-600 hover:underline">
                South Carolina Heat Pump Rebates 2026
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/fl" className="text-brand-600 hover:underline">
                Florida Heat Pump Rebates 2026
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/in" className="text-brand-600 hover:underline">
                Indiana Heat Pump Rebates 2026
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/ky" className="text-brand-600 hover:underline">
                Kentucky Heat Pump Rebates 2026
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/oh" className="text-brand-600 hover:underline">
                Ohio Heat Pump Rebates 2026
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/utilities/xcel-energy" className="text-brand-600 hover:underline">
                Xcel Energy Heat Pump Rebates 2026
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/utilities/efficiency-maine" className="text-brand-600 hover:underline">
                Efficiency Maine Heat Pump Rebates 2026
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
            {duke.sources.map((source, index) => (
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
              <strong>Disclaimer:</strong> This page covers the main
              residential heat pump incentives Duke Energy offers to
              homeowners in North Carolina, South Carolina, Florida, Indiana,
              Kentucky, and Ohio in 2026. It does not calculate savings,
              guarantee eligibility, or represent Duke Energy or any incentive
              program. Duke&apos;s website shows program details based on your
              location, and amounts are set by each state&apos;s utility
              commission, so always confirm your state&apos;s current table on
              Duke&apos;s site and with your contractor before making
              decisions. We verify status regularly but programs can change
              without notice.
            </p>
          </div>
          <div className="mt-6 text-center">
            <Link href="/heat-pumps" className="text-brand-600 hover:underline text-sm">
              &larr; Back to Heat Pumps overview
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
