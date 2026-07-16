// src/app/heat-pumps/utilities/smud/page.tsx

import Link from "next/link";
import type { Metadata } from "next";
import { utilities } from "@/data/utilities";
import { incentives, formatDate } from "@/data/incentives";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "SMUD Heat Pump Rebates 2026: Up to $9,750 in Sacramento, California | Home Energy Basics",
  description:
    "SMUD pays $2,000\u2013$3,000 for heat pump HVAC conversions and up to $4,000 for heat pump water heaters, plus a $2,000 Go Electric bonus. Every SMUD rebate in 2026.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/utilities/smud",
  },
  openGraph: {
    title: "SMUD Heat Pump Rebates 2026",
    description:
      "Up to $9,750 in combined SMUD rebates for full gas-to-electric conversions \u2014 the complete guide to Sacramento heat pump incentives after federal credits expired.",
    url: "https://homeenergybasics.com/heat-pumps/utilities/smud",
    type: "article",
  },
};

export default function SmudPage() {
  const utility = utilities["smud"];
  const caIncentive = incentives.CA;
  const formattedDate = formatDate(utility.lastVerified);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What heat pump rebates does SMUD offer in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SMUD pays $3,000 for a variable-stage heat pump HVAC system replacing gas heating ($2,000 for two-stage systems) and $1,000 for electric-to-electric heat pump upgrades. Heat pump water heaters replacing gas earn $3,000 to $4,000 depending on tank size ($1,000 electric-to-electric). A Go Electric bonus adds up to $2,000 for panel and circuit work, and gas-to-induction cooktop conversions earn $750. Federal Section 25C and 25D tax credits expired December 31, 2025 and no longer apply.",
        },
      },
      {
        "@type": "Question",
        name: "Can I stack SMUD heat pump rebates with other programs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes in principle. SMUD states its heat pump rebates can be stacked with statewide and federal incentive programs, subject to each program's current rules. In practice the other layers are thin in 2026: federal tax credits expired December 31, 2025, and SMUD's own pages describe statewide TECH Clean CA incentives as available only for a limited time while funding lasts. Check the Switch Is On incentive lookup for anything currently open.",
        },
      },
      {
        "@type": "Question",
        name: "Do I have to switch from gas to get the biggest SMUD rebates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The headline amounts are for gas-to-electric conversions. Replacing an existing electric heat pump or electric resistance system with a new heat pump earns $1,000 for HVAC and $1,000 for a water heater, not $3,000 to $4,000. The $2,000 Go Electric bonus also requires replacing an existing gas furnace or gas water heater with a qualifying heat pump, and the home must be made all-electric ready with the panel plus all eligible circuits.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a specific contractor for SMUD rebates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Heat pump HVAC, heat pump water heater and Go Electric rebates must be submitted by a participating contractor in the SMUD Contractor Network. The contractor provides the rebate application for your signature and submits it for you, and may offer the rebate amount upfront as a discount, collecting it from SMUD after the project is completed. Single-stage systems and non-network installations do not qualify.",
        },
      },
      {
        "@type": "Question",
        name: "Who is eligible for SMUD heat pump rebates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You must be a SMUD customer with an active account in a home individually metered by SMUD, covering single-family homes and multifamily dwellings up to 4 units. SMUD serves roughly 900 square miles, including most of Sacramento County and small adjoining portions of Placer and Yolo counties. Households served by Roseville Electric or by PG&E for electricity are outside SMUD territory and not eligible, even in the Sacramento region.",
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
            {" "}/ Utilities / SMUD
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            SMUD Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            SMUD, Sacramento&apos;s community-owned electric utility, pays some
            of the largest heat pump rebates in California: up to{" "}
            <strong>$3,000</strong> for a gas-to-electric heat pump HVAC
            conversion, up to <strong>$4,000</strong> for a heat pump water
            heater, and a <strong>$2,000</strong> Go Electric bonus for panel
            and circuit work &mdash; up to <strong>~$9,750</strong> combined
            for a full electrification project. SMUD raised these amounts in
            February 2026, explicitly citing the expiration of federal tax
            credits and state incentive programs. This guide covers all major SMUD
            heat pump incentives available in 2026, including HVAC, water
            heater, Go Electric and induction rebates. Here&apos;s what&apos;s
            actually available.
          </p>
          <p className="text-sm text-gray-500">
            Last verified: {formattedDate}
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Rates and program availability may change after this date.
          </p>
        </div>
      </section>

      {/* 2. Status */}
      <section className="py-8">
        <div className="container-narrow">
          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <p className="font-semibold text-green-800 mb-1">
              &#10003; Open &mdash; rebates available across the full SMUD service area
            </p>
            <p className="text-sm text-green-900">
              SMUD&apos;s heat pump HVAC, heat pump water heater, Go Electric
              and induction rebates are all active as of {formattedDate}, with
              increased amounts in effect since February 2026. All rebates are
              subject to availability of funding and must be submitted through
              the SMUD Contractor Network.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Short Version */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The short version</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">
                &#10003; Up to $3,000 for heat pump HVAC
              </p>
              <p className="text-sm text-green-900">
                Replacing gas heating with a variable-stage heat pump pays{" "}
                <strong>$3,000</strong>; two-stage systems pay{" "}
                <strong>$2,000</strong>. Sacramento-area SMUD customers only.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">
                &#10003; Up to $4,000 for heat pump water heaters
              </p>
              <p className="text-sm text-green-900">
                Gas-to-electric heat pump water heaters pay{" "}
                <strong>$3,000&ndash;$4,000</strong> by tank size (50, 65 or 80
                gallons and up).
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">
                &#10003; Up to ~$9,750 combined
              </p>
              <p className="text-sm text-green-900">
                Individual equipment rebates run $1,000&ndash;$4,000 by
                conversion type; an eligible gas-to-electric project can reach
                $6,000 once the equipment rebate combines with the Go Electric
                bonus. Full packages (HVAC + water heater + panel work +
                induction) can reach <strong>~$9,750</strong> in total SMUD
                incentives.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">
                &#10007; Federal tax credits expired
              </p>
              <p className="text-sm text-red-900">
                Section 25C and Section 25D federal tax credits ended December
                31, 2025. SMUD&apos;s February 2026 rebate increases were a
                direct response.
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 md:col-span-2">
              <p className="font-semibold text-amber-800 mb-1">
                &#9888; SMUD electric customers only &mdash; and the big numbers require dropping gas
              </p>
              <p className="text-sm text-amber-900">
                Rebates apply only to homes individually metered by SMUD.
                Households served by Roseville Electric or by PG&amp;E for
                electricity are not eligible, even in the Sacramento region.
                And electric-to-electric replacements earn <strong>$1,000</strong>,
                not the headline $3,000&ndash;$4,000 &mdash; the top amounts
                are for gas conversions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Service Territory */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Where SMUD rebates apply</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            SMUD is a single-state, single-territory utility. It provides
            electric service to approximately 900 square miles covering most
            of Sacramento County and small, adjoining portions of Placer and
            Yolo counties. Heat pump rebates are available across the entire
            service area, with one program &mdash; there are no regional tiers.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">State</th>
                  <th className="text-left p-3 font-semibold">Heat pump program?</th>
                  <th className="text-left p-3 font-semibold">Note</th>
                </tr>
              </thead>
              <tbody>
                {utility.territories.map((territory, index) => (
                  <tr key={index} className="border-b bg-green-50">
                    <td className="p-3">
                      <Link
                        href={`/heat-pumps/states/${territory.state.toLowerCase()}`}
                        className="text-brand-600 hover:underline"
                      >
                        California
                      </Link>
                    </td>
                    <td className="p-3 font-semibold">Yes</td>
                    <td className="p-3">{territory.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            The boundary matters more than it looks. The Sacramento region has
            three electric providers side by side: SMUD, Roseville Electric
            (the City of Roseville&apos;s municipal utility) and PG&amp;E.
            Only homes metered by SMUD qualify for these rebates. Natural gas
            in the region is supplied by PG&amp;E regardless &mdash; which is
            exactly the service a gas-to-electric conversion lets you cancel.
          </p>
        </div>
      </section>

      {/* 5. Rebate Details */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">SMUD rebates in detail</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            All amounts below apply across SMUD&apos;s full service area and
            were verified against SMUD&apos;s own program pages. Every rebate
            in this section is subject to availability of funding and must be
            submitted by a participating contractor in the SMUD Contractor
            Network.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Heat pump HVAC rebates</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            SMUD rebates two-stage and variable-stage heat pump HVAC systems
            only &mdash; single-stage systems are not eligible. The amount
            depends on what the system replaces and its compressor type.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Measure</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                  <th className="text-left p-3 font-semibold">Conversion type</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Variable-stage heat pump HVAC system</td>
                  <td className="p-3 font-semibold">$3,000</td>
                  <td className="p-3">Gas to electric</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Two-stage heat pump HVAC system (15.2 SEER2 minimum)</td>
                  <td className="p-3 font-semibold">$2,000</td>
                  <td className="p-3">Gas to electric</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Multi-stage heat pump HVAC upgrade</td>
                  <td className="p-3 font-semibold">$1,000</td>
                  <td className="p-3">Electric to electric</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Heat pump water heater rebates</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Water heater rebates scale with tank size for gas-to-electric
            conversions. Units must meet NEEA Tier III or IV requirements for
            climate zone 12, and every installation must include a
            thermostatic mixing valve.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Measure</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                  <th className="text-left p-3 font-semibold">Conversion type</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater, 50 gallon+</td>
                  <td className="p-3 font-semibold">$3,000</td>
                  <td className="p-3">Gas to electric</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater, 65 gallon+</td>
                  <td className="p-3 font-semibold">$3,500</td>
                  <td className="p-3">Gas to electric</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Heat pump water heater, 80 gallon+</td>
                  <td className="p-3 font-semibold">$4,000</td>
                  <td className="p-3">Gas to electric</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater, all sizes</td>
                  <td className="p-3 font-semibold">$1,000</td>
                  <td className="p-3">Electric to electric</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Go Electric bonus (panel and circuit work)</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Go Electric bonus is often summarized as a $2,000 panel
            rebate, but it is structured per circuit: SMUD pays up to{" "}
            <strong>$500</strong> for each eligible circuit wired to the
            source &mdash; clothes dryer, cooktop/range and electric vehicle
            charger &mdash; plus up to <strong>$500</strong> for a sub-panel
            if more panel space is needed, up to a total of{" "}
            <strong>$2,000</strong>. Two conditions apply: the project must
            replace an existing gas furnace or gas water heater with a
            qualifying heat pump, and the home must be made all-electric ready
            with the panel plus all eligible circuits.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Induction cooktop rebate</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Replacing a gas cooktop or range with induction (24 inches or
            larger) earns <strong>$750</strong>, with before-and-after photos
            required; electric-to-induction replacements earn{" "}
            <strong>$100</strong>. Unlike the heat pump rebates, this one is
            applied for directly online within 180 days of purchase.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-blue-800 mb-1">
              SMUD publishes what projects actually cost
            </p>
            <p className="text-sm text-blue-900">
              Unusually among utilities, SMUD publishes real installed-cost
              data from its own customers&apos; projects, refreshed quarterly:
              the median gas-to-electric heat pump HVAC installation runs
              $18,897, and the median gas-to-electric heat pump water heater
              runs $6,244. Use those numbers to sanity-check contractor bids
              before you sign.
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-amber-800 mb-1">
              &#9888; Common mistake: expecting the headline rebate for a like-for-like swap
            </p>
            <p className="text-sm text-amber-900">
              The $3,000 and $4,000 figures apply only when you retire gas
              equipment. Replacing an existing electric heat pump or electric
              water heater pays $1,000, and single-stage HVAC systems earn
              nothing at all. Confirm the conversion type and compressor
              staging with your contractor before counting on a number.
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-green-800 mb-1">
              &#10003; Best candidates for SMUD rebates
            </p>
            <p className="text-sm text-green-900">
              Homes with a gas furnace and gas water heater planning a full
              conversion capture the most: both top-tier rebates, the Go
              Electric bonus and the induction rebate in one project. A water
              heater in the garage (easy airflow), an aging AC unit, and a
              panel that needs work anyway all tilt the math further toward
              converting now.
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            For the statewide picture beyond SMUD, see the{" "}
            <Link href="/heat-pumps/states/ca" className="text-brand-600 hover:underline">
              California heat pump rebates guide
            </Link>
            .
          </p>
        </div>
      </section>

      {/* 6. Equipment Requirements */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Equipment requirements</h2>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Heat pump HVAC systems</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Package, split and mini-split systems qualify with a variable-stage
            or two-stage compressor at <strong>15.2 SEER2</strong> or higher.
            The installation must pass Title 24 via HERS CF3R verification, any
            new ductwork must be insulated to R8 or better, and a connected
            Wi-Fi, 7-day programmable thermostat is required. Mini-splits must
            serve the entire home to qualify.
          </p>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Heat pump water heaters</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Units must meet NEEA Tier III or IV requirements for climate zone
            12 and include a thermostatic mixing valve. Projects must be
            permitted and pass all city or county inspections. Most units need
            a 240V circuit and 30-amp breaker, though a growing number run on
            a standard 120V circuit &mdash; a SMUD Contractor Network
            contractor can confirm what your panel supports. Eligibility
            covers single-family homes and individually metered multifamily
            dwellings up to 4 units; manufactured homes qualify only on
            permanent foundations subject to state and local building codes.
          </p>
        </div>
      </section>

      {/* 7. Federal Expired (short) */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Federal tax credits have ended</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <p className="text-red-900 leading-relaxed">
              The federal <strong>Section 25C</strong> and{" "}
              <strong>Section 25D</strong> tax credits expired{" "}
              <strong>December 31, 2025</strong>. SMUD&apos;s own rebate pages
              note that the federal credit applies only to systems installed
              before that date, and SMUD cited the expiration when it raised
              its rebates in February 2026. Details:{" "}
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                what the federal credit expiration means for you
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* 8. Stacking */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How SMUD rebates stack</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            SMUD states its heat pump rebates may stack with statewide and
            federal programs, subject to each program&apos;s current rules. In
            2026 the other layers are thin: federal credits expired December
            31, 2025, and SMUD describes statewide TECH Clean CA incentives as
            available only for a limited time while funding lasts. The real
            stacking on a SMUD project happens inside SMUD&apos;s own program
            &mdash; combining the HVAC, water heater, Go Electric and
            induction rebates in one conversion. SMUD&apos;s published
            residential rebate tables carry no income tiers; amounts are the
            same at every income level.
          </p>
          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">
                Electric-to-electric upgrades &mdash; HVAC + water heater
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Multi-stage heat pump HVAC upgrade: $1,000</li>
                <li>Heat pump water heater upgrade: $1,000</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$2,000</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">
                Gas-to-electric HVAC conversion + Go Electric bonus
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Variable-stage heat pump HVAC (gas to electric): $3,000</li>
                <li>Go Electric bonus (if the project makes the home all-electric ready): up to $2,000</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$5,000</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">
                Full electrification &mdash; the best case
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Variable-stage heat pump HVAC (gas to electric): $3,000</li>
                <li>Heat pump water heater, 80 gallon+ (gas to electric): $4,000</li>
                <li>Go Electric bonus (panel + circuits): $2,000</li>
                <li>Induction cooktop (gas to induction): $750</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$9,750</p>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg p-5">
            <p className="font-semibold text-gray-900 mb-1">What you&apos;ll actually pay</p>
            <p className="text-sm text-gray-700">
              Using SMUD&apos;s own published medians: a stand-alone
              gas-to-electric heat pump water heater runs about $6,244
              installed, leaving roughly $2,200&ndash;$3,200 after the rebate.
              A stand-alone gas-to-electric HVAC conversion runs about $18,897
              installed, leaving roughly $15,900. A full package combining
              both plus panel work lands around $25,100 in median equipment
              costs before the $9,000 in core rebates &mdash; expect roughly{" "}
              <strong>$2,200 to $16,000+ out of pocket</strong> depending on
              scope, before electrical and induction costs.
            </p>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            SMUD offers no income-qualified rebate adders in its published
            residential tables; its income-qualified offering is a discounted
            electric rate, listed separately from rebates. California&apos;s
            HEAR program status is covered on the{" "}
            <Link href="/heat-pumps/states/ca" className="text-brand-600 hover:underline">
              California page
            </Link>
            .
          </p>
        </div>
      </section>

      {/* 9. How to Apply */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to apply</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            SMUD&apos;s heat pump HVAC, heat pump water heater and Go
            Electric rebates are contractor-driven &mdash; you generally
            don&apos;t submit those applications yourself. The induction
            rebate is the exception: you apply for it directly online.
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-gray-900">Choose a participating contractor</p>
                <p className="text-sm text-gray-700">
                  Pick a contractor from the SMUD Contractor Network. SMUD
                  recommends getting at least 3 bids &mdash; pricing varies
                  widely between companies.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900">Install qualifying equipment</p>
                <p className="text-sm text-gray-700">
                  The system must meet SMUD&apos;s staging, efficiency and
                  permitting requirements. Your contractor is responsible for
                  knowing the current program rules.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-900">Sign the rebate application</p>
                <p className="text-sm text-gray-700">
                  Your contractor provides the rebate application for your
                  signature and submits it to SMUD on your behalf.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <p className="font-semibold text-gray-900">Receive your rebate</p>
                <p className="text-sm text-gray-700">
                  Some contractors offer the rebate amount upfront as a
                  discount on your invoice and collect it from SMUD after the
                  project is completed &mdash; ask which way yours works.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. What to Watch */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to watch in 2026</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Funding availability</p>
              <p className="text-sm text-gray-600 mt-1">
                Every SMUD rebate is explicitly subject to availability of
                funding. The current amounts date from a February 2026
                increase; SMUD&apos;s board sets the budget and can revise
                amounts in either direction without a fixed schedule.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Statewide funding reopenings</p>
              <p className="text-sm text-gray-600 mt-1">
                SMUD&apos;s pages describe TECH Clean CA incentives as
                available for a limited time while funding lasts. If a
                statewide layer reopens, it would stack on top of SMUD
                amounts &mdash; the Switch Is On incentive lookup is the
                fastest way to check what is currently open.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">The 2030 Zero Carbon Plan</p>
              <p className="text-sm text-gray-600 mt-1">
                SMUD&apos;s heat pump programs are a cornerstone of its 2030
                Zero Carbon Plan and its goal to electrify 154,000 homes by
                2030, with more than 23,000 gas systems already replaced. That
                strategic commitment makes these rebates likelier to persist
                than typical utility offerings &mdash; but tiers and amounts
                can still shift year to year.
              </p>
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

      {/* 12. See Also */}
      <section className="py-8 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-3">See also</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/heat-pumps/states/ca" className="text-brand-600 hover:underline">
                California Heat Pump Rebates 2026
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/utilities/xcel-energy" className="text-brand-600 hover:underline">
                Xcel Energy Heat Pump Rebates
              </Link>
            </li>
            <li>
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                Federal Heat Pump Tax Credits Ended: What It Means
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

      {/* 13. Sources */}
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
          <p className="text-sm text-gray-500 mt-4">
            All amounts verified {formattedDate} against SMUD&apos;s own
            program pages. California statewide context: see the{" "}
            <Link href="/heat-pumps/states/ca" className="text-brand-600 hover:underline">
              California page
            </Link>{" "}
            (last verified {formatDate(caIncentive.lastVerified)}).
          </p>
        </div>
      </section>

      {/* 14. Disclaimer */}
      <section className="py-8">
        <div className="container-narrow">
          <div className="bg-gray-100 rounded-lg p-6">
            <p className="text-gray-500 text-xs leading-relaxed">
              <strong>Disclaimer:</strong> This page covers the main SMUD heat
              pump incentives available to California homeowners in
              SMUD&apos;s Sacramento-area service territory in 2026. It does
              not calculate savings, guarantee eligibility, or represent SMUD
              or any incentive program. Rebates are subject to availability of
              funding and must be submitted through SMUD&apos;s participating
              contractor network. We verify status regularly but programs can
              change without notice. Always confirm current amounts and
              eligibility with SMUD and your contractor before making
              decisions.
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
