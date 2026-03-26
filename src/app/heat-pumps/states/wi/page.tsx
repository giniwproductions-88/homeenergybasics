// src/app/heat-pumps/states/wi/page.tsx

import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Wisconsin Heat Pump Rebates 2026: Up to $8,000 + Focus on Energy Discounts | Home Energy Basics",
  description:
    "Focus on Energy offers $400–$900 instant discounts. HEAR covers up to $8,000 for income-qualifying households. Federal tax credits ended. Here's every Wisconsin heat pump incentive in 2026.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/wi",
  },
  openGraph: {
    title: "Wisconsin Heat Pump Rebates 2026",
    description:
      "Focus on Energy instant discounts, HEAR up to $8,000, HOMES up to $10,000 — the complete guide to Wisconsin heat pump incentives after federal credits expired.",
    url: "https://homeenergybasics.com/heat-pumps/states/wi",
    type: "article",
  },
};

export default function WisconsinPage() {
  const wiIncentive = incentives.WI;
  const formattedDate = formatDate(wiIncentive.lastVerified);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What heat pump rebates are available in Wisconsin in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wisconsin heat pump rebates in 2026 come from three sources: Focus on Energy instant discounts of $400–$900 for air-source heat pumps (available statewide to all income levels), HEAR rebates up to $8,000 for income-qualifying households (below 150% AMI), and HOMES rebates up to $10,000 for whole-home energy reduction projects. Federal tax credits under Sections 25C and 25D expired December 31, 2025.",
        },
      },
      {
        "@type": "Question",
        name: "Can I stack Focus on Energy rebates with HEAR or HOMES in Wisconsin?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Focus on Energy rebates can be combined with either HEAR or HOMES rebates. However, you cannot receive both HEAR and HOMES for the same specific upgrade — choose whichever program provides the larger benefit for each component of your project. A low-income homeowner could receive up to $9,250 or more by combining Focus on Energy with HEAR for a heat pump installation.",
        },
      },
      {
        "@type": "Question",
        name: "Do heat pumps work in Wisconsin winters?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Modern cold-climate heat pumps maintain heating output at temperatures well below zero. Wisconsin's design temperatures range from -5°F in Milwaukee to -16°F in Eau Claire. Cold-climate models rated to ENERGY STAR specifications maintain a COP of 1.5–2.0 even at -15°F, which is still 50–100% more efficient than electric resistance heat. Most Wisconsin installers recommend dual-fuel setups that pair the heat pump with an existing gas furnace for the coldest days.",
        },
      },
      {
        "@type": "Question",
        name: "Who administers Wisconsin's IRA rebate programs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Public Service Commission of Wisconsin (PSC) oversees both the HOMES and HEAR programs, with Focus on Energy serving as the administering organization. Wisconsin was the first state to launch the HOMES program in August 2024. HEAR launched in December 2024. The state received approximately $149 million in total IRA funding.",
        },
      },
      {
        "@type": "Question",
        name: "Are there additional heat pump rebates from Wisconsin utilities?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Major investor-owned utilities — We Energies, Alliant Energy, Madison Gas and Electric, Wisconsin Public Service, and Xcel Energy Wisconsin — all participate exclusively through Focus on Energy rather than offering separate utility-specific rebates. However, many rural electric cooperatives offer their own heat pump rebates on top of Focus on Energy, making co-op members potentially eligible for the most generous combined incentives in the state.",
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
            / Wisconsin
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Wisconsin Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Federal tax credits are gone, but Wisconsin&apos;s incentive picture
            is stronger than most states. Focus on Energy provides $400–$900 in
            instant discounts statewide, and the IRA-funded HEAR program covers
            up to $8,000 for income-qualifying households. Wisconsin was the
            first state to launch the HOMES program and has $149 million in
            federal funding still flowing. This guide covers all major Wisconsin
            heat pump incentives available in 2026, including Focus on Energy,
            HEAR, and HOMES programs. Here&apos;s what&apos;s actually
            available.
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
          <StatusCard incentive={wiIncentive} />
        </div>
      </section>

      {/* Short Version */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            The short version
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">
                ✓ HEAR rebates (income-qualified)
              </p>
              <p className="text-sm text-green-900">
                Up to $8,000 for heat pumps. Below 80% AMI = 100% of costs
                covered. 80–150% AMI = 50% of costs. Max $14,000 total per
                household.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">
                ✓ Focus on Energy (all incomes)
              </p>
              <p className="text-sm text-green-900">
                $400–$900 instant discounts for air-source heat pumps. No
                application required when using a participating Trade Ally
                contractor. Stacks with HEAR/HOMES.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">
                ✓ Total potential savings
              </p>
              <p className="text-sm text-green-900">
                $3,700 (above 150% AMI) to $9,250+ (below 80% AMI with propane
                replacement). Full electrification packages can reach ~$15,250
                total incentives.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">
                ✗ Federal tax credits
              </p>
              <p className="text-sm text-red-900">
                Both 25C ($2,000 heat pump) and 25D (geothermal) expired
                December 31, 2025. No replacement has been enacted.
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 md:col-span-2">
              <p className="font-semibold text-amber-800 mb-1">
                ⚠ HOMES vs HEAR — choose carefully
              </p>
              <p className="text-sm text-amber-900">
                Cannot stack on the same upgrade. If you&apos;re below 150% AMI,
                HEAR is usually the better option for heat pumps. HOMES may be
                better for whole-home projects targeting 35%+ energy reduction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Federal Credits Expired */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Federal tax credits are gone
          </h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <p className="text-red-900 leading-relaxed">
              The One Big Beautiful Bill (Public Law 119-21), signed July 4,
              2025, terminated both major residential energy tax credits years
              ahead of schedule.{" "}
              <strong>Section 25C</strong> had provided 30% of costs up to
              $2,000/year for heat pumps.{" "}
              <strong>Section 25D</strong> covered 30% of geothermal and solar
              costs with no annual cap. Both applied only to property placed in
              service before January 1, 2026. A homeowner who purchased a heat
              pump in 2025 but had it installed in January 2026 cannot claim
              either credit.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            The one exception: taxpayers who completed qualifying installations
            by December 31, 2025, but whose 25D credit exceeded their tax
            liability can carry forward unused credits. No extension of either
            credit has been enacted or proposed as of March 2026.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            <Link
              href="/federal-heat-pump-tax-credit-expired"
              className="text-brand-600 hover:underline"
            >
              Full breakdown: Federal heat pump tax credits ended →
            </Link>
          </p>
        </div>
      </section>

      {/* HEAR */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            HEAR: up to $8,000 for heat pumps (income-qualified)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Home Electrification and Appliance Rebates program launched in
            Wisconsin in December 2024 and provides point-of-sale rebates for
            electrification upgrades. Focus on Energy administers the program on
            behalf of the Public Service Commission.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Income eligibility
          </h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">
                    Household income
                  </th>
                  <th className="text-left p-3 font-semibold">
                    Coverage
                  </th>
                  <th className="text-left p-3 font-semibold">
                    Heat pump max
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Below 80% AMI</td>
                  <td className="p-3">100% of project costs</td>
                  <td className="p-3 font-semibold">$8,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">80–150% AMI</td>
                  <td className="p-3">50% of project costs</td>
                  <td className="p-3 font-semibold">$8,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Above 150% AMI</td>
                  <td className="p-3 text-gray-500">Not eligible</td>
                  <td className="p-3 text-gray-500">—</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            HEAR equipment caps
          </h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Max rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">
                    ENERGY STAR electric heat pump (space heating/cooling)
                  </td>
                  <td className="p-3 font-semibold">$8,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">$1,750</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Electrical panel upgrade</td>
                  <td className="p-3 font-semibold">$4,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Electrical wiring</td>
                  <td className="p-3 font-semibold">$2,500</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed">
            The maximum combined HEAR rebate per household is{" "}
            <strong>$14,000</strong>. Heat pump installations must use an IRA
            Registered Contractor. Store-purchased heat pump water heaters also
            qualify.
          </p>
        </div>
      </section>

      {/* HOMES */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            HOMES: whole-home approach, open to all incomes
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Home Owner Managing Energy Savings program launched in Wisconsin
            in August 2024 — making Wisconsin the first state in the nation to
            go live. HOMES requires a professional energy assessment and pays
            rebates based on projected energy reduction.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">
                    Energy reduction
                  </th>
                  <th className="text-left p-3 font-semibold">≤80% AMI</th>
                  <th className="text-left p-3 font-semibold">80–150% AMI</th>
                  <th className="text-left p-3 font-semibold">&gt;150% AMI</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">20–35% savings</td>
                  <td className="p-3 font-semibold">Up to $5,000</td>
                  <td className="p-3">Up to $2,000</td>
                  <td className="p-3">Up to $1,500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">35%+ savings</td>
                  <td className="p-3 font-semibold">Up to $10,000</td>
                  <td className="p-3">Up to $4,000</td>
                  <td className="p-3">Up to $3,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="font-semibold text-amber-800 mb-1">
              ⚠ Common mistake
            </p>
            <p className="text-sm text-amber-900">
              Many homeowners default to HOMES when HEAR would cover more of the
              project cost. If your household income is below 150% AMI and
              you&apos;re primarily installing a heat pump, HEAR is usually the
              better option — it offers up to $8,000 for the heat pump alone
              without requiring a whole-home energy assessment. Reserve HOMES for
              comprehensive projects targeting 35%+ energy reduction.
            </p>
          </div>
        </div>
      </section>

      {/* Focus on Energy */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Focus on Energy: $400–$900 instant discounts statewide
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Focus on Energy is Wisconsin&apos;s statewide energy efficiency
            program funded by utility ratepayers. Every major investor-owned
            utility — We Energies, Alliant Energy, Madison Gas and Electric,
            Wisconsin Public Service, and Xcel Energy Wisconsin — participates
            exclusively through Focus on Energy. These are instant discounts
            applied at the distributor level — no application required when using
            a participating Trade Ally contractor.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Air-source heat pump tiers (ducted and ductless)
          </h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Tier</th>
                  <th className="text-left p-3 font-semibold">Min SEER2</th>
                  <th className="text-left p-3 font-semibold">Min HSPF2</th>
                  <th className="text-left p-3 font-semibold">Standard</th>
                  <th className="text-left p-3 font-semibold">
                    Income-qualified
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Tier 1</td>
                  <td className="p-3">15.2</td>
                  <td className="p-3">8.1</td>
                  <td className="p-3 font-semibold">$400</td>
                  <td className="p-3 font-semibold">$600</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Tier 2</td>
                  <td className="p-3">15.2</td>
                  <td className="p-3">8.5</td>
                  <td className="p-3 font-semibold">$500</td>
                  <td className="p-3 font-semibold">$700</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Tier 3</td>
                  <td className="p-3">16.0</td>
                  <td className="p-3">9.0</td>
                  <td className="p-3 font-semibold">$600</td>
                  <td className="p-3 font-semibold">$800</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3 font-semibold">Tier 4</td>
                  <td className="p-3">16.0</td>
                  <td className="p-3">10.0</td>
                  <td className="p-3 font-semibold">$700</td>
                  <td className="p-3 font-semibold">$900</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            A <strong>propane replacement bonus</strong> applies when switching
            from propane: $100–$150 extra for standard households, $300–$350 for
            income-qualified, depending on tier. The maximum Focus on Energy
            instant discount for a Tier 4 income-qualified propane replacement is{" "}
            <strong>$1,250</strong>.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Heat pump water heaters
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Heat pump water heaters with UEF ≥ 3.3 and capacity under 120
            gallons receive a minimum <strong>$300</strong> instant discount
            through participating distributors.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Geothermal heat pumps
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Geothermal systems receive a mail-in rebate of{" "}
            <strong>$1,000</strong> (with natural gas service) or{" "}
            <strong>$750</strong> (without gas service). ENERGY STAR
            certification required with COP ≥ 3.1–3.6 and EER ≥ 16.0–17.1
            depending on system type.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Equipment requirements
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Focus on Energy does not impose specific refrigerant requirements —
            no R-410A exclusion or low-GWP mandate. The program uses its own
            four-tier structure rather than CEE tiers. While cold-climate
            certification is not explicitly required, Tier 4 (HSPF2 ≥ 10.0)
            effectively selects for cold-climate models. Equipment must replace
            existing systems, be installed in existing homes by licensed
            contractors, and be purchased new. Income-qualified applicants must
            receive confirmation before installation — retroactive
            income-qualified discounts are not available.
          </p>
        </div>
      </section>

      {/* Utility Details */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Utility programs: one system, uniform rebates, a few exceptions
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We Energies (~1.1 million electric customers, Milwaukee area),
            Alliant Energy (south-central and western Wisconsin), Madison Gas
            and Electric (Madison area), Wisconsin Public Service (northeastern
            Wisconsin including Green Bay), and Xcel Energy (western Wisconsin
            around Eau Claire) all participate exclusively through Focus on
            Energy. None offers utility-specific heat pump rebates beyond the
            statewide program. All five offer Time-of-Use rates that heat pump
            owners can leverage, but none has a dedicated heat pump electric
            rate.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-blue-800 mb-1">
              Cross-border disparity: Xcel Energy
            </p>
            <p className="text-sm text-blue-900">
              Wisconsin Xcel customers receive significantly lower incentives
              than Minnesota customers under the same utility. In Minnesota and
              Colorado, Xcel offers up to $2,250 per ton through its Clean Heat
              Plan. Wisconsin Xcel customers receive only the standard Focus on
              Energy amounts ($400–$900) — a rare cross-border disparity worth
              noting for western Wisconsin households near the Minnesota line.
            </p>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Rural electric cooperatives: the hidden advantage
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Many Wisconsin rural electric cooperatives offer their own heat pump
            rebates on top of Focus on Energy, making co-op members potentially
            eligible for the most generous combined incentives in the state.
            Co-ops with confirmed independent heat pump rebate programs include
            Barron Electric, Bayfield Electric, Chippewa Valley Electric, Clark
            Electric, Dunn Energy, Jackson Electric, Jump River Electric,
            Polk-Burnett Electric, Price Electric, Scenic Rivers Energy, St.
            Croix Electric, and Taylor Electric. Several also offer dual-fuel
            and load management programs with reduced electric rates for heat
            pump heating — particularly valuable for members who commonly heat
            with propane.
          </p>
        </div>
      </section>

      {/* Local Programs */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Local programs
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Milwaukee: Me2 low-interest loan
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Milwaukee offers the Me2 program — not a rebate but a
                low-interest loan of up to <strong>$20,000</strong> at rates as
                low as 4.5% fixed for up to 15 years through Summit Credit
                Union. Available to single-family and owner-occupied rental
                properties (up to 3 units) within city limits. 80% of the loan
                must fund primary efficiency projects including heat pump
                installations. Me2 can be combined with Focus on Energy rebates
                and HEAR.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Madison and Green Bay
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Neither Madison nor Green Bay offers city-funded heat pump
                rebates. Madison&apos;s MadiSUN program covers solar only. Green
                Bay runs the Energize Green Bay campaign connecting residents to
                Focus on Energy and IRA programs. No county-level heat pump
                rebate programs exist in the state.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stacking */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How programs stack: maximum realistic incentives
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Focus on Energy rebates, HEAR rebates, and HOMES rebates can all
            stack — this is explicitly confirmed by Focus on Energy. The key
            constraint: HOMES and HEAR cannot both cover the same specific
            upgrade.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">
                Above 150% AMI — Tier 4 ducted ASHP
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Focus on Energy instant discount: $700</li>
                <li>HOMES rebate (≥35% savings): up to $3,000</li>
                <li>HEAR: not eligible</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">
                Realistic maximum: ~$3,700
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">
                80–150% AMI — Tier 4 ducted ASHP
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Focus on Energy instant discount: $700</li>
                <li>
                  HEAR heat pump rebate (50% of costs): up to $8,000
                </li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">
                Realistic maximum: ~$8,700
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">
                Below 80% AMI — Tier 4 ducted ASHP, propane replacement
              </p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>Focus on Energy income-qualified Tier 4: $900</li>
                <li>Propane replacement bonus: $350</li>
                <li>
                  HEAR heat pump rebate (100% of costs): up to $8,000
                </li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">
                Realistic maximum (heat pump alone): ~$9,250
              </p>
              <p className="text-sm text-green-800 mt-1">
                Full electrification (+ HPWH, panel, wiring): up to ~$15,250
              </p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-5">
            <p className="font-semibold text-gray-900 mb-1">
              What you&apos;ll actually pay
            </p>
            <p className="text-sm text-gray-700">
              In most cases, a Wisconsin homeowner installing a cold-climate heat
              pump will pay{" "}
              <strong>$6,000 to $14,000 out of pocket</strong>, depending on
              system size, home type, and income qualification. Income-qualifying
              households replacing propane heat may pay significantly less — in
              some cases under $5,000 after all incentives.
            </p>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            Wisconsin does not offer any state-level tax credits for heat pumps.
            No dedicated state loan program exists for residential heat pump
            installations, though Milwaukee&apos;s Me2 program fills part of
            this gap locally.
          </p>
        </div>
      </section>

      {/* Weatherization */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Weatherization assistance
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The Wisconsin Weatherization Assistance Program (WAP), administered
            by the Department of Administration through local Community Action
            Agencies, provides free home weatherization services to households at
            or below 60% of State Median Income. WAP primarily covers
            insulation, air sealing, and furnace or boiler repair — it does not
            typically install heat pumps directly. However, WAP-eligible
            households can combine weatherization services with HEAR heat pump
            rebates for a comprehensive upgrade at little to no cost.
            Applications are through the Home Energy Plus program at
            homeenergyplus.wi.gov.
          </p>
        </div>
      </section>

      {/* Climate */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Wisconsin&apos;s cold climate: equipment selection matters
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Wisconsin sits in IECC Climate Zones 6A and 7 — among the coldest in
            the continental United States. This demands cold-climate heat pumps
            rated to the ENERGY STAR specification: COP ≥ 1.75 at 5°F and
            heating capacity retention ≥ 70% at 5°F.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">City</th>
                  <th className="text-left p-3 font-semibold">
                    Design temp (99.6%)
                  </th>
                  <th className="text-left p-3 font-semibold">
                    Heating degree days
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Milwaukee</td>
                  <td className="p-3 font-semibold">-5°F</td>
                  <td className="p-3">~6,500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Madison</td>
                  <td className="p-3 font-semibold">-10°F</td>
                  <td className="p-3">~7,200</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Green Bay</td>
                  <td className="p-3 font-semibold">-11 to -13°F</td>
                  <td className="p-3">~7,700</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Eau Claire</td>
                  <td className="p-3 font-semibold">-14 to -16°F</td>
                  <td className="p-3">~8,200</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            Modern cold-climate models maintain COP of 1.5–2.0 even at -15°F —
            still 50–100% more efficient than electric resistance heating. Most
            Wisconsin installers recommend <strong>dual-fuel systems</strong>{" "}
            (heat pump paired with existing gas furnace) for homes on natural
            gas. The heat pump handles the vast majority of heating hours at COP
            2.5–4.0, with the gas furnace activating only during the coldest
            periods.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-blue-800 mb-1">
              The propane opportunity
            </p>
            <p className="text-sm text-blue-900">
              Roughly 253,000 Wisconsin households rely on propane at
              approximately $1.97/gallon. At the state&apos;s average electricity
              rate of $0.16/kWh, a heat pump operating at seasonal COP 3.0 costs
              approximately $900/year to heat the same home that costs $1,200+
              on propane. Rural propane households are the strongest economic
              candidates for heat pump conversion.
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <p className="font-semibold text-green-800 mb-1">
              Best candidates in Wisconsin
            </p>
            <ul className="text-sm text-green-900 space-y-1 mt-2">
              <li>• Homes currently using propane or electric resistance heat</li>
              <li>• Rural households without natural gas access</li>
              <li>• Homes planning electrical upgrades anyway (panel + wiring = $6,500 HEAR eligible)</li>
              <li>• Anyone below 150% AMI — HEAR covers a large share of costs</li>
            </ul>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            See also:{" "}
            <Link
              href="/battery"
              className="text-brand-600 hover:underline"
            >
              Are home batteries worth it in 2026?
            </Link>
          </p>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-12">
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
                  Check your income eligibility
                </p>
                <p className="text-sm text-gray-700">
                  Visit focusonenergy.com/home-energy-rebates to determine
                  whether you qualify for HEAR (below 150% AMI) or HOMES (all
                  incomes).
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  Find a participating contractor
                </p>
                <p className="text-sm text-gray-700">
                  Use Focus on Energy&apos;s Trade Ally directory to find an
                  approved installer. HEAR requires an IRA Registered Contractor.
                  Focus on Energy instant discounts are applied automatically
                  through the distributor when your Trade Ally orders equipment.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  For HOMES: schedule an energy assessment
                </p>
                <p className="text-sm text-gray-700">
                  HOMES requires a professional energy assessment before work
                  begins. Your contractor can arrange this through Focus on
                  Energy.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  Get income confirmation before installation (HEAR only)
                </p>
                <p className="text-sm text-gray-700">
                  Income-qualified applicants must receive confirmation before
                  installation begins. Retroactive income-qualified discounts are
                  not available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Coming */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What to watch
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">IRA funding runway</p>
              <p className="text-sm text-gray-600 mt-1">
                Wisconsin&apos;s $149 million IRA allocation is a fixed pool —
                once exhausted, HEAR and HOMES rebates end. No replenishment
                mechanism exists. Act while funding remains available.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">
                Focus on Energy program year
              </p>
              <p className="text-sm text-gray-600 mt-1">
                The current program year runs January 1 through December 31,
                2026. Rebate amounts and tier thresholds could change for 2027.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">
                Rural co-op programs
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Co-op rebate amounts vary by utility and program year. Contact
                your cooperative directly for current amounts — they may offer
                more than the Focus on Energy base level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
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
      <section className="py-8 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-3">See also</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/heat-pumps/states/mn"
                className="text-brand-600 hover:underline"
              >
                Minnesota Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li>
              <Link
                href="/heat-pumps/states/mi"
                className="text-brand-600 hover:underline"
              >
                Michigan Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li>
              <Link
                href="/heat-pumps/states/il"
                className="text-brand-600 hover:underline"
              >
                Illinois Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li>
              <Link
                href="/heat-pumps/states/ia"
                className="text-brand-600 hover:underline"
              >
                Iowa Heat Pump Rebates &amp; Incentives
              </Link>
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
                href="/heat-pumps"
                className="text-brand-600 hover:underline"
              >
                All State Heat Pump Incentives
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* Sources */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="space-y-2 text-sm">
            {wiIncentive.sources.map(
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
              <strong>Disclaimer:</strong> This page covers the main statewide,
              utility, and IRA heat pump incentives available to Wisconsin
              homeowners in 2026. It does not calculate savings, guarantee
              eligibility, or represent any incentive program. Wisconsin has
              additional rural electric cooperative programs that may apply in
              your area. We verify status regularly but programs can change
              without notice. Always confirm current amounts and eligibility with
              Focus on Energy and your contractor before making decisions.
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
