import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Kentucky Heat Pump Rebates 2026: $250–$3,000 Utility Rebates + HEAR Coming | Home Energy Basics",
  description:
    "KY utility heat pump rebates range from $250 to $3,000. HEAR rebates up to $8,000 pending. Federal credits expired. Every Kentucky incentive in 2026.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/ky",
  },
  openGraph: {
    title: "Kentucky Heat Pump Rebates 2026",
    description:
      "Utility rebates $250–$3,000, HEAR up to $8,000 pending launch — the complete guide to Kentucky heat pump incentives after federal credits expired.",
    url: "https://homeenergybasics.com/heat-pumps/states/ky",
    type: "article",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What heat pump rebates are available in Kentucky in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kentucky heat pump rebates come exclusively from utility programs right now. LG&E and KU offer $400 for air-source heat pumps and $300 for heat pump water heaters. EKPC cooperatives offer $500–$1,000, with $1,000 for cold-climate models. Duke Energy Kentucky offers approximately $865 for HVAC upgrades. TVA-served western Kentucky utilities offer $500–$800 for heat pumps and up to $3,000 for geothermal. Federal tax credits expired December 31, 2025, and the state\u0027s IRA-funded HEAR/HOMES programs have not yet launched.",
      },
    },
    {
      "@type": "Question",
      name: "Can I stack utility rebates with HEAR in Kentucky?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, once HEAR launches. The Kentucky Energy Rebates FAQ confirms that HEAR rebates can stack with utility rebates. The utility rebate reduces your project cost first, then HEAR covers a percentage of the remaining balance. For example, an EKPC co-op member below 80% AMI could receive a $1,000 co-op rebate plus up to $8,000 from HEAR, potentially covering the full cost of a heat pump installation.",
      },
    },
    {
      "@type": "Question",
      name: "When will Kentucky\u0027s HEAR and HOMES rebate programs launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No confirmed launch date has been announced. The Kentucky Energy and Environment Cabinet\u0027s Office of Energy Policy administers both programs with a combined allocation of approximately $134 million. The official site at energyrebates.ky.gov warns that anyone currently offering these rebates is misinformed. The federal spending deadline is September 30, 2031, but political uncertainty around IRA repeal efforts could affect the timeline.",
      },
    },
    {
      "@type": "Question",
      name: "Which Kentucky utility offers the best heat pump rebates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TVA-served utilities in western Kentucky offer the highest rebates: $500–$800 for air-source heat pumps, up to $900 for heat pump water heaters, and $3,000 for geothermal systems. EKPC cooperatives in central and eastern Kentucky are second best at $500–$1,000, with a notable $1,000 incentive for cold-climate heat pumps. LG&E/KU customers in Louisville and Lexington receive more modest $300–$400 rebates.",
      },
    },
    {
      "@type": "Question",
      name: "Are heat pumps a good choice for Kentucky\u0027s climate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Kentucky sits in IECC Climate Zone 4A (Mixed-Humid) with ASHRAE design temperatures ranging from 7°F in Northern Kentucky to 14°F in Bowling Green. Modern inverter-driven heat pumps operate effectively throughout Kentucky winters. The state\u0027s low electricity rates ($0.10–$0.12/kWh) make heat pumps especially economical for homes currently using propane or electric resistance heat, where annual savings can exceed $1,000–$2,000.",
      },
    },
  ],
};

export default function KentuckyPage() {
  const kyIncentive = incentives.KY;
  const formattedDate = formatDate(kyIncentive.lastVerified);

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
            {" "}/ Kentucky
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kentucky Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Kentucky heat pump rebates and incentives are still available in 2026, but the landscape is narrower than a year ago. Federal tax credits ended December 31, 2025, and the state&apos;s IRA-funded HEAR program has not yet launched. Utility rebates of <strong>$250–$3,000</strong> are the primary incentive today, with TVA-served and EKPC cooperative territories offering the strongest programs. This guide covers all major Kentucky heat pump incentives available in 2026, including LG&amp;E/KU, Duke Energy, EKPC cooperatives, TVA EnergyRight, and the pending HEAR/HOMES programs. Here&apos;s what&apos;s actually available.
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
          <StatusCard incentive={kyIncentive} />
        </div>
      </section>

      {/* 3. SHORT VERSION */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Short version</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Utility rebates are active</p>
              <p className="text-sm text-green-900">$250–$3,000 depending on your utility and equipment. TVA-served and EKPC cooperative areas offer the strongest rebates.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ HEAR rebates approved but not launched</p>
              <p className="text-sm text-green-900">Up to $8,000 per heat pump for households below 80% of Area Median Income (AMI). Up to $4,000 for 80–150% AMI. Will stack with utility rebates once live.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Potential savings: $400–$9,000+</p>
              <p className="text-sm text-green-900">$400 (above 150% AMI, LG&amp;E/KU territory) to $9,000+ (below 80% AMI, once HEAR launches). Full electrification packages can reach ~$14,000 total incentives.</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">✗ Federal tax credits expired</p>
              <p className="text-sm text-red-900">Section 25C ($2,000 heat pump credit) and Section 25D (30% geothermal credit) both ended December 31, 2025 under the One Big Beautiful Bill Act.</p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 md:col-span-2">
              <p className="font-semibold text-amber-800 mb-1">⚠ HEAR has no launch date — don&apos;t wait indefinitely</p>
              <p className="text-sm text-amber-900">Kentucky&apos;s HEAR program is approved but has no confirmed launch date. If your heating system needs replacement now, utility rebates are available today. Waiting for HEAR is a gamble — political efforts to repeal IRA funding add uncertainty.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEDERAL EXPIRED */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Federal tax credits have expired</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <p className="text-red-900 leading-relaxed">
              <strong>Section 25C</strong> (Energy Efficient Home Improvement Credit) and <strong>Section 25D</strong> (Residential Clean Energy Credit) both expired on <strong>December 31, 2025</strong>. The One Big Beautiful Bill Act (P.L. 119-21), signed July 4, 2025, accelerated the termination of these credits, which the Inflation Reduction Act had originally extended through 2032 and 2034 respectively. No federal tax credit is available for heat pumps installed in 2026.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Through 2025, Section 25C offered Kentucky homeowners <strong>30% of costs up to $2,000</strong> for qualifying air-source heat pumps and heat pump water heaters. Section 25D provided an uncapped <strong>30% credit for geothermal heat pumps</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The <strong>placed-in-service rule</strong> applies: only equipment installed by December 31, 2025 qualifies. A heat pump purchased in 2025 but installed in January 2026 or later does not qualify. One exception — Section 25D allows carryforward of unused credits from qualifying 2025 installations.
          </p>
          <p className="text-gray-700 leading-relaxed">
            For full details, see{" "}
            <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
              Federal Heat Pump Tax Credits Have Expired
            </Link>.
          </p>
        </div>
      </section>

      {/* 5. HEAR (PRIMARY STATE PROGRAM) */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Home Electrification and Appliance Rebates (HEAR)</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-amber-800 mb-1">⚠ Not yet launched</p>
            <p className="text-sm text-amber-900">Kentucky&apos;s HEAR program is approved but not accepting applications. The official site at energyrebates.ky.gov states that anyone currently offering these rebates is misinformed. No launch date has been announced.</p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Kentucky Energy and Environment Cabinet&apos;s Office of Energy Policy administers HEAR with a combined state allocation of approximately <strong>$134 million</strong> (HEAR plus HOMES). When launched, HEAR will offer point-of-sale rebates for individual equipment based on household income relative to Area Median Income (AMI).
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">HEAR rebate amounts (when available)</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">≤80% AMI</th>
                  <th className="text-left p-3 font-semibold">80–150% AMI</th>
                  <th className="text-left p-3 font-semibold">&gt;150% AMI</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Heat pump (HVAC)</td>
                  <td className="p-3 font-semibold">Up to $8,000</td>
                  <td className="p-3 font-semibold">Up to $4,000</td>
                  <td className="p-3 text-gray-500">—</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">Up to $1,750</td>
                  <td className="p-3 font-semibold">Up to $1,750</td>
                  <td className="p-3 text-gray-500">—</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Electrical panel upgrade</td>
                  <td className="p-3 font-semibold">Up to $4,000</td>
                  <td className="p-3 font-semibold">Up to $4,000</td>
                  <td className="p-3 text-gray-500">—</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Insulation / air sealing</td>
                  <td className="p-3 font-semibold">Up to $1,600</td>
                  <td className="p-3 font-semibold">Up to $1,600</td>
                  <td className="p-3 text-gray-500">—</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">Household cap</td>
                  <td className="p-3 font-semibold">$14,000</td>
                  <td className="p-3 font-semibold">$14,000</td>
                  <td className="p-3 text-gray-500">—</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Low-income households (≤80% AMI) receive <strong>100% of costs</strong> up to item caps. Moderate-income households (80–150% AMI) receive <strong>50% of costs</strong> up to item caps. Households above 150% AMI are not eligible for HEAR.
          </p>
          <p className="text-gray-700 leading-relaxed">
            AMI thresholds vary by county and are determined using HUD income limits. Categorical eligibility through LIHEAP, Medicaid, SNAP, or SSI may allow automatic qualification without income documentation.
          </p>
        </div>
      </section>

      {/* 6. HOMES (SECONDARY STATE PROGRAM) */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Home Efficiency Rebates (HOMES)</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The HOMES program takes a whole-home approach, offering rebates based on modeled energy savings rather than individual equipment. Like HEAR, HOMES has not yet launched in Kentucky.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Income tier</th>
                  <th className="text-left p-3 font-semibold">Maximum rebate</th>
                  <th className="text-left p-3 font-semibold">Cost coverage</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">≤80% AMI</td>
                  <td className="p-3 font-semibold">$8,000</td>
                  <td className="p-3">Up to 80% of project costs</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">80–150% AMI</td>
                  <td className="p-3 font-semibold">$4,000</td>
                  <td className="p-3">Up to 50% of project costs</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">&gt;150% AMI</td>
                  <td className="p-3 font-semibold">$4,000</td>
                  <td className="p-3">Up to 50% of project costs</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed">
            HOMES requires minimum energy savings thresholds (typically 20–35%+) demonstrated through modeling. Unlike HEAR, households above 150% AMI are eligible at the same rate as moderate-income households. Key program rules: no retroactive rebates for pre-launch projects, mandatory use of program-registered contractors, and rebates delivered as upfront point-of-sale discounts.
          </p>
        </div>
      </section>

      {/* 7. UTILITY PROGRAMS */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Utility rebates by provider</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            With federal credits gone and state IRA programs pending, <strong>utility rebate programs are the most accessible incentives</strong> for Kentucky homeowners in 2026. Amounts, equipment requirements, and program structures vary significantly by service territory.
          </p>

          {/* LG&E / KU */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Louisville Gas &amp; Electric and Kentucky Utilities (LG&amp;E/KU)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            LG&amp;E and KU, both PPL subsidiaries, serve Louisville, Lexington, and much of central Kentucky — roughly <strong>1 million customers</strong> combined. Their Residential Rebates program, expanded in April 2025, offers:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Air-source heat pump (ducted or ductless)</td>
                  <td className="p-3 font-semibold">$400</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">$300</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Central air conditioner</td>
                  <td className="p-3 font-semibold">$300</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Natural gas furnace</td>
                  <td className="p-3 font-semibold">$250</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            Equipment must be ENERGY STAR certified, and an AHRI certificate is required for HVAC systems. Applications are submitted online through the My Account portal after installation. The <strong>WeCare program</strong> provides free weatherization to households at or below 200% of the federal poverty level, and WeCare Plus serves homeowners at or below 50% AMI.
          </p>

          {/* Duke Energy Kentucky */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Duke Energy Kentucky</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Duke Energy Kentucky serves approximately <strong>145,000 customers</strong> in Northern Kentucky (Covington, Florence, Burlington, Fort Thomas, Newport). The Home Energy Improvement program requires a free Home Energy Check before qualifying for rebates.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">HVAC system (heat pump or AC)</td>
                  <td className="p-3 font-semibold">~$865</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">$350</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Duct / air sealing</td>
                  <td className="p-3 font-semibold">$100+</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            Duke Energy&apos;s national site shows potentially higher amounts — up to <strong>$1,000</strong> for converting from electric resistance to a high-efficiency heat pump. Kentucky-specific amounts may differ; homeowners should confirm directly at (866) 785-6209.
          </p>

          {/* EKPC Cooperatives */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">East Kentucky Power Cooperative (EKPC) — 16 member co-ops</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            EKPC coordinates the Together We Save program across 16 member distribution cooperatives (including Blue Grass Energy, Clark Energy, Farmers RECC, Owen Electric, South Kentucky RECC, and others), serving over <strong>530,000 customers</strong> across central and eastern Kentucky.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Heat pump retrofit (ENERGY STAR)</td>
                  <td className="p-3 font-semibold">$500</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Cold-climate heat pump (ENERGY STAR ccASHP)</td>
                  <td className="p-3 font-semibold">$1,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump replacing electric resistance</td>
                  <td className="p-3 font-semibold">Up to $1,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">$250</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-blue-800 mb-1">EKPC&apos;s $1,000 cold-climate heat pump rebate is unique in Kentucky</p>
            <p className="text-sm text-blue-900">No other Kentucky utility offers a dedicated cold-climate heat pump incentive. The $1,000 ccASHP rebate is double the standard $500 amount and reflects the performance advantage of cold-climate models in eastern Kentucky&apos;s higher elevations and colder design temperatures.</p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            Pre- and post-inspections are required, and homes must be electrically heated. The CARES program supplements weatherization for income-qualified members (up to <strong>$3,000</strong> per household through Community Action Agencies). A Button-Up weatherization program provides up to <strong>$1,875</strong> for air sealing and insulation.
          </p>

          {/* Kentucky Power */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Kentucky Power (AEP) — Eastern Kentucky</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Kentucky Power serves roughly <strong>164,000 customers</strong> in eastern Kentucky&apos;s Appalachian region. The Targeted Energy Efficiency (TEE) program provides a <strong>$400 rebate</strong> for heat pump installations replacing electric resistance heat (SEER ≥13, HSPF ≥7.7 under legacy ratings). No dedicated heat pump water heater or mini-split rebates were found. Homeowners should call 800-572-1113 to confirm current availability.
          </p>

          {/* TVA EnergyRight */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">TVA EnergyRight — Western and south-central Kentucky</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            TVA-served local power companies — including Bowling Green Municipal Utilities, Murray Electric, Hopkinsville Electric, Paducah Power, Glasgow Electric Plant Board, and West Kentucky RECC — participate in the EnergyRight program across roughly 28 western and south-central Kentucky counties.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Air-source heat pump (17+ SEER2)</td>
                  <td className="p-3 font-semibold">$800</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Air-source heat pump (15–16.99 SEER2)</td>
                  <td className="p-3 font-semibold">$500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ductless mini-split (17+ SEER2)</td>
                  <td className="p-3 font-semibold">$800</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">Up to $900</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Geothermal heat pump</td>
                  <td className="p-3 font-semibold">$3,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed">
            All work must be completed by a TVA Quality Contractor Network member, and heat pumps must replace an existing primary electric heat source. TVA&apos;s Home Uplift program provides free comprehensive energy upgrades to qualifying low-income households. TVA also offers <strong>$0-down fixed-rate financing</strong> for qualifying upgrades through participating local power companies.
          </p>
        </div>
      </section>

      {/* 8. LOCAL PROGRAMS — skipped, none exist */}

      {/* 9. STACKING */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How programs stack</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            With federal credits gone and HEAR/HOMES pending, the current stack is limited to utility rebates alone. When HEAR launches, stacking becomes significantly more powerful. The Kentucky Energy Rebates FAQ confirms that HEAR rebates can stack with utility programs — the utility rebate reduces your project cost first, then HEAR covers a percentage of the remaining balance.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Stacking scenarios for a ducted air-source heat pump (~$10,000 installed)</h3>
          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 150% AMI — any utility territory</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Utility rebate: $400–$800 (varies by utility)</li>
                <li>HEAR: not eligible</li>
                <li>HOMES: not yet launched</li>
                <li>Federal credit: expired</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$400–$800</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">80–150% AMI — once HEAR launches</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Utility rebate: $400–$1,000</li>
                <li>HEAR: up to $4,000 (50% of remaining cost)</li>
                <li>Federal credit: expired</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$4,400–$5,000</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">Below 80% AMI — once HEAR launches (best case)</p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>Utility rebate: $400–$1,000</li>
                <li>HEAR: up to $8,000 (100% of remaining cost)</li>
                <li>WAP: potentially full cost if qualified</li>
                <li>Federal credit: expired</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$8,400–$9,000+</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-5 mb-6">
            <p className="font-semibold text-gray-900 mb-1">What you&apos;ll actually pay</p>
            <p className="text-sm text-gray-700">
              For a typical <strong>$8,000–$12,000</strong> ducted heat pump installation: above 150% AMI homeowners pay <strong>$7,200–$11,600 out of pocket</strong> today (utility rebate only). Once HEAR launches, 80–150% AMI homeowners could pay <strong>$5,000–$7,600</strong>, and below 80% AMI homeowners could pay <strong>$1,000–$3,600</strong> or potentially nothing depending on utility territory and WAP eligibility.
            </p>
          </div>
          <p className="text-sm text-gray-500">
            Kentucky has no state tax credit, no state loan program, and no PACE financing for residential properties. The $14,000 HEAR household cap is unlikely to be a binding constraint for single-equipment installations.
          </p>
        </div>
      </section>

      {/* 10. WEATHERIZATION */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Weatherization Assistance Program (WAP)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Kentucky&apos;s WAP is administered by the Kentucky Housing Corporation through 22 local Community Action Agencies. The program serves households at or below <strong>200% of the federal poverty level</strong> (roughly $52,400 for a family of four in 2026) and can cover heating system replacement, insulation, air sealing, and duct work at no cost.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Priority goes to elderly, disabled, and high-energy-burden households. Applications go through local Community Action Agencies listed at capky.org/network.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <p className="font-semibold text-green-800 mb-1">✓ Best candidates for Kentucky heat pump incentives</p>
            <p className="text-sm text-green-900">Homeowners replacing electric resistance heat or propane furnaces see the strongest payback — often $1,000–$2,000+ in annual savings even before rebates. Low-income households in EKPC or TVA territories are especially well-positioned: co-op rebates up to $1,000, plus WAP and eventual HEAR coverage, can eliminate most or all out-of-pocket costs.</p>
          </div>
        </div>
      </section>

      {/* 11. CLIMATE */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Kentucky&apos;s climate and heat pumps</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Kentucky sits entirely within IECC Climate Zone 4A (Mixed-Humid), making it well-suited for heat pump technology. Temperatures below 0°F are rare and short-lived statewide.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">City</th>
                  <th className="text-left p-3 font-semibold">ASHRAE 99% heating design temp</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Bowling Green</td>
                  <td className="p-3 font-semibold">14°F</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Louisville</td>
                  <td className="p-3 font-semibold">12°F</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Lexington</td>
                  <td className="p-3 font-semibold">10°F</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Covington / Northern Kentucky</td>
                  <td className="p-3 font-semibold">7°F</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Standard modern inverter-driven heat pumps operate effectively throughout Kentucky&apos;s winter. Cold-climate heat pumps (ccASHP), which maintain rated capacity down to 5°F or lower, provide extra margin in Northern Kentucky and higher-elevation eastern counties but are not strictly necessary across most of the state.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Approximately <strong>55% of Kentucky homes heat with electricity</strong> (including both heat pumps and electric resistance), <strong>35% with natural gas</strong>, and <strong>7% with propane</strong>. At Kentucky&apos;s low electricity rates ($0.10–$0.12/kWh), a heat pump with a seasonal COP of 3.0 delivers heat at roughly <strong>$10–$11 per million BTU</strong> — competitive with a 95%-efficient gas furnace ($11–$14/MMBTU) and dramatically cheaper than propane ($29–$36/MMBTU) or electric resistance ($32–$35/MMBTU).
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-blue-800 mb-1">Propane and electric resistance homes see the fastest payback</p>
            <p className="text-sm text-blue-900">Homeowners replacing propane or electric resistance heat can save $1,000–$2,000+ annually — often recouping utility rebate gaps within one to two heating seasons. For natural gas homes, the economics are closer to break-even and depend on local gas rates, though a dual-fuel (heat pump + gas furnace backup) hybrid configuration is a popular middle path.</p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Considering a battery to pair with your heat pump? See our guide:{" "}
            <Link href="/battery" className="text-brand-600 hover:underline">
              Are Home Batteries Worth It in 2026?
            </Link>
          </p>
        </div>
      </section>

      {/* 12. HOW TO APPLY */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to claim Kentucky heat pump rebates</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-gray-900">Identify your electric utility</p>
                <p className="text-sm text-gray-700">Check your electric bill for your provider: LG&amp;E/KU, Duke Energy Kentucky, an EKPC cooperative, Kentucky Power, or a TVA-served local power company. Your utility determines which rebate program applies.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900">Confirm rebate requirements before installation</p>
                <p className="text-sm text-gray-700">Each utility has specific requirements — ENERGY STAR certification, AHRI certificates, efficiency minimums, or pre-installation energy checks (Duke Energy). TVA requires a Quality Contractor Network member. EKPC co-ops require pre- and post-inspections.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-900">Install qualifying equipment through a licensed contractor</p>
                <p className="text-sm text-gray-700">Use a licensed HVAC contractor and keep all receipts, AHRI certificates, and equipment model numbers. TVA customers must use a Quality Contractor Network contractor for rebate eligibility.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <p className="font-semibold text-gray-900">Submit your rebate application</p>
                <p className="text-sm text-gray-700">LG&amp;E/KU: apply online through My Account. Duke Energy: apply through the Home Energy Improvement portal. EKPC co-ops: contact your local cooperative directly. TVA: rebates may be applied automatically through your contractor.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                5
              </div>
              <div>
                <p className="font-semibold text-gray-900">Monitor energyrebates.ky.gov for HEAR/HOMES launch</p>
                <p className="text-sm text-gray-700">Sign up for updates at energyrebates.ky.gov. When HEAR launches, it will offer additional point-of-sale discounts that stack with utility rebates you&apos;ve already received or are claiming alongside HEAR.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. WHAT TO WATCH */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to watch</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">HEAR/HOMES launch timeline</p>
              <p className="text-sm text-gray-600 mt-1">Kentucky&apos;s $134 million in IRA rebate funding is approved but has no confirmed launch date. The energyrebates.ky.gov site is the official source for updates. Once live, these rebates could cover $4,000–$8,000 per heat pump for qualifying households.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">IRA funding runway and repeal risk</p>
              <p className="text-sm text-gray-600 mt-1">The federal spending deadline is September 30, 2031, but the U.S. House passed H.R. 4758 (Homeowner Energy Freedom Act) seeking to repeal HEAR nationally. The impact on already-allocated state funds remains unclear. Kentucky homeowners should not assume HEAR will be available indefinitely.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">LG&amp;E/KU program expansion</p>
              <p className="text-sm text-gray-600 mt-1">LG&amp;E/KU expanded their residential rebate program in April 2025. Further increases are possible as the utility adjusts energy efficiency targets under Kentucky Public Service Commission oversight.</p>
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
                Virginia Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/tn" className="text-brand-600 hover:underline">
                Tennessee Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/in" className="text-brand-600 hover:underline">
                Indiana Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li>
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                Federal Heat Pump Tax Credits Have Expired
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
            {kyIncentive.sources.map((source: { label: string; url: string }, index: number) => (
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
              utility, and IRA heat pump incentives available to Kentucky
              homeowners in 2026. It does not calculate savings, guarantee
              eligibility, or represent any incentive program. Kentucky has
              multiple utility territories with different programs — rebate
              amounts depend on which utility serves your home. We verify status
              regularly but programs can change without notice. Always confirm
              current amounts and eligibility with your utility, the Kentucky
              Energy and Environment Cabinet, and your contractor before making
              decisions.
            </p>
          </div>
              <p className="text-sm text-gray-600 mt-4">
            See how this state compares →{" "}
            <Link
              href="/heat-pumps/rebates-by-state"
              className="text-brand-600 hover:underline"
            >
              Heat Pump Rebates by State (2026)
            </Link>
          </p>
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
