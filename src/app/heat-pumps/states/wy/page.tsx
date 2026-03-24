import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Wyoming Heat Pump Rebates 2026: Up to $1,700 + Wattsmart Rebates | Home Energy Basics",
  description:
    "Rocky Mountain Power Wattsmart offers up to $1,700 for cold-climate heat pumps. Federal tax credits ended. Here's every Wyoming heat pump incentive in 2026.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/wy",
  },
  openGraph: {
    title: "Wyoming Heat Pump Rebates 2026",
    description:
      "Wattsmart rebates up to $1,700 for cold-climate ASHPs, co-op rebates up to $1,800 — the complete guide to Wyoming heat pump incentives after federal credits expired.",
    url: "https://homeenergybasics.com/heat-pumps/states/wy",
    type: "article",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What heat pump rebates are available in Wyoming in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rocky Mountain Power\u2019s Wattsmart program is the primary incentive, offering up to $1,700 for ducted cold-climate air-source heat pumps and up to $4,000 for ASHP-plus-window bundles (electric resistance conversions only). Several rural electric cooperatives offer $500\u2013$1,800 through Tri-State Generation partnerships. Federal Section 25C and 25D tax credits expired December 31, 2025. Wyoming has no state income tax and therefore no state-level energy tax credits. The state\u2019s IRA-funded Home Energy Savings Program (HESP) has not launched.",
      },
    },
    {
      "@type": "Question",
      name: "Can I stack Wattsmart rebates with other programs in Wyoming?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Currently there is very little to stack. Federal tax credits expired, the state offers no rebates or tax credits, and the IRA-funded HESP program has not launched. Most Wyoming homeowners can only access their utility rebate. If HESP activates, IRA statute permits stacking HEAR rebates with utility incentives, which could bring total incentives to $10,000 or more for income-qualified households.",
      },
    },
    {
      "@type": "Question",
      name: "Do cold-climate heat pumps work in Wyoming\u2019s extreme winters?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, but equipment selection matters. Wyoming\u2019s ASHRAE 99% design temperatures range from -1\u00b0F in Cheyenne to -10\u00b0F in Jackson Hole. Modern cold-climate heat pumps on the NEEP Qualified Products list can operate to -15\u00b0F or lower, but supplemental backup heat is strongly recommended. Dual-fuel systems pairing a cold-climate heat pump with a gas furnace are particularly practical given Wyoming\u2019s low natural gas prices.",
      },
    },
    {
      "@type": "Question",
      name: "What happened to Wyoming\u2019s IRA Home Energy Savings Program?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Wyoming Energy Authority applied for and received a conditional award for approximately $69.2 million in IRA funding ($34.7M for HOMES, $34.5M for HEAR). However, an executive order in January 2025 froze IRA disbursements before Wyoming received its funds. As of March 2026, the program remains on pause. The funding is legally authorized through September 30, 2031, and was not repealed by the OBBB.",
      },
    },
    {
      "@type": "Question",
      name: "Who administers Wyoming\u2019s heat pump incentive programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rocky Mountain Power administers the Wattsmart Homes rebate program, Wyoming\u2019s largest utility incentive. The Wyoming Energy Authority oversees the frozen HESP program. The Wyoming Department of Family Services administers the Weatherization Assistance Program through two nonprofit providers. Individual rural electric cooperatives administer their own rebate programs through Tri-State Generation partnerships.",
      },
    },
  ],
};

export default function WyomingPage() {
  const wyIncentive = incentives.WY;
  const formattedDate = formatDate(wyIncentive.lastVerified);

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
            {" "}/ Wyoming
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Wyoming Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Wyoming&apos;s heat pump incentive landscape is thin. Federal tax credits expired, the state has no income tax (and therefore no state energy credits), and the <strong>$69.2 million</strong> IRA-funded Home Energy Savings Program has not launched. The main incentive available is Rocky Mountain Power&apos;s Wattsmart program, offering up to <strong>$1,700</strong> for cold-climate heat pumps converting from electric resistance. This guide covers all major Wyoming heat pump incentives available in 2026, including Wattsmart rebates, rural co-op programs, and the frozen IRA allocation. Here&apos;s what&apos;s actually available.
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
          <StatusCard incentive={wyIncentive} />
        </div>
      </section>

      {/* 3. Short Version */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Short version</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Rocky Mountain Power Wattsmart</p>
              <p className="text-sm text-green-900">Up to $1,700 for ducted cold-climate ASHP, up to $2,000 for ductless multi-head, up to $4,000 for ASHP + window bundle. Electric resistance conversions only.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Rural electric co-op rebates</p>
              <p className="text-sm text-green-900">Carbon Power &amp; Light, Wheatland REA, Lower Valley Energy, and others offer $500–$1,800 for heat pumps through Tri-State Generation partnerships.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Total potential savings</p>
              <p className="text-sm text-green-900">$1,700 (all income tiers) to ~$2,300 (ASHP + HPWH combo). ASHP + window bundle packages can reach ~$4,600 total incentives.</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">✗ Federal tax credits expired</p>
              <p className="text-sm text-red-900">Section 25C ($2,000 heat pump credit) and Section 25D (30% geothermal credit) both ended December 31, 2025 under the OBBB.</p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 md:col-span-2">
              <p className="font-semibold text-amber-800 mb-1">⚠ Wyoming&apos;s $69.2M IRA rebate allocation has not launched</p>
              <p className="text-sm text-amber-900">The Home Energy Savings Program (HESP) — covering both HOMES and HEAR rebates — was frozen by a federal funding pause in January 2025. No state tax credits exist. Gas and propane conversion customers have limited or no utility rebate options. Black Hills Energy suspended all rebates effective January 2026.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Federal Expired */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Federal tax credits have ended</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <p className="text-red-900 leading-relaxed">
              <strong>Section 25C</strong> (Energy Efficient Home Improvement Credit) offered up to <strong>$2,000</strong> for qualified heat pumps. <strong>Section 25D</strong> (Residential Clean Energy Credit) covered 30% of geothermal heat pump costs. Both credits ended <strong>December 31, 2025</strong>, terminated early by the One Big Beautiful Bill Act (OBBB, Public Law 119-21) signed July 4, 2025. The IRA had originally extended these credits through 2032, but OBBB accelerated their expiration by seven years.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            A heat pump purchased in 2025 but not installed until 2026 does not qualify — equipment must have been installed and operational by December 31, 2025. One narrow exception: unused Section 25D credits from prior years can be carried forward to 2026 tax returns if the homeowner&apos;s tax liability was too low to use the full credit in the year of installation. Congress has not introduced replacement legislation as of March 2026.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">Read more about what changed with federal heat pump tax credits</Link>.
          </p>
        </div>
      </section>

      {/* 5. HESP (IRA Program — Frozen) */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Wyoming&apos;s IRA rebate program has not launched</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Wyoming Energy Authority (WEA) was allocated approximately <strong>$69.2 million</strong> in IRA funding — <strong>$34.7 million</strong> for the Home Owner Managing Energy Savings (HOMES) program and <strong>$34.5 million</strong> for the Home Electrification and Appliance Rebates (HEAR) program. Wyoming branded both programs together as the <strong>Home Energy Savings Program (HESP)</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            WEA issued an RFP for a program designer in August 2024, hosted public input sessions in December 2024, and submitted its application to DOE by the January 31, 2025 deadline. However, Executive Order 14154 froze IRA disbursements before Wyoming received its funds. As of March 2026, WEA has confirmed the program remains on pause pending direction from DOE. The website still references a 2025 launch target that has not been updated.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">What HESP would offer if it launches</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            The HOMES and HEAR programs are legally authorized through September 30, 2031, and were not repealed by the OBBB. If Wyoming&apos;s HESP activates, the federal statutory rebate amounts would apply. Wyoming had not finalized specific program rules before the pause.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Income tier</th>
                  <th className="text-left p-3 font-semibold">HEAR heat pump</th>
                  <th className="text-left p-3 font-semibold">HEAR HPWH</th>
                  <th className="text-left p-3 font-semibold">HOMES rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Below 80% AMI</td>
                  <td className="p-3 font-semibold">Up to $8,000</td>
                  <td className="p-3 font-semibold">Up to $1,750</td>
                  <td className="p-3 font-semibold">Up to $8,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">80–150% AMI</td>
                  <td className="p-3 font-semibold">Up to $8,000 (50% of cost)</td>
                  <td className="p-3 font-semibold">Up to $1,750 (50% of cost)</td>
                  <td className="p-3 font-semibold">Up to $4,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Above 150% AMI</td>
                  <td className="p-3 text-gray-500">Not eligible</td>
                  <td className="p-3 text-gray-500">Not eligible</td>
                  <td className="p-3 font-semibold">Up to $4,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="font-semibold text-blue-800 mb-1">Wyoming has no state income tax — and no state energy tax credits</p>
            <p className="text-sm text-blue-900">Unlike neighboring Colorado, Wyoming cannot offer state-level tax credits for heat pumps or energy efficiency improvements. There is no state rebate program, no state loan program for residential heat pumps, and no state sales tax exemption for energy equipment. Utility rebates and the frozen HESP allocation are the only incentive pathways.</p>
          </div>
        </div>
      </section>

      {/* 6. Utility Programs */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Utility rebates by provider</h2>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Rocky Mountain Power — Wattsmart Homes</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Rocky Mountain Power serves roughly 57% of Wyoming&apos;s electricity customers, making <strong>Wattsmart Homes</strong> the most widely available heat pump incentive in the state. Rebates apply to electric resistance conversions and existing heat pump upgrades. <strong>Gas, propane, oil, and wood heating conversions do not qualify.</strong>
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Ducted air-source heat pumps</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Rebate amounts depend on efficiency tier. Converting from electric resistance heating:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Tier</th>
                  <th className="text-left p-3 font-semibold">Efficiency minimum</th>
                  <th className="text-left p-3 font-semibold">Rebate (from elec. resistance)</th>
                  <th className="text-left p-3 font-semibold">Rebate (HP upgrade)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Tier 1</td>
                  <td className="p-3">7.5 HSPF2 / 14.3 SEER2</td>
                  <td className="p-3 font-semibold">$1,200</td>
                  <td className="p-3 font-semibold">$250</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Tier 2</td>
                  <td className="p-3">8.1 HSPF2 / 15.2 SEER2</td>
                  <td className="p-3 font-semibold">$1,700</td>
                  <td className="p-3 font-semibold">$350</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Tier 3 (Cold Climate)</td>
                  <td className="p-3">8.5 HSPF2 / 16 SEER2</td>
                  <td className="p-3 font-semibold">$1,700</td>
                  <td className="p-3 font-semibold">$500</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Cold Climate Tier 3 units must appear on the <strong>NEEP Qualified Products list</strong>. All HVAC installations require a program-eligible contractor.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Ductless and mini-split heat pumps</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Converting from electric resistance: <strong>$1,000</strong> for single-head units, <strong>$2,000</strong> for multi-head or ducted mini-splits. A supplemental ductless unit for a gas-heated home earns <strong>$500</strong>. All ductless units require inverter-driven compressors with variable-speed indoor fans, minimum 8.1 HSPF2 / 16 SEER2.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Heat pump + window bundle</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Replacing electric resistance heating with a qualifying ASHP while also replacing at least 80% of windows (U-Factor ≤ 0.22) earns <strong>$3,000</strong> (Tier 1) or <strong>$4,000</strong> (Cold Climate Tier 3). This replaces the standalone ASHP rebate — they do not stack.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Heat pump water heaters</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>$300</strong> (Tier 1) or <strong>$600</strong> (Tier 2+). Must replace an existing electric storage water heater. Self-installation is permitted for HPWHs — the only category where DIY qualifies. Applications must be submitted within 90 days of installation at wattsmarthomes.com.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Black Hills Energy and Cheyenne Light, Fuel &amp; Power</h3>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-amber-800 mb-1">⚠ All rebate programs suspended</p>
            <p className="text-sm text-amber-900">Black Hills Energy and its subsidiary Cheyenne Light, Fuel &amp; Power suspended all residential rebate programs effective January 1, 2026. The company accepted final applications through January 31, 2026 for equipment installed in 2025. Black Hills has requested dismissal of its 2026–2028 DSM plan and announced plans to redesign programs. No timeline for new program launches has been given. This affects approximately 41,000 electric and 35,000 gas customers in the Cheyenne metro area.</p>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Rural electric cooperatives</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Several Wyoming cooperatives offer heat pump rebates through partnerships with <strong>Tri-State Generation &amp; Transmission</strong>. Programs vary by cooperative.
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
                  <td className="p-3">Carbon Power &amp; Light</td>
                  <td className="p-3 font-semibold">$500–$1,500</td>
                  <td className="p-3 font-semibold">$350</td>
                  <td className="p-3">$500 dual-fuel bonus. GSHP at $150/ton.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Wheatland REA</td>
                  <td className="p-3 font-semibold">$675–$1,800</td>
                  <td className="p-3">—</td>
                  <td className="p-3">Capped at 50% of equipment cost.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Lower Valley Energy</td>
                  <td className="p-3 font-semibold">Varies</td>
                  <td className="p-3 font-semibold">Varies</td>
                  <td className="p-3">Pre-approval required. Serves Jackson Hole area.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Big Horn REA / Wyrulec</td>
                  <td className="p-3 font-semibold">Available</td>
                  <td className="p-3">—</td>
                  <td className="p-3">Contact co-op directly for amounts.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. Stacking */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How programs stack</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            With federal tax credits expired, no state incentives, and HESP not launched, Wyoming homeowners can currently access <strong>only utility rebates</strong> — there is nothing to stack them with. No utility in Wyoming offers income-qualified adders or enhanced tiers, so the incentive amount is the same regardless of household income. The scenarios below assume a Rocky Mountain Power customer converting from electric resistance heating.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 150% of Area Median Income (AMI) — Ducted cold-climate ASHP</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Wattsmart Tier 3 ccASHP (electric resistance conversion): $1,700</li>
                <li>Wattsmart HPWH (Tier 2): $600</li>
                <li>State/federal incentives: $0</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$2,300</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">80–150% AMI — Ducted cold-climate ASHP</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Wattsmart Tier 3 ccASHP (electric resistance conversion): $1,700</li>
                <li>Wattsmart HPWH (Tier 2): $600</li>
                <li>State/federal incentives: $0</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$2,300</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">Below 80% AMI — Ducted cold-climate ASHP</p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>Wattsmart Tier 3 ccASHP (electric resistance conversion): $1,700</li>
                <li>Wattsmart HPWH (Tier 2): $600</li>
                <li>WAP heating system replacement (if eligible): up to $12,000</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$2,300 (utility only) — WAP extremely limited</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-5">
            <p className="font-semibold text-gray-900 mb-1">What you&apos;ll actually pay</p>
            <p className="text-sm text-gray-700">
              A whole-home cold-climate heat pump system typically costs <strong>$12,000–$18,000</strong> installed in Wyoming. After Wattsmart rebates of $1,700–$2,300, most homeowners should expect <strong>$10,000–$16,000 out of pocket</strong>. The ASHP + window bundle ($4,000 rebate) improves the math but requires major window replacement. Homeowners served by Black Hills Energy or converting from gas/propane heating currently have no utility rebate options.
            </p>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            Wyoming has no state tax credits, no state rebate program, and no state energy loan program. The Weatherization Assistance Program served only 24 homes statewide in FY 2024.
          </p>
        </div>
      </section>

      {/* 8. Weatherization */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Weatherization Assistance Program</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The <strong>Wyoming Department of Family Services (DFS)</strong> administers the Weatherization Assistance Program (WAP), funded by the U.S. Department of Energy and HHS. Two nonprofit agencies deliver services statewide: <strong>Council of Community Services</strong> (Campbell, Crook, Johnson, Sheridan, and Weston counties) and <strong>Wyoming Weatherization Services</strong> (remaining 18 counties).
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            WAP covers insulation, air sealing, heating system repair or replacement, and weatherization measures with benefits up to <strong>$12,000 per home</strong>. Eligibility extends to households at or below <strong>200% of the Federal Poverty Level</strong>, with automatic qualification for SNAP, SSI, and TANF recipients. Priority goes to households with elderly members (60+), disabled individuals, or children under 5. Both homeowners and renters qualify. Applications are accepted year-round through the joint LIEAP/WAP portal at{" "}
            <a href="https://dfs.wyo.gov/assistance-programs/home-utilities-energy-assistance/weatherization-assistance-program-wap-2/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">dfs.wyo.gov</a>.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="font-semibold text-amber-800 mb-1">⚠ Extremely limited availability</p>
            <p className="text-sm text-amber-900">Wyoming&apos;s WAP served only 24 households statewide in the most recent fiscal year. While the program can theoretically cover a full heating system replacement including a heat pump, the extremely limited capacity means most applicants face long wait times.</p>
          </div>
        </div>
      </section>

      {/* 9. Climate */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Wyoming&apos;s climate demands cold-climate equipment</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Wyoming spans IECC climate zones 5B, 6B, and 7 — among the coldest in the contiguous United States. The vast majority of the population lives in <strong>Zone 6B (Cold, Dry)</strong>. Three mountain counties (Teton, Sublette, Lincoln) sit in <strong>Zone 7 (Very Cold)</strong>. Standard heat pumps lose significant capacity below 20°F. Cold-climate models on the NEEP Qualified Products list are essential for Wyoming installations.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">City</th>
                  <th className="text-left p-3 font-semibold">99% design temp</th>
                  <th className="text-left p-3 font-semibold">Heating degree days</th>
                  <th className="text-left p-3 font-semibold">Climate zone</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Cheyenne</td>
                  <td className="p-3 font-semibold">-1°F</td>
                  <td className="p-3">7,381</td>
                  <td className="p-3">6B</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Casper</td>
                  <td className="p-3 font-semibold">-5°F</td>
                  <td className="p-3">7,410</td>
                  <td className="p-3">6B</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Sheridan</td>
                  <td className="p-3 font-semibold">-8°F</td>
                  <td className="p-3">7,680</td>
                  <td className="p-3">6B</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Jackson Hole</td>
                  <td className="p-3 font-semibold">-10°F</td>
                  <td className="p-3">~9,500+</td>
                  <td className="p-3">7</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Dual-fuel systems</strong> pairing a cold-climate heat pump with a gas furnace are particularly practical in Wyoming. Natural gas heats approximately 59% of Wyoming homes at rates around <strong>$11.40/MCF</strong> — among the lowest in the nation. A heat pump handles most heating hours efficiently (COP 2.5–3.0), while the gas furnace covers the coldest extremes. Propane and electric resistance households have the strongest economic case for conversion, since heat pump operating costs of roughly <strong>$15–$18/MMBtu</strong> at Wyoming&apos;s average electricity rate of 12.79¢/kWh significantly undercut propane prices. For homeowners considering energy storage alongside a heat pump, see our{" "}
            <Link href="/battery" className="text-brand-600 hover:underline">guide to home batteries</Link>.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <p className="font-semibold text-green-800 mb-1">✓ Best candidates for a heat pump in Wyoming</p>
            <p className="text-sm text-green-900">Homeowners currently heating with electric resistance or propane, served by Rocky Mountain Power or a Tri-State cooperative, in climate zones 5B or 6B. Dual-fuel setups work well for natural gas homes wanting to reduce summer cooling costs while maintaining gas backup for the coldest days.</p>
          </div>
        </div>
      </section>

      {/* 10. How to Apply */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to apply for Wattsmart rebates</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Rocky Mountain Power&apos;s Wattsmart Homes program is the primary incentive for most Wyoming homeowners. Co-op members should contact their cooperative directly for their specific application process.
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-gray-900">Confirm eligibility</p>
                <p className="text-sm text-gray-700">You must be a Rocky Mountain Power customer converting from electric resistance heating or upgrading an existing heat pump. Gas, propane, oil, and wood conversions do not qualify for Wattsmart rebates.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900">Choose a program-eligible contractor</p>
                <p className="text-sm text-gray-700">All HVAC installations must be completed by a participating Wattsmart contractor. Find one at wattsmarthomes.com. Heat pump water heaters are the only category where self-installation qualifies.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-900">Install qualifying equipment</p>
                <p className="text-sm text-gray-700">Cold Climate Tier 3 units must appear on the NEEP Qualified Products list. All systems must meet minimum HSPF2 and SEER2 thresholds for the selected tier. Confirm equipment eligibility with your contractor before purchasing.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <p className="font-semibold text-gray-900">Submit your rebate application within 90 days</p>
                <p className="text-sm text-gray-700">Apply at wattsmarthomes.com with proof of purchase and installation. Applications submitted more than 90 days after installation are not accepted.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. What to Watch */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to watch</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">HESP launch status</p>
              <p className="text-sm text-gray-600 mt-1">Wyoming&apos;s $69.2 million IRA allocation could activate at any point, transforming the incentive landscape with HEAR rebates up to $8,000 for income-qualified households. The Wyoming Energy Authority has done the groundwork — the program was near launch when funds were frozen. Monitor wyoenergy.org for updates.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">IRA funding runway</p>
              <p className="text-sm text-gray-600 mt-1">The HOMES and HEAR programs are authorized through September 30, 2031. The OBBB did not repeal this funding but did terminate federal tax credits (25C/25D) seven years early. Future legislative action could further affect IRA program funding or extend it.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Black Hills Energy program redesign</p>
              <p className="text-sm text-gray-600 mt-1">Black Hills suspended all rebate programs in 2026 and is redesigning its demand-side management portfolio through public workshops with the Wyoming Public Service Commission. New programs could restore rebates for approximately 76,000 Wyoming utility customers in the Cheyenne metro area.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 12. FAQ */}
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

      {/* 13. See Also */}
      <section className="py-8 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-3">See also</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/heat-pumps/states/co" className="text-brand-600 hover:underline">Colorado Heat Pump Rebates &amp; Incentives</Link>
            </li>
            <li className="text-gray-500">
              Montana Heat Pump Rebates <em>(coming soon)</em>
            </li>
            <li className="text-gray-500">
              Utah Heat Pump Rebates <em>(coming soon)</em>
            </li>
            <li>
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">Federal Heat Pump Tax Credits Ended — What Changed</Link>
            </li>
            <li>
              <Link href="/heat-pumps" className="text-brand-600 hover:underline">All State Heat Pump Incentives</Link>
            </li>
          </ul>
        </div>
      </section>

      {/* 14. Sources */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="space-y-2 text-sm">
            {wyIncentive.sources.map((source: { label: string; url: string }, index: number) => (
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

      {/* 15. Disclaimer */}
      <section className="py-8">
        <div className="container-narrow">
          <div className="bg-gray-100 rounded-lg p-6">
            <p className="text-gray-500 text-xs leading-relaxed">
              <strong>Disclaimer:</strong> This page covers the main statewide, utility, and IRA heat pump incentives available to Wyoming homeowners in 2026. It does not calculate savings, guarantee eligibility, or represent any incentive program. Wyoming has no state income tax and no state-level energy tax credits; utility programs vary by provider and service territory. We verify status regularly but programs can change without notice. Always confirm current amounts and eligibility with Rocky Mountain Power, your electric cooperative, and your contractor before making decisions.
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
