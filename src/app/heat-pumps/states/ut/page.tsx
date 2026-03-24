import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Utah Heat Pump Rebates 2026: $450–$1,700 + Wattsmart & ThermWise Programs | Home Energy Basics",
  description:
    "Rocky Mountain Power Wattsmart offers $450–$1,700. Enbridge ThermWise covers up to $1,200. Federal credits ended. Every Utah heat pump incentive in 2026.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/ut",
  },
  openGraph: {
    title: "Utah Heat Pump Rebates 2026",
    description:
      "Wattsmart rebates up to $1,700, ThermWise up to $1,200, IRA rebates pending — the complete guide to Utah heat pump incentives after federal credits expired.",
    url: "https://homeenergybasics.com/heat-pumps/states/ut",
    type: "article",
  },
};

export default function UtahPage() {
  const utIncentive = incentives.UT;
  const formattedDate = formatDate(utIncentive.lastVerified);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What heat pump rebates are available in Utah in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Utah\u2019s main heat pump rebates in 2026 come from Rocky Mountain Power\u2019s Wattsmart program ($450\u2013$1,700 depending on system type) and Enbridge Gas\u2019s ThermWise program ($700\u2013$1,200 for dual-fuel systems). Federal Section 25C and 25D tax credits expired December 31, 2025. Utah\u2019s $101 million in IRA-funded HEAR and HOMES rebates have been approved but have not yet launched. Provo City Power and UAMPS member cities offer additional rebates of $200\u2013$1,000.",
        },
      },
      {
        "@type": "Question",
        name: "Can I stack Rocky Mountain Power and Enbridge Gas rebates in Utah?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Rocky Mountain Power Wattsmart and Enbridge Gas ThermWise rebates can be combined on the same dual-fuel heat pump installation. A typical Wasatch Front homeowner installing a dual-fuel system can stack $1,450 from Wattsmart plus $1,000\u2013$1,200 from ThermWise for a total of $2,450\u2013$2,650. If HEAR launches, those rebates are also expected to stack with utility incentives.",
        },
      },
      {
        "@type": "Question",
        name: "Do heat pumps work in Utah\u2019s cold winters?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, but equipment selection matters. Utah\u2019s dry climate is actually an advantage \u2014 less frost accumulates on outdoor coils compared to humid states. Along the Wasatch Front (Salt Lake City, Provo, Ogden), cold-climate heat pumps are strongly recommended for design temperatures of 7\u201312\u00b0F. In mountain communities like Park City and Logan, cold-climate models are essential for temperatures reaching -10\u00b0F. Dual-fuel systems that pair a heat pump with a gas furnace are the most popular configuration in Utah. Altitude derating of 4% per 1,000 feet is a critical sizing factor that contractors must account for.",
        },
      },
      {
        "@type": "Question",
        name: "Who administers Utah\u2019s heat pump rebate programs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Rocky Mountain Power (PacifiCorp) administers the Wattsmart Homes program for electric customers across most of Utah. Enbridge Gas (formerly Dominion Energy Utah) runs the ThermWise program for gas customers. The Utah Office of Energy Development oversees the pending IRA-funded HEAR and HOMES programs. Municipal utilities like Provo City Power and UAMPS member cities run their own separate rebate programs.",
        },
      },
      {
        "@type": "Question",
        name: "When will Utah\u2019s IRA rebates (HEAR and HOMES) launch?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "As of March 2026, Utah\u2019s HEAR and HOMES programs have not launched. Utah was approved for approximately $101 million in combined funding, and the programs remain authorized through September 30, 2031. The Utah Office of Energy Development is the administering agency. The programs are not retroactive \u2014 purchases made before the launch date will not qualify for rebates.",
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
            {" "}/ Utah
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Utah Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Utah homeowners can currently stack Rocky Mountain Power Wattsmart rebates of up to <strong>$1,700</strong> with Enbridge Gas ThermWise rebates of up to <strong>$1,200</strong> for a combined <strong>$2,450–$2,650</strong> on dual-fuel heat pump systems. Federal tax credits ended in 2025, and Utah&apos;s $101 million in IRA-funded HEAR and HOMES rebates have not yet launched. This guide covers all major Utah heat pump incentives available in 2026, including Wattsmart, ThermWise, Provo RenewChoice, and UAMPS Cool Cash. Here&apos;s what&apos;s actually available.
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
          <StatusCard incentive={utIncentive} />
        </div>
      </section>

      {/* 3. SHORT VERSION */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Short Version</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Rocky Mountain Power Wattsmart</p>
              <p className="text-sm text-green-900">Rebates of $450–$1,700 for air-source heat pumps, ductless systems, and dual-fuel installations. Up to $2,000 for ground-source. Available now to all RMP customers.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Enbridge Gas ThermWise</p>
              <p className="text-sm text-green-900">Dual-fuel heat pump rebates of $700–$1,200 for systems that keep a gas furnace backup. Stackable with Rocky Mountain Power rebates.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Total Potential Savings</p>
              <p className="text-sm text-green-900">$2,450–$2,650 (above 150% AMI) from utility rebates alone. If HEAR launches, income-qualified households below 80% of Area Median Income (AMI) could reach ~$16,000+ in combined incentives.</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">✗ Federal Tax Credits Expired</p>
              <p className="text-sm text-red-900">Section 25C ($2,000 for heat pumps) and Section 25D (30% for geothermal) both ended December 31, 2025. No replacement exists in 2026.</p>
            </div>
            <div className="md:col-span-2 bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="font-semibold text-amber-800 mb-1">⚠ IRA Rebates Approved But Not Launched</p>
              <p className="text-sm text-amber-900">Utah was approved for $101 million in HEAR/HOMES funding, but neither program is accepting applications yet. These are not retroactive — purchases made before the launch date will not qualify. Do not count on these rebates when budgeting a 2026 installation.</p>
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
              <strong>Section 25C</strong> (up to $2,000 for air-source heat pumps and heat pump water heaters) and <strong>Section 25D</strong> (30% uncapped for geothermal systems) were both repealed early by the One Big Beautiful Bill Act, signed July 4, 2025. The IRS confirmed the termination date as <strong>December 31, 2025</strong>. Equipment must have been fully installed and operational by that date — a heat pump purchased in 2025 but installed in 2026 does not qualify. Section 25C offered no carryforward; any unused credit was forfeited permanently. Section 25D allows carryforward only for systems installed by December 31, 2025 where the credit exceeded 2025 tax liability.
            </p>
          </div>
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
            Utah was approved for approximately <strong>$101 million</strong> in combined HEAR and HOMES funding through the Inflation Reduction Act. The Utah Office of Energy Development administers both programs. As of March 2026, neither program has launched. About 23 states have live programs — Utah is not yet among them.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">HEAR Rebate Structure (When Launched)</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            HEAR provides point-of-sale rebates (instant discounts at purchase) based on household income relative to Area Median Income. Only households below 150% AMI are eligible.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Income Level</th>
                  <th className="text-left p-3 font-semibold">Coverage</th>
                  <th className="text-left p-3 font-semibold">Heat Pump Cap</th>
                  <th className="text-left p-3 font-semibold">HPWH Cap</th>
                  <th className="text-left p-3 font-semibold">Per-Household Cap</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Below 80% AMI</td>
                  <td className="p-3">100% of costs</td>
                  <td className="p-3 font-semibold">$8,000</td>
                  <td className="p-3 font-semibold">$1,750</td>
                  <td className="p-3 font-semibold">$14,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">80–150% AMI</td>
                  <td className="p-3">50% of costs</td>
                  <td className="p-3 font-semibold">$8,000</td>
                  <td className="p-3 font-semibold">$1,750</td>
                  <td className="p-3 font-semibold">$7,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-gray-500">Above 150% AMI</td>
                  <td className="p-3 text-gray-500">Not eligible</td>
                  <td className="p-3 text-gray-500">—</td>
                  <td className="p-3 text-gray-500">—</td>
                  <td className="p-3 text-gray-500">—</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Additional HEAR item caps include <strong>$4,000</strong> for electrical panel upgrades, <strong>$2,500</strong> for wiring, and <strong>$1,600</strong> for insulation and air sealing. The programs remain authorized through September 30, 2031 or until funds are depleted.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="font-semibold text-amber-800 mb-1">⚠ Common Mistake: Counting on HEAR Before It Launches</p>
            <p className="text-sm text-amber-900">HEAR rebates are not retroactive. If you install a heat pump before Utah&apos;s program opens, you cannot claim the rebate later. Budget your project based on currently available utility rebates only, and treat HEAR as a potential bonus if the timing works out.</p>
          </div>
        </div>
      </section>

      {/* 6. HOMES / Secondary — bg-gray-50 */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">HOMES Performance-Based Rebates</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Home Owner Managing Energy Savings (HOMES) program takes a different approach from HEAR. Instead of rebating specific equipment, HOMES pays based on measured or modeled energy savings for the whole home. HOMES is available to all income levels but has not launched in Utah.
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

          <p className="text-gray-700 leading-relaxed">
            HOMES and HEAR cannot be combined for the same improvement, but HOMES can stack with utility rebates. A household above 150% AMI that does not qualify for HEAR could potentially combine HOMES (<strong>$2,000–$4,000</strong>) with utility rebates for a total of <strong>$3,450–$5,650</strong> — but only once HOMES launches.
          </p>
        </div>
      </section>

      {/* 7. UTILITY PROGRAMS — white */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Utility Rebate Programs</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Utility rebates are the primary incentive available to Utah homeowners right now. Rocky Mountain Power (electric) and Enbridge Gas serve the vast majority of the state and their rebates can be stacked on the same installation.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Rocky Mountain Power — Wattsmart Homes</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Rocky Mountain Power&apos;s Wattsmart Homes program is the largest heat pump rebate in Utah. The program updated its offerings on February 27, 2026 with new measures and revised tiers. Rebates are available to all RMP customers regardless of income.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Ducted Air-Source Heat Pumps (Replacing Electric Resistance)</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Tier</th>
                  <th className="text-left p-3 font-semibold">Efficiency Minimum</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Tier 1</td>
                  <td className="p-3">7.5 HSPF2 / 14.3 SEER2</td>
                  <td className="p-3 font-semibold">$1,200</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Tier 2</td>
                  <td className="p-3">8.1 HSPF2 / 15.2 SEER2</td>
                  <td className="p-3 font-semibold">$1,400</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Tier 3 (Cold Climate)</td>
                  <td className="p-3">8.5 HSPF2 / 16 SEER2</td>
                  <td className="p-3 font-semibold">$1,600</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Ductless / Mini-Split Heat Pumps</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            All ductless rebates require minimum 8.1 HSPF2 / 16 SEER2 and inverter-driven compressors.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Measure</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Electric resistance conversion — multi-head</td>
                  <td className="p-3 font-semibold">$1,700</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Electric resistance conversion — single-head</td>
                  <td className="p-3 font-semibold">$1,300</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Electric resistance conversion — ducted mini-split</td>
                  <td className="p-3 font-semibold">$1,700</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Gas hydronic radiant floor — supplemental (new Feb 2026)</td>
                  <td className="p-3 font-semibold">$1,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Supplemental ductless (cold spots / bonus rooms)</td>
                  <td className="p-3 font-semibold">$600</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Other Wattsmart Heat Pump Rebates</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Measure</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Dual-fuel heat pump (AHRI-rated)</td>
                  <td className="p-3 font-semibold">$1,450</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Dual-fuel heat pump (non-AHRI qualifying)</td>
                  <td className="p-3 font-semibold">$700</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">$350</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ground-source heat pump (3.5 COP minimum)</td>
                  <td className="p-3 font-semibold">$2,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-amber-800 mb-1">⚠ Gas-to-Heat-Pump Conversions Don&apos;t Qualify for ASHP Rebates</p>
            <p className="text-sm text-amber-900">Wattsmart ASHP conversion rebates target electric resistance-to-heat-pump upgrades only. If you currently heat with gas, your path is the dual-fuel rebate ($700–$1,450) — not the higher conversion rebates. Cold-climate heat pumps must appear on the NEEP Qualified Products List.</p>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            All Wattsmart HVAC work requires a Program-Eligible Contractor. Applications must be submitted within 180 days of completion. Rebates arrive as checks within 14 business days of approval.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Enbridge Gas — ThermWise</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Enbridge Gas (formerly Dominion Energy Utah) operates the ThermWise program. As a gas utility, Enbridge only incentivizes systems that retain gas backup — making it a natural complement to Wattsmart dual-fuel rebates.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Measure</th>
                  <th className="text-left p-3 font-semibold">Full System</th>
                  <th className="text-left p-3 font-semibold">HP Component Only</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Dual-fuel Tier 1</td>
                  <td className="p-3 font-semibold">$1,000</td>
                  <td className="p-3 font-semibold">$700</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Dual-fuel Tier 2</td>
                  <td className="p-3 font-semibold">$1,200</td>
                  <td className="p-3 font-semibold">$850</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed">
            ThermWise allows two units per measure per household and requires an active Enbridge meter. Applications are due within six months of installation.
          </p>
        </div>
      </section>

      {/* 8. LOCAL PROGRAMS — bg-gray-50 */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Municipal and Co-op Programs</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Several municipal utilities and rural cooperatives offer additional heat pump rebates that stack with Enbridge ThermWise (but replace Wattsmart, since these cities are not served by Rocky Mountain Power).
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Provo City Power — RenewChoice Conserve</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Provo offers the most generous municipal rebates in Utah: <strong>$1,000</strong> for ducted dual-fuel heat pump conversions and <strong>$500</strong> for ductless heat pumps.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">UAMPS Member Cities</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Cities like Kaysville and Price participate in UAMPS Cool Cash and Smart Energy programs, offering <strong>$200–$400</strong> for ducted heat pumps and <strong>$400–$1,300</strong> for ductless systems. Rebate amounts vary by efficiency tier.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Rural Electric Cooperatives</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Dixie Power (southern Utah) offers $200/ton for ASHPs and GSHPs in new construction. Garkane Energy offers $50–$400/ton for qualifying systems. Raft River Rural Electric provides ductless heat pump rebates funded by the Bonneville Power Administration.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="font-semibold text-blue-800 mb-1">Dual-fuel systems dominate the Utah market</p>
            <p className="text-sm text-blue-900">Both Rocky Mountain Power and Enbridge Gas incentivize dual-fuel configurations — a heat pump paired with a gas furnace backup. This is the most popular setup on the Wasatch Front because it optimizes efficiency during mild weather while keeping reliable gas heating for the coldest days. The dual-fuel pathway also unlocks the highest combined rebates since both your electric and gas utility contribute.</p>
          </div>
        </div>
      </section>

      {/* 9. STACKING — bg-gray-50 would be two grays in a row, so this section is bg-gray-50 and we need to check alternation */}
      {/* Section 8 is bg-gray-50, so section 9 must be white — but ruleset says stacking is bg-gray-50. Adapting: stacking goes white here since local was gray. */}
      {/* Actually, re-reading ruleset: sections 5-8 adapt, and "9. Stacking bg-gray-50" is the default. Since 8 is bg-gray-50, I need to ensure no two grays in a row. Let me make stacking white and shift alternation. The ruleset says "Never two gray sections in a row." */}

      {/* 9. STACKING — white (avoiding two grays) */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Programs Stack</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Rocky Mountain Power and Enbridge Gas rebates can be stacked on the same dual-fuel installation. If HEAR or HOMES launches, those federal rebates are also expected to stack with utility programs. Here are realistic scenarios based on currently available incentives.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 150% AMI — Dual-Fuel System (Wasatch Front)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Rocky Mountain Power Wattsmart (AHRI dual-fuel): $1,450</li>
                <li>Enbridge Gas ThermWise Tier 2 (full system): $1,200</li>
                <li>Federal tax credit: $0 (expired)</li>
                <li>HEAR/HOMES: $0 (not launched)</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$2,650</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">80–150% AMI — Cold-Climate Ductless Conversion</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Rocky Mountain Power Wattsmart (multi-head ductless): $1,700</li>
                <li>Enbridge Gas ThermWise: $0 (no gas component)</li>
                <li>HEAR (if launched, 50% of costs): up to $8,000</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Current realistic maximum: ~$1,700 (up to ~$9,700 if HEAR launches)</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">Below 80% AMI — Full Electrification (If HEAR Launches)</p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>HEAR heat pump: up to $8,000</li>
                <li>HEAR heat pump water heater: up to $1,750</li>
                <li>HEAR electrical panel upgrade: up to $4,000</li>
                <li>Rocky Mountain Power Wattsmart dual-fuel: $1,450</li>
                <li>Enbridge Gas ThermWise Tier 2: $1,200</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Maximum theoretical stack: ~$16,400</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-5">
            <p className="font-semibold text-gray-900 mb-1">What You&apos;ll Actually Pay</p>
            <p className="text-sm text-gray-700">On a typical <strong>$12,000–$18,000</strong> ducted dual-fuel heat pump installation along the Wasatch Front, most homeowners above 150% AMI will pay <strong>$9,350–$15,550 out of pocket</strong> after current utility rebates. If HEAR launches for income-qualified households, out-of-pocket costs could drop to <strong>$1,600–$5,000</strong> depending on income tier and system scope.</p>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            Utah has no state tax credit for air-source heat pumps, no state clean energy loan program, and no residential PACE financing. The Utah Renewable Energy Systems Tax Credit (RESTC) covers geothermal only — 25% up to $2,000.
          </p>
        </div>
      </section>

      {/* 10. WEATHERIZATION — bg-gray-50 */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Weatherization Assistance</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Utah Weatherization Assistance Program (WAP) provides free home energy improvements to households at or below <strong>200% of the Federal Poverty Level</strong>. The program is administered by the Utah Department of Workforce Services through local community action agencies.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            WAP can cover heat pump installation if the computerized energy audit determines it cost-effective for the home. Average savings run approximately <strong>$583 per year</strong> (about 35% energy reduction). The program covers insulation, air sealing, furnace repair or replacement, and other efficiency measures.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <p className="font-semibold text-green-800 mb-1">✓ Best Candidates for Utah Heat Pump Incentives</p>
            <p className="text-sm text-green-900">Homeowners replacing electric resistance heating (baseboard, wall heaters) in Rocky Mountain Power territory — these qualify for the highest Wattsmart rebates ($1,200–$1,700). Dual-fuel installations on the Wasatch Front with both RMP and Enbridge service — these unlock the best combined stack ($2,450–$2,650). Low-income households should apply for WAP and wait for HEAR if possible. Geothermal installers can still claim the Utah RESTC state tax credit (25% up to $2,000).</p>
          </div>
        </div>
      </section>

      {/* 11. CLIMATE — white (alternating from gray) */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Climate Context</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Utah spans three IECC climate zones — all in the dry (&quot;B&quot;) moisture regime — creating dramatically different heat pump requirements across the state. Utah&apos;s dry climate is a significant advantage for heat pump operation: less frost accumulates on outdoor coils compared to humid states, meaning fewer defrost cycles, better effective efficiency, and more consistent comfort.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">City</th>
                  <th className="text-left p-3 font-semibold">IECC Zone</th>
                  <th className="text-left p-3 font-semibold">99% Heating Design Temp</th>
                  <th className="text-left p-3 font-semibold">Cold-Climate HP Needed?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">St. George</td>
                  <td className="p-3">3B (Mixed-Dry)</td>
                  <td className="p-3">22–25°F</td>
                  <td className="p-3">No — standard HP works well</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Salt Lake City</td>
                  <td className="p-3">5B (Cool-Dry)</td>
                  <td className="p-3">7–11°F</td>
                  <td className="p-3 font-semibold">Yes — CCHP recommended</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Provo</td>
                  <td className="p-3">5B (Cool-Dry)</td>
                  <td className="p-3">10–12°F</td>
                  <td className="p-3 font-semibold">Yes — CCHP recommended</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ogden</td>
                  <td className="p-3">5B (Cool-Dry)</td>
                  <td className="p-3">8–12°F</td>
                  <td className="p-3 font-semibold">Yes — CCHP recommended</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Logan</td>
                  <td className="p-3">6B (Cold-Dry)</td>
                  <td className="p-3">-2 to 3°F</td>
                  <td className="p-3 font-semibold">Essential</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Park City</td>
                  <td className="p-3">6B (Cold-Dry)</td>
                  <td className="p-3">-7 to -10°F</td>
                  <td className="p-3 font-semibold">Essential</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Altitude derating is a critical sizing consideration in Utah. Heat pump capacity drops approximately 4% per 1,000 feet of elevation due to thinner air. At Salt Lake City&apos;s 4,226 feet, expect roughly <strong>16–18% capacity reduction</strong> versus sea-level ratings. At Park City&apos;s 7,000 feet, the reduction reaches <strong>25–28%</strong>. Contractors must apply Manual J altitude correction factors — undersizing is a common installation error in Utah.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Roughly <strong>77–80%</strong> of Utah homes heat with natural gas. At current rates, a heat pump with COP 3.0 delivers heat at about <strong>$10.35/MMBtu</strong> — cheaper than a 95% gas furnace at $13.63/MMBtu. But at COP 2.0 (around 17°F outdoor temp), heat pump costs rise to about <strong>$15.52/MMBtu</strong> — more expensive than gas. This crossover explains why dual-fuel systems dominate the market. Rocky Mountain Power&apos;s time-of-use off-peak winter rate of <strong>6.31¢/kWh</strong> dramatically improves heat pump economics for homeowners willing to shift consumption patterns. For more on battery storage and time-of-use strategies, see our <Link href="/battery" className="text-brand-600 hover:underline">home battery guide</Link>.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="font-semibold text-blue-800 mb-1">Utah&apos;s dry climate is a heat pump advantage</p>
            <p className="text-sm text-blue-900">The problematic frost zone of 25–35°F with high humidity that plagues heat pumps in the Pacific Northwest and Northeast is largely absent in Utah. This translates to fewer defrost cycles and better real-world efficiency than humid-climate performance data would suggest.</p>
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
                <p className="font-semibold text-gray-900">Check your utility service</p>
                <p className="text-sm text-gray-700">Confirm whether you are served by Rocky Mountain Power (electric) and/or Enbridge Gas. Municipal utility customers (Provo, Kaysville, etc.) should check their city&apos;s program instead of Wattsmart.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900">Hire a Program-Eligible Contractor</p>
                <p className="text-sm text-gray-700">Wattsmart requires work by a contractor on their approved list. Ask your contractor if they are Wattsmart-eligible before signing. The contractor handles most of the rebate paperwork.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-900">Install qualifying equipment</p>
                <p className="text-sm text-gray-700">Ensure your heat pump meets the minimum efficiency thresholds for your target rebate tier. Cold-climate models must appear on the NEEP Qualified Products List.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <p className="font-semibold text-gray-900">Submit both rebate applications within 180 days</p>
                <p className="text-sm text-gray-700">File your Wattsmart application at wattsmarthomes.com and your ThermWise application at thermwise.com (if dual-fuel). Wattsmart rebate checks arrive within 14 business days of approval.</p>
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
              <p className="text-sm text-gray-600 mt-1">Utah&apos;s $101 million in HEAR/HOMES funding is authorized through September 2031 but could be affected by future federal budget actions. The One Big Beautiful Bill Act preserved existing IRA rebate allocations but did not extend them.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">HEAR/HOMES Launch Date</p>
              <p className="text-sm text-gray-600 mt-1">The Utah Office of Energy Development has not announced a launch date. When these programs open, income-qualified households could see dramatically larger rebates — up to $14,000 from HEAR alone.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">HB 549 (2026 Legislative Session)</p>
              <p className="text-sm text-gray-600 mt-1">Utah&apos;s legislature passed HB 549 in 2026, which modifies energy rebate program provisions. Watch for implementation details that may affect how state and federal programs interact.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Wattsmart Program Expansion</p>
              <p className="text-sm text-gray-600 mt-1">Rocky Mountain Power added new measures in February 2026 including window heat pumps and gas hydronic radiant floor conversion rebates. Additional measures may be added as the program evolves.</p>
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

      {/* 15. SEE ALSO — white (alternating from gray) */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-3">See also</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/heat-pumps/states/co" className="text-brand-600 hover:underline">
                Colorado Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/az" className="text-brand-600 hover:underline">
                Arizona Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/nv" className="text-brand-600 hover:underline">
                Nevada Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/nm" className="text-brand-600 hover:underline">
                New Mexico Heat Pump Rebates &amp; Incentives
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
            {utIncentive.sources.map((source: { label: string; url: string }, index: number) => (
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
              <strong>Disclaimer:</strong> This page covers the main statewide, utility, and IRA heat pump incentives available to Utah homeowners in 2026. It does not calculate savings, guarantee eligibility, or represent any incentive program. Utah&apos;s HEAR and HOMES programs have not yet launched and rebate amounts shown for those programs are based on the federal framework — actual Utah program details may differ. We verify status regularly but programs can change without notice. Always confirm current amounts and eligibility with Rocky Mountain Power, Enbridge Gas, and your contractor before making decisions.
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
