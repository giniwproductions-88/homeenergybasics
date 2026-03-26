import Link from "next/link";
import type { Metadata } from "next";
import { formatDate } from "@/data/incentives";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Heat Pump vs Furnace: The Real Math in 2026 | Home Energy Basics",
  description:
    "Heat pump vs gas furnace — real installation costs, operating costs, and rebates compared. Federal credits are gone. Here's the honest math for 2026.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/vs-furnace",
  },
  openGraph: {
    title: "Heat Pump vs Furnace: The Real Math in 2026",
    description:
      "Installation cost, operating cost, rebates, and total cost of ownership compared — with real numbers, not marketing.",
    url: "https://homeenergybasics.com/heat-pumps/vs-furnace",
    type: "article",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is a heat pump cheaper than a gas furnace?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on what you're comparing. A heat pump costs more to install ($12,000–$18,000 vs $5,000–$9,000 for a furnace + AC). But a heat pump replaces both your furnace and air conditioner in one system. When you compare heat pump vs furnace + AC together, the installation cost gap narrows to $2,000–$5,000. Operating costs depend on your local gas and electricity prices — heat pumps are cheaper to run in most of the country, but homes with very cheap natural gas (under $1.00/therm) may see similar or lower operating costs with gas.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a heat pump cost vs a furnace in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A ducted heat pump system typically costs $12,000–$18,000 installed. A gas furnace costs $5,000–$9,000 installed, and a central AC unit adds $4,000–$8,000. So furnace + AC together costs $9,000–$17,000 — comparable to a heat pump. After state and utility rebates ($2,000–$10,000+ in many states), the heat pump often costs less than furnace + AC. Federal tax credits are no longer available as of 2026.",
      },
    },
    {
      "@type": "Question",
      name: "Do heat pumps work as well as furnaces in cold weather?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Modern cold-climate heat pumps heat effectively down to -15°F to -20°F. They will keep a well-insulated home comfortable in most U.S. climates. However, heat pump efficiency drops as temperature falls — at very low temperatures, operating costs increase. In the coldest parts of the country (northern Minnesota, Montana, North Dakota), dual-fuel systems that pair a heat pump with a gas furnace backup are a practical solution.",
      },
    },
    {
      "@type": "Question",
      name: "Is it worth replacing a gas furnace with a heat pump?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If your furnace is working and gas is cheap, replacing it purely for efficiency gains usually has a long payback (12–20 years). But if your furnace is 15+ years old or your AC also needs replacement, a heat pump makes financial sense because it replaces both systems. Strong state rebates ($5,000+) can also tip the math in favor of early replacement.",
      },
    },
    {
      "@type": "Question",
      name: "What are the disadvantages of a heat pump compared to a furnace?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The main disadvantages are higher upfront cost (when not replacing AC simultaneously), reduced efficiency in extreme cold (below 0°F), need for a backup heat source in the coldest climates, higher electricity bills if electricity is expensive relative to gas, and potential need for electrical panel upgrades in older homes. Heat pumps also require proper sizing and good insulation to perform well — an oversized heat pump in a poorly insulated home is the most common source of complaints.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a heat pump last compared to a furnace?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A heat pump typically lasts 15–20 years, similar to a central AC unit. A gas furnace typically lasts 15–25 years. Because a heat pump runs year-round (heating and cooling), it accumulates more operating hours than a furnace that only runs in winter. The compressor is the most expensive component to replace if it fails outside warranty.",
      },
    },
    {
      "@type": "Question",
      name: "Is a heat pump cheaper than a furnace in cold climates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In many cold climates, modern cold-climate heat pumps remain efficient down to -15°F or lower and cost less to operate than a gas furnace at average energy prices. However, homes with very cheap natural gas (under $0.80/therm) or poor insulation may still see lower operating costs with a gas furnace during the coldest months. Dual-fuel systems that pair a heat pump with a gas furnace backup are a practical middle ground in these situations.",
      },
    },
  ],
};

export default function VsFurnacePage() {
  const verifiedDate = "2026-03-25";
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
            {" "}/ vs Furnace
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Heat Pump vs Furnace: The Real Math in 2026
          </h1>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            A heat pump costs more upfront than a gas furnace. But a heat pump
            replaces both your furnace and your air conditioner — and{" "}
            <Link href="/heat-pumps/rebates-by-state" className="text-brand-600 hover:underline">
              state rebates
            </Link>{" "}
            can cover <strong>$2,000–$15,000</strong> of the installation. With
            federal tax credits gone, the comparison has shifted. This guide walks
            through the real numbers: installation cost, operating cost, rebate
            impact, and total cost of ownership over 10 and 15 years. No marketing —
            just the math that matters for your decision in 2026.
          </p>

          <p className="text-sm text-gray-500">
            Last verified: {formattedDate}
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Rates and program availability may change after this date.
          </p>

          <nav className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            <a href="#installation" className="text-brand-600 hover:underline">Installation cost</a>
            <a href="#operating" className="text-brand-600 hover:underline">Operating cost</a>
            <a href="#rebates" className="text-brand-600 hover:underline">Rebate impact</a>
            <a href="#tco" className="text-brand-600 hover:underline">Total cost of ownership</a>
            <a href="#scenarios" className="text-brand-600 hover:underline">When each wins</a>
          </nav>
        </div>
      </section>

      {/* ---- 2. SHORT VERSION ---- */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Short Version</h2>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Heat pump</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Install cost: <strong>$12,000–$18,000</strong></li>
                <li>Replaces: furnace + AC (one system)</li>
                <li>Rebates available: <strong>$2,000–$15,000+</strong></li>
                <li>Operating cost: lower in most climates</li>
                <li>Lifespan: 15–20 years</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Gas furnace + central AC</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Install cost: <strong>$9,000–$17,000</strong> (both units)</li>
                <li>Replaces: furnace + AC (two systems)</li>
                <li>Rebates available: <strong>$0–$500</strong> (minimal)</li>
                <li>Operating cost: lower if gas is very cheap</li>
                <li>Lifespan: 15–25 years (furnace), 15–20 years (AC)</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5 mb-4">
            <p className="font-semibold text-green-800 mb-1">✓ The key comparison</p>
            <p className="text-sm text-green-900">
              Don&apos;t compare a heat pump to a furnace alone. Compare a heat pump
              to a <strong>furnace + AC together</strong> — because that is what a heat
              pump replaces. When you make that comparison, the upfront cost gap shrinks
              from $7,000–$10,000 to roughly $2,000–$5,000. After rebates, the heat pump
              often costs <strong>less</strong>.
            </p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-5">
            <p className="font-semibold text-red-800 mb-1">✗ Federal tax credits are gone</p>
            <p className="text-sm text-red-900">
              The Section 25C credit is no longer available for equipment placed in
              service after December 31, 2025. That removed $2,000 from the heat pump
              side of the comparison.{" "}
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                Details →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ---- 3. INSTALLATION COST ---- */}
      <section className="py-12 bg-gray-50" id="installation">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Installation Cost Comparison
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            These are typical ranges for a 2,000 sq ft home with existing ductwork.
            Costs vary by region, contractor, equipment brand, and home complexity.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">System</th>
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Labor</th>
                  <th className="text-left p-3 font-semibold">Total Installed</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Ducted heat pump (cold-climate, 3-ton)</td>
                  <td className="p-3">$6,000–$10,000</td>
                  <td className="p-3">$4,000–$8,000</td>
                  <td className="p-3 font-semibold">$12,000–$18,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Gas furnace (96% AFUE)</td>
                  <td className="p-3">$2,500–$4,500</td>
                  <td className="p-3">$2,000–$4,500</td>
                  <td className="p-3 font-semibold">$5,000–$9,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Central AC (16 SEER2, 3-ton)</td>
                  <td className="p-3">$2,000–$4,000</td>
                  <td className="p-3">$2,000–$4,000</td>
                  <td className="p-3 font-semibold">$4,000–$8,000</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3 font-semibold">Furnace + AC combined</td>
                  <td className="p-3">$4,500–$8,500</td>
                  <td className="p-3">$4,000–$8,500</td>
                  <td className="p-3 font-semibold">$9,000–$17,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="font-semibold text-blue-800 mb-1">
              The real gap is smaller than it looks
            </p>
            <p className="text-sm text-blue-900">
              A heat pump at $15,000 vs a furnace at $7,000 looks like an $8,000
              difference. But that furnace doesn&apos;t cool your house. Add $6,000 for
              a new AC, and the furnace + AC total is $13,000. The actual gap is $2,000 —
              before rebates. In states with $5,000+ in heat pump rebates, the heat pump
              can end up <strong>cheaper than furnace + AC</strong>.
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed mt-6">
            Average installation costs vary widely by region — labor rates, permit
            requirements, and equipment availability all differ by state. Check your{" "}
            <Link href="/heat-pumps/rebates-by-state" className="text-brand-600 hover:underline">
              state guide
            </Link>{" "}
            for local rebates that affect the net cost.
          </p>
        </div>
      </section>

      {/* ---- 4. OPERATING COST ---- */}
      <section className="py-12" id="operating">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Operating Cost Comparison
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Operating costs depend on three things: your fuel prices, your climate, and
            the efficiency of your equipment. Here is the per-unit heating cost at two
            common electricity rates. Formula: (electricity rate × 29.3 kWh per therm)
            ÷ COP = cost per therm of delivered heat.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">System</th>
                  <th className="text-left p-3 font-semibold">Efficiency</th>
                  <th className="text-left p-3 font-semibold">Fuel Cost</th>
                  <th className="text-left p-3 font-semibold">Cost per Therm Delivered</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Heat pump (COP 3.0, mild weather)</td>
                  <td className="p-3">300% (COP 3.0)</td>
                  <td className="p-3">$0.12/kWh</td>
                  <td className="p-3 font-semibold">$1.17/therm</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump (COP 3.0, mild weather)</td>
                  <td className="p-3">300% (COP 3.0)</td>
                  <td className="p-3">$0.16/kWh</td>
                  <td className="p-3 font-semibold">$1.56/therm</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump (COP 2.0, cold weather)</td>
                  <td className="p-3">200% (COP 2.0)</td>
                  <td className="p-3">$0.16/kWh</td>
                  <td className="p-3 font-semibold text-red-700">$2.34/therm</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Gas furnace (96% AFUE)</td>
                  <td className="p-3">96%</td>
                  <td className="p-3">$1.10/therm</td>
                  <td className="p-3 font-semibold">$1.15/therm</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Gas furnace (80% AFUE, older)</td>
                  <td className="p-3">80%</td>
                  <td className="p-3">$1.10/therm</td>
                  <td className="p-3 font-semibold">$1.38/therm</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-blue-800 mb-1">
              Per-unit heating cost often favors gas — but that is not the full picture
            </p>
            <p className="text-sm text-blue-900">
              At the national average electricity rate ($0.16/kWh), a heat pump at COP 3.0
              costs <strong>more per therm of heat</strong> than a 96% gas furnace at average
              gas prices. A heat pump only beats gas on per-unit heating cost when electricity
              is below ~$0.12/kWh. So why do heat pump owners often have lower total bills?
              Two reasons: (1) a heat pump replaces your AC too — you compare one energy bill
              against two, and (2) seasonal COP averages 3.0–4.0+ because mild-weather
              operation (COP 4–6 at 40–60°F) outweighs cold-weather dips. The annual total
              is what matters, not the per-therm snapshot.
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-amber-800 mb-1">⚠ The cheap gas exception</p>
            <p className="text-sm text-amber-900">
              If your gas rate is below <strong>$0.80/therm</strong> (common in Texas,
              Oklahoma, Ohio, and parts of the Midwest), even a heat pump with a seasonal
              COP of 3.5 struggles to beat gas on heating cost alone. The heat pump&apos;s
              advantage in those markets comes primarily from eliminating separate AC costs,
              not cheaper heating per unit.{" "}
              <Link href="/heat-pumps/when-not-to" className="text-brand-600 hover:underline">
                See when a heat pump may not make sense
              </Link>.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <p className="font-semibold text-gray-900 mb-2">Typical annual operating cost (total HVAC)</p>
            <p className="text-sm text-gray-700">
              For a 2,000 sq ft home in a cold climate (5,500 heating degree days):
            </p>
            <ul className="text-sm text-gray-700 space-y-1 mt-2">
              <li>Heat pump (seasonal COP ~3.0, heating + cooling): <strong>$900–$1,300/year</strong></li>
              <li>Gas furnace + central AC (gas heating + electricity for cooling): <strong>$1,200–$1,800/year</strong></li>
              <li>Typical annual savings with heat pump: <strong>$200–$600/year</strong></li>
            </ul>
            <p className="text-xs text-gray-500 mt-2">
              Estimates based on national average rates. The heat pump number includes both
              heating and cooling. The gas number includes gas for heating plus electricity
              for a separate AC unit. Your actual savings depend on local gas/electric
              prices, insulation, and climate.
            </p>
          </div>
        </div>
      </section>

      {/* ---- 5. REBATE IMPACT ---- */}
      <section className="py-12 bg-gray-50" id="rebates">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How Rebates Change the Comparison
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Heat pump rebates are the single biggest factor in the 2026 comparison.
            Gas furnaces have almost no rebates available — most utility and state
            programs focus on electrification. This means the effective cost gap
            between a heat pump and furnace + AC shifts dramatically depending on
            where you live.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Rebate Scenario</th>
                  <th className="text-left p-3 font-semibold">Heat Pump (after rebates)</th>
                  <th className="text-left p-3 font-semibold">Furnace + AC</th>
                  <th className="text-left p-3 font-semibold">Difference</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">No rebates</td>
                  <td className="p-3 font-semibold">$15,000</td>
                  <td className="p-3 font-semibold">$13,000</td>
                  <td className="p-3 text-red-700">HP costs $2,000 more</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">$2,000 utility rebate</td>
                  <td className="p-3 font-semibold">$13,000</td>
                  <td className="p-3 font-semibold">$13,000</td>
                  <td className="p-3 text-gray-500">Break even</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">$5,000 (utility + state)</td>
                  <td className="p-3 font-semibold">$10,000</td>
                  <td className="p-3 font-semibold">$13,000</td>
                  <td className="p-3 text-green-700 font-semibold">HP saves $3,000</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">$8,000 (HEAR + utility)</td>
                  <td className="p-3 font-semibold">$7,000</td>
                  <td className="p-3 font-semibold">$13,000</td>
                  <td className="p-3 text-green-700 font-semibold">HP saves $6,000</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">$12,000+ (full stack, income-qualified)</td>
                  <td className="p-3 font-semibold">$3,000</td>
                  <td className="p-3 font-semibold">$13,000</td>
                  <td className="p-3 text-green-700 font-semibold">HP saves $10,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5 mb-4">
            <p className="font-semibold text-green-800 mb-1">
              ✓ In states with $5,000+ rebates, the heat pump usually wins on price
            </p>
            <p className="text-sm text-green-900">
              States like{" "}
              <Link href="/heat-pumps/states/co" className="text-brand-600 hover:underline">Colorado</Link>,{" "}
              <Link href="/heat-pumps/states/ny" className="text-brand-600 hover:underline">New York</Link>,{" "}
              <Link href="/heat-pumps/states/wi" className="text-brand-600 hover:underline">Wisconsin</Link>,{" "}
              <Link href="/heat-pumps/states/md" className="text-brand-600 hover:underline">Maryland</Link>, and{" "}
              <Link href="/heat-pumps/states/ri" className="text-brand-600 hover:underline">Rhode Island</Link>{" "}
              offer enough in combined rebates that a heat pump costs less to install
              than furnace + AC — and less to operate.{" "}
              <Link href="/heat-pumps/stacking-rebates" className="text-brand-600 hover:underline">
                See stacking rules →
              </Link>
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed">
            <Link href="/heat-pumps/rebates-by-state" className="text-brand-600 hover:underline">
              Find your state&apos;s current rebate amounts →
            </Link>
          </p>
        </div>
      </section>

      {/* ---- 6. TOTAL COST OF OWNERSHIP ---- */}
      <section className="py-12" id="tco">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Total Cost of Ownership (10 and 15 Years)
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            The real comparison is not just installation or operating cost alone — it
            is the total you spend over the life of the system. This includes
            installation, annual fuel and electricity, and maintenance.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Scenario: 2,000 sq ft home, cold climate, $5,000 in heat pump rebates
          </h3>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Cost Category</th>
                  <th className="text-left p-3 font-semibold">Heat Pump</th>
                  <th className="text-left p-3 font-semibold">Furnace + AC</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Installation (after rebates)</td>
                  <td className="p-3 font-semibold">$10,000</td>
                  <td className="p-3 font-semibold">$13,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Annual operating cost</td>
                  <td className="p-3">$1,100</td>
                  <td className="p-3">$1,500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Annual maintenance</td>
                  <td className="p-3">$150</td>
                  <td className="p-3">$200 (two systems)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">10-year total</td>
                  <td className="p-3 font-semibold text-green-700">$22,500</td>
                  <td className="p-3 font-semibold">$30,000</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3 font-semibold">15-year total</td>
                  <td className="p-3 font-semibold text-green-700">$28,750</td>
                  <td className="p-3 font-semibold">$38,500</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gray-100 rounded-lg p-5 mb-6">
            <p className="font-semibold text-gray-900 mb-1">
              15-year savings with heat pump: ~$9,750
            </p>
            <p className="text-sm text-gray-700">
              In this scenario, the heat pump saves roughly <strong>$400/year</strong> in
              operating costs, starts $3,000 cheaper after rebates, and delivers about
              <strong> ~$9,750 in total savings</strong> over 15 years. Without rebates,
              the savings shrink to about $3,000–$4,000 over 15 years.
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="font-semibold text-amber-800 mb-1">⚠ When the furnace wins on total cost</p>
            <p className="text-sm text-amber-900">
              If your gas is cheap (under $0.80/therm), you get no meaningful rebates,
              and you are only replacing the furnace (not the AC), the gas furnace can
              have a lower total cost of ownership. The crossover typically happens
              when gas is 40%+ cheaper than the national average <strong>and</strong>{" "}
              heat pump rebates are under $2,000.
            </p>
          </div>
        </div>
      </section>

      {/* ---- 7. WHEN EACH WINS ---- */}
      <section className="py-12 bg-gray-50" id="scenarios">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            When Each System Wins
          </h2>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Heat pump wins when:
          </h3>

          <div className="space-y-4 mb-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ You need both heating and cooling</p>
              <p className="text-sm text-green-900">
                If your AC is also aging or you are building new, the heat pump replaces
                two systems with one. The cost comparison becomes heat pump vs furnace +
                AC, which is much closer — and rebates often tip it in the heat pump&apos;s
                favor.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Your state has strong rebates</p>
              <p className="text-sm text-green-900">
                In states with $5,000+ in{" "}
                <Link href="/heat-pumps/stacking-rebates" className="text-brand-600 hover:underline">
                  stackable rebates
                </Link>, the heat pump is often cheaper to install than furnace + AC.
                Combined with lower operating costs, it wins on total cost of ownership
                at every time horizon.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ You heat with oil, propane, or electric resistance</p>
              <p className="text-sm text-green-900">
                These are all more expensive than natural gas. A heat pump cuts operating
                costs by 30–70% compared to oil, propane, or electric baseboard heat.
                The payback is fast even without rebates.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ You plan to stay 5+ years</p>
              <p className="text-sm text-green-900">
                The heat pump&apos;s lower operating costs compound over time. With
                moderate rebates, the payback period is typically 3–7 years. After that,
                every year is pure savings.
              </p>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Gas furnace wins when:
          </h3>

          <div className="space-y-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Replacing furnace only (AC is fine)</p>
              <p className="text-sm text-gray-600 mt-1">
                If your AC is relatively new and only the furnace needs replacement, a
                heat pump is competing against just the furnace cost ($5,000–$9,000 vs
                $12,000–$18,000). That is a big gap to close with operating savings alone.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Very cheap natural gas + expensive electricity</p>
              <p className="text-sm text-gray-600 mt-1">
                If gas is under $0.80/therm and electricity is over $0.18/kWh, the
                operating cost advantage of a heat pump shrinks or disappears. States
                like{" "}
                <Link href="/heat-pumps/states/tx" className="text-brand-600 hover:underline">Texas</Link>,{" "}
                <Link href="/heat-pumps/states/ok" className="text-brand-600 hover:underline">Oklahoma</Link>,
                and parts of{" "}
                <Link href="/heat-pumps/states/oh" className="text-brand-600 hover:underline">Ohio</Link>{" "}
                have this dynamic.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">No meaningful rebates available</p>
              <p className="text-sm text-gray-600 mt-1">
                In states with under $1,500 in total heat pump rebates and no active
                HEAR program, the higher installation cost is hard to justify on
                operating savings alone — especially with cheap gas.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Selling within 2–3 years</p>
              <p className="text-sm text-gray-600 mt-1">
                You will not recoup the higher installation cost through energy savings
                or resale premium in that timeframe. A furnace replacement is the
                pragmatic choice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- 8. DUAL FUEL ---- */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            The Dual-Fuel Option
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            If the comparison feels like a toss-up, a dual-fuel system may be the
            answer. This pairs a heat pump with your existing gas furnace — the heat
            pump runs when it is efficient (above ~25–35°F), and the furnace kicks in
            during the coldest weather. You get heat pump efficiency for 70–80% of the
            heating season and cheap gas backup for the rest.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Dual-fuel is especially practical in cold-climate states with cheap gas —{" "}
            <Link href="/heat-pumps/states/mn" className="text-brand-600 hover:underline">Minnesota</Link>,{" "}
            <Link href="/heat-pumps/states/wi" className="text-brand-600 hover:underline">Wisconsin</Link>,{" "}
            <Link href="/heat-pumps/states/mi" className="text-brand-600 hover:underline">Michigan</Link>,
            and{" "}
            <Link href="/heat-pumps/states/il" className="text-brand-600 hover:underline">Illinois</Link>.
            Some utilities (CenterPoint Energy in Minnesota, Washington Gas in Virginia)
            specifically offer rebates for dual-fuel installations.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="font-semibold text-blue-800 mb-1">
              Dual-fuel installation cost
            </p>
            <p className="text-sm text-blue-900">
              Typically <strong>$10,000–$14,000</strong> if your furnace is staying in
              place and you are adding the heat pump. Lower than a full heat pump
              replacement because you are not removing the furnace or modifying the gas
              line. Rebates still apply to the heat pump component.
            </p>
          </div>
        </div>
      </section>

      {/* ---- 9. WHAT TO DO NEXT ---- */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What to Do Next
          </h2>

          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-gray-900">Check your state&apos;s rebates</p>
                <p className="text-sm text-gray-700">
                  Rebates are the biggest variable in the comparison. Find out exactly
                  what is available in your state before getting quotes.{" "}
                  <Link href="/heat-pumps/rebates-by-state" className="text-brand-600 hover:underline">
                    Heat pump rebates by state →
                  </Link>
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900">Get quotes for both options</p>
                <p className="text-sm text-gray-700">
                  Ask contractors for separate quotes: one for a heat pump, one for
                  furnace + AC. Make sure the heat pump quote includes the rebate
                  paperwork.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-900">Compare total cost, not just sticker price</p>
                <p className="text-sm text-gray-700">
                  Use the installed cost after rebates + estimated annual operating cost
                  × years you plan to stay. That gives you the true comparison.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <p className="font-semibold text-gray-900">Check if HEAR is coming to your state</p>
                <p className="text-sm text-gray-700">
                  If HEAR is approved but not launched, waiting could save you $4,000–$8,000.
                  But HEAR is not retroactive — projects started before launch are not eligible.{" "}
                  <Link href="/heat-pumps/stacking-rebates" className="text-brand-600 hover:underline">
                    Stacking rules →
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- 10. FAQ ---- */}
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

      {/* ---- 11. SEE ALSO ---- */}
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
              <Link href="/heat-pumps/when-not-to" className="text-brand-600 hover:underline">
                When NOT to Get a Heat Pump: 7 Situations Where It Doesn&apos;t Make Sense
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

      {/* ---- 12. DISCLAIMER ---- */}
      <section className="py-8">
        <div className="container-narrow">
          <div className="bg-gray-100 rounded-lg p-6">
            <p className="text-gray-500 text-xs leading-relaxed">
              <strong>Disclaimer:</strong> This page compares typical heat pump and gas
              furnace costs using estimated national averages. It does not calculate
              savings for your specific home, guarantee outcomes, or represent any
              incentive program. Actual costs depend on your location, energy prices,
              home size, insulation quality, equipment selection, and contractor pricing.
              Energy prices and rebate programs change without notice. Always get
              multiple contractor quotes and confirm current rebate amounts with your
              state energy office and utility before making HVAC decisions.
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
