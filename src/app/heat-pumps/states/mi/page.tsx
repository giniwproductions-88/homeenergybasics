import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Michigan Heat Pump Rebates 2026: Up to $8,000 MiHER + Utility Programs | Home Energy Basics",
  description:
    "MiHER offers up to $8,000 for heat pumps. DTE, Consumers Energy, TCLP add $200\u2013$3,000. Ann Arbor A2ZERO stacks $4,000\u2013$5,500. Federal credits ended.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/mi",
  },
  openGraph: {
    title: "Michigan Heat Pump Rebates 2026",
    description:
      "MiHER HEAR rebates up to $8,000 + utility rebates from DTE, Consumers Energy, TCLP, and more \u2014 the complete guide to Michigan heat pump incentives after federal credits expired.",
    url: "https://homeenergybasics.com/heat-pumps/states/mi",
    type: "article",
  },
};

export default function MichiganPage() {
  const miIncentive = incentives.MI;
  const formattedDate = formatDate(miIncentive.lastVerified);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What heat pump rebates are available in Michigan in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Michigan\u2019s main heat pump rebate is the MiHER HEAR program, which offers up to $8,000 for a heat pump at point of sale for households at or below 150% of Area Median Income. Utility rebates add $200\u2013$3,000 depending on your provider. DTE Energy offers $150\u2013$1,200, Consumers Energy offers $300\u2013$350, Traverse City Light & Power offers up to $3,000, and Lansing BWL offers $200\u2013$600. The federal Section 25C tax credit expired December 31, 2025.",
        },
      },
      {
        "@type": "Question",
        name: "Is the Michigan MiHER program still open?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Michigan\u2019s MiHER program launched statewide on April 14, 2025 and is accepting applications. It includes both HEAR (appliance-specific rebates) and HOMES (whole-home performance rebates). Funding of $210 million is expected to last until depleted or September 30, 2031.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get a heat pump rebate if I heat with natural gas in Michigan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "DTE Energy and Consumers Energy restrict most heat pump rebates to customers replacing existing electric heating, not gas-to-electric conversions. However, the MiHER HEAR program specifically supports fuel-switching from gas or propane to electric heat pumps. Ann Arbor\u2019s A2ZERO program also covers gas-to-electric conversions.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a cold-climate heat pump in Michigan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Michigan\u2019s winter design temperatures range from 0\u00b0F in Detroit and Grand Rapids to -10\u00b0F in Marquette. Cold-climate heat pumps rated to operate efficiently at 5\u00b0F or below are essential statewide. Look for equipment meeting ENERGY STAR cold-climate criteria: COP of 1.75 or greater at 5\u00b0F.",
        },
      },
      {
        "@type": "Question",
        name: "Can I stack Michigan heat pump rebates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Utility rebates, MiHER (HEAR or HOMES), and local programs like Ann Arbor\u2019s A2ZERO draw from different funding sources and can stack. The key constraint is that HOMES and HEAR cannot cover the same individual measure. A low-income household in Ann Arbor could potentially combine HEAR ($8,000) + A2ZERO ($5,500) + DTE ($1,200) for over $14,000 toward a cold-climate system.",
        },
      },
      {
        "@type": "Question",
        name: "What happened to the federal heat pump tax credit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Both the Section 25C ($2,000/year for heat pumps) and Section 25D (30% for geothermal) federal tax credits expired December 31, 2025 under the One Big Beautiful Bill Act. As of March 2026, the IRS guidance reflects the credits as ended and no replacement federal heat pump credit is active.",
        },
      },
    ],
  };

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
            {" "}/ Michigan
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Michigan Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Federal tax credits are gone, but Michigan&apos;s <strong>$210 million</strong> MiHER
            program offers up to <strong>$8,000</strong> per heat pump for qualifying households.
            Utility rebates add <strong>$200–$3,000</strong> depending on your provider. Ann
            Arbor stacks even higher. This guide covers all major Michigan heat pump
            incentives available in 2026, including MiHER HEAR and HOMES, utility
            rebates from DTE, Consumers Energy, TCLP, and BWL, plus Ann Arbor&apos;s
            A2ZERO program. Here&apos;s what&apos;s actually available.
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
          <StatusCard incentive={miIncentive} />
        </div>
      </section>

      {/* 3. Short Version */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Short Version</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ MiHER HEAR Rebates</p>
              <p className="text-sm text-green-900">
                Up to <strong>$8,000</strong> per heat pump at point of sale for households
                ≤150% AMI. Enhanced rebates (100% of costs) for ≤80% AMI. Covers
                fuel-switching from gas/propane. <strong>$14,000</strong> total household cap.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Utility Rebates</p>
              <p className="text-sm text-green-900">
                DTE Energy up to <strong>$1,200</strong>. Consumers Energy <strong>$300–$350</strong>.
                TCLP up to <strong>$3,000</strong>. BWL up to <strong>$600</strong>. Ann Arbor A2ZERO
                adds <strong>$4,000–$5,500</strong>. All stack with MiHER.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Total Potential Savings</p>
              <p className="text-sm text-green-900">
                $600 (above 150% AMI, utility only) to $14,700+ (low income, Ann Arbor).
                Full electrification packages with HEAR + A2ZERO + DTE can reach
                ~$14,700 total incentives.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">✗ Federal Tax Credits Expired</p>
              <p className="text-sm text-red-900">
                Both Section 25C ($2,000/year for heat pumps) and Section 25D (30% for
                geothermal) expired December 31, 2025. Not available for 2026 installations.
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 md:col-span-2">
              <p className="font-semibold text-amber-800 mb-1">⚠ DTE and Consumers Energy Restrict Gas-to-Electric Conversions</p>
              <p className="text-sm text-amber-900">
                Michigan&apos;s two largest utilities restrict most heat pump rebates to
                customers replacing existing electric heating — not gas furnaces. Since
                most Michigan homes heat with gas, this pushes fuel-switching households
                toward MiHER HEAR, which specifically covers gas-to-electric conversions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Federal Expired */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Federal Tax Credits: Both Expired</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <p className="text-red-900 leading-relaxed">
              The One Big Beautiful Bill Act (signed July 4, 2025) terminated
              both residential energy tax credits effective December 31, 2025.{" "}
              <strong>Section 25C</strong> had provided up to $2,000/year for
              heat pumps. <strong>Section 25D</strong> had covered 30% of
              geothermal heat pump costs with no cap. Equipment must have been{" "}
              <strong>installed by December 31, 2025</strong> to qualify — the IRS
              defines the expenditure date as when installation is completed, not when
              equipment is purchased or paid for. For 25D, unused credit from
              qualifying 2025 expenditures can be carried forward to future tax
              years. Section 25C offers no carryforward. As of March 2026, no
              replacement federal heat pump credit is active.{" "}
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                Full details on the federal credit expiration →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* 5. MiHER Program — HEAR + HOMES */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            MiHER: Michigan&apos;s $210 Million State Rebate Program
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Michigan launched both components of the Michigan Home Energy Rebates
            (MiHER) program statewide on April 14, 2025, administered by the
            Department of Environment, Great Lakes, and Energy (EGLE). Total IRA
            funding: <strong>$210 million</strong>. CLEAResult handles implementation and
            application processing (call center: 855-510-7080).
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            HEAR (Home Electrification and Appliance Rebates)
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Point-of-sale rebates applied as a discount at installation
            through approved MiHER contractors. Specifically supports
            fuel-switching (gas/propane to electric heat pump). Rebate income
            is not taxable per IRS Announcement 2024-19.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Measure</th>
                  <th className="text-left p-3 font-semibold">Maximum Rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Heat pump (space heating/cooling)</td>
                  <td className="p-3 font-semibold">Up to $8,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">Up to $1,750</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Electric panel upgrade</td>
                  <td className="p-3 font-semibold">Up to $4,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Insulation, air sealing, ventilation</td>
                  <td className="p-3 font-semibold">Up to $1,600</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Electric wiring</td>
                  <td className="p-3 font-semibold">Up to $2,500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Electric stove or dryer</td>
                  <td className="p-3 font-semibold">Up to $840</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">Total household cap</td>
                  <td className="p-3 font-semibold">$14,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Income determines the rebate percentage:</strong>
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Income Tier</th>
                  <th className="text-left p-3 font-semibold">Rebate Coverage</th>
                  <th className="text-left p-3 font-semibold">HEAR Eligible?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">≤80% AMI</td>
                  <td className="p-3 font-semibold">Up to 100% of approved costs</td>
                  <td className="p-3">Yes (enhanced)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">81–150% AMI</td>
                  <td className="p-3 font-semibold">Up to 50% of approved costs</td>
                  <td className="p-3">Yes (standard)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">&gt;150% AMI</td>
                  <td className="p-3 text-gray-500">Not eligible for HEAR</td>
                  <td className="p-3 text-gray-500">No — HOMES only</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mb-6">
            All work must be pre-approved and performed by an approved MiHER
            contractor. Retroactive claims are not accepted.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-amber-800 mb-1">⚠ Common Mistake: Pre-Approval Is Required</p>
            <p className="text-sm text-amber-900">
              MiHER does not accept retroactive claims. Your project must be
              pre-approved before installation starts. If you install a heat pump
              before getting MiHER approval, you cannot receive the rebate after the
              fact — even if you would have qualified.
            </p>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            HOMES (Home Efficiency Rebates)
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Whole-home performance approach. Rebates scale with modeled energy savings.
            Available at all income levels — the main option for households above 150% AMI.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Energy Savings</th>
                  <th className="text-left p-3 font-semibold">Standard Rebate</th>
                  <th className="text-left p-3 font-semibold">≤80% AMI Rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">20–34% savings</td>
                  <td className="p-3 font-semibold">$2,000</td>
                  <td className="p-3 font-semibold">$4,000</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">35%+ savings</td>
                  <td className="p-3 font-semibold">$4,000</td>
                  <td className="p-3 font-semibold">$8,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Low-income cap</td>
                  <td className="p-3 text-gray-500">—</td>
                  <td className="p-3 font-semibold">Up to 80% of costs, $20,000 max</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">
            HOMES and HEAR cannot be combined for the same individual measure
            but can fund different upgrades within the same project.
          </p>
        </div>
      </section>

      {/* 6. Utility Rebates */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Utility Rebates</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Michigan&apos;s utility rebates vary enormously.{" "}
            <strong>DTE and Consumers Energy restrict most heat pump rebates to
            customers replacing existing electric heating</strong>, not gas-to-electric
            conversions. Since most Michigan homes heat with natural gas, this pushes
            fuel-switching households toward MiHER HEAR.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-blue-800 mb-1">Traverse City Offers Michigan&apos;s Best Utility Rebates</p>
            <p className="text-sm text-blue-900">
              TCLP customers can receive up to <strong>$3,000</strong> per cold-climate heat pump
              system — far more than DTE&apos;s $1,200 or Consumers Energy&apos;s $350. TCLP
              also offers on-bill financing ($5,000–$30,000). If you&apos;re in the Traverse
              City area, the utility rebate alone covers a significant portion of project cost.
            </p>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">DTE Energy</h3>
          <p className="text-sm text-gray-500 mb-4">Detroit metro, ~2.3 million electric customers</p>
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
                  <td className="p-3">Cold-climate ASHP (16+ SEER2, 9.1+ HSPF2, EER2 ≥10)</td>
                  <td className="p-3 font-semibold">$1,200</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Cold-climate ASHP (lower efficiency tiers)</td>
                  <td className="p-3 font-semibold">$900–$1,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Standard ASHP (non-cold-climate)</td>
                  <td className="p-3 font-semibold">$150–$500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ductless mini-split</td>
                  <td className="p-3 font-semibold">$700–$1,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ground-source heat pump</td>
                  <td className="p-3 font-semibold">$600–$800</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mb-6">
            All equipment must be AHRI-certified matched systems. Rebates
            limited to customers replacing existing electric heating. Monitor
            fund availability — DTE shows a 20% funding indicator.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Consumers Energy</h3>
          <p className="text-sm text-gray-500 mb-4">Western/central Michigan, ~1.9 million electric customers</p>
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
                  <td className="p-3">ASHP (SEER2 15.2+)</td>
                  <td className="p-3 font-semibold">$300</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ductless mini-split (SEER2 17+, HSPF2 8+)</td>
                  <td className="p-3 font-semibold">$350</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ground-source heat pump</td>
                  <td className="p-3 font-semibold">$200–$300</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mb-6">
            2026 program runs through December 31, 2026 or until funds are
            exhausted. Does not differentiate between cold-climate and standard ASHPs.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Traverse City Light &amp; Power (TCLP)</h3>
          <p className="text-sm text-gray-500 mb-4">Traverse City area — Michigan&apos;s most generous utility rebates</p>
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
                  <td className="p-3">Cold-climate ducted ASHP (SEER2 ≥15.2, EER2 ≥9, HSPF2 ≥8.1, COP ≥1.75 at 5°F)</td>
                  <td className="p-3 font-semibold">$3,000/system</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Standard ducted ASHP (SEER2 ≥15.2, no COP requirement)</td>
                  <td className="p-3 font-semibold">$1,500/system</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Cold-climate ductless mini-split (SEER2 ≥16, COP ≥1.75 at 5°F)</td>
                  <td className="p-3 font-semibold">$3,000/system</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">HPWH (≤55 gal, UEF ≥2.2)</td>
                  <td className="p-3 font-semibold">$1,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Electric panel upgrade</td>
                  <td className="p-3 font-semibold">$1,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mb-6">
            Program year: July 1, 2025 – June 30, 2026. On-bill financing available ($5,000–$30,000).
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Lansing Board of Water &amp; Light (BWL)</h3>
          <p className="text-sm text-gray-500 mb-4">Lansing area — Hometown Energy Savers® program</p>
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
                  <td className="p-3">Central ASHP (tiered by SEER2: 15.2–21+)</td>
                  <td className="p-3 font-semibold">$200–$600</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Mini/multi-split</td>
                  <td className="p-3 font-semibold">$300 ($500 if replacing electric resistance)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">HPWH (ENERGY STAR, EF ≥2.0)</td>
                  <td className="p-3 font-semibold">$500</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mb-6">
            Program runs January–December 2026. Administered by Michigan Energy Options.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Other Michigan Utilities</h3>
          <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
            <p className="font-semibold text-gray-900">UPPCO (Upper Peninsula)</p>
            <p className="text-sm text-gray-600 mt-1">
              Offers heat pump rebates and an EMPOWER program with free upgrades for income-qualified customers. UPPCO territory was a MiHER pilot region. Contact (906) 449-2222 or energyefficiency@uppco.com for current rebate amounts.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
            <p className="font-semibold text-gray-900">Great Lakes Energy (cooperative)</p>
            <p className="text-sm text-gray-600 mt-1">
              Air-source heat pump rebates of $250–$750. Geothermal rebates of $500–$750. Members using heat pumps as primary heat may qualify for the Efficient Electric Heating (EEH) rate — a 3¢/kWh credit on heat pump energy use during the November–May heating season. Contact (888) 485-2537 for current program details.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <p className="font-semibold text-gray-900">Cherryland Electric (cooperative)</p>
            <p className="text-sm text-gray-600 mt-1">
              Most recent published schedule (2025): $500 for centralized ASHPs, $500 for mini-splits, $500 for HPWHs, $1,000 for geothermal. $10,000 annual cap per membership. Supports fuel-switching from gas/propane. Contact (231) 486-9261 to confirm 2026 availability.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Local Programs — Ann Arbor A2ZERO */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ann Arbor: A2ZERO Home Energy Rebate Program
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Ann Arbor operates Michigan&apos;s only major city-level heat pump incentive, funded by a voter-approved Community Climate Action Millage ($1.9M annually). Dual-fuel systems (heat pump + gas furnace backup) are not eligible — the program pushes toward full electrification. Equipment must be NEEP-listed with minimum SEER2 15.2 and HSPF2 8.0.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Measure</th>
                  <th className="text-left p-3 font-semibold">Market Rate</th>
                  <th className="text-left p-3 font-semibold">Income-Qualified (≤120% AMI)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Cold-climate HP (central or mini-split)</td>
                  <td className="p-3 font-semibold">$4,000</td>
                  <td className="p-3 font-semibold">$5,500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ductwork modifications</td>
                  <td className="p-3 font-semibold">$1,500</td>
                  <td className="p-3 font-semibold">$2,500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">$1,000</td>
                  <td className="p-3 font-semibold">$2,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Electric panel upgrade</td>
                  <td className="p-3 font-semibold">$1,000</td>
                  <td className="p-3 font-semibold">$2,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">
            Program runs through June 30, 2026 with plans for annual renewal. Ann Arbor explicitly encourages stacking A2ZERO with MiHER and utility rebates.
          </p>
        </div>
      </section>

      {/* 9. Stacking */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Programs Stack</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Utility rebates, MiHER (HOMES/HEAR), and A2ZERO draw from different funding sources and can stack. The key constraint: HOMES and HEAR cannot cover the same measure. Scenario: <strong>$17,500</strong> whole-home ducted cold-climate ASHP installation.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 150% AMI — HOMES + Utility</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>HEAR: not eligible</li>
                <li>HOMES: up to $4,000 (if 35%+ savings)</li>
                <li>Utility rebate: $300–$1,200</li>
                <li>Federal 25C/25D: $0 (expired)</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$600–$5,200</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 150% AMI in Ann Arbor</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>HOMES: up to $4,000 (if 35%+ savings)</li>
                <li>A2ZERO (market rate): $4,000</li>
                <li>DTE rebate: up to $1,200</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$9,200</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">80–150% AMI — HEAR + Utility</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>HEAR heat pump rebate: up to $8,000</li>
                <li>DTE or Consumers rebate: $300–$1,200</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$8,300–$9,200</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">Below 80% AMI in Ann Arbor — Best Case</p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>HEAR heat pump rebate: up to $8,000</li>
                <li>A2ZERO (income-qualified): $5,500</li>
                <li>DTE rebate: up to $1,200</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$14,700</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-5 mb-6">
            <p className="font-semibold text-gray-900 mb-1">What You&apos;ll Actually Pay</p>
            <p className="text-sm text-gray-700">
              On a <strong>$17,500</strong> project: <strong>$2,800 (low-income Ann Arbor) to $16,900 (above 150% AMI, utility rebate only) out of pocket</strong>. Most qualifying households (≤150% AMI) will see $8,000–$9,000 in MiHER incentives alone. The loss of the $2,000 Section 25C credit is most acutely felt by households above 150% AMI. No state tax credit exists for air-source heat pumps in Michigan.
            </p>
          </div>

          <p className="text-sm text-gray-500">
            The 25C loss adds ~$2,000 to out-of-pocket for above-150% AMI households. HOMES partially offsets this for whole-home projects achieving 35%+ energy savings.
          </p>
        </div>
      </section>

      {/* 10. Weatherization + Financing */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Weatherization &amp; Financing</h2>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Michigan Saves</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Michigan Saves offers unsecured financing through participating credit unions, with advertised rates as low as <strong>6.24% APR</strong> and terms up to 180 months. Maximum loan amounts vary by lender and can reach $100,000 in some cases. Can be combined with all rebate programs.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Weatherization Assistance Program (WAP)</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Michigan&apos;s WAP provides free energy upgrades — potentially including heat pump installation — for households at or below 200% of the Federal Poverty Level. Administered by the Michigan Department of Health and Human Services through 26 Community Action Agencies across the state.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <p className="font-semibold text-green-800 mb-1">✓ Best Candidates for Heat Pumps in Michigan</p>
            <p className="text-sm text-green-900">
              Households ≤150% AMI who qualify for MiHER HEAR (up to $8,000). Homeowners switching from propane or fuel oil in rural and northern Michigan (largest operating cost savings). Ann Arbor residents who can stack A2ZERO + MiHER + DTE. TCLP customers in Traverse City (up to $3,000 utility rebate alone). Low-income households who may qualify for both WAP and HEAR.
            </p>
          </div>
        </div>
      </section>

      {/* 11. Climate */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cold Climate: Why Equipment Choice Matters</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Michigan spans IECC Climate Zones 5A through 7. Cold-climate ASHPs meeting ENERGY STAR criteria (COP ≥1.75 at 5°F) are essential statewide, and equipment rated to −15°F or lower is strongly recommended for northern Michigan and the Upper Peninsula.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">City</th>
                  <th className="text-left p-3 font-semibold">Design Temp</th>
                  <th className="text-left p-3 font-semibold">Primary Heating Fuel</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Detroit</td>
                  <td className="p-3 font-semibold">0°F</td>
                  <td className="p-3">Natural gas</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Grand Rapids</td>
                  <td className="p-3 font-semibold">~0°F</td>
                  <td className="p-3">Natural gas</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Lansing</td>
                  <td className="p-3 font-semibold">−3.5°F</td>
                  <td className="p-3">Natural gas</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Marquette</td>
                  <td className="p-3 font-semibold">−8 to −10°F</td>
                  <td className="p-3">Propane / fuel oil</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Natural gas dominates southern Michigan heating. Propane and fuel oil concentrate in rural areas, northern Michigan, and the UP. Heat pumps are most economically attractive where they displace propane or fuel oil, making rural and UP households the strongest economic candidates for conversion — and also the areas requiring the most capable cold-climate equipment.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Manual J load calculations are important in Michigan&apos;s climate. Proper ductwork assessment matters too — many Michigan homes have aging duct systems designed for furnaces that may need modification for optimal heat pump performance. For information on pairing heat pumps with home battery storage, see our{" "}
            <Link href="/battery" className="text-brand-600 hover:underline">
              guide to home batteries in 2026
            </Link>.
          </p>
        </div>
      </section>

      {/* 12. How to Apply */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Apply</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <p className="font-semibold text-gray-900">Check your income eligibility</p>
                <p className="text-sm text-gray-700">HEAR requires ≤150% AMI. Enhanced rebates at ≤80% AMI. Use your household size and county to determine your AMI level.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <p className="font-semibold text-gray-900">Find an approved MiHER contractor</p>
                <p className="text-sm text-gray-700">HEAR rebates must go through an approved contractor who applies the discount at point of sale. Call 855-510-7080 for the contractor list.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <p className="font-semibold text-gray-900">Get pre-approval before work begins</p>
                <p className="text-sm text-gray-700">MiHER does not accept retroactive claims. Your project must be pre-approved before installation starts.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
              <div>
                <p className="font-semibold text-gray-900">Apply for your utility rebate separately</p>
                <p className="text-sm text-gray-700">Utility rebates use their own application processes. Your contractor can often help with this. Ann Arbor residents should also apply for A2ZERO through the City of Ann Arbor — it stacks with MiHER and utility rebates.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. What to Watch */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Watch</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">IRA Funding Runway</p>
              <p className="text-sm text-gray-600 mt-1">MiHER&apos;s $210 million in IRA funding is expected to last until September 2031 or until depleted. Federal policy changes could affect the timeline. Monitor fund levels at michigan.gov/egle or call 855-510-7080.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">DTE Funding Indicator</p>
              <p className="text-sm text-gray-600 mt-1">DTE shows a 20% funding indicator for its heat pump rebate program. When funds run out, the program pauses until the next cycle. Check availability before committing to a project.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">A2ZERO Program Renewal</p>
              <p className="text-sm text-gray-600 mt-1">Ann Arbor&apos;s A2ZERO program runs through June 30, 2026 with plans for annual renewal. Budget and rebate amounts may change for the next program year.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Utility Gas-to-Electric Policy</p>
              <p className="text-sm text-gray-600 mt-1">DTE and Consumers Energy currently restrict most heat pump rebates to electric-to-electric replacements. If either utility expands to cover gas-to-electric fuel-switching, it would significantly change the rebate landscape for most Michigan homeowners.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 14. FAQ */}
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

      {/* 15. See Also */}
      <section className="py-8 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-3">See also</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/heat-pumps/states/wi" className="text-brand-600 hover:underline">
                Wisconsin Heat Pump Rebates &amp; Incentives (2026)
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/il" className="text-brand-600 hover:underline">
                Illinois Heat Pump Rebates &amp; Incentives (2026)
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/in" className="text-brand-600 hover:underline">
                Indiana Heat Pump Rebates &amp; Incentives (2026)
              </Link>
            </li>
            <li>
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                Federal Heat Pump Tax Credits Ended — What It Means
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
            {miIncentive.sources.map((source: { label: string; url: string }, index: number) => (
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
              <strong>Disclaimer:</strong> This page covers the main statewide, utility, and local heat pump incentives available to Michigan homeowners in 2026. It does not calculate savings, guarantee eligibility, or represent any incentive program. Michigan has additional cooperatives and municipal utilities that may offer rebates not listed here. We verify status regularly but programs can change without notice. Always confirm current amounts and eligibility with EGLE, your utility, and your contractor before making decisions.
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
