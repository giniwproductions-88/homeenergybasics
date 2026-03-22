import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Are Home Batteries Worth It in 2026? Costs, Incentives, and What Changed | Home Energy Basics",
  description:
    "Home batteries cost $10,000–$16,000 installed in 2026. Federal tax credits expired for most standalone systems. Here's when batteries still make financial sense and when they don't.",
  alternates: {
    canonical: "https://homeenergybasics.com/battery",
  },
};

export default function BatteryPage() {
  const lastUpdated = "March 22, 2026";

  const faqData = [
    {
      question: "Are home batteries worth it without solar in 2026?",
      answer:
        "For most homeowners, no. Without solar, you lose the potential for the solar Investment Tax Credit and can only earn value through time-of-use arbitrage or backup power. Without state incentives, the payback period on a $10,000–$16,000 standalone battery typically exceeds 15 years. Exceptions exist in states with strong incentive programs or for homeowners with very high time-of-use rate differentials.",
    },
    {
      question: "What is the payback period for a home battery in 2026?",
      answer:
        "It varies widely. With solar and favorable time-of-use rates, payback can be 7–10 years. Without solar or in flat-rate utility territories, payback may exceed 15 years or never break even purely on economics. State incentives and virtual power plant programs can shorten payback by $1,000–$3,000+ over the battery's lifetime.",
    },
    {
      question: "Which states still offer home battery incentives?",
      answer:
        "California's SGIP program, Massachusetts' ConnectedSolutions and SMART programs, Oregon's state incentives, Colorado's programs, and several utility-specific virtual power plant programs across the country. Availability and amounts change frequently — check with your utility and state energy office.",
    },
    {
      question:
        "Should I wait for battery prices to drop or incentives to improve?",
      answer:
        "Battery costs have fallen roughly 15% since 2023 and are projected to decline another 5–10% annually through 2030. However, if your current situation — utility rates, solar production, outage frequency — makes a battery worthwhile today, waiting means forgoing those benefits. New state or federal incentives are not guaranteed.",
    },
    {
      question: "Do home batteries work with heat pumps?",
      answer:
        "Heat pumps significantly increase your home's electrical load, which affects battery sizing. A typical heat pump draws 2–5 kW, meaning a standard 13.5 kWh battery might only power a heat pump for 3–6 hours during an outage. For whole-home backup including a heat pump, most homeowners need two or more battery units ($20,000–$30,000+). However, batteries can help manage peak demand charges from heat pump operation in time-of-use rate territories.",
    },
    {
      question: "How much does a home battery cost in 2026?",
      answer:
        "A single home battery costs $10,000–$16,000 fully installed in 2026. Equipment alone runs $8,500–$12,000, with installation, electrical work, and permits adding $3,000–$5,000. The Tesla Powerwall 3 costs approximately $15,300–$16,200 installed. Whole-home backup systems requiring 2–3 batteries cost $22,000–$40,000+ installed. Costs per kWh of storage have dropped to $800–$1,200 installed.",
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
      <section className="bg-gradient-to-br from-brand-50 via-white to-gray-50 py-12 md:py-16">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-brand-600 font-medium mb-2">
              <Link href="/" className="hover:underline">
                Home
              </Link>{" "}
              / Home Batteries
            </p>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Are Home Batteries Worth It in 2026?
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Home batteries still make sense in 2026 — but for fewer homeowners
              than before. The federal tax credit landscape changed, removing the
              30% incentive for most standalone battery installations. That means
              the economics now depend heavily on your utility rates,
              time-of-use pricing, solar setup, and state incentives.
              Here&apos;s what actually works — and what doesn&apos;t.
              Most homeowners now pay $10,000–$16,000 with no federal
              incentives — not the $7,000–$11,000 net cost many older guides
              still reference.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* At a Glance */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Home Battery Incentives at a Glance
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-red-200">
              <p className="text-red-600 font-bold text-lg mb-2">
                ❌ Federal Credits
              </p>
              <p className="text-gray-700 text-sm">
                The Residential Clean Energy Credit (Section 25D) expired
                December 31, 2025. Standalone battery installations no longer
                qualify for a federal tax credit. Batteries installed as part
                of a solar system may still qualify — consult a tax
                professional for your specific situation.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-yellow-200">
              <p className="text-yellow-700 font-bold text-lg mb-2">
                ⚠️ State Programs
              </p>
              <p className="text-gray-700 text-sm">
                Limited and location-specific. California SGIP, Massachusetts
                ConnectedSolutions/SMART, and select utility virtual power plant
                programs remain active. Most states have no standalone battery
                incentive.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-green-200">
              <p className="text-green-700 font-bold text-lg mb-2">
                ✅ Still Makes Sense If
              </p>
              <p className="text-gray-700 text-sm">
                You have solar with time-of-use rates. You experience frequent
                outages. You qualify for a state incentive program. You value
                energy independence. You participate in a utility VPP program.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Costs */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <div className="prose prose-lg max-w-none">
            <h2>How Much Do Home Batteries Actually Cost in 2026?</h2>
            <p>
              Battery costs have dropped roughly 15% since 2023, but they remain
              a significant investment. Here&apos;s what homeowners are actually
              paying in 2026:
            </p>
          </div>

          <div className="mt-8 space-y-4">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-gray-900">
                    Single Battery (10–13.5 kWh)
                  </p>
                  <p className="text-sm text-gray-600">
                    Covers essentials: fridge, lights, Wi-Fi, some outlets
                  </p>
                </div>
                <p className="text-xl font-bold text-gray-900">
                  $10,000–$16,000
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-gray-900">
                    Whole-Home Backup (2–3 units)
                  </p>
                  <p className="text-sm text-gray-600">
                    Powers HVAC, heat pump, appliances during outages
                  </p>
                </div>
                <p className="text-xl font-bold text-gray-900">
                  $22,000–$40,000+
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-gray-900">
                    Cost Per kWh of Storage
                  </p>
                  <p className="text-sm text-gray-600">
                    Industry average, fully installed
                  </p>
                </div>
                <p className="text-xl font-bold text-gray-900">
                  $800–$1,200/kWh
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600">
              Equipment is roughly 55–65% of total installed cost. The remainder
              covers installation labor, electrical work, permits, and potential
              panel upgrades. Homes with older electrical panels may need a
              $2,000–$4,000 panel upgrade on top of battery costs.
            </p>
          </div>
        </div>
      </section>

      {/* Real-World Example */}
      <section className="py-12">
        <div className="container-narrow">
          <div className="prose prose-lg max-w-none">
            <h2>Real-World Example: Battery Payback in 2026</h2>
            <p>
              A California homeowner with solar and time-of-use rates might
              save $100–$200 per month by shifting peak usage to off-peak
              stored energy and participating in a utility virtual power plant
              program.
            </p>
            <p>
              At a $14,000 installed system cost, that translates to a roughly
              6–10 year payback. Add a state SGIP incentive and the payback
              shortens further.
            </p>
            <p>
              Without solar or incentives, that same $14,000 system in a
              flat-rate utility territory might take 15+ years to break even —
              if it ever does. The difference between these two scenarios is
              why location and utility structure matter more than the battery
              itself.
            </p>
          </div>
        </div>
      </section>

      {/* What Changed */}
      <section className="py-12">
        <div className="container-narrow">
          <div className="prose prose-lg max-w-none">
            <h2>What Changed for Home Batteries in 2026</h2>
            <p>
              The biggest shift: the federal Residential Clean Energy Credit
              (Section 25D), which provided a 30% tax credit on battery
              installations, expired December 31, 2025. For a $15,000 battery
              system, that&apos;s $4,500 in lost incentive.
            </p>
            <p>
              The impact is straightforward. A battery system that cost $10,500
              after credits in 2025 now costs $15,000 in 2026. That changes
              the payback math dramatically for homeowners who were on the
              fence.
            </p>
            <p>
              The situation for batteries paired with solar is more complex.
              Some provisions related to the solar Investment Tax Credit may
              still apply to battery storage installed alongside solar panels,
              but the specifics depend on your tax situation and how the system
              is configured. Consult a qualified tax professional before making
              assumptions about credit availability.
            </p>
          </div>
        </div>
      </section>

      {/* When It Makes Sense */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <div className="prose prose-lg max-w-none">
            <h2>When Home Batteries Make Financial Sense</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <p className="font-bold text-green-700 mb-3">
                ✅ Batteries Are Worth It If:
              </p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>
                  You have solar and your utility uses time-of-use rates with a
                  3–4x peak-to-off-peak differential
                </li>
                <li>
                  You live in an area with frequent or extended power outages
                  (wildfire zones, hurricane regions, aging grid)
                </li>
                <li>
                  You qualify for state incentives (CA SGIP, MA ConnectedSolutions)
                </li>
                <li>
                  Your utility offers a Virtual Power Plant (VPP) program that
                  pays you for stored energy during peak demand
                </li>
                <li>
                  You value energy independence and can absorb the cost without
                  needing a short payback period
                </li>
                <li>
                  State and utility programs can change or run out — current
                  incentives are not guaranteed long-term
                </li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <p className="font-bold text-red-700 mb-3">
                ❌ Batteries Probably Don&apos;t Make Sense If:
              </p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>
                  You have flat-rate electricity with no time-of-use
                  differential — there&apos;s no arbitrage opportunity
                </li>
                <li>
                  You don&apos;t have solar and your state offers no battery
                  incentives
                </li>
                <li>
                  You plan to move within 5–7 years (payback periods are longer
                  now without federal credits)
                </li>
                <li>
                  Your grid is reliable and you rarely experience outages
                </li>
                <li>
                  You&apos;re counting on the battery paying for itself purely
                  through energy savings
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Batteries + Heat Pumps */}
      <section className="py-12">
        <div className="container-narrow">
          <div className="prose prose-lg max-w-none">
            <h2>Do Home Batteries Make Sense With Heat Pumps?</h2>
            <p>
              If you&apos;ve installed or are considering a heat pump, batteries
              add an important dimension — but also increase complexity and
              cost.
            </p>
            <p>
              Heat pumps typically draw 2–5 kW depending on size, mode, and
              outdoor temperature. A standard 13.5 kWh battery might only run
              your heat pump for 3–6 hours during an outage — not enough for a
              multi-day power loss in winter. For whole-home backup that
              includes heat pump operation, most homeowners need at least two
              battery units.
            </p>
            <p>
              Where batteries pair well with heat pumps: if your utility charges
              time-of-use rates, a battery can shift your heat pump&apos;s
              highest electricity consumption to off-peak hours, saving $50–$150
              per month in markets with significant rate differentials. This is
              especially relevant in California, where utility rate structures
              are becoming more aggressive.
            </p>
            <p>
              For current heat pump incentive availability by state, see our{" "}
              <Link
                href="/heat-pumps"
                className="text-brand-600 hover:underline"
              >
                heat pump incentive tracker
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* State Incentives */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <div className="prose prose-lg max-w-none">
            <h2>States Where Home Batteries Still Make Financial Sense</h2>
            <p>
              Without federal credits, state and utility programs are now the
              primary driver of battery economics. Here are the states with the
              strongest remaining incentives:
            </p>
          </div>

          <div className="mt-8 space-y-4">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <p className="font-bold text-gray-900 mb-1">
                California — SGIP + High TOU Rates
              </p>
              <p className="text-sm text-gray-600">
                The Self-Generation Incentive Program still provides rebates
                for qualifying battery installations, with higher incentives
                for disadvantaged communities and fire-threat districts.
                Combined with aggressive time-of-use rates (4–5x peak
                differentials), California remains the strongest market for
                home batteries.{" "}
                <Link
                  href="/heat-pumps/states/ca"
                  className="text-brand-600 hover:underline"
                >
                  See CA heat pump incentives →
                </Link>
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <p className="font-bold text-gray-900 mb-1">
                Massachusetts — ConnectedSolutions + SMART
              </p>
              <p className="text-sm text-gray-600">
                The ConnectedSolutions program pays battery owners for
                dispatching stored energy during peak demand events. The SMART
                program includes battery adders for solar-plus-storage systems.
                Combined, these programs can contribute $1,000–$3,000+ over a
                battery&apos;s lifetime.{" "}
                <Link
                  href="/heat-pumps/states/ma"
                  className="text-brand-600 hover:underline"
                >
                  See MA heat pump incentives →
                </Link>
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <p className="font-bold text-gray-900 mb-1">
                Oregon — State Battery Incentives
              </p>
              <p className="text-sm text-gray-600">
                Oregon offers state-level incentives for battery storage that
                can stack with utility programs. Energy Trust of Oregon may also
                offer complementary incentives depending on the installation
                configuration.{" "}
                <Link
                  href="/heat-pumps/states/or"
                  className="text-brand-600 hover:underline"
                >
                  See OR heat pump incentives →
                </Link>
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <p className="font-bold text-gray-900 mb-1">
                Minnesota — Energy Storage Incentives
              </p>
              <p className="text-sm text-gray-600">
                Minnesota offers a $250/kWh incentive (up to $7,000) for
                battery storage systems paired with solar, available outside
                Xcel territory through the Department of Commerce. Xcel
                territory has a separate program at $175/kWh (up to $5,000).
                Funds are limited and first-come, first-served.{" "}
                <Link
                  href="/heat-pumps/states/mn"
                  className="text-brand-600 hover:underline"
                >
                  See MN heat pump incentives →
                </Link>
              </p>
            </div>
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

      {/* Related */}
      <section className="py-12 bg-gray-50">
        <div className="container-wide">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Related Guides
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/battery/what-changed"
              className="card bg-white hover:shadow-md transition-shadow p-6"
            >
              <h3 className="font-semibold text-gray-900 mb-2">
                What Changed for Batteries in 2026
              </h3>
              <p className="text-gray-600 text-sm">
                Detailed breakdown of federal tax credit changes and what they
                mean for battery economics.
              </p>
            </Link>
            <Link
              href="/heat-pumps"
              className="card bg-white hover:shadow-md transition-shadow p-6"
            >
              <h3 className="font-semibold text-gray-900 mb-2">
                Heat Pump Incentive Tracker
              </h3>
              <p className="text-gray-600 text-sm">
                Day-accurate status on heat pump rebates across 7 states.
              </p>
            </Link>
            <Link
              href="/heat-pumps/states/ca"
              className="card bg-white hover:shadow-md transition-shadow p-6"
            >
              <h3 className="font-semibold text-gray-900 mb-2">
                California Heat Pump Rebates
              </h3>
              <p className="text-gray-600 text-sm">
                What&apos;s actually available in California — the state
                where batteries and heat pumps overlap most.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8">
        <div className="container-narrow">
          <div className="p-6 bg-gray-50 rounded-xl">
            <h3 className="font-semibold text-gray-900 mb-2">
              What This Page Is (And Isn&apos;t)
            </h3>
            <p className="text-gray-600 text-sm">
              We don&apos;t calculate your exact savings — but we show you the
              ranges most homeowners see and the conditions where batteries
              actually make financial sense. This page does not constitute tax
              advice. Federal tax law is complex and subject to interpretation —
              consult a qualified tax professional for guidance on your specific
              situation. Program availability and costs change frequently. All
              figures verified as of {lastUpdated}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
