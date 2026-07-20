// src/app/heat-pumps/utilities/tva-energyright/page.tsx
// Reconciled 2026-07-20 against shipped xcel-energy page + utilities.ts:
// no StatusCard component (plain markup is the shipped convention),
// slug is "tva-energyright" per the UtilitySlug union, territory table is
// data-driven from utility.territories with the LIVE_STATE_PAGES gate.

import Link from "next/link";
import type { Metadata } from "next";
import { utilities } from "@/data/utilities";
import { formatDate } from "@/data/incentives";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "TVA Heat Pump Rebates 2026: $500–$1,500 + $0-Down Financing (TN, AL, GA, KY, MS, NC, VA) | Home Energy Basics",
  description:
    "TVA EnergyRight pays $500–$800 for ducted heat pumps, $800 for mini splits and $1,500 for geothermal across all seven Valley states. Federal credits ended.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/utilities/tva-energyright",
  },
  openGraph: {
    title: "TVA Heat Pump Rebates 2026",
    description:
      "$500–$1,500 heat pump rebates plus $0-Down Financing and Home Uplift — the complete guide to TVA EnergyRight incentives after federal credits expired.",
    url: "https://homeenergybasics.com/heat-pumps/utilities/tva-energyright",
    type: "article",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What heat pump rebates does TVA EnergyRight offer in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TVA EnergyRight and your local power company pay $800 for a ducted air source or dual fuel heat pump at 17 SEER2 or higher, $500 at 15 to 16.99 SEER2, $800 for a ductless mini split at 17 SEER2 or higher, and $1,500 for a geothermal heat pump. Central air conditioning rebates run up to $400, HVAC tune-ups pay $50, and duct sealing, repair, insulation, or replacement pays $300. All work must be done by a Quality Contractor Network member.",
      },
    },
    {
      "@type": "Question",
      name: "Do TVA rebates work the same in all seven states?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The rebate menu itself is region-wide — the same dollar amounts apply whether your local power company is in Tennessee, Alabama, Georgia, Kentucky, Mississippi, North Carolina, or Virginia. What varies by local power company is everything around the rebates: on-bill financing is not offered by all local power companies, Home Uplift requires a participating local power company, and some local power companies layer their own additional rebates on top of the TVA menu.",
      },
    },
    {
      "@type": "Question",
      name: "Can I stack TVA rebates with state HEAR rebates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In principle yes — TVA EnergyRight rebates are utility-side incentives and IRA Home Energy Rebates are state-administered, so they operate on separate tracks. In practice, most Valley states had not launched HEAR as of July 2026: Kentucky’s state energy office, for example, warns that its rebates are not yet available. Check your state’s page for current HEAR status before counting on a stack. Federal 25C and 25D tax credits expired December 31, 2025 and cannot be part of any 2026 stack.",
      },
    },
    {
      "@type": "Question",
      name: "Do I have to use a specific contractor to get a TVA rebate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All TVA EnergyRight rebate-eligible upgrades must be completed by a member of the Quality Contractor Network and meet TVA standards effective on the installation date. The contractor submits the rebate for you after the job; TVA then emails you a redemption code to claim payment.",
      },
    },
    {
      "@type": "Question",
      name: "What is Home Uplift?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Home Uplift is TVA’s income-qualified whole-home program. It provides an average of $10,000 in free home energy upgrades — including new or repaired HVAC — to income-eligible customers of participating local power companies. Eligibility requires a single-family or manufactured home (built after 1976 on a permanent foundation) and no similar TVA-funded upgrades at the residence in the last 20 years.",
      },
    },
    {
      "@type": "Question",
      name: "Does TVA offer heat pump financing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Participating local power companies offer $0-down, fixed-rate loans of $2,500 to $20,000 for heat pumps, mini splits, geothermal systems, central AC, and (when paired with an HVAC upgrade) insulation, air sealing, and duct work. The minimum credit score is a 625 VantageScore, checked with a soft pull. Note that this is a secured loan — a UCC-1 fixture filing is recorded against the installed equipment until the loan is paid off. On-bill financing is not offered by all local power companies.",
      },
    },
  ],
};

const STATE_NAMES: Record<string, string> = {
  TN: "Tennessee",
  AL: "Alabama",
  GA: "Georgia",
  KY: "Kentucky",
  MS: "Mississippi",
  NC: "North Carolina",
  VA: "Virginia",
};

// State pages that exist today; non-members render as plain text.
// OPERATOR: confirm against `ls src\app\heat-pumps\states` and add any of
// AL / GA / MS / VA that have live pages before push.
const LIVE_STATE_PAGES = new Set(["TN", "KY", "NC"]);

export default function TvaEnergyRightPage() {
  const utility = utilities["tva-energyright"];

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
            {" "}/ Utilities / TVA
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            TVA Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The Tennessee Valley Authority is the nation&apos;s largest public
            power provider — a federal wholesale power producer, not your
            retail utility. You buy electricity from one of 153 local power
            companies that distribute TVA power across seven states, and TVA
            EnergyRight rebates arrive through that local power company. The
            menu pays <strong>$500–$800</strong> for ducted heat pumps,{" "}
            <strong>$800</strong> for mini splits, and{" "}
            <strong>$1,500</strong> for geothermal, with $0-down financing up
            to <strong>$20,000</strong> and free income-qualified upgrades
            averaging <strong>$10,000</strong> through Home Uplift. This guide
            covers all major TVA heat pump incentives available in 2026,
            including EnergyRight rebates, on-bill financing, and Home Uplift.
            Here&apos;s what&apos;s actually available.
          </p>
          <p className="text-sm text-gray-500">
            Last verified: {formatDate(utility.lastVerified)}
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Rates and program availability may change after this date.
          </p>
        </div>
      </section>

      {/* 2. STATUS */}
      <section className="py-8">
        <div className="container-narrow">
          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <p className="font-semibold text-green-800 mb-1">
              ✓ Open — region-wide rebate menu active
            </p>
            <p className="text-sm text-green-900">
              TVA EnergyRight rebates are available across the seven-state
              Tennessee Valley region through Quality Contractor Network
              installers. Financing and Home Uplift availability depend on
              your local power company.
            </p>
          </div>
        </div>
      </section>

      {/* 3. SHORT VERSION */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            The Short Version
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">
                ✓ $500–$800 ducted heat pump rebate
              </p>
              <p className="text-sm text-green-900">
                $800 at 17 SEER2 or higher, $500 at 15–16.99 SEER2, for
                air source or dual fuel systems installed by a Quality
                Contractor Network member. Same amounts in all seven states.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">
                ✓ $1,500 geothermal / $800 mini split
              </p>
              <p className="text-sm text-green-900">
                Geothermal heat pumps earn a flat $1,500. Ductless mini splits
                at 17 SEER2 or higher earn $800. Duct sealing adds $300.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">
                ✓ Up to ~$1,800 in stacked rebates — or ~$10,000 free
              </p>
              <p className="text-sm text-green-900">
                A geothermal install plus duct work reaches ~$1,800 from the
                menu. Income-eligible households at participating local power
                companies can instead receive an average of $10,000 in free
                upgrades through Home Uplift.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">
                ✗ Federal tax credits expired
              </p>
              <p className="text-sm text-red-900">
                Section 25C and Section 25D ended December 31, 2025. No
                federal heat pump tax credit exists for 2026 installations.
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 md:col-span-2">
              <p className="font-semibold text-amber-800 mb-1">
                ⚠ Your local power company decides the extras
              </p>
              <p className="text-sm text-amber-900">
                The rebate menu is identical region-wide, but on-bill
                financing is not offered by all local power companies, Home
                Uplift requires a participating local power company, and
                state HEAR rebates vary by state — most Valley states had
                not launched them as of July 2026.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICE TERRITORY */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Where TVA Heat Pump Rebates Apply
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            TVA&apos;s 153 local power companies serve customers in seven
            states; the TVA EnergyRight residential rebate menu is available
            in all seven. TVA&apos;s service area covers almost all of
            Tennessee and parts of the other six states — if your
            electric bill comes from a municipal utility or electric
            cooperative that buys TVA power, these rebates apply to you.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">State</th>
                  <th className="text-left p-3 font-semibold">Heat pump rebates?</th>
                  <th className="text-left p-3 font-semibold">What&apos;s there</th>
                </tr>
              </thead>
              <tbody>
                {utility.territories.map((t) => (
                  <tr
                    key={t.state}
                    className={t.hasHeatPumpProgram ? "border-b bg-green-50" : "border-b"}
                  >
                    <td className="p-3">
                      {LIVE_STATE_PAGES.has(t.state) ? (
                        <Link
                          href={`/heat-pumps/states/${t.state.toLowerCase()}`}
                          className="text-brand-600 hover:underline"
                        >
                          {STATE_NAMES[t.state]}
                        </Link>
                      ) : (
                        <span className="text-gray-500">{STATE_NAMES[t.state]}</span>
                      )}
                    </td>
                    <td className={t.hasHeatPumpProgram ? "p-3 font-semibold" : "p-3 text-gray-500"}>
                      {t.hasHeatPumpProgram ? "Yes — full menu" : "No"}
                    </td>
                    <td className="p-3">{t.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="font-semibold text-blue-800 mb-1">
              You&apos;re not actually a TVA customer
            </p>
            <p className="text-sm text-blue-900">
              TVA sells power wholesale; your bill comes from a municipal
              utility or cooperative. That structure is why the rebate
              amounts are identical from Memphis to southwest Virginia, while
              financing, Home Uplift participation, and any bonus local
              rebates differ from one local power company to the next. Some
              local power companies pay more than the TVA baseline on certain
              measures — always check your own local power company&apos;s
              program page.
            </p>
          </div>
        </div>
      </section>

      {/* 5. REBATE DETAILS */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            The 2026 Rebate Menu
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Unlike multi-state investor-owned utilities that run a different
            program in every state, TVA EnergyRight publishes one region-wide
            residential menu. These amounts, verified directly at
            energyright.com in July 2026, apply through every participating
            local power company:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Upgrade</th>
                  <th className="text-left p-3 font-semibold">Requirement</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Heat pump (air source or dual fuel)</td>
                  <td className="p-3">17 SEER2 or higher</td>
                  <td className="p-3 font-semibold">$800</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump (air source or dual fuel)</td>
                  <td className="p-3">15–16.99 SEER2</td>
                  <td className="p-3 font-semibold">$500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ductless mini split</td>
                  <td className="p-3">17 SEER2 or higher, replaces existing unit</td>
                  <td className="p-3 font-semibold">$800</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Geothermal heat pump</td>
                  <td className="p-3">Qualifying system</td>
                  <td className="p-3 font-semibold">$1,500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Central air conditioning</td>
                  <td className="p-3">15 SEER2 or higher, replaces existing AC</td>
                  <td className="p-3 font-semibold">Up to $400</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">HVAC tune-up (existing heat pump or central AC)</td>
                  <td className="p-3">—</td>
                  <td className="p-3 font-semibold">$50</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Duct sealing, repair, insulation, or replacement</td>
                  <td className="p-3">Complete duct system brought to TVA standards</td>
                  <td className="p-3 font-semibold">$300</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            TVA also offers air sealing and home insulation rebates; the
            program page does not publish flat region-wide amounts for those
            measures, so confirm them with your Quality Contractor Network
            contractor. Heat pump water heaters are notable by their absence:
            the current TVA EnergyRight residential menu lists no HPWH
            rebate, though HPWHs are eligible for TVA financing and some
            local power companies offer their own HPWH rebates.
          </p>
        </div>
      </section>

      {/* 6. EQUIPMENT REQUIREMENTS */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Equipment and Installation Requirements
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The efficiency bar is SEER2-based: <strong>17 SEER2</strong> for
            the top ducted tier and for mini splits, <strong>15
            SEER2</strong> for the lower ducted tier and central AC. All
            rebate-eligible upgrades must be completed by a member of the
            Quality Contractor Network and meet TVA standards effective on
            the installation date — a self-installed or
            non-network-installed system earns nothing. For the $300 duct
            rebate, the complete duct system must be brought to TVA
            standards.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="font-semibold text-amber-800 mb-1">
              ⚠ The most common mistake: fuel switching
            </p>
            <p className="text-sm text-amber-900">
              Local implementations of the program (Chattanooga&apos;s EPB,
              for example) state that TVA EnergyRight rebates require
              replacing an existing electric HVAC system with a qualifying
              electric system — swapping a gas furnace for a heat pump
              does not qualify. If you heat with gas, confirm eligibility
              with your local power company before signing a contract, and
              check whether your state&apos;s HEAR program (which does cover
              fuel switching) has launched.
            </p>
          </div>
        </div>
      </section>

      {/* 7. FEDERAL EXPIRED (short version per U4) */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Federal Tax Credits Are Gone
          </h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <p className="text-red-900 leading-relaxed">
              <strong>Section 25C</strong> (up to $2,000 for heat pumps) and{" "}
              <strong>Section 25D</strong> (30% for geothermal) both expired
              for property placed in service after{" "}
              <strong>December 31, 2025</strong>. TVA&apos;s own program pages
              still reference pairing rebates with federal credits —
              that guidance predates the expiration. For 2026 installations,
              the TVA menu, your local power company&apos;s extras, and any
              launched state HEAR program are the whole stack.{" "}
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                Read the full federal expiration explainer
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* 8. FINANCING & HOME UPLIFT */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            $0-Down Financing and Home Uplift
          </h2>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            On-bill financing
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Participating local power companies offer <strong>$0-down,
            fixed-rate loans of $2,500–$20,000</strong> for heat pumps,
            mini splits, geothermal systems, central AC, and — when
            paired with an HVAC upgrade — insulation, air sealing, and
            duct work. Heat pump water heaters are also financeable. The
            minimum credit requirement is a <strong>625 VantageScore</strong>,
            checked with a soft pull. Two things to know before signing: this
            is a secured loan (a UCC-1 fixture filing is recorded against the
            installed equipment until payoff), and on-bill financing is not
            offered by all local power companies.
          </p>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Home Uplift
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Home Uplift provides an average of <strong>~$10,000</strong> in
            free home energy upgrades — including new or repaired HVAC
            — to income-eligible customers of participating local power
            companies. Requirements: a single-family or manufactured home
            (built after 1976 on a permanent foundation) and no similar
            TVA-funded upgrades at the residence in the last 20 years. TVA
            reports participants save about $500 per year. Apply online or at
            1-888-986-7262.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <p className="font-semibold text-green-800 mb-1">
              ✓ Best candidates for TVA incentives
            </p>
            <p className="text-sm text-green-900">
              Homeowners replacing an aging electric heat pump or AC with a
              17 SEER2 system; geothermal shoppers (the $1,500 rebate is the
              menu&apos;s largest); households that qualify for Home Uplift,
              where the value dwarfs every rebate on this page; and anyone
              whose local power company stacks its own rebate on the TVA
              baseline.
            </p>
          </div>
        </div>
      </section>

      {/* 9. STACKING */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How the Incentives Stack
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            TVA menu rebates stack with each other on separate measures (a
            heat pump rebate plus a duct rebate on the same job, for
            example). State HEAR rebates would stack on top where launched,
            but most Valley states had not opened HEAR applications as of
            July 2026 — the scenarios below use only the verified TVA
            menu. Check your state&apos;s page for the current HEAR layer.
          </p>
          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">
                Standard replacement — ducted air source heat pump
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Heat pump rebate (17 SEER2 or higher): $800</li>
                <li>Duct sealing brought to TVA standards: $300</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">
                Realistic maximum: ~$1,100
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">
                Maximum menu — geothermal system
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Geothermal heat pump rebate: $1,500</li>
                <li>Duct sealing brought to TVA standards: $300</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">
                Realistic maximum: ~$1,800
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">
                Income-eligible — Home Uplift (best case)
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Free whole-home upgrades, HVAC included: ~$10,000 average</li>
                <li>Requires a participating local power company and income qualification</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">
                Realistic value: ~$10,000 at $0 cost
              </p>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg p-5">
            <p className="font-semibold text-gray-900 mb-1">
              What you&apos;ll actually pay
            </p>
            <p className="text-sm text-gray-700">
              TVA rebates offset a modest slice of installed cost: expect{" "}
              <strong>$500 to $1,100 off</strong> a ducted heat pump
              installation and <strong>up to $1,800 off</strong> a geothermal
              project — the remainder is out of pocket (or financed at
              $0 down) unless your state&apos;s HEAR program has launched or
              you qualify for Home Uplift.
            </p>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            There is no TVA-level income-tiered rebate adder, no state tax
            credit tied to TVA, and no point-of-sale discount — rebates
            are paid after installation via emailed redemption code.
          </p>
        </div>
      </section>

      {/* 10. HOW TO APPLY */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How to Claim a TVA Rebate
          </h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  Find a Quality Contractor Network member
                </p>
                <p className="text-sm text-gray-700">
                  Use the QCN search tool on energyright.com — only
                  network contractors can trigger a rebate. Get a Manual J
                  load calculation so the system is sized correctly.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  Install to TVA standards
                </p>
                <p className="text-sm text-gray-700">
                  The system must meet TVA standards effective on the
                  installation date, including the SEER2 tier you&apos;re
                  claiming. Your contractor submits the rebate to TVA
                  EnergyRight after the job is complete.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  Claim your redemption code
                </p>
                <p className="text-sm text-gray-700">
                  Watch for an email from TVA EnergyRight with your
                  redemption code, then claim the rebate through the online
                  portal.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  Check your local power company for extras
                </p>
                <p className="text-sm text-gray-700">
                  Before the install, ask your local power company about
                  on-bill financing, Home Uplift eligibility, and any local
                  rebates that stack on the TVA amounts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. WHAT TO WATCH */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What to Watch
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">
                State HEAR launches across the Valley
              </p>
              <p className="text-sm text-gray-600 mt-1">
                IRA Home Energy Rebates are state-administered and would
                stack on top of TVA rebates, but as of July 2026 most Valley
                states had not launched — Kentucky&apos;s energy office,
                for one, explicitly warns its rebates are not yet available.
                Each launch changes the stacking math on this page; IRA
                funding, once launched, runs until each state&apos;s
                allocation is spent.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">
                Menu updates at the fiscal-year boundary
              </p>
              <p className="text-sm text-gray-600 mt-1">
                TVA&apos;s fiscal year begins October 1. The heat pump rebate
                page was last updated in mid-July 2026; watch for amount or
                tier changes around the fiscal turnover.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">
                Financing terms drift by local power company
              </p>
              <p className="text-sm text-gray-600 mt-1">
                The $2,500–$20,000 limits and 625 VantageScore floor are
                region-wide, but interest rates are set with your local
                power company — confirm the current rate before
                comparing against outside lenders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 12. FAQ */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqJsonLd.mainEntity.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.name}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. SEE ALSO */}
      <section className="py-8 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-3">See also</h2>
          <ul className="space-y-2 text-sm">
            {utility.territories.map((t) =>
              LIVE_STATE_PAGES.has(t.state) ? (
                <li key={t.state}>
                  <Link
                    href={`/heat-pumps/states/${t.state.toLowerCase()}`}
                    className="text-brand-600 hover:underline"
                  >
                    {STATE_NAMES[t.state]} Heat Pump Rebates
                  </Link>
                </li>
              ) : (
                <li key={t.state} className="text-gray-500">
                  {STATE_NAMES[t.state]} Heat Pump Rebates <em>(coming soon)</em>
                </li>
              )
            )}
            <li>
              <Link href="/heat-pumps/utilities/duke-energy" className="text-brand-600 hover:underline">
                Duke Energy Heat Pump Rebates
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/utilities/xcel-energy" className="text-brand-600 hover:underline">
                Xcel Energy Heat Pump Rebates
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
            <li>
              <Link href="/battery" className="text-brand-600 hover:underline">
                Are Home Batteries Worth It in 2026?
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* 14. SOURCES */}
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

      {/* 15. DISCLAIMER */}
      <section className="py-8">
        <div className="container-narrow">
          <div className="bg-gray-100 rounded-lg p-6">
            <p className="text-gray-500 text-xs leading-relaxed">
              <strong>Disclaimer:</strong> This page covers the main TVA
              EnergyRight heat pump rebates, financing, and Home Uplift
              programs available to homeowners in Tennessee, Alabama,
              Georgia, Kentucky, Mississippi, North Carolina, and Virginia in
              2026. It does not calculate savings, guarantee eligibility, or
              represent any incentive program. TVA rebates are delivered
              through 153 independent local power companies whose
              participation in financing, Home Uplift, and supplemental
              rebates varies. We verify status regularly but programs can
              change without notice. Always confirm current amounts and
              eligibility with TVA EnergyRight, your local power company, and
              your contractor before making decisions.
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
