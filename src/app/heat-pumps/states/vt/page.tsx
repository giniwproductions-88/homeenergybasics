import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Vermont Heat Pump Rebates 2026: $2,200–$7,950 + Efficiency Vermont & BED Programs | Home Energy Basics",
  description:
    "Efficiency Vermont offers up to $2,200 for ducted systems. Burlington Electric leads at $7,950. GMP adds $2,200 income bonus. Federal credits ended. Every Vermont heat pump incentive in 2026.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/vt",
  },
  openGraph: {
    title: "Vermont Heat Pump Rebates 2026",
    description:
      "Efficiency Vermont $2,200 ducted, Burlington Electric up to $7,950, GMP income bonus $2,200 — the complete guide to Vermont heat pump incentives after federal credits expired.",
    url: "https://homeenergybasics.com/heat-pumps/states/vt",
    type: "article",
  },
};

export default function VermontPage() {
  const vtIncentive = incentives.VT;
  const formattedDate = formatDate(vtIncentive.lastVerified);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What heat pump rebates are available in Vermont in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vermont heat pump rebates come primarily from Efficiency Vermont (up to $2,200 for ducted systems, $375\u2013$475 per ductless head) and your electric utility. Burlington Electric Department offers the richest incentives \u2014 up to $7,950 for income-qualified high-performance ducted systems. Green Mountain Power customers can get up to $2,200 in income-qualified bonuses per condenser. Federal tax credits (25C/25D) ended December 31, 2025.",
        },
      },
      {
        "@type": "Question",
        name: "Does Vermont have HEAR rebates for heat pumps?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vermont\u2019s HEAR (Home Electrification and Appliance Rebates) program is currently on pause. The Vermont Department of Public Service recommends not planning on HEAR funds for projects in 2026. The $29.2 million allocation has not been released for consumer applications.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get 0% financing for a heat pump in Vermont?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The Home Energy Loan program offers 0% interest for low- and moderate-income households, with loans up to $40,000 and terms up to 15 years. Lending partners include VSECU, EastRise Credit Union, and Opportunities Credit Union. Work must be done by an Efficiency Excellence Network contractor.",
        },
      },
      {
        "@type": "Question",
        name: "What\u2019s the difference between Burlington Electric and Efficiency Vermont rebates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Burlington Electric Department (BED) operates its own rebate program, separate from Efficiency Vermont. BED rebates are significantly higher \u2014 up to $7,450 for a high-performance ducted system over 4 tons, compared to $2,200 from Efficiency Vermont. Burlington residents are not eligible for EVT income bonuses but BED\u2019s standalone program more than compensates. All other Vermont electric customers access rebates through Efficiency Vermont.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a cold-climate heat pump in Vermont?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. All Vermont rebate programs require ENERGY STAR Cold Climate certification. With ASHRAE design temperatures of -12\u00b0F in Burlington and -10\u00b0F in Montpelier, standard heat pumps cannot provide adequate heating. Equipment must appear on the NEEP Cold Climate Air Source Heat Pump Qualified Product List.",
        },
      },
      {
        "@type": "Question",
        name: "Can I stack Vermont heat pump rebates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Efficiency Vermont rebates and utility income bonuses are designed to stack and are applied through a single streamlined process. For Green Mountain Power customers earning under 80% AMI, the total stack for a ducted system plus heat pump water heater can reach $5,400. Burlington Electric caps all rebates at 75% of installed cost. BED and EVT rebates do not combine \u2014 you access one system based on your utility territory.",
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
            {" "}/ Vermont
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Vermont Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Vermont still offers heat pump rebates in 2026 — but they&apos;re smaller and more fragmented than before. With federal tax credits gone and the Clean Heat Standard canceled, most homeowners now rely on utility programs through Efficiency Vermont and Burlington Electric. Rebates range from about <strong>$2,000 to $7,950</strong> depending on your utility and income. Burlington Electric leads the state at up to <strong>$7,950</strong> for income-qualified ducted systems. Green Mountain Power customers can stack up to <strong>$5,400</strong> at ≤80% AMI. This guide covers all major Vermont heat pump incentives available in 2026, including Efficiency Vermont, Burlington Electric, Green Mountain Power, VEC, and the paused HEAR program. Here&apos;s what&apos;s actually available.
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
          <StatusCard incentive={vtIncentive} />
        </div>
      </section>

      {/* 3. SHORT VERSION */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Short Version</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Efficiency Vermont (Statewide)</p>
              <p className="text-sm text-green-900">$375–$475/head ductless, $2,200 ducted, $600 HPWH, $600 integrated controls. Applied as instant point-of-sale discounts through participating distributors.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Burlington Electric — Highest in VT</p>
              <p className="text-sm text-green-900">Up to $7,950 for income-qualified ducted systems. Separate program from EVT. All BED rebates capped at 75% of installed cost.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Total Potential Savings</p>
              <p className="text-sm text-green-900">$2,200–$3,000 (above 150% AMI) to $5,400+ (below 80% AMI) for GMP customers. BED customers can reach ~$9,150. 0% financing available through the Home Energy Loan.</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">✗ Federal Tax Credits Expired</p>
              <p className="text-sm text-red-900">Section 25C ($2,000 for heat pumps) and Section 25D (30% for geothermal) both ended December 31, 2025. No replacement exists in 2026.</p>
            </div>
            <div className="md:col-span-2 bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="font-semibold text-amber-800 mb-1">⚠ HEAR Rebates On Pause — VT DPS Says Don&apos;t Count On It</p>
              <p className="text-sm text-amber-900">Vermont&apos;s $29.2M HEAR allocation is frozen. The Department of Public Service recommends not planning on HEAR funds for 2026 projects. These are not retroactive — purchases made before the program launches will not qualify. Some third-party rebate calculators show HEAR as &quot;Open&quot; in Vermont — these sites are outdated.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEDERAL EXPIRED — bg-gray-50 */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Federal Tax Credits Have Ended</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <p className="text-red-900 leading-relaxed">
              The <strong>One Big Beautiful Bill Act</strong> (signed July 4, 2025) terminated both <strong>Section 25C</strong> (up to $2,000 for heat pumps) and <strong>Section 25D</strong> (30% for geothermal) seven to nine years ahead of schedule. The IRS confirms neither credit applies to equipment installed after <strong>December 31, 2025</strong>. If you bought a heat pump in late 2025 but it wasn&apos;t installed until 2026, you cannot claim the credit — the IRS defines eligibility based on when equipment is &quot;placed in service,&quot; not when you paid.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            For full details on what changed, see our <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">Federal Heat Pump Tax Credits Ended</Link> guide.
          </p>
        </div>
      </section>

      {/* 5. HEAR / Primary — white */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">HEAR &amp; HOMES — Mostly On Pause</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Vermont was allocated <strong>$58.5 million</strong> in IRA Home Energy Rebate funding: $29.3M for HOMES and $29.2M for HEAR. The Vermont Department of Public Service administers both programs.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-amber-800 mb-1">⚠ HEAR Is On Pause</p>
            <p className="text-sm text-amber-900">The Vermont Department of Public Service recommends not planning on HEAR funds for projects in 2026. The program was caught in the Trump administration&apos;s January 2025 executive order freezing IRA funding. No consumer-facing application portal exists. Always check the <a href="https://publicservice.vermont.gov/efficiency/inflation-reduction-act-bolster-vermont-weatherization-and-electrification-efforts" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">official VT DPS page</a>.</p>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">HOMES for Low-Income via WAP</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            HOMES was targeted for January 2026 launch through the Weatherization Assistance Program for low-income households (≤80% AMI), providing up to <strong>$16,000</strong> in efficiency upgrades at no cost. However, no official launch announcement has been confirmed. Contact your <a href="https://dcf.vermont.gov/benefits/weatherization" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">local Community Action Agency</a> regardless.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">HEAR Rebate Structure (If Launched)</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Vermont plans a three-phase HEAR rollout: moderate-income heat pump rebates (80–150% AMI, up to $8,000 at 50% cost match), low-income heat pumps through WAP, and electrification assistance for new affordable multifamily housing.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Income Level</th>
                  <th className="text-left p-3 font-semibold">Coverage</th>
                  <th className="text-left p-3 font-semibold">Heat Pump Cap</th>
                  <th className="text-left p-3 font-semibold">Per-Household Cap</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Below 80% AMI</td>
                  <td className="p-3">100% of costs (via WAP)</td>
                  <td className="p-3 font-semibold">$8,000</td>
                  <td className="p-3 font-semibold">$14,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">80–150% AMI</td>
                  <td className="p-3">50% of costs</td>
                  <td className="p-3 font-semibold">$8,000</td>
                  <td className="p-3 font-semibold">$14,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-gray-500">Above 150% AMI</td>
                  <td className="p-3 text-gray-500">Not eligible</td>
                  <td className="p-3 text-gray-500">&mdash;</td>
                  <td className="p-3 text-gray-500">&mdash;</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="font-semibold text-amber-800 mb-1">⚠ Common Mistake: Trusting Third-Party Rebate Calculators</p>
            <p className="text-sm text-amber-900">Some rebate calculator websites show HEAR and HOMES as &quot;Open&quot; in Vermont. These sites often rely on projected program timelines rather than confirmed launches. Budget your project based on currently available EVT and utility rebates only.</p>
          </div>
        </div>
      </section>

      {/* 6. EVT (Secondary/Primary utility) — bg-gray-50 */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Efficiency Vermont — The Statewide Baseline</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Efficiency Vermont operates the baseline rebate program covering nearly all Vermont electric customers (except Burlington Electric territory). Rebates are applied as instant point-of-sale discounts through participating HVAC distributors. Equipment must be new, installed in Vermont, and carry <strong>ENERGY STAR Cold Climate certification</strong>.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">2026 Rebate</th>
                  <th className="text-left p-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Ductless mini-split</td>
                  <td className="p-3 font-semibold">$375–$475 per head</td>
                  <td className="p-3">Amount depends on qualifying tier</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Integrated controls</td>
                  <td className="p-3 font-semibold">$600 per system</td>
                  <td className="p-3">Smart controls for multi-head systems</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Ducted whole-home</td>
                  <td className="p-3 font-semibold">$2,200 per system</td>
                  <td className="p-3">Central ducted cold-climate ASHP</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Air-to-water heat pump</td>
                  <td className="p-3 font-semibold">Up to $6,000</td>
                  <td className="p-3">Hydronic distribution systems</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">$600</td>
                  <td className="p-3">Instant discount at purchase</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump clothes dryer</td>
                  <td className="p-3 font-semibold">$400</td>
                  <td className="p-3">ENERGY STAR certified models</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Income-eligible households (at or below 80% AMI) can receive additional bonuses from their electric utility — the amount varies significantly by provider. A $1,200 income-eligible voucher is also available through EVT for qualifying low-income households to replace one eligible appliance (refrigerator, freezer, or clothes washer).
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Home Energy Loan — 0% Financing</h3>
          <p className="text-gray-700 leading-relaxed">
            The Home Energy Loan offers <strong>0% interest</strong> for low- and moderate-income households, with loans up to <strong>$40,000</strong> and terms up to 15 years. Standard rates start at 4.99% APR. Lending partners include VSECU, EastRise Credit Union, and Opportunities Credit Union. Work must be done by an Efficiency Excellence Network contractor.
          </p>
        </div>
      </section>

      {/* 7. UTILITY PROGRAMS — white */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Utility Programs — Where You Live Changes the Math</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Vermont&apos;s six major electric utilities offer strikingly different incentive levels. Your utility determines whether you get about $2,200 or as much as $7,950 for the same installation.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Green Mountain Power (GMP) — 75% of Vermont Customers</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            GMP coordinates with Efficiency Vermont and channels rebates through EVT&apos;s streamlined process. Since January 2024, GMP discontinued its separate $400/condenser midstream rebate for ductless systems.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Measure</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                  <th className="text-left p-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Ductless</td>
                  <td className="p-3 font-semibold">$375–$475/head (EVT)</td>
                  <td className="p-3">Applied at purchase</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ducted</td>
                  <td className="p-3 font-semibold">$2,200 (EVT)</td>
                  <td className="p-3">Central ducted CCHP</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">HPWH</td>
                  <td className="p-3 font-semibold">$800 ($200 GMP + $600 EVT)</td>
                  <td className="p-3">Combined stack</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Geothermal</td>
                  <td className="p-3 font-semibold">$2,100/ton ($1,800 GMP + $300 EVT)</td>
                  <td className="p-3">Up to 10 tons</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Income bonus (≤80% AMI)</td>
                  <td className="p-3 font-semibold">$2,200/condenser ($2,000 GMP + $200 EVT)</td>
                  <td className="p-3">Single streamlined form</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Burlington Electric Department (BED) — Highest Rebates in Vermont</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            BED operates its own program, independent from Efficiency Vermont. Burlington residents are <strong>not eligible</strong> for EVT income bonuses but benefit from BED&apos;s significantly more generous standalone rebates (valid through December 31, 2026). All BED rebates are capped at <strong>75% of installed cost</strong>.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">BED Centrally Ducted ASHP — High Performance</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Size</th>
                  <th className="text-left p-3 font-semibold">Contractor POS</th>
                  <th className="text-left p-3 font-semibold">Online Rebate</th>
                  <th className="text-left p-3 font-semibold">Base Total</th>
                  <th className="text-left p-3 font-semibold">With Income Bonus</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">≤2 ton</td>
                  <td className="p-3">$1,000</td>
                  <td className="p-3">$1,350</td>
                  <td className="p-3 font-semibold">$2,350</td>
                  <td className="p-3 font-semibold">$2,850</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">&gt;2–≤4 ton</td>
                  <td className="p-3">$1,500</td>
                  <td className="p-3">$3,950</td>
                  <td className="p-3 font-semibold">$5,450</td>
                  <td className="p-3 font-semibold">$5,950</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">&gt;4 ton</td>
                  <td className="p-3">$2,000</td>
                  <td className="p-3">$5,450</td>
                  <td className="p-3 font-semibold">$7,450</td>
                  <td className="p-3 font-semibold">$7,950</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">BED Ductless Mini-Splits</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            ≤2 tons: <strong>$2,450–$2,550</strong> base (+$400 income bonus). &gt;2 tons: <strong>$2,850–$2,950</strong> base (+$500 income bonus). HPWH: up to <strong>$800</strong> (+$400 income bonus). Air-to-water: up to <strong>$12,000</strong> ($2,000/ton).
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Vermont Electric Cooperative (VEC)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            EVT base rebates apply. VEC adds a <strong>$150/unit</strong> thermal efficiency bill credit if installed in a weatherized building. Income bonus (≤80% AMI): <strong>$1,000</strong> ($800 VPPSA + $200 EVT). Ground-source: up to <strong>$2,100/ton</strong> (up to 10 tons).
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Vermont Gas Systems (VGS)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            VGS serves Chittenden, Franklin, and Addison counties. It does not offer a gas-to-electric conversion rebate. Instead, VGS sells and leases heat pump equipment and incorporates EVT and electric utility rebates into its pricing. VGS positions heat pumps as a hybrid complement to gas systems. VGS offers 0% APR financing for 60 months (up to $15,000) through Green Mountain Credit Union for gas equipment. <strong>Heat pumps purchased through VGS are not eligible for GMP income bonuses.</strong>
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Washington Electric Cooperative &amp; Stowe Electric</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Both participate in Efficiency Vermont programs. WEC offers an Energy Coach service to help members navigate rebates and eliminated transformer upgrade costs for members increasing electricity usage. Stowe Electric recently rejoined VPPSA, making the <strong>$1,000 income bonus</strong> available to income-qualified customers.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="font-semibold text-blue-800 mb-1">Your utility determines your rebate</p>
            <p className="text-sm text-blue-900">The same ducted heat pump installation that gets $2,200 through Efficiency Vermont in most of the state could qualify for $7,450–$7,950 through Burlington Electric. Before budgeting, confirm which electric utility serves your address — it&apos;s the single biggest variable in Vermont&apos;s incentive math.</p>
          </div>
        </div>
      </section>

      {/* 8. (No separate local programs section — covered within utility section) */}

      {/* 9. STACKING — bg-gray-50 */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Programs Stack</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            EVT rebates and utility income bonuses stack automatically through a single streamlined form. Burlington Electric operates separately. The key variable is which utility serves your home.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 150% AMI — GMP Territory (Ducted + HPWH)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>EVT ducted system: $2,200</li>
                <li>GMP + EVT HPWH: $800</li>
                <li>Federal tax credit: $0 (expired)</li>
                <li>HEAR: $0 (on pause)</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$3,000</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">80–150% AMI — GMP Territory (Ducted + HPWH)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>EVT ducted system: $2,200</li>
                <li>GMP + EVT HPWH: $800</li>
                <li>Income bonus not available at this tier for GMP</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$3,000</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">Below 80% AMI — GMP Territory (Ducted + HPWH)</p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>EVT ducted system: $2,200</li>
                <li>GMP income bonus: $2,200/condenser</li>
                <li>GMP + EVT HPWH: $1,000 (income-qualified)</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$5,400</p>
            </div>
          </div>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Scenario</th>
                  <th className="text-left p-3 font-semibold">Ducted System</th>
                  <th className="text-left p-3 font-semibold">+ HPWH</th>
                  <th className="text-left p-3 font-semibold">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">BED customer, above income threshold</td>
                  <td className="p-3">Up to $7,450</td>
                  <td className="p-3">$800</td>
                  <td className="p-3 font-semibold">Up to $8,250</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">BED customer, income-qualified</td>
                  <td className="p-3">Up to $7,950</td>
                  <td className="p-3">$1,200</td>
                  <td className="p-3 font-semibold">Up to $9,150*</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mb-6">
            *BED caps all rebates at 75% of installed cost. Actual amount may be lower than the sum of individual incentives.
          </p>

          <div className="bg-gray-100 rounded-lg p-5">
            <p className="font-semibold text-gray-900 mb-1">What You&apos;ll Actually Pay</p>
            <p className="text-sm text-gray-700">Most Vermont homeowners will see <strong>$2,000–$5,000</strong> in incentives, with higher rebates available only through Burlington Electric or income-qualified programs. On a typical <strong>$12,000–$18,000</strong> ducted cold-climate heat pump installation, expect <strong>$7,000–$16,000 out of pocket</strong> depending on utility territory and income. Without federal tax credits, financing and fuel savings now play a much bigger role in whether a heat pump makes financial sense.</p>
          </div>
        </div>
      </section>

      {/* 10. WEATHERIZATION — white */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Weatherization Assistance</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Vermont&apos;s Weatherization Assistance Program provides free energy efficiency upgrades for income-qualified households. Administered through local Community Action Agencies, WAP covers insulation, air sealing, and heating system improvements. Contact the <a href="https://dcf.vermont.gov/benefits/weatherization" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">VT Department for Children and Families</a> for a county-by-county provider list.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Efficiency Vermont is also offering <strong>up to 90% cash back</strong> on weatherization projects (air sealing and insulation) through limited-time funding available through the end of 2026 or while funding lasts. Weatherizing your home first allows a smaller, less expensive heat pump system.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <p className="font-semibold text-green-800 mb-1">✓ Best Candidates for Vermont Heat Pump Incentives</p>
            <p className="text-sm text-green-900">Burlington Electric customers — access the highest rebates in the state ($7,450–$7,950 for ducted systems). GMP customers at ≤80% AMI — $2,200 income bonus per condenser stacks with EVT base rebate. Homeowners replacing fuel oil or propane (~60% of VT homes) — the fuel cost savings are substantial even without federal credits. Any household that weatherizes first — EVT&apos;s 90% cash back on weatherization means a smaller, cheaper heat pump system.</p>
          </div>
        </div>
      </section>

      {/* 11. CLIMATE — bg-gray-50 */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Climate Context</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            All Vermont incentive programs require ENERGY STAR Cold Climate certification. This isn&apos;t arbitrary — Vermont&apos;s ASHRAE winter design temperatures demand it. Equipment must appear on the NEEP Cold Climate Air Source Heat Pump Qualified Product List.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">City</th>
                  <th className="text-left p-3 font-semibold">IECC Zone</th>
                  <th className="text-left p-3 font-semibold">99.6% Design Temp</th>
                  <th className="text-left p-3 font-semibold">Cold-Climate HP Needed?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Burlington</td>
                  <td className="p-3">6A</td>
                  <td className="p-3">-12°F</td>
                  <td className="p-3 font-semibold">Essential — required for all rebates</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Montpelier</td>
                  <td className="p-3">6A</td>
                  <td className="p-3">-10°F</td>
                  <td className="p-3 font-semibold">Essential</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Brattleboro</td>
                  <td className="p-3">6A</td>
                  <td className="p-3">-5 to -7°F</td>
                  <td className="p-3 font-semibold">Essential</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            About <strong>60% of Vermont homes</strong> still heat with fuel oil or propane — more expensive and volatile than electricity. Heating oil runs roughly <strong>$3.70–$3.96/gallon</strong>, propane about <strong>$3.74–$3.77/gallon</strong>. Electric heating adoption has more than tripled since 2013, with Green Mountain Power alone spurring installation of over 28,000 mini-splits and 2,700 whole-building systems between 2020 and 2024. For more on battery storage and time-of-use strategies, see our <Link href="/battery" className="text-brand-600 hover:underline">home battery guide</Link>.
          </p>
        </div>
      </section>

      {/* 12. HOW TO APPLY — white */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Apply</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-gray-900">Find your electric utility</p>
                <p className="text-sm text-gray-700">GMP, BED, VEC, WEC, Stowe Electric, or another provider. This determines your rebate levels and application path.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900">Choose a participating contractor</p>
                <p className="text-sm text-gray-700">For most utilities, the contractor must be in the Efficiency Excellence Network (EEN). BED has its own approved contractor list.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-900">Confirm cold-climate certification</p>
                <p className="text-sm text-gray-700">Equipment must be ENERGY STAR Cold Climate certified and on the <a href="https://ashp.neep.org" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">NEEP Qualified Product List</a>.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <p className="font-semibold text-gray-900">Rebate applied at purchase</p>
                <p className="text-sm text-gray-700">Most EVT and utility rebates are instant point-of-sale discounts — your contractor applies them automatically. Income-qualified households file the single streamlined income bonus form (GMP) or verify eligibility with BED/VEC directly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. WHAT TO WATCH — bg-gray-50 */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Watch</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">IRA Funding Runway</p>
              <p className="text-sm text-gray-600 mt-1">Vermont&apos;s $58.5 million in HEAR/HOMES funding is authorized through September 2031 but could be affected by future federal budget actions. If the freeze lifts, HEAR could add up to $8,000/household for heat pumps.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">New England Heat Pump Accelerator</p>
              <p className="text-sm text-gray-600 mt-1">A $450 million group-purchasing program across VT, MA, CT, RI, ME, and NH launched in early 2026. This may reduce installed costs but details are still emerging.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Clean Heat Standard Is Dead</p>
              <p className="text-sm text-gray-600 mt-1">The PUC officially closed the case in February 2026. Vermont&apos;s legally binding emissions targets remain but no replacement policy has been proposed.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">EVT Weatherization Funding</p>
              <p className="text-sm text-gray-600 mt-1">The 90% cash back on weatherization is limited-time funding through end of 2026 or while funding lasts. If you&apos;re planning a heat pump project, weatherize first while this enhanced incentive is available.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 14. FAQ — white */}
      <section className="py-12">
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

      {/* 15. SEE ALSO — bg-gray-50 */}
      <section className="py-8 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-3">See also</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/heat-pumps/states/nh" className="text-brand-600 hover:underline">
                New Hampshire Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/me" className="text-brand-600 hover:underline">
                Maine Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/ma" className="text-brand-600 hover:underline">
                Massachusetts Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/ny" className="text-brand-600 hover:underline">
                New York Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li>
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                Federal Heat Pump Tax Credits Ended
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

      {/* 16. SOURCES — white */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="space-y-2 text-sm">
            {vtIncentive.sources.map((source: { label: string; url: string }, index: number) => (
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
              <strong>Disclaimer:</strong> This page covers the main statewide, utility, and IRA heat pump incentives available to Vermont homeowners in 2026. It does not calculate savings, guarantee eligibility, or represent any incentive program. Vermont&apos;s HEAR program is on pause and HOMES has not officially launched — rebate amounts shown for those programs are based on the federal framework and VT DPS guidance. Burlington Electric rebates are capped at 75% of installed cost. We verify status regularly but programs can change without notice. Always confirm current amounts and eligibility with Efficiency Vermont, your utility, and your contractor before making decisions.
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
