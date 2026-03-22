import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Colorado Heat Pump Rebates & Incentives 2026: HEAR, Xcel Energy, State Tax Credit | Home Energy Basics",
  description:
    "Colorado's HEAR rebates cover up to $8,000 for a cold-climate heat pump. Xcel Energy offers up to $2,250/ton. The state tax credit adds $1,000. Federal 25C is gone. Here's what's actually available in 2026.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/co",
  },
  openGraph: {
    title: "Colorado Heat Pump Rebates & Incentives 2026",
    description:
      "HEAR rebates, Xcel Energy utility rebates, and the Colorado state tax credit — what's available now, who qualifies, and how to stack them.",
    url: "https://homeenergybasics.com/heat-pumps/states/co",
    type: "article",
  },
};

export default function ColoradoPage() {
  const coIncentive = incentives.CO;
  const formattedDate = formatDate(coIncentive.lastVerified);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What heat pump rebates are available in Colorado in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Colorado has three main incentive layers in 2026: the HEAR program (up to $8,000 for income-qualified households), Xcel Energy utility rebates (up to $2,250 per ton for cold-climate systems replacing gas heat), and the Colorado state heat pump tax credit ($1,000 for air-source). The federal 25C tax credit ended December 31, 2025 and does not apply to 2026 installations.",
        },
      },
      {
        "@type": "Question",
        name: "What is the Colorado HEAR program?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "HEAR (Home Electrification and Appliance Rebates) is a federally funded, state-administered program offering point-of-sale rebates to households earning at or below 150% of Area Median Income. Below 80% AMI, HEAR covers 100% of project costs up to per-measure caps. Between 80-150% AMI, it covers 50%. The maximum heat pump rebate is $8,000 for cold-climate systems and the total household cap is $14,000 across all measures.",
        },
      },
      {
        "@type": "Question",
        name: "Can I combine HEAR with Xcel Energy rebates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The Colorado Energy Office explicitly permits stacking HEAR rebates with utility rebates and the state heat pump tax credit. The main restriction is that HEAR cannot be combined with other federal grants or the HER/HOMES program on the same measure, and total incentives cannot exceed the project cost.",
        },
      },
      {
        "@type": "Question",
        name: "What is the Xcel Energy heat pump rebate in Colorado?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Xcel Energy offers up to $2,250 per ton for cold-climate air-source heat pumps that replace gas heating or include integrated backup heating controls. Standard air-source heat pumps qualify for $900 per ton. Ground-source systems receive $1,000 per ton. For mini-splits, contractor requirements may differ from ducted systems — confirm eligibility rules with Xcel before signing a proposal.",
        },
      },
      {
        "@type": "Question",
        name: "Is the Colorado state heat pump tax credit still available?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Colorado's state heat pump tax credit (HB23-1272) is independent of the expired federal credits. It provides $1,000 for air-source heat pumps, $2,000 for ground-source or water-source systems, and $250 for heat pump water heaters. The credit is claimed by the contractor and at least 33.33% must be passed through to the customer.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a cold-climate heat pump in Colorado?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cold-climate heat pumps are strongly recommended for most of Colorado. The state spans ASHRAE climate zones 4B through 7, with most Front Range communities in zone 5B. Cold-climate models are also financially incentivized — Xcel's cold-climate rebate is 2.5 times the standard rate. Altitude also affects performance, so proper sizing through Manual J calculations is essential.",
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
            / Colorado
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Colorado heat pump rebates and incentives in 2026
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Colorado still has a strong heat pump incentive stack in 2026, even
            though the federal 25C tax credit ended after December 31, 2025.
            Income-qualified households may still access Colorado&apos;s HEAR
            rebates of up to $8,000 for a cold-climate heat pump, Xcel Energy
            customers may qualify for substantial utility rebates depending on
            system type and fuel-switch scenario, and the state&apos;s separate
            contractor-claimed heat pump tax credit remains active at $1,000 for
            air-source systems in 2026.
          </p>
          <p className="text-sm text-gray-500">
            Last verified: {formattedDate}
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Rates and program availability may change after this date.
          </p>
        </div>
      </section>

      {/* Status Card */}
      <section className="py-8">
        <div className="container-narrow">
          <StatusCard incentive={coIncentive} />
        </div>
      </section>

      {/* Short Version / At a Glance */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            The short version
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <div className="text-green-700 font-semibold text-sm mb-1">
                ✓ Available now
              </div>
              <p className="text-gray-900 font-medium">
                HEAR rebates (up to $8,000 for heat pumps)
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Income-qualified households ≤150% AMI. Point-of-sale discount
                through CEO-registered contractors.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <div className="text-green-700 font-semibold text-sm mb-1">
                ✓ Available now
              </div>
              <p className="text-gray-900 font-medium">
                Xcel Energy rebates (up to $2,250/ton)
              </p>
              <p className="text-sm text-gray-600 mt-1">
                For cold-climate heat pumps replacing gas heat. Standard ASHPs
                qualify at $900/ton.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <div className="text-green-700 font-semibold text-sm mb-1">
                ✓ Available now
              </div>
              <p className="text-gray-900 font-medium">
                Colorado state tax credit ($1,000)
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Air-source heat pumps. $2,000 for ground-source. Claimed by
                contractor, passed through to you.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <div className="text-red-700 font-semibold text-sm mb-1">
                ✗ Gone
              </div>
              <p className="text-gray-900 font-medium">
                Federal 25C tax credit
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Ended December 31, 2025. No 2026 installs qualify.
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
              <div className="text-amber-700 font-semibold text-sm mb-1">
                ⚠ Coming
              </div>
              <p className="text-gray-900 font-medium">
                DRCOG Power Ahead Colorado
              </p>
              <p className="text-sm text-gray-600 mt-1">
                $40M in Denver-metro heat pump rebates. Expected mid-2026.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Federal Credits Expired */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Federal tax credits are gone, but IRA rebates survived
          </h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <p className="text-red-800 font-semibold mb-2">
              No federal tax credit for 2026 heat pump installations
            </p>
            <p className="text-red-700 text-sm leading-relaxed">
              The One Big Beautiful Bill Act (signed July 4, 2025) terminated
              both the Section 25C Energy Efficient Home Improvement Credit and
              the Section 25D Residential Clean Energy Credit effective December
              31, 2025 — seven years early. If you installed a qualifying heat
              pump by December 31, 2025, you can still claim on your 2025 return
              (up to $2,000 for 25C air-source; 30% uncapped for 25D
              geothermal). No new installations in 2026 qualify.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            The IRA&apos;s Home Electrification and Appliance Rebates (HEAR)
            program was not affected by the OBBBA. The federal tax credits ended
            because they were tax-code provisions, while HEAR was separately
            appropriated rebate funding administered through states.
            Colorado&apos;s HEAR allocation remains intact. The Home Efficiency
            Rebates (HOMES) program also survived and is launching in phases.
          </p>
        </div>
      </section>

      {/* HEAR Program */}
      <section className="py-8 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Colorado&apos;s HEAR program: up to $14,000 per household
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Colorado&apos;s HEAR program launched November 13, 2025 for
            single-family homes and is administered by the Colorado Energy
            Office (CEO) with Guidehouse as the implementation partner. It
            offers point-of-sale rebates — the contractor subtracts the rebate
            from your invoice at installation.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Eligibility requires household income at or below 150% of county
            Area Median Income (AMI). Within that threshold, two tiers exist:
          </p>

          {/* HEAR Tier Table */}
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="text-left p-3 font-semibold text-gray-900">
                    Income tier
                  </th>
                  <th className="text-left p-3 font-semibold text-gray-900">
                    Coverage
                  </th>
                  <th className="text-left p-3 font-semibold text-gray-900">
                    Max heat pump rebate
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-3 text-gray-700">Below 80% AMI</td>
                  <td className="p-3 text-gray-700">
                    100% of project costs, up to per-measure caps
                  </td>
                  <td className="p-3 text-gray-700">
                    $8,000 (cold-climate) / $3,000 (standard)
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 text-gray-700">80%–150% AMI</td>
                  <td className="p-3 text-gray-700">
                    50% of project costs, up to per-measure caps
                  </td>
                  <td className="p-3 text-gray-700">
                    $8,000 (cold-climate) / $3,000 (standard)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Additional HEAR rebate maximums: $1,750 for heat pump water heaters,
            $4,000 for electrical panel upgrades, $2,500 for wiring, $1,600 for
            insulation/air sealing, and $840 for electric cooking equipment. The
            total household cap is $14,000 across all measures.
          </p>

          <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
            <p className="font-semibold text-gray-900 mb-2">How to apply</p>
            <ol className="list-decimal list-inside text-gray-700 space-y-2 text-sm">
              <li>
                Connect with a CEO-registered contractor, who will guide you
                through the process
              </li>
              <li>
                Submit income verification documents through the application
                portal (processing takes 2–4 weeks)
              </li>
              <li>
                Once approved, the contractor installs qualifying ENERGY
                STAR-certified equipment
              </li>
              <li>
                The rebate is applied as a point-of-sale discount on your
                invoice
              </li>
            </ol>
            <p className="text-sm text-gray-500 mt-3">
              Help center: 866-336-0016 or COenergyrebates@guidehouse.com
            </p>
          </div>

          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            The program is currently available for single-family homes and
            townhomes. Check the Colorado Energy Office website for the latest on
            eligibility for condos, apartments, and manufactured homes, as the
            program is expanding to additional housing types. The program runs
            through 2029 or until funds are exhausted.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="text-blue-800 font-semibold text-sm mb-1">
              HOMES (Home Efficiency Rebates) — separate program
            </p>
            <p className="text-blue-700 text-sm">
              HOMES targets whole-home efficiency improvements and launched in
              Colorado for manufactured/mobile homes (January 2026) and large
              multifamily buildings (February 2026). It does not currently apply
              to site-built single-family homes. HEAR and HOMES cannot be
              combined on the same project, but a household can use both programs
              for different measures.
            </p>
          </div>
        </div>
      </section>

      {/* Xcel Energy */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Xcel Energy heat pump rebates
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Xcel Energy is Colorado&apos;s largest electric utility and offers
            the state&apos;s most substantial utility-level heat pump rebates.
            Xcel issued 10,640 heat pump rebates worth $57 million in 2025 and
            maintained elevated rebate levels into 2026.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="text-left p-3 font-semibold text-gray-900">
                    System type
                  </th>
                  <th className="text-left p-3 font-semibold text-gray-900">
                    Rebate
                  </th>
                  <th className="text-left p-3 font-semibold text-gray-900">
                    Key requirement
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-3 text-gray-700">
                    Cold-climate ASHP (gas replacement or integrated controls)
                  </td>
                  <td className="p-3 text-gray-700 font-medium">
                    $2,250/ton
                  </td>
                  <td className="p-3 text-gray-700">
                    Must replace gas heating or include integrated backup heating
                    controls
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 text-gray-700">Standard ASHP</td>
                  <td className="p-3 text-gray-700 font-medium">$900/ton</td>
                  <td className="p-3 text-gray-700">
                    ENERGY STAR certified
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 text-gray-700">Ground-source heat pump</td>
                  <td className="p-3 text-gray-700 font-medium">
                    $1,000/ton
                  </td>
                  <td className="p-3 text-gray-700">
                    ENERGY STAR certified
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 text-gray-700">Heat pump water heater</td>
                  <td className="p-3 text-gray-700 font-medium">$800</td>
                  <td className="p-3 text-gray-700">
                    ENERGY STAR certified, replaces electric resistance
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-4">
            <p className="text-amber-800 text-sm leading-relaxed">
              <strong>Important:</strong> The $2,250/ton cold-climate rate
              requires that the heat pump replaces gas heating or includes
              integrated backup heating controls. Not all installations qualify
              for this top tier. If you&apos;re replacing an older electric
              system or adding supplemental heating, the $900/ton standard rate
              is more likely. Verify directly with Xcel or your contractor
              before relying on the higher amount.
            </p>
          </div>

          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            For mini-splits, contractor requirements may differ from ducted and
            ground-source programs. Confirm eligibility rules with Xcel before
            signing a proposal.
          </p>

          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Xcel also offers a <strong>Whole Home Efficiency bonus</strong>{" "}
            (25% extra on the standard rebate when completing 3+ measures) and a{" "}
            <strong>$600 insulation/air sealing bonus</strong> that can further
            reduce project costs.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="text-blue-800 font-semibold text-sm mb-1">
              Mountain Energy Project
            </p>
            <p className="text-blue-700 text-sm">
              Select high-altitude communities (Breckenridge, Leadville,
              Silverthorne, and others) have access to dramatically enhanced
              rebates through Xcel&apos;s Mountain Energy Project — up to
              $7,500/ton for mini-splits and $20,000/ton for ground-source
              systems. If you live above 7,000 feet, ask your contractor about
              Mountain Energy Project eligibility.
            </p>
          </div>
        </div>
      </section>

      {/* Colorado State Tax Credit */}
      <section className="py-8 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Colorado state heat pump tax credit
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Colorado&apos;s own state heat pump tax credit (HB23-1272) remains
            active and is entirely independent of the expired federal credits.
            The credit is claimed by the installing contractor and at least
            33.33% must be passed through to the customer.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="text-left p-3 font-semibold text-gray-900">
                    Equipment type
                  </th>
                  <th className="text-left p-3 font-semibold text-gray-900">
                    Credit amount
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-3 text-gray-700">Air-source heat pump</td>
                  <td className="p-3 text-gray-700 font-medium">$1,000</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 text-gray-700">
                    Ground-source, water-source, or combined-source
                  </td>
                  <td className="p-3 text-gray-700 font-medium">$2,000</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 text-gray-700">
                    Heat pump water heater
                  </td>
                  <td className="p-3 text-gray-700 font-medium">$250</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 text-sm leading-relaxed">
            The contractor claims the credit and must pass at least one-third to
            you, either as a discount on the invoice or a separate payment. Ask
            your contractor how they handle the pass-through before signing.
          </p>
        </div>
      </section>

      {/* Other Utilities */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Other Colorado utility rebates
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Colorado&apos;s utility landscape extends well beyond Xcel. If
            you&apos;re not an Xcel customer, check your utility&apos;s current
            offerings:
          </p>

          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">
                Colorado Springs Utilities
              </p>
              <p className="text-sm text-gray-700 mt-1">
                Up to $2,000 for qualifying cold-climate ASHPs, $750 for
                standard ASHPs, and $400 for heat pump water heaters. Additional
                bonuses for income-qualified customers.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">
                Holy Cross Energy
              </p>
              <p className="text-sm text-gray-700 mt-1">
                Offers both standard and income-qualified tiers with
                weatherization bonuses. Serves the Vail Valley, Aspen, and
                surrounding mountain communities.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">
                Efficiency Works (Fort Collins Utilities / Platte River Power
                Authority)
              </p>
              <p className="text-sm text-gray-700 mt-1">
                Provides heat pump rebates for Fort Collins, Loveland,
                Longmont, and Estes Park customers through the Efficiency Works
                program.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">
                United Power
              </p>
              <p className="text-sm text-gray-700 mt-1">
                Serves the northern Denver metro area. Check unitedpower.com for
                current heat pump rebate offerings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stacking */}
      <section className="py-8 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How incentives stack in Colorado
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Colorado residents can stack HEAR rebates + utility rebates + the
            state tax credit on a single heat pump installation. The Colorado
            Energy Office explicitly permits this. The key restrictions:
          </p>
          <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
            <ul className="text-sm text-gray-700 space-y-2">
              <li>
                HEAR <strong>cannot</strong> be combined with other federal
                grants or rebates (such as HOMES) on the same measure
              </li>
              <li>
                HEAR <strong>cannot</strong> be combined with the now-expired
                25C credit (moot for 2026)
              </li>
              <li>
                Total incentives <strong>cannot exceed project cost</strong>
              </li>
              <li>
                HEAR is only available to households at or below{" "}
                <strong>150% AMI</strong>
              </li>
            </ul>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Stacking example: income-qualified Xcel customer, 3-ton
            cold-climate heat pump
          </h3>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="text-left p-3 font-semibold text-gray-900">
                    Program
                  </th>
                  <th className="text-right p-3 font-semibold text-gray-900">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-3 text-gray-700">
                    Xcel Energy rebate ($2,250 × 3 tons)
                  </td>
                  <td className="p-3 text-gray-700 text-right">$6,750</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 text-gray-700">
                    HEAR rebate (≤80% AMI, cold-climate HP)
                  </td>
                  <td className="p-3 text-gray-700 text-right">$8,000</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 text-gray-700">
                    Colorado state heat pump tax credit
                  </td>
                  <td className="p-3 text-gray-700 text-right">$1,000</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="p-3 text-gray-900 font-semibold">
                    Total combined incentives
                  </td>
                  <td className="p-3 text-gray-900 font-semibold text-right">
                    $15,750
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            This scenario assumes the homeowner qualifies for both HEAR (income
            ≤80% AMI) and the Xcel gas-replacement bonus tier. Not all
            households will qualify for both. Against a typical installation cost
            of $13,200–$21,000 for a 3-ton cold-climate system, this can reduce
            out-of-pocket costs significantly.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            For households above 150% AMI
          </h3>
          <p className="text-gray-700 leading-relaxed">
            If you don&apos;t qualify for HEAR, the combination of Xcel rebates
            ($6,750 for a 3-ton cold-climate ASHP replacing gas) plus the state
            credit ($1,000) still yields $7,750 — a meaningful offset even
            without the federal tax credit.
          </p>
        </div>
      </section>

      {/* Income-Qualified Programs */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Income-qualified and equity programs beyond HEAR
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">
                Weatherization Assistance Program (WAP)
              </p>
              <p className="text-sm text-gray-700 mt-1">
                Free home energy upgrades — including heat pumps on a limited
                basis — for households earning below 60% of State Median Income.
                Colorado was the first state to integrate HEAR funding into WAP
                (October 2024). Automatic qualification for recipients of SNAP,
                LEAP, TANF, SSI, or Medicaid.
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Apply at energyoffice.colorado.gov/weatherization-assistance-program
                or call 1-866-HEAT-HELP
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">
                Energy Outreach Colorado (CARE program)
              </p>
              <p className="text-sm text-gray-700 mt-1">
                Free energy efficiency upgrades including insulation, air
                sealing, and appliance replacement for income-qualified
                residents.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">
                LEAP (Low-income Energy Assistance)
              </p>
              <p className="text-sm text-gray-700 mt-1">
                Heating cost assistance November through April. While not a heat
                pump program, LEAP recipients automatically qualify for WAP and
                CARE services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Climate & Installation */}
      <section className="py-8 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Cold-climate specs and Colorado installation considerations
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Colorado spans ASHRAE climate zones 4B through 7, with most Front
            Range communities in zone 5B (cool-dry) and mountain areas in 6B or
            7 (cold to very cold). Cold-climate heat pumps are strongly
            recommended statewide and financially incentivized — Xcel&apos;s
            cold-climate rebate ($2,250/ton) is 2.5 times the standard ASHP
            rebate ($900/ton).
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The ENERGY STAR Cold Climate designation requires a COP ≥1.75 at
            5°F and heating capacity at 5°F of at least 70% of rated capacity at
            47°F. Modern cold-climate models from Mitsubishi, Carrier, Bosch,
            and Daikin can provide reliable heating down to -13°F to -20°F.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Altitude matters in Colorado. Homes at higher elevations face
            reduced air density, which affects heat pump performance. Proper
            sizing through Manual J calculations that account for altitude is
            essential. Xcel&apos;s Mountain Energy Project addresses this with
            enhanced rebates in select high-altitude communities.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Dual-fuel systems</strong> (heat pump plus existing gas
            furnace backup) are widely recommended for mountain homes and are
            eligible for both Xcel and HEAR rebates. If you&apos;re also
            considering home battery storage, see our{" "}
            <Link href="/battery" className="text-brand-600 hover:underline">
              battery guide
            </Link>
            .
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            Colorado has no state-level HVAC license — mechanical contractor
            licensing occurs at the city/county level, with requirements varying
            between jurisdictions. Building permits are generally required for
            heat pump installations, typically both mechanical and electrical.
          </p>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How to get started
          </h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  Check your income eligibility for HEAR
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Use the Colorado Energy Office portal or call 866-336-0016.
                  HEAR is only available at or below 150% AMI.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  Get quotes from CEO-registered contractors
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  A registered contractor will guide you through HEAR
                  qualification and handle the point-of-sale discount. Get 2–3
                  quotes.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  Verify Xcel rebate tier with your contractor
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Confirm whether your installation qualifies for the $2,250/ton
                  cold-climate rate or the $900/ton standard rate. If you&apos;re
                  not an Xcel customer, check your utility directly.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  Confirm the state tax credit pass-through
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Ask your contractor how they&apos;ll handle the $1,000 state
                  credit pass-through (invoice discount vs. separate payment).
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                5
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  Schedule installation and pull permits
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Your contractor handles permit applications. Ensure equipment
                  is ENERGY STAR certified and properly sized for your home and
                  altitude.
                </p>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-6">
            New to heat pumps?{" "}
            <Link
              href="/heat-pumps"
              className="text-brand-600 hover:underline"
            >
              Start with our overview
            </Link>{" "}
            to understand how they work and whether one makes sense for your
            home.
          </p>
        </div>
      </section>

      {/* What to Watch */}
      <section className="py-8 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What to watch in 2026
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">
                DRCOG Power Ahead Colorado
              </p>
              <p className="text-sm text-gray-600 mt-1">
                $40 million in heat pump rebates for the Denver metro area,
                expected to launch mid-2026. This could add another significant
                layer to the incentive stack for Denver-area homeowners.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">
                HEAR housing type expansion
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Condos, apartments, and manufactured homes are expected to
                become eligible. Check the CEO website for updates.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">
                HEAR funding levels
              </p>
              <p className="text-sm text-gray-600 mt-1">
                The program runs through 2029 or until funds are exhausted.
                Demand has been strong — Colorado&apos;s five major utilities saw
                heat pump installations more than double in 2025 to 14,225
                units. Act while funding is available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Frequently asked questions
          </h2>
          <div className="space-y-6">
            {faqJsonLd.mainEntity.map(
              (
                faq: { name: string; acceptedAnswer: { text: string } },
                index: number
              ) => (
                <div key={index} className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {faq.name}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
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
            {coIncentive.sources.map(
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
              <strong>Disclaimer:</strong> This page covers the main statewide
              and utility heat pump incentives available to Colorado homeowners
              in 2026. It does not calculate savings, guarantee eligibility, or
              represent any incentive program. Colorado has additional local and
              co-op programs that may apply in your area. We verify status
              regularly but programs can change without notice. Always confirm
              current amounts and eligibility with your utility and contractor
              before making decisions.
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
