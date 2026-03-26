import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Rhode Island Heat Pump Rebates 2026: Up to $11,500 + Clean Heat RI & RI Energy | Home Energy Basics",
  description:
    "Clean Heat RI covers up to 60% of heat pump costs (max $11,500). RI Energy adds $400\u2013$1,250/ton. Federal credits ended. Here\u2019s every Rhode Island incentive in 2026.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/ri",
  },
  openGraph: {
    title: "Rhode Island Heat Pump Rebates 2026",
    description:
      "Clean Heat RI up to $11,500, RI Energy $400\u2013$1,250/ton, HEAR electrical upgrades \u2014 the complete guide to Rhode Island heat pump incentives after federal credits expired.",
    url: "https://homeenergybasics.com/heat-pumps/states/ri",
    type: "article",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What heat pump rebates are available in Rhode Island in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Clean Heat RI covers up to 60% of heat pump installation costs, capped at $11,500 per address. The original $25 million ARPA market-rate funding is exhausted, but a new $10 million RGGI-funded round launched in July 2025 prioritizing moderate- and low-income households. Rhode Island Energy adds $150\u2013$400 per ton in utility rebates ($1,250/ton for electric resistance replacement). Heat pump water heaters qualify for $2,500 from Clean Heat RI plus $600 from RI Energy. Federal tax credits expired December 31, 2025. The HEAR program covers electrical upgrades but not heat pump HVAC systems in Rhode Island.",
      },
    },
    {
      "@type": "Question",
      name: "Can I stack Clean Heat RI with RI Energy utility rebates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Clean Heat RI and RI Energy utility rebates stack cleanly \u2014 Clean Heat RI\u2019s own website lists utility rebates as additional incentives. HEAR also stacks with both, and since HEAR covers electrical work (not heat pumps), there is no overlap. Total incentives cannot exceed project cost.",
      },
    },
    {
      "@type": "Question",
      name: "Does HEAR cover heat pump installations in Rhode Island?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Rhode Island strategically excluded heat pump HVAC systems and heat pump water heaters from its HEAR program because those are already covered by Clean Heat RI. Rhode Island\u2019s HEAR program covers enabling electrical work: panel upgrades (up to $4,000), wiring (up to $2,500), and ENERGY STAR appliances like stoves and dryers. Some commercial sources incorrectly cite \u201cHEAR: up to $8,000 for heat pumps\u201d \u2014 that is the federal statutory maximum, not what RI\u2019s actual program covers.",
      },
    },
    {
      "@type": "Question",
      name: "When does Clean Heat RI expire?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The original $25 million ARPA funding must be spent by December 31, 2026. Market-rate residential funding from that pool is already exhausted. The new $10 million RGGI-funded round launched July 2025 and prioritizes moderate- and low-income households. Once all funds are exhausted, there is no guaranteed replacement \u2014 though RI Senate Bill S2654 (introduced February 2026) proposes a Clean Heat Standard that could create a successor program.",
      },
    },
    {
      "@type": "Question",
      name: "Do heat pumps work in Rhode Island winters?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Rhode Island falls entirely in ASHRAE Climate Zone 5A with design temperatures ranging from 5\u00b0F inland (Woonsocket) to 10\u00b0F along the coast (Newport). Modern cold-climate heat pumps operate efficiently down to -13\u00b0F to -15\u00b0F, providing a 15\u201325\u00b0F safety margin. Most homes do not require backup heating in typical conditions. Clean Heat RI requires ENERGY STAR 6.1 Cold Climate certified equipment.",
      },
    },
    {
      "@type": "Question",
      name: "Who administers Rhode Island\u2019s heat pump programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Clean Heat RI is administered by the RI Office of Energy Resources and operated by Abode Energy Management. RI Energy (formerly National Grid RI) administers utility rebates and the 0% HEAT Loan. HEAR is administered by RI OER. Block Island Power Company and Clear River Electric offer separate smaller rebate programs for their service areas.",
      },
    },
  ],
};

export default function RhodeIslandPage() {
  const riIncentive = incentives.RI;
  const formattedDate = formatDate(riIncentive.lastVerified);

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
            {" "}/ Rhode Island
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Rhode Island Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Clean Heat RI &mdash; covering up to 60% of heat pump costs (max <strong>$11,500</strong>) &mdash; is the main incentive for Rhode Island homeowners in 2026. The original $25 million ARPA funding is largely spent, but a new <strong>$10 million</strong> RGGI-funded round launched in July 2025 for moderate- and low-income households. RI Energy utility rebates add <strong>$400&ndash;$1,250 per ton</strong> and stack cleanly. Total realistic incentives land between <strong>$10,000 and $13,300</strong> for standard-income homeowners, and low-income households can qualify for <strong>$0 out-of-pocket</strong> projects. This guide covers all major Rhode Island heat pump incentives available in 2026, including Clean Heat RI, RI Energy, HEAR, Block Island Power, and financing programs. Here&apos;s what&apos;s actually available.
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
          <StatusCard incentive={riIncentive} />
        </div>
      </section>

      {/* 3. SHORT VERSION */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The short version</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">&#10003; Clean Heat RI: up to $11,500</p>
              <p className="text-sm text-green-900">60% of system + installation cost. Income-eligible: 100% up to $18,000. Original ARPA market-rate funding exhausted &mdash; new $10M RGGI round active for moderate/low-income. ARPA deadline: Dec 31, 2026.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">&#10003; RI Energy utility rebates</p>
              <p className="text-sm text-green-900">$150&ndash;$400/ton standard (fossil fuel replacement). $1,250/ton for electric resistance replacement. HPWH: $600. Ratepayer-funded, unaffected by federal changes.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">&#10003; Potential savings: $1,200 to $18,000+</p>
              <p className="text-sm text-green-900">$1,200 (RI Energy only, above 150% AMI if Clean Heat RI exhausted) to $18,000+ (below 150% SMI, income-eligible Clean Heat RI + HEAR electrical upgrades). Full electrification projects can reach $0 out-of-pocket for low-income households.</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">&#10007; Federal tax credits expired</p>
              <p className="text-sm text-red-900">Section 25C ($2,000/year for heat pumps) and Section 25D (30% for geothermal) both ended December 31, 2025. Equipment installed in 2026 does not qualify even if purchased in 2025.</p>
            </div>
            <div className="md:col-span-2 bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="font-semibold text-amber-800 mb-1">&#9888; HEAR does not cover heat pumps in Rhode Island</p>
              <p className="text-sm text-amber-900">Rhode Island strategically excluded heat pump HVAC systems from its HEAR program because Clean Heat RI already covers them. RI&apos;s HEAR covers electrical panel upgrades, wiring, stoves, and dryers only. If someone tells you HEAR covers $8,000 for a heat pump in Rhode Island, that&apos;s the federal statutory maximum &mdash; not what RI&apos;s actual program covers.</p>
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
              <strong>Section 25C</strong> (Energy Efficient Home Improvement Credit) and <strong>Section 25D</strong> (Residential Clean Energy Credit) both terminated for any property placed in service after December 31, 2025. The One Big Beautiful Bill Act (OBBBA), signed July 4, 2025, accelerated the sunset of both credits. Equipment installed in 2026 does not qualify &mdash; even if purchased in 2025. For more details, see our{" "}
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

      {/* 5. CLEAN HEAT RI / PRIMARY */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Clean Heat RI &mdash; the main incentive</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Administered by the Rhode Island Office of Energy Resources and operated by Abode Energy Management, Clean Heat RI was originally funded with <strong>$25 million</strong> from ARPA. The market-rate residential program exhausted its initial ARPA funding by early 2025 after issuing over 3,900 residential rebates. In July 2025, Governor McKee announced a <strong>new $10 million round</strong> using RGGI (Regional Greenhouse Gas Initiative) proceeds, prioritizing moderate- and low-income households. All ARPA funds must be spent by December 31, 2026.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Standard residential (all income levels)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Must be displacing natural gas, propane, or oil heating. Electric resistance customers should use RI Energy&apos;s enhanced rebate instead.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Incentive</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Air-source heat pump</td>
                  <td className="p-3 font-semibold">60% of system + installation cost, up to $11,500 per address</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ground-source (geothermal) heat pump</td>
                  <td className="p-3 font-semibold">60% of cost, up to $11,500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">$2,500 flat per system</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Lifetime cap per address</td>
                  <td className="p-3 font-semibold">$18,000 (includes all past Clean Heat RI incentives)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Income-eligible (&#8804;150% State Median Income)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Covers <strong>100% of project cost, up to $18,000</strong> per address &mdash; including electrical service upgrades. Income limit for a family of four: $178,500. This tier currently has a waitlist. The rebate is applied at point of sale &mdash; the contractor deducts it directly from your invoice.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Equipment requirements</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Equipment must meet <strong>ENERGY STAR 6.1 Cold Climate</strong> criteria and appear on the NEEP Qualified Products List. Heat pump water heaters need <strong>UEF &#8805;3.30</strong> (240V) or <strong>UEF &#8805;2.20</strong> (120V/split). Installation must use a contractor from the Clean Heat RI Heat Pump Installer Network (HPIN). The home must be sufficiently weatherized.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="font-semibold text-amber-800 mb-1">&#9888; Common mistake: assuming market-rate funding is still available</p>
            <p className="text-sm text-amber-900">The original ARPA market-rate residential program exhausted its funding by early 2025. The new $10M RGGI round prioritizes moderate- and low-income households. Check cleanheatri.com for current funding availability before planning your project. Income-eligible applications remain active.</p>
          </div>
        </div>
      </section>

      {/* 6. HEAR / SECONDARY */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">HEAR program &mdash; electrical upgrades only</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Rhode Island was the first New England state to launch the HEAR low-income pathway (September 2024), using <strong>$31.8 million</strong> in federal IRA funding. However, <strong>Rhode Island strategically excluded heat pump HVAC systems and heat pump water heaters</strong> from HEAR because those are already covered by Clean Heat RI. HEAR covers enabling infrastructure and appliances only:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Item</th>
                  <th className="text-left p-3 font-semibold">Low-income (&#8804;80% AMI)</th>
                  <th className="text-left p-3 font-semibold">Moderate (80&ndash;150% AMI)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Electrical panel upgrade</td>
                  <td className="p-3 font-semibold">Up to $4,000</td>
                  <td className="p-3">Up to $2,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Electrical wiring</td>
                  <td className="p-3 font-semibold">Up to $2,500</td>
                  <td className="p-3">Up to $1,250</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">ENERGY STAR electric stove/induction</td>
                  <td className="p-3">Up to $840</td>
                  <td className="p-3">Up to $420</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">ENERGY STAR HP clothes dryer</td>
                  <td className="p-3">Up to $840</td>
                  <td className="p-3">Up to $420</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed">
            The moderate-income pathway (80&ndash;150% AMI) remains under development. Contact: Energy.HEAR@energy.ri.gov.
          </p>
        </div>
      </section>

      {/* 7. RI ENERGY UTILITY REBATES */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Rhode Island Energy &mdash; utility rebates</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Rhode Island Energy (formerly National Grid RI) serves roughly 97% of RI electric customers. These are ratepayer-funded and unaffected by the federal credit expiration.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Standard rebates (replacing oil, gas, or propane)</h3>
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
                  <td className="p-3">Ducted central / ducted mini-split</td>
                  <td className="p-3 font-semibold">Up to $400/ton</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ductless mini-split</td>
                  <td className="p-3 font-semibold">$150&ndash;$200/ton</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">Up to $600</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">ENERGY STAR smart thermostat</td>
                  <td className="p-3">$75 each</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Enhanced rebates (replacing electric resistance)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you&apos;re replacing electric resistance heating (baseboard, wall heaters), RI Energy offers <strong>$1,250 per ton</strong> &mdash; significantly higher than the standard rate. For a 3-ton system, that&apos;s <strong>$3,750</strong>.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Requirements:</strong> Must complete a free EnergyWise Home Energy Assessment (call 888-633-7947). Home must be insulated and weatherized per EnergyWise recommendations. Ductless units must appear on the NEEP cold-climate list with COP &gt;1.75 at 5&#176;F. Limit: 4 heat pump rebates per account. Submit documentation within 90 days.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Block Island Power Company and Clear River Electric</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Block Island Power:</strong> $250/ton (ducted), $150/ton (ductless), up to $300 for HPWHs. Annual cap: $750 per customer. Block Island has the highest electricity rates in RI (~$0.35/kWh).
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Clear River Electric</strong> (Pascoag/Burrillville): $350/ton (fossil fuel switch) or $700/ton (electric resistance switch), plus up to $450 for HPWHs.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mt-6">
            <p className="font-semibold text-blue-800 mb-1">Rhode Island&apos;s unique HEAR strategy</p>
            <p className="text-sm text-blue-900">By excluding heat pumps from HEAR and covering them through Clean Heat RI instead, Rhode Island avoided overlap between state and federal programs. This means HEAR funds stretch further on electrical upgrades that enable heat pump adoption &mdash; panel upgrades and wiring that would otherwise be out-of-pocket costs. It&apos;s a smart design, but it confuses homeowners who see &quot;HEAR: $8,000 for heat pumps&quot; cited elsewhere. That figure doesn&apos;t apply in RI.</p>
          </div>
        </div>
      </section>

      {/* 8. FINANCING */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Financing options</h2>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">RI Energy 0% HEAT Loan</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Up to <strong>$25,000 at 0% APR for up to 7 years</strong>. Requires a free EnergyWise assessment. Lending partner: BankFive. One of the most generous energy efficiency loan programs in New England.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Capital Good Fund DoubleGreen Loan</h3>
          <p className="text-gray-700 leading-relaxed">
            $500&ndash;$25,000 at <strong>0% APR</strong> for 24&ndash;84 months. No closing fee or down payment. Household income must be &#8804;$140,000. Providence-based CDFI. Contact: loans@goodfund.us or 866-584-3651.
          </p>
        </div>
      </section>

      {/* 9. STACKING */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How programs stack in Rhode Island</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Clean Heat RI + RI Energy utility rebates stack cleanly &mdash; Clean Heat RI&apos;s own website lists utility rebates as additional incentives. HEAR also stacks with both, and since HEAR covers electrical work (not heat pumps), there&apos;s no overlap. Total incentives cannot exceed project cost. For a typical 3-ton cold-climate heat pump ($15,000) plus HPWH ($3,500) = <strong>$18,500 total</strong>:
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 150% AMI &mdash; replacing oil ($18,500 total)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Clean Heat RI (60% of $15,000): $9,000</li>
                <li>RI Energy ($400/ton &#215; 3): $1,200</li>
                <li>Clean Heat RI &mdash; HPWH: $2,500</li>
                <li>RI Energy &mdash; HPWH: $600</li>
                <li>Federal 25C: $0 (expired)</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$13,300 (you pay ~$5,200)</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">80&ndash;150% AMI &mdash; replacing oil ($18,500 total)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Clean Heat RI (new RGGI round, moderate-income): up to $11,500</li>
                <li>RI Energy ($400/ton &#215; 3): $1,200</li>
                <li>HEAR &mdash; panel upgrade: up to $2,000</li>
                <li>Clean Heat RI &mdash; HPWH: $2,500</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$15,200+</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">Below 80% AMI &mdash; replacing oil + electrical upgrades ($23,500 total)</p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>Clean Heat RI income-eligible (100%, up to $18,000): $18,000</li>
                <li>HEAR &mdash; panel upgrade: $4,000</li>
                <li>HEAR &mdash; wiring: $2,500</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: $0 out of pocket</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-5 mb-6">
            <p className="font-semibold text-gray-900 mb-1">What you&apos;ll actually pay</p>
            <p className="text-sm text-gray-700">Standard-income homeowners replacing oil or propane typically pay <strong>$5,000&ndash;$8,000 out of pocket</strong> after stacking Clean Heat RI + RI Energy on a full heat pump + HPWH project. Low-income households (&#8804;80% AMI) have a clear path to <strong>$0 out-of-pocket</strong> through Clean Heat RI income-eligible + HEAR electrical upgrades. If Clean Heat RI funding is exhausted, RI Energy utility rebates alone cover <strong>$1,200&ndash;$3,750</strong> on a typical 3-ton system.</p>
          </div>

          <p className="text-xs text-gray-400">
            Rhode Island has no state tax credit for heat pumps. The stacking scenarios above do not include potential manufacturer rebates or 0% HEAT Loan financing savings.
          </p>
        </div>
      </section>

      {/* 10. WEATHERIZATION */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Rhode Island weatherization assistance</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            RI Energy&apos;s <strong>EnergyWise program</strong> provides free home energy assessments and covers insulation, air sealing, and weatherization improvements &mdash; often at no cost. This is required before both Clean Heat RI and RI Energy heat pump rebates to ensure the home is properly prepared.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Low-income households (&#8804;60% SMI) can access additional <strong>free weatherization services</strong> through Rhode Island&apos;s Weatherization Assistance Program, administered by local Community Action agencies. Call 888-633-7947 to schedule an EnergyWise assessment, or contact your local CAP agency for WAP assistance.
          </p>
        </div>
      </section>

      {/* 11. CLIMATE */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Rhode Island climate and heat pump performance</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Rhode Island falls entirely in <strong>ASHRAE Climate Zone 5A</strong> (Cold, Humid). Design temperatures range from about 5&#176;F inland to 10&#176;F along the coast. Modern cold-climate heat pumps operate down to -13&#176;F to -15&#176;F &mdash; providing a 15&ndash;25&#176;F safety margin.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Location</th>
                  <th className="text-left p-3 font-semibold">ASHRAE 99.6% design temp</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Providence</td>
                  <td className="p-3 font-semibold">7&#176;F</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Woonsocket (inland)</td>
                  <td className="p-3 font-semibold">~5&#176;F</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Newport (coast)</td>
                  <td className="p-3 font-semibold">~10&#176;F</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            About 24% of RI households still heat with oil &mdash; well above the national average of roughly 4%. At $4&ndash;5+/gallon, heating oil is significantly more expensive per BTU than a cold-climate heat pump, even at RI&apos;s high electricity rates (~29&ndash;31&#162;/kWh). Gas-heated homes are more borderline &mdash; heat pumps cost roughly the same per BTU to operate, so the payback depends more on equipment age and AC needs.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Rhode Island homeowners considering a heat pump paired with battery storage can review our{" "}
            <Link href="/battery" className="text-brand-600 hover:underline">guide to home batteries</Link>
            {" "}for current economics and incentive details.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <p className="font-semibold text-green-800 mb-1">&#10003; Best candidates for a heat pump in Rhode Island</p>
            <p className="text-sm text-green-900">Oil and propane households &mdash; fuel cost savings alone can justify the switch even at RI&apos;s high electricity rates. Income-eligible households (&#8804;150% SMI) who can access 100% coverage through Clean Heat RI. Electric resistance heating users who qualify for RI Energy&apos;s enhanced $1,250/ton rebate. Homeowners needing both heating and cooling &mdash; heat pumps replace both systems at once. Anyone who acts while Clean Heat RI funding remains available.</p>
          </div>
        </div>
      </section>

      {/* 12. HOW TO APPLY */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to apply for Rhode Island incentives</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Rhode Island&apos;s programs are well-coordinated &mdash; a single contractor can often handle both Clean Heat RI and RI Energy applications.
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <p className="font-semibold text-gray-900">Schedule a free EnergyWise Home Energy Assessment</p>
                <p className="text-sm text-gray-700">Through RI Energy (888-633-7947). Required for both utility rebates and the 0% HEAT Loan.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <p className="font-semibold text-gray-900">Complete recommended weatherization</p>
                <p className="text-sm text-gray-700">Insulation and air sealing may be partially or fully covered by EnergyWise. Your home must be sufficiently weatherized before Clean Heat RI will approve a heat pump rebate.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <p className="font-semibold text-gray-900">Choose a Clean Heat RI HPIN contractor</p>
                <p className="text-sm text-gray-700">Find approved installers at cleanheatri.com/find-an-installer. Using an HPIN contractor is required for Clean Heat RI rebates.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
              <div>
                <p className="font-semibold text-gray-900">Clean Heat RI rebate applied at point of sale</p>
                <p className="text-sm text-gray-700">Your contractor applies the Clean Heat RI rebate directly &mdash; you see the discount on your invoice. No separate application needed for Clean Heat RI.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">5</div>
              <div>
                <p className="font-semibold text-gray-900">Submit RI Energy rebate paperwork</p>
                <p className="text-sm text-gray-700">Within 90 days of installation. Your contractor can often handle this too.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. WHAT TO WATCH */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to watch for in Rhode Island</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">IRA funding runway</p>
              <p className="text-sm text-gray-600 mt-1">IRA funding for HEAR remains authorized through September 30, 2031 or until depleted. The OBBBA did not terminate these programs. Rhode Island&apos;s HEAR allocation is secure.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Clean Heat RI funding depletion</p>
              <p className="text-sm text-gray-600 mt-1">The original $25M ARPA market-rate funding is already exhausted. The new $10M RGGI round prioritizes income-qualified households. Once all funds are spent, the program ends with no guaranteed replacement. Act while funding lasts.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">HOMES program</p>
              <p className="text-sm text-gray-600 mt-1">RI submitted its application to DOE, but launch has not been confirmed. If approved, it could add $2,000&ndash;$8,000 for whole-home energy improvements depending on income.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Clean Heat Standard legislation (S2654)</p>
              <p className="text-sm text-gray-600 mt-1">Introduced February 2026, this bill would establish a tradeable clean heat credits system that could create a permanent successor to the time-limited Clean Heat RI program. Still in committee.</p>
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
              <Link href="/heat-pumps/states/ma" className="text-brand-600 hover:underline">
                Massachusetts Heat Pump Rebates 2026
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/ct" className="text-brand-600 hover:underline">
                Connecticut Heat Pump Rebates 2026
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/nh" className="text-brand-600 hover:underline">
                New Hampshire Heat Pump Rebates 2026
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

      {/* 16. SOURCES */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="space-y-2 text-sm">
            {riIncentive.sources.map((source: { label: string; url: string }, index: number) => (
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
              <strong>Disclaimer:</strong> This page covers the main statewide, utility, and IRA heat pump incentives available to Rhode Island homeowners in 2026. It does not calculate savings, guarantee eligibility, or represent any incentive program. Clean Heat RI funding availability changes frequently &mdash; check cleanheatri.com for current status before planning. We verify status regularly but programs can change without notice. Always confirm current amounts and eligibility with the RI Office of Energy Resources, Rhode Island Energy, and your contractor before making decisions.
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
