import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Missouri Heat Pump Rebates 2026: $200\u2013$5,000 Ameren + Evergy Programs | Home Energy Basics",
  description:
    "Ameren Missouri offers $2,000 heat pump rebates. Evergy covers up to $1,200. Federal tax credits ended. Here\u2019s every Missouri heat pump incentive in 2026.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/mo",
  },
  openGraph: {
    title: "Missouri Heat Pump Rebates 2026",
    description:
      "Ameren $2,000 PAYS rebates, Evergy up to $1,200, Columbia W&L up to $2,600 — the complete guide to Missouri heat pump incentives after federal credits expired.",
    url: "https://homeenergybasics.com/heat-pumps/states/mo",
    type: "article",
  },
};

export default function MissouriPage() {
  const moIncentive = incentives.MO;
  const formattedDate = formatDate(moIncentive.lastVerified);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What heat pump rebates are available in Missouri in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Missouri heat pump rebates in 2026 come from utility programs only. Ameren Missouri offers $2,000 for ducted air-source heat pumps and $5,000 for geothermal through its PAYS program. Evergy provides $650\u2013$1,200 depending on efficiency tier. Columbia Water & Light offers up to $1,200 plus a $1,400 electrification bonus. City Utilities of Springfield provides $500 for ASHPs. Rural electric cooperatives offer $300\u2013$500 per ton. Federal tax credits under Sections 25C and 25D expired December 31, 2025. Missouri\u2019s IRA-funded HEAR and HOMES programs have not yet launched.",
        },
      },
      {
        "@type": "Question",
        name: "Can I stack utility rebates with HEAR or HOMES in Missouri?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "When Missouri\u2019s HEAR and HOMES programs launch, the Missouri Department of Natural Resources has confirmed they can be combined with utility rebates. Until then, only utility rebates are available. An Ameren Missouri customer could currently receive $2,000 through PAYS plus $250 for a smart thermostat. When HEAR launches, a household below 80% of Area Median Income could stack HEAR ($8,000) with Ameren ($2,000) for up to $10,000 in combined incentives.",
        },
      },
      {
        "@type": "Question",
        name: "Do heat pumps work in Missouri winters?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Missouri sits in IECC Climate Zone 4A (Mixed-Humid). ASHRAE design temperatures range from \u22122.1\u00b0F in Kansas City to 5\u00b0F in Springfield. Modern cold-climate heat pumps with variable-speed inverter compressors maintain 75\u2013100% of rated capacity at these temperatures. Most Missouri installers recommend dual-fuel configurations that pair a heat pump with an existing gas furnace for the coldest days, which is why Ameren Missouri\u2019s largest rebate targets this setup.",
        },
      },
      {
        "@type": "Question",
        name: "Who administers Missouri\u2019s heat pump incentive programs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Utility rebates are administered directly by each utility: Ameren Missouri, Evergy, Columbia Water & Light, City Utilities of Springfield, Independence Power & Light, and rural electric cooperatives through Associated Electric Cooperative Inc. (AECI). The pending IRA rebate programs (HEAR and HOMES) will be administered by the Missouri Department of Natural Resources, Division of Energy. There is no statewide heat pump rebate program or state tax credit.",
        },
      },
      {
        "@type": "Question",
        name: "When will Missouri\u2019s HEAR and HOMES rebate programs launch?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Missouri\u2019s Division of Energy submitted applications to the U.S. DOE on November 22, 2024, for both programs. No launch date has been announced as of March 2026. The combined allocation is $151 million ($75.4M for HEAR, $75.8M for HOMES). Sign up for updates at dnr.mo.gov or email energy@dnr.mo.gov.",
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
            {" "}/ Missouri
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Missouri Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Missouri heat pump rebates in 2026 come entirely from utility programs — there is no statewide rebate and no state tax credit. Utility rebates cover <strong>$200–$5,000</strong> depending on your provider and equipment. Ameren Missouri offers <strong>$2,000</strong> for ducted air-source heat pumps. The state&apos;s pending IRA allocation of <strong>$151 million</strong> across HEAR and HOMES could dramatically expand incentives once launched. This guide covers all major Missouri heat pump incentives available in 2026, including Ameren Missouri, Evergy, Columbia Water &amp; Light, City Utilities of Springfield, and rural electric cooperatives. Here&apos;s what&apos;s actually available.
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
          <StatusCard incentive={moIncentive} />
        </div>
      </section>

      {/* 3. Short Version */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The short version</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Utility rebates are active</p>
              <p className="text-sm text-green-900">Ameren Missouri offers <strong>$2,000</strong> for ducted ASHPs and <strong>$5,000</strong> for geothermal through the PAYS program. Evergy provides <strong>$650–$1,200</strong> depending on SEER2 tier. Columbia Water &amp; Light offers up to <strong>$2,600</strong> when replacing gas heating.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Rural co-ops offer per-ton rebates</p>
              <p className="text-sm text-green-900">Missouri&apos;s electric cooperatives offer <strong>$300–$500 per ton</strong> for dual-fuel ASHPs and <strong>$400–$750 per ton</strong> for geothermal through the Take Control &amp; Save program.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Total potential savings: $2,000–$10,000+</p>
              <p className="text-sm text-green-900"><strong>$2,000–$2,600</strong> (above 150% AMI, utility only) to <strong>$10,000+</strong> (below 80% AMI, once HEAR launches). Full electrification packages through Columbia W&amp;L can reach ~$3,800 total incentives today.</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">✗ Federal tax credits expired</p>
              <p className="text-sm text-red-900">Both Section 25C ($2,000/year for heat pumps) and Section 25D (30% for geothermal) expired December 31, 2025 under the One Big Beautiful Bill Act. No replacement has been enacted.</p>
            </div>
            <div className="md:col-span-2 bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="font-semibold text-amber-800 mb-1">⚠ HEAR and HOMES have not launched in Missouri</p>
              <p className="text-sm text-amber-900">Missouri&apos;s $151 million IRA allocation for HEAR ($75.4M) and HOMES ($75.8M) is pending with no confirmed launch date. Applications were submitted November 2024. When operational, HEAR could cover up to <strong>$8,000</strong> for heat pumps for low-income households. Until then, only utility rebates are available.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Federal Expired */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Federal tax credits are gone</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <p className="text-red-900 leading-relaxed">
              The <strong>One Big Beautiful Bill Act</strong> (P.L. 119-21), signed July 4, 2025, terminated both residential clean energy tax credits seven to nine years early. <strong>Section 25C</strong> (Energy Efficient Home Improvement Credit) provided up to <strong>$2,000 per year</strong> for qualifying heat pumps at 30% of cost. <strong>Section 25D</strong> (Residential Clean Energy Credit) covered <strong>30% of costs with no dollar cap</strong> for geothermal heat pumps. Both expired <strong>December 31, 2025</strong>. Equipment purchased in 2025 but installed after that date does not qualify. No replacement has been enacted.{" "}
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">Full details on the federal credit expiration →</Link>
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            The one remaining federal benefit: taxpayers who installed qualifying equipment before the deadline and could not use the full credit in 2025 may carry forward unused Section 25D amounts to future tax years. Section 25C amounts could not be carried forward.
          </p>
        </div>
      </section>

      {/* 5. HEAR (Primary IRA program) — pending */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Home Electrification and Appliance Rebates (HEAR) — pending</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Missouri&apos;s Division of Energy within the Department of Natural Resources submitted its HEAR application to the U.S. DOE on November 22, 2024. The federal allocation is <strong>$75,366,640</strong>. No launch date has been announced.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-amber-800 mb-1">⚠ Not yet available — sign up for updates</p>
            <p className="text-sm text-amber-900">Missouri has not launched HEAR. The program survived the OBBBA because IRA rebates are appropriations, not tax credits. Sign up for email updates at{" "}
              <a href="https://dnr.mo.gov/energy/what-were-doing/inflation-reduction-act-home-energy-rebates-programs" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">dnr.mo.gov</a> or contact energy@dnr.mo.gov.
            </p>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">When HEAR launches, expected rebate amounts</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Item</th>
                  <th className="text-left p-3 font-semibold">≤80% AMI</th>
                  <th className="text-left p-3 font-semibold">80–150% AMI</th>
                  <th className="text-left p-3 font-semibold">&gt;150% AMI</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Heat pump (space heating/cooling)</td>
                  <td className="p-3 font-semibold">Up to $8,000</td>
                  <td className="p-3 font-semibold">Up to $4,000</td>
                  <td className="p-3 text-gray-500">—</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">Up to $1,750</td>
                  <td className="p-3 font-semibold">Up to $875</td>
                  <td className="p-3 text-gray-500">—</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Electrical panel upgrade</td>
                  <td className="p-3 font-semibold">Up to $4,000</td>
                  <td className="p-3 font-semibold">Up to $2,000</td>
                  <td className="p-3 text-gray-500">—</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Insulation, air sealing, ventilation</td>
                  <td className="p-3 font-semibold">Up to $1,600</td>
                  <td className="p-3 font-semibold">Up to $800</td>
                  <td className="p-3 text-gray-500">—</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Electric wiring</td>
                  <td className="p-3 font-semibold">Up to $2,500</td>
                  <td className="p-3 font-semibold">Up to $1,250</td>
                  <td className="p-3 text-gray-500">—</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Household maximum</td>
                  <td className="p-3 font-semibold">$14,000</td>
                  <td className="p-3 font-semibold">$7,000</td>
                  <td className="p-3 text-gray-500">—</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">Households ≤80% AMI receive 100% of project costs up to per-item caps. Households at 80–150% AMI receive 50% of costs. Households above 150% AMI are not eligible for HEAR.</p>
        </div>
      </section>

      {/* 6. HOMES (Secondary IRA program) — pending */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Home Owner Managing Energy Savings (HOMES) — pending</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Missouri&apos;s HOMES allocation is <strong>$75,807,060</strong>. This whole-home performance-based program provides rebates based on measured or modeled energy reduction — not specific equipment purchases.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Energy reduction</th>
                  <th className="text-left p-3 font-semibold">Standard rebate</th>
                  <th className="text-left p-3 font-semibold">≤80% AMI rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">≥20% reduction</td>
                  <td className="p-3 font-semibold">Up to $2,000</td>
                  <td className="p-3 font-semibold">Up to $4,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">≥35% reduction</td>
                  <td className="p-3 font-semibold">Up to $4,000</td>
                  <td className="p-3 font-semibold">Up to $8,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">Like HEAR, HOMES has not launched in Missouri. Both programs were submitted to DOE simultaneously in November 2024.</p>
        </div>
      </section>

      {/* 7. Utility Programs */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Utility rebates — the only incentives available now</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            With no federal credits and no state programs, utility rebates are the sole financial incentive for Missouri heat pump installations in 2026. The amount depends entirely on which utility serves your home.
          </p>

          {/* Ameren Missouri */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Ameren Missouri (St. Louis metro, central &amp; eastern Missouri)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Missouri&apos;s largest electric utility offers all heat pump rebates through the <strong>Pay As You Save (PAYS)</strong> program. The standalone HVAC rebate program that ran for 11 years ended December 31, 2024. PAYS combines upfront rebates with optional on-bill financing — no credit check required.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Minimum efficiency</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Air-source heat pump (ducted)</td>
                  <td className="p-3">15.2 SEER2</td>
                  <td className="p-3 font-semibold">$2,000/system</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">ASHP dual fuel (HP + gas backup)</td>
                  <td className="p-3">15.2 SEER2</td>
                  <td className="p-3 font-semibold">$2,000/system</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ductless mini-split</td>
                  <td className="p-3">19 SEER2</td>
                  <td className="p-3 font-semibold">$500/ton</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Ground-source heat pump</td>
                  <td className="p-3">23 EER2</td>
                  <td className="p-3 font-semibold">$5,000/system</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Smart thermostat (ENERGY STAR)</td>
                  <td className="p-3">—</td>
                  <td className="p-3 font-semibold">$250</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-amber-800 mb-1">⚠ Common mistake: Ameren does not incentivize full gas-to-electric conversion</p>
            <p className="text-sm text-amber-900">Homes with existing gas heat must maintain gas as backup (dual-fuel configuration) to qualify for the $2,000 rebate. Full gas-to-electric-only conversions receive no rebate. Homes with existing electric resistance heat switching to a heat pump qualify for the full amount.</p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-blue-800 mb-1">Income-eligible: Ameren CommunitySavers</p>
            <p className="text-sm text-blue-900">Households at or below 80% of Area Median Income (AMI) or in qualifying census tracts may receive free whole-home upgrades including heat pump installation through Ameren&apos;s CommunitySavers program. Ameren has allocated <strong>$20 million</strong> for income-eligible customers. Call 1-877-215-5752 to check availability.</p>
          </div>

          {/* Evergy */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Evergy (Kansas City metro, western Missouri)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Evergy&apos;s Missouri programs operate under MEEIA Cycle 4 (2025–2028) with efficiency-tiered rebates that reward higher-performing equipment.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Efficiency tier</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Air-source heat pump</td>
                  <td className="p-3">15.2–15.99 SEER2</td>
                  <td className="p-3 font-semibold">$650</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Air-source heat pump</td>
                  <td className="p-3">16.0–16.99 SEER2</td>
                  <td className="p-3 font-semibold">$900</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Air-source heat pump</td>
                  <td className="p-3">17.0+ SEER2</td>
                  <td className="p-3 font-semibold">$1,200</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Mini-split heat pump</td>
                  <td className="p-3">Any qualifying</td>
                  <td className="p-3 font-semibold">$200</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3">&lt;55 gal, any UEF</td>
                  <td className="p-3 font-semibold">$650</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ground-source (replacing operating)</td>
                  <td className="p-3">—</td>
                  <td className="p-3 font-semibold">$2,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ground-source (replacing failed/new)</td>
                  <td className="p-3">—</td>
                  <td className="p-3 font-semibold">$1,300</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Evergy also offers a <strong>FastTrack HVAC PAYS</strong> program (launched August 2025) combining instant rebates of <strong>$1,000+</strong> with on-bill financing over 15 years at a 3% service fee. A reduced <strong>winter space heat rate</strong> is available for heat pump owners during the eight-month heating season.
          </p>

          {/* City Utilities of Springfield */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">City Utilities of Springfield</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Springfield&apos;s municipal utility offers straightforward flat-rate rebates for residential, multifamily, and new construction customers. Applications must be submitted within 90 days of purchase.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Minimum efficiency</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Air-source heat pump</td>
                  <td className="p-3">15.2 SEER2 / 7.8 HSPF2</td>
                  <td className="p-3 font-semibold">$500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Geothermal heat pump</td>
                  <td className="p-3">—</td>
                  <td className="p-3 font-semibold">$1,025</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3">—</td>
                  <td className="p-3 font-semibold">$400</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Columbia Water & Light */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Columbia Water &amp; Light</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Columbia runs Missouri&apos;s most comprehensive municipal utility program, with standard rebates, an electrification bonus, and a discounted winter electric rate.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Efficiency tier</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Air-source heat pump</td>
                  <td className="p-3">15.2–18.1 SEER2</td>
                  <td className="p-3 font-semibold">$800</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Air-source heat pump</td>
                  <td className="p-3">18.2+ SEER2</td>
                  <td className="p-3 font-semibold">$1,200</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Geothermal heat pump</td>
                  <td className="p-3">—</td>
                  <td className="p-3 font-semibold">$1,200</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3">—</td>
                  <td className="p-3 font-semibold">$500</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Efficient Electrification Bonus</td>
                  <td className="p-3">Gas furnace + AC → dual-fuel HP</td>
                  <td className="p-3 font-semibold">$1,400</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Columbia also offers a <strong>discounted winter electric rate</strong> for heat pump owners (October–May) and a Home Performance with ENERGY STAR program providing up to <strong>$1,200</strong> in whole-home rebates plus low-interest loans up to <strong>$30,000</strong>.
          </p>

          {/* Independence Power & Light */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Independence Power &amp; Light</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Independence provides more modest incentives: <strong>$259–$701</strong> for central heat pumps (varying by size and efficiency) and <strong>$300</strong> for heat pump water heaters, plus a low-interest loan program (IndependenceHELP) up to <strong>$15,000</strong> for energy efficiency measures.
          </p>

          {/* Rural co-ops */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Rural electric cooperatives (Take Control &amp; Save)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Missouri&apos;s electric cooperatives participate in the Take Control &amp; Save program coordinated through Associated Electric Cooperative Inc. (AECI). Rebates are per-ton, making them potentially generous for larger systems.
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
                  <td className="p-3">Dual-fuel ASHP (min 8.1 HSPF2)</td>
                  <td className="p-3 font-semibold">$300–$500/ton</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ground-source heat pump</td>
                  <td className="p-3 font-semibold">$400–$750/ton</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">50% of cost, up to $750–$1,050</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ductless mini-split</td>
                  <td className="p-3 font-semibold">$150–$250/unit</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">
            Cooperatives typically require R-38 ceiling and R-13 wall insulation, Manual J sizing calculations, and AHRI certification. Key cooperatives with active programs include Boone Electric, Missouri Rural Electric, White River Valley Electric, Co-Mo Electric, Ozark Electric, and Ozark Border Electric. Contact your local co-op for exact amounts.
          </p>
        </div>
      </section>

      {/* 8. Local Programs — Columbia electrification bonus already covered in utility section, PACE here */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">PACE financing and other state-level options</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Missouri has no statewide heat pump rebate program and no state tax credit. Two minor state-level benefits exist, plus PACE financing.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">PACE (Property Assessed Clean Energy)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            PACE allows property owners to finance 100% of heat pump costs through a property tax assessment repaid over up to 20 years. Missouri Clean Energy District covers 95+ cities, Show Me PACE operates in 73+ communities, and specialized districts exist for St. Louis City and St. Louis County.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Certified Home Energy Audit Deduction</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Missouri taxpayers can deduct up to <strong>$1,000/year</strong> (lifetime cap <strong>$2,000</strong>) in state income tax for costs related to a DNR-certified home energy audit and implementing its recommendations. This is a deduction, not a credit — the actual tax savings depend on your marginal rate.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Show-Me Green Sales Tax Holiday</h3>
          <p className="text-gray-700 leading-relaxed">
            The annual Show-Me Green Sales Tax Holiday (April 19–25 in 2026) exempts ENERGY STAR appliances from state sales tax. A qualifying heat pump purchased during this window could save <strong>$300–$500</strong> in sales tax depending on system cost.
          </p>
        </div>
      </section>

      {/* 9. Stacking */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Missouri incentives stack</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Today, the only stack available is your utility rebate plus any applicable PACE financing or the energy audit deduction. When HEAR and HOMES launch, Missouri DNR has confirmed they can be combined with utility rebates and other funding sources. Here are realistic scenarios for a ducted air-source heat pump system costing <strong>$10,000–$15,000</strong> installed.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 150% AMI — Ameren Missouri customer (available now)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Ameren PAYS rebate (ducted ASHP): $2,000</li>
                <li>Smart thermostat rebate: $250</li>
                <li>HEAR/HOMES: not eligible above 150% AMI</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$2,250</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">80–150% AMI — Evergy customer (when HEAR launches)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Evergy rebate (17.0+ SEER2): $1,200</li>
                <li>HEAR heat pump rebate (50% of costs): up to $4,000</li>
                <li>HEAR panel upgrade if needed: up to $2,000</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$5,200–$7,200</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">Below 80% AMI — Ameren Missouri customer (when HEAR launches)</p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>HEAR heat pump rebate (100% of costs): up to $8,000</li>
                <li>Ameren PAYS rebate: $2,000</li>
                <li>HEAR panel upgrade: up to $4,000</li>
                <li>HEAR insulation/air sealing: up to $1,600</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$10,000–$14,000</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-5">
            <p className="font-semibold text-gray-900 mb-1">What you&apos;ll actually pay</p>
            <p className="text-sm text-gray-700">For a typical ducted ASHP installation costing $10,000–$15,000: an above-median-income Ameren customer pays <strong>$7,750–$12,750 out of pocket</strong> today. When HEAR launches, a low-income household could see <strong>$0–$5,000 out of pocket</strong> depending on total project scope. Columbia Water &amp; Light customers replacing gas heating can reduce out-of-pocket costs by up to $2,600 today.</p>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Missouri has no state tax credit and no state loan program for residential homeowners. PACE financing is available statewide but is a loan repaid through property taxes, not a rebate.
          </p>
        </div>
      </section>

      {/* 10. Weatherization */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Weatherization Assistance Program</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Missouri&apos;s Weatherization Assistance Program (WAP) serves households at or below 200% of the Federal Poverty Guidelines. Administered through 18 local community action agencies, the program takes a whole-house approach that can include heat pump installation when deemed cost-effective through an energy audit.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Over 193,000 Missouri homes have been weatherized since 1977. Evergy customers may also qualify for the utility&apos;s separate income-eligible weatherization program, which provides free weatherization for households at or below 200% of the Federal Poverty Level.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <p className="font-semibold text-green-800 mb-1">✓ Best candidates for Missouri heat pump rebates in 2026</p>
            <p className="text-sm text-green-900">Homes with electric resistance heat (31% of Missouri homes) — switching to a heat pump cuts energy use 50–70% and qualifies for the full utility rebate. Propane-heated homes in rural areas (7% of households) — highest per-BTU fuel costs make heat pumps the strongest economic case. Columbia Water &amp; Light customers replacing gas heating — the $1,400 electrification bonus plus standard rebate totals up to $2,600. Low-income households when HEAR launches — potential full coverage of installation costs.</p>
          </div>
        </div>
      </section>

      {/* 11. Climate */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Missouri climate and heat pump performance</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Missouri sits primarily in IECC Climate Zone 4A (Mixed-Humid), with Zone 5A along the northern border. The state experiences genuine winter cold that affects heat pump sizing and performance.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">City</th>
                  <th className="text-left p-3 font-semibold">ASHRAE 99.6% heating design temp</th>
                  <th className="text-left p-3 font-semibold">Climate zone</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Kansas City</td>
                  <td className="p-3 font-semibold">−2.1°F</td>
                  <td className="p-3">4A</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">St. Louis</td>
                  <td className="p-3 font-semibold">2.0°F</td>
                  <td className="p-3">4A</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Columbia</td>
                  <td className="p-3 font-semibold">~2°F</td>
                  <td className="p-3">4A</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Springfield</td>
                  <td className="p-3 font-semibold">~5°F</td>
                  <td className="p-3">4A</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Cold-climate heat pumps with variable-speed inverter compressors maintain <strong>75–100% of rated capacity</strong> at these temperatures. Standard models deliver only 20–30% of rated capacity at 0°F. For Kansas City and northern Missouri, where design temperatures drop below 0°F, cold-climate models are strongly recommended.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Dual-fuel configurations — where a gas furnace provides backup at the coldest temperatures — are the dominant approach in Missouri. This explains why Columbia&apos;s highest rebate (<strong>$1,400</strong>) targets this setup and why Ameren requires gas backup for homes converting from gas heat.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Natural gas heats 59% of Missouri households, concentrated in urban areas served by Spire. Electric resistance accounts for 31%, and propane at 7% dominates rural areas. Missouri&apos;s average residential electricity rate of <strong>12.91¢/kWh</strong> (below the national average) generally favors heat pump operating economics.
          </p>
          <p className="text-gray-700 leading-relaxed">
            If you&apos;re also considering battery storage to pair with a heat pump or solar system, see our{" "}
            <Link href="/battery" className="text-brand-600 hover:underline">guide to home batteries in 2026</Link>.
          </p>
        </div>
      </section>

      {/* 12. How to Apply */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to apply</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Since Missouri&apos;s incentives are utility-specific, the process depends on your provider. Here is the general path for the largest programs.
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-gray-900">Identify your electric utility</p>
                <p className="text-sm text-gray-700">Check your electric bill. Ameren Missouri serves eastern and central Missouri. Evergy serves the Kansas City metro and western Missouri. Municipal utilities (Columbia, Springfield, Independence) and rural co-ops serve their respective areas.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900">Get a qualifying contractor and Manual J sizing</p>
                <p className="text-sm text-gray-700">Ameren PAYS requires a participating contractor. Evergy and co-ops require equipment meeting their efficiency minimums. Request a Manual J load calculation to ensure proper sizing — co-ops require this for rebate approval.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-900">Apply through your utility</p>
                <p className="text-sm text-gray-700">Ameren: rebates are processed through the PAYS program at installation. Evergy: submit rebate application within 90 days. Springfield CU: submit within 90 days of purchase. Columbia W&amp;L: apply through Columbia Power Partners. Co-ops: contact your local cooperative before purchasing.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <p className="font-semibold text-gray-900">Sign up for HEAR/HOMES notifications</p>
                <p className="text-sm text-gray-700">Visit the Missouri DNR IRA rebates page or email energy@dnr.mo.gov to be notified when these programs launch. If you qualify by income, it may be worth waiting for the additional $4,000–$8,000 in HEAR rebates.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. What to Watch */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to watch</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">HEAR and HOMES launch timeline</p>
              <p className="text-sm text-gray-600 mt-1">Missouri&apos;s $151 million IRA allocation could launch at any time. Low-income homeowners who can wait may benefit from delaying their purchase until HEAR is available, as it could cover 100% of heat pump costs. Monitor dnr.mo.gov for updates.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">IRA funding runway</p>
              <p className="text-sm text-gray-600 mt-1">While IRA rebate appropriations survived the OBBBA, ongoing administrative delays and potential executive-level funding blocks could affect Missouri&apos;s launch timeline. The $151 million allocation exists but disbursement depends on federal approval of Missouri&apos;s implementation plan.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Liberty Utilities (Empire District) program status</p>
              <p className="text-sm text-gray-600 mt-1">Liberty Utilities&apos; HVAC rebate page in southwest Missouri returns a 404 error as of March 2026. If you&apos;re a Liberty customer, call 1-800-206-2300 to confirm current rebate availability.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Ameren PAYS program capacity</p>
              <p className="text-sm text-gray-600 mt-1">Ameren&apos;s CommunitySavers program (free upgrades for income-eligible customers) was fully subscribed in 2024. The $20 million allocation for 2025–2028 may have limited slots. Apply early if you qualify.</p>
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
              <Link href="/heat-pumps/states/il" className="text-brand-600 hover:underline">Illinois Heat Pump Rebates</Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/ks" className="text-brand-600 hover:underline">Kansas Heat Pump Rebates &amp; Incentives (2026)</Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/ar" className="text-brand-600 hover:underline">Arkansas Heat Pump Rebates &amp; Incentives (2026)</Link>
            </li>
            <li>
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">Federal Heat Pump Tax Credits Ended — What Changed</Link>
            </li>
            <li>
              <Link href="/heat-pumps" className="text-brand-600 hover:underline">All State Heat Pump Incentives</Link>
            </li>
            <li>
              <Link href="/battery" className="text-brand-600 hover:underline">Are Home Batteries Worth It in 2026?</Link>
            </li>
          </ul>
        </div>
      </section>

      {/* 16. Sources */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="space-y-2 text-sm">
            {moIncentive.sources.map((source: { label: string; url: string }, index: number) => (
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
              <strong>Disclaimer:</strong> This page covers the main statewide, utility, and IRA heat pump incentives available to Missouri homeowners in 2026. It does not calculate savings, guarantee eligibility, or represent any incentive program. Utility rebate amounts and program rules vary by provider and are subject to change. We verify status regularly but programs can change without notice. Always confirm current amounts and eligibility with your utility and contractor before making decisions.
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
            <Link href="/heat-pumps" className="text-brand-600 hover:underline text-sm">
              ← Back to Heat Pumps overview
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
