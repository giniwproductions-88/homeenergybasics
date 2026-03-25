import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Massachusetts Heat Pump Rebates 2026: Up to $8,500 + Mass Save HEAT Loan | Home Energy Basics",
  description:
    "Mass Save offers up to $8,500 for heat pumps. Income-qualified up to $25,000. Federal tax credits ended. Here's every Massachusetts heat pump incentive in 2026.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/ma",
  },
  openGraph: {
    title: "Massachusetts Heat Pump Rebates 2026",
    description:
      "Mass Save rebates up to $8,500 ($25,000 income-qualified), 0% HEAT Loan, seasonal electric rate — the complete guide to Massachusetts heat pump incentives after federal credits expired.",
    url: "https://homeenergybasics.com/heat-pumps/states/ma",
    type: "article",
  },
};

export default function MassachusettsPage() {
  const maIncentive = incentives.MA;
  const formattedDate = formatDate(maIncentive.lastVerified);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What heat pump rebates are available in Massachusetts in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mass Save offers up to $8,500 for whole-home air-source heat pump installations ($2,650 per ton), up to $13,500 for ground-source systems, and $750 for heat pump water heaters. Income-qualified households can receive up to $16,000–$25,000, and the lowest-income households may qualify for no-cost installation. Federal tax credits (25C/25D) ended December 31, 2025.",
        },
      },
      {
        "@type": "Question",
        name: "Can I stack Mass Save rebates with other incentives in Massachusetts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Mass Save rebates stack with the HEAT Loan (0% APR, up to $25,000), Alternative Energy Credits, the 6.25% sales tax exemption on heat pump equipment, and the seasonal heat pump electric rate. You cannot combine multiple Mass Save rebate types on the same piece of equipment. Federal tax credits are no longer available to stack.",
        },
      },
      {
        "@type": "Question",
        name: "What is the seasonal heat pump electric rate in Massachusetts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Since November 2025, Eversource, National Grid, and Unitil offer reduced distribution and transmission charges for heat pump households from November 1 through April 30 each year. The DPU estimates average savings of approximately $540 per winter. Customers who installed heat pumps through Mass Save since January 2019 were auto-enrolled.",
        },
      },
      {
        "@type": "Question",
        name: "Who administers Massachusetts heat pump rebate programs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mass Save is administered jointly by Eversource, National Grid, Cape Light Compact, Unitil, Berkshire Gas, and Liberty Utilities. All four major electric utilities deliver identical standard rebate amounts. The Department of Energy Resources (DOER) oversees IRA-funded HEAR and HOMES programs, which are being integrated into Mass Save.",
        },
      },
      {
        "@type": "Question",
        name: "Are R-410A heat pumps eligible for Mass Save rebates in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. As of January 1, 2026, R-410A refrigerant systems are no longer eligible for Mass Save heat pump rebates. Only systems using next-generation refrigerants (R-32 or R-454B) qualify. All eligible systems must also be ENERGY STAR Cold Climate certified and appear on the Mass Save Qualified Products List.",
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
            {" "}/ Massachusetts
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Massachusetts Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            There are <strong>no federal heat pump tax credits in 2026</strong>.
            Massachusetts homeowners now rely on <strong>Mass Save rebates</strong> — up
            to <strong>$8,500</strong> for whole-home installations, or up
            to <strong>$25,000</strong> for income-qualified households, plus 0% financing
            and a seasonal electric rate discount worth ~$540 per winter. This guide covers
            all major Massachusetts heat pump incentives available in 2026, including Mass
            Save, HEAR, HOMES, and utility-specific programs. Here&apos;s what&apos;s
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

      {/* 2. Status Card */}
      <section className="py-8">
        <div className="container-narrow">
          <StatusCard incentive={maIncentive} />
        </div>
      </section>

      {/* 3. Short Version */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Short Version</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Mass Save rebates — up to $8,500</p>
              <p className="text-sm text-green-900">Whole-home air-source heat pumps at $2,650/ton. Ground-source up to $13,500. HPWH $750 instant. R-32 or R-454B refrigerant required — R-410A no longer eligible.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Income-qualified — up to $25,000</p>
              <p className="text-sm text-green-900">Enhanced rebates for households at or below 60% state median income. Lowest-income households may qualify for no-cost installation with full project management.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Total potential savings</p>
              <p className="text-sm text-green-900">$8,500 (above 150% AMI) to $25,000+ (below 60% SMI). Full electrification packages with weatherization, HEAT Loan, and AECs can reach ~$35,000 total incentives.</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">✗ Federal tax credits expired</p>
              <p className="text-sm text-red-900">Section 25C ($2,000/year) and Section 25D (30% for geothermal) both ended December 31, 2025. No replacement legislation proposed.</p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 md:col-span-2">
              <p className="font-semibold text-amber-800 mb-1">⚠ Rebates are declining annually</p>
              <p className="text-sm text-amber-900">Whole-home dropped from $3,000/ton in 2025 to $2,650/ton in 2026, with ~$2,500/ton projected for 2027. The DPU cut the Mass Save plan by $500M. Earlier action means higher savings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Federal Expired */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Federal Tax Credits Ended</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <p className="text-red-900 leading-relaxed">
              <strong>Section 25C</strong> (Energy Efficient Home Improvement Credit) provided
              30% up to $2,000/year for heat pumps and heat pump water heaters.{" "}
              <strong>Section 25D</strong> (Residential Clean Energy Credit) provided 30% with
              no dollar cap for geothermal installations. Both were terminated by the One Big
              Beautiful Bill Act, signed July 4, 2025. The IRS confirmed the credits apply only
              to property placed in service through December 31, 2025. Many websites still
              incorrectly list these credits as available through 2032.{" "}
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                Full details on federal credit expiration →
              </Link>
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            With federal credits gone, <strong>Mass Save is the entire incentive program</strong> for
            Massachusetts homeowners. There are no state tax credits for heat pumps. The state&apos;s
            value comes from high rebate amounts, 0% financing, and the seasonal electric rate — all
            delivered through Mass Save.
          </p>
        </div>
      </section>

      {/* 5. Mass Save (Primary Program) */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Mass Save Heat Pump Rebates</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Mass Save — the statewide program funded by Eversource, National Grid, Cape Light
            Compact, Unitil, Berkshire Gas, and Liberty Utilities — offers three tiers of
            air-source heat pump rebates in 2026. All systems must be ENERGY STAR Cold Climate
            certified, appear on the Mass Save Qualified Products List, and use next-generation
            refrigerants (R-32 or R-454B). R-410A systems are no longer eligible as of
            January 1, 2026.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Air-Source Heat Pump Rebates</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Tier</th>
                  <th className="text-left p-3 font-semibold">Per-Ton Rebate</th>
                  <th className="text-left p-3 font-semibold">Per-Home Cap</th>
                  <th className="text-left p-3 font-semibold">Key Requirement</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Whole-home</td>
                  <td className="p-3 font-semibold">$2,650/ton</td>
                  <td className="p-3 font-semibold">$8,500</td>
                  <td className="p-3">Remove/disconnect fossil fuel system; home must be sufficiently weatherized</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Partial-home</td>
                  <td className="p-3 font-semibold">$1,125/ton</td>
                  <td className="p-3 font-semibold">$8,500</td>
                  <td className="p-3">Integrated controls from QPL; fossil fuel backup switches at ≤30°F (gas/oil) or ≤5°F (propane)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Basic</td>
                  <td className="p-3 font-semibold">$250/ton</td>
                  <td className="p-3 font-semibold">$2,500</td>
                  <td className="p-3">Replacing existing heat pump, additions under 500 sq ft, or previously unconditioned spaces</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Partial-home installations can earn two additional bonuses: a{" "}
            <strong>$500 sizing bonus</strong> when sized via ACCA Manual J to meet
            90–120% of total heating load, and a <strong>$500 weatherization bonus</strong> when
            recommended insulation and air sealing are completed within 12 months.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Ground-Source &amp; Water Heating</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                  <th className="text-left p-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Ground-source HP (whole-home)</td>
                  <td className="p-3 font-semibold">$13,500 flat</td>
                  <td className="p-3">Down from $15,000 in 2025</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ground-source HP (partial)</td>
                  <td className="p-3 font-semibold">$2,000/ton (cap $13,500)</td>
                  <td className="p-3">Cape Light Compact cap is $15,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">$750 instant</td>
                  <td className="p-3">Point-of-sale via participating retailers — no mail-in claim</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Income-Qualified Enhanced Rebates</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Mass Save dramatically increases rebate values for lower-income households. A family
            of four earning <strong>$132,764 or less</strong> may qualify. Households enrolled
            in SNAP, MassHealth, LIHEAP, or fuel assistance may auto-qualify without income
            documentation.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Standard</th>
                  <th className="text-left p-3 font-semibold">Income-Qualified</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Air-source HP (whole/partial)</td>
                  <td className="p-3">Up to $8,500</td>
                  <td className="p-3 font-semibold">Up to $16,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Air-source HP (lowest income, turnkey)</td>
                  <td className="p-3 text-gray-500">—</td>
                  <td className="p-3 font-semibold">Up to no cost</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ground-source HP</td>
                  <td className="p-3">$13,500</td>
                  <td className="p-3 font-semibold">Up to $25,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Weatherization</td>
                  <td className="p-3">75% off</td>
                  <td className="p-3 font-semibold">No-cost (100%)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Electrical panel upgrades</td>
                  <td className="p-3 text-gray-500">Not covered</td>
                  <td className="p-3 font-semibold">Up to 100% covered</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <p className="font-semibold text-green-800 mb-1">✓ Best candidates for Massachusetts heat pumps</p>
            <p className="text-sm text-green-900">Income-qualified households (below 60% SMI) eligible for no-cost turnkey installation. Oil or propane heating households converting to whole-home heat pumps ($2,650/ton tier). Homeowners ready to act in 2026 before rebates decline further. Households already weatherized or built after 2000 (fastest path to whole-home tier).</p>
          </div>
        </div>
      </section>

      {/* 6. HEAR / HOMES (Secondary) */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">HEAR &amp; HOMES: Authorized But Not Yet Live</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Massachusetts was allocated <strong>$145.9 million</strong> in IRA funding — $72.8M for
            Home Electrification and Appliance Rebates (HEAR) and $73.2M for the Home Efficiency
            Rebates (HOMES) program. The Department of Energy Resources (DOER) is integrating HEAR
            directly into Mass Save&apos;s existing income-eligible programs, so there will be no
            separate application process.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-amber-800 mb-1">⚠ HEAR not yet launched for individual homeowners</p>
            <p className="text-sm text-amber-900">As of {formattedDate}, HEAR has not fully launched for standard homeowner applications. When active, HEAR could provide up to $8,000 per household for heat pumps for households at or below 80% of Area Median Income (AMI). Check masssave.com for updates.</p>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            The HOMES allocation is split between a Municipal Light Plant program (~$25M for 50
            communities not covered by Mass Save) and an Affordable Housing Decarbonization Grant
            Program (~$45M for deed-restricted affordable rental housing). Neither is available to
            individual homeowners in standard Mass Save territory.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="font-semibold text-blue-800 mb-1">Massachusetts HEAR integration approach</p>
            <p className="text-sm text-blue-900">Unlike most states launching HEAR as a standalone program, Massachusetts is layering HEAR funding into the existing Mass Save income-eligible framework. This means no separate application — but it also means HEAR benefits are limited to households already qualifying for Mass Save&apos;s enhanced tier (at or below 60% SMI). Households between 60–80% AMI may need to wait for full HEAR deployment.</p>
          </div>
        </div>
      </section>

      {/* 7. Utility Programs */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Utilities: Same Base Rebates, Some Differences</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            All four major utility program administrators deliver Mass Save rebates at identical
            standard amounts. There are no utility-specific add-on rebates beyond the Mass Save
            framework. Key differences are in supplementary programs and territory-specific offerings.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Utility</th>
                  <th className="text-left p-3 font-semibold">HP Rebate</th>
                  <th className="text-left p-3 font-semibold">Unique Feature</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Eversource</td>
                  <td className="p-3 font-semibold">Standard Mass Save</td>
                  <td className="p-3">Barrier mitigation up to $7,000 (knob-and-tube, vermiculite)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">National Grid</td>
                  <td className="p-3 font-semibold">Standard Mass Save</td>
                  <td className="p-3">No unique add-on programs</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Cape Light Compact</td>
                  <td className="p-3 font-semibold">Standard Mass Save</td>
                  <td className="p-3">GSHP partial cap $15,000 (vs $13,500); 80–100% for income-qualified</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Unitil</td>
                  <td className="p-3 font-semibold">Standard Mass Save</td>
                  <td className="p-3">No unique programs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 9. Stacking */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Programs Stack</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Mass Save rebates stack with the HEAT Loan (0% APR), Alternative Energy Credits, the
            6.25% sales tax exemption, and the seasonal electric rate. You cannot combine multiple
            Mass Save rebate types on the same piece of equipment. Federal tax credits are no longer
            available. When HEAR launches, it will stack for income-eligible households only.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 150% AMI — Whole-Home Ducted ASHP (3 ton)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Mass Save whole-home rebate: $7,950 (3 × $2,650)</li>
                <li>Sales tax exemption (6.25%): ~$625</li>
                <li>Alternative Energy Credits: ~$400</li>
                <li>HEAT Loan (0% APR, up to $25,000): covers remaining cost</li>
                <li>Seasonal electric rate: ~$540/winter ongoing</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$8,975</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">80–150% AMI — Partial-Home ASHP (3 ton) with bonuses</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Mass Save partial-home rebate: $3,375 (3 × $1,125)</li>
                <li>Sizing bonus: $500</li>
                <li>Weatherization bonus: $500</li>
                <li>Sales tax exemption: ~$625</li>
                <li>Alternative Energy Credits: ~$400</li>
                <li>HEAT Loan (0% APR): covers remaining cost</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$5,400</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">Below 60% SMI — Income-Qualified Whole-Home ASHP</p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>Mass Save enhanced rebate: up to $16,000</li>
                <li>Weatherization: no-cost (100% covered)</li>
                <li>Electrical panel upgrade: 100% covered</li>
                <li>HEAR (when launched): up to $8,000 additional</li>
                <li>HEAT Loan: typically unnecessary at this tier</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$25,000+ (potentially no cost)</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-5">
            <p className="font-semibold text-gray-900 mb-1">What you&apos;ll actually pay</p>
            <p className="text-sm text-gray-700">For a typical 3-ton whole-home ASHP installation (~$18,000–$22,000 installed), expect <strong>$9,000 to $14,000 out of pocket</strong> for households above 150% AMI after Mass Save rebate, sales tax exemption, and AECs. The HEAT Loan covers the remainder at 0% interest. Income-qualified households pay significantly less — potentially nothing.</p>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            Massachusetts does not offer a state tax credit for heat pumps. The primary financial
            tools beyond rebates are the HEAT Loan, AECs, and the seasonal electric rate.
          </p>
        </div>
      </section>

      {/* 10. Weatherization */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Weatherization &amp; Additional Perks</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Whole-home rebates require the home to be sufficiently weatherized — built after 2000,
            past weatherization completed, or less than $1,000 in remaining weatherization needs.
            Mass Save covers <strong>75% of weatherization costs</strong> for standard households
            and <strong>100% for income-eligible</strong> households. A no-cost Home Energy
            Assessment (call 866-527-7283) identifies what&apos;s needed.
          </p>

          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
              <p className="font-semibold text-blue-800 mb-1">Seasonal heat pump electric rate (~$540/winter)</p>
              <p className="text-sm text-blue-900">Since November 2025, Eversource, National Grid, and Unitil offer reduced distribution and transmission charges for heat pump households from November 1 through April 30. Over 100,000 customers were auto-enrolled — those who installed heat pumps through Mass Save since January 2019. A Switchbox/Acadia Center analysis found 64% of Massachusetts households would save money switching to a heat pump under these rates.</p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
              <p className="font-semibold text-blue-800 mb-1">0% HEAT Loan — up to $25,000</p>
              <p className="text-sm text-blue-900">Covers costs remaining after rebates at 0% APR. Terms are income-tiered: 7 years at or below 135% state median income, 5 years for 135–300% SMI, and 3 years above 300% SMI. The Massachusetts Community Climate Bank also offers the Energy Saver Home Loan (0.5–2% interest, up to $100,000, 20-year terms) for households up to 135% AMI.</p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
              <p className="font-semibold text-blue-800 mb-1">Sales tax exemption (6.25%)</p>
              <p className="text-sm text-blue-900">Heat pump equipment is exempt from the 6.25% Massachusetts sales tax under MGL 64H.6(dd). Applied at the point of purchase. Stacks with all other incentives.</p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
              <p className="font-semibold text-blue-800 mb-1">Alternative Energy Credits (AECs)</p>
              <p className="text-sm text-blue-900">Earned through the DOER&apos;s Alternative Energy Portfolio Standard and pre-minted for 10 years upfront. Current market value: approximately $300–$500 for an air-source heat pump and $900–$1,200 for a ground-source system. The application is complex — DOER recommends working through an AEC aggregator.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Climate */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Climate Context</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Massachusetts is a cold-climate state where heat pumps must handle extended sub-zero
            periods. Mass Save requires ENERGY STAR Cold Climate certification for all rebate-eligible
            systems. Modern cold-climate heat pumps maintain rated output down to 5°F and continue
            operating below –13°F.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">City</th>
                  <th className="text-left p-3 font-semibold">ASHRAE 99% Design Temp</th>
                  <th className="text-left p-3 font-semibold">Primary Heating Fuel</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Boston</td>
                  <td className="p-3 font-semibold">9°F</td>
                  <td className="p-3">Natural gas</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Worcester</td>
                  <td className="p-3 font-semibold">4°F</td>
                  <td className="p-3">Natural gas / oil</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Springfield</td>
                  <td className="p-3 font-semibold">5°F</td>
                  <td className="p-3">Natural gas / oil</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Cape Cod</td>
                  <td className="p-3 font-semibold">12°F</td>
                  <td className="p-3">Oil / propane</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Households displacing oil or propane see the strongest economics — oil heating
            costs <strong>$2,500–$3,500 per winter</strong> in Massachusetts, while a
            properly sized cold-climate heat pump with the seasonal electric rate can cut
            that significantly. Natural gas conversions offer smaller savings but still
            benefit from the whole-home rebate tier. For more on how heat pumps pair
            with home batteries,{" "}
            <Link href="/battery" className="text-brand-600 hover:underline">
              see our battery guide
            </Link>.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="font-semibold text-amber-800 mb-1">⚠ Common mistake: skipping weatherization</p>
            <p className="text-sm text-amber-900">Installing a heat pump in a poorly insulated Massachusetts home wastes money twice — the system runs harder, and you miss the whole-home rebate tier ($2,650/ton vs $1,125/ton). Schedule the free Home Energy Assessment first. If weatherization is needed, Mass Save covers 75–100% of the cost and the $500 weatherization bonus applies to partial-home installs.</p>
          </div>
        </div>
      </section>

      {/* 12. How to Apply */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Apply</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-gray-900">Confirm eligibility at masssave.com</p>
                <p className="text-sm text-gray-700">Use the online pre-verification tool. Enter your utility account number to confirm your home is in a participating territory.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900">Schedule a no-cost Home Energy Assessment</p>
                <p className="text-sm text-gray-700">Call 866-527-7283. Whole-home rebates require the home to be sufficiently weatherized (built after 2000, past weatherization completed, or less than $1,000 in remaining work).</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-900">Find a qualifying contractor</p>
                <p className="text-sm text-gray-700">Use the{" "}
                  <a href="https://www.masssave.com/residential/find-a-contractor/find-a-heat-pump-installer" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Heat Pump Installer Network (HPIN)</a> at masssave.com. Only HPIN-enrolled contractors can process rebates.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <p className="font-semibold text-gray-900">Purchase, install, and submit rebate form</p>
                <p className="text-sm text-gray-700">Install eligible equipment between January 1 and December 31, 2026. Submit the rebate form online or by mail with required documentation by February 28, 2027.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. What to Watch */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Watch</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">HEAR launch timing</p>
              <p className="text-sm text-gray-600 mt-1">When DOER finalizes DOE approval and fully launches HEAR through Mass Save, income-eligible households will gain access to an additional $8,000 in federal point-of-sale rebates.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">IRA funding runway</p>
              <p className="text-sm text-gray-600 mt-1">Massachusetts&apos;s $145.9M allocation is authorized but the federal funding environment remains uncertain. Program availability depends on continued DOE disbursement.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Rebates trending downward</p>
              <p className="text-sm text-gray-600 mt-1">Whole-home dropped from $3,000/ton in 2025 to $2,650/ton in 2026, with ~$2,500/ton projected for 2027. The DPU cut the 2025–2027 Mass Save plan by $500M (from $5B to $4.5B), with the entire reduction from the residential program.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Clean Heat Standard delayed</p>
              <p className="text-sm text-gray-600 mt-1">Originally set for 2026, now postponed to no earlier than 2028. Would have required heating fuel suppliers to earn clean heat credits — potentially creating additional incentive pathways.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 14. FAQ */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
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

      {/* 15. See Also */}
      <section className="py-8 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-3">See also</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/heat-pumps/states/ct" className="text-brand-600 hover:underline">
                Connecticut Heat Pump Rebates
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/ri" className="text-brand-600 hover:underline">
                Rhode Island Heat Pump Rebates
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/nh" className="text-brand-600 hover:underline">
                New Hampshire Heat Pump Rebates
              </Link>
            </li>
            <li>
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                Federal Heat Pump Tax Credits Ended — Full Details
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
            {maIncentive.sources.map((source, index) => (
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
              <strong>Disclaimer:</strong> This page covers the main statewide,
              utility, and IRA heat pump incentives available to Massachusetts
              homeowners in 2026. It does not calculate savings, guarantee
              eligibility, or represent any incentive program. Mass Save rebate
              amounts, income thresholds, and program terms are set by the
              program administrators and may change during the plan year.
              We verify status regularly but programs can change
              without notice. Always confirm current amounts and eligibility with
              Mass Save (masssave.com or 866-527-7283) and your contractor before
              making decisions.
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
