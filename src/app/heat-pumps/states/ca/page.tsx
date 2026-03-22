import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";

export const metadata: Metadata = {
  title:
    "California Heat Pump Rebates 2026: What's Actually Available (and What's Not Right Now) | Home Energy Basics",
  description:
    "Most California statewide heat pump rebates are fully reserved. Here's what utility rebates are still available, what's coming with HOMES and HEEHRA Phase II, and how to navigate the current landscape.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/ca",
  },
  openGraph: {
    title: "California Heat Pump Rebates 2026",
    description:
      "TECH and HEEHRA are exhausted. SMUD offers up to $4,000, LADWP up to $2,500/ton. HOMES and HEEHRA Phase II are coming. Here's the full picture.",
    url: "https://homeenergybasics.com/heat-pumps/states/ca",
    type: "article",
  },
};

export default function CaliforniaPage() {
  const caIncentive = incentives.CA;
  const formattedDate = formatDate(caIncentive.lastVerified);
  const lastVerified = "March 22, 2026";

  const faqData = [
    {
      question:
        "Why are California heat pump rebates so hard to get right now?",
      answer:
        "California's statewide programs were massively oversubscribed. TECH Clean California's single-family HVAC incentives were fully reserved by January 2025. HEEHRA single-family rebates were fully reserved statewide by February 24, 2026. Federal tax credits (25C/25D) expired December 31, 2025. What remains are utility-specific programs, which vary significantly by service area.",
    },
    {
      question: "Are heat pump rebates coming back in California?",
      answer:
        "Yes. Two major programs have not yet launched: HOMES (Pay for Performance), funded with approximately $291 million from the IRA, and HEEHRA Phase II, funded with $152 million. Both will be administered by the California Energy Commission through TECH Clean California. Launch dates have not been announced. These programs are not retroactive — installations completed before a program launches will not qualify.",
    },
    {
      question:
        "Which California utilities offer the best heat pump rebates right now?",
      answer:
        "SMUD (Sacramento) boosted rebates in February 2026 — up to $3,000 for gas-to-electric HVAC and $4,000 for gas-to-electric water heater conversions. LADWP (Los Angeles) offers up to $2,500 per ton for heat pump HVAC and $2,500 for heat pump water heaters — a 3-ton system can yield up to $7,500. PG&E, SCE, and SDG&E primarily serve as administrators for statewide programs rather than offering standalone heat pump rebates. Check The Switch Is On incentive finder for your specific utility.",
    },
    {
      question: "Should I wait for HOMES or install my heat pump now?",
      answer:
        "It depends on your utility. If your utility offers a strong rebate now (like SMUD or LADWP), there's no reason to wait — utility rebates are typically stackable with future state and federal programs. If you're in a service area with no current utility rebate, the math changes. HOMES and HEEHRA Phase II have no announced launch date, so waiting could mean months or longer. Programs are not retroactive.",
    },
    {
      question:
        "Can I stack California heat pump rebates from different programs?",
      answer:
        "When multiple programs are active, stacking is generally allowed. HEEHRA rebates were explicitly stackable with utility incentives and state programs. Future HOMES rebates are also expected to be stackable. However, most statewide programs are currently exhausted, so stacking opportunities are limited to utility rebates plus any future programs once they launch.",
    },
    {
      question:
        "What refrigerant requirements apply to California heat pump rebates?",
      answer:
        "As of January 1, 2026, heat pump systems must use refrigerants with a Global Warming Potential (GWP) of 700 or lower to qualify for HEEHRA and most California programs. R-410A (GWP 2,000+) is no longer eligible. Systems must use next-generation refrigerants such as R-32 or R-454B. This applies to all current and future California rebate programs per EPA Technology Transition Rule requirements.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-energy-50 via-white to-gray-50 py-12 md:py-16">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-brand-600 font-medium mb-2">
              <Link href="/" className="hover:underline">
                Home
              </Link>{" "}
              /{" "}
              <Link href="/heat-pumps" className="hover:underline">
                Heat Pumps
              </Link>{" "}
              / California
            </p>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              California Heat Pump Rebates 2026: What&apos;s Actually Available (and What&apos;s Not)
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              California&apos;s heat pump rebate landscape changed dramatically
              in 2025–2026. Most statewide programs — including TECH Clean
              California and HEEHRA for single-family homes — are now fully
              reserved. Federal tax credits also ended in 2025. But rebates
              aren&apos;t gone. California homeowners can still access utility
              incentives, select state programs, and upcoming federal rebates.
              Here&apos;s what&apos;s actually available — and what&apos;s not.
              Most homeowners now get $0–$4,000 depending on their utility —
              not the $8,000+ many sites still advertise.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: {lastVerified}
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Rates and program availability may change after this date.
            </p>
          </div>
        </div>
      </section>

      {/* Status Card */}
      <section className="py-12">
        <div className="container-narrow">
          <StatusCard incentive={caIncentive} />
        </div>
      </section>

      {/* At-a-Glance Summary */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            At a Glance: California Heat Pump Incentives
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-red-200">
              <p className="text-red-600 font-bold text-lg mb-2">
                ❌ Federal Credits
              </p>
              <p className="text-gray-700 text-sm">
                The IRS states that Section 25C and Section 25D credits apply
                only to qualifying property placed in service through December
                31, 2025. No federal tax credit is available for heat pumps
                installed in 2026.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-yellow-200">
              <p className="text-yellow-700 font-bold text-lg mb-2">
                ⚠️ Statewide Programs
              </p>
              <p className="text-gray-700 text-sm">
                TECH Clean California single-family incentives: fully reserved.
                HEEHRA single-family rebates: fully reserved statewide as of
                February 24, 2026. Multifamily HEEHRA: some funding may remain
                in select regions.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-green-200">
              <p className="text-green-700 font-bold text-lg mb-2">
                ✅ Still Available
              </p>
              <p className="text-gray-700 text-sm">
                Utility rebates (SMUD up to $3,000–$4,000, LADWP up to
                $2,500/ton, others vary). California Energy Smart Homes
                ($4,250+). GoGreen Financing. HOMES and HEEHRA Phase II coming
                (not yet launched).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Rebates Are Limited */}
      <section className="py-12">
        <div className="container-narrow">
          <div className="prose prose-lg max-w-none">
            <h2>Why California Heat Pump Rebates Are Limited Right Now</h2>
            <p>
              California&apos;s heat pump incentive landscape is more complex
              than any other state. Multiple overlapping programs from different
              agencies, each with their own funding cycles and eligibility rules,
              created a system that was powerful when fully funded — but
              difficult to navigate once programs began running out of money.
            </p>
            <p>Here&apos;s what happened:</p>
            <p>
              <strong>TECH Clean California</strong> — the $120 million
              statewide initiative — fully reserved its single-family HVAC
              incentives by January 2025 and heat pump water heater incentives by
              November 2025. No new reservations are being accepted.
            </p>
            <p>
              <strong>HEEHRA (Home Electrification and Appliance Rebates)</strong>{" "}
              — the IRA-funded program administered through TECH — fully
              reserved its single-family budget statewide by February 24, 2026.
              Central and Southern California were exhausted by January 7, 2026.
              Northern California followed weeks later. All waitlisted projects
              require an approved reservation before installation to be eligible.
              No new income verifications are being accepted.
            </p>
            <p>
              <strong>Federal tax credits</strong> — Section 25C (up to $2,000
              for heat pumps) and Section 25D (30% for geothermal) both expired
              December 31, 2025 under the One Big Beautiful Bill Act.
            </p>
            <p>
              The result: most California homeowners looking for a heat pump
              rebate today will need to look to their local utility or wait for
              the next wave of state and federal programs.
            </p>
          </div>
        </div>
      </section>

      {/* What You Can Get Right Now */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <div className="prose prose-lg max-w-none">
            <h2>What Heat Pump Rebates Are Actually Available in California Right Now</h2>
            <p>
              Despite the statewide programs being exhausted, several paths to
              incentives remain. Your utility service area is now the most
              important factor in determining what&apos;s available.
            </p>

            <h3>Utility Rebates (Primary Path)</h3>
            <p>
              California has dozens of utilities, each running their own rebate
              programs. Availability and amounts vary significantly.
            </p>

            <div className="not-prose my-8">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <p className="text-green-800 font-bold text-lg mb-3">
                  🔥 SMUD (Sacramento) — Boosted February 2026
                </p>
                <p className="text-gray-700 mb-4">
                  SMUD increased its heat pump rebates in February 2026 to offset
                  the loss of federal and state incentives:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <strong>Gas-to-electric heat pump HVAC:</strong> Up to $3,000
                  </li>
                  <li>
                    <strong>Gas-to-electric heat pump water heater:</strong> Up to
                    $4,000
                  </li>
                  <li>
                    <strong>Electric-to-electric upgrade:</strong> $1,000
                  </li>
                </ul>
                <p className="text-sm text-gray-500 mt-3">
                  Must use a participating contractor in the SMUD Contractor
                  Network. Qualifying two-stage or variable-stage systems
                  required. Visit{" "}
                  <a
                    href="https://www.smud.org/Rebates-and-Savings-Tips/Rebates-for-My-Home/Heating-and-Cooling-Rebates"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-600 hover:underline"
                  >
                    smud.org/GoElectric
                  </a>
                  .
                </p>
              </div>
            </div>

            <p>
              <strong>Other utilities:</strong> PG&amp;E, SCE, SDG&amp;E, and
              LADWP each have their own programs. PG&amp;E primarily administers
              statewide programs (TECH, SGIP) rather than offering standalone
              heat pump rebates. Municipal utilities like LADWP and Silicon
              Valley Clean Energy may have separate offerings. The best way to
              check your specific utility is the{" "}
              <a
                href="https://incentives.switchison.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Switch Is On incentive finder
              </a>
              .
            </p>

            <div className="not-prose my-8">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <p className="text-green-800 font-bold text-lg mb-3">
                  🔥 LADWP (Los Angeles) — Boosted November 2025
                </p>
                <p className="text-gray-700 mb-4">
                  LADWP significantly increased rebates effective November 1,
                  2025, making it one of the richest utility programs in
                  California:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <strong>Heat pump HVAC:</strong> Up to $2,500/ton (a
                    typical 3-ton system = up to $7,500)
                  </li>
                  <li>
                    <strong>Heat pump water heater:</strong> Up to $2,500/unit
                  </li>
                </ul>
                <p className="text-sm text-gray-500 mt-3">
                  Universal — no income qualification. Building permit required.
                  Apply within 12 months of installation. Visit{" "}
                  <a
                    href="https://www.ladwp.com/residential-services/assistance-programs/consumer-rebate-program"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-600 hover:underline"
                  >
                    ladwp.com
                  </a>
                  .
                </p>
              </div>
            </div>

            <h3>California Energy Smart Homes Program</h3>
            <p>
              For homeowners going fully electric (capping their gas meter),
              the Energy Smart Homes program provides at least $4,250 in
              incentives, with bonuses for variable-capacity heat pumps, thermal
              energy storage, and load management that can push totals above
              $12,000. This program is confirmed through 2027 with no reductions
              to incentive levels expected. It applies to existing home
              alterations, not just new construction.
            </p>

            <h3>GoGreen Financing</h3>
            <p>
              California&apos;s GoGreen Financing program was expanded with $30
              million in new state funding. It provides low-interest loans for
              energy efficiency and electrification upgrades, including heat
              pumps. This is a financing option, not a rebate — but it can help
              bridge the gap when upfront incentives are limited.
            </p>

            <h3>PG&amp;E Energy Savings Assistance Program</h3>
            <p>
              Income-eligible homeowners in PG&amp;E territory may qualify for
              no-cost heat pump water heater and furnace upgrades through the
              Energy Savings Assistance program. Participants must live in a home
              at least five years old and meet income guidelines. The program
              runs through May 31, 2026.
            </p>
          </div>
        </div>
      </section>

      {/* Who Qualifies */}
      <section className="py-12">
        <div className="container-narrow">
          <div className="prose prose-lg max-w-none">
            <h2>Who Qualifies (It&apos;s Complicated in California)</h2>
            <p>
              Eligibility in California depends on more factors than most states:
            </p>

            <div className="not-prose my-8 grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <p className="font-bold text-gray-900 mb-3">
                  Your Utility Matters Most
                </p>
                <p className="text-gray-600 text-sm">
                  California has over 60 electric utilities. The rebates
                  available to you depend almost entirely on which utility serves
                  your home. A homeowner in Sacramento (SMUD) has access to
                  $3,000–$4,000 in rebates right now. A homeowner in Los Angeles
                  (LADWP) can get up to $2,500/ton. A homeowner in San
                  Francisco (PG&amp;E) may have none.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <p className="font-bold text-gray-900 mb-3">
                  Single-Family vs. Multifamily
                </p>
                <p className="text-gray-600 text-sm">
                  HEEHRA single-family funding is exhausted statewide. However,
                  HEEHRA multifamily rebates may still have funding in some
                  regions — up to $14,000 per unit for low-income properties.
                  Check the TECH Clean California budget report for current
                  multifamily availability.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <p className="font-bold text-gray-900 mb-3">
                  Income-Based Programs
                </p>
                <p className="text-gray-600 text-sm">
                  HEEHRA (when funded) provides up to $8,000 for households
                  below 80% AMI and $4,000 for 80–150% AMI. PG&amp;E&apos;s
                  Energy Savings Assistance provides no-cost upgrades for
                  income-eligible homeowners. Community Action Agencies
                  administer additional weatherization and heating replacement
                  programs.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <p className="font-bold text-gray-900 mb-3">
                  Refrigerant Requirements (New in 2026)
                </p>
                <p className="text-gray-600 text-sm">
                  As of January 1, 2026, all heat pump systems must use
                  refrigerants with a GWP of 700 or lower per EPA rules.
                  R-410A is no longer eligible. Systems must use R-32, R-454B,
                  or similar next-generation refrigerants. This applies to all
                  California rebate programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Programs */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <div className="prose prose-lg max-w-none">
            <h2>
              Upcoming California Heat Pump Rebates (2026–2027)
            </h2>
            <p>
              Two major programs are funded but have not yet launched. These
              represent the next wave of California heat pump incentives.
            </p>

            <div className="not-prose my-8 space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <p className="text-blue-800 font-bold text-lg mb-2">
                  🕐 HOMES (Pay for Performance) — ~$291 Million
                </p>
                <p className="text-gray-700 mb-3">
                  The HOMES program provides rebates based on measured whole-home
                  energy savings. California&apos;s DOE application was approved
                  January 2025. The program will be split: 60% to the Equitable
                  Building Decarbonization Direct Install Program and 40% to a
                  new Pay for Performance program available to all income levels.
                </p>
                <p className="text-sm text-gray-500">
                  Status: Not yet launched. No announced start date. Rebates are
                  not retroactive.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <p className="text-blue-800 font-bold text-lg mb-2">
                  🕐 HEEHRA Phase II — $152 Million
                </p>
                <p className="text-gray-700 mb-3">
                  Phase II will expand on Phase I with additional funding for
                  income-eligible households. It is expected to cover heat pump
                  HVAC, heat pump water heaters, cooktops, dryers, and other
                  electric appliances. Phase II will be administered by the CEC
                  through TECH Clean California.
                </p>
                <p className="text-sm text-gray-500">
                  Status: Not yet launched. Design phase in progress at CEC.
                  Rebates will not be retroactive.
                </p>
              </div>
            </div>

            <div className="not-prose my-8 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <p className="font-bold text-yellow-800 mb-2">
                ⚠️ Important: Not Retroactive
              </p>
              <p className="text-gray-700 text-sm">
                Neither HOMES nor HEEHRA Phase II will apply retroactively.
                If you install a heat pump before these programs launch, you
                will not be eligible for their rebates. If you are counting on
                these programs, wait until they are officially accepting
                applications before beginning your project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Realistic Savings */}
      <section className="py-12">
        <div className="container-narrow">
          <div className="prose prose-lg max-w-none">
            <h2>Realistic Savings for California Homeowners</h2>

            <div className="not-prose my-8 grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <p className="font-bold text-gray-900 mb-3">
                  Installing Now (March 2026)
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>
                    <strong>SMUD customers:</strong> $1,000–$4,000 depending on
                    system type
                  </li>
                  <li>
                    <strong>LADWP customers:</strong> Up to $2,500/ton HVAC +
                    $2,500 HPWH
                  </li>
                  <li>
                    <strong>Other utility customers:</strong> $0–$1,500 depending
                    on your utility
                  </li>
                  <li>
                    <strong>Going fully electric:</strong> $4,250+ via Energy
                    Smart Homes
                  </li>
                  <li>
                    <strong>Federal tax credits:</strong> $0
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <p className="font-bold text-gray-900 mb-3">
                  After HOMES / HEEHRA Phase II Launch
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>
                    <strong>Low-income (&lt;80% AMI):</strong> Up to $8,000 via
                    HEEHRA + utility rebates
                  </li>
                  <li>
                    <strong>Moderate-income (80–150% AMI):</strong> Up to $4,000
                    via HEEHRA + utility rebates
                  </li>
                  <li>
                    <strong>All incomes (HOMES):</strong> Based on measured
                    energy savings — amounts TBD
                  </li>
                  <li>
                    <strong>Stacking likely allowed:</strong> Utility + HEEHRA/HOMES
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Install Now vs Wait */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <div className="prose prose-lg max-w-none">
            <h2>Should You Install Now or Wait?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <p className="font-bold text-green-700 mb-3">
                ✅ Install Now If:
              </p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>You have access to a strong utility rebate (SMUD or LADWP)</li>
                <li>Your current system is failing or inefficient</li>
                <li>
                  You&apos;re planning a full electrification project (Energy
                  Smart Homes applies through 2027)
                </li>
                <li>
                  You want to lock in current utility incentives before budgets
                  shift — programs are not guaranteed long-term
                </li>
              </ul>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <p className="font-bold text-yellow-700 mb-3">
                🕐 Consider Waiting If:
              </p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>Your utility doesn&apos;t currently offer heat pump rebates</li>
                <li>
                  You&apos;re counting on HEEHRA Phase II or HOMES rebates
                  (not retroactive)
                </li>
                <li>
                  Your existing system still works and timing is flexible
                </li>
                <li>
                  You&apos;re income-eligible and want to maximize future
                  incentives
                </li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-6">
            If you&apos;re considering full electrification, you may also want
            to read our{" "}
            <Link
              href="/battery"
              className="text-brand-600 hover:underline"
            >
              home battery guide
            </Link>{" "}
            — battery economics changed significantly in 2026 and can impact
            overall system costs.
          </p>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-12">
        <div className="container-narrow">
          <div className="prose prose-lg max-w-none">
            <h2>How to Find and Claim California Heat Pump Rebates</h2>
          </div>

          <div className="mt-8 space-y-6">
            <div className="flex gap-4 items-start">
              <span className="bg-brand-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                1
              </span>
              <div>
                <p className="font-bold text-gray-900">
                  Identify your electric utility
                </p>
                <p className="text-gray-600 text-sm">
                  Check your electricity bill for your utility provider. This
                  determines which rebates are available to you. California has
                  investor-owned utilities (PG&amp;E, SCE, SDG&amp;E), municipal
                  utilities (SMUD, LADWP), and community choice aggregators
                  (CCAs).
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="bg-brand-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                2
              </span>
              <div>
                <p className="font-bold text-gray-900">
                  Check The Switch Is On incentive finder
                </p>
                <p className="text-gray-600 text-sm">
                  Visit{" "}
                  <a
                    href="https://incentives.switchison.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-600 hover:underline"
                  >
                    incentives.switchison.org
                  </a>{" "}
                  and enter your ZIP code. This is the CPUC-partnered tool that
                  shows all available rebates for your location — including TECH,
                  HEEHRA, utility, and any remaining programs.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="bg-brand-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                3
              </span>
              <div>
                <p className="font-bold text-gray-900">
                  Choose a qualified contractor
                </p>
                <p className="text-gray-600 text-sm">
                  Most California programs require TECH Clean
                  California-certified contractors. For utility-specific
                  programs (like SMUD), you&apos;ll need a contractor in their
                  network. Request multiple bids — SMUD publishes average
                  installation costs by system type on their rebate page.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="bg-brand-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                4
              </span>
              <div>
                <p className="font-bold text-gray-900">
                  Verify equipment eligibility
                </p>
                <p className="text-gray-600 text-sm">
                  Equipment must be ENERGY STAR Cold Climate certified and on the
                  relevant qualified products list. As of January 2026, R-410A
                  systems are ineligible — only systems using low-GWP
                  refrigerants (R-32, R-454B) qualify.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="bg-brand-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                5
              </span>
              <div>
                <p className="font-bold text-gray-900">
                  Explore financing if needed
                </p>
                <p className="text-gray-600 text-sm">
                  GoGreen Financing offers low-interest loans. Some utilities
                  offer their own financing. If you&apos;re income-eligible,
                  contact your local Community Action Agency for additional
                  support programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scam Warning */}
      <section className="py-8">
        <div className="container-narrow">
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <p className="font-bold text-red-800 mb-2">
              ⚠️ Protect Yourself From Rebate Scams
            </p>
            <p className="text-gray-700 text-sm">
              The California Energy Commission has issued warnings about
              unscrupulous people contacting homeowners claiming to represent the
              CEC or IRA rebate programs. HEEHRA single-family rebates are fully
              reserved — anyone claiming they can get you an immediate federal
              rebate for a single-family home is not being truthful. Never
              provide financial statements or financial information to a
              contractor. If you suspect a scam, contact the California
              Department of Consumer Affairs at 1-800-952-5210.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqData.map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other States */}
      <section className="py-12 bg-gray-50">
        <div className="container-wide">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Heat Pump Rebates in Other States
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            <Link
              href="/heat-pumps/states/ny"
              className="card bg-white hover:shadow-md transition-shadow p-4"
            >
              <p className="font-medium text-gray-900">New York</p>
              <p className="text-sm text-green-600">Open — NYS Clean Heat</p>
            </Link>
            <Link
              href="/heat-pumps/states/or"
              className="card bg-white hover:shadow-md transition-shadow p-4"
            >
              <p className="font-medium text-gray-900">Oregon</p>
              <p className="text-sm text-green-600">Open — Energy Trust</p>
            </Link>
            <Link
              href="/heat-pumps/states/wa"
              className="card bg-white hover:shadow-md transition-shadow p-4"
            >
              <p className="font-medium text-gray-900">Washington</p>
              <p className="text-sm text-green-600">Open — PSE + State HEAR</p>
            </Link>
            <Link
              href="/heat-pumps/states/ma"
              className="card bg-white hover:shadow-md transition-shadow p-4"
            >
              <p className="font-medium text-gray-900">Massachusetts</p>
              <p className="text-sm text-green-600">Open — Mass Save</p>
            </Link>
            <Link
              href="/heat-pumps/states/me"
              className="card bg-white hover:shadow-md transition-shadow p-4"
            >
              <p className="font-medium text-gray-900">Maine</p>
              <p className="text-sm text-green-600">
                Open — Efficiency Maine
              </p>
            </Link>
            <Link
              href="/heat-pumps/states/mn"
              className="card bg-white hover:shadow-md transition-shadow p-4"
            >
              <p className="font-medium text-gray-900">Minnesota</p>
              <p className="text-sm text-green-600">Open — Utility CIP</p>
            </Link>
            <Link
              href="/heat-pumps/states/co"
              className="card bg-white hover:shadow-md transition-shadow p-4"
            >
              <p className="font-medium text-gray-900">Colorado</p>
              <p className="text-sm text-green-600">Open — HEAR + Xcel</p>
            </Link>
            <Link
              href="/heat-pumps/states/ct"
              className="card bg-white hover:shadow-md transition-shadow p-4"
            >
              <p className="font-medium text-gray-900">Connecticut</p>
              <p className="text-sm text-green-600">Open — Energize CT</p>
            </Link>
            <Link
              href="/heat-pumps/states/tx"
              className="card bg-white hover:shadow-md transition-shadow p-4"
            >
              <p className="font-medium text-gray-900">Texas</p>
              <p className="text-sm text-yellow-600">Limited — Utility-dependent</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Sources + Disclaimer */}
      <section className="py-8">
        <div className="container-narrow">
          <div className="border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-500 mb-3">
              <strong>Sources verified {lastVerified}:</strong>
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href="https://techcleanca.com/incentives/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-brand-600 hover:underline"
              >
                TECH Clean California — Incentives ↗
              </a>
              <a
                href="https://techcleanca.com/incentives/heehrarebates/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-brand-600 hover:underline"
              >
                TECH — HEEHRA Rebates ↗
              </a>
              <a
                href="https://www.energy.ca.gov/programs-and-topics/programs/inflation-reduction-act-residential-energy-rebate-programs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-brand-600 hover:underline"
              >
                CA Energy Commission — IRA Rebates ↗
              </a>
              <a
                href="https://www.smud.org/Rebates-and-Savings-Tips/Rebates-for-My-Home/Heating-and-Cooling-Rebates"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-brand-600 hover:underline"
              >
                SMUD — Heating &amp; Cooling Rebates ↗
              </a>
              <a
                href="https://www.ladwp.com/residential-services/assistance-programs/consumer-rebate-program"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-brand-600 hover:underline"
              >
                LADWP — Consumer Rebate Program ↗
              </a>
              <a
                href="https://incentives.switchison.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-brand-600 hover:underline"
              >
                The Switch Is On — Incentive Finder ↗
              </a>
              <a
                href="https://www.irs.gov/credits-deductions/energy-efficient-home-improvement-credit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-brand-600 hover:underline"
              >
                IRS 25C (expired) ↗
              </a>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">
                What This Page Is (And Isn&apos;t)
              </h3>
              <p className="text-gray-600 text-sm">
                This page tracks public incentive availability for California
                homeowners considering heat pumps. It does not calculate savings,
                guarantee eligibility, or represent any incentive program. California
                has dozens of utilities and overlapping programs — your specific
                situation depends on your service area, income, home type, and
                timing. We verify status regularly but programs can change
                without notice. Always confirm with your utility and contractor
                before making decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Back link */}
      <section className="py-8">
        <div className="container-narrow">
          <Link
            href="/heat-pumps"
            className="text-brand-600 hover:underline font-medium"
          >
            ← Back to Heat Pump Incentive Status
          </Link>
        </div>
      </section>
    </>
  );
}
