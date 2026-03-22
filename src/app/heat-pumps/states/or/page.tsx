// src/app/heat-pumps/states/or/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";

export const metadata: Metadata = {
  title:
    "Oregon Heat Pump Rebates 2026: Energy Trust, ODOE & Federal Incentives | Home Energy Basics",
  description:
    "No federal heat pump tax credits in 2026. Here's what Oregon homeowners can actually use: Energy Trust rebates up to $1,000, HP3 status, HOMES/HEAR launch timeline, and stacking rules.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/or",
  },
  openGraph: {
    title: "Oregon Heat Pump Rebates 2026: What's Actually Available",
    description:
      "Federal credits ended. Energy Trust rebates, ODOE HP3, and upcoming HOMES/HEAR — the complete Oregon guide.",
  },
};

const lastVerified = "March 18, 2026";

const faqs = [
  {
    question: "Are there federal tax credits for heat pumps in Oregon in 2026?",
    answer:
      "No. The federal 25C energy efficiency tax credit and 25D geothermal credit both ended December 31, 2025 under the One Big Beautiful Bill Act (OBBBA). If you installed before that date, you can still claim on your 2025 return using IRS Form 5695. No federal tax credit is available for 2026 installations.",
  },
  {
    question: "What is Energy Trust of Oregon and do I qualify?",
    answer:
      "Energy Trust of Oregon is a nonprofit funded by utility ratepayers. You qualify if you're a customer of Portland General Electric, Pacific Power, NW Natural, Cascade Natural Gas, or Avista. Most Oregon residents qualify. Energy Trust rebates are the primary heat pump incentive for most Oregonians.",
  },
  {
    question: "Can I stack Energy Trust rebates with other programs?",
    answer:
      "Yes. Energy Trust rebates can stack with ODOE's HP3 program (e.g., $1,000 + $2,000 = $3,000). Since Energy Trust funding is ratepayer-funded (not federal), stacking with HOMES and HEAR is anticipated when those programs launch — confirm with Energy Trust. HP3 cannot stack with HOMES or HEAR — you must choose one. Total incentives from all sources cannot exceed 100% of project cost.",
  },
  {
    question: "Is the HP3 program still accepting applications?",
    answer:
      "Owner-occupied Round 1 and Round 2 funding is fully reserved as of early 2026. Rental property and new construction funding remain available. Each HP3 incentive is up to $2,000 per residence. Check oregon.gov/energy for current status.",
  },
  {
    question: "When will HOMES and HEAR rebates be available in Oregon?",
    answer:
      "ODOE expects HOMES and HEAR to launch in Spring 2026, but no specific date has been announced and all timelines are subject to change pending U.S. DOE approval. Phase 1 covers individual home applications, Phase 2 (Summer 2026) covers multi-unit upgrades, and Phase 3 (Fall 2026) adds retail point-of-sale coupons. Rebates are not retroactive — installations must occur after program launch.",
  },
  {
    question:
      "Does Energy Trust offer rebates for ground-source (geothermal) heat pumps?",
    answer:
      "No. Energy Trust's January 2026 residential incentive sheet lists only air-source systems — no geothermal rebates are currently offered. HP3 covers geothermal but owner-occupied funding is exhausted. When HOMES/HEAR launch, geothermal installations may qualify. The federal 25D geothermal tax credit (previously 30% uncapped) ended December 31, 2025.",
  },
  {
    question: "What is the Portland Clean Energy Fund?",
    answer:
      "PCEF is a city-funded program providing grants for clean energy projects in Portland. It funds gaps not covered by other incentive sources, making it a potential complement to Energy Trust and ODOE programs. The Cooling Portland Program was expanded in December 2024 with $10.3 million and had installed over 13,000 portable heat pump and cooling units at that point.",
  },
  {
    question:
      "How much can I realistically save on a heat pump in Oregon in 2026?",
    answer:
      "Most homeowners can expect $800–$1,000 from Energy Trust today. If HP3 rental or new construction funding is available, that adds up to $2,000. When HEAR launches, total incentives could reach $4,800–$9,000 depending on income and eligibility. Actual savings depend on system type, income level, and whether additional local programs (like Portland's PCEF) apply. Confirm amounts with each program before purchasing.",
  },
];

export default function OregonHeatPumps() {
  const orIncentive = incentives.OR;
  const formattedDate = formatDate(orIncentive.lastVerified);

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
            / Oregon
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Oregon Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Federal tax credits are gone. Oregon homeowners now rely on Energy
            Trust rebates ($800–$1,000), limited ODOE funding, and upcoming
            federal HOMES/HEAR rebates (up to $8,000). Here&apos;s what&apos;s
            actually available — and what&apos;s not.
          </p>
          <p className="text-sm text-gray-500 mt-3">
            Last updated: {formattedDate}
          </p>
        </div>
      </section>

      {/* Status Card */}
      <section className="py-8">
        <div className="container-narrow">
          <StatusCard incentive={orIncentive} />
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
                Energy Trust Rebates
              </p>
              <p className="text-gray-700 text-sm">
                $800–$1,000 for heat pumps. Active for PGE, Pacific Power, NW
                Natural, Cascade Natural Gas, and Avista customers.
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="font-bold text-amber-700 mb-1">
                HOMES/HEAR Rebates
              </p>
              <p className="text-gray-700 text-sm">
                Up to $8,000 for heat pumps. Expected Spring 2026 — not yet
                available. Not retroactive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Qualifies */}
      <section className="py-8 border-t border-gray-100">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Who Qualifies for Oregon Heat Pump Rebates?
          </h2>
          <div className="bg-gray-50 rounded-xl p-5 mb-4">
            <ul className="text-sm text-gray-700 space-y-2">
              <li>
                Most homeowners qualify for Energy Trust if served by Portland
                General Electric, Pacific Power, NW Natural, Cascade Natural
                Gas, or Avista
              </li>
              <li>
                Must use a Trade Ally contractor for Energy Trust rebates
              </li>
              <li>
                Equipment must meet minimum efficiency ratings (HSPF2 8.10 for
                ductless, 7.50 for ducted)
              </li>
              <li>
                Income-based programs (HEAR when live, some ODOE programs)
                require household income at or below 150% of Area Median Income
                (AMI). Households ≤80% AMI qualify for the largest incentives.
              </li>
              <li>
                Rental and manufactured home eligibility varies by program —
                check ODOE and Energy Trust separately
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <p className="font-semibold text-blue-700 mb-2">
              What is AMI and do I qualify?
            </p>
            <p className="text-sm text-gray-700">
              AMI stands for Area Median Income — the midpoint household income
              for your county. Use the{" "}
              <a
                href="https://homes.rewiringamerica.org/calculator"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 hover:underline"
              >
                Rewiring America Savings Calculator ↗
              </a>{" "}
              to check your eligibility by zip code.
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
              Oregon homeowners, that means no federal residential heat pump tax
              credit is available for 2026 installations.
            </p>
            <p className="text-gray-700 mb-3">
              If you completed a heat pump installation by December 31, 2025,
              you can still claim the credit on your 2025 tax return using IRS
              Form 5695. Unused 25D credits may carry forward.
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

      {/* Energy Trust of Oregon */}
      {/* TODO: Add internal link to /heat-pumps/how-much-does-a-heat-pump-cost when that page exists */}
      <section className="py-10 border-t border-gray-100">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Energy Trust of Oregon — Heat Pump Rebates
          </h2>
          <p className="text-gray-600 mb-6">
            Energy Trust is the primary incentive source for most Oregon
            homeowners. It&apos;s funded by utility ratepayers (not the state
            budget or federal programs), so it operates independently of federal
            policy changes. You qualify if your electric or gas utility is
            Portland General Electric, Pacific Power, NW Natural, Cascade
            Natural Gas, or Avista.
          </p>

          {/* Rebate Table */}
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 pr-4 font-semibold">
                    System Type
                  </th>
                  <th className="text-left py-3 pr-4 font-semibold">
                    Owner-Occupied
                  </th>
                  <th className="text-left py-3 font-semibold">
                    Rental / Income-Qualified
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 pr-4">Ductless heat pump (mini-split)</td>
                  <td className="py-3 pr-4 font-semibold">$800</td>
                  <td className="py-3 font-semibold">$1,800</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">
                    Ducted heat pump (replacing electric furnace)
                  </td>
                  <td className="py-3 pr-4 font-semibold">$1,000</td>
                  <td className="py-3 font-semibold">$3,000</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">
                    Extended capacity heat pump (CEE Tier 1 Path A)
                  </td>
                  <td className="py-3 pr-4 font-semibold">$1,000</td>
                  <td className="py-3 font-semibold">$2,000</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">
                    Manufactured home (special promotion — check Energy Trust for
                    current details)
                  </td>
                  <td className="py-3 pr-4 font-semibold">Up to $4,000</td>
                  <td className="py-3 font-semibold">Up to $4,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gray-50 rounded-xl p-5 mb-4">
            <p className="text-sm text-gray-600 mb-2">
              <strong>Minimum requirements:</strong> HSPF2 of 8.10 for ductless,
              7.50 for ducted. Must use a Trade Ally contractor.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Ground-source heat pumps:</strong> Energy Trust&apos;s
              January 2026 residential incentive sheet lists only air-source
              systems — no geothermal rebates are offered. See HP3 or the
              upcoming HEAR program for potential geothermal coverage.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 text-sm">
            <p className="text-gray-500">Sources:</p>
            <a
              href="https://www.energytrust.org/residential/incentives/furnace-and-heat-pump"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              Energy Trust — Heat Pump Incentives ↗
            </a>
            <span className="text-gray-300">|</span>
            <a
              href="https://www.energytrust.org/wp-content/uploads/2016/12/HES_PI0320I.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              January 2026 Incentive Sheet (PDF) ↗
            </a>
          </div>
        </div>
      </section>

      {/* ODOE Programs */}
      <section className="py-10 border-t border-gray-100">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Oregon Department of Energy (ODOE) Programs
          </h2>

          {/* HP3 */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Heat Pump Purchase Program (HP3) — Up to $2,000
            </h3>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
              <p className="font-semibold text-amber-700 mb-2">
                ⚠️ Owner-Occupied Funding Fully Reserved
              </p>
              <p className="text-gray-700 text-sm">
                Round 1 and Round 2 funding for owner-occupied homes is fully
                reserved as of early 2026. ODOE released $12 million in
                additional Round 2 funding in November 2025, but it was quickly
                exhausted. Page last reviewed: {formattedDate}.
              </p>
            </div>
            <p className="text-gray-600 mb-3">
              HP3 provides up to <strong>$2,000 per residence</strong> for heat
              pump installations, funded by a $24 million EPA grant. It covers
              both air-source and ground-source systems.
            </p>
            <p className="text-gray-600 mb-3">
              <strong>Still available:</strong> Rental property funding
              ($6,494,850 remaining) and new construction funding ($6,822,000
              remaining) as of February 27, 2026.
            </p>
            <p className="text-gray-600 mb-3">
              <strong>Stacking:</strong> HP3 can stack with Energy Trust
              rebates. HP3 <strong>cannot</strong> stack with federal HOMES or
              HEAR programs — homeowners must choose one path.
            </p>
            <p className="text-sm text-gray-500">
              Source:{" "}
              <a
                href="https://www.oregon.gov/energy/Incentives/Pages/HP3.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 hover:underline"
              >
                ODOE — Heat Pump Purchase Program ↗
              </a>{" "}
              | Verified {lastVerified}
            </p>
          </div>

          {/* Community Heat Pump Deployment */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Community Heat Pump Deployment Program — Up to $7,000
            </h3>
            <p className="text-gray-600 mb-3">
              Provides up to <strong>$7,000</strong> for higher-efficiency heat
              pump systems plus up to $4,000 for electrical and weatherization
              upgrades, distributed through regional administrators in select
              counties. Availability varies by location.
            </p>
            <p className="text-sm text-gray-500">
              Source:{" "}
              <a
                href="https://www.oregon.gov/energy/Incentives/Pages/CHPDP.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 hover:underline"
              >
                ODOE — Community Heat Pump Deployment ↗
              </a>
            </p>
          </div>

          {/* Rental Home Program */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Rental Home Heat Pump Program
            </h3>
            <p className="text-gray-600 mb-3">
              Covers 60–80% of costs for income-qualified tenant households.
              General funding is fully reserved — only tribal member
              applications remain open.
            </p>
            <p className="text-sm text-gray-500">
              Source:{" "}
              <a
                href="https://www.oregon.gov/energy/Incentives/Pages/ORHHPP-Owners-Tenants.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 hover:underline"
              >
                ODOE — Rental Home Heat Pump Program ↗
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* HOMES/HEAR Coming */}
      <section className="py-10 border-t border-gray-100">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Federal HOMES &amp; HEAR Rebates — Expected Spring 2026
          </h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
            <p className="font-semibold text-blue-700 mb-2">
              🕐 Not Yet Available
            </p>
            <p className="text-gray-700 text-sm mb-3">
              As of {formattedDate}, ODOE states:{" "}
              <em>
                &quot;No rebates are currently available. ODOE expects that
                rebates will be available starting in spring 2026.&quot;
              </em>{" "}
              No specific launch date has been announced. Rebates are{" "}
              <strong>not retroactive</strong> — installations must occur after
              the program launches.
            </p>
            <p className="text-gray-700 text-sm">
              Oregon was awarded <strong>over $113 million</strong> (~$57M per
              program). Energy Trust of Oregon will administer rebates in PGE
              and Pacific Power service areas. Earth Advantage handles
              consumer-owned utility and Idaho Power territories.
            </p>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Planned Rollout
          </h3>
          <div className="space-y-3 mb-6">
            <div className="flex gap-3 items-start">
              <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded">
                Phase 1
              </span>
              <p className="text-gray-600 text-sm">
                <strong>Spring 2026 (anticipated):</strong> Individual home
                applications (owner and tenant-occupied)
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded">
                Phase 2
              </span>
              <p className="text-gray-600 text-sm">
                <strong>Summer 2026 (anticipated):</strong> Multi-unit and
                shared system upgrades
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded">
                Phase 3
              </span>
              <p className="text-gray-600 text-sm">
                <strong>Fall 2026 (anticipated):</strong> HEAR retail
                point-of-sale coupons at participating stores
              </p>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              All timelines are subject to change and pending U.S. DOE approval.
            </p>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            HEAR Rebate Amounts (When Live)
          </h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 pr-4 font-semibold">
                    Income Level
                  </th>
                  <th className="text-left py-3 pr-4 font-semibold">
                    Heat Pump Rebate
                  </th>
                  <th className="text-left py-3 font-semibold">Coverage</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 pr-4">≤80% AMI</td>
                  <td className="py-3 pr-4 font-semibold">Up to $8,000</td>
                  <td className="py-3">100% of costs (up to cap)</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">80–150% AMI</td>
                  <td className="py-3 pr-4 font-semibold">Up to $4,000</td>
                  <td className="py-3">50% of costs (up to cap)</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">&gt;150% AMI</td>
                  <td className="py-3 pr-4 text-gray-400">Not eligible</td>
                  <td className="py-3 text-gray-400">—</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-600 mb-4">
            $8,000 is the per-product cap for a qualifying heat pump. Actual
            reimbursement depends on income tier and total project cost. All HEAR
            measures combined are subject to a <strong>$14,000 per household</strong>{" "}
            maximum.
          </p>

          <p className="text-sm text-gray-500">
            Source:{" "}
            <a
              href="https://www.oregon.gov/energy/Incentives/Pages/home-energy-rebates.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              ODOE — Home Energy Rebate Programs ↗
            </a>{" "}
            | Verified {lastVerified}
          </p>
        </div>
      </section>

      {/* Portland Clean Energy Fund */}
      <section className="py-10 border-t border-gray-100">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Portland Clean Energy Fund (PCEF)
          </h2>
          <p className="text-gray-600 mb-4">
            Portland residents may have access to additional local support
            through PCEF-funded programs. PCEF explicitly funds gaps not covered
            by other incentive sources, making it a potential complement to
            Energy Trust and ODOE programs.
          </p>
          <p className="text-gray-600 mb-4">
            For example, the city expanded its{" "}
            <strong>Cooling Portland Program</strong> in December 2024 with an
            added $10.3 million, and the program had installed 13,169 portable
            heat pump and cooling units at that point — with the expansion
            intended to help 10,000 additional households through 2026.
          </p>
        </div>
      </section>

      {/* Stacking */}
      <section className="py-10 border-t border-gray-100">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Can Oregon Heat Pump Rebates Be Combined?
          </h2>
          <p className="text-gray-600 mb-4">
            Yes, with important restrictions. Here&apos;s what stacks and what
            doesn&apos;t:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <p className="font-bold text-green-700 mb-3">✓ Can Stack</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Energy Trust + HP3 ($1,000 + $2,000 = $3,000)</li>
                <li>
                  Energy Trust + HOMES/HEAR (expected — Energy Trust funding is
                  not federal, so stacking is anticipated. Confirm with Energy
                  Trust when programs launch.)
                </li>
                <li>Energy Trust + PCEF</li>
                <li>PCEF fills gap after other incentives</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <p className="font-bold text-red-700 mb-3">✗ Cannot Stack</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>HP3 + HOMES (choose one)</li>
                <li>HP3 + HEAR (choose one)</li>
                <li>Total incentives cannot exceed 100% of project cost</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-5">
            <p className="text-sm text-gray-600">
              <strong>Best scenario for most homeowners (when HEAR launches):</strong>{" "}
              Energy Trust rebate ($800–$1,000) + HEAR rebate ($4,000–$8,000
              depending on income). For Portland residents, PCEF may cover
              remaining costs. Confirm stacking eligibility with each program
              before relying on combined amounts.
            </p>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-10 border-t border-gray-100">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How to Apply for Oregon Heat Pump Rebates
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Energy Trust of Oregon
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                Apply online at{" "}
                <a
                  href="https://form.energytrust.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 hover:underline"
                >
                  form.energytrust.org ↗
                </a>{" "}
                within 60 days of installation. Processing takes 6–8 weeks.
                Phone: 1-866-311-1822.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                ODOE Programs (HP3, CHPDP, Rental)
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                Apply through{" "}
                <a
                  href="https://www.oregon.gov/energy/Incentives/Pages/heat-pumps.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 hover:underline"
                >
                  oregon.gov/energy ↗
                </a>
                . Use{" "}
                <a
                  href="https://incentives.oregon.gov/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 hover:underline"
                >
                  Oregon HIPPO ↗
                </a>{" "}
                to navigate all available programs in one place.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                HOMES/HEAR (When Live)
              </h3>
              <p className="text-gray-600 text-sm">
                Application details pending. Energy Trust will administer in PGE
                and Pacific Power service areas; Earth Advantage in
                consumer-owned utility and Idaho Power areas. Sign up for
                updates at{" "}
                <a
                  href="https://www.oregon.gov/energy/Incentives/Pages/home-energy-rebates.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 hover:underline"
                >
                  ODOE Home Energy Rebates page ↗
                </a>
                .
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
                to check your AMI percentage and see personalized rebate
                eligibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* No State Tax Credit */}
      <section className="py-10 border-t border-gray-100">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Oregon State Tax Credit
          </h2>
          <p className="text-gray-600">
            Oregon does not have a state tax credit for heat pumps. The
            Residential Energy Tax Credit (RETC) expired in 2017 with no
            successor. Oregon relies entirely on rebate-based incentives through
            Energy Trust, ODOE, and the upcoming federal programs.
          </p>
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
              href="/heat-pumps/states/wa"
              className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors text-sm"
            >
              Washington →
            </Link>
            <Link
              href="/heat-pumps/states/ny"
              className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors text-sm"
            >
              New York →
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
      {/* TODO: Add internal link to /heat-pumps/how-much-does-a-heat-pump-cost when that page exists */}
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
            Last updated: {formattedDate}. Information sourced from Energy Trust
            of Oregon, Oregon Department of Energy, and federal program
            documentation. Rebate amounts and availability may change — verify
            with program administrators before making purchasing decisions.
          </p>
        </div>
      </section>
    </>
  );
}
