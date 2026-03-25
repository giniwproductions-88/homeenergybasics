// src/app/heat-pumps/states/az/page.tsx

import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Arizona Heat Pump Rebates 2026: Up to $8,000 HEAR + SRP Cool Cash | Home Energy Basics",
  description:
    "Efficiency Arizona HEAR offers up to $8,000. SRP Cool Cash covers up to $1,125. Federal credits ended. Every Arizona heat pump incentive in 2026.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/az",
  },
  openGraph: {
    title: "Arizona Heat Pump Rebates 2026",
    description:
      "Efficiency Arizona HEAR up to $8,000, SRP Cool Cash up to $1,125 — the complete guide to Arizona heat pump incentives after federal credits expired.",
    url: "https://homeenergybasics.com/heat-pumps/states/az",
    type: "article",
  },
};

export default function ArizonaPage() {
  const azIncentive = incentives.AZ;
  const formattedDate = formatDate(azIncentive.lastVerified);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What heat pump rebates are available in Arizona in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Arizona heat pump rebates in 2026 come from two main sources: the Efficiency Arizona HEAR program (up to $8,000 per heat pump for households below 150% AMI) and utility rebates. SRP offers up to $225 per ton through Cool Cash, while TEP offers up to $720. APS discontinued all residential rebates effective January 1, 2026. Federal tax credits under Sections 25C and 25D expired December 31, 2025.",
        },
      },
      {
        "@type": "Question",
        name: "Can I stack Efficiency Arizona HEAR rebates with utility rebates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Efficiency Arizona HEAR rebates can be combined with utility rebates from SRP, TEP, or UniSource. However, HEAR and the upcoming HOMES program cannot both apply to the same individual measure. A low-income household in SRP territory could receive up to $11,375 by combining HEAR with SRP Cool Cash for a heat pump and heat pump water heater.",
        },
      },
      {
        "@type": "Question",
        name: "Do heat pumps make sense in Arizona's hot climate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Heat pumps use the same vapor-compression cycle as traditional air conditioners for cooling, so they cool just as effectively. The advantage is they also provide efficient heating in winter — important because Phoenix design temperatures drop to 38°F and Tucson to 31°F. For northern Arizona cities like Flagstaff (design temp 3.9°F), cold-climate rated heat pumps are essential. About 60% of Arizona homes already heat with electricity, making heat pumps a direct efficiency upgrade.",
        },
      },
      {
        "@type": "Question",
        name: "Who administers Arizona's HEAR program?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Efficiency Arizona HEAR program is administered by the Arizona Governor's Office of Resiliency, funded by approximately $153 million in federal IRA allocations. The program operates through qualified contractors statewide and runs through September 30, 2031, or until funds are exhausted. Applications are processed at efficiencyarizona.com.",
        },
      },
      {
        "@type": "Question",
        name: "Why did APS stop offering heat pump rebates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Arizona Public Service discontinued all residential energy efficiency rebate programs effective January 1, 2026, following Arizona Corporation Commission Decision No. 81584. APS customers in the Phoenix metro area currently have no utility-level heat pump rebate. Income-qualifying APS customers can still access Efficiency Arizona HEAR rebates, and the upcoming HOMES program will serve all income levels.",
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
            {" "}/ Arizona
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Arizona Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Arizona&apos;s heat pump incentives changed dramatically in 2026. Federal tax credits are gone, but the state&apos;s Efficiency Arizona program now offers up to <strong>$8,000</strong> per heat pump for income-qualified households. Utility rebates vary widely — SRP&apos;s Cool Cash program offers up to <strong>$1,125</strong> for a 5-ton variable-capacity system, while APS eliminated all residential rebates entirely. This guide covers all major Arizona heat pump incentives available in 2026, including Efficiency Arizona HEAR, SRP Cool Cash, TEP, and the City of Flagstaff program. Here&apos;s what&apos;s actually available.
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
          <StatusCard incentive={azIncentive} />
        </div>
      </section>

      {/* 3. SHORT VERSION */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 id="short-version" className="text-2xl font-bold text-gray-900 mb-4">Short version</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Efficiency Arizona HEAR — up to $8,000 per heat pump</p>
              <p className="text-sm text-green-900">Point-of-sale rebate for households below 150% of Area Median Income (AMI). Covers 100% of costs for below 80% AMI, 50% for 80–150% AMI. Must use a qualified contractor and apply before installation.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ SRP Cool Cash — up to $225 per ton</p>
              <p className="text-sm text-green-900">Salt River Project offers $75–$225 per ton depending on compressor type. A 5-ton variable-capacity heat pump yields <strong>$1,125</strong>. Plus <strong>$500</strong> for a heat pump water heater. Available to all SRP customers.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Total potential: $1,625 (above 150% AMI) to $11,375+ (below 80% AMI)</p>
              <p className="text-sm text-green-900">$1,625 (above 150% AMI, SRP territory) to $11,375+ (below 80% AMI). Full electrification packages through HEAR can reach ~$14,000 total incentives including electrical panel and wiring upgrades.</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">✗ Federal tax credits expired</p>
              <p className="text-sm text-red-900">Section 25C and Section 25D both ended December 31, 2025. No replacement has been introduced. The only surviving federal credit applies to geothermal heat pumps.</p>
            </div>
            <div className="md:col-span-2 bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="font-semibold text-amber-800 mb-1">⚠ Above 150% AMI + APS territory = no rebates currently available</p>
              <p className="text-sm text-amber-900">APS discontinued all residential rebates in 2026 and HEAR is income-restricted. If you&apos;re above 150% AMI in APS territory, wait for the HOMES program (expected later in 2026), which will serve all income levels with performance-based rebates up to $4,000.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEDERAL EXPIRED */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 id="federal-expired" className="text-2xl font-bold text-gray-900 mb-4">Federal tax credits are gone</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <p className="text-red-900 leading-relaxed">
              <strong>Section 25C</strong> (Energy Efficient Home Improvement Credit) and <strong>Section 25D</strong> (Residential Clean Energy Credit) were both repealed effective December 31, 2025, under the One Big Beautiful Bill Act. These credits were originally scheduled to run through 2032–2034 under the Inflation Reduction Act but were terminated roughly seven years early. There is no &quot;placed in service&quot; exception — a heat pump purchased in 2025 but installed in 2026 does not qualify. No replacement legislation has been introduced as of March 2026.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            The only surviving residential clean energy tax credit applies to <strong>geothermal heat pumps</strong> under the legacy Investment Tax Credit framework. For more details, see our{" "}
            <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
              complete guide to federal heat pump tax credit changes
            </Link>.
          </p>
        </div>
      </section>

      {/* 5. HEAR / PRIMARY PROGRAM */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 id="hear-program" className="text-2xl font-bold text-gray-900 mb-4">Efficiency Arizona HEAR program</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Arizona&apos;s Home Electrification and Appliance Rebates (HEAR) program — branded <strong>Efficiency Arizona</strong> — is the largest heat pump incentive currently operating in the state. Administered by the Arizona Governor&apos;s Office of Resiliency and funded by approximately <strong>$153 million</strong> in federal IRA allocations, the program launched in early 2025 and runs through <strong>September 30, 2031</strong>, or until funds are exhausted. As of mid-March 2026, approximately 800 rebates had been issued statewide.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">HEAR rebate amounts</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Measure</th>
                  <th className="text-left p-3 font-semibold">Maximum rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Heat pump (space heating/cooling), ENERGY STAR certified</td>
                  <td className="p-3 font-semibold">$8,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater, ENERGY STAR certified</td>
                  <td className="p-3 font-semibold">$1,750</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Electrical panel/breaker box</td>
                  <td className="p-3 font-semibold">$4,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Electric wiring (only with qualified appliance)</td>
                  <td className="p-3 font-semibold">$2,500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Insulation, air sealing, ventilation</td>
                  <td className="p-3 font-semibold">$1,600</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump clothes dryer, ENERGY STAR certified</td>
                  <td className="p-3 font-semibold">$840</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Electric cooking appliance, ENERGY STAR certified</td>
                  <td className="p-3 font-semibold">$840</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3"><strong>Total per household</strong></td>
                  <td className="p-3 font-semibold">$14,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Income eligibility</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Household income</th>
                  <th className="text-left p-3 font-semibold">Coverage</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Below 80% of Area Median Income (AMI)</td>
                  <td className="p-3 font-semibold">100% of project costs (up to per-item caps)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">80–150% AMI</td>
                  <td className="p-3 font-semibold">50% of project costs (up to per-item caps)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-gray-500">Above 150% AMI</td>
                  <td className="p-3 text-gray-500">Not eligible for HEAR</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            HEAR operates as a <strong>point-of-sale rebate</strong> — the discount appears directly on the contractor&apos;s invoice, not as a post-purchase reimbursement. Projects must be approved before installation begins. Homes with existing heat pumps cannot receive the heat pump rebate — this is for first-time heat pump installations only.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="font-semibold text-blue-800 mb-1">The 150% AMI cliff is the defining feature of Arizona&apos;s incentive landscape</p>
            <p className="text-sm text-blue-900">Because federal credits are gone and APS dropped its rebates, households above 150% AMI in APS territory currently have access to zero heat pump incentives. The upcoming HOMES program will partially address this gap by offering performance-based rebates up to $4,000 at all income levels.</p>
          </div>
        </div>
      </section>

      {/* 6. HOMES / SECONDARY */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 id="homes-program" className="text-2xl font-bold text-gray-900 mb-4">HOMES program — pending launch</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Arizona&apos;s Home Efficiency Rebates (HOMES) program has <strong>not yet launched</strong> as of March 2026. Multiple sources indicate it will start later in the year. Unlike HEAR, HOMES uses a whole-home performance approach and will be available to <strong>all income levels</strong> — making it the first Arizona incentive available to above-150% AMI households since federal credits expired.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Household income</th>
                  <th className="text-left p-3 font-semibold">Expected maximum (modeled pathway)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Below 80% AMI</td>
                  <td className="p-3 font-semibold">Up to $8,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">80–150% AMI</td>
                  <td className="p-3 font-semibold">Up to $4,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Above 150% AMI</td>
                  <td className="p-3 font-semibold">Up to $4,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed">
            HOMES requires modeled energy savings of 20% or greater (modeled pathway) or measured savings of 15% or greater (measured pathway). HEAR and HOMES can be combined for different measures in the same home but cannot both apply to the same individual measure.
          </p>
        </div>
      </section>

      {/* 7. UTILITY PROGRAMS */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 id="utility-rebates" className="text-2xl font-bold text-gray-900 mb-4">Utility rebates by service territory</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Utility rebate availability in Arizona varies dramatically by service territory. SRP customers retain meaningful rebates while APS customers have none.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">APS — all residential rebates discontinued</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Arizona Public Service discontinued all residential energy efficiency rebate programs effective January 1, 2026, following Arizona Corporation Commission Decision No. 81584. This includes AC/heat pump upgrade rebates, smart thermostat rebates, and the Home Performance with ENERGY STAR program. No replacement has been announced.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-amber-800 mb-1">⚠ Common mistake: assuming APS still offers heat pump rebates</p>
            <p className="text-sm text-amber-900">Many contractors and third-party sites still list APS rebates that no longer exist. The APS residential rebate program ended January 1, 2026. If you&apos;re an APS customer, your options are Efficiency Arizona HEAR (if income-qualified) or waiting for the HOMES program launch.</p>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">SRP Cool Cash — active through April 30, 2026</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Compressor type</th>
                  <th className="text-left p-3 font-semibold">Minimum SEER2</th>
                  <th className="text-left p-3 font-semibold">Rebate per ton</th>
                  <th className="text-left p-3 font-semibold">5-ton system</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Single-stage</td>
                  <td className="p-3">15.2</td>
                  <td className="p-3 font-semibold">$75</td>
                  <td className="p-3">$375</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Multi-stage</td>
                  <td className="p-3">15.2</td>
                  <td className="p-3 font-semibold">$150</td>
                  <td className="p-3">$750</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Variable-capacity</td>
                  <td className="p-3">15.2</td>
                  <td className="p-3 font-semibold">$225</td>
                  <td className="p-3">$1,125</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Inverter-driven mini-split</td>
                  <td className="p-3">15.2</td>
                  <td className="p-3 font-semibold">$225</td>
                  <td className="p-3">—</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            SRP also offers a <strong>$500</strong> rebate for heat pump water heaters with a UEF of 2.8 or better. Both programs require installation by an Arizona-licensed contractor and replacement of an existing system. Applications must be submitted within 6 months of installation, with a limit of 5 rebates per customer. There are no income-qualified tiers — Cool Cash is available to all SRP customers.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">TEP — Efficient Home Program</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Tucson Electric Power offers up to <strong>$720</strong> for a high-efficiency heat pump installation and <strong>$400</strong> for a heat pump water heater equipped with a wireless programmable timer (set to avoid 3–7 PM peak hours). Mini-split heat pumps qualify for up to <strong>$100 per ton</strong>. The program uses instant rebates through participating Trade Ally contractors.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">UniSource Energy Services</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            UniSource operates a parallel Efficient Home Program with lower rebate levels: up to <strong>$450</strong> for a heat pump. UniSource serves parts of northern and southern Arizona including portions of Santa Cruz and Mohave counties.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Southwest Gas</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            As a natural gas utility, Southwest Gas offers <strong>no heat pump or electrification rebates</strong>. Its rebate program exclusively promotes gas appliance efficiency.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">City of Flagstaff — Home Weatherization and Energy Rebate Program</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            No Arizona city or county other than Flagstaff offers direct financial rebates for heat pump installations. Flagstaff offers up to <strong>$3,000</strong> (primary source installation) or <strong>$2,500</strong> (non-primary source) through a sliding income-based scale: 25% of project cost for lowest-income households, 15% for middle-income, and 5% for above-median-income residents — meaning all income levels qualify at some percentage. All heat pumps must be <strong>cold climate rated</strong> and listed on the NEEP Product List.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="font-semibold text-amber-800 mb-1">⚠ Flagstaff funding is nearly exhausted</p>
            <p className="text-sm text-amber-900">As of October 2025, 99% of FY25-26 funding had been distributed. New awards are unlikely until the next fiscal year beginning July 1, 2026. Contact the City of Flagstaff Sustainability office to confirm availability before applying.</p>
          </div>
        </div>
      </section>

      {/* 9. STACKING */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 id="stacking" className="text-2xl font-bold text-gray-900 mb-4">How programs stack</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Efficiency Arizona HEAR rebates can be combined with utility rebates from SRP, TEP, or UniSource. HEAR and HOMES cannot stack on the same measure but can apply to different measures in the same home. Federal credits are no longer available.
          </p>
          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 150% AMI — heat pump + HPWH (SRP territory)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Efficiency Arizona HEAR: $0 (not eligible)</li>
                <li>SRP Cool Cash (5-ton variable): $1,125</li>
                <li>SRP HPWH rebate: $500</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$1,625</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">80–150% AMI — heat pump + HPWH (SRP territory)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Efficiency Arizona HEAR (50% of $10,000 install): $5,000</li>
                <li>HEAR HPWH (50% of $3,000 install): $1,500</li>
                <li>SRP Cool Cash (5-ton variable): $1,125</li>
                <li>SRP HPWH rebate: $500</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$8,125</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">Below 80% AMI — heat pump + HPWH (SRP territory)</p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>Efficiency Arizona HEAR (100% of costs): up to $8,000</li>
                <li>HEAR HPWH (100% of costs): up to $1,750</li>
                <li>SRP Cool Cash (5-ton variable): $1,125</li>
                <li>SRP HPWH rebate: $500</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$11,375</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-5 mb-4">
            <p className="font-semibold text-gray-900 mb-1">What you&apos;ll actually pay</p>
            <p className="text-sm text-gray-700">For a typical ducted heat pump installation ($8,000–$12,000 before incentives): above 150% AMI in SRP territory, expect <strong>$6,375–$10,375 out of pocket</strong>. At 80–150% AMI with SRP, expect <strong>$1,875–$3,875</strong>. Below 80% AMI, out-of-pocket costs could approach <strong>$0</strong> if project costs fall within rebate caps. In APS territory, above 150% AMI, expect to pay <strong>full price</strong> until HOMES launches.</p>
          </div>
          <p className="text-sm text-gray-500">
            Arizona has no state tax credit for heat pumps and no state-level loan program specifically for heat pumps. SHILA (Sustainable Home Improvement Loans of Arizona) offers flexible-term home improvement loans at shilaaz.org.
          </p>
        </div>
      </section>

      {/* 10. WEATHERIZATION */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 id="weatherization" className="text-2xl font-bold text-gray-900 mb-4">Weatherization Assistance Program</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Arizona Weatherization Assistance Program (WAP), administered by the Arizona Department of Housing, provides <strong>free weatherization services</strong> — including potential HVAC replacement — to households at or below 200% of federal poverty guidelines. WAP is funded by DOE, LIHEAP, and contributions from APS, SRP, and Southwest Gas. SRP alone contributes up to <strong>$9,000 per eligible household</strong> through WAP.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Governor Hobbs announced a <strong>$5 million POWER AZ investment</strong> on March 10, 2026, to expand energy-saving upgrades for income-eligible households. However, federal funding faces uncertainty — the FY2026 presidential budget proposed eliminating WAP and LIHEAP entirely.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <p className="font-semibold text-green-800 mb-1">✓ Best candidates for Arizona heat pump incentives in 2026</p>
            <p className="text-sm text-green-900">Households below 80% AMI in SRP territory replacing an existing AC with a first-time heat pump installation. This group can stack HEAR (up to $8,000) + SRP Cool Cash (up to $1,125) + free WAP weatherization for a potentially zero-cost project. Homeowners replacing electric resistance heat gain the largest efficiency improvement — roughly 2–3× the heating output per kilowatt-hour consumed.</p>
          </div>
        </div>
      </section>

      {/* 11. CLIMATE */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 id="climate" className="text-2xl font-bold text-gray-900 mb-4">Arizona climate context</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Arizona is overwhelmingly cooling-dominant in its populated areas. The primary motivation for heat pump adoption here is replacing aging AC systems with equipment that provides both more efficient cooling and efficient heating from a single system. About 60% of Arizona homes heat with electricity — many using inefficient electric resistance systems — and 33% use natural gas.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">City</th>
                  <th className="text-left p-3 font-semibold">Heating design temp (99.6%)</th>
                  <th className="text-left p-3 font-semibold">Cooling design temp (0.4%)</th>
                  <th className="text-left p-3 font-semibold">Climate zone</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Phoenix</td>
                  <td className="p-3 font-semibold">38.6°F</td>
                  <td className="p-3">110.2°F</td>
                  <td className="p-3">2B (Hot-Dry)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Tucson</td>
                  <td className="p-3 font-semibold">31.7°F</td>
                  <td className="p-3">105.9°F</td>
                  <td className="p-3">2B (Hot-Dry)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Prescott</td>
                  <td className="p-3 font-semibold">17.5°F</td>
                  <td className="p-3">94.3°F</td>
                  <td className="p-3">4B (Mixed-Dry)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Flagstaff</td>
                  <td className="p-3 font-semibold">3.9°F</td>
                  <td className="p-3">85.5°F</td>
                  <td className="p-3">5B (Cold-Dry)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            In Phoenix and Tucson, <strong>EER2 matters more than SEER2</strong> because EER2 measures efficiency at 95°F — closer to sustained operating conditions where outdoor temperatures exceed 100°F for months. Standard heat pumps perform excellently year-round in southern Arizona. For northern Arizona, cold-climate rated heat pumps (maintaining COP ≥1.75 at 5°F) are essential — Flagstaff&apos;s design temperature of 3.9°F is comparable to Minneapolis.
          </p>
          <p className="text-gray-700 leading-relaxed">
            For homeowners considering pairing solar with a heat pump installation, see our{" "}
            <Link href="/battery" className="text-brand-600 hover:underline">
              guide to home batteries
            </Link>{" "}
            — Arizona&apos;s high solar resource makes battery storage particularly relevant for managing time-of-use electricity rates.
          </p>
        </div>
      </section>

      {/* 12. HOW TO APPLY */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 id="how-to-apply" className="text-2xl font-bold text-gray-900 mb-4">How to apply</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-gray-900">Check income eligibility for Efficiency Arizona HEAR</p>
                <p className="text-sm text-gray-700">Visit <a href="https://efficiencyarizona.com" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">efficiencyarizona.com</a> to determine if your household income falls below 150% AMI. Households above 150% AMI should wait for the HOMES program or proceed with utility rebates only.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900">Find an Efficiency Arizona–qualified contractor</p>
                <p className="text-sm text-gray-700">HEAR requires using a qualified contractor or approved retail pathway. The contractor handles the rebate application on your behalf.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-900">Apply before installation begins</p>
                <p className="text-sm text-gray-700">HEAR approval is required before work starts. The rebate appears as a point-of-sale discount on your contractor&apos;s invoice.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <p className="font-semibold text-gray-900">Submit utility rebate after installation</p>
                <p className="text-sm text-gray-700">SRP Cool Cash, TEP, and UniSource rebates are submitted separately after installation is complete. SRP requires applications within 6 months of installation. Confirm your utility&apos;s current program before starting.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. WHAT TO WATCH */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 id="what-to-watch" className="text-2xl font-bold text-gray-900 mb-4">What to watch</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">IRA funding runway</p>
              <p className="text-sm text-gray-600 mt-1">Arizona&apos;s $153 million HEAR allocation runs through September 2031, but only ~800 rebates have been issued so far. If adoption accelerates — especially as contractors become more familiar with the program — funds could deplete faster than projected.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">HOMES program launch</p>
              <p className="text-sm text-gray-600 mt-1">Expected later in 2026. This will be the first incentive available to above-150% AMI households since federal credits expired. Watch efficiencyarizona.com for launch announcements.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">SRP Cool Cash renewal</p>
              <p className="text-sm text-gray-600 mt-1">The current program year expires April 30, 2026. SRP has not yet confirmed renewal terms or rebate levels for the next cycle. If you&apos;re an SRP customer planning a heat pump installation, submitting before April 30 locks in the current rates.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">APS regulatory proceedings</p>
              <p className="text-sm text-gray-600 mt-1">APS eliminated rebates following ACC Decision 81584. Future rate cases or policy changes could restore some form of residential efficiency program, but nothing has been proposed as of March 2026.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 14. FAQ */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 id="faq" className="text-2xl font-bold text-gray-900 mb-4">Frequently asked questions</h2>
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
          <h2 id="see-also" className="text-xl font-bold text-gray-900 mb-3">See also</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/heat-pumps/states/nv" className="text-brand-600 hover:underline">
                Nevada Heat Pump Rebates
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/nm" className="text-brand-600 hover:underline">
                New Mexico Heat Pump Rebates
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/ca" className="text-brand-600 hover:underline">
                California Heat Pump Rebates
              </Link>
            </li>
            <li>
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                Federal Heat Pump Tax Credit Changes
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
          <h2 id="sources" className="text-xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="space-y-2 text-sm">
            {azIncentive.sources.map((source: { label: string; url: string }, index: number) => (
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
              utility, and IRA heat pump incentives available to Arizona
              homeowners in 2026. It does not calculate savings, guarantee
              eligibility, or represent any incentive program. Utility rebates
              vary by service territory — APS, SRP, TEP, and UniSource each
              operate independently. We verify status regularly but programs can
              change without notice. Always confirm current amounts and
              eligibility with Efficiency Arizona, your utility, and your
              contractor before making decisions.
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
