import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Indiana Heat Pump Rebates 2026: Up to $8,000 + Energy Saver Program | Home Energy Basics",
  description:
    "Indiana Energy Saver offers up to $8,000 for heat pumps. Utility rebates add $275\u2013$3,000. Federal credits ended. Every Indiana incentive in 2026.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/in",
  },
  openGraph: {
    title: "Indiana Heat Pump Rebates 2026",
    description:
      "Up to $8,000 through Indiana Energy Saver plus $275\u2013$3,000 in utility rebates \u2014 the complete guide to Indiana heat pump incentives after federal credits expired.",
    url: "https://homeenergybasics.com/heat-pumps/states/in",
    type: "article",
  },
};

export default function IndianaPage() {
  const inIncentive = incentives.IN;
  const formattedDate = formatDate(inIncentive.lastVerified);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What heat pump rebates are available in Indiana in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Indiana\u2019s main incentive is the Indiana Energy Saver Program, which combines HEAR rebates (up to $8,000 for a heat pump for households below 150% AMI) and HOMES rebates (up to $4,000 for homeowners above 150% AMI achieving 35%+ energy savings). All major Indiana utilities also offer rebates ranging from $275 to $3,000. Federal Section 25C and 25D tax credits expired December 31, 2025 and are no longer available.",
        },
      },
      {
        "@type": "Question",
        name: "Can I stack Indiana Energy Saver rebates with utility rebates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. IRA rebates from the Indiana Energy Saver Program (HOMES and HEAR) can stack with utility rebates from AES Indiana, Duke Energy, NIPSCO, CenterPoint, or your rural electric cooperative. HOMES and HEAR cannot fund the same measure within a single home, but can cover different measures in the same project. The combined total across all programs cannot exceed the project\u2019s total cost.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a cold-climate heat pump in Indiana?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, cold-climate heat pumps are strongly recommended for Indiana. Indianapolis has an ASHRAE 99% design temperature of about 5\u00b0F, Fort Wayne drops to 1\u20132\u00b0F, and even Evansville in the south reaches 8\u201310\u00b0F. Cold-climate models maintain heating capacity at these temperatures and are essential for reliable winter performance in central and northern Indiana.",
        },
      },
      {
        "@type": "Question",
        name: "Who administers Indiana\u2019s heat pump rebate programs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Indiana Energy Saver Program (HOMES and HEAR rebates) is administered by the Indiana Office of Energy Development (IOED). Applications are processed through IndianaEnergySaver.com. Utility rebates are administered separately by each utility: AES Indiana, Duke Energy Indiana, NIPSCO, Indiana Michigan Power, and CenterPoint Energy Indiana. The Weatherization Assistance Program is administered by the Indiana Housing and Community Development Authority (IHCDA).",
        },
      },
      {
        "@type": "Question",
        name: "What is the income limit for Indiana HEAR rebates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "HEAR rebates are available to Indiana households earning less than 150% of Area Median Income (AMI). Households below 80% AMI receive 100% of project cost up to federal caps ($8,000 for a heat pump). Households at 80\u2013150% AMI receive 50% of project cost. Households above 150% AMI do not qualify for HEAR but can access HOMES rebates and utility rebates.",
        },
      },
    ],
  };

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
            {" "}/ Indiana
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Indiana Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Indiana&apos;s <strong>$182 million Energy Saver Program</strong> is fully operational and offers up to <strong>$8,000</strong> for a heat pump for income-qualified households. Utility rebates from AES Indiana, Duke Energy, NIPSCO, and others add <strong>$275&ndash;$3,000</strong> on top. Federal tax credits expired December 31, 2025. This guide covers all major Indiana heat pump incentives available in 2026, including the Indiana Energy Saver Program (HOMES and HEAR), utility rebates from all major providers, and local programs. Here&apos;s what&apos;s actually available.
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
          <StatusCard incentive={inIncentive} />
          <p className="text-sm text-gray-600 mt-3">
            Indiana is one of the few states with fully operational IRA rebate programs &mdash; making 2026 one of the best times to install a heat pump if you qualify.
          </p>
        </div>
      </section>

      {/* 3. SHORT VERSION */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The short version</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Indiana Energy Saver &mdash; HEAR</p>
              <p className="text-sm text-green-900">Up to <strong>$8,000</strong> for a heat pump for households below 150% of Area Median Income (AMI). Up to <strong>$14,000</strong> total per household. Applied as a point-of-sale discount.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Utility rebates from all major providers</p>
              <p className="text-sm text-green-900">AES Indiana: up to <strong>$725</strong>. Duke Energy: up to <strong>$3,000</strong>. NIPSCO: up to <strong>$1,000</strong>. CenterPoint: up to <strong>$450</strong>. Rural co-ops: up to <strong>$500</strong>.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Total potential savings</p>
              <p className="text-sm text-green-900"><strong>$2,600&ndash;$5,000</strong> (above 150% AMI) to <strong>$9,000&ndash;$14,000+</strong> (below 80% AMI). Full electrification packages can reach ~$32,000 total incentives.</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">✗ Federal tax credits expired</p>
              <p className="text-sm text-red-900">Section 25C ($2,000 heat pump credit) and Section 25D (30% geothermal credit) both ended December 31, 2025. No reinstatement legislation has been introduced.</p>
            </div>
            <div className="md:col-span-2 bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="font-semibold text-amber-800 mb-1">⚠ HEAR only covers fuel-switching &mdash; not electric-to-electric replacement</p>
              <p className="text-sm text-amber-900">HEAR rebates apply to first-time electric equipment installations only. Replacing an existing electric furnace or heat pump with a new heat pump does not qualify for HEAR. Those homeowners should apply through HOMES instead, which covers all fuel types but at lower rebate amounts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEDERAL EXPIRED */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Federal heat pump tax credits have expired</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <p className="text-red-900 leading-relaxed">
              <strong>Section 25C</strong> (Energy Efficient Home Improvement Credit) and <strong>Section 25D</strong> (Residential Clean Energy Credit) both expired on <strong>December 31, 2025</strong>. The One Big Beautiful Bill Act accelerated their termination from the original 2032 sunset. No heat pump installed after December 31, 2025 qualifies for either credit. Section 25D allows carryforward of unused credit from pre-2026 installations, but Section 25C does not. As of March 2026, no legislation to reinstate these credits has been introduced.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            The &ldquo;placed in service&rdquo; rule is strict: only the installation completion date matters, not the purchase or payment date. A heat pump purchased in 2025 but installed in 2026 receives no federal credit.
          </p>
          <p className="text-gray-700 leading-relaxed">
            For more details, see our full explainer: <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">Federal heat pump tax credits ended &mdash; what to know</Link>.
          </p>
        </div>
      </section>

      {/* 5. HEAR (Primary) */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Home Electrification and Appliance Rebates (HEAR)</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            With <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">federal tax credits expired</Link>, the HEAR component of the Indiana Energy Saver Program is now the single largest incentive available to Indiana homeowners. It targets low- and moderate-income households earning less than <strong>150% of Area Median Income (AMI)</strong>. Administered by the Indiana Office of Energy Development (IOED), HEAR covers first-time installations of electric equipment &mdash; meaning it applies when switching from gas, propane, or oil to electric, but not when replacing existing electric equipment.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">HEAR rebate amounts by equipment</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Below 80% AMI</th>
                  <th className="text-left p-3 font-semibold">80&ndash;150% AMI</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Heat pump (HVAC)</td>
                  <td className="p-3 font-semibold">100% of cost, up to $8,000</td>
                  <td className="p-3 font-semibold">50% of cost, up to $8,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">100% of cost, up to $1,750</td>
                  <td className="p-3 font-semibold">50% of cost, up to $1,750</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Electrical panel</td>
                  <td className="p-3 font-semibold">100% of cost, up to $4,000</td>
                  <td className="p-3 font-semibold">50% of cost, up to $4,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Electric stove / cooktop</td>
                  <td className="p-3 font-semibold">100% of cost, up to $840</td>
                  <td className="p-3 font-semibold">50% of cost, up to $840</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump clothes dryer</td>
                  <td className="p-3 font-semibold">100% of cost, up to $840</td>
                  <td className="p-3 font-semibold">50% of cost, up to $840</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Wiring upgrades</td>
                  <td className="p-3 font-semibold">100% of cost, up to $2,500</td>
                  <td className="p-3 font-semibold">50% of cost, up to $2,500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">Total household cap</td>
                  <td className="p-3 font-semibold">$14,000</td>
                  <td className="p-3 font-semibold">$14,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            HEAR rebates are delivered as <strong>point-of-sale discounts</strong> applied directly to the contractor&apos;s invoice. All work must be performed by contractors in the Indiana Energy Saver Program&apos;s approved network. Income qualification can be demonstrated through documentation or categorical eligibility via participation in LIHEAP, Medicaid, SNAP, Head Start, SSI, WIC, or other assistance programs.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="font-semibold text-amber-800 mb-1">⚠ Common mistake: HEAR does not cover electric-to-electric replacements</p>
            <p className="text-sm text-amber-900">If your home already has an electric furnace, electric baseboard, or an older heat pump, replacing it with a new heat pump does not qualify for HEAR. HEAR only covers switching from gas, propane, or oil to electric equipment. Electric-to-electric replacements should apply through HOMES instead.</p>
          </div>
        </div>
      </section>

      {/* 6. HOMES (Secondary) */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Home Efficiency Rebates (HOMES)</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The HOMES component funds whole-home retrofits achieving a minimum <strong>20% predicted energy savings</strong>. Unlike HEAR, HOMES is open to all Indiana residents regardless of income and covers both fuel-switching and electric-to-electric replacements. Eligible upgrades include ENERGY STAR-certified HVAC systems, water heaters, insulation, air sealing, duct sealing, appliances, and lighting.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">HOMES rebate amounts by income and savings</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Income level</th>
                  <th className="text-left p-3 font-semibold">20&ndash;34% energy savings</th>
                  <th className="text-left p-3 font-semibold">35%+ energy savings</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Below 80% AMI</td>
                  <td className="p-3 font-semibold">100% of cost, up to $12,000</td>
                  <td className="p-3 font-semibold">100% of cost, up to $18,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">80% AMI and above</td>
                  <td className="p-3 font-semibold">50% of cost, up to $2,000</td>
                  <td className="p-3 font-semibold">50% of cost, up to $4,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            HOMES rebates are available retroactively for retrofits completed between August 16, 2022 and the program launch date. Like HEAR, rebates are delivered as point-of-sale discounts through approved contractors.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="font-semibold text-blue-800 mb-1">HOMES and HEAR can work together on the same project</p>
            <p className="text-sm text-blue-900">The two programs cannot fund the same measure, but they can fund different measures within a single project. For example, you could use HEAR for the heat pump installation and HOMES for insulation and air sealing in the same home. This is how income-qualified households reach the highest total incentive amounts.</p>
          </div>
        </div>
      </section>

      {/* 7. UTILITY PROGRAMS */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Indiana utility heat pump rebates</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            All major Indiana electric utilities run active rebate programs that stack with the Indiana Energy Saver Program. Rebate amounts, efficiency requirements, and application processes vary by provider.
          </p>

          {/* AES Indiana */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">AES Indiana (Indianapolis metro)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            AES Indiana&apos;s Home Improvement Rebates program offers tiered instant discounts through its Quality Contractor Network. Rebates cover equipment installed through December 31, 2026.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                  <th className="text-left p-3 font-semibold">Requirement</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Ducted ASHP &mdash; Tier 1</td>
                  <td className="p-3 font-semibold">$275</td>
                  <td className="p-3">SEER2 15.2 / EER2 &gt; 9.975</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ducted ASHP &mdash; Tier 2</td>
                  <td className="p-3 font-semibold">$375</td>
                  <td className="p-3">SEER2 16.15</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Ducted ASHP &mdash; Tier 3</td>
                  <td className="p-3 font-semibold">$575</td>
                  <td className="p-3">SEER2 &ge; 17.1</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Mini-split heat pump</td>
                  <td className="p-3 font-semibold">$100&ndash;$725</td>
                  <td className="p-3">Tiered by SEER2 / HSPF2</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">$600</td>
                  <td className="p-3">ENERGY STAR certified</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Duke Energy Indiana */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Duke Energy Indiana (central and southern Indiana)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Duke Energy&apos;s Smart $aver program offers the most generous utility conversion rebates in Indiana. A free Home Energy Check is required within 24 months before installation. Rebates are paid via prepaid Mastercard.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                  <th className="text-left p-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Standard HP replacement</td>
                  <td className="p-3 font-semibold">$500&ndash;$1,000</td>
                  <td className="p-3">Tiered by SEER2</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Dual-fuel conversion</td>
                  <td className="p-3 font-semibold">Up to $3,000</td>
                  <td className="p-3">Expanded conversion rebate</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Cold-climate / ducted mini-split</td>
                  <td className="p-3 font-semibold">Up to $2,500</td>
                  <td className="p-3">Conversion rebate</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Geothermal</td>
                  <td className="p-3 font-semibold">Up to $2,300</td>
                  <td className="p-3">Conversion rebate</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">HPWH (50 gal)</td>
                  <td className="p-3 font-semibold">$500</td>
                  <td className="p-3">UEF &ge; 3.3</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">HPWH (80 gal)</td>
                  <td className="p-3 font-semibold">$800</td>
                  <td className="p-3">UEF &ge; 3.3</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* NIPSCO */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">NIPSCO (northern Indiana)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            NIPSCO&apos;s 2026 program covers equipment purchased January 1&ndash;November 30, 2026. Applications must be postmarked within 60 days of installation. AHRI certificates are required. Funds are first-come, first-served.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                  <th className="text-left p-3 font-semibold">Requirement</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Ducted ASHP &mdash; Tier 1</td>
                  <td className="p-3 font-semibold">$800</td>
                  <td className="p-3">15.2&ndash;16.1 SEER2</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ducted ASHP &mdash; Tier 2</td>
                  <td className="p-3 font-semibold">$900</td>
                  <td className="p-3">16.2&ndash;17.0 SEER2</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Ducted ASHP &mdash; Tier 3</td>
                  <td className="p-3 font-semibold">$1,000</td>
                  <td className="p-3">17.1+ SEER2</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ductless mini-split</td>
                  <td className="p-3 font-semibold">$60</td>
                  <td className="p-3">17.1+ SEER2, 8.6+ HSPF2</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">$750</td>
                  <td className="p-3">ENERGY STAR, UEF &ge; 2.0</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* I&M */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Indiana Michigan Power (Fort Wayne and northeast Indiana)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            I&amp;M uses a Midstream distributor incentive model, meaning discounts are applied at point of purchase through participating distributors and contractors rather than as mail-in rebates. Specific dollar amounts are not publicly listed. Contact participating distributors or call <strong>833-599-0845</strong> through ElectricIdeas.com for current incentive levels.
          </p>

          {/* CenterPoint */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">CenterPoint Energy Indiana (Evansville and southern Indiana)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            CenterPoint&apos;s 2026 rebate program, administered by CLEAResult, offers direct rebates for heat pump water heaters at <strong>$500</strong> and heat pump pool heaters at <strong>$350&ndash;$800</strong> based on COP rating. For ducted and ductless air-source heat pumps, CenterPoint uses a Midstream program providing instant savings through participating dealers. Ducted ASHP rebates range from <strong>$150&ndash;$350</strong> by SEER2 tier, and ductless heat pump rebates range from <strong>$150&ndash;$450</strong>. Applications must be submitted within 60 days of installation.
          </p>

          {/* Rural co-ops */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Indiana rural electric cooperatives</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Many Indiana REMCs offer standardized heat pump rebates coordinated through Hoosier Energy and Wabash Valley Power Alliance. Confirmed active for 2026 at cooperatives including South Central Indiana REMC, WIN Energy REMC, Harrison REMC, and Southern Indiana Power. Common rebate amounts: <strong>$300&ndash;$500</strong> for ducted air-source heat pumps, <strong>$300&ndash;$500</strong> for mini-splits (SEER2 &ge; 17.3), <strong>$2,000</strong> for geothermal, and <strong>$500</strong> for heat pump water heaters (UEF &ge; 0.90). Harrison REMC offers an additional <strong>$200 dual-fuel bonus</strong>. Applications are due by December 15, 2026.
          </p>

          {/* Bloomington local note */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">City of Bloomington &mdash; Green Home Improvement Program</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Bloomington Green Home Improvement Program (BGHIP) provides rebates equal to <strong>25% of project cost</strong> (up to category-specific maximums) for heat pumps, heat pump water heaters, insulation, solar, and other efficiency upgrades. Income-qualified households receive higher percentages. BGHIP explicitly allows stacking with Indiana Energy Saver rebates and utility rebates, provided the combined total does not exceed project cost. No other Indiana city currently operates a comparable program.
          </p>
        </div>
      </section>

      {/* 9. STACKING */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Indiana heat pump incentives stack</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Indiana&apos;s stacking rules are relatively permissive. IRA rebates (HOMES and HEAR) can stack with utility rebates. HOMES and HEAR cannot fund the same measure but can fund different measures within one project. The combined total across all programs cannot exceed the project&apos;s total cost. There are no Indiana state tax credits to layer in.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 150% AMI &mdash; Ducted cold-climate heat pump ($15,000 installed)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>HOMES rebate (35%+ energy savings): $4,000</li>
                <li>Duke Energy conversion rebate: $2,500</li>
                <li>Federal tax credit: $0 (expired)</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$6,500</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">80&ndash;150% AMI &mdash; Ducted ASHP + HPWH ($18,000 installed)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>HEAR heat pump rebate (50% of cost): $4,000</li>
                <li>HEAR HPWH rebate (50% of cost): $875</li>
                <li>NIPSCO ducted ASHP rebate: $1,000</li>
                <li>NIPSCO HPWH rebate: $750</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$6,625</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">Below 80% AMI &mdash; Full electrification package ($25,000 project)</p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>HEAR heat pump (100% of cost): $8,000</li>
                <li>HEAR HPWH (100% of cost): $1,750</li>
                <li>HEAR electrical panel (100% of cost): $4,000</li>
                <li>HOMES insulation + air sealing (100% of cost, 35%+ savings): up to $18,000</li>
                <li>Utility rebate (e.g., NIPSCO): $1,000</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: capped at project cost (~$25,000)</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-5">
            <p className="font-semibold text-gray-900 mb-1">What you&apos;ll actually pay</p>
            <p className="text-sm text-gray-700">For a typical <strong>$12,000&ndash;$15,000</strong> ducted heat pump installation: above 150% AMI homeowners should expect <strong>$8,500&ndash;$12,400 out of pocket</strong> after HOMES + utility rebates. Homeowners at 80&ndash;150% AMI can bring that down to <strong>$5,000&ndash;$9,000</strong> with HEAR. Below 80% AMI, out-of-pocket costs can be <strong>$0</strong> for qualifying projects.</p>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Indiana has no state income tax credit for heat pumps. The Indiana Energy Independence Fund (PowerSave Indiana) offers below-market financing to cover remaining out-of-pocket costs.
          </p>
        </div>
      </section>

      {/* IS IT WORTH IT */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Is a heat pump worth it in Indiana in 2026?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            For most Indiana homeowners, the answer is yes &mdash; but it depends on your current heating system and income level.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">It&apos;s usually worth it if:</h3>
          <div className="bg-green-50 border border-green-200 rounded-lg p-5 mb-6">
            <p className="text-sm text-green-900">You heat with <strong>propane or electric resistance</strong> (highest per-BTU fuel costs, strongest payback). You qualify for <strong>HEAR rebates</strong> (below 150% AMI), which can cover most or all of the upfront cost. Or you can access <strong>utility conversion incentives</strong> like Duke Energy&apos;s $3,000 rebate. In these cases, a heat pump can reduce both upfront cost and long-term energy bills &mdash; sometimes bringing total out-of-pocket cost close to $0.</p>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">It&apos;s situational if:</h3>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-6">
            <p className="text-sm text-amber-900">You already have <strong>natural gas heating</strong> and are above 150% AMI. The economics work but take longer to pay back. A <strong>dual-fuel setup</strong> (heat pump + gas furnace backup) is often the most practical option in this scenario &mdash; you reduce heating costs during mild weather while keeping gas as backup for the coldest days. Most Indiana utilities support this configuration through their rebate programs.</p>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">It may not be worth it if:</h3>
          <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
            <p className="text-sm text-gray-600">You are replacing an <strong>existing electric heat pump</strong> that still works. You don&apos;t qualify for HEAR and have limited utility rebates in your area. These projects rely mostly on HOMES or utility incentives, which are smaller and require energy modeling to qualify.</p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="font-semibold text-blue-800 mb-1">Bottom line</p>
            <p className="text-sm text-blue-900">Indiana is one of the stronger states for heat pump incentives in 2026 &mdash; especially for income-qualified households switching from gas or propane. But the economics vary significantly depending on your home, heating system, and income level. The table above in &ldquo;What you&apos;ll actually pay&rdquo; gives you the real numbers.</p>
          </div>
        </div>
      </section>

      {/* 10. WEATHERIZATION */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Indiana Weatherization Assistance Program</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Indiana Weatherization Assistance Program (WAP) is administered by the Indiana Housing and Community Development Authority (IHCDA) and provides free energy audits, air sealing, insulation, and furnace inspection to households earning at or below <strong>200% of the Federal Poverty Level</strong>. Services are entirely free. Demand typically exceeds capacity, creating wait lists prioritized by energy burden and vulnerability.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Apply through your county&apos;s Local Service Provider. Contact IHCDA at iwx@ihcda.in.gov for provider referrals. Weatherization services can complement Indiana Energy Saver rebates &mdash; completing WAP improvements first may help your home reach the 35% energy savings threshold needed for maximum HOMES rebates.
          </p>
        </div>
      </section>

      {/* 11. CLIMATE */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Indiana climate and heat pump performance</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Indiana spans IECC Climate Zone 5A (central and northern counties) and Climate Zone 4A (southern counties). Cold-climate heat pump selection is a genuine engineering concern throughout the state, not just a marketing label. Similar cold-climate considerations apply in neighboring <Link href="/heat-pumps/states/mi" className="text-brand-600 hover:underline">Michigan</Link> and <Link href="/heat-pumps/states/wi" className="text-brand-600 hover:underline">Wisconsin</Link>.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">ASHRAE design temperatures</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">City</th>
                  <th className="text-left p-3 font-semibold">Climate zone</th>
                  <th className="text-left p-3 font-semibold">99% design temp</th>
                  <th className="text-left p-3 font-semibold">Cold-climate HP needed?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Fort Wayne</td>
                  <td className="p-3">5A</td>
                  <td className="p-3 font-semibold">1&ndash;2°F</td>
                  <td className="p-3">Yes &mdash; essential</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Indianapolis</td>
                  <td className="p-3">5A</td>
                  <td className="p-3 font-semibold">5°F</td>
                  <td className="p-3">Yes &mdash; essential</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Evansville</td>
                  <td className="p-3">4A</td>
                  <td className="p-3 font-semibold">8&ndash;10°F</td>
                  <td className="p-3">Recommended</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-green-800 mb-1">✓ Best candidates for a heat pump in Indiana</p>
            <p className="text-sm text-green-900">Propane-heated rural homes (highest per-BTU fuel cost, often served by co-ops with $500 rebates). Gas-heated homes considering dual-fuel configurations (keep existing furnace as backup). Homes with ductwork already in place. Households below 150% AMI that qualify for HEAR&apos;s $8,000 heat pump rebate.</p>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Natural gas heats approximately 65% of Indiana homes, electricity heats 26%, and propane serves about 7% &mdash; concentrated in rural areas. Indiana&apos;s residential electricity rate of roughly <strong>17.3 cents per kWh</strong> (slightly below the national average) makes heat pump operating economics favorable compared to both propane and, increasingly, natural gas. For gas-heated homes, dual-fuel configurations pairing a cold-climate heat pump with the existing gas furnace as backup offer a pragmatic transition strategy that most Indiana utilities support through their rebate programs.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Considering adding battery storage to complement a heat pump system? See our guide: <Link href="/battery" className="text-brand-600 hover:underline">Are home batteries worth it in 2026?</Link>
          </p>
        </div>
      </section>

      {/* COMMON MISTAKES */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common mistakes Indiana homeowners make</h2>
          <div className="space-y-4">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="font-semibold text-amber-800 mb-1">⚠ Assuming HEAR covers all replacements</p>
              <p className="text-sm text-amber-900">HEAR only covers fuel-switching (gas/propane/oil to electric). Replacing an existing electric system with a new heat pump does not qualify. Use HOMES instead.</p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="font-semibold text-amber-800 mb-1">⚠ Not using an approved contractor</p>
              <p className="text-sm text-amber-900">Both HEAR and HOMES rebates require work by contractors in the Indiana Energy Saver Program&apos;s approved network. Using an unapproved contractor means no point-of-sale discount and no rebate.</p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="font-semibold text-amber-800 mb-1">⚠ Missing utility deadlines</p>
              <p className="text-sm text-amber-900">NIPSCO&apos;s program closes November 30, 2026 &mdash; not December 31. Most utility programs are first-come, first-served. Submitting applications within 60 days of installation is required by NIPSCO and CenterPoint.</p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="font-semibold text-amber-800 mb-1">⚠ Not stacking HOMES + HEAR correctly</p>
              <p className="text-sm text-amber-900">The two programs cannot fund the same measure, but they can fund different measures in one project. The highest totals come from using HEAR for the heat pump and HOMES for insulation and air sealing. Many homeowners miss this and leave thousands on the table.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 12. HOW TO APPLY */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to apply for Indiana heat pump rebates</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-gray-900">Check your income eligibility</p>
                <p className="text-sm text-gray-700">Determine whether your household falls below 80% AMI, 80&ndash;150% AMI, or above 150% AMI. This determines whether you qualify for HEAR, HOMES, or both. Use the income calculator at IndianaEnergySaver.com.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900">Find an approved Indiana Energy Saver contractor</p>
                <p className="text-sm text-gray-700">All HEAR and HOMES rebates must be processed through contractors in the program&apos;s approved network. Search the contractor directory at IndianaEnergySaver.com.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-900">Get a quote with point-of-sale rebate applied</p>
                <p className="text-sm text-gray-700">Your contractor will apply the IRA rebate directly to your invoice as a discount. You do not need to wait for reimbursement.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <p className="font-semibold text-gray-900">Apply for your utility rebate separately</p>
                <p className="text-sm text-gray-700">Utility rebates (AES Indiana, Duke Energy, NIPSCO, CenterPoint) require separate applications. Check your utility&apos;s website for deadlines and required documentation like AHRI certificates.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                5
              </div>
              <div>
                <p className="font-semibold text-gray-900">Apply early &mdash; funds are limited</p>
                <p className="text-sm text-gray-700">Both IRA programs and most utility programs are first-come, first-served with fixed funding pools. Apply through IndianaEnergySaver.com or call 855-446-7283.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. WHAT TO WATCH */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to watch in Indiana</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">IRA funding runway</p>
              <p className="text-sm text-gray-600 mt-1">Indiana&apos;s $182 million allocation is being disbursed on a first-come, first-served basis. Approximately 1,400 applications were processed by late 2025. IOED targets full disbursement within three years, but if uptake accelerates, funds could be exhausted sooner. Early application is strongly recommended.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Federal credit reinstatement unlikely</p>
              <p className="text-sm text-gray-600 mt-1">No legislation to restore Section 25C or 25D credits has been introduced as of March 2026. The current political environment makes reinstatement before 2029 unlikely. Planning around state and utility incentives only is the safest approach.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Utility program year-end deadlines</p>
              <p className="text-sm text-gray-600 mt-1">NIPSCO&apos;s program closes November 30, 2026. Most other utility programs run through December 31, 2026 but are subject to fund exhaustion. Verify current availability with your utility before scheduling installation.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Indiana Energy Independence Fund expansion</p>
              <p className="text-sm text-gray-600 mt-1">The IEIF&apos;s PowerSave Indiana financing program is expanding statewide from its initial northeast Indiana launch. This below-market financing option can cover remaining out-of-pocket costs after rebates are applied, with no minimum credit score requirement.</p>
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
              <Link href="/heat-pumps/states/il" className="text-brand-600 hover:underline">
                Illinois Heat Pump Rebates
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/oh" className="text-brand-600 hover:underline">
                Ohio Heat Pump Rebates
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/ky" className="text-brand-600 hover:underline">
                Kentucky Heat Pump Rebates
              </Link>
            </li>
            <li>
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                Federal Heat Pump Tax Credits Ended &mdash; What Changed
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
            {inIncentive.sources.map((source: { label: string; url: string }, index: number) => (
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
              utility, and IRA heat pump incentives available to Indiana
              homeowners in 2026. It does not calculate savings, guarantee
              eligibility, or represent any incentive program. Utility rebate amounts
              for Indiana Michigan Power and CenterPoint Energy Indiana are based on
              the most recent published schedules and may have changed. We verify status regularly but programs can change
              without notice. Always confirm current amounts and eligibility with
              the Indiana Energy Saver Program (IndianaEnergySaver.com) and your contractor before making decisions.
            </p>
          </div>
          <div className="mt-6 text-center">
            <Link href="/heat-pumps" className="text-brand-600 hover:underline text-sm">
              &larr; Back to Heat Pumps overview
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
