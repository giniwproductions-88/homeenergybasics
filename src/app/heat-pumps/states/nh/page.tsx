// src/app/heat-pumps/states/nh/page.tsx

import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "New Hampshire Heat Pump Rebates 2026: NHSaves + What's Coming | Home Energy Basics",
  description:
    "NHSaves rebates of $250–$1,250 per ton plus a new $650 regional incentive are available now. HEAR rebates up to $8,000 are coming mid-2026. Federal credits are gone. Here's the complete New Hampshire picture.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/nh",
  },
  openGraph: {
    title: "New Hampshire Heat Pump Rebates 2026",
    description:
      "NHSaves utility rebates, the NE Heat Pump Accelerator, and upcoming HEAR rebates — what's available now and what's coming for NH homeowners.",
    url: "https://homeenergybasics.com/heat-pumps/states/nh",
    type: "article",
  },
};

export default function NewHampshirePage() {
  const nhIncentive = incentives.NH;
  const formattedDate = formatDate(nhIncentive.lastVerified);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What heat pump rebates are available in New Hampshire in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "NHSaves offers $250 per ton (standard) or $1,250 per ton (replacing electric resistance heat) for qualifying air-source heat pumps. The New England Heat Pump Accelerator adds $650 per outdoor unit. Heat pump water heaters receive $900 from NHSaves plus $300 from the Accelerator. There is no federal tax credit for 2026 installations. HEAR rebates (up to $8,000) are expected to launch mid-Summer 2026.",
        },
      },
      {
        "@type": "Question",
        name: "What is the NHSaves enhanced tier?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The NHSaves enhanced tier provides $1,250 per ton (up to 5 tons, maximum $6,250) for heat pumps replacing electric resistance heating as the primary heat source. This requires pre-verification at NHSaves.com/GetVerified before installation. Standard tier ($250/ton) applies to systems replacing oil, gas, or propane.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get HEAR rebates in New Hampshire?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not yet. New Hampshire's HEAR program has been approved and funded but has not launched. The NH Department of Energy expects launch in mid-Summer 2026. Projects started before the official launch are not eligible. Households below 80% AMI could receive up to $8,000 for a heat pump; 80–150% AMI households could receive 50% of costs up to $8,000.",
        },
      },
      {
        "@type": "Question",
        name: "What is the New England Heat Pump Accelerator?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A $450 million five-state regional program (CT, ME, MA, NH, RI) launched February 2026 that provides $650 per cold-climate heat pump outdoor unit and $300 per heat pump water heater as instant point-of-sale discounts through participating distributors. It stacks with NHSaves rebates but likely will not stack with HEAR (both are federally funded).",
        },
      },
      {
        "@type": "Question",
        name: "What refrigerant do I need for NHSaves rebates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Starting in 2026, NHSaves requires R-32 or R-454B refrigerant. R-410A systems are no longer on the NHSaves Heat Pump Qualified Product List and do not qualify for any rebate. Make sure your contractor is installing equipment with an approved refrigerant.",
        },
      },
      {
        "@type": "Question",
        name: "Should I wait for HEAR before installing a heat pump in New Hampshire?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If you are replacing oil or propane and your current system still works, waiting for HEAR could save $7,500–$8,000 on a typical system — far more than currently available incentives of about $1,400. However, if your system has failed or you are replacing electric resistance heat (which qualifies for $1,250/ton now), installing sooner may make sense.",
        },
      },
    ],
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
              / New Hampshire
            </p>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              New Hampshire Heat Pump Rebates 2026: What's Actually Available
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Federal heat pump tax credits ended December 31, 2025 — and
              projects started before HEAR launches are not eligible for those
              rebates. Right now, New Hampshire homeowners have NHSaves utility
              rebates ($250–$1,250 per ton) and the new $650 NE Heat Pump
              Accelerator. When HEAR arrives mid-Summer 2026, the picture
              changes dramatically. Here's exactly where things stand.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last verified: {formattedDate}
            </p>
            <p className="text-sm text-gray-400">
              Rates and program availability may change after this date.
            </p>
          </div>
        </div>
      </section>

      {/* Status Card */}
      <section className="pb-8">
        <div className="container-narrow">
          <StatusCard incentive={nhIncentive} />
        </div>
      </section>

      {/* The Short Version */}
      <section className="pb-12">
        <div className="container-narrow">
          <div className="bg-gray-50 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              The Short Version
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold text-lg">✓</span>
                  <div>
                    <p className="font-semibold text-gray-900">
                      NHSaves utility rebates
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      $250–$1,250 per ton depending on heating fuel being
                      replaced. $900 for heat pump water heaters.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold text-lg">✓</span>
                  <div>
                    <p className="font-semibold text-gray-900">
                      NE Heat Pump Accelerator
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      $650 per outdoor unit + $300 per HPWH. Active now through
                      participating distributors.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-amber-200">
                <div className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold text-lg">⚠</span>
                  <div>
                    <p className="font-semibold text-gray-900">
                      HEAR rebates (coming mid-Summer 2026)
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Up to $8,000 for heat pumps depending on income. Not
                      available yet — projects before launch don't qualify.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-red-200">
                <div className="flex items-start gap-2">
                  <span className="text-red-500 font-bold text-lg">✗</span>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Federal tax credits
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Both 25C ($2,000) and 25D (30% geothermal) expired
                      December 31, 2025. No replacement exists.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="container-narrow">
          <div className="prose prose-lg max-w-none">
            {/* Federal Credits */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12">
              <h2 className="text-xl font-bold text-red-900 mt-0">
                Federal Tax Credits: $0 for 2026 Installations
              </h2>
              <p className="text-red-800 mb-0">
                The IRS states that the Section 25C Energy Efficient Home
                Improvement Credit and the Section 25D Residential Clean Energy
                Credit apply only to qualifying property placed in service
                through December 31, 2025. The{" "}
                <strong>One Big Beautiful Bill Act</strong> (signed July 4, 2025)
                accelerated their expiration by nine years. Equipment purchased
                in 2025 but not installed until 2026 does not qualify. For more
                detail, see our{" "}
                <Link
                  href="/federal-heat-pump-tax-credit-expired"
                  className="text-red-700 underline hover:text-red-900"
                >
                  federal heat pump tax credit explainer
                </Link>
                .
              </p>
            </div>

            {/* HEAR Status */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-12">
              <h2 className="text-xl font-bold text-amber-900 mt-0">
                HEAR Rebates: Approved But Not Yet Launched
              </h2>
              <p className="text-amber-800">
                New Hampshire's HEAR program (Home Electrification and Appliance
                Rebates, IRA Section 50122) has been approved by the U.S.
                Department of Energy. The state's $34.7 million allocation has
                been received, but the NH Department of Energy is still selecting
                a program implementer. Launch is currently expected{" "}
                <strong>mid-Summer 2026</strong>.
              </p>
              <p className="text-amber-800">
                Once live, HEAR will offer point-of-sale rebates based on
                household income:
              </p>
              <div className="overflow-x-auto mt-4">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="bg-amber-100">
                      <th className="text-left p-3 text-amber-900">
                        Income Level
                      </th>
                      <th className="text-left p-3 text-amber-900">
                        Coverage
                      </th>
                      <th className="text-left p-3 text-amber-900">
                        Max HP Rebate
                      </th>
                      <th className="text-left p-3 text-amber-900">
                        Household Cap
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-amber-200">
                      <td className="p-3 text-amber-800">Below 80% AMI</td>
                      <td className="p-3 text-amber-800">
                        100% of project cost
                      </td>
                      <td className="p-3 text-amber-800 font-semibold">
                        $8,000
                      </td>
                      <td className="p-3 text-amber-800">$14,000</td>
                    </tr>
                    <tr className="border-t border-amber-200">
                      <td className="p-3 text-amber-800">80–150% AMI</td>
                      <td className="p-3 text-amber-800">
                        50% of project cost
                      </td>
                      <td className="p-3 text-amber-800 font-semibold">
                        $8,000
                      </td>
                      <td className="p-3 text-amber-800">$14,000</td>
                    </tr>
                    <tr className="border-t border-amber-200">
                      <td className="p-3 text-amber-800">Above 150% AMI</td>
                      <td className="p-3 text-amber-800">Not eligible</td>
                      <td className="p-3 text-amber-800">—</td>
                      <td className="p-3 text-amber-800">—</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-amber-800 text-sm mt-3 mb-0">
                <strong>Critical:</strong> Projects started before the official
                HEAR launch date are not eligible for retroactive rebates.
              </p>
            </div>

            {/* NHSaves Main Section */}
            <h2>NHSaves Utility Rebates — Active Now</h2>

            <p>
              NHSaves is the umbrella energy efficiency program coordinating
              across New Hampshire's four electric utilities: Eversource,
              Liberty, Unitil, and NH Electric Cooperative. The 2026 program
              year is open for installations through December 30, 2026, with
              rebate forms due by January 30, 2027.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-blue-800 text-sm mb-0">
                <strong>2026 refrigerant change:</strong> R-410A is no longer
                on the NHSaves Heat Pump Qualified Product List. Only systems
                using <strong>R-32 or R-454B</strong> refrigerant qualify for
                rebates. Confirm your contractor is installing eligible
                equipment before signing a contract.
              </p>
            </div>

            <h3>Eversource, Liberty, and Unitil (identical structure)</h3>

            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-3 font-semibold">Equipment</th>
                    <th className="text-left p-3 font-semibold">Rebate</th>
                    <th className="text-left p-3 font-semibold">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3">
                      Air-source heat pump — standard tier
                    </td>
                    <td className="p-3 font-semibold">$250/ton</td>
                    <td className="p-3 text-gray-600">
                      Replacing oil, gas, or propane. No pre-approval needed.
                    </td>
                  </tr>
                  <tr className="border-t bg-green-50">
                    <td className="p-3">
                      Air-source heat pump — enhanced tier
                    </td>
                    <td className="p-3 font-semibold text-green-700">
                      $1,250/ton
                    </td>
                    <td className="p-3 text-gray-600">
                      Replacing electric resistance. Pre-verification required
                      at NHSaves.com/GetVerified.
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">Heat pump water heater</td>
                    <td className="p-3 font-semibold">$900</td>
                    <td className="p-3 text-gray-600">
                      ENERGY STAR certified. Instant discount or mail-in.
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">Central air conditioner</td>
                    <td className="p-3 font-semibold">$70/ton</td>
                    <td className="p-3 text-gray-600">ENERGY STAR certified.</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">Wi-Fi thermostat (with HP)</td>
                    <td className="p-3 font-semibold">$85</td>
                    <td className="p-3 text-gray-600">
                      Limit 1 per zone per account.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 mt-3">
              Maximum 5 tons per account ($1,250 standard tier / $6,250
              enhanced tier). Rebate is calculated as AHRI cooling capacity
              (BTU) ÷ 12,000 × per-ton rate.
            </p>

            <h3>NH Electric Cooperative — different structure</h3>

            <p>
              NHEC uses an adder system rather than a single enhanced tier. All
              adders require the heat pump to offset at least 80% of total
              heating load:
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-3 font-semibold">Tier</th>
                    <th className="text-left p-3 font-semibold">Amount</th>
                    <th className="text-left p-3 font-semibold">Requirement</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3">Standard</td>
                    <td className="p-3 font-semibold">$250/ton</td>
                    <td className="p-3 text-gray-600">
                      Same as other utilities
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">+ Whole-house adder</td>
                    <td className="p-3 font-semibold">+$250/ton</td>
                    <td className="p-3 text-gray-600">
                      ≥80% heating load, replacing fossil fuel
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">+ Weatherization adder</td>
                    <td className="p-3 font-semibold">+$250/ton</td>
                    <td className="p-3 text-gray-600">
                      Also completing Home Energy Performance work same year
                    </td>
                  </tr>
                  <tr className="border-t bg-green-50">
                    <td className="p-3 font-semibold">
                      Max for fossil-fuel switchers
                    </td>
                    <td className="p-3 font-semibold text-green-700">
                      $750/ton
                    </td>
                    <td className="p-3 text-gray-600">
                      Standard + whole-house + weatherization
                    </td>
                  </tr>
                  <tr className="border-t bg-green-50">
                    <td className="p-3 font-semibold">
                      Electric resistance retrofit
                    </td>
                    <td className="p-3 font-semibold text-green-700">
                      $1,250/ton
                    </td>
                    <td className="p-3 text-gray-600">
                      Separate path, requires ≥80% load offset
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Equipment requirements (all utilities)</h3>

            <p>
              All systems must appear on the NHSaves Heat Pump Qualified Product
              List. Minimum efficiency ratings:
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-3 font-semibold">Metric</th>
                    <th className="text-left p-3 font-semibold">Ducted</th>
                    <th className="text-left p-3 font-semibold">Ductless</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3">SEER2</td>
                    <td className="p-3">≥ 15.2</td>
                    <td className="p-3">≥ 16.0</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">EER2</td>
                    <td className="p-3">≥ 10.0</td>
                    <td className="p-3">≥ 9.0</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">HSPF2</td>
                    <td className="p-3">≥ 8.1</td>
                    <td className="p-3">≥ 9.5</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">COP at 5°F</td>
                    <td className="p-3">≥ 1.75</td>
                    <td className="p-3">≥ 1.75</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 mt-3">
              HPWH requirements: ≥ 3.30 UEF (or ≥ 2.80 UEF for 120V/15A
              models). Must be ENERGY STAR certified.
            </p>

            {/* NE Heat Pump Accelerator */}
            <h2>New England Heat Pump Accelerator — $650 Per Unit</h2>

            <p>
              Launched February 2026, this <strong>$450 million</strong>{" "}
              five-state regional program (CT, ME, MA, NH, RI) provides instant
              point-of-sale discounts through participating distributors. It
              operates as a "midstream" incentive — distributors receive the
              payment and pass savings through to contractors and consumers.
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-3 font-semibold">Equipment</th>
                    <th className="text-left p-3 font-semibold">Incentive</th>
                    <th className="text-left p-3 font-semibold">Valid Through</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3">
                      Cold-climate ASHP (&lt;5.4 tons)
                    </td>
                    <td className="p-3 font-semibold">$650/outdoor unit</td>
                    <td className="p-3 text-gray-600">Q3 2029</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">ENERGY STAR HPWH</td>
                    <td className="p-3 font-semibold">$300/unit</td>
                    <td className="p-3 text-gray-600">Q3 2029</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              These incentives <strong>stack with NHSaves rebates</strong>{" "}
              (different funding sources — ratepayer vs. federal CPRG grants).
              However, they will <strong>likely not stack with HEAR</strong>{" "}
              when it launches, since both are federally funded.
            </p>

            {/* Heat Pump Water Heaters */}
            <h2>Heat Pump Water Heaters</h2>

            <p>
              NHSaves offers <strong>$900 per unit</strong> for ENERGY STAR
              certified heat pump water heaters. The NE Accelerator adds{" "}
              <strong>$300</strong>, for a combined <strong>$1,200</strong>{" "}
              available now. Four redemption paths: instant discount through
              participating distributors, online portal, mail-in, or
              (Eversource customers only) instant rebate at Home Depot or
              Lowe's via barcode.
            </p>

            {/* Financing */}
            <h2>Financing Options</h2>

            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-3 font-semibold">Program</th>
                    <th className="text-left p-3 font-semibold">Rate</th>
                    <th className="text-left p-3 font-semibold">Amount</th>
                    <th className="text-left p-3 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3">
                      NHSaves Energy Efficiency Loan (Eastern Bank)
                    </td>
                    <td className="p-3 font-semibold text-green-700">
                      0% APR
                    </td>
                    <td className="p-3">$1,000–$15,000, 12–84 months</td>
                    <td className="p-3 text-green-700 font-semibold">
                      Available
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">
                      Eversource Clean Energy Fund Loan (NEIF)
                    </td>
                    <td className="p-3 font-semibold text-green-700">
                      0% APR
                    </td>
                    <td className="p-3">Up to $10,000, 10-year term</td>
                    <td className="p-3 text-red-700 font-semibold">
                      Fully subscribed
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 mt-3">
              The NHSaves loan requires a Home Energy Performance audit first.
              The Eversource Clean Energy Fund is currently not accepting new
              applications.
            </p>

            {/* Stacking Section */}
            <h2>How Programs Stack: What You'd Actually Pay</h2>

            <h3>
              Today (March 2026) — 3-ton system, $15,000 installed, replacing
              oil
            </h3>

            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-3 font-semibold">Incentive</th>
                    <th className="text-right p-3 font-semibold">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3">NHSaves standard tier (3 × $250)</td>
                    <td className="p-3 text-right font-semibold">$750</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">
                      NE Heat Pump Accelerator (1 outdoor unit)
                    </td>
                    <td className="p-3 text-right font-semibold">$650</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">Federal tax credit</td>
                    <td className="p-3 text-right text-gray-400">$0</td>
                  </tr>
                  <tr className="border-t bg-brand-50">
                    <td className="p-3 font-bold">Total available now</td>
                    <td className="p-3 text-right font-bold text-brand-700">
                      $1,400
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-semibold">
                      Your cost after incentives
                    </td>
                    <td className="p-3 text-right font-semibold">~$13,600</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>
              After HEAR launches (~Summer 2026) — same system, household at
              80–150% AMI
            </h3>

            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-3 font-semibold">Incentive</th>
                    <th className="text-right p-3 font-semibold">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3">NHSaves standard tier (3 × $250)</td>
                    <td className="p-3 text-right font-semibold">$750</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">
                      HEAR (50% of $15,000, capped at $8,000)
                    </td>
                    <td className="p-3 text-right font-semibold">$7,500</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 text-gray-500">
                      NE Accelerator (may not stack with HEAR)
                    </td>
                    <td className="p-3 text-right text-gray-400">
                      $0–$650
                    </td>
                  </tr>
                  <tr className="border-t bg-brand-50">
                    <td className="p-3 font-bold">Total</td>
                    <td className="p-3 text-right font-bold text-brand-700">
                      $8,250–$8,900
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-semibold">
                      Your cost after incentives
                    </td>
                    <td className="p-3 text-right font-semibold">
                      ~$6,100–$6,750
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>
              Income-qualified household (&lt;80% AMI, after HEAR launch)
            </h3>

            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-3 font-semibold">Incentive</th>
                    <th className="text-right p-3 font-semibold">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3">NHSaves standard tier (3 × $250)</td>
                    <td className="p-3 text-right font-semibold">$750</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">
                      HEAR (100% of costs, up to $8,000)
                    </td>
                    <td className="p-3 text-right font-semibold">$8,000</td>
                  </tr>
                  <tr className="border-t bg-brand-50">
                    <td className="p-3 font-bold">Total</td>
                    <td className="p-3 text-right font-bold text-brand-700">
                      $8,750+
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-semibold">
                      Your cost after incentives
                    </td>
                    <td className="p-3 text-right font-semibold">
                      ~$6,250 or less
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 mt-3">
              For the lowest-income households, the combination of HEAR,
              NHSaves Income-Eligible services (up to $15,000), and
              Weatherization Assistance could cover nearly all installation
              costs — though these programs have limited slots and require
              separate applications through Community Action Agencies.
            </p>

            {/* Should You Wait? */}
            <div className="bg-brand-50 border border-brand-200 rounded-xl p-6 my-8">
              <h2 className="text-xl font-bold text-brand-900 mt-0">
                Should You Wait for HEAR?
              </h2>
              <p className="text-brand-800">
                If you're replacing oil or propane heating and your current
                system still works, waiting until mid-2026 may significantly
                reduce your cost. HEAR rebates could cover{" "}
                <strong>$7,500–$8,000</strong> of a typical system — far more
                than the <strong>$1,400</strong> available today.
              </p>
              <p className="text-brand-800 mb-0">
                However, if your system has already failed or you're replacing
                electric resistance heat (which qualifies for{" "}
                <strong>$1,250/ton now</strong>), installing today may still
                make sense. The enhanced-tier NHSaves rebate plus the
                Accelerator gives you up to <strong>$6,900</strong> for a 3-ton
                system replacing baseboards — that's already a strong incentive.
              </p>
            </div>

            {/* Climate Context */}
            <h2>Climate Context: Why Heat Pumps Work Here</h2>

            <p>
              New Hampshire is firmly cold-climate territory — and roughly{" "}
              <strong>58% of households</strong> heat with petroleum fuels (oil
              and propane), making it one of the most compelling states for heat
              pump economics.
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-3 font-semibold">Location</th>
                    <th className="text-left p-3 font-semibold">
                      Design Temp (99%)
                    </th>
                    <th className="text-left p-3 font-semibold">
                      Climate Zone
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3">Manchester</td>
                    <td className="p-3">~-2°F</td>
                    <td className="p-3">5A (Cold, Moist)</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">Concord</td>
                    <td className="p-3">~-3°F</td>
                    <td className="p-3">6A (Cold, Moist)</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">Berlin (northern NH)</td>
                    <td className="p-3">~-13°F</td>
                    <td className="p-3">6A (Cold, Moist)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              All NHSaves-qualifying heat pumps must achieve a minimum{" "}
              <strong>COP of 1.75 at 5°F</strong>, aligning with the ENERGY
              STAR Cold Climate specification. Modern cold-climate units from
              Mitsubishi, Daikin, and Bosch can operate down to -13°F to -20°F,
              though backup heat capacity remains essential for sizing in
              northern counties.
            </p>

            <p>
              At NH electricity rates ($0.22–$0.26/kWh), a cold-climate heat
              pump costs roughly <strong>$2,000–$2,300/year</strong> to operate
              a typical home — compared to{" "}
              <strong>$2,800–$3,200/year</strong> for oil or propane. Annual
              savings of <strong>$600–$1,200</strong> depending on the fuel
              being displaced and your specific rate.
            </p>

            {/* Weatherization */}
            <h2>Income-Eligible Programs</h2>

            <h3>NHSaves Income-Eligible Energy Assistance</h3>
            <p>
              Provides up to <strong>$15,000 in total services</strong>{" "}
              including energy audits, insulation, heating/cooling equipment,
              and appliance upgrades. Delivered through Community Action
              Agencies. Not a direct heat pump rebate but can include heat pump
              installation as part of comprehensive upgrades.
            </p>

            <h3>Weatherization Assistance Program (WAP)</h3>
            <p>
              Free weatherization services for households at or below{" "}
              <strong>60% of State Median Income</strong> (family of four:
              maximum $91,548 gross annual income). Recipients of SSI, TANF,
              LIHEAP, or aid for families with children auto-qualify. Heat
              pumps can be installed through the Building Weatherization Program
              if the energy audit demonstrates cost-effectiveness. Priority goes
              to elderly residents, persons with disabilities, and families with
              young children.
            </p>

            {/* How to Apply */}
            <h2>How to Apply</h2>

            <div className="bg-gray-50 rounded-xl p-6">
              <ol className="space-y-4 mb-0">
                <li>
                  <strong>Check your utility.</strong> Your electric utility
                  determines your rebate structure. Find your utility on your
                  electric bill or at nhsaves.com.
                </li>
                <li>
                  <strong>
                    If replacing electric resistance: pre-verify.
                  </strong>{" "}
                  Go to NHSaves.com/GetVerified before installation to qualify
                  for the enhanced $1,250/ton tier.
                </li>
                <li>
                  <strong>Get quotes from NHSaves-participating contractors.</strong>{" "}
                  Confirm the system uses R-32 or R-454B refrigerant and appears
                  on the NHSaves Heat Pump Qualified Product List.
                </li>
                <li>
                  <strong>Ask about the NE Accelerator discount.</strong> Your
                  contractor or distributor should apply the $650/unit incentive
                  at purchase. If they're not familiar, point them to nehpa.org.
                </li>
                <li>
                  <strong>Submit your rebate form.</strong> After installation,
                  file your NHSaves rebate online or by mail. Processing takes
                  6–8 weeks.
                </li>
                <li>
                  <strong>Consider waiting for HEAR.</strong> If your system
                  still works and you qualify by income, the mid-Summer 2026
                  HEAR launch could add $7,500–$8,000 to your incentive stack.
                </li>
              </ol>
            </div>

            {/* What to Watch */}
            <h2>What to Watch</h2>

            <ul>
              <li>
                <strong>HEAR launch date</strong> — NH DOE targets mid-Summer
                2026. Monitor energy.nh.gov for the official announcement.
                Projects before launch don't qualify.
              </li>
              <li>
                <strong>HOMES program</strong> — NH's $34.9 million allocation
                has not yet received DOE approval. No launch date set.
              </li>
              <li>
                <strong>Eversource Clean Energy Fund</strong> — currently fully
                subscribed. May reopen if additional funding is allocated.
              </li>
              <li>
                <strong>NHSaves rebate levels</strong> — reviewed annually.
                2026 amounts are set; 2027 could change.
              </li>
              <li>
                <strong>NE Accelerator distributor availability</strong> — the
                program is new. Not all distributors are enrolled yet.
              </li>
            </ul>

            {/* FAQ */}
            <h2>Frequently Asked Questions</h2>

            {faqJsonLd.mainEntity.map(
              (
                faq: { name: string; acceptedAnswer: { text: string } },
                index: number,
              ) => (
                <div key={index} className="mb-6">
                  <h3 className="text-lg font-semibold">{faq.name}</h3>
                  <p className="text-gray-700">{faq.acceptedAnswer.text}</p>
                </div>
              ),
            )}

            {/* Sources */}
            <h2>Sources</h2>

            <ul className="text-sm">
              {nhIncentive.sources.map(
                (source: { label: string; url: string }, index: number) => (
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
                ),
              )}
            </ul>
          </div>

          {/* Cross-links */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <Link
              href="/heat-pumps/states/vt"
              className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
            >
              <span className="text-brand-600 font-medium">
                Vermont Heat Pump Rebates →
              </span>
              <span className="block text-sm text-gray-500 mt-1">
                Efficiency Vermont programs
              </span>
            </Link>
            <Link
              href="/heat-pumps/states/me"
              className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
            >
              <span className="text-brand-600 font-medium">
                Maine Heat Pump Rebates →
              </span>
              <span className="block text-sm text-gray-500 mt-1">
                Efficiency Maine up to $9,000
              </span>
            </Link>
            <Link
              href="/heat-pumps/states/ma"
              className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
            >
              <span className="text-brand-600 font-medium">
                Massachusetts Heat Pump Rebates →
              </span>
              <span className="block text-sm text-gray-500 mt-1">
                Mass Save restructured rebates
              </span>
            </Link>
            <Link
              href="/federal-heat-pump-tax-credit-expired"
              className="block p-4 bg-red-50 rounded-lg hover:bg-red-100 transition"
            >
              <span className="text-red-700 font-medium">
                Why Federal Credits Ended →
              </span>
              <span className="block text-sm text-red-500 mt-1">
                What happened with 25C and 25D
              </span>
            </Link>
          </div>

          {/* Disclaimer */}
          <div className="mt-12 p-6 bg-gray-50 rounded-xl">
            <p className="text-gray-600 text-sm">
              <strong>Disclaimer:</strong> This information is for educational
              purposes only and does not constitute tax, legal, or financial
              advice. Program details, rebate amounts, and eligibility
              requirements can change. Verify all information with official
              program administrators before making purchasing decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Back link */}
      <section className="py-8">
        <div className="container-narrow">
          <Link
            href="/heat-pumps"
            className="text-brand-600 hover:underline font-medium"
          >
            ← Back to Heat Pump Hub
          </Link>
        </div>
      </section>
    </>
  );
}
