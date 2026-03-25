// src/app/heat-pumps/states/me/page.tsx

import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Maine Heat Pump Rebates 2026: $1,000–$9,000 + Efficiency Maine | Home Energy Basics",
  description:
    "Efficiency Maine offers $1,000–$9,000 for heat pumps. $500 whole-home bonus through Dec 2026. Federal tax credits ended. Here's every Maine heat pump incentive in 2026.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/me",
  },
  openGraph: {
    title: "Maine Heat Pump Rebates 2026",
    description:
      "Efficiency Maine rebates cover $1,000–$9,000 per system — the complete guide to Maine heat pump incentives after federal credits expired.",
    url: "https://homeenergybasics.com/heat-pumps/states/me",
    type: "article",
  },
};

export default function MainePage() {
  const meIncentive = incentives.ME;
  const formattedDate = formatDate(meIncentive.lastVerified);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What heat pump rebates are available in Maine in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Efficiency Maine offers $1,000–$3,000 per outdoor unit for non-ducted systems (lifetime cap $3,000–$9,000 depending on income) and $3,000–$9,000 lump sum for ducted whole-home systems. A $500 whole-home bonus runs through December 2026. Heat pump water heaters get an $1,100 instant discount or $1,050 mail-in rebate. Geothermal systems receive one-third of cost up to $3,000. Federal 25C/25D tax credits are not available in 2026.",
        },
      },
      {
        "@type": "Question",
        name: "Can I stack Efficiency Maine rebates with HEAR in Maine?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Only if your home qualifies for HEAR — currently limited to mobile/manufactured homes and affordable multifamily. A low-income household in a qualifying mobile home could receive up to $9,000 from Efficiency Maine plus up to $8,000 from HEAR, for a potential total of $17,000. Standard single-family homes cannot access HEAR rebates.",
        },
      },
      {
        "@type": "Question",
        name: "Do cold-climate heat pumps work in Maine winters?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Efficiency Maine requires equipment to have rated heating capacity at ASHRAE 99.6% design temperatures — 0°F for Portland, −7°F for Bangor, and −14°F for Caribou. Over 100,000 heat pumps have been installed statewide. Systems must cover at least 80% of peak heating load, with electric backup covering the remaining 20%.",
        },
      },
      {
        "@type": "Question",
        name: "Who administers Maine&apos;s heat pump rebate programs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Efficiency Maine Trust administers all statewide heat pump rebates. Funding comes from RGGI (Regional Greenhouse Gas Initiative) credits and utility surcharges — not federal dollars — under Triennial Plan VI ($529.3 million). HEAR is funded by $35.7 million in IRA Section 50122 dollars and administered by Efficiency Maine under the Maine Department of Energy Resources.",
        },
      },
      {
        "@type": "Question",
        name: "What equipment qualifies for Efficiency Maine heat pump rebates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Only single-zone heat pumps on Efficiency Maine&apos;s eligible product list qualify for rebates. Multi-zone systems are not rebatable, but their capacity can count toward the 80% heating load requirement. Dual fuel (heat pump plus fossil fuel furnace) systems are not eligible. Equipment must have heating capacity at your location&apos;s ASHRAE 99.6% design temperature.",
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
            {" "}/ Maine
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Maine Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            There are no federal residential heat pump tax credits in 2026.
            Efficiency Maine rebates — ranging from <strong>$1,000–$9,000</strong> per
            system depending on income and system type — are the primary incentive for
            Maine homeowners. A <strong>$500</strong> whole-home bonus runs through
            December 2026. This guide covers all major Maine heat pump incentives
            available in 2026, including Efficiency Maine rebates, HEAR for
            mobile homes, the NE Heat Pump Accelerator, and Home Energy Loans.
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

      {/* 2. Status Card */}
      <section className="py-8">
        <div className="container-narrow">
          <StatusCard incentive={meIncentive} />
        </div>
      </section>

      {/* 3. Short Version */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Short Version</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Efficiency Maine Rebates</p>
              <p className="text-sm text-green-900">
                $1,000–$3,000 per outdoor unit (non-ducted) or $3,000–$9,000 lump sum (ducted whole-home), depending on income tier. Lifetime cap $3,000–$9,000.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Bonus + Water Heaters + Loans</p>
              <p className="text-sm text-green-900">
                $500 whole-home bonus through Dec 2026. $1,050–$1,100 for heat pump water heaters. 0% APR loans up to $25,000 through Efficiency Maine&apos;s Green Bank.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Total Potential Savings</p>
              <p className="text-sm text-green-900">
                $3,500 (any income) to $9,500+ (low income). Full electrification packages with HEAR-eligible mobile homes can reach ~$17,500 total incentives.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">✗ Federal Tax Credits Expired</p>
              <p className="text-sm text-red-900">
                Both Section 25C ($2,000 heat pump credit) and Section 25D (30% geothermal credit) ended December 31, 2025. Not available for 2026 installations.
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 md:col-span-2">
              <p className="font-semibold text-amber-800 mb-1">⚠ HEAR Is Limited to Mobile Homes and Affordable Multifamily</p>
              <p className="text-sm text-amber-900">
                Maine&apos;s Home Electrification and Appliance Rebates (HEAR) program is only partially active. Standard single-family homeowners are not eligible. No expansion to single-family has been announced.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Federal Expired */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Federal Heat Pump Tax Credits Are Not Available in 2026
          </h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <p className="text-red-900 leading-relaxed">
              The <strong>Section 25C</strong> Energy Efficient Home Improvement Credit
              and the <strong>Section 25D</strong> Residential Clean Energy Credit apply
              only to qualifying property placed in service through <strong>December 31, 2025</strong>.
              This change was part of the One Big Beautiful Bill Act (OBBBA) signed July 4, 2025.
              Previously, homeowners could claim up to <strong>$2,000</strong> for a qualifying
              heat pump under 25C, or 30% of geothermal system costs (no cap) under 25D.
              Neither credit is available for 2026 installations.{" "}
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                Full details on the federal credit expiration →
              </Link>
            </p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="font-semibold text-blue-800 mb-1">Maine&apos;s Funding Is Independent of Federal Policy</p>
            <p className="text-sm text-blue-900">
              Unlike states that depend on IRA dollars, Efficiency Maine&apos;s rebates are funded by RGGI (Regional Greenhouse Gas Initiative) credits and utility surcharges — sources independent of federal policy changes. Efficiency Maine executive director Michael Stoddard has confirmed no plans to modify rebate levels.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Efficiency Maine Rebates (Primary Program) */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Efficiency Maine Heat Pump Rebates
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Efficiency Maine Trust administers all statewide heat pump rebates under Triennial Plan VI
            (<strong>$529.3 million</strong>). Over 100,000 heat pumps have been installed statewide.
            Rebates are applied at point of sale through your installer — you pay the reduced price,
            not the full amount.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Non-Ducted (Mini-Split) — Per Outdoor Unit
          </h3>
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
            Ducted Whole-Home — Per Housing Unit
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ducted systems receive a single lump-sum rebate. Requirements are stricter: the system
            must be sized for <strong>100% of peak heating load</strong>, and all fossil fuel forced
            hot air furnaces must be <strong>physically removed</strong>.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Income Tier</th>
                  <th className="text-left p-3 font-semibold">Rebate (Per Housing Unit)</th>
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
          <p className="text-gray-700 leading-relaxed mb-4">
            Single-wide mobile homes may qualify for up to <strong>$12,900</strong> in ducted rebates.
            The Registered Vendor must also assess and mitigate frozen pipe risk as part of the installation.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            $500 Whole-Home Heat Pump Bonus (March–December 2026)
          </h3>
          <div className="bg-green-50 border border-green-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-green-800 mb-1">✓ $500 Bonus Active Now</p>
            <p className="text-sm text-green-900">
              An additional <strong>$500</strong> for eligible whole-home heat pump upgrades completed,
              and rebate claims emailed or postmarked, between March 1 and December 31, 2026.
              Stacks on top of standard non-ducted or ducted rebates. Single-wide mobile homes are not eligible.
            </p>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Income Qualification
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Low income:</strong> Homeowner or household member participates in MaineCare, HEAP,
            SNAP, or TANF. Must{" "}
            <a
              href="https://www.efficiencymaine.com/income-based-eligibility-verification/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              verify eligibility
            </a>{" "}
            before installation.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Moderate income:</strong> Adjusted Gross Income (AGI) up to $70,000 for individual
            filers, or $100,000 for joint filers. Must verify eligibility before installation.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Any income:</strong> No income verification required. Available to all Maine homeowners.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Equipment and Sizing Requirements
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Only <strong>single-zone heat pumps</strong> on Efficiency Maine&apos;s{" "}
            <a
              href="https://www.efficiencymaine.com/docs/Rebate-Eligible-Heat-Pumps.xlsx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              eligible product list
            </a>{" "}
            qualify for rebates. Multi-zone systems are not rebatable, but their heating capacity can
            count toward the total. Heat pumps must be sized for at least <strong>80% of the
            home&apos;s peak heating load</strong> at ASHRAE 99.6% design temperature. Combined with
            supplemental electric heat, the system must cover 100% of peak load.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-amber-800 mb-1">⚠ Common Mistake: Dual Fuel Systems Are Not Eligible</p>
            <p className="text-sm text-amber-900">
              Dual fuel (heat pump + fossil fuel furnace) systems do not qualify for Efficiency Maine rebates. Primary fossil-fuel systems can remain only as emergency backup — their capacity does not count toward the 100% requirement. Plan for full electric backup if keeping an oil or gas system.
            </p>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Heat Pump Water Heaters
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Efficiency Maine offers two HPWH incentive tracks. The <strong>$1,100 instant discount</strong> is
            applied at point of purchase at participating retailers (Home Depot, Lowe&apos;s, Granite Group,
            Selco, and Winsupply locations) through March 31, 2026. The <strong>$1,050 mail-in rebate</strong> has
            no stated end date. Equipment must be ENERGY STAR certified — any brand and tank size. DIY
            installation qualifies. Only one HPWH incentive per installation address per calendar year.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Geothermal Heat Pump Rebates
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Efficiency Maine offers a geothermal rebate of <strong>one-third of project cost up to
            $3,000</strong>, with a lifetime limit of one geothermal rebate per housing unit. No
            income-based tiers — the $3,000 maximum applies to all income levels. Equipment must be
            ENERGY STAR certified and installation must be done by a Residential Registered Vendor
            for Geothermal Systems. With the federal Section 25D credit gone, this is the sole
            remaining incentive for residential geothermal in Maine.
          </p>
        </div>
      </section>

      {/* 6. HEAR Status */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            HEAR Program Status (Home Electrification and Appliance Rebates)
          </h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-amber-800 mb-1">⚠ Partially Active — Limited Eligibility</p>
            <p className="text-sm text-amber-900">
              HEAR is available only for mobile/manufactured homes and new affordable multifamily construction. Standard single-family homes are not eligible. No expansion to single-family has been announced.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Maine&apos;s HEAR program is funded by <strong>$35.7 million</strong> in IRA Section 50122
            dollars and administered by Efficiency Maine Trust under the Maine Department of Energy
            Resources. It is deployed in phases, starting with the most energy-burdened housing types.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            For eligible homes, HEAR provides up to <strong>$8,000</strong> per unit for heat pump
            systems, plus up to <strong>$1,750</strong> for heat pump water heaters,
            <strong> $4,000</strong> for electric panel upgrades, and <strong>$2,500</strong> for
            wiring — capped at <strong>$14,000 per household</strong>. Low-income households
            (≤80% of Area Median Income) receive 100% of costs. HEAR funding runs through September
            2031 or until exhausted.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            New England Heat Pump Accelerator ($450M, 5-State)
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The NE Heat Pump Accelerator is a collaboration between Connecticut, Maine, Massachusetts,
            New Hampshire, and Rhode Island, funded by <strong>$450 million</strong> in EPA Climate
            Pollution Reduction Grants. It aims to install 580,000 residential heat pumps region-wide
            by 2030. The program works through supply-chain incentives to equipment distributors —
            not direct-to-consumer rebates — and is expected to reduce upfront costs by an estimated
            <strong> $700 per system</strong>. VEIC was selected as Regional Implementer.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Accelerator benefits can stack with Efficiency Maine rebates but likely cannot stack with
            federal HEAR rebates.
          </p>
        </div>
      </section>

      {/* 7. Home Energy Loans */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Efficiency Maine Home Energy Loans
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Efficiency Maine&apos;s Green Bank offers unsecured loans — no lien on property or
            equipment — with no application fee or prepayment penalty. Funds are disbursed directly
            to the Registered Vendor after project completion.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Loan Type</th>
                  <th className="text-left p-3 font-semibold">Rate</th>
                  <th className="text-left p-3 font-semibold">Term</th>
                  <th className="text-left p-3 font-semibold">Max</th>
                  <th className="text-left p-3 font-semibold">Min FICO</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">1-Year 0% APR</td>
                  <td className="p-3 font-semibold">0%</td>
                  <td className="p-3">1 year</td>
                  <td className="p-3">$25,000</td>
                  <td className="p-3">620</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">5-Year Fixed</td>
                  <td className="p-3 font-semibold">5.99%</td>
                  <td className="p-3">5 years</td>
                  <td className="p-3">$25,000</td>
                  <td className="p-3">620</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">10-Year Fixed</td>
                  <td className="p-3 font-semibold">7.99%</td>
                  <td className="p-3">10 years</td>
                  <td className="p-3">$25,000</td>
                  <td className="p-3">620</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Income-Based 10-Year</td>
                  <td className="p-3 font-semibold">5.99%</td>
                  <td className="p-3">10 years</td>
                  <td className="p-3">$7,500</td>
                  <td className="p-3">580</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Projects must be installed within 120 days of Notice to Proceed. Eligible upgrades
            include heat pumps (not dual fuel), electrical panel upgrades required for heat pump
            projects, insulation, air sealing, and health/safety improvements up to 25% of the
            financed amount.
          </p>
        </div>
      </section>

      {/* 9. Stacking */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How Maine Heat Pump Incentives Stack
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Efficiency Maine rebates and the $500 whole-home bonus stack automatically. HEAR stacks
            only for eligible mobile/manufactured homes. The NE Heat Pump Accelerator supply-chain
            discount stacks with Efficiency Maine but likely not with HEAR. Total incentives cannot
            exceed project cost.
          </p>
          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Any Income — 3-Zone Mini-Split System</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Efficiency Maine rebate: $1,000/unit × 3 = $3,000</li>
                <li>Whole-home bonus: $500</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$3,500</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Moderate Income — 3-Zone Mini-Split System</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Efficiency Maine rebate: $2,000/unit × 3 = $6,000</li>
                <li>Whole-home bonus: $500</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$6,500</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">Low Income — 3-Zone Mini-Split System</p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>Efficiency Maine rebate: $3,000/unit × 3 = $9,000</li>
                <li>Whole-home bonus: $500</li>
                <li>HEAR (mobile homes only): up to $8,000</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$9,500 (single-family) or ~$17,500 (HEAR-eligible mobile home)</p>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg p-5">
            <p className="font-semibold text-gray-900 mb-1">What You&apos;ll Actually Pay</p>
            <p className="text-sm text-gray-700">
              A typical 3-zone mini-split system costs <strong>$12,000–$18,000</strong> installed.
              After Efficiency Maine rebates: <strong>$8,500–$14,500</strong> out of pocket (any
              income) to <strong>$2,500–$8,500</strong> out of pocket (low income). HEAR-eligible
              mobile home owners may pay close to $0. Financing through the 0% APR loan can
              eliminate the upfront cost entirely.
            </p>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Municipal ARPA-funded programs (South Portland, Portland, Auburn, Bangor) may provide
            additional stacking where available. No state tax credit is available in Maine.
          </p>
        </div>
      </section>

      {/* 10. Weatherization */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Insulation and Weatherization Rebates
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Weatherizing before installing heat pumps reduces the required system size and maximizes
            efficiency. Efficiency Maine offers insulation rebates that can be combined with heat
            pump rebates and Home Energy Loans.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Income Tier</th>
                  <th className="text-left p-3 font-semibold">Rebate Covers</th>
                  <th className="text-left p-3 font-semibold">Max Per Building</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Low income</td>
                  <td className="p-3">80% of cost</td>
                  <td className="p-3 font-semibold">$8,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Moderate income</td>
                  <td className="p-3">60% of cost</td>
                  <td className="p-3 font-semibold">$6,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Any income</td>
                  <td className="p-3">40% of cost</td>
                  <td className="p-3 font-semibold">$4,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Eligible work includes attic, wall, and basement insulation and air sealing. A
            BPI-certified assessment (blower door test) is required. Work must be done by a
            Residential Registered Vendor. Low-income homeowners may also qualify for the free
            Maine Weatherization Assistance Program (WAP) through MaineHousing and local Community
            Action Agencies.
          </p>
        </div>
      </section>

      {/* 11. Climate */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Climate Context: Heat Pumps in Maine Winters
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Maine is one of the coldest states to adopt heat pumps at scale. Efficiency Maine
            requires all rebated systems to have rated heating capacity at ASHRAE 99.6% design
            temperatures. Cold-climate heat pumps with rated output at these temperatures are
            standard for all rebated installations.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">City</th>
                  <th className="text-left p-3 font-semibold">ASHRAE 99.6% Design Temp</th>
                  <th className="text-left p-3 font-semibold">Primary Heating Fuel Displaced</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Portland</td>
                  <td className="p-3 font-semibold">0°F</td>
                  <td className="p-3">Heating oil</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Bangor</td>
                  <td className="p-3 font-semibold">−7°F</td>
                  <td className="p-3">Heating oil</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Caribou</td>
                  <td className="p-3 font-semibold">−14°F</td>
                  <td className="p-3">Heating oil / propane</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-green-800 mb-1">✓ Best Candidates for Heat Pumps in Maine</p>
            <p className="text-sm text-green-900">
              Homeowners heating with oil or propane (Maine is the most oil-dependent state for home heating). Homes that can meet the 80% heating load requirement with single-zone units. Low- and moderate-income households who qualify for the highest rebate tiers. Homeowners willing to weatherize first to reduce system sizing requirements.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Maine&apos;s high oil dependence means heat pump conversions often produce significant
            fuel cost savings. For information on pairing heat pumps with home battery storage, see
            our{" "}
            <Link href="/battery" className="text-brand-600 hover:underline">
              guide to home batteries in 2026
            </Link>.
          </p>
        </div>
      </section>

      {/* 12. How to Apply */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How to Apply for Efficiency Maine Heat Pump Rebates
          </h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-gray-900">Verify income eligibility (if applicable)</p>
                <p className="text-sm text-gray-700">
                  Low- and moderate-income customers must verify eligibility at{" "}
                  <a
                    href="https://www.efficiencymaine.com/income-based-eligibility-verification/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-600 hover:underline"
                  >
                    efficiencymaine.com
                  </a>{" "}
                  before installation. Any-income tier needs no verification.
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
                  Find one at{" "}
                  <a
                    href="https://www.efficiencymaine.com/at-home/vendor-locator/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-600 hover:underline"
                  >
                    Efficiency Maine&apos;s vendor locator
                  </a>
                  . Only registered vendors can process rebates.
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
                  requirements checklist. Rebate is applied at point of sale.
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
                  04011-0219. Must be submitted within 6 months of project completion. Allow
                  approximately 6 weeks for processing.
                </p>
              </div>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mt-6">
            Questions? Call Efficiency Maine at <strong>866-376-2463</strong> or
            email <strong>info@efficiencymaine.com</strong>.
          </p>
        </div>
      </section>

      {/* 13. What to Watch */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Watch</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">IRA Funding Runway</p>
              <p className="text-sm text-gray-600 mt-1">
                HEAR funding ($35.7M) runs through September 2031 but could be affected by federal
                policy changes. Efficiency Maine&apos;s core rebates are independently funded through
                RGGI and utility surcharges and are not at risk from federal budget decisions.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">HEAR Expansion to Single-Family</p>
              <p className="text-sm text-gray-600 mt-1">
                No date has been announced for expanding HEAR beyond mobile homes and affordable
                multifamily. If expansion happens, single-family homeowners could access up to
                $8,000 in additional rebates that stack with Efficiency Maine.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">$500 Bonus Expiration</p>
              <p className="text-sm text-gray-600 mt-1">
                The $500 whole-home bonus expires December 31, 2026. Claims must be emailed or
                postmarked by that date. No announcement on whether it will be renewed.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">HPWH Instant Discount Deadline</p>
              <p className="text-sm text-gray-600 mt-1">
                The $1,100 instant discount at participating retailers expires March 31, 2026.
                The $1,050 mail-in rebate has no stated end date but is subject to change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 14. FAQ */}
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

      {/* 15. See Also */}
      <section className="py-8 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-3">See also</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/heat-pumps/states/nh" className="text-brand-600 hover:underline">
                New Hampshire Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/vt" className="text-brand-600 hover:underline">
                Vermont Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/ma" className="text-brand-600 hover:underline">
                Massachusetts Heat Pump Rebates &amp; Incentives
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
          </ul>
        </div>
      </section>

      {/* 16. Sources */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="space-y-2 text-sm">
            {meIncentive.sources.map((source: { label: string; url: string }, index: number) => (
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
              <strong>Disclaimer:</strong> This page covers the main statewide
              and IRA heat pump incentives available to Maine homeowners in 2026.
              It does not calculate savings, guarantee eligibility, or represent
              any incentive program. Efficiency Maine rebate tiers, income
              thresholds, and eligible product lists are subject to periodic
              updates. We verify status regularly but programs can change without
              notice. Always confirm current amounts and eligibility with
              Efficiency Maine Trust and your contractor before making decisions.
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
