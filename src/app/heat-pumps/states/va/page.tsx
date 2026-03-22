import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Virginia Heat Pump Rebates 2026: What's Actually Available | Home Energy Basics",
  description:
    "Federal tax credits ended. Virginia's $188M in IRA rebates remain frozen. Utility rebates of $250–$2,000 are what's left. Here's the complete 2026 picture by utility territory.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/va",
  },
  openGraph: {
    title: "Virginia Heat Pump Rebates 2026",
    description:
      "Dominion Energy, Appalachian Power, Washington Gas — utility-by-utility heat pump rebate guide for Virginia. Federal credits gone, state programs frozen.",
    url: "https://homeenergybasics.com/heat-pumps/states/va",
    type: "article",
  },
};

export default function VirginiaPage() {
  const vaIncentive = incentives.VA;
  const formattedDate = formatDate(vaIncentive.lastVerified);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What heat pump rebates are available in Virginia in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Virginia's heat pump rebates in 2026 come primarily from utilities. Dominion Energy offers rebates for heat pump water heaters ($250–$400) and central heat pumps through its Home Retrofit Program. Washington Gas provides up to $2,000 for dual-fuel heat pump installations. Appalachian Power offers $300–$400 for ductless mini-splits. The federal Section 25C tax credit expired December 31, 2025. Virginia's IRA-funded state rebate programs have not launched.",
        },
      },
      {
        "@type": "Question",
        name: "Is there a federal tax credit for heat pumps in Virginia in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. The federal Section 25C Energy Efficient Home Improvement Credit (up to $2,000 for heat pumps) and Section 25D Residential Clean Energy Credit (30% for geothermal) both expired December 31, 2025 under the One Big Beautiful Bill Act. There is no federal tax credit for heat pumps installed in 2026.",
        },
      },
      {
        "@type": "Question",
        name: "What happened to Virginia's HOMES and HEAR rebate programs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Virginia was allocated $188 million in IRA-funded rebates split between the HOMES program ($94.3M for whole-home retrofits up to $8,000) and HEAR/HEEHRA ($94M for point-of-sale appliance rebates up to $14,000 per household). Neither program has launched. Virginia Energy says it is assessing the impact of federal funding freezes and executive orders on these programs.",
        },
      },
      {
        "@type": "Question",
        name: "Does Dominion Energy offer heat pump rebates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Dominion Energy offers heat pump water heater rebates of $250 (40–59 gallon) or $400 (60+ gallon) and central heat pump rebates through its Home Retrofit Program. Central heat pump rebate amounts are determined through a required home energy evaluation with a participating contractor. Income-qualifying customers may receive free upgrades through the EnergyShare Weatherization program.",
        },
      },
      {
        "@type": "Question",
        name: "Does Washington Gas offer heat pump rebates in Virginia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Washington Gas offers $2,000 for a dual-fuel heat pump with furnace replacement (requiring 15.2 SEER2 and 7.5 HSPF2 for the heat pump, plus 95% AFUE for the furnace) or $1,400 with an existing qualifying furnace at 90%+ AFUE. This pairs a heat pump with gas furnace backup and serves Northern Virginia customers.",
        },
      },
      {
        "@type": "Question",
        name: "Can I stack Virginia heat pump rebates with state and federal programs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Currently, utility rebates are the only active incentive layer. There is no federal credit and Virginia's state rebate programs have not launched. If the HOMES and HEAR programs do launch, federal guidance indicates they can stack with utility rebates but cannot be combined for the same measure. Households above 150% of Area Median Income would not qualify for HEAR.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd data={faqJsonLd} />

      {/* Hero */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-brand-600">
              Home
            </Link>
            {" → "}
            <Link href="/heat-pumps" className="hover:text-brand-600">
              Heat Pumps
            </Link>
            {" → "}
            <span className="text-gray-900">Virginia</span>
          </nav>

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Virginia Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Federal tax credits are gone. Virginia&rsquo;s $188&nbsp;million in
            IRA-funded state rebates remain pending with no launch date. What
            you can actually get in 2026 depends on your utility — Dominion
            Energy, Appalachian Power, or Washington Gas each have different
            programs, and most electric cooperatives offer no rebates at all.
          </p>
          <p className="text-sm text-gray-500">
            Last verified: {formattedDate}
          </p>
        </div>
      </section>

      {/* Status Card */}
      <section className="max-w-3xl mx-auto px-4 py-6">
        <StatusCard incentive={vaIncentive} />
      </section>

      {/* Short Version */}
      <section className="max-w-3xl mx-auto px-4 py-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          The Short Version
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="font-semibold text-red-800 mb-1">❌ Federal</p>
            <p className="text-sm text-red-700">
              25C ($2,000) and 25D (30% geothermal) both expired Dec&nbsp;31,
              2025. No credit for 2026 installations.
            </p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="font-semibold text-amber-800 mb-1">⏳ State</p>
            <p className="text-sm text-amber-700">
              $188M in HOMES + HEAR funding allocated but not launched. Virginia
              Energy is assessing the impact of federal funding freezes.
            </p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="font-semibold text-green-800 mb-1">
              ✓ Utility Rebates
            </p>
            <p className="text-sm text-green-700">
              $250–$2,000 depending on your utility. Washington Gas has the
              largest single rebate. Dominion covers water heaters and central
              systems.
            </p>
          </div>
        </div>
      </section>

      {/* Federal Credits */}
      <section className="max-w-3xl mx-auto px-4 py-6">
        <div className="bg-red-50 border border-red-300 rounded-lg p-5">
          <h2 className="text-lg font-bold text-red-900 mb-3">
            Federal Tax Credits Are Gone
          </h2>
          <p className="text-red-800 mb-3">
            The One Big Beautiful Bill Act (signed July&nbsp;4, 2025)
            terminated both major residential energy tax credits ahead of their
            original 2032 sunset:
          </p>
          <ul className="space-y-2 text-red-800 text-sm">
            <li>
              <strong>Section 25C</strong> — up to $2,000 for heat pumps at 30%
              of cost. The IRS confirms it is not allowed for property placed in
              service after December&nbsp;31, 2025.
            </li>
            <li>
              <strong>Section 25D</strong> — 30% with no cap for geothermal
              heat pumps. Not allowed for expenditures made after
              December&nbsp;31, 2025. Expenditures are treated as made when
              installation is completed — so even if you paid in 2025 but
              installation finished in 2026, no credit.
            </li>
          </ul>
          <p className="text-red-800 text-sm mt-3">
            If your equipment was installed and operational on or before
            December&nbsp;31, 2025, you can still claim on your 2025 tax return
            using IRS Form 5695.
          </p>
          <p className="text-red-800 text-sm mt-2">
            <em>
              Note: Virginia&rsquo;s state informational page on tax credits
              still reflects pre-OBBB timelines and should not be relied on for
              2026 tax-credit availability.
            </em>
          </p>
          <p className="text-sm mt-3">
            <Link
              href="/federal-heat-pump-tax-credit-expired"
              className="text-red-700 underline hover:text-red-900"
            >
              Full explainer: What happened to the federal heat pump tax credit →
            </Link>
          </p>
        </div>
      </section>

      {/* Virginia State Programs — Frozen */}
      <section className="max-w-3xl mx-auto px-4 py-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Virginia&rsquo;s $188M in State Rebates: Pending
        </h2>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-4">
          <p className="text-amber-900 font-medium mb-2">
            ⏳ Neither program has launched. No timeline has been provided.
          </p>
          <p className="text-amber-800 text-sm">
            Virginia Energy states it is &ldquo;assessing how the recent federal
            funding freezes and executive orders may affect our programs and
            operations.&rdquo; Monitor the official FAQ page linked in our
            sources below.
          </p>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
          HOMES Program ($94.3M allocation)
        </h3>
        <p className="text-gray-700 mb-2">
          Performance-based rebates of up to <strong>$8,000 per household</strong>{" "}
          for whole-home energy retrofit projects achieving at least 15% modeled
          or measured energy savings. Heat pumps qualify as part of a whole-home
          retrofit — not as a standalone measure. Rebate levels scale by
          household income relative to Area Median Income (AMI).
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
          HEAR / HEEHRA Program ($94M allocation)
        </h3>
        <p className="text-gray-700 mb-2">
          Point-of-sale rebates for specific electrification equipment:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-lg mt-2 mb-4">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-3 font-semibold text-gray-700">
                  Measure
                </th>
                <th className="text-left p-3 font-semibold text-gray-700">
                  ≤80% AMI
                </th>
                <th className="text-left p-3 font-semibold text-gray-700">
                  80–150% AMI
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="p-3 text-gray-800">Heat pump (space)</td>
                <td className="p-3 text-gray-800">Up to $8,000 (100% of cost)</td>
                <td className="p-3 text-gray-800">Up to $4,000 (50% of cost)</td>
              </tr>
              <tr>
                <td className="p-3 text-gray-800">Heat pump water heater</td>
                <td className="p-3 text-gray-800">Up to $1,750</td>
                <td className="p-3 text-gray-800">Up to $1,750</td>
              </tr>
              <tr>
                <td className="p-3 text-gray-800">Electrical panel upgrade</td>
                <td className="p-3 text-gray-800">Up to $4,000</td>
                <td className="p-3 text-gray-800">Up to $4,000</td>
              </tr>
              <tr>
                <td className="p-3 text-gray-800">
                  Insulation / air sealing
                </td>
                <td className="p-3 text-gray-800">Up to $1,600</td>
                <td className="p-3 text-gray-800">Up to $1,600</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 text-gray-900 font-semibold">
                  Per-household cap
                </td>
                <td className="p-3 text-gray-900 font-semibold" colSpan={2}>
                  $14,000 across all measures
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 text-sm mb-2">
          HEAR rebates apply only to replacement of a nonelectric appliance or a
          first-time heat pump purchase. Homeowners replacing an existing heat
          pump should use the HOMES program instead. Households above 150% AMI
          do not qualify for HEAR.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
          No Virginia State Tax Credit
        </h3>
        <p className="text-gray-700 mb-2">
          Virginia does not offer a state-level tax credit for heat pumps. There
          is no state-sponsored residential loan program for heat pump
          installations. Residential PACE (R-PACE) financing is not available in
          Virginia, though Commercial PACE operates in 20+ localities for
          multifamily and commercial properties.
        </p>
      </section>

      {/* Utility Programs */}
      <section className="max-w-3xl mx-auto px-4 py-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Utility Rebates: What&rsquo;s Actually Available Now
        </h2>
        <p className="text-gray-600 mb-6">
          With federal credits expired and state programs frozen, utility rebates
          are the primary financial incentive for Virginia homeowners in 2026.
          What you can get depends entirely on which utility serves your home.
        </p>

        {/* Dominion */}
        <div className="border border-gray-200 rounded-lg p-5 mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            Dominion Energy Virginia
          </h3>
          <p className="text-sm text-gray-500 mb-3">
            Virginia&rsquo;s largest electric utility
          </p>

          <h4 className="font-semibold text-gray-800 mt-4 mb-1">
            Heat Pump Water Heaters
          </h4>
          <p className="text-gray-700 text-sm mb-2">
            <strong>$250</strong> for 40–59 gallon units or{" "}
            <strong>$400</strong> for 60+ gallon units. Available as a mail-in
            rebate or instant discount through Dominion&rsquo;s water heater
            marketplace. Must meet ENERGY STAR requirements and replace an
            existing electric water heater.
          </p>

          <h4 className="font-semibold text-gray-800 mt-4 mb-1">
            Central Heat Pumps (Home Retrofit Program)
          </h4>
          <p className="text-gray-700 text-sm mb-2">
            Dominion offers tiered rebates for central air-source heat pumps
            based on efficiency. Rebate amounts are determined through the Home
            Energy Evaluation pathway and confirmed by a participating Energy
            Solutions Contractor. A home energy audit is required to
            participate. Eligibility can depend on existing heating type —
            some pathways prioritize or require homes with electric resistance
            heating.
          </p>

          <h4 className="font-semibold text-gray-800 mt-4 mb-1">
            Heat Pump Tune-Up
          </h4>
          <p className="text-gray-700 text-sm mb-2">
            <strong>$90 rebate</strong> for an existing heat pump tune-up
            through a participating contractor.
          </p>

          <h4 className="font-semibold text-gray-800 mt-4 mb-1">
            Income-Qualifying: EnergyShare Weatherization
          </h4>
          <p className="text-gray-700 text-sm mb-2">
            <strong>Free</strong> home energy assessments and efficiency
            upgrades (including heat pump equipment) for households at or below
            80% AMI, customers aged 60+ at 120% of state median income, or
            those receiving disability payments. Funded at $130M through 2028
            under Virginia&rsquo;s Grid Transformation and Security Act.
          </p>

          <p className="text-sm mt-3">
            <a
              href="https://www.domsavings.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              domsavings.com ↗
            </a>
          </p>
        </div>

        {/* Washington Gas */}
        <div className="border border-gray-200 rounded-lg p-5 mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            Washington Gas
          </h3>
          <p className="text-sm text-gray-500 mb-3">
            Northern Virginia gas utility
          </p>

          <h4 className="font-semibold text-gray-800 mt-4 mb-1">
            VA CARE Program — Dual-Fuel Heat Pump
          </h4>
          <p className="text-gray-700 text-sm mb-2">
            <strong>$2,000</strong> for a dual-fuel heat pump with furnace
            replacement. Requirements: heat pump must meet 15.2 SEER2 and 7.5
            HSPF2; replacement furnace must be 95% AFUE. Or{" "}
            <strong>$1,400</strong> with an existing qualifying furnace (90%+
            AFUE). Must replace an existing central AC system and use a
            participating contractor.
          </p>
          <p className="text-gray-600 text-sm mt-2">
            <em>
              Note: This is a dual-fuel rebate that pairs a heat pump with gas
              furnace backup — not a full electrification incentive. The gas
              furnace remains as supplemental heating.
            </em>
          </p>

          <p className="text-sm mt-3">
            <a
              href="https://wgsmartsavings.com/programs-rebates/va/home-heating"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              wgsmartsavings.com ↗
            </a>
          </p>
        </div>

        {/* Appalachian Power */}
        <div className="border border-gray-200 rounded-lg p-5 mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            Appalachian Power (AEP Virginia)
          </h3>
          <p className="text-sm text-gray-500 mb-3">
            Western Virginia electric utility
          </p>

          <h4 className="font-semibold text-gray-800 mt-4 mb-1">
            Ductless Mini-Split Heat Pumps
          </h4>
          <p className="text-gray-700 text-sm mb-2">
            <strong>$300</strong> per ductless mini-split through the Efficient
            Products Program (minimum SEER2 ≥15, EER2 ≥12.5). Limit of one
            rebate per customer per calendar year.
          </p>

          <h4 className="font-semibold text-gray-800 mt-4 mb-1">
            Home Performance Program
          </h4>
          <p className="text-gray-700 text-sm mb-2">
            Up to <strong>$400 per unit</strong> for mini-splits and heat pump
            water heaters through an audit-based pathway with approved
            contractors. No ducted whole-home heat pump rebate is offered.
          </p>

          <h4 className="font-semibold text-gray-800 mt-4 mb-1">
            Low-Income Weatherization
          </h4>
          <p className="text-gray-700 text-sm mb-2">
            Free energy efficiency upgrades for households below 60% of state
            median income.
          </p>

          <p className="text-sm mt-3">
            <a
              href="https://takechargeva.com/rebates"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              takechargeva.com ↗
            </a>
          </p>
        </div>

        {/* Co-ops and smaller utilities */}
        <div className="border border-gray-200 rounded-lg p-5 mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            Electric Cooperatives &amp; Smaller Utilities
          </h3>

          <p className="text-gray-700 text-sm mb-3">
            Virginia&rsquo;s electric cooperatives — including NOVEC,
            Rappahannock Electric (REC), and Shenandoah Valley Electric (SVEC) —
            generally <strong>do not offer direct cash rebates</strong> for heat
            pumps. Some provide alternative support:
          </p>
          <ul className="text-gray-700 text-sm space-y-2 mb-3">
            <li>
              <strong>REC</strong> — Vividly Brighter program: on-bill financing
              where REC pays upfront costs and members repay through their
              electric bill.
            </li>
            <li>
              <strong>NOVEC</strong> — Low-interest HVAC financing through a
              bank partnership.
            </li>
            <li>
              <strong>Harrisonburg Electric Commission</strong> — Energy Save
              &amp; Earn Rebate Program covering central heat pumps, mini-splits,
              and heat pump water heaters.
            </li>
          </ul>
          <p className="text-gray-600 text-sm">
            <strong>Columbia Gas</strong> and <strong>Virginia Natural Gas</strong>{" "}
            offer rebates only for gas equipment — neither provides any incentive
            for heat pumps or fuel switching.
          </p>
        </div>

        {/* Gas utilities note */}
        <div className="border border-gray-200 rounded-lg p-5 mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            Weatherization Assistance Program (WAP)
          </h3>
          <p className="text-gray-700 text-sm mb-2">
            Virginia&rsquo;s WAP remains <strong>active and accepting
            applications</strong>. Administered by the Virginia Department of
            Housing and Community Development (DHCD), WAP provides free energy
            efficiency upgrades — including heating and cooling system
            replacement — for income-qualified households.
          </p>
          <p className="text-gray-700 text-sm mb-2">
            Priority goes to elderly (60+), disabled individuals, and families
            with children. Waitlists are typical.
          </p>
          <p className="text-gray-700 text-sm">
            Contact: WAP@dhcd.virginia.gov, 804-371-7000, or visit{" "}
            <a
              href="https://www.dhcd.virginia.gov/wx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              dhcd.virginia.gov/wx
            </a>{" "}
            for a county-by-county provider list.
          </p>
        </div>
      </section>

      {/* Local Programs */}
      <section className="max-w-3xl mx-auto px-4 py-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Local Programs
        </h2>
        <p className="text-gray-700 mb-4">
          Virginia cities and counties offer minimal direct heat pump incentives.
          The one active local program identified:
        </p>

        <div className="border border-gray-200 rounded-lg p-5 mb-4">
          <h3 className="font-semibold text-gray-900 mb-1">
            Charlottesville — Retrofit Mini Grant
          </h3>
          <p className="text-gray-700 text-sm">
            Up to <strong>$2,000</strong> in partnership with the Local Energy
            Alliance Program (LEAP), covering heat pumps, heat pump water
            heaters, duct sealing, attic insulation, and electrical upgrades.
            This grant can stack with utility rebates.
          </p>
        </div>

        <p className="text-gray-600 text-sm">
          Richmond, Virginia Beach, Norfolk, Arlington, and Alexandria have no
          identified city-specific heat pump rebate programs. Arlington County
          has published a building electrification whitepaper but offers no
          direct residential rebate.
        </p>
      </section>

      {/* Stacking */}
      <section className="max-w-3xl mx-auto px-4 py-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          How Programs Stack
        </h2>
        <p className="text-gray-600 mb-4">
          With federal credits expired and state programs frozen, the current
          stacking picture is straightforward — utility rebates are the only
          active layer.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          Current Reality (March 2026)
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-lg mb-6">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-3 font-semibold text-gray-700">
                  Scenario
                </th>
                <th className="text-left p-3 font-semibold text-gray-700">
                  Max Incentive
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="p-3 text-gray-800">
                  Median-income, Washington Gas territory
                </td>
                <td className="p-3 text-gray-800 font-semibold">
                  $2,000
                </td>
              </tr>
              <tr>
                <td className="p-3 text-gray-800">
                  Median-income, Dominion Energy territory
                </td>
                <td className="p-3 text-gray-800 font-semibold">
                  Varies (determined via home energy evaluation)
                </td>
              </tr>
              <tr>
                <td className="p-3 text-gray-800">
                  Median-income, Appalachian Power territory
                </td>
                <td className="p-3 text-gray-800 font-semibold">$400</td>
              </tr>
              <tr>
                <td className="p-3 text-gray-800">
                  Median-income, electric cooperative territory
                </td>
                <td className="p-3 text-gray-800 font-semibold">
                  $0 in direct rebates
                </td>
              </tr>
              <tr>
                <td className="p-3 text-gray-800">
                  Low-income, any territory
                </td>
                <td className="p-3 text-gray-800 font-semibold">
                  Free via WAP / EnergyShare / utility weatherization
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          If Virginia&rsquo;s IRA Programs Launch
        </h3>
        <p className="text-gray-700 mb-3">
          Federal guidance and Virginia Energy&rsquo;s FAQ confirm that HOMES
          and HEAR rebates can stack with utility rebates but cannot be combined
          for the same measure. A household could use HEAR for a heat pump and
          HOMES for insulation, or vice versa.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-lg mb-4">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-3 font-semibold text-gray-700">
                  Scenario (if HEAR launches)
                </th>
                <th className="text-left p-3 font-semibold text-gray-700">
                  Potential Stack
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="p-3 text-gray-800">
                  80–150% AMI, Dominion territory
                  <br />
                  <span className="text-gray-500 text-xs">
                    HEAR HP + Dominion HPWH + HEAR HPWH
                  </span>
                </td>
                <td className="p-3 text-gray-800 font-semibold">
                  Up to ~$6,000+
                </td>
              </tr>
              <tr>
                <td className="p-3 text-gray-800">
                  ≤80% AMI, Dominion territory
                  <br />
                  <span className="text-gray-500 text-xs">
                    HEAR HP + HEAR HPWH + HEAR panel + utility programs
                  </span>
                </td>
                <td className="p-3 text-gray-800 font-semibold">
                  Up to $14,000 (HEAR cap) + utility
                </td>
              </tr>
              <tr>
                <td className="p-3 text-gray-800">&gt;150% AMI</td>
                <td className="p-3 text-gray-800 font-semibold">
                  HOMES (if launched) + utility only
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-500 text-sm">
          These are hypothetical scenarios — HOMES and HEAR have not launched in
          Virginia as of {formattedDate}.
        </p>
      </section>

      {/* Climate Context */}
      <section className="max-w-3xl mx-auto px-4 py-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Climate Context: Why Virginia Is Strong Heat Pump Territory
        </h2>
        <p className="text-gray-700 mb-4">
          Virginia spans three IECC climate zones under the 2021 code: Zone 3A
          (warm-humid) along the southeastern coast, Zone 4A (mixed-humid)
          covering most of the state, and Zone 5A (cool-humid) in the mountain
          counties of Highland and Alleghany. The Zone 4A designation across
          most of Virginia means balanced heating and cooling loads — heat pumps
          serve both functions efficiently year-round.
        </p>
        <p className="text-gray-700 mb-4">
          Winter design temperatures across Virginia&rsquo;s major population
          centers range from about 12°F in Northern Virginia (Dulles area) to
          about 20°F along the coast (Norfolk/Virginia Beach). These are well
          within the operating range of standard air-source heat pumps —
          cold-climate models are recommended only for mountain areas in western
          Virginia where temperatures can drop below 10°F.
        </p>
        <p className="text-gray-700 mb-4">
          Virginia already has one of the highest electric-heating adoption
          rates on the East Coast — roughly half of homes heat with electricity,
          well above the national average. Natural gas serves a significant
          share of homes concentrated in Northern Virginia, while propane and
          fuel oil account for a smaller share in rural western and central
          Virginia. The primary conversion opportunities vary by region: gas
          furnaces in Northern Virginia suburbs, electric resistance systems in
          Hampton Roads/Tidewater, and propane or oil systems in rural
          Appalachian communities.
        </p>
      </section>

      {/* How to Apply */}
      <section className="max-w-3xl mx-auto px-4 py-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">How to Apply</h2>
        <p className="text-gray-600 mb-4">
          The process differs by utility. Start with your electric utility:
        </p>
        <div className="space-y-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 bg-brand-100 text-brand-700 rounded-full flex items-center justify-center text-sm font-bold">
              1
            </span>
            <div>
              <p className="font-semibold text-gray-900">
                Identify your utility
              </p>
              <p className="text-sm text-gray-600">
                Check your electric bill for Dominion Energy, Appalachian Power,
                or a cooperative name. Check your gas bill for Washington Gas,
                Columbia Gas, or Virginia Natural Gas.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 bg-brand-100 text-brand-700 rounded-full flex items-center justify-center text-sm font-bold">
              2
            </span>
            <div>
              <p className="font-semibold text-gray-900">
                Visit your utility&rsquo;s rebate portal
              </p>
              <p className="text-sm text-gray-600">
                Dominion:{" "}
                <a
                  href="https://www.domsavings.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 hover:underline"
                >
                  domsavings.com
                </a>
                {" · "}
                Appalachian Power:{" "}
                <a
                  href="https://takechargeva.com/rebates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 hover:underline"
                >
                  takechargeva.com
                </a>
                {" · "}
                Washington Gas:{" "}
                <a
                  href="https://wgsmartsavings.com/programs-rebates/va/home-heating"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 hover:underline"
                >
                  wgsmartsavings.com
                </a>
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 bg-brand-100 text-brand-700 rounded-full flex items-center justify-center text-sm font-bold">
              3
            </span>
            <div>
              <p className="font-semibold text-gray-900">
                Schedule a home energy audit (Dominion) or find a participating
                contractor
              </p>
              <p className="text-sm text-gray-600">
                Dominion requires an energy evaluation before HVAC rebates.
                Appalachian Power and Washington Gas require using approved
                contractor networks.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 bg-brand-100 text-brand-700 rounded-full flex items-center justify-center text-sm font-bold">
              4
            </span>
            <div>
              <p className="font-semibold text-gray-900">
                Check for local programs
              </p>
              <p className="text-sm text-gray-600">
                Charlottesville residents should also apply for the $2,000
                Retrofit Mini Grant through LEAP. Ask your municipality about
                any local energy programs.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 bg-brand-100 text-brand-700 rounded-full flex items-center justify-center text-sm font-bold">
              5
            </span>
            <div>
              <p className="font-semibold text-gray-900">
                Monitor Virginia&rsquo;s IRA programs
              </p>
              <p className="text-sm text-gray-600">
                Bookmark{" "}
                <a
                  href="https://www.energy.virginia.gov/energy-efficiency/HomeEnergyRebatesFrequentlyAskedQuestions.shtml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 hover:underline"
                >
                  Virginia Energy&rsquo;s Home Energy Rebates FAQ
                </a>{" "}
                for updates on HOMES and HEAR. If they launch, the stacking
                math changes dramatically — especially for households at or
                below 150% AMI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Watch */}
      <section className="max-w-3xl mx-auto px-4 py-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">What to Watch</h2>
        <div className="space-y-3">
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="font-semibold text-gray-900 mb-1">
              HOMES + HEAR launch status
            </p>
            <p className="text-sm text-gray-600">
              If Virginia Energy receives and distributes its $188M allocation,
              these programs would transform the incentive math — especially
              HEAR&rsquo;s $8,000 for heat pumps at ≤80% AMI.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="font-semibold text-gray-900 mb-1">
              Dominion program availability
            </p>
            <p className="text-sm text-gray-600">
              Participation can be limited depending on contractor availability
              and program demand. Starting the home energy evaluation process
              early is recommended.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="font-semibold text-gray-900 mb-1">
              Federal legislative activity
            </p>
            <p className="text-sm text-gray-600">
              No legislation to reinstate 25C or 25D has been enacted as of
              March 2026. We&rsquo;ll update this page if that changes.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 py-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqJsonLd.mainEntity.map((faq, index) => (
            <details
              key={index}
              className="border border-gray-200 rounded-lg"
            >
              <summary className="p-4 cursor-pointer font-semibold text-gray-900 hover:text-brand-600">
                {faq.name}
              </summary>
              <p className="px-4 pb-4 text-sm text-gray-700">
                {faq.acceptedAnswer.text}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Sources */}
      <section className="max-w-3xl mx-auto px-4 py-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Sources</h2>
        <div className="space-y-2">
          {vaIncentive.sources.map((source) => (
            <a
              key={source.url}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-brand-600 hover:underline"
            >
              {source.label} ↗
            </a>
          ))}
        </div>
        <p className="text-gray-500 text-sm mt-4">
          All sources last verified {formattedDate}. Dollar amounts come from
          official utility program pages and Virginia government sources. We do
          not use blog posts or aggregator sites as primary sources for dollar
          amounts.
        </p>
      </section>

      {/* Cross-links */}
      <section className="max-w-3xl mx-auto px-4 py-6 border-t border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Related</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <Link
            href="/federal-heat-pump-tax-credit-expired"
            className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <p className="font-semibold text-gray-900">
              Federal Heat Pump Tax Credits Ended
            </p>
            <p className="text-sm text-gray-600">
              What happened to 25C and 25D
            </p>
          </Link>
          <Link
            href="/heat-pumps"
            className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <p className="font-semibold text-gray-900">
              All State Heat Pump Incentives
            </p>
            <p className="text-sm text-gray-600">
              Compare programs across states
            </p>
          </Link>
          <Link
            href="/heat-pumps/states/ny"
            className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <p className="font-semibold text-gray-900">
              New York Heat Pump Rebates
            </p>
            <p className="text-sm text-gray-600">Clean Heat Program + 6 utilities</p>
          </Link>
          <Link
            href="/battery"
            className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <p className="font-semibold text-gray-900">
              Home Batteries in 2026
            </p>
            <p className="text-sm text-gray-600">
              Costs, incentives, and economics
            </p>
          </Link>
        </div>
        <p className="text-gray-500 text-sm mt-4">
          Maryland and North Carolina guides coming soon.
        </p>
      </section>

      {/* Disclaimer */}
      <section className="max-w-3xl mx-auto px-4 py-6 mb-8">
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-xs text-gray-500 leading-relaxed">
            <strong>Disclaimer:</strong> This page is for informational purposes
            only and is not tax, legal, or financial advice. Program details,
            eligibility, and rebate amounts can change without notice. Verify
            all information directly with your utility and the relevant program
            administrator before making purchasing decisions. Home Energy Basics
            is not affiliated with any government agency, utility company, or
            equipment manufacturer.
          </p>
        </div>
      </section>
    </>
  );
}
