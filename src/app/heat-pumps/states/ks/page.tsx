import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Kansas Heat Pump Rebates 2026: $500–$1,000 Evergy + IRA HEAR Pending | Home Energy Basics",
  description:
    "Evergy offers $500–$1,000. KEPCo co-ops add $300–$600. Federal tax credits ended. Here's every Kansas heat pump incentive in 2026.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/ks",
  },
  openGraph: {
    title: "Kansas Heat Pump Rebates 2026",
    description:
      "Evergy rebates up to $1,000 and KEPCo co-op rebates up to $600 — the complete guide to Kansas heat pump incentives after federal credits expired.",
    url: "https://homeenergybasics.com/heat-pumps/states/ks",
    type: "article",
  },
};

export default function KansasPage() {
  const ksIncentive = incentives.KS;
  const formattedDate = formatDate(ksIncentive.lastVerified);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What heat pump rebates are available in Kansas in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Evergy offers $500–$1,000 for air-source heat pumps and $1,000–$1,500 for ground-source heat pumps under the KEEIA program. KEPCo rural electric cooperatives offer $50–$100 per half-ton ($300–$600 for a typical 3-ton system). Midwest Energy offers on-bill financing through How$mart. Federal tax credits (25C/25D) ended December 31, 2025. Kansas has no state tax credits or state-funded rebates. The $105.6 million IRA-funded Kansas Home Rebates Program (HEAR/HOMES) has not launched.",
        },
      },
      {
        "@type": "Question",
        name: "Can I stack Evergy and IRA rebates in Kansas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, utility rebates from Evergy or KEPCo cooperatives can generally stack with federal IRA rebates (HEAR and HOMES) once those programs launch, provided total incentives do not exceed the project cost. However, the Kansas Home Rebates Program has not launched as of March 2026, so only utility rebates are currently available to stack.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a cold-climate heat pump in Kansas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Kansas heating design temperatures range from -2°F in Kansas City to 3°F in Wichita, meaning standard heat pumps lose significant capacity during the coldest weeks. Cold-climate-rated models (ccASHP) maintain rated output down to -5°F to -15°F and are the recommended choice. Dual-fuel systems pairing a heat pump with an existing gas furnace are also common in Kansas.",
        },
      },
      {
        "@type": "Question",
        name: "Who administers Kansas heat pump rebate programs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Evergy administers the largest utility rebate program under the Kansas Energy Efficiency Investment Act (KEEIA), approved by the Kansas Corporation Commission. KEPCo coordinates rebates for 19 rural electric cooperatives. The Kansas Energy Office (a division of the Kansas Corporation Commission) administers the pending IRA-funded Kansas Home Rebates Program with HORNE as implementation partner.",
        },
      },
      {
        "@type": "Question",
        name: "When will Kansas launch the HEAR and HOMES rebate programs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "As of March 2026, the Kansas Home Rebates Program website (kshomerebates.gov) states the program is coming soon. Contractor recruitment is underway, but no consumer launch date has been announced. Kansas was allocated $105.6 million ($52.9M for HOMES and $52.6M for HEAR). Homeowners can sign up for updates at kshomerebates.gov.",
        },
      },
    ],
  };

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
            {" "}/ Kansas
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kansas Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Kansas has no statewide heat pump rebate program and no state tax credits.
            Evergy utility rebates of <strong>$500–$1,000</strong> for air-source heat pumps are
            the primary incentive available today. KEPCo cooperatives add <strong>$300–$600</strong> for
            rural customers. The state&apos;s <strong>$105.6 million</strong> in IRA-funded
            HEAR and HOMES rebates have not launched. This guide covers all major Kansas
            heat pump incentives available in 2026, including Evergy KEEIA rebates,
            KEPCo cooperative programs, Midwest Energy financing, and the pending Kansas
            Home Rebates Program. Here&apos;s what&apos;s actually available.
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
          <StatusCard incentive={ksIncentive} />
        </div>
      </section>

      {/* 3. SHORT VERSION */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Short Version</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Evergy KEEIA Rebates</p>
              <p className="text-sm text-green-900">
                $500–$1,000 for ducted air-source heat pumps depending on SEER2 rating.
                $1,000–$1,500 for ground-source. Must use an Evergy-authorized contractor.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ KEPCo Co-op Rebates</p>
              <p className="text-sm text-green-900">
                $50–$100 per half-ton through 19 rural electric cooperatives.
                A typical 3-ton SEER2 17+ system earns $600. Some co-ops add local bonuses.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Potential Savings With IRA</p>
              <p className="text-sm text-green-900">
                $1,000 (above 150% AMI) to $9,000+ (below 80% AMI) once Kansas Home Rebates
                launches. Full electrification packages can reach ~$15,000 total incentives.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">✗ Federal Tax Credits Expired</p>
              <p className="text-sm text-red-900">
                Section 25C ($2,000 heat pump credit) and Section 25D (30% geothermal credit)
                both ended December 31, 2025. No federal tax credit is available for 2026 installations.
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 md:col-span-2">
              <p className="font-semibold text-amber-800 mb-1">⚠ IRA Rebates Not Yet Available</p>
              <p className="text-sm text-amber-900">
                Kansas was allocated $105.6 million in HEAR and HOMES funding, but the Kansas
                Home Rebates Program has not launched consumer rebates. Projects completed
                before the program opens are not eligible for IRA rebates. Sign up for updates
                at kshomerebates.gov.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEDERAL EXPIRED */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Federal Heat Pump Tax Credits Have Ended
          </h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <p className="text-red-900 leading-relaxed">
              The federal <strong>Section 25C</strong> credit (up to <strong>$2,000</strong> for
              heat pumps) and <strong>Section 25D</strong> credit (30% for geothermal systems)
              both expired on <strong>December 31, 2025</strong>, following passage of the One Big
              Beautiful Bill Act. No federal tax credit is available for heat pumps placed in
              service in 2026. Kansas homeowners who completed installations by December 31, 2025
              can still claim credits on their 2025 tax return using IRS Form 5695.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            For full details on the federal credit termination and &quot;placed in service&quot; rules,
            see our{" "}
            <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
              federal heat pump tax credit guide
            </Link>.
          </p>
        </div>
      </section>

      {/* 5. HEAR / PRIMARY — Kansas Home Rebates (Pending) */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Home Electrification and Appliance Rebates (HEAR) — Pending Launch
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Kansas was allocated <strong>$52.6 million</strong> in HEAR funding through
            the Inflation Reduction Act. The Kansas Energy Office (a division of the Kansas
            Corporation Commission) is administering the program with HORNE as the
            implementation partner. As of {formattedDate}, the consumer-facing program
            has not launched. Contractor recruitment is underway.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">HEAR Rebate Amounts (When Available)</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
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
                  <td className="p-3">Electrical panel upgrade</td>
                  <td className="p-3 font-semibold">Up to $4,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Insulation, air sealing, ventilation</td>
                  <td className="p-3 font-semibold">Up to $1,600</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Electric stove/cooktop</td>
                  <td className="p-3 font-semibold">Up to $840</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump clothes dryer</td>
                  <td className="p-3 font-semibold">Up to $840</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3 font-semibold">Household annual cap</td>
                  <td className="p-3 font-semibold">$14,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            HEAR eligibility is income-based: households below 80% of Area Median Income (AMI)
            receive 100% of costs covered (up to the caps), households at 80–150% AMI receive
            50% of costs, and households above 150% AMI are not eligible for HEAR.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="font-semibold text-amber-800 mb-1">⚠ Do Not Wait If Your System Has Failed</p>
            <p className="text-sm text-amber-900">
              If your heating or cooling system needs replacement now, do not delay for IRA rebates
              with no confirmed launch date. Evergy and KEPCo rebates are available today. Projects
              completed before the Kansas Home Rebates Program opens are not eligible for
              retroactive HEAR rebates.
            </p>
          </div>
        </div>
      </section>

      {/* 6. HOMES / SECONDARY — Pending */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Home Efficiency Rebates (HOMES) — Pending Launch
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Kansas was allocated <strong>$52.9 million</strong> in HOMES funding. Unlike HEAR,
            HOMES is performance-based — rebates are tied to modeled or measured whole-home energy
            savings rather than individual equipment. HOMES is open to all income levels.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Income Level</th>
                  <th className="text-left p-3 font-semibold">20%+ Energy Savings</th>
                  <th className="text-left p-3 font-semibold">35%+ Energy Savings</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Above 80% AMI</td>
                  <td className="p-3 font-semibold">Up to $2,000</td>
                  <td className="p-3 font-semibold">Up to $4,000</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">At or below 80% AMI</td>
                  <td className="p-3 font-semibold">Up to $4,000</td>
                  <td className="p-3 font-semibold">Up to $8,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed">
            HOMES and HEAR can complement each other — HEAR for specific equipment and HOMES
            for whole-home performance — but cannot both be applied to the same measure.
            Funds remain available until depleted or September 30, 2031.
          </p>
        </div>
      </section>

      {/* 7. UTILITY PROGRAMS */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Utility Rebates</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Utility rebates are the only active heat pump incentives in Kansas today. Programs
            vary significantly by provider — Evergy offers the largest rebates for its eastern
            Kansas customers, while rural cooperatives provide smaller per-unit amounts through
            KEPCo.
          </p>

          {/* Evergy */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Evergy — KEEIA Rebates</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Evergy is the largest electric utility in Kansas, serving the Kansas City metro,
            Wichita, Topeka, Lawrence, and surrounding areas. Its rebate program was approved by
            the Kansas Corporation Commission in September 2023 under the Kansas Energy Efficiency
            Investment Act (KEEIA) and runs through <strong>December 31, 2027</strong>.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">System Type</th>
                  <th className="text-left p-3 font-semibold">SEER2 Rating</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Ducted ASHP</td>
                  <td className="p-3">15.2–15.99</td>
                  <td className="p-3 font-semibold">$500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ducted ASHP</td>
                  <td className="p-3">16–16.99</td>
                  <td className="p-3 font-semibold">$700</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ducted ASHP</td>
                  <td className="p-3">17–19.99</td>
                  <td className="p-3 font-semibold">$900</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Ducted ASHP</td>
                  <td className="p-3">20+</td>
                  <td className="p-3 font-semibold">$1,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Mini-split heat pump</td>
                  <td className="p-3">—</td>
                  <td className="p-3 font-semibold">$150</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ground-source HP (replacing failed unit)</td>
                  <td className="p-3">—</td>
                  <td className="p-3 font-semibold">$1,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ground-source HP (replacing working unit)</td>
                  <td className="p-3">—</td>
                  <td className="p-3 font-semibold">$1,500</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Evergy also offers insulation rebates (up to <strong>$500</strong>), air sealing
            (up to <strong>$300</strong>), duct sealing (up to <strong>$250</strong>), and
            a <strong>$250</strong> home energy audit credit. All work must be performed by an
            Evergy-authorized contractor. Evergy customers on heat pump systems may qualify
            for a lower eight-month winter space heat electric rate.
          </p>

          {/* KEPCo */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">KEPCo Rural Electric Cooperatives</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Kansas Electric Power Cooperative (KEPCo) coordinates rebates for 19 member
            distribution cooperatives serving rural Kansas. Rebates are per half-ton of
            system capacity.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">System Type</th>
                  <th className="text-left p-3 font-semibold">SEER2 Minimum</th>
                  <th className="text-left p-3 font-semibold">Rebate per Half-Ton</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Air-source heat pump</td>
                  <td className="p-3">14.3</td>
                  <td className="p-3 font-semibold">$50</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Air-source heat pump</td>
                  <td className="p-3">16</td>
                  <td className="p-3 font-semibold">$75</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Air-source heat pump</td>
                  <td className="p-3">17+</td>
                  <td className="p-3 font-semibold">$100</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Geothermal heat pump</td>
                  <td className="p-3">COP ≥ 3.3</td>
                  <td className="p-3 font-semibold">$125</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            A typical 3-ton SEER2 17+ air-source heat pump earns <strong>$600</strong> from
            KEPCo (6 half-tons × $100). Individual cooperatives may add local bonuses — Caney
            Valley Electric adds a flat <strong>$200</strong>, and Pioneer Electric offers
            up to <strong>$400/ton</strong> for manufactured home upgrades. Participating co-ops
            include FreeState Electric, Flint Hills Rural Electric, Sedgwick County Electric,
            4 Rivers Electric, and others.
          </p>

          {/* Midwest Energy */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Midwest Energy — How$mart Financing</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Midwest Energy serves western and central Kansas with both gas and electric service.
            Rather than traditional rebates, Midwest Energy&apos;s How$mart program pays the full
            upfront cost of qualifying heat pump installations. The customer repays through a
            monthly surcharge on their utility bill, designed to be less than the projected
            energy savings. The surcharge transfers with the property if the home is sold, and
            can be paid off early with no penalty. A free energy audit is required before
            enrollment.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="font-semibold text-blue-800 mb-1">Kansas Gas Service: No Heat Pump Rebates</p>
            <p className="text-sm text-blue-900">
              Kansas Gas Service (ONE Gas subsidiary), the state&apos;s largest natural gas utility,
              does not offer any heat pump or HVAC rebates. The Kansas City Board of Public
              Utilities (BPU) has also ended its residential EnergySmart rebate program. If your
              home is served by these utilities for gas or electric, check whether you also have
              Evergy or a co-op for your electric service — that&apos;s where the rebates are.
            </p>
          </div>
        </div>
      </section>

      {/* 8. LOCAL PROGRAMS — SKIPPED (no Kansas city programs exist) */}

      {/* 9. STACKING */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Kansas Incentives Stack</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Utility rebates from Evergy or KEPCo cooperatives can generally stack with federal
            IRA rebates (HEAR and HOMES) once those programs launch, provided total incentives
            do not exceed the project cost. Kansas has no state tax credits or state rebates
            to add. Today, only utility rebates are available. Below are scenarios for a
            <strong> 3-ton ducted cold-climate heat pump</strong> with an installed cost of
            approximately <strong>$12,000</strong>.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 150% AMI — Evergy Customer</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Evergy ASHP rebate (SEER2 17+): $900</li>
                <li>HEAR: not eligible</li>
                <li>HOMES (when launched, 35%+ savings): up to $4,000</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$4,900</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">80–150% AMI — Evergy Customer</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Evergy ASHP rebate (SEER2 17+): $900</li>
                <li>HEAR heat pump (when launched, 50% of cost): up to $4,000</li>
                <li>HOMES (when launched, 35%+ savings): up to $4,000</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$8,900</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">Below 80% AMI — Evergy Customer (Best Case)</p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>Evergy ASHP rebate (SEER2 17+): $900</li>
                <li>HEAR heat pump (when launched, 100% of cost): up to $8,000</li>
                <li>HEAR electrical panel (if needed): up to $4,000</li>
                <li>HEAR insulation/air sealing: up to $1,600</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$14,500</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-5">
            <p className="font-semibold text-gray-900 mb-1">What You&apos;ll Actually Pay</p>
            <p className="text-sm text-gray-700">
              Today (utility rebates only): <strong>$11,000–$11,500</strong> out of pocket
              for a $12,000 system. Once IRA programs launch: <strong>$3,100–$11,100</strong> out
              of pocket depending on income. Kansas has no state tax credits and no state loan
              programs to further reduce costs.
            </p>
          </div>
        </div>
      </section>

      {/* 10. WEATHERIZATION */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Weatherization Assistance</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Kansas Weatherization Assistance Program (WAP) provides free home energy
            upgrades to income-eligible households. Services include air sealing, insulation,
            and testing, cleaning, repairing, or replacing heating and cooling systems and
            water heaters. Both homeowners and renters (with landlord permission) qualify.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The program is administered by the Kansas Housing Resources Corporation (KHRC) and
            delivered through four community action agencies across the state. Eligibility is
            generally tied to 200% of the federal poverty level. Households receiving SSI,
            TANF, or LIEAP may automatically qualify. Contact KHRC at 785-264-4814 or visit{" "}
            <a
              href="https://kshousingcorp.org/weatherization-assistance/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              kshousingcorp.org
            </a>{" "}
            for details.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <p className="font-semibold text-green-800 mb-1">✓ Best Candidates for Kansas Heat Pumps</p>
            <p className="text-sm text-green-900">
              Homeowners replacing aging furnaces or central air conditioners in Evergy territory
              benefit the most — you capture both heating and cooling savings with a single
              system while collecting the utility rebate. Propane-heated rural homes on KEPCo
              co-ops see the strongest economics due to high propane costs. Low-income households
              (below 150% AMI) should wait for the Kansas Home Rebates launch if possible —
              HEAR rebates of up to $8,000 would cover most or all equipment costs.
            </p>
          </div>
        </div>
      </section>

      {/* 11. CLIMATE */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Kansas Climate &amp; Heat Pump Performance</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Kansas falls primarily in IECC Climate Zone 4A (Mixed-Humid), with northwest
            counties in Zone 5A. Winters are cold enough to require cold-climate-rated heat
            pumps, while summers are hot enough that every home needs air conditioning.
            That dual need makes heat pumps particularly practical — they replace both the
            furnace and the air conditioner.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">City</th>
                  <th className="text-left p-3 font-semibold">Heating Design Temp (99%)</th>
                  <th className="text-left p-3 font-semibold">Cooling Design Temp (1%)</th>
                  <th className="text-left p-3 font-semibold">Climate Zone</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Kansas City</td>
                  <td className="p-3 font-semibold">3°F</td>
                  <td className="p-3">95°F</td>
                  <td className="p-3">4A</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Topeka</td>
                  <td className="p-3 font-semibold">4°F</td>
                  <td className="p-3">96°F</td>
                  <td className="p-3">4A</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Wichita</td>
                  <td className="p-3 font-semibold">7°F</td>
                  <td className="p-3">99°F</td>
                  <td className="p-3">4A</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Dodge City</td>
                  <td className="p-3 font-semibold">5°F</td>
                  <td className="p-3">100°F</td>
                  <td className="p-3">4A</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            About 60% of Kansas households heat with natural gas, 25% with electricity, and
            8% with propane. Dual-fuel systems — pairing a heat pump with an existing gas
            furnace — are the most common transition path for gas-heated homes. The system
            automatically switches between fuel sources based on outdoor temperature. For
            propane-heated rural homes, a full electric heat pump replacement often delivers
            the strongest savings. For more on whole-home electrification economics,
            see our{" "}
            <Link href="/battery" className="text-brand-600 hover:underline">
              home battery guide
            </Link>.
          </p>
        </div>
      </section>

      {/* 12. HOW TO APPLY */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Apply</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Applying for Kansas heat pump rebates depends on your electric utility. Here are
            the steps for the two main programs currently accepting applications.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Evergy Customers</h3>
          <div className="space-y-4 mb-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-gray-900">Find an Evergy-authorized contractor</p>
                <p className="text-sm text-gray-700">
                  Use the contractor directory at findprovider.evergy.com or call 855-667-7594.
                  Only work performed by authorized contractors qualifies for rebates.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900">Get a quote and confirm equipment eligibility</p>
                <p className="text-sm text-gray-700">
                  Verify the heat pump meets minimum SEER2 requirements (15.2 for the lowest
                  rebate tier, 20+ for the maximum $1,000). Equipment must be AHRI-certified
                  with matching coil.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-900">Complete installation and submit rebate application</p>
                <p className="text-sm text-gray-700">
                  Your contractor typically handles the rebate submission. Rebates are processed
                  after installation. Contact residential@rebates.evergy.com with questions.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">KEPCo Co-op Customers</h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-gray-900">Contact your local cooperative</p>
                <p className="text-sm text-gray-700">
                  Confirm your co-op participates in the KEPCo rebate program and check for
                  any local bonus amounts.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900">Install qualifying equipment</p>
                <p className="text-sm text-gray-700">
                  Minimum SEER2 14.3 for air-source, COP ≥ 3.3 for geothermal. Use a licensed
                  HVAC contractor.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-900">Submit the rebate form to your co-op</p>
                <p className="text-sm text-gray-700">
                  Include proof of purchase, AHRI certificate, and contractor invoice. Rebates
                  are typically mailed as a check within 4–6 weeks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. WHAT TO WATCH */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Watch</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Kansas Home Rebates Launch Date</p>
              <p className="text-sm text-gray-600 mt-1">
                The $105.6 million HEAR/HOMES program is the single biggest pending change
                for Kansas homeowners. Contractor recruitment is active, suggesting a launch
                could come in 2026. Sign up at kshomerebates.gov for updates.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">IRA Funding Runway</p>
              <p className="text-sm text-gray-600 mt-1">
                IRA rebate funding remains available until depleted or September 30, 2031.
                However, congressional efforts to rescind or redirect IRA funds are ongoing.
                Kansas&apos;s allocation is not guaranteed until committed to approved projects.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Evergy KEEIA Program Expiration</p>
              <p className="text-sm text-gray-600 mt-1">
                Evergy&apos;s current rebate program runs through December 31, 2027. After that,
                program renewal depends on Kansas Corporation Commission approval of new
                KEEIA filings. Rebate amounts could change with the next program cycle.
              </p>
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

      {/* 15. SEE ALSO */}
      <section className="py-8 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-3">See also</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/heat-pumps/states/co" className="text-brand-600 hover:underline">
                Colorado Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li className="text-gray-500">
              Missouri Heat Pump Rebates <em>(coming soon)</em>
            </li>
            <li className="text-gray-500">
              Oklahoma Heat Pump Rebates <em>(coming soon)</em>
            </li>
            <li className="text-gray-500">
              Nebraska Heat Pump Rebates <em>(coming soon)</em>
            </li>
            <li>
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                Federal Heat Pump Tax Credits — What Ended and Why
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
            {ksIncentive.sources.map((source: { label: string; url: string }, index: number) => (
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
              <strong>Disclaimer:</strong> This page covers the main statewide,
              utility, and IRA heat pump incentives available to Kansas
              homeowners in 2026. It does not calculate savings, guarantee
              eligibility, or represent any incentive program. Kansas has no state-funded
              rebate program — utility rebates and pending IRA programs are the primary
              incentives. We verify status regularly but programs can change
              without notice. Always confirm current amounts and eligibility with
              Evergy, your electric cooperative, and your contractor before making decisions.
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
