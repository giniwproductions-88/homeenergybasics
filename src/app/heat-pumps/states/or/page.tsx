import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Oregon Heat Pump Rebates 2026: $800\u2013$8,000 + Energy Trust & ODOE HP3 | Home Energy Basics",
  description:
    "Energy Trust offers $800\u2013$1,000. HP3 adds $2,000. HEAR up to $8,000 coming Spring 2026. Federal credits ended. Here\u2019s every Oregon heat pump incentive in 2026.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/or",
  },
  openGraph: {
    title: "Oregon Heat Pump Rebates 2026",
    description:
      "Energy Trust rebates up to $1,000 plus HP3 and upcoming HEAR up to $8,000 \u2014 the complete guide to Oregon heat pump incentives after federal credits expired.",
    url: "https://homeenergybasics.com/heat-pumps/states/or",
    type: "article",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What heat pump rebates are available in Oregon in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oregon heat pump rebates in 2026 come primarily from Energy Trust of Oregon ($800\u20131,000 for most homeowners, up to $3,000 income-qualified) and the ODOE Heat Pump Purchase Program (HP3, up to $2,000 \u2014 owner-occupied funding exhausted, rental and new construction still available). The Community Heat Pump Deployment Program offers up to $7,000 in select counties. Federal tax credits (25C/25D) expired December 31, 2025. HOMES and HEAR rebates (up to $8,000) are expected to launch Spring 2026 but are not yet available.",
      },
    },
    {
      "@type": "Question",
      name: "Can I stack Energy Trust rebates with HEAR and HP3 in Oregon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Energy Trust rebates can stack with HP3 (e.g., $1,000 + $2,000 = $3,000). Energy Trust is ratepayer-funded (not federal), so stacking with HOMES and HEAR is anticipated when those programs launch. However, HP3 cannot stack with HOMES or HEAR \u2014 you must choose one path. Total incentives from all sources cannot exceed 100% of project cost.",
      },
    },
    {
      "@type": "Question",
      name: "What is Energy Trust of Oregon and do I qualify?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Energy Trust of Oregon is a nonprofit funded by utility ratepayers. You qualify if you are a customer of Portland General Electric, Pacific Power, NW Natural, Cascade Natural Gas, or Avista. Most Oregon residents qualify. Energy Trust rebates are the primary heat pump incentive for most Oregonians and operate independently of federal policy changes.",
      },
    },
    {
      "@type": "Question",
      name: "When will Oregon\u2019s HOMES and HEAR rebates launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ODOE expects HOMES and HEAR to launch in Spring 2026, but no specific date has been announced and all timelines are subject to U.S. DOE approval. Energy Trust will administer rebates in PGE and Pacific Power service areas. Earth Advantage handles consumer-owned utility and Idaho Power territories. Rebates are not retroactive \u2014 installations must occur after program launch.",
      },
    },
    {
      "@type": "Question",
      name: "Is the HP3 program still accepting applications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Owner-occupied Round 1 and Round 2 funding is fully reserved as of early 2026. Rental property and new construction funding remain available. Each HP3 incentive is up to $2,000 per residence. HP3 is funded by a $24 million EPA Climate Pollution Reduction Grant. Check oregon.gov/energy for current status.",
      },
    },
    {
      "@type": "Question",
      name: "Do cold-climate heat pumps work well in Oregon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Western Oregon (Climate Zone 4C) has mild winters with design temps around 17\u00b0F in Portland and Eugene. Standard heat pumps perform well. Eastern Oregon (Climate Zone 5B) is colder \u2014 Bend reaches -2\u00b0F \u2014 and cold-climate-rated equipment is recommended. Energy Trust requires HSPF2 of 8.10 for ductless and 7.50 for ducted systems.",
      },
    },
  ],
};

export default function OregonPage() {
  const orIncentive = incentives.OR;
  const formattedDate = formatDate(orIncentive.lastVerified);

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
            {" "}/ Oregon
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Oregon Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Federal tax credits are gone, but Oregon has one of the strongest layered incentive structures in the country. Energy Trust of Oregon offers <strong>$800&#8211;$1,000</strong> for most homeowners (up to <strong>$3,000</strong> income-qualified), the ODOE Heat Pump Purchase Program adds up to <strong>$2,000</strong>, and upcoming HOMES/HEAR rebates could bring totals to <strong>$8,000+</strong> for income-qualifying households. This guide covers all major Oregon heat pump incentives available in 2026, including Energy Trust, HP3, CHPDP, HOMES, HEAR, and Portland Clean Energy Fund programs. Here&apos;s what&apos;s actually available.
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
          <StatusCard incentive={orIncentive} />
        </div>
      </section>

      {/* 3. SHORT VERSION */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The short version</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">&#10003; Energy Trust rebates: $800&#8211;$3,000</p>
              <p className="text-sm text-green-900">$800 for ductless, $1,000 for ducted or extended capacity heat pumps. Income-qualified households receive $1,800&#8211;$3,000 through Savings Within Reach. Active for PGE, Pacific Power, NW Natural, Cascade Natural Gas, and Avista customers.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">&#10003; ODOE HP3: up to $2,000</p>
              <p className="text-sm text-green-900">Owner-occupied funding is fully reserved. Rental property and new construction funding remain available. HP3 stacks with Energy Trust but cannot stack with HOMES or HEAR.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">&#10003; Potential savings: $800 to $9,000+</p>
              <p className="text-sm text-green-900">$800&#8211;$1,000 (above 150% AMI, Energy Trust only) to $9,000+ (below 80% AMI, after HEAR launches). Full electrification packages can reach ~$14,000 total incentives for income-qualified households.</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">&#10007; Federal tax credits expired</p>
              <p className="text-sm text-red-900">Section 25C ($2,000/year for heat pumps) and Section 25D (30% for geothermal) both ended December 31, 2025. No federal tax credit is available for heat pumps installed in 2026.</p>
            </div>
            <div className="md:col-span-2 bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="font-semibold text-amber-800 mb-1">&#9888; HOMES and HEAR have not launched yet</p>
              <p className="text-sm text-amber-900">Oregon was awarded over $113 million in HOMES/HEAR funding, but neither program is accepting applications as of March 2026. ODOE expects a Spring 2026 launch pending DOE approval. Rebates are not retroactive &#8212; installations must occur after launch. Do not rely on contractor claims about HEAR amounts until the program is live.</p>
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
              <strong>Section 25C</strong> (Energy Efficient Home Improvement Credit) and <strong>Section 25D</strong> (Residential Clean Energy Credit) both terminated for any property placed in service after December 31, 2025. The One Big Beautiful Bill Act (OBBBA), signed July 4, 2025, accelerated the sunset of both credits. A heat pump purchased in 2025 but installed in January 2026 <strong>does not qualify</strong> &#8212; the &quot;placed in service&quot; date is the controlling event. For more details, see our{" "}
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                federal heat pump tax credit explainer
              </Link>.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Section 25C previously provided <strong>30% of project costs up to $2,000 per year</strong> for heat pumps and heat pump water heaters. Section 25D provided <strong>30% with no dollar cap</strong> for geothermal heat pump systems.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Homeowners who completed qualifying installations on or before December 31, 2025 can still claim the credit on their 2025 tax return using IRS Form 5695. Unused Section 25D credits from 2025 installations may carry forward. Unlike Energy Trust rebates, which continue unchanged, no replacement federal tax credit exists.
          </p>
        </div>
      </section>

      {/* 5. ENERGY TRUST / PRIMARY */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Energy Trust of Oregon &#8212; primary rebates</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Energy Trust is the primary incentive source for most Oregon homeowners. It&apos;s funded by utility ratepayers (not the state budget or federal programs), so it operates independently of federal policy changes. You qualify if your electric or gas utility is Portland General Electric, Pacific Power, NW Natural, Cascade Natural Gas, or Avista.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Standard rebates (January 2026)</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">System type</th>
                  <th className="text-left p-3 font-semibold">Owner-occupied</th>
                  <th className="text-left p-3 font-semibold">Rental / income-qualified</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Ductless heat pump (mini-split)</td>
                  <td className="p-3 font-semibold">$800</td>
                  <td className="p-3 font-semibold">$1,800</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ducted heat pump (replacing electric furnace)</td>
                  <td className="p-3 font-semibold">$1,000</td>
                  <td className="p-3 font-semibold">$3,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Extended capacity heat pump (CEE Tier 1 Path A)</td>
                  <td className="p-3 font-semibold">$1,000</td>
                  <td className="p-3 font-semibold">$2,000</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Manufactured home (special promotion through Dec 2026)</td>
                  <td className="p-3 font-semibold">Up to $4,000</td>
                  <td className="p-3 font-semibold">Up to $4,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Minimum requirements: HSPF2 of <strong>8.10</strong> for ductless, <strong>7.50</strong> for ducted. Must use a Trade Ally contractor. Ground-source (geothermal) heat pumps are not covered by Energy Trust &#8212; see HP3 or the upcoming HEAR program for potential geothermal coverage.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="font-semibold text-blue-800 mb-1">Energy Trust is independent of federal policy</p>
            <p className="text-sm text-blue-900">Because Energy Trust is funded by ratepayers rather than federal appropriations, its rebates survived the federal credit expiration and the IRA funding debates completely intact. Energy Trust existed before the IRA and will continue regardless of federal policy shifts. This makes it the most reliable incentive layer in Oregon.</p>
          </div>
        </div>
      </section>

      {/* 6. ODOE PROGRAMS / SECONDARY */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">ODOE state programs &#8212; HP3, CHPDP, and rental</h2>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Heat Pump Purchase Program (HP3) &#8212; up to $2,000</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            HP3 provides up to <strong>$2,000 per residence</strong> for heat pump installations, funded by a <strong>$24 million</strong> EPA Climate Pollution Reduction Grant. It covers both air-source and ground-source systems. ODOE released $12 million in additional Round 2 funding in November 2025, but owner-occupied funding was quickly exhausted.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-amber-800 mb-1">&#9888; Common mistake: assuming HP3 owner-occupied funding is still available</p>
            <p className="text-sm text-amber-900">Round 1 and Round 2 funding for owner-occupied homes is fully reserved. Rental property funding ($6.5M remaining) and new construction funding ($6.8M remaining) are still available as of February 2026. HP3 can stack with Energy Trust but <strong>cannot</strong> stack with HOMES or HEAR &#8212; you must choose one path.</p>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Community Heat Pump Deployment Program (CHPDP) &#8212; up to $7,000</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Provides up to <strong>$5,000&#8211;$7,000</strong> for heat pump systems plus up to <strong>$4,000</strong> for electrical and weatherization upgrades, distributed through regional administrators in select counties. Currently limited to coastal counties, Baker, Union, Wallowa counties, and the Burns Paiute Tribe. Availability varies by location.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Rental Home Heat Pump Program</h3>
          <p className="text-gray-700 leading-relaxed">
            Covers 60&#8211;80% of costs for income-qualified tenant households. General funding is fully reserved &#8212; only tribal member applications remain open. Oregon has no state tax credit for heat pumps &#8212; the Residential Energy Tax Credit (RETC) expired in 2017 with no successor.
          </p>
        </div>
      </section>

      {/* 7. HOMES / HEAR */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">HOMES and HEAR &#8212; expected Spring 2026</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Oregon was awarded over <strong>$113 million</strong> (~$57M per program) in IRA-funded HOMES and HEAR rebates. As of March 2026, <strong>neither program has launched for consumers</strong>. ODOE expects a Spring 2026 launch pending U.S. DOE approval. Energy Trust will administer in PGE and Pacific Power service areas; Earth Advantage handles consumer-owned utility and Idaho Power territories.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">HEAR rebate amounts (when live)</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Income tier</th>
                  <th className="text-left p-3 font-semibold">Heat pump rebate</th>
                  <th className="text-left p-3 font-semibold">Coverage</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Below 80% AMI</td>
                  <td className="p-3 font-semibold">Up to $8,000</td>
                  <td className="p-3">100% of costs (up to cap)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">80&#8211;150% AMI</td>
                  <td className="p-3 font-semibold">Up to $8,000</td>
                  <td className="p-3">50% of costs (up to cap)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-gray-500">Above 150% AMI</td>
                  <td className="p-3 text-gray-500">&#8212;</td>
                  <td className="p-3 text-gray-500">Not eligible</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Additional HEAR caps include <strong>$1,750</strong> for heat pump water heaters, <strong>$4,000</strong> for electrical panel upgrades, <strong>$2,500</strong> for electric wiring, and <strong>$1,600</strong> for insulation and air sealing. The per-household cap is <strong>$14,000</strong>.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">HOMES rebate amounts (when live)</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Energy savings</th>
                  <th className="text-left p-3 font-semibold">Standard rebate</th>
                  <th className="text-left p-3 font-semibold">LMI rebate (&#8804;80% AMI)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">20&#8211;35% reduction</td>
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
            HOMES and HEAR <strong>cannot be combined for the same single upgrade</strong> but can apply to different measures within the same home &#8212; for example, HEAR for a heat pump and HOMES for insulation and air sealing. HOMES is available at all income levels.
          </p>
        </div>
      </section>

      {/* 8. LOCAL PROGRAMS */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Portland Clean Energy Fund (PCEF)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Portland residents may access additional support through PCEF-funded programs. PCEF explicitly funds gaps not covered by other incentive sources, making it a complement to Energy Trust and ODOE programs. The city expanded its <strong>Cooling Portland Program</strong> in December 2024 with an added <strong>$10.3 million</strong>, and the program had installed over 13,000 portable heat pump and cooling units at that point &#8212; with the expansion intended to help 10,000 additional households through 2026.
          </p>
          <p className="text-gray-700 leading-relaxed">
            PCEF is city-funded (not federal), so it operates independently of IRA funding status. Portland residents should check PCEF program availability in addition to Energy Trust and ODOE programs.
          </p>
        </div>
      </section>

      {/* 9. STACKING */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How programs stack in Oregon</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Oregon has one of the more complex stacking environments because multiple independent funding sources overlap. Energy Trust (ratepayer) stacks with HP3 (EPA grant) and is expected to stack with HEAR (IRA). HP3 cannot stack with HOMES or HEAR. Total incentives from all sources cannot exceed 100% of project cost. For a typical 3-ton ducted heat pump installation costing <strong>$10,000&#8211;$14,000</strong>:
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 150% AMI &#8212; ducted heat pump ($12,000 installed)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Energy Trust: $1,000</li>
                <li>HP3 (rental/new construction only): up to $2,000</li>
                <li>HEAR: not eligible</li>
                <li>HOMES (when launched, 20%+ savings): $2,000</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$1,000&#8211;$3,000</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">80&#8211;150% AMI &#8212; ducted heat pump ($12,000 installed)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Energy Trust: $1,000</li>
                <li>HEAR (when launched, 50% of cost): up to $6,000</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$7,000</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">Below 80% AMI &#8212; ducted heat pump ($12,000 installed)</p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>Energy Trust (Savings Within Reach): $3,000</li>
                <li>HEAR (when launched, 100% of cost): up to $8,000</li>
                <li>PCEF (Portland only): gap funding</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$9,000&#8211;$11,000</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-5 mb-6">
            <p className="font-semibold text-gray-900 mb-1">What you&apos;ll actually pay</p>
            <p className="text-sm text-gray-700">Until HEAR launches, most Oregon homeowners pay <strong>$9,000&#8211;$13,200 out of pocket</strong> after Energy Trust rebates for a typical ducted heat pump system. Once HEAR is available, income-qualified households below 80% AMI could see out-of-pocket costs drop to <strong>$1,000&#8211;$3,000</strong>. Above 150% AMI homeowners will see the smallest benefit &#8212; primarily Energy Trust rebates plus potential HOMES rebates when launched.</p>
          </div>

          <p className="text-xs text-gray-400">
            Oregon has no state tax credit for heat pumps (RETC expired 2017). The stacking scenarios above do not include potential manufacturer rebates, which vary by brand and change frequently.
          </p>
        </div>
      </section>

      {/* 10. WEATHERIZATION */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Oregon Weatherization Assistance Program</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Oregon&apos;s Weatherization Assistance Program (WAP), administered by Oregon Housing and Community Services through 17 Community Action Agencies statewide, provides <strong>free weatherization services</strong> to households at or below 200% of the federal poverty level. Services are determined by an energy audit and can include heat pump replacement if identified as cost-effective.
          </p>
          <p className="text-gray-700 leading-relaxed">
            A waitlist is typical due to demand. Priority is given to elderly, disabled, and families with young children. Contact your local Community Action Agency or call 211 to apply. Energy Trust also offers no-cost duct testing, sealing, and repair for manufactured homes through its Manufactured Homes Free Services program.
          </p>
        </div>
      </section>

      {/* 11. CLIMATE */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Oregon climate and heat pump performance</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Oregon spans <strong>IECC Climate Zones 4C</strong> (marine, western Oregon) and <strong>5B</strong> (dry, eastern Oregon). Western Oregon has mild winters well-suited to standard air-source heat pumps. Eastern Oregon is significantly colder, and cold-climate-rated equipment is recommended for reliable performance.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">City</th>
                  <th className="text-left p-3 font-semibold">ASHRAE 99.6% design temp</th>
                  <th className="text-left p-3 font-semibold">Climate zone</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Portland</td>
                  <td className="p-3 font-semibold">17.0&#176;F</td>
                  <td className="p-3">4C</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Eugene</td>
                  <td className="p-3 font-semibold">17.4&#176;F</td>
                  <td className="p-3">4C</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Medford</td>
                  <td className="p-3 font-semibold">19.0&#176;F</td>
                  <td className="p-3">4C</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Bend</td>
                  <td className="p-3 font-semibold">-2.0&#176;F</td>
                  <td className="p-3">5B</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Oregon was the site of the devastating June 2021 heat dome, which killed approximately 100 people and directly motivated the legislature to pass SB 1536, creating the ODOE heat pump programs. Heat pumps provide both heating and cooling, making them critical for Oregon&apos;s increasingly extreme temperature swings.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Oregon homeowners considering a heat pump paired with battery storage can review our{" "}
            <Link href="/battery" className="text-brand-600 hover:underline">guide to home batteries</Link>
            {" "}for current economics and incentive details.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <p className="font-semibold text-green-800 mb-1">&#10003; Best candidates for a heat pump in Oregon</p>
            <p className="text-sm text-green-900">Homeowners replacing electric furnaces (highest Energy Trust rebate tier), PGE and Pacific Power customers eligible for full Energy Trust programs, income-qualified households below 150% AMI (once HEAR launches), manufactured home residents (Energy Trust promotional pricing through December 2026), and Portland residents who can layer PCEF gap funding. Western Oregon&apos;s mild climate means standard heat pumps perform efficiently without cold-climate ratings in most of the state.</p>
          </div>
        </div>
      </section>

      {/* 12. HOW TO APPLY */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to apply for Oregon incentives</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Oregon has multiple programs with different application paths. Start with Energy Trust, which is available to most homeowners immediately.
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-gray-900">Confirm your utility eligibility</p>
                <p className="text-sm text-gray-700">Energy Trust serves PGE, Pacific Power, NW Natural, Cascade Natural Gas, and Avista customers. Idaho Power customers should contact Earth Advantage for HOMES/HEAR when available. Check your electric bill for your provider.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900">Get quotes from Energy Trust Trade Ally contractors</p>
                <p className="text-sm text-gray-700">Energy Trust requires work by a registered Trade Ally. Request at least three quotes. Confirm equipment meets minimum HSPF2 requirements (8.10 ductless, 7.50 ducted) and ENERGY STAR certification.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-900">Apply for Energy Trust rebate</p>
                <p className="text-sm text-gray-700">Apply online at form.energytrust.org within 60 days of installation. Many Trade Ally contractors process instant incentives at point of sale. Phone: 1-866-311-1822.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <p className="font-semibold text-gray-900">Check ODOE programs and monitor HEAR launch</p>
                <p className="text-sm text-gray-700">Use Oregon HIPPO at incentives.oregon.gov to navigate all available state programs. Monitor ODOE&apos;s Home Energy Rebates page for HOMES/HEAR launch announcements. If you can delay installation, waiting for HEAR could add $4,000&#8211;$8,000 for income-qualified households.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. WHAT TO WATCH */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to watch for in Oregon</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">IRA funding runway</p>
              <p className="text-sm text-gray-600 mt-1">IRA funding for HEAR and HOMES remains authorized through September 30, 2031 or until depleted. The OBBBA did not terminate these programs. Oregon&apos;s $113 million allocation is secure for now, but the political environment around IRA spending remains volatile.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">HOMES/HEAR phased rollout</p>
              <p className="text-sm text-gray-600 mt-1">Phase 1 (Spring 2026): individual home applications. Phase 2 (Summer 2026): multi-unit and shared system upgrades. Phase 3 (Fall 2026): HEAR retail point-of-sale coupons at participating stores. All timelines are subject to change pending DOE approval.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">HP3 remaining funds</p>
              <p className="text-sm text-gray-600 mt-1">Owner-occupied funding is exhausted, but rental property ($6.5M) and new construction ($6.8M) funding remain available. Once depleted, HP3 will not be replenished &#8212; it is a one-time EPA grant. Rental property owners and developers should act while funding lasts.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Energy Trust 2026 program changes</p>
              <p className="text-sm text-gray-600 mt-1">Energy Trust launched 2026 incentives early and may adjust amounts as HOMES/HEAR integration becomes clearer. The manufactured home promotional pricing runs through December 2026. Watch for updates to incentive amounts and Savings Within Reach eligibility.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 14. FAQ */}
      <section className="bg-gray-50 py-12">
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
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-3">See also</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/heat-pumps/states/wa" className="text-brand-600 hover:underline">
                Washington Heat Pump Rebates 2026
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/ca" className="text-brand-600 hover:underline">
                California Heat Pump Rebates 2026
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/nv" className="text-brand-600 hover:underline">
                Nevada Heat Pump Rebates 2026
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/id" className="text-brand-600 hover:underline">
                Idaho Heat Pump Rebates 2026
              </Link>
            </li>
            <li>
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                Federal Heat Pump Tax Credits Ended &#8212; What It Means
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
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="space-y-2 text-sm">
            {orIncentive.sources.map((source: { label: string; url: string }, index: number) => (
              <li key={index}>
                <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">
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
              <strong>Disclaimer:</strong> This page covers the main statewide, utility, and IRA heat pump incentives available to Oregon homeowners in 2026. It does not calculate savings, guarantee eligibility, or represent any incentive program. Oregon&apos;s HOMES and HEAR programs have not launched as of March 2026, and expected rebate amounts may change when programs are finalized. Energy Trust rebate amounts are subject to change. We verify status regularly but programs can change without notice. Always confirm current amounts and eligibility with Energy Trust of Oregon, ODOE, and your contractor before making decisions.
            </p>
          </div>
          <div className="mt-6 text-center">
            <Link href="/heat-pumps" className="text-brand-600 hover:underline text-sm">
          <p className="text-sm text-gray-600 mt-4">
            See how this state compares ?{" "}
            <Link
              href="/heat-pumps/rebates-by-state"
              className="text-brand-600 hover:underline"
            >
              Heat Pump Rebates by State (2026)
            </Link>
          </p>
              &#8592; Back to Heat Pumps overview
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
