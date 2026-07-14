import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Pennsylvania Heat Pump Rebates 2026: Phase V Utility Amounts Rolling Out | Home Energy Basics",
  description:
    "Act 129 Phase V is live: PECO, PPL, and UGI have published new rebate amounts; Duquesne Light and FirstEnergy have not. Penn Energy Savers still not launched. What PA homeowners can claim now.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/pa",
  },
  openGraph: {
    title: "Pennsylvania Heat Pump Rebates 2026",
    description:
      "Act 129 Phase V rebates are live at PECO, PPL, and UGI, pending at Duquesne Light and FirstEnergy, and Penn Energy Savers has not launched \u2014 what Pennsylvania homeowners can claim in 2026.",
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
        text: "It depends on your utility. Act 129 Phase V began June 1, 2026, and three utilities have published new, claimable rebate schedules: PECO (up to $300 for an air-source heat pump, up to $300 for a ductless mini-split), PPL ($225\u2013$325 for heat pumps, or $350\u2013$475 for households at or below 250% of the federal poverty level), and UGI Electric ($500 air-source heat pump; mini-splits $175\u2013$300 per ton, up to $1,500). Duquesne Light\u2019s program is \u201ccurrently being refreshed\u201d with no published amounts, and FirstEnergy\u2019s portal still shows only Phase IV closeout information. The Penn Energy Savers (HEAR/HOMES) program has still not launched \u2014 DOE issued new program guidance on June 1, 2026, and DEP is revising the program to comply. Federal 25C/25D credits ended December 31, 2025. Also available: the PHFA HEELP loan (1% APR), the KEEP loan, PA Weatherization Assistance, LIHEAP crisis grants, and \u2014 in Philadelphia \u2014 the Energy Authority\u2019s Built to Last program.",
      },
    },
    {
      "@type": "Question",
      name: "Can I stack utility rebates with Penn Energy Savers in Pennsylvania?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes in principle \u2014 Act 129 utility rebates and Penn Energy Savers draw on different funding sources. Today only the utility side is claimable: PECO, PPL, and UGI have published Phase V rebates, while Penn Energy Savers has not launched. HEELP and KEEP loans are available now and stack with utility rebates. Total incentives generally cannot exceed total project cost.",
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
        text: "Act 129 Phase V runs June 1, 2026 through May 31, 2031, so utility rebate funding is in place for five years \u2014 but each utility publishes its own schedule and can modify amounts or exhaust annual funding. As of July 2026, PECO, PPL, and UGI have published Phase V amounts; Duquesne Light\u2019s program is being refreshed and FirstEnergy has not posted a new schedule. PECO requires applications within 90 days of purchase or installation for equipment bought on or after June 1, 2026, and PPL requires postmark within 180 days of installation. Confirm the deadline with your utility before you install.",
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
            Pennsylvania&apos;s utility rebates are coming back online. Act 129 <strong>Phase V began June 1, 2026</strong>, and three of the five rebate-paying utilities &mdash; PECO, PPL, and UGI Electric &mdash; have published new heat pump rebate schedules that are claimable today. Duquesne Light&apos;s program is &quot;currently being refreshed,&quot; and FirstEnergy&apos;s portal still shows only Phase IV closeout information. Federal tax credits ended December 31, 2025, and <strong>Penn Energy Savers still has not launched</strong>. This guide covers each utility&apos;s current amounts, the Philadelphia-area EAP fall rebate (contract window August 3&ndash;November 13), the 1% HEELP loan, and what to watch for.
          </p>
          <p className="text-sm text-gray-500">
            Updated {formattedDate} &mdash; verified against official program sources
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
              <p className="font-semibold text-amber-800 mb-1">&#9888; Utility rebates: rolling out territory by territory</p>
              <p className="text-sm text-amber-900">Act 129 Phase V began June 1, 2026. PECO, PPL, and UGI Electric have published new rebate amounts and are accepting applications. Duquesne Light&apos;s program is being refreshed and FirstEnergy has not posted a Phase V schedule. Confirm your utility&apos;s current amounts before you buy.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">&#10003; Low-interest loans available now</p>
              <p className="text-sm text-green-900">HEELP: $1,000&ndash;$10,000 at 1% fixed APR for 10 years. KEEP: $2,500&ndash;$25,000 at below-market rates. Both are open today and stack with utility rebates.</p>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Utility rebates &mdash; Phase V is rolling out</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-amber-800 mb-1">&#9888; Phase V schedules are appearing utility by utility</p>
            <p className="text-sm text-amber-900">Act 129 Phase IV closed to new purchases on <strong>May 31, 2026</strong>, and Phase V (June 1, 2026 through May 31, 2031) is now in effect. As of July 10, 2026, <strong>PECO, PPL, and UGI Electric have published Phase V rebate amounts</strong> &mdash; shown below &mdash; while Duquesne Light and FirstEnergy have not. Base amounts at PPL are lower than Phase IV, with larger income-qualified tiers added. Verify with your utility before counting on any rebate.</p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            All Pennsylvania utility rebates operate under Act 129, and the amount you receive depends entirely on your electric utility. Here is where each stands.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">PECO (Philadelphia area &mdash; ~1.6M customers)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            PECO&apos;s heating and cooling rebate schedule is live: applications for equipment purchased or installed <strong>on or after June 1, 2026</strong> must be received within 90 days of purchase or installation. (Phase IV closeout: paper applications for pre&ndash;June 1 purchases are due July 20, 2026; online applications are due July 31, 2026.) The separate <strong>EAP rebate</strong> &mdash; covered below &mdash; can be combined with PECO rebates.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Rebate (as listed July 10, 2026)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">ENERGY STAR air-source heat pump (SEER2 15.2&ndash;17.0, EER2 11.0, HSPF2 7.8+)</td>
                  <td className="p-3 font-semibold">$200</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">ENERGY STAR air-source heat pump (SEER2 17.1+, EER2 11.0, HSPF2 7.8+)</td>
                  <td className="p-3 font-semibold">$300</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">ENERGY STAR ductless mini-split heat pump</td>
                  <td className="p-3 font-semibold">up to $300</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">ENERGY STAR central air conditioning</td>
                  <td className="p-3 font-semibold">up to $200</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump / central A/C maintenance</td>
                  <td className="p-3 font-semibold">up to $50</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">ECM fan motor</td>
                  <td className="p-3 font-semibold">$50</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">PPL Electric Utilities (eastern/central PA &mdash; ~1.4M customers)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            PPL published its Phase V rebate schedule on <strong>June 1, 2026</strong> (Docket M-2025-3057329). Base rebates are lower than Phase IV, but households at or below <strong>250% of the federal poverty level</strong> qualify for enhanced amounts, and households at 0&ndash;200% FPL can access no-cost upgrades through WRAP. Applications must be postmarked within 180 days of installation.
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
                <tr className="border-b bg-green-50">
                  <td className="p-3">Ducted ASHP Tier 1 (SEER2 &#8805;15.2, HSPF2 &#8805;7.8)</td>
                  <td className="p-3 font-semibold">$225 standard / $350 enhanced (&#8804;250% FPL)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ducted ASHP Tier 2 (SEER2 &#8805;16.3, HSPF2 &#8805;8.2)</td>
                  <td className="p-3 font-semibold">$325 standard / $475 enhanced</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Mini-split heat pump (SEER2 &#8805;15.2, HSPF2 &#8805;7.8)</td>
                  <td className="p-3 font-semibold">$225 standard / $350 enhanced</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater (UEF &#8805;3.3)</td>
                  <td className="p-3 font-semibold">$400 standard / $500 enhanced</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ground-source heat pump</td>
                  <td className="p-3 font-semibold">$500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Multi-measure bonus (insulation/air sealing + two major measures)</td>
                  <td className="p-3 font-semibold">$350, enhanced tier only</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Duquesne Light (Pittsburgh area &mdash; ~600K customers)</h3>
          <div className="bg-red-50 border border-red-200 rounded-lg p-5 mb-4">
            <p className="font-semibold text-red-800 mb-1">&#10007; No heat pump rebate available right now</p>
            <p className="text-sm text-red-900">Duquesne Light&apos;s residential rebate program closed to new purchases on May 31, 2026, and as of July 10, 2026 its rebate hub still states the program is <strong>&quot;currently being refreshed&quot;</strong> with no published restart date or amounts. What is live today: $50 refrigerator/freezer recycling, the whole-house energy audit, and the income-qualified energy assessment.</p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            Duquesne filed its Phase V plan (Docket M-2025-3057325) on December 1, 2025, and its residential rebate programs are now administered by Franklin Energy. When new amounts post, they will appear on Duquesne&apos;s energy rebates hub &mdash; check it before you buy.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">FirstEnergy &mdash; Met-Ed, Penelec, Penn Power, West Penn Power</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            FirstEnergy&apos;s Pennsylvania rebate portal is back online, but as of July 10, 2026 it still describes only the Phase IV program &mdash; rebates for products &quot;purchased between June 1, 2021 and May 31, 2026&quot; &mdash; and no Phase V schedule has been posted for Met-Ed, Penelec, Penn Power, or West Penn Power customers. Do not budget around a FirstEnergy rebate until a new schedule appears.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">UGI Electric (northeastern PA)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            UGI Electric (Luzerne and Wyoming counties) is advertising a live &quot;Save Smart 2026&quot; equipment rebate schedule with an open online application, promoted as up to $1,500 in rebates.
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
                <tr className="border-b bg-green-50">
                  <td className="p-3">Air-source heat pump (SEER 15.2+)</td>
                  <td className="p-3 font-semibold">$500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Mini-split heat pump, per ton (SEER2 &#8805;15.2 / &#8805;18.1 / &#8805;20)</td>
                  <td className="p-3 font-semibold">$175 / $250 / $300 per ton, up to $1,500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Central air conditioner (SEER 15.2+)</td>
                  <td className="p-3 font-semibold">$300</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">$500</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">EAP HVAC rebate (Philadelphia area) &mdash; Fall 2026 program published</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Electrical Association of Philadelphia runs a separate, seasonal instant-rebate program through participating contractors. It is a trade-association program, not an Act 129 utility rebate &mdash; PECO&apos;s involvement is limited to publicizing it &mdash; and per EAP it <strong>can be combined with PECO rebates</strong> (but not with manufacturer rebates). Fall 2026 details are now published on EAP&apos;s program page (posted as of July 8, 2026). Here are the heat pump rebates, paid as an instant discount on the participating contractor&apos;s invoice:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">System</th>
                  <th className="text-left p-3 font-semibold">Minimum efficiency</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Heat pump &mdash; Tier 1</td>
                  <td className="p-3">SEER2 15.2+ / EER2 11.0 / HSPF2 7.8</td>
                  <td className="p-3 font-semibold">$500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump &mdash; Tier 2</td>
                  <td className="p-3">SEER2 16+ / EER2 11.0 / HSPF2 7.8</td>
                  <td className="p-3 font-semibold">$1,000</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Heat pump &mdash; Tier 3</td>
                  <td className="p-3">SEER2 18+ / EER2 11.0 / HSPF2 7.8</td>
                  <td className="p-3 font-semibold">$1,400</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Mini-split heat pump</td>
                  <td className="p-3">SEER2 17 / EER2 12 / HSPF2 8.5</td>
                  <td className="p-3 font-semibold">$250 single zone, or $200 per zone multizone</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">+ Dual-fuel (hybrid) adder</td>
                  <td className="p-3">Heat pump must meet a tier above; outdoor unit, indoor coil, and furnace all installed</td>
                  <td className="p-3 font-semibold">+$250 (not a separate rebate)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            The advertised <strong>$250&ndash;$1,650</strong> range is the single-zone mini-split at the bottom and Tier 3 plus the dual-fuel adder at the top. Fall program timeline: contracts may not be signed before <strong>August 3, 2026</strong>, must be signed by <strong>November 13, 2026</strong>, systems installed by <strong>November 27, 2026</strong>, and claim forms received by EAP by <strong>December 4, 2026</strong>. Rebates flow only through participating contractors installing participating brands &mdash; EAP lists the Fall 2026 brand roster on its program page (including Trane, Ruud, American Standard, Amana/Goodman, Bosch, Lennox, York, Bryant and Carrier with tier exclusions, and for mini-splits Mitsubishi and Daikin).
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Note about gas utilities:</strong> Philadelphia Gas Works (PGW) and Columbia Gas of PA do <strong>not</strong> offer electric heat pump rebates. PGW&apos;s EnergySense program covers gas furnaces and boilers only.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="font-semibold text-blue-800 mb-1">Pennsylvania is the only large Northeast state where your utility matters more than your income</p>
            <p className="text-sm text-blue-900">In New York, Massachusetts, and Connecticut, the biggest rebates scale by income level. In Pennsylvania, your zip code (utility territory) is still the primary variable: under the published Phase V schedules, a UGI customer gets a <strong>$500</strong> heat pump rebate, a PECO customer <strong>up to $300</strong> (plus up to $1,650 more from EAP&apos;s fall program in the Philadelphia area), and a Duquesne Light customer currently <strong>$0</strong>. But income matters more than it did under Phase IV: PPL pays $350&ndash;$475 instead of $225&ndash;$325 for households at or below 250% of the federal poverty level.</p>
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
            Act 129 utility rebates, EAP&apos;s Philadelphia-area program, Penn Energy Savers, and loan programs draw on different funding sources and can generally be combined. Today the utility rebates at PECO, PPL, and UGI are claimable; EAP&apos;s fall contract window is August 3&ndash;November 13; Penn Energy Savers has not launched. The scenarios below use a typical 3-ton ducted heat pump costing <strong>$10,000&ndash;$14,000</strong>:
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 150% AMI &mdash; PECO territory ($12,000 installed, illustrative)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>PECO Phase V rebate: up to $300 &mdash; claimable now</li>
                <li>EAP Fall 2026 program (contracts Aug 3&ndash;Nov 13): $250&ndash;$1,650</li>
                <li>Penn Energy Savers: not eligible</li>
                <li>HOMES (when launched, 20%+ savings): $2,000</li>
              </ul>
              <p className="font-semibold text-gray-900 mt-2">Claimable today: <span className="text-green-700">up to $300</span></p>
              <p className="text-sm text-gray-600">With EAP&apos;s fall window and a HOMES launch: potentially ~$2,550&ndash;$3,950</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">81&ndash;150% AMI &mdash; PECO territory ($12,000 installed, illustrative)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>PECO Phase V rebate: up to $300 &mdash; claimable now</li>
                <li>EAP Fall 2026 program (contracts Aug 3&ndash;Nov 13): $250&ndash;$1,650</li>
                <li>HEAR (when launched, 50% of cost): up to $6,000</li>
              </ul>
              <p className="font-semibold text-gray-900 mt-2">Claimable today: <span className="text-green-700">up to $300</span> (plus HEELP/KEEP financing)</p>
              <p className="text-sm text-gray-600">With EAP&apos;s fall window and a HEAR launch: potentially ~$6,550&ndash;$7,950</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">Below 80% AMI &mdash; PECO territory ($12,000 installed, illustrative)</p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>PECO Phase V rebate: up to $300 &mdash; claimable now</li>
                <li>EAP Fall 2026 program (contracts Aug 3&ndash;Nov 13): $250&ndash;$1,650</li>
                <li>HEAR (when launched, 100% of cost): up to $8,000</li>
                <li>PEA Built to Last (Philadelphia): potential full coverage</li>
              </ul>
              <p className="font-semibold text-gray-900 mt-2">Claimable today: <span className="text-green-700">up to $300</span> &mdash; and Built to Last (Philadelphia) and Weatherization Assistance may cover work now</p>
              <p className="text-sm text-gray-600">With EAP&apos;s fall window and a HEAR launch: potentially ~$8,550&ndash;$9,950 (capped at project cost)</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-5 mb-6">
            <p className="font-semibold text-gray-900 mb-1">What you&apos;ll actually pay</p>
            <p className="text-sm text-gray-700">On a $10,000&ndash;$14,000 ducted heat pump, a PPL customer today gets $225&ndash;$475 back, a PECO customer up to $300, and a UGI customer $500 &mdash; helpful, but most of the cost stays out of pocket, offset by financing (HEELP at 1% APR, KEEP) and, for income-qualified households, Weatherization Assistance or Philadelphia&apos;s Built to Last. If you are income-eligible for Penn Energy Savers (up to $8,000 for a heat pump) and your current system still works, waiting for its launch remains the biggest lever &mdash; it cannot reimburse equipment purchased before it opens.</p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-blue-800 mb-1">Timing: why waiting may pay</p>
            <p className="text-sm text-blue-900">Penn Energy Savers cannot fund work completed before application approval, and EAP&apos;s fall rebate requires a contract signed inside its program window (August 3&ndash;November 13, with installation by November 27) &mdash; so sequencing matters. Utility rebates at PECO, PPL, and UGI are claimable now (mind the 90&ndash;180 day application deadlines). If you are income-qualified and can wait, Penn Energy Savers is the larger prize; if you are in PECO territory and can schedule installation for the fall window, the EAP rebate adds up to $1,650.</p>
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
            <strong>Hybrid/dual-fuel systems</strong> (heat pump + gas furnace backup) are common in PA and make particular sense in Pittsburgh and Scranton where design temps hit 5&#176;F. EAP&apos;s Fall 2026 program keeps the $250 dual-fuel adder rewarding this approach &mdash; the heat pump must meet one of the rebate tiers, and the outdoor unit, indoor coil, and furnace must all be installed.
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
            <p className="text-sm text-green-900">Heating oil or propane users in rural PA and the northern tier &mdash; fuel cost savings alone can justify the switch, with no rebate required. Income-qualified households below 80% AMI, who will benefit most when Penn Energy Savers launches and who may qualify for Weatherization Assistance or Built to Last today. Homeowners with aging electric resistance heat &mdash; heat pumps cut electricity use by 30&ndash;50%. Income-qualified homeowners who can wait: Penn Energy Savers is expected to be the largest rebate and cannot reimburse equipment bought before it launches.</p>
          </div>
        </div>
      </section>

      {/* 11. HOW TO APPLY */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to apply for Pennsylvania incentives</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            PECO, PPL, and UGI Electric are paying heat pump rebates right now; Duquesne Light and FirstEnergy are not. Here is the path:
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <p className="font-semibold text-gray-900">Identify your electric utility</p>
                <p className="text-sm text-gray-700">Check your electric bill &mdash; PECO, PPL, Duquesne Light, Met-Ed, Penelec, Penn Power, West Penn Power, or UGI Electric. Your utility determines your rebate: PECO, PPL, and UGI have published Phase V amounts; Duquesne Light and FirstEnergy have not.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <p className="font-semibold text-gray-900">Check rebate eligibility and get quotes</p>
                <p className="text-sm text-gray-700">Confirm your equipment meets your utility&apos;s published thresholds before you sign anything &mdash; the current PA schedules require ENERGY STAR certification and minimum SEER2/HSPF2 ratings, with higher-efficiency equipment earning larger rebates. In PECO territory, the separate EAP rebate requires a participating EAP contractor installing a participating brand, and a contract signed inside the program window (August 3&ndash;November 13 for Fall 2026).</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <p className="font-semibold text-gray-900">Know the application deadline before you install</p>
                <p className="text-sm text-gray-700">Deadlines are live again: PECO requires applications within 90 days of purchase or installation (for equipment bought on or after June 1, 2026), and PPL requires postmark within 180 days of installation. Duquesne Light and FirstEnergy have no open rebate to apply for &mdash; if you are in those territories, ask your utility before you install.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
              <div>
                <p className="font-semibold text-gray-900">Apply for financing if needed</p>
                <p className="text-sm text-gray-700">HEELP (1% APR) and KEEP (below-market) loans are available in every territory and stack with utility rebates. Apply separately &mdash; loan programs and utility rebates use different funding sources.</p>
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
              <p className="font-semibold text-gray-900">Duquesne Light and FirstEnergy Phase V amounts (the near-term ones to watch)</p>
              <p className="text-sm text-gray-600 mt-1">PECO, PPL, and UGI published Phase V schedules in June 2026. Duquesne Light (Docket M-2025-3057325) says its program is being refreshed, and FirstEnergy&apos;s portal still shows only Phase IV closeout text. Phase V runs through May 2031, so both will return &mdash; the question is when and at what level.</p>
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
              <strong>Disclaimer:</strong> This page covers the main statewide, utility, and IRA heat pump incentives available to Pennsylvania homeowners in 2026. It does not calculate savings, guarantee eligibility, or represent any incentive program. Pennsylvania&apos;s incentives vary entirely by utility territory &mdash; amounts shown are based on each utility&apos;s published schedules as of July 10, 2026 (Act 129 Phase V began June 1, 2026; Duquesne Light and FirstEnergy had not published Phase V amounts as of that date). Penn Energy Savers has not launched and expected amounts may change when finalized. We verify status regularly but programs can change without notice. Always confirm current amounts and eligibility with your utility, the PA DEP, and your contractor before making decisions.
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
