import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Connecticut Heat Pump Rebates 2026: What's Actually Available | Home Energy Basics",
  description:
    "Energize CT rebates of $250–$1,000 per ton are the primary heat pump incentive in Connecticut for 2026. Federal tax credits ended. HEAR has not launched. Here's the complete picture.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/ct",
  },
  openGraph: {
    title: "Connecticut Heat Pump Rebates 2026",
    description:
      "Energize CT rebates, Smart-E Loan financing, and HES-IE income-eligible programs — what's available now and what's coming.",
    url: "https://homeenergybasics.com/heat-pumps/states/ct",
    type: "article",
  },
};

export default function ConnecticutPage() {
  const ctIncentive = incentives.CT;
  const formattedDate = formatDate(ctIncentive.lastVerified);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What heat pump rebates are available in Connecticut in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Energize CT offers $250 per ton (standard) or $750–$1,000 per ton (Energy Optimization tier for fuel-switching) for qualifying air-source heat pumps. Heat pump water heaters receive a $900 instant discount. There is no federal tax credit for 2026 installations. HEAR rebates have not launched yet in Connecticut.",
        },
      },
      {
        "@type": "Question",
        name: "What is the Energize CT Energy Optimization rebate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Energy Optimization tier provides $750–$1,000 per ton (up to $10,000 per home) for heat pumps that replace oil, propane, natural gas, or electric resistance as the primary heating source. The pre-existing system must be either fully decommissioned or integrated using a qualified control listed on the Energize CT Heat Pump QPL.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a specific contractor for Energize CT heat pump rebates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. All installations must be performed by a contractor in the Energize CT Heat Pump Installer Network (HPIN). Using a non-HPIN contractor disqualifies the project entirely. Find HPIN contractors at energizect.com using the Find a Contractor tool.",
        },
      },
      {
        "@type": "Question",
        name: "Is there a federal heat pump tax credit in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. The federal Section 25C Energy Efficient Home Improvement Credit and Section 25D Residential Clean Energy Credit both expired December 31, 2025 under the One Big Beautiful Bill Act. There is no federal tax credit for heat pump installations in 2026.",
        },
      },
      {
        "@type": "Question",
        name: "Are Connecticut HEAR rebates available?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. As of March 2026, Connecticut's HEAR program has not launched. CT DEEP submitted its implementation blueprints to DOE in April 2025 but no confirmed launch date has been finalized. When active, HEAR is expected to provide up to $14,000 for income-qualified households. Do not factor HEAR into current project budgets.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get a free heat pump in Connecticut?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Potentially, through the Home Energy Solutions – Income Eligible (HES-IE) program. Households with combined gross annual income at or below 60% of Connecticut's state median income may qualify for no-cost heat pump installations plus free weatherization. Apply through energizect.com or call 877-WISE-USE.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd data={faqJsonLd} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-50 via-white to-energy-50 py-12 md:py-16">
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
              / Connecticut
            </p>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Connecticut Heat Pump Rebates 2026: What&apos;s Actually Available
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Energize CT rebates are the primary heat pump incentive in
              Connecticut for 2026. Federal tax credits ended December 31, 2025.
              HEAR rebates are funded but not yet available. Here&apos;s the
              complete picture.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last verified: {formattedDate}
            </p>
          </div>
        </div>
      </section>

      {/* Status Card */}
      <section className="py-8">
        <div className="container-narrow">
          <StatusCard incentive={ctIncentive} />
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-8 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            The Short Version
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <div className="flex items-start gap-3">
                <span className="text-green-600 text-lg font-bold">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">
                    Energize CT rebates are active
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    $250/ton standard or $750–$1,000/ton Energy Optimization
                    tier for fuel-switching installs
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <div className="flex items-start gap-3">
                <span className="text-green-600 text-lg font-bold">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">
                    0.99% APR financing available
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Smart-E Loan through CT Green Bank — expires March 31, 2026
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <div className="flex items-start gap-3">
                <span className="text-green-600 text-lg font-bold">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">
                    Free installs for income-eligible
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    HES-IE covers heat pumps at no cost for households ≤60% AMI
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <div className="flex items-start gap-3">
                <span className="text-red-500 text-lg font-bold">✗</span>
                <div>
                  <p className="font-semibold text-gray-900">
                    No federal tax credit
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    25C and 25D both ended December 31, 2025
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5 md:col-span-2">
              <div className="flex items-start gap-3">
                <span className="text-amber-500 text-lg font-bold">⚠</span>
                <div>
                  <p className="font-semibold text-gray-900">
                    HEAR rebates not yet available
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    ~$49.7M allocated to CT but program has not launched — no
                    confirmed date as of March 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Federal Credits */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Federal Tax Credits Are Gone
          </h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <p className="text-red-800 font-medium">
              The federal Section 25C and 25D tax credits expired December 31,
              2025 under the One Big Beautiful Bill Act (P.L. 119-21). No
              federal tax credit is available for heat pump installations in
              2026.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            The federal tax credits ended because they were tax-code provisions
            repealed by new legislation. The IRA&apos;s HEAR and HOMES programs
            were separately appropriated rebate funds administered through states
            — a legal distinction that preserved their funding. Connecticut was
            allocated approximately $49.7 million for HEAR and $49.8 million for
            HOMES, but neither program has launched yet.
          </p>
        </div>
      </section>

      {/* HEAR Status */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            HEAR Rebates: Funded but Not Yet Available
          </h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
            <p className="text-amber-800 font-medium">
              Do not factor HEAR rebates into current project budgets — they are
              not available as of March 2026.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Connecticut Department of Energy and Environmental Protection
            (DEEP) submitted its HEAR State Implementation Blueprints to DOE at
            the end of April 2025. As of March 2026, the program is not yet
            available to homeowners, and no confirmed launch date has been
            finalized.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            When it does launch, HEAR is expected to provide up to{" "}
            <strong>$14,000 per household</strong> for income-qualified residents
            (at or below 150% AMI), including up to $8,000 for heat pumps. DEEP
            plans to contract with Eversource and United Illuminating to
            administer the program.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Monitor DEEP&apos;s status page:{" "}
            <a
              href="https://portal.ct.gov/deep/energy/inflation-reduction-act-home-energy-rebate-programs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              portal.ct.gov/deep — IRA Home Energy Rebate Programs
            </a>
          </p>
        </div>
      </section>

      {/* Energize CT — Main Program */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Energize CT: The Primary Incentive
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Energize CT is a statewide initiative funded through a charge on
            customer energy bills, coordinated by the Energy Efficiency Fund, the
            Connecticut Green Bank, and the state&apos;s regulated utilities. It
            provides heat pump rebates to residential electric customers of{" "}
            <strong>Eversource</strong> and{" "}
            <strong>United Illuminating (UI)</strong>.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Air-Source Heat Pump Rebates
          </h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                    Tier
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                    Rebate
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                    Max per Home
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                    Qualifying Scenario
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 font-medium">
                    Standard
                  </td>
                  <td className="border border-gray-200 px-4 py-3">
                    $250/ton
                  </td>
                  <td className="border border-gray-200 px-4 py-3">$2,500</td>
                  <td className="border border-gray-200 px-4 py-3">
                    Replacing existing heat pump, adding to unconditioned space,
                    cooling only, or heating without integrated controls
                  </td>
                </tr>
                <tr className="bg-green-50">
                  <td className="border border-gray-200 px-4 py-3 font-medium">
                    Energy Optimization
                  </td>
                  <td className="border border-gray-200 px-4 py-3">
                    $750–$1,000/ton
                  </td>
                  <td className="border border-gray-200 px-4 py-3">$10,000</td>
                  <td className="border border-gray-200 px-4 py-3">
                    Replacing oil, propane, gas, or electric resistance as
                    primary heat — must decommission old system or use qualified
                    integrated control
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
            <p className="text-blue-800 text-sm">
              <strong>Rate note:</strong> Program materials list $750–$1,000 per
              ton depending on utility territory and program updates. United
              Illuminating listings currently reflect $750/ton. Confirm the
              current per-ton amount with Energize CT at 888-855-0282 before
              finalizing project budgets.
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-6">
            <p className="text-amber-800 text-sm">
              <strong>⚠️ You cannot stack tiers.</strong> You qualify for either
              the Standard tier or Energy Optimization tier — not both. These are
              separate paths, not additive.
            </p>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
            Energy Optimization: What Counts as &quot;Replacing&quot;?
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            To qualify for the higher Energy Optimization rate, you must either:
          </p>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg p-4">
              <span className="text-brand-600 font-bold">1</span>
              <div>
                <p className="font-semibold text-gray-900">
                  Fully decommission the old system
                </p>
                <p className="text-sm text-gray-600">
                  Fuel line disconnected and capped, thermostat disconnected from
                  board and wall, system disabled or removed
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg p-4">
              <span className="text-brand-600 font-bold">2</span>
              <div>
                <p className="font-semibold text-gray-900">
                  Integrate with a qualified control
                </p>
                <p className="text-sm text-gray-600">
                  Keep the old system as backup, but install an integrated
                  control listed on the Energize CT Heat Pump QPL that
                  automatically switches below a set outdoor temperature (must be
                  below 30°F)
                </p>
              </div>
            </div>
          </div>
          <p className="text-gray-600 text-sm">
            If an inspection finds that decommissioning or integration
            requirements are not met, the rebate is downgraded to $250/ton.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
            Requirements for All Rebates
          </h3>
          <div className="space-y-2 text-gray-700">
            <p>
              • Residential electric customer of <strong>Eversource or UI</strong>
            </p>
            <p>
              • Equipment on the{" "}
              <strong>Energize CT Heat Pump Qualified Product List</strong>{" "}
              (ENERGY STAR 6.1 Cold Climate certified)
            </p>
            <p>
              • Installation by an{" "}
              <strong>
                Energize CT Heat Pump Installer Network (HPIN)
              </strong>{" "}
              contractor
            </p>
            <p>
              • <strong>Pre-registration required before installation</strong>{" "}
              (since July 1, 2024)
            </p>
            <p>
              • Installation completed within{" "}
              <strong>60 days</strong> of registration approval
            </p>
            <p>
              • Equipment purchased and installed between{" "}
              <strong>January 1 – December 31, 2026</strong>
            </p>
            <p>
              • Mail-in application postmarked by{" "}
              <strong>February 27, 2027</strong>
            </p>
            <p>• Not applicable to new construction</p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-5 mt-6">
            <p className="text-red-800 text-sm font-medium">
              ⚠️ If you install before registering, you will not receive a
              rebate. There are no exceptions.
            </p>
          </div>
        </div>
      </section>

      {/* Heat Pump Water Heaters */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Heat Pump Water Heater Rebates
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Energize CT offers a <strong>$900 instant discount</strong> on
            qualifying heat pump water heaters for Eversource and UI electric
            customers. Three paths are available:
          </p>
          <div className="space-y-3 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-semibold text-gray-900">
                Instant discount at participating distributor
              </p>
              <p className="text-sm text-gray-600">
                $900 automatically applied when contractor purchases through a
                qualifying distributor
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-semibold text-gray-900">
                Instant discount at participating retailer
              </p>
              <p className="text-sm text-gray-600">
                Present the Energize CT barcode at the register for $900 off
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-semibold text-gray-900">Mail-in rebate</p>
              <p className="text-sm text-gray-600">
                Submit completed rebate form after purchase
              </p>
            </div>
          </div>
          <p className="text-gray-600 text-sm">
            Qualifying units: ENERGY STAR certified, UEF ≥3.40 (integrated) or
            ≥2.20 (split-system or 120V/15A). Purchases between Jan 1 – Dec 31,
            2026.
          </p>
        </div>
      </section>

      {/* Income-Eligible */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Income-Eligible: Free Heat Pumps Through HES-IE
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The <strong>Home Energy Solutions – Income Eligible (HES-IE)</strong>{" "}
            program provides free energy assessments and upgrades — including
            heat pumps — to households with combined gross annual income at or
            below <strong>60% of Connecticut&apos;s state median income</strong>.
            This is an existing program, separate from HEAR, and is available
            now.
          </p>

          <h3 className="text-lg font-bold text-gray-900 mb-3">
            What HES-IE Covers
          </h3>
          <div className="grid md:grid-cols-2 gap-3 mb-6">
            {[
              "No-cost energy assessment (two visits)",
              "Air sealing, duct sealing, insulation",
              "Up to 100% off insulation upgrades",
              "No-cost heat pump installations",
              "Appliance replacement (eligible refrigerators)",
              "Additional weatherization measures",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-2 bg-green-50 border border-green-200 rounded-lg p-3"
              >
                <span className="text-green-600 font-bold text-sm">✓</span>
                <p className="text-sm text-gray-700">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Households already qualifying for Eversource&apos;s or UI&apos;s
            income-based payment assistance (Electric Discount Rate, Matching
            Payment Program) are also eligible. Homes that received HES or
            HES-IE services within the past six years are not eligible again.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            For households above the 60% AMI threshold, the standard{" "}
            <strong>Home Energy Solutions (HES)</strong> assessment is available
            for a $75 co-pay (waived if scheduled before March 31, 2026).
          </p>

          <p className="text-gray-700">
            <strong>Contact:</strong> 877-WISE-USE (877-947-3873) |{" "}
            <a
              href="https://www.energizect.com/energy-evaluations/income-eligible-options"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              energizect.com/energy-evaluations/income-eligible-options
            </a>
          </p>
        </div>
      </section>

      {/* Financing */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Financing: Smart-E Loan
          </h2>
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-3xl font-bold text-brand-600">0.99%</p>
                <p className="text-sm text-gray-600 mt-1">APR through CT Green Bank</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">$50,000</p>
                <p className="text-sm text-gray-600 mt-1">Maximum loan amount</p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-6">
            <p className="text-amber-800 font-medium">
              ⚠️ The 0.99% rate expires March 31, 2026 — lock in before this
              date. Rates are subject to change after this date.
            </p>
          </div>

          <div className="space-y-2 text-gray-700">
            <p>• Terms of 5 to 20 years</p>
            <p>• No money down, no prepayment penalty</p>
            <p>• Unsecured (no home equity required)</p>
            <p>
              • Must be an Eversource or UI customer, use an HPIN contractor,
              and have an Energize CT-approved project
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed mt-4">
            For households switching from oil or propane, monthly loan payments
            may be less than prior fuel costs — making the transition
            cash-flow-positive from day one.
          </p>

          <p className="text-gray-600 text-sm mt-4">
            HES participants may also qualify for 0% fixed-rate loans of
            $1,000–$3,000 with payments through their utility bill.
          </p>
        </div>
      </section>

      {/* Stacking */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How Incentives Stack
          </h2>

          <div className="space-y-4 mb-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">
                ✓ Available now — all qualifying homeowners
              </p>
              <p className="text-sm text-gray-700">
                Energize CT rebate (Standard or Energy Optimization tier) +
                Smart-E Loan financing at 0.99% APR
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">
                ✓ Available now — income-eligible (≤60% AMI)
              </p>
              <p className="text-sm text-gray-700">
                HES-IE no-cost heat pump installation and weatherization
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="font-semibold text-amber-800 mb-2">
                ⚠ Expected but not yet available
              </p>
              <p className="text-sm text-gray-700">
                HEAR rebates (up to $14,000 for households ≤150% AMI) — pending
                DOE approval
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-2">
                ✗ No longer available
              </p>
              <p className="text-sm text-gray-700">
                Federal 25C and 25D tax credits (expired December 31, 2025)
              </p>
            </div>
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Realistic Savings: Energy Optimization, 3-Ton System
          </h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                    Source
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-right font-semibold">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">
                    Energize CT Energy Optimization (3 tons × $750–$1,000/ton)
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-right">
                    $2,250–$3,000
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">
                    Federal tax credit
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-right text-gray-400">
                    $0 (expired)
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">
                    HEAR (not yet live)
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-right text-gray-400">
                    $0 (pending)
                  </td>
                </tr>
                <tr className="bg-brand-50 font-semibold">
                  <td className="border border-gray-200 px-4 py-3">
                    Total current incentives
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-right">
                    $2,250–$3,000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm">
            Against a typical $12,000–$16,000 installation, this reduces
            out-of-pocket to roughly $9,000–$13,750 before financing. For
            income-eligible households through HES-IE, the installation may be
            fully covered at no cost.
          </p>
        </div>
      </section>

      {/* Who Gets the Best Savings */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Who Gets the Biggest Savings?
          </h2>
          <div className="space-y-3">
            <div className="bg-white border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">
                Oil / propane homes → Best candidates
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Energy Optimization tier provides the highest rebate. Monthly
                savings from fuel switching often exceed loan payments.
              </p>
            </div>
            <div className="bg-white border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">
                Electric resistance (baseboard) → Strong savings potential
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Qualifies for Energy Optimization tier. Heat pumps are 2–3×
                more efficient than baseboard.
              </p>
            </div>
            <div className="bg-white border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">
                Low-income households (≤60% AMI) → Free installation possible
              </p>
              <p className="text-sm text-gray-600 mt-1">
                HES-IE program covers heat pumps and weatherization at no cost.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">
                Natural gas homes → Eligible but evaluate carefully
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Qualifies for Energy Optimization tier, but savings depend on
                gas vs. electric rates and system design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            How to Apply
          </h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Choose an HPIN installer",
                desc: "Use the Find a Contractor tool at energizect.com. Get multiple quotes. Confirm the installer is recommending QPL-listed equipment.",
              },
              {
                step: "2",
                title: "Sign a contract",
                desc: "Finalize the contract with your HPIN installer. Mention your intent to apply for the Energize CT rebate.",
              },
              {
                step: "3",
                title: "Register your rebate BEFORE installation",
                desc: "Complete registration online at energizect.com/rebates. You'll need your signed contract and HPIN installer details. Your registration ID is required for the final application.",
              },
              {
                step: "4",
                title: "Complete installation within 60 days",
                desc: "Your HPIN contractor installs the system. The 60-day clock starts from registration approval — no extensions are guaranteed.",
              },
              {
                step: "5",
                title: "Claim your rebate",
                desc: "Upload your final paid invoice at energizect.com/rebates or submit by mail. Allow up to 90 days for payment processing.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex items-start gap-4 bg-white border border-gray-200 rounded-lg p-5"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {item.step}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{item.title}</p>
                  <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Watch */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What to Watch
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">HEAR launch</p>
              <p className="text-sm text-gray-600 mt-1">
                When active, HEAR would add up to $8,000 for heat pumps and
                $14,000 total for income-qualified households. Monitor{" "}
                <a
                  href="https://portal.ct.gov/deep/energy/inflation-reduction-act-home-energy-rebate-programs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 hover:underline"
                >
                  DEEP&apos;s page
                </a>{" "}
                for updates.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">
                Smart-E Loan rate expiration
              </p>
              <p className="text-sm text-gray-600 mt-1">
                The 0.99% APR expires March 31, 2026. Lock in before this date
                if you plan to finance.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">
                Energize CT rebate levels
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Per program terms, rebate amounts are subject to change without
                notice. Funding is limited and available first-come,
                first-served.
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
            {ctIncentive.sources.map((source, index) => (
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

      {/* Disclaimer */}
      <section className="py-8">
        <div className="container-narrow">
          <div className="bg-gray-100 rounded-lg p-6">
            <p className="text-gray-500 text-xs leading-relaxed">
              <strong>Disclaimer:</strong> This page is for educational purposes
              only. It does not calculate savings, guarantee eligibility, or
              represent any incentive program. Connecticut has multiple
              overlapping programs with different rules — your specific situation
              depends on your utility, income, home type, and timing. We verify
              status regularly but programs can change without notice. Always
              confirm with Energize CT and your contractor before making
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
            ← Back to Heat Pump Incentive Status
          </Link>
        </div>
      </section>
    </>
  );
}
