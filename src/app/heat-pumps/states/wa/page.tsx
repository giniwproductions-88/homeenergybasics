// src/app/heat-pumps/states/wa/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";

export const metadata: Metadata = {
  title:
    "Washington Heat Pump Rebates 2026: PSE, State HEAR & Federal Incentives | Home Energy Basics",
  description:
    "No federal heat pump tax credits in 2026. Here's what Washington homeowners can use: PSE rebates up to $5,000, state-funded HEAR, upcoming federal HARP/HOMES, and the I-2066 situation.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/wa",
  },
  openGraph: {
    title: "Washington Heat Pump Rebates 2026: What's Actually Available",
    description:
      "Federal credits ended. PSE rebates, state HEAR, upcoming federal HARP — the complete Washington guide.",
  },
};

const lastVerified = "March 18, 2026";

const faqs = [
  {
    question:
      "Are there federal tax credits for heat pumps in Washington in 2026?",
    answer:
      "No. The federal 25C energy efficiency tax credit and 25D geothermal credit both ended December 31, 2025 under the One Big Beautiful Bill Act (OBBBA). If you installed before that date, you can still claim on your 2025 return using IRS Form 5695. No federal tax credit is available for 2026 installations.",
  },
  {
    question:
      "What is the difference between the state HEAR program and the federal HARP?",
    answer:
      "Washington has two separate programs. The state HEAR program is funded by the Climate Commitment Act (cap-and-invest auction revenue) and is currently active for households at or below 150% AMI. The federal HARP is funded by the IRA and has not launched yet — it's in final DOE preparation. Both offer heat pump rebates but through different funding sources and administrators.",
  },
  {
    question: "How do I apply for Washington's state HEAR program?",
    answer:
      "The state HEAR program operates through local community administrators, not a single statewide portal. Email HomeRebates@commerce.wa.gov to find your local administrator. Known administrators include United Hub (wahear.com) serving Clark, King, Pierce, Thurston, and Yakima counties, and Spokane County Housing & Community Development.",
  },
  {
    question: "What PSE rebates are available for heat pumps?",
    answer:
      "Puget Sound Energy offers $1,500 for converting from electric resistance to an air-source heat pump ($2,400 for income-qualified). Gas-to-heat-pump fuel switching commands up to $4,000 income-qualified. The Pierce County HEAR program adds $5,000 for cold-climate heat pump installations. Starting April 2, 2026, all installations must use a PSE Trade Ally or Recommended Energy Professional.",
  },
  {
    question: "What is Initiative 2066 and does it affect heat pump rebates?",
    answer:
      "Initiative 2066 was a voter-approved measure in November 2024 that aimed to prevent limits on natural gas. A King County judge struck it down as unconstitutional in March 2025. The case was appealed directly to the Washington Supreme Court, which heard oral arguments in January 2026. A ruling is expected by summer 2026. Existing heat pump rebate programs have not been affected by I-2066.",
  },
  {
    question: "When will Washington's federal HARP/HOMES programs launch?",
    answer:
      "As of late January 2026, Washington Commerce reported being at Step 5 of 7 — 'program operation preparation' — with Guidehouse selected as the statewide administrator. No specific launch date has been announced. Rebates will not be retroactive.",
  },
  {
    question:
      "Do I need a cold-climate heat pump in Washington?",
    answer:
      "It depends on where you live. Western Washington's mild maritime climate works well with standard heat pumps. Eastern Washington (Spokane, Pullman) requires cold-climate models rated to 0°F or below. Most utility programs now require minimum HSPF2 ratings of 7.5–8.5. All state HEAR-funded installations require cold-climate rated systems.",
  },
];

export default function WashingtonHeatPumps() {
  const waIncentive = incentives.WA;
  const formattedDate = formatDate(waIncentive.lastVerified);

  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50 to-white py-10 md:py-14">
        <div className="container-narrow">
          <p className="text-brand-600 font-medium mb-2">
            <Link href="/heat-pumps" className="hover:underline">
              Heat Pump Incentives
            </Link>{" "}
            / Washington
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Washington Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Federal tax credits are gone. Washington homeowners now rely on
            utility rebates (PSE up to $5,000 income-qualified), an active
            state-funded HEAR program, and upcoming federal HARP/HOMES rebates
            (up to $8,000). Here&apos;s what&apos;s available now and
            what&apos;s coming.
          </p>
          <p className="text-sm text-gray-500 mt-3">
            Last updated: {formattedDate}
          </p>
        </div>
      </section>

      {/* Status Card */}
      <section className="py-8">
        <div className="container-narrow">
          <StatusCard incentive={waIncentive} />
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-8 border-t border-gray-100">
        <div className="container-narrow">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <p className="font-bold text-red-700 mb-1">Federal Tax Credits</p>
              <p className="text-gray-700 text-sm">
                25C and 25D both{" "}
                <Link
                  href="/federal-heat-pump-tax-credit-expired"
                  className="text-brand-600 underline"
                >
                  ended December 31, 2025
                </Link>
                . No federal tax credit for 2026 installations.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <p className="font-bold text-green-700 mb-1">
                State HEAR — Active
              </p>
              <p className="text-gray-700 text-sm">
                ~$103.6M from Climate Commitment Act. For households ≤150% AMI.
                Apply through local administrators.
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="font-bold text-amber-700 mb-1">
                Federal HARP/HOMES
              </p>
              <p className="text-gray-700 text-sm">
                Up to $8,000 for heat pumps. Not yet launched — Step 5 of 7 in
                DOE preparation. Not retroactive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Federal Credits Expired */}
      <section className="py-10 border-t border-gray-100">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Federal Heat Pump Tax Credits — Ended
          </h2>
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
            <p className="text-gray-700 mb-3">
              <strong>Section 25C</strong> is not available for property placed
              in service after December 31, 2025, and{" "}
              <strong>Section 25D</strong> is not available for expenditures
              made after December 31, 2025. Both were terminated early by the
              One Big Beautiful Bill Act (OBBBA), signed July 4, 2025. For
              Washington homeowners, that means no federal residential heat pump
              tax credit is available for 2026 installations.
            </p>
            <p className="text-gray-700 mb-3">
              If you completed a heat pump installation by December 31, 2025,
              you can still claim the credit on your 2025 tax return using IRS
              Form 5695.
            </p>
            <p className="text-sm text-gray-500">
              Source:{" "}
              <a
                href="https://www.irs.gov/credits-deductions/energy-efficient-home-improvement-credit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 hover:underline"
              >
                IRS — Energy Efficient Home Improvement Credit ↗
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Utility Rebates */}
      {/* TODO: Add internal link to /heat-pumps/how-much-does-a-heat-pump-cost when that page exists */}
      <section className="py-10 border-t border-gray-100">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Utility Heat Pump Rebates
          </h2>
          <p className="text-gray-600 mb-6">
            Washington&apos;s utility rebates are the most accessible incentive
            for most homeowners — no income restrictions for standard tiers.
          </p>

          {/* PSE */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Puget Sound Energy (PSE) — Largest Utility
            </h3>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 pr-4 font-semibold">
                      Conversion Type
                    </th>
                    <th className="text-left py-3 pr-4 font-semibold">
                      Standard
                    </th>
                    <th className="text-left py-3 font-semibold">
                      Income-Qualified
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 pr-4">
                      Electric resistance → air-source HP
                    </td>
                    <td className="py-3 pr-4 font-semibold">$1,500</td>
                    <td className="py-3 font-semibold">$2,400</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 pr-4">Gas → heat pump (fuel switch)</td>
                    <td className="py-3 pr-4 font-semibold">Up to $2,500</td>
                    <td className="py-3 font-semibold">Up to $4,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 pr-4">
                      Pierce County HEAR (cold-climate HP)
                    </td>
                    <td className="py-3 pr-4 text-gray-400">—</td>
                    <td className="py-3 font-semibold">$5,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Note:</strong> Starting April 2, 2026, all PSE heat pump
              installations must use a PSE Trade Ally or Recommended Energy
              Professional. The City of Lacey has partnered with PSE to offer
              matching $4,000 rebates for income-qualified gas customers.
            </p>
            <p className="text-sm text-gray-500">
              Source:{" "}
              <a
                href="https://www.pse.com/en/rebates/heating/electric-resistance-to-air-source-heat-pump-conversion-rebate"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 hover:underline"
              >
                PSE — Heat Pump Rebates ↗
              </a>
            </p>
          </div>

          {/* Seattle City Light */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Seattle City Light
            </h3>
            <p className="text-gray-600 mb-3">
              Standard rebates of $300–$600, with $2,000 for oil-to-heat-pump
              conversions under the <strong>Clean Heat program</strong> (targeting
              oil-free Seattle by 2030). The{" "}
              <strong>HomeWise Program</strong> provides free heat pump
              installations for income-eligible Seattle households.
            </p>
            <p className="text-gray-600 mb-3">
              The <strong>Energy Smart Eastside</strong> collaborative (Bellevue,
              Issaquah, Kirkland, Mercer Island, Redmond, Sammamish) offers a
              Boost Program that fully covers heat pump costs for households at
              ≤80% AMI, stackable with PSE utility incentives.
            </p>
            <p className="text-sm text-gray-500">
              Source:{" "}
              <a
                href="https://www.seattle.gov/city-light/residential-services/home-energy-solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 hover:underline"
              >
                Seattle City Light — Home Energy Solutions ↗
              </a>
            </p>
          </div>

          {/* Other Utilities */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Other Utilities
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 pr-4 font-semibold">
                      Utility
                    </th>
                    <th className="text-left py-3 pr-4 font-semibold">
                      Heat Pump Rebate
                    </th>
                    <th className="text-left py-3 font-semibold">Territory</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 pr-4">Tacoma Power</td>
                    <td className="py-3 pr-4 font-semibold">$1,000–$2,000</td>
                    <td className="py-3">Tacoma</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 pr-4">Clark Public Utilities</td>
                    <td className="py-3 pr-4 font-semibold">$500–$1,250</td>
                    <td className="py-3">Clark County</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 pr-4">Snohomish County PUD</td>
                    <td className="py-3 pr-4 font-semibold">$1,800–$2,500</td>
                    <td className="py-3">Snohomish County</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 pr-4">Avista</td>
                    <td className="py-3 pr-4 font-semibold">$500–$1,000</td>
                    <td className="py-3">Eastern WA (Spokane area)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              Avista rebate amounts may change — verify current figures at
              1-800-227-9187 or rebates@myavista.com. All utility rebate amounts
              are subject to change and should be confirmed before purchasing.
            </p>
          </div>
        </div>
      </section>

      {/* State HEAR (CCA-funded) */}
      {/* TODO: Add internal link to /heat-pumps/income-qualified-programs when that page exists */}
      <section className="py-10 border-t border-gray-100">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            State HEAR Program — Active Now
          </h2>
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
            <p className="font-semibold text-green-700 mb-2">
              ✅ Currently Accepting Applications
            </p>
            <p className="text-gray-700 text-sm mb-3">
              Washington&apos;s state-funded HEAR program is separate from the
              federal IRA programs. It&apos;s funded by approximately{" "}
              <strong>$103.6 million</strong> from Climate Commitment Act
              cap-and-invest auction revenue and serves households at or below
              150% AMI.
            </p>
            <p className="text-gray-700 text-sm">
              The program covers heat pumps (ducted, ductless, air-source,
              ground-source), heat pump water heaters, and induction cooking. All
              heat pumps must be cold-climate rated. Rebates are distributed
              through local community administrators — email{" "}
              <strong>HomeRebates@commerce.wa.gov</strong> to find yours.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
            <p className="font-semibold text-blue-700 mb-2">
              What is AMI and do I qualify?
            </p>
            <p className="text-sm text-gray-700">
              AMI stands for Area Median Income — the midpoint household income
              for your county. Most high-value rebates (state HEAR and future
              HARP) are limited to households earning ≤150% of AMI.
              Lower-income households (≤80% AMI) qualify for the largest
              incentives. Use the{" "}
              <a
                href="https://homes.rewiringamerica.org/calculator"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 hover:underline"
              >
                Rewiring America Savings Calculator ↗
              </a>{" "}
              to check your eligibility by zip code.
            </p>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Known Active Administrators
          </h3>
          <div className="space-y-3 mb-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900">United Hub</p>
              <p className="text-sm text-gray-600">
                Serves Clark, King, Pierce, Thurston, and Yakima counties.
                Apply at{" "}
                <a
                  href="https://www.wahear.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 hover:underline"
                >
                  wahear.com ↗
                </a>
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900">
                Spokane County Housing &amp; Community Development
              </p>
              <p className="text-sm text-gray-600">
                Serves Spokane County. Apply at{" "}
                <a
                  href="https://www.spokanecounty.gov/5727/Home-Electrification-Appliance-Rebates-H"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 hover:underline"
                >
                  spokanecounty.gov ↗
                </a>
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-500">
            Source:{" "}
            <a
              href="https://www.commerce.wa.gov/energy-incentives/hear/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              WA Commerce — State HEAR Program ↗
            </a>{" "}
            | Verified {lastVerified}
          </p>
        </div>
      </section>

      {/* Federal HARP/HOMES */}
      <section className="py-10 border-t border-gray-100">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Federal HARP &amp; HOMES Rebates — Not Yet Launched
          </h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
            <p className="font-semibold text-blue-700 mb-2">
              🕐 Step 5 of 7 — &quot;Program Operation Preparation&quot;
            </p>
            <p className="text-gray-700 text-sm mb-3">
              As of January 29, 2026, Washington Commerce is in the final stage
              of gaining U.S. Department of Energy authorization for program
              launch. <strong>Guidehouse</strong> was selected as the statewide
              administrator in September 2025. Two steps remain: receiving
              DOE&apos;s approval to launch (Step 6) and statewide launch with
              open applications (Step 7).
            </p>
            <p className="text-gray-700 text-sm">
              Rebates will <strong>not be retroactive</strong> — applicants must
              be approved before purchasing equipment. Washington&apos;s
              allocation is <strong>$69 million for HARP</strong> and{" "}
              <strong>$64 million for HOMES</strong>.
            </p>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            HARP Rebate Amounts (When Live)
          </h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 pr-4 font-semibold">
                    Income Level
                  </th>
                  <th className="text-left py-3 pr-4 font-semibold">
                    Heat Pump Rebate
                  </th>
                  <th className="text-left py-3 font-semibold">Coverage</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 pr-4">≤80% AMI</td>
                  <td className="py-3 pr-4 font-semibold">Up to $8,000</td>
                  <td className="py-3">100% of costs (up to cap)</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">80–150% AMI</td>
                  <td className="py-3 pr-4 font-semibold">Up to $4,000</td>
                  <td className="py-3">50% of costs (up to cap)</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">&gt;150% AMI</td>
                  <td className="py-3 pr-4 text-gray-400">Not eligible</td>
                  <td className="py-3 text-gray-400">—</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-600 mb-4">
            $8,000 is the per-product cap for a qualifying heat pump. Actual
            reimbursement depends on income tier and total project cost. All HARP
            measures combined are subject to a{" "}
            <strong>$14,000 per household</strong> maximum.
          </p>

          <p className="text-sm text-gray-500">
            Source:{" "}
            <a
              href="https://www.commerce.wa.gov/energy-incentives/ira-home-energy-rebates/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              WA Commerce — IRA Home Energy Rebates ↗
            </a>{" "}
            | Verified {lastVerified}
          </p>
        </div>
      </section>

      {/* I-2066 */}
      <section className="py-10 border-t border-gray-100">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Initiative 2066 &amp; What It Means for Rebates
          </h2>
          <p className="text-gray-600 mb-4">
            Initiative 2066 was a voter-approved measure in November 2024 that
            aimed to prevent limits on natural gas — blocking building codes from
            discouraging gas, stopping PSE&apos;s gas transition plan, and
            restricting municipal energy standards.
          </p>
          <p className="text-gray-600 mb-4">
            In March 2025, a King County judge struck I-2066 down as
            unconstitutional, finding it violated the single-subject rule. The
            Building Industry Association of Washington (BIAW) and Attorney
            General appealed directly to the Washington Supreme Court, which
            heard oral arguments on January 22, 2026. A ruling is expected by
            approximately summer 2026.
          </p>
          <div className="bg-gray-50 rounded-xl p-5 mb-4">
            <p className="font-semibold text-gray-900 mb-2">
              What this means for heat pump rebates:
            </p>
            <p className="text-sm text-gray-600">
              <strong>Nothing has changed for existing programs.</strong> All
              utility rebates, the state HEAR program, and the upcoming federal
              HARP/HOMES programs are unaffected by I-2066 regardless of the
              Supreme Court outcome. The initiative targets building codes and
              utility planning — not incentive programs. If the court upholds the
              lower court ruling (striking I-2066 down), Washington&apos;s
              electrification policies would continue as originally planned.
            </p>
          </div>
          <p className="text-sm text-gray-500">
            Source:{" "}
            <a
              href="https://washingtonstatestandard.com/2026/01/22/legal-fight-over-natural-gas-initiative-crescendoes-at-wa-supreme-court/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              Washington State Standard — I-2066 Supreme Court ↗
            </a>{" "}
            | Verified {lastVerified}
          </p>
        </div>
      </section>

      {/* Stacking */}
      <section className="py-10 border-t border-gray-100">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Can Washington Heat Pump Rebates Be Combined?
          </h2>
          <p className="text-gray-600 mb-4">
            Yes, with some restrictions. Washington has two separate HEAR-type
            programs, plus utility rebates:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <p className="font-bold text-green-700 mb-3">✓ Can Stack</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>State HEAR + utility rebates</li>
                <li>Utility rebates + city matching programs (e.g., Lacey)</li>
                <li>
                  Federal HARP + utility rebates (expected when live — confirm
                  stacking rules at launch)
                </li>
                <li>Energy Smart Eastside Boost + PSE</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <p className="font-bold text-red-700 mb-3">✗ Cannot Stack</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  Federal HARP + HOMES for same project (different measures OK)
                </li>
                <li>Total incentives cannot exceed project cost</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-5">
            <p className="text-sm text-gray-600">
              <strong>Best scenario for income-eligible PSE customers (when HARP launches):</strong>{" "}
              PSE rebate ($2,400–$4,000) + state HEAR + future HARP
              ($4,000–$8,000). Some households could see near-zero out-of-pocket
              costs. Confirm stacking eligibility with each program before
              relying on combined amounts.
            </p>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
            Real-World Savings Example
          </h3>
          <div className="bg-gray-50 rounded-xl p-5">
            <p className="text-sm text-gray-600">
              A moderate-income PSE customer in Pierce County replacing electric
              baseboard with a cold-climate heat pump could combine a PSE
              income-qualified rebate ($2,400), the state CCA-funded HEAR
              program (amount varies by administrator), and — when it launches —
              a federal HARP rebate (up to $4,000 at 80–150% AMI). In some
              cases, total incentives can cover most or all of a typical
              installation. Actual savings depend on your income, utility,
              location, and system size — confirm amounts with each program
              before purchasing.
            </p>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-10 border-t border-gray-100">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How to Apply for Washington Heat Pump Rebates
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Utility Rebates (PSE, SCL, Tacoma Power, etc.)
              </h3>
              <p className="text-gray-600 text-sm">
                Apply through your utility&apos;s rebate portal after
                installation. PSE requires Trade Ally contractors starting April
                2, 2026. Check your utility&apos;s website for current
                application forms.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                State HEAR (CCA-Funded, Active Now)
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                Contact your local administrator. Email{" "}
                <strong>HomeRebates@commerce.wa.gov</strong> to find yours, or
                visit{" "}
                <a
                  href="https://www.wahear.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 hover:underline"
                >
                  wahear.com ↗
                </a>{" "}
                for Clark, King, Pierce, Thurston, and Yakima counties.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Federal HARP/HOMES (When Live)
              </h3>
              <p className="text-gray-600 text-sm">
                No application portal yet. Guidehouse will administer
                statewide. Sign up for updates at{" "}
                <a
                  href="https://www.commerce.wa.gov/energy-incentives/ira-home-energy-rebates/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 hover:underline"
                >
                  WA Commerce IRA page ↗
                </a>
                .
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Check Your AMI (Income Eligibility)
              </h3>
              <p className="text-gray-600 text-sm">
                Use the{" "}
                <a
                  href="https://homes.rewiringamerica.org/calculator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 hover:underline"
                >
                  Rewiring America Savings Calculator ↗
                </a>{" "}
                to check your AMI percentage. Washington Commerce also provides
                an AMI threshold table (Excel) on their IRA Home Energy Rebates
                page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* East-West Divide */}
      <section className="py-10 border-t border-gray-100">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Western vs. Eastern Washington: Climate Considerations
          </h2>
          <p className="text-gray-600 mb-4">
            Washington&apos;s climate varies dramatically. Western Washington
            (Seattle, Olympia, Bellingham) has mild maritime winters where
            standard heat pumps perform well year-round. Eastern Washington
            (Spokane, Pullman, Wenatchee) can drop below 0°F, requiring
            cold-climate models.
          </p>
          <div className="bg-gray-50 rounded-xl p-5">
            <p className="text-sm text-gray-600 mb-2">
              <strong>Western WA:</strong> Standard heat pumps work well.
              Oil-to-heat-pump conversion programs are particularly active in
              Seattle.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Eastern WA:</strong> Cold-climate rated systems required
              (0°F or below). Avista rebates are more modest ($500–$1,000) —
              federal HARP will be especially important when it launches. Eastern
              WA allows backup gas systems for extreme cold under building code.
            </p>
          </div>
        </div>
      </section>

      {/* Cross-Links */}
      <section className="py-8 border-t border-gray-100">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Compare Heat Pump Rebates in Other States
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/heat-pumps/states/or"
              className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors text-sm"
            >
              Oregon →
            </Link>
            <Link
              href="/heat-pumps/states/ny"
              className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors text-sm"
            >
              New York →
            </Link>
            <Link
              href="/heat-pumps/states/mn"
              className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors text-sm"
            >
              Minnesota →
            </Link>
            <Link
              href="/heat-pumps/states/ma"
              className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors text-sm"
            >
              Massachusetts →
            </Link>
            <Link
              href="/heat-pumps/states/me"
              className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors text-sm"
            >
              Maine →
            </Link>
            <Link
              href="/heat-pumps/states/ca"
              className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors text-sm"
            >
              California →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 border-t border-gray-100">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-b border-gray-100 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-8 border-t border-gray-100">
        <div className="container-narrow">
          <p className="text-sm text-gray-500">
            Last updated: {formattedDate}. Information sourced from Washington
            Department of Commerce, Puget Sound Energy, Seattle City Light, and
            federal program documentation. Rebate amounts and availability may
            change — verify with program administrators before making purchasing
            decisions.
          </p>
        </div>
      </section>
    </>
  );
}
