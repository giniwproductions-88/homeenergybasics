import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Pennsylvania Heat Pump Rebates 2026: $200\u2013$1,950 + Penn Energy Savers $8,000 Coming | Home Energy Basics",
  description:
    "PA utility rebates $200\u2013$1,950 through Act 129. Penn Energy Savers up to $8,000 pending. Federal credits ended. Here\u2019s every Pennsylvania heat pump incentive in 2026.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/pa",
  },
  openGraph: {
    title: "Pennsylvania Heat Pump Rebates 2026",
    description:
      "PECO, PPL, Duquesne Light utility rebates plus Penn Energy Savers up to $8,000 pending \u2014 the complete guide to PA heat pump incentives after federal credits expired.",
    url: "https://homeenergybasics.com/heat-pumps/states/pa",
    type: "article",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What heat pump rebates are available in Pennsylvania in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pennsylvania heat pump rebates come from your electric utility under Act 129 Phase IV. PECO customers can get up to $1,950 (with EAP stacking), PPL offers $350\u2013$1,250, Duquesne Light $375\u2013$425, FirstEnergy companies $200\u2013$325, and UGI Electric up to $1,250. Federal tax credits ended December 31, 2025. The Penn Energy Savers (HEAR) program has not yet launched.",
      },
    },
    {
      "@type": "Question",
      name: "Can I stack utility rebates with Penn Energy Savers in Pennsylvania?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Act 129 utility rebates and Penn Energy Savers use different funding sources and can be combined. If Penn Energy Savers launches before Act 129 Phase IV expires (May 31, 2026), you may be able to stack both. HEELP and KEEP loan programs also stack with utility rebates. Total incentives generally cannot exceed total project cost.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Penn Energy Savers program?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Penn Energy Savers is Pennsylvania\u2019s IRA-funded rebate program (HEAR/HOMES), allocated $258.9 million. When launched, HEAR will offer up to $8,000 for heat pumps for households below 80% AMI, and 50% of costs for those at 80\u2013150% AMI. As of March 2026, the program is awaiting final DOE approval and has no confirmed launch date.",
      },
    },
    {
      "@type": "Question",
      name: "When do Pennsylvania Act 129 utility rebates expire?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Current Act 129 Phase IV rebates expire May 31, 2026. Phase V begins June 1, 2026 and was approved by the PUC in June 2025. Phase V is expected to include higher heat pump incentives, but specific amounts have not been published. If you are buying a heat pump now, apply for your utility rebate before the Phase IV deadline.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a cold-climate heat pump in Pennsylvania?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For most of Pennsylvania, yes. Philadelphia (14\u00b0F design temp) can work with standard equipment, but Pittsburgh, Scranton, and Erie (5\u20139\u00b0F design temps) need cold-climate rated heat pumps. Look for ENERGY STAR Cold Climate certification \u2014 these maintain at least 70% capacity at 5\u00b0F. Hybrid/dual-fuel systems are common in PA and make particular sense in colder regions.",
      },
    },
    {
      "@type": "Question",
      name: "Who administers Pennsylvania\u2019s heat pump programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Utility rebates are administered by each electric utility under PUC-regulated Act 129. Penn Energy Savers (HEAR/HOMES) is administered by the PA Department of Environmental Protection. The HEELP loan is administered by the PA Housing Finance Agency. There is no single statewide rebate program \u2014 your utility territory is the primary variable.",
      },
    },
  ],
};

export default function PennsylvaniaPage() {
  const paIncentive = incentives.PA;
  const formattedDate = formatDate(paIncentive.lastVerified);

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
            {" "}/ Pennsylvania
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pennsylvania Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Pennsylvania heat pump rebates vary entirely by utility territory &mdash; there is no single statewide program in 2026. Federal tax credits are gone and Penn Energy Savers hasn&apos;t launched yet, leaving Act 129 utility rebates as the only real incentives today &mdash; typically <strong>$200&ndash;$1,950 depending on your utility</strong>. PECO customers in Philadelphia can stack up to <strong>$1,950</strong> with EAP bonuses, while FirstEnergy customers get as little as <strong>$200</strong>. This guide covers all major Pennsylvania heat pump incentives available in 2026, including PECO, PPL, Duquesne Light, FirstEnergy, UGI, Penn Energy Savers, HEELP, and KEEP programs. Here&apos;s what&apos;s actually available.
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
          <StatusCard incentive={paIncentive} />
        </div>
      </section>

      {/* 3. SHORT VERSION */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The short version</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">&#10003; Utility rebates: $200&ndash;$1,950</p>
              <p className="text-sm text-green-900">Act 129 Phase IV rebates active through May 31, 2026. Amount depends on your electric utility. PECO territory (Philadelphia) has the best stacking opportunity with EAP bonuses.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">&#10003; Low-interest loans available now</p>
              <p className="text-sm text-green-900">HEELP: $1,000&ndash;$10,000 at 1% fixed APR for 10 years. KEEP: $2,500&ndash;$25,000 at below-market rates. Both stack with utility rebates.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">&#10003; Potential savings: $200 to $9,950+</p>
              <p className="text-sm text-green-900">$200&ndash;$1,950 (above 150% AMI, utility only) to $9,950+ (below 80% AMI, PECO + Penn Energy Savers when launched). Full electrification packages can reach ~$14,000 total incentives for income-qualified households.</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">&#10007; Federal tax credits expired</p>
              <p className="text-sm text-red-900">Section 25C ($2,000/year for heat pumps) and Section 25D (30% for geothermal) both ended December 31, 2025. Equipment installed in 2026 does not qualify even if purchased in 2025.</p>
            </div>
            <div className="md:col-span-2 bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="font-semibold text-amber-800 mb-1">&#9888; Penn Energy Savers has not launched yet</p>
              <p className="text-sm text-amber-900">Pennsylvania was allocated $258.9 million in HEAR/HOMES funding. Program administrators have been hired (EGIS BLN for HEAR, Resource Innovations for HOMES). As of March 2026, the program is still awaiting final DOE approval &mdash; no confirmed launch date. Do not sign contracts contingent on Penn Energy Savers funding until the program officially opens.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEDERAL EXPIRED */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Federal tax credits: both expired</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <p className="text-red-900 leading-relaxed">
              <strong>Section 25C</strong> (Energy Efficient Home Improvement Credit) and <strong>Section 25D</strong> (Residential Clean Energy Credit) both terminated for any property placed in service after December 31, 2025. The One Big Beautiful Bill Act (OBBBA), signed July 4, 2025, accelerated the sunset of both credits seven to nine years early. A heat pump purchased in 2025 but installed in January 2026 <strong>does not qualify</strong> &mdash; the &quot;placed in service&quot; date is the controlling event. For more details, see our{" "}
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                federal heat pump tax credit explainer
              </Link>.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Section 25C previously provided <strong>30% of project costs up to $2,000 per year</strong> for heat pumps and heat pump water heaters. Section 25D provided <strong>30% with no dollar cap</strong> for geothermal heat pump systems.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Homeowners who completed qualifying installations on or before December 31, 2025 can still claim the credit on their 2025 tax return using IRS Form 5695. Unused Section 25D credits from prior years can carry forward.
          </p>
        </div>
      </section>

      {/* 5. PENN ENERGY SAVERS / HEAR */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Penn Energy Savers (HEAR/HOMES) &mdash; not yet launched</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Pennsylvania was allocated <strong>$258.9 million</strong> ($129.2M for HEAR, $130M for HOMES). Program administrators have been hired &mdash; EGIS BLN for HEAR (December 2025) and Resource Innovations for HOMES (August 2025). As of March 2026, <strong>the program is still awaiting final DOE approval</strong>.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">HEAR rebate amounts (when live)</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Income tier</th>
                  <th className="text-left p-3 font-semibold">Coverage</th>
                  <th className="text-left p-3 font-semibold">Heat pump cap</th>
                  <th className="text-left p-3 font-semibold">Household cap</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Below 80% AMI</td>
                  <td className="p-3">100% of costs</td>
                  <td className="p-3 font-semibold">$8,000</td>
                  <td className="p-3 font-semibold">$14,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">80&ndash;150% AMI</td>
                  <td className="p-3">50% of costs</td>
                  <td className="p-3 font-semibold">$8,000</td>
                  <td className="p-3 font-semibold">$14,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-gray-500">Above 150% AMI</td>
                  <td className="p-3 text-gray-500" colSpan={3}>Not eligible for HEAR (may qualify for HOMES)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            The OBBBA did <strong>not</strong> rescind HEAR/HOMES funding. These are direct federal grants to states, not tax code provisions. Funds remain available until depleted or September 30, 2031. Sign up for updates at{" "}
            <a href="https://www.pennenergysavers.com" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">pennenergysavers.com</a>.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="font-semibold text-amber-800 mb-1">&#9888; Common mistake: signing contracts contingent on Penn Energy Savers</p>
            <p className="text-sm text-amber-900">Penn Energy Savers cannot fund work completed or equipment purchased before application approval. Do not rely on contractor marketing about HEAR amounts until the program officially opens. Verify directly with the PA Department of Environmental Protection.</p>
          </div>
        </div>
      </section>

      {/* 6. UTILITY PROGRAMS */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Utility rebates &mdash; your main incentive right now</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            All Pennsylvania utility rebates operate under Act 129 Phase IV and <strong>expire May 31, 2026</strong>. Phase V begins June 1, 2026 and is expected to include higher heat pump incentives. The amount you receive depends entirely on your electric utility.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">PECO (Philadelphia area &mdash; ~1.6M customers)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            PECO&apos;s base rebates are modest, but <strong>stackable EAP bonuses</strong> make the Philadelphia area the most incentivized territory in Pennsylvania.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">PECO base</th>
                  <th className="text-left p-3 font-semibold">EAP bonus</th>
                  <th className="text-left p-3 font-semibold">Combined max</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Ducted ASHP (SEER2 15.2&ndash;17.0)</td>
                  <td className="p-3">$200</td>
                  <td className="p-3">+$500</td>
                  <td className="p-3 font-semibold">$700</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ducted ASHP (SEER2 &#8805;17.1)</td>
                  <td className="p-3">$300</td>
                  <td className="p-3">+$1,000&ndash;$1,400</td>
                  <td className="p-3 font-semibold">$1,300&ndash;$1,700</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">+ Dual-fuel/hybrid adder</td>
                  <td className="p-3">&mdash;</td>
                  <td className="p-3">+$250</td>
                  <td className="p-3 font-semibold">up to $1,950</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3">$300</td>
                  <td className="p-3">&mdash;</td>
                  <td className="p-3">$300</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">PPL Electric Utilities (eastern/central PA &mdash; ~1.4M customers)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            PPL offers the best base rebates of any PA utility for ducted systems, and the strongest ductless rebates by capacity.
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
                  <td className="p-3">Ducted ASHP Tier 1 (SEER2 &#8805;15.2)</td>
                  <td className="p-3 font-semibold">$350</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ducted ASHP Tier 2 (SEER2 &#8805;16.3, HSPF2 &#8805;8.2)</td>
                  <td className="p-3 font-semibold">$450</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ductless mini-split (per outdoor unit)</td>
                  <td className="p-3 font-semibold">$400&ndash;$1,250</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">$400</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Duquesne Light (Pittsburgh area &mdash; ~600K customers)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Duquesne Light is the only PA utility with a <strong>dedicated cold-climate ASHP rebate category</strong>.
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
                  <td className="p-3">Ducted ASHP Tier 1 (SEER2 &#8805;16.3, HSPF2 &#8805;8.2)</td>
                  <td className="p-3 font-semibold">$375</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ducted ASHP Tier 2 (SEER2 &#8805;18.3, HSPF2 &#8805;8.5)</td>
                  <td className="p-3 font-semibold">$425</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Cold-climate ASHP (SEER2 &#8805;15.2, HSPF2 &#8805;8.5)</td>
                  <td className="p-3 font-semibold">$375</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Geothermal heat pump</td>
                  <td className="p-3 font-semibold">$650</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">FirstEnergy &mdash; Met-Ed, Penelec, Penn Power, West Penn Power</h3>
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
                  <td className="p-3">Ducted ASHP Tier 1 (SEER2 15.2&ndash;17.0)</td>
                  <td className="p-3 font-semibold">$200</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ducted ASHP Tier 2 (SEER2 &#8805;17.1) + promo adder</td>
                  <td className="p-3 font-semibold">$325</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">$500</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">UGI Electric (northeastern PA)</h3>
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
                  <td className="p-3">Ducted ASHP</td>
                  <td className="p-3 font-semibold">$400</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Mini-split (tiered by capacity, up to 5+ ton)</td>
                  <td className="p-3 font-semibold">$150&ndash;$1,250</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">$400</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Note about gas utilities:</strong> Philadelphia Gas Works (PGW) and Columbia Gas of PA do <strong>not</strong> offer electric heat pump rebates. PGW&apos;s EnergySense program covers gas furnaces and boilers only.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="font-semibold text-blue-800 mb-1">Pennsylvania is the only large Northeast state where your utility matters more than your income</p>
            <p className="text-sm text-blue-900">In New York, Massachusetts, and Connecticut, the biggest rebates scale by income level. In Pennsylvania, your zip code (utility territory) is the primary variable. A PECO customer above 150% AMI can get <strong>$1,650&ndash;$1,950</strong> today, while a FirstEnergy customer at the same income gets <strong>$200&ndash;$325</strong>. That&apos;s a 5&ndash;8x difference based purely on geography.</p>
          </div>
        </div>
      </section>

      {/* 7. LOCAL + FINANCING */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Local programs and state financing</h2>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Philadelphia Energy Authority &mdash; Built to Last</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            PEA&apos;s Built to Last program provides whole-home repairs and energy upgrades &mdash; including heat pumps, HPWH, and induction stoves &mdash; at <strong>100% cost coverage</strong> for low-income homeowners. PEA has installed heat pump systems in approximately 40 homes through this program and earned EPA&apos;s ENERGY STAR Home Upgrade Service Provider designation.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">PHFA HEELP Loan</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>$1,000&ndash;$10,000 at 1% fixed APR</strong> for 10 years (~$88/month on a $10,000 loan). No prepayment penalties. Income limit: up to 150% AMI. Covers heat pumps, insulation, air sealing, windows. Requires a PHFA-approved contractor.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">KEEP Home Energy Loan</h3>
          <p className="text-gray-700 leading-relaxed">
            <strong>$2,500&ndash;$25,000 at below-market rates</strong> for 3&ndash;10 years. Covers heat pumps, HPWH, insulation, EV chargers. Administered by the National Energy Improvement Fund under the PA Energy Development Authority.
          </p>
        </div>
      </section>

      {/* 8. STACKING */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How programs stack in Pennsylvania</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Utility Act 129 rebates, Penn Energy Savers (when launched), and loan programs operate through different funding sources and can be combined. For a typical 3-ton ducted heat pump installation costing <strong>$10,000&ndash;$14,000</strong>:
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 150% AMI &mdash; PECO territory ($12,000 installed)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>PECO + EAP (SEER2 &#8805;17.1): $1,300&ndash;$1,700</li>
                <li>Dual-fuel adder: +$250</li>
                <li>Penn Energy Savers: not eligible</li>
                <li>HOMES (when launched, 20%+ savings): $2,000</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$1,950&ndash;$3,950</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">80&ndash;150% AMI &mdash; PECO territory ($12,000 installed)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>PECO + EAP: $1,300&ndash;$1,950</li>
                <li>HEAR (when launched, 50% of cost): up to $6,000</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$4,500&ndash;$6,000</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">Below 80% AMI &mdash; PECO territory ($12,000 installed)</p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>PECO + EAP: $1,300&ndash;$1,950</li>
                <li>HEAR (when launched, 100% of cost): up to $8,000</li>
                <li>PEA Built to Last (Philadelphia): potential full coverage</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$9,300&ndash;$9,950</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-5 mb-6">
            <p className="font-semibold text-gray-900 mb-1">What you&apos;ll actually pay</p>
            <p className="text-sm text-gray-700">Until Penn Energy Savers launches, most Pennsylvania homeowners pay <strong>$8,050&ndash;$13,800 out of pocket</strong> after utility rebates for a typical ducted heat pump. PECO-territory homeowners get the best deal today. Once HEAR launches, income-qualified households below 80% AMI in PECO territory could see near-full coverage. FirstEnergy-territory homeowners face the thinnest current incentives ($200&ndash;$325) and have the most to gain from Penn Energy Savers.</p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-blue-800 mb-1">Timing matters: Act 129 Phase IV deadline</p>
            <p className="text-sm text-blue-900">All Act 129 Phase IV rebates expire May 31, 2026. If Penn Energy Savers launches before that date, you may be able to stack both. If it launches after, you&apos;ll get HEAR but miss Phase IV &mdash; though Phase V (starting June 1, 2026) is expected to include higher heat pump rebates.</p>
          </div>

          <p className="text-xs text-gray-400">
            Pennsylvania has no state tax credit for heat pumps. The stacking scenarios above do not include potential manufacturer rebates, which vary by brand and change frequently.
          </p>
        </div>
      </section>

      {/* 9. WEATHERIZATION */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pennsylvania Weatherization Assistance Program</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Pennsylvania&apos;s WAP, administered by the Department of Community and Economic Development through local Community Action Agencies, provides <strong>free weatherization services</strong> to households at or below 200% of the federal poverty level. Services are determined by an energy audit and can include heating system replacement if identified as cost-effective.
          </p>
          <p className="text-gray-700 leading-relaxed">
            LIHEAP crisis grants also cover emergency heating system repair or replacement for income-eligible households. Contact your local Community Action Agency or call 2-1-1 to apply. Priority is given to elderly, disabled, and families with children.
          </p>
        </div>
      </section>

      {/* 10. CLIMATE */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pennsylvania climate and heat pump performance</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Pennsylvania spans three IECC climate zones (4A, 5A, and 6A). Outside of the Philadelphia metro area, cold-climate-rated equipment is recommended for reliable performance.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">City</th>
                  <th className="text-left p-3 font-semibold">Design temp (99%)</th>
                  <th className="text-left p-3 font-semibold">Climate zone</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Philadelphia</td>
                  <td className="p-3 font-semibold">14&#176;F</td>
                  <td className="p-3">4A</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Harrisburg</td>
                  <td className="p-3 font-semibold">11&#176;F</td>
                  <td className="p-3">5A</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Allentown</td>
                  <td className="p-3 font-semibold">9&#176;F</td>
                  <td className="p-3">5A</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Pittsburgh</td>
                  <td className="p-3 font-semibold">5&#176;F</td>
                  <td className="p-3">5A</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Scranton</td>
                  <td className="p-3 font-semibold">5&#176;F</td>
                  <td className="p-3">5A</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Erie</td>
                  <td className="p-3 font-semibold">9&#176;F</td>
                  <td className="p-3">5A</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Hybrid/dual-fuel systems</strong> (heat pump + gas furnace backup) are common in PA and make particular sense in Pittsburgh and Scranton where design temps hit 5&#176;F. PECO&apos;s EAP bonus includes a $250 dual-fuel adder that specifically rewards this approach.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Heating fuel context:</strong> About 52% of PA homes heat with natural gas, 27% with electricity, 12% with heating oil, and 5% with propane. Heating oil and propane households &mdash; concentrated in rural areas and the northern tier &mdash; stand to gain the most from heat pump conversion due to high fuel costs.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Pennsylvania homeowners considering a heat pump paired with battery storage can review our{" "}
            <Link href="/battery" className="text-brand-600 hover:underline">guide to home batteries</Link>
            {" "}for current economics and incentive details.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <p className="font-semibold text-green-800 mb-1">&#10003; Best candidates for a heat pump in Pennsylvania</p>
            <p className="text-sm text-green-900">Heating oil or propane users in rural PA and the northern tier &mdash; fuel cost savings alone can justify the switch. PECO customers who can stack EAP bonuses for the highest available rebate in the state. Income-qualified households below 80% AMI who will benefit most when Penn Energy Savers launches. Homeowners with aging electric resistance heat &mdash; heat pumps cut electricity use by 30&ndash;50%. Anyone replacing a failing system who can lock in Phase IV utility rebates before the May 2026 deadline.</p>
          </div>
        </div>
      </section>

      {/* 11. HOW TO APPLY */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to apply for Pennsylvania incentives</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            With multiple utility territories and program timelines, start by identifying your electric utility &mdash; that determines your rebate amount and application path.
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <p className="font-semibold text-gray-900">Identify your electric utility</p>
                <p className="text-sm text-gray-700">Check your electric bill &mdash; PECO, PPL, Duquesne Light, Met-Ed, Penelec, Penn Power, West Penn Power, or UGI Electric. Your utility determines your rebate amount.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <p className="font-semibold text-gray-900">Check rebate eligibility and get quotes</p>
                <p className="text-sm text-gray-700">All PA utilities require ENERGY STAR certification and minimum SEER2/HSPF2 thresholds. Higher-efficiency equipment qualifies for larger rebates. PECO EAP bonuses require a participating EAP contractor.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <p className="font-semibold text-gray-900">Submit your rebate application within the deadline</p>
                <p className="text-sm text-gray-700">Usually 90&ndash;180 days after installation depending on your utility. Final cutoff for Act 129 Phase IV: <strong>May&ndash;June 2026</strong>.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
              <div>
                <p className="font-semibold text-gray-900">Apply for financing if needed</p>
                <p className="text-sm text-gray-700">HEELP (1% APR) and KEEP (below-market) loans can cover remaining costs after rebates. Apply separately &mdash; loan programs and utility rebates use different funding sources.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. WHAT TO WATCH */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to watch for in Pennsylvania</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">IRA funding runway</p>
              <p className="text-sm text-gray-600 mt-1">IRA funding for HEAR and HOMES remains authorized through September 30, 2031 or until depleted. Pennsylvania&apos;s $258.9 million allocation is secure. The OBBBA did not terminate these programs.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Penn Energy Savers launch</p>
              <p className="text-sm text-gray-600 mt-1">The biggest variable for PA heat pump economics. $258.9M in funding is allocated and administrators are hired. Monitor pennenergysavers.com for launch announcements.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Act 129 Phase V (June 1, 2026)</p>
              <p className="text-sm text-gray-600 mt-1">Phase V runs through May 2031 and was approved by the PUC in June 2025. It is expected to include higher heat pump rebates, but specific amounts have not been published. Current Phase IV rebates end May 31, 2026.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Governor Shapiro&apos;s Lightning Plan</p>
              <p className="text-sm text-gray-600 mt-1">Includes Act 129 reform legislation that could significantly expand rebate levels and modernize Pennsylvania&apos;s energy efficiency standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 13. FAQ */}
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

      {/* 14. SEE ALSO */}
      <section className="py-8 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-3">See also</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/heat-pumps/states/nj" className="text-brand-600 hover:underline">
                New Jersey Heat Pump Rebates 2026
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/ny" className="text-brand-600 hover:underline">
                New York Heat Pump Rebates 2026
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/md" className="text-brand-600 hover:underline">
                Maryland Heat Pump Rebates 2026
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/de" className="text-brand-600 hover:underline">
                Delaware Heat Pump Rebates 2026
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/oh" className="text-brand-600 hover:underline">
                Ohio Heat Pump Rebates 2026
              </Link>
            </li>
            <li>
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                Federal Heat Pump Tax Credits Ended &mdash; What It Means
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

      {/* 15. SOURCES */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="space-y-2 text-sm">
            {paIncentive.sources.map((source: { label: string; url: string }, index: number) => (
              <li key={index}>
                <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 16. DISCLAIMER */}
      <section className="py-8">
        <div className="container-narrow">
          <div className="bg-gray-100 rounded-lg p-6">
            <p className="text-gray-500 text-xs leading-relaxed">
              <strong>Disclaimer:</strong> This page covers the main statewide, utility, and IRA heat pump incentives available to Pennsylvania homeowners in 2026. It does not calculate savings, guarantee eligibility, or represent any incentive program. Pennsylvania&apos;s incentives vary entirely by utility territory &mdash; amounts shown are based on each utility&apos;s published Act 129 Phase IV programs as of March 2026. Penn Energy Savers has not launched and expected amounts may change when finalized. We verify status regularly but programs can change without notice. Always confirm current amounts and eligibility with your utility, the PA DEP, and your contractor before making decisions.
            </p>
          </div>
          <div className="mt-6 text-center">
            <Link href="/heat-pumps" className="text-brand-600 hover:underline text-sm">
              &#8592; Back to Heat Pumps overview
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
