// src/app/heat-pumps/states/ny/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";

export const metadata: Metadata = {
  title:
    "New York Heat Pump Rebates 2026: NYS Clean Heat, Utility Incentives & Federal Programs | Home Energy Basics",
  description:
    "No federal heat pump tax credits in 2026. Here's what New York homeowners can use: NYS Clean Heat rebates up to $12,000, Con Edison, National Grid, PSEG Long Island, EmPower+, and the new Weatherized Tier.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/ny",
  },
  openGraph: {
    title: "New York Heat Pump Rebates 2026: What's Actually Available",
    description:
      "Federal credits ended. NYS Clean Heat offers $6,000–$12,000 for air-source and up to $25,000 for geothermal. The complete NY guide.",
  },
};

const lastVerified = "March 18, 2026";

const faqs = [
  {
    question:
      "Are there federal tax credits for heat pumps in New York in 2026?",
    answer:
      "No. The federal 25C energy efficiency tax credit and 25D geothermal credit both ended December 31, 2025 under the One Big Beautiful Bill Act (OBBBA). If you installed before that date, you can still claim on your 2025 return using IRS Form 5695. No federal tax credit is available for 2026 installations.",
  },
  {
    question: "What is the NYS Clean Heat program?",
    answer:
      "NYS Clean Heat is a statewide heat pump incentive program reauthorized for 2026–2030 with approximately $5.36 billion in funding. It's administered jointly by NYSERDA and six major electric utilities (Con Edison, National Grid, PSEG Long Island, Central Hudson, NYSEG, and RG&E). Incentives are paid directly to contractors, reducing your upfront cost.",
  },
  {
    question:
      "How much can I get for replacing my furnace with a heat pump in New York?",
    answer:
      "For a single-family home fully replacing fossil fuel heating: $8,000–$12,000 (Con Edison), $10,000–$12,000 (National Grid), or $8,000 (Central Hudson) through the NYS Clean Heat decommissioning pathway. Exact amounts depend on your utility and whether you're in a Disadvantaged Community (DAC). Ground-source systems can receive $14,000–$25,000.",
  },
  {
    question: "What is the Weatherized Tier?",
    answer:
      "Launching March 1, 2026, the Weatherized Tier offers bonus incentives and the higher 85% project cost cap for homes meeting insulation and air-sealing standards. You qualify through four pathways: built after 2010, prior weatherization program participation, NYSERDA Virtual Energy Assessment, or certified home energy assessment. Specific bonus dollar amounts are pending publication in an updated Program Manual.",
  },
  {
    question: "What is EmPower+ and how does it connect to HEAR?",
    answer:
      "EmPower+ is NYSERDA's program for income-eligible households (at or below 80% AMI). New York channels federal HEAR funding through EmPower+, enabling up to $24,000 per qualifying household (combining state EmPower+ and federal HEAR funding) for heat pumps, weatherization, electrical upgrades, and heat pump water heaters — potentially covering 100% of project costs with zero out-of-pocket expense.",
  },
  {
    question: "Can I get a heat pump installed in New York for free?",
    answer:
      "Potentially, yes. Income-eligible households (≤80% AMI) can receive 100% of project costs covered through EmPower+ with HEAR funding (up to $24,000). Apply through NYSERDA at nyserda.ny.gov or call 1-866-NYSERDA.",
  },
  {
    question: "Do all heat pumps qualify for New York incentives?",
    answer:
      "No. All eligible air-source heat pumps must appear on the NEEP Cold Climate ASHP Product List, ensuring performance at temperatures as low as -15°F. Systems must be sized to meet 90–120% of the building's design heating load via Manual J calculation and installed by a NYS Clean Heat Participating Contractor.",
  },
  {
    question: "Is New York banning gas furnaces?",
    answer:
      "New York's All-Electric Building Act took effect January 1, 2026, requiring all new buildings of seven stories or fewer to use electric heat pumps and appliances — no gas furnaces, stoves, or water heaters. This applies to new construction only, not existing homes. The Climate Action Council has recommended eventually prohibiting new fossil fuel furnace installations in existing homes, but this is not yet law.",
  },
];

export default function NewYorkHeatPumps() {
  const nyIncentive = incentives.NY;
  const formattedDate = formatDate(nyIncentive.lastVerified);

  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50 to-white py-10 md:py-14">
        <div className="container-narrow">
          <p className="text-brand-600 font-medium mb-2">
            <Link href="/heat-pumps" className="hover:underline">
              Heat Pump Incentives
            </Link>{" "}
            / New York
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            New York Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            New York offers some of the largest heat pump rebates in the U.S.
            through the NYS Clean Heat program — up to $12,000 for air-source
            systems and $25,000 for geothermal. Federal tax credits ended in
            2025, but state and utility incentives make New York one of the best
            places to install a heat pump in 2026.
          </p>
          <p className="text-sm text-gray-500 mt-3">
            Last updated: {formattedDate}
          </p>
        </div>
      </section>

      {/* Status Card */}
      <section className="py-8">
        <div className="container-narrow">
          <StatusCard incentive={nyIncentive} />
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-8 border-t border-gray-100">
        <div className="container-narrow">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <p className="font-bold text-red-700 mb-1">Federal Tax Credits</p>
              <p className="text-gray-700 text-sm">
                25C and 25D both{" "}
                <Link
                  href="/federal-heat-pump-tax-credit-expired"
                  className="text-brand-600 underline"
                >
                  ended December 31, 2025
                </Link>
                . No federal tax credit for 2026 installations.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <p className="font-bold text-green-700 mb-1">
                NYS Clean Heat
              </p>
              <p className="text-gray-700 text-sm">
                $6,000–$12,000 for air-source, up to $25,000 for ground-source.
                Reauthorized 2026–2030 with $5.36 billion.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <p className="font-bold text-green-700 mb-1">
                EmPower+ (HEAR)
              </p>
              <p className="text-gray-700 text-sm">
                Up to $24,000 for income-eligible households (≤80% AMI).
                Currently live — potentially free installations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Actually Get */}
      <section className="py-8 border-t border-gray-100">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            What New York Homeowners Actually Get
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            The exact rebate depends on your utility, whether you fully remove
            the fossil fuel system, and whether you&apos;re in a Disadvantaged
            Community (DAC). Here are the realistic ranges for a single-family
            home fully replacing fossil fuel heating with a heat pump in 2026:
          </p>
          <div className="space-y-3">
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <strong>NYC / Con Edison:</strong> $8,000 standard, $10,000 in
                DAC areas. Fossil fuel system must be removed.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <strong>Upstate / National Grid:</strong> $10,000 standard,
                $12,000 in DAC areas. Flat-rate per project (new for 2026).
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <strong>Mid-Hudson / Central Hudson:</strong> $8,000 with the
                85% project cost cap applied to all customers regardless of DAC
                status.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <strong>Income-eligible (≤80% AMI):</strong> Up to $24,000
                through EmPower+ with HEAR funding — potentially covering 100%
                of project costs with zero out-of-pocket expense.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <strong>Ground-source (geothermal):</strong> $14,000–$25,000
                depending on utility and DAC status.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Qualifies */}
      <section className="py-8 border-t border-gray-100">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Who Qualifies for New York Heat Pump Rebates?
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            NYS Clean Heat rebates are available to most homeowners, but there
            are specific requirements:
          </p>
          <div className="bg-gray-50 rounded-xl p-5 mb-4">
            <ul className="text-sm text-gray-700 space-y-2">
              <li>Home must be a 1-to-4 unit residential property</li>
              <li>
                Heat pump must be on the NEEP Cold Climate ASHP Product List
                (rated to -15°F)
              </li>
              <li>
                System must be sized to meet 90–120% of design heating load via
                Manual J calculation
              </li>
              <li>Must use a NYS Clean Heat Participating Contractor</li>
              <li>
                Total incentives capped at 70% of project cost (non-DAC) or 85%
                (DAC, Central Hudson, or Weatherized Tier)
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <p className="font-semibold text-blue-700 mb-2">
              What is AMI and do I qualify for EmPower+?
            </p>
            <p className="text-sm text-gray-700">
              AMI stands for Area Median Income — the midpoint household income
              for your county. EmPower+ serves households at or below 80% of
              AMI, which qualifies for the largest incentives including
              potentially free installations. Use the{" "}
              <a
                href="https://homes.rewiringamerica.org/calculator"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 hover:underline"
              >
                Rewiring America Savings Calculator ↗
              </a>{" "}
              or NYSERDA&apos;s{" "}
              <a
                href="https://www.nyserda.ny.gov/ny/Income-Guidelines"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 hover:underline"
              >
                Income Guidelines by county ↗
              </a>{" "}
              to check.
            </p>
          </div>
        </div>
      </section>

      {/* Federal Credits Expired */}
      <section className="py-10 border-t border-gray-100">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Federal Heat Pump Tax Credits — Ended
          </h2>
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
            <p className="text-gray-700 mb-3">
              <strong>Section 25C</strong> is not available for property placed
              in service after December 31, 2025, and{" "}
              <strong>Section 25D</strong> is not available for expenditures
              made after December 31, 2025. Both were terminated early by the
              One Big Beautiful Bill Act (OBBBA), signed July 4, 2025. For
              New York homeowners, that means no federal residential heat pump
              tax credit is available for 2026 installations.
            </p>
            <p className="text-gray-700 mb-3">
              New York&apos;s state and utility programs more than compensate.
              NYS Clean Heat offers up to $12,000 for air-source and $25,000 for
              ground-source — significantly more than the expired federal credits
              for most homeowners. If you completed a heat pump installation by
              December 31, 2025, you can still claim the credit on your 2025 tax
              return using IRS Form 5695. Unused 25D credits may carry forward.
            </p>
            <p className="text-sm text-gray-500">
              Source:{" "}
              <a
                href="https://www.irs.gov/credits-deductions/energy-efficient-home-improvement-credit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 hover:underline"
              >
                IRS — Energy Efficient Home Improvement Credit ↗
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* NYS Clean Heat Overview */}
      <section className="py-10 border-t border-gray-100">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            NYS Clean Heat Program — The Flagship
          </h2>
          <p className="text-gray-600 mb-4">
            The NYS Clean Heat program is the primary heat pump incentive for
            New York homeowners. Reauthorized for 2026–2030 with approximately{" "}
            <strong>$5.36 billion</strong>, it&apos;s administered jointly by
            NYSERDA and six major utilities. The 2026 cycle introduced flat-rate
            incentives per project (replacing the old per-Btuh model), a new
            Weatherized Tier, and higher caps.
          </p>

          <div className="bg-gray-50 rounded-xl p-5 mb-6">
            <p className="text-sm text-gray-600 mb-2">
              <strong>Key requirements:</strong>
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>
                • All systems must be on the{" "}
                <strong>NEEP Cold Climate ASHP Product List</strong> (rated to
                -15°F)
              </li>
              <li>
                • Sizing: 90–120% of design heating load via Manual J
                calculation
              </li>
              <li>
                • Must use a NYS Clean Heat Participating Contractor
              </li>
              <li>
                • Incentive cap: <strong>70% of project cost</strong> (non-DAC)
                or <strong>85%</strong> (DAC and Central Hudson territory)
              </li>
              <li>• Eligible: 1-to-4 unit residential homes only</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Utility Rebate Tables */}
      {/* TODO: Add internal link to /heat-pumps/how-much-does-a-heat-pump-cost when that page exists */}
      <section className="py-10 border-t border-gray-100">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Utility Rebates by Provider
          </h2>

          {/* Con Edison */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Con Edison (NYC &amp; Westchester)
            </h3>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 pr-4 font-semibold">
                      Category
                    </th>
                    <th className="text-left py-3 pr-4 font-semibold">
                      Standard
                    </th>
                    <th className="text-left py-3 font-semibold">DAC</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 pr-4">
                      Full replacement (fossil fuel removed)
                    </td>
                    <td className="py-3 pr-4 font-semibold">$8,000</td>
                    <td className="py-3 font-semibold">$10,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 pr-4">
                      Full load heating (fossil retained as backup)
                    </td>
                    <td className="py-3 pr-4 font-semibold">$2,500</td>
                    <td className="py-3 font-semibold">—</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 pr-4">Heat pump water heater</td>
                    <td className="py-3 pr-4 font-semibold">$1,000</td>
                    <td className="py-3 font-semibold">$1,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600">
              Incentives applied directly to contractor invoice — no rebate
              checks to wait for.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Source:{" "}
              <a
                href="https://www.coned.com/en/save-money/rebates-incentives-tax-credits/rebates-incentives-tax-credits-for-residential-customers/electric-heating-and-cooling-technology-for-renters-homeowners/save-on-a-central-air-source-heat-pump"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 hover:underline"
              >
                Con Edison — Heat Pump Rebates ↗
              </a>
            </p>
          </div>

          {/* National Grid */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              National Grid (Upstate NY)
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              National Grid switched to flat-rate per-project incentives in 2026
              (replacing the old per-Btuh model).
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 pr-4 font-semibold">
                      Category
                    </th>
                    <th className="text-left py-3 pr-4 font-semibold">
                      Non-DAC (SF)
                    </th>
                    <th className="text-left py-3 font-semibold">DAC (SF)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 pr-4">
                      Cat. 2b — Full load, fossil removed
                    </td>
                    <td className="py-3 pr-4 font-semibold">$10,000</td>
                    <td className="py-3 font-semibold">$12,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 pr-4">
                      Cat. 2 — Full load, fossil retained
                    </td>
                    <td className="py-3 pr-4 font-semibold">$6,000</td>
                    <td className="py-3 font-semibold">$8,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 pr-4">Cat. 3 — GSHP retrofit</td>
                    <td className="py-3 pr-4 font-semibold">$20,000</td>
                    <td className="py-3 font-semibold">$25,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 pr-4">
                      Cat. 3 — GSHP new construction
                    </td>
                    <td className="py-3 pr-4 font-semibold">$14,000</td>
                    <td className="py-3 font-semibold">$19,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 pr-4">Cat. 4 — Partial to full load</td>
                    <td className="py-3 pr-4 font-semibold">$4,000</td>
                    <td className="py-3 font-semibold">$4,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 pr-4">Cat. 5 — HPWH</td>
                    <td className="py-3 pr-4 font-semibold">$1,250</td>
                    <td className="py-3 font-semibold">$1,250</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500">
              Source: NYS Clean Heat Program Manual v1.1 (January 23, 2026),
              Table 8.{" "}
              <a
                href="https://cleanheat.ny.gov/assets/pdf/NYS%20Clean%20Heat%20Program%20Manual%202025.12.12_REFILE.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 hover:underline"
              >
                Program Manual (PDF) ↗
              </a>
            </p>
          </div>

          {/* Central Hudson */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Central Hudson (Mid-Hudson Valley)
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Central Hudson uniquely applies the{" "}
              <strong>85% project cost cap to all customers</strong> regardless
              of DAC status — the most generous cap structure among upstate
              utilities.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 pr-4 font-semibold">
                      Category
                    </th>
                    <th className="text-left py-3 font-semibold">
                      Single Family
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 pr-4">
                      Cat. 2b — Full load, fossil removed
                    </td>
                    <td className="py-3 font-semibold">$8,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 pr-4">
                      Cat. 2 — Full load, fossil retained
                    </td>
                    <td className="py-3 font-semibold">$5,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 pr-4">Cat. 3 — GSHP retrofit</td>
                    <td className="py-3 font-semibold">$18,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 pr-4">Cat. 4 — Partial to full load</td>
                    <td className="py-3 font-semibold">$3,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 pr-4">Cat. 5 — HPWH</td>
                    <td className="py-3 font-semibold">$1,250</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-amber-600 mb-2">
              ⚠️ Central Hudson&apos;s website (cenhud.com) still displays the
              old per-Btuh rates from 2020–2025. The Program Manual governs —
              the new flat rates are generally more generous.
            </p>
            <p className="text-sm text-gray-500">
              Source: NYS Clean Heat Program Manual v1.1, Table 3.{" "}
              <a
                href="https://www.cenhud.com/my-energy/save-energy-money/residential-incentives/heat-pumps-residential"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 hover:underline"
              >
                Central Hudson — Heat Pumps ↗
              </a>
            </p>
          </div>

          {/* PSEG Long Island */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              PSEG Long Island
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              Rebates range from $4,000 to $10,500 depending on project type and
              income eligibility. Income-eligible rate can cover up to{" "}
              <strong>$11,000</strong>, potentially eliminating all out-of-pocket
              costs.
            </p>
            <p className="text-sm text-gray-500">
              Source:{" "}
              <a
                href="https://www.psegliny.com/en/saveenergyandmoney/homeefficiency/HomeComfort/HeatPumps/Rebates"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 hover:underline"
              >
                PSEG Long Island — Heat Pump Rebates ↗
              </a>
            </p>
          </div>

          {/* NYSEG & RG&E */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              NYSEG &amp; RG&amp;E (Southern Tier, Rochester)
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              NYSEG and RG&amp;E ended their standalone residential rebate
              programs on June 30, 2025. All heat pump incentives now flow
              exclusively through NYS Clean Heat. Contact a{" "}
              <a
                href="https://cleanheat.ny.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 hover:underline"
              >
                Participating Contractor
              </a>{" "}
              to access incentives.
            </p>
          </div>
        </div>
      </section>

      {/* Weatherized Tier */}
      <section className="py-10 border-t border-gray-100">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Weatherized Tier — Launched March 1, 2026
          </h2>
          <p className="text-gray-600 mb-4">
            The new Weatherized Tier rewards homes meeting insulation and
            air-sealing standards with higher incentives and the{" "}
            <strong>85% project cost cap</strong> (same as DAC areas). This is a
            bonus from 2026–2027 but becomes{" "}
            <strong>mandatory starting March 1, 2028</strong> — meaning homes
            will eventually need to meet weatherization standards to receive any
            Clean Heat incentive.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            How to Qualify (Any One Pathway)
          </h3>
          <div className="space-y-3 mb-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900">
                1. Built after 2010
              </p>
              <p className="text-sm text-gray-600">
                When NY&apos;s building code first required blower-door testing.
                Automatic qualification.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900">
                2. Prior weatherization program
              </p>
              <p className="text-sm text-gray-600">
                Participated in EmPower+, NYSERDA Comfort Home, Con Edison
                Weather Ready, WAP, or similar qualifying program.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900">
                3. NYSERDA Virtual Energy Assessment
              </p>
              <p className="text-sm text-gray-600">
                Receive a &quot;Heat Pump Ready Envelope&quot; designation
                through NYSERDA&apos;s tool (launching statewide 2026).
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900">
                4. Certified home energy assessment
              </p>
              <p className="text-sm text-gray-600">
                Passes air sealing, minimum R-38 attic insulation, and ACH50
                thresholds based on building vintage and size.
              </p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <p className="text-sm text-gray-600">
              <strong>Bonus amounts:</strong> The Weatherized Tier provides an
              additional fixed incentive on top of base rates. Specific dollar
              amounts are pending publication in the updated Program Manual
              (Version 2). The December 2025 contractor working group confirmed
              these figures would be released prior to the March 1, 2026
              launch — check{" "}
              <a
                href="https://cleanheat.ny.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 hover:underline"
              >
                cleanheat.ny.gov ↗
              </a>{" "}
              for the latest. Page last reviewed: {formattedDate}.
            </p>
          </div>
        </div>
      </section>

      {/* EmPower+ / HEAR */}
      {/* TODO: Add internal link to /heat-pumps/income-qualified-programs when that page exists */}
      <section className="py-10 border-t border-gray-100">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            EmPower+ &amp; Federal HEAR — Up to $24,000
          </h2>
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
            <p className="font-semibold text-green-700 mb-2">
              ✅ Currently Active for Income-Eligible Households
            </p>
            <p className="text-gray-700 text-sm mb-3">
              New York was the <strong>first state</strong> to launch IRA-funded
              home energy rebates (June 2024). Federal HEAR funding flows through
              NYSERDA&apos;s EmPower+ program, enabling up to{" "}
              <strong>$24,000 per qualifying household</strong> (combining state
              EmPower+ and federal HEAR funding) for heat pumps,
              weatherization, electrical upgrades, and heat pump water heaters.
            </p>
            <p className="text-gray-700 text-sm">
              Eligible households at or below <strong>80% AMI</strong> can
              receive <strong>100% of project costs covered</strong> with zero
              out-of-pocket expense. HOMES rebates for moderate- and market-rate
              households are also available.
            </p>
          </div>

          <p className="text-sm text-gray-500">
            Apply at{" "}
            <a
              href="https://www.nyserda.ny.gov/All-Programs/EmPower-New-York-Program/EmPower-Application"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              NYSERDA EmPower+ Application ↗
            </a>{" "}
            or call 1-866-NYSERDA | Verified {lastVerified}
          </p>
        </div>
      </section>

      {/* All-Electric Building Act */}
      <section className="py-10 border-t border-gray-100">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            New York&apos;s All-Electric Building Act
          </h2>
          <p className="text-gray-600 mb-4">
            Effective January 1, 2026, New York became the{" "}
            <strong>first state to ban fossil fuel equipment</strong> in new
            construction. All new buildings of seven stories or fewer must use
            electric heat pumps and appliances — no gas furnaces, stoves, or
            water heaters. This applies only to new construction, not existing
            homes.
          </p>
          <p className="text-gray-600 mb-4">
            The state&apos;s Climate Leadership and Community Protection Act
            (CLCPA) mandates 40% greenhouse gas reduction by 2030 and 85% by
            2050. Buildings represent approximately one-third of New York&apos;s
            emissions. The Climate Action Council has recommended eventually
            prohibiting new fossil fuel furnace installations in existing homes
            when systems reach end of life, but this has not been enacted into
            law.
          </p>
        </div>
      </section>

      {/* Stacking */}
      {/* TODO: Add internal links to /heat-pumps/are-they-worth-it and other state pages (CA, MA, MN) when those exist */}
      <section className="py-10 border-t border-gray-100">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Can New York Heat Pump Rebates Be Combined?
          </h2>
          <p className="text-gray-600 mb-4">
            Yes. New York residents can stack NYS Clean Heat utility rebates with
            HEAR/HOMES rebates, subject to these rules:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <p className="font-bold text-green-700 mb-3">✓ Can Stack</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Clean Heat utility rebate + HEAR (via EmPower+)</li>
                <li>Clean Heat utility rebate + HOMES</li>
                <li>Weatherized Tier bonus + base Clean Heat</li>
                <li>On-Bill Recovery Loan + rebates</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <p className="font-bold text-red-700 mb-3">✗ Limits</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Total cannot exceed 70% of project cost (non-DAC)</li>
                <li>Total cannot exceed 85% of project cost (DAC / Central Hudson / Weatherized)</li>
                <li>Total cannot exceed actual project cost</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-5">
            <p className="text-sm text-gray-600">
              <strong>Best scenario for income-eligible households:</strong>{" "}
              EmPower+ with HEAR funding can cover up to $24,000 — potentially
              100% of project costs with zero out-of-pocket expense. For
              market-rate households, Clean Heat alone provides $8,000–$12,000.
            </p>
          </div>
        </div>
      </section>

      {/* Financing */}
      <section className="py-10 border-t border-gray-100">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Financing Options
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900">
                On-Bill Recovery Loans
              </p>
              <p className="text-sm text-gray-600">
                Payments built into your utility bill, capped at estimated energy
                savings. Available through participating utilities.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900">
                NYSERDA Smart Energy Loans
              </p>
              <p className="text-sm text-gray-600">
                Low-interest financing for energy improvements. Can be combined
                with Clean Heat incentives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-10 border-t border-gray-100">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How to Apply for New York Heat Pump Rebates
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                NYS Clean Heat (All Income Levels)
              </h3>
              <p className="text-gray-600 text-sm">
                Contact a{" "}
                <a
                  href="https://cleanheat.ny.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 hover:underline"
                >
                  NYS Clean Heat Participating Contractor ↗
                </a>
                . The incentive is applied directly to your contractor&apos;s
                invoice — you see the reduced price upfront.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                EmPower+ (Income-Eligible, ≤80% AMI)
              </h3>
              <p className="text-gray-600 text-sm">
                Apply at{" "}
                <a
                  href="https://www.nyserda.ny.gov/All-Programs/EmPower-New-York-Program/EmPower-Application"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 hover:underline"
                >
                  NYSERDA EmPower+ Application ↗
                </a>{" "}
                (online or downloadable PDF). Phone: 1-866-NYSERDA.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Check Your AMI (Income Eligibility)
              </h3>
              <p className="text-gray-600 text-sm">
                Use the{" "}
                <a
                  href="https://homes.rewiringamerica.org/calculator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 hover:underline"
                >
                  Rewiring America Savings Calculator ↗
                </a>{" "}
                or NYSERDA&apos;s{" "}
                <a
                  href="https://www.nyserda.ny.gov/ny/Income-Guidelines"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 hover:underline"
                >
                  Income Guidelines by county ↗
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Links */}
      <section className="py-8 border-t border-gray-100">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Compare Heat Pump Rebates in Other States
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/heat-pumps/states/or"
              className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors text-sm"
            >
              Oregon →
            </Link>
            <Link
              href="/heat-pumps/states/wa"
              className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors text-sm"
            >
              Washington →
            </Link>
            <Link
              href="/heat-pumps/states/mn"
              className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors text-sm"
            >
              Minnesota →
            </Link>
            <Link
              href="/heat-pumps/states/ma"
              className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors text-sm"
            >
              Massachusetts →
            </Link>
            <Link
              href="/heat-pumps/states/me"
              className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors text-sm"
            >
              Maine →
            </Link>
            <Link
              href="/heat-pumps/states/ca"
              className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors text-sm"
            >
              California →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 border-t border-gray-100">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-b border-gray-100 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-8 border-t border-gray-100">
        <div className="container-narrow">
          <p className="text-sm text-gray-500">
            Last updated: {formattedDate}. Information sourced from the NYS Clean
            Heat Program Manual v1.1 (January 23, 2026), NYSERDA, Con Edison,
            National Grid, Central Hudson, PSEG Long Island, and federal program
            documentation. Rebate amounts and availability may change — verify
            with your utility or a Participating Contractor before making
            purchasing decisions.
          </p>
        </div>
      </section>
    </>
  );
}
