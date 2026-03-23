// src/app/heat-pumps/states/nc/page.tsx

import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "North Carolina Heat Pump Rebates & Incentives (2026) | Energy Saver NC + Duke Energy | Home Energy Basics",
  description:
    "Energy Saver NC offers up to $8,000 through HEAR or $16,000 through HOMES. Duke Energy adds $500–$1,000. Federal credits ended. Every NC heat pump incentive in 2026.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/nc",
  },
  openGraph: {
    title: "North Carolina Heat Pump Rebates 2026",
    description:
      "Energy Saver NC up to $8,000 HEAR or $16,000 HOMES, Duke Energy rebates up to $1,000 — the complete guide to North Carolina heat pump incentives after federal credits expired.",
    url: "https://homeenergybasics.com/heat-pumps/states/nc",
    type: "article",
  },
};

export default function NorthCarolinaPage() {
  const ncIncentive = incentives.NC;
  const formattedDate = formatDate(ncIncentive.lastVerified);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What heat pump rebates are available in North Carolina in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "North Carolina heat pump rebates in 2026 come from three main sources: Energy Saver NC HEAR rebates up to $8,000 for a heat pump (for households below 150% of Area Median Income), HOMES whole-home rebates up to $16,000 for the lowest-income tier, and Duke Energy utility rebates of $500\u2013$1,000 for qualifying equipment upgrades. Federal tax credits under Sections 25C and 25D expired December 31, 2025.",
        },
      },
      {
        "@type": "Question",
        name: "Can I stack Energy Saver NC rebates with Duke Energy rebates in North Carolina?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Duke Energy utility rebates can stack with either HEAR or HOMES rebates from Energy Saver NC. The only restriction is that combined incentives cannot exceed the total project cost, and you cannot receive both HEAR and HOMES for the same individual upgrade. In the best case, a household below 80% AMI could reduce out-of-pocket costs to near zero by combining HOMES with HEAR for different appliances plus Duke Energy rebates.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a cold-climate heat pump in North Carolina?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on where you live. In the Piedmont and coastal areas (Charlotte, Raleigh, Wilmington), standard inverter-driven heat pumps handle winter conditions well, with design temperatures of 17\u201322\u00b0F. In the western mountains (Asheville, Boone), cold-climate heat pumps are strongly recommended. Asheville\u2019s design temperature drops to 13\u201314\u00b0F, and higher elevations can see single digits. Contractors recommend cold-climate-rated models above 2,500 feet elevation.",
        },
      },
      {
        "@type": "Question",
        name: "Who administers North Carolina\u2019s Energy Saver NC program?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Energy Saver NC is administered by the North Carolina Department of Environmental Quality (NC DEQ) State Energy Office, with contractor APTIM managing day-to-day operations. The program launched January 16, 2025, and became available in all 100 North Carolina counties as of February 10, 2026. Applications are processed through energysavernc.org on a first-come, first-served basis.",
        },
      },
      {
        "@type": "Question",
        name: "Does HEAR cover replacing an existing heat pump in North Carolina?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. The HEAR program only covers upgrading from a non-heat-pump system to a heat pump. If you already have a heat pump and need to replace it, HEAR does not apply. You may still qualify for HOMES rebates (which are based on whole-home energy savings, not system type) or Duke Energy utility rebates of $500 for a qualifying heat pump upgrade.",
        },
      },
    ],
  };

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
            {" "}/ North Carolina
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            North Carolina heat pump rebates and incentives in 2026
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            North Carolina still has some of the strongest heat pump incentives in the country. Energy Saver NC is now live statewide and offers up to <strong>$8,000</strong> for a qualifying heat pump through HEAR or up to <strong>$16,000</strong> in whole-home rebates through HOMES for income-eligible households. Duke Energy and some local utilities add smaller rebates on top, bringing total savings even higher. This guide covers all major North Carolina heat pump incentives available in 2026, including Energy Saver NC HEAR and HOMES, Duke Energy, Dominion Energy, electric cooperatives, and municipal utility programs. Here&apos;s what&apos;s actually available.
          </p>
          <p className="text-sm text-gray-500">
            Last verified: {formattedDate}
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Rates and program availability may change after this date.
          </p>
        </div>
      </section>

      {/* 2. STATUS CARD */}
      <section className="py-8">
        <div className="container-narrow">
          <StatusCard incentive={ncIncentive} />
        </div>
      </section>

      {/* 3. SHORT VERSION */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The short version</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Energy Saver NC HEAR: up to $8,000</p>
              <p className="text-sm text-green-900">Home Electrification and Appliance Rebates cover up to $8,000 for a heat pump, plus up to $1,750 for a heat pump water heater. Available to households below 150% of Area Median Income (AMI) — not available above 150% AMI. Instant point-of-sale discount.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Duke Energy rebates: $500–$1,000</p>
              <p className="text-sm text-green-900">Both Duke Energy Progress and Duke Energy Carolinas offer $500–$1,000 for qualifying heat pump installations, plus $500–$800 for heat pump water heaters. Available to all Duke customers regardless of income.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Total potential savings: $9,000–$14,500+ (typical stacked scenarios)</p>
              <p className="text-sm text-green-900">$9,000 (80–150% AMI) to $14,500+ (below 80% AMI). Full electrification packages through HOMES can reach ~$16,000 total incentives for the lowest-income households.</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">✗ Federal tax credits expired</p>
              <p className="text-sm text-red-900">Both Section 25C (up to $2,000) and Section 25D (30% of costs) expired December 31, 2025. No federal tax credit is available for heat pumps installed in 2026.</p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 md:col-span-2">
              <p className="font-semibold text-amber-800 mb-1">⚠ HEAR is only for switching to a heat pump — not replacing one</p>
              <p className="text-sm text-amber-900">The HEAR heat pump rebate only applies when upgrading from a non-heat-pump system (like electric resistance, gas furnace, or propane). If you already have a heat pump and need to replace it, HEAR does not cover the heat pump itself. You may still qualify for HOMES whole-home rebates or Duke Energy&apos;s $500 upgrade rebate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEDERAL EXPIRED */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Federal tax credits have ended</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <p className="text-red-900 leading-relaxed">
              <strong>Both Section 25C and Section 25D federal tax credits expired on December 31, 2025.</strong> The &quot;One Big Beautiful Bill&quot; Act (signed July 4, 2025) accelerated their termination. Equipment must have been installed by that date to qualify — a heat pump purchased in 2025 but installed in 2026 does not qualify. There is no federal tax credit for residential heat pump installations in 2026. For details, see our{" "}
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                federal heat pump tax credit explainer
              </Link>.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            North Carolina has no state-level tax credit for heat pumps either. The state&apos;s Renewable Energy Tax Credit expired in 2016 and has not been reinstated. The incentives that remain are all rebate programs, primarily through Energy Saver NC and utility companies.
          </p>
        </div>
      </section>

      {/* 5. HEAR / PRIMARY PROGRAM */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Energy Saver NC: Home Electrification and Appliance Rebates (HEAR)</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            HEAR is the centerpiece of North Carolina&apos;s heat pump incentive landscape. Administered by NC DEQ&apos;s State Energy Office through contractor APTIM, the program launched January 2025 and is now available in <strong>all 100 counties</strong>. It&apos;s funded by $208 million in IRA funds on a first-come, first-served basis through 2031 or until exhausted.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Income eligibility</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Tier</th>
                  <th className="text-left p-3 font-semibold">Household income</th>
                  <th className="text-left p-3 font-semibold">Coverage</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Tier 1</td>
                  <td className="p-3">Below 80% of Area Median Income (AMI)</td>
                  <td className="p-3 font-semibold">Up to 100% of costs</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Tier 2</td>
                  <td className="p-3">80–150% AMI</td>
                  <td className="p-3 font-semibold">Up to 50% of costs</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Above 150% AMI</td>
                  <td className="p-3">Above 150% AMI</td>
                  <td className="p-3 text-gray-500">Not eligible</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Enrollment in federal assistance programs (SNAP, LIEAP, Medicaid) auto-qualifies a household for Tier 1.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Maximum HEAR rebate amounts (up to $14,000 total per dwelling)</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Upgrade</th>
                  <th className="text-left p-3 font-semibold">Maximum rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">ENERGY STAR heat pump (space heating/cooling)</td>
                  <td className="p-3 font-semibold">$8,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Electrical panel upgrade</td>
                  <td className="p-3 font-semibold">$4,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Electrical wiring</td>
                  <td className="p-3 font-semibold">$2,500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">ENERGY STAR heat pump water heater</td>
                  <td className="p-3 font-semibold">$1,750</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Insulation, air sealing, ventilation</td>
                  <td className="p-3 font-semibold">$1,600</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">ENERGY STAR heat pump dryer</td>
                  <td className="p-3 font-semibold">$840</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">ENERGY STAR electric range or cooktop</td>
                  <td className="p-3 font-semibold">$840</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="font-semibold text-blue-800 mb-1">HEAR is an instant point-of-sale discount</p>
            <p className="text-sm text-blue-900">Unlike most rebate programs, HEAR applies the discount at the time of purchase — you do not pay the full cost and wait for reimbursement. All work must be performed by an Energy Saver NC Registered Contractor. One rebate per appliance type per dwelling.</p>
          </div>
        </div>
      </section>

      {/* 6. HOMES / SECONDARY PROGRAM */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Energy Saver NC: Homeowners Managing Efficiency Savings (HOMES)</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            HOMES provides rebates based on modeled whole-home energy savings, verified through a free energy assessment. Unlike HEAR&apos;s per-appliance approach, HOMES rewards the total energy reduction from your project.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Tier</th>
                  <th className="text-left p-3 font-semibold">Income level</th>
                  <th className="text-left p-3 font-semibold">20–34% savings</th>
                  <th className="text-left p-3 font-semibold">35%+ savings</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Tier 1</td>
                  <td className="p-3">Below 80% AMI</td>
                  <td className="p-3 font-semibold">Up to $16,000</td>
                  <td className="p-3 font-semibold">Up to $16,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Tier 2</td>
                  <td className="p-3">80–150% AMI</td>
                  <td className="p-3 font-semibold">Up to $2,000</td>
                  <td className="p-3 font-semibold">Up to $4,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="font-semibold text-amber-800 mb-1">⚠ You cannot receive both HEAR and HOMES for the same upgrade</p>
            <p className="text-sm text-amber-900">A household can participate in both programs, but not for the same piece of equipment. The optimal strategy for low-income households: use HOMES for the heat pump (higher $16,000 cap) and HEAR for the water heater and other appliances.</p>
          </div>
        </div>
      </section>

      {/* 7. UTILITY PROGRAMS */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Utility rebates</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Utility rebates in North Carolina are available to all customers regardless of income. They&apos;re smaller than Energy Saver NC rebates but stack on top of them.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Duke Energy Progress and Duke Energy Carolinas</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Both Duke utilities operate the Home Energy Improvement (HEI) Rebate Program with identical amounts. A free Home Energy Check within the prior 24 months is required before applying.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Scenario</th>
                  <th className="text-left p-3 font-semibold">Efficiency requirement</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Strip heat → heat pump (high eff.)</td>
                  <td className="p-3">15.2 SEER2 / 7.5 HSPF2</td>
                  <td className="p-3 font-semibold">$600</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Strip heat → heat pump (higher eff.)</td>
                  <td className="p-3">16.0 SEER2 / 7.5 HSPF2</td>
                  <td className="p-3 font-semibold">$1,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Upgrade existing heat pump</td>
                  <td className="p-3">15.2 SEER2 / 7.5 HSPF2</td>
                  <td className="p-3 font-semibold">$500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Geothermal heat pump</td>
                  <td className="p-3">17+ EER2 with ECM</td>
                  <td className="p-3 font-semibold">$800</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Heat pump water heater rebates: <strong>$500</strong> for 50-gallon or <strong>$800</strong> for 80-gallon (ENERGY STAR, UEF 3.3+). Both condensing unit and air handler must be replaced simultaneously. Mini-splits and ductless systems are not eligible for Duke&apos;s HVAC rebates. Rebates are paid via prepaid Mastercard.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Dominion Energy North Carolina</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Dominion serves northeastern NC (Outer Banks, Elizabeth City area) and has a more limited program. Dominion NC offers <strong>no residential air-source heat pump purchase rebate</strong> (unlike Duke Energy). Heat pump water heater rebates are available: <strong>$250</strong> for 40–59 gallon and <strong>$400</strong> for 60+ gallon (ENERGY STAR, replacing existing electric water heater).
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Electric cooperatives and municipal utilities</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            North Carolina&apos;s 26 electric cooperatives each set their own programs. Highlights: Piedmont Electric offers up to <strong>$600</strong> per heat pump system. Blue Ridge Energy offers <strong>$150</strong> for an ASHP (15.2+ SEER2) or <strong>$250</strong> for geothermal. Municipal programs vary — Fayetteville PWC offers <strong>$250–$400</strong> tiered by efficiency, Concord offers <strong>$400</strong> flat, and several smaller towns offer <strong>$300–$500</strong>. Check with your specific utility for current amounts.
          </p>
        </div>
      </section>

      {/* 8. LOCAL — Asheville ecosystem */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Local programs: Asheville and Buncombe County</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Most NC cities rely entirely on Duke Energy and Energy Saver NC — no separate city programs. The exception is the Asheville area: the <strong>Electrify Asheville-Buncombe County (Electrify ABC)</strong> initiative provides a free navigator service to help homeowners stack rebates and connect with approved contractors. The NC Clean Energy Fund also offers below-market-interest loans for Buncombe County electrification projects.
          </p>
        </div>
      </section>

      {/* 9. STACKING */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How programs stack</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            NC DEQ confirms that utility rebates can stack with Energy Saver NC rebates. The only restriction: combined incentives cannot exceed the total project cost, and you cannot receive both HEAR and HOMES for the same upgrade. Households above 150% AMI are limited to utility rebates only.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 150% AMI — ducted heat pump + HPWH (~$15,500 project)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Energy Saver NC: $0 (not eligible)</li>
                <li>Duke Energy — HP upgrade rebate: $500</li>
                <li>Duke Energy — 80-gal HPWH rebate: $800</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$1,300</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">80–150% AMI — ducted heat pump + HPWH (~$15,500 project)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>HEAR — heat pump (50% of $12,000, capped at $8,000): $6,000</li>
                <li>HEAR — HPWH (50% of $3,500, capped at $1,750): $1,750</li>
                <li>Duke Energy — HP upgrade rebate: $500</li>
                <li>Duke Energy — 80-gal HPWH rebate: $800</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$9,050</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">Below 80% AMI — ducted heat pump + HPWH (~$15,500 project)</p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>HOMES — heat pump (100% of $12,000 costs): $12,000</li>
                <li>HEAR — HPWH (100% of $3,500, capped at $1,750): $1,750</li>
                <li>Duke Energy — HPWH rebate: $800</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$14,550</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-5">
            <p className="font-semibold text-gray-900 mb-1">What you&apos;ll actually pay</p>
            <p className="text-sm text-gray-700">
              For a typical ~$15,500 heat pump + water heater project: <strong>~$14,000 out of pocket</strong> for households above 150% AMI, <strong>$5,950–$6,450</strong> for 80–150% AMI, or as little as <strong>$950 or less</strong> for households below 80% AMI. Adding insulation and air sealing to the project scope can push the lowest-income tier to $0 out of pocket through HOMES.
            </p>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            North Carolina has no state tax credit for heat pumps. No state loan program directly reduces the purchase price, though Carolina SURE and Duke Energy&apos;s Improve &amp; Save on-bill financing can help with the remaining balance.
          </p>
        </div>
      </section>

      {/* 10. WEATHERIZATION */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Weatherization and financing</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            North Carolina&apos;s Weatherization Assistance Program (WAP) serves households at or below 200% of the Federal Poverty Level with free energy audits, insulation, air sealing, and HVAC repair or replacement. Check current availability — some WAP operations were paused in late 2025 due to federal budget uncertainty.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Financing options</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Carolina SURE</strong> (via Clean Energy Fund of the Carolinas): income-based approval with no credit score requirement and no closing costs. <strong>Duke Energy Improve &amp; Save</strong>: on-bill financing at 7.33% over 10 years with no credit check, available to all Duke residential customers.
          </p>
        </div>
      </section>

      {/* 11. CLIMATE */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Climate context: mountains vs. Piedmont vs. coast</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            North Carolina spans IECC Climate Zones 3A, 4A, and 5A, creating meaningfully different heat pump requirements from coast to mountains. Standard heat pumps work well for most of the state, but western mountain residents should invest in cold-climate equipment.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">City</th>
                  <th className="text-left p-3 font-semibold">Design temp (99%)</th>
                  <th className="text-left p-3 font-semibold">IECC zone</th>
                  <th className="text-left p-3 font-semibold">Recommendation</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Wilmington</td>
                  <td className="p-3 font-semibold">25°F</td>
                  <td className="p-3">3A</td>
                  <td className="p-3">Standard ASHP</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Raleigh</td>
                  <td className="p-3 font-semibold">19–20°F</td>
                  <td className="p-3">4A</td>
                  <td className="p-3">Standard ASHP</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Charlotte</td>
                  <td className="p-3 font-semibold">20–22°F</td>
                  <td className="p-3">3A/4A</td>
                  <td className="p-3">Standard ASHP</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Asheville</td>
                  <td className="p-3 font-semibold">13–14°F</td>
                  <td className="p-3">4A</td>
                  <td className="p-3">Cold-climate ASHP recommended</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Boone / Spruce Pine</td>
                  <td className="p-3 font-semibold">5–10°F</td>
                  <td className="p-3">5A</td>
                  <td className="p-3">Cold-climate ASHP essential</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-green-800 mb-1">✓ Best candidates for a heat pump in North Carolina</p>
            <p className="text-sm text-green-900">
              Homeowners with electric resistance strip heat (covers a large share of NC homes). Propane or fuel oil users in rural and mountain areas — volatile fuel prices make heat pumps especially cost-effective. Households below 150% AMI in any part of the state, where Energy Saver NC can cover 50–100% of costs. Manufactured home residents in eastern NC, where electric resistance heating is common and energy burdens are high.
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed">
            North Carolina&apos;s residential heating is already about 66% electric — but much of that is inefficient electric resistance. Switching to a heat pump can cut electricity use for heating by 50% or more while also providing air conditioning. For mountain residents considering home <Link href="/battery" className="text-brand-600 hover:underline">battery storage</Link>, a heat pump paired with solar and battery can significantly reduce dependence on grid power during winter peaks.
          </p>
        </div>
      </section>

      {/* 12. HOW TO APPLY */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to apply</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-gray-900">Check your income eligibility</p>
                <p className="text-sm text-gray-700">Visit <a href="https://energync.goeverblue.com/forms/prequalification-step-1" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">energysavernc.org</a> to pre-qualify. You&apos;ll need household income and household size. Enrollment in SNAP, LIEAP, or Medicaid auto-qualifies for the highest tier.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900">Find a Registered Contractor</p>
                <p className="text-sm text-gray-700">All HEAR and HOMES work must be performed by an Energy Saver NC Registered Contractor. Use the <a href="https://energync.goeverblue.com/find_professional" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">contractor finder</a> to locate one in your area. For HOMES, the contractor will also arrange your free home energy assessment.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-900">Get the work done — the rebate applies automatically</p>
                <p className="text-sm text-gray-700">HEAR rebates are instant point-of-sale discounts applied at the time of installation. You do not pay the full price and wait for reimbursement. Your contractor handles the rebate paperwork.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <p className="font-semibold text-gray-900">Apply separately for Duke Energy rebates (this is separate from Energy Saver NC)</p>
                <p className="text-sm text-gray-700">Duke rebates are a separate process. Complete a free Home Energy Check first, then submit your rebate application through <a href="https://www.duke-energy.com/home/products/home-energy-improvement/hvac-replacement" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Duke&apos;s HEI portal</a> after installation. Rebate arrives as a prepaid Mastercard.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. WHAT TO WATCH */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to watch</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">IRA funding runway</p>
              <p className="text-sm text-gray-600 mt-1">Energy Saver NC is funded by $208 million in IRA allocations through 2031, but funding is first-come, first-served and finite. Early applicants have an advantage.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">WAP and HARRP availability</p>
              <p className="text-sm text-gray-600 mt-1">Weatherization program operations were paused in late 2025 due to federal LIHEAP/HARRP budget uncertainty. Confirm current status with your local community action agency before counting on WAP assistance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 14. FAQ */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently asked questions</h2>
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

      {/* 15. SEE ALSO */}
      <section className="py-8 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-3">See also</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/heat-pumps/states/va" className="text-brand-600 hover:underline">
                Virginia Heat Pump Rebates 2026
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/ga" className="text-brand-600 hover:underline">
                Georgia Heat Pump Rebates 2026
              </Link>
            </li>
            <li className="text-gray-500">
              South Carolina Heat Pump Rebates <em>(coming soon)</em>
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

      {/* 16. SOURCES */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="space-y-2 text-sm">
            {ncIncentive.sources.map((source: { label: string; url: string }, index: number) => (
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

      {/* 17. DISCLAIMER */}
      <section className="py-8">
        <div className="container-narrow">
          <div className="bg-gray-100 rounded-lg p-6">
            <p className="text-gray-500 text-xs leading-relaxed">
              <strong>Disclaimer:</strong> This page covers the main statewide,
              utility, and IRA heat pump incentives available to North Carolina
              homeowners in 2026. It does not calculate savings, guarantee
              eligibility, or represent any incentive program. Rebate amounts for
              electric cooperatives and municipal utilities vary by provider and
              are shown as examples, not a complete directory. We verify status
              regularly but programs can change without notice. Always confirm
              current amounts and eligibility with Energy Saver NC, Duke Energy,
              and your contractor before making decisions.
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
