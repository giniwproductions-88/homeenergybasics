import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Texas Heat Pump Rebates 2026: $0\u2013$3,000+ Utility + $690M HEAR Pending | Home Energy Basics",
  description:
    "TX has no statewide program. Austin Energy offers ~$3,000. Oncor and CenterPoint offer hundreds. $690M HEAR pending. Federal credits ended. Here\u2019s every Texas incentive in 2026.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/tx",
  },
  openGraph: {
    title: "Texas Heat Pump Rebates 2026",
    description:
      "Utility-by-utility heat pump rebate guide for Texas \u2014 Austin Energy, Oncor, CenterPoint, CPS Energy plus $690M HEAR pending after federal credits expired.",
    url: "https://homeenergybasics.com/heat-pumps/states/tx",
    type: "article",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What heat pump rebates are available in Texas in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Texas has no statewide heat pump rebate program. Rebates come from your local utility. Austin Energy offers approximately $3,000 for whole-home projects plus 0% APR financing. Oncor provides performance-based incentives through approved contractors. CenterPoint offers up to $500 per unit. CPS Energy pays $90\u2013$310 per ton. Federal Section 25C and 25D tax credits expired December 31, 2025. Texas has no state income tax, so no state-level credits are possible.",
      },
    },
    {
      "@type": "Question",
      name: "Can I stack utility rebates with HEAR in Texas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When SECO launches the HEAR program, utility rebates should be stackable with federal HEAR rebates. Total combined incentives cannot exceed total project cost. Currently, only utility rebates are available. Austin Energy customers have the strongest stacking opportunity today with ~$3,000 in rebates plus 0% financing.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a TDU and a REP in Texas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In Texas\u2019s deregulated electricity market, your TDU (Transmission and Distribution Utility) owns the power lines and administers energy efficiency rebate programs. Your REP (Retail Electric Provider) sells you electricity. Your TDU is determined by your address and cannot be changed. Switching REPs does not affect your rebate eligibility. Major TDUs: Oncor (DFW), CenterPoint (Houston), AEP Texas (South TX), TNMP (select areas).",
      },
    },
    {
      "@type": "Question",
      name: "What happened to the $690 million in IRA rebates for Texas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Texas was allocated $690 million in federal HOMES and HEAR rebate funding through the Inflation Reduction Act \u2014 the largest allocation in the country. The State Energy Conservation Office (SECO) is still in the procurement process for a program implementer and has not launched either program. SECO warns there are no approved contractors yet. When launched, income-qualified households could receive up to $8,000 for heat pump installations.",
      },
    },
    {
      "@type": "Question",
      name: "Which Texas utility offers the best heat pump rebate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Austin Energy offers the most generous rebates in Texas, with whole-home heat pump projects averaging $3,000 in rebates plus 0% APR financing through Velocity Credit Union. CPS Energy in San Antonio offers $90\u2013$310 per ton. In the deregulated market, Oncor provides performance-based incentives that can reach $2,000\u2013$3,400 for large, high-efficiency installations.",
      },
    },
    {
      "@type": "Question",
      name: "What SEER2 rating should I get for a heat pump in Texas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The DOE minimum for Texas is SEER2 14.3, but this does not qualify for most utility rebates. SEER2 16+ is recommended for Texas\u2019s cooling-dominant climate. Variable-speed compressors are important for humidity control, especially in Houston and the Gulf Coast. Higher-efficiency systems also qualify for larger utility rebates.",
      },
    },
  ],
};

export default function TexasPage() {
  const txIncentive = incentives.TX;
  const formattedDate = formatDate(txIncentive.lastVerified);

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
            {" "}/ Texas
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Texas Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Texas has no statewide heat pump program and no state income tax. Your rebate depends entirely on which utility serves your home. Austin Energy offers approximately <strong>$3,000</strong> for whole-home projects with 0% financing. In the deregulated market, Oncor provides performance-based incentives and CenterPoint offers up to <strong>$500</strong>. The state&apos;s <strong>$690 million</strong> IRA allocation &mdash; the largest in the country &mdash; has not launched. This guide covers all major Texas heat pump incentives available in 2026, including Austin Energy, Oncor, CenterPoint, CPS Energy, AEP Texas, CoServ, and the pending HEAR/HOMES programs. Here&apos;s what&apos;s actually available.
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
          <StatusCard incentive={txIncentive} />
        </div>
      </section>

      {/* 3. SHORT VERSION */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The short version</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">&#10003; Austin Energy: ~$3,000 + 0% financing</p>
              <p className="text-sm text-green-900">Whole-home projects average $3,000 in rebates. Heat pump rebates $1,000&ndash;$1,600 by tier, plus duct sealing, insulation, and solar screen add-ons. 0% APR loans up to $25,000 through September 2026.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">&#10003; Deregulated TDU rebates: $300&ndash;$3,400</p>
              <p className="text-sm text-green-900">Oncor: performance-based, potentially $2,000&ndash;$3,400 for large high-efficiency systems. CenterPoint: up to $500/unit. CPS Energy: $90&ndash;$310/ton. AEP Texas: contractor-channel only.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">&#10003; Potential savings: $0 to $11,000+</p>
              <p className="text-sm text-green-900">$0 (CoServ/NorthWestern territory) to $11,000+ (below 80% AMI, Austin Energy + HEAR when launched). Full electrification packages can reach ~$14,000 total for income-qualified households.</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">&#10007; Federal tax credits expired + no state credits</p>
              <p className="text-sm text-red-900">Section 25C and 25D both ended December 31, 2025. Texas has no state income tax, so no state tax credits for heat pumps are possible. Your utility is your only incentive source.</p>
            </div>
            <div className="md:col-span-2 bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="font-semibold text-amber-800 mb-1">&#9888; $690M in IRA rebates allocated but not launched</p>
              <p className="text-sm text-amber-900">Texas received the largest IRA rebate allocation in the country &mdash; $690 million for HOMES and HEAR &mdash; and has distributed none of it. SECO is still in procurement for a program implementer. There are no approved contractors. Do not sign contracts based on HEAR rebate amounts until the program officially opens.</p>
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
              <strong>Section 25C</strong> (Energy Efficient Home Improvement Credit) and <strong>Section 25D</strong> (Residential Clean Energy Credit) both terminated for any property placed in service after December 31, 2025. The One Big Beautiful Bill Act (OBBBA) accelerated the sunset of both credits. Texas has <strong>no state income tax</strong>, so no state-level tax credits for heat pumps are possible regardless of federal policy. For more details, see our{" "}
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                federal heat pump tax credit explainer
              </Link>.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Equipment purchased in 2025 but installed in 2026 does not qualify &mdash; the &quot;placed in service&quot; date is the controlling event. Homeowners who completed installations by December 31, 2025 can still claim credits on their 2025 tax return using IRS Form 5695.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The OBBBA did <strong>not</strong> repeal the IRA&apos;s HOMES and HEAR rebate programs. These are separately appropriated federal funds, not tax-code provisions. They survive &mdash; but Texas has not launched them yet.
          </p>
        </div>
      </section>

      {/* 5. HEAR/HOMES — pending */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">$690 million in IRA rebates: allocated but not launched</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Texas was allocated <strong>$690 million</strong> in federal HOMES (~$346M) and HEAR (~$344M) rebate funding &mdash; the largest allocation in the country. The State Energy Conservation Office (SECO) published an RFP for a program implementer with responses due July 30, 2025. A separate monitoring RFP was issued in early 2026. As of March 2026, <strong>the program has not launched and there are no approved contractors</strong>.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">HEAR rebate amounts (when launched)</h3>
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

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-amber-800 mb-1">&#9888; Common mistake: signing contracts based on HEAR amounts</p>
            <p className="text-sm text-amber-900">SECO explicitly warns: &quot;We strongly advise against entering into any agreements associated with the HOMES and HEAR rebate programs until they are formally launched and a list of approved contractors is made available.&quot; Installations before program launch are not eligible.</p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="font-semibold text-blue-800 mb-1">Texas received the largest IRA allocation and has distributed none of it</p>
            <p className="text-sm text-blue-900">At $690 million, Texas&apos;s HOMES/HEAR allocation dwarfs every other state. New York ($318M), California ($290M), and Pennsylvania ($259M) have all made more progress toward launch. The gap between funding allocated and funding deployed is larger in Texas than anywhere else &mdash; meaning the eventual launch will represent the single biggest shift in heat pump economics for any state.</p>
          </div>
        </div>
      </section>

      {/* 6. TDU/REP EXPLANATION */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Texas is different: TDU vs. REP</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Most of Texas operates in a deregulated electricity market. Your <strong>TDU</strong> (Transmission &amp; Distribution Utility) owns the power lines and administers energy efficiency rebate programs. Your <strong>REP</strong> (Retail Electric Provider) sells you electricity. Your TDU is determined by your address and <strong>cannot be changed</strong>. Switching REPs does not affect your rebate eligibility. Some areas are regulated &mdash; Austin (Austin Energy) and San Antonio (CPS Energy) handle everything.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Utility / TDU</th>
                  <th className="text-left p-3 font-semibold">Service area</th>
                  <th className="text-left p-3 font-semibold">Heat pump rebate range</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3 font-semibold">Austin Energy</td>
                  <td className="p-3">Austin metro (regulated)</td>
                  <td className="p-3 font-semibold">~$3,000 whole-home + 0% financing</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">Oncor</td>
                  <td className="p-3">DFW, Lubbock, Waco, Tyler (deregulated TDU)</td>
                  <td className="p-3 font-semibold">Performance-based, up to $2,000&ndash;$3,400</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">CPS Energy</td>
                  <td className="p-3">San Antonio, Bexar County (regulated)</td>
                  <td className="p-3 font-semibold">$90&ndash;$310/ton ($360&ndash;$1,240 typical)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">CenterPoint</td>
                  <td className="p-3">Houston, Galveston, Beaumont (deregulated TDU)</td>
                  <td className="p-3 font-semibold">Up to $500/unit</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">AEP Texas</td>
                  <td className="p-3">South &amp; West Texas (deregulated TDU)</td>
                  <td className="p-3">Contractor-channel only</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-gray-500">CoServ</td>
                  <td className="p-3">Denton/Collin County</td>
                  <td className="p-3 text-gray-500">No heat pump rebates</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. UTILITY PROGRAMS DETAIL */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Utility programs in detail</h2>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Austin Energy &mdash; best rebates in Texas</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Austin Energy operates the most generous heat pump incentive program in Texas. The <strong>Home Energy Savings</strong> whole-home program averages <strong>~$3,000</strong> in total rebates (heat pump $1,000&ndash;$1,600 by tier, plus duct sealing, insulation, smart thermostats, and solar screens). The standalone AC/heat pump rebate offers <strong>$250&ndash;$425</strong> for single-equipment replacement. Austin Energy also offers <strong>0% APR financing</strong> through Velocity Credit Union ($1,500&ndash;$25,000, up to 10 years) available through September 30, 2026.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Income-qualified customers (&#8804;80% MFI) can access free weatherization plus rebates and 0% financing on heat pump systems through the Customer Assistance Program.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Oncor &mdash; DFW, Lubbock, Waco, Tyler</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Oncor&apos;s Home Energy Efficiency (HEE) Standard Offer Program provides performance-based incentives that vary by system size, efficiency, and calculated energy savings &mdash; potentially <strong>$2,000&ndash;$3,400</strong> for large, high-efficiency installations. Approved contractor required. 2026 cycle runs approximately February through November (first-come, first-served &mdash; funds have historically run out before year-end). ENERGY STAR required, SEER2 16+ recommended. Oncor also offers a Retail Products Program with point-of-sale HPWH discounts up to $500.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">CenterPoint Energy &mdash; Houston metro</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            CenterPoint&apos;s Standard Offer Program provides up to <strong>$500 per qualifying heat pump unit</strong>. ENERGY STAR required. Also offers $75 smart thermostat instant discount and free CoolSaver A/C tune-up. Hard-to-Reach program for households &#8804;200% FPG often covers 100% of costs.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">CPS Energy &mdash; San Antonio</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Tiered per-ton rebates of <strong>$90&ndash;$310 per ton</strong> depending on efficiency and replacement type. For a typical 4-ton system at the highest tier, that&apos;s roughly $1,100 in rebates. TDLR-licensed contractor required. 2026 program dates: February 1, 2026 &ndash; January 31, 2027. Casa Verde Weatherization provides ~$5,000 in free improvements for income-qualified customers.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Other utilities</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>AEP Texas</strong> (South/West TX): contractor-channel incentives only, no simple homeowner-facing rebate. Targeted Low-Income Program available. <strong>TNMP</strong>: tiered rebates, amounts vary. <strong>CoServ</strong> (Denton/Collin): no heat pump rebates. Some co-ops (Tri-County, United Cooperative) offer $150&ndash;$200 with limited funding.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Note about gas utilities:</strong> In the deregulated market, gas utilities like Atmos Energy do not offer electric heat pump rebates. CPS Energy and MLGW are exceptions as dual-service providers.
          </p>
        </div>
      </section>

      {/* 8. STACKING */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How programs stack in Texas</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            With no federal tax credit and no state programs, Texas homeowners currently rely on a single utility rebate plus manufacturer promotions. When HEAR launches, income-qualified households can stack utility + HEAR. Total combined incentives cannot exceed project cost.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 150% AMI &mdash; Austin Energy territory ($14,000 whole-home project)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Austin Energy whole-home rebate: ~$3,000</li>
                <li>HEAR: not eligible</li>
                <li>HOMES (when launched, 20%+ savings): $2,000</li>
                <li>0% APR financing: available now</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$3,000&ndash;$5,000</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">80&ndash;150% AMI &mdash; Oncor territory ($12,000 heat pump)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Oncor HEE incentive: $1,000&ndash;$2,500</li>
                <li>HEAR (when launched, 50% of cost): up to $6,000</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$7,000&ndash;$8,500</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">Below 80% AMI &mdash; Austin Energy territory ($14,000 whole-home)</p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>Austin Energy rebate: ~$3,000</li>
                <li>HEAR (when launched, 100% of cost): up to $8,000</li>
                <li>Austin Energy Weatherization: additional free upgrades</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$11,000+</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-5 mb-6">
            <p className="font-semibold text-gray-900 mb-1">What you&apos;ll actually pay</p>
            <p className="text-sm text-gray-700">A typical Texas heat pump installation costs <strong>$8,000&ndash;$16,000</strong>. Today, Austin Energy customers pay <strong>$5,000&ndash;$11,000</strong> after rebates. Most deregulated-market homeowners pay <strong>$7,500&ndash;$15,500</strong> after a few hundred dollars in TDU incentives. When HEAR launches, income-qualified households below 80% AMI in Austin could see costs drop to <strong>$3,000&ndash;$6,000</strong>. In CoServ or NorthWestern territory with no active utility rebates, expect to pay full price.</p>
          </div>

          <p className="text-xs text-gray-400">
            Texas has no state income tax and no state heat pump incentive program. The stacking scenarios above do not include manufacturer rebates ($150&ndash;$1,665 seasonal, varies by brand).
          </p>
        </div>
      </section>

      {/* 9. WEATHERIZATION */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Weatherization and income-qualified programs</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Texas operates a statewide Weatherization Assistance Program (WAP) through the Texas Department of Housing and Community Affairs (TDHCA) for households at or below 200% of the federal poverty level. WAP provides <strong>free</strong> whole-house energy improvements &mdash; including HVAC replacement &mdash; at no cost. Contact your local subrecipient agency, call 877-541-7905, or dial 2-1-1.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Comprehensive Energy Assistance Program (CEAP) provides utility bill payment assistance, emergency energy crisis services, and equipment for households at or below 150% of federal poverty guidelines.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Several utilities run additional low-income programs: Austin Energy Weatherization Assistance, Oncor Low-Income Weatherization, CPS Energy Casa Verde (~$5,000 average), CenterPoint Hard-to-Reach (up to 100% cost coverage), and AEP Texas Targeted Low-Income.
          </p>
        </div>
      </section>

      {/* 10. CLIMATE */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Texas climate and heat pump selection</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Texas is a <strong>cooling-dominant</strong> market &mdash; cooling accounts for 70&ndash;80% of annual HVAC energy use. Your SEER2 rating (cooling efficiency) has 2&ndash;3x more impact on annual energy bills than HSPF2 (heating efficiency). Texas spans IECC Climate Zones 2A through 3B.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">City</th>
                  <th className="text-left p-3 font-semibold">ASHRAE 99% design temp</th>
                  <th className="text-left p-3 font-semibold">Climate zone</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Houston</td>
                  <td className="p-3 font-semibold">29&#176;F</td>
                  <td className="p-3">2A (Hot-Humid)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Dallas</td>
                  <td className="p-3 font-semibold">22&#176;F</td>
                  <td className="p-3">3A (Warm-Humid)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">San Antonio</td>
                  <td className="p-3 font-semibold">27&#176;F</td>
                  <td className="p-3">2A (Hot-Humid)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Austin</td>
                  <td className="p-3 font-semibold">26&#176;F</td>
                  <td className="p-3">2A (Hot-Humid)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">El Paso</td>
                  <td className="p-3 font-semibold">24&#176;F</td>
                  <td className="p-3">3B (Warm-Dry)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            The DOE minimum for Texas is SEER2 14.3, but that <strong>does not qualify for most utility rebates</strong>. Most programs require ENERGY STAR (SEER2 15.2+), and top tiers require SEER2 16+. For Houston and the Gulf Coast, <strong>variable-speed compressors are strongly recommended</strong> for humidity control. All installations require a TDLR-licensed HVAC contractor and most cities require mechanical permits.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Pairing a heat pump with a <Link href="/battery" className="text-brand-600 hover:underline">home battery system</Link> can reduce energy costs further, especially for homeowners with solar or on time-of-use rates.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <p className="font-semibold text-green-800 mb-1">&#10003; Best candidates for a heat pump in Texas</p>
            <p className="text-sm text-green-900"><strong>Austin Energy customers</strong> &mdash; highest rebates and 0% financing available today. <strong>Homes with high cooling demand</strong> &mdash; heat pumps excel in Texas&apos;s long cooling season and SEER2 improvements pay back fastest here. <strong>Homeowners upgrading a full HVAC system</strong> &mdash; whole-home programs (Austin, Oncor) offer the best stacking. <strong>Income-qualified households willing to wait for HEAR</strong> &mdash; up to $8,000 when it launches. <strong>Homes replacing electric resistance or aging AC</strong> &mdash; largest efficiency gains regardless of rebate level.</p>
          </div>
        </div>
      </section>

      {/* 11. HOW TO APPLY */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to apply for Texas incentives</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Because there is no statewide program, the process depends entirely on your utility.
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <p className="font-semibold text-gray-900">Identify your utility / TDU</p>
                <p className="text-sm text-gray-700">Check your electric bill. In the deregulated market, your TDU (Oncor, CenterPoint, AEP Texas, TNMP) administers rebates &mdash; not your REP. In Austin or San Antonio, your single utility handles everything.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <p className="font-semibold text-gray-900">Use an approved/participating contractor</p>
                <p className="text-sm text-gray-700">Oncor, CPS Energy, and Austin Energy whole-home programs require approved contractors. The contractor handles the incentive application and passes savings through. Get at least 3 quotes.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <p className="font-semibold text-gray-900">Confirm equipment meets rebate requirements</p>
                <p className="text-sm text-gray-700">ENERGY STAR certified minimum. SEER2 16+ recommended for best rebate value and Texas performance. Variable-speed for Houston/Gulf Coast humidity control.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
              <div>
                <p className="font-semibold text-gray-900">Apply early &mdash; budgets deplete</p>
                <p className="text-sm text-gray-700">Oncor&apos;s HEE program is first-come, first-served and has historically exhausted funds before year-end. Austin Energy applications due within 90 days. CPS Energy within 30 days.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. WHAT TO WATCH */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to watch for in Texas</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">IRA funding runway</p>
              <p className="text-sm text-gray-600 mt-1">Texas&apos;s $690 million HOMES/HEAR allocation is authorized through September 30, 2031 or until depleted. The OBBBA did not rescind these funds. SECO is in active procurement for a program implementer &mdash; no launch date announced.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Oncor budget depletion</p>
              <p className="text-sm text-gray-600 mt-1">Oncor&apos;s HEE program is first-come, first-served and has historically exhausted funds before year-end. Apply early in the calendar year for best chances.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Austin Energy 0% APR window</p>
              <p className="text-sm text-gray-600 mt-1">The Velocity Credit Union 0% financing offer runs through September 30, 2026. After that, terms may change. This is the strongest financing offer in the state.</p>
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
              <Link href="/heat-pumps/states/la" className="text-brand-600 hover:underline">
                Louisiana Heat Pump Rebates 2026
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/nm" className="text-brand-600 hover:underline">
                New Mexico Heat Pump Rebates 2026
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/ok" className="text-brand-600 hover:underline">
                Oklahoma Heat Pump Rebates 2026
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/ar" className="text-brand-600 hover:underline">
                Arkansas Heat Pump Rebates 2026
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
            {txIncentive.sources.map((source: { label: string; url: string }, index: number) => (
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
              <strong>Disclaimer:</strong> This page covers the main utility and IRA-related heat pump incentives available to Texas homeowners in 2026. It does not calculate savings, guarantee eligibility, or represent any incentive program. Texas has no statewide heat pump program &mdash; rebates vary entirely by utility territory and may change without notice. Oncor and CenterPoint incentives are performance-based and amounts shown are estimates. We verify status regularly but programs can change without notice. Always confirm current amounts and eligibility with your utility and your contractor before making decisions.
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
