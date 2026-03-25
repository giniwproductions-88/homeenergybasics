import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Connecticut Heat Pump Rebates 2026: $250\u2013$1,000/Ton Energize CT + Smart-E Loan | Home Energy Basics",
  description:
    "Energize CT offers $250\u2013$1,000/ton. Smart-E Loan at 0.99% APR. Federal credits ended. Here\u2019s every Connecticut heat pump incentive in 2026.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/ct",
  },
  openGraph: {
    title: "Connecticut Heat Pump Rebates 2026",
    description:
      "Energize CT $250\u2013$1,000/ton, Smart-E Loan 0.99% APR, HES-IE free installs \u2014 the complete guide to Connecticut heat pump incentives after federal credits expired.",
    url: "https://homeenergybasics.com/heat-pumps/states/ct",
    type: "article",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What heat pump rebates are available in Connecticut in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Energize CT offers $250 per ton (standard) or $1,000 per ton (Energy Optimization tier for fuel-switching) for qualifying air-source heat pumps, up to $10,000 per home. Heat pump water heaters receive a $900 instant discount. The Smart-E Loan provides 0.99% APR financing through March 31, 2026. Federal tax credits (25C/25D) expired December 31, 2025. HEAR rebates (~$49.7 million allocated) have not launched in Connecticut.",
      },
    },
    {
      "@type": "Question",
      name: "Can I stack Energize CT rebates with HEAR when it launches?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When HEAR launches, it is expected to be stackable with Energize CT utility rebates since they come from different funding sources. Right now, the primary stack is the Energize CT rebate plus Smart-E Loan financing. Income-eligible households at or below 60% AMI can access free heat pump installations through HES-IE instead.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Energize CT Energy Optimization rebate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Energy Optimization tier provides $1,000 per ton (up to $10,000 per home) for heat pumps that replace oil, propane, natural gas, or electric resistance as the primary heating source. The pre-existing system must be either fully decommissioned or integrated using a qualified control listed on the Energize CT Heat Pump QPL with switchover set below 30\u00b0F. If inspection finds requirements unmet, the rebate drops to $250/ton.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a specific contractor for Energize CT heat pump rebates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All installations must be performed by a contractor in the Energize CT Heat Pump Installer Network (HPIN). Using a non-HPIN contractor disqualifies the project entirely. Pre-registration is required before installation begins \u2014 since July 1, 2024. Installation must be completed within 60 days of registration approval.",
      },
    },
    {
      "@type": "Question",
      name: "Are Connecticut HEAR rebates available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. As of March 2026, Connecticut\u2019s HEAR program has not launched. CT DEEP submitted its implementation blueprints to DOE in April 2025 but no confirmed launch date has been set. When active, HEAR is expected to provide up to $8,000 per heat pump and $14,000 total for income-qualified households below 150% AMI. Do not factor HEAR into current project budgets.",
      },
    },
  ],
};

export default function ConnecticutPage() {
  const ctIncentive = incentives.CT;
  const formattedDate = formatDate(ctIncentive.lastVerified);

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
            {" "}/ Connecticut
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Connecticut Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Energize CT rebates of <strong>$250&ndash;$1,000 per ton</strong> are the primary heat pump incentive in Connecticut for 2026. The Smart-E Loan offers <strong>0.99% APR</strong> financing through March 31, 2026. Federal tax credits ended December 31, 2025. Connecticut&apos;s <strong>$49.7 million</strong> in HEAR funding has not launched. This guide covers all major Connecticut heat pump incentives available in 2026, including Energize CT rebates, the Smart-E Loan, HES-IE income-eligible programs, and HEAR status. Here&apos;s what&apos;s actually available.
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
          <StatusCard incentive={ctIncentive} />
        </div>
      </section>

      {/* 3. Short Version */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The short version</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Energize CT Energy Optimization: $1,000/ton</p>
              <p className="text-sm text-green-900">
                Up to <strong>$10,000 per home</strong> for heat pumps replacing oil, propane, gas, or electric resistance as primary heat. Requires full decommission or qualified integrated control.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Smart-E Loan: 0.99% APR financing</p>
              <p className="text-sm text-green-900">
                Up to $50,000 through CT Green Bank. 5&ndash;20 year terms, no money down, unsecured. Rate expires March 31, 2026 &mdash; lock in before this date.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Total potential savings: $750&ndash;$10,000+</p>
              <p className="text-sm text-green-900">
                $750 (standard tier, 3-ton system) to $10,000 (Energy Optimization, large system). Income-eligible households below 60% AMI may receive free installations through HES-IE.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">✗ Federal tax credits expired</p>
              <p className="text-sm text-red-900">
                Section 25C and 25D both ended December 31, 2025 under the One Big Beautiful Bill Act. No federal tax credit is available for 2026 installations.
              </p>
            </div>
            <div className="md:col-span-2 bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="font-semibold text-amber-800 mb-1">⚠ HEAR rebates have not launched in Connecticut</p>
              <p className="text-sm text-amber-900">
                Connecticut was allocated ~$49.7 million in HEAR funding, but the program has not launched. CT DEEP submitted blueprints to DOE in April 2025 &mdash; no start date set. Do not start a project expecting these rebates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Federal Expired */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Federal tax credits are gone</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <p className="text-red-900 leading-relaxed">
              The <strong>Section 25C Energy Efficient Home Improvement Credit</strong> and the <strong>Section 25D Residential Clean Energy Credit</strong> both expired December 31, 2025 under the One Big Beautiful Bill Act (P.L. 119-21). No federal tax credit is available for heat pump installations in 2026. Equipment purchased in 2025 but installed in 2026 does not qualify. The IRA&apos;s HEAR and HOMES programs were separately appropriated rebate funds &mdash; a legal distinction that preserved their funding even as tax credits were repealed.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Connecticut was allocated approximately <strong>$49.7 million</strong> for HEAR and <strong>$49.8 million</strong> for HOMES, but neither has launched.{" "}
            <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
              Full details on what changed with federal heat pump tax credits &rarr;
            </Link>
          </p>
        </div>
      </section>

      {/* 5. HEAR / Primary */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">HEAR rebates: funded but not yet available</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Home Electrification and Appliance Rebates (HEAR) program is the largest potential incentive for Connecticut homeowners. CT DEEP submitted its State Implementation Blueprints to DOE at the end of April 2025. DEEP plans to contract with Eversource and United Illuminating to administer the program. As of March 2026, HEAR is not available to homeowners and no confirmed launch date has been set.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Income tier</th>
                  <th className="text-left p-3 font-semibold">Heat pump rebate</th>
                  <th className="text-left p-3 font-semibold">Household cap</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Below 80% AMI</td>
                  <td className="p-3 font-semibold">Up to $8,000</td>
                  <td className="p-3 font-semibold">$14,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">80&ndash;150% AMI</td>
                  <td className="p-3 font-semibold">Up to $4,000</td>
                  <td className="p-3 font-semibold">$14,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-gray-500">Above 150% AMI</td>
                  <td className="p-3 text-gray-500">&mdash;</td>
                  <td className="p-3 text-gray-500">Not eligible</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="font-semibold text-amber-800 mb-1">⚠ Do not count on HEAR for current projects</p>
            <p className="text-sm text-amber-900">
              There is no launch date. Projects completed before the program opens may not qualify for rebates. Plan your budget using Energize CT rebates only, and treat HEAR as a potential future bonus.
            </p>
          </div>
        </div>
      </section>

      {/* 6. HOMES / Secondary */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">HOMES program &mdash; also pending</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Connecticut was allocated approximately <strong>$49.8 million</strong> in HOMES (Home Efficiency Rebates) funding for whole-home energy retrofits. HOMES provides performance-based rebates of <strong>$2,000&ndash;$8,000</strong> tied to measured or modeled energy savings and is available at all income levels. Like HEAR, the HOMES program has not launched in Connecticut.
          </p>
          <p className="text-gray-700 leading-relaxed">
            HEAR and HOMES cannot be combined for the same measure but can apply to different upgrades in the same home.
          </p>
        </div>
      </section>

      {/* 7. Utility Programs */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Energize CT rebates &mdash; the primary path in 2026</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Energize CT is funded through a charge on customer energy bills and provides heat pump rebates to residential electric customers of <strong>Eversource</strong> and <strong>United Illuminating (UI)</strong>. Two tiers are available based on how completely you replace your existing heating system.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Air-source heat pump rebates</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Tier</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                  <th className="text-left p-3 font-semibold">Max per home</th>
                  <th className="text-left p-3 font-semibold">Qualifying scenario</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Standard</td>
                  <td className="p-3 font-semibold">$250/ton</td>
                  <td className="p-3">$2,500</td>
                  <td className="p-3">Replacing existing heat pump, adding to unconditioned space, cooling only, or heating without integrated controls</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Energy Optimization</td>
                  <td className="p-3 font-semibold">$1,000/ton</td>
                  <td className="p-3">$10,000</td>
                  <td className="p-3">Replacing oil, propane, gas, or electric resistance as primary heat &mdash; must decommission old system or use qualified integrated control</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-amber-800 mb-1">⚠ Common mistake: installing before registering</p>
            <p className="text-sm text-amber-900">
              Since July 1, 2024, all residential heat pump rebate applications require pre-registration and approval before installation. If you install before registering, you will not receive a rebate. There are no exceptions. Installation must be completed within 60 days of registration approval.
            </p>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Energy Optimization qualification</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            To qualify for the $1,000/ton tier, you must either fully decommission the old heating system (fuel line disconnected and capped, thermostat disconnected, system disabled or removed) or integrate it using a qualified control listed on the Energize CT Heat Pump QPL that automatically switches below a set outdoor temperature (must be below 30&deg;F). If inspection finds these requirements are not met, the rebate is downgraded to $250/ton.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Heat pump water heaters</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Energize CT offers a <strong>$900 instant discount</strong> on qualifying heat pump water heaters for Eversource and UI electric customers. Available through participating distributors, participating retailers (present the Energize CT barcode), or as a mail-in rebate. Units must be ENERGY STAR certified with UEF &ge;3.40 (integrated) or &ge;2.20 (split-system or 120V/15A).
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Smart-E Loan financing</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Connecticut Green Bank Smart-E Loan provides <strong>0.99% APR</strong> financing up to <strong>$50,000</strong> with 5&ndash;20 year terms, no money down, no prepayment penalty, and no home equity required. Must be an Eversource or UI customer using an HPIN contractor.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="font-semibold text-blue-800 mb-1">For oil and propane homes, the math often works immediately</p>
            <p className="text-sm text-blue-900">
              A 3-ton Energy Optimization install with $3,000 in rebates financed through Smart-E at 0.99% APR can produce monthly loan payments lower than prior oil or propane heating costs &mdash; making the switch cash-flow-positive from day one.
            </p>
          </div>
        </div>
      </section>

      {/* 9. Stacking */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How incentives stack</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Connecticut&apos;s stacking picture is straightforward in 2026: Energize CT rebates plus Smart-E Loan financing. There is no state tax credit, no active federal credit, and no HEAR to add. When HEAR launches, it is expected to stack with Energize CT rebates since they come from different funding sources. Below are realistic scenarios for a 3-ton ducted heat pump installation costing <strong>$12,000&ndash;$16,000</strong>.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 150% AMI &mdash; Standard tier (not fuel-switching)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Energize CT Standard (3 tons &times; $250): $750</li>
                <li>Federal tax credit: $0 (expired)</li>
                <li>HEAR: $0 (not launched)</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$750</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Any income &mdash; Energy Optimization (replacing oil/propane/gas/resistance)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Energize CT Energy Optimization (3 tons &times; $1,000): $3,000</li>
                <li>Federal tax credit: $0 (expired)</li>
                <li>HEAR: $0 (not launched)</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$3,000</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">Below 60% AMI &mdash; HES-IE (best case, available now)</p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>HES-IE: free heat pump installation + weatherization</li>
                <li>No out-of-pocket cost for qualifying households</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: full cost covered</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-5 mb-6">
            <p className="font-semibold text-gray-900 mb-1">What you&apos;ll actually pay</p>
            <p className="text-sm text-gray-700">
              Against a typical <strong>$12,000&ndash;$16,000</strong> installation: Energy Optimization reduces out-of-pocket to roughly <strong>$9,000&ndash;$13,000</strong>. Standard tier reduces it to roughly <strong>$11,250&ndash;$15,250</strong>. Income-eligible households through HES-IE may pay <strong>$0</strong>. Smart-E Loan financing spreads the remainder across 5&ndash;20 years at 0.99% APR.
            </p>
          </div>

          <p className="text-sm text-gray-500">
            Connecticut has no state tax credit for heat pumps and no statewide loan program beyond Smart-E. HES participants may qualify for 0% fixed-rate loans of $1,000&ndash;$3,000 through their utility bill.
          </p>
        </div>
      </section>

      {/* 10. Weatherization */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">HES-IE: free heat pumps for income-eligible households</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The <strong>Home Energy Solutions &ndash; Income Eligible (HES-IE)</strong> program provides free energy assessments and upgrades &mdash; including heat pumps &mdash; to households with combined gross annual income at or below <strong>60% of Connecticut&apos;s state median income</strong>. This is an existing program, separate from HEAR, and is available now. Covers no-cost energy assessment, air sealing, duct sealing, insulation, and heat pump installations.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Households already qualifying for Eversource&apos;s or UI&apos;s income-based payment assistance (Electric Discount Rate, Matching Payment Program) are also eligible. Homes that received HES or HES-IE services within the past six years are not eligible again. Contact: 877-WISE-USE (877-947-3873).
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <p className="font-semibold text-green-800 mb-1">✓ Best candidates for Connecticut heat pump incentives</p>
            <p className="text-sm text-green-900">
              Oil or propane homes replacing their heating system (highest Energy Optimization rebate, largest energy savings, loan payments often lower than prior fuel costs). Electric resistance (baseboard) homes (qualifies for Energy Optimization, heat pumps are 2&ndash;3&times; more efficient). Low-income households below 60% AMI (free installation through HES-IE).
            </p>
          </div>
        </div>
      </section>

      {/* 11. Climate */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Connecticut climate context</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Connecticut falls entirely within IECC Climate Zone 5A (cold-humid). Cold-climate heat pumps are the standard for rebate eligibility &mdash; all equipment must be ENERGY STAR 6.1 Cold Climate certified to qualify for Energize CT rebates.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">City</th>
                  <th className="text-left p-3 font-semibold">Heating design temp (99%)</th>
                  <th className="text-left p-3 font-semibold">Primary fuel displaced</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Hartford</td>
                  <td className="p-3 font-semibold">7&deg;F</td>
                  <td className="p-3">Natural gas, oil</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Bridgeport</td>
                  <td className="p-3 font-semibold">12&deg;F</td>
                  <td className="p-3">Natural gas, oil</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">New Haven</td>
                  <td className="p-3 font-semibold">9&deg;F</td>
                  <td className="p-3">Natural gas, oil</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Connecticut has a heavy oil-heating footprint &mdash; approximately 28% of households heat with fuel oil, among the highest rates nationally. Another 42% use natural gas and roughly 7% use electric resistance. Oil and propane households see the largest savings from heat pump conversions, typically 30&ndash;50% reductions in annual heating costs.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Considering pairing a heat pump with battery storage?{" "}
            <Link href="/battery" className="text-brand-600 hover:underline">
              See our guide to whether home batteries are worth it in 2026
            </Link>.
          </p>
        </div>
      </section>

      {/* 12. How to Apply */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to apply</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Energize CT rebate process requires specific steps in a specific order. Missing the pre-registration step disqualifies the entire project.
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <p className="font-semibold text-gray-900">Choose an HPIN installer</p>
                <p className="text-sm text-gray-700">Use the Find a Contractor tool at energizect.com. Get multiple quotes. Confirm the installer is recommending QPL-listed equipment.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <p className="font-semibold text-gray-900">Register your rebate before installation</p>
                <p className="text-sm text-gray-700">Complete registration online at energizect.com/rebates. You&apos;ll need your signed contract and HPIN installer details. Wait for approval before scheduling installation.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <p className="font-semibold text-gray-900">Complete installation within 60 days</p>
                <p className="text-sm text-gray-700">Your HPIN contractor installs the system. The 60-day clock starts from registration approval. If targeting Energy Optimization, ensure decommissioning or integrated control requirements are met.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
              <div>
                <p className="font-semibold text-gray-900">Submit your rebate application</p>
                <p className="text-sm text-gray-700">Upload your final paid invoice at energizect.com/rebates or submit by mail postmarked by February 27, 2027. Allow up to 90 days for payment processing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. What to Watch */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to watch</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">HEAR program launch</p>
              <p className="text-sm text-gray-600 mt-1">
                When active, HEAR would add up to $8,000 for heat pumps and $14,000 total for income-qualified households. Monitor CT DEEP&apos;s IRA page for updates.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Smart-E Loan rate expiration</p>
              <p className="text-sm text-gray-600 mt-1">
                The 0.99% APR expires March 31, 2026. Lock in before this date if you plan to finance your installation.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">IRA funding runway</p>
              <p className="text-sm text-gray-600 mt-1">
                HEAR and HOMES are funded through 2031 or until exhausted. Connecticut&apos;s $99.5 million combined allocation remains available but the programs must launch before the deadline.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Energize CT rebate levels</p>
              <p className="text-sm text-gray-600 mt-1">
                Per program terms, rebate amounts are subject to change without notice. Funding is limited and available first-come, first-served.
              </p>
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

      {/* 15. See Also */}
      <section className="py-8 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-3">See also</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/heat-pumps/states/ma" className="text-brand-600 hover:underline">
                Massachusetts Heat Pump Rebates
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/ny" className="text-brand-600 hover:underline">
                New York Heat Pump Rebates
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/ri" className="text-brand-600 hover:underline">
                Rhode Island Heat Pump Rebates
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

      {/* 16. Sources */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="space-y-2 text-sm">
            {ctIncentive.sources.map((source: { label: string; url: string }, index: number) => (
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
              <strong>Disclaimer:</strong> This page covers the main statewide, utility, and IRA heat pump incentives available to Connecticut homeowners in 2026. It does not calculate savings, guarantee eligibility, or represent any incentive program. Connecticut has multiple overlapping programs with different rules &mdash; your specific situation depends on your utility, income, home type, and timing. We verify status regularly but programs can change without notice. Always confirm current amounts and eligibility with Energize CT and your contractor before making decisions.
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
