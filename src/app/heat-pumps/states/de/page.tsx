import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Delaware Heat Pump Rebates & Incentives 2026: $800–$2,200 + Energize Delaware | Home Energy Basics",
  description:
    "Energize Delaware offers $800–$2,200 for heat pumps. HEAR could add up to $8,000. Federal tax credits ended. Every Delaware heat pump incentive in 2026.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/de",
  },
  openGraph: {
    title: "Delaware Heat Pump Rebates 2026",
    description:
      "Energize Delaware rebates cover $800–$2,200 for qualifying heat pumps — the complete guide to Delaware heat pump incentives after federal credits expired.",
    url: "https://homeenergybasics.com/heat-pumps/states/de",
    type: "article",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What heat pump rebates are available in Delaware in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Energize Delaware\u2019s Home Performance with ENERGY STAR program offers $800\u2013$2,200 for central air-source heat pumps depending on efficiency tier and income level, plus $1,100\u2013$1,350 for heat pump water heaters. DEMEC municipal utility customers can also access Efficiency Smart rebates of roughly $300\u2013$750 for heat pumps. Federal Section 25C and 25D tax credits expired December 31, 2025 and are no longer available.",
      },
    },
    {
      "@type": "Question",
      name: "Can I stack Energize Delaware and Efficiency Smart rebates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DEMEC municipal utility customers in towns like Newark, Middletown, Dover, and Lewes may be eligible for both Energize Delaware HPwES rebates and Efficiency Smart rebates on the same installation, since the programs are administered separately. Delmarva Power and Delaware Electric Cooperative customers access rebates through Energize Delaware only. When HEAR launches, its rebates should also stack with state and utility programs, subject to total project cost limits.",
      },
    },
    {
      "@type": "Question",
      name: "Is Delaware\u2019s climate suitable for heat pumps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Delaware falls in IECC Climate Zone 4A with winter design temperatures of 16\u201319\u00b0F. Modern cold-climate heat pumps perform well at these temperatures. Delaware also has significant cooling demand with summer design temperatures of 89\u201391\u00b0F and 97% air conditioning penetration, making heat pumps an efficient two-in-one replacement for both furnace and air conditioner.",
      },
    },
    {
      "@type": "Question",
      name: "Who administers Delaware\u2019s heat pump rebate programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Delaware Sustainable Energy Utility (DESEU), operating as Energize Delaware, administers the main Home Performance with ENERGY STAR rebate program. DNREC\u2019s Division of Climate, Coastal and Energy manages the IRA-funded HEAR and HOMES programs. Efficiency Smart administers rebates for DEMEC municipal utility customers. Delaware Electric Cooperative runs its own smaller grant programs.",
      },
    },
    {
      "@type": "Question",
      name: "When will Delaware\u2019s HEAR rebates launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As of March 2026, Delaware\u2019s Home Electrification and Appliance Rebates (HEAR) program is still awaiting final DOE approval. DNREC submitted its application in August 2024. When launched, HEAR would provide up to $8,000 per heat pump for households below 80% of Area Median Income. Contact DNREC at 302-735-3480 for the latest status.",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Delaware Heat Pump Rebates & Incentives (2026)",
  datePublished: "2026-03-23",
  dateModified: "2026-03-23",
  author: {
    "@type": "Organization",
    name: "Home Energy Basics",
    url: "https://homeenergybasics.com",
  },
};

export default function DelawarePage() {
  const deIncentive = incentives.DE;
  const formattedDate = formatDate(deIncentive.lastVerified);
  const sources = deIncentive.sources;

  return (
    <>
      <JsonLd data={faqJsonLd} />
      <JsonLd data={articleJsonLd} />

      {/* 1. Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="container-narrow">
          <nav className="text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-brand-600">Home</Link>
            {" "}/{" "}
            <Link href="/heat-pumps" className="hover:text-brand-600">Heat Pumps</Link>
            {" "}/ Delaware
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Delaware Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Energize Delaware&apos;s Home Performance with ENERGY STAR program offers <strong>$800–$2,200</strong> for
            qualifying air-source heat pumps, with higher rebates for income-qualified households.{" "}
            <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
              Federal tax credits under Section 25C and Section 25D expired December 31, 2025
            </Link>. The IRA-funded HEAR program could add up to
            <strong> $8,000</strong> per heat pump for eligible households once it launches. This guide covers all major
            Delaware heat pump incentives available in 2026, including Energize Delaware, Efficiency Smart, and
            IRA rebate programs. Here&apos;s what&apos;s actually available.
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
          <StatusCard incentive={deIncentive} />
        </div>
      </section>

      {/* 3. Short Version */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Short Version</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Energize Delaware rebates are open</p>
              <p className="text-sm text-green-900">
                Home Performance with ENERGY STAR offers <strong>$800–$1,600</strong> for central heat pumps
                (standard) and <strong>$1,200–$2,200</strong> for income-qualified households. Heat pump water
                heaters get <strong>$1,100–$1,350</strong>.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ DEMEC utility rebates available</p>
              <p className="text-sm text-green-900">
                Customers of DEMEC municipal utilities (Newark, Middletown, Dover, Lewes, and others) can access
                Efficiency Smart rebates of roughly <strong>$300–$750</strong> for air-source heat pumps, stackable
                with Energize Delaware.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Total potential savings</p>
              <p className="text-sm text-green-900">
                <strong>$1,600–$3,000</strong> (above 150% AMI) to <strong>$2,200–$4,050</strong> (80–150% AMI)
                today. Full electrification packages with HEAR could reach <strong>~$14,000</strong> total incentives
                for households below 80% of Area Median Income (AMI) once that program launches.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">✗ Federal tax credits expired</p>
              <p className="text-sm text-red-900">
                Section 25C ($2,000/year for heat pumps) and Section 25D (30% for geothermal) both ended
                December 31, 2025. No replacement has been enacted. Equipment installed in 2026 does not qualify.
              </p>
            </div>
            <div className="md:col-span-2 bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="font-semibold text-amber-800 mb-1">⚠ HEAR program has not launched yet</p>
              <p className="text-sm text-amber-900">
                Delaware&apos;s IRA-funded Home Electrification and Appliance Rebates (HEAR) program is still
                awaiting DOE approval as of March 2026. The rebates (up to $8,000 per heat pump for income-eligible
                households) are not yet available. Do not count on HEAR when budgeting a 2026 installation. Check
                with DNREC at 302-735-3480 for the latest status.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Federal Expired */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Federal Tax Credits Have Expired</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <p className="text-red-900 leading-relaxed">
              The <strong>Section 25C Energy Efficient Home Improvement Credit</strong> and the{" "}
              <strong>Section 25D Residential Clean Energy Credit</strong> were both terminated by the One Big
              Beautiful Bill Act (Public Law 119-21), signed July 4, 2025. Neither credit is available for equipment
              installed after <strong>December 31, 2025</strong>. The &quot;placed in service&quot; date — when
              installation is fully complete — is what counts, not the purchase or contract date. Section 25C has no
              carryforward provision. Section 25D does allow carryforward of unused credits from qualifying 2025
              installations.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Before expiration, Section 25C provided 30% of costs up to <strong>$2,000 per year</strong> for qualifying
            air-source heat pumps and heat pump water heaters. Section 25D provided an <strong>uncapped 30%
            credit</strong> for geothermal heat pump systems.
          </p>
          <p className="text-gray-700 leading-relaxed">
            For more details on what changed and why, see our{" "}
            <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
              federal heat pump tax credit explainer
            </Link>.
          </p>
        </div>
      </section>

      {/* 5. Energize Delaware (Primary Program) */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Energize Delaware — Home Performance With ENERGY STAR</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Delaware Sustainable Energy Utility (DESEU), operating as <strong>Energize Delaware</strong>, runs the
            primary heat pump rebate program for the state. The Home Performance with ENERGY STAR (HPwES) program
            serves customers of Delmarva Power, Delaware Electric Cooperative, and DEMEC municipal utilities. Rebates
            are funded through Regional Greenhouse Gas Initiative (RGGI) proceeds.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            A <strong>$50 home energy assessment</strong> ($25 for income-qualified households) by an approved
            contractor is required before claiming any rebates. Rebate reservations must be submitted before work begins.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Central Heat Pump Rebates</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Efficiency Requirement</th>
                  <th className="text-left p-3 font-semibold">Standard</th>
                  <th className="text-left p-3 font-semibold">Income-Qualified</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Central HP Tier 1</td>
                  <td className="p-3">≥16 SEER2, ≥7.8 HSPF2</td>
                  <td className="p-3 font-semibold">$800</td>
                  <td className="p-3 font-semibold">$1,200</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Central HP Tier 2</td>
                  <td className="p-3">≥17 SEER2, ≥8.2 HSPF2</td>
                  <td className="p-3 font-semibold">$1,600</td>
                  <td className="p-3 font-semibold">$2,200</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Hybrid HP + Furnace Tier 1</td>
                  <td className="p-3">HP Tier 1 + 95+ AFUE furnace</td>
                  <td className="p-3 font-semibold">$1,450</td>
                  <td className="p-3 font-semibold">$2,300</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Hybrid HP + Furnace Tier 2</td>
                  <td className="p-3">HP Tier 2 + 96+ AFUE furnace</td>
                  <td className="p-3 font-semibold">$2,250</td>
                  <td className="p-3 font-semibold">$3,300</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Mini-Split Heat Pump Rebates</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Efficiency Requirement</th>
                  <th className="text-left p-3 font-semibold">Standard</th>
                  <th className="text-left p-3 font-semibold">Income-Qualified</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Mini-Split Tier 1</td>
                  <td className="p-3">≥17 SEER2, ≥8.2 HSPF2</td>
                  <td className="p-3 font-semibold">$550</td>
                  <td className="p-3 font-semibold">$1,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Tier 1 additional head</td>
                  <td className="p-3">—</td>
                  <td className="p-3 font-semibold">$350</td>
                  <td className="p-3 font-semibold">$600</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Mini-Split Tier 2</td>
                  <td className="p-3">≥20 SEER2, ≥8.6 HSPF2</td>
                  <td className="p-3 font-semibold">$1,100</td>
                  <td className="p-3 font-semibold">$1,700</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Tier 2 additional head</td>
                  <td className="p-3">—</td>
                  <td className="p-3 font-semibold">$550</td>
                  <td className="p-3 font-semibold">$900</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mb-6">
            Mini-split rebates capped at $4,000 per standard customer and $5,500 per income-qualified customer.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Heat Pump Water Heaters &amp; Bundling Bonus</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Requirement</th>
                  <th className="text-left p-3 font-semibold">Standard</th>
                  <th className="text-left p-3 font-semibold">Income-Qualified</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Heat Pump Water Heater</td>
                  <td className="p-3">ENERGY STAR certified</td>
                  <td className="p-3 font-semibold">$1,100</td>
                  <td className="p-3 font-semibold">$1,350</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Bundling Bonus</td>
                  <td className="p-3">Air sealing + HP within 3 months, ≥20% CFM reduction</td>
                  <td className="p-3 font-semibold">$300</td>
                  <td className="p-3 font-semibold">$350</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Standard HPwES incentives cannot exceed <strong>50% of total installed cost</strong>. Income-qualified
            incentives are capped at <strong>75% of installed cost</strong>. No explicit refrigerant exclusions
            (such as R-410A restrictions) appear in the current program — eligibility is based on efficiency ratings.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Geothermal Heat Pumps</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The DNREC Green Energy Program provides grants for geothermal heat pumps at <strong>$800 per ton</strong> for
            the first two tons and <strong>$700 per ton</strong> thereafter, with a maximum of <strong>$5,000</strong>.
            Systems must meet minimum EER &gt;18 and COP &gt;3.6 (closed loop). Delaware Electric Cooperative has
            temporarily paused geothermal applications while evaluating the program.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="font-semibold text-blue-800 mb-1">Delaware has no state tax credits for heat pumps</p>
            <p className="text-sm text-blue-900">
              Unlike some neighboring states, Delaware does not offer any state-level tax credits for heat pumps or
              energy efficiency improvements. All available incentives come through Energize Delaware rebates, utility
              programs, and (when launched) IRA-funded programs. The Energize Delaware Home Energy Efficiency Loan
              offers financing at <strong>5.99% fixed</strong> for up to $50,000 over 10 years, but this is a loan,
              not a grant or credit.
            </p>
          </div>
        </div>
      </section>

      {/* 6. HEAR / HOMES (Pending IRA Programs) */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">IRA Rebates: HEAR &amp; HOMES Programs</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Delaware was allocated approximately <strong>$66 million</strong> in IRA Home Energy Rebate funding — roughly
            $33 million for the Home Efficiency Rebates (HOMES) program and $32.8 million for the Home Electrification
            and Appliance Rebates (HEAR) program. DNREC submitted its full application to DOE in August 2024.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-amber-800 mb-1">⚠ Both programs are still awaiting DOE approval</p>
            <p className="text-sm text-amber-900">
              As of March 2026, neither HEAR nor HOMES has launched in Delaware. The NEEP regional tracker listed both
              programs as &quot;Awaiting Final Approval by DOE&quot; as of July 2025. Delaware was not among the 23
              states with active programs as of February 2026. Contact DNREC at 302-735-3480 or email
              DNREC.EnergyPrograms@delaware.gov for current status.
            </p>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">HEAR (When Launched)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            HEAR provides point-of-sale rebates for income-eligible households. Households below 80% of Area Median
            Income (AMI) receive up to 100% of project costs. Households at 80–150% AMI receive up to 50% of costs.
            Households above 150% AMI are not eligible for HEAR.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Maximum Rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Heat pump (space heating/cooling)</td>
                  <td className="p-3 font-semibold">$8,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">$1,750</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump clothes dryer</td>
                  <td className="p-3 font-semibold">$840</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Electric panel upgrade</td>
                  <td className="p-3 font-semibold">$4,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Wiring</td>
                  <td className="p-3 font-semibold">$2,500</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mb-6">
            Per-household cap: $14,000. These rebates were not affected by the One Big Beautiful Bill Act.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">HOMES (When Launched)</h3>
          <p className="text-gray-700 leading-relaxed">
            The HOMES program provides whole-house rebates of <strong>$2,000–$8,250</strong> based on modeled energy
            savings, with enhanced amounts for low-and-moderate income households. Delaware plans to require at least
            one measure be air sealing or insulation. HOMES is income-tiered but available to all income levels, unlike
            HEAR.
          </p>
        </div>
      </section>

      {/* 7. Utility Programs */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Utility Programs by Provider</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Delaware has three electricity provider groups. Heat pump rebate availability varies significantly depending
            on which utility serves your home.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Delmarva Power</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Delmarva Power (an Exelon subsidiary serving New Castle County and parts of Kent County) does not operate
            its own heat pump rebate program for Delaware customers. Its &quot;Home Energy Savings&quot; rebate portal
            is a Maryland-only program funded by EmPOWER Maryland. Delaware Delmarva Power customers access rebates
            exclusively through <strong>Energize Delaware&apos;s HPwES program</strong> described above.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Delaware Electric Cooperative</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Delaware Electric Cooperative (DEC) serves approximately 84,000 member-owners in Kent and Sussex counties.
            DEC offers a <strong>$300 grant</strong> for ENERGY STAR certified heat pump water heaters. Applications
            must be submitted within 60 days of purchase. The 2026 continuation of this program has not been confirmed —
            verify with DEC at 302-349-9090. DEC members are also eligible for Energize Delaware HPwES rebates.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">DEMEC Municipal Utilities (Efficiency Smart)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Delaware Municipal Electric Corporation (DEMEC) serves nine communities — Clayton, Dover, Lewes,
            Middletown, Milford, New Castle, Newark, Seaford, and Smyrna — through the Efficiency Smart platform.
            Dover joined in July 2025.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Estimated Rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Air-source heat pump</td>
                  <td className="p-3 font-semibold">$300–$750</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Cold-climate air-source heat pump</td>
                  <td className="p-3 font-semibold">$300–$750</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">$300</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Smart thermostat</td>
                  <td className="p-3 font-semibold">$100</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mb-6">
            Efficiency Smart does not publicly display exact dollar amounts. Figures above are from third-party sources
            and may vary. All equipment must be ENERGY STAR certified. Applications must be submitted within three
            months of purchase.
          </p>
          <p className="text-gray-700 leading-relaxed">
            DEMEC-area customers are <strong>also eligible for Energize Delaware</strong> HPwES rebates, making this
            the one group in the state that can potentially stack two separate rebate programs on the same installation.
          </p>
        </div>
      </section>

      {/* 9. Stacking */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Programs Stack</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Federal DOE guidance allows HEAR, HOMES, state, and utility rebates to stack on the same project, provided
            each program&apos;s requirements are independently met and total incentives do not exceed project cost.
            Today, stacking is limited to Energize Delaware plus Efficiency Smart (for DEMEC customers only).
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 150% AMI — Tier 2 Central Heat Pump + HPWH</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Energize Delaware Tier 2 HP: $1,600</li>
                <li>Energize Delaware HPWH: $1,100</li>
                <li>Bundling bonus (air sealing + HP): $300</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$3,000</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 150% AMI — DEMEC Customer (Tier 2 HP + HPWH)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Energize Delaware Tier 2 HP: $1,600</li>
                <li>Energize Delaware HPWH: $1,100</li>
                <li>Bundling bonus: $300</li>
                <li>Efficiency Smart ASHP: ~$750</li>
                <li>Efficiency Smart HPWH: ~$300</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$4,050</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">Below 80% AMI — With HEAR (When Launched)</p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>HEAR heat pump: up to $8,000</li>
                <li>HEAR HPWH: up to $1,750</li>
                <li>Energize Delaware Assisted Tier 2 HP: $2,200</li>
                <li>Energize Delaware Assisted HPWH: $1,350</li>
                <li>Bundling bonus: $350</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Theoretical maximum: ~$13,650 (capped at $14,000 HEAR household limit or project cost)</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-5 mb-6">
            <p className="font-semibold text-gray-900 mb-1">What you&apos;ll actually pay</p>
            <p className="text-sm text-gray-700">
              For a typical <strong>$15,000–$20,000</strong> ducted heat pump installation: above-150% AMI
              households should budget <strong>$12,000–$17,000 out of pocket</strong> after current rebates.
              Income-qualified households using Energize Delaware alone: <strong>$10,000–$15,000</strong>. If
              HEAR launches, low-income households could potentially cover <strong>most or all of the project
              cost</strong>.
            </p>
          </div>

          <p className="text-sm text-gray-500">
            Delaware has no state tax credits and no 0% loan program. The Energize Delaware loan at 5.99% can help
            with remaining out-of-pocket costs but does not reduce the total amount owed.
          </p>
        </div>
      </section>

      {/* 10. Weatherization */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Weatherization Assistance Program</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Delaware Weatherization Assistance Program (WAP), administered by DNREC through the Energy Coordinating
            Agency, provides <strong>free</strong> energy improvements to income-eligible households — typically those at
            or below 200% of federal poverty guidelines. Through a DOE Sustainable Energy Resources for Consumers (SERC)
            grant, the program can install heat pump systems in eligible homes at no cost.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Priority is given to elderly residents, persons with disabilities, and households with children. This
            program operates independently of Energize Delaware rebates and HEAR.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <p className="font-semibold text-green-800 mb-1">✓ Best candidates for Delaware heat pump incentives</p>
            <p className="text-sm text-green-900">
              Homeowners replacing propane or heating oil systems (roughly 17% of Delaware homes) see the strongest
              economics. DEMEC municipal utility customers benefit from dual-program stacking. Income-eligible
              households should contact DNREC about WAP — free heat pump installation may be available. Anyone
              replacing both a furnace and air conditioner should consider a heat pump as a two-in-one upgrade.
            </p>
          </div>
        </div>
      </section>

      {/* 11. Climate */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Climate Context</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Delaware falls entirely within IECC Climate Zone 4A (Mixed-Humid), qualifying as a cold-climate zone under
            the NEEP Cold Climate ASHP Specification. Modern cold-climate heat pumps maintain full heating capacity well
            above Delaware&apos;s design temperatures.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">ASHRAE Design Temperatures</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Location</th>
                  <th className="text-left p-3 font-semibold">99% Heating Design Temp</th>
                  <th className="text-left p-3 font-semibold">1% Cooling Design Temp</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Wilmington (New Castle County)</td>
                  <td className="p-3 font-semibold">16°F</td>
                  <td className="p-3 font-semibold">91°F</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Dover (Kent County)</td>
                  <td className="p-3 font-semibold">18°F</td>
                  <td className="p-3 font-semibold">90°F</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Georgetown (Sussex County)</td>
                  <td className="p-3 font-semibold">19°F</td>
                  <td className="p-3 font-semibold">89°F</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Delaware records approximately <strong>4,999 heating degree days</strong> and <strong>1,630 cooling degree
            days</strong> annually. Air conditioning penetration is <strong>97%</strong> — tied for the highest rate in
            the nation. Because a heat pump replaces both furnace and air conditioner with a single system, nearly every
            Delaware home already has the cooling need that makes a heat pump a two-for-one upgrade.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Delaware&apos;s heating fuel mix is roughly 42% natural gas, 38% electricity, 9% propane, and 8% heating
            oil. The approximately 17% of homes using propane or heating oil represent the strongest economic case for
            heat pump conversion. For more on how{" "}
            <Link href="/battery" className="text-brand-600 hover:underline">home batteries</Link>{" "}
            can complement a heat pump by storing cheaper off-peak electricity, see our battery guide.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="font-semibold text-amber-800 mb-1">⚠ Common mistake: assuming Delaware is too cold for heat pumps</p>
            <p className="text-sm text-amber-900">
              Delaware&apos;s 99% design temperature of 16–19°F is well within the operating range of modern cold-climate
              heat pumps, which maintain rated capacity down to 5°F. Below the 99% design temp occurs roughly 88 hours
              per year. A properly sized cold-climate unit handles Delaware winters without backup resistance heat for
              the vast majority of hours.
            </p>
          </div>
        </div>
      </section>

      {/* 12. How to Apply */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Apply</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The primary path for most Delaware homeowners is through Energize Delaware&apos;s Home Performance with
            ENERGY STAR program.
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-gray-900">Schedule a Home Performance assessment</p>
                <p className="text-sm text-gray-700">
                  Contact an Energize Delaware participating contractor. The assessment costs $50 ($25 for
                  income-qualified households) and evaluates your home&apos;s energy performance.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900">Contractor submits rebate reservation</p>
                <p className="text-sm text-gray-700">
                  Your contractor reserves the rebate amount before work begins. This step is required — rebates
                  cannot be claimed retroactively for work done without a reservation.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-900">Install qualifying equipment</p>
                <p className="text-sm text-gray-700">
                  Work must be completed by the participating contractor. Equipment must meet the efficiency
                  requirements for the rebate tier you&apos;re targeting.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <p className="font-semibold text-gray-900">Contractor submits final paperwork</p>
                <p className="text-sm text-gray-700">
                  After installation, the contractor submits completion documentation. The rebate is processed by
                  Energize Delaware. DEMEC customers should also submit a separate Efficiency Smart application
                  within three months of purchase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. What to Watch */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Watch</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">HEAR launch timeline</p>
              <p className="text-sm text-gray-600 mt-1">
                Delaware&apos;s HEAR program, with up to $8,000 per heat pump for income-eligible households, has been
                awaiting DOE approval since August 2024. When it launches, it will be the single largest heat pump
                incentive available in the state. Monitor DNREC&apos;s IRA page for updates.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">IRA funding runway</p>
              <p className="text-sm text-gray-600 mt-1">
                The IRA&apos;s home energy rebate programs were not repealed by the One Big Beautiful Bill Act, but
                political uncertainty around IRA implementation continues. Delaware&apos;s $66 million allocation
                remains available but must be obligated within the DOE-approved timeframe. Once funds are exhausted,
                they will not be replenished.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Energize Delaware rebate levels</p>
              <p className="text-sm text-gray-600 mt-1">
                The current HPwES rebate pricing sheet has an effective date of November 1, 2024. Rebate amounts and
                efficiency tiers can change when new pricing sheets are issued. RGGI funding levels, which support
                the program, depend on carbon allowance auction results that vary quarterly.
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
            {faqJsonLd.mainEntity.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.name}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 15. See Also */}
      <section className="py-8 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-3">See also</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/heat-pumps/states/md" className="text-brand-600 hover:underline">
                Maryland Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/nj" className="text-brand-600 hover:underline">
                New Jersey Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/pa" className="text-brand-600 hover:underline">
                Pennsylvania Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li>
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                Federal Heat Pump Tax Credits — What Happened
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

      {/* 16. Sources */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="space-y-2 text-sm">
            {sources.map((source, index) => (
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

      {/* 17. Disclaimer */}
      <section className="py-8">
        <div className="container-narrow">
          <div className="bg-gray-100 rounded-lg p-6">
            <p className="text-gray-500 text-xs leading-relaxed">
              <strong>Disclaimer:</strong> This page covers the main statewide, utility, and IRA heat pump incentives
              available to Delaware homeowners in 2026. It does not calculate savings, guarantee eligibility, or
              represent any incentive program. Energize Delaware rebate amounts are based on the program pricing sheet
              effective November 1, 2024 and may be updated. HEAR and HOMES amounts reflect federal program design and
              may differ when Delaware&apos;s programs launch. We verify status regularly but programs can change
              without notice. Always confirm current amounts and eligibility with Energize Delaware, DNREC, and your
              contractor before making decisions.
            </p>
          </div>
              <p className="text-sm text-gray-600 mt-4">
            See how this state compares →{" "}
            <Link
              href="/heat-pumps/rebates-by-state"
              className="text-brand-600 hover:underline"
            >
              Heat Pump Rebates by State (2026)
            </Link>
          </p>
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
