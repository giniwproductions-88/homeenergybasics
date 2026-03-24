import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Oklahoma Heat Pump Rebates 2026: Up to $3,000 + OG&E & PSO Programs | Home Energy Basics",
  description:
    "OG&E offers up to $3,000. PSO covers $600\u2013$1,400. Federal credits ended. Here\u2019s every Oklahoma heat pump incentive in 2026.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/ok",
  },
  openGraph: {
    title: "Oklahoma Heat Pump Rebates 2026",
    description:
      "Utility rebates up to $3,000 from OG&E and $1,400 from PSO \u2014 the complete guide to Oklahoma heat pump incentives after federal credits expired.",
    url: "https://homeenergybasics.com/heat-pumps/states/ok",
    type: "article",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What heat pump rebates are available in Oklahoma in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oklahoma heat pump rebates in 2026 come primarily from utilities. OG&E offers up to $3,000 for qualifying heat pumps. PSO (AEP Oklahoma) offers $600\u2013$1,400 based on SEER2 rating, plus $750 for heat pump water heaters. Rural electric cooperatives offer $200\u2013$1,050 per ton. Federal tax credits (25C/25D) expired December 31, 2025. Oklahoma\u2019s IRA-funded HEAR and HOMES rebates have not launched yet.",
      },
    },
    {
      "@type": "Question",
      name: "Can I stack utility rebates with IRA rebates in Oklahoma?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When Oklahoma\u2019s HEAR and HOMES programs launch, utility rebates will stack with federal IRA rebates. No anti-stacking provisions were found in OG&E or PSO program rules. The only constraint is that combined rebates generally cannot exceed total project cost. Until HEAR launches, utility rebates are the only option.",
      },
    },
    {
      "@type": "Question",
      name: "When will Oklahoma\u2019s IRA HEAR rebates launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As of March 2026, Oklahoma\u2019s HEAR and HOMES programs have not launched for consumers. The Oklahoma Department of Commerce originally estimated an 18\u201324-month development timeline. A solicitation for implementation contractors was issued in late September 2024. No specific launch date has been announced. Households below 150% of Area Median Income will be eligible for up to $8,000 per heat pump once the program goes live.",
      },
    },
    {
      "@type": "Question",
      name: "Does Oklahoma Natural Gas offer heat pump rebates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Oklahoma Natural Gas does not offer heat pump rebates. ONG\u2019s rebate program exclusively covers natural gas appliances and actually offers $1,950 for homeowners who replace a heat pump with a natural gas furnace plus air conditioner \u2014 incentivizing fuel-switching away from heat pumps. This creates a structural headwind against heat pump adoption in Oklahoma.",
      },
    },
    {
      "@type": "Question",
      name: "Who administers Oklahoma\u2019s heat pump incentive programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oklahoma\u2019s IRA rebate programs (HEAR and HOMES) are administered by the Oklahoma Department of Commerce through its State Energy Office. Utility rebates are administered directly by each utility: OG&E, PSO (AEP Oklahoma), and individual rural electric cooperatives. There is no single statewide rebate program.",
      },
    },
  ],
};

export default function OklahomaPage() {
  const okIncentive = incentives.OK;
  const formattedDate = formatDate(okIncentive.lastVerified);

  return (
    <>
      <JsonLd data={faqJsonLd} />

      {/* 1. Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="container-narrow">
          <nav className="text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-brand-600">
              Home
            </Link>
            {" "}/{" "}
            <Link href="/heat-pumps" className="hover:text-brand-600">
              Heat Pumps
            </Link>
            {" "}/ Oklahoma
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Oklahoma Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Oklahoma heat pump incentives in 2026 are limited but still
            available. Federal tax credits expired in 2025 and the state&apos;s
            IRA rebate programs have not launched yet, leaving utility rebates as
            the main financial incentive. Most homeowners can currently access{" "}
            <strong>$600–$3,000</strong> through utilities like OG&amp;E and PSO.
            This guide covers all major Oklahoma heat pump incentives available
            in 2026, including OG&amp;E, PSO, rural cooperative rebates, and the
            upcoming HEAR and HOMES programs. Here&apos;s what&apos;s actually
            available.
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
          <StatusCard incentive={okIncentive} />
        </div>
      </section>

      {/* 3. Short Version */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Short Version
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">
                ✓ OG&amp;E Utility Rebates
              </p>
              <p className="text-sm text-green-900">
                Up to $500/ton for air-source heat pumps (max $3,000 per year).
                Geothermal rebates reach $750–$1,000/ton. Must be ENERGY STAR
                certified.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">
                ✓ PSO Tiered Rebates
              </p>
              <p className="text-sm text-green-900">
                $600–$1,400 based on SEER2 efficiency tier. Heat pump water
                heaters: $750. Geothermal: $1,400. Multiple-upgrade bonuses
                available.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">
                ✓ Future Savings Potential
              </p>
              <p className="text-sm text-green-900">
                $600–$3,000 (above 150% AMI, utility only) to $8,000–$11,000+
                (below 80% AMI, after HEAR launches). Full electrification
                packages can reach ~$14,000 total incentives.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">
                ✗ Federal Tax Credits Expired
              </p>
              <p className="text-sm text-red-900">
                Section 25C ($2,000/year for heat pumps) and Section 25D (30%
                for geothermal) both ended December 31, 2025. No transition rule
                for late installations.
              </p>
            </div>
            <div className="md:col-span-2 bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="font-semibold text-amber-800 mb-1">
                ⚠ Oklahoma Is in an Incentive Gap
              </p>
              <p className="text-sm text-amber-900">
                Federal credits expired and Oklahoma&apos;s $129 million in
                IRA-funded HEAR/HOMES rebates have not launched yet. Utility
                rebates are the only incentive available today. Monitor the
                Oklahoma Department of Commerce for HEAR launch announcements
                before finalizing plans if timing permits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Federal Expired */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Federal Tax Credits Ended
          </h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <p className="text-red-900 leading-relaxed">
              <strong>Section 25C</strong> (Energy Efficient Home Improvement
              Credit) and <strong>Section 25D</strong> (Residential Clean Energy
              Credit) both expired on{" "}
              <strong>December 31, 2025</strong>. The One Big Beautiful Bill Act
              terminated these credits seven years early. There is no federal tax
              credit for heat pumps, heat pump water heaters, or geothermal
              systems installed after that date. Homeowners who completed
              installations by December 31, 2025 can still claim credits on
              their 2025 tax returns. Read more:{" "}
              <Link
                href="/federal-heat-pump-tax-credit-expired"
                className="text-brand-600 hover:underline"
              >
                Federal Heat Pump Tax Credits Ended
              </Link>
              .
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            The IRS defines eligibility based on when equipment was{" "}
            <strong>&quot;placed in service&quot;</strong> — fully installed and
            operational — not when purchased. If installation was completed after
            December 31, 2025, neither credit applies. Unlike clean vehicle
            credits, Congress provided no safe harbor or transition rule for home
            energy equipment.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Unused Section 25D credits from prior years can carry forward to
            future tax returns, but no new credits can be generated.
          </p>
        </div>
      </section>

      {/* 5. HEAR / Primary */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Home Electrification and Appliance Rebates (HEAR)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Oklahoma received <strong>$129 million</strong> in combined HEAR and
            HOMES funding through the Inflation Reduction Act. The Oklahoma
            Department of Commerce (ODOC) administers both programs through its
            State Energy Office. As of March 2026,{" "}
            <strong>neither program has launched for consumers</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            ODOC originally estimated an 18–24-month development timeline,
            targeting a window between winter 2025 and summer 2026. A
            solicitation for implementation contractors was issued in late
            September 2024. Both programs survived the One Big Beautiful Bill Act
            and remain authorized through September 30, 2031, or until funds are
            exhausted.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            What Oklahoma Homeowners Will Get When HEAR Launches
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            HEAR provides point-of-sale rebates for electrification upgrades
            with income-based eligibility tied to Area Median Income (AMI):
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Income Tier</th>
                  <th className="text-left p-3 font-semibold">Coverage</th>
                  <th className="text-left p-3 font-semibold">
                    Heat Pump Cap
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Below 80% AMI</td>
                  <td className="p-3">100% of costs</td>
                  <td className="p-3 font-semibold">$8,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">80–150% AMI</td>
                  <td className="p-3">50% of costs</td>
                  <td className="p-3 font-semibold">$8,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-gray-500">Above 150% AMI</td>
                  <td className="p-3 text-gray-500">—</td>
                  <td className="p-3 text-gray-500">Not eligible</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Additional HEAR caps include <strong>$1,750</strong> for heat pump
            water heaters, <strong>$4,000</strong> for electrical panel
            upgrades, <strong>$2,500</strong> for electric wiring, and{" "}
            <strong>$1,600</strong> for insulation and air sealing. The
            per-household cap is <strong>$14,000</strong>.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            When Will Oklahoma&apos;s HEAR Rebates Launch?
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            No specific date has been announced. Based on ODOC&apos;s original
            18–24-month timeline from late 2024, the earliest realistic window
            is mid-to-late 2026. Twenty-three states have launched HEAR programs
            — Oklahoma is not yet among them. Homeowners with urgent
            replacements should secure utility rebates now. Those with
            flexibility may benefit from waiting for HEAR launch announcements on
            ODOC&apos;s State Energy Office website.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="font-semibold text-amber-800 mb-1">
              ⚠ Projects Started Before HEAR Launches Are Not Eligible
            </p>
            <p className="text-sm text-amber-900">
              HEAR rebates apply at point of sale through approved contractors.
              Equipment purchased or installed before the program is live in
              Oklahoma will not qualify retroactively. Do not assume HEAR funds
              can be claimed for work completed before launch.
            </p>
          </div>
        </div>
      </section>

      {/* 6. HOMES / Secondary */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Home Efficiency Rebates (HOMES)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The HOMES program (IRA Section 50121) offers performance-based
            rebates for whole-house energy improvements that achieve verified
            savings of 20% or more. Unlike HEAR, HOMES is available at{" "}
            <strong>all income levels</strong> — though low- and
            moderate-income households receive double the rebate amounts.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">
                    Energy Savings
                  </th>
                  <th className="text-left p-3 font-semibold">
                    Standard Rebate
                  </th>
                  <th className="text-left p-3 font-semibold">
                    LMI Rebate (≤80% AMI)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">20–35% reduction</td>
                  <td className="p-3 font-semibold">$2,000</td>
                  <td className="p-3 font-semibold">$4,000</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">35%+ reduction</td>
                  <td className="p-3 font-semibold">$4,000</td>
                  <td className="p-3 font-semibold">$8,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed">
            HOMES and HEAR{" "}
            <strong>cannot be combined for the same single upgrade</strong> but
            can apply to different measures within the same home — for example,
            HEAR for a heat pump and HOMES for a whole-house insulation and air
            sealing project. Like HEAR, the HOMES program has not launched in
            Oklahoma as of March 2026.
          </p>
        </div>
      </section>

      {/* 7. Utility Programs */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Utility Rebates
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Utility rebates are the only active heat pump incentive for most
            Oklahoma homeowners in 2026. Programs vary significantly by
            provider.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            OG&amp;E (Oklahoma Gas &amp; Electric)
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Oklahoma&apos;s largest electric utility offers HVAC replacement
            rebates of up to <strong>$500 per ton</strong> for qualifying heat
            pumps, with a maximum of <strong>$1,500 per unit</strong> and a
            limit of two units per year — yielding a potential{" "}
            <strong>$3,000 maximum</strong>. Geothermal heat pump rebates reach{" "}
            <strong>$750–$1,000 per ton</strong>. All systems must be ENERGY
            STAR certified and installed by a licensed professional.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">System Type</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                  <th className="text-left p-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Air-source heat pump</td>
                  <td className="p-3 font-semibold">$500/ton (max $1,500)</td>
                  <td className="p-3">
                    ENERGY STAR certified, AHRI certificate required
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Geothermal heat pump</td>
                  <td className="p-3 font-semibold">$750–$1,000/ton</td>
                  <td className="p-3">ENERGY STAR certified</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Per-year maximum</td>
                  <td className="p-3 font-semibold">$3,000</td>
                  <td className="p-3">2 units/year limit</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            Restrictions: homes built within the last 10 years are ineligible,
            multi-family properties do not qualify, and systems can only be
            rebated once every 20 years. Funding is limited and first-come,
            first-served. OG&amp;E also runs a Home Energy Efficiency Program
            (HEEP) providing free assessments and up to{" "}
            <strong>$4,000</strong> for eligible measures including HVAC for
            qualifying customers.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            PSO (Public Service Company of Oklahoma / AEP)
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            PSO runs Oklahoma&apos;s most detailed tiered heat pump rebate
            program through its Power Forward initiative:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">
                    System Type / Tier
                  </th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Air-source HP (15.2–17.1 SEER2)</td>
                  <td className="p-3 font-semibold">$600</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Air-source HP (17.2–19.0 SEER2)</td>
                  <td className="p-3 font-semibold">$1,000</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Air-source HP (19.1+ SEER2)</td>
                  <td className="p-3 font-semibold">$1,400</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ductless mini-split (19.1+ SEER2)</td>
                  <td className="p-3 font-semibold">$600</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Geothermal heat pump</td>
                  <td className="p-3 font-semibold">$1,400</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">$750</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump tune-up</td>
                  <td className="p-3 font-semibold">$200</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            PSO&apos;s Multiple Upgrade track provides bonus incentives when
            three or more eligible upgrades are completed simultaneously,
            including <strong>$3,000</strong> for duct replacement and{" "}
            <strong>$1,800</strong> for duct sealing. All equipment must be
            installed by a PSO-registered participating contractor.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Oklahoma Natural Gas (ONG)
          </h3>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-blue-800 mb-1">
              ONG Does Not Offer Heat Pump Rebates — and Actively Incentivizes
              Gas
            </p>
            <p className="text-sm text-blue-900">
              Oklahoma Natural Gas offers <strong>$1,950</strong> for homeowners
              who replace a heat pump with a natural gas furnace plus air
              conditioner. They also offer $850 for electric-to-gas water heater
              conversions. ONG&apos;s rebate structure directly opposes heat pump
              adoption. If you heat with gas in Oklahoma, your gas utility has a
              financial incentive to keep you on gas.
            </p>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Rural Electric Cooperatives
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Several Oklahoma co-ops offer competitive heat pump rebates,
            particularly for geothermal systems:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Cooperative</th>
                  <th className="text-left p-3 font-semibold">
                    Air-Source HP
                  </th>
                  <th className="text-left p-3 font-semibold">
                    Geothermal HP
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Oklahoma Electric (OEC)</td>
                  <td className="p-3 font-semibold">$200–$325/ton</td>
                  <td className="p-3 font-semibold">$400–$700/ton</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">CKenergy</td>
                  <td className="p-3">—</td>
                  <td className="p-3 font-semibold">
                    $1,000/ton (max $4,000)
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Verdigris Valley (VVEC)</td>
                  <td className="p-3 font-semibold">$300/ton</td>
                  <td className="p-3">—</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Northeast Oklahoma (NOEC)</td>
                  <td className="p-3 font-semibold">
                    Requires 8.1+ HSPF2
                  </td>
                  <td className="p-3">—</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Central Rural</td>
                  <td className="p-3">—</td>
                  <td className="p-3 font-semibold">$750/ton</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Cimarron</td>
                  <td className="p-3">—</td>
                  <td className="p-3 font-semibold">
                    $1,050/ton + $225 desuperheater
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            OEC also offers a <strong>$500 bonus</strong> for gas-to-heat-pump
            conversions. VVEC offers <strong>$500</strong> for heat pump water
            heaters. Contact your cooperative directly for current program
            details and application requirements.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Municipal Utilities
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Edmond Electric, operating under the Oklahoma Municipal Power
            Authority (OMPA) WISE program, offers air-source rebates of{" "}
            <strong>$175–$300 per ton</strong> tiered by SEER rating and{" "}
            <strong>$800 per ton for new geothermal</strong> installations with
            desuperheater. A free home energy audit is required. Other OMPA
            member cities including Altus have access to similar programs.
            Oklahoma City&apos;s Community Action Agency offers an energy
            efficiency loan of up to{" "}
            <strong>$15,000 at 3% fixed interest</strong> for homeowners with
            household income at or below $100,000.
          </p>
        </div>
      </section>

      {/* 9. Stacking */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How Programs Stack
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Federal law permits stacking HEAR rebates with utility rebates, and
            no anti-stacking provisions were found in Oklahoma utility programs.
            The key constraint is that combined rebates generally cannot exceed
            total project cost. For a typical 3-ton air-source heat pump
            installation costing <strong>$8,000–$12,000</strong>:
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">
                Above 150% AMI — 3-Ton Ducted Heat Pump
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>OG&amp;E utility rebate: $1,500</li>
                <li>HEAR: not eligible</li>
                <li>HOMES (when launched, 20%+ savings): $2,000</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">
                Realistic maximum: ~$3,500
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">
                80–150% AMI — 3-Ton Ducted Heat Pump
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>OG&amp;E utility rebate: $1,500</li>
                <li>HEAR (when launched, 50% of cost): up to $4,000–$5,000</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">
                Realistic maximum: ~$6,500
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">
                Below 80% AMI — 3-Ton Ducted Heat Pump
              </p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>OG&amp;E utility rebate: $1,500</li>
                <li>
                  HEAR (when launched, 100% of cost): up to $8,000
                </li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">
                Realistic maximum: ~$9,500
              </p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-5">
            <p className="font-semibold text-gray-900 mb-1">
              What You&apos;ll Actually Pay
            </p>
            <p className="text-sm text-gray-700">
              Until HEAR launches, most Oklahoma homeowners pay{" "}
              <strong>$5,000 to $11,400 out of pocket</strong> after utility
              rebates for a typical ducted heat pump system. Once HEAR is
              available, income-qualified households below 80% AMI could see
              full coverage of installation costs. No Oklahoma state tax credit,
              state loan program, or sales tax exemption applies to reduce this
              further.
            </p>
          </div>
        </div>
      </section>

      {/* 10. Weatherization */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Weatherization Assistance
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Oklahoma Weatherization Assistance Program (WAP), administered
            by ODOC through eight Community Action Agency subgrantees across all
            77 counties, provides <strong>free weatherization services</strong>{" "}
            to households at or below 200% of the federal poverty level.
            Services are determined by a computerized energy audit and can
            include heat pump replacement if identified as cost-effective.
          </p>
          <p className="text-gray-700 leading-relaxed">
            A waitlist is typical due to demand. Contact your local Community
            Action Agency to apply. Priority is given to elderly, disabled, and
            families with children.
          </p>
        </div>
      </section>

      {/* 11. Climate */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Climate Context
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Oklahoma sits in{" "}
            <strong>IECC climate zones 3A and 4A</strong> (warm-humid to
            mixed-humid). Design temperatures are well within the operating
            range of modern air-source heat pumps — cold-climate-rated equipment
            is beneficial for northern Oklahoma but not strictly required
            statewide.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">City</th>
                  <th className="text-left p-3 font-semibold">
                    ASHRAE 99.6% Heating Design Temp
                  </th>
                  <th className="text-left p-3 font-semibold">Climate Zone</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Oklahoma City</td>
                  <td className="p-3 font-semibold">10.3°F</td>
                  <td className="p-3">3A</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Tulsa</td>
                  <td className="p-3 font-semibold">9.4°F</td>
                  <td className="p-3">3A/4A</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Lawton</td>
                  <td className="p-3 font-semibold">~13°F</td>
                  <td className="p-3">3A</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Oklahoma is heating-dominant by degree-day count (approximately
            3,500–3,700 HDD versus 1,800–2,100 CDD annually), but cooling costs
            often dominate utility bills because electricity for air conditioning
            costs more per BTU than natural gas for heating. A heat pump
            replaces both a furnace and an air conditioner in a single system,
            delivering efficient heating and cooling year-round.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Roughly half of Oklahoma households heat with natural gas and about
            40% use electricity. The barrier is not the technology — it&apos;s
            Oklahoma&apos;s deeply entrenched natural gas infrastructure. For
            more on how batteries pair with heat pumps for energy resilience,
            see our{" "}
            <Link href="/battery" className="text-brand-600 hover:underline">
              home battery guide
            </Link>
            .
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <p className="font-semibold text-green-800 mb-1">
              ✓ Best Candidates for a Heat Pump in Oklahoma
            </p>
            <p className="text-sm text-green-900">
              Homeowners replacing both a furnace and AC simultaneously, those
              with aging electric resistance heating, OG&amp;E or PSO customers
              eligible for utility rebates, households below 150% AMI (once HEAR
              launches), and anyone on a rural electric cooperative with
              geothermal rebates exceeding $750/ton. Oklahoma&apos;s mixed
              climate means standard air-source heat pumps perform well without
              cold-climate ratings in most of the state.
            </p>
          </div>
        </div>
      </section>

      {/* 12. How to Apply */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How to Apply
          </h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  Identify your electric utility
                </p>
                <p className="text-sm text-gray-700">
                  OG&amp;E, PSO, a rural cooperative, or a municipal utility —
                  each has different rebate amounts and requirements. Check your
                  electric bill for your provider.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  Get quotes from participating contractors
                </p>
                <p className="text-sm text-gray-700">
                  PSO requires a registered participating contractor. OG&amp;E
                  requires a licensed professional. Request AHRI certificates
                  for all equipment and confirm ENERGY STAR certification.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  Submit your rebate application
                </p>
                <p className="text-sm text-gray-700">
                  OG&amp;E applications are available through their website or
                  by calling their rebate line. PSO applications go through the
                  Power Forward portal. Include all required documentation
                  (invoices, AHRI certificates, proof of utility account).
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  Monitor HEAR launch for additional savings
                </p>
                <p className="text-sm text-gray-700">
                  Check the Oklahoma Department of Commerce State Energy Office
                  website for HEAR and HOMES launch announcements. If you
                  qualify by income, waiting for HEAR could add $4,000–$8,000 to
                  your total rebates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. What to Watch */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What to Watch
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">
                Oklahoma HEAR / HOMES Launch Date
              </p>
              <p className="text-sm text-gray-600 mt-1">
                The $129 million in IRA funding is allocated but not yet
                distributed to consumers. Once launched, income-qualified
                households gain access to up to $8,000 for heat pumps at point
                of sale. This is the single biggest potential change in
                Oklahoma&apos;s incentive landscape.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">IRA Funding Runway</p>
              <p className="text-sm text-gray-600 mt-1">
                IRA rebate funds are authorized through September 30, 2031, or
                until exhausted. In states that launched early (Wisconsin,
                Arizona, Michigan), funds are moving faster than projected.
                Oklahoma&apos;s late launch means its allocation should last
                longer, but once open, funds are first-come, first-served.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">
                OG&amp;E Program Funding
              </p>
              <p className="text-sm text-gray-600 mt-1">
                OG&amp;E&apos;s rebate programs are limited in annual funding
                and operate first-come, first-served. In high-demand years,
                funds can be exhausted before year-end. Apply early if you plan
                to install during peak season (spring or fall).
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">
                Natural Gas Utility Counter-Incentives
              </p>
              <p className="text-sm text-gray-600 mt-1">
                ONG&apos;s $1,950 rebate for replacing heat pumps with gas
                furnaces is unusual and may change as electrification gains
                traction. Contractors receiving ONG referral fees may steer
                customers toward gas systems even when a heat pump is the better
                fit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 14. FAQ */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqJsonLd.mainEntity.map(
              (
                faq: { name: string; acceptedAnswer: { text: string } },
                index: number
              ) => (
                <div
                  key={index}
                  className="border-b border-gray-200 pb-6"
                >
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
                href="/heat-pumps/states/tx"
                className="text-brand-600 hover:underline"
              >
                Texas Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li>
              <Link
                href="/heat-pumps/states/nm"
                className="text-brand-600 hover:underline"
              >
                New Mexico Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li className="text-gray-500">
              Arkansas Heat Pump Rebates <em>(coming soon)</em>
            </li>
            <li className="text-gray-500">
              Kansas Heat Pump Rebates <em>(coming soon)</em>
            </li>
            <li>
              <Link
                href="/federal-heat-pump-tax-credit-expired"
                className="text-brand-600 hover:underline"
              >
                Federal Heat Pump Tax Credits Ended
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
            {okIncentive.sources.map(
              (source: { label: string; url: string }, index: number) => (
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
              utility, and IRA heat pump incentives available to Oklahoma
              homeowners in 2026. It does not calculate savings, guarantee
              eligibility, or represent any incentive program. Oklahoma has no
              statewide rebate program — incentives vary entirely by utility
              territory and income level. We verify status regularly but
              programs can change without notice. Always confirm current amounts
              and eligibility with your utility provider, the Oklahoma
              Department of Commerce, and your contractor before making
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
