import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Heat Pump vs Gas Furnace Savings by State (2026): Annual Cost Comparison | Home Energy Basics",
  description:
    "How much does a heat pump save vs a gas furnace? State-by-state comparison of annual heating costs for a 2,000 sq ft home using EIA electricity and gas prices.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/savings-by-state",
  },
  openGraph: {
    title: "Heat Pump Savings by State (2026)",
    description:
      "State-by-state comparison of heat pump vs gas furnace annual heating costs. Some states save $600+. Others cost more. Here's the real math.",
    url: "https://homeenergybasics.com/heat-pumps/savings-by-state",
    type: "article",
  },
};

/*
 * METHODOLOGY
 * -----------
 * Reference home: 2,000 sq ft, moderate insulation, UA = 500 BTU/hr/°F
 * Annual heating load (BTU) = HDD × 24 × 500 = HDD × 12,000
 *
 * Gas furnace: 80% AFUE (typical existing furnace)
 *   Therms = heating load / (0.80 × 100,000)
 *   Annual cost = therms × (state gas price per Mcf / 10.37)
 *
 * Heat pump: COP varies by climate
 *   HDD > 7,000 → COP 3.0 (cold-climate inverter)
 *   HDD 5,000–7,000 → COP 3.3
 *   HDD 3,000–5,000 → COP 3.5
 *   HDD < 3,000 → COP 4.2
 *   kWh = heating load / (COP × 3,412)
 *   Annual cost = kWh × state electricity rate
 *
 * DATA SOURCES
 *   Electricity: EIA via ElectricChoice.com, March 2026
 *   Natural gas: EIA via ChooseEnergy.com, November 2025
 *   HDD: EIA SEDS 2024 actual-year (NOAA population-weighted, base 65°F)
 */

interface StateData {
  state: string;
  abbr: string;
  hdd: number;
  elecRate: number; // ¢/kWh
  gasMcf: number; // $/Mcf
  cop: number;
  gasCost: number; // annual $
  hpCost: number; // annual $
  savings: number; // positive = HP saves
  hasPage: boolean;
}

function calc(
  hdd: number,
  elecCents: number,
  gasMcf: number
): { cop: number; gasCost: number; hpCost: number; savings: number } {
  const cop =
    hdd > 7000 ? 3.0 : hdd > 5000 ? 3.3 : hdd > 3000 ? 3.5 : 4.2;
  const heatBtu = hdd * 12000;
  const therms = heatBtu / (0.8 * 100000);
  const gasCost = Math.round(therms * (gasMcf / 10.37));
  const hpKwh = heatBtu / (cop * 3412);
  const hpCost = Math.round(hpKwh * (elecCents / 100));
  return { cop, gasCost, hpCost, savings: gasCost - hpCost };
}

function buildData(): StateData[] {
  const raw: {
    state: string;
    abbr: string;
    hdd: number;
    elec: number;
    gas: number;
    hasPage: boolean;
  }[] = [
    { state: "Alabama", abbr: "al", hdd: 2276, elec: 16.79, gas: 19.31, hasPage: true },
    { state: "Arizona", abbr: "az", hdd: 1913, elec: 15.62, gas: 19.89, hasPage: true },
    { state: "Arkansas", abbr: "ar", hdd: 2787, elec: 13.32, gas: 24.77, hasPage: true },
    { state: "Colorado", abbr: "co", hdd: 6546, elec: 16.33, gas: 10.92, hasPage: true },
    { state: "Connecticut", abbr: "ct", hdd: 5200, elec: 27.84, gas: 16.29, hasPage: true },
    { state: "Delaware", abbr: "de", hdd: 4043, elec: 18.39, gas: 18.84, hasPage: true },
    { state: "Florida", abbr: "fl", hdd: 550, elec: 15.77, gas: 25.39, hasPage: true },
    { state: "Georgia", abbr: "ga", hdd: 2379, elec: 14.6, gas: 18.94, hasPage: true },
    { state: "Idaho", abbr: "id", hdd: 6472, elec: 12.51, gas: 7.24, hasPage: true },
    { state: "Illinois", abbr: "il", hdd: 5068, elec: 18.82, gas: 10.56, hasPage: true },
    { state: "Indiana", abbr: "in", hdd: 4724, elec: 17.42, gas: 11.31, hasPage: true },
    { state: "Iowa", abbr: "ia", hdd: 5745, elec: 13.54, gas: 7.7, hasPage: true },
    { state: "Kansas", abbr: "ks", hdd: 4142, elec: 15.23, gas: 14.29, hasPage: true },
    { state: "Kentucky", abbr: "ky", hdd: 3673, elec: 13.68, gas: 14.02, hasPage: true },
    { state: "Maryland", abbr: "md", hdd: 3955, elec: 22.4, gas: 17.52, hasPage: true },
    { state: "Massachusetts", abbr: "ma", hdd: 5462, elec: 31.51, gas: 22.63, hasPage: true },
    { state: "Michigan", abbr: "mi", hdd: 5565, elec: 20.55, gas: 10.66, hasPage: true },
    { state: "Minnesota", abbr: "mn", hdd: 7217, elec: 16.44, gas: 7.99, hasPage: true },
    { state: "Mississippi", abbr: "ms", hdd: 1957, elec: 14.53, gas: 18.21, hasPage: true },
    { state: "Missouri", abbr: "mo", hdd: 4164, elec: 13.01, gas: 16.48, hasPage: true },
    { state: "Montana", abbr: "mt", hdd: 8016, elec: 14.33, gas: 9.33, hasPage: true },
    { state: "Nebraska", abbr: "ne", hdd: 5454, elec: 13.19, gas: 13.58, hasPage: true },
    { state: "Nevada", abbr: "nv", hdd: 3290, elec: 13.83, gas: 11.96, hasPage: true },
    { state: "New Hampshire", abbr: "nh", hdd: 6587, elec: 27.39, gas: 18.12, hasPage: true },
    { state: "New Jersey", abbr: "nj", hdd: 4563, elec: 22.65, gas: 14.66, hasPage: true },
    { state: "New Mexico", abbr: "nm", hdd: 4078, elec: 15.0, gas: 9.7, hasPage: true },
    { state: "New York", abbr: "ny", hdd: 5244, elec: 27.07, gas: 17.95, hasPage: true },
    { state: "North Carolina", abbr: "nc", hdd: 2901, elec: 15.12, gas: 20.48, hasPage: true },
    { state: "North Dakota", abbr: "nd", hdd: 8189, elec: 12.87, gas: 9.61, hasPage: true },
    { state: "Ohio", abbr: "oh", hdd: 4700, elec: 17.93, gas: 13.33, hasPage: true },
    { state: "Oregon", abbr: "or", hdd: 5046, elec: 16.23, gas: 17.44, hasPage: true },
    { state: "Pennsylvania", abbr: "pa", hdd: 4993, elec: 20.58, gas: 15.31, hasPage: true },
    { state: "Rhode Island", abbr: "ri", hdd: 5226, elec: 31.3, gas: 32.97, hasPage: true },
    { state: "South Carolina", abbr: "sc", hdd: 2243, elec: 15.71, gas: 17.28, hasPage: true },
    { state: "South Dakota", abbr: "sd", hdd: 6798, elec: 14.15, gas: 8.23, hasPage: true },
    { state: "Tennessee", abbr: "tn", hdd: 3191, elec: 13.12, gas: 13.18, hasPage: true },
    { state: "Texas", abbr: "tx", hdd: 1404, elec: 16.18, gas: 25.56, hasPage: true },
    { state: "Utah", abbr: "ut", hdd: 6527, elec: 13.75, gas: 10.21, hasPage: true },
    { state: "Vermont", abbr: "vt", hdd: 7042, elec: 24.89, gas: 18.8, hasPage: true },
    { state: "Virginia", abbr: "va", hdd: 3675, elec: 16.43, gas: 16.58, hasPage: true },
    { state: "Washington", abbr: "wa", hdd: 5297, elec: 14.12, gas: 16.72, hasPage: true },
    { state: "West Virginia", abbr: "wv", hdd: 4334, elec: 16.26, gas: 14.83, hasPage: true },
    { state: "Wisconsin", abbr: "wi", hdd: 6295, elec: 18.45, gas: 10.86, hasPage: true },
    { state: "Wyoming", abbr: "wy", hdd: 7579, elec: 15.18, gas: 12.77, hasPage: true },
  ];

  return raw
    .map((r) => {
      const c = calc(r.hdd, r.elec, r.gas);
      return {
        state: r.state,
        abbr: r.abbr,
        hdd: r.hdd,
        elecRate: r.elec,
        gasMcf: r.gas,
        cop: c.cop,
        gasCost: c.gasCost,
        hpCost: c.hpCost,
        savings: c.savings,
        hasPage: r.hasPage,
      };
    })
    .sort((a, b) => b.savings - a.savings);
}

function formatDollar(n: number): string {
  if (n < 0) return `-$${Math.abs(n).toLocaleString()}`;
  return `$${n.toLocaleString()}`;
}

export default function SavingsByStatePage() {
  const data = buildData();

  const topSavers = data.filter((d) => d.savings > 300);
  const losers = data.filter((d) => d.savings < -100);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much can a heat pump save compared to a gas furnace?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on your state. In states with expensive gas delivery and moderate electricity (like Rhode Island, Arkansas, and North Carolina), a heat pump can save $450–$750 per year on heating costs. In states with cheap gas and cold winters (like Minnesota and Michigan), a gas furnace may actually cost less to operate. The key factor is the ratio of electricity price to gas price in your area.",
        },
      },
      {
        "@type": "Question",
        name: "Do heat pumps save money in cold climates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Modern cold-climate heat pumps can operate efficiently down to -15°F, but operating cost savings depend on local energy prices, not just temperature. In cold states with cheap natural gas (Minnesota, Iowa, South Dakota), a heat pump typically costs more to run than a gas furnace. Even in cold states with expensive gas (Vermont, New Hampshire, Massachusetts), heat pumps can still cost more to run if electricity is also expensive — all three New England states show heat pump operating costs slightly above gas. The clearest savings case in cold climates is when replacing heating oil or propane, which cost significantly more per unit of heat than even expensive natural gas.",
        },
      },
      {
        "@type": "Question",
        name: "Are heat pumps cheaper to run than oil or propane?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Almost always yes. Heating oil costs roughly $2.70–$3.50 per equivalent therm, and propane runs $2.00–$3.00 per equivalent therm. Even in states with expensive electricity, heat pumps typically cost 15–40% less to run than oil or propane systems. This is why heat pumps are especially popular in New England, where many homes still heat with oil.",
        },
      },
      {
        "@type": "Question",
        name: "What assumptions does this savings estimate use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "These estimates are for a 2,000 square foot home with moderate insulation, comparing an 80% AFUE gas furnace to a cold-climate heat pump. Heat pump COP varies by climate zone: 3.0 in the coldest states, up to 4.2 in mild climates. Electricity prices are from EIA data (March 2026) and gas prices from EIA data (November 2025). Actual savings depend on your home's insulation, system sizing, local rates, and usage patterns.",
        },
      },
      {
        "@type": "Question",
        name: "Why do some states lose money switching from gas to a heat pump?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "States where heat pumps cost more to run than gas furnaces typically have two things in common: very cheap natural gas (under $1.00 per therm) and moderate-to-high electricity prices. Minnesota, South Dakota, North Dakota, and Iowa all fit this pattern. In these states, the financial case for heat pumps depends more on rebates, equipment cost, and cooling savings than on heating cost alone.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd data={faqJsonLd} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="container-narrow">
          <nav className="text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-brand-600">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/heat-pumps" className="hover:text-brand-600">
              Heat Pumps
            </Link>{" "}
            / Savings by State
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Heat Pump Savings by State (2026)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            How much does a heat pump actually save on heating bills compared
            to a gas furnace? The answer varies enormously by state. In
            Rhode Island, a heat pump saves roughly <strong>$750 per year</strong>{" "}
            thanks to extremely expensive gas delivery. In Arkansas, the
            savings top <strong>$680</strong>. But in Minnesota, a gas furnace
            costs <strong>$560 less</strong> to run. The difference comes down
            to your local electricity and gas prices. This guide compares
            annual heating costs across {data.length} states for a typical
            2,000 square foot home using current EIA energy prices.
          </p>
          <p className="text-sm text-gray-500">
            Last updated: March 27, 2026
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Energy prices and savings estimates may change after this date.
          </p>
        </div>
      </section>

      {/* Key Findings */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Key Findings
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">
                ✓ Best States for Heat Pump Savings
              </p>
              <p className="text-sm text-green-900">
                Rhode Island, Arkansas, North Carolina, Washington, and Missouri
                save over <strong>$400 per year</strong> on heating vs gas.
                Oregon hits exactly $400. Rhode Island leads at{" "}
                <strong>$749</strong> thanks to extremely expensive gas delivery.
                The common thread: expensive gas relative to electricity.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">
                ✗ States Where Gas Furnaces Cost Less to Run
              </p>
              <p className="text-sm text-red-900">
                Minnesota, Michigan, Connecticut, Montana, and Wisconsin
                show the highest annual operating cost penalty for heat pumps —
                over <strong>$240 per year more</strong> than gas in each case.
                In total, 18 states show heat pump operating costs exceeding
                gas. Cheap natural gas and expensive electricity are the
                common factors.
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
              <p className="font-semibold text-blue-800 mb-1">
                The Price Ratio Matters More Than Climate
              </p>
              <p className="text-sm text-blue-900">
                The biggest predictor of savings is the ratio of electricity
                price to gas price — not how cold your state is. A cold state
                with expensive gas (Rhode Island) can save more than a mild
                state with cheap gas (Nevada).
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="font-semibold text-amber-800 mb-1">
                ⚠ These Are Operating Costs Only
              </p>
              <p className="text-sm text-amber-900">
                This comparison covers heating costs only. Heat pumps also
                provide air conditioning (saving the cost of a separate A/C
                unit), qualify for rebates that reduce upfront cost, and may
                have lower maintenance costs. The full financial picture is
                broader than annual heating bills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Table */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Annual Heating Cost: Heat Pump vs Gas Furnace
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Estimated annual heating costs for a 2,000 sq ft home with moderate
            insulation. Gas furnace assumes 80% AFUE. Heat pump COP varies by
            climate zone (3.0 to 4.2). Positive savings means the heat pump
            costs less to run. Sorted by largest savings first.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">State</th>
                  <th className="text-left p-3 font-semibold">
                    Gas Furnace
                  </th>
                  <th className="text-left p-3 font-semibold">Heat Pump</th>
                  <th className="text-left p-3 font-semibold">
                    Annual Savings
                  </th>
                  <th className="text-left p-3 font-semibold hidden md:table-cell">
                    Elec (¢/kWh)
                  </th>
                  <th className="text-left p-3 font-semibold hidden md:table-cell">
                    Gas ($/Mcf)
                  </th>
                  <th className="text-left p-3 font-semibold hidden lg:table-cell">
                    HDD
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((d, i) => (
                  <tr
                    key={d.abbr}
                    className={`border-b ${
                      d.savings > 300
                        ? "bg-green-50"
                        : d.savings < -100
                          ? "bg-red-50"
                          : ""
                    }`}
                  >
                    <td className="p-3">
                      <Link
                        href={`/heat-pumps/states/${d.abbr}`}
                        className="text-brand-600 hover:underline"
                      >
                        {d.state}
                      </Link>
                    </td>
                    <td className="p-3 font-semibold">
                      {formatDollar(d.gasCost)}
                    </td>
                    <td className="p-3 font-semibold">
                      {formatDollar(d.hpCost)}
                    </td>
                    <td
                      className={`p-3 font-semibold ${
                        d.savings > 0
                          ? "text-green-700"
                          : d.savings < 0
                            ? "text-red-700"
                            : "text-gray-700"
                      }`}
                    >
                      {d.savings > 0
                        ? `+${formatDollar(d.savings)}`
                        : formatDollar(d.savings)}
                    </td>
                    <td className="p-3 hidden md:table-cell">
                      {d.elecRate.toFixed(1)}¢
                    </td>
                    <td className="p-3 hidden md:table-cell">
                      ${d.gasMcf.toFixed(2)}
                    </td>
                    <td className="p-3 hidden lg:table-cell">
                      {d.hdd.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-gray-400">
            Electricity rates: EIA/ElectricChoice, March 2026. Gas rates:
            EIA/ChooseEnergy, November 2025. HDD: EIA SEDS, 2024 actual year
            (NOAA population-weighted). Savings are for heating only; does not
            include cooling savings or rebates.
          </p>
        </div>
      </section>

      {/* Where HP Saves Most */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Where Heat Pumps Save the Most
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Rhode Island is the runaway leader — its natural gas delivery
            cost ($32.97/Mcf) is more than four times the cheapest states,
            making a heat pump save $749 per year even with 31¢/kWh
            electricity. Arkansas ranks second at $688 thanks to gas at
            $24.77/Mcf and cheap electricity at 13.3¢/kWh. North Carolina,
            Washington, and Missouri round out the top five — all combining
            moderate electricity prices with above-average gas delivery costs.
            Washington benefits from some of the cheapest hydropower-based
            electricity in the country at 14.1¢/kWh.
          </p>

          <div className="space-y-4 mb-8">
            {topSavers.slice(0, 5).map((d) => (
              <div
                key={d.abbr}
                className="bg-green-50 border border-green-200 rounded-lg p-5"
              >
                <p className="font-semibold text-green-800 mb-1">
                  ✓{" "}
                  <Link
                    href={`/heat-pumps/states/${d.abbr}`}
                    className="hover:underline"
                  >
                    {d.state}
                  </Link>{" "}
                  — saves {formatDollar(d.savings)}/year
                </p>
                <p className="text-sm text-green-900">
                  Gas furnace: {formatDollar(d.gasCost)}/yr. Heat pump:{" "}
                  {formatDollar(d.hpCost)}/yr. Electricity at{" "}
                  {d.elecRate.toFixed(1)}¢/kWh, gas at ${d.gasMcf.toFixed(2)}
                  /Mcf.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where Gas Wins */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Where Gas Furnaces Cost Less to Run
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            In 18 states, a gas furnace is cheaper to operate than a heat pump.
            The strongest pattern is cold winters plus cheap natural gas:
            Minnesota ($0.77/therm gas, 16.4¢/kWh electricity) shows the
            biggest gap at <strong>$557 per year</strong>. Michigan and
            Connecticut follow a different pattern — their gas is not especially
            cheap, but high electricity prices (20.6¢ and 27.8¢/kWh
            respectively) combined with cold winters still tip the balance
            toward gas. Montana rounds out the top five at $265/yr more for
            heat pumps — extremely cold (8,016 HDD) with cheap gas at $0.90
            per therm.
          </p>

          <div className="space-y-4 mb-8">
            {losers
              .sort((a, b) => a.savings - b.savings)
              .slice(0, 5)
              .map((d) => (
                <div
                  key={d.abbr}
                  className="bg-white border border-gray-200 rounded-lg p-5"
                >
                  <p className="font-semibold text-gray-900">
                    <Link
                      href={`/heat-pumps/states/${d.abbr}`}
                      className="text-brand-600 hover:underline"
                    >
                      {d.state}
                    </Link>{" "}
                    — heat pump costs {formatDollar(Math.abs(d.savings))}{" "}
                    more/year
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Gas furnace: {formatDollar(d.gasCost)}/yr. Heat pump:{" "}
                    {formatDollar(d.hpCost)}/yr. Gas at $
                    {(d.gasMcf / 10.37).toFixed(2)}/therm is hard to beat at{" "}
                    {d.hdd.toLocaleString()} HDD.
                  </p>
                </div>
              ))}
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="font-semibold text-amber-800 mb-1">
              ⚠ Operating Cost Isn&apos;t the Whole Story
            </p>
            <p className="text-sm text-amber-900">
              Even in states where gas furnaces cost less to run, heat pumps may
              still make financial sense. They provide air conditioning (saving
              $500–$1,200 on a separate A/C system), qualify for state and
              utility rebates that reduce installation cost, and avoid the
              safety risks and carbon emissions of gas combustion. Many
              homeowners in these states choose heat pumps for non-financial
              reasons.
            </p>
          </div>
        </div>
      </section>

      {/* Heat Pumps vs Oil/Propane */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Heat Pumps vs Heating Oil and Propane
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The comparison above covers gas furnaces only. If your home heats
            with oil or propane, the case for heat pumps is much stronger.
            Heating oil currently runs roughly $3.50–$4.25 per gallon in most
            markets. For a 2,000 sq ft home in a cold climate, that translates
            to <strong>$2,500–$3,500 per year</strong> in heating costs. A heat
            pump running the same home at COP 3.0 and even New England
            electricity rates would cost $1,500–$2,600 — a savings of{" "}
            <strong>$400–$1,000 per year</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Propane is similar. At $2.50–$3.50 per gallon, a propane furnace
            in a cold climate costs $2,000–$3,000 per year. Heat pumps almost
            always beat propane on operating cost, regardless of state.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-blue-800 mb-1">
              New England: Where This Matters Most
            </p>
            <p className="text-sm text-blue-900">
              Maine, Vermont, and New Hampshire have high heat pump operating
              costs compared to gas — but many homes in these states heat with
              oil, not gas. If your home currently uses heating oil, a heat pump
              will almost certainly reduce your annual heating bill, even with
              New England electricity prices. This is a major reason
              Efficiency Maine and NHSaves promote heat pumps aggressively
              despite expensive electricity.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How We Calculated These Numbers
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Every estimate on this page uses the same formula applied
            consistently across all states. The reference home is 2,000 square
            feet with moderate insulation (heat loss coefficient of 500
            BTU/hr/°F). The gas furnace is an 80% AFUE model — typical of
            existing furnaces in most homes. The heat pump COP varies by
            climate zone: 3.0 for states above 7,000 heating degree days, 3.3
            for 5,000–7,000 HDD, 3.5 for 3,000–5,000 HDD, and 4.2 for mild
            climates under 3,000 HDD. These COPs reflect seasonal averages
            for modern cold-climate inverter heat pumps, accounting for
            defrost cycles and performance degradation at low temperatures.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Electricity prices are from the U.S. Energy Information
            Administration via ElectricChoice.com (March 2026 data). Natural
            gas prices are from EIA via ChooseEnergy.com (November 2025 data —
            the most recent available by state). Heating degree days are from
            EIA&apos;s State Energy Data System (SEDS), using 2024 actual-year
            NOAA population-weighted data. Note that 2024 was warmer than the
            30-year average in most states, so these estimates may slightly
            understate heating costs for a typical year.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            These are estimates for comparison purposes. Your actual costs will
            differ based on your home&apos;s insulation, ductwork condition,
            system sizing, local utility rates (which may differ from the state
            average), and heating habits. Homes with poor insulation will see
            larger absolute numbers but similar percentage differences. Homes
            with high-efficiency 95%+ AFUE furnaces will narrow the gap by
            about 15%. For a deeper comparison of installation costs, equipment
            lifespan, and total cost of ownership, see our{" "}
            <Link
              href="/heat-pumps/vs-furnace"
              className="text-brand-600 hover:underline"
            >
              heat pump vs furnace guide
            </Link>
            .
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Assumption</th>
                  <th className="text-left p-3 font-semibold">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Home size</td>
                  <td className="p-3">2,000 sq ft</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Insulation level</td>
                  <td className="p-3">Moderate (UA = 500 BTU/hr/°F)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Gas furnace efficiency</td>
                  <td className="p-3">80% AFUE</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump type</td>
                  <td className="p-3">Cold-climate inverter (ducted)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">COP: above 7,000 HDD</td>
                  <td className="p-3 font-semibold">3.0</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">COP: 5,000–7,000 HDD</td>
                  <td className="p-3 font-semibold">3.3</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">COP: 3,000–5,000 HDD</td>
                  <td className="p-3 font-semibold">3.5</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">COP: under 3,000 HDD</td>
                  <td className="p-3 font-semibold">4.2</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Gas conversion</td>
                  <td className="p-3">1 Mcf = 10.37 therms</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Electricity data</td>
                  <td className="p-3">EIA, March 2026</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Gas data</td>
                  <td className="p-3">EIA, November 2025</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">HDD data</td>
                  <td className="p-3">EIA SEDS, 2024 actual year (NOAA population-weighted)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What This Means for Rebates */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How Savings Affect the Rebate Equation
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In states where heat pumps save $400+ per year on heating alone,
            the rebate math is straightforward. A <strong>$12,000 heat pump</strong>{" "}
            with a <strong>$4,000 rebate</strong> and <strong>$500/year</strong>{" "}
            in operating savings pays for itself in about 16 years from savings
            alone — faster if you count the avoided cost of a separate air
            conditioner.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            In states where heat pumps cost more to run than gas, rebates
            become the deciding factor. A $4,000–$8,000 rebate can offset years
            of higher operating costs. States with strong rebate programs often
            correspond to states where the operating cost gap is small — which
            is not a coincidence. Programs like Minnesota&apos;s{" "}
            <Link
              href="/heat-pumps/states/mn"
              className="text-brand-600 hover:underline"
            >
              Save Energy Minnesota
            </Link>{" "}
            and Wisconsin&apos;s{" "}
            <Link
              href="/heat-pumps/states/wi"
              className="text-brand-600 hover:underline"
            >
              Focus on Energy HEAR
            </Link>{" "}
            are designed to bridge exactly this gap.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-green-800 mb-1">
              ✓ Best Combined Value: Savings + Rebates
            </p>
            <p className="text-sm text-green-900">
              States where strong operating savings combine with strong rebate
              programs include{" "}
              <Link
                href="/heat-pumps/states/nc"
                className="hover:underline font-semibold"
              >
                North Carolina
              </Link>{" "}
              ($492/yr savings + up to $16,000 HOMES),{" "}
              <Link
                href="/heat-pumps/states/wa"
                className="hover:underline font-semibold"
              >
                Washington
              </Link>{" "}
              ($484/yr savings + up to $14,000 HEAR),{" "}
              <Link
                href="/heat-pumps/states/ga"
                className="hover:underline font-semibold"
              >
                Georgia
              </Link>{" "}
              ($361/yr savings + up to $8,000 HEAR), and{" "}
              <Link
                href="/heat-pumps/states/or"
                className="hover:underline font-semibold"
              >
                Oregon
              </Link>{" "}
              ($400/yr savings + Energy Trust rebates). These are arguably the
              best states in the country to install a heat pump in 2026.
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Federal heat pump tax credits (Sections 25C and 25D) are no longer
            available for equipment installed after December 31, 2025. State and
            utility rebates are now the primary way to reduce upfront costs. See
            our{" "}
            <Link
              href="/federal-heat-pump-tax-credit-expired"
              className="text-brand-600 hover:underline"
            >
              federal credit expiration explainer
            </Link>{" "}
            and{" "}
            <Link
              href="/heat-pumps/stacking-rebates"
              className="text-brand-600 hover:underline"
            >
              rebate stacking guide
            </Link>{" "}
            for details.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqJsonLd.mainEntity.map(
              (
                faq: { name: string; acceptedAnswer: { text: string } },
                index: number
              ) => (
                <div
                  key={index}
                  className="border-b border-gray-200 pb-6"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {faq.name}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* See Also */}
      <section className="py-8 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-3">See also</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/heat-pumps/rebates-by-state"
                className="text-brand-600 hover:underline"
              >
                Heat Pump Rebates by State (2026)
              </Link>
            </li>
            <li>
              <Link
                href="/heat-pumps/stacking-rebates"
                className="text-brand-600 hover:underline"
              >
                Can You Stack Heat Pump Rebates?
              </Link>
            </li>
            <li>
              <Link
                href="/heat-pumps/vs-furnace"
                className="text-brand-600 hover:underline"
              >
                Heat Pump vs Furnace: The Real Math
              </Link>
            </li>
            <li>
              <Link
                href="/heat-pumps/cost"
                className="text-brand-600 hover:underline"
              >
                How Much Does a Heat Pump Cost?
              </Link>
            </li>
            <li>
              <Link
                href="/heat-pumps/tracker"
                className="text-brand-600 hover:underline"
              >
                Heat Pump Rebate Tracker — All 50 States
              </Link>
            </li>
            <li>
              <Link
                href="/federal-heat-pump-tax-credit-expired"
                className="text-brand-600 hover:underline"
              >
                Federal Heat Pump Tax Credits Ended
              </Link>
            </li>
            <li>
              <Link
                href="/battery"
                className="text-brand-600 hover:underline"
              >
                Are Home Batteries Worth It in 2026?
              </Link>
            </li>
            <li>
              <Link
                href="/heat-pumps"
                className="text-brand-600 hover:underline"
              >
                All State Heat Pump Incentives
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* Sources */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://www.eia.gov/electricity/monthly/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 hover:underline"
              >
                U.S. Energy Information Administration — Electric Power Monthly
                (January 2026 data)
              </a>
            </li>
            <li>
              <a
                href="https://www.electricchoice.com/electricity-prices-by-state/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 hover:underline"
              >
                ElectricChoice — Electricity Rates by State (March 2026)
              </a>
            </li>
            <li>
              <a
                href="https://www.eia.gov/dnav/ng/ng_pri_sum_a_epg0_prs_dmcf_m.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 hover:underline"
              >
                U.S. Energy Information Administration — Natural Gas Prices by
                State
              </a>
            </li>
            <li>
              <a
                href="https://www.chooseenergy.com/data-center/natural-gas-rates-by-state/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 hover:underline"
              >
                ChooseEnergy — Natural Gas Rates by State (November 2025)
              </a>
            </li>
            <li>
              <a
                href="https://www.eia.gov/state/seds/sep_fuel/html/pdf/fuel_other.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 hover:underline"
              >
                EIA State Energy Data System — Population, GDP, and Degree
                Days by State (2024)
              </a>
            </li>
            <li>
              <a
                href="https://www.eia.gov/energyexplained/units-and-calculators/degree-days.php"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 hover:underline"
              >
                EIA — Degree Days Explained
              </a>
            </li>
            <li>
              <a
                href="https://www.aga.org/research-policy/resource-library/eia-projects-rising-electricity-prices-widening-the-gap-with-natural-gas-to-4-0x-in-2027/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 hover:underline"
              >
                American Gas Association — EIA Electricity vs Gas Price Ratio
                Projections (March 2026)
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8">
        <div className="container-narrow">
          <div className="bg-gray-100 rounded-lg p-6">
            <p className="text-gray-500 text-xs leading-relaxed">
              <strong>Disclaimer:</strong> These savings estimates are
              illustrative comparisons based on publicly available energy price
              data and standard engineering assumptions. They do not constitute
              financial advice or guarantee specific savings for any household.
              Actual heating costs depend on home insulation, ductwork condition,
              system sizing, local utility rate structures (which may differ from
              state averages), thermostat settings, and weather variability.
              Energy prices fluctuate — the gas and electricity rates used here
              represent a single point in time. We recommend obtaining quotes
              from licensed HVAC contractors and reviewing your actual utility
              bills before making equipment decisions.
            </p>
          </div>
          <div className="mt-6 text-center">
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
