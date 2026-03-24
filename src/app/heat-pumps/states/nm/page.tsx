import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "New Mexico Heat Pump Rebates 2026: $8,000 HEAR + State Tax Credits | Home Energy Basics",
  description:
    "HEAR offers up to $8,000 for heat pumps (below 80% AMI). PNM rebates cover $550–$700. Federal credits ended. Every NM heat pump incentive in 2026.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/nm",
  },
  openGraph: {
    title: "New Mexico Heat Pump Rebates 2026",
    description:
      "HEAR covers up to $8,000 per heat pump for income-qualifying households — the complete guide to New Mexico heat pump incentives after federal credits expired.",
    url: "https://homeenergybasics.com/heat-pumps/states/nm",
    type: "article",
  },
};

export default function NewMexicoPage() {
  const nmIncentive = incentives.NM;
  const formattedDate = formatDate(nmIncentive.lastVerified);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What heat pump rebates are available in New Mexico in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The largest incentive is the HEAR program, offering up to $8,000 for a heat pump — but currently limited to households below 80% of Area Median Income. Utility rebates from PNM ($550–$700), El Paso Electric ($300–$525), and rural co-ops ($500–$1,500) are available at all income levels. The Sustainable Building Tax Credit adds roughly $500–$1,000. Federal Section 25C and 25D tax credits expired December 31, 2025.",
        },
      },
      {
        "@type": "Question",
        name: "Can I stack HEAR rebates with utility rebates and state tax credits in New Mexico?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. HEAR rebates can be stacked with utility rebates and the Sustainable Building Tax Credit for the same installation. The maximum HEAR amount per household is $14,000 across all measures. HEAR and HOMES rebates cannot be combined for the same measure. A low-income homeowner in PNM territory could realistically stack $8,000 (HEAR) + $550 (PNM) + $1,000 (SBTC) for roughly $9,550 on a heat pump alone.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a cold-climate heat pump in New Mexico?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on where you live. In southern New Mexico (Las Cruces, Roswell), standard heat pumps handle the mild winters. In Albuquerque (5,312 ft elevation), cold-climate models are recommended. In Santa Fe (7,199 ft) and Taos, cold-climate heat pumps are essential — winter design temperatures drop to 0°F or below. High altitude also reduces heat pump capacity by 17–26%, so proper sizing with altitude correction is critical statewide.",
        },
      },
      {
        "@type": "Question",
        name: "Who administers New Mexico&apos;s HEAR program?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The HEAR program is administered by the Energy Conservation and Management Division (ECMD) within the New Mexico Energy, Minerals and Natural Resources Department (EMNRD). Franklin Energy serves as the implementation contractor. Applications are submitted through the state portal at clean.energy.nm.gov before purchasing equipment.",
        },
      },
      {
        "@type": "Question",
        name: "Does New Mexico have a geothermal heat pump tax credit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. New Mexico offers a separate Geothermal Ground-Coupled Heat Pump Tax Credit covering 30% of purchase and installation costs, up to $9,000 maximum. This credit is refundable with a 10-year carryforward and available at all income levels through December 31, 2034. Systems must have COP of 3.4 or higher and be installed by an IGSHPA-accredited installer.",
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
            {" "}/ New Mexico
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            New Mexico heat pump rebates and incentives in 2026
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            New Mexico&apos;s HEAR program covers up to <strong>$8,000</strong> per heat pump for income-qualifying households, but most homeowners above 80% of Area Median Income (AMI) are limited to roughly <strong>$1,000–$1,800</strong> in utility rebates and state tax credits. This guide covers all major New Mexico heat pump incentives available in 2026, including HEAR, PNM and El Paso Electric utility rebates, rural co-op programs, and state tax credits. Here&apos;s what&apos;s actually available.
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
          <StatusCard incentive={nmIncentive} />
        </div>
      </section>

      {/* 3. SHORT VERSION */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The short version</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ HEAR rebates up to $8,000</p>
              <p className="text-sm text-green-900">The Home Electrification and Appliance Rebates program covers up to $8,000 per heat pump. Currently limited to households below 80% AMI. Administered by EMNRD through Franklin Energy.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Utility rebates $300–$1,500</p>
              <p className="text-sm text-green-900">PNM offers $550–$700 for heat pumps and HPWHs. El Paso Electric provides $300–$525. Tri-State rural co-ops offer $500–$1,500. Available at all income levels.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Total potential savings: $1,050–$10,500+</p>
              <p className="text-sm text-green-900">$1,050 (above 80% AMI) to $10,500+ (below 80% AMI). Full electrification packages for low-income homeowners can reach ~$16,000 total incentives through HEAR.</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">✗ Federal tax credits expired</p>
              <p className="text-sm text-red-900">Section 25C ($2,000/year for heat pumps) and Section 25D (30% for geothermal) both ended December 31, 2025. No replacement credits enacted.</p>
            </div>
            <div className="md:col-span-2 bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="font-semibold text-amber-800 mb-1">⚠ HEAR is income-restricted — only below 80% AMI right now</p>
              <p className="text-sm text-amber-900">New Mexico has not yet activated the 80–150% AMI tier for HEAR. Most middle-income homeowners currently qualify only for utility rebates ($550–$700 in PNM territory) and the Sustainable Building Tax Credit (~$500). The HOMES program, which would serve moderate-income homeowners, has not yet launched.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEDERAL EXPIRED */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Federal tax credits are gone</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <p className="text-red-900 leading-relaxed">
              The <strong>One Big Beautiful Bill Act</strong> (signed July 4, 2025) terminated both major residential energy tax credits. <strong>Section 25C</strong> (up to $2,000/year for heat pumps) and <strong>Section 25D</strong> (30% of geothermal heat pump costs) expired for any property placed in service after <strong>December 31, 2025</strong>. A heat pump purchased in 2025 but installed in 2026 does not qualify. Homeowners who completed installations by the deadline can still claim credits on their 2025 returns.{" "}
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                Full details on what changed →
              </Link>
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            For New Mexico homeowners, this means the broadest, most accessible incentive layer is gone. The remaining programs — HEAR (income-restricted), utility rebates, and state tax credits — do not fully replace the federal credits for middle- and upper-income households.
          </p>
        </div>
      </section>

      {/* 5. HEAR / PRIMARY */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Home Electrification and Appliance Rebates (HEAR)</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            New Mexico&apos;s HEAR program is the single largest heat pump incentive in the state. Administered by the Energy Conservation and Management Division (ECMD) within the Energy, Minerals and Natural Resources Department (EMNRD), with <strong>Franklin Energy</strong> as the implementation contractor, HEAR launched September 3, 2024 and remains open. Total state allocation: <strong>$43 million</strong> in DOE funding. The program was funded under the IRA and was not repealed by the One Big Beautiful Bill Act — it continues until funds are exhausted.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">HEAR rebate amounts</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Measure</th>
                  <th className="text-left p-3 font-semibold">Maximum rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Air-source heat pump (ducted or mini-split)</td>
                  <td className="p-3 font-semibold">$8,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater (ENERGY STAR)</td>
                  <td className="p-3 font-semibold">$1,750</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Electric service panel upgrade</td>
                  <td className="p-3 font-semibold">$4,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Electric wiring</td>
                  <td className="p-3 font-semibold">$2,500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Insulation (wall/ceiling/attic/floor)</td>
                  <td className="p-3 font-semibold">$1,600</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Air sealing</td>
                  <td className="p-3 font-semibold">$1,600</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3 font-semibold">Maximum per household</td>
                  <td className="p-3 font-semibold">$14,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-amber-800 mb-1">⚠ Common mistake: applying after purchase</p>
            <p className="text-sm text-amber-900">You must apply and receive a coupon through the state portal BEFORE purchasing equipment. Retroactive applications are not accepted. Most installations require an Authorized Program Contractor — the contractor list is expected by fall 2026. All qualifying products must be ENERGY STAR certified.</p>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Who qualifies</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            New Mexico has currently limited HEAR to <strong>households below 80% AMI only</strong>, covering 100% of costs up to the caps listed above. The 80–150% AMI tier (which would cover 50% of costs) has not yet been activated. Households above 150% AMI are not eligible under any tier. Automatic eligibility also applies to participants in Medicaid, SNAP, SSI, Head Start, WIC, WAP, LIHEAP, or FDPIR.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Applicants must own and occupy a single-family home, duplex, triplex, quadplex, manufactured home, or townhome. Renters are expected to become eligible by late 2026. Apply at{" "}
            <a href="https://app.clean.energy.nm.gov" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">app.clean.energy.nm.gov</a> or call 888-290-9337.
          </p>
        </div>
      </section>

      {/* 6. HOMES / SECONDARY + STATE TAX CREDITS */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">State tax credits and HOMES program</h2>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Sustainable Building Tax Credit — Energy Conserving Products</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            New Mexico&apos;s 2021 Sustainable Building Tax Credit (SBTC) includes an Energy Conserving Products category covering air-source heat pumps, ground-source heat pumps, and heat pump water heaters. The credit is active through <strong>January 1, 2028</strong>, administered by EMNRD with claims filed through the NM Taxation and Revenue Department. The annual statewide cap is <strong>$2,900,000</strong> (first-come, first-served).
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Credit amounts are calculated by formula and vary by product type. Approximate values: <strong>~$500</strong> per heat pump for standard-income taxpayers, <strong>doubled to ~$1,000</strong> for low-income households (at or below 200% Federal Poverty Level). For low-income taxpayers, the credit is refundable. For others, it is non-refundable with a 7-year carryforward. Products must be ENERGY STAR certified or meet equivalent performance values for the applicable NM climate zone.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Geothermal Ground-Coupled Heat Pump Tax Credit</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            A separate, more generous credit exists for geothermal systems: <strong>30% of purchase and installation costs, up to $9,000</strong>. This credit is refundable with a 10-year carryforward, active through <strong>December 31, 2034</strong>. The annual aggregate cap is <strong>$4,000,000</strong>. Systems must have COP ≥ 3.4 or EER ≥ 16 and be installed by an IGSHPA-accredited installer certified by EMNRD. This credit cannot be stacked with the SBTC for the same system.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-blue-800 mb-1">New Mexico&apos;s geothermal credit is one of the strongest in the country</p>
            <p className="text-sm text-blue-900">At 30% of costs up to $9,000, refundable, and available at all income levels through 2034, this is more generous than most state-level clean energy tax credits. For homeowners who can accommodate ground-source systems, this is the single most valuable incentive in New Mexico — regardless of income.</p>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">HOMES program — not yet launched</h3>
          <p className="text-gray-700 leading-relaxed">
            The companion HOMES program (performance-based whole-home rebates) is not yet accepting applications. When launched, it would provide up to <strong>$2,000</strong> for 20%+ energy reduction (or <strong>$4,000</strong> for 35%+), doubled for households below 80% AMI. HOMES cannot be combined with HEAR for the same measure but can cover different measures in the same home.
          </p>
        </div>
      </section>

      {/* 7. UTILITY PROGRAMS */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Utility rebates</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            New Mexico&apos;s utility rebates are available at all income levels but vary significantly by territory. PNM customers in central New Mexico have the most options. El Paso Electric covers southern New Mexico. Rural co-op customers should check their specific cooperative.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">PNM (Public Service Company of New Mexico)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            PNM serves <strong>530,000+ customers</strong> in Albuquerque, Santa Fe, Rio Rancho, and dozens of other communities across central New Mexico. Heat pump incentives come through three channels:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Program</th>
                  <th className="text-left p-3 font-semibold">Measure</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Home Energy Checkup</td>
                  <td className="p-3">Split ASHP (SEER 14, HSPF 8.2)</td>
                  <td className="p-3 font-semibold">$550</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">CLEAResult (2026)</td>
                  <td className="p-3">HPWH (ENERGY STAR, ≤55 gal)</td>
                  <td className="p-3 font-semibold">$700</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Midstream Program</td>
                  <td className="p-3">Heat pumps (via contractor)</td>
                  <td className="p-3 font-semibold">$540–$860</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Home Energy Checkup</td>
                  <td className="p-3">Smart thermostat</td>
                  <td className="p-3 font-semibold">$50</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Home Energy Checkup requires a free energy audit first; purchases must be made within 6 months. The CLEAResult HPWH instant rebate is available at Best Buy, Home Depot, and Lowe&apos;s through December 31, 2026 or while funds last. PNM does not offer income-qualified adders.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">El Paso Electric (southern NM)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            El Paso Electric serves Las Cruces, Hatch, Sunland Park, and Truth or Consequences. Rebates are tiered by efficiency:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">System type</th>
                  <th className="text-left p-3 font-semibold">Tier 1 (15.2–16.9 SEER2)</th>
                  <th className="text-left p-3 font-semibold">Tier 2 (≥17.0 SEER2)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Split heat pump</td>
                  <td className="p-3 font-semibold">$100/ton</td>
                  <td className="p-3 font-semibold">$175/ton</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Packaged heat pump</td>
                  <td className="p-3 font-semibold">$100/ton</td>
                  <td className="p-3 font-semibold">$175/ton</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ground-source heat pump</td>
                  <td className="p-3 font-semibold" colSpan={2}>$700/unit</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold" colSpan={2}>$400/unit</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            For a typical 3-ton Tier 2 split heat pump, the rebate is <strong>$525</strong>. Systems must be AHRI-qualified matched systems under 65,000 BTUh (5.4 tons) installed by a licensed contractor.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Rural electric cooperatives</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Most NM rural co-ops participate in the Tri-State &quot;Electrify and Save&quot; program with standardized rebate amounts:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">System</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">ASHP &lt; 1.5 tons</td>
                  <td className="p-3 font-semibold">$500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">ASHP &gt; 1.5 tons</td>
                  <td className="p-3 font-semibold">$1,500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ground-source HP (new)</td>
                  <td className="p-3 font-semibold">$500/ton</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ground-source HP (replacement)</td>
                  <td className="p-3 font-semibold">$250/ton</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Participating co-ops include Central New Mexico Electric, Continental Divide Electric, Columbus Electric, Otero County Electric, Socorro Electric, Sierra Electric, and Jemez Mountains Electric. Kit Carson Electric (Taos) left Tri-State and offers its own rebates of <strong>$924–$3,009</strong>. Not all co-ops offer every rebate — check with your specific cooperative.
          </p>
        </div>
      </section>

      {/* 8. LOCAL PROGRAMS */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Local programs</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            No New Mexico city operates a dedicated residential heat pump rebate. However, two local programs can cover heat pumps as part of broader home upgrades for income-qualifying households:
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Santa Fe County HREE Program</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Home Rehabilitation and Energy Efficiency (HREE) Program offers one-time grants up to <strong>$50,000</strong> for home rehabilitation and energy efficiency upgrades — including heat pumps — to homeowners earning at or below 100% AMI in unincorporated Santa Fe County.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Las Cruces energy programs</h3>
          <p className="text-gray-700 leading-relaxed">
            Las Cruces operates the &quot;Plugged in for Good&quot; Energy Alliance, funded by approximately <strong>$870,000</strong> in DOE grants, providing energy audits and home retrofits including HVAC upgrades for low-to-moderate income residents. The city also secured up to <strong>$642,469</strong> in CEED funding for FY2026 residential appliance upgrades.
          </p>
        </div>
      </section>

      {/* 9. STACKING */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How programs stack</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            New Mexico allows stacking of HEAR rebates with utility rebates and the Sustainable Building Tax Credit. HEAR and HOMES cannot be combined for the same measure. Federal tax credits are no longer available. Here&apos;s what realistic stacking looks like for a ducted air-source heat pump installation (estimated total cost: <strong>$12,000–$18,000</strong>):
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 80% AMI — PNM territory</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>HEAR: $0 (not eligible)</li>
                <li>HOMES: $0 (not yet launched)</li>
                <li>PNM Home Energy Checkup rebate: $550</li>
                <li>Sustainable Building Tax Credit: ~$500</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$1,050</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 80% AMI — El Paso Electric territory</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>HEAR: $0 (not eligible)</li>
                <li>EPE rebate (3-ton Tier 2): $525</li>
                <li>Sustainable Building Tax Credit: ~$500</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$1,025</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">Below 80% AMI — PNM territory (best case)</p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>HEAR heat pump: $8,000</li>
                <li>PNM Home Energy Checkup rebate: $550</li>
                <li>Sustainable Building Tax Credit (refundable): ~$1,000</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$9,550</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">Below 80% AMI — rural co-op territory</p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>HEAR heat pump: $8,000</li>
                <li>Tri-State co-op rebate (&gt;1.5 ton): $1,500</li>
                <li>Sustainable Building Tax Credit (refundable): ~$1,000</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$10,500</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-5 mb-6">
            <p className="font-semibold text-gray-900 mb-1">What you&apos;ll actually pay</p>
            <p className="text-sm text-gray-700">For a typical ducted ASHP installation costing $12,000–$18,000: homeowners above 80% AMI will pay <strong>$10,950–$16,950 out of pocket</strong>. Homeowners below 80% AMI in PNM territory could pay as little as <strong>$2,450–$8,450</strong>. The income gap is the defining feature of New Mexico&apos;s 2026 incentive landscape.</p>
          </div>

          <p className="text-sm text-gray-500">
            New Mexico does not offer a state residential loan program for heat pumps. There is no state PACE program for residential properties. The 80–150% AMI tier under HEAR and the HOMES program have not yet launched.
          </p>
        </div>
      </section>

      {/* 10. WEATHERIZATION */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Weatherization Assistance Program</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The <strong>NM Energy$mart</strong> program provides free weatherization and equipment upgrades — including heat pump installations — to income-qualifying homeowners at or below 200% Federal Poverty Level (roughly $62,400 for a family of four). Administered by the New Mexico Mortgage Finance Authority (MFA/Housing New Mexico) through regional sub-grantee contractors.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Average per-home investment is approximately <strong>$7,669</strong> nationally. NM homeowners report an average 32% reduction in heating costs after weatherization. Automatic eligibility for households receiving SSI, TANF, SNAP, or other qualifying benefits.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <p className="font-semibold text-green-800 mb-1">✓ Best candidates for weatherization</p>
            <p className="text-sm text-green-900">Homeowners below 200% Federal Poverty Level, especially those replacing propane or wood heating systems. Tribal community members in the Navajo Nation service area (Red Feather Development Group administers). Seniors and households with young children are typically prioritized.</p>
          </div>
        </div>
      </section>

      {/* 11. CLIMATE */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Climate context: three zones, high altitude</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            New Mexico spans IECC zones 3B through 5B — warm-dry in the south, mixed-dry in the center, and cool-dry in the mountains. This range, combined with elevations from 3,900 to 7,200+ feet, creates distinct equipment requirements across the state.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">City</th>
                  <th className="text-left p-3 font-semibold">Elevation</th>
                  <th className="text-left p-3 font-semibold">Winter design temp</th>
                  <th className="text-left p-3 font-semibold">IECC zone</th>
                  <th className="text-left p-3 font-semibold">ccASHP needed?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Las Cruces</td>
                  <td className="p-3">3,908 ft</td>
                  <td className="p-3">20°F</td>
                  <td className="p-3">3B</td>
                  <td className="p-3">No</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Albuquerque</td>
                  <td className="p-3">5,312 ft</td>
                  <td className="p-3">16°F</td>
                  <td className="p-3">4B</td>
                  <td className="p-3">Recommended</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Santa Fe</td>
                  <td className="p-3">7,199 ft</td>
                  <td className="p-3">1°F</td>
                  <td className="p-3">5B</td>
                  <td className="p-3 font-semibold">Yes</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Taos</td>
                  <td className="p-3">6,969 ft</td>
                  <td className="p-3">~0°F</td>
                  <td className="p-3">5B</td>
                  <td className="p-3 font-semibold">Essential</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-blue-800 mb-1">The altitude double penalty</p>
            <p className="text-sm text-blue-900">High elevation reduces air density, cutting heat pump capacity by 17–19% at Albuquerque&apos;s 5,312 feet and 23–26% at Santa Fe&apos;s 7,199 feet. A 3-ton heat pump delivers roughly 27,000–28,000 BTU/hr in Santa Fe — nearly a full ton less than rated. Combined with cold temperatures, northern NM homeowners face capacity losses from both altitude and climate simultaneously. Proper Manual J calculations with altitude correction factors are essential.</p>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Roughly 76% of New Mexico homes heat with natural gas, making this primarily a gas-displacement market. Propane and wood heating are concentrated in rural and tribal communities. Dual-fuel systems (heat pump plus gas furnace backup) remain a practical transition strategy in Zone 4B and 5B locations. For homeowners considering a{" "}
            <Link href="/battery" className="text-brand-600 hover:underline">home battery</Link>, pairing solar and storage with a heat pump can offset higher electricity costs from fuel switching.
          </p>
        </div>
      </section>

      {/* 12. HOW TO APPLY */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to apply</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            For HEAR (the primary incentive for income-qualifying households):
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-gray-900">Check your eligibility</p>
                <p className="text-sm text-gray-700">Use the eligibility checker at app.clean.energy.nm.gov/applicant/qualify-public.html. You need household income below 80% AMI, or enrollment in Medicaid, SNAP, SSI, or other qualifying programs.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900">Submit your application before purchasing</p>
                <p className="text-sm text-gray-700">Apply through the state portal at app.clean.energy.nm.gov. You must receive approval and a coupon before buying equipment or scheduling installation.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-900">Work with an authorized contractor</p>
                <p className="text-sm text-gray-700">Most installations will require an Authorized Program Contractor. The full contractor list is expected by fall 2026. Install ENERGY STAR certified equipment only.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <p className="font-semibold text-gray-900">Stack your utility rebate separately</p>
                <p className="text-sm text-gray-700">Apply for PNM, El Paso Electric, or your co-op&apos;s rebate directly through the utility. These are separate from HEAR and can be claimed in addition to it.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                5
              </div>
              <div>
                <p className="font-semibold text-gray-900">Claim the state tax credit on your return</p>
                <p className="text-sm text-gray-700">After installation, apply through the EMNRD portal for a Certificate of Eligibility, then file with Form TRD-41252 on your state income tax return.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. WHAT TO WATCH */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to watch</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">IRA funding runway</p>
              <p className="text-sm text-gray-600 mt-1">HEAR was funded under the IRA and was not repealed, but the $43 million allocation will run out. Once funds are exhausted, no additional federal appropriation is expected. Apply sooner rather than later.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">80–150% AMI tier activation</p>
              <p className="text-sm text-gray-600 mt-1">New Mexico has not yet opened HEAR to the 80–150% AMI tier. When activated, these households would receive 50% of costs up to the standard caps. No timeline has been announced.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">HOMES program launch</p>
              <p className="text-sm text-gray-600 mt-1">The performance-based HOMES rebates (up to $4,000/$8,000) could serve moderate-income homeowners but remain in pre-launch as of March 2026. Watch the EMNRD website for updates.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">SBTC annual cap ($2.9 million)</p>
              <p className="text-sm text-gray-600 mt-1">The Sustainable Building Tax Credit operates on a first-come, first-served annual cap. If the cap is reached, applications roll to the next tax year. Apply early in the calendar year if possible.</p>
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
              <Link href="/heat-pumps/states/az" className="text-brand-600 hover:underline">
                Arizona Heat Pump Rebates
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/co" className="text-brand-600 hover:underline">
                Colorado Heat Pump Rebates
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/tx" className="text-brand-600 hover:underline">
                Texas Heat Pump Rebates
              </Link>
            </li>
            <li>
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                Federal Heat Pump Tax Credits: What Changed in 2026
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
            {nmIncentive.sources.map((source: { label: string; url: string }, index: number) => (
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
              utility, and IRA heat pump incentives available to New Mexico
              homeowners in 2026. It does not calculate savings, guarantee
              eligibility, or represent any incentive program. HEAR eligibility
              and rebate amounts depend on income verification and program funding
              status. We verify status regularly but programs can change
              without notice. Always confirm current amounts and eligibility with
              EMNRD, your utility, and your contractor before making decisions.
            </p>
          </div>
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
