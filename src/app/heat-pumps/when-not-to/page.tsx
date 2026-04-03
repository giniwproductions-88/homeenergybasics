import Link from "next/link";
import type { Metadata } from "next";
import { formatDate } from "@/data/incentives";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "When NOT to Get a Heat Pump: 7 Situations Where It Doesn't Make Sense (2026) | Home Energy Basics",
  description:
    "Heat pumps aren't for everyone. Cheap natural gas, mild climates, bad ductwork, and disappearing rebates can make the math worse. Here are 7 situations where a heat pump may not be worth it.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/when-not-to",
  },
  openGraph: {
    title: "When NOT to Get a Heat Pump (2026)",
    description:
      "Heat pumps are great — except when they're not. Here are 7 real situations where the math doesn't work.",
    url: "https://homeenergybasics.com/heat-pumps/when-not-to",
    type: "article",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is a heat pump worth it if I have cheap natural gas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Often not, purely on operating cost. If your natural gas rate is below $1.00/therm and your electricity rate is above $0.15/kWh, a gas furnace can be cheaper to run than a heat pump in cold climates. The math changes if your state offers large rebates ($5,000+) that offset the higher installation cost, or if you also need air conditioning (a heat pump replaces both systems).",
      },
    },
    {
      "@type": "Question",
      name: "Do heat pumps work in very cold climates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Modern cold-climate heat pumps work effectively down to -15°F to -20°F. However, efficiency drops as temperatures fall, and in the coldest climates (northern Minnesota, Montana, North Dakota) a heat pump may need backup electric resistance heat for the coldest days, which is expensive. Dual-fuel systems that pair a heat pump with a gas furnace backup are a practical solution in these areas.",
      },
    },
    {
      "@type": "Question",
      name: "Should I get a heat pump if my house is poorly insulated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not as a first step. A heat pump in a poorly insulated home will run constantly, drive up electricity bills, and may not keep the house comfortable. Insulation, air sealing, and duct sealing should come first. Many state programs (including HOMES) offer rebates for insulation work, and doing insulation first can also qualify you for larger heat pump rebates through whole-home programs.",
      },
    },
    {
      "@type": "Question",
      name: "Is a heat pump worth it without rebates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on what you're replacing and your energy prices. If you're replacing an oil or propane furnace, the fuel savings alone usually justify the cost within 5-8 years even without rebates. If you're replacing a working gas furnace with cheap gas, the payback without rebates can be 12-20+ years, which doesn't make financial sense for most homeowners.",
      },
    },
    {
      "@type": "Question",
      name: "Should I wait for HEAR rebates before installing a heat pump?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If your state has approved HEAR funding but hasn't launched the program yet, and your current heating system is still working, it may be worth waiting. HEAR can provide up to $8,000 for income-qualifying households. However, HEAR rebates are not retroactive — installing before the program launches means you cannot claim the rebate later. If your system has failed and you need immediate replacement, waiting isn't practical.",
      },
    },
    {
      "@type": "Question",
      name: "Is a heat pump worth it in the Midwest?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In most Midwestern states, heat pumps work well — especially modern cold-climate models rated to -15°F or below. However, homes with very cheap natural gas (under $1.00/therm) or poor insulation may see smaller savings. Dual-fuel systems that combine a heat pump with a gas furnace backup are common in the Midwest because they provide efficient heating most of the season while using gas during extreme cold. States like Minnesota, Wisconsin, Michigan, and Illinois all have active utility rebate programs for heat pumps.",
      },
    },
  ],
};

export default function WhenNotToPage() {
  const verifiedDate = "2026-03-24";
  const formattedDate = formatDate(verifiedDate);

  return (
    <>
      <JsonLd data={faqJsonLd} />

      {/* ---- 1. HERO ---- */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="container-narrow">
          <nav className="text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-brand-600">Home</Link>
            {" "}/{" "}
            <Link href="/heat-pumps" className="hover:text-brand-600">Heat Pumps</Link>
            {" "}/ When Not To
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            When NOT to Get a Heat Pump: 7 Situations Where It Doesn&apos;t Make Sense (2026)
          </h1>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Heat pumps are the right call for most homeowners in most situations. But
            not all of them. Cheap natural gas, disappearing rebates, bad ductwork, mild
            climates, and poor insulation can all make the math worse — sometimes much
            worse. Many installers present heat pumps as the default upgrade, but in
            several real situations a heat pump may not be the most economical option.
            Before you commit to a <strong>$12,000–$18,000</strong> installation,
            here are seven situations where a heat pump may not be worth it. This guide
            covers the real reasons to hold off, based on the{" "}
            <Link href="/heat-pumps/rebates-by-state" className="text-brand-600 hover:underline">
              current incentive landscape
            </Link>,{" "}
            <Link href="/heat-pumps/stacking-rebates" className="text-brand-600 hover:underline">
              stacking rules
            </Link>,{" "}
            and energy pricing in 2026.
          </p>

          <p className="text-sm text-gray-500">
            Last verified: {formattedDate}
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Rates and program availability may change after this date.
          </p>

          <nav className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            <a href="#situations" className="text-brand-600 hover:underline">The 7 situations</a>
            <a href="#when-it-does" className="text-brand-600 hover:underline">When it does make sense</a>
            <a href="#decision" className="text-brand-600 hover:underline">Decision framework</a>
          </nav>
        </div>
      </section>

      {/* ---- 2. THE SHORT VERSION ---- */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Short Version</h2>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="font-semibold text-amber-800 mb-1">⚠ Probably skip the heat pump if:</p>
              <p className="text-sm text-amber-900">
                Your gas is cheap and your furnace works, your house is poorly insulated,
                your state has no meaningful rebates, or you live in a mild climate where
                you barely use heat or AC.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Probably get the heat pump if:</p>
              <p className="text-sm text-green-900">
                You heat with oil or propane, your state has strong rebates ($5,000+),
                you need to replace both a furnace and AC, or you live in a climate zone
                where heating and cooling costs are both significant.{" "}
                <Link href="/heat-pumps/rebates-by-state" className="text-brand-600 hover:underline">
                  See rebates in your state →
                </Link>
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">✗ The federal credit is gone</p>
              <p className="text-sm text-red-900">
                The Section 25C credit is no longer available for equipment placed in
                service after December 31, 2025. That changes the payback math for
                everyone.{" "}
                <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                  Details →
                </Link>
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
              <p className="font-semibold text-blue-800 mb-1">Rebates matter more than ever</p>
              <p className="text-sm text-blue-900">
                Without the federal credit, the financial case for a heat pump depends
                heavily on{" "}
                <Link href="/heat-pumps/stacking-rebates" className="text-brand-600 hover:underline">
                  stacking state and utility rebates
                </Link>. In states with $0–$1,500 in total rebates, payback can
                stretch past 15 years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- 3. THE 7 SITUATIONS ---- */}
      <section className="py-12 bg-gray-50" id="situations">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            7 Situations Where a Heat Pump Doesn&apos;t Make Sense
          </h2>

          {/* Situation 1 */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              1. Your natural gas is cheap and your furnace still works
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you pay less than <strong>$1.00/therm</strong> for natural gas and your
              electricity rate is above <strong>$0.15/kWh</strong>, running a gas furnace
              is often cheaper than running a heat pump — especially in cold climates
              where the heat pump&apos;s efficiency drops. States like Texas, Oklahoma,
              Ohio, and parts of the Midwest have some of the cheapest gas in the country.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The exception: if your furnace is 15+ years old and you also need a new AC
              unit, a heat pump replaces both systems for roughly the cost of replacing
              both separately. That changes the comparison.
            </p>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">The math</p>
              <p className="text-sm text-gray-600 mt-1">
                A 96% efficient gas furnace burning gas at $0.80/therm costs roughly
                $0.83/therm of delivered heat. A heat pump with a COP of 3.0 using
                electricity at $0.16/kWh costs roughly $1.56/therm — nearly double.
                Even at a lower electricity rate of $0.12/kWh, the heat pump costs
                about $1.17/therm, still above cheap gas. The heat pump only wins on
                total annual HVAC cost when its seasonal COP is high (3.5+) and you
                factor in eliminated AC costs. In cold weather at COP 2.0, the heat
                pump climbs to $2.34/therm at $0.16/kWh — far above gas.
              </p>
            </div>
          </div>

          {/* Situation 2 */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              2. Your house is poorly insulated
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              A heat pump in a leaky, poorly insulated house is like pouring water into
              a bucket with holes. The system runs constantly, drives up electricity
              bills, and may not keep rooms comfortable in extreme temperatures. This is
              the single most common reason heat pump installations disappoint homeowners.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The fix: insulate and air-seal first, then install the heat pump. This order
              also lets you buy a smaller (and cheaper) heat pump because the house needs
              less heating capacity. Many states offer{" "}
              <Link href="/heat-pumps/stacking-rebates" className="text-brand-600 hover:underline">
                HOMES rebates for insulation work
              </Link>{" "}
              that stack with heat pump rebates.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="font-semibold text-amber-800 mb-1">⚠ Contractor red flag</p>
              <p className="text-sm text-amber-900">
                If a contractor quotes a heat pump without asking about your home&apos;s
                insulation, duct condition, or performing a Manual J load calculation, get
                a second opinion. Oversized heat pumps in under-insulated homes are the
                #1 source of heat pump complaints.
              </p>
            </div>
          </div>

          {/* Situation 3 */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              3. Your state has minimal rebates and you&apos;re above 150% AMI
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              With federal tax credits gone, the financial case for a heat pump depends
              on state and utility rebates. In states like{" "}
              <Link href="/heat-pumps/states/oh" className="text-brand-600 hover:underline">Ohio</Link>,{" "}
              <Link href="/heat-pumps/states/id" className="text-brand-600 hover:underline">Idaho</Link>,{" "}
              <Link href="/heat-pumps/states/sd" className="text-brand-600 hover:underline">South Dakota</Link>, and{" "}
              <Link href="/heat-pumps/states/fl" className="text-brand-600 hover:underline">Florida</Link>,
              total available rebates may be <strong>$0–$1,500</strong>. If you also
              earn above 150% AMI (making you ineligible for HEAR), you are paying
              essentially full price for the equipment.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              On a $15,000 installation with $500 in utility rebates and no tax credit,
              the payback from energy savings alone can be <strong>12–20 years</strong> —
              longer than the expected lifespan of many components. That&apos;s a hard
              financial case to make unless you are also replacing a failed AC system.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <Link href="/heat-pumps/rebates-by-state" className="text-brand-600 hover:underline">
                Check your state&apos;s current rebate status →
              </Link>
            </p>
          </div>

          {/* Situation 4 */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              4. You live in a mild climate where you barely heat or cool
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Heat pumps save the most money in climates with significant heating and
              cooling loads — the mid-Atlantic, upper South, Midwest, and Pacific
              Northwest. If you live somewhere with low annual heating and cooling
              demand — parts of coastal California, the Pacific Northwest lowlands, or
              Hawaii — the annual savings from a heat pump may be too small
              to justify the upfront cost.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If your total annual heating and cooling bill is under{" "}
              <strong>$800–$1,000</strong>, even a 50% reduction from a heat pump only
              saves $400–$500/year. On a $15,000 system with modest rebates, that is a
              25+ year payback.
            </p>
          </div>

          {/* Situation 5 */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              5. Your ductwork is in terrible condition
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ducted heat pumps push air through your existing duct system. If your ducts
              are leaky, undersized, poorly routed through unconditioned spaces (like an
              attic or crawl space), or disconnected, you will lose 20–40% of the
              conditioned air before it reaches your rooms. The heat pump will work harder,
              cost more to run, and the house will have hot and cold spots.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Fixing ductwork can cost <strong>$2,000–$5,000+</strong> depending on the
              house. You need to factor that into the total project cost. In some cases,
              ductless mini-splits are a better fit than ducted systems — they avoid the
              duct issue entirely but have their own tradeoffs (aesthetics, per-room
              units, higher per-ton cost).
            </p>
          </div>

          {/* Situation 6 */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              6. You&apos;re planning to sell the house soon
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              A heat pump increases home value, but studies suggest the premium is
              typically <strong>$3,000–$7,000</strong> — not the $12,000–$18,000 you
              spent installing it. If you are planning to sell within 2–3 years, you are
              unlikely to recoup the cost through either energy savings or resale value.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The exception: if your existing HVAC has failed and you need a new system
              regardless, a heat pump is likely a better investment than a new furnace +
              AC because buyers increasingly prefer heat pumps (especially in states with
              strong incentive programs).
            </p>
          </div>

          {/* Situation 7 */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              7. HEAR rebates are about to launch in your state
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              If your state has approved HEAR funding but has not launched the program
              yet, and your current heating system still works, it may be worth waiting.
              HEAR can provide <strong>up to $8,000</strong> for income-qualifying
              households (below 150% AMI). That single rebate can cut your out-of-pocket
              cost in half.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Critically: <strong>HEAR rebates are not retroactive.</strong> If you
              install before the program launches, you cannot claim the rebate later.
              States where HEAR is approved but not yet available include{" "}
              <Link href="/heat-pumps/states/nh" className="text-brand-600 hover:underline">New Hampshire</Link> (expected mid-summer 2026),{" "}
              <Link href="/heat-pumps/states/ct" className="text-brand-600 hover:underline">Connecticut</Link>,{" "}
              <Link href="/heat-pumps/states/pa" className="text-brand-600 hover:underline">Pennsylvania</Link>,{" "}
              <Link href="/heat-pumps/states/nv" className="text-brand-600 hover:underline">Nevada</Link>, and{" "}
              <Link href="/heat-pumps/states/fl" className="text-brand-600 hover:underline">Florida</Link>.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
              <p className="font-semibold text-blue-800 mb-1">
                But don&apos;t wait forever
              </p>
              <p className="text-sm text-blue-900">
                IRA funding is finite and the political environment around it continues
                to shift. Some states may never launch their programs. If your heating
                system has failed, waiting is not practical — install now and take
                whatever rebates are currently available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- 4. WHEN IT DOES MAKE SENSE ---- */}
      <section className="py-12" id="when-it-does">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            When a Heat Pump IS Worth It
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            To be clear: for most homeowners in most of the country, a heat pump is a
            good investment — especially with today&apos;s state rebates. The situations
            above are exceptions, not the rule. Here are the strongest cases for
            installing one.
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ You heat with oil or propane</p>
              <p className="text-sm text-green-900">
                Oil costs $3.50–$5.00/gallon and propane $2.00–$3.50/gallon in most markets.
                A heat pump cuts heating costs by 30–60% compared to these fuels even
                without rebates. With rebates, the payback is often 3–5 years. This is the
                strongest financial case for a heat pump in 2026.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ You need to replace both furnace and AC</p>
              <p className="text-sm text-green-900">
                A heat pump replaces both systems. If your furnace is 15+ years old and
                your AC is failing, installing a heat pump costs roughly the same as
                replacing both a furnace and central AC separately — and you get one
                efficient system instead of two.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Your state has strong rebates ($5,000+)</p>
              <p className="text-sm text-green-900">
                In states like{" "}
                <Link href="/heat-pumps/states/ny" className="text-brand-600 hover:underline">New York</Link>,{" "}
                <Link href="/heat-pumps/states/co" className="text-brand-600 hover:underline">Colorado</Link>,{" "}
                <Link href="/heat-pumps/states/wi" className="text-brand-600 hover:underline">Wisconsin</Link>,{" "}
                <Link href="/heat-pumps/states/md" className="text-brand-600 hover:underline">Maryland</Link>, and{" "}
                <Link href="/heat-pumps/states/ri" className="text-brand-600 hover:underline">Rhode Island</Link>,{" "}
                rebates cover $5,000–$15,000 of the installation cost. At those levels,
                the payback is fast even replacing cheap gas heat.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ You have electric resistance heat</p>
              <p className="text-sm text-green-900">
                If your house heats with baseboard electric, wall heaters, or an electric
                furnace, a heat pump will cut your heating bill by 50–70%. Electric
                resistance heat is the most expensive heating fuel — a heat pump is almost
                always an upgrade.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ You qualify for HEAR (below 150% AMI)</p>
              <p className="text-sm text-green-900">
                If your income is below 150% AMI and your state has launched HEAR, the
                rebate alone can cover $4,000–$8,000 of the cost. Below 80% AMI, some
                states cover 100%. At those rebate levels, a heat pump is almost always
                worth it financially.{" "}
                <Link href="/heat-pumps/stacking-rebates" className="text-brand-600 hover:underline">
                  See stacking rules →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- 5. DECISION FRAMEWORK ---- */}
      <section className="py-12 bg-gray-50" id="decision">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Decision Framework: Should You Get a Heat Pump?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Walk through these questions in order. If you hit a &ldquo;probably not,&rdquo;
            the heat pump may not make financial sense right now — but check the
            exceptions noted.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-gray-900">What fuel do you heat with now?</p>
                <p className="text-sm text-gray-700">
                  Oil or propane → <strong className="text-green-700">strong yes.</strong>{" "}
                  Electric resistance → <strong className="text-green-700">strong yes.</strong>{" "}
                  Natural gas → proceed to question 2.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900">How much are your total rebates?</p>
                <p className="text-sm text-gray-700">
                  $5,000+ → <strong className="text-green-700">good case for a heat pump.</strong>{" "}
                  $1,000–$5,000 → depends on your gas price and system age.{" "}
                  Under $1,000 → probably not, unless replacing failed equipment.{" "}
                  <Link href="/heat-pumps/rebates-by-state" className="text-brand-600 hover:underline">
                    Check your state →
                  </Link>
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-900">Is your house well insulated?</p>
                <p className="text-sm text-gray-700">
                  Yes → proceed.{" "}
                  No → <strong className="text-amber-700">insulate first,</strong> then
                  reconsider the heat pump. You may qualify for HOMES insulation rebates
                  that stack with heat pump rebates.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <p className="font-semibold text-gray-900">Do you also need AC replacement?</p>
                <p className="text-sm text-gray-700">
                  Yes → <strong className="text-green-700">strong case.</strong> A heat pump
                  replaces both systems. Compare the cost of heat pump vs furnace + AC
                  separately.{" "}
                  No → the heat pump is only competing against your furnace cost.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                5
              </div>
              <div>
                <p className="font-semibold text-gray-900">Are you planning to stay 5+ years?</p>
                <p className="text-sm text-gray-700">
                  Yes → proceed. Payback typically happens in years 3–8 with good rebates.{" "}
                  No → <strong className="text-amber-700">probably not</strong> unless your
                  current system has failed and you need a replacement anyway.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-5">
            <p className="font-semibold text-gray-900 mb-1">
              Bottom line
            </p>
            <p className="text-sm text-gray-700">
              If you answered &ldquo;strong yes&rdquo; or &ldquo;good case&rdquo; on questions
              1–2 and &ldquo;yes&rdquo; on questions 3–5, a heat pump is almost certainly
              worth it. If you hit multiple &ldquo;probably nots,&rdquo; the math may not
              work in your favor right now — but that can change as HEAR programs launch
              in more states and utility rebates evolve.
            </p>
          </div>
        </div>
      </section>

      {/* ---- 6. THE DUAL-FUEL MIDDLE GROUND ---- */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            The Dual-Fuel Middle Ground
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            If you are on the fence — especially if you have cheap gas but want the
            efficiency of a heat pump — a dual-fuel system may be the answer. A dual-fuel
            setup pairs a heat pump with your existing gas furnace. The heat pump runs when
            it is efficient (roughly above 25–35°F depending on the system), and the gas
            furnace kicks in during the coldest weather when the heat pump&apos;s efficiency
            drops.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            This gives you the best of both worlds: heat pump efficiency for 70–80% of
            the heating season, and cheap gas backup for the coldest days. Some utility
            programs specifically offer rebates for dual-fuel systems —{" "}
            <Link href="/heat-pumps/states/mn" className="text-brand-600 hover:underline">
              CenterPoint Energy in Minnesota
            </Link>{" "}
            and Washington Gas in{" "}
            <Link href="/heat-pumps/states/va" className="text-brand-600 hover:underline">
              Virginia
            </Link>{" "}
            are two examples.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="font-semibold text-blue-800 mb-1">
              When dual-fuel makes the most sense
            </p>
            <p className="text-sm text-blue-900">
              Cold climates (ASHRAE design temp below 0°F) with cheap natural gas
              (under $1.00/therm) and a working gas furnace. You add a heat pump without
              removing the furnace, get most of the efficiency benefits, and keep your
              gas backup for extreme cold. Installation cost is lower because you are not
              replacing the furnace.
            </p>
          </div>
        </div>
      </section>

      {/* ---- 7. WHAT CHANGED IN 2026 ---- */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What Changed in 2026 That Affects This Decision
          </h2>

          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Federal tax credits are gone</p>
              <p className="text-sm text-gray-600 mt-1">
                The $2,000 Section 25C credit and the 30% Section 25D credit both expired
                December 31, 2025. This removes $2,000–$6,000+ from the math depending on
                your system. Everyone&apos;s payback period got longer.{" "}
                <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                  Full details →
                </Link>
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">HEAR programs are rolling out</p>
              <p className="text-sm text-gray-600 mt-1">
                About a dozen states have launched HEAR, offering up to $8,000 per heat
                pump for income-qualifying households. This partially replaces the lost
                federal credit — but only for households below 150% AMI and only in states
                that have launched.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">IRA funding is uncertain</p>
              <p className="text-sm text-gray-600 mt-1">
                The political environment around IRA-funded programs continues to shift.
                Some states have launched programs; others are holding back. If you are
                counting on HEAR to make the math work, check your{" "}
                <Link href="/heat-pumps/rebates-by-state" className="text-brand-600 hover:underline">
                  state&apos;s current status
                </Link>{" "}
                before committing.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Cold-climate heat pumps have improved</p>
              <p className="text-sm text-gray-600 mt-1">
                Modern cold-climate heat pumps operate effectively down to -15°F to -20°F
                with significantly better efficiency than models from even 3–4 years ago.
                The old advice that &ldquo;heat pumps don&apos;t work in cold
                weather&rdquo; is outdated for current equipment — but efficiency still
                drops, which affects the operating cost comparison vs gas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- 8. FAQ ---- */}
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

      {/* ---- 9. SEE ALSO ---- */}
      <section className="py-8 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-3">See also</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/heat-pumps/rebates-by-state" className="text-brand-600 hover:underline">
                Heat Pump Rebates by State — Where Incentives Are Still Available (2026)
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/stacking-rebates" className="text-brand-600 hover:underline">
                Can You Stack Heat Pump Rebates? State-by-State Stacking Rules
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/vs-furnace" className="text-brand-600 hover:underline">
                Heat Pump vs Furnace: The Real Math in 2026
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/cost" className="text-brand-600 hover:underline">
                The Real Cost of Installing a Heat Pump in 2026
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps" className="text-brand-600 hover:underline">
                All State Heat Pump Incentives — Hub Page
              </Link>
            </li>
            <li>
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                Federal Heat Pump Tax Credits Ended — Full Explainer
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

      {/* ---- AUTHOR BLOCK ---- */}
      <section className="py-8">
        <div className="container-narrow">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <p className="text-sm text-gray-500 mb-1">About this guide</p>
            <p className="text-gray-700 leading-relaxed">
              Researched and maintained by Giniw at{" "}
              <Link href="/" className="text-brand-600 hover:underline">
                Home Energy Basics
              </Link>
              , an independent guide tracking U.S. heat pump rebates and home
              electrification incentives. Every rebate amount, program status,
              and source link is verified against official state, utility, and
              federal program pages before publishing.{" "}
              <Link href="/about" className="text-brand-600 hover:underline">
                See our verification methodology
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ---- 10. DISCLAIMER ---- */}
      <section className="py-8">
        <div className="container-narrow">
          <div className="bg-gray-100 rounded-lg p-6">
            <p className="text-gray-500 text-xs leading-relaxed">
              <strong>Disclaimer:</strong> This page discusses general situations
              where a heat pump may or may not be a good financial decision. It does
              not calculate savings, guarantee outcomes, or represent any incentive
              program. Energy costs, rebate availability, equipment performance, and
              home characteristics vary widely. Always get multiple contractor quotes,
              confirm current rebate amounts with your state energy office and utility,
              and consider a home energy audit before making HVAC decisions.
            </p>
          </div>
          <p className="text-sm text-gray-600 mt-4 text-center">
            See how your state compares →{" "}
            <Link
              href="/heat-pumps/rebates-by-state"
              className="text-brand-600 hover:underline"
            >
              Heat Pump Rebates by State (2026)
            </Link>
          </p>
          <div className="mt-4 text-center">
            <Link
              href="/heat-pumps"
              className="text-brand-600 hover:underline text-sm"
            >
              ← Back to Heat Pumps overview
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
