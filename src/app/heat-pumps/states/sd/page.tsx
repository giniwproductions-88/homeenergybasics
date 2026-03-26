import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "South Dakota Heat Pump Rebates 2026: $0–$4,160 Utility Rebates + No State Programs | Home Energy Basics",
  description:
    "Utility rebates cover $0–$4,160. SD opted out of IRA programs. Federal credits ended. Here's every South Dakota heat pump incentive in 2026.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/sd",
  },
  openGraph: {
    title: "South Dakota Heat Pump Rebates 2026",
    description:
      "Utility rebates from $0 to $4,160 depending on provider — the complete guide to South Dakota heat pump incentives after federal credits expired.",
    url: "https://homeenergybasics.com/heat-pumps/states/sd",
    type: "article",
  },
};

export default function SouthDakotaPage() {
  const sdIncentive = incentives.SD;
  const formattedDate = formatDate(sdIncentive.lastVerified);
  const sources = sdIncentive.sources;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What heat pump rebates are available in South Dakota in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "South Dakota has no statewide heat pump rebate program and opted out of federal IRA rebate funding (HEAR and HOMES). Federal Section 25C and 25D tax credits expired December 31, 2025. The only financial incentives come from individual electric utilities, with rebates ranging from $0 (NorthWestern Energy) to over $4,000 (Otter Tail Power Company) depending on your provider. Geothermal systems qualify for a 4-year property tax exemption.",
        },
      },
      {
        "@type": "Question",
        name: "Can I stack utility rebates with other programs in South Dakota?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Stacking options are extremely limited in South Dakota. With no federal tax credits, no state programs, and no HEAR/HOMES rebates, your incentive stack consists almost entirely of whatever single utility rebate is available at your address. The only stackable benefit is the geothermal property tax exemption, which applies solely to geothermal heat pump systems. Each home has one electric provider, so utility rebates from different companies cannot be combined.",
        },
      },
      {
        "@type": "Question",
        name: "Why did South Dakota opt out of IRA energy rebates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "South Dakota is the only state in the nation to have opted out of the Inflation Reduction Act\u0027s Home Electrification and Appliance Rebates (HEAR) and Home Efficiency Rebates (HOMES) programs. The state\u0027s Bureau of Finance and Management declined the $68.56 million allocation in August 2024, citing limited staff capacity at the State Energy Management Office and policy disagreement with the IRA. That funding is being redistributed to participating states.",
        },
      },
      {
        "@type": "Question",
        name: "Which South Dakota utilities offer heat pump rebates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Several South Dakota utilities offer heat pump rebates: Otter Tail Power Company (up to $4,160 for cold-climate systems), Heartland Energy municipal utilities including Sioux Falls ($1,000–$2,000), Sioux Valley Energy ($600–$1,200), Southeastern Electric Cooperative ($300–$800), Black Hills Energy (amounts vary), and MRES/Bright Energy Solutions municipal utilities ($150–$450). NorthWestern Energy and Montana-Dakota Utilities currently offer no residential heat pump rebates in South Dakota.",
        },
      },
      {
        "@type": "Question",
        name: "Do cold-climate heat pumps work in South Dakota winters?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, but equipment selection is critical. South Dakota\u0027s ASHRAE design temperatures range from -7\u00B0F in Rapid City to -16\u00B0F in Aberdeen. Modern cold-climate air-source heat pumps can operate down to -22\u00B0F and below, achieving COPs of 1.5–2.0 even at -15\u00B0F — still 50–100% more efficient than electric resistance heating. However, supplemental backup heat is essential. Dual-fuel configurations (heat pump plus gas, propane, or electric resistance backup) are the recommended approach for South Dakota.",
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
            {" "}/ South Dakota
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            South Dakota Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            South Dakota is the only state in America that opted out of federal IRA heat pump rebate funding, and federal tax credits expired at the end of 2025. The only incentives left come from individual electric utilities, with rebates ranging from <strong>$0 to over $4,000</strong> depending on your provider. This guide covers all major South Dakota heat pump incentives available in 2026, including Otter Tail Power, Heartland Energy, Sioux Valley Energy, Black Hills Energy, and cooperative programs. Here&apos;s what&apos;s actually available.
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
          <StatusCard incentive={sdIncentive} />
        </div>
      </section>

      {/* 3. Short Version */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The short version</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Otter Tail Power: up to $4,160</p>
              <p className="text-sm text-green-900">The most generous program in the state. Per-ton rebates for cold-climate ducted heat pumps with quality install and energy control bonuses. Serves parts of northeastern South Dakota.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Heartland Energy / Sioux Falls: up to $2,400</p>
              <p className="text-sm text-green-900">Ducted ASHP with electric backup rebate of $2,000 plus $400 for a heat pump water heater. Covers Sioux Falls Light &amp; Power and 19 other municipal utilities.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Co-op programs with heat rates as low as 6.77¢/kWh</p>
              <p className="text-sm text-green-900">$0 (NorthWestern Energy) to $4,160+ (Otter Tail Power). Co-ops like Sioux Valley and Southeastern offer special winter electric rates and low-interest loans that can be more valuable than the rebate itself over a system&apos;s lifetime.</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">✗ Federal credits expired + SD opted out of IRA rebates</p>
              <p className="text-sm text-red-900">Section 25C and 25D tax credits ended December 31, 2025. South Dakota is the only state to reject the IRA&apos;s $68.56 million HEAR/HOMES allocation. No statewide program exists.</p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 md:col-span-2">
              <p className="font-semibold text-amber-800 mb-1">⚠ Your electric utility determines everything</p>
              <p className="text-sm text-amber-900">With no federal or state incentives, your utility provider is the single most important variable. Rebates range from $0 to over $4,000. Before getting quotes, identify your electric utility and contact them directly for current rebate details — programs can change mid-year when budgets deplete.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Federal Expired */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Federal tax credits have ended</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <p className="text-red-900 leading-relaxed">
              <strong>Section 25C</strong> (Energy Efficient Home Improvement Credit) and <strong>Section 25D</strong> (Residential Clean Energy Credit) both expired on <strong>December 31, 2025</strong>. The One Big Beautiful Bill Act accelerated their termination. Section 25C provided up to <strong>$2,000 per year</strong> for qualifying heat pumps. Section 25D covered <strong>30% of cost with no cap</strong> for geothermal systems. Neither credit is available for systems installed in 2026.{" "}
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                Full federal credit expiration details →
              </Link>
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Equipment purchased in 2025 but installed in 2026 does not qualify — the IRS uses &quot;placed in service&quot; language requiring full installation by the deadline. One narrow exception: Section 25D allows <strong>carryforward of unused credit</strong> from a qualifying geothermal system installed before January 1, 2026.
          </p>
          <p className="text-gray-700 leading-relaxed">
            No legislation has been introduced to restore either credit as of March 2026.
          </p>
        </div>
      </section>

      {/* 5. HEAR/HOMES Opt-Out */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">South Dakota opted out of IRA rebate programs</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            South Dakota is the only state in the nation to have declined the Inflation Reduction Act&apos;s Home Electrification and Appliance Rebates (HEAR) and Home Efficiency Rebates (HOMES) programs. The state was allocated <strong>$68.56 million</strong> for these programs. In August 2024, the Bureau of Finance and Management formally declined participation, missing the federal deadline to accept.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Officials cited limited staff capacity — the State Energy Management Office has one full-time employee — and policy disagreement with the Inflation Reduction Act. The $68.56 million is being redistributed to participating states.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-blue-800 mb-1">What South Dakota homeowners missed</p>
            <p className="text-sm text-blue-900">Had South Dakota participated, low-income households (below 80% of Area Median Income) could have received up to $8,000 for heat pump HVAC and $1,750 for heat pump water heaters. Moderate-income households (80–150% AMI) would have received 50% of costs up to those caps. These programs are now active in 49 other states and the District of Columbia.</p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="font-semibold text-amber-800 mb-1">⚠ Common mistake: assuming state programs exist</p>
            <p className="text-sm text-amber-900">Many online rebate calculators and national guides still list HEAR/HOMES rebates as available everywhere. In South Dakota, these programs do not exist. Do not rely on generic rebate estimates that include federal or IRA figures — your actual incentives come solely from your electric utility.</p>
          </div>
        </div>
      </section>

      {/* 6. Other State-Level Programs */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Other state-level programs</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            South Dakota has no state income tax, which makes a state energy tax credit structurally impossible. There are no state-administered loan programs for residential energy improvements. However, two narrow benefits exist.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Geothermal property tax exemption</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Under SDCL 10-4-44, <strong>geothermal heat pump</strong> systems qualify for a property tax exemption on the first $50,000 or 70% of assessed value (whichever is greater) for the <strong>first four continuous years</strong> after installation. This applies only to geothermal — not air-source — heat pumps. Contact your county Director of Equalization to claim it.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">USDA Rural Energy for America Program (REAP)</h3>
          <p className="text-gray-700 leading-relaxed">
            Available to agricultural producers and rural small businesses (not individual homeowners). REAP provides grants covering up to 50% of project costs and loan guarantees up to 75%. South Dakota&apos;s large rural and agricultural population means some farm operations may qualify for heat pump installations through this program.
          </p>
        </div>
      </section>

      {/* 7. Utility Programs */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Utility rebates by provider</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            With no federal or state incentives, utility programs carry nearly all the financial weight. Rebates vary dramatically by provider — from nothing to over <strong>$4,000</strong>.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Otter Tail Power Company</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Serves parts of northeastern South Dakota. Operates the most generous and technically detailed heat pump incentive program in the state, with per-ton rebates that scale with system size and stack with bonus adders.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Base rebate</th>
                  <th className="text-left p-3 font-semibold">With bonuses</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Standard ASHP (≥14.3 SEER2, ≥7.5 HSPF2)</td>
                  <td className="p-3 font-semibold">$300/ton</td>
                  <td className="p-3 font-semibold">Up to $540/ton</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">High-efficiency ASHP (≥16.0 SEER2, ≥8.0 HSPF2)</td>
                  <td className="p-3 font-semibold">$600/ton</td>
                  <td className="p-3 font-semibold">Up to $840/ton</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Cold-climate ducted HP (≥16.0 SEER2, ≥8.0 HSPF2)</td>
                  <td className="p-3 font-semibold">$800/ton</td>
                  <td className="p-3 font-semibold">Up to $1,040/ton</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Closed-loop geothermal</td>
                  <td className="p-3 font-semibold">$1,200/ton</td>
                  <td className="p-3 font-semibold">Up to $1,640/ton</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Open-loop geothermal</td>
                  <td className="p-3 font-semibold">$900/ton</td>
                  <td className="p-3 font-semibold">Up to $1,340/ton</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">$200</td>
                  <td className="p-3 text-gray-500">—</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            A typical <strong>4-ton cold-climate ducted heat pump</strong> could qualify for up to <strong>~$4,160</strong> in combined base and bonus rebates. Rebates cannot exceed 75% of project cost (50% for geothermal). Applications accepted through March 31 of the following calendar year.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Heartland Energy municipal utilities</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Heartland Energy coordinates the &quot;Power Forward&quot; rebate program for <strong>Sioux Falls Light &amp; Power</strong> and 19 other municipal utilities including Madison, Groton, Volga, and Miller.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                  <th className="text-left p-3 font-semibold">Requirements</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Ducted ASHP with electric backup</td>
                  <td className="p-3 font-semibold">$2,000</td>
                  <td className="p-3">≥2 tons; backup must be electric</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ducted ASHP (any backup)</td>
                  <td className="p-3 font-semibold">$1,000</td>
                  <td className="p-3">≥2 tons</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Geothermal heat pump</td>
                  <td className="p-3 font-semibold">$2,000</td>
                  <td className="p-3">Electric backup required</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Non-ducted mini-split</td>
                  <td className="p-3 font-semibold">$500</td>
                  <td className="p-3">≥1 ton</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">$400</td>
                  <td className="p-3">ENERGY STAR certified</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Sioux Valley Energy</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Eastern South Dakota cooperative offering rebates, favorable electric rates, and a lending program.
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
                  <td className="p-3">ASHP with electric backup (≥2 tons)</td>
                  <td className="p-3 font-semibold">$1,200</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">ASHP with non-electric backup (≥2 tons)</td>
                  <td className="p-3 font-semibold">$600</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Geothermal heat pump (≥2 tons)</td>
                  <td className="p-3 font-semibold">$1,200</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ductless ASHP (≥2 tons)</td>
                  <td className="p-3 font-semibold">$300</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            Members also receive a <strong>special electric heat rate of 7.45¢/kWh</strong> (versus 12.81¢/kWh standard) from October through April with a sub-meter. The cooperative offers heat pump <strong>loans up to $15,000 at 5% interest over 7 years</strong>. One rebate per account every 10 years.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Southeastern Electric Cooperative</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Offers <strong>$600</strong> for air-source heat pumps, <strong>$800</strong> for geothermal, and <strong>$300</strong> for ductless mini-splits (all ≥2 tons). A special electric heat rate of <strong>6.77¢/kWh</strong> is available October through April. Loans up to <strong>$10,000 at 5% interest over 7 years</strong>.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Other utilities</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Utility</th>
                  <th className="text-left p-3 font-semibold">ASHP rebate</th>
                  <th className="text-left p-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Black Hills Energy</td>
                  <td className="p-3 font-semibold">Varies</td>
                  <td className="p-3">Rapid City area. 2026 program reopened after 2025 funding depletion. Contact for current amounts.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Central Electric Co-op</td>
                  <td className="p-3 font-semibold">$600</td>
                  <td className="p-3">Mitchell area. ENERGY STAR required.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Lyon-Lincoln Electric</td>
                  <td className="p-3 font-semibold">Up to $800</td>
                  <td className="p-3">$400 base + $400 ENERGY STAR bonus.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">MRES / Bright Energy Solutions</td>
                  <td className="p-3 font-semibold">$150–$450</td>
                  <td className="p-3">Watertown, Brookings, Vermillion, Pierre, Fort Pierre. Includes $100 contractor bonus.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-gray-500">NorthWestern Energy</td>
                  <td className="p-3 text-gray-500">—</td>
                  <td className="p-3 text-gray-500">No active SD residential heat pump rebates. Programs are Montana-focused.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-gray-500">Montana-Dakota Utilities</td>
                  <td className="p-3 text-gray-500">—</td>
                  <td className="p-3 text-gray-500">Gas utility only. No heat pump rebates.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 9. Stacking */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How programs stack</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Stacking options are extremely limited in South Dakota. With no federal tax credits, no state programs, and no HEAR/HOMES rebates, the incentive stack consists almost entirely of the single utility rebate available at your address. No South Dakota utility offers income-qualified adders — the same rebate amount applies regardless of household income.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 150% AMI — best utility territory (Otter Tail Power, 4-ton cold-climate ducted HP)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Federal tax credits: $0 (expired)</li>
                <li>State programs: $0 (opted out / none exist)</li>
                <li>Otter Tail base rebate: $3,200 ($800/ton × 4 tons)</li>
                <li>Quality install + energy control bonuses: ~$960</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$4,160</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">80–150% AMI — Heartland Energy / Sioux Falls (ducted ASHP + HPWH)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Federal tax credits: $0 (expired)</li>
                <li>State programs: $0 (opted out / none exist)</li>
                <li>Heartland ASHP with electric backup: $2,000</li>
                <li>Heartland HPWH rebate: $400</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$2,400</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">Below 80% AMI — Weatherization Assistance Program</p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>WAP may cover full heating system replacement at no cost</li>
                <li>Income threshold: ~$31,300/year (single) or ~$64,300/year (family of 4)</li>
                <li>Priority: elderly, disabled, families with children</li>
                <li>Contact: 800-233-8503</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Potential out-of-pocket: $0</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-5 mb-4">
            <p className="font-semibold text-gray-900 mb-1">What you&apos;ll actually pay</p>
            <p className="text-sm text-gray-700">For a typical <strong>$12,000–$18,000</strong> ducted cold-climate heat pump installation, expect to pay <strong>$8,000 to $18,000 out of pocket</strong> depending on your utility territory. In the best case (Otter Tail Power), rebates cover roughly 25–35% of system cost. In NorthWestern Energy or MDU territory, expect to pay full price with no utility assistance.</p>
          </div>

          <p className="text-sm text-gray-500">
            South Dakota has no state tax credits, no state loan programs, no HEAR rebates, and no HOMES rebates. Income does not affect utility rebate amounts — no provider offers income-qualified adders.
          </p>
        </div>
      </section>

      {/* 10. Weatherization */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Weatherization Assistance Program</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The federal Weatherization Assistance Program (WAP) is administered in South Dakota by the Department of Social Services. Services are free for income-eligible households at or below 200% of the Federal Poverty Level — approximately <strong>$31,300 annually</strong> for a single person and <strong>$64,300</strong> for a family of four.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            WAP can cover heating system replacement when the existing system is non-functional, and federal rules permit heat pump installation when cost-effective. However, the program typically replaces like-with-like. Priority goes to elderly, disabled, and families with children.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Four community action agencies deliver services across the state:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Agency</th>
                  <th className="text-left p-3 font-semibold">Coverage area</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Inter-Lakes Community Action</td>
                  <td className="p-3">East-central South Dakota</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">GROW South Dakota</td>
                  <td className="p-3">Northeast South Dakota</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Rural Office of Community Services</td>
                  <td className="p-3">South-central and southeast South Dakota</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Western SD Community Action</td>
                  <td className="p-3">Western South Dakota</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Contact: <strong>800-233-8503</strong> or DSSHeat@state.sd.us
          </p>
        </div>
      </section>

      {/* 11. Climate */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Climate context: cold-climate equipment is essential</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            South Dakota&apos;s winters are among the harshest in the lower 48 for heat pump operation. The state spans IECC Climate Zones 5A (southern border counties) and 6A (the vast majority, including all major cities). Standard heat pumps are not appropriate here — cold-climate rated equipment is essential.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">City</th>
                  <th className="text-left p-3 font-semibold">ASHRAE 99% design temp</th>
                  <th className="text-left p-3 font-semibold">Climate zone</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Sioux Falls</td>
                  <td className="p-3 font-semibold">-11°F</td>
                  <td className="p-3">6A</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Rapid City</td>
                  <td className="p-3 font-semibold">-7°F</td>
                  <td className="p-3">6A</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Pierre</td>
                  <td className="p-3 font-semibold">~-11°F</td>
                  <td className="p-3">6A</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Aberdeen</td>
                  <td className="p-3 font-semibold">~-16°F</td>
                  <td className="p-3">6A</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            Modern cold-climate air-source heat pumps can operate down to <strong>-22°F and below</strong>, achieving COPs of 1.5–2.0 even at -15°F — still <strong>50–100% more efficient than electric resistance heating</strong>. However, supplemental backup heat is essential. Dual-fuel configurations (heat pump plus gas, propane, or electric resistance backup) are the recommended approach.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-green-800 mb-1">✓ Best candidates for heat pumps in South Dakota</p>
            <p className="text-sm text-green-900">Homeowners heating with propane (at ~$2.00/gallon, heat pumps offer clear savings), households in Otter Tail Power or Heartland Energy territory (strongest rebates), cooperative members with access to special winter heat rates (6.77–7.45¢/kWh), and anyone replacing a failing system who can take advantage of available rebates during the transition.</p>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Approximately 58% of South Dakota households heat with natural gas, 25% with electricity, and 14% with propane. Against natural gas at approximately $10–$12/MMBtu, heat pump savings are marginal without favorable electric rates. Against propane at ~$21.50/MMBtu (after combustion efficiency), a heat pump at 13¢/kWh and COP 2.5 delivers roughly <strong>$15.20/MMBtu equivalent</strong> — a meaningful reduction.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Pairing a heat pump with a <Link href="/battery" className="text-brand-600 hover:underline">home battery system</Link> may make sense for homeowners with solar panels or those on time-of-use electric rates, though South Dakota&apos;s flat-rate utility structures currently limit the battery value proposition for most households.
          </p>
        </div>
      </section>

      {/* 12. How to Apply */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to apply</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Because there is no statewide program, the application process depends entirely on your electric utility.
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-gray-900">Identify your electric utility</p>
                <p className="text-sm text-gray-700">Check your electric bill for your provider name. This determines which rebates (if any) are available to you. If you&apos;re unsure, contact the South Dakota Public Utilities Commission at 605-773-3201.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900">Contact your utility before purchasing equipment</p>
                <p className="text-sm text-gray-700">Confirm current rebate amounts, equipment requirements (SEER2, HSPF2, refrigerant), and application deadlines. Programs can change mid-year when annual budgets deplete — Black Hills Energy closed its 2025 program early for this reason.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-900">Get quotes specifying cold-climate equipment</p>
                <p className="text-sm text-gray-700">Request quotes from licensed HVAC contractors for cold-climate rated heat pumps (NEEP-listed preferred). Ensure the equipment meets your utility&apos;s specific efficiency requirements for the highest rebate tier.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <p className="font-semibold text-gray-900">Submit your rebate application after installation</p>
                <p className="text-sm text-gray-700">Most utilities accept applications after installation with proof of purchase and contractor invoice. Otter Tail Power accepts applications through March 31 of the following year. Municipal utilities (Heartland) accept through Sioux Falls Sustainability at Sustainability@SiouxFalls.org or your local municipal office.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. What to Watch */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to watch</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">IRA funding runway</p>
              <p className="text-sm text-gray-600 mt-1">The One Big Beautiful Bill Act accelerated termination of federal clean energy tax credits. No legislation has been introduced to restore Section 25C or 25D. South Dakota&apos;s HEAR/HOMES opt-out means even if IRA programs continue in other states, South Dakota homeowners will not benefit without a reversal of the state&apos;s decision.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Black Hills / NorthWestern Energy merger</p>
              <p className="text-sm text-gray-600 mt-1">The pending merger between Black Hills Corporation and NorthWestern Energy could reshape the utility incentive landscape in South Dakota. If completed, the combined entity&apos;s approach to residential rebates will affect hundreds of thousands of customers. Monitor proceedings at the South Dakota Public Utilities Commission (puc.sd.gov).</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Utility budget depletion</p>
              <p className="text-sm text-gray-600 mt-1">Black Hills Energy exhausted its 2025 rebate budget mid-year and closed applications early. Other utilities could face the same constraint. Apply early in the calendar year when budgets are fresh.</p>
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
              <Link href="/heat-pumps/states/nd" className="text-brand-600 hover:underline">
                North Dakota Heat Pump Rebates 2026
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/ne" className="text-brand-600 hover:underline">
                Nebraska Heat Pump Rebates 2026
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/ia" className="text-brand-600 hover:underline">
                Iowa Heat Pump Rebates 2026
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/wy" className="text-brand-600 hover:underline">
                Wyoming Heat Pump Rebates 2026
              </Link>
            </li>
            <li>
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                Federal Heat Pump Tax Credits Ended — What Happened
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
              <strong>Disclaimer:</strong> This page covers the main utility and IRA-related heat pump incentives available to South Dakota homeowners in 2026. It does not calculate savings, guarantee eligibility, or represent any incentive program. South Dakota has no statewide heat pump program — all rebates are administered by individual utilities and may change without notice. We verify status regularly but programs can change without notice. Always confirm current amounts and eligibility with your electric utility and your contractor before making decisions.
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
