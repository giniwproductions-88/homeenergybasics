// src/app/heat-pumps/states/mt/page.tsx

import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Montana Heat Pump Rebates 2026: $450–$3,000 NWE + BPA Co-op Rebates | Home Energy Basics",
  description:
    "NorthWestern Energy offers $450 per ASHP and up to $3,000 for HPWHs. BPA co-ops cover $600–$1,560. Federal credits ended. Every Montana incentive in 2026.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/mt",
  },
  openGraph: {
    title: "Montana Heat Pump Rebates 2026",
    description:
      "NWE $450 ASHP, up to $3,000 HPWH, BPA co-ops $600–$1,560 — the complete guide to Montana heat pump incentives after federal credits expired.",
    url: "https://homeenergybasics.com/heat-pumps/states/mt",
    type: "article",
  },
};

export default function MontanaPage() {
  const mtIncentive = incentives.MT;
  const formattedDate = formatDate(mtIncentive.lastVerified);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What heat pump rebates are available in Montana in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Montana heat pump rebates in 2026 come primarily from utilities. NorthWestern Energy offers $450 per air-source heat pump and up to $3,000 for heat pump water heaters. BPA-funded cooperatives like Flathead Electric offer $600\u2013$1,560 for air-source systems. Bozeman offers a $500 HPWH rebate and Missoula County offers $1,435. Federal tax credits under Sections 25C and 25D expired December 31, 2025. Montana\u0027s HEAR and HOMES IRA rebate programs have not yet launched.",
        },
      },
      {
        "@type": "Question",
        name: "Can I stack NorthWestern Energy rebates with HEAR or local rebates in Montana?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Utility rebates from NorthWestern Energy or cooperatives can stack with local city and county rebates. A Bozeman NWE customer could combine the $3,000 NWE HPWH rebate with Bozeman\u0027s $500 rebate for up to $3,500 total. A Missoula County NWE customer could stack the $3,000 NWE rebate with the $1,435 county rebate for up to $4,435. When HEAR launches, it will also stack with utility and local rebates for income-qualifying households.",
        },
      },
      {
        "@type": "Question",
        name: "Do heat pumps work in Montana winters?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, but equipment selection matters. Montana\u0027s ASHRAE design temperatures range from -6\u00b0F in Missoula to -16\u00b0F in Helena, well below the 5\u00b0F threshold for ENERGY STAR Cold Climate certification. Modern cold-climate models from Mitsubishi, Daikin, and Carrier operate down to -13\u00b0F to -22\u00b0F but experience 30\u201350% capacity loss at extreme temperatures. Most Montana installers recommend dual-fuel setups pairing a heat pump with a gas furnace for the coldest days.",
        },
      },
      {
        "@type": "Question",
        name: "Who administers Montana\u0027s HEAR and HOMES programs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Montana Department of Environmental Quality (DEQ) Energy Bureau is the designated administrator for both the HEAR and HOMES IRA rebate programs. DEQ submitted its implementation application to the U.S. Department of Energy in November 2024. Program design was paused in February 2025 pending updated DOE guidance, and no launch date has been announced as of March 2026.",
        },
      },
      {
        "@type": "Question",
        name: "Does Montana-Dakota Utilities offer heat pump rebates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Montana-Dakota Utilities (MDU), which serves eastern Montana including parts of the Billings area, does not offer any heat pump rebates as of 2026. MDU\u0027s residential programs are limited to $300 for high-efficiency gas furnaces, $60 for Wi-Fi thermostats, and LED lighting rebates. Billings-area homeowners on Yellowstone Valley Electric Cooperative can access up to $800 for add-on heat pumps.",
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
            {" "}/ Montana
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Montana Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Montana&apos;s heat pump incentive landscape is limited in 2026. Federal tax credits expired, and
            the IRA-funded HEAR and HOMES rebate programs remain paused at the state level. NorthWestern Energy
            offers <strong>$450</strong> per air-source heat pump and up to <strong>$3,000</strong> for heat pump
            water heaters, while BPA-funded cooperatives in western Montana provide <strong>$600–$1,560</strong> for
            qualifying systems. This guide covers all major Montana heat pump incentives available in 2026, including
            NorthWestern Energy rebates, BPA cooperative programs, Bozeman and Missoula County local rebates,
            state tax credits, and HEAR/HOMES status. Here&apos;s what&apos;s actually available.
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
          <StatusCard incentive={mtIncentive} />
        </div>
      </section>

      {/* 3. SHORT VERSION */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Short Version</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ NorthWestern Energy Rebates</p>
              <p className="text-sm text-green-900">
                <strong>$450</strong> per air-source heat pump (ducted or ductless) and up
                to <strong>$3,000</strong> for heat pump water heaters through NWE&apos;s E+ program.
                Available to all NWE electric customers through June 2026.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ BPA Cooperative Rebates</p>
              <p className="text-sm text-green-900">
                Western Montana cooperatives offer <strong>$600–$1,560</strong> for air-source heat pumps
                and <strong>$700–$900</strong> for heat pump water heaters. Flathead Electric has the
                richest program.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Total Potential Savings</p>
              <p className="text-sm text-green-900">
                <strong>$450–$1,560</strong> for air-source heat pumps depending on utility territory.
                HPWH stacking in Bozeman reaches <strong>$3,500</strong> and in Missoula County
                up to <strong>~$4,435</strong>. Full electrification packages can reach
                ~$5,000 total incentives when HEAR launches.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">✗ Federal Tax Credits Expired</p>
              <p className="text-sm text-red-900">
                Section 25C ($2,000/year for heat pumps) and Section 25D (30% for geothermal)
                both expired December 31, 2025 under the One Big Beautiful Bill Act. No replacement
                credits exist.
              </p>
            </div>
            <div className="md:col-span-2 bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="font-semibold text-amber-800 mb-1">⚠ HEAR &amp; HOMES Programs Not Yet Launched</p>
              <p className="text-sm text-amber-900">
                Montana DEQ&apos;s HEAR (up to $8,000 per heat pump) and HOMES (up to $8,000 for whole-home
                projects) IRA rebate programs remain paused pending federal DOE approval. No launch date
                has been announced. Do not count on these programs when budgeting a 2026 installation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEDERAL EXPIRED */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Federal Tax Credits Have Expired</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <p className="text-red-900 leading-relaxed">
              The <strong>Section 25C Energy Efficient Home Improvement Credit</strong> (up to $2,000/year
              for heat pumps) and the <strong>Section 25D Residential Clean Energy Credit</strong> (30%
              of geothermal heat pump costs with no cap) both <strong>expired December 31, 2025</strong>.
              The One Big Beautiful Bill Act accelerated these expirations from their original 2032 sunset.
              Equipment must have been fully installed and operational by December 31, 2025 to
              qualify — purchasing or signing a contract in 2025 is not sufficient if installation
              slipped into 2026.{" "}
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                Full details on the federal credit expiration →
              </Link>
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            The surviving federal programs are the HEAR and HOMES point-of-sale rebates, which Congress
            preserved in the One Big Beautiful Bill. However, these are direct rebates administered
            at the state level — and Montana&apos;s programs have not yet launched.
          </p>
        </div>
      </section>

      {/* 5. HEAR & HOMES (combined — both paused) */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">HEAR &amp; HOMES IRA Rebates — Paused in Montana</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Montana Department of Environmental Quality (DEQ) Energy Bureau is the designated
            administrator for both IRA rebate programs. DEQ submitted its implementation application
            to the U.S. Department of Energy in November 2024, but program design was paused in
            February 2025 to allow DOE to formulate updated guidance. No launch date has been announced.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Home Electrification and Appliance Rebates (HEAR)
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            When launched, HEAR would provide point-of-sale rebates at these federal maximum amounts:
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
                  <td className="p-3">Heat pump (HVAC)</td>
                  <td className="p-3 font-semibold">$8,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">$1,750</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Electric panel upgrade</td>
                  <td className="p-3 font-semibold">$4,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Electric wiring</td>
                  <td className="p-3 font-semibold">$2,500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Insulation, air sealing, ventilation</td>
                  <td className="p-3 font-semibold">$1,600</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Household cap (all categories)</td>
                  <td className="p-3 font-semibold">$14,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            HEAR eligibility is income-based: households at or below 80% of Area Median Income (AMI) receive
            rebates covering 100% of project costs (up to caps). Households at 80–150% AMI receive 50% coverage.
            Households above 150% AMI are not eligible for HEAR.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Home Efficiency Rebates (HOMES)
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            HOMES provides whole-house performance-based rebates tied to measured or modeled energy savings.
            For households at or below 80% AMI, rebates reach <strong>$4,000</strong> for 20–34% energy
            reduction and <strong>$8,000</strong> for 35%+ reduction. Above 80% AMI, those figures drop
            to <strong>$2,000</strong> and <strong>$4,000</strong> respectively. Unlike HEAR, HOMES is
            available to all income levels but requires a whole-house energy assessment.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="font-semibold text-amber-800 mb-1">⚠ Do Not Budget Around These Programs</p>
            <p className="text-sm text-amber-900">
              Both HEAR and HOMES remain in &quot;pended&quot; status with DOE. Montana DEQ cannot access
              funds or begin operations until federal approval is granted. There is no announced
              timeline. Plan your 2026 installation around currently available utility rebates only.
            </p>
          </div>
        </div>
      </section>

      {/* 6. UTILITY PROGRAMS */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Utility Rebate Programs</h2>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">NorthWestern Energy (Largest Utility)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            NorthWestern Energy operates the E+ Residential Electric Rebate Program through
            its current cycle ending June 30, 2026. Available to existing-home NWE electric customers statewide.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Measure</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                  <th className="text-left p-3 font-semibold">Key Requirement</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Central heat pump (ducted or ductless)</td>
                  <td className="p-3 font-semibold">$450/unit</td>
                  <td className="p-3">ENERGY STAR or SEER2 ≥ 15.2, HSPF2 ≥ 8.5</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">Up to $3,000</td>
                  <td className="p-3">NEEA Tier 3 or 4; participating contractor required</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            The ASHP rebate applies identically to ducted and ductless systems — NWE does not differentiate.
            No cold-climate-specific adder, income-qualified tier, or refrigerant requirement exists. The
            HPWH program is administered in partnership with Evergreen Energy Partners and requires
            pre-approval through a participating contractor network. New construction does not qualify.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Montana-Dakota Utilities (Eastern Montana)</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            MDU, which serves eastern Montana including parts of the Billings area, <strong>does not offer
            any heat pump rebates</strong>. MDU&apos;s residential programs are limited to $300 for
            high-efficiency natural gas furnaces, $60 for Wi-Fi thermostats, and LED lighting rebates.
            This is a significant gap for the roughly 70,000+ households in MDU&apos;s Montana service territory.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">BPA-Funded Electric Cooperatives</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Western Montana electric cooperatives funded by the Bonneville Power Administration generally
            offer more generous heat pump rebates than NorthWestern Energy. These programs are exclusive
            to cooperative members.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Cooperative</th>
                  <th className="text-left p-3 font-semibold">ASHP Rebate</th>
                  <th className="text-left p-3 font-semibold">HPWH Rebate</th>
                  <th className="text-left p-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Flathead Electric (Kalispell)</td>
                  <td className="p-3 font-semibold">$600–$1,560</td>
                  <td className="p-3 font-semibold">Available</td>
                  <td className="p-3">Highest rebate for variable-speed replacing electric furnace; 3% on-bill financing</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Missoula Electric</td>
                  <td className="p-3 font-semibold">$920</td>
                  <td className="p-3 font-semibold">$700–$900</td>
                  <td className="p-3">Ductless; income-qualified program available (≤ 200% FPL)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Lincoln Electric (Eureka)</td>
                  <td className="p-3 font-semibold">$800–$1,000</td>
                  <td className="p-3 font-semibold">—</td>
                  <td className="p-3">Ducted and ductless; variable-speed earns higher tier</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Yellowstone Valley Electric (Billings area)</td>
                  <td className="p-3 font-semibold">$200/ton, up to $800</td>
                  <td className="p-3 font-semibold">—</td>
                  <td className="p-3">Add-on heat pump; also $200/ton up to $1,000 for geothermal</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Sun River Electric</td>
                  <td className="p-3 font-semibold">—</td>
                  <td className="p-3 font-semibold">—</td>
                  <td className="p-3">$200/ton up to $1,000 for ground-source; 3¢/kWh heat rate discount</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Lower Yellowstone Rural Electric (Sidney)</td>
                  <td className="p-3 font-semibold">$150/ton</td>
                  <td className="p-3 font-semibold">—</td>
                  <td className="p-3">All heat pump types</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">
            Ravalli Electric Cooperative (Victor) also offers rebates for ductless, ducted, and ground-source
            heat pumps but does not publish amounts online. Contact (406) 961-3001.
          </p>
        </div>
      </section>

      {/* 7. LOCAL PROGRAMS */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">City &amp; County Programs</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Two Montana communities offer local rebates for heat pump water heaters that stack with
            utility incentives. These represent some of the best HPWH stacking opportunities in the state.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">City of Bozeman — $500 HPWH Rebate</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bozeman offers a <strong>$500</strong> rebate for qualifying electric heat pump water heaters,
            plus <strong>$75</strong> for completing a post-installation survey. The pilot program, run
            in partnership with Montana DEQ, requires connection to Bozeman city water and equipment
            listed on NEEA&apos;s Qualified Products List. This stacks with NorthWestern Energy&apos;s
            up to $3,000 HPWH rebate for a combined total of up to <strong>$3,575</strong>.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Missoula County — $1,435 HPWH Rebate</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Electrify Missoula partnership between the city, county, and Climate Smart Missoula
            offers <strong>$1,435</strong> for heat pump water heaters (for purchases after May 1, 2025).
            Products must be on NEEA&apos;s Qualified Products List and require a plumbing permit with
            final inspection. For NWE customers, this stacks with the up to $3,000 NWE rebate for a
            combined total of up to <strong>$4,435</strong>. Missoula Electric Cooperative members can
            stack with the co-op&apos;s $700–$900 HPWH rebate instead.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="font-semibold text-blue-800 mb-1">HPWHs Are Montana&apos;s Best Stacking Opportunity</p>
            <p className="text-sm text-blue-900">
              Heat pump water heaters are the one category where Montana incentives can cover most or all of
              the installed cost. A typical HPWH costs $1,500–$3,500 installed. With NWE&apos;s up to $3,000
              plus Bozeman&apos;s $500 or Missoula County&apos;s $1,435, the equipment may effectively be free.
              This is the single strongest incentive stack available in Montana today.
            </p>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            Billings, Great Falls, and Helena have no city- or county-level heat pump incentive programs
            as of March 2026.
          </p>
        </div>
      </section>

      {/* 8. STACKING */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Programs Stack</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Utility rebates stack freely with local city/county programs and (when launched) with
            HEAR or HOMES. HEAR and HOMES cannot cover the same measure in the same home, and total
            rebates cannot exceed total project cost. Below are realistic stacking scenarios for a
            typical <strong>$18,000</strong> whole-home cold-climate ducted heat pump installation
            in NorthWestern Energy territory.
          </p>
          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 150% AMI — Ducted Cold-Climate ASHP</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Federal tax credits: $0 (expired)</li>
                <li>HEAR: $0 (income-ineligible)</li>
                <li>HOMES (if launched, 35%+ savings): up to $4,000</li>
                <li>NWE utility rebate: $450</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Current realistic maximum: ~$450</p>
              <p className="text-sm text-gray-500 mt-1">Future potential if HOMES launches: ~$4,450</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">80–150% AMI — Ducted Cold-Climate ASHP</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Federal tax credits: $0 (expired)</li>
                <li>HEAR (50% of cost, capped at $8,000): up to $8,000</li>
                <li>NWE utility rebate: $450</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Future potential if HEAR launches: ~$8,450</p>
              <p className="text-sm text-gray-500 mt-1">Current available: $450 only</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">Below 80% AMI — Ducted Cold-Climate ASHP (Best Case)</p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>Federal tax credits: $0 (expired)</li>
                <li>HEAR (100% of cost, capped at $8,000): $8,000</li>
                <li>NWE utility rebate: $450</li>
                <li>WAP coverage (if eligible): potentially full system cost</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Future potential if HEAR launches: $8,450+</p>
              <p className="text-sm text-gray-500 mt-1">Current available: $450 (or full WAP coverage if eligible)</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-5">
            <p className="font-semibold text-gray-900 mb-1">What You&apos;ll Actually Pay Today</p>
            <p className="text-sm text-gray-700">
              Until HEAR and HOMES launch, most Montana homeowners will pay <strong>$16,440–$17,550</strong> out
              of pocket for a typical $18,000 ducted cold-climate heat pump installation (after the $450–$1,560
              utility rebate depending on territory). BPA cooperative members in western Montana fare better.
              The exception: heat pump water heaters in Bozeman or Missoula County, where stacking can cover
              the full installed cost.
            </p>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            Montana has no state-level heat pump tax credit for air-source systems. The geothermal tax credit
            (up to $1,500) applies only to ground-source installations. The Alternative Energy Revolving Loan
            Program (3.5% fixed, up to $40,000) primarily covers geothermal and solar systems.
          </p>
        </div>
      </section>

      {/* 9. STATE PROGRAMS & WEATHERIZATION */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">State Programs &amp; Assistance</h2>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Montana Weatherization Assistance Program (WAP)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Administered by DPHHS through local Human Resource Development Councils (HRDCs), the WAP
            provides free energy efficiency upgrades — including potential heating system replacement — for
            income-qualifying households. Eligibility is linked to LIHEAP qualification, roughly 60% of
            state median income (about $64,846/year for a family of four). Heat pumps may be installed
            when an energy auditor determines them cost-effective, but this is not guaranteed.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Montana Geothermal Tax Credit</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Up to <strong>$1,500</strong> per installation for ground-source heat pump systems in a
            principal dwelling. Filed on Montana Revenue form ENRG-A. Unused credit carries forward
            up to 7 years. This applies only to geothermal systems, not air-source units. Verify
            current availability with the Montana Department of Revenue.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Alternative Energy Revolving Loan Program (AERLP)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            This DEQ-administered program offers <strong>3.5% fixed interest</strong> loans up
            to <strong>$40,000</strong> with a 10-year maximum term and no down payment. Ground-source
            heat pumps qualify directly. Air-source heat pumps may qualify only when installed
            alongside a qualifying alternative energy system (such as solar). Applications are scored
            competitively — demand has exceeded available funds since April 2023. The next application
            window opens April 1–30, 2026.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="font-semibold text-amber-800 mb-1">⚠ Common Mistake: Assuming AERLP Covers Air-Source Heat Pumps</p>
            <p className="text-sm text-amber-900">
              The Alternative Energy Revolving Loan Program primarily funds geothermal and solar projects.
              A standalone air-source heat pump installation typically does not qualify unless paired with
              a qualifying alternative energy system. Contact DEQ at (406) 444-4960 before applying.
            </p>
          </div>
        </div>
      </section>

      {/* 10. CLIMATE */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Montana Climate &amp; Heat Pump Performance</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Montana sits firmly in cold-climate heat pump territory. Every major city falls well below
            the 5°F threshold used by ENERGY STAR&apos;s Cold Climate Heat Pump specification.
            Equipment selection matters — cold-climate certification is strongly recommended, and most
            installers recommend dual-fuel setups pairing a heat pump with a gas furnace for the
            coldest 5–15 days per year.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">City</th>
                  <th className="text-left p-3 font-semibold">ASHRAE 99% Design Temp</th>
                  <th className="text-left p-3 font-semibold">Annual Heating Degree Days</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Billings</td>
                  <td className="p-3 font-semibold">-10°F</td>
                  <td className="p-3">7,049</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Missoula</td>
                  <td className="p-3 font-semibold">-6°F</td>
                  <td className="p-3">8,125</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Great Falls</td>
                  <td className="p-3 font-semibold">-15°F</td>
                  <td className="p-3">7,750</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Helena</td>
                  <td className="p-3 font-semibold">-16°F</td>
                  <td className="p-3">8,129</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Bozeman</td>
                  <td className="p-3 font-semibold">~-14°F</td>
                  <td className="p-3">~7,900</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            Roughly 59% of Montana homes heat with natural gas, 24% with electricity, and 9–14% with
            propane. Montana residential natural gas prices average about $7.88/Mcf — well below the
            national average — which weakens the operating-cost case for switching from gas to heat pump.
            The strongest economic case exists for the estimated 40,000+ households heating with propane
            or electric resistance, where heat pump conversion delivers immediate savings.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <p className="font-semibold text-green-800 mb-1">✓ Best Candidates for Heat Pumps in Montana</p>
            <p className="text-sm text-green-900">
              Homes currently heating with propane or electric resistance (baseboard, wall heaters,
              electric furnaces). Households served by BPA-funded cooperatives with higher rebates.
              Homeowners in Bozeman or Missoula County who want a heat pump water heater at near-zero
              cost. Homeowners with existing ductwork who want efficient cooling in addition to heating.
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed mt-6">
            For equipment selection, look for HSPF2 ratings of 9.0 or higher and cold-climate
            certification. Models from Mitsubishi (Hyper-Heat), Daikin, Carrier (Greenspeed), and
            Bosch operate down to -13°F to -22°F. For more on how a heat pump fits with{" "}
            <Link href="/battery" className="text-brand-600 hover:underline">
              home battery storage
            </Link>, see our battery guide.
          </p>
        </div>
      </section>

      {/* 11. HOW TO APPLY */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Apply</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The process depends on your utility. Here&apos;s the path for NorthWestern Energy customers,
            which covers the largest share of Montana households:
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-gray-900">Check your utility</p>
                <p className="text-sm text-gray-700">
                  Confirm whether you&apos;re an NWE electric customer, an electric cooperative member,
                  or an MDU customer. This determines which rebates are available to you. Co-op members
                  should contact their cooperative directly.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900">Choose qualifying equipment</p>
                <p className="text-sm text-gray-700">
                  For NWE&apos;s ASHP rebate: ENERGY STAR certified or SEER2 ≥ 15.2 and HSPF2 ≥ 8.5.
                  For the HPWH program: NEEA Tier 3 or 4 equipment through a participating contractor.
                  Cold-climate certification is strongly recommended for Montana&apos;s temperatures.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-900">Install and submit</p>
                <p className="text-sm text-gray-700">
                  Have the system installed by a licensed contractor. Submit the NWE E+ rebate application
                  (Form 3743) within 90 days of installation with proof of purchase and contractor invoice.
                  For HPWH, your participating contractor handles the rebate process.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <p className="font-semibold text-gray-900">Stack local rebates if eligible</p>
                <p className="text-sm text-gray-700">
                  Bozeman residents: apply separately through the city&apos;s HPWH rebate program.
                  Missoula County residents: apply through the Electrify Missoula portal. Both require
                  NEEA-listed equipment and proof of installation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. WHAT TO WATCH */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Watch</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Montana DEQ HEAR/HOMES Launch</p>
              <p className="text-sm text-gray-600 mt-1">
                Montana&apos;s HEAR and HOMES programs could add $4,000–$8,000 in rebates for income-qualifying
                households. Monitor DEQ&apos;s Home Energy Rebates page for updates. No timeline has been
                announced, but DOE approval could come at any point.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">IRA Funding Runway</p>
              <p className="text-sm text-gray-600 mt-1">
                Congress preserved HEAR and HOMES funding in the One Big Beautiful Bill, but the
                political environment for clean energy spending remains uncertain. Future legislation
                could modify program terms, funding levels, or eligibility criteria.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">NWE E+ Program Renewal (July 2026)</p>
              <p className="text-sm text-gray-600 mt-1">
                NorthWestern Energy&apos;s current rebate cycle ends June 30, 2026. Rebate amounts and
                qualifying criteria may change in the next program year. If you&apos;re planning a
                2026 installation, apply before the current cycle closes.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">MDU Program Expansion</p>
              <p className="text-sm text-gray-600 mt-1">
                Montana-Dakota Utilities is the notable gap in Montana&apos;s utility rebate landscape.
                Watch for program changes — MDU could add heat pump rebates as equipment efficiency
                improves and cold-climate adoption grows in eastern Montana.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 13. FAQ */}
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

      {/* 14. SEE ALSO */}
      <section className="py-8 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-3">See also</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/heat-pumps/states/id" className="text-brand-600 hover:underline">
                Idaho Heat Pump Rebates &amp; Incentives (2026)
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/wy" className="text-brand-600 hover:underline">
                Wyoming Heat Pump Rebates &amp; Incentives (2026)
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/nd" className="text-brand-600 hover:underline">
                North Dakota Heat Pump Rebates &amp; Incentives (2026)
              </Link>
            </li>
            <li>
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                Federal Heat Pump Tax Credit Expiration — What Happened
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

      {/* 15. SOURCES */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="space-y-2 text-sm">
            {mtIncentive.sources.map((source: { label: string; url: string }, index: number) => (
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

      {/* 16. DISCLAIMER */}
      <section className="py-8">
        <div className="container-narrow">
          <div className="bg-gray-100 rounded-lg p-6">
            <p className="text-gray-500 text-xs leading-relaxed">
              <strong>Disclaimer:</strong> This page covers the main statewide,
              utility, and IRA heat pump incentives available to Montana
              homeowners in 2026. It does not calculate savings, guarantee
              eligibility, or represent any incentive program. Cooperative rebate
              amounts vary by territory and may change without notice.
              We verify status regularly but programs can change
              without notice. Always confirm current amounts and eligibility with
              NorthWestern Energy, your electric cooperative, Montana DEQ,
              and your contractor before making decisions.
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
