import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Pennsylvania Heat Pump Rebates 2026: Utility Programs in Transition | Home Energy Basics",
  description:
    "Act 129 Phase IV rebates closed May 31, 2026; Phase V amounts unpublished. Penn Energy Savers still not launched. What PA homeowners can actually claim now.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/pa",
  },
  openGraph: {
    title: "Pennsylvania Heat Pump Rebates 2026",
    description:
      "PA utility heat pump rebates are between Act 129 phases and Penn Energy Savers has not launched \u2014 an honest guide to what Pennsylvania homeowners can claim in 2026.",
    url: "https://homeenergybasics.com/heat-pumps/states/pa",
    type: "article",
    publishedTime: "2026-03-22T16:55:34-05:00",
    modifiedTime: `${incentives.PA.lastVerified}T00:00:00Z`,
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
        text: "Fewer than at any point in recent years. Act 129 Phase IV utility rebate programs closed to new purchases on May 31, 2026, and Phase V rebate amounts have not been published by any Pennsylvania utility. Duquesne Light states its rebate program is being refreshed. The Penn Energy Savers (HEAR/HOMES) program has still not launched \u2014 DOE issued new program guidance on June 1, 2026, and DEP is revising the program to comply. Federal 25C/25D credits ended December 31, 2025. What remains available today: the PHFA HEELP loan (1% APR), the KEEP loan, PA Weatherization Assistance, LIHEAP crisis grants, and \u2014 in Philadelphia \u2014 the Energy Authority\u2019s Built to Last program. Check directly with your utility before assuming any rebate exists.",
      },
    },
    {
      "@type": "Question",
      name: "Can I stack utility rebates with Penn Energy Savers in Pennsylvania?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In principle yes \u2014 Act 129 utility rebates and Penn Energy Savers draw on different funding sources. But neither is claimable right now: Phase IV rebates closed May 31, 2026, Phase V amounts are unpublished, and Penn Energy Savers has not launched. HEELP and KEEP loans are available today and will stack with utility rebates whenever Phase V offerings appear. Total incentives generally cannot exceed total project cost.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Penn Energy Savers program?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Penn Energy Savers is Pennsylvania\u2019s IRA-funded rebate program (HEAR/HOMES), allocated $258.9 million ($129.2M HEAR, $130M HOMES). When launched, HEAR will cover up to 100% of costs for households below 80% AMI (heat pump cap $8,000) and 50% of costs for households at 81\u2013150% AMI. DEP estimates it will serve 12,000\u201316,000 residents. On June 1, 2026, DOE released new program guidance; DEP\u2019s Energy Programs Office is revising the program design to comply before launching. There is no confirmed launch date.",
      },
    },
    {
      "@type": "Question",
      name: "When do Pennsylvania Act 129 utility rebates expire?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Act 129 Phase IV rebate programs closed to new purchases on May 31, 2026 (Duquesne Light accepted final applications for prior installs through June 6, 2026). Phase V runs June 1, 2026 through May 2031; utilities filed their Phase V energy efficiency plans with the PUC on December 1, 2025. As of July 2026 no Pennsylvania utility has published Phase V heat pump rebate amounts, and Duquesne Light says its rebate program is being refreshed. Do not budget around a utility rebate until your utility publishes its Phase V amounts.",
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

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Pennsylvania Heat Pump Rebates & Incentives (2026)",
  datePublished: "2026-03-22T16:55:34-05:00",
  dateModified: `${incentives.PA.lastVerified}T00:00:00Z`,
  author: { "@type": "Organization", name: "Home Energy Basics", url: "https://homeenergybasics.com" },
  publisher: { "@type": "Organization", name: "Home Energy Basics", url: "https://homeenergybasics.com" },
  mainEntityOfPage: "https://homeenergybasics.com/heat-pumps/states/pa",
};

export default function PennsylvaniaPage() {
  const paIncentive = incentives.PA;
  const formattedDate = formatDate(paIncentive.lastVerified);

  return (
    <>
      <JsonLd data={faqJsonLd} />
      <JsonLd data={articleJsonLd} />

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
            Pennsylvania is in an incentive gap. Act 129 <strong>Phase IV utility rebates closed to new purchases on May 31, 2026</strong>, and no utility has published Phase V rebate amounts &mdash; Duquesne Light says its program is &quot;currently being refreshed.&quot; Federal tax credits ended December 31, 2025, and <strong>Penn Energy Savers still has not launched</strong>. What Pennsylvania homeowners can actually claim today is financing and income-based assistance: the 1% HEELP loan, the KEEP loan, Weatherization Assistance, and Philadelphia&apos;s Built to Last program. This guide covers where each utility stands, the Phase IV amounts for reference, and what to watch for.
          </p>
          <p className="text-sm text-gray-500">
            Updated {formattedDate} — verified against official program sources
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
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="font-semibold text-amber-800 mb-1">&#9888; Utility rebates: between phases</p>
              <p className="text-sm text-amber-900">Act 129 Phase IV rebates closed to new purchases May 31, 2026. Phase V began June 1, 2026 but no utility has published rebate amounts. Duquesne Light&apos;s program is being refreshed. Confirm with your utility before assuming any rebate.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">&#10003; Low-interest loans available now</p>
              <p className="text-sm text-green-900">HEELP: $1,000&ndash;$10,000 at 1% fixed APR for 10 years. KEEP: $2,500&ndash;$25,000 at below-market rates. Both are open today and will stack with utility rebates when Phase V amounts publish.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">&#10003; Income-based help is unaffected</p>
              <p className="text-sm text-green-900">Weatherization Assistance (at or below 200% FPL), LIHEAP crisis grants, and Philadelphia&apos;s Built to Last (100% coverage for low-income homeowners) never ran on Act 129 money and are open now.</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">&#10007; Federal tax credits expired</p>
              <p className="text-sm text-red-900">Section 25C ($2,000/year for heat pumps) and Section 25D (30% for geothermal) both ended December 31, 2025. Equipment installed in 2026 does not qualify even if purchased in 2025.</p>
            </div>
            <div className="md:col-span-2 bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="font-semibold text-amber-800 mb-1">&#9888; Penn Energy Savers has not launched yet</p>
              <p className="text-sm text-amber-900">Pennsylvania was allocated $258.9 million in HEAR/HOMES funding, and administrators are hired (EGIS BLN for HEAR, Resource Innovations for HOMES). On June 1, 2026, DOE issued new program guidance; DEP is revising the program to comply before launching. No confirmed launch date. Do not sign contracts contingent on Penn Energy Savers funding until the program officially opens.</p>
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
            Pennsylvania was allocated <strong>$258.9 million</strong> ($129.2M for HEAR, $130M for HOMES). Program administrators have been hired &mdash; EGIS BLN for HEAR (December 2025) and Resource Innovations for HOMES (August 2025). As of July 2026 <strong>the program has not launched</strong>. On June 1, 2026, DOE released new program guidance; DEP&apos;s Energy Programs Office is working to bring the program design into compliance before opening it to consumers. DEP estimates the program will serve 12,000&ndash;16,000 residents.
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
                  <td className="p-3">81&ndash;150% AMI</td>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Utility rebates &mdash; closed between phases</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-amber-800 mb-1">&#9888; The tables below are Phase IV amounts. They are not currently claimable.</p>
            <p className="text-sm text-amber-900">Act 129 Phase IV rebate programs closed to new purchases on <strong>May 31, 2026</strong>. Phase V runs June 1, 2026 through May 2031, and utilities filed their Phase V plans with the PUC on December 1, 2025 &mdash; but as of July 2026 <strong>no Pennsylvania utility has published Phase V heat pump rebate amounts</strong>. We keep the Phase IV figures below as a reference point for what Phase V may resemble. Verify with your utility before counting on any rebate.</p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            All Pennsylvania utility rebates operate under Act 129, and the amount you receive depends entirely on your electric utility. Here is where each stands.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">PECO (Philadelphia area &mdash; ~1.6M customers)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Under Phase IV, PECO&apos;s base rebates were modest but <strong>stackable EAP bonuses</strong> made the Philadelphia area the most incentivized territory in Pennsylvania. Phase IV offerings ran June 2021 through May 2026; Phase V amounts are not yet published.
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
            Under Phase IV, PPL offered the best base rebates of any PA utility for ducted systems and the strongest ductless rebates by capacity. PPL filed its Phase V plan (Docket M-2025-3057329) on December 1, 2025; rebate amounts are not yet published.
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
          <div className="bg-red-50 border border-red-200 rounded-lg p-5 mb-4">
            <p className="font-semibold text-red-800 mb-1">&#10007; No heat pump rebate available right now</p>
            <p className="text-sm text-red-900">Duquesne Light&apos;s Watt Choices residential rebate program closed to new purchases on May 31, 2026, with final applications for prior installations due June 6, 2026. Its rebate hub now states the program is <strong>&quot;currently being refreshed&quot;</strong> with no published restart date. The Phase IV amounts below are shown for reference only. Income-eligible customers should look at Duquesne&apos;s income-qualified energy assessment instead.</p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Under Phase IV, Duquesne Light was the only PA utility with a <strong>dedicated cold-climate ASHP rebate category</strong>. It filed its Phase V plan (Docket M-2025-3057325) on December 1, 2025.
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
          <p className="text-gray-700 leading-relaxed mb-4">
            FirstEnergy&apos;s Phase IV rebate programs ran through May 2026. Its Pennsylvania rebate portal is currently unreachable, and Phase V amounts are unpublished. Penn Power discontinued income-eligible rebates in its service area after May 9, 2025.
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
          <p className="text-gray-700 leading-relaxed mb-4">
            UGI Electric&apos;s Phase IV equipment rebates closed with the rest of Phase IV on May 31, 2026. Phase V amounts are not yet published.
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
            <p className="text-sm text-blue-900">In New York, Massachusetts, and Connecticut, the biggest rebates scale by income level. In Pennsylvania, your zip code (utility territory) is the primary variable. Under Phase IV, a PECO customer could stack to <strong>$1,950</strong> while a FirstEnergy customer at the same income received <strong>$200&ndash;$325</strong> &mdash; a 5&ndash;8x difference based purely on geography. Whether Phase V preserves that gap is unknown until utilities publish their amounts.</p>
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
            Act 129 utility rebates, Penn Energy Savers, and loan programs draw on different funding sources and can be combined in principle. In practice, <strong>neither the utility rebates nor Penn Energy Savers is claimable today</strong> &mdash; Phase IV closed May 31, 2026, Phase V amounts are unpublished, and Penn Energy Savers has not launched. The scenarios below show what stacking looked like under Phase IV and what it could look like once both return, for a typical 3-ton ducted heat pump costing <strong>$10,000&ndash;$14,000</strong>:
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 150% AMI &mdash; PECO territory ($12,000 installed, illustrative)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>PECO + EAP under Phase IV (SEER2 &#8805;17.1): $1,300&ndash;$1,700 &mdash; closed</li>
                <li>Dual-fuel adder under Phase IV: +$250 &mdash; closed</li>
                <li>Penn Energy Savers: not eligible</li>
                <li>HOMES (when launched, 20%+ savings): $2,000</li>
              </ul>
              <p className="font-semibold text-gray-900 mt-2">Claimable today: <span className="text-red-700">$0 in rebates</span></p>
              <p className="text-sm text-gray-600">If Phase V restores Phase IV levels and HOMES launches: ~$1,950&ndash;$3,950</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">81&ndash;150% AMI &mdash; PECO territory ($12,000 installed, illustrative)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>PECO + EAP under Phase IV: $1,300&ndash;$1,950 &mdash; closed</li>
                <li>HEAR (when launched, 50% of cost): up to $6,000</li>
              </ul>
              <p className="font-semibold text-gray-900 mt-2">Claimable today: <span className="text-red-700">$0 in rebates</span> (HEELP/KEEP financing available)</p>
              <p className="text-sm text-gray-600">If Phase V restores Phase IV levels and HEAR launches: ~$4,500&ndash;$6,000</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">Below 80% AMI &mdash; PECO territory ($12,000 installed, illustrative)</p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>PECO + EAP under Phase IV: $1,300&ndash;$1,950 &mdash; closed</li>
                <li>HEAR (when launched, 100% of cost): up to $8,000</li>
                <li>PEA Built to Last (Philadelphia): potential full coverage</li>
              </ul>
              <p className="font-semibold text-gray-900 mt-2">Claimable today: <span className="text-red-700">$0 in rebates</span> &mdash; but Built to Last (Philadelphia) and Weatherization Assistance may cover work now</p>
              <p className="text-sm text-gray-600">If Phase V restores Phase IV levels and HEAR launches: ~$9,300&ndash;$9,950</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-5 mb-6">
            <p className="font-semibold text-gray-900 mb-1">What you&apos;ll actually pay</p>
            <p className="text-sm text-gray-700">With Phase IV closed and Penn Energy Savers not yet launched, most Pennsylvania homeowners currently pay the <strong>full $10,000&ndash;$14,000</strong> for a ducted heat pump, offset only by financing (HEELP at 1% APR, KEEP) and, for income-qualified households, Weatherization Assistance or Philadelphia&apos;s Built to Last. If you can wait, waiting is rational: Phase V amounts and Penn Energy Savers are both expected, and neither program can reimburse equipment purchased before it opens.</p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-blue-800 mb-1">Timing: why waiting may pay</p>
            <p className="text-sm text-blue-900">Neither Penn Energy Savers nor Act 129 Phase V can reimburse equipment bought before the program opens &mdash; Penn Energy Savers explicitly cannot fund work completed before application approval. Phase V runs through May 2031, so utility rebates will return; the open question is at what level. If your system is failing you may not have the option to wait, but if you are planning ahead, watch for Phase V amounts and a Penn Energy Savers launch date before committing.</p>
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
            <strong>Hybrid/dual-fuel systems</strong> (heat pump + gas furnace backup) are common in PA and make particular sense in Pittsburgh and Scranton where design temps hit 5&#176;F. PECO&apos;s Phase IV EAP bonus included a $250 dual-fuel adder rewarding this approach; whether Phase V keeps it is unknown.
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
            <p className="text-sm text-green-900">Heating oil or propane users in rural PA and the northern tier &mdash; fuel cost savings alone can justify the switch, with no rebate required. Income-qualified households below 80% AMI, who will benefit most when Penn Energy Savers launches and who may qualify for Weatherization Assistance or Built to Last today. Homeowners with aging electric resistance heat &mdash; heat pumps cut electricity use by 30&ndash;50%. Homeowners who can wait: Phase V rebates and Penn Energy Savers are both expected, and neither reimburses equipment bought beforehand.</p>
          </div>
        </div>
      </section>

      {/* 11. HOW TO APPLY */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to apply for Pennsylvania incentives</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            No Pennsylvania utility is paying heat pump rebates right now. These steps describe the path you will follow once Phase V amounts publish &mdash; and the financing and assistance you can apply for today.
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <p className="font-semibold text-gray-900">Identify your electric utility</p>
                <p className="text-sm text-gray-700">Check your electric bill &mdash; PECO, PPL, Duquesne Light, Met-Ed, Penelec, Penn Power, West Penn Power, or UGI Electric. Your utility will determine your Phase V rebate amount once it is published, and its website is where that announcement will appear.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <p className="font-semibold text-gray-900">Check rebate eligibility and get quotes</p>
                <p className="text-sm text-gray-700">Ask your utility whether Phase V rebate amounts have been published before you sign anything. Under Phase IV all PA utilities required ENERGY STAR certification and minimum SEER2/HSPF2 thresholds, with higher-efficiency equipment earning larger rebates; PECO&apos;s EAP bonuses required a participating EAP contractor.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <p className="font-semibold text-gray-900">Know the application deadline before you install</p>
                <p className="text-sm text-gray-700">Under Phase IV, deadlines ran 90&ndash;180 days after installation depending on the utility. Phase IV closed to new purchases May 31, 2026. Whether Phase V rebates will cover installations completed before its amounts are announced is a question only your utility can answer &mdash; ask before you install.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
              <div>
                <p className="font-semibold text-gray-900">Apply for financing if needed</p>
                <p className="text-sm text-gray-700">HEELP (1% APR) and KEEP (below-market) loans are available today and are the main incentive most PA homeowners can actually use right now. Apply separately &mdash; loan programs and utility rebates use different funding sources.</p>
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
              <p className="text-sm text-gray-600 mt-1">The biggest variable for PA heat pump economics. Funding is allocated and administrators are hired, but DOE issued new program guidance on June 1, 2026 and DEP is revising the program to comply. Monitor pennenergysavers.com; DEP takes resident questions at RA-EPHomeEngRebates@pa.gov.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Phase V rebate amounts (the near-term one to watch)</p>
              <p className="text-sm text-gray-600 mt-1">Phase IV rebates closed to new purchases May 31, 2026. Utilities filed Phase V plans with the PUC on December 1, 2025 (Duquesne M-2025-3057325, PPL M-2025-3057329), and Phase V runs through May 2031 &mdash; but no utility has published heat pump rebate amounts. Duquesne Light says its program is being refreshed. This is the single fact most likely to change on this page.</p>
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
              <strong>Disclaimer:</strong> This page covers the main statewide, utility, and IRA heat pump incentives available to Pennsylvania homeowners in 2026. It does not calculate savings, guarantee eligibility, or represent any incentive program. Pennsylvania&apos;s incentives vary entirely by utility territory &mdash; amounts shown are based on each utility&apos;s published Act 129 Phase IV programs (Phase IV closed to new purchases May 31, 2026; Phase V amounts had not been published as of July 2026). Penn Energy Savers has not launched and expected amounts may change when finalized. We verify status regularly but programs can change without notice. Always confirm current amounts and eligibility with your utility, the PA DEP, and your contractor before making decisions.
            </p>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            See how this state compares &rarr;{" "}
            <Link
              href="/heat-pumps/rebates-by-state"
              className="text-brand-600 hover:underline"
            >
              Heat Pump Rebates by State (2026)
            </Link>
          </p>
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
