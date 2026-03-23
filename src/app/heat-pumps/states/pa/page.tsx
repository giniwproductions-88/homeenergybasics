import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Pennsylvania Heat Pump Rebates 2026: Utility Programs + What's Coming | Home Energy Basics",
  description:
    "PA heat pump rebates range from $200 to $1,950 depending on your utility. Federal tax credits are gone. Penn Energy Savers hasn't launched. Here's what's actually available in Pennsylvania.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/pa",
  },
  openGraph: {
    title: "Pennsylvania Heat Pump Rebates 2026",
    description:
      "PECO, PPL, Duquesne Light, and FirstEnergy utility rebates — plus Penn Energy Savers status, HEELP loans, and stacking scenarios.",
    url: "https://homeenergybasics.com/heat-pumps/states/pa",
    type: "article",
  },
};

export default function PennsylvaniaPage() {
  const paIncentive = incentives.PA;
  const formattedDate = formatDate(paIncentive.lastVerified);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What heat pump rebates are available in Pennsylvania in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pennsylvania heat pump rebates come from your electric utility under Act 129 Phase IV. PECO customers can get up to $1,950 (with EAP stacking), PPL offers $350–$1,250, Duquesne Light $375–$425, FirstEnergy companies $200–$325, and UGI Electric up to $1,250. Federal tax credits ended December 31, 2025. The Penn Energy Savers (HEAR) program has not yet launched.",
        },
      },
      {
        "@type": "Question",
        name: "Is there a federal tax credit for heat pumps in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Both the Section 25C Energy Efficient Home Improvement Credit ($2,000 for heat pumps) and the Section 25D Residential Clean Energy Credit (30% for geothermal) ended December 31, 2025 under the One Big Beautiful Bill Act. Equipment installed in 2026 does not qualify even if purchased in 2025.",
        },
      },
      {
        "@type": "Question",
        name: "What is the Penn Energy Savers program?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Penn Energy Savers is Pennsylvania's IRA-funded rebate program (HEAR/HOMES), allocated $258.9 million. When launched, it will offer up to $8,000 for heat pumps for households below 80% AMI, and 50% of costs for those at 80–150% AMI. As of March 2026, the program is awaiting final federal approval and has no confirmed launch date.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get a low-interest loan for a heat pump in Pennsylvania?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The PHFA HEELP loan offers $1,000 to $10,000 at 1% fixed APR for 10 years. The KEEP Home Energy Loan provides $2,500 to $25,000 at below-market rates for up to 10 years. Both are available now and can be combined with utility rebates.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a cold-climate heat pump in Pennsylvania?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For most of Pennsylvania, yes. Philadelphia (14°F design temp) can work with standard equipment, but Pittsburgh, Scranton, and Erie (5–9°F design temps) need cold-climate rated heat pumps. Look for ENERGY STAR Cold Climate certification — these maintain at least 70% capacity at 5°F.",
        },
      },
      {
        "@type": "Question",
        name: "When do Pennsylvania Act 129 utility rebates expire?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Current Act 129 Phase IV rebates expire May 31, 2026. Phase V begins June 1, 2026 and is expected to include higher heat pump incentives, but specific amounts have not been published yet. If you're buying a heat pump now, apply for your utility rebate before the Phase IV deadline.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd data={faqJsonLd} />

      {/* Hero */}
      <section className="py-12 md:py-16">
        <div className="container-narrow">
          <nav className="text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-gray-700">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/heat-pumps" className="hover:text-gray-700">Heat Pumps</Link>
            <span className="mx-2">›</span>
            <span className="text-gray-900">Pennsylvania</span>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pennsylvania Heat Pump Rebates &amp; Incentives (2026)
          </h1>

          <p className="text-lg text-gray-700 mb-2">
            <strong>Pennsylvania has heat pump rebates in 2026 — but they&apos;re weaker than most states right now.</strong>{" "}
            Federal tax credits are gone, and the state&apos;s new rebate program (Penn Energy Savers) hasn&apos;t launched yet. That leaves utility rebates as the only real incentives today — typically{" "}
            <strong>$200 to $1,950 depending on your utility</strong>.
          </p>
          <p className="text-lg text-gray-700 mb-2">
            Pennsylvania heat pump rebates vary by utility — there is no single statewide program in 2026.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            <strong>Bigger rebates are coming later in 2026</strong>, but timing matters.
          </p>

          <p className="text-sm text-gray-500">
            Last verified: {formattedDate}
          </p>
        </div>
      </section>

      {/* Status Card */}
      <section className="pb-8">
        <div className="container-narrow">
          <p className="text-sm text-gray-600 mb-4">
            Status reflects statewide availability. Most incentives depend on your electric utility.
          </p>
          <StatusCard incentive={paIncentive} />
        </div>
      </section>

      {/* Short Version */}
      <section className="py-8 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            What&apos;s available in Pennsylvania right now (2026)
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-red-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <span className="text-red-500 text-xl">❌</span>
                <div>
                  <p className="font-semibold text-gray-900">No federal tax credits</p>
                  <p className="text-sm text-gray-600">
                    Both 25C ($2,000 heat pump) and 25D (30% geothermal) ended Dec 31, 2025.
                    Equipment installed in 2026 does not qualify.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-amber-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <span className="text-amber-500 text-xl">⏳</span>
                <div>
                  <p className="font-semibold text-gray-900">Penn Energy Savers: not yet launched</p>
                  <p className="text-sm text-gray-600">
                    $258.9M allocated. Up to $8,000 for heat pumps when it opens.
                    Awaiting federal approval — no confirmed date.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-green-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✅</span>
                <div>
                  <p className="font-semibold text-gray-900">Utility rebates: active through May 31, 2026</p>
                  <p className="text-sm text-gray-600">
                    $200–$1,950 depending on your electric utility.
                    PECO territory has the best stacking opportunity.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-green-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✅</span>
                <div>
                  <p className="font-semibold text-gray-900">Low-interest loans: available now</p>
                  <p className="text-sm text-gray-600">
                    HEELP: $1K–$10K at 1% APR for 10 years.
                    KEEP: $2.5K–$25K at below-market rates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reality Check */}
      <section className="py-8">
        <div className="container-narrow">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="font-semibold text-amber-800 mb-1">⚠ The honest picture in Pennsylvania right now</p>
            <p className="text-sm text-amber-900">
              Pennsylvania&apos;s heat pump incentives are weaker than neighboring states like New York or Massachusetts — and entirely dependent on which utility serves your home. PECO customers in the Philadelphia area can stack up to <strong>$1,950</strong> today. Most other PA homeowners are looking at <strong>$200–$450</strong>. The game-changer is Penn Energy Savers, but it hasn&apos;t launched yet and has no confirmed date. If you&apos;re waiting for better rebates, watch the Act 129 Phase V transition (June 2026) — but don&apos;t count on Penn Energy Savers until it actually opens.
            </p>
          </div>
        </div>
      </section>

      {/* Federal Credits Dead */}
      <section className="py-8">
        <div className="container-narrow">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Federal tax credits ended December 31, 2025
            </h2>
            <p className="text-gray-700 mb-3">
              The One Big Beautiful Bill Act (signed July 4, 2025) terminated both the Section 25C
              Energy Efficient Home Improvement Credit and the Section 25D Residential Clean Energy
              Credit — seven to nine years ahead of their original IRA-era expiration dates.
            </p>
            <p className="text-gray-700 mb-3">
              The &quot;placed in service&quot; rule is strict: equipment purchased in 2025 but
              installed in 2026 does <strong>not</strong> qualify. One exception — unused 25D credits
              from prior tax years can still be carried forward on future returns.
            </p>
            <p className="text-gray-700">
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-blue-600 hover:text-blue-800 underline">
                Full breakdown of what changed →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Penn Energy Savers */}
      <section className="py-8 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Penn Energy Savers (HEAR/HOMES) — not yet launched
          </h2>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
            <p className="text-gray-700 mb-3">
              Pennsylvania has been allocated <strong>$258.9 million</strong> in IRA-funded rebates
              ($129.2M for HEAR, $130M for HOMES). Program administrators have been hired — EGIS BLN
              for HEAR (December 2025) and Resource Innovations for HOMES (August 2025). But as of
              March 2026, <strong>the program is still awaiting final DOE approval</strong>.
            </p>
            <p className="text-gray-700">
              Sign up for updates at{" "}
              <a href="https://www.pennenergysavers.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                pennenergysavers.com
              </a>{" "}
              or email RA-EPHomeEngRebates@pa.gov.
            </p>
          </div>

          <p className="text-gray-700 mb-4">
            <strong>When it launches, HEAR will offer:</strong>
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Income level</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Coverage</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Heat pump cap</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">HPWH cap</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Household cap</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Below 80% AMI</td>
                  <td className="border border-gray-300 px-4 py-2">100% of costs</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">$8,000</td>
                  <td className="border border-gray-300 px-4 py-2">$1,750</td>
                  <td className="border border-gray-300 px-4 py-2">$14,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">80–150% AMI</td>
                  <td className="border border-gray-300 px-4 py-2">50% of costs</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">$8,000</td>
                  <td className="border border-gray-300 px-4 py-2">$1,750</td>
                  <td className="border border-gray-300 px-4 py-2">$14,000</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Above 150% AMI</td>
                  <td className="border border-gray-300 px-4 py-2" colSpan={4}>
                    Not eligible for HEAR (may qualify for HOMES whole-home rebates)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-600">
            Important: the OBBBA did <strong>not</strong> rescind HEAR/HOMES funding. These are
            direct federal grants to states, not tax code provisions. Funds remain available until
            depleted or September 30, 2031.
          </p>
        </div>
      </section>

      {/* Utility Rebates */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Utility rebates — your main incentive right now
          </h2>

          <p className="text-gray-700 mb-6">
            Utility rebates are the main incentives available in Pennsylvania right now. The amount
            you receive depends entirely on your electric utility — and{" "}
            <Link href="/heat-pumps" className="text-blue-600 hover:text-blue-800 underline">
              heat pump incentives vary by state
            </Link>. All programs run under Act 129
            Phase IV and <strong>expire May 31, 2026</strong>.
          </p>

          {/* PECO */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              PECO (Philadelphia area — ~1.6M customers)
            </h3>

            <p className="text-gray-700 mb-4">
              PECO&apos;s base rebates are modest, but <strong>stackable EAP bonuses</strong> make
              the Philadelphia area the most incentivized territory in Pennsylvania.
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Equipment</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">PECO base</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">EAP bonus</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Combined max</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Ducted ASHP (SEER2 15.2–17.0)</td>
                    <td className="border border-gray-300 px-4 py-2">$200</td>
                    <td className="border border-gray-300 px-4 py-2">+$500</td>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">$700</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Ducted ASHP (SEER2 ≥17.1)</td>
                    <td className="border border-gray-300 px-4 py-2">$300</td>
                    <td className="border border-gray-300 px-4 py-2">+$1,000–$1,400</td>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">$1,300–$1,700</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">+ Dual-fuel/hybrid adder</td>
                    <td className="border border-gray-300 px-4 py-2">—</td>
                    <td className="border border-gray-300 px-4 py-2">+$250</td>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">up to $1,950</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Ductless mini-split</td>
                    <td className="border border-gray-300 px-4 py-2">$150–$200</td>
                    <td className="border border-gray-300 px-4 py-2">varies</td>
                    <td className="border border-gray-300 px-4 py-2">varies</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Heat pump water heater</td>
                    <td className="border border-gray-300 px-4 py-2">$300</td>
                    <td className="border border-gray-300 px-4 py-2">—</td>
                    <td className="border border-gray-300 px-4 py-2">$300</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600">
              EAP bonuses are instant discounts through participating contractors. PECO minimum:
              ENERGY STAR certified, HSPF2 ≥7.8, EER2 ≥11.7. Apply within 90 days.
            </p>
          </div>

          {/* PPL */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              PPL Electric Utilities (eastern/central PA — ~1.4M customers)
            </h3>

            <p className="text-gray-700 mb-4">
              PPL offers the best base rebates of any PA electric utility for ducted systems, and
              the strongest ductless rebates by capacity.
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Equipment</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Rebate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Ducted ASHP Tier 1 (SEER2 ≥15.2)</td>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">$350</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Ducted ASHP Tier 2 (SEER2 ≥16.3, HSPF2 ≥8.2)</td>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">$450</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Ductless mini-split (per outdoor unit)</td>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">$400–$1,250</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Heat pump water heater</td>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">$400</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600">
              Ductless rebates scale by capacity and efficiency — up to $1,250 for 5+ ton systems at
              SEER2 ≥20. Apply within 180 days or by June 15, 2026.
            </p>
          </div>

          {/* Duquesne Light */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Duquesne Light (Pittsburgh area — ~600K customers)
            </h3>

            <p className="text-gray-700 mb-4">
              Duquesne Light is the only PA utility with a <strong>dedicated cold-climate ASHP
              rebate category</strong>.
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Equipment</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Rebate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Ducted ASHP Tier 1 (SEER2 ≥16.3, HSPF2 ≥8.2)</td>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">$375</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Ducted ASHP Tier 2 (SEER2 ≥18.3, HSPF2 ≥8.5)</td>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">$425</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Cold-climate ASHP (SEER2 ≥15.2, HSPF2 ≥8.5)</td>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">$375</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Ductless mini-split</td>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">$160</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Heat pump water heater</td>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">$300</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Geothermal heat pump</td>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">$650</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600">
              Also offers air-to-water heat pump rebate ($400). Apply within 90 days. Deadline June 6, 2026.
            </p>
          </div>

          {/* FirstEnergy */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              FirstEnergy — Met-Ed, Penelec, Penn Power, West Penn Power
            </h3>

            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Equipment</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Rebate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Ducted ASHP Tier 1 (SEER2 15.2–17.0)</td>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">$200</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Ducted ASHP Tier 2 (SEER2 ≥17.1) + promo adder</td>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">$325</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Mini-split (tiered)</td>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">$150–$300</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Heat pump water heater</td>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">$500</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600">
              Highest HPWH rebate in PA. Income-qualified customers (≤150% FPL) get an additional
              $25. Apply within 90 days at rebates.energysavepa.com.
            </p>
          </div>

          {/* UGI */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              UGI Electric (northeastern PA)
            </h3>

            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Equipment</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Rebate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Ducted ASHP</td>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">$400</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Mini-split (tiered by capacity)</td>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">$150–$1,250</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Heat pump water heater</td>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">$400</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600">
              UGI&apos;s mini-split rebates are the most generous in PA — up to $1,250 for 5+ ton
              systems at SEER2 ≥20. Available to UGI Electric customers only (not gas-only).
            </p>
          </div>

          {/* Gas utility note */}
          <div className="bg-gray-100 border border-gray-300 rounded-lg p-4">
            <p className="text-sm text-gray-700">
              <strong>Note about gas utilities:</strong> Philadelphia Gas Works (PGW) and Columbia Gas
              of PA do <strong>not</strong> offer electric heat pump rebates. PGW&apos;s EnergySense
              program covers gas furnaces and boilers only. Columbia Gas offers a $2,000 rebate for
              gas-fired heat pumps but not air-source electric units.
            </p>
          </div>
        </div>
      </section>

      {/* State Loan Programs */}
      <section className="py-8 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            State loan programs
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">PHFA HEELP Loan</h3>
              <p className="text-gray-700 mb-3">
                <strong>$1,000–$10,000 at 1% fixed APR</strong> for 10 years. About $88/month on a
                $10,000 loan. No prepayment penalties. Income limit: up to 150% AMI.
              </p>
              <p className="text-gray-700 mb-3">
                Covers heat pumps, insulation, air sealing, windows, roofing. Requires a
                PHFA-approved contractor. Work cannot begin before loan closes.
              </p>
              <p className="text-sm text-gray-600">
                Apply: 1-855-827-3466 or{" "}
                <a href="https://www.phfa.org/programs/repairs/heelp.aspx" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                  phfa.org
                </a>
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">KEEP Home Energy Loan</h3>
              <p className="text-gray-700 mb-3">
                <strong>$2,500–$25,000 at below-market rates</strong> for 3–10 years. Covers heat
                pumps, HPWH, insulation, EV chargers, and smart home energy systems.
              </p>
              <p className="text-gray-700 mb-3">
                Administered by the National Energy Improvement Fund (NEIF) under the PA Energy
                Development Authority.
              </p>
              <p className="text-sm text-gray-600">
                Apply:{" "}
                <a href="https://neifund.org/keepenergyloan" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                  neifund.org/keepenergyloan
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Programs */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Local programs
          </h2>

          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Philadelphia</h3>
            <p className="text-gray-700 mb-3">
              The <strong>Philadelphia Energy Authority&apos;s Built to Last</strong> program provides
              whole-home repairs and energy upgrades — including heat pumps, HPWH, and induction
              stoves — at <strong>100% cost coverage</strong> for low-income homeowners. PEA has
              installed heat pump systems in approximately 40 homes through this program and earned
              EPA&apos;s ENERGY STAR Home Upgrade Service Provider designation.
            </p>
            <p className="text-sm text-gray-600">
              Details:{" "}
              <a href="https://philaenergy.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                philaenergy.org
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Pittsburgh</h3>
            <p className="text-gray-700">
              Pittsburgh&apos;s Climate Action Plan 3.0 targets 50% GHG reduction by 2030 and
              mentions building electrification, but the city has <strong>no dedicated residential
              heat pump incentive program</strong>. Duquesne Light&apos;s Watt Choices program is
              your primary option in the Pittsburgh area.
            </p>
          </div>
        </div>
      </section>

      {/* Stacking */}
      <section className="py-8 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How incentives stack
          </h2>

          <p className="text-gray-700 mb-6">
            Utility Act 129 rebates, Penn Energy Savers (when launched), and loan programs operate
            through different funding sources and can be combined. Here&apos;s what realistic
            stacking looks like:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Scenario</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Today (March 2026)</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">After Penn Energy Savers launches</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">PECO territory (best case)</td>
                  <td className="border border-gray-300 px-4 py-2">$1,650–$1,950</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">$4,500–$6,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-semibold">PPL territory</td>
                  <td className="border border-gray-300 px-4 py-2">$350–$450</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">$4,350–$4,450</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">Duquesne Light territory</td>
                  <td className="border border-gray-300 px-4 py-2">$375–$425</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">$4,375–$4,425</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-semibold">Income-qualified (&lt;80% AMI, PECO)</td>
                  <td className="border border-gray-300 px-4 py-2">$1,650–$1,950</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">$9,650–$9,950</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-600 mb-4">
            Assumes ducted ASHP at SEER2 ≥17.1 for PECO. Penn Energy Savers amounts assume 50% of
            project costs at 80–150% AMI (~$4,000 on a typical $8,000+ project) or 100% at &lt;80% AMI
            (up to $8,000 cap).
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-gray-700">
              <strong>Timing matters:</strong> All Act 129 Phase IV rebates expire May 31, 2026.
              If Penn Energy Savers launches before that date, you may be able to stack both.
              If it launches after, you&apos;ll get the HEAR rebate but miss Phase IV utility
              incentives — though Phase V (starting June 1, 2026) is expected to include higher
              heat pump rebates.
            </p>
          </div>

          <p className="text-gray-700 mt-4">
            If you&apos;re planning a heat pump in Pennsylvania, your utility determines your
            rebate — so check your eligibility before getting quotes.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mt-6">
            <p className="font-semibold text-blue-800 mb-1">Pennsylvania is the only large Northeast state where your utility matters more than your income</p>
            <p className="text-sm text-blue-900">
              In New York, Massachusetts, and Connecticut, the biggest rebates scale by income level — lower-income households get the most help regardless of where they live. In Pennsylvania, your zip code (utility territory) is the primary variable. A PECO customer above 150% AMI can get <strong>$1,650–$1,950</strong> today, while a FirstEnergy customer at the same income gets <strong>$200–$325</strong>. That&apos;s a 5–8x difference based purely on geography. Penn Energy Savers will eventually add an income-based layer, but until it launches, PA runs on a utility-first model.
            </p>
          </div>

          <p className="text-sm text-gray-600 mt-4">
            <strong>In practice:</strong> Most Pennsylvania homeowners will rely primarily on their utility rebate (<strong>$200–$1,950</strong>) and low-interest financing through HEELP or KEEP — with Penn Energy Savers as a future bonus if timing aligns.
          </p>
        </div>
      </section>

      {/* Climate Context */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Climate considerations — cold-climate heat pumps matter here
          </h2>

          <p className="text-gray-700 mb-4">
            Pennsylvania spans three IECC climate zones (4A, 5A, and 6A). Outside of the Philadelphia
            metro area, you should plan for cold-climate heat pump equipment.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">City</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Design temp (99%)</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Climate zone</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Cold-climate HP needed?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Philadelphia</td>
                  <td className="border border-gray-300 px-4 py-2">14°F</td>
                  <td className="border border-gray-300 px-4 py-2">4A</td>
                  <td className="border border-gray-300 px-4 py-2">Recommended</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Harrisburg</td>
                  <td className="border border-gray-300 px-4 py-2">11°F</td>
                  <td className="border border-gray-300 px-4 py-2">5A</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">Yes</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Allentown</td>
                  <td className="border border-gray-300 px-4 py-2">9°F</td>
                  <td className="border border-gray-300 px-4 py-2">5A</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">Yes</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Pittsburgh</td>
                  <td className="border border-gray-300 px-4 py-2">5°F</td>
                  <td className="border border-gray-300 px-4 py-2">5A</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">Yes</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Scranton</td>
                  <td className="border border-gray-300 px-4 py-2">5°F</td>
                  <td className="border border-gray-300 px-4 py-2">5A</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">Yes</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Erie</td>
                  <td className="border border-gray-300 px-4 py-2">9°F</td>
                  <td className="border border-gray-300 px-4 py-2">5A</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 mb-4">
            Modern cold-climate heat pumps operate effectively down to -15°F to -22°F, well below
            any Pennsylvania design condition. Look for{" "}
            <strong>ENERGY STAR Cold Climate certification</strong> — these maintain at least
            70% heating capacity and a COP ≥1.75 at 5°F.
          </p>

          <p className="text-gray-700 mb-4">
            <strong>Hybrid/dual-fuel systems</strong> (heat pump + gas furnace backup) are common
            in PA and make particular sense in Pittsburgh and Scranton where design temps hit 5°F.
            PECO&apos;s EAP bonus includes a $250 dual-fuel adder that specifically rewards this approach.
          </p>

          <p className="text-gray-700">
            <strong>Heating fuel context:</strong> About 52% of PA homes heat with natural gas,
            27% with electricity, 12% with heating oil, and 5% with propane. Heating oil and propane
            households — concentrated in rural areas and the northern tier — stand to gain the most
            from heat pump conversion due to high fuel costs.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5 mt-6">
            <p className="font-semibold text-green-800 mb-1">✓ Best candidates for a heat pump in Pennsylvania</p>
            <p className="text-sm text-green-900">
              <strong>Heating oil or propane users</strong> in rural PA and the northern tier — fuel cost savings alone can justify the switch even with modest rebates. <strong>PECO customers</strong> who can stack EAP bonuses for the highest available rebate in the state. <strong>Income-qualified households below 80% AMI</strong> who will benefit most when Penn Energy Savers launches (up to $8,000). <strong>Homeowners with aging electric resistance heat</strong> — heat pumps cut electricity use by 30–50% with no fuel-switching complexity. <strong>Anyone replacing a failing system now</strong> who can lock in Phase IV utility rebates before the May 2026 deadline.
            </p>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-8 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How to apply for Pennsylvania heat pump rebates
          </h2>

          <ol className="space-y-4">
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
              <div>
                <p className="font-semibold text-gray-900">Identify your electric utility</p>
                <p className="text-gray-600 text-sm">
                  Check your electric bill — PECO, PPL, Duquesne Light, Met-Ed, Penelec, Penn Power,
                  West Penn Power, or UGI Electric. Your utility determines your rebate amount.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
              <div>
                <p className="font-semibold text-gray-900">Check rebate eligibility requirements</p>
                <p className="text-gray-600 text-sm">
                  All PA utilities require ENERGY STAR certification and minimum SEER2/HSPF2
                  thresholds. Higher-efficiency equipment qualifies for larger rebates.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
              <div>
                <p className="font-semibold text-gray-900">Work with a qualified contractor</p>
                <p className="text-gray-600 text-sm">
                  Required for most programs. PECO EAP bonuses require a participating EAP contractor.
                  HEELP loans require a PHFA-approved contractor.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</span>
              <div>
                <p className="font-semibold text-gray-900">Submit your application within the deadline</p>
                <p className="text-gray-600 text-sm">
                  Usually 90–180 days after installation depending on your utility. Final cutoff for
                  Act 129 Phase IV: <strong>May–June 2026</strong>.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">5</span>
              <div>
                <p className="font-semibold text-gray-900">Apply for financing if needed</p>
                <p className="text-gray-600 text-sm">
                  HEELP (1% APR) and KEEP (below-market) loans can cover remaining costs after rebates.
                  Apply separately — loan programs and utility rebates use different funding sources.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* What to Watch */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What to watch
          </h2>

          <div className="space-y-4">
            <div className="border-l-4 border-amber-400 pl-4">
              <p className="font-semibold text-gray-900">Penn Energy Savers launch</p>
              <p className="text-gray-600 text-sm">
                The biggest variable for PA heat pump economics. $258.9M in funding is allocated.
                Monitor pennenergysavers.com for launch announcements.
              </p>
            </div>

            <div className="border-l-4 border-blue-400 pl-4">
              <p className="font-semibold text-gray-900">Act 129 Phase V (June 1, 2026)</p>
              <p className="text-gray-600 text-sm">
                Phase V runs through May 2031 and is expected to include higher heat pump rebates.
                Specific amounts have not been published. Current Phase IV rebates end May 31, 2026.
              </p>
            </div>

            <div className="border-l-4 border-blue-400 pl-4">
              <p className="font-semibold text-gray-900">Governor Shapiro&apos;s Lightning Plan</p>
              <p className="text-gray-600 text-sm">
                Includes Act 129 reform legislation that could significantly expand rebate levels and
                modernize PA&apos;s energy efficiency standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-8 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Frequently asked questions
          </h2>

          <div className="space-y-6">
            {faqJsonLd.mainEntity.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.name}
                </h3>
                <p className="text-gray-700">
                  {faq.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Sources
          </h2>

          <ul className="space-y-2">
            {paIncentive.sources.map((source, index) => (
              <li key={index} className="text-sm">
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-8 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            See also
          </h2>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/heat-pumps/states/ny"
              className="text-blue-600 hover:text-blue-800 underline text-sm"
            >
              New York heat pump rebates →
            </Link>
            <Link
              href="/heat-pumps/states/ct"
              className="text-blue-600 hover:text-blue-800 underline text-sm"
            >
              Connecticut heat pump rebates →
            </Link>
            <Link
              href="/heat-pumps/states/ma"
              className="text-blue-600 hover:text-blue-800 underline text-sm"
            >
              Massachusetts heat pump rebates →
            </Link>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/federal-heat-pump-tax-credit-expired"
              className="text-blue-600 hover:text-blue-800 underline text-sm"
            >
              Federal heat pump tax credits ended →
            </Link>
            <Link
              href="/heat-pumps"
              className="text-blue-600 hover:text-blue-800 underline text-sm"
            >
              All state heat pump incentives →
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8">
        <div className="container-narrow">
          <div className="bg-gray-100 rounded-lg p-6">
            <p className="text-xs text-gray-500">
              <strong>Disclaimer:</strong> This page is for informational purposes only and does
              not constitute financial or tax advice. Incentive programs, amounts, and eligibility
              requirements change frequently. Always verify current details directly with your
              utility and program administrators before making purchasing decisions. Home Energy
              Basics is not affiliated with any utility, government agency, or manufacturer.
              Last verified {formattedDate}.
            </p>
          </div>
        </div>
      </section>

      {/* Back */}
      <section className="py-8 bg-gray-50">
        <div className="container-narrow text-center">
          <Link href="/heat-pumps" className="btn-primary">
            ← Back to Heat Pump Incentive Tracker
          </Link>
        </div>
      </section>
    </>
  );
}
