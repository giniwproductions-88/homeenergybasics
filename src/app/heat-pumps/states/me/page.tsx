// src/app/heat-pumps/states/me/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";

export const metadata: Metadata = {
  title:
    "Maine Heat Pump Rebates 2026: Efficiency Maine Incentives After Federal Credits Ended | Home Energy Basics",
  description:
    "No federal heat pump tax credits in 2026. Here's what Maine homeowners can actually use: Efficiency Maine rebates up to $9,000, the $500 whole-home bonus, HEAR for mobile homes, and the NE Heat Pump Accelerator.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/me",
  },
  openGraph: {
    title: "Maine Heat Pump Rebates 2026: What's Actually Available",
    description:
      "Federal credits ended. Efficiency Maine rebates up to $9,000 are the primary incentive. HEAR is partially active for mobile homes only. Here's the complete picture.",
    url: "https://homeenergybasics.com/heat-pumps/states/me",
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

export default function MaineHeatPumpPage() {
  const meIncentive = incentives.ME;
  const formattedDate = formatDate(meIncentive.lastVerified);

  const lastVerified = "March 16, 2026";

  const faqData = [
    {
      question: "Are there federal heat pump tax credits in Maine in 2026?",
      answer:
        "No. The IRS states that the Section 25C and Section 25D federal tax credits apply only to qualifying property placed in service through December 31, 2025. Maine homeowners installing heat pumps in 2026 should not plan on federal tax credits.",
    },
    {
      question: "What heat pump rebates are available in Maine in 2026?",
      answer:
        "Efficiency Maine offers $1,000 to $3,000 per outdoor unit depending on income, with lifetime caps of $3,000 to $9,000 per housing unit. Ducted whole-home systems receive $3,000 to $9,000 as a lump sum. A $500 bonus applies to whole-home upgrades completed between March 1 and December 31, 2026. Heat pump water heaters receive an $1,100 instant discount or $1,050 mail-in rebate.",
    },
    {
      question:
        "Is Maine's HEAR program available for single-family homes?",
      answer:
        "No. As of March 2026, Maine's HEAR program is only partially active. It is available for mobile/manufactured homes and new affordable multifamily construction only. Standard single-family homeowners are not eligible for HEAR. Expansion to single-family homes has not been announced.",
    },
    {
      question: "Can I stack Efficiency Maine rebates with HEAR?",
      answer:
        "Only if your home qualifies for HEAR — mobile/manufactured homes and affordable multifamily. A low-income household in a qualifying mobile home could receive up to $9,000 from Efficiency Maine plus up to $8,000 from HEAR, for a potential total of $17,000. Standard single-family homes cannot access HEAR.",
    },
    {
      question:
        "Do I need a specific contractor for Efficiency Maine rebates?",
      answer:
        "Yes. All heat pump installations must be done by an Efficiency Maine Residential Registered Vendor. You can find one using the vendor locator at efficiencymaine.com. Low- and moderate-income customers must also verify income eligibility before installation.",
    },
    {
      question:
        "What equipment qualifies for Efficiency Maine heat pump rebates?",
      answer:
        "Only single-zone heat pumps on Efficiency Maine's eligible product list qualify for rebates. Multi-zone systems are not rebatable, but their capacity can count toward the 80% heating load requirement. Dual fuel (heat pump plus fossil fuel furnace) systems are not eligible. Equipment must have heating capacity at your location's ASHRAE 99.6% design temperature.",
    },
  ];

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
              / Maine
            </p>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Maine Heat Pump Rebates 2026: What&apos;s Actually Available
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              There are no federal residential heat pump tax credits in 2026.
              Efficiency Maine rebates — funded by RGGI and utility surcharges,
              not federal dollars — are the primary incentive for Maine
              homeowners. Here&apos;s the complete picture.
            </p>
            <p className="text-gray-600 mt-4">
              Efficiency Maine heat pump rebates are the primary incentives
              available to Maine homeowners in 2026.
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
          <StatusCard incentive={meIncentive} />
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-8 pb-0">
        <div className="container-narrow">
          <div className="bg-brand-50 border border-brand-200 rounded-xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Maine Heat Pump Incentives at a Glance (2026)
            </h2>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold mt-0.5">✓</span>
                <span>
                  <strong>Efficiency Maine rebates:</strong> $1,000–$3,000 per
                  outdoor unit depending on income. Lifetime cap $3,000–$9,000.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold mt-0.5">✓</span>
                <span>
                  <strong>Ducted whole-home systems:</strong> $3,000–$9,000
                  lump sum depending on income.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold mt-0.5">✓</span>
                <span>
                  <strong>$500 bonus:</strong> Whole-home upgrades completed
                  March 1 – December 31, 2026.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold mt-0.5">✓</span>
                <span>
                  <strong>Heat pump water heaters:</strong> $1,100 instant
                  discount at participating retailers (through March 31, 2026)
                  or $1,050 mail-in rebate.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold mt-0.5">✓</span>
                <span>
                  <strong>Geothermal:</strong> One-third of project cost up to
                  $3,000. No income tiers.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-600 font-bold mt-0.5">⚠</span>
                <span>
                  <strong>HEAR:</strong> Partially active — mobile homes and
                  affordable multifamily only. Not available for standard
                  single-family homes.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-600 font-bold mt-0.5">✗</span>
                <span>
                  <strong>Federal tax credits:</strong> Both 25C and 25D expired
                  December 31, 2025. Not available in 2026.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Federal Credits */}
      <section className="py-10 border-t border-gray-100">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Federal Heat Pump Tax Credits Are Not Available in 2026
          </h2>
          <p className="text-gray-600 mb-4">
            The IRS states that the Section 25C Energy Efficient Home
            Improvement Credit and the Section 25D Residential Clean Energy
            Credit apply only to qualifying property placed in service through
            December 31, 2025. This change was part of the One Big Beautiful
            Bill Act (OBBBA) signed into law on July 4, 2025.
          </p>
          <p className="text-gray-600 mb-4">
            Previously, homeowners could claim up to $2,000 for a qualifying
            heat pump under 25C, or 30% of geothermal system costs (no cap)
            under 25D. Neither credit is available for 2026 installations.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <p className="text-gray-700">
              <strong>What this means for Maine homeowners:</strong> Efficiency
              Maine rebates are now the primary financial incentive. Unlike the
              federal credits, Efficiency Maine&apos;s funding comes from RGGI
              (Regional Greenhouse Gas Initiative) credits and utility
              surcharges — sources independent of federal policy changes.
              Efficiency Maine executive director Michael Stoddard has confirmed
              no plans to modify rebate levels.
            </p>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Source:{" "}
            <a
              href="https://www.irs.gov/credits-deductions/energy-efficient-home-improvement-credit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              IRS.gov — Energy Efficient Home Improvement Credit ↗
            </a>{" "}
            | Verified {lastVerified}
          </p>
        </div>
      </section>

      {/* Efficiency Maine Non-Ducted Rebates */}
      <section className="py-10 border-t border-gray-100">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Efficiency Maine Heat Pump Rebates (Non-Ducted / Mini-Split)
          </h2>
          <p className="text-gray-600 mb-6">
            Efficiency Maine&apos;s flagship program offers rebates per outdoor
            unit for whole-home heat pump systems. Over 100,000 heat pumps have
            been installed statewide. Rebates are applied at point of sale
            through your installer — you pay the reduced price, not the full
            amount.
          </p>

          {/* Rebate Table */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Rebate Amounts (Per Outdoor Unit)
          </h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-3 pr-4 font-semibold text-gray-900">
                    Income Tier
                  </th>
                  <th className="py-3 pr-4 font-semibold text-gray-900">
                    Per Outdoor Unit
                  </th>
                  <th className="py-3 font-semibold text-gray-900">
                    Lifetime Cap
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 text-gray-700">Low income</td>
                  <td className="py-3 pr-4 font-semibold text-forest-600">
                    $3,000
                  </td>
                  <td className="py-3 text-gray-700">$9,000</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 text-gray-700">Moderate income</td>
                  <td className="py-3 pr-4 font-semibold text-forest-600">
                    $2,000
                  </td>
                  <td className="py-3 text-gray-700">$6,000</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 text-gray-700">Any income</td>
                  <td className="py-3 pr-4 font-semibold text-forest-600">
                    $1,000
                  </td>
                  <td className="py-3 text-gray-700">$3,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Income Qualification */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Income Qualification
          </h3>
          <div className="space-y-3 mb-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-medium text-gray-900">Low income</p>
              <p className="text-gray-600 text-sm">
                Homeowner or household member participates in MaineCare, HEAP,
                SNAP, or TANF. Must{" "}
                <a
                  href="https://www.efficiencymaine.com/income-based-eligibility-verification/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 hover:underline"
                >
                  verify eligibility ↗
                </a>{" "}
                before installation.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-medium text-gray-900">Moderate income</p>
              <p className="text-gray-600 text-sm">
                Adjusted Gross Income (AGI) up to $70,000 for individual filers,
                or $100,000 for joint filers. Must verify eligibility before
                installation.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-medium text-gray-900">Any income</p>
              <p className="text-gray-600 text-sm">
                No income verification required. Available to all Maine
                homeowners.
              </p>
            </div>
          </div>

          {/* Equipment Rules */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Equipment and Sizing Requirements
          </h3>
          <div className="space-y-3 text-gray-600 mb-6">
            <p>
              Only <strong>single-zone heat pumps</strong> on Efficiency
              Maine&apos;s{" "}
              <a
                href="https://www.efficiencymaine.com/docs/Rebate-Eligible-Heat-Pumps.xlsx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 hover:underline"
              >
                eligible product list ↗
              </a>{" "}
              qualify for rebates. Multi-zone systems are not rebatable, but
              their heating capacity can count toward the total.
            </p>
            <p>
              Heat pumps must be sized for at least{" "}
              <strong>80% of the home&apos;s peak heating load</strong> at
              ASHRAE 99.6% design temperature. Combined with supplemental
              electric heat, the system must cover 100% of peak load.
            </p>
            <p>
              Primary fossil-fuel systems can remain only as emergency backup —
              their capacity does <strong>not</strong> count toward the 100%
              requirement.{" "}
              <strong>
                Dual fuel (heat pump + fossil fuel furnace) systems are not
                eligible.
              </strong>
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-6">
            <p className="text-amber-900 font-medium mb-1">
              ASHRAE Design Temperatures for Maine
            </p>
            <p className="text-amber-800 text-sm">
              Portland: 0°F | Bangor: −7°F | Caribou: −14°F | All other
              locations: 0°F or below. Equipment must have rated heating
              capacity at these temperatures.
            </p>
          </div>

          {/* Building Requirements */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Building Requirements
          </h3>
          <div className="space-y-2 text-gray-600 mb-6">
            <p>
              Eligible building types: single-family homes, two-unit duplexes,
              condominiums, mobile homes, and mixed-use buildings with 1–2
              housing units and no commercial electrical meters.
            </p>
            <p>
              The housing unit must not have had a natural gas utility account
              before the upgrade. Heat pumps must be used as the primary heating
              system throughout the heating season.
            </p>
            <p>
              Low- and moderate-income rebates require the housing unit to be
              the owner&apos;s principal residence.
            </p>
          </div>

          <p className="text-sm text-gray-500">
            Source:{" "}
            <a
              href="https://www.efficiencymaine.com/at-home/residential-heat-pump-rebates/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              Efficiency Maine — Residential Heat Pump Rebates ↗
            </a>{" "}
            | Verified {lastVerified}
          </p>
        </div>
      </section>

      {/* Ducted Whole-Home */}
      <section className="py-10 border-t border-gray-100">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ducted Whole-Home Heat Pump Rebates
          </h2>
          <p className="text-gray-600 mb-6">
            Ducted systems receive a single lump-sum rebate per housing unit.
            Requirements are stricter: the system must be sized for{" "}
            <strong>100% of peak heating load</strong>, and all fossil fuel
            forced hot air furnaces must be <strong>physically removed</strong>.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-3 pr-4 font-semibold text-gray-900">
                    Income Tier
                  </th>
                  <th className="py-3 font-semibold text-gray-900">
                    Rebate (Per Housing Unit)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 text-gray-700">Low income</td>
                  <td className="py-3 font-semibold text-forest-600">
                    $9,000
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 text-gray-700">Moderate income</td>
                  <td className="py-3 font-semibold text-forest-600">
                    $6,000
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 text-gray-700">Any income</td>
                  <td className="py-3 font-semibold text-forest-600">
                    $3,000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-600 mb-4">
            Single-wide mobile homes may qualify for up to $12,900 in ducted
            rebates. The Registered Vendor must also assess and mitigate frozen
            pipe risk as part of the installation.
          </p>

          <p className="text-sm text-gray-500">
            Source:{" "}
            <a
              href="https://www.efficiencymaine.com/residential-ducted-heat-pump-rebates/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              Efficiency Maine — Ducted Heat Pump Rebates ↗
            </a>{" "}
            | Verified {lastVerified}
          </p>
        </div>
      </section>

      {/* $500 Bonus */}
      <section className="py-10 border-t border-gray-100">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            $500 Whole-Home Heat Pump Bonus (March – December 2026)
          </h2>
          <div className="bg-forest-50 border border-forest-200 rounded-lg p-5 mb-4">
            <p className="text-forest-800">
              Efficiency Maine is offering an additional <strong>$500</strong>{" "}
              for eligible whole-home heat pump upgrades completed, and rebate
              claims emailed or postmarked, between{" "}
              <strong>March 1 and December 31, 2026</strong>.
            </p>
          </div>
          <p className="text-gray-600 mb-4">
            This bonus stacks on top of the standard non-ducted or ducted
            rebates. It appears as a separate line item on both claim forms
            (updated 3/1/2026). Single-wide mobile homes are not eligible for
            the $500 bonus.
          </p>
          <p className="text-sm text-gray-500">
            Source:{" "}
            <a
              href="https://www.efficiencymaine.com/whole-home-heat-pump-rebates/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              Efficiency Maine — Whole-Home Heat Pump Rebates ↗
            </a>{" "}
            | Verified {lastVerified}
          </p>
        </div>
      </section>

      {/* Geothermal */}
      <section className="py-10 border-t border-gray-100">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Geothermal Heat Pump Rebates
          </h2>
          <p className="text-gray-600 mb-4">
            Efficiency Maine offers a geothermal rebate of{" "}
            <strong>one-third of project cost up to $3,000</strong>, with a
            lifetime limit of one geothermal rebate per housing unit. Unlike
            air-source rebates, there are no income-based tiers — the $3,000
            maximum applies to all income levels.
          </p>
          <p className="text-gray-600 mb-4">
            Equipment must be ENERGY STAR certified, the building must be the
            owner&apos;s principal year-round residence, and installation must be
            done by a Residential Registered Vendor for Geothermal Systems.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-4">
            <p className="text-amber-800">
              <strong>Note:</strong> The loss of the federal Section 25D credit
              (previously 30% of installed cost with no cap) makes the
              Efficiency Maine $3,000 rebate the sole remaining incentive for
              residential geothermal in Maine.
            </p>
          </div>
          <p className="text-sm text-gray-500">
            Source:{" "}
            <a
              href="https://www.efficiencymaine.com/at-home/geothermal/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              Efficiency Maine — Geothermal Heat Pump Rebates ↗
            </a>{" "}
            | Verified {lastVerified}
          </p>
        </div>
      </section>

      {/* Heat Pump Water Heaters */}
      <section className="py-10 border-t border-gray-100">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Heat Pump Water Heater Incentives
          </h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-5 mb-6">
            <p className="text-red-800 font-medium">
              ⚠ The $1,100 instant discount expires March 31, 2026. The $1,050
              mail-in rebate has no stated end date but is subject to change.
            </p>
          </div>
          <div className="space-y-4 mb-6">
            <div className="card">
              <h3 className="font-semibold text-gray-900 mb-2">
                $1,100 Instant Discount (Through March 31, 2026)
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Applied at point of purchase at participating retailers. No
                paperwork required. Available at Home Depot, Lowe&apos;s, Granite
                Group, Selco, and Winsupply locations (Bangor, Presque Isle,
                Rockland, Portland/South Portland).
              </p>
            </div>
            <div className="card">
              <h3 className="font-semibold text-gray-900 mb-2">
                $1,050 Mail-In Rebate (No Stated End Date)
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                For heat pump water heaters purchased without an instant
                discount. Submit claim within 6 months of purchase. Equipment
                must be ENERGY STAR certified — any brand and tank size. DIY
                installation qualifies; professional installation is not
                required.
              </p>
            </div>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            The instant discount and mail-in rebate cannot be combined — only
            one HPWH incentive per installation address per calendar year.
          </p>
          <p className="text-sm text-gray-500">
            Source:{" "}
            <a
              href="https://www.efficiencymaine.com/at-home/heat-pump-water-heater-program/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              Efficiency Maine — Heat Pump Water Heater Incentives ↗
            </a>{" "}
            | Verified {lastVerified}
          </p>
        </div>
      </section>

      {/* HEAR Status */}
      <section className="py-10 border-t border-gray-100">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Maine HEAR Program Status (Home Electrification and Appliance
            Rebates)
          </h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-6">
            <p className="text-amber-800 font-medium mb-2">
              Partially Active — Limited Eligibility
            </p>
            <p className="text-amber-700 text-sm">
              HEAR is available only for mobile/manufactured homes and new
              affordable multifamily construction. Standard single-family homes
              are <strong>not eligible</strong>. No expansion to single-family
              homes has been announced. Page last reviewed: {formattedDate}.
            </p>
          </div>
          <p className="text-gray-600 mb-4">
            Maine&apos;s HEAR program is funded by $35.7 million in IRA Section
            50122 dollars and administered by Efficiency Maine Trust under the
            Maine Department of Energy Resources. It is deployed in phases,
            starting with the most energy-burdened housing types.
          </p>
          <p className="text-gray-600 mb-4">
            For eligible homes, HEAR provides up to <strong>$8,000</strong> per
            unit for heat pump systems, plus up to $1,750 for heat pump water
            heaters, $4,000 for electric panel upgrades, and $2,500 for wiring —
            capped at <strong>$14,000 per household</strong>. Low-income
            households (≤80% AMI) receive 100% of costs. HEAR funding runs
            through September 2031 or until exhausted.
          </p>
          <p className="text-sm text-gray-500">
            Source:{" "}
            <a
              href="https://www.maine.gov/energy/initiatives/infrastructure/home-energy-rebates"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              Maine DOER — Home Energy Rebates ↗
            </a>{" "}
            | Verified {lastVerified}
          </p>
        </div>
      </section>

      {/* NE Heat Pump Accelerator */}
      <section className="py-10 border-t border-gray-100">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            New England Heat Pump Accelerator ($450M, 5-State)
          </h2>
          <p className="text-gray-600 mb-4">
            The New England Heat Pump Accelerator is a collaboration between
            Connecticut, Maine, Massachusetts, New Hampshire, and Rhode Island,
            funded by $450 million in EPA Climate Pollution Reduction Grants. It
            aims to install 580,000 residential heat pumps region-wide by 2030.
          </p>
          <p className="text-gray-600 mb-4">
            The program works through supply-chain incentives to equipment
            distributors — not direct-to-consumer rebates. It is expected to
            reduce upfront heat pump costs by an estimated $700 per system.
            VEIC was selected as the Regional Implementer. First participating
            products were expected in February 2026, with all program components
            targeting full operation by spring 2026.
          </p>
          <p className="text-gray-600 mb-4">
            Accelerator benefits can stack with Efficiency Maine rebates but
            likely cannot stack with federal HEAR rebates. Existing consumer
            brands like &quot;Efficiency Maine&quot; are preserved — there is no
            new consumer-facing brand.
          </p>
          <p className="text-sm text-gray-500">
            Source:{" "}
            <a
              href="https://portal.ct.gov/deep/energy/new-england-heat-pump-accelerator"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              CT DEEP — New England Heat Pump Accelerator ↗
            </a>{" "}
            | Verified {lastVerified}
          </p>
        </div>
      </section>

      {/* Stacking */}
      <section className="py-10 border-t border-gray-100">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Can Maine Heat Pump Rebates Be Combined?
          </h2>
          <div className="space-y-4 mb-6">
            <div className="bg-gray-50 rounded-lg p-5">
              <p className="font-medium text-gray-900 mb-2">
                Standard single-family homeowner (any income)
              </p>
              <p className="text-gray-600 text-sm">
                Efficiency Maine rebate ($1,000/unit × 3 = $3,000) + $500
                whole-home bonus = <strong>up to $3,500</strong>
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-5">
              <p className="font-medium text-gray-900 mb-2">
                Low-income homeowner (non-ducted)
              </p>
              <p className="text-gray-600 text-sm">
                Efficiency Maine rebate ($3,000/unit × 3 = $9,000) + $500
                whole-home bonus = <strong>up to $9,500</strong>
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-5">
              <p className="font-medium text-gray-900 mb-2">
                Low-income mobile home (HEAR eligible)
              </p>
              <p className="text-gray-600 text-sm">
                Efficiency Maine ($9,000) + HEAR ($8,000) + $500 bonus ={" "}
                <strong>up to $17,500</strong>. Can cover the entire cost of a
                heat pump system in many cases.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-5">
              <p className="font-medium text-gray-900 mb-2">
                Low-income + insulation (non-ducted)
              </p>
              <p className="text-gray-600 text-sm">
                Heat pump rebates ($9,000) + insulation rebate ($8,000) + $500
                bonus = <strong>up to $17,500</strong> from Efficiency Maine
                alone.
              </p>
            </div>
          </div>
          <p className="text-gray-600 text-sm">
            Total incentives cannot exceed project cost. Efficiency Maine rebates
            no longer stack with the expired federal 25C tax credit. Municipal
            ARPA-funded programs (South Portland, Portland, Auburn, Bangor) may
            provide additional stacking where available.
          </p>
        </div>
      </section>

      {/* Home Energy Loans */}
      <section className="py-10 border-t border-gray-100">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Efficiency Maine Home Energy Loans
          </h2>
          <p className="text-gray-600 mb-6">
            Efficiency Maine&apos;s Green Bank offers unsecured loans — no lien
            on property or equipment — with no application fee or prepayment
            penalty. Funds are disbursed directly to the Registered Vendor after
            project completion.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-3 pr-3 font-semibold text-gray-900">
                    Loan Type
                  </th>
                  <th className="py-3 pr-3 font-semibold text-gray-900">
                    Rate
                  </th>
                  <th className="py-3 pr-3 font-semibold text-gray-900">
                    Term
                  </th>
                  <th className="py-3 pr-3 font-semibold text-gray-900">
                    Max
                  </th>
                  <th className="py-3 font-semibold text-gray-900">
                    Min FICO
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-3 text-gray-700">1-Year 0% APR</td>
                  <td className="py-3 pr-3 font-semibold text-forest-600">
                    0%
                  </td>
                  <td className="py-3 pr-3 text-gray-700">1 year</td>
                  <td className="py-3 pr-3 text-gray-700">$25,000</td>
                  <td className="py-3 text-gray-700">620</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-3 text-gray-700">5-Year Fixed</td>
                  <td className="py-3 pr-3 font-semibold text-forest-600">
                    5.99%
                  </td>
                  <td className="py-3 pr-3 text-gray-700">5 years</td>
                  <td className="py-3 pr-3 text-gray-700">$25,000</td>
                  <td className="py-3 text-gray-700">620</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-3 text-gray-700">10-Year Fixed</td>
                  <td className="py-3 pr-3 font-semibold text-forest-600">
                    7.99%
                  </td>
                  <td className="py-3 pr-3 text-gray-700">10 years</td>
                  <td className="py-3 pr-3 text-gray-700">$25,000</td>
                  <td className="py-3 text-gray-700">620</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-3 text-gray-700">
                    Income-Based 10-Year
                  </td>
                  <td className="py-3 pr-3 font-semibold text-forest-600">
                    5.99%
                  </td>
                  <td className="py-3 pr-3 text-gray-700">10 years</td>
                  <td className="py-3 pr-3 text-gray-700">$7,500</td>
                  <td className="py-3 text-gray-700">580</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Projects must be installed within 120 days of Notice to Proceed.
            Eligible upgrades include heat pumps (not dual fuel), electrical
            panel upgrades required for heat pump projects, insulation, air
            sealing, and health/safety improvements up to 25% of the financed
            amount.
          </p>
          <p className="text-sm text-gray-500">
            Source:{" "}
            <a
              href="https://www.efficiencymaine.com/home-energy-loans/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              Efficiency Maine — Home Energy Loans ↗
            </a>{" "}
            | Verified {lastVerified}
          </p>
        </div>
      </section>

      {/* Weatherization / Insulation */}
      <section className="py-10 border-t border-gray-100">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Insulation and Weatherization Rebates
          </h2>
          <p className="text-gray-600 mb-6">
            Weatherizing before installing heat pumps reduces the required
            system size and maximizes efficiency. Efficiency Maine offers
            insulation rebates that can be combined with heat pump rebates and
            Home Energy Loans.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-3 pr-4 font-semibold text-gray-900">
                    Income Tier
                  </th>
                  <th className="py-3 pr-4 font-semibold text-gray-900">
                    Rebate Covers
                  </th>
                  <th className="py-3 font-semibold text-gray-900">
                    Max Per Building
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 text-gray-700">Low income</td>
                  <td className="py-3 pr-4 text-gray-700">80% of cost</td>
                  <td className="py-3 font-semibold text-forest-600">
                    $8,000
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 text-gray-700">Moderate income</td>
                  <td className="py-3 pr-4 text-gray-700">60% of cost</td>
                  <td className="py-3 font-semibold text-forest-600">
                    $6,000
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 text-gray-700">Any income</td>
                  <td className="py-3 pr-4 text-gray-700">40% of cost</td>
                  <td className="py-3 font-semibold text-forest-600">
                    $4,000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Eligible work includes attic, wall, and basement insulation and air
            sealing. A BPI-certified assessment (blower door test) is required.
            Work must be done by a Residential Registered Vendor. Low-income
            homeowners may also qualify for the free Maine Weatherization
            Assistance Program (WAP) through MaineHousing and local Community
            Action Agencies.
          </p>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-10 border-t border-gray-100">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            How to Apply for Efficiency Maine Heat Pump Rebates
          </h2>
          <div className="space-y-4 mb-6">
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-brand-100 text-brand-700 rounded-full flex items-center justify-center font-bold text-sm">
                1
              </span>
              <div>
                <p className="font-medium text-gray-900">
                  Verify income eligibility (if applicable)
                </p>
                <p className="text-sm text-gray-600">
                  Low- and moderate-income customers must verify eligibility at{" "}
                  <a
                    href="https://www.efficiencymaine.com/income-based-eligibility-verification/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-600 hover:underline"
                  >
                    efficiencymaine.com ↗
                  </a>{" "}
                  before installation. Any-income tier needs no verification.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-brand-100 text-brand-700 rounded-full flex items-center justify-center font-bold text-sm">
                2
              </span>
              <div>
                <p className="font-medium text-gray-900">
                  Hire a Residential Registered Vendor
                </p>
                <p className="text-sm text-gray-600">
                  Find one at{" "}
                  <a
                    href="https://www.efficiencymaine.com/at-home/vendor-locator/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-600 hover:underline"
                  >
                    Efficiency Maine&apos;s vendor locator ↗
                  </a>
                  . Only registered vendors can process rebates.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-brand-100 text-brand-700 rounded-full flex items-center justify-center font-bold text-sm">
                3
              </span>
              <div>
                <p className="font-medium text-gray-900">Complete the upgrade</p>
                <p className="text-sm text-gray-600">
                  Your vendor installs the system per Efficiency Maine&apos;s
                  installation requirements checklist.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-brand-100 text-brand-700 rounded-full flex items-center justify-center font-bold text-sm">
                4
              </span>
              <div>
                <p className="font-medium text-gray-900">Submit the claim form</p>
                <p className="text-sm text-gray-600">
                  Email to hesp@efficiencymaine.com or mail to PO Box 219,
                  Brunswick, ME 04011-0219. Must be submitted within 6 months
                  of project completion.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-brand-100 text-brand-700 rounded-full flex items-center justify-center font-bold text-sm">
                5
              </span>
              <div>
                <p className="font-medium text-gray-900">
                  Receive your rebate
                </p>
                <p className="text-sm text-gray-600">
                  Allow approximately 6 weeks for processing. Low-income rebates
                  are sent directly to the vendor.
                </p>
              </div>
            </div>
          </div>
          <p className="text-gray-600 text-sm">
            Questions? Call Efficiency Maine at{" "}
            <strong>866-376-2463</strong> or email{" "}
            <strong>info@efficiencymaine.com</strong>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 border-t border-gray-100">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqData.map((faq) => (
              <div key={faq.question} className="border-b pb-6">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sources Footer */}
      <section className="py-10 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Sources and Verification
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            All information on this page is verified against official sources.
            Programs and incentives are subject to change without notice.
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            {meIncentive.sources.map((source) => (
              <a
                key={source.url}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-brand-600 hover:underline"
              >
                {source.label} ↗
              </a>
            ))}
          </div>
          <p className="text-xs text-gray-500">
            Last verified: {formattedDate}
          </p>
        </div>
      </section>
    </>
  );
}
