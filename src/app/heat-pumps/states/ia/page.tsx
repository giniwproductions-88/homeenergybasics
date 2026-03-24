import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Iowa Heat Pump Rebates 2026: $300–$713 Utility Discounts + HEAR/HOMES Status | Home Energy Basics",
  description:
    "MidAmerican and Alliant offer $300–$713 instant discounts. HEAR/HOMES funded but not launched. Federal credits expired. Every Iowa heat pump incentive in 2026.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/ia",
  },
  openGraph: {
    title: "Iowa Heat Pump Rebates 2026",
    description:
      "Utility rebates of $300–$713 are the only active Iowa heat pump incentives — the complete guide after federal credits expired.",
    url: "https://homeenergybasics.com/heat-pumps/states/ia",
    type: "article",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What heat pump rebates are available in Iowa in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Iowa\u2019s main active incentives are utility instant discounts from MidAmerican Energy and Alliant Energy, worth $300\u2013$713 per air-source heat pump depending on efficiency tier. Cold-climate models qualify for enhanced rebates of $563\u2013$713. Municipal utilities like Ames Electric offer up to $1,200, and many rural electric cooperatives offer $300\u2013$650 per ton. Federal tax credits under Sections 25C and 25D expired December 31, 2025. Iowa\u2019s IRA-funded HEAR and HOMES programs are funded but have not launched.",
      },
    },
    {
      "@type": "Question",
      name: "Can I stack utility rebates with HEAR and HOMES in Iowa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There is no Iowa prohibition on stacking utility rebates with HEAR or HOMES. Federal guidance confirms that HOMES and HEAR can be combined on the same project covering different measures, and utility rebates are generally stackable with both. The constraint is that total combined rebates cannot exceed total project cost. However, HEAR and HOMES have not launched in Iowa, so the only incentives currently available are utility rebates.",
      },
    },
    {
      "@type": "Question",
      name: "Do cold-climate heat pumps work in Iowa winters?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Iowa\u2019s ASHRAE design temperatures range from about \u22128\u00b0F in Des Moines to \u221212\u00b0F in Dubuque. Cold-climate heat pumps certified to the ENERGY STAR Cold Climate specification maintain a COP of at least 1.75 at 5\u00b0F and retain 70% or more of rated heating capacity. Both MidAmerican and Alliant offer enhanced rebate tiers ($563\u2013$713) specifically for cold-climate-rated equipment. A backup heating source is still recommended for extreme cold snaps below \u221210\u00b0F.",
      },
    },
    {
      "@type": "Question",
      name: "Who administers Iowa\u2019s heat pump rebate programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MidAmerican Energy and Alliant Energy (Interstate Power and Light) administer the Instant Discounts program covering most of Iowa. Municipal utilities like Ames Electric and Cedar Falls Utilities run their own programs. Rural electric cooperatives such as Eastern Iowa REC and Midland Power Cooperative offer separate rebates. The Iowa Economic Development Authority (IEDA) will administer the HEAR and HOMES programs if and when they launch.",
      },
    },
    {
      "@type": "Question",
      name: "Why haven\u2019t Iowa\u2019s HEAR and HOMES rebates launched yet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Iowa submitted its HEAR/HOMES application to the Department of Energy on January 17, 2025, just before the Trump administration\u2019s executive order freezing IRA program funding. Iowa received a conditional award of approximately $121.3 million but the programs remain paused. The Iowa Economic Development Authority states that timing is uncertain and rebates will not be retroactive to installations made before the program\u2019s Iowa launch date. Homeowners can subscribe to updates by emailing energy@iowaeda.com.",
      },
    },
  ],
};

export default function IowaPage() {
  const iaIncentive = incentives.IA;
  const formattedDate = formatDate(iaIncentive.lastVerified);
  const sources = iaIncentive.sources;

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
            {" "}/ Iowa
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Iowa Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Iowa homeowners can claim <strong>$300–$713</strong> in utility instant discounts from MidAmerican Energy and Alliant Energy for air-source heat pumps. Federal tax credits expired December 31, 2025, and Iowa&apos;s IRA-funded HEAR and HOMES programs remain funded but unlaunched. This guide covers all major Iowa heat pump incentives available in 2026, including utility discounts, municipal programs, rural cooperative rebates, and HEAR/HOMES status. Here&apos;s what&apos;s actually available.
          </p>
          <p className="text-sm text-gray-500">
            Last verified: {formattedDate}
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Rates and program availability may change after this date.
          </p>
          <p className="text-gray-700 mt-4">
            Compare incentives nationwide on our{" "}
            <Link href="/heat-pumps" className="text-brand-600 hover:underline">
              heat pump rebates by state page
            </Link>.
          </p>
        </div>
      </section>

      {/* 2. Status Card */}
      <section className="py-8">
        <div className="container-narrow">
          <StatusCard incentive={iaIncentive} />
        </div>
      </section>

      {/* 3. Short Version */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The short version</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Utility instant discounts</p>
              <p className="text-sm text-green-900">MidAmerican Energy and Alliant Energy offer <strong>$300–$713</strong> per air-source heat pump. Cold-climate models qualify for the top tier. Applied at point of sale through participating distributors.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Municipal &amp; co-op rebates</p>
              <p className="text-sm text-green-900">Ames Electric offers up to <strong>$1,200</strong> for cold-climate heat pumps. Rural cooperatives like Eastern Iowa REC offer <strong>$300–$650/ton</strong> plus discounted electric heating rates.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Potential savings range</p>
              <p className="text-sm text-green-900"><strong>$563–$713</strong> (above 150% AMI, utility only) to <strong>$14,000+</strong> (below 80% AMI, if HEAR launches). Full electrification packages can reach ~$22,000 total incentives if both HEAR and HOMES launch.</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">✗ Federal tax credits expired</p>
              <p className="text-sm text-red-900">Section 25C ($2,000/year for heat pumps) and Section 25D (30% for geothermal) both ended December 31, 2025 under the One Big Beautiful Bill Act. No replacement credits exist.</p>
            </div>
            <div className="md:col-span-2 bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="font-semibold text-amber-800 mb-1">⚠ HEAR/HOMES funded but not launched</p>
              <p className="text-sm text-amber-900">Iowa has a $121.3 million IRA allocation for HEAR and HOMES rebates, but the programs have not launched. Timing is uncertain due to the federal funding freeze. Rebates will not be retroactive — do not delay a needed replacement waiting for these programs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Federal Expired */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Federal heat pump tax credits have expired</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <p className="text-red-900 leading-relaxed">
              <strong>Section 25C</strong> (Energy Efficient Home Improvement Credit, up to $2,000/year for heat pumps) and <strong>Section 25D</strong> (Residential Clean Energy Credit, 30% uncapped for geothermal systems) both expired <strong>December 31, 2025</strong>. The One Big Beautiful Bill Act (Public Law 119-21), signed July 4, 2025, accelerated their termination. No replacement federal residential credits have been enacted. Iowa homeowners who had equipment installed and operational by December 31, 2025 can still claim credits on their 2025 tax returns using IRS Form 5695.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            The IRS &quot;placed in service&quot; rule requires that equipment was physically installed and operational — not merely purchased or contracted — by December 31, 2025. Payment alone does not qualify.
          </p>
          <p className="text-gray-700 leading-relaxed">
            For full details on what changed, see our{" "}
            <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
              federal heat pump tax credit expiration guide
            </Link>.
          </p>
        </div>
      </section>

      {/* 5. HEAR (Primary IRA Program) */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Home Electrification and Appliance Rebates (HEAR)</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Iowa&apos;s HEAR program — funded at approximately <strong>$60.5 million</strong> through the Inflation Reduction Act — would provide point-of-sale rebates for heat pumps and related electrical work to income-qualified households. The Iowa Economic Development Authority (IEDA) submitted its application to the Department of Energy on January 17, 2025, but the program has not launched due to the federal funding freeze.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">HEAR rebate amounts (when program launches)</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Measure</th>
                  <th className="text-left p-3 font-semibold">Maximum rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Heat pump (HVAC)</td>
                  <td className="p-3 font-semibold">$8,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">$1,750</td>
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
                  <td className="p-3">Insulation and air sealing</td>
                  <td className="p-3 font-semibold">$1,600</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3 font-semibold">Per-household cap</td>
                  <td className="p-3 font-semibold">$14,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Households below 80% of Area Median Income (AMI) would receive <strong>100% of project costs</strong> up to the caps. Households at 80–150% AMI would receive <strong>50%</strong>. Households above 150% AMI are <strong>not eligible</strong> for HEAR.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="font-semibold text-amber-800 mb-1">⚠ Waiting for HEAR could delay needed replacements</p>
            <p className="text-sm text-amber-900">IEDA has stated that rebates will not be retroactive to installations made before the program&apos;s Iowa launch date. If your current heating system needs replacement, do not delay — claim available utility rebates now and subscribe to HEAR updates at energy@iowaeda.com.</p>
          </div>
        </div>
      </section>

      {/* 6. HOMES (Secondary IRA Program) */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Home Owner Managing Energy Savings (HOMES)</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Iowa&apos;s HOMES allocation of approximately <strong>$60.8 million</strong> would provide performance-based rebates for whole-home energy efficiency improvements to households at all income levels. Like HEAR, this program has not launched.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Energy savings achieved</th>
                  <th className="text-left p-3 font-semibold">Above 80% AMI</th>
                  <th className="text-left p-3 font-semibold">Below 80% AMI</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">20–34% whole-home savings</td>
                  <td className="p-3 font-semibold">$2,000</td>
                  <td className="p-3 font-semibold">$4,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">35%+ whole-home savings</td>
                  <td className="p-3 font-semibold">$4,000</td>
                  <td className="p-3 font-semibold">$8,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed">
            HOMES rebates are capped at 50% of project cost for households above 80% AMI and 80% for those below. Unlike HEAR, <strong>all income levels are eligible</strong> for HOMES. Both programs would run until funds are depleted or September 30, 2031.
          </p>
        </div>
      </section>

      {/* 7. Utility Programs */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Utility instant discounts: MidAmerican Energy &amp; Alliant Energy</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Iowa&apos;s two investor-owned utilities — MidAmerican Energy and Alliant Energy (Interstate Power and Light) — operate a shared Instant Discounts program with identical rebate amounts and efficiency requirements. Both programs are active for 2026 and represent the most accessible incentives currently available to Iowa homeowners. Discounts are applied at point of sale through participating distributors — no paperwork required.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Instant discount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Air-source heat pump (Tier 1: ≥15.2 SEER2)</td>
                  <td className="p-3 font-semibold">$300–$563</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Cold-climate air-source heat pump</td>
                  <td className="p-3 font-semibold">$563–$713</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ductless mini-split heat pump</td>
                  <td className="p-3 font-semibold">$375</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Cold-climate ductless mini-split</td>
                  <td className="p-3 font-semibold">$525</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater (≥3.3 UEF, 240V)</td>
                  <td className="p-3 font-semibold">$225</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Geothermal heat pump (Tier 1: ≥17 EER, ≥3.2 COP)</td>
                  <td className="p-3 font-semibold">$900</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Geothermal heat pump (Tier 2: ≥20 EER, ≥4.0 COP)</td>
                  <td className="p-3 font-semibold">$1,200</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Rebate ranges reflect efficiency tiers: Tier 1 (≥15.2 to &lt;17 SEER2, ≥11.7 EER2, ≥8.1 HSPF2) earns the lower amount, while Tier 2 (≥17.0 SEER2) earns the higher amount. Ductless systems require &gt;17.0 SEER2, ≥11.7 EER2, and ≥10.0 HSPF2. Neither utility offers income-qualified adders for residential heat pump rebates.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            MidAmerican caps rebates at <strong>70% of equipment cost</strong> (excluding labor). Alliant caps at <strong>50% of equipment purchase price</strong>. Both require purchase through participating distributors.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="font-semibold text-blue-800 mb-1">Iowa&apos;s cold-climate rebate premium</p>
            <p className="text-sm text-blue-900">Both MidAmerican and Alliant offer a <strong>$150–$263 premium</strong> for cold-climate heat pumps over standard models. Given Iowa&apos;s design temperatures of –8°F to –12°F, cold-climate equipment is strongly recommended — and the enhanced rebate tier helps offset the higher upfront cost.</p>
          </div>
        </div>
      </section>

      {/* 8. Local / Municipal Programs */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Other Iowa heat pump rebates: municipal utilities &amp; cooperatives</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Beyond MidAmerican and Alliant, Iowa&apos;s municipal utilities and rural electric cooperatives offer additional — and in some cases more generous — heat pump rebates.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Ames Municipal Electric</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ames Electric&apos;s Smart Energy Rebate Program offers <strong>$1,200</strong> for cold-climate or high-efficiency air-source heat pumps (≥17.2 SEER2 or ENERGY STAR Cold Climate certified), <strong>$600</strong> for standard-efficiency units, <strong>$500</strong> for heat pump water heaters, and up to <strong>$1,000/ton</strong> for ENERGY STAR geothermal systems.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Cedar Falls Utilities</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Cedar Falls Utilities offers up to <strong>$750</strong> for dual-fuel systems (heat pump + gas furnace backup) and <strong>$600</strong> for all-electric ducted heat pumps, with efficiency minimums of ≥16 SEER2 and ≥8.0–8.5 HSPF2.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Rural electric cooperatives</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Iowa&apos;s rural cooperatives are collectively among the most heat-pump-friendly utilities in the state. Programs vary by cooperative:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Cooperative</th>
                  <th className="text-left p-3 font-semibold">ASHP rebate</th>
                  <th className="text-left p-3 font-semibold">HPWH rebate</th>
                  <th className="text-left p-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Eastern Iowa REC</td>
                  <td className="p-3 font-semibold">$500/ton (NEEP ccHP)</td>
                  <td className="p-3 font-semibold">$650</td>
                  <td className="p-3">+$150 &quot;Fire to Wire&quot; bonus for gas-to-electric switch</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Midland Power Cooperative</td>
                  <td className="p-3 font-semibold">$650/ton (hybrid)</td>
                  <td className="p-3 font-semibold">$500</td>
                  <td className="p-3">$500 for mini-splits</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">T.I.P. Rural Electric</td>
                  <td className="p-3 font-semibold">$300–$400/ton</td>
                  <td className="p-3 text-gray-500">—</td>
                  <td className="p-3">Geothermal focus</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Many Iowa cooperatives also offer a <strong>Heat Plus or dual-fuel electric rate</strong> — a discounted electricity rate for members with heat pumps on a separate meter. This ongoing operational savings can be as significant as the one-time rebate over the system&apos;s lifetime.
          </p>
        </div>
      </section>

      {/* 9. Stacking */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Iowa incentives stack</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            No explicit Iowa prohibition on stacking utility rebates with HEAR or HOMES exists. Federal guidance confirms both IRA programs can be combined on the same project covering different measures, and utility rebates are generally stackable. The constraint is that total combined rebates cannot exceed total project cost. For a typical cold-climate air-source heat pump installation costing <strong>$12,000–$18,000</strong>:
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 150% AMI — cold-climate ducted heat pump</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Federal 25C/25D tax credit: $0 (expired)</li>
                <li>HEAR rebate: $0 (not eligible above 150% AMI)</li>
                <li>HOMES rebate (≥35% savings): $4,000 (only if Iowa launches)</li>
                <li>Utility instant discount (cold-climate ASHP): $563–$713</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Current realistic maximum: ~$713</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">80–150% AMI — cold-climate ducted heat pump</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Federal 25C/25D tax credit: $0 (expired)</li>
                <li>HEAR rebate (50% of costs, up to $8,000): $4,000–$8,000 (only if Iowa launches)</li>
                <li>Utility instant discount (cold-climate ASHP): $563–$713</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Current realistic maximum: ~$713</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">Below 80% AMI — full electrification package</p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>Federal 25C/25D tax credit: $0 (expired)</li>
                <li>HEAR rebate (100% of costs): up to $14,000 (only if Iowa launches)</li>
                <li>HOMES rebate (≥35% savings): up to $8,000 (only if Iowa launches)</li>
                <li>Utility instant discount (cold-climate ASHP): $563–$713</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Maximum if all programs launch: ~$22,713 (capped at project cost)</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-5">
            <p className="font-semibold text-gray-900 mb-1">What you&apos;ll actually pay</p>
            <p className="text-sm text-gray-700">With only utility rebates currently active, most Iowa homeowners will pay <strong>$11,300 to $17,400 out of pocket</strong> for a cold-climate ducted heat pump system. If HEAR and HOMES launch, out-of-pocket costs could drop to <strong>$7,300–$13,400</strong> for households above 150% AMI and potentially <strong>$0</strong> for income-qualified households below 80% AMI.</p>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            Iowa has no statewide heat pump tax credit, no statewide low-interest loan program, and no state rebate program outside of the unlaunched IRA programs. Utility discounts are the only active stacking layer.
          </p>
        </div>
      </section>

      {/* 10. Weatherization */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Iowa Weatherization Assistance Program</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Iowa&apos;s Weatherization Assistance Program (WAP), administered by the Iowa Department of Health and Human Services through local Community Action Agencies, provides <strong>free</strong> weatherization and heating system upgrades — potentially including heat pumps where energy audits show cost-effectiveness. Eligibility requires household income at or below <strong>200% of the Federal Poverty Level</strong> or LIHEAP approval within the past 12 months.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Capacity is severely limited: approximately <strong>1,000–2,000 homes</strong> are served statewide annually despite roughly 80,000 eligible applicants. Contact your local Community Action Agency to apply.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Geothermal property tax exemption</h3>
          <p className="text-gray-700 leading-relaxed">
            Iowa Code §427.1(38) provides a <strong>10-year property tax exemption</strong> on the assessed value added by installing a geothermal heating/cooling system on residential property. Homeowners must file with their county assessor by February 1 of the first assessment year. This is the only currently active Iowa state-level incentive relevant to heat pumps.
          </p>
        </div>
      </section>

      {/* 11. Climate */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Iowa climate context: cold-climate heat pumps are essential</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Iowa spans IECC Climate Zones 5A (southern two-thirds, including Des Moines and Cedar Rapids) and 6A (northern third, including Dubuque and Mason City). ASHRAE winter design temperatures confirm why cold-climate equipment is critical:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">City</th>
                  <th className="text-left p-3 font-semibold">99.6% design temp</th>
                  <th className="text-left p-3 font-semibold">IECC zone</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Des Moines</td>
                  <td className="p-3 font-semibold">–8°F</td>
                  <td className="p-3">5A</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Cedar Rapids</td>
                  <td className="p-3 font-semibold">–10°F</td>
                  <td className="p-3">5A</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Dubuque</td>
                  <td className="p-3 font-semibold">–12°F</td>
                  <td className="p-3">6A</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Cold-climate heat pumps certified to the ENERGY STAR Cold Climate specification maintain a COP ≥1.75 at 5°F and retain at least 70% of rated heating capacity. The{" "}
            <a href="https://ashp.neep.org/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">NEEP Cold Climate Air Source Heat Pump Product List</a>{" "}
            catalogs over 35,000 qualifying products and is referenced by multiple Iowa utility programs.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-green-800 mb-1">✓ Best candidates for Iowa heat pumps</p>
            <p className="text-sm text-green-900">Rural homeowners currently heating with propane (roughly 13% of Iowa households — nearly triple the national rate) see the strongest economics due to propane&apos;s higher per-BTU cost. Iowa benefits from being among the 10 states with the lowest average electricity prices, which improves heat pump operating economics. Homeowners replacing aging gas furnaces will see more modest savings but meaningful emissions reductions.</p>
          </div>

          <p className="text-gray-700 leading-relaxed">
            A backup heating source (gas furnace or electric resistance) is recommended for extreme cold snaps below –10°F. Many Iowa utilities and cooperatives actively support dual-fuel configurations.{" "}
            <Link href="/battery" className="text-brand-600 hover:underline">
              Learn about home batteries
            </Link>{" "}
            as a complementary upgrade for backup power during winter storms.
          </p>
        </div>
      </section>

      {/* 12. How to Apply */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to claim Iowa heat pump rebates</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Here&apos;s how Iowa homeowners actually claim these rebates, step by step.
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-gray-900">Identify your utility</p>
                <p className="text-sm text-gray-700">MidAmerican Energy, Alliant Energy, a municipal utility (Ames, Cedar Falls, etc.), or a rural electric cooperative. Your utility determines which rebate program applies and the dollar amounts available.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900">Choose a participating contractor and distributor</p>
                <p className="text-sm text-gray-700">MidAmerican and Alliant instant discounts require purchasing through a participating distributor. Confirm equipment meets the SEER2, HSPF2, and EER2 minimums for your desired rebate tier. Cold-climate models (≥17.0 SEER2) qualify for the highest rebates.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-900">Purchase and receive instant discount</p>
                <p className="text-sm text-gray-700">For MidAmerican and Alliant, the rebate is applied at point of sale — no paperwork or post-purchase application required. For municipal utilities and cooperatives, check whether rebates are instant or require a mail-in application after installation.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <p className="font-semibold text-gray-900">Subscribe to HEAR/HOMES updates</p>
                <p className="text-sm text-gray-700">Email energy@iowaeda.com to be notified when Iowa&apos;s IRA rebate programs launch. The programs are expected to be first-come, first-served, so early awareness matters.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. What to Watch */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to watch for</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">IRA funding runway and HEAR/HOMES launch</p>
              <p className="text-sm text-gray-600 mt-1">Iowa&apos;s $121.3 million IRA allocation has been conditionally awarded but not released. The federal funding freeze makes timing uncertain. If the freeze lifts, Iowa could launch both programs relatively quickly since the IEDA application was already submitted. Monitor iafederalfunding.org for updates.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Utility program changes for 2027</p>
              <p className="text-sm text-gray-600 mt-1">MidAmerican and Alliant&apos;s instant discount amounts and efficiency requirements are set annually. The Iowa Utilities Commission oversees energy efficiency plans on multi-year cycles. Cold-climate heat pump rebate tiers could increase as the technology becomes more standard.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Refrigerant transition</p>
              <p className="text-sm text-gray-600 mt-1">Federal DOE regulations effective January 2025 require new residential HVAC equipment manufactured after that date to use low-GWP refrigerants (R-32, R-454B). This is a manufacturing standard, not a utility rebate condition, but it means most new equipment sold in 2026 already uses the newer refrigerants.</p>
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
              <Link href="/heat-pumps/states/mn" className="text-brand-600 hover:underline">
                Minnesota Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/wi" className="text-brand-600 hover:underline">
                Wisconsin Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/il" className="text-brand-600 hover:underline">
                Illinois Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li className="text-gray-500">
              Missouri Heat Pump Rebates <em>(coming soon)</em>
            </li>
            <li>
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                Federal Heat Pump Tax Credits Ended — What Changed
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
            {sources.map((source: { label: string; url: string }, index: number) => (
              <li key={index}>
                <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">
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
              utility, and IRA heat pump incentives available to Iowa
              homeowners in 2026. It does not calculate savings, guarantee
              eligibility, or represent any incentive program. Iowa&apos;s HEAR and HOMES programs have not launched and timing is uncertain — amounts shown for those programs are based on federal guidelines and may differ when implemented.
              We verify status regularly but programs can change
              without notice. Always confirm current amounts and eligibility with
              MidAmerican Energy, Alliant Energy, your local utility, and your contractor before making decisions.
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
