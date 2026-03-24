import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Washington DC Heat Pump Rebates 2026: Up to $9,800 + DCSEU Electrification | Home Energy Basics",
  description:
    "DCSEU offers up to $5,000 for heat pumps. Electrification rebates add $3,800+. Federal tax credits ended. Every DC heat pump incentive in 2026.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/dc",
  },
  openGraph: {
    title: "Washington DC Heat Pump Rebates 2026",
    description:
      "Up to $9,800 in DCSEU rebates for gas-to-electric conversions — the complete guide to DC heat pump incentives after federal credits expired.",
    url: "https://homeenergybasics.com/heat-pumps/states/dc",
    type: "article",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What heat pump rebates are available in Washington DC in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The DC Sustainable Energy Utility (DCSEU) offers up to $5,000 for air-source heat pumps and up to $1,600 for heat pump water heaters when switching from gas or oil to electric. Additional electrification service rebates cover up to $2,000 for a panel upgrade and $1,200 for circuit additions. Total realistic rebates for a gas-to-electric conversion reach $9,800. Federal Section 25C and 25D tax credits expired December 31, 2025 and are no longer available.",
      },
    },
    {
      "@type": "Question",
      name: "Can I stack DCSEU rebates with the Affordable Home Electrification Program in DC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. DCSEU standard rebates and the Affordable Home Electrification Program (AHEP) are mutually exclusive tracks. AHEP provides whole-home electrification at no cost for households below 80% of Area Median Income. Homeowners above 80% AMI use the standard DCSEU rebates, which can be combined with DC Green Bank financing. DCSEU rebates are capped at $15,000 per fiscal year per Pepco account.",
      },
    },
    {
      "@type": "Question",
      name: "Why doesn\u0027t Pepco offer heat pump rebates in DC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Unlike Pepco Maryland, which operates the EmPOWER Maryland rebate programs, Pepco\u0027s DC service territory shifted residential energy efficiency program responsibility to the DCSEU in 2011. All heat pump rebates in DC are administered exclusively through the DCSEU, funded by surcharges on Pepco electric and Washington Gas bills. Pepco DC\u0027s own programs cover demand response and behavioral efficiency, not HVAC equipment.",
      },
    },
    {
      "@type": "Question",
      name: "Who administers heat pump incentive programs in Washington DC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The DC Sustainable Energy Utility (DCSEU), operated by the Vermont Energy Investment Corporation under contract with the DC Department of Energy and Environment (DOEE), administers all residential heat pump rebates. DOEE oversees the federal IRA-funded programs (HEAR and HOMES), which the DCSEU also administers. The DC Green Bank provides supplementary financing through the Clean Energy Advantage Loan Program.",
      },
    },
    {
      "@type": "Question",
      name: "Is Washington DC a good climate for heat pumps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. DC sits in ASHRAE Climate Zone 4A (Mixed-Humid) with a winter design temperature of about 16\u00B0F. Modern cold-climate heat pumps perform well in DC\u0027s winters. About 56% of DC households currently heat with natural gas and 41% with electricity, making heat pumps a practical replacement for both gas furnaces and older electric resistance systems.",
      },
    },
  ],
};

export default function WashingtonDCPage() {
  const dcIncentive = incentives.DC;
  const formattedDate = formatDate(dcIncentive.lastVerified);

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
            {" "}/ Washington DC
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Washington DC Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            With federal tax credits gone, DC homeowners switching from gas to electric heat pumps can still claim up to <strong>$9,800</strong> in rebates through the DC Sustainable Energy Utility (DCSEU). Income-qualified households below 80% of Area Median Income (AMI) may receive whole-home electrification at no cost through the Affordable Home Electrification Program, though it&apos;s currently waitlisted. This guide covers all major Washington DC heat pump incentives available in 2026, including DCSEU rebates, AHEP, and DC Green Bank financing. Here&apos;s what&apos;s actually available.
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
          <StatusCard incentive={dcIncentive} />
        </div>
      </section>

      {/* 3. SHORT VERSION */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The short version</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ DCSEU heat pump rebates up to $5,000</p>
              <p className="text-sm text-green-900">ENERGY STAR Most Efficient air-source heat pumps qualify for up to $5,000 when replacing gas or oil systems. Available to all DC homeowners regardless of income.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Electrification service rebates add up to $3,200</p>
              <p className="text-sm text-green-900">Panel upgrades ($2,000) and circuit additions ($400 each, up to 3) stack on top of equipment rebates when switching from gas or oil to electric.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Total realistic rebates up to $9,800</p>
              <p className="text-sm text-green-900">$5,000 (heat pump) + $1,600 (HPWH) + $2,000 (panel) + $1,200 (circuits). Income-qualified households below 80% AMI may receive whole-home electrification at no cost through AHEP.</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">✗ Federal tax credits expired</p>
              <p className="text-sm text-red-900">Section 25C ($2,000 heat pump credit) and Section 25D (30% geothermal credit) both ended December 31, 2025. No federal tax credits are available for 2026 installations.</p>
            </div>
            <div className="md:col-span-2 bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="font-semibold text-amber-800 mb-1">⚠ AHEP is currently waitlisted — Pepco offers no direct rebates</p>
              <p className="text-sm text-amber-900">The Affordable Home Electrification Program (AHEP) for low-income households is accepting waitlist applications only due to limited funding. Unlike Pepco Maryland, Pepco DC does not administer its own heat pump rebate program — all rebates come through DCSEU.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEDERAL EXPIRED */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Federal heat pump tax credits have ended</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <p className="text-red-900 leading-relaxed">
              The One Big Beautiful Bill Act (signed July 4, 2025) terminated both residential heat pump tax credits seven to nine years early. <strong>Section 25C</strong>, which provided 30% of costs up to <strong>$2,000</strong> for air-source heat pumps and heat pump water heaters, expired for property placed in service after December 31, 2025. <strong>Section 25D</strong>, which offered an uncapped <strong>30%</strong> credit for geothermal heat pumps, expired the same date. A heat pump purchased in 2025 but installed in 2026 receives zero federal credit. Homeowners who completed installations by December 31, 2025 can still claim credits on their 2025 tax returns using{" "}
              <a href="https://www.irs.gov/instructions/i5695" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">IRS Form 5695</a>.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            For more details on how the federal credit expiration affects DC homeowners, see our{" "}
            <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">federal heat pump tax credit guide</Link>. For DC homeowners planning full electrification, see our{" "}
            <Link href="/battery" className="text-brand-600 hover:underline">home battery guide</Link>.
          </p>
        </div>
      </section>

      {/* 5. DCSEU REBATES (Primary Program) */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">DCSEU residential rebates</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The DC Sustainable Energy Utility (DCSEU), operated by the Vermont Energy Investment Corporation under contract with the DC Department of Energy and Environment (DOEE), is the <strong>sole rebate administrator</strong> for heat pumps in Washington DC. These rebates are funded through surcharges on Pepco electric and Washington Gas bills and are open to all DC homeowners in residential properties of four units or fewer.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Heat pump equipment rebates (FY2026)</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            DCSEU offers significantly higher rebates for homeowners switching from gas or oil to electric. Equipment must be ENERGY STAR Certified at minimum.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Tier</th>
                  <th className="text-left p-3 font-semibold">Electric-to-electric</th>
                  <th className="text-left p-3 font-semibold">Gas/oil-to-electric</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Ducted ASHP</td>
                  <td className="p-3">ENERGY STAR Certified</td>
                  <td className="p-3 font-semibold">$1,000</td>
                  <td className="p-3 font-semibold">$4,000</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Ducted ASHP</td>
                  <td className="p-3">ENERGY STAR Most Efficient</td>
                  <td className="p-3 font-semibold">$1,500</td>
                  <td className="p-3 font-semibold">$5,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ductless mini-split</td>
                  <td className="p-3">ENERGY STAR Certified</td>
                  <td className="p-3 font-semibold">$1,000</td>
                  <td className="p-3 font-semibold">$4,000</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Ductless mini-split</td>
                  <td className="p-3">ENERGY STAR Most Efficient</td>
                  <td className="p-3 font-semibold">$1,500</td>
                  <td className="p-3 font-semibold">$5,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">HPWH (integrated)</td>
                  <td className="p-3">NEEA Tier 1–2</td>
                  <td className="p-3 font-semibold">$750</td>
                  <td className="p-3 font-semibold">$1,200</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">HPWH (integrated)</td>
                  <td className="p-3">NEEA Tier 3–4</td>
                  <td className="p-3 font-semibold">$1,000</td>
                  <td className="p-3 font-semibold">$1,600</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Electrification service rebates</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            These rebates are available only when switching from gas or oil to electric and require documentation of gas line capping.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Service</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Electrical panel upgrade to 200A</td>
                  <td className="p-3 font-semibold">$2,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Circuit addition (per circuit, max 3)</td>
                  <td className="p-3 font-semibold">$400</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Applications must be submitted within 30 days of installation and postmarked by September 30, 2026 (end of FY2026). The overall household cap on DCSEU rebates is <strong>$15,000</strong> per fiscal year, with a limit of one rebate per product type per Pepco account. DCSEU does not impose its own efficiency thresholds beyond requiring ENERGY STAR certification — both R-410A and newer low-GWP refrigerants (R-454B, R-32) qualify.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="font-semibold text-blue-800 mb-1">Pepco DC does not offer its own heat pump rebates</p>
            <p className="text-sm text-blue-900">Unlike Pepco Maryland, which runs the EmPOWER program with direct HVAC rebates, Pepco&apos;s DC service territory shifted residential efficiency programs to the DCSEU in 2011. Homeowners searching Pepco&apos;s website for DC heat pump rebates will not find any — all rebates come through DCSEU. Washington Gas similarly offers no heat pump or fuel-switching rebates in DC.</p>
          </div>
        </div>
      </section>

      {/* 6. AHEP / HEAR (Low-Income Electrification) */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Affordable Home Electrification Program (AHEP)</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Affordable Home Electrification Program provides whole-home electrification at <strong>no cost</strong> to qualifying DC households. This is how DC channels its federal Home Electrification and Appliance Rebates (HEAR) funding — DC received <strong>$29.6 million</strong> in HEAR allocations from the IRA.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">What AHEP covers</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            AHEP covers heat pump installation, heat pump water heater, induction stove, electric dryer, smart thermostat, and panel upgrade — with all gas lines capped upon completion. Federal HEAR funding provides up to <strong>$14,000</strong> per dwelling unit, supplemented by local District funds.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Eligibility requirements</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Household income must be at or below 80% of Area Median Income (AMI) — approximately <strong>$131,120</strong> for a four-person household in the DC metro area — or receipt of federal assistance (TANF, SSI, LIHEAP). Participants must have existing gas or oil equipment and receive electric service from Pepco.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-amber-800 mb-1">⚠ AHEP is currently accepting waitlist applications only</p>
            <p className="text-sm text-amber-900">Due to overwhelming demand and limited funding, AHEP is not processing new applications immediately. Homeowners who qualify should still apply to join the waitlist, as the no-cost benefit far exceeds any combination of standard rebates.</p>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">DC&apos;s federal rebate structure is unusual</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            DC channels <strong>all</strong> federal IRA rebate money exclusively through low-income programs. HEAR funds flow through AHEP, and Home Energy Performance-Based Whole-House Rebates (HOMES) funds flow through the Affordable Housing Retrofit Accelerator (AHRA) for multifamily affordable housing. DC&apos;s Department of Energy and Environment (DOEE) explicitly states that federally funded rebates are not available outside of AHEP or AHRA participation.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This means <strong>households above 80% AMI in DC cannot access federal HEAR rebates</strong>, despite the federal statute allowing participation up to 150% AMI. The 80–150% AMI tier that exists in many other states&apos; programs is effectively unused in DC. Moderate- and higher-income homeowners are limited to the locally funded DCSEU standard rebates.
          </p>
        </div>
      </section>

      {/* 9. STACKING (white — alternates from gray section 6) */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How DC incentives stack</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            DCSEU standard rebates can be combined with DC Green Bank financing. AHEP and standard DCSEU rebates are mutually exclusive — AHEP provides the work at no cost, so there is nothing to stack. The overall household cap on DCSEU rebates is <strong>$15,000</strong> per fiscal year.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 80% AMI — gas-to-electric conversion with ENERGY STAR Most Efficient</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>DCSEU: ASHP (gas-to-electric, Most Efficient): $5,000</li>
                <li>DCSEU: HPWH (gas-to-electric, NEEA Tier 3+): $1,600</li>
                <li>DCSEU: Panel upgrade to 200A: $2,000</li>
                <li>DCSEU: Circuit additions (3 circuits): $1,200</li>
                <li>Federal tax credits: $0</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$9,800</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 80% AMI — electric-to-electric replacement with ENERGY STAR Most Efficient</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>DCSEU: ASHP (electric-to-electric, Most Efficient): $1,500</li>
                <li>DCSEU: HPWH (electric-to-electric, NEEA Tier 3+): $1,000</li>
                <li>Federal tax credits: $0</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$2,500</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">Below 80% AMI — AHEP whole-home electrification</p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>AHEP: Heat pump, HPWH, induction stove, dryer, panel, thermostat: No cost</li>
                <li>Federal HEAR funding (up to $14,000/unit): Included</li>
                <li>Supplemental local DC funding: Included</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Out of pocket: $0 (currently waitlisted)</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-5 mb-6">
            <p className="font-semibold text-gray-900 mb-1">What you&apos;ll actually pay</p>
            <p className="text-sm text-gray-700">For a typical gas-to-electric conversion costing $15,000–$22,000 installed, a market-rate DC homeowner claiming the full <strong>$9,800</strong> in DCSEU rebates would pay <strong>$5,200 to $12,200 out of pocket</strong>. DC Green Bank&apos;s Clean Energy Advantage Loan Program offers financing from 5.75% APR (secured) or 8.25% APR (unsecured) for terms of 3, 5, or 10 years, up to $35,000. Income-qualified homeowners accepted into AHEP pay nothing.</p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <p className="font-semibold text-green-800 mb-1">✓ Best candidates for DC heat pump incentives</p>
            <p className="text-sm text-green-900">DC homeowners currently heating with gas or oil who can switch to an ENERGY STAR Most Efficient system benefit most — the $5,000 gas-to-electric rebate is five times the $1,000 electric-to-electric amount. Rowhouse owners with aging gas furnaces and 100A panels are the ideal profile, since the panel upgrade rebate ($2,000) directly addresses their most common barrier.</p>
          </div>
        </div>
      </section>

      {/* 10. WEATHERIZATION (gray — alternates from white) */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Weatherization and emergency heating programs</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            DOEE runs the <strong>Weatherization Assistance Program (WAP)</strong> for DC households below 60% of State Median Income. WAP can include insulation, air sealing, and heating system repairs or replacement — including heat pump installation in some cases. The program is free for qualifying households.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The <strong>Emergency Mechanical Systems (EMS)</strong> program provides emergency repair or replacement of heating and cooling systems for income-eligible homeowners and renters. Both WAP and EMS are currently accepting applications for a waitlist, with work anticipated in late March/April 2026.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Contact DOEE at (202) 535-2600 or visit{" "}
            <a href="https://doee.dc.gov/service/wap" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">doee.dc.gov</a>{" "}
            to apply for either program.
          </p>
        </div>
      </section>

      {/* 11. CLIMATE (white — alternates from gray) */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">DC climate and heat pump performance</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Washington DC sits in IECC/ASHRAE Climate Zone 4A (Mixed-Humid). Modern cold-climate heat pumps handle DC winters well — standard heat pumps also perform adequately given DC&apos;s relatively moderate winter design temperatures.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Location</th>
                  <th className="text-left p-3 font-semibold">ASHRAE 99.6% design temp</th>
                  <th className="text-left p-3 font-semibold">Cold-climate HP recommended</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Washington DC (Reagan National)</td>
                  <td className="p-3 font-semibold">~16°F</td>
                  <td className="p-3">Recommended but not required</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            About <strong>56%</strong> of DC households heat with natural gas (supplied by Washington Gas), while <strong>41%</strong> use electricity — a mix of heat pumps and electric resistance. DC&apos;s housing stock is heavily rowhouse-oriented, with much of the building stock predating 1950. Older homes may need insulation upgrades and panel capacity improvements for optimal heat pump performance.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            DC has among the nation&apos;s most aggressive building decarbonization policies. The Clean Energy DC Omnibus Amendment Act mandates 100% renewable electricity by 2032, and Building Energy Performance Standards (BEPS) are phasing in requirements for existing buildings. A net-zero-energy building code for new construction takes effect January 1, 2027.
          </p>
          <p className="text-gray-700 leading-relaxed">
            For DC homeowners considering battery storage to pair with a heat pump, see our{" "}
            <Link href="/battery" className="text-brand-600 hover:underline">guide to home batteries in 2026</Link>.
          </p>
        </div>
      </section>

      {/* 12. HOW TO APPLY (gray — alternates from white) */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to apply for DCSEU rebates</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-gray-900">Choose an ENERGY STAR certified heat pump</p>
                <p className="text-sm text-gray-700">Select at minimum an ENERGY STAR Certified system. ENERGY STAR Most Efficient models qualify for the highest rebate tier. Confirm the installer is licensed and insured in DC.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900">Complete installation and document the work</p>
                <p className="text-sm text-gray-700">Keep all invoices, proof of ENERGY STAR certification, and before/after photos. If switching from gas or oil, document gas line capping to qualify for the higher electrification rebate tier.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-900">Submit your rebate application within 30 days</p>
                <p className="text-sm text-gray-700">Apply online at{" "}
                  <a href="https://www.dcseu.com/residential-rebates/apply" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">dcseu.com/residential-rebates/apply</a>. Applications must be submitted within 30 days of installation and postmarked by September 30, 2026.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <p className="font-semibold text-gray-900">For income-qualified programs, apply separately through AHEP</p>
                <p className="text-sm text-gray-700">Households below 80% AMI should apply for AHEP at{" "}
                  <a href="https://www.dcseu.com/ahep-sfa-apply" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">dcseu.com/ahep-sfa-apply</a>. AHEP is a separate track from standard rebates — do not apply for both.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. WHAT TO WATCH (white — alternates from gray) */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to watch for</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">IRA funding runway</p>
              <p className="text-sm text-gray-600 mt-1">DC&apos;s $59.4 million in federal IRA allocations ($29.8M HOMES + $29.6M HEAR) survived the OBBBA. However, these funds are finite and currently funneled entirely through low-income programs. If demand exceeds allocations, AHEP waitlists may grow longer or the program could pause entirely.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">DCSEU fiscal year reset</p>
              <p className="text-sm text-gray-600 mt-1">DCSEU rebates operate on a fiscal year (October 1 – September 30). Rebate amounts and eligibility may change at the start of FY2027 in October 2026. If planning a project, submitting before September 30, 2026 locks in current amounts.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">DC building code changes</p>
              <p className="text-sm text-gray-600 mt-1">DC&apos;s net-zero-energy building code for new construction takes effect January 1, 2027. Building Energy Performance Standards (BEPS) are tightening for existing buildings. These policy trends strongly favor electrification and may increase demand for heat pumps — and potentially for rebate funds.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 14. FAQ (gray — alternates from white) */}
      <section className="bg-gray-50 py-12">
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

      {/* 15. SEE ALSO (white — alternates from gray) */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-3">See also</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/heat-pumps/states/md" className="text-brand-600 hover:underline">
                Maryland Heat Pump Rebates 2026
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/va" className="text-brand-600 hover:underline">
                Virginia Heat Pump Rebates 2026
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/pa" className="text-brand-600 hover:underline">
                Pennsylvania Heat Pump Rebates 2026
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

      {/* 16. SOURCES (gray — alternates from white) */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="space-y-2 text-sm">
            {dcIncentive.sources.map((source: { label: string; url: string }, index: number) => (
              <li key={index}>
                <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">
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
              <strong>Disclaimer:</strong> This page covers the main DCSEU, IRA, and income-qualified heat pump incentives available to Washington DC homeowners in 2026. It does not calculate savings, guarantee eligibility, or represent any incentive program. DC is not a state and has a unique incentive structure where the DCSEU administers all residential rebates rather than the electric utility. We verify status regularly but programs can change without notice. Always confirm current amounts and eligibility with the DCSEU and your contractor before making decisions.
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
