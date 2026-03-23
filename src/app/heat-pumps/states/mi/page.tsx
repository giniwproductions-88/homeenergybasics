// src/app/heat-pumps/states/mi/page.tsx

import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Michigan Heat Pump Rebates 2026: MiHER + Utility Programs | Home Energy Basics",
  description:
    "Michigan's $210M MiHER program offers up to $8,000 for heat pumps. DTE, Consumers Energy, and TCLP add utility rebates. Federal credits are gone. Here's the complete 2026 picture.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/mi",
  },
  openGraph: {
    title: "Michigan Heat Pump Rebates 2026",
    description:
      "MiHER HEAR rebates up to $8,000 + utility rebates from DTE, Consumers Energy, TCLP, and more. Complete Michigan heat pump incentive guide.",
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
          text: "Michigan's main heat pump rebate is the MiHER HEAR program, which offers up to $8,000 for a heat pump at point of sale for households at or below 150% of Area Median Income. Utility rebates add $200–$3,000 depending on your provider. DTE Energy offers $150–$1,200, Consumers Energy offers $300–$350, Traverse City Light & Power offers up to $3,000, and Lansing BWL offers $200–$600. The federal Section 25C tax credit expired December 31, 2025.",
        },
      },
      {
        "@type": "Question",
        name: "Is the Michigan MiHER program still open?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Michigan's MiHER program launched statewide on April 14, 2025 and is accepting applications. It includes both HEAR (appliance-specific rebates) and HOMES (whole-home performance rebates). Funding of $210 million is expected to last until depleted or September 30, 2031.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get a heat pump rebate if I heat with natural gas in Michigan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "DTE Energy and Consumers Energy restrict most heat pump rebates to customers replacing existing electric heating, not gas-to-electric conversions. However, the MiHER HEAR program specifically supports fuel-switching from gas or propane to electric heat pumps. Ann Arbor's A2ZERO program also covers gas-to-electric conversions.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a cold-climate heat pump in Michigan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Michigan's winter design temperatures range from 0°F in Detroit and Grand Rapids to -10°F in Marquette. Cold-climate heat pumps rated to operate efficiently at 5°F or below are essential statewide. Look for equipment meeting ENERGY STAR cold-climate criteria: COP of 1.75 or greater at 5°F.",
        },
      },
      {
        "@type": "Question",
        name: "Can I stack Michigan heat pump rebates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Utility rebates, MiHER (HEAR or HOMES), and local programs like Ann Arbor's A2ZERO draw from different funding sources and can stack. The key constraint is that HOMES and HEAR cannot cover the same individual measure. A low-income household in Ann Arbor could potentially combine HEAR ($8,000) + A2ZERO ($5,500) + DTE ($1,200) for over $14,000 toward a cold-climate system.",
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

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="container-narrow">
          <nav className="text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-brand-600">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/heat-pumps" className="hover:text-brand-600">
              Heat Pumps
            </Link>{" "}
            / Michigan
          </nav>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Michigan Heat Pump Rebates &amp; Incentives (2026)
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mb-4">
            Federal tax credits are gone, but Michigan&apos;s $210 million MiHER
            program offers up to $8,000 per heat pump for qualifying households.
            Utility rebates add $200–$3,000 depending on your provider. Ann
            Arbor stacks even higher. Here&apos;s what&apos;s actually
            available — and what you&apos;ll realistically pay after rebates.
          </p>

          <p className="text-gray-500 text-sm mb-4">
            This guide is for Michigan homeowners trying to understand what heat
            pump rebates are actually available in 2026 and how much they can
            realistically save.
          </p>

          <p className="text-sm text-gray-400">
            Last verified: {formattedDate}
          </p>
        </div>
      </section>

      {/* Status Card */}
      <section className="py-8">
        <div className="container-narrow">
          <StatusCard incentive={miIncentive} />
        </div>
      </section>

      {/* Short Version */}
      <section className="py-8">
        <div className="container-narrow">
          <div className="bg-gray-50 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              The Short Version
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="font-semibold text-green-800 mb-2">
                  ✓ Available now
                </p>
                <p className="text-sm text-green-700">
                  MiHER HEAR rebates up to $8,000 (≤150% AMI). DTE rebates up
                  to $1,200. Consumers Energy $300–$350. TCLP up to $3,000. BWL
                  up to $600. Ann Arbor A2ZERO up to $5,500.
                </p>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="font-semibold text-red-800 mb-2">✗ Gone</p>
                <p className="text-sm text-red-700">
                  Federal 25C tax credit ($2,000/yr for heat pumps). Federal 25D
                  tax credit (30% for geothermal). Both expired December 31,
                  2025.
                </p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="font-semibold text-amber-800 mb-2">
                  ⚠ Key caveat
                </p>
                <p className="text-sm text-amber-700">
                  DTE and Consumers Energy restrict most rebates to customers
                  replacing electric heating — not gas-to-electric conversions.
                  MiHER HEAR covers fuel-switching.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Federal Credits Dead */}
      <section className="py-8">
        <div className="container-narrow">
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Federal Tax Credits: Both Expired
            </h2>
            <p className="text-gray-700 mb-4">
              The One Big Beautiful Bill Act (signed July 4, 2025) terminated
              both residential energy tax credits effective December 31, 2025.{" "}
              <strong>Section 25C</strong> had provided up to $2,000/year for
              heat pumps. <strong>Section 25D</strong> had covered 30% of
              geothermal heat pump costs with no cap.
            </p>
            <p className="text-gray-700 mb-4">
              If you completed an installation before the deadline, the
              &ldquo;placed in service&rdquo; rule matters: the IRS defines the
              expenditure date as when installation is completed, not when
              equipment is purchased or paid for. For 25D, unused credit from
              qualifying 2025 expenditures can be carried forward to future tax
              years. Section 25C offers no carryforward.
            </p>
            <p className="text-gray-700">
              As of March 2026, the IRS guidance reflects the credits as ended
              and no replacement federal heat pump credit is active. See our{" "}
              <Link
                href="/federal-heat-pump-tax-credit-expired"
                className="text-brand-600 hover:underline"
              >
                federal credit explainer
              </Link>{" "}
              for details.
            </p>
          </div>
        </div>
      </section>

      {/* MiHER Program */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            MiHER: Michigan&apos;s $210 Million State Rebate Program
          </h2>

          <p className="text-gray-700 mb-6">
            Michigan launched both components of the Michigan Home Energy Rebates
            (MiHER) program statewide on April 14, 2025, administered by the
            Department of Environment, Great Lakes, and Energy (EGLE). Total IRA
            funding: $210 million. CLEAResult handles implementation and
            application processing (call center: 855-510-7080).
          </p>

          {/* HEAR */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              HEAR (Home Electrification and Appliance Rebates)
            </h3>
            <p className="text-gray-700 mb-4">
              Point-of-sale rebates applied as a discount at installation
              through approved MiHER contractors. Specifically supports
              fuel-switching (gas/propane to electric heat pump). Rebate income
              is not taxable per IRS Announcement 2024-19.
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-green-300">
                    <th className="text-left py-2 pr-4 font-semibold text-gray-900">
                      Measure
                    </th>
                    <th className="text-right py-2 font-semibold text-gray-900">
                      Maximum Rebate
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-green-100">
                    <td className="py-2 pr-4">
                      Heat pump (space heating/cooling)
                    </td>
                    <td className="py-2 text-right font-semibold">
                      Up to $8,000
                    </td>
                  </tr>
                  <tr className="border-b border-green-100">
                    <td className="py-2 pr-4">Heat pump water heater</td>
                    <td className="py-2 text-right font-semibold">
                      Up to $1,750
                    </td>
                  </tr>
                  <tr className="border-b border-green-100">
                    <td className="py-2 pr-4">Electric panel upgrade</td>
                    <td className="py-2 text-right font-semibold">
                      Up to $4,000
                    </td>
                  </tr>
                  <tr className="border-b border-green-100">
                    <td className="py-2 pr-4">
                      Insulation, air sealing, ventilation
                    </td>
                    <td className="py-2 text-right font-semibold">
                      Up to $1,600
                    </td>
                  </tr>
                  <tr className="border-b border-green-100">
                    <td className="py-2 pr-4">Electric wiring</td>
                    <td className="py-2 text-right font-semibold">
                      Up to $2,500
                    </td>
                  </tr>
                  <tr className="border-b border-green-100">
                    <td className="py-2 pr-4">Electric stove or dryer</td>
                    <td className="py-2 text-right font-semibold">
                      Up to $840
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-semibold">
                      Total household cap
                    </td>
                    <td className="py-2 text-right font-bold text-green-800">
                      $14,000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-2">
              <strong>Income determines the rebate percentage:</strong>
            </p>
            <ul className="text-gray-700 space-y-1 text-sm mb-4">
              <li>
                • <strong>≤80% AMI:</strong> Enhanced rebates covering up to
                100% of approved costs
              </li>
              <li>
                • <strong>81–150% AMI:</strong> Standard rebates covering up to
                50%
              </li>
              <li>
                • <strong>&gt;150% AMI:</strong> Not currently eligible for HEAR
              </li>
            </ul>
            <p className="text-sm text-gray-600">
              All work must be pre-approved and performed by an approved MiHER
              contractor. Retroactive claims are not accepted.
            </p>
          </div>

          {/* HOMES */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              HOMES (Home Efficiency Rebates)
            </h3>
            <p className="text-gray-700 mb-4">
              Whole-home performance approach. Rebates scale with modeled energy
              savings:
            </p>
            <ul className="text-gray-700 space-y-2 text-sm mb-4">
              <li>
                • <strong>20–34% savings:</strong> $2,000 (standard) / $4,000
                (≤80% AMI)
              </li>
              <li>
                • <strong>35%+ savings:</strong> $4,000 (standard) / $8,000
                (≤80% AMI)
              </li>
              <li>
                • Low-income cap: up to 80% of project costs, $20,000 max
              </li>
            </ul>
            <p className="text-sm text-gray-600">
              HOMES and HEAR cannot be combined for the same individual measure
              but can fund different upgrades within the same project.
            </p>
          </div>
        </div>
      </section>

      {/* Utility Rebates */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Utility Rebates
          </h2>
          <p className="text-gray-700 mb-8">
            Michigan&apos;s utility rebates vary enormously.{" "}
            <strong>
              DTE and Consumers Energy restrict most heat pump rebates to
              customers replacing existing electric heating
            </strong>
            , not gas-to-electric conversions. Since most Michigan homes heat
            with natural gas, this pushes fuel-switching households toward MiHER
            HEAR.
          </p>

          {/* DTE */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              DTE Energy
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Detroit metro, ~2.3 million electric customers
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-2 pr-4 font-semibold text-gray-900">
                      Equipment
                    </th>
                    <th className="text-right py-2 font-semibold text-gray-900">
                      Rebate
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">
                      Cold-climate ASHP (16+ SEER2, 9.1+ HSPF2, EER2 ≥10)
                    </td>
                    <td className="py-2 text-right font-semibold">$1,200</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">
                      Cold-climate ASHP (lower efficiency tiers)
                    </td>
                    <td className="py-2 text-right">$900–$1,000</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Standard ASHP (non-cold-climate)</td>
                    <td className="py-2 text-right">$150–$500</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Ductless mini-split</td>
                    <td className="py-2 text-right">$700–$1,000</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Ground-source heat pump</td>
                    <td className="py-2 text-right">$600–$800</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600">
              All equipment must be AHRI-certified matched systems. Rebates
              limited to customers replacing existing electric heating. Monitor
              fund availability — DTE shows a 20% funding indicator.
            </p>
          </div>

          {/* Consumers Energy */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Consumers Energy
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Western/central Michigan, ~1.9 million electric customers
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-2 pr-4 font-semibold text-gray-900">
                      Equipment
                    </th>
                    <th className="text-right py-2 font-semibold text-gray-900">
                      Rebate
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">ASHP (SEER2 15.2+)</td>
                    <td className="py-2 text-right font-semibold">$300</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">
                      Ductless mini-split (SEER2 17+, HSPF2 8+)
                    </td>
                    <td className="py-2 text-right font-semibold">$350</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Ground-source heat pump</td>
                    <td className="py-2 text-right">$200–$300</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600">
              2026 program runs through December 31, 2026 or until funds are
              exhausted. Does not differentiate between cold-climate and standard
              ASHPs.
            </p>
          </div>

          {/* TCLP */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Traverse City Light &amp; Power (TCLP)
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Traverse City area — Michigan&apos;s most generous utility rebates
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-2 pr-4 font-semibold text-gray-900">
                      Equipment
                    </th>
                    <th className="text-right py-2 font-semibold text-gray-900">
                      Rebate
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">
                      Cold-climate ducted ASHP (SEER2 ≥15.2, EER2 ≥9, HSPF2
                      ≥8.1, COP ≥1.75 at 5°F)
                    </td>
                    <td className="py-2 text-right font-semibold">
                      $3,000/system
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">
                      Standard ducted ASHP (SEER2 ≥15.2, no COP requirement)
                    </td>
                    <td className="py-2 text-right font-semibold">
                      $1,500/system
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">
                      Cold-climate ductless mini-split (SEER2 ≥16, COP ≥1.75 at
                      5°F)
                    </td>
                    <td className="py-2 text-right font-semibold">
                      $3,000/system
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">HPWH (≤55 gal, UEF ≥2.2)</td>
                    <td className="py-2 text-right font-semibold">$1,000</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Electric panel upgrade</td>
                    <td className="py-2 text-right">$1,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600">
              Program year: July 1, 2025 – June 30, 2026. On-bill financing
              available ($5,000–$30,000).
            </p>
          </div>

          {/* BWL */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Lansing Board of Water &amp; Light (BWL)
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Lansing area — Hometown Energy Savers® program
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-2 pr-4 font-semibold text-gray-900">
                      Equipment
                    </th>
                    <th className="text-right py-2 font-semibold text-gray-900">
                      Rebate
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">
                      Central ASHP (tiered by SEER2: 15.2–21+)
                    </td>
                    <td className="py-2 text-right">$200–$600</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Mini/multi-split</td>
                    <td className="py-2 text-right">
                      $300 ($500 if replacing electric resistance)
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">HPWH (ENERGY STAR, EF ≥2.0)</td>
                    <td className="py-2 text-right font-semibold">$500</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600">
              Program runs January–December 2026. Administered by Michigan
              Energy Options.
            </p>
          </div>

          {/* Smaller Utilities */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Other Michigan Utilities
            </h3>

            <div className="space-y-4">
              <div>
                <p className="font-semibold text-gray-900">
                  UPPCO (Upper Peninsula)
                </p>
                <p className="text-sm text-gray-700">
                  Offers heat pump rebates and an EMPOWER program with free
                  upgrades for income-qualified customers. UPPCO territory was a
                  MiHER pilot region. Contact (906) 449-2222 or
                  energyefficiency@uppco.com for current rebate amounts.
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-900">
                  Great Lakes Energy (cooperative)
                </p>
                <p className="text-sm text-gray-700">
                  Air-source heat pump rebates of $250–$750. Geothermal rebates
                  of $500–$750. Members using heat pumps as primary heat may
                  qualify for the Efficient Electric Heating (EEH) rate — a
                  3¢/kWh credit on heat pump energy use during the
                  November–May heating season. Contact (888) 485-2537 for
                  current program details.
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-900">
                  Cherryland Electric (cooperative)
                </p>
                <p className="text-sm text-gray-700">
                  Most recent published schedule (2025): $500 for centralized
                  ASHPs, $500 for mini-splits, $500 for HPWHs, $1,000 for
                  geothermal. $10,000 annual cap per membership. Supports
                  fuel-switching from gas/propane. Contact (231) 486-9261 to
                  confirm 2026 availability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ann Arbor A2ZERO */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ann Arbor: A2ZERO Home Energy Rebate Program
          </h2>

          <p className="text-gray-700 mb-6">
            Ann Arbor operates Michigan&apos;s only major city-level heat pump
            incentive, funded by a voter-approved Community Climate Action
            Millage ($1.9M annually). Dual-fuel systems (heat pump + gas furnace
            backup) are not eligible — the program pushes toward full
            electrification. Equipment must be NEEP-listed with minimum SEER2
            15.2 and HSPF2 8.0.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-2 pr-4 font-semibold text-gray-900">
                    Measure
                  </th>
                  <th className="text-right py-2 pr-4 font-semibold text-gray-900">
                    Market Rate
                  </th>
                  <th className="text-right py-2 font-semibold text-gray-900">
                    Income-Qualified (≤120% AMI)
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4">
                    Cold-climate HP (central or mini-split)
                  </td>
                  <td className="py-2 text-right pr-4 font-semibold">$4,000</td>
                  <td className="py-2 text-right font-semibold">$5,500</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4">Ductwork modifications</td>
                  <td className="py-2 text-right pr-4">$1,500</td>
                  <td className="py-2 text-right">$2,500</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4">Heat pump water heater</td>
                  <td className="py-2 text-right pr-4">$1,000</td>
                  <td className="py-2 text-right">$2,000</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4">Electric panel upgrade</td>
                  <td className="py-2 text-right pr-4">$1,000</td>
                  <td className="py-2 text-right">$2,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-600">
            Program runs through June 30, 2026 with plans for annual renewal.
            Ann Arbor explicitly encourages stacking A2ZERO with MiHER and
            utility rebates.
          </p>
        </div>
      </section>

      {/* Stacking */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            How Programs Stack
          </h2>

          <p className="text-gray-700 mb-4">
            Utility rebates, MiHER (HOMES/HEAR), and A2ZERO draw from different
            funding sources and can stack. The key constraint: HOMES and HEAR
            cannot cover the same measure.
          </p>

          <p className="text-gray-900 font-semibold mb-8">
            Bottom line: Most qualifying households will see $8,000–$9,000 in
            incentives through MiHER alone, and up to $14,000+ in Ann Arbor
            with full stacking.
          </p>

          <p className="text-gray-600 mb-6 text-sm italic">
            Scenario: $17,500 whole-home ducted cold-climate ASHP installation
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Low-to-Moderate Income (≤80% AMI)
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>HEAR heat pump rebate: up to $8,000</li>
                <li>DTE or Consumers rebate: $300–$1,200</li>
                <li className="font-semibold border-t pt-2">
                  Total incentives: ~$8,300–$9,200
                </li>
                <li className="text-green-700 font-semibold">
                  Net cost: ~$8,300–$9,200
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Low-Income in Ann Arbor
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>HEAR heat pump rebate: up to $8,000</li>
                <li>A2ZERO (income-qualified): $5,500</li>
                <li>DTE rebate: up to $1,200</li>
                <li className="font-semibold border-t pt-2">
                  Total incentives: ~$13,500–$14,700
                </li>
                <li className="text-green-700 font-semibold">
                  Net cost: under $3,000
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Higher Income (&gt;150% AMI)
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>HEAR: not eligible</li>
                <li>HOMES: up to $4,000 (if 35%+ savings)</li>
                <li>Utility rebate: $300–$1,200</li>
                <li className="font-semibold border-t pt-2">
                  Total incentives: $600–$5,200
                </li>
                <li className="text-amber-700 font-semibold">
                  Net cost: $12,300–$16,900
                </li>
              </ul>
              <p className="text-xs text-gray-500 mt-2">
                The loss of the $2,000 Section 25C credit is most acutely felt
                by this group.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Higher Income in Ann Arbor
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>HOMES: up to $4,000 (if 35%+ savings)</li>
                <li>A2ZERO (market rate): $4,000</li>
                <li>DTE rebate: up to $1,200</li>
                <li className="font-semibold border-t pt-2">
                  Total incentives: up to $9,200
                </li>
                <li className="text-green-700 font-semibold">
                  Net cost: ~$8,300+
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Climate Context */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Cold Climate: Why Equipment Choice Matters
          </h2>

          <p className="text-gray-700 mb-6">
            Michigan spans IECC Climate Zones 5A through 7. Winter design
            temperatures confirm the need for cold-climate rated equipment:
            Detroit at 0°F, Grand Rapids near 0°F, Lansing at -3.5°F, and
            Marquette around -8 to -10°F. Cold-climate ASHPs meeting ENERGY
            STAR criteria (COP ≥1.75 at 5°F) are essential statewide, and
            equipment rated to -15°F or lower is strongly recommended for
            northern Michigan and the Upper Peninsula.
          </p>

          <p className="text-gray-700 mb-6">
            Natural gas dominates southern Michigan heating. Propane and fuel oil
            concentrate in rural areas, northern Michigan, and the UP. Heat
            pumps are most economically attractive where they displace propane or
            fuel oil, making rural and UP households the strongest economic
            candidates for conversion — and also the areas requiring the most
            capable cold-climate equipment.
          </p>

          <p className="text-gray-700">
            Manual J load calculations are important in Michigan&apos;s climate.
            Proper ductwork assessment matters too — many Michigan homes have
            aging duct systems designed for furnaces that may need modification
            for optimal heat pump performance.
          </p>
        </div>
      </section>

      {/* Financing */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Financing</h2>

          <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Michigan Saves
            </h3>
            <p className="text-gray-700 mb-4">
              Michigan Saves offers unsecured financing through participating
              credit unions, with advertised rates as low as 6.24% APR and terms
              up to 180 months. Maximum loan amounts vary by lender and can
              reach $100,000 in some cases. Can be combined with all rebate
              programs.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Weatherization Assistance Program (WAP)
            </h3>
            <p className="text-gray-700">
              Michigan&apos;s WAP provides free energy upgrades — potentially
              including heat pump installation — for households at or below 200%
              of the Federal Poverty Level. Administered by the Michigan
              Department of Health and Human Services through 26 Community Action
              Agencies across the state.
            </p>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            How to Apply
          </h2>

          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  Check your income eligibility
                </p>
                <p className="text-sm text-gray-600">
                  HEAR requires ≤150% AMI. Enhanced rebates at ≤80% AMI. Use
                  your household size and county to determine your AMI level.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  Find an approved MiHER contractor
                </p>
                <p className="text-sm text-gray-600">
                  HEAR rebates must go through an approved contractor who applies
                  the discount at point of sale. Call 855-510-7080 for the
                  contractor list.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  Get pre-approval before work begins
                </p>
                <p className="text-sm text-gray-600">
                  MiHER does not accept retroactive claims. Your project must be
                  pre-approved before installation starts.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  Apply for your utility rebate separately
                </p>
                <p className="text-sm text-gray-600">
                  Utility rebates use their own application processes. Your
                  contractor can often help with this.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                5
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  Ann Arbor residents: apply for A2ZERO too
                </p>
                <p className="text-sm text-gray-600">
                  Separate application through the City of Ann Arbor. Can stack
                  with MiHER and utility rebates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Neighboring States
          </h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/heat-pumps/states/wi"
                className="text-brand-600 hover:underline"
              >
                Wisconsin Heat Pump Incentives →
              </Link>
            </li>
            <li>
              <Link
                href="/heat-pumps"
                className="text-brand-600 hover:underline"
              >
                All States: Heat Pump Incentive Tracker →
              </Link>
            </li>
            <li>
              <Link
                href="/federal-heat-pump-tax-credit-expired"
                className="text-brand-600 hover:underline"
              >
                What Happened to Federal Heat Pump Tax Credits →
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqJsonLd.mainEntity.map(
              (
                faq: {
                  name: string;
                  acceptedAnswer: { text: string };
                },
                index: number
              ) => (
                <div key={index} className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {faq.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="space-y-2 text-sm">
            {miIncentive.sources.map(
              (source: { url: string; label: string }, index: number) => (
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
              )
            )}
          </ul>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8">
        <div className="container-narrow">
          <div className="bg-gray-100 rounded-lg p-6">
            <p className="text-gray-500 text-xs leading-relaxed">
              <strong>Disclaimer:</strong> This page covers the main state,
              utility, and local heat pump incentives available to Michigan
              homeowners in 2026. It does not calculate savings, guarantee
              eligibility, or represent any incentive program. Michigan has
              additional cooperatives and municipal utilities that may offer
              rebates not listed here. We verify status regularly but programs
              can change without notice. Always confirm current amounts and
              eligibility with your utility and contractor before making
              decisions.
            </p>
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/heat-pumps"
              className="text-brand-600 hover:underline text-sm"
            >
              ← Back to Heat Pumps overview
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
