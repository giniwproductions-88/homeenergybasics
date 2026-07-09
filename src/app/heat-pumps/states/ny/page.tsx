import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "New York Heat Pump Rebates 2026: $12,000 Clean Heat + $40,000 Geothermal | Home Energy Basics",
  description:
    "NYS Clean Heat pays $2,500\u2013$12,000 for air-source, up to $40,000 for geothermal. EmPower+ adds up to $28,000 with HEAR. Federal credits ended.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/ny",
  },
  openGraph: {
    title: "New York Heat Pump Rebates 2026",
    description:
      "NYS Clean Heat up to $12,000 for air-source and $40,000 for geothermal \u2014 the complete guide to New York heat pump incentives after federal credits expired.",
    url: "https://homeenergybasics.com/heat-pumps/states/ny",
    type: "article",
    publishedTime: "2026-03-21T23:25:20-05:00",
    modifiedTime: `${incentives.NY.lastVerified}T00:00:00Z`,
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What heat pump rebates are available in New York in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NYS Clean Heat offers $2,500\u2013$12,000 for air-source heat pumps (depending on utility, project category, and DAC status) and $14,000\u2013$40,000 for geothermal. EmPower+ provides $12,000\u2013$14,000 in base incentives plus up to $14,000 in HEAR funding for income-eligible households at or below 80% of State or Area Median Income. The new Weatherized Tier, which unlocks bonus incentives and the 85% project cost cap, was delayed from March 1 to September 1, 2026. Federal 25C and 25D tax credits expired December 31, 2025.",
      },
    },
    {
      "@type": "Question",
      name: "Can I stack NYS Clean Heat rebates with HEAR in New York?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EmPower+ (which delivers HEAR funding) and NYS Clean Heat utility incentives cannot be combined for the same installed measure. Income-eligible households must choose one pathway for the heat pump itself. However, different programs can cover different measures in the same project. For market-rate homeowners, Clean Heat is the primary pathway ($2,500\u2013$12,000). Total Clean Heat incentives are capped at 70% of project cost (non-DAC) or 85% (DAC, Central Hudson, or Weatherized Tier).",
      },
    },
    {
      "@type": "Question",
      name: "What is the NYS Clean Heat Weatherized Tier?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Originally scheduled for March 1, 2026, the Weatherized Tier launch was extended to September 1, 2026 per Program Manual Version 2. It provides bonus incentives and the higher 85% project cost cap for homes meeting insulation and air-sealing standards. You qualify through four pathways: built after 2010, prior weatherization program participation, NYSERDA Virtual Energy Assessment, or certified home energy assessment. This is a bonus in 2026\u20132027, but the Public Service Commission order requires weatherization as a prerequisite for all Clean Heat incentives by March 1, 2028, at a standard still to be defined.",
      },
    },
    {
      "@type": "Question",
      name: "What is EmPower+ and how does it connect to HEAR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EmPower+ is NYSERDA\u2019s program for income-eligible households at or below 80% of the State or Area Median Income (whichever is greater). Low-income households receive no-cost improvements capped at $12,000 (upstate) or $14,000 (downstate) per project. New York channels federal HEAR funding through EmPower+ on top of that \u2014 up to $14,000 in additional rebates per household (including up to $8,000 toward a heat pump) \u2014 for a combined ceiling of roughly $26,000\u2013$28,000, potentially covering 100% of project costs with zero out-of-pocket expense.",
      },
    },
    {
      "@type": "Question",
      name: "Do all heat pumps qualify for New York incentives?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. All eligible air-source heat pumps must appear on the NEEP Cold Climate ASHP Product List, ensuring performance at temperatures as low as -15\u00b0F. Systems must be sized to meet 90\u2013120% of the building\u2019s design heating load via Manual J calculation and installed by a NYS Clean Heat Participating Contractor.",
      },
    },
    {
      "@type": "Question",
      name: "Who administers New York\u2019s heat pump programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NYS Clean Heat is administered jointly by NYSERDA and six major electric utilities: Con Edison, National Grid, NYSEG, RG&E, Central Hudson, and Orange & Rockland. PSEG Long Island runs its own separate heat pump program for Long Island homeowners. EmPower+ and HEAR are administered by NYSERDA. The NY State geothermal tax credit is claimed through the state tax return.",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "New York Heat Pump Rebates & Incentives (2026)",
  datePublished: "2026-03-21T23:25:20-05:00",
  dateModified: `${incentives.NY.lastVerified}T00:00:00Z`,
  author: { "@type": "Organization", name: "Home Energy Basics", url: "https://homeenergybasics.com" },
  publisher: { "@type": "Organization", name: "Home Energy Basics", url: "https://homeenergybasics.com" },
  mainEntityOfPage: "https://homeenergybasics.com/heat-pumps/states/ny",
};

export default function NewYorkPage() {
  const nyIncentive = incentives.NY;
  const formattedDate = formatDate(nyIncentive.lastVerified);

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
            {" "}/ New York
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            New York Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            New York offers some of the largest heat pump rebates in the U.S. through the NYS Clean Heat program &mdash; up to <strong>$12,000</strong> for air-source systems and up to <strong>$40,000</strong> for geothermal. Income-eligible households can combine EmPower+ base incentives of <strong>$12,000&ndash;$14,000</strong> with up to <strong>$14,000</strong> in additional HEAR funding. Federal tax credits ended December 31, 2025, but state and utility incentives make New York one of the best places to install a heat pump in 2026. This guide covers all major New York heat pump incentives available in 2026, including NYS Clean Heat, Con Edison, National Grid, PSEG Long Island, Central Hudson, EmPower+, the Weatherized Tier, and the state geothermal credit. Here&apos;s what&apos;s actually available.
          </p>
          <p className="text-sm text-gray-500">
            Updated {formattedDate} — verified against official program sources
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Rates and program availability may change after this date.
          </p>
        </div>
      </section>

      {/* 2. Status Card */}
      <section className="py-8">
        <div className="container-narrow">
          <StatusCard incentive={nyIncentive} />
        </div>
      </section>

      {/* 3. Short Version */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Short Version</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">&#10003; NYS Clean Heat: $2,500&ndash;$12,000</p>
              <p className="text-sm text-green-900">Reauthorized 2026&ndash;2030 with $5.36 billion. Six utilities participate. Full fossil fuel removal earns the highest rebates. DAC areas get enhanced amounts at most utilities.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">&#10003; EmPower+ (HEAR): Up to ~$28,000 Combined</p>
              <p className="text-sm text-green-900">For income-eligible households at or below 80% of State or Area Median Income (SMI/AMI). $12,000&ndash;$14,000 base plus up to $14,000 in HEAR funds &mdash; potentially free installations covering 100% of project costs.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">&#10003; Total Potential Savings</p>
              <p className="text-sm text-green-900">$2,500&ndash;$12,000 (above 80% SMI/AMI, Clean Heat only) to ~$28,000 (below 80% SMI/AMI, EmPower+ with HEAR). Geothermal: $14,000&ndash;$40,000 plus 25% state tax credit up to $10,000.</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">&#10007; Federal Tax Credits Expired</p>
              <p className="text-sm text-red-900">Section 25C ($2,000) and Section 25D (30% geothermal) both ended December 31, 2025. NY&apos;s state programs more than compensate for most homeowners.</p>
            </div>
            <div className="md:col-span-2 bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="font-semibold text-amber-800 mb-1">&#9888; Weatherized Tier: Bonus Now Launching September 2026, Mandatory in 2028</p>
              <p className="text-sm text-amber-900">Originally scheduled for March 1, 2026, the Weatherized Tier launch was extended to <strong>September 1, 2026</strong> per Program Manual Version 2. It unlocks bonus incentives and the 85% project cost cap. It&apos;s optional through 2027, but weatherization becomes <strong>mandatory by March 1, 2028</strong> (at a standard still to be defined) &mdash; meaning homes will eventually need to meet weatherization standards to receive any Clean Heat incentive.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Federal Expired */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Federal Tax Credits Have Ended</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <p className="text-red-900 leading-relaxed">
              <strong>Section 25C</strong> (up to $2,000/year for heat pumps) and <strong>Section 25D</strong> (30% for geothermal) both expired <strong>December 31, 2025</strong> under the One Big Beautiful Bill Act. No federal tax credit is available for 2026 installations. New York&apos;s state programs more than compensate &mdash; NYS Clean Heat offers up to $12,000 for air-source and $40,000 for geothermal, significantly more than the expired federal credits. For details, see our{" "}
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-red-700 underline hover:text-red-900">
                federal heat pump tax credit explainer
              </Link>.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            If you completed an installation by December 31, 2025, you can still claim the credit on your 2025 return using IRS Form 5695. Unused Section 25D credits may carry forward to future tax years.
          </p>
        </div>
      </section>

      {/* 5. NYS Clean Heat / Primary */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">NYS Clean Heat Program &mdash; The Flagship</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The NYS Clean Heat program is the primary heat pump incentive for New York homeowners. Reauthorized for 2026&ndash;2030 with approximately <strong>$5.36 billion</strong>, it&apos;s administered jointly by NYSERDA and six major utilities. The 2026 cycle introduced flat-rate incentives per project (replacing the old per-Btuh model), a new Weatherized Tier, and higher caps.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-amber-800 mb-1">&#9888; Common Mistake: Choosing a Non-Participating Contractor</p>
            <p className="text-sm text-amber-900">All systems must be on the NEEP Cold Climate ASHP Product List (rated to -15&#176;F), sized to meet 90&ndash;120% of design heating load via Manual J calculation, and installed by a NYS Clean Heat Participating Contractor. The incentive is applied directly to your contractor&apos;s invoice. If your contractor isn&apos;t enrolled, you get nothing.</p>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Incentive caps: <strong>70% of project cost</strong> (non-DAC) or <strong>85%</strong> (DAC, Central Hudson territory, or Weatherized Tier).
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Con Edison (NYC &amp; Westchester)</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Category</th>
                  <th className="text-left p-3 font-semibold">Standard</th>
                  <th className="text-left p-3 font-semibold">DAC</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Full replacement (fossil fuel removed)</td>
                  <td className="p-3 font-semibold">$8,000</td>
                  <td className="p-3 font-semibold">$10,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Full load heating (fossil retained as backup)</td>
                  <td className="p-3 font-semibold">$2,500</td>
                  <td className="p-3 font-semibold">$4,500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ground source (GSHP, whole building)</td>
                  <td className="p-3 font-semibold">$30,000</td>
                  <td className="p-3 font-semibold">$40,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">$1,000</td>
                  <td className="p-3 font-semibold">$1,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">National Grid (Upstate NY)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            National Grid switched to flat-rate per-project incentives in 2026 (replacing the old per-Btuh model).
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Category</th>
                  <th className="text-left p-3 font-semibold">Non-DAC (SF)</th>
                  <th className="text-left p-3 font-semibold">DAC (SF)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Cat. 2b &mdash; Full load, fossil removed</td>
                  <td className="p-3 font-semibold">$10,000</td>
                  <td className="p-3 font-semibold">$12,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Cat. 2 &mdash; Full load, fossil retained</td>
                  <td className="p-3 font-semibold">$6,000</td>
                  <td className="p-3 font-semibold">$8,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Cat. 3 &mdash; GSHP retrofit</td>
                  <td className="p-3 font-semibold">$20,000</td>
                  <td className="p-3 font-semibold">$25,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Cat. 3 &mdash; GSHP new construction</td>
                  <td className="p-3 font-semibold">$14,000</td>
                  <td className="p-3 font-semibold">$19,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Cat. 4 &mdash; Partial to full load</td>
                  <td className="p-3 font-semibold">$4,000</td>
                  <td className="p-3 font-semibold">$4,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Cat. 5 &mdash; HPWH</td>
                  <td className="p-3 font-semibold">$1,250</td>
                  <td className="p-3 font-semibold">$1,250</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. More Utilities */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Other Utility Programs</h2>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Central Hudson (Mid-Hudson Valley)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Central Hudson uniquely applies the <strong>85% project cost cap to all customers</strong> regardless of DAC status &mdash; the most generous cap structure among upstate utilities.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Category</th>
                  <th className="text-left p-3 font-semibold">Single Family</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Cat. 2b &mdash; Full load, fossil removed</td>
                  <td className="p-3 font-semibold">$8,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Cat. 2 &mdash; Full load, fossil retained</td>
                  <td className="p-3 font-semibold">$5,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Cat. 3 &mdash; GSHP retrofit</td>
                  <td className="p-3 font-semibold">$18,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Cat. 4 &mdash; Partial to full load</td>
                  <td className="p-3 font-semibold">$3,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Cat. 5 &mdash; HPWH</td>
                  <td className="p-3 font-semibold">$1,250</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Orange &amp; Rockland (Lower Hudson Valley)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            O&amp;R publishes no rebate amounts on its own site &mdash; incentives flow through NYS Clean Heat Participating Contractors. Single-family amounts per the 2026 Program Manual:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Category</th>
                  <th className="text-left p-3 font-semibold">Non-DAC (SF)</th>
                  <th className="text-left p-3 font-semibold">DAC (SF)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Cat. 2b &mdash; Full load, fossil removed</td>
                  <td className="p-3 font-semibold">$9,000</td>
                  <td className="p-3 font-semibold">$10,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Cat. 2 &mdash; Full load, fossil retained</td>
                  <td className="p-3 font-semibold">$5,000</td>
                  <td className="p-3 font-semibold">$6,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Cat. 3 &mdash; GSHP retrofit</td>
                  <td className="p-3 font-semibold">$14,000</td>
                  <td className="p-3 font-semibold">$15,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Cat. 4 &mdash; Partial to full load</td>
                  <td className="p-3 font-semibold">$3,000</td>
                  <td className="p-3 font-semibold">$3,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Cat. 5 &mdash; HPWH</td>
                  <td className="p-3 font-semibold">$1,250</td>
                  <td className="p-3 font-semibold">$1,250</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">PSEG Long Island</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            PSEG Long Island runs its own program outside NYS Clean Heat, with rebates tiered by income. Whole-house cold-climate air-source rebates for single-family homes run <strong>$4,000</strong> (market rate), <strong>$5,000</strong> (DAC or moderate income, below 80% AMI), and <strong>$7,500</strong> (low income, below 60% AMI). Geothermal is far larger &mdash; up to <strong>$24,000 per dwelling</strong> for new systems at the low-income rate. Systems must be NEEP-listed, sized to 100&ndash;120% of the dwelling&apos;s heating load via Manual J, and installed by a participating Home Comfort Partner. Note that PSEG Long Island&apos;s income tiers (60%/80% AMI) differ from EmPower+&apos;s 80% SMI/AMI standard.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Geothermal (per dwelling)</th>
                  <th className="text-left p-3 font-semibold">Market rate</th>
                  <th className="text-left p-3 font-semibold">DAC / moderate income</th>
                  <th className="text-left p-3 font-semibold">Low income</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">New system</td>
                  <td className="p-3 font-semibold">$12,000</td>
                  <td className="p-3 font-semibold">$15,000</td>
                  <td className="p-3 font-semibold">$24,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Retrofit</td>
                  <td className="p-3 font-semibold">$6,000</td>
                  <td className="p-3 font-semibold">$7,500</td>
                  <td className="p-3 font-semibold">$12,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">NYSEG &amp; RG&amp;E (Southern Tier, Rochester)</h3>
          <p className="text-gray-700 leading-relaxed">
            NYSEG and RG&amp;E ended their standalone residential rebate programs on June 30, 2025. All heat pump incentives now flow exclusively through NYS Clean Heat via Participating Contractors. Under the 2026 Program Manual, both pay <strong>$6,000</strong> for single-family full-load projects with fossil retained and <strong>$10,000</strong> with full fossil removal (NYSEG adds $1,000 in DACs; RG&amp;E&apos;s DAC adder applies only to apartments). GSHP retrofits earn <strong>$17,000</strong> ($18,000 in DACs).
          </p>
        </div>
      </section>

      {/* 7. EmPower+ / HEAR */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">EmPower+ &amp; Federal HEAR &mdash; Up to ~$28,000 Combined</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            New York was the <strong>first state</strong> to launch IRA-funded home energy rebates (June 2024). EmPower+ covers low-income households&apos; improvements at no cost up to <strong>$12,000</strong> per project upstate or <strong>$14,000</strong> downstate (moderate-income households get 50% coverage up to $6,000&ndash;$7,000). Federal HEAR funding flows through EmPower+ <strong>on top of</strong> those caps &mdash; up to <strong>$14,000</strong> in additional rebates per household, including up to $8,000 toward a heat pump &mdash; for a combined ceiling of roughly <strong>$26,000&ndash;$28,000</strong> covering heat pumps, weatherization, electrical upgrades, and heat pump water heaters.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Eligible households at or below <strong>80% of the State or Area Median Income (SMI/AMI, whichever is greater)</strong> can receive <strong>100% of project costs covered</strong> with zero out-of-pocket expense. HOMES rebates for moderate- and market-rate households are also available.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="font-semibold text-blue-800 mb-1">EmPower+ and Clean Heat: Choose One Per Measure</p>
            <p className="text-sm text-blue-900">EmPower+ and NYS Clean Heat utility incentives cannot be combined for the same installed measure. Income-eligible households should choose EmPower+ (higher combined ceiling of ~$28,000) for the heat pump itself. Clean Heat can potentially cover other measures in the same project. Market-rate households above 80% SMI/AMI use Clean Heat as their primary pathway.</p>
          </div>
        </div>
      </section>

      {/* 8. Weatherized Tier */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Weatherized Tier &mdash; Launching September 1, 2026</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The new Weatherized Tier rewards homes meeting insulation and air-sealing standards with bonus incentives and the <strong>85% project cost cap</strong> (same as DAC areas). Originally scheduled for March 1, 2026, the launch was extended to <strong>September 1, 2026</strong> per Program Manual Version 2 (March 5, 2026). This is a bonus for 2026&ndash;2027, but the Commission&apos;s order requires weatherization as a prerequisite for all Clean Heat incentives <strong>by March 1, 2028</strong>, at a standard still to be defined &mdash; meaning homes will eventually need to meet weatherization standards to receive any Clean Heat incentive.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">How to Qualify (Any One Pathway)</h3>
          <div className="space-y-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">1. Built After 2010</p>
              <p className="text-sm text-gray-600 mt-1">When NY&apos;s building code first required blower-door testing. Automatic qualification.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">2. Prior Weatherization Program</p>
              <p className="text-sm text-gray-600 mt-1">Participated in EmPower+, NYSERDA Comfort Home, Con Edison Weather Ready, WAP, or similar qualifying program.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">3. NYSERDA Virtual Energy Assessment</p>
              <p className="text-sm text-gray-600 mt-1">Receive a &quot;Heat Pump Ready Envelope&quot; designation through NYSERDA&apos;s tool (launching statewide 2026).</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">4. Certified Home Energy Assessment</p>
              <p className="text-sm text-gray-600 mt-1">Passes air sealing, minimum R-38 attic insulation, and ACH50 thresholds based on building vintage and size.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Stacking */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Programs Stack</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Important:</strong> EmPower+ and NYS Clean Heat utility incentives <strong>cannot be combined</strong> for the same installed measure. Income-eligible households must choose one pathway. However, different programs can cover different measures in the same project (e.g., Clean Heat for the heat pump, EmPower+ for weatherization). For a typical <strong>$20,000</strong> whole-home heat pump installation:
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 80% SMI/AMI &mdash; Con Edison (Non-DAC)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Clean Heat full replacement: $8,000</li>
                <li>Cap: 70% of $20,000 = $14,000</li>
                <li>Federal tax credit: $0 (expired)</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$8,000</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 80% SMI/AMI &mdash; National Grid (DAC)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Clean Heat Cat. 2b (fossil removed): $12,000</li>
                <li>Cap: 85% of $20,000 = $17,000</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$12,000</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">Below 80% SMI/AMI &mdash; EmPower+ with HEAR (Best Case)</p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>EmPower+ base (low-income): up to $12,000&ndash;$14,000</li>
                <li>Additional HEAR funding: up to $14,000 ($8,000 max toward the heat pump)</li>
                <li>Coverage: up to 100% of project costs</li>
                <li>Note: cannot also receive Clean Heat for same HP</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$20,000 (project fully covered &mdash; free)</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-5">
            <p className="font-semibold text-gray-900 mb-1">What You&apos;ll Actually Pay</p>
            <p className="text-sm text-gray-700">
              For a $20,000 whole-home system with full fossil removal: market-rate homeowners in non-DAC areas pay <strong>$10,000&ndash;$12,000 out of pocket</strong> (rebates run $8,000&ndash;$10,000 across the six Clean Heat utilities; PSEG Long Island&apos;s separate program pays $4,000&ndash;$7,500 for air-source). DAC-area homeowners pay <strong>$8,000&ndash;$10,000</strong> (rebates $10,000&ndash;$12,000 &mdash; except Central Hudson, which pays the same $8,000 with or without DAC status). Keeping a fossil backup cuts the rebate sharply &mdash; as low as $2,500 at Con Edison. Income-eligible households through EmPower+ may pay <strong>$0</strong>. On-Bill Recovery Loans and NYSERDA Smart Energy Loans can finance remaining costs.
            </p>
          </div>
        </div>
      </section>

      {/* 10. Weatherization / All-Electric Act */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Weatherization and All-Electric Building Act</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Weatherization:</strong> EmPower+ provides free weatherization services (insulation, air sealing, heating system replacement) for income-eligible households. WAP is also available through local Community Action Agencies for households at or below 60% of State Median Income.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>All-Electric Building Act:</strong> Effective January 1, 2026, New York became the first state to require all-electric equipment in new construction of seven stories or fewer &mdash; no gas furnaces, stoves, or water heaters. This applies only to new construction, not existing homes. The Climate Action Council has recommended eventually prohibiting new fossil fuel furnace installations in existing homes when systems reach end of life, but this is not yet law.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <p className="font-semibold text-green-800 mb-1">&#10003; Best Candidates for a Heat Pump in New York</p>
            <p className="text-sm text-green-900">Income-eligible households (EmPower+ with HEAR covers up to ~$28,000 combined &mdash; potentially free). Homeowners in DAC areas ($10,000&ndash;$12,000 Clean Heat at most utilities + 85% cap). Oil-heated homes (highest fuel cost savings + strongest rebate tiers for fossil fuel removal). Anyone with a Weatherized Tier-qualifying home (85% cap + bonus incentives).</p>
          </div>
        </div>
      </section>

      {/* 11. Climate Context */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Climate Context</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            New York spans climate zones 4A (NYC, Long Island) through 6A (Adirondacks, far upstate). All NYS Clean Heat&ndash;qualifying equipment must be on the NEEP Cold Climate Product List, rated to -15&#176;F.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Location</th>
                  <th className="text-left p-3 font-semibold">ASHRAE 99% Design Temp</th>
                  <th className="text-left p-3 font-semibold">Climate Zone</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">New York City</td>
                  <td className="p-3 font-semibold">~11&#176;F</td>
                  <td className="p-3">4A</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Albany</td>
                  <td className="p-3 font-semibold">~-2&#176;F</td>
                  <td className="p-3">5A</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Buffalo</td>
                  <td className="p-3 font-semibold">~2&#176;F</td>
                  <td className="p-3">5A</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Syracuse</td>
                  <td className="p-3 font-semibold">~-2&#176;F</td>
                  <td className="p-3">5A</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Approximately 61% of NY homes heat with natural gas, 17% with fuel oil, and 16% with electricity (EIA RECS 2020). New York&apos;s fuel-oil share is among the highest in the nation, which makes it one of the most compelling states for heat pump economics. For more on energy storage, see our{" "}
            <Link href="/battery" className="text-brand-600 hover:underline">home battery guide</Link>.
          </p>
        </div>
      </section>

      {/* 12. How to Apply */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Apply</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <p className="font-semibold text-gray-900">Contact a NYS Clean Heat Participating Contractor</p>
                <p className="text-sm text-gray-700">Find contractors at cleanheat.ny.gov. The incentive is applied directly to your invoice &mdash; you see the reduced price upfront.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <p className="font-semibold text-gray-900">Check Income Eligibility for EmPower+</p>
                <p className="text-sm text-gray-700">If you may qualify (at or below 80% of State or Area Median Income), apply at nyserda.ny.gov or call 1-866-NYSERDA. This unlocks up to ~$28,000 in combined EmPower+ and HEAR incentives.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <p className="font-semibold text-gray-900">Pursue the Weatherized Tier (Launching September 2026)</p>
                <p className="text-sm text-gray-700">If your home was built after 2010, you auto-qualify. Otherwise, request a NYSERDA Virtual Energy Assessment or certified audit. When the Tier launches September 1, 2026, qualifying unlocks bonus incentives and the 85% cap.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
              <div>
                <p className="font-semibold text-gray-900">Apply for Financing If Needed</p>
                <p className="text-sm text-gray-700">On-Bill Recovery Loans (payments capped at estimated energy savings) or NYSERDA Smart Energy Loans (low-interest) can cover remaining costs after incentives.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. What to Watch */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Watch</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Weatherized Tier Launch (September 1, 2026)</p>
              <p className="text-sm text-gray-600 mt-1">Delayed from March 1 to September 1, 2026. When active, qualifying homes get bonus incentives and the 85% project cost cap. Specific dollar amounts are pending in Program Manual updates &mdash; check cleanheat.ny.gov.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">IRA Funding Runway</p>
              <p className="text-sm text-gray-600 mt-1">HEAR and HOMES funds remain available until expended or September 30, 2031. The OBBBA did not repeal IRA rebate allocations. New York has already been distributing funds through EmPower+ since June 2024.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">2028 Weatherization Mandate</p>
              <p className="text-sm text-gray-600 mt-1">By March 1, 2028, weatherization becomes a prerequisite for all Clean Heat incentives (the required standard is still to be defined). Qualifying now earns the bonus and avoids future compliance costs.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">NY State Geothermal Tax Credit</p>
              <p className="text-sm text-gray-600 mt-1">The 25% state geothermal tax credit (up to $10,000) remains active for 2026. Combined with Clean Heat rebates of $14,000&ndash;$40,000, this makes NY one of the best states for ground-source systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 14. FAQ */}
      <section className="bg-gray-50 py-12">
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

      {/* 15. See Also */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-3">See also</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/heat-pumps/states/nj" className="text-brand-600 hover:underline">
                New Jersey Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/ct" className="text-brand-600 hover:underline">
                Connecticut Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/pa" className="text-brand-600 hover:underline">
                Pennsylvania Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/vt" className="text-brand-600 hover:underline">
                Vermont Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/ma" className="text-brand-600 hover:underline">
                Massachusetts Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li>
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                Federal Heat Pump Tax Credits Have Ended &mdash; What to Know
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
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="space-y-2 text-sm">
            {nyIncentive.sources.map((source: { label: string; url: string }, index: number) => (
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
              <strong>Disclaimer:</strong> This page covers the main statewide,
              utility, and IRA heat pump incentives available to New York
              homeowners in 2026. It does not calculate savings, guarantee
              eligibility, or represent any incentive program. NYS Clean Heat
              rebate amounts vary by utility territory, DAC status, project
              category, and Weatherized Tier qualification. EmPower+ eligibility
              requires income verification at or below 80% of State or Area
              Median Income. We verify status
              regularly but programs can change without notice. Always confirm
              current amounts and eligibility with your utility, NYSERDA, and
              your contractor before making decisions.
            </p>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            See how this state compares &rarr;{" "}
            <Link
              href="/heat-pumps/rebates-by-state"
              className="text-brand-600 hover:underline"
            >
              Heat Pump Rebates by State (2026)
            </Link>
          </p>
          <div className="mt-6 text-center">
            <Link href="/heat-pumps" className="text-brand-600 hover:underline text-sm">
              &#8592; Back to Heat Pumps overview
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
