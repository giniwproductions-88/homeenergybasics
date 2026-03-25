import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "New Jersey Heat Pump Rebates 2026: $7,500 Whole Home + $10,000 PSE&G Decarb | Home Energy Basics",
  description:
    "NJ Whole Home offers up to $7,500. PSE&G Decarb adds $10,000+. All 4 utilities have rebates. Federal credits ended. Every NJ heat pump incentive in 2026.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/nj",
  },
  openGraph: {
    title: "New Jersey Heat Pump Rebates 2026",
    description:
      "Whole Home up to $7,500 plus utility rebates from PSE&G, JCP&L, ACE, and RECO — the complete guide to NJ heat pump incentives after federal credits expired.",
    url: "https://homeenergybasics.com/heat-pumps/states/nj",
    type: "article",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What heat pump rebates are available in New Jersey in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The NJ Whole Home program offers up to $7,500 in cash-back incentives plus 0% financing. Each electric utility (PSE&G, JCP&L, Atlantic City Electric, RECO) offers additional HVAC rebates of $300\u2013$1,000 depending on equipment efficiency. PSE&G\u2019s Building Decarbonization program offers up to $10,000\u2013$12,000 for full fossil fuel displacement. These programs stack. Federal tax credits are not available for 2026 installations.",
      },
    },
    {
      "@type": "Question",
      name: "Can I stack NJ Whole Home rebates with utility rebates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The NJ Whole Home program and utility HVAC equipment rebates are explicitly stackable. A homeowner can receive up to $7,500 from Whole Home plus $600\u2013$1,000 from their electric utility, plus gas utility rebates where available (NJNG offers up to $1,000).",
      },
    },
    {
      "@type": "Question",
      name: "What is PSE&G\u2019s Building Decarbonization program?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PSE&G offers enhanced rebates for customers who fully replace fossil fuel heating with cold-climate heat pumps. The conversion rebate is the lesser of $10,000 or 50% of project cost ($12,000 or 60% for LMI households). Additional rebates cover decommissioning (up to $2,000), re-ducting (up to $2,000), and extra heat pump units ($2,000 each). PSE&G also offers 0% on-bill repayment up to $75,000 with no credit check.",
      },
    },
    {
      "@type": "Question",
      name: "Has New Jersey launched the IRA HEAR/HOMES rebates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. As of March 2026, New Jersey has not launched consumer-facing HEAR or HOMES rebates. The state received over $185 million in IRA funding, but program design is still in progress. NJ\u2019s plan directs most funds toward low-income multifamily housing through a planned M-RISE program rather than broad single-family rebates.",
      },
    },
    {
      "@type": "Question",
      name: "Do heat pumps work in New Jersey winters?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. New Jersey\u2019s winter design temperatures are around 10\u00b0F in Newark and Trenton. Modern cold-climate heat pumps maintain effective heating output well below 0\u00b0F. Every NJ utility rebate program includes a cold-climate tier with higher incentives for qualifying equipment.",
      },
    },
    {
      "@type": "Question",
      name: "What is the NJ Comfort Partners program?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Comfort Partners provides free energy efficiency improvements \u2014 including heating system repair or replacement \u2014 to income-eligible households. Eligibility is based on household income at or below 225\u2013250% of the Federal Poverty Level, or enrollment in assistance programs like LIHEAP, SNAP, or Section 8.",
      },
    },
  ],
};

export default function NewJerseyPage() {
  const njIncentive = incentives.NJ;
  const formattedDate = formatDate(njIncentive.lastVerified);

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
            {" "}/ New Jersey
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            New Jersey Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            New Jersey has some of the strongest heat pump incentives in the country in 2026. The statewide Whole Home program offers up to <strong>$7,500</strong> in cash-back rebates, and all four electric utilities run their own programs on top. PSE&amp;G&apos;s Building Decarbonization program adds up to <strong>$10,000&ndash;$12,000</strong> for full fossil fuel displacement. Federal tax credits expired December 31, 2025. This guide covers all major New Jersey heat pump incentives available in 2026, including Whole Home, PSE&amp;G, JCP&amp;L, Atlantic City Electric, RECO, NJNG, and IRA program status. Here&apos;s what&apos;s actually available.
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
          <StatusCard incentive={njIncentive} />
        </div>
      </section>

      {/* 3. Short Version */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Short Version</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">&#10003; Whole Home: Up to $7,500 Cash Back</p>
              <p className="text-sm text-green-900">Statewide program through Ciel Power. Cash-back rebates scale with energy savings achieved (5&ndash;33% TES). Plus 0% financing up to $25,000.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">&#10003; Utility Rebates: $300&ndash;$1,000</p>
              <p className="text-sm text-green-900">All four electric utilities (PSE&amp;G, JCP&amp;L, ACE, RECO) have active HVAC rebate programs. Stack with Whole Home. LMI adders available.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">&#10003; Total Potential: $8,100&ndash;$9,500+</p>
              <p className="text-sm text-green-900">$8,100&ndash;$9,500 for typical above-150% AMI homeowners. PSE&amp;G Building Decarb customers replacing gas can reach <strong>$17,500+</strong> with Whole Home stacked.</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">&#10007; Federal Tax Credits Expired</p>
              <p className="text-sm text-red-900">Section 25C ($2,000) and Section 25D (30% geothermal) both expired December 31, 2025. No replacement legislation exists.</p>
            </div>
            <div className="md:col-span-2 bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="font-semibold text-amber-800 mb-1">&#9888; $185M IRA Funding Not Yet Launched</p>
              <p className="text-sm text-amber-900">New Jersey received over $185 million for HEAR/HOMES rebates but has not launched consumer-facing programs. NJ&apos;s plan directs most funds toward low-income multifamily housing (M-RISE) rather than broad single-family rebates. Do not sign contracts contingent on HEAR funding.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Federal Expired */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Federal Tax Credits Have Ended</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <p className="text-red-900 leading-relaxed">
              <strong>Section 25C</strong> (Energy Efficient Home Improvement Credit) and{" "}
              <strong>Section 25D</strong> (Residential Clean Energy Credit) both expired on{" "}
              <strong>December 31, 2025</strong>, under the One Big Beautiful Bill Act. Equipment must have been installed and operational by that date &mdash; a purchase contract alone does not qualify. For details, see our{" "}
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-red-700 underline hover:text-red-900">
                federal heat pump tax credit explainer
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Whole Home / Primary State Program */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">NJ Whole Home Program: Up to $7,500 Cash Back</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The NJ Whole Home Energy Efficiency Incentive Program (formerly Home Performance with ENERGY STAR) is the largest single incentive available statewide. Administered by Ciel Power, it provides cash-back rebates plus 0% interest financing for comprehensive home energy upgrades.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Rebates scale with projected Total Energy Savings (TES): <strong>$2,000</strong> base at 5% TES, plus <strong>$200</strong> per additional percentage point, up to <strong>$7,500</strong> at 33% TES. Eligible measures include air-source and ground-source heat pumps, ductless mini-splits, heat pump water heaters, insulation, and air sealing. A BPI-certified energy audit through Ciel Power is required, and all work must be performed by a BPI-certified participating contractor. No income requirements for eligibility. 0% financing up to <strong>$25,000</strong> is available.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="font-semibold text-amber-800 mb-1">&#9888; COOLAdvantage and WARMAdvantage Are Closed</p>
            <p className="text-sm text-amber-900">The former direct rebate programs through njcleanenergy.com closed in 2021. HVAC equipment rebates are now administered by each utility, not through the centralized NJ Clean Energy website.</p>
          </div>
        </div>
      </section>

      {/* 6. PSE&G + Building Decarb */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">PSE&amp;G &mdash; Standard + Building Decarbonization</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            PSE&amp;G serves approximately 2.3 million customers in northern and central New Jersey. It offers both standard HVAC instant rebates and a separate Building Decarbonization program with significantly higher incentives.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Standard HVAC Instant Rebates</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                  <th className="text-left p-3 font-semibold">Minimum Efficiency</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">ASHP &mdash; Tier 1</td>
                  <td className="p-3 font-semibold">$300</td>
                  <td className="p-3">SEER2 &#8805; 15.2</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">ASHP &mdash; Tier 2</td>
                  <td className="p-3 font-semibold">$450</td>
                  <td className="p-3">SEER2 &#8805; 17.1</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Cold-climate ASHP</td>
                  <td className="p-3 font-semibold">$600</td>
                  <td className="p-3">HSPF2 &#8805; 8.1, COP &#8805; 1.75 at 5&#176;F</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">$450</td>
                  <td className="p-3">ENERGY STAR certified</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            LMI customers receive an additional <strong>$300</strong> per measure. Rebates are delivered as instant point-of-sale discounts through participating contractors.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Building Decarbonization Program (PSE&amp;G Only)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            PSE&amp;G offers enhanced rebates for customers who fully replace fossil fuel heating with NEEP-listed cold-climate heat pumps. Requires ACCA Manual J load calculations and Manual S equipment selection.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Incentive</th>
                  <th className="text-left p-3 font-semibold">Standard</th>
                  <th className="text-left p-3 font-semibold">LMI</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Conversion rebate (largest system)</td>
                  <td className="p-3 font-semibold">Lesser of $10,000 or 50%</td>
                  <td className="p-3 font-semibold">Lesser of $12,000 or 60%</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Decommissioning rebate</td>
                  <td className="p-3 font-semibold">Up to $2,000</td>
                  <td className="p-3 font-semibold">Up to $2,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Re-ducting rebate (per Manual D)</td>
                  <td className="p-3 font-semibold">Up to $2,000</td>
                  <td className="p-3 font-semibold">Up to $2,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Additional system rebates</td>
                  <td className="p-3 font-semibold">$2,000 per additional ccASHP</td>
                  <td className="p-3 font-semibold">$2,000 per additional ccASHP</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>0% on-bill repayment</strong> &mdash; no credit check required &mdash; covers up to <strong>$25,000</strong> standard plus an additional <strong>$50,000</strong> for decarbonization projects ($75,000 total). The obligation transfers to the next homeowner if you sell.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="font-semibold text-blue-800 mb-1">PSE&amp;G Decarb + Whole Home = Strongest Stack in NJ</p>
            <p className="text-sm text-blue-900">A PSE&amp;G customer who fully replaces gas heating could receive <strong>$10,000+</strong> from Building Decarb plus up to <strong>$7,500</strong> from Whole Home &mdash; a realistic <strong>$17,500+</strong> in combined incentives for a whole-home cold-climate heat pump project. This is among the best incentive stacks in any state.</p>
          </div>
        </div>
      </section>

      {/* 7. Other Utility Programs */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Other Electric Utility Rebates</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            All four NJ electric utilities have active HVAC rebate programs that stack with Whole Home.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">JCP&amp;L (FirstEnergy) &mdash; Central &amp; Western NJ</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                  <th className="text-left p-3 font-semibold">Minimum Efficiency</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Ducted ASHP &mdash; Tier 1</td>
                  <td className="p-3 font-semibold">$500</td>
                  <td className="p-3">SEER2 &#8805; 15.2, HSPF2 &#8805; 7.8</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ducted ASHP &mdash; Tier 2</td>
                  <td className="p-3 font-semibold">$750</td>
                  <td className="p-3">SEER2 &#8805; 17.1, HSPF2 &#8805; 7.8</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Cold-climate ASHP (ducted)</td>
                  <td className="p-3 font-semibold">$1,000</td>
                  <td className="p-3">SEER2 &#8805; 15.2, HSPF2 &#8805; 8.1, COP &#8805; 1.75 at 5&#176;F</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ductless mini-split</td>
                  <td className="p-3 font-semibold">$750</td>
                  <td className="p-3">SEER2 &#8805; 17.1, HSPF2 &#8805; 7.8</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">$750</td>
                  <td className="p-3">ENERGY STAR certified</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            LMI customers receive an additional <strong>$200</strong> per unit. Rebates are post-installation, submitted via CLEAResult. 0% APR financing available through NEIF ($2,500&ndash;$25,000, 36&ndash;84 months).
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Atlantic City Electric (Exelon) &mdash; Southern NJ &amp; Shore</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                  <th className="text-left p-3 font-semibold">Minimum Efficiency</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">ASHP split &mdash; Tier 1</td>
                  <td className="p-3 font-semibold">$500</td>
                  <td className="p-3">SEER2 &#8805; 15.2, HSPF2 &#8805; 7.8</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">ASHP split &mdash; Tier 2</td>
                  <td className="p-3 font-semibold">$750</td>
                  <td className="p-3">SEER2 &#8805; 17.1, HSPF2 &#8805; 7.8</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Cold-climate ASHP</td>
                  <td className="p-3 font-semibold">$1,000</td>
                  <td className="p-3">SEER2 &#8805; 15.2, HSPF2 &#8805; 8.1, COP &#8805; 1.75 at 5&#176;F</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ductless mini-split</td>
                  <td className="p-3 font-semibold">$750</td>
                  <td className="p-3">SEER2 &#8805; 17.1, HSPF2 &#8805; 7.8</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">$750</td>
                  <td className="p-3">ENERGY STAR certified</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            LMI customers receive an additional <strong>$300</strong> per unit. NEIF 0% financing available up to $25,000.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Rockland Electric (RECO) &mdash; Bergen, Passaic &amp; Sussex Counties</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            RECO&apos;s Clean Heat Program offers heat pump rebates with base incentives plus LMI adders for fuel-switching projects. 0% APR financing through NEIF ($2,500&ndash;$25,000), with 120-month terms for LMI households versus 84 months standard. Contact RECO directly for current rebate amounts.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">NJ Natural Gas (NJNG) &mdash; Gas Utility</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            NJNG offers heat pump rebates through its SAVEGREEN&#174; program: <strong>$500</strong> (Tier 1) to <strong>$1,000</strong> (cold-climate) for ASHPs and mini-splits, with a <strong>$300</strong> LMI adder. Also offers a Hybrid Heat program pairing cold-climate heat pumps with gas backup. 0% on-bill repayment up to $25,000 is available. South Jersey Gas and Elizabethtown Gas do not currently offer direct heat pump rebates.
          </p>
        </div>
      </section>

      {/* 8. HEAR/HOMES Status */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">IRA HEAR/HOMES Rebates: Funded But Not Launched</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            New Jersey received over <strong>$185 million</strong> from the DOE under the Inflation Reduction Act: approximately $91.6 million for HOMES (Home Efficiency Rebates), $91.3 million for HEAR (Home Electrification and Appliance Rebates), and $3.5 million for contractor training.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            As of {formattedDate}, these programs have not launched and are still awaiting final program administrator selection. NJ&apos;s design directs nearly all funds toward low-income multifamily housing through a planned &ldquo;M-RISE&rdquo; program rather than broad single-family homeowner rebates.
          </p>
        </div>
      </section>

      {/* 9. Stacking */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Programs Stack</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            NJ&apos;s incentive layers are explicitly stackable. Whole Home and utility HVAC rebates stack by design. Gas utility rebates (NJNG) stack where applicable. Scenarios below assume a <strong>$18,000</strong> whole-home cold-climate heat pump installation.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 150% AMI &mdash; JCP&amp;L or ACE Territory</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Whole Home cash-back (assuming ~25% TES): ~$6,000</li>
                <li>Electric utility cold-climate ASHP rebate: $1,000</li>
                <li>Federal tax credit: $0 (expired)</li>
                <li>HEAR: $0 (not launched)</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$7,000</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 150% AMI &mdash; PSE&amp;G Territory (Standard Rebate)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Whole Home cash-back (assuming ~25% TES): ~$6,000</li>
                <li>PSE&amp;G cold-climate ASHP instant rebate: $600</li>
                <li>NJNG SAVEGREEN (if applicable): up to $1,000</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$7,600</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">PSE&amp;G Building Decarbonization &mdash; Full Fossil Fuel Displacement (Best Case)</p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>PSE&amp;G Decarb conversion rebate: up to $10,000</li>
                <li>Decommissioning + re-ducting: up to $4,000</li>
                <li>Whole Home cash-back (stacked): up to $7,500</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$17,500&ndash;$21,500+</p>
              <p className="text-sm text-green-800 mt-1">LMI customers qualify for $12,000 conversion cap instead of $10,000, plus $300 LMI adders on standard measures.</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-5">
            <p className="font-semibold text-gray-900 mb-1">What You&apos;ll Actually Pay</p>
            <p className="text-sm text-gray-700">
              For a $18,000 whole-home cold-climate system: most homeowners in JCP&amp;L/ACE territory pay <strong>$11,000&ndash;$12,000 out of pocket</strong>. PSE&amp;G standard customers pay <strong>$10,400&ndash;$12,000</strong>. PSE&amp;G Building Decarb customers who fully displace fossil fuel may pay <strong>under $5,000</strong> after all incentives. 0% financing stretches remaining costs over 7&ndash;10 years.
            </p>
          </div>
        </div>
      </section>

      {/* 10. Income-Qualified Programs */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Income-Qualified Programs and Weatherization</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Comfort Partners</strong> provides free energy efficiency improvements &mdash; including heating system repair or replacement, insulation, and air sealing &mdash; to households at or below 225&ndash;250% of the Federal Poverty Level, or enrolled in LIHEAP, SNAP, TANF, SSI, or Section 8. The program is active and fully available.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The <strong>Weatherization Assistance Program (WAP)</strong>, administered by the NJ Department of Community Affairs for households at or below 200% FPL, covers insulation, air sealing, and heating system replacement (including heat pumps when cost-effective). Priority goes to seniors, individuals with disabilities, and families with young children.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <p className="font-semibold text-green-800 mb-1">&#10003; Best Candidates for a Heat Pump in New Jersey</p>
            <p className="text-sm text-green-900">PSE&amp;G customers replacing gas or oil heating (Building Decarb + Whole Home = $17,500+). Homeowners with aging AC who need both heating and cooling replacement (dual-purpose value). Oil or propane customers in any utility territory (highest fuel cost savings). LMI households eligible for Comfort Partners (free) or enhanced utility adders.</p>
          </div>
        </div>
      </section>

      {/* 11. Climate Context */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Climate Context</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            NJ sits in ASHRAE climate zones 4A (central/southern) and 5A (northern). Modern cold-climate heat pumps maintain effective output well below 0&#176;F &mdash; far colder than NJ experiences.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Location</th>
                  <th className="text-left p-3 font-semibold">ASHRAE 99% Design Temp</th>
                  <th className="text-left p-3 font-semibold">Climate Zone</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Newark</td>
                  <td className="p-3 font-semibold">~10&#176;F</td>
                  <td className="p-3">4A</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Trenton</td>
                  <td className="p-3 font-semibold">~10&#176;F</td>
                  <td className="p-3">4A</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Atlantic City</td>
                  <td className="p-3 font-semibold">~12&#176;F</td>
                  <td className="p-3">4A</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Sussex County (north)</td>
                  <td className="p-3 font-semibold">~5&#176;F</td>
                  <td className="p-3">5A</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            Natural gas is the dominant heating fuel (~72% of NJ households). Heat pumps offer the clearest savings for homes currently using fuel oil or propane. For gas-heated homes, the economics depend on local electricity and gas rates &mdash; but the heat pump&apos;s dual heating and cooling capability changes the comparison. For more on energy storage, see our{" "}
            <Link href="/battery" className="text-brand-600 hover:underline">home battery guide</Link>.
          </p>
        </div>
      </section>

      {/* 12. How to Apply */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Apply</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <p className="font-semibold text-gray-900">Schedule a Whole Home Energy Audit</p>
                <p className="text-sm text-gray-700">Contact Ciel Power (the program administrator) at cielpower.com or call your utility. A BPI-certified auditor will assess your home and identify eligible measures.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <p className="font-semibold text-gray-900">Check Your Electric Utility&apos;s Rebate Program</p>
                <p className="text-sm text-gray-700">Visit your utility&apos;s energy efficiency website. PSE&amp;G: homeenergy.pseg.com. JCP&amp;L: residential.energysavenj.com. ACE: homeenergysavings.atlanticcityelectric.com. RECO: oru.com. Confirm current rebate amounts and equipment requirements.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <p className="font-semibold text-gray-900">Get Quotes From BPI-Certified Contractors</p>
                <p className="text-sm text-gray-700">Whole Home requires a participating BPI-certified contractor. Get 2&ndash;3 quotes. Confirm the contractor is enrolled in both the Whole Home program and your utility&apos;s rebate program. For PSE&amp;G Decarb, confirm Manual J/S requirements.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
              <div>
                <p className="font-semibold text-gray-900">Choose Cold-Climate Equipment</p>
                <p className="text-sm text-gray-700">Selecting a cold-climate heat pump (COP &#8805; 1.75 at 5&#176;F, NEEP Product List) unlocks the highest rebate tier at every NJ utility. Both R-410A and R-454B qualify if efficiency thresholds are met.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. What to Watch */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Watch</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">HEAR/HOMES Launch</p>
              <p className="text-sm text-gray-600 mt-1">NJ&apos;s $185 million in IRA rebate funding could add significant incentives for low-income and multifamily households when it launches. Watch the NJ BPU website for announcements.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">IRA Funding Runway</p>
              <p className="text-sm text-gray-600 mt-1">Federal IRA rebate funding is available through September 30, 2031. The OBBBA did not repeal HEAR/HOMES allocations. However, political uncertainty and NJ&apos;s focus on multifamily housing may limit single-family impact.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Utility Program Renewals</p>
              <p className="text-sm text-gray-600 mt-1">NJ utility energy efficiency programs operate on multi-year triennium cycles approved by the BPU. Rebate amounts and program structures can change at renewal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 14. FAQ */}
      <section className="bg-gray-50 py-12">
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

      {/* 15. See Also */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-3">See also</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/heat-pumps/states/ny" className="text-brand-600 hover:underline">
                New York Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/pa" className="text-brand-600 hover:underline">
                Pennsylvania Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/ct" className="text-brand-600 hover:underline">
                Connecticut Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li>
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                Federal Heat Pump Tax Credits Have Ended &mdash; What to Know
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
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="space-y-2 text-sm">
            {njIncentive.sources.map((source: { label: string; url: string }, index: number) => (
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
              <strong>Disclaimer:</strong> This page covers the main statewide,
              utility, and IRA heat pump incentives available to New Jersey
              homeowners in 2026. It does not calculate savings, guarantee
              eligibility, or represent any incentive program. Utility rebate
              amounts differ by territory (PSE&amp;G vs. JCP&amp;L vs. ACE vs.
              RECO) and PSE&amp;G Building Decarbonization incentives require full
              fossil fuel displacement and Manual J/S documentation. We verify
              status regularly but programs can change without notice. Always
              confirm current amounts and eligibility with your utility, Ciel
              Power, and your contractor before making decisions.
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
