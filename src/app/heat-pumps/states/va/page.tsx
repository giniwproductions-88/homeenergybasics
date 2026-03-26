import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Virginia Heat Pump Rebates 2026: $250–$2,000 + Dominion & Washington Gas Programs | Home Energy Basics",
  description:
    "Washington Gas offers up to $2,000 for dual-fuel systems. Dominion covers HPWHs up to $400. Federal credits ended. Here's every Virginia heat pump incentive in 2026.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/va",
  },
  openGraph: {
    title: "Virginia Heat Pump Rebates 2026",
    description:
      "Utility rebates of $250–$2,000 from Dominion, Washington Gas, and Appalachian Power — the complete guide to Virginia heat pump incentives after federal credits expired.",
    url: "https://homeenergybasics.com/heat-pumps/states/va",
    type: "article",
  },
};

export default function VirginiaPage() {
  const vaIncentive = incentives.VA;
  const formattedDate = formatDate(vaIncentive.lastVerified);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What heat pump rebates are available in Virginia in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Virginia\u2019s heat pump rebates in 2026 come primarily from utilities. Washington Gas provides up to $2,000 for dual-fuel heat pump installations in Northern Virginia. Dominion Energy offers $250\u2013$400 for heat pump water heaters and central heat pump rebates through its Home Retrofit Program. Appalachian Power offers $300\u2013$400 for ductless mini-splits. Federal Section 25C and 25D tax credits expired December 31, 2025. Virginia\u2019s $188 million in IRA-funded state rebate programs have not launched.",
        },
      },
      {
        "@type": "Question",
        name: "Is there a federal tax credit for heat pumps in Virginia in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. The federal Section 25C Energy Efficient Home Improvement Credit (up to $2,000 for heat pumps) and Section 25D Residential Clean Energy Credit (30% for geothermal) both expired December 31, 2025 under the One Big Beautiful Bill Act. There is no federal tax credit for heat pumps installed in 2026.",
        },
      },
      {
        "@type": "Question",
        name: "What happened to Virginia\u2019s HOMES and HEAR rebate programs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Virginia was allocated $188 million in IRA-funded rebates split between the HOMES program ($94.3M for whole-home retrofits up to $8,000) and HEAR ($94M for point-of-sale appliance rebates up to $14,000 per household). Neither program has launched. Virginia Energy says it is assessing the impact of federal funding freezes and executive orders on these programs.",
        },
      },
      {
        "@type": "Question",
        name: "Does Washington Gas offer heat pump rebates in Virginia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Washington Gas offers $2,000 for a dual-fuel heat pump with furnace replacement (requiring 15.2 SEER2 and 7.5 HSPF2 for the heat pump, plus 95% AFUE for the furnace) or $1,400 with an existing qualifying furnace at 90%+ AFUE. This pairs a heat pump with gas furnace backup and serves Northern Virginia customers.",
        },
      },
      {
        "@type": "Question",
        name: "Can I stack Virginia heat pump rebates with state and federal programs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Currently, utility rebates are the only active incentive layer. There is no federal credit and Virginia\u2019s state rebate programs have not launched. If HOMES and HEAR do launch, federal guidance indicates they can stack with utility rebates but cannot be combined for the same measure. Households above 150% of Area Median Income (AMI) would not qualify for HEAR.",
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
            {" "}/ Virginia
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Virginia Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Federal tax credits are gone. Virginia&apos;s <strong>$188 million</strong> in IRA-funded state rebates remain pending with no launch date. What you can actually get in 2026 depends on your utility — Washington Gas offers up to <strong>$2,000</strong> for dual-fuel systems, Dominion Energy covers heat pump water heaters at <strong>$250–$400</strong>, and Appalachian Power offers <strong>$300–$400</strong> for mini-splits. Most electric cooperatives offer no direct rebates at all. This guide covers all major Virginia heat pump incentives available in 2026, including Dominion Energy, Washington Gas, Appalachian Power, and the pending HOMES and HEAR programs. Here&apos;s what&apos;s actually available.
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
          <StatusCard incentive={vaIncentive} />
        </div>
      </section>

      {/* 3. SHORT VERSION */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Short Version</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Washington Gas (Northern VA)</p>
              <p className="text-sm text-green-900">Up to $2,000 for dual-fuel heat pump with furnace replacement. $1,400 with an existing qualifying furnace. The largest single rebate available in Virginia.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Dominion Energy (Statewide)</p>
              <p className="text-sm text-green-900">$250–$400 for heat pump water heaters. Central heat pump rebates through the Home Retrofit Program (audit required). $90 tune-up rebate. Free upgrades via EnergyShare for income-qualifying households.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Total Potential Savings</p>
              <p className="text-sm text-green-900">$250–$2,400 (above 150% AMI) depending on utility territory. If HEAR launches, income-qualified households below 80% of Area Median Income (AMI) could reach ~$14,000+ in combined incentives.</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">✗ Federal Tax Credits Expired</p>
              <p className="text-sm text-red-900">Section 25C ($2,000 for heat pumps) and Section 25D (30% for geothermal) both ended December 31, 2025. No replacement exists in 2026.</p>
            </div>
            <div className="md:col-span-2 bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="font-semibold text-amber-800 mb-1">⚠ $188M in State Rebates Pending — No Launch Date</p>
              <p className="text-sm text-amber-900">Virginia was allocated $188 million in HOMES and HEAR funding, but neither program is accepting applications. Virginia Energy is assessing the impact of federal funding freezes. These are not retroactive — purchases made before the launch date will not qualify. Do not count on these rebates when budgeting a 2026 installation.</p>
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
              The One Big Beautiful Bill Act (signed July 4, 2025) terminated both major residential energy tax credits. <strong>Section 25C</strong> (up to $2,000 for heat pumps at 30% of cost) is not allowed for property placed in service after <strong>December 31, 2025</strong>. <strong>Section 25D</strong> (30% with no cap for geothermal) is not allowed for expenditures made after December 31, 2025 — expenditures are treated as made when installation is completed, so even if you paid in 2025 but installation finished in 2026, no credit. Section 25C offered no carryforward; any unused credit was forfeited permanently. If your equipment was installed and operational on or before December 31, 2025, you can still claim on your 2025 tax return using IRS Form 5695.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Virginia&apos;s state informational page on tax credits still reflects pre-OBBB timelines and should not be relied on for 2026 tax-credit availability.
          </p>
          <p className="text-gray-700 leading-relaxed">
            For full details on what changed, see our <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">Federal Heat Pump Tax Credits Ended</Link> guide.
          </p>
        </div>
      </section>

      {/* 5. HEAR / Primary — white */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Home Electrification and Appliance Rebates (HEAR)</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Virginia was allocated approximately <strong>$94 million</strong> in HEAR funding through the Inflation Reduction Act. Virginia Energy administers the program. As of March 2026, the program has not launched — Virginia Energy says it is assessing the impact of federal funding freezes and executive orders.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">HEAR Rebate Structure (When Launched)</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            HEAR provides point-of-sale rebates for specific electrification equipment. Only households below 150% AMI are eligible. HEAR rebates apply only to replacement of a nonelectric appliance or a first-time heat pump purchase — homeowners replacing an existing heat pump should use HOMES instead.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Measure</th>
                  <th className="text-left p-3 font-semibold">≤80% AMI</th>
                  <th className="text-left p-3 font-semibold">80–150% AMI</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Heat pump (space)</td>
                  <td className="p-3 font-semibold">Up to $8,000 (100% of cost)</td>
                  <td className="p-3 font-semibold">Up to $4,000 (50% of cost)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">Up to $1,750</td>
                  <td className="p-3 font-semibold">Up to $1,750</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Electrical panel upgrade</td>
                  <td className="p-3 font-semibold">Up to $4,000</td>
                  <td className="p-3 font-semibold">Up to $4,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Insulation / air sealing</td>
                  <td className="p-3 font-semibold">Up to $1,600</td>
                  <td className="p-3 font-semibold">Up to $1,600</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-gray-500">Above 150% AMI</td>
                  <td className="p-3 text-gray-500" colSpan={2}>Not eligible — utility rebates only</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            The per-household cap is <strong>$14,000</strong> across all measures. Programs remain authorized through September 30, 2031 or until funds are depleted.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="font-semibold text-amber-800 mb-1">⚠ Common Mistake: Counting on HEAR Before It Launches</p>
            <p className="text-sm text-amber-900">HEAR rebates are not retroactive. If you install a heat pump before Virginia&apos;s program opens, you cannot claim the rebate later. Budget your project based on currently available utility rebates only, and treat HEAR as a potential bonus if the timing works out.</p>
          </div>
        </div>
      </section>

      {/* 6. HOMES / Secondary — bg-gray-50 */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">HOMES Performance-Based Rebates</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Home Owner Managing Energy Savings (HOMES) program received <strong>$94.3 million</strong> for Virginia. Unlike HEAR, HOMES pays based on measured or modeled energy savings for the whole home and is available to all income levels. Heat pumps qualify as part of a whole-home retrofit — not as a standalone measure. HOMES has not launched in Virginia.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Energy Savings</th>
                  <th className="text-left p-3 font-semibold">Standard Household</th>
                  <th className="text-left p-3 font-semibold">Low-Income (≤80% AMI)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">20–35% reduction</td>
                  <td className="p-3 font-semibold">$2,000</td>
                  <td className="p-3 font-semibold">$4,000</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">35%+ reduction</td>
                  <td className="p-3 font-semibold">$4,000</td>
                  <td className="p-3 font-semibold">$8,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            HOMES and HEAR cannot be combined for the same improvement, but a household could use HEAR for a heat pump and HOMES for insulation, or vice versa. Both can stack with utility rebates.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">No Virginia State Tax Credit</h3>
          <p className="text-gray-700 leading-relaxed">
            Virginia does not offer a state-level tax credit for heat pumps. There is no state-sponsored residential loan program for heat pump installations. Residential PACE (R-PACE) financing is not available in Virginia, though Commercial PACE operates in 20+ localities for multifamily and commercial properties.
          </p>
        </div>
      </section>

      {/* 7. UTILITY PROGRAMS — white */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Utility Rebate Programs</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            With federal credits expired and state programs frozen, utility rebates are the primary financial incentive for Virginia homeowners in 2026. What you can get depends entirely on which utility serves your home.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Dominion Energy Virginia</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Virginia&apos;s largest electric utility offers heat pump incentives through multiple programs. Due to popular demand, some 2026 programs are available on a limited basis.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Measure</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                  <th className="text-left p-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">HPWH (40–59 gallon)</td>
                  <td className="p-3 font-semibold">$250</td>
                  <td className="p-3">Must replace electric water heater; ENERGY STAR required</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">HPWH (60+ gallon)</td>
                  <td className="p-3 font-semibold">$400</td>
                  <td className="p-3">Mail-in rebate or instant discount via marketplace</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Central heat pump</td>
                  <td className="p-3 font-semibold">Varies</td>
                  <td className="p-3">Home Retrofit Program; requires energy evaluation with approved contractor</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump tune-up</td>
                  <td className="p-3 font-semibold">$90</td>
                  <td className="p-3">Existing heat pump; participating contractor required</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>EnergyShare Weatherization</strong> provides free home energy assessments and efficiency upgrades (including heat pump equipment) for households at or below 80% AMI, customers aged 60+ at 120% of state median income, or those receiving disability payments. Funded at <strong>$130M</strong> through 2028 under Virginia&apos;s Grid Transformation and Security Act.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Washington Gas — VA CARE Program</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Washington Gas serves Northern Virginia gas customers. The VA CARE program offers the largest single heat pump rebate in the state.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Configuration</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                  <th className="text-left p-3 font-semibold">Requirements</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Dual-fuel HP + new furnace</td>
                  <td className="p-3 font-semibold">$2,000</td>
                  <td className="p-3">15.2 SEER2, 7.5 HSPF2 + 95% AFUE furnace</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Dual-fuel HP + existing furnace</td>
                  <td className="p-3 font-semibold">$1,400</td>
                  <td className="p-3">Existing furnace must be 90%+ AFUE</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            This is a dual-fuel rebate that pairs a heat pump with gas furnace backup — not a full electrification incentive. Must replace an existing central AC system and use a participating contractor.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Appalachian Power (AEP Virginia)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Appalachian Power serves western Virginia. Only ductless mini-split heat pumps are rebated — no ducted whole-home heat pump rebate is offered.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Program</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                  <th className="text-left p-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Efficient Products (mini-split)</td>
                  <td className="p-3 font-semibold">$300</td>
                  <td className="p-3">SEER2 ≥15, EER2 ≥12.5; 1 per customer per year</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Home Performance (mini-split/HPWH)</td>
                  <td className="p-3 font-semibold">Up to $400/unit</td>
                  <td className="p-3">Audit-based pathway with approved contractors</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Electric Cooperatives and Smaller Utilities</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Virginia&apos;s electric cooperatives — including NOVEC, Rappahannock Electric Cooperative (REC), and Shenandoah Valley Electric Cooperative (SVEC) — generally do not offer direct cash rebates for heat pumps. Some provide alternative support: REC offers on-bill financing through its Vividly Brighter program, NOVEC provides low-interest HVAC financing through a bank partnership, and Harrisonburg Electric Commission offers rebates covering central heat pumps, mini-splits, and heat pump water heaters through its Energy Save &amp; Earn program.
          </p>

          <p className="text-gray-700 leading-relaxed">
            <strong>Columbia Gas</strong> and <strong>Virginia Natural Gas</strong> offer rebates only for gas equipment — neither provides any incentive for heat pumps or fuel switching.
          </p>
        </div>
      </section>

      {/* 8. LOCAL PROGRAMS — bg-gray-50 */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Local Programs</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Virginia cities and counties offer minimal direct heat pump incentives. The one active local program identified:
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Charlottesville — Retrofit Mini Grant</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Up to <strong>$2,000</strong> in partnership with the Local Energy Alliance Program (LEAP), covering heat pumps, heat pump water heaters, duct sealing, attic insulation, and electrical upgrades. This grant can stack with utility rebates.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Richmond, Virginia Beach, Norfolk, Arlington, and Alexandria have no identified city-specific heat pump rebate programs. Arlington County has published a building electrification whitepaper but offers no direct residential rebate.
          </p>
        </div>
      </section>

      {/* 9. STACKING — white */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Programs Stack</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            With federal credits expired and state programs frozen, the current stacking picture is straightforward — utility rebates are the only active layer. What you can get depends entirely on your utility territory.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 150% AMI — Northern Virginia (Washington Gas + Dominion)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Washington Gas dual-fuel rebate (new furnace): $2,000</li>
                <li>Dominion Energy HPWH (60+ gallon): $400</li>
                <li>Federal tax credit: $0 (expired)</li>
                <li>HEAR/HOMES: $0 (not launched)</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$2,400</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 150% AMI — Appalachian Power Territory</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Appalachian Power mini-split: $300–$400</li>
                <li>Federal tax credit: $0 (expired)</li>
                <li>HEAR/HOMES: $0 (not launched)</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$400</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">Below 80% AMI — If HEAR Launches (Dominion Territory)</p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>HEAR heat pump: up to $8,000</li>
                <li>HEAR heat pump water heater: up to $1,750</li>
                <li>HEAR electrical panel upgrade: up to $4,000</li>
                <li>Dominion utility programs: additional</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Maximum theoretical stack: ~$14,000 (HEAR cap) + utility</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-5">
            <p className="font-semibold text-gray-900 mb-1">What You&apos;ll Actually Pay</p>
            <p className="text-sm text-gray-700">On a typical <strong>$10,000–$16,000</strong> heat pump installation, most Virginia homeowners above 150% AMI will pay <strong>$8,000–$14,000 out of pocket</strong> after current utility rebates — and homeowners in co-op territory or with Appalachian Power face even higher costs. If HEAR launches for income-qualified households, out-of-pocket costs could drop to <strong>$2,000–$6,000</strong> depending on income tier and system scope.</p>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            Virginia has no state tax credit for heat pumps, no state clean energy loan program, and no residential PACE financing. HOMES and HEAR have not launched as of {formattedDate}.
          </p>
        </div>
      </section>

      {/* 10. WEATHERIZATION — bg-gray-50 */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Weatherization Assistance</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Virginia&apos;s Weatherization Assistance Program (WAP) remains active and accepting applications. Administered by the Virginia Department of Housing and Community Development (DHCD), WAP provides free energy efficiency upgrades — including heating and cooling system replacement — for income-qualified households.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Priority goes to elderly (60+), disabled individuals, and families with children. Waitlists are typical. Contact WAP@dhcd.virginia.gov, 804-371-7000, or visit <a href="https://www.dhcd.virginia.gov/wx" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">dhcd.virginia.gov/wx</a> for a county-by-county provider list.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <p className="font-semibold text-green-800 mb-1">✓ Best Candidates for Virginia Heat Pump Incentives</p>
            <p className="text-sm text-green-900">Northern Virginia homeowners with both Washington Gas and Dominion service — these unlock the best combined stack ($2,000+ in dual-fuel rebates). Electric resistance homes in Dominion territory eligible for the Home Retrofit Program. Low-income households in any territory through WAP, EnergyShare, or Appalachian Power&apos;s weatherization program. Charlottesville residents who can stack the $2,000 Retrofit Mini Grant with utility rebates.</p>
          </div>
        </div>
      </section>

      {/* 11. CLIMATE — white */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Climate Context</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Virginia spans three IECC climate zones under the 2021 code — Zone 3A (warm-humid) along the southeastern coast, Zone 4A (mixed-humid) covering most of the state, and Zone 5A (cool-humid) in the mountain counties of Highland and Alleghany. The Zone 4A designation across most of Virginia means balanced heating and cooling loads — heat pumps serve both functions efficiently year-round.
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
                  <td className="p-3">Norfolk / Virginia Beach</td>
                  <td className="p-3">3A (Warm-Humid)</td>
                  <td className="p-3">~20°F</td>
                  <td className="p-3">No — standard HP works well</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Richmond</td>
                  <td className="p-3">4A (Mixed-Humid)</td>
                  <td className="p-3">~14–17°F</td>
                  <td className="p-3">Standard HP fine; CCHP optional</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Northern Virginia (Dulles)</td>
                  <td className="p-3">4A (Mixed-Humid)</td>
                  <td className="p-3">~12°F</td>
                  <td className="p-3 font-semibold">CCHP recommended</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Roanoke / Western VA</td>
                  <td className="p-3">4A–5A</td>
                  <td className="p-3">~10–14°F</td>
                  <td className="p-3 font-semibold">CCHP recommended</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Highland / Alleghany (mountains)</td>
                  <td className="p-3">5A (Cool-Humid)</td>
                  <td className="p-3">Below 5°F</td>
                  <td className="p-3 font-semibold">Essential</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Virginia already has one of the highest electric-heating adoption rates on the East Coast — roughly half of homes heat with electricity, well above the national average. Natural gas serves a significant share concentrated in Northern Virginia, while propane and fuel oil account for a smaller share in rural western and central Virginia. The primary conversion opportunities vary by region: gas furnaces in Northern Virginia suburbs, electric resistance systems in Hampton Roads/Tidewater, and propane or oil systems in rural Appalachian communities.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="font-semibold text-blue-800 mb-1">Virginia is strong heat pump territory</p>
            <p className="text-sm text-blue-900">With balanced heating and cooling loads across most of the state, standard air-source heat pumps handle the vast majority of Virginia climates effectively. Cold-climate models are only recommended for the mountain west. The high existing rate of electric heating means many Virginia homeowners are replacing less efficient electric systems with heat pumps — which qualifies for the highest utility rebate tiers from Dominion. For more on battery storage and time-of-use strategies, see our <Link href="/battery" className="text-brand-600 hover:underline">home battery guide</Link>.</p>
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
                <p className="font-semibold text-gray-900">Identify your utility</p>
                <p className="text-sm text-gray-700">Check your electric bill for Dominion Energy, Appalachian Power, or a cooperative name. Check your gas bill for Washington Gas, Columbia Gas, or Virginia Natural Gas.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900">Visit your utility&apos;s rebate portal</p>
                <p className="text-sm text-gray-700">Dominion: <a href="https://www.domsavings.com" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">domsavings.com</a> · Appalachian Power: <a href="https://takechargeva.com/rebates" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">takechargeva.com</a> · Washington Gas: <a href="https://wgsmartsavings.com/programs-rebates/va/home-heating" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">wgsmartsavings.com</a></p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-900">Schedule a home energy audit (Dominion) or find a participating contractor</p>
                <p className="text-sm text-gray-700">Dominion requires an energy evaluation before HVAC rebates. Appalachian Power and Washington Gas require using approved contractor networks. Ask your contractor about eligibility before signing.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <p className="font-semibold text-gray-900">Check for local programs and monitor IRA launch</p>
                <p className="text-sm text-gray-700">Charlottesville residents should also apply for the $2,000 Retrofit Mini Grant through LEAP. Bookmark <a href="https://www.energy.virginia.gov/energy-efficiency/HomeEnergyRebatesFrequentlyAskedQuestions.shtml" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Virginia Energy&apos;s Home Energy Rebates FAQ</a> for HOMES and HEAR launch updates.</p>
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
              <p className="text-sm text-gray-600 mt-1">Virginia&apos;s $188 million in HOMES/HEAR funding is authorized through September 2031 but could be affected by future federal budget actions. The One Big Beautiful Bill Act preserved existing IRA rebate allocations but did not extend them.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">HOMES + HEAR Launch Status</p>
              <p className="text-sm text-gray-600 mt-1">If Virginia Energy receives and distributes its allocation, these programs would transform the incentive math — especially HEAR&apos;s $8,000 for heat pumps at ≤80% AMI. No timeline has been provided.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Dominion Program Availability</p>
              <p className="text-sm text-gray-600 mt-1">Participation can be limited depending on contractor availability and program demand. Starting the home energy evaluation process early is recommended.</p>
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
              <Link href="/heat-pumps/states/md" className="text-brand-600 hover:underline">
                Maryland Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/nc" className="text-brand-600 hover:underline">
                North Carolina Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/dc" className="text-brand-600 hover:underline">
                Washington DC Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/pa" className="text-brand-600 hover:underline">
                Pennsylvania Heat Pump Rebates &amp; Incentives
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
            {vaIncentive.sources.map((source: { label: string; url: string }, index: number) => (
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
              <strong>Disclaimer:</strong> This page covers the main statewide, utility, and IRA heat pump incentives available to Virginia homeowners in 2026. It does not calculate savings, guarantee eligibility, or represent any incentive program. Virginia&apos;s HOMES and HEAR programs have not yet launched and rebate amounts shown for those programs are based on the federal framework — actual Virginia program details may differ. We verify status regularly but programs can change without notice. Always confirm current amounts and eligibility with your utility provider and your contractor before making decisions.
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
