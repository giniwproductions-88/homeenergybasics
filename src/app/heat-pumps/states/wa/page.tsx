import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Washington Heat Pump Rebates 2026: $1,500–$5,000 + State HEAR & PSE Programs | Home Energy Basics",
  description:
    "PSE offers up to $5,000 income-qualified. State HEAR is active for ≤150% AMI. Federal HARP not yet launched. Federal credits ended. Every Washington heat pump incentive in 2026.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/wa",
  },
  openGraph: {
    title: "Washington Heat Pump Rebates 2026",
    description:
      "PSE up to $5,000, state-funded HEAR active, federal HARP pending — the complete guide to Washington heat pump incentives after federal credits expired.",
    url: "https://homeenergybasics.com/heat-pumps/states/wa",
    type: "article",
  },
};

export default function WashingtonPage() {
  const waIncentive = incentives.WA;
  const formattedDate = formatDate(waIncentive.lastVerified);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What heat pump rebates are available in Washington in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Washington heat pump rebates come from three layers: utility rebates (PSE up to $5,000 income-qualified, Seattle City Light $300\u2013$2,000, Snohomish PUD $1,800\u2013$2,500), the active state-funded HEAR program ($103.6M from Climate Commitment Act for households \u2264150% AMI), and the upcoming federal HARP program (up to $8,000, not yet launched). Federal 25C and 25D tax credits expired December 31, 2025.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between the state HEAR program and the federal HARP?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Washington has two separate programs. The state HEAR program is funded by the Climate Commitment Act (cap-and-invest auction revenue) and is currently active for households at or below 150% AMI. The federal HARP is funded by the IRA and has not launched yet \u2014 it\u2019s in final DOE preparation. Both offer heat pump rebates but through different funding sources and administrators.",
        },
      },
      {
        "@type": "Question",
        name: "How do I apply for Washington\u2019s state HEAR program?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The state HEAR program operates through local community administrators, not a single statewide portal. Email HomeRebates@commerce.wa.gov to find your local administrator. Known administrators include United Hub (wahear.com) serving Clark, King, Pierce, Thurston, and Yakima counties, and Spokane County Housing and Community Development.",
        },
      },
      {
        "@type": "Question",
        name: "What PSE rebates are available for heat pumps?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Puget Sound Energy offers $1,500 for converting from electric resistance to an air-source heat pump ($2,400 for income-qualified). Gas-to-heat-pump fuel switching commands up to $4,000 income-qualified. The Pierce County HEAR program adds $5,000 for cold-climate heat pump installations. Starting April 2, 2026, all installations must use a PSE Trade Ally or Recommended Energy Professional.",
        },
      },
      {
        "@type": "Question",
        name: "What is Initiative 2066 and does it affect heat pump rebates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Initiative 2066 was a voter-approved measure in November 2024 that aimed to prevent limits on natural gas. A King County judge struck it down as unconstitutional in March 2025. The case was appealed directly to the Washington Supreme Court, which heard oral arguments in January 2026. A ruling is expected by summer 2026. Existing heat pump rebate programs have not been affected by I-2066.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a cold-climate heat pump in Washington?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on where you live. Western Washington\u2019s mild maritime climate works well with standard heat pumps. Eastern Washington (Spokane, Pullman) requires cold-climate models rated to 0\u00b0F or below. Most utility programs now require minimum HSPF2 ratings of 7.5\u20138.5. All state HEAR-funded installations require cold-climate rated systems.",
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
            {" "}/ Washington
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Washington Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Federal tax credits are gone, but Washington has more active incentive layers than most states. Utility rebates from PSE reach up to <strong>$5,000</strong> income-qualified, a state-funded HEAR program backed by <strong>$103.6 million</strong> in Climate Commitment Act revenue is accepting applications, and federal HARP rebates (up to <strong>$8,000</strong>) are in final preparation. Seattle City Light offers <strong>$2,000</strong> for oil-to-heat-pump conversions. This guide covers all major Washington heat pump incentives available in 2026, including PSE, Seattle City Light, Snohomish PUD, Avista, the state HEAR program, and the pending federal HARP/HOMES programs. Here&apos;s what&apos;s actually available.
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
          <StatusCard incentive={waIncentive} />
        </div>
      </section>

      {/* 3. SHORT VERSION */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Short Version</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ State HEAR — Active Now</p>
              <p className="text-sm text-green-900">~$103.6M from Climate Commitment Act. For households ≤150% AMI. Apply through local community administrators. All heat pumps must be cold-climate rated.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Utility Rebates — Active</p>
              <p className="text-sm text-green-900">PSE: $1,500–$5,000. Seattle City Light: $300–$2,000. Snohomish PUD: $1,800–$2,500. Tacoma Power: $1,000–$2,000. No income restrictions for standard tiers.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Total Potential Savings</p>
              <p className="text-sm text-green-900">$1,500–$5,000 (above 150% AMI) from utility rebates alone. Income-qualified households can stack state HEAR + utility for substantially more. Full electrification packages could reach near-zero out-of-pocket if HARP launches.</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">✗ Federal Tax Credits Expired</p>
              <p className="text-sm text-red-900">Section 25C ($2,000 for heat pumps) and Section 25D (30% for geothermal) both ended December 31, 2025. No replacement exists in 2026.</p>
            </div>
            <div className="md:col-span-2 bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="font-semibold text-amber-800 mb-1">⚠ Federal HARP/HOMES — Not Yet Launched</p>
              <p className="text-sm text-amber-900">Washington&apos;s $69M HARP + $64M HOMES allocation is at Step 5 of 7 in DOE preparation. Guidehouse selected as statewide administrator. Rebates will not be retroactive — do not count on these when budgeting a 2026 installation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEDERAL EXPIRED — bg-gray-50 */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Federal Tax Credits Have Ended</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <p className="text-red-900 leading-relaxed">
              <strong>Section 25C</strong> is not available for property placed in service after <strong>December 31, 2025</strong>, and <strong>Section 25D</strong> is not available for expenditures made after December 31, 2025. Both were terminated early by the One Big Beautiful Bill Act (signed July 4, 2025). For Washington homeowners, that means no federal residential heat pump tax credit is available for 2026 installations. If you completed a heat pump installation by December 31, 2025, you can still claim the credit on your 2025 tax return using IRS Form 5695.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            For full details on what changed, see our <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">Federal Heat Pump Tax Credits Ended</Link> guide.
          </p>
        </div>
      </section>

      {/* 5. STATE HEAR (CCA-funded) — white */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">State HEAR Program — Active Now</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Washington&apos;s state-funded HEAR program is separate from the federal IRA programs. It&apos;s funded by approximately <strong>$103.6 million</strong> from Climate Commitment Act cap-and-invest auction revenue and serves households at or below 150% of Area Median Income (AMI). The program covers heat pumps (ducted, ductless, air-source, ground-source), heat pump water heaters, and induction cooking. All heat pumps must be cold-climate rated.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Known Active Administrators</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Administrator</th>
                  <th className="text-left p-3 font-semibold">Counties Served</th>
                  <th className="text-left p-3 font-semibold">Apply</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">United Hub</td>
                  <td className="p-3">Clark, King, Pierce, Thurston, Yakima</td>
                  <td className="p-3"><a href="https://www.wahear.com/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">wahear.com</a></td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Spokane County HCD</td>
                  <td className="p-3">Spokane County</td>
                  <td className="p-3"><a href="https://www.spokanecounty.gov/5727/Home-Electrification-Appliance-Rebates-H" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">spokanecounty.gov</a></td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-gray-500">Other counties</td>
                  <td className="p-3 text-gray-500" colSpan={2}>Email HomeRebates@commerce.wa.gov to find your local administrator</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-blue-800 mb-1">What is AMI and do I qualify?</p>
            <p className="text-sm text-blue-900">AMI stands for Area Median Income — the midpoint household income for your county. Most high-value rebates (state HEAR and future HARP) are limited to households earning ≤150% AMI. Lower-income households (≤80% AMI) qualify for the largest incentives. Use the <a href="https://homes.rewiringamerica.org/calculator" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Rewiring America Savings Calculator</a> to check your eligibility by zip code.</p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="font-semibold text-amber-800 mb-1">⚠ Common Mistake: Confusing State HEAR with Federal HARP</p>
            <p className="text-sm text-amber-900">Washington has two separate HEAR-type programs with different funding sources. The state HEAR (Climate Commitment Act) is active now. The federal HARP (IRA-funded) has not launched. Don&apos;t assume you&apos;re covered by one when you&apos;ve applied to the other — they are administered independently.</p>
          </div>
        </div>
      </section>

      {/* 6. FEDERAL HARP/HOMES — bg-gray-50 */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Federal HARP &amp; HOMES Rebates — Not Yet Launched</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            As of January 29, 2026, Washington Commerce is at Step 5 of 7 — &quot;program operation preparation&quot; — with <strong>Guidehouse</strong> selected as the statewide administrator. Two steps remain: receiving DOE&apos;s approval to launch (Step 6) and statewide launch with open applications (Step 7). Washington&apos;s allocation is <strong>$69 million for HARP</strong> and <strong>$64 million for HOMES</strong>. Rebates will not be retroactive.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">HARP Rebate Structure (When Launched)</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Income Level</th>
                  <th className="text-left p-3 font-semibold">Heat Pump Rebate</th>
                  <th className="text-left p-3 font-semibold">Coverage</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Below 80% AMI</td>
                  <td className="p-3 font-semibold">Up to $8,000</td>
                  <td className="p-3">100% of costs (up to cap)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">80–150% AMI</td>
                  <td className="p-3 font-semibold">Up to $4,000</td>
                  <td className="p-3">50% of costs (up to cap)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-gray-500">Above 150% AMI</td>
                  <td className="p-3 text-gray-500">Not eligible</td>
                  <td className="p-3 text-gray-500">&mdash;</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed">
            The <strong>$14,000 per household</strong> cap applies across all HARP measures combined. HOMES provides performance-based rebates of <strong>$2,000–$8,000</strong> for whole-home retrofits achieving 20–35%+ energy savings, available at all income levels.
          </p>
        </div>
      </section>

      {/* 7. UTILITY PROGRAMS — white */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Utility Rebate Programs</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Washington&apos;s utility rebates are the most accessible incentive for most homeowners — no income restrictions for standard tiers. What you can get depends on which utility serves your home.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Puget Sound Energy (PSE) — Largest Utility</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Conversion Type</th>
                  <th className="text-left p-3 font-semibold">Standard</th>
                  <th className="text-left p-3 font-semibold">Income-Qualified</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Electric resistance → air-source HP</td>
                  <td className="p-3 font-semibold">$1,500</td>
                  <td className="p-3 font-semibold">$2,400</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Gas → heat pump (fuel switch)</td>
                  <td className="p-3 font-semibold">Up to $2,500</td>
                  <td className="p-3 font-semibold">Up to $4,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Pierce County HEAR (cold-climate HP)</td>
                  <td className="p-3 text-gray-500">&mdash;</td>
                  <td className="p-3 font-semibold">$5,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            Starting <strong>April 2, 2026</strong>, all PSE heat pump installations must use a PSE Trade Ally or Recommended Energy Professional. The City of Lacey has partnered with PSE to offer matching <strong>$4,000</strong> rebates for income-qualified gas customers.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Seattle City Light</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Standard rebates of <strong>$300–$600</strong>, with <strong>$2,000</strong> for oil-to-heat-pump conversions under the Clean Heat program (targeting oil-free Seattle by 2030). The <strong>HomeWise Program</strong> provides free heat pump installations for income-eligible Seattle households. The <strong>Energy Smart Eastside</strong> collaborative (Bellevue, Issaquah, Kirkland, Mercer Island, Redmond, Sammamish) offers a Boost Program that fully covers heat pump costs for households at ≤80% AMI, stackable with PSE utility incentives.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Other Utilities</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Utility</th>
                  <th className="text-left p-3 font-semibold">Heat Pump Rebate</th>
                  <th className="text-left p-3 font-semibold">Territory</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Tacoma Power</td>
                  <td className="p-3 font-semibold">$1,000–$2,000</td>
                  <td className="p-3">Tacoma</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Clark Public Utilities</td>
                  <td className="p-3 font-semibold">$500–$1,250</td>
                  <td className="p-3">Clark County</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Snohomish County PUD</td>
                  <td className="p-3 font-semibold">$1,800–$2,500</td>
                  <td className="p-3">Snohomish County</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Avista</td>
                  <td className="p-3 font-semibold">$500–$1,000</td>
                  <td className="p-3">Eastern WA (Spokane area)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed">
            All utility rebate amounts are subject to change and should be confirmed before purchasing. Avista amounts may change — verify at 1-800-227-9187 or rebates@myavista.com.
          </p>
        </div>
      </section>

      {/* 8. LOCAL / I-2066 CONTEXT — bg-gray-50 */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Initiative 2066 &amp; What It Means for Rebates</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Initiative 2066 was a voter-approved measure in November 2024 that aimed to prevent limits on natural gas — blocking building codes from discouraging gas, stopping PSE&apos;s gas transition plan, and restricting municipal energy standards. In March 2025, a King County judge struck I-2066 down as unconstitutional. The Building Industry Association of Washington appealed directly to the Washington Supreme Court, which heard oral arguments on January 22, 2026. A ruling is expected by approximately summer 2026.
          </p>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <p className="font-semibold text-gray-900 mb-1">What this means for heat pump rebates:</p>
            <p className="text-sm text-gray-600 mt-1"><strong>Nothing has changed for existing programs.</strong> All utility rebates, the state HEAR program, and the upcoming federal HARP/HOMES programs are unaffected by I-2066 regardless of the Supreme Court outcome. The initiative targets building codes and utility planning — not incentive programs.</p>
          </div>
        </div>
      </section>

      {/* 9. STACKING — white */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Programs Stack</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Washington has two separate HEAR-type programs plus utility rebates. State HEAR and utility rebates can stack. Federal HARP (when launched) is expected to stack with utility rebates but cannot combine with HOMES for the same measure. Total incentives cannot exceed project cost.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 150% AMI — PSE Territory</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>PSE electric resistance → HP: $1,500</li>
                <li>State HEAR: Not eligible (income-restricted)</li>
                <li>Federal HARP: Not eligible (income-restricted)</li>
                <li>Federal tax credit: $0 (expired)</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$1,500–$2,500</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">80–150% AMI — PSE Territory (Current)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>PSE income-qualified (electric resistance → HP): $2,400</li>
                <li>State HEAR (through local administrator): varies</li>
                <li>Federal HARP: $0 (not launched)</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$2,400 + state HEAR</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">Below 80% AMI — PSE Territory (If HARP Launches)</p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>PSE income-qualified (gas → HP): up to $4,000</li>
                <li>State HEAR: additional (varies by administrator)</li>
                <li>Federal HARP: up to $8,000</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Some households could see near-zero out-of-pocket costs</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-5">
            <p className="font-semibold text-gray-900 mb-1">What You&apos;ll Actually Pay</p>
            <p className="text-sm text-gray-700">On a typical <strong>$8,000–$15,000</strong> heat pump installation, most Washington homeowners above 150% AMI will pay <strong>$5,500–$13,500 out of pocket</strong> after utility rebates. Income-qualified households in PSE territory with active state HEAR can cut that significantly. If federal HARP launches, the best-case scenario for ≤80% AMI households could approach <strong>near-zero out of pocket</strong> — but confirm stacking eligibility with each program before relying on combined amounts.</p>
          </div>
        </div>
      </section>

      {/* 10. WEATHERIZATION — bg-gray-50 */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Weatherization Assistance</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Washington&apos;s Weatherization Assistance Program provides free energy efficiency upgrades for income-qualified households. Contact the Washington Department of Commerce at <a href="https://www.commerce.wa.gov/growing-the-economy/energy/home-energy-rebates/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">commerce.wa.gov</a> for more information.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Seattle City Light&apos;s HomeWise Program and Energy Smart Eastside&apos;s Boost Program both provide no-cost heat pump installations for income-eligible households, effectively serving as enhanced weatherization pathways.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <p className="font-semibold text-green-800 mb-1">✓ Best Candidates for Washington Heat Pump Incentives</p>
            <p className="text-sm text-green-900">Income-qualified PSE customers replacing electric resistance heating — $2,400 utility rebate plus state HEAR. Seattle residents heating with oil — $2,000 Clean Heat rebate from Seattle City Light. Eastside residents (Bellevue, Kirkland, Redmond, etc.) at ≤80% AMI — Energy Smart Eastside Boost covers full cost plus PSE stacks. Pierce County households at ≤150% AMI — $5,000 Pierce County HEAR through PSE. Any household at ≤150% AMI — apply to state HEAR through your local administrator now while federal HARP is pending.</p>
          </div>
        </div>
      </section>

      {/* 11. CLIMATE — white */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Climate Context</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Washington&apos;s climate varies dramatically between its western and eastern halves. This split affects both equipment selection and available rebates.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Region</th>
                  <th className="text-left p-3 font-semibold">IECC Zone</th>
                  <th className="text-left p-3 font-semibold">Winter Design Temp</th>
                  <th className="text-left p-3 font-semibold">Cold-Climate HP Needed?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Seattle / Puget Sound</td>
                  <td className="p-3">4C (Marine)</td>
                  <td className="p-3">~24–28°F</td>
                  <td className="p-3">No — standard HP works well</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Olympia / SW Washington</td>
                  <td className="p-3">4C (Marine)</td>
                  <td className="p-3">~20–24°F</td>
                  <td className="p-3">Standard HP fine</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Spokane</td>
                  <td className="p-3">5B (Cold-Dry)</td>
                  <td className="p-3">~0–5°F</td>
                  <td className="p-3 font-semibold">Essential — CCHP required</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Pullman / Wenatchee</td>
                  <td className="p-3">5B–6B</td>
                  <td className="p-3">Below 0°F</td>
                  <td className="p-3 font-semibold">Essential</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Western Washington&apos;s mild maritime climate makes standard heat pumps efficient year-round. Oil-to-heat-pump conversion programs are particularly active in Seattle. Eastern Washington requires cold-climate models rated to 0°F or below, and building code allows backup gas systems for extreme cold. Most utility programs now require minimum HSPF2 ratings of 7.5–8.5. All state HEAR-funded installations require cold-climate rated systems statewide. For more on battery storage and time-of-use strategies, see our <Link href="/battery" className="text-brand-600 hover:underline">home battery guide</Link>.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="font-semibold text-blue-800 mb-1">Avista customers in Eastern WA — federal HARP will be especially important</p>
            <p className="text-sm text-blue-900">Avista rebates are more modest ($500–$1,000) than western Washington utilities. When the federal HARP program launches, it will be a critical funding source for Eastern Washington households replacing gas or electric resistance heating with cold-climate heat pumps.</p>
          </div>
        </div>
      </section>

      {/* 12. HOW TO APPLY — bg-gray-50 */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Apply</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-gray-900">For utility rebates (PSE, SCL, Tacoma Power, etc.)</p>
                <p className="text-sm text-gray-700">Apply through your utility&apos;s rebate portal after installation. PSE requires Trade Ally contractors starting April 2, 2026. Check your utility&apos;s website for current application forms.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900">For state HEAR (CCA-funded, active now)</p>
                <p className="text-sm text-gray-700">Contact your local administrator. Email <strong>HomeRebates@commerce.wa.gov</strong> to find yours, or visit <a href="https://www.wahear.com/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">wahear.com</a> for Clark, King, Pierce, Thurston, and Yakima counties.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-900">For federal HARP/HOMES (when live)</p>
                <p className="text-sm text-gray-700">No application portal yet. Guidehouse will administer statewide. Sign up for updates at <a href="https://www.commerce.wa.gov/energy-incentives/ira-home-energy-rebates/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">WA Commerce IRA page</a>.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <p className="font-semibold text-gray-900">Check your AMI (income eligibility)</p>
                <p className="text-sm text-gray-700">Use the <a href="https://homes.rewiringamerica.org/calculator" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Rewiring America Savings Calculator</a> to check your AMI percentage. Washington Commerce also provides an AMI threshold table on their IRA Home Energy Rebates page.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. WHAT TO WATCH — white */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Watch</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">IRA Funding Runway</p>
              <p className="text-sm text-gray-600 mt-1">Washington&apos;s $133M in HARP/HOMES funding is authorized through September 2031 but could be affected by future federal budget actions. The One Big Beautiful Bill Act preserved existing IRA rebate allocations but did not extend them.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Federal HARP Launch Date</p>
              <p className="text-sm text-gray-600 mt-1">Guidehouse is the selected administrator but no launch date has been announced. When live, HARP could add $4,000–$8,000 for income-qualified households on top of existing utility and state HEAR rebates.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">I-2066 Supreme Court Ruling</p>
              <p className="text-sm text-gray-600 mt-1">Expected by summer 2026. Does not affect existing rebate programs but could influence future building code and utility planning for electrification in Washington.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">PSE Trade Ally Requirement</p>
              <p className="text-sm text-gray-600 mt-1">Starting April 2, 2026, all PSE heat pump installations must use a PSE Trade Ally or Recommended Energy Professional to qualify for rebates. Confirm your contractor is in the network before signing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 14. FAQ — bg-gray-50 */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
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

      {/* 15. SEE ALSO — white */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-3">See also</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/heat-pumps/states/or" className="text-brand-600 hover:underline">
                Oregon Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/id" className="text-brand-600 hover:underline">
                Idaho Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/ca" className="text-brand-600 hover:underline">
                California Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li>
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                Federal Heat Pump Tax Credits Ended
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

      {/* 16. SOURCES — bg-gray-50 */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="space-y-2 text-sm">
            {waIncentive.sources.map((source: { label: string; url: string }, index: number) => (
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
              <strong>Disclaimer:</strong> This page covers the main statewide, utility, and IRA heat pump incentives available to Washington homeowners in 2026. It does not calculate savings, guarantee eligibility, or represent any incentive program. Washington&apos;s federal HARP and HOMES programs have not yet launched and rebate amounts shown for those programs are based on the federal framework — actual program details may differ. The state HEAR program is administered through local community organizations and availability may vary by county. We verify status regularly but programs can change without notice. Always confirm current amounts and eligibility with your utility, WA Commerce, and your contractor before making decisions.
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
