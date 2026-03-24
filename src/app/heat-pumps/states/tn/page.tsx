import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Tennessee Heat Pump Rebates 2026: $500–$1,500 TVA EnergyRight + $8,000 HEAR | Home Energy Basics",
  description:
    "TVA EnergyRight offers $500–$1,500 rebates. HEAR adds up to $8,000. Federal tax credits ended. Here\u0027s what\u0027s actually available in Tennessee in 2026.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/tn",
  },
  openGraph: {
    title: "Tennessee Heat Pump Rebates 2026: TVA EnergyRight + HEAR",
    description:
      "TVA EnergyRight rebates up to $1,500 plus pending HEAR rebates up to $8,000 — the complete guide to Tennessee heat pump incentives after federal credits expired.",
    url: "https://homeenergybasics.com/heat-pumps/states/tn",
    type: "article",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What heat pump rebates are available in Tennessee in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TVA EnergyRight rebates of $500–$1,500 are the only active heat pump incentive for most Tennessee homeowners in 2026. The amount depends on system efficiency: $500 for 15–16.99 SEER2, $800 for 17+ SEER2 or ductless mini-splits, and $1,500 for TVA Preferred systems with variable-speed compressors and full heating capacity at 17°F. Federal tax credits (Sections 25C and 25D) expired December 31, 2025. IRA-funded HEAR rebates (up to $8,000 for qualifying households) are approved but not yet launched in Tennessee.",
      },
    },
    {
      "@type": "Question",
      name: "Can I stack TVA EnergyRight and HEAR rebates in Tennessee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, once HEAR launches (expected Q3 2026), TVA EnergyRight rebates can stack with HEAR rebates. CLEAResult, TVA\u0027s program implementer, is building technology to facilitate seamless stacking. For a household below 80% of Area Median Income, this could mean up to $1,500 from TVA plus $8,000 from HEAR — a potential $9,500 toward a heat pump. Total combined rebates cannot exceed total project cost.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get a TVA rebate for replacing my gas furnace with a heat pump?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. TVA EnergyRight rebates require replacement of an existing electric heating source — such as an older heat pump, electric furnace, or electric resistance heat. The program explicitly excludes gas-to-electric conversions. This is a significant limitation in Nashville and Memphis, where natural gas is the dominant heating fuel. When HEAR launches, it will cover fuel switching from gas to electric, filling this gap.",
      },
    },
    {
      "@type": "Question",
      name: "When will Tennessee\u0027s IRA rebate programs launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tennessee received conditional DOE approval for HEAR and HOMES programs in January 2025, with full launch targeted for Q3 2026. The Tennessee Department of Environment and Conservation (TDEC) administers both programs, with TVA\u0027s Quality Contractor Network handling implementation. Tennessee\u0027s total HEAR allocation is $83.4 million. The programs were not affected by the One Big Beautiful Bill Act and remain funded until depleted or September 30, 2031.",
      },
    },
    {
      "@type": "Question",
      name: "Do all Tennessee utilities offer the same heat pump rebates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All major Tennessee electric utilities participate in TVA EnergyRight and offer the same rebate amounts ($500–$1,500 for heat pumps). No utility was found to offer additional rebates on top of TVA\u0027s amounts. The key differences are in supplementary services: EPB in Chattanooga is the most active promoter with free energy consultations, while MLGW in Memphis does not actively promote heat pump rebates due to its dual role as both electric and gas provider.",
      },
    },
  ],
};

export default function TennesseePage() {
  const tnIncentive = incentives.TN;
  const formattedDate = formatDate(tnIncentive.lastVerified);

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
            {" "}/ Tennessee
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tennessee heat pump rebates and incentives in 2026
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            TVA EnergyRight rebates of <strong>$500–$1,500</strong> are the only active heat pump incentive for most Tennessee homeowners right now. Federal tax credits expired December 31, 2025. IRA-funded HEAR rebates covering up to <strong>$8,000</strong> per heat pump are approved but have not yet launched. This guide covers all major Tennessee heat pump incentives available in 2026, including TVA EnergyRight, HEAR, HOMES, and utility-specific programs. Here&apos;s what&apos;s actually available.
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
          <StatusCard incentive={tnIncentive} />
        </div>
      </section>

      {/* 3. SHORT VERSION */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Short version</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ TVA EnergyRight rebates are active</p>
              <p className="text-sm text-green-900">$500–$1,500 depending on system efficiency tier. Available through all TVA local power companies. Must replace existing electric heating — no gas conversions.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ HEAR rebates approved (not yet launched)</p>
              <p className="text-sm text-green-900">Up to $8,000 per heat pump for households below 80% of Area Median Income (AMI). Up to $4,000 for 80–150% AMI. Expected Q3 2026 launch.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Potential stacked savings once HEAR launches</p>
              <p className="text-sm text-green-900">$1,500 (above 150% AMI) to $9,500+ (below 80% AMI). Full electrification packages can reach ~$15,500 total incentives for income-qualified households.</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">✗ Federal tax credits expired</p>
              <p className="text-sm text-red-900">Section 25C ($2,000/year for heat pumps) and Section 25D (30% for geothermal) both ended December 31, 2025. No federal heat pump tax credit exists in 2026. <Link href="/federal-heat-pump-tax-credit-expired" className="underline">Full details</Link>.</p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 md:col-span-2">
              <p className="font-semibold text-amber-800 mb-1">⚠ TVA rebates do not cover gas-to-electric conversions</p>
              <p className="text-sm text-amber-900">TVA EnergyRight requires replacement of existing electric heating. Nashville and Memphis homeowners heating with natural gas must wait for HEAR to launch for rebate-eligible fuel switching. This is the most common eligibility mistake in Tennessee.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEDERAL EXPIRED */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Federal tax credits have expired</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <p className="text-red-900 leading-relaxed">
              <strong>Section 25C</strong> (Energy Efficient Home Improvement Credit) expired for property placed in service after <strong>December 31, 2025</strong>. This credit offered up to $2,000 per year for qualifying heat pumps. It carries no carryforward — unused credit from 2025 is permanently lost. <strong>Section 25D</strong> (Residential Clean Energy Credit) also expired December 31, 2025. Unlike 25C, Section 25D allows carryforward of unused credit from qualifying pre-2026 installations. Both expirations were accelerated by the One Big Beautiful Bill Act (signed July 4, 2025).
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Tennessee homeowners who completed heat pump installations by December 31, 2025 can still claim these credits on their 2025 tax returns (Form 5695). The &quot;placed in service&quot; standard requires equipment to have been installed and operational — purchasing in 2025 with installation in 2026 does not qualify.
          </p>
          <p className="text-gray-700 leading-relaxed">
            For full details on what changed, see{" "}
            <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
              Federal Heat Pump Tax Credits Ended
            </Link>.
          </p>
        </div>
      </section>

      {/* 5. TVA ENERGYRIGHT (Primary — active program) */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">TVA EnergyRight rebates</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Since Tennessee has no state income tax, there are no state-level heat pump tax credits. The Tennessee Valley Authority&apos;s (TVA) EnergyRight program is the primary active rebate for Tennessee homeowners. TVA is investing <strong>$1.5 billion</strong> in EnergyRight through 2027, and the program operates through 153 local power companies across TVA&apos;s service territory.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Air-source heat pump rebate tiers</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">System type</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                  <th className="text-left p-3 font-semibold">Key requirements</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">TVA Preferred air-source HP</td>
                  <td className="p-3 font-semibold">$1,500</td>
                  <td className="p-3">≥15.2 SEER2, ≥8.1 HSPF2, variable-speed, 100% capacity at 17°F, Manual J</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">High-efficiency HP (17+ SEER2)</td>
                  <td className="p-3 font-semibold">$800</td>
                  <td className="p-3">17+ SEER2, QCN contractor</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Standard efficiency HP</td>
                  <td className="p-3 font-semibold">$500</td>
                  <td className="p-3">15–16.99 SEER2, QCN contractor</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ductless mini-split (17+ SEER2)</td>
                  <td className="p-3 font-semibold">$800</td>
                  <td className="p-3">17+ SEER2, QCN contractor</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Geothermal heat pump</td>
                  <td className="p-3 font-semibold">$1,500</td>
                  <td className="p-3">QCN contractor required</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">$800–$1,300</td>
                  <td className="p-3">ENERGY STAR certified; instant retail rebates available at select retailers</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            The <strong>$1,500 TVA Preferred tier</strong> is the standout incentive. Its requirement for 100% heating capacity at 17°F effectively requires a cold-climate-capable system in most cases — which aligns well with Tennessee&apos;s winter design temperatures. All rebate-eligible work must be performed by a Quality Contractor Network (QCN) member — approximately 350 contractors operate in Tennessee.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-amber-800 mb-1">⚠ No gas-to-electric conversions</p>
            <p className="text-sm text-amber-900">TVA EnergyRight rebates require replacement of an existing electric heating source. The program explicitly excludes natural gas furnace replacements. This affects most homeowners in Nashville and Memphis, where gas heating dominates. These homeowners must wait for HEAR to launch for rebate-eligible fuel switching.</p>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Financing and low-income support</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            TVA offers <strong>$0-down, fixed-rate on-bill financing</strong> through participating local power companies — loans of $2,500 to $20,000 with terms up to 10 years at approximately 6–8% fixed interest, repaid through the monthly electric bill. No early payoff penalty.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            For low-income households, TVA&apos;s <strong>Home Uplift program</strong> provides an average of <strong>$10,000 in free energy upgrades</strong>, including heat pumps, insulation, duct work, windows, and water heaters. Eligibility requires household income at or below 200% of the Federal Poverty Level. Nearly 50 local power companies participate. However, waitlists are long — Knoxville alone has approximately 3,000 households waiting.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <p className="font-semibold text-green-800 mb-1">✓ Best candidates for TVA EnergyRight rebates</p>
            <p className="text-sm text-green-900">Homeowners replacing existing electric heating (heat pumps, electric furnaces, or electric resistance heat). Rural Tennessee households on electric resistance heat or propane stand to benefit most — both from the rebate and from significantly lower operating costs with a heat pump.</p>
          </div>
        </div>
      </section>

      {/* 6. HEAR + HOMES (Pending IRA programs) */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">IRA rebate programs: HEAR and HOMES</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Home Electrification and Appliance Rebates (HEAR) and Home Owner Managing Energy Savings (HOMES) programs — funded by the Inflation Reduction Act and not affected by the One Big Beautiful Bill Act — are Tennessee&apos;s largest pending incentive opportunity. The Tennessee Department of Environment and Conservation (TDEC), Office of Energy Programs, is the administering agency, with TVA&apos;s QCN serving as implementation partner. Tennessee received conditional DOE approval in January 2025, with full launch targeted for <strong>Q3 2026</strong>. Tennessee&apos;s total HEAR allocation is <strong>$83.4 million</strong>.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">HEAR rebate structure (when launched)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            HEAR provides point-of-sale rebates applied at time of purchase. Amounts depend on household income relative to Area Median Income (AMI):
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Income tier</th>
                  <th className="text-left p-3 font-semibold">Heat pump rebate</th>
                  <th className="text-left p-3 font-semibold">HPWH rebate</th>
                  <th className="text-left p-3 font-semibold">Household cap</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Below 80% AMI</td>
                  <td className="p-3 font-semibold">Up to $8,000</td>
                  <td className="p-3 font-semibold">Up to $1,750</td>
                  <td className="p-3 font-semibold">$14,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">80–150% AMI</td>
                  <td className="p-3 font-semibold">Up to $4,000</td>
                  <td className="p-3 font-semibold">Up to $875</td>
                  <td className="p-3 font-semibold">$7,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-gray-500">Above 150% AMI</td>
                  <td className="p-3 text-gray-500">—</td>
                  <td className="p-3 text-gray-500">—</td>
                  <td className="p-3 text-gray-500">Not eligible</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            HEAR covers fuel switching from gas to electric — filling the gap that TVA EnergyRight does not. It does not cover replacing an existing heat pump with a newer one. Additional HEAR-eligible items include electrical panel upgrades ($4,000), insulation and air sealing ($1,600), electric stoves ($840), and wiring ($2,500).
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">HOMES rebate structure (when launched)</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            HOMES is performance-based, requiring a whole-house energy assessment. Rebates range from <strong>$2,000–$4,000</strong> for households above 80% AMI and <strong>$4,000–$8,000</strong> for households below 80% AMI, depending on whether the retrofit achieves 20% or 35%+ energy reduction. HEAR and HOMES cannot be combined on the same upgrade but can fund different measures in the same home. HOMES will accept retroactive projects initiated on or after August 16, 2022.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="font-semibold text-blue-800 mb-1">Tennessee&apos;s IRA funds survived the OBBBA</p>
            <p className="text-sm text-blue-900">While federal tax credits were eliminated by the One Big Beautiful Bill Act, the IRA&apos;s state-administered rebate programs (HEAR and HOMES) were explicitly preserved. Tennessee&apos;s $83.4 million HEAR allocation remains intact and funded until depleted or September 30, 2031. NASEO leadership has stated they&apos;ve been &quot;repeatedly assured&quot; obligated funds will be distributed.</p>
          </div>
        </div>
      </section>

      {/* 7. UTILITY PROGRAMS */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Tennessee utilities handle heat pump rebates</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Every major Tennessee electric utility participates in TVA EnergyRight. No utility was found to offer its own additional heat pump rebates on top of TVA&apos;s amounts. The key differences are in supplementary services, financing options, and how actively each utility promotes heat pump adoption.
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Nashville Electric Service (NES)</p>
              <p className="text-sm text-gray-600 mt-1">Serves 418,000+ customers. Electric-only utility — no competing gas interest. Directs all rebate inquiries to TVA EnergyRight. Participates in Home Uplift with $750,000 in TDEC grant funding plus matching TVA contribution.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Memphis Light, Gas and Water (MLGW)</p>
              <p className="text-sm text-gray-600 mt-1">The nation&apos;s largest three-service public utility (429,000+ customers). While technically a TVA distributor with access to EnergyRight rebates, MLGW does not actively promote heat pump rebates on its website. Approximately 80% of Shelby County homes heat with natural gas supplied by MLGW — creating a structural disincentive for aggressive heat pump promotion.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Knoxville Utilities Board (KUB)</p>
              <p className="text-sm text-gray-600 mt-1">Participates in TVA EnergyRight and offers heat pump financing up to $7,500 with 10-year on-bill repayment. KUB provides both electricity and natural gas, and notably offers a Natural Gas Appliance Rebate that incentivizes gas equipment — working counter to heat pump adoption.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Chattanooga Electric Power Board (EPB)</p>
              <p className="text-sm text-gray-600 mt-1">The most active promoter of heat pump rebates among Tennessee utilities. EPB&apos;s Energy Pros provide free home energy consultations and post-installation quality assurance. Since October 2023, the program has paid $951,000 directly to EPB customers. Home Uplift has invested $7.4+ million since 2015. EPB is electric-only but competes with Chattanooga Gas, which offers $1,000 rebates to convert from heat pumps to gas furnaces.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Middle Tennessee Electric (MTE)</p>
              <p className="text-sm text-gray-600 mt-1">Tennessee&apos;s largest electric cooperative. Participates in TVA EnergyRight with 10-year on-bill financing. Runs a New Homes Program offering HVAC and water heating incentives for builders constructing all-electric homes. Rates more than 25% below the national average.</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="font-semibold text-blue-800 mb-1">Dual-service utilities create hidden barriers</p>
            <p className="text-sm text-blue-900">MLGW and KUB both sell electricity and natural gas to the same customers. This creates an inherent conflict: promoting heat pumps cannibalizes their own gas revenue. The result is muted promotion of available rebates at exactly the utilities serving Tennessee&apos;s largest gas-heating markets (Memphis and Knoxville). EPB, which is electric-only, is far more aggressive about promoting heat pump adoption.</p>
          </div>
        </div>
      </section>

      {/* 9. STACKING */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How programs stack</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            TVA EnergyRight rebates can stack with IRA HEAR and HOMES rebates — CLEAResult (TVA&apos;s program implementer) is building technology to facilitate seamless stacking. Total combined rebates cannot exceed total project cost. Currently, only TVA rebates are available. The scenarios below show what stacking looks like today and once HEAR launches.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 150% AMI — ducted heat pump system (~$12,000–$18,000 installed)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>TVA EnergyRight (Preferred tier): $1,500</li>
                <li>HEAR: not eligible</li>
                <li>HOMES (if 35%+ energy reduction, when launched): up to $4,000</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$5,500</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">80–150% AMI — ducted heat pump system (~$12,000–$18,000 installed)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>TVA EnergyRight (Preferred tier): $1,500</li>
                <li>HEAR (50% of costs, when launched): up to $4,000</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$5,500</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">Below 80% AMI — ducted heat pump system (~$12,000–$18,000 installed)</p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>TVA EnergyRight (Preferred tier): $1,500</li>
                <li>HEAR (100% of costs, when launched): up to $8,000</li>
                <li>Additional HEAR for panel, insulation, wiring: up to $6,000</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$15,500 (full electrification package)</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-5">
            <p className="font-semibold text-gray-900 mb-1">What you&apos;ll actually pay</p>
            <p className="text-sm text-gray-700">For a typical ducted heat pump installation (<strong>$12,000–$18,000</strong>), expect to pay <strong>$10,500–$16,500 out of pocket</strong> today (TVA rebate only). Once HEAR launches, out-of-pocket costs for income-qualifying households could drop to <strong>$2,500–$8,500</strong> depending on income tier and system cost. Tennessee has no state tax credits, no state loan program, and no widely available local rebate programs were found to add on top.</p>
          </div>
        </div>
      </section>

      {/* 10. WEATHERIZATION */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Weatherization assistance</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Tennessee Weatherization Assistance Program (WAP), administered by the Tennessee Housing Development Agency (THDA), serves all 95 counties. Eligible households (at or below 200% of the Federal Poverty Guidelines) receive free weatherization including HVAC replacement, insulation, air sealing, and duct repair. Nine regional agencies deliver services across the state, including the East Tennessee Human Resource Agency (ETHRA) in the Knoxville area.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Wait times can stretch years depending on the region. Homeowners who qualify should apply early — WAP upgrades complement heat pump installations by reducing the heating load, which can allow a smaller (less expensive) heat pump system.
          </p>
        </div>
      </section>

      {/* 11. CLIMATE */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Climate context</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Tennessee sits primarily in IECC Climate Zone 4A (Mixed-Humid), with Memphis in the warmer Zone 3A and eastern mountain areas potentially reaching Zone 5A. Standard air-source heat pumps perform well across the entire state.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">ASHRAE winter design temperatures</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">City</th>
                  <th className="text-left p-3 font-semibold">99% design temp</th>
                  <th className="text-left p-3 font-semibold">Climate zone</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Nashville</td>
                  <td className="p-3 font-semibold">13°F</td>
                  <td className="p-3">4A</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Memphis</td>
                  <td className="p-3 font-semibold">18°F</td>
                  <td className="p-3">3A</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Knoxville</td>
                  <td className="p-3 font-semibold">13°F</td>
                  <td className="p-3">4A</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Chattanooga</td>
                  <td className="p-3 font-semibold">15°F</td>
                  <td className="p-3">4A</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            These temperatures are well above the thresholds where modern heat pumps lose significant efficiency. Variable-speed units — including those qualifying for TVA&apos;s <strong>$1,500 Preferred tier</strong> — maintain full heating capacity down to 17°F, covering most of Tennessee without requiring specialized cold-climate equipment. Eastern mountain communities at higher elevations may see design temperatures 5–10°F colder and benefit most from cold-climate-rated units.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Tennessee&apos;s average residential electricity rate of approximately <strong>12–13¢/kWh</strong> is roughly 27% below the national average. This cheap electricity dramatically improves heat pump operating economics. A household switching from propane at $3.00/gallon to a heat pump at 13¢/kWh can cut heating costs by 40–60%. For more on the economics of electrification, see our{" "}
            <Link href="/battery" className="text-brand-600 hover:underline">guide to home batteries</Link>.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="font-semibold text-blue-800 mb-1">Cheap electricity makes heat pumps compelling even without large rebates</p>
            <p className="text-sm text-blue-900">TVA&apos;s rates are lower than about 80% of the top 100 U.S. utilities. At 12–13¢/kWh, the payback calculus already favors heat pumps for most homeowners replacing aging equipment — incentives accelerate rather than enable the transition. The primary heating fuels being displaced vary: natural gas dominates Nashville and Memphis, while electric resistance and propane are common in rural Tennessee.</p>
          </div>
        </div>
      </section>

      {/* 12. HOW TO APPLY */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to apply</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            TVA EnergyRight rebates are processed through the contractor — homeowners do not submit applications directly. Here&apos;s how the process works:
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-gray-900">Find a TVA Quality Contractor Network (QCN) member</p>
                <p className="text-sm text-gray-700">Search the{" "}
                  <a href="https://energyright.com/residential/rebates/heat-pump/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">TVA EnergyRight contractor directory</a>. Only QCN contractors can submit rebate applications. Approximately 350 operate in Tennessee.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900">Complete a Manual J load calculation and system design</p>
                <p className="text-sm text-gray-700">Required for the $1,500 Preferred tier. The contractor performs this as part of the project — it ensures the system is properly sized for your home.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-900">Install qualifying equipment</p>
                <p className="text-sm text-gray-700">System must meet the efficiency requirements for your target tier (minimum 15 SEER2 for any rebate, 17+ SEER2 for $800, TVA Preferred specs for $1,500).</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <p className="font-semibold text-gray-900">Contractor submits rebate through TVA EnergyRight</p>
                <p className="text-sm text-gray-700">Your contractor handles the paperwork. TVA mails a rebate check directly to you within 4–6 weeks of approval.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. WHAT TO WATCH */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to watch</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">HEAR launch timeline</p>
              <p className="text-sm text-gray-600 mt-1">Tennessee&apos;s HEAR and HOMES programs are targeted for Q3 2026 launch. Watch the TDEC Home Energy Rebate Programs page for updates. Once live, these rebates — especially HEAR&apos;s $8,000 for low-income households — will dramatically change the incentive landscape.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">IRA funding runway</p>
              <p className="text-sm text-gray-600 mt-1">Tennessee&apos;s $83.4 million HEAR allocation is available until depleted or September 30, 2031. The OBBBA did not claw back these funds, but the current administration has been slow to grant full approvals. Once launched, funds are first-come, first-served.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">TVA EnergyRight rebate schedule changes</p>
              <p className="text-sm text-gray-600 mt-1">TVA periodically updates its rebate tiers and amounts. The current schedule (version 26) has been in effect since early 2024. Changes typically align with TVA&apos;s fiscal year (October 1). Check with your contractor for the most current amounts before starting a project.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Chattanooga Gas counter-incentives</p>
              <p className="text-sm text-gray-600 mt-1">Chattanooga Gas (a Southern Company subsidiary) offers $1,000 rebates to convert from heat pumps to natural gas furnaces — the opposite of the electrification trend. Homeowners in the Chattanooga area should compare long-term operating costs before accepting a gas conversion rebate.</p>
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
              <Link href="/heat-pumps/states/va" className="text-brand-600 hover:underline">
                Virginia Heat Pump Rebates 2026
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/ga" className="text-brand-600 hover:underline">
                Georgia Heat Pump Rebates 2026
              </Link>
            </li>
            <li className="text-gray-500">
              North Carolina Heat Pump Rebates <em>(coming soon)</em>
            </li>
            <li className="text-gray-500">
              Kentucky Heat Pump Rebates <em>(coming soon)</em>
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

      {/* 16. SOURCES */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="space-y-2 text-sm">
            {tnIncentive.sources.map((source: { label: string; url: string }, index: number) => (
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
              <strong>Disclaimer:</strong> This page covers the main statewide, utility, and IRA heat pump incentives available to Tennessee homeowners in 2026. It does not calculate savings, guarantee eligibility, or represent any incentive program. Tennessee&apos;s unique TVA structure means rebates flow through local power companies — not all 153 distributors may participate in every program at the same time. We verify status regularly but programs can change without notice. Always confirm current amounts and eligibility with TVA EnergyRight, TDEC, and your contractor before making decisions.
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
