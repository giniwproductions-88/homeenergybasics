// src/app/heat-pumps/states/nj/page.tsx

import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "New Jersey Heat Pump Rebates 2026: What's Actually Available | Home Energy Basics",
  description:
    "NJ Whole Home rebates up to $7,500, utility rebates from PSE&G/JCP&L/ACE, and 0% financing — here's what New Jersey homeowners can actually get in 2026 after federal credits ended.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/nj",
  },
  openGraph: {
    title: "New Jersey Heat Pump Rebates 2026",
    description:
      "NJ Whole Home rebates up to $7,500, utility-specific incentives, and PSE&G's building decarbonization program. No federal tax credits in 2026.",
    url: "https://homeenergybasics.com/heat-pumps/states/nj",
    type: "article",
  },
};

export default function NewJerseyPage() {
  const njIncentive = incentives.NJ;
  const formattedDate = formatDate(njIncentive.lastVerified);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What heat pump rebates are available in New Jersey in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The NJ Whole Home program offers up to $7,500 in cash-back incentives plus 0% financing. Each electric utility (PSE&G, JCP&L, Atlantic City Electric, RECO) offers additional HVAC rebates of $300–$1,000 depending on equipment efficiency. These programs stack. Federal tax credits are not available for 2026 installations.",
        },
      },
      {
        "@type": "Question",
        name: "Can I stack NJ Whole Home rebates with utility rebates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The NJ Whole Home program and utility HVAC equipment rebates are explicitly stackable. A homeowner can receive up to $7,500 from Whole Home plus $500–$1,000 from their electric utility, plus gas utility rebates where available.",
        },
      },
      {
        "@type": "Question",
        name: "What is PSE&G's Building Decarbonization program?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PSE&G offers enhanced rebates for customers who fully replace fossil fuel heating with cold-climate heat pumps. Reported incentives are significantly higher than standard utility rebates, with additional support for decommissioning, re-ducting, and electrical panel upgrades. PSE&G also offers 0% on-bill repayment with no credit check.",
        },
      },
      {
        "@type": "Question",
        name: "Has New Jersey launched the IRA HEAR/HOMES rebates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "As of March 22, 2026, New Jersey has not launched consumer-facing HEAR or HOMES rebates. The state received over $185 million in IRA funding, but program design and administrator selection are still in progress. NJ's plan directs most funds toward low-income multifamily housing rather than broad single-family rebates.",
        },
      },
      {
        "@type": "Question",
        name: "Do heat pumps work in New Jersey winters?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. New Jersey's winter design temperatures are around 10°F in Newark and Trenton. Modern cold-climate heat pumps maintain effective heating output well below 0°F. Every NJ utility rebate program includes a cold-climate tier with higher incentives for qualifying equipment.",
        },
      },
      {
        "@type": "Question",
        name: "What is the NJ Comfort Partners program?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Comfort Partners provides free energy efficiency improvements — including heating system repair or replacement — to income-eligible households. Eligibility is based on household income at or below 225–250% of the Federal Poverty Level, or enrollment in assistance programs like LIHEAP, SNAP, or Section 8.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd data={faqJsonLd} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-energy-50 via-white to-gray-50 py-12 md:py-16">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-brand-600 font-medium mb-2">
              <Link href="/" className="hover:underline">
                Home
              </Link>{" "}
              /{" "}
              <Link href="/heat-pumps" className="hover:underline">
                Heat Pumps
              </Link>{" "}
              / New Jersey
            </p>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              New Jersey Heat Pump Rebates &amp; Incentives (2026)
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              New Jersey homeowners still have meaningful heat pump incentives in
              2026 — but they come entirely from state and utility programs now.
              The statewide Whole Home program offers up to $7,500 in cash-back
              rebates, and each electric utility adds its own equipment
              incentives on top. Your total depends heavily on which utility serves
              your home.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last verified: {formattedDate}
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Program rules and rebate amounts may change after this date.
            </p>
          </div>
        </div>
      </section>

      {/* Status Card */}
      <section className="py-12">
        <div className="container-narrow">
          <StatusCard incentive={njIncentive} />
        </div>
      </section>

      {/* Short Version */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            The Short Version
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <p className="text-2xl mb-2">✗</p>
              <h3 className="font-semibold text-gray-900 mb-2">
                Federal Credits
              </h3>
              <p className="text-gray-600 text-sm">
                Section 25C and 25D tax credits ended December 31, 2025. No
                federal residential heat pump credit exists for 2026
                installations.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <p className="text-2xl mb-2">✓</p>
              <h3 className="font-semibold text-gray-900 mb-2">
                State &amp; Utility Rebates
              </h3>
              <p className="text-gray-600 text-sm">
                Whole Home cash-back up to $7,500 plus utility rebates of
                $300–$1,000. All four electric utilities have active programs.
                0% financing available.
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <p className="text-2xl mb-2">⚠</p>
              <h3 className="font-semibold text-gray-900 mb-2">
                $185M Pending
              </h3>
              <p className="text-gray-600 text-sm">
                NJ received over $185 million in IRA funding for HEAR/HOMES
                rebates but has not launched consumer-facing programs as of{" "}
                {formattedDate}.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Federal Credits Dead */}
      <section className="py-12">
        <div className="container-narrow">
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Federal Tax Credits: Not Available in 2026
            </h2>
            <p className="text-gray-700 mb-4">
              The IRS states that the Section 25C Energy Efficient Home
              Improvement Credit and the Section 25D Residential Clean Energy
              Credit apply only to qualifying property placed in service through
              December 31, 2025. The One Big Beautiful Bill Act (signed July 4,
              2025) accelerated both expirations. Equipment must have been
              installed and operational by that date — a purchase contract or
              deposit alone does not qualify.
            </p>
            <p className="text-gray-700">
              If you had a heat pump installed and operational before January 1,
              2026, you can still claim the credit on your 2025 tax return. For
              more details, see our{" "}
              <Link
                href="/federal-heat-pump-tax-credit-expired"
                className="text-brand-600 hover:underline font-medium"
              >
                federal credit explainer
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* NJ Whole Home Program */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            NJ Whole Home Program: Up to $7,500 Cash Back
          </h2>
          <p className="text-gray-700 mb-6">
            The NJ Whole Home Energy Efficiency Incentive Program (formerly Home
            Performance with ENERGY STAR) is the largest single incentive
            available statewide. It provides cash-back rebates plus 0% interest
            financing for comprehensive home energy upgrades.
          </p>

          <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
            <h3 className="font-semibold text-gray-900 mb-4">
              Cash-back amounts
            </h3>
            <p className="text-gray-700 mb-4">
              Rebates scale with projected Total Energy Savings (TES): $2,000
              base at 5% TES, plus $200 per additional percentage point, up to
              $7,500 at 33% TES.
            </p>
            <h3 className="font-semibold text-gray-900 mb-4 mt-6">
              Eligible measures
            </h3>
            <p className="text-gray-700 mb-4">
              Air-source heat pumps, ground-source heat pumps, ductless
              mini-splits, heat pump water heaters, insulation, and air sealing.
            </p>
            <h3 className="font-semibold text-gray-900 mb-4 mt-6">
              Requirements
            </h3>
            <p className="text-gray-700 mb-4">
              A BPI-certified energy audit through Ciel Power (the program
              administrator) is required. All work must be performed by a
              BPI-certified participating contractor. There are no income
              requirements for eligibility, though credit qualification is needed
              for financing.
            </p>
            <h3 className="font-semibold text-gray-900 mb-4 mt-6">
              Financing
            </h3>
            <p className="text-gray-700">
              0% interest financing up to $25,000 is available through the
              program for qualified borrowers.
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-amber-800 text-sm">
              <strong>Note:</strong> The former COOLAdvantage and WARMAdvantage
              direct rebate programs through njcleanenergy.com are closed. Since
              July 2021, HVAC equipment rebates are administered by each utility,
              not through the centralized NJ Clean Energy website.
            </p>
          </div>
        </div>
      </section>

      {/* Utility Rebates */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Electric Utility Rebates (by Territory)
          </h2>
          <p className="text-gray-700 mb-8">
            Your electric utility determines your equipment rebates. These stack
            with the Whole Home program. All four investor-owned electric
            utilities have active HVAC rebate programs.
          </p>

          {/* PSE&G */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              PSE&amp;G
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              ~2.3 million customers · Northern &amp; Central NJ
            </p>

            <h4 className="font-semibold text-gray-900 mb-3">
              Standard HVAC Instant Rebates
            </h4>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 pr-4 font-semibold text-gray-700">
                      Equipment
                    </th>
                    <th className="text-left py-2 pr-4 font-semibold text-gray-700">
                      Rebate
                    </th>
                    <th className="text-left py-2 font-semibold text-gray-700">
                      Minimum Efficiency
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">ASHP – Tier 1</td>
                    <td className="py-2 pr-4 font-medium text-gray-900">
                      $300
                    </td>
                    <td className="py-2">SEER2 ≥ 15.2</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">ASHP – Tier 2</td>
                    <td className="py-2 pr-4 font-medium text-gray-900">
                      $450
                    </td>
                    <td className="py-2">SEER2 ≥ 17.1</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Cold-climate ASHP</td>
                    <td className="py-2 pr-4 font-medium text-gray-900">
                      $600
                    </td>
                    <td className="py-2">
                      HSPF2 ≥ 8.1, COP ≥ 1.75 at 5°F
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Heat pump water heater</td>
                    <td className="py-2 pr-4 font-medium text-gray-900">
                      $450
                    </td>
                    <td className="py-2">ENERGY STAR certified</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              LMI customers receive an additional $300 per measure. Rebates are
              delivered as instant point-of-sale discounts through participating
              contractors.
            </p>

            <div className="bg-brand-50 border border-brand-200 rounded-lg p-4 mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">
                Building Decarbonization Program (PSE&amp;G only)
              </h4>
              <p className="text-gray-700 text-sm mb-2">
                PSE&amp;G offers significantly higher incentives for customers who
                fully replace fossil fuel heating with cold-climate heat pumps.
                This program includes enhanced rebates for equipment,
                decommissioning old systems, re-ducting, electrical panel
                upgrades, and additional heat pump units. LMI households receive
                higher incentive caps.
              </p>
              <p className="text-gray-700 text-sm mb-2">
                Requirements include NEEP-listed cold-climate equipment, ACCA
                Manual J load calculations, and Manual S equipment selection.
              </p>
              <p className="text-gray-700 text-sm">
                <strong>0% on-bill repayment</strong> — no credit check required
                — covers up to $75,000 total, with the obligation transferring to
                the next homeowner if the property is sold. Contact PSE&amp;G
                directly to confirm current rebate amounts and eligibility —
                this program is more complex than standard utility rebates.
                Visit{" "}
                <a
                  href="https://homeenergy.pseg.com/heatingandcooling"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 hover:underline"
                >
                  homeenergy.pseg.com
                </a>{" "}
                for current program details and amounts.
              </p>
            </div>
          </div>

          {/* JCP&L */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              JCP&amp;L (FirstEnergy)
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              ~1.1 million customers · Central &amp; Western NJ
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 pr-4 font-semibold text-gray-700">
                      Equipment
                    </th>
                    <th className="text-left py-2 pr-4 font-semibold text-gray-700">
                      Rebate
                    </th>
                    <th className="text-left py-2 font-semibold text-gray-700">
                      Minimum Efficiency
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Ducted ASHP – Tier 1</td>
                    <td className="py-2 pr-4 font-medium text-gray-900">
                      $500
                    </td>
                    <td className="py-2">SEER2 ≥ 15.2, HSPF2 ≥ 7.8</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Ducted ASHP – Tier 2</td>
                    <td className="py-2 pr-4 font-medium text-gray-900">
                      $750
                    </td>
                    <td className="py-2">SEER2 ≥ 17.1, HSPF2 ≥ 7.8</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Cold-climate ASHP (ducted)</td>
                    <td className="py-2 pr-4 font-medium text-gray-900">
                      $1,000
                    </td>
                    <td className="py-2">
                      SEER2 ≥ 15.2, HSPF2 ≥ 8.1, COP ≥ 1.75 at 5°F
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Ductless mini-split</td>
                    <td className="py-2 pr-4 font-medium text-gray-900">
                      $750
                    </td>
                    <td className="py-2">SEER2 ≥ 17.1, HSPF2 ≥ 7.8</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Heat pump water heater</td>
                    <td className="py-2 pr-4 font-medium text-gray-900">
                      $750
                    </td>
                    <td className="py-2">ENERGY STAR certified</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 text-sm mb-2">
              LMI customers receive an additional $200 per unit. Rebates are
              post-installation, submitted via CLEAResult. 0% APR financing
              available through NEIF ($2,500–$25,000, 36–84 months).
            </p>
          </div>

          {/* Atlantic City Electric */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Atlantic City Electric (Exelon)
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              ~560,000 customers · Southern NJ &amp; Shore
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 pr-4 font-semibold text-gray-700">
                      Equipment
                    </th>
                    <th className="text-left py-2 pr-4 font-semibold text-gray-700">
                      Rebate
                    </th>
                    <th className="text-left py-2 font-semibold text-gray-700">
                      Minimum Efficiency
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">ASHP split – Tier 1</td>
                    <td className="py-2 pr-4 font-medium text-gray-900">
                      $500
                    </td>
                    <td className="py-2">SEER2 ≥ 15.2, HSPF2 ≥ 7.8</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">ASHP split – Tier 2</td>
                    <td className="py-2 pr-4 font-medium text-gray-900">
                      $750
                    </td>
                    <td className="py-2">SEER2 ≥ 17.1, HSPF2 ≥ 7.8</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Cold-climate ASHP</td>
                    <td className="py-2 pr-4 font-medium text-gray-900">
                      $1,000
                    </td>
                    <td className="py-2">
                      SEER2 ≥ 15.2, HSPF2 ≥ 8.1, COP ≥ 1.75 at 5°F
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Ductless mini-split</td>
                    <td className="py-2 pr-4 font-medium text-gray-900">
                      $750
                    </td>
                    <td className="py-2">SEER2 ≥ 17.1, HSPF2 ≥ 7.8</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Heat pump water heater</td>
                    <td className="py-2 pr-4 font-medium text-gray-900">
                      $750
                    </td>
                    <td className="py-2">ENERGY STAR certified</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 text-sm">
              LMI customers receive an additional $300 per unit. NEIF 0%
              financing available up to $25,000.
            </p>
          </div>

          {/* RECO */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Rockland Electric (RECO)
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              ~75,000 customers · Bergen, Passaic &amp; Sussex counties
            </p>
            <p className="text-gray-700 mb-4">
              RECO&apos;s Clean Heat Program offers heat pump rebates with base
              incentives plus LMI adders for fuel-switching projects. 0% APR
              financing through NEIF ($2,500–$25,000) is available, with
              120-month terms for LMI households versus 84 months standard.
              Contact RECO directly for current rebate amounts.
            </p>
          </div>

          {/* Equipment requirements */}
          <div className="bg-gray-100 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-3">
              Equipment requirements (all utilities)
            </h3>
            <p className="text-gray-700 text-sm">
              All programs require ENERGY STAR certification and use post-2023
              DOE testing standards (SEER2/EER2/HSPF2). Cold-climate models must
              meet COP ≥ 1.75 at 5°F and appear on the NEEP Product List
              (ashp.neep.org). Both indoor and outdoor units must be replaced and
              AHRI-matched. Programs do not restrict by refrigerant type — both
              R-410A and R-454B systems qualify if efficiency thresholds are met.
            </p>
          </div>
        </div>
      </section>

      {/* Gas Utility Note */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Gas Utility Programs
          </h2>
          <p className="text-gray-700 mb-6">
            NJ&apos;s gas utilities take different approaches to heat pump
            support. This matters because many NJ homes are served by both an
            electric and a gas utility.
          </p>

          <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
            <h3 className="font-semibold text-gray-900 mb-2">
              NJ Natural Gas (NJNG)
            </h3>
            <p className="text-gray-700 text-sm mb-2">
              Offers heat pump rebates through its SAVEGREEN® program: $500
              (Tier 1) to $1,000 (cold-climate) for ASHPs and mini-splits, with
              a $300 LMI adder. Also offers a Hybrid Heat program pairing cold-climate heat pumps with
              gas backup and integrated thermostat controls. 0% on-bill
              repayment up to $25,000 is available.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-2">
              South Jersey Gas &amp; Elizabethtown Gas
            </h3>
            <p className="text-gray-700 text-sm">
              Neither currently offers direct heat pump rebates. Both focus on
              gas equipment efficiency (furnace/boiler rebates) and gas
              conversion incentives. Customers in their territories should apply
              for heat pump rebates through their electric utility (typically
              ACE or JCP&amp;L).
            </p>
          </div>
        </div>
      </section>

      {/* HEAR/HOMES Status */}
      <section className="py-12">
        <div className="container-narrow">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              IRA HEAR/HOMES Rebates: Funded but Not Launched
            </h2>
            <p className="text-gray-700 mb-4">
              New Jersey received over $185 million from the DOE under the
              Inflation Reduction Act: approximately $91.6 million for HOMES
              (Home Efficiency Rebates) and $91.3 million for HEAR (Home
              Electrification and Appliance Rebates), plus $3.5 million for
              contractor training.
            </p>
            <p className="text-gray-700 mb-4">
              As of {formattedDate}, these programs have not launched and are
              still awaiting final approval and program administrator selection.
              NJ&apos;s design directs nearly all funds toward low-income
              multifamily housing through a planned &ldquo;M-RISE&rdquo; program
              rather than broad single-family homeowner rebates.
            </p>
            <p className="text-amber-800 font-medium text-sm">
              Do not sign contracts contingent on HEAR funding until the program
              officially opens. Watch the NJ BPU website for launch
              announcements.
            </p>
          </div>
        </div>
      </section>

      {/* Income-Qualified Programs */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Income-Qualified Programs
          </h2>

          <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
            <h3 className="font-semibold text-gray-900 mb-2">
              Comfort Partners
            </h3>
            <p className="text-gray-700 text-sm mb-2">
              Provides free energy efficiency improvements — including heating
              system repair or replacement, insulation, air sealing, and
              refrigerator replacement — to income-eligible households.
              Eligibility requires household income at or below 225–250% of the
              Federal Poverty Level, or enrollment in programs like LIHEAP, SNAP,
              TANF, SSI, or Section 8. The program is active and fully
              available.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-2">
              Weatherization Assistance Program (WAP)
            </h3>
            <p className="text-gray-700 text-sm">
              Administered by the NJ Department of Community Affairs for
              households at or below 200% FPL. Covers insulation, air sealing,
              and heating system replacement (including heat pumps when
              cost-effective). Priority goes to seniors, individuals with
              disabilities, and families with young children. Applicants
              typically must first be approved for LIHEAP. Call 2-1-1 or contact
              your county community action agency.
            </p>
          </div>
        </div>
      </section>

      {/* Stacking */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            How Programs Stack
          </h2>
          <p className="text-gray-700 mb-6">
            NJ&apos;s incentive layers are explicitly stackable. The Whole Home
            program and utility HVAC rebates stack by design.
          </p>

          <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
            <h3 className="font-semibold text-gray-900 mb-4">
              Typical scenario: median-income homeowner
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 pr-4 font-semibold text-gray-700">
                      Program
                    </th>
                    <th className="text-right py-2 font-semibold text-gray-700">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">NJ Whole Home cash-back</td>
                    <td className="py-2 text-right font-medium text-gray-900">
                      Up to $7,500
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">
                      Electric utility rebate (cold-climate ASHP)
                    </td>
                    <td className="py-2 text-right font-medium text-gray-900">
                      $600–$1,000
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">
                      Gas utility rebate (NJNG, if applicable)
                    </td>
                    <td className="py-2 text-right font-medium text-gray-900">
                      Up to $1,000
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Federal tax credit</td>
                    <td className="py-2 text-right font-medium text-red-600">
                      $0
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">HEAR/HOMES</td>
                    <td className="py-2 text-right font-medium text-amber-600">
                      Not yet available
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-2 pr-4 font-semibold text-gray-900">
                      Typical total (2026)
                    </td>
                    <td className="py-2 text-right font-bold text-gray-900">
                      $8,100–$9,500
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-500 text-xs mt-3">
              Plus 0% financing up to $25,000 (Whole Home) or $75,000 (PSE&amp;G
              on-bill). Actual Whole Home cash-back depends on energy savings
              achieved.
            </p>
          </div>

          <div className="bg-brand-50 border border-brand-200 rounded-lg p-4">
            <p className="text-gray-700 text-sm">
              <strong>PSE&amp;G customers:</strong> If you fully replace fossil
              fuel heating, the Building Decarbonization program may offer
              significantly higher total incentives than the standard utility
              rebate. Contact PSE&amp;G directly to confirm eligibility and
              current amounts before starting work.
            </p>
          </div>
        </div>
      </section>

      {/* Climate Context */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Do Heat Pumps Work in New Jersey?
          </h2>
          <p className="text-gray-700 mb-4">
            Yes. NJ sits in ASHRAE climate zones 4A (central/southern) and 5A
            (northern). Winter design temperatures are around 10°F in Newark and
            Trenton, moderating to 12–13°F along the coast. Modern cold-climate
            heat pumps maintain effective output well below 0°F — far colder
            than NJ experiences. Every NJ utility rebate program includes a
            cold-climate tier with higher incentives.
          </p>
          <p className="text-gray-700">
            Natural gas is the dominant heating fuel in NJ (approximately 72% of
            households). Heat pumps offer the clearest savings for homes
            currently using fuel oil or propane. For gas-heated homes, the
            economics depend on local electricity and gas rates — but the heat
            pump&apos;s dual heating and cooling capability changes the
            comparison.
          </p>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            How to Apply
          </h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Schedule a Whole Home energy audit
                </h3>
                <p className="text-gray-600 text-sm">
                  Contact Ciel Power (the program administrator) at
                  cielpower.com or call your utility. A BPI-certified auditor
                  will assess your home and identify eligible measures.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Check your electric utility&apos;s rebate program
                </h3>
                <p className="text-gray-600 text-sm">
                  Visit your utility&apos;s energy efficiency website (PSE&amp;G:
                  homeenergy.pseg.com · JCP&amp;L: residential.energysavenj.com ·
                  ACE: homeenergysavings.atlanticcityelectric.com · RECO:
                  oru.com). Confirm current rebate amounts and equipment
                  requirements.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Get quotes from BPI-certified contractors
                </h3>
                <p className="text-gray-600 text-sm">
                  Whole Home requires a participating BPI-certified contractor.
                  Get 2–3 quotes. Confirm the contractor is enrolled in both the
                  Whole Home program and your utility&apos;s rebate program.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                4
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Choose cold-climate equipment
                </h3>
                <p className="text-gray-600 text-sm">
                  Selecting a cold-climate heat pump (COP ≥ 1.75 at 5°F, on the
                  NEEP Product List) unlocks the highest rebate tier at every NJ
                  utility.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                5
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Apply for financing if needed
                </h3>
                <p className="text-gray-600 text-sm">
                  0% financing is available through Whole Home ($25,000),
                  PSE&amp;G on-bill ($75,000, no credit check), or NEIF (for
                  JCP&amp;L, ACE, RECO customers).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Watch */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            What to Watch
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h3 className="font-semibold text-gray-900 mb-1">
                HEAR/HOMES launch
              </h3>
              <p className="text-gray-600 text-sm">
                NJ&apos;s $185 million in IRA rebate funding could add
                significant incentives for low-income and multifamily households
                when it launches. Watch the NJ BPU website for announcements.
              </p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h3 className="font-semibold text-gray-900 mb-1">
                Utility program renewals
              </h3>
              <p className="text-gray-600 text-sm">
                NJ utility energy efficiency programs operate on multi-year
                triennium cycles approved by the BPU. Rebate amounts and
                program structures can change at renewal.
              </p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h3 className="font-semibold text-gray-900 mb-1">
                Federal credit restoration
              </h3>
              <p className="text-gray-600 text-sm">
                House Democrats introduced legislation in March 2026 to
                reinstate IRA energy credits, but passage is considered unlikely
                in the current Congress. No federal credit is in effect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqJsonLd.mainEntity.map(
              (
                item: { name: string; acceptedAnswer: { text: string } },
                index: number
              ) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 p-6"
                >
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {item.acceptedAnswer.text}
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sources</h2>
          <p className="text-gray-600 text-sm mb-4">
            All information verified against official program pages as of{" "}
            {formattedDate}. Dollar amounts, eligibility rules, and program
            status can change — always confirm with the program administrator
            before making purchasing decisions.
          </p>
          <div className="space-y-2">
            {njIncentive.sources.map((source) => (
              <div key={source.url}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 hover:underline text-sm"
                >
                  {source.label} ↗
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Related Guides
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/heat-pumps/states/ny"
              className="card hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 mb-2">
                New York Heat Pump Rebates
              </h3>
              <p className="text-gray-600 text-sm">
                Clean Heat Program, 6 utilities, EmPower+, and geothermal
                credits.
              </p>
            </Link>
            <Link
              href="/heat-pumps/states/ct"
              className="card hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 mb-2">
                Connecticut Heat Pump Rebates
              </h3>
              <p className="text-gray-600 text-sm">
                Energize CT rebates plus Smart-E Loan financing.
              </p>
            </Link>
            {/* TODO: Add PA link when /heat-pumps/states/pa is built
            <Link
              href="/heat-pumps/states/pa"
              className="card hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 mb-2">
                Pennsylvania Heat Pump Rebates
              </h3>
              <p className="text-gray-600 text-sm">
                PECO, PPL programs, and Keystone HELP financing.
              </p>
            </Link>
            */}
            <Link
              href="/federal-heat-pump-tax-credit-expired"
              className="card hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 mb-2">
                Federal Heat Pump Tax Credits Ended
              </h3>
              <p className="text-gray-600 text-sm">
                What happened to 25C and 25D, and what it means for 2026.
              </p>
            </Link>
            <Link
              href="/heat-pumps"
              className="card hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 mb-2">
                All State Heat Pump Incentives
              </h3>
              <p className="text-gray-600 text-sm">
                Day-accurate status tracker for every state we cover.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8">
        <div className="container-narrow">
          <div className="p-6 bg-gray-50 rounded-xl">
            <p className="text-gray-600 text-sm">
              <strong>Disclaimer:</strong> This information is for educational
              purposes only and should not be considered tax or financial advice.
              Program details, rebate amounts, and eligibility rules can change
              without notice. Always verify current program status directly with
              the program administrator or your utility before making purchasing
              decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Back link */}
      <section className="py-8">
        <div className="container-narrow">
          <Link
            href="/heat-pumps"
            className="text-brand-600 hover:underline font-medium"
          >
            ← Back to Heat Pump Incentive Tracker
          </Link>
        </div>
      </section>
    </>
  );
}
