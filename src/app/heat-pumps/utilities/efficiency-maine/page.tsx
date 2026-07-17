// src/app/heat-pumps/utilities/efficiency-maine/page.tsx
//
// Section 2 (Status) is built inline rather than via StatusCard — documented
// decision 2026-07-15 (Xcel pilot): StatusCard's props are typed to the
// state Incentive shape; utility entities render an equivalent inline card.

import Link from "next/link";
import type { Metadata } from "next";
import { utilities } from "@/data/utilities";
import { formatDate } from "@/data/incentives";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Efficiency Maine Heat Pump Rebates 2026: $1,000\u2013$9,000 by Income (Maine) | Home Energy Basics",
  description:
    "Efficiency Maine pays $1,000\u2013$9,000 for heat pumps by income tier, plus a $500 bonus through Dec 2026 and $1,150 for water heaters. Every rebate, explained.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/utilities/efficiency-maine",
  },
  openGraph: {
    title: "Efficiency Maine Heat Pump Rebates 2026",
    description:
      "$1,000\u2013$9,000 heat pump rebates by income, a $500 whole-home bonus, $1,150 water heater rebates, and Green Bank loans \u2014 the complete Efficiency Maine guide for Maine homeowners.",
    url: "https://homeenergybasics.com/heat-pumps/utilities/efficiency-maine",
    type: "article",
    publishedTime: "2026-07-16T00:00:00Z",
    modifiedTime: `${utilities["efficiency-maine"].lastVerified}T00:00:00Z`,
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Efficiency Maine Heat Pump Rebates & Incentives (2026)",
  datePublished: "2026-07-16T00:00:00Z",
  dateModified: `${utilities["efficiency-maine"].lastVerified}T00:00:00Z`,
  author: { "@type": "Organization", name: "Home Energy Basics", url: "https://homeenergybasics.com" },
  publisher: { "@type": "Organization", name: "Home Energy Basics", url: "https://homeenergybasics.com" },
  mainEntityOfPage: "https://homeenergybasics.com/heat-pumps/utilities/efficiency-maine",
};

export default function EfficiencyMainePage() {
  const utility = utilities["efficiency-maine"];
  const formattedDate = formatDate(utility.lastVerified);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What heat pump rebates does Efficiency Maine offer in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Efficiency Maine pays $1,000\u2013$3,000 per rebate-eligible outdoor unit for whole-home mini-split systems (lifetime cap $3,000\u2013$9,000 by income tier) and $3,000\u2013$9,000 lump sum for ducted whole-home systems. A $500 whole-home bonus runs March 1 through December 31, 2026. Heat pump water heaters get a $1,150 mail-in rebate or an instant discount at participating retailers. Geothermal systems receive one-third of project cost up to $3,000. Low-income homeowners can also get $3,000 for one supplemental single-zone heat pump.",
        },
      },
      {
        "@type": "Question",
        name: "Is Efficiency Maine a utility?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Efficiency Maine Trust is the state\u2019s independent efficiency program administrator \u2014 it runs Maine\u2019s statewide energy efficiency and electrification rebates but does not deliver electricity. Its core rebates are funded primarily by utility ratepayers and RGGI (Regional Greenhouse Gas Initiative) proceeds under Triennial Plan VI, supplemented by federal grants for specific initiatives.",
        },
      },
      {
        "@type": "Question",
        name: "Do CMP and Versant customers get the same Efficiency Maine rebates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Efficiency Maine\u2019s rebates are statewide and identical regardless of which electric utility serves your home \u2014 the published eligibility requirements make no reference to CMP, Versant, or any other utility. Eligibility is based on income tier, building type, equipment, and installer, not utility territory.",
        },
      },
      {
        "@type": "Question",
        name: "Can I stack Efficiency Maine rebates with HEAR?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Only if your home qualifies for HEAR, which in Maine is limited to mobile/manufactured homes and new affordable multifamily construction. A low-income household in a qualifying mobile home could receive up to $9,000 from Efficiency Maine plus up to $8,000 from HEAR, for a potential total of $17,000. Standard single-family homes cannot access HEAR rebates.",
        },
      },
      {
        "@type": "Question",
        name: "What income qualifies for Efficiency Maine\u2019s higher rebate tiers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Low income: the homeowner or a household member participates in MaineCare, HEAP, SNAP, or TANF, with eligibility verified before installation. Moderate income: federal Adjusted Gross Income up to $70,000 for individual tax filers or $100,000 for joint filers, verified before installation. Any-income rebates require no verification.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd data={faqJsonLd} />
      <JsonLd data={articleJsonLd} />

      {/* 1. Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="container-narrow">
          <nav className="text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-brand-600">Home</Link>
            {" "}/{" "}
            <Link href="/heat-pumps" className="hover:text-brand-600">Heat Pumps</Link>
            {" "}/ Utilities / Efficiency Maine
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Efficiency Maine Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Efficiency Maine Trust is the state&apos;s independent efficiency program
            administrator, not a utility. It runs every statewide residential heat pump
            rebate in Maine &mdash; <strong>$1,000&ndash;$9,000</strong> per system depending
            on income and system type, plus a <strong>$500</strong> whole-home bonus through
            December 2026, <strong>$1,150</strong> for heat pump water heaters, and Green Bank
            loans up to <strong>$25,000</strong>. This guide covers every Efficiency Maine
            heat pump incentive available in 2026, including whole-home rebates, the
            low-income supplemental rebate, water heaters, geothermal, and loans.
            Here&apos;s what&apos;s actually available.
          </p>
          <p className="text-sm text-gray-500">
            Last verified: {formattedDate}
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Rates and program availability may change after this date.
          </p>
        </div>
      </section>

      {/* 2. Status Card (inline — see file header note) */}
      <section className="py-8">
        <div className="container-narrow">
          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <p className="font-semibold text-green-800 mb-1">
              🟢 Open &mdash; Rebates Active Statewide
            </p>
            <p className="text-sm text-green-900">
              Efficiency Maine heat pump rebates are active and funded under Triennial
              Plan VI. All income tiers are open, the $500 whole-home bonus runs through
              December 31, 2026, and Green Bank loans are available. Program terms state
              that incentives are subject to change or termination.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Short Version */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Short Version</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Whole-Home Heat Pump Rebates</p>
              <p className="text-sm text-green-900">
                $1,000&ndash;$3,000 per outdoor unit (mini-splits) or $3,000&ndash;$9,000
                lump sum (ducted), by income tier. Lifetime cap $3,000&ndash;$9,000 per
                housing unit. Single-wide mobile homes: up to $12,900.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Bonus + Water Heaters + Loans</p>
              <p className="text-sm text-green-900">
                $500 whole-home bonus through Dec 2026. $1,150 heat pump water heater
                rebate (or instant retail discounts). Green Bank loans up to $25,000 &mdash;
                1-year 0% APR ($500 origination fee) or 5.99%&ndash;7.99% fixed.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Total Potential Savings</p>
              <p className="text-sm text-green-900">
                $3,500 (any income) to $9,500+ (below the low-income thresholds).
                HEAR-eligible mobile homes can reach ~$17,000 total incentives.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">✗ Federal Tax Credits Expired</p>
              <p className="text-sm text-red-900">
                Both Section 25C ($2,000 heat pump credit) and Section 25D (30% geothermal
                credit) ended December 31, 2025. Not available for 2026 installations.
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 md:col-span-2">
              <p className="font-semibold text-amber-800 mb-1">⚠ Rebates Require Whole-Home, Single-Zone Systems</p>
              <p className="text-sm text-amber-900">
                Heat pumps must serve as the primary heating system, sized for at least 80%
                of peak heating load. Multi-zone and dual-fuel systems are not rebatable, and
                the home must not have had a natural gas utility account before the upgrade.
                The only partial-system exception is the low-income supplemental rebate
                ($3,000, one unit).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Service Territory */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Territory</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Efficiency Maine administers programs in one territory: the entire state of
            Maine. Rebates are available to eligible homeowners statewide, regardless of
            which electric utility &mdash; CMP, Versant, or a consumer-owned utility &mdash;
            serves the home.
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
                  <tr key={index} className={`border-b ${territory.hasHeatPumpProgram ? "bg-green-50" : ""}`}>
                    <td className="p-3">
                      <Link href={`/heat-pumps/states/${territory.state.toLowerCase()}`} className="text-brand-600 hover:underline">
                        {territory.state === "ME" ? "Maine" : territory.state}
                      </Link>
                    </td>
                    <td className="p-3 font-semibold">
                      {territory.rebateLabel ?? (territory.hasHeatPumpProgram ? "Yes" : "No")}
                    </td>
                    <td className="p-3">{territory.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. Rebate Details */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Rebate Details</h2>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Maine &mdash; Whole-Home Mini-Split Systems (Per Outdoor Unit)
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            For non-ducted whole-home systems, rebates are paid per rebate-eligible outdoor
            unit, with lifetime caps per housing unit. Rebates are applied at point of sale
            through your installer.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Income Tier</th>
                  <th className="text-left p-3 font-semibold">Per Outdoor Unit</th>
                  <th className="text-left p-3 font-semibold">Lifetime Cap</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Low income</td>
                  <td className="p-3 font-semibold">$3,000</td>
                  <td className="p-3 font-semibold">$9,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Moderate income</td>
                  <td className="p-3 font-semibold">$2,000</td>
                  <td className="p-3">$6,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Any income</td>
                  <td className="p-3 font-semibold">$1,000</td>
                  <td className="p-3">$3,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Maine &mdash; Ducted Whole-Home Systems (Per Housing Unit)
          </h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Income Tier</th>
                  <th className="text-left p-3 font-semibold">Lump-Sum Rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Low income</td>
                  <td className="p-3 font-semibold">$9,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Moderate income</td>
                  <td className="p-3 font-semibold">$6,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Any income</td>
                  <td className="p-3 font-semibold">$3,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            Single-wide mobile homes may qualify for up to <strong>$12,900</strong> through
            the Mobile Home Initiative. Mobile homes are not eligible for the $500 bonus below.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            $500 Whole-Home Bonus (March&ndash;December 2026)
          </h3>
          <div className="bg-green-50 border border-green-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-green-800 mb-1">✓ $500 Bonus Active Now</p>
            <p className="text-sm text-green-900">
              An additional <strong>$500 per housing unit</strong> for eligible whole-home
              heat pump upgrades completed, and rebate claims emailed or postmarked, from
              March 1 through December 31, 2026. Stacks on top of standard mini-split or
              ducted rebates.
            </p>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Low-Income Supplemental Heat Pump Rebate
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Low-income homeowners who are not doing a whole-home project can get{" "}
            <strong>$3,000 for one rebate-eligible single-zone heat pump</strong> used as
            supplemental heat. The amount counts toward the housing unit&apos;s $9,000
            lifetime cap. The unit must have rated capacity at the nearest ASHRAE 99.6%
            design temperature, and low-income supplemental claims are paid to the
            Residential Registered Vendor, not the homeowner.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Heat Pump Water Heaters
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Two ways to save: an <strong>instant discount</strong> at participating retailers
            and distributors (amounts vary by retailer), or a <strong>$1,150 mail-in
            rebate</strong> for purchases made without an instant discount. The two cannot be
            combined, and only one heat pump water heater incentive is allowed per
            installation address per calendar year. Equipment must be ENERGY STAR certified;
            DIY installation qualifies, and mail-in claims are due within six months of purchase.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Separately, the <strong>Low Income Water Heater Initiative</strong> provides a{" "}
            <strong>$750 instant rebate</strong> on the unit plus an installation rebate of
            up to <strong>$400</strong>, submitted by a participating plumber, for households
            in qualifying benefit programs.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Geothermal Heat Pumps
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Efficiency Maine covers <strong>one-third of project cost up to $3,000</strong>{" "}
            for qualifying ENERGY STAR geothermal heat pumps, at any income level, with a
            lifetime limit of one geothermal rebate per housing unit. Installation must be
            done by a Residential Registered Vendor for Geothermal Systems, and claims are
            due within six months of project completion.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Income Qualification
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Low income:</strong> the homeowner or a household member participates in
            MaineCare, HEAP, SNAP, or TANF, with eligibility verified before installation.{" "}
            <strong>Moderate income:</strong> federal Adjusted Gross Income (AGI) up to
            $70,000 for individual tax filers or $100,000 for joint filers, verified before
            installation. <strong>Any income:</strong> no verification required.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-green-800 mb-1">✓ Best Candidates for Efficiency Maine Rebates</p>
            <p className="text-sm text-green-900">
              Homeowners heating with oil or propane who can commit to heat pumps as the
              primary heating system. Low- and moderate-income households, who qualify for
              2&ndash;3x the base rebate. Mobile home owners, who have both the richest
              ducted rebates and the only HEAR access in the state.
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed">
            For how these rebates fit alongside HEAR, the NE Heat Pump Accelerator, and
            weatherization incentives, see the full{" "}
            <Link href="/heat-pumps/states/me" className="text-brand-600 hover:underline">
              Maine heat pump rebates guide
            </Link>.
          </p>
        </div>
      </section>

      {/* 6. Equipment Requirements */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Equipment Requirements</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Only <strong>single-zone heat pumps</strong> on Efficiency Maine&apos;s list of
            rebate-eligible heat pumps qualify. Multi-zone systems are not rebatable, but
            their heating capacity can count toward the sizing requirement. Systems must be
            sized for at least <strong>80% of the home&apos;s peak heating load</strong> at
            the ASHRAE 99.6% design temperature (0&deg;F in Portland, &minus;7&deg;F in
            Bangor, &minus;14&deg;F in Caribou), and combined with supplemental heat must
            cover 100% of peak load. The heat pumps must serve as the primary heating system
            throughout the heating season, with any fossil-fuel system reserved for emergency
            backup only. The housing unit must not have had a natural gas utility account
            before the upgrade, and installation must be by a Residential Registered Vendor,
            with claims emailed or postmarked within six months of completion.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="font-semibold text-amber-800 mb-1">⚠ Common Mistake: Dual Fuel and Multi-Zone Systems Are Not Eligible</p>
            <p className="text-sm text-amber-900">
              Heat pump / fossil fuel combination systems (&quot;dual fuel&quot;) do not
              qualify, and multi-zone heat pumps earn no rebate of their own. If you are
              keeping an oil or gas system, it can remain only as emergency backup &mdash;
              its capacity does not count toward the 100% sizing requirement.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Federal Expired (short version) */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Federal Heat Pump Tax Credits Are Not Available in 2026
          </h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <p className="text-red-900 leading-relaxed">
              The <strong>Section 25C</strong> credit (up to <strong>$2,000</strong> for heat
              pumps) and the <strong>Section 25D</strong> credit (30% of geothermal costs)
              both ended <strong>December 31, 2025</strong>. Neither is available for 2026
              installations. Efficiency Maine&apos;s rebates are funded primarily by utility
              ratepayers and RGGI proceeds, so they do not depend on the expired federal
              credits.{" "}
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                Full details on the federal credit expiration &rarr;
              </Link>
            </p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="font-semibold text-blue-800 mb-1">Accelerator Funding Works Automatically in Maine</p>
            <p className="text-sm text-blue-900">
              Maine&apos;s roughly $43 million share of the New England Heat Pump Accelerator
              funds the heat pump water heater instant discounts at participating retailers
              &mdash; there is no separate Accelerator rebate to apply for or stack. If you
              buy a discounted water heater in Maine, you are already using it.
            </p>
          </div>
        </div>
      </section>

      {/* 8. Stacking */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How Efficiency Maine Rebates Stack
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Efficiency Maine rebates and the $500 whole-home bonus stack automatically at
            point of sale. HEAR may stack, subject to each program&apos;s current rules, but
            only for eligible mobile/manufactured homes and new affordable multifamily
            construction. Total incentives cannot exceed project cost.
          </p>
          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Any Income &mdash; 3-Zone Mini-Split System</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Efficiency Maine rebate: $1,000/unit &times; 3 = $3,000</li>
                <li>Whole-home bonus: $500</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$3,500</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Moderate Income &mdash; 3-Zone Mini-Split System</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Efficiency Maine rebate: $2,000/unit &times; 3 = $6,000</li>
                <li>Whole-home bonus: $500</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$6,500</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">Low Income &mdash; 3-Zone Mini-Split System</p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>Efficiency Maine rebate: $3,000/unit &times; 3 = $9,000</li>
                <li>Whole-home bonus: $500</li>
                <li>HEAR (mobile homes only): up to $8,000</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$9,500 (single-family) or ~$17,000 (HEAR-eligible single-wide mobile home, which does not get the $500 bonus)</p>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg p-5">
            <p className="font-semibold text-gray-900 mb-1">What You&apos;ll Actually Pay</p>
            <p className="text-sm text-gray-700">
              A typical 3-zone mini-split system costs <strong>$12,000&ndash;$18,000</strong>{" "}
              installed. After Efficiency Maine rebates:{" "}
              <strong>$8,500&ndash;$14,500 out of pocket</strong> (any income) to{" "}
              <strong>$2,500&ndash;$8,500 out of pocket</strong> (low income). Green Bank
              loans up to $25,000 can spread the remainder &mdash; the 1-year 0% APR option
              carries a $500 origination fee; 5- and 10-year terms run 5.99%&ndash;7.99%.
            </p>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            No Maine state tax credit exists. Weatherization rebates (40&ndash;80% of cost,
            up to $4,000&ndash;$8,000 by income) are a separate Efficiency Maine program and
            can be combined on the same project.
          </p>
        </div>
      </section>

      {/* 9. How to Apply */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How to Apply for Efficiency Maine Rebates
          </h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-gray-900">Verify income eligibility (if applicable)</p>
                <p className="text-sm text-gray-700">
                  Low- and moderate-income customers must verify eligibility at
                  efficiencymaine.com before installation. Any-income tier needs no
                  verification.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900">Hire a Residential Registered Vendor</p>
                <p className="text-sm text-gray-700">
                  Only registered vendors can process rebates. Find one through Efficiency
                  Maine&apos;s vendor locator.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-900">Complete the installation</p>
                <p className="text-sm text-gray-700">
                  Your vendor installs the system per Efficiency Maine&apos;s installation
                  requirements checklist. Heat pump rebates are applied at point of sale.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <p className="font-semibold text-gray-900">Submit the claim form</p>
                <p className="text-sm text-gray-700">
                  Email to hesp@efficiencymaine.com or mail to PO Box 219, Brunswick, ME
                  04011-0219, within 6 months of project completion. Allow approximately
                  6 weeks for processing. Questions: 866-376-2463.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. What to Watch */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Watch</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Program Funding Cycle</p>
              <p className="text-sm text-gray-600 mt-1">
                Efficiency Maine&apos;s published terms state that programs and incentives
                are subject to change or termination. Core funding runs under Triennial
                Plan VI ($529.3 million if fully funded), primarily from ratepayers and
                RGGI proceeds &mdash; not federal tax policy.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">$500 Bonus Expiration</p>
              <p className="text-sm text-gray-600 mt-1">
                The whole-home bonus requires projects completed and claims emailed or
                postmarked by December 31, 2026. No announcement on renewal.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">HEAR Phase 2</p>
              <p className="text-sm text-gray-600 mt-1">
                A second HEAR phase opening rebates to moderate-income households is planned
                under the current Triennial Plan, with no launch date announced. If it
                reaches single-family homes, up to $8,000 in additional stackable rebates
                would open up.
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
            {faqJsonLd.mainEntity.map((faq: { name: string; acceptedAnswer: { text: string } }, index: number) => (
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
              <Link href="/heat-pumps/states/me" className="text-brand-600 hover:underline">
                Maine Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/utilities/xcel-energy" className="text-brand-600 hover:underline">
                Xcel Energy Heat Pump Rebates
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/utilities/smud" className="text-brand-600 hover:underline">
                SMUD Heat Pump Rebates
              </Link>
            </li>
            <li>
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                Federal Heat Pump Tax Credits Ended &mdash; What It Means
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
            {utility.sources.map((source: { label: string; url: string }, index: number) => (
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

      {/* 14. Disclaimer */}
      <section className="py-8">
        <div className="container-narrow">
          <div className="bg-gray-100 rounded-lg p-6">
            <p className="text-gray-500 text-xs leading-relaxed">
              <strong>Disclaimer:</strong> This page covers the main Efficiency Maine heat
              pump incentives available to Maine homeowners in 2026. It does not calculate
              savings, guarantee eligibility, or represent Efficiency Maine Trust or any
              incentive program. Rebate tiers, income thresholds, and eligible product lists
              are subject to periodic updates, and Efficiency Maine&apos;s terms state that
              programs and incentives are subject to change or termination. We verify status
              regularly but programs can change without notice. Always confirm current
              amounts and eligibility with Efficiency Maine and your contractor before
              making decisions.
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
