import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Colorado Heat Pump Rebates 2026: Up to $8,000 HEAR + Xcel Energy + $1,000 State Credit | Home Energy Basics",
  description:
    "Colorado HEAR rebates cover up to $8,000. Xcel Energy offers up to $2,250/ton. State tax credit adds $1,000. Federal credits ended. Here's every Colorado heat pump incentive in 2026.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/co",
  },
  openGraph: {
    title: "Colorado Heat Pump Rebates 2026",
    description:
      "HEAR rebates up to $8,000, Xcel Energy up to $2,250/ton, and $1,000 state tax credit \u2014 the complete guide to Colorado heat pump incentives after federal credits expired.",
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
          text: "Colorado has three main incentive layers in 2026: the HEAR program (up to $8,000 for income-qualified households below 150% AMI), Xcel Energy utility rebates (up to $2,250 per ton for cold-climate systems replacing gas heat), and the Colorado state heat pump tax credit ($1,000 for air-source). The federal 25C tax credit ended December 31, 2025 and does not apply to 2026 installations. DRCOG\u2019s Power Ahead Colorado is also launching in April 2026 with a $1,500 rebate for Denver metro residents.",
        },
      },
      {
        "@type": "Question",
        name: "Can I stack HEAR with Xcel Energy rebates and the Colorado state tax credit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The Colorado Energy Office explicitly permits stacking HEAR rebates with utility rebates and the state heat pump tax credit. The main restriction is that HEAR cannot be combined with other federal grants or the HER/HOMES program on the same measure, and total incentives cannot exceed the project cost. HEAR also cannot stack with the DRCOG Power Ahead rebate because both are federally funded.",
        },
      },
      {
        "@type": "Question",
        name: "What is the Xcel Energy heat pump rebate in Colorado?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Xcel Energy offers up to $2,250 per ton for cold-climate air-source heat pumps that replace gas heating or include integrated backup heating controls. Standard air-source heat pumps qualify for $900 per ton. Ground-source systems receive $1,000 per ton. Heat pump water heaters receive $800. Xcel also offers a Whole Home Efficiency bonus (25% extra when completing 3+ measures) and a $600 insulation/air sealing bonus.",
        },
      },
      {
        "@type": "Question",
        name: "Is the Colorado state heat pump tax credit still available?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Colorado\u2019s state heat pump tax credit (HB23-1272) is independent of the expired federal credits. For 2026, it provides $1,000 for air-source heat pumps, $2,000 for ground-source or water-source systems, and $250 for heat pump water heaters. The credit amount phased down from $1,500 in 2024 per a built-in schedule tied to state revenue. The credit is claimed by the contractor and at least 33.33% must be passed through to the customer.",
        },
      },
      {
        "@type": "Question",
        name: "Who administers Colorado\u2019s heat pump rebate programs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Colorado Energy Office (CEO) administers the HEAR program with Guidehouse as the implementation partner. The state heat pump tax credit is administered through the CEO and the Colorado Department of Revenue. Xcel Energy runs its own utility rebate program. DRCOG manages the Power Ahead Colorado program for the Denver metro area. Each program has its own registration and application process.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a cold-climate heat pump in Colorado?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cold-climate heat pumps are strongly recommended for most of Colorado. The state spans ASHRAE climate zones 4B through 7, with most Front Range communities in zone 5B. Cold-climate models are also financially incentivized \u2014 Xcel\u2019s cold-climate rebate ($2,250/ton) is 2.5 times the standard rate ($900/ton). Altitude also affects performance, so proper sizing through Manual J calculations is essential.",
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
            Colorado Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Colorado still has a strong heat pump incentive stack in 2026, even
            after the federal 25C tax credit ended December 31, 2025.
            Income-qualified households can access HEAR rebates of up to{" "}
            <strong>$8,000</strong> for a cold-climate heat pump, Xcel Energy
            customers can earn up to <strong>$2,250 per ton</strong> in utility
            rebates, and the state&apos;s contractor-claimed heat pump tax credit
            remains active at <strong>$1,000</strong> for air-source systems.
            This guide covers all major Colorado heat pump incentives available
            in 2026, including HEAR, Xcel Energy rebates, the state tax credit,
            and the upcoming DRCOG Power Ahead program. Here&apos;s what&apos;s
            actually available.
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
          <StatusCard incentive={coIncentive} />
        </div>
      </section>

      {/* 3. Short Version */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            The short version
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">
                ✓ HEAR rebates (up to $8,000 per heat pump)
              </p>
              <p className="text-sm text-green-900">
                Income-qualified households at or below 150% of Area Median
                Income (AMI). Point-of-sale discount through CEO-registered
                contractors. Total household cap of $14,000.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">
                ✓ Xcel Energy rebates (up to $2,250/ton)
              </p>
              <p className="text-sm text-green-900">
                For cold-climate heat pumps replacing gas heat. Standard ASHPs
                qualify at $900/ton. No income limits. Additional Whole Home
                Efficiency bonus available.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">
                ✓ Total potential savings: $7,750 to ~$15,750+
              </p>
              <p className="text-sm text-green-900">
                $7,750 (above 150% AMI) to $15,750+ (below 80% AMI) for a 3-ton
                cold-climate system on Xcel. Full electrification packages can
                reach ~$20,000 total incentives.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">
                ✗ Federal 25C/25D tax credits
              </p>
              <p className="text-sm text-red-900">
                Ended December 31, 2025. No 2026 installations qualify. The
                OBBBA terminated both credits seven years early.
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 md:col-span-2">
              <p className="font-semibold text-amber-800 mb-1">
                ⚠ DRCOG Power Ahead Colorado launching April 2026
              </p>
              <p className="text-sm text-amber-900">
                $1,500 rebate per cold-climate heat pump for Denver metro
                residents. No income limits. Stacks with Xcel and state credit
                but does not stack with HEAR (both federally funded). Plans to
                issue 40,000+ rebates through 2029.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Federal Expired */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Federal tax credits are gone, but IRA rebates survived
          </h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <p className="text-red-900 leading-relaxed">
              The One Big Beautiful Bill Act (signed July 4, 2025) terminated
              both the <strong>Section 25C</strong> Energy Efficient Home
              Improvement Credit and the <strong>Section 25D</strong>{" "}
              Residential Clean Energy Credit effective December 31, 2025
              &mdash; seven years early. If you installed a qualifying heat pump
              by December 31, 2025, you can still claim on your 2025 return (up
              to <strong>$2,000</strong> for 25C air-source;{" "}
              <strong>30% uncapped</strong> for 25D geothermal). No new
              installations in 2026 qualify.{" "}
              <Link
                href="/federal-heat-pump-tax-credit-expired"
                className="text-brand-600 hover:underline"
              >
                Full details on the federal credit expiration
              </Link>
              .
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            The IRA&apos;s Home Electrification and Appliance Rebates (HEAR)
            program was not affected by the OBBBA. The federal tax credits ended
            because they were tax-code provisions, while HEAR was separately
            appropriated rebate funding administered through states.
            Colorado&apos;s HEAR allocation remains intact. The Home Efficiency
            Rebates (HER/HOMES) program also survived and is launching in
            phases.
          </p>
        </div>
      </section>

      {/* 5. HEAR / Primary Program */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Colorado&apos;s HEAR program: up to $14,000 per household
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Colorado&apos;s Home Electrification and Appliance Rebates (HEAR)
            program launched November 13, 2025 for single-family homes and is
            administered by the Colorado Energy Office (CEO) with Guidehouse as
            the implementation partner. It offers point-of-sale rebates &mdash;
            the contractor subtracts the rebate from your invoice at
            installation.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Eligibility requires household income at or below 150% of county
            Area Median Income (AMI). Within that threshold, two tiers exist:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Income tier</th>
                  <th className="text-left p-3 font-semibold">Coverage</th>
                  <th className="text-left p-3 font-semibold">
                    Max heat pump rebate
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Below 80% AMI</td>
                  <td className="p-3">
                    100% of project costs, up to per-measure caps
                  </td>
                  <td className="p-3 font-semibold">
                    $8,000 (cold-climate) / $3,000 (standard)
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">80%&ndash;150% AMI</td>
                  <td className="p-3">
                    50% of project costs, up to per-measure caps
                  </td>
                  <td className="p-3 font-semibold">
                    $8,000 (cold-climate) / $3,000 (standard)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Additional HEAR rebate maximums: <strong>$1,750</strong> for heat
            pump water heaters, <strong>$4,000</strong> for electrical panel
            upgrades, <strong>$2,500</strong> for wiring,{" "}
            <strong>$1,600</strong> for insulation/air sealing, and{" "}
            <strong>$840</strong> for electric cooking equipment. The total
            household cap is <strong>$14,000</strong> across all measures.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-4">
            <p className="font-semibold text-amber-800 mb-1">
              ⚠ Common mistake: assuming HEAR is available at all income levels
            </p>
            <p className="text-sm text-amber-900">
              HEAR is only for households at or below 150% AMI. If your
              household income exceeds that threshold, HEAR does not apply to
              you. Your primary incentives are Xcel Energy rebates, the state
              tax credit, and (starting April 2026) the DRCOG Power Ahead
              rebate. Don&apos;t delay a project waiting for HEAR if you
              don&apos;t qualify.
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            The program is currently available for single-family homes and
            townhomes. Condos, apartments, and manufactured homes are expected
            to become eligible in late March 2026. The program runs through 2029
            or until funds are exhausted. Of the $45 million reserved for HEAR,
            over $8 million has already been committed.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="font-semibold text-blue-800 mb-1">
              HOMES (Home Efficiency Rebates) &mdash; separate program
            </p>
            <p className="text-sm text-blue-900">
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

      {/* 6. State Tax Credit (Secondary) */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Colorado state heat pump tax credit
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Colorado&apos;s own state heat pump tax credit (HB23-1272) remains
            active and is entirely independent of the expired federal credits.
            The credit launched at <strong>$1,500</strong> per system in 2024,
            dropped to <strong>$1,250</strong> in 2025, and settled at{" "}
            <strong>$1,000</strong> for 2026 per a built-in phase-down schedule
            tied to state revenue. No income limits apply.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">
                    Equipment type
                  </th>
                  <th className="text-left p-3 font-semibold">
                    2026 credit amount
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Air-source heat pump</td>
                  <td className="p-3 font-semibold">$1,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">
                    Ground-source, water-source, or combined-source
                  </td>
                  <td className="p-3 font-semibold">$2,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">$250</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed">
            The contractor claims the credit from the state and must pass at
            least 33.33% to the customer as a discount on the invoice or a
            separate payment. Many contractors pass through more than the
            minimum &mdash; ask before signing. All heat pumps must be ENERGY
            STAR certified and AHRI-matched.
          </p>
        </div>
      </section>

      {/* 7. Utility Programs */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Xcel Energy heat pump rebates
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Xcel Energy is Colorado&apos;s largest electric utility and offers
            the state&apos;s most substantial utility-level heat pump rebates.
            Xcel issued 10,640 heat pump rebates worth{" "}
            <strong>$57 million</strong> in 2025 and maintained elevated rebate
            levels into 2026.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">System type</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                  <th className="text-left p-3 font-semibold">
                    Key requirement
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">
                    Cold-climate ASHP (gas replacement or integrated controls)
                  </td>
                  <td className="p-3 font-semibold">$2,250/ton</td>
                  <td className="p-3">
                    Must replace gas heating or include integrated backup heating
                    controls
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Standard ASHP</td>
                  <td className="p-3 font-semibold">$900/ton</td>
                  <td className="p-3">ENERGY STAR certified</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ground-source heat pump</td>
                  <td className="p-3 font-semibold">$1,000/ton</td>
                  <td className="p-3">ENERGY STAR certified</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">$800</td>
                  <td className="p-3">
                    ENERGY STAR certified, replaces electric resistance
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Xcel also offers a <strong>Whole Home Efficiency bonus</strong>{" "}
            (25% extra on the standard rebate when completing 3+ measures) and a{" "}
            <strong>$600 insulation/air sealing bonus</strong> that can further
            reduce project costs. For mini-splits, contractor requirements may
            differ from ducted and ground-source programs &mdash; confirm
            eligibility rules with Xcel before signing a proposal.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-blue-800 mb-1">
              Mountain Energy Project
            </p>
            <p className="text-sm text-blue-900">
              Select high-altitude communities (Breckenridge, Leadville,
              Silverthorne, and others) have access to dramatically enhanced
              rebates through Xcel&apos;s Mountain Energy Project &mdash; up to{" "}
              <strong>$7,500/ton</strong> for mini-splits and{" "}
              <strong>$20,000/ton</strong> for ground-source systems. If you
              live above 7,000 feet, ask your contractor about Mountain Energy
              Project eligibility.
            </p>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Other Colorado utilities
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Colorado&apos;s utility landscape extends well beyond Xcel. If
            you&apos;re not an Xcel customer, check your utility&apos;s current
            offerings:
          </p>

          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">
                Colorado Springs Utilities
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Up to <strong>$2,000</strong> for qualifying cold-climate ASHPs,{" "}
                <strong>$750</strong> for standard ASHPs, and{" "}
                <strong>$400</strong> for heat pump water heaters. Additional
                bonuses for income-qualified customers.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Holy Cross Energy</p>
              <p className="text-sm text-gray-600 mt-1">
                Offers both standard and income-qualified tiers with
                weatherization bonuses. Serves the Vail Valley, Aspen, and
                surrounding mountain communities.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">
                Efficiency Works (Fort Collins / Platte River Power Authority)
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Heat pump rebates for Fort Collins, Loveland, Longmont, and
                Estes Park customers through the Efficiency Works program.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">United Power</p>
              <p className="text-sm text-gray-600 mt-1">
                Serves the northern Denver metro area. Offers rebates up to{" "}
                <strong>$2,500</strong> for qualifying heat pump installations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Local Programs (DRCOG) */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            DRCOG Power Ahead Colorado (Denver metro)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            DRCOG&apos;s Power Ahead Colorado is a{" "}
            <strong>$273 million</strong> program ($199.7 million EPA Climate
            Pollution Reduction Grant plus $73.3 million in local government
            match) launching in April 2026. The program includes{" "}
            <strong>$40 million</strong> earmarked for heat pump and water heater
            rebates across the Denver metro area&apos;s 58 DRCOG member
            governments.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The rebate is <strong>$1,500</strong> per Energy Star cold-climate
            certified heat pump &mdash; ducted or ductless. No income limits.
            The program plans to issue 40,000+ rebates through 2029.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-4">
            <p className="font-semibold text-amber-800 mb-1">
              ⚠ Power Ahead does not stack with HEAR
            </p>
            <p className="text-sm text-amber-900">
              Both Power Ahead and HEAR are federally funded. Federal rules
              prevent stacking two federally funded programs on the same
              project. Power Ahead does stack with Xcel Energy rebates and the
              Colorado state tax credit. For income-qualified households, HEAR
              typically provides more total savings than Power Ahead.
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed">
            The program also includes no-cost home upgrades for low-income and
            disadvantaged communities, energy advising services, and workforce
            training for nearly 5,000 heat pump installers. Check{" "}
            <a
              href="https://www.drcog.org/growth-development/power-ahead-colorado"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              poweraheadcolorado.org
            </a>{" "}
            for launch details.
          </p>
        </div>
      </section>

      {/* 9. Stacking */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How incentives stack in Colorado
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Colorado residents can stack HEAR rebates + utility rebates + the
            state tax credit on a single heat pump installation. The Colorado
            Energy Office explicitly permits this. Key restrictions: HEAR cannot
            be combined with other federal grants (including HOMES and Power
            Ahead) on the same measure, HEAR is only available at or below 150%
            AMI, and total incentives cannot exceed project cost.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">
                Above 150% AMI &mdash; 3-ton cold-climate ASHP (Xcel customer,
                gas replacement)
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Xcel Energy rebate ($2,250 &times; 3 tons): $6,750</li>
                <li>Colorado state heat pump tax credit: $1,000</li>
                <li>
                  Power Ahead (April 2026, Denver metro only): $1,500
                </li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">
                Realistic maximum: ~$9,250 (Denver metro) or ~$7,750 (outside
                Denver)
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">
                80%&ndash;150% AMI &mdash; 3-ton cold-climate ASHP (Xcel
                customer, gas replacement)
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>HEAR rebate (50% coverage, up to cap): $8,000</li>
                <li>Xcel Energy rebate ($2,250 &times; 3 tons): $6,750</li>
                <li>Colorado state heat pump tax credit: $1,000</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">
                Realistic maximum: ~$15,750
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">
                Below 80% AMI &mdash; 3-ton cold-climate ASHP (Xcel customer,
                gas replacement)
              </p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>HEAR rebate (100% coverage, up to cap): $8,000</li>
                <li>Xcel Energy rebate ($2,250 &times; 3 tons): $6,750</li>
                <li>Colorado state heat pump tax credit: $1,000</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">
                Realistic maximum: ~$15,750 (may cover full project cost)
              </p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-5 mb-4">
            <p className="font-semibold text-gray-900 mb-1">
              What you&apos;ll actually pay
            </p>
            <p className="text-sm text-gray-700">
              A typical 3-ton cold-climate heat pump installation in Colorado
              costs <strong>$13,200&ndash;$21,000</strong>. After stacking
              available incentives, expect to pay approximately{" "}
              <strong>$5,250&ndash;$13,250 out of pocket</strong> above 150%
              AMI, or as little as <strong>$0&ndash;$5,250</strong> for
              income-qualified households below 80% AMI where HEAR covers 100%
              of costs up to the per-measure cap.
            </p>
          </div>

          <p className="text-sm text-gray-500">
            Scenarios assume Xcel gas-to-electric replacement tier. Non-Xcel
            utility customers will have different rebate amounts. Power Ahead
            and HEAR cannot be combined on the same project. Xcel Whole Home
            Efficiency bonus and Mountain Energy Project could increase savings
            further in qualifying situations.
          </p>
        </div>
      </section>

      {/* 10. Weatherization / Income-Qualified */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Income-qualified programs beyond HEAR
          </h2>
          <div className="space-y-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">
                Weatherization Assistance Program (WAP)
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Free home energy upgrades &mdash; including heat pumps on a
                limited basis &mdash; for households earning below 60% of State
                Median Income. Colorado was the first state to integrate HEAR
                funding into WAP (October 2024). Automatic qualification for
                recipients of SNAP, LEAP, TANF, SSI, or Medicaid. Apply at{" "}
                <a
                  href="https://energyoffice.colorado.gov/weatherization-assistance-program"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 hover:underline"
                >
                  energyoffice.colorado.gov
                </a>{" "}
                or call 1-866-HEAT-HELP.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">
                Energy Outreach Colorado (CARE program)
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Free energy efficiency upgrades including insulation, air
                sealing, and appliance replacement for income-qualified
                residents.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">
                LEAP (Low-income Energy Assistance)
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Heating cost assistance November through April. While not a heat
                pump program, LEAP recipients automatically qualify for WAP and
                CARE services.
              </p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <p className="font-semibold text-green-800 mb-1">
              ✓ Best candidates for Colorado heat pump incentives
            </p>
            <p className="text-sm text-green-900">
              Xcel Energy customers replacing gas heat (highest utility
              rebates), households below 150% AMI (HEAR eligible), homeowners in
              Mountain Energy Project communities (dramatically enhanced Xcel
              rebates), Denver metro residents (Power Ahead stacks starting
              April 2026), and anyone planning multiple upgrades (Whole Home
              Efficiency bonus).
            </p>
          </div>
        </div>
      </section>

      {/* 11. Climate */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Cold-climate specs and Colorado installation considerations
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Colorado spans ASHRAE climate zones 4B through 7, with most Front
            Range communities in zone 5B (cool-dry) and mountain areas in 6B or
            7 (cold to very cold). Cold-climate heat pumps are strongly
            recommended statewide and financially incentivized &mdash;
            Xcel&apos;s cold-climate rebate (<strong>$2,250/ton</strong>) is 2.5
            times the standard ASHP rebate (<strong>$900/ton</strong>).
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">City</th>
                  <th className="text-left p-3 font-semibold">
                    ASHRAE zone
                  </th>
                  <th className="text-left p-3 font-semibold">
                    Winter design temp
                  </th>
                  <th className="text-left p-3 font-semibold">Elevation</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Denver</td>
                  <td className="p-3">5B</td>
                  <td className="p-3">1&deg;F</td>
                  <td className="p-3">5,280 ft</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Colorado Springs</td>
                  <td className="p-3">5B</td>
                  <td className="p-3">2&deg;F</td>
                  <td className="p-3">6,035 ft</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Fort Collins</td>
                  <td className="p-3">5B</td>
                  <td className="p-3">&minus;2&deg;F</td>
                  <td className="p-3">5,003 ft</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Breckenridge</td>
                  <td className="p-3">7</td>
                  <td className="p-3">&minus;11&deg;F</td>
                  <td className="p-3">9,600 ft</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Grand Junction</td>
                  <td className="p-3">4B</td>
                  <td className="p-3">8&deg;F</td>
                  <td className="p-3">4,593 ft</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            The ENERGY STAR Cold Climate designation requires a COP &ge;1.75 at
            5&deg;F and heating capacity at 5&deg;F of at least 70% of rated
            capacity at 47&deg;F. Modern cold-climate models from Mitsubishi,
            Carrier, Bosch, and Daikin can provide reliable heating down to
            &minus;13&deg;F to &minus;20&deg;F.
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
          <p className="text-gray-700 leading-relaxed">
            Colorado has no state-level HVAC license &mdash; mechanical
            contractor licensing occurs at the city/county level, with
            requirements varying between jurisdictions. Building permits are
            generally required for heat pump installations, typically both
            mechanical and electrical.
          </p>
        </div>
      </section>

      {/* 12. How to Apply */}
      <section className="py-12">
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
                <p className="text-sm text-gray-700">
                  Use the Colorado Energy Office portal or call 866-336-0016.
                  HEAR is only available at or below 150% AMI. Income
                  verification takes 2&ndash;4 weeks, so start early.
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
                <p className="text-sm text-gray-700">
                  A registered contractor will guide you through HEAR
                  qualification and handle the point-of-sale discount. Get
                  2&ndash;3 quotes. You must use a registered contractor to
                  receive HEAR rebates.
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
                <p className="text-sm text-gray-700">
                  Confirm whether your installation qualifies for the
                  $2,250/ton cold-climate rate or the $900/ton standard rate.
                  If you&apos;re not an Xcel customer, check your utility
                  directly.
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
                <p className="text-sm text-gray-700">
                  Ask your contractor how they&apos;ll handle the $1,000 state
                  credit pass-through (invoice discount vs. separate payment).
                  Many contractors pass through more than the required 33.33%
                  minimum.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                5
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  Schedule installation
                </p>
                <p className="text-sm text-gray-700">
                  Your contractor handles permit applications. Ensure equipment
                  is ENERGY STAR certified, properly sized for your home and
                  altitude, and meets cold-climate specifications if targeting
                  the higher Xcel rebate tier.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. What to Watch */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What to watch in 2026
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">
                IRA funding runway
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Colorado&apos;s HEAR program runs through 2029 or until funds
                are exhausted. Demand has been strong &mdash; over $8 million
                of the $45 million HEAR allocation has already been committed.
                There is no guarantee funding will last through 2029. Act while
                funding is available.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">
                DRCOG Power Ahead launch (April 2026)
              </p>
              <p className="text-sm text-gray-600 mt-1">
                $1,500 per cold-climate heat pump for Denver metro residents. No
                income limits. Does not stack with HEAR but stacks with Xcel
                and state credit. This adds a new option for above-150% AMI
                households in the Denver area.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">
                HEAR housing type expansion
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Condos, apartments, and manufactured homes are expected to
                become eligible in late March 2026. Check the CEO website for
                updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 14. FAQ */}
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

      {/* 15. See Also */}
      <section className="py-8 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-3">See also</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/heat-pumps/states/nm"
                className="text-brand-600 hover:underline"
              >
                New Mexico Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li>
              <Link
                href="/heat-pumps/states/az"
                className="text-brand-600 hover:underline"
              >
                Arizona Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li className="text-gray-500">
              Utah Heat Pump Rebates <em>(coming soon)</em>
            </li>
            <li>
              <Link
                href="/federal-heat-pump-tax-credit-expired"
                className="text-brand-600 hover:underline"
              >
                Federal Heat Pump Tax Credits Ended &mdash; What It Means
              </Link>
            </li>
            <li>
              <Link
                href="/heat-pumps"
                className="text-brand-600 hover:underline"
              >
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

      {/* 17. Disclaimer */}
      <section className="py-8">
        <div className="container-narrow">
          <div className="bg-gray-100 rounded-lg p-6">
            <p className="text-gray-500 text-xs leading-relaxed">
              <strong>Disclaimer:</strong> This page covers the main statewide,
              utility, and IRA heat pump incentives available to Colorado
              homeowners in 2026. It does not calculate savings, guarantee
              eligibility, or represent any incentive program. Colorado has
              additional local and co-op programs that may apply in your area.
              We verify status regularly but programs can change without notice.
              Always confirm current amounts and eligibility with the Colorado
              Energy Office, your utility, and your contractor before making
              decisions.
            </p>
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/heat-pumps"
              className="text-brand-600 hover:underline text-sm"
            >
              &larr; Back to Heat Pumps overview
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
