// src/app/heat-pumps/utilities/fpl/page.tsx

import Link from "next/link";
import type { Metadata } from "next";
import { utilities } from "@/data/utilities";
import { formatDate, type ISODate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "FPL Heat Pump Rebates 2026: $200 Instant Credit (Florida) | Home Energy Basics",
  description:
    "FPL pays a $200 instant rebate on qualifying heat pump and A/C replacements plus $220 for ceiling insulation. Here's every FPL incentive in Florida in 2026.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/utilities/fpl",
  },
  openGraph: {
    title: "FPL Heat Pump Rebates 2026",
    description:
      "$200 instant heat pump rebate plus $220 ceiling insulation credit — the complete guide to Florida Power & Light incentives after federal credits expired.",
    url: "https://homeenergybasics.com/heat-pumps/utilities/fpl",
    type: "article",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What heat pump rebates does FPL offer in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FPL's Residential HVAC Program pays a $200 instant rebate per qualifying unit when you replace a complete central cooling system with a new straight-cool A/C or heat pump rated SEER2 15.2 or higher, installed by an FPL Participating Independent Contractor (PIC). The rebate appears as an itemized credit on the contractor's invoice. FPL also pays a $220 instant rebate for ceiling insulation upgrades in homes with existing insulation below R-8, and On Call bill credits worth up to $91.75 per year. Federal Section 25C and 25D tax credits expired December 31, 2025.",
      },
    },
    {
      "@type": "Question",
      name: "Can I stack the FPL rebate with other heat pump programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There is little to stack in 2026. Federal tax credits expired December 31, 2025, Florida has no state heat pump rebate or tax credit, and the state's IRA-funded HEAR and HOMES programs had not launched as of July 2026. Within FPL's own menu, the $200 HVAC rebate, the $220 ceiling insulation rebate, and On Call bill credits are separate offers that one household can combine. If HEAR launches in Florida, DOE rules would permit combining it with utility rebates on the same project.",
      },
    },
    {
      "@type": "Question",
      name: "Do I have to use an FPL-approved contractor to get the rebate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Both the HVAC and ceiling insulation rebates are delivered only through FPL Participating Independent Contractors (PICs), who apply the rebate as an itemized credit on the invoice at the time of installation. There is no separate application or mail-in path for customers — if the installer is not an enrolled PIC, there is no rebate. Confirm PIC status in writing before you sign a contract.",
      },
    },
    {
      "@type": "Question",
      name: "Does FPL offer heat pump water heater or mini-split rebates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No heat pump water heater rebate exists on FPL's residential menu in 2026, and the HVAC program standards exclude window units and single-zone mini splits. The program is built around complete replacement of a central electric cooling system — condenser, blower, and evaporator coil together. Several other Florida utilities, including Duke Energy Florida and JEA, do pay heat pump water heater rebates.",
      },
    },
    {
      "@type": "Question",
      name: "Does FPL Northwest Florida (former Gulf Power) have the same rebates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. FPL's Northwest Florida region — the former Gulf Power territory — carries the same $200 instant HVAC rebate and $220 ceiling insulation rebate under the same program standards and the same Participating Independent Contractor delivery model. FPL runs one residential rebate program statewide.",
      },
    },
  ],
};

export default function FplPage() {
  const utility = utilities["fpl"];
  const formattedVerified = formatDate(utility.lastVerified);

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
            {" "}/ Utilities / FPL
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            FPL Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Florida Power &amp; Light, America&apos;s largest electric utility with more than 6 million customer accounts, pays a <strong>$200</strong> instant rebate when a Participating Independent Contractor installs a qualifying heat pump or A/C system, plus <strong>$220</strong> for ceiling insulation upgrades and On Call bill credits worth up to <strong>$91.75</strong> per year. This guide covers every FPL heat pump incentive available in 2026, including the HVAC rebate, ceiling insulation rebate, and On Call program. Here&apos;s what&apos;s actually available.
          </p>
          <p className="text-sm text-gray-500">
            Last verified: {formattedVerified}
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Rates and program availability may change after this date.
          </p>
        </div>
      </section>

      {/* 2. STATUS CARD */}
      <section className="py-8">
        <div className="container-narrow">
          <StatusCard
            incentive={{
              stateCode: "FL",
              stateName: "Florida Power & Light",
              status: utility.status,
              lastVerified: utility.lastVerified as ISODate,
              lastUpdated: utility.lastUpdated as ISODate,
              summary: utility.summary,
              sources: utility.sources,
            }}
          />
        </div>
      </section>

      {/* 3. SHORT VERSION */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The short version</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ $200 instant HVAC rebate (Florida)</p>
              <p className="text-sm text-green-900">Replace a complete central cooling system with a new heat pump or A/C rated <strong>SEER2 15.2</strong> or higher, installed by an FPL Participating Independent Contractor, and $200 comes off the invoice — no application, no waiting.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ $220 ceiling insulation rebate</p>
              <p className="text-sm text-green-900">Homes with central electric heating and cooling and existing attic insulation below <strong>R-8</strong> get $220 off a PIC-installed insulation upgrade — once per home every 20 years.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Up to ~$510 combined in year one</p>
              <p className="text-sm text-green-900">$200 HVAC + $220 insulation instant rebates, plus On Call bill credits up to <strong>$91.75</strong> per year for letting FPL briefly cycle enrolled equipment during peak demand. No income tiers — the same amounts for every customer.</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">✗ Federal tax credits expired</p>
              <p className="text-sm text-red-900">Section 25C and 25D federal tax credits ended December 31, 2025. There is no federal heat pump tax credit in 2026, and Florida has no state credit to fall back on.</p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 md:col-span-2">
              <p className="font-semibold text-amber-800 mb-1">⚠ No heat pump water heater or single-zone mini-split rebates</p>
              <p className="text-sm text-amber-900">FPL&apos;s residential menu has no heat pump water heater rebate, and the HVAC program excludes window units and single-zone mini splits. At $200, FPL also pays the most modest headline rebate among Florida&apos;s major utilities — Duke Energy Florida reaches $1,000 and OUC $1,150.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICE TERRITORY */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Service territory</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            FPL serves customers in one state — Florida — and its heat pump rebate program is available throughout the territory, including the Northwest Florida region formerly served by Gulf Power. FPL delivers power to more than 6 million customer accounts, serving approximately 12 million people, across most of eastern, southern, and northwest Florida.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">State</th>
                  <th className="text-left p-3 font-semibold">Heat pump program?</th>
                  <th className="text-left p-3 font-semibold">Note</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">
                    <Link href="/heat-pumps/states/fl" className="text-brand-600 hover:underline">Florida</Link>
                  </td>
                  <td className="p-3 font-semibold">Yes</td>
                  <td className="p-3">$200 instant HVAC rebate + $220 ceiling insulation, statewide including Northwest Florida</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">
            Duke Energy Florida, TECO, JEA, OUC, and Florida&apos;s municipal and cooperative utilities run separate programs with different amounts — your rebate depends on who sends your electric bill.
          </p>
        </div>
      </section>

      {/* 5. REBATE DETAILS */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Rebate details</h2>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Florida — one statewide program</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            FPL runs a single residential rebate menu across its entire territory, delivered through Participating Independent Contractors (PICs) who apply the rebate as an itemized credit on the invoice at the time of installation. You pay the amount net of the rebate — there is no application to file and no check to wait for. The trade-off: if your installer is not an enrolled PIC, there is no rebate at all.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Measure</th>
                  <th className="text-left p-3 font-semibold">Amount</th>
                  <th className="text-left p-3 font-semibold">Requirement</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Central heat pump or A/C replacement</td>
                  <td className="p-3 font-semibold">$200 per unit</td>
                  <td className="p-3">SEER2 15.2+, complete system replacement, PIC installation</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ceiling insulation upgrade</td>
                  <td className="p-3 font-semibold">$220 per installation</td>
                  <td className="p-3">Existing insulation below R-8, central electric heating and cooling, PIC installation</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">On Call bill credits</td>
                  <td className="p-3 font-semibold">Up to $91.75 per year</td>
                  <td className="p-3">Enroll central A/C (and electric heat if present); optional water heater and pool pump</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-gray-500">Heat pump water heater</td>
                  <td className="p-3 text-gray-500">—</td>
                  <td className="p-3 text-gray-500">Not offered</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-gray-500">Single-zone mini split</td>
                  <td className="p-3 text-gray-500">—</td>
                  <td className="p-3 text-gray-500">Excluded by program standards, along with window units</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            The HVAC rebate requires an active FPL residential account, and the same system cannot be rebated twice within two years — a limit FPL may waive at its discretion when a system is damaged by a recognized natural disaster, tornado, fire, or similar event. The insulation rebate is limited to one per home every 20 years and requires attic access so the PIC can verify the existing R-value.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            On Call is not a purchase rebate but a demand-response program: FPL installs a free energy-management device and pays guaranteed monthly bill credits — <strong>$6</strong> per month for central A/C (April–October), <strong>$2.75</strong> for central electric heating (November–March), and <strong>$1.50</strong> each, year-round, for an electric water heater and single-speed pool pump. FPL may cycle the A/C or heater off for up to three hours per day, and optional appliances for up to four, though activations are rare outside system emergencies. Heat pump owners qualify on both the cooling and heating credits, since a heat pump is central electric heat.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-blue-800 mb-1">The $200 understates the value of switching</p>
            <p className="text-sm text-blue-900">FPL&apos;s rebate is the smallest headline number among Florida&apos;s major utilities, but the economics of a heat pump in FPL territory do not depend on it. A heat pump heats with far less energy than the electric resistance strip heat common in Florida homes, cools as efficiently as a comparable A/C, and layers On Call credits on top — the operating savings dwarf the one-time rebate.</p>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            For how FPL&apos;s rebate fits alongside Duke Energy, TECO, JEA, OUC, and Florida&apos;s state-level programs, see the{" "}
            <Link href="/heat-pumps/states/fl" className="text-brand-600 hover:underline">
              Florida heat pump rebates guide
            </Link>.
          </p>
        </div>
      </section>

      {/* 6. EQUIPMENT REQUIREMENTS */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Equipment requirements</h2>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">HVAC systems</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Qualifying systems must be rated <strong>SEER2 15.2</strong> or higher — FPL&apos;s program standards define this as one point above current federal efficiency standards, roughly equivalent to 16 SEER under the older rating. Both straight-cool A/C and heat pump systems qualify, electric-driven and either air-cooled or water-cooled; window units and single-zone mini splits do not. Equipment must be new, AHRI-certified, and UL-listed, and the installation must completely replace an existing electric-driven cooling system — condenser, blower, and evaporator coil together. Partial component swaps do not qualify. FPL does not publish a refrigerant requirement.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Ceiling insulation</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Blown-in, batt, or spray foam insulation qualifies. Material must be new, with an R-value independently tested to ASTM standards. Installation must cover all conditioned space, including the scuttle hole, in an accessible attic — inaccessible attics, flat roofs, drop ceilings, and additions or renovations are not eligible.
          </p>
        </div>
      </section>

      {/* 7. FEDERAL EXPIRED */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Federal tax credits have ended</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <p className="text-red-900 leading-relaxed">
              The federal <strong>Section 25C</strong> credit (up to $2,000 for heat pumps) and <strong>Section 25D</strong> credit (30% for geothermal) both expired <strong>December 31, 2025</strong>. No federal heat pump tax credit exists in 2026, which makes utility rebates like FPL&apos;s the primary incentive for most Florida households. See{" "}
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                what changed with the federal credits
              </Link>{" "}
              for details.
            </p>
          </div>
        </div>
      </section>

      {/* 8. STACKING */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How FPL rebates stack</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            In 2026 there is little to stack. Federal credits are gone, Florida has no state rebate or tax credit, and the state&apos;s IRA-funded HEAR and HOMES programs have not launched. What remains is FPL&apos;s own menu — the HVAC rebate, the insulation rebate, and On Call are separate offers a single household can combine. FPL publishes no income tiers; every customer gets the same amounts.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Typical FPL customer — ducted heat pump replacement</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>FPL Residential HVAC rebate: $200</li>
                <li>State rebate or tax credit: $0 (none exists)</li>
                <li>HEAR/HOMES: $0 (not launched)</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$200</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Best case — heat pump plus envelope work and On Call</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>FPL Residential HVAC rebate: $200</li>
                <li>Ceiling insulation rebate (attic below R-8): $220</li>
                <li>On Call bill credits, first year: up to ~$92</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$510 in year one</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-5">
            <p className="font-semibold text-gray-900 mb-1">What you&apos;ll actually pay</p>
            <p className="text-sm text-gray-700">After FPL&apos;s $200 rebate, a typical $12,000 ducted heat pump installation runs <strong>$11,800 out of pocket</strong>. The insulation rebate and On Call credits reduce total energy spending but not the HVAC invoice itself.</p>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Income-qualified households may do far better outside FPL&apos;s menu: Florida&apos;s state-run Weatherization Assistance Program can cover HVAC replacement at no cost for eligible households — see the <Link href="/heat-pumps/states/fl" className="text-brand-600 hover:underline">Florida page</Link> for details.
          </p>
        </div>
      </section>

      {/* 9. HOW TO APPLY */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to get the rebate</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-gray-900">Find a Participating Independent Contractor first</p>
                <p className="text-sm text-gray-700">This is the step most customers miss. Use FPL&apos;s PIC search before you buy anything, and get the contractor&apos;s PIC status and the $200 credit confirmed in writing on the quote. A non-PIC installation gets no rebate, with no retroactive path.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900">Choose a qualifying system</p>
                <p className="text-sm text-gray-700">SEER2 15.2 or higher, AHRI-certified, replacing your complete existing cooling system — condenser, blower, and evaporator coil. Your PIC handles the AHRI documentation and photo requirements FPL needs.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-900">Get the credit on your invoice</p>
                <p className="text-sm text-gray-700">The $200 appears as an itemized credit and you pay the net amount. There is no form to submit and nothing to mail — the PIC settles with FPL after installation.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <p className="font-semibold text-gray-900">Add insulation and On Call if they fit</p>
                <p className="text-sm text-gray-700">If your attic tests below R-8, a PIC insulation upgrade earns the $220 credit the same way. On Call enrollment is self-scheduled online, with a free device installation by an FPL-approved contractor.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. WHAT TO WATCH */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to watch</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">FPSC demand-side management cycle</p>
              <p className="text-sm text-gray-600 mt-1">FPL&apos;s rebate amounts are set in program standards under demand-side management plans approved by the Florida Public Service Commission. The current standards, effective September 1, 2025, raised the Residential HVAC rebate to $200 following an FPSC-approved increase — and the same process can move amounts again. FPL states the programs may be modified or canceled without notice.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Florida HEAR/HOMES launch — the IRA funding runway</p>
              <p className="text-sm text-gray-600 mt-1">Florida&apos;s roughly $346 million IRA allocation remains unlaunched, pending U.S. DOE approval, with FDACS administering rollout in phases beginning with HEAR. A launch would transform stacking in FPL territory — income-qualified HEAR rebates can reach $14,000 per household and can combine with utility rebates under DOE rules.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">The two-year re-rebate clock</p>
              <p className="text-sm text-gray-600 mt-1">FPL will not rebate the same HVAC system twice within two years, though it may waive the limit for systems damaged by a recognized natural disaster, tornado, fire, or similar event — a provision worth knowing in hurricane country.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently asked questions</h2>
          <div className="space-y-6">
            {faqJsonLd.mainEntity.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.name}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. SEE ALSO */}
      <section className="py-8 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-3">See also</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/heat-pumps/states/fl" className="text-brand-600 hover:underline">
                Florida Heat Pump Rebates
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/utilities/duke-energy" className="text-brand-600 hover:underline">
                Duke Energy Heat Pump Rebates
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/utilities/tva-energyright" className="text-brand-600 hover:underline">
                TVA EnergyRight Heat Pump Rebates
              </Link>
            </li>
            <li>
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                Federal Heat Pump Tax Credits Ended — What Changed
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps" className="text-brand-600 hover:underline">
                All State Heat Pump Incentives
              </Link>
            </li>
            <li>
              <Link href="/battery" className="text-brand-600 hover:underline">
                Are Home Batteries Worth It in 2026?
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* 13. SOURCES */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="space-y-2 text-sm">
            {utility.sources.map((source, index) => (
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

      {/* 14. DISCLAIMER */}
      <section className="py-8">
        <div className="container-narrow">
          <div className="bg-gray-100 rounded-lg p-6">
            <p className="text-gray-500 text-xs leading-relaxed">
              <strong>Disclaimer:</strong> This page covers the main residential heat pump, insulation, and demand-response incentives Florida Power &amp; Light offers to its Florida customers in 2026. It does not calculate savings, guarantee eligibility, or represent FPL or any incentive program. Participating Independent Contractors are independent businesses, not FPL employees, and FPL may modify or cancel its programs without notice. We verify status regularly but programs can change without notice. Always confirm current amounts and eligibility with FPL and your contractor before making decisions.
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
