import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Hawaii Heat Pump Rebates 2026: Up to $14,000 + Hawaii Energy Rebates | Home Energy Basics",
  description:
    "Hawaii Energy offers $450\u2013$700 instant rebates. eHale HEAR covers up to $14,000. Federal credits ended. Every Hawaii heat pump incentive in 2026.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/hi",
  },
  openGraph: {
    title: "Hawaii Heat Pump Rebates 2026",
    description:
      "Up to $14,000 in income-qualified rebates plus Hawaii Energy instant rebates \u2014 the complete guide to Hawaii heat pump incentives after federal credits expired.",
    url: "https://homeenergybasics.com/heat-pumps/states/hi",
    type: "article",
  },
};

export default function HawaiiPage() {
  const hiIncentive = incentives.HI;
  const formattedDate = formatDate(hiIncentive.lastVerified);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What heat pump rebates are available in Hawaii in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hawaii Energy offers instant rebates of $450\u2013$550 for qualifying mini-split systems, $500\u2013$700 for heat pump water heaters, and $1,250 for central AC retrofits. The upcoming eHale HEAR program will provide up to $8,000 for heat pumps and $1,750 for heat pump water heaters for income-qualified households. Federal Section 25C and 25D tax credits expired December 31, 2025.",
        },
      },
      {
        "@type": "Question",
        name: "Can I stack Hawaii Energy rebates with eHale HEAR rebates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Federal HEAR rules allow stacking with utility rebates and other programs as long as combined incentives do not exceed 100% of the project cost. Hawaii Energy rebates have historically stacked with other incentive programs. Income-qualified households could combine both for maximum savings.",
        },
      },
      {
        "@type": "Question",
        name: "Why are heat pumps especially valuable in Hawaii?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hawaii has the highest electricity rates in the nation at roughly 40\u201350 cents per kilowatt-hour. A heat pump water heater can save $800\u2013$1,000 per year compared to a standard electric water heater, and efficient mini-splits can cut cooling costs by 50\u201360% compared to window AC units. Payback periods are shorter in Hawaii than anywhere else in the country.",
        },
      },
      {
        "@type": "Question",
        name: "Who administers Hawaii\u2019s heat pump incentive programs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hawaii Energy, operated by Leidos as the state\u2019s Public Benefits Fee Administrator, manages instant rebates for ratepayers on Oahu, Maui, Molokai, Lanai, and Hawaii Island. The Hawaii State Energy Office administers the eHale HEAR program. Kauai residents access separate rebates through the Kauai Island Utility Cooperative (KIUC).",
        },
      },
      {
        "@type": "Question",
        name: "Are Kauai residents eligible for the same rebates as other islands?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kauai residents are not served by Hawaii Energy. Instead, KIUC offers its own rebates including $500 for heat pump water heaters and $50 for window AC units. Kauai residents will be eligible for the statewide eHale HEAR program once it launches, which provides up to $8,000 for heat pumps and $1,750 for heat pump water heaters for income-qualified households.",
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
            {" "}/ Hawaii
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Hawaii Heat Pump Rebates and Incentives (2026)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Hawaii homeowners can access up to <strong>$14,000</strong> in income-qualified heat pump rebates in 2026 through the upcoming eHale program, plus instant rebates of <strong>$450–$700</strong> from Hawaii Energy right now. Federal tax credits have expired, but Hawaii&apos;s nation-high electricity rates make heat pumps the highest-ROI energy upgrade in the country. This guide covers all major Hawaii heat pump incentives available in 2026, including Hawaii Energy, eHale HEAR, and KIUC programs. Here&apos;s the complete breakdown.
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
          <StatusCard incentive={hiIncentive} />
        </div>
      </section>

      {/* 3. Short Version */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The short version</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ eHale HEAR program (coming 2026)</p>
              <p className="text-sm text-green-900">Up to $8,000 for heat pumps and $1,750 for heat pump water heaters. Income-qualified households below 80% AMI can receive up to 100% of project costs. Maximum $14,000 per household.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Hawaii Energy instant rebates (open now)</p>
              <p className="text-sm text-green-900">$450–$550 for mini-split systems, $500–$700 for heat pump water heaters, and $1,250 for central AC retrofits. Available through June 30, 2026 on all islands except Kauai.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Total potential savings</p>
              <p className="text-sm text-green-900">$550 (above 150% AMI) to $11,000+ (below 80% AMI). Full electrification packages can reach about $14,000 in total incentives.</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">✗ Federal tax credits expired</p>
              <p className="text-sm text-red-900">Section 25C and Section 25D both ended December 31, 2025. No federal tax credits are available for heat pumps installed in 2026.</p>
            </div>
            <div className="md:col-span-2 bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="font-semibold text-amber-800 mb-1">⚠ eHale HEAR has not launched yet</p>
              <p className="text-sm text-amber-900">The eHale program is expected to open in 2026 but is not yet accepting applications. Hawaii Energy rebates are available right now. Claim Hawaii Energy instant rebates today and apply for eHale HEAR when it launches — both can stack on separate equipment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Federal Expired */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Federal tax credits have expired</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <p className="text-red-900 leading-relaxed">
              <strong>Section 25C</strong> (Energy Efficient Home Improvement Credit) and <strong>Section 25D</strong> (Residential Clean Energy Credit) both expired for equipment placed in service after <strong>December 31, 2025</strong>. The One Big Beautiful Bill Act accelerated these expirations. Equipment must have been fully installed and operational by that date to qualify — purchasing before the deadline but installing after does not count. There is no acquisition-date safe harbor for 25C or 25D.{" "}
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                Read the full federal credit expiration explainer
              </Link>.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            While federal tax credits are gone, the IRA&apos;s direct rebate programs — HEAR and HOMES — survived the One Big Beautiful Bill entirely. These appropriated funds remain available until depleted or September 30, 2031, making them the most significant federal incentive channel for heat pumps in 2026. Hawaii&apos;s eHale program is the state&apos;s implementation of these surviving IRA rebates.
          </p>
        </div>
      </section>

      {/* 5. eHale HEAR (Primary) */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">eHale Energy Saver Rebate Program (HEAR)</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Hawaii&apos;s implementation of the federal Home Electrification and Appliance Rebates (HEAR) program is the <strong>eHale Energy Saver Rebate Program</strong>, administered by the Hawaii State Energy Office (HSEO). Hawaii received a total allocation of <strong>$69 million</strong> across HEAR and HOMES pathways. The program is expected to launch in 2026 but is not yet accepting applications.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">HEAR rebate amounts</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Maximum HEAR Rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Heat pump (space heating/cooling)</td>
                  <td className="p-3 font-semibold">Up to $8,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">Up to $1,750</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Electrical panel upgrade</td>
                  <td className="p-3 font-semibold">Up to $4,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Electrical wiring</td>
                  <td className="p-3 font-semibold">Up to $2,500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Insulation, air sealing, ventilation</td>
                  <td className="p-3 font-semibold">Up to $1,600</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Income eligibility</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            HEAR is exclusively for income-qualified households. Those at or below <strong>80% of Area Median Income (AMI)</strong> receive up to 100% of eligible project costs. Households between <strong>80–150% AMI</strong> receive up to 50%. Those above 150% AMI are not eligible for HEAR. The maximum total per household across all measures is <strong>$14,000</strong>.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">County</th>
                  <th className="text-left p-3 font-semibold">80% AMI (4-person)</th>
                  <th className="text-left p-3 font-semibold">150% AMI (4-person, est.)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Honolulu</td>
                  <td className="p-3 font-semibold">$121,600</td>
                  <td className="p-3 font-semibold">~$228,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Maui</td>
                  <td className="p-3 font-semibold">$107,700</td>
                  <td className="p-3 font-semibold">~$202,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Kauai</td>
                  <td className="p-3 font-semibold">$104,200</td>
                  <td className="p-3 font-semibold">~$195,400</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Hawaii County</td>
                  <td className="p-3 font-semibold">$96,700</td>
                  <td className="p-3 font-semibold">~$181,300</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="font-semibold text-blue-800 mb-1">Hawaii&apos;s high cost of living means more families qualify</p>
            <p className="text-sm text-blue-900">Hawaii&apos;s AMI thresholds are among the highest in the country. A Honolulu family of four earning up to $121,600 qualifies for 100% cost coverage under HEAR, and a family earning up to ~$228,000 qualifies for 50% coverage. Categorical eligibility through SNAP, Medicaid, TANF, or WIC also applies.</p>
          </div>
        </div>
      </section>

      {/* 6. Hawaii Energy (Secondary/Utility) */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Hawaii Energy instant rebates</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Hawaii Energy is the state&apos;s ratepayer-funded efficiency program, operated by Leidos as the Public Benefits Fee Administrator. Its PY25 program runs from <strong>July 2025 through June 30, 2026</strong> on a first-come, first-served basis. Hawaii Energy serves ratepayers on Oahu, Maui, Molokai, Lanai, and Hawaii Island. Kauai residents are not eligible — they are served separately by KIUC.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Heat pump water heater rebates</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Size</th>
                  <th className="text-left p-3 font-semibold">Instant Rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">40–54 gallon ENERGY STAR HPWH</td>
                  <td className="p-3 font-semibold">$500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">55–82 gallon ENERGY STAR HPWH</td>
                  <td className="p-3 font-semibold">$700</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">HPWH tune-up (every 3 years)</td>
                  <td className="p-3 font-semibold">$200</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            These are <strong>instant in-store rebates</strong> at participating retailers including Home Depot, Lowe&apos;s, Ferguson/The Plumbing Source, Inter-Island Solar Supply, and PACE Supply. No application forms are required.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Mini-split and central AC rebates</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">BTU Capacity</th>
                  <th className="text-left p-3 font-semibold">Min. SEER/SEER2</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">20,000–29,999 BTU</td>
                  <td className="p-3">18 SEER / 17.2 SEER2</td>
                  <td className="p-3 font-semibold">$450</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">30,000–44,999 BTU</td>
                  <td className="p-3">18 SEER / 17.2 SEER2</td>
                  <td className="p-3 font-semibold">$500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">45,000–64,999 BTU</td>
                  <td className="p-3">18 SEER / 17.4 SEER2</td>
                  <td className="p-3 font-semibold">$550</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Each qualifying unit must include a condenser and be installed by a participating Clean Energy Ally contractor. Homes requiring multiple units can claim multiple rebates. <strong>Central AC retrofits</strong> replacing older systems earn a <strong>$1,250 instant rebate</strong>.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="font-semibold text-amber-800 mb-1">⚠ Common mistake: missing the contractor requirement</p>
            <p className="text-sm text-amber-900">Mini-split and central AC rebates require installation by a Hawaii Energy Clean Energy Ally contractor. Self-installations and installations by non-participating contractors do not qualify. Verify your contractor&apos;s status on the Hawaii Energy website before scheduling work.</p>
          </div>
        </div>
      </section>

      {/* 7. KIUC (Kauai) */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Kauai Island Utility Cooperative (KIUC) rebates</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Kauai operates independently from both Hawaiian Electric and Hawaii Energy. The Kauai Island Utility Cooperative (KIUC) offers its own, more limited set of rebates for Kauai residents.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">KIUC Rebate</th>
                  <th className="text-left p-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">$500</td>
                  <td className="p-3">Must replace existing electric or non-functioning unit</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Window AC (ENERGY STAR)</td>
                  <td className="p-3 font-semibold">$50</td>
                  <td className="p-3">EER 11.2+, limit one per household</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ceiling fan (ENERGY STAR)</td>
                  <td className="p-3 font-semibold">$25</td>
                  <td className="p-3">Up to two per household</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Solar water heater</td>
                  <td className="p-3 font-semibold">$1,500</td>
                  <td className="p-3">Plus interest-free loan through Gather FCU</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Mini-split heat pump</td>
                  <td className="p-3 text-gray-500">—</td>
                  <td className="p-3 text-gray-500">Not currently offered by KIUC</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed">
            KIUC also provides free refrigerator and water heater replacement for qualifying low-income seniors (age 60+). Kauai residents will be eligible for the statewide eHale HEAR program once it launches, which will significantly expand their available incentives.
          </p>
        </div>
      </section>

      {/* 9. Stacking (bg-gray-50 — skipped section 8, no separate local programs) */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How programs stack</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Federal HEAR rules explicitly permit stacking with utility rebates and other programs. The only constraint is that combined incentives cannot exceed 100% of the project cost. Hawaii Energy rebates have historically stacked with other incentive programs. Hawaii&apos;s state renewable energy tax credit (RETITC) does not cover standard heat pumps or heat pump water heaters — it applies only to solar and wind systems.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Mini-split heat pump + heat pump water heater</h3>
          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 150% AMI — mini-split + HPWH</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Hawaii Energy mini-split rebate: $550</li>
                <li>Hawaii Energy HPWH rebate (55+ gal): $700</li>
                <li>eHale HEAR: not eligible</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$1,250</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">80–150% AMI — mini-split + HPWH</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Hawaii Energy mini-split rebate: $550</li>
                <li>Hawaii Energy HPWH rebate (55+ gal): $700</li>
                <li>eHale HEAR heat pump (50% of cost): up to $8,000</li>
                <li>eHale HEAR HPWH (50% of cost): up to $1,750</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$11,000</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">Below 80% AMI — mini-split + HPWH (best case)</p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>Hawaii Energy mini-split rebate: $550+</li>
                <li>Hawaii Energy HPWH rebate (55+ gal): $700+</li>
                <li>eHale HEAR heat pump (100% of cost): up to $8,000</li>
                <li>eHale HEAR HPWH (100% of cost): up to $1,750</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$11,000+</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-5">
            <p className="font-semibold text-gray-900 mb-1">What you&apos;ll actually pay</p>
            <p className="text-sm text-gray-700">For a typical mini-split + HPWH installation costing $8,000–$12,000 total: homeowners above 150% AMI can expect <strong>$6,750–$10,750 out of pocket</strong>. Homeowners between 80–150% AMI may pay <strong>$1,000–$5,000 out of pocket</strong>. Income-qualified households below 80% AMI may pay <strong>$0–$1,000 out of pocket</strong> once eHale HEAR launches.</p>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Note: Hawaii&apos;s state renewable energy tax credit (RETITC) does not cover heat pumps or heat pump water heaters. No additional state tax credit is available. GEM$ on-bill financing can cover remaining out-of-pocket costs for eligible households.
          </p>
        </div>
      </section>

      {/* 10. Weatherization + GEM$ Financing */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Weatherization and financing programs</h2>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">GEM$ On-Bill Program</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Green Energy Money $aver (GEM$) program, administered by the Hawaii Green Infrastructure Authority, provides financing for clean energy improvements including heat pump water heaters. The program offers a <strong>fixed 5.5% interest rate</strong> with terms up to 25 years, no credit check (underwriting based on utility bill payment history), and no upfront costs. Repayment appears on the monthly electric bill. The program targets underserved ratepayers on Hawaiian Electric-served islands and has <strong>$18 million</strong> in available capital.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Weatherization Assistance Program (WAP)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The WAP, administered by the Office of Community Services under DLIR, serves households at or below 200% of the Federal Poverty Guideline. Approved measures in Hawaii specifically include hybrid heat pump water heaters, solar water heaters, room air conditioners, refrigerator replacement, LEDs, and low-flow fixtures. Four Community Action Agencies deliver services by county: HCAP (Honolulu), Hawaii County Economic Opportunity Council, Maui Economic Opportunity, and Kauai Economic Opportunity.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <p className="font-semibold text-green-800 mb-1">✓ Best candidates for Hawaii heat pump incentives</p>
            <p className="text-sm text-green-900">Income-qualified homeowners (below 150% AMI) on any island who currently use electric resistance water heating or older window AC units. Households below 80% AMI stand to benefit most — potentially covering 100% of heat pump and HPWH costs through eHale HEAR plus Hawaii Energy rebates. Homeowners with high monthly electric bills ($200+) will see the fastest payback regardless of income level.</p>
          </div>
        </div>
      </section>

      {/* 11. Climate Context */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why heat pumps deliver outsized value in Hawaii</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Hawaii&apos;s energy economics make heat pumps uniquely compelling. At roughly <strong>40–50 cents per kilowatt-hour</strong> — about 2.5 times the national average — every kilowatt-hour saved translates to far greater dollar savings than on the mainland. The state imports approximately 93% of its energy, and each island operates its own isolated grid with no mainland interconnection.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">ASHRAE design temperatures</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Location</th>
                  <th className="text-left p-3 font-semibold">Cooling Design Temp</th>
                  <th className="text-left p-3 font-semibold">Heating Design Temp</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Honolulu (Oahu)</td>
                  <td className="p-3 font-semibold">90°F</td>
                  <td className="p-3">59°F</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Kahului (Maui)</td>
                  <td className="p-3 font-semibold">88°F</td>
                  <td className="p-3">61°F</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Kona (Hawaii Island)</td>
                  <td className="p-3 font-semibold">87°F</td>
                  <td className="p-3">63°F</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Lihue (Kauai)</td>
                  <td className="p-3 font-semibold">84°F</td>
                  <td className="p-3">62°F</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            Hawaii&apos;s cooling-dominant climate (approximately 3,600–4,000 cooling degree days and essentially zero heating degree days at sea level) means heat pumps operate at peak efficiency year-round. The small temperature differential between outdoor conditions and indoor setpoints keeps compressor loads low. Replacing window AC units (SEER 10–12) with mini-split heat pumps (SEER 20–30+) can cut cooling energy use by 50–60%.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Water heating consumes approximately <strong>40% of a typical Hawaii household&apos;s electric bill</strong>. A standard 50-gallon electric resistance water heater uses roughly 3,500 kWh annually, costing about <strong>$1,400–$1,600 per year</strong> at Hawaii rates. A heat pump water heater uses 1,000–1,200 kWh, saving <strong>$800–$1,000 annually</strong> — a payback period of 2–4 years even without rebates.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The energy burden on low-income Hawaii residents is severe. While the statewide average electricity burden is 2.1% of household income, households below the federal poverty level spend 19.5% of income on electricity alone. On Kauai, low-income homeowners face burdens as high as 27.1%. Combining efficient heat pumps with{" "}
            <Link href="/battery" className="text-brand-600 hover:underline">
              home battery storage
            </Link>{" "}
            can further reduce costs by shifting energy use to off-peak hours or storing solar generation.
          </p>
        </div>
      </section>

      {/* 12. How to Apply */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to apply</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-gray-900">Claim Hawaii Energy instant rebates now</p>
                <p className="text-sm text-gray-700">For heat pump water heaters, purchase an ENERGY STAR model at a participating retailer — the rebate ($500–$700) is applied instantly at checkout. For mini-splits and central AC, hire a Hawaii Energy Clean Energy Ally contractor who will process the rebate.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900">Check your eHale HEAR eligibility</p>
                <p className="text-sm text-gray-700">Determine your household income relative to your county&apos;s AMI thresholds. Households below 150% AMI will qualify for HEAR rebates once the program launches. Categorical eligibility through SNAP, Medicaid, TANF, or WIC also applies.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-900">Apply for eHale HEAR when it opens</p>
                <p className="text-sm text-gray-700">Monitor the Hawaii State Energy Office eHale page for launch announcements. The program will be available statewide, including Kauai. Apply through the HSEO portal once applications open.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <p className="font-semibold text-gray-900">Explore GEM$ financing for remaining costs</p>
                <p className="text-sm text-gray-700">If you have out-of-pocket costs after rebates, apply for GEM$ on-bill financing through the Hawaii Green Infrastructure Authority. No credit check required — eligibility is based on utility bill payment history.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. What to Watch */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to watch</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">eHale program launch date</p>
              <p className="text-sm text-gray-600 mt-1">HSEO is completing DOE pre-launch requirements. Both HEAR and HOMES pathways are expected in 2026, but no firm date has been announced. Monitor the HSEO eHale page for updates.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">IRA funding runway</p>
              <p className="text-sm text-gray-600 mt-1">Hawaii&apos;s $69 million allocation is available until depleted or September 30, 2031. However, as a direct appropriation that survived the OBBB, funds could be redirected by future legislation. Applying early once the program opens maximizes certainty.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Hawaii Energy PY25 program end date</p>
              <p className="text-sm text-gray-600 mt-1">Current instant rebates run through June 30, 2026 on a first-come, first-served basis. Rebate amounts and availability for the next program year (PY26) have not been announced.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">KIUC program expansion</p>
              <p className="text-sm text-gray-600 mt-1">KIUC currently lacks mini-split rebates, limiting options for Kauai residents. The eHale launch will be the first time Kauai residents can access substantial heat pump rebates comparable to other islands.</p>
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

      {/* 15. See Also */}
      <section className="py-8 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-3">See also</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/heat-pumps/states/ca" className="text-brand-600 hover:underline">
                California Heat Pump Rebates
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/or" className="text-brand-600 hover:underline">
                Oregon Heat Pump Rebates
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/wa" className="text-brand-600 hover:underline">
                Washington Heat Pump Rebates
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/mn" className="text-brand-600 hover:underline">
                Minnesota Heat Pump Rebates
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
            {hiIncentive.sources.map((source: { label: string; url: string }, index: number) => (
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
              <strong>Disclaimer:</strong> This page covers the main statewide, utility, and IRA heat pump incentives available to Hawaii homeowners in 2026. It does not calculate savings, guarantee eligibility, or represent any incentive program. Hawaii&apos;s unique island utility structure means rebate availability varies by island — Kauai residents should check KIUC programs separately. We verify status regularly but programs can change without notice. Always confirm current amounts and eligibility with the Hawaii State Energy Office, Hawaii Energy, or your contractor before making decisions.
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
