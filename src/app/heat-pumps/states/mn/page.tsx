// src/app/heat-pumps/states/mn/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";

export const metadata: Metadata = {
  title:
    "Minnesota Heat Pump Rebates 2026: What's Actually Available After Federal Credits Ended | Home Energy Basics",
  description:
    "No federal heat pump tax credits in 2026. Here's what Minnesota homeowners can actually use: Xcel Energy, CenterPoint, Minnesota Power rebates, city programs, and pending HEAR/HOMES status.",
  alternates: {
    canonical:
      "https://homeenergybasics.com/heat-pumps/states/mn",
  },
  openGraph: {
    title:
      "Minnesota Heat Pump Rebates 2026: What's Actually Available",
    description:
      "Federal credits ended. Utility rebates, city programs, and CIP incentives are what's active now in Minnesota. HEAR/HOMES are funded but haven't launched.",
    url: "https://homeenergybasics.com/heat-pumps/states/mn",
    type: "article",
  },
};

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function MinnesotaHeatPumpPage() {
  const mnIncentive = incentives.MN;
  const formattedDate = formatDate(mnIncentive.lastVerified);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Are there federal heat pump tax credits in Minnesota in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Both the Section 25C and Section 25D federal tax credits ended for property placed in service after December 31, 2025. Minnesota homeowners installing heat pumps in 2026 should not plan on federal tax credits.",
        },
      },
      {
        "@type": "Question",
        name: "What heat pump rebates are available in Minnesota in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Utility rebates are the primary incentive. Xcel Energy offers up to $2,000+ for cold climate air source heat pumps through their standard and Clean Heat Plan programs. CenterPoint Energy offers $1,100 for ducted ASHPs paired with a gas furnace. Minnesota Power and electric co-ops also have programs. Several cities offer additional matching rebates.",
        },
      },
      {
        "@type": "Question",
        name: "Has Minnesota's HEAR/HOMES program launched?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. As of February 2, 2026, Minnesota's Save Energy Minnesota program has not launched. The state is waiting for formal DOE approval. There is no estimated launch date. HEAR rebates cannot be applied retroactively — do not install before the program launches if you plan to use HEAR.",
        },
      },
      {
        "@type": "Question",
        name: "Can I stack utility rebates with city rebates in Minnesota?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, in many cases. Cities like Minneapolis, Edina, St. Louis Park, Coon Rapids, and Northfield offer bonus rebates that stack on top of utility rebates. Most require you to receive the utility rebate first. Check your city's specific program rules.",
        },
      },
      {
        "@type": "Question",
        name: "Does Xcel Energy offer a lower electric rate for heat pump owners?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Xcel's electric space heating rate is 6.537 cents per kWh from October through May, significantly below the standard residential rate. You must call Xcel to enroll. Your heat pump must provide at least 50% of your home's heating.",
        },
      },
      {
        "@type": "Question",
        name: "Should I wait for HEAR/HOMES or install a heat pump now?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on your situation. HEAR rebates are not retroactive — if you install before the program launches, you won't qualify. However, the Minnesota Department of Commerce does not recommend delaying needed repairs. If you need a system now, utility and city rebates are available today. If you can wait and may be income-qualified, tracking the HEAR launch could save significant money.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd data={faqJsonLd} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-50 via-white to-energy-50 py-12 md:py-16">
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
              / Minnesota
            </p>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Minnesota Heat Pump Rebates 2026: What's Actually Available
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              There are no federal residential heat pump tax credits in 2026.
              Here's what Minnesota homeowners can actually use right now — and
              what's coming.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: {formattedDate}
            </p>
          </div>
        </div>
      </section>

      {/* Status Card */}
      <section className="py-8">
        <div className="container-narrow">
          <StatusCard incentive={mnIncentive} />
        </div>
      </section>

      {/* Status Summary */}
      <section className="py-12 border-b">
        <div className="container-wide">
          <div className="card-highlight">
            <h2 className="text-xl font-semibold mb-6">
              Minnesota incentive status at a glance
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-red-600 mb-3">
                  ✗ Not available
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>Federal 25C heat pump credit</li>
                  <li>Federal 25D geothermal credit</li>
                  <li>
                    <Link
                      href="/federal-heat-pump-tax-credit-expired"
                      className="text-brand-600 underline"
                    >
                      Why these ended →
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-forest-600 mb-3">
                  ✓ Active now
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>Xcel Energy rebates</li>
                  <li>CenterPoint Energy rebates</li>
                  <li>Minnesota Power rebates</li>
                  <li>Electric co-op programs</li>
                  <li>City bonus rebate programs</li>
                  <li>CIP (Conservation Improvement Program)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-amber-600 mb-3">
                  ⏳ Funded but not launched
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>HEAR rebates (income-based)</li>
                  <li>HOMES rebates (savings-based)</li>
                  <li>State heat pump rebate</li>
                  <li>Electrical panel grants</li>
                  <li className="text-amber-700 font-medium">
                    No estimated launch date
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Utility Rebates */}
      <section className="py-12">
        <div className="container-narrow">
          <div className="prose prose-lg max-w-none">
            <h2>Utility rebates (active now)</h2>
            <p>
              Utility rebates are the most accessible incentive for Minnesota
              homeowners in 2026. These run under the state's Conservation
              Improvement Program (CIP) framework and are independent of
              federal tax credits.
            </p>
          </div>

          {/* Xcel */}
          <div className="card mt-8">
            <h3 className="text-xl font-semibold mb-4">Xcel Energy</h3>
            <p className="text-sm text-gray-500 mb-4">
              Serves Twin Cities metro and much of southern/central Minnesota
            </p>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-gray-900">
                      Cold Climate Air Source Heat Pump
                    </p>
                    <p className="text-sm text-gray-600">
                      Standard rebate + Clean Heat Plan bonus. Calculated per heating
                      ton at 5°F. Verify current amounts on{" "}
                      <a
                        href="https://mn.my.xcelenergy.com/s/residential/home-rebates"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-600 underline"
                      >
                        Xcel's rebate page
                      </a>.
                    </p>
                  </div>
                  <p className="font-semibold text-forest-600 text-right whitespace-nowrap ml-4">
                    Up to $2,250/ton
                  </p>
                </div>
              </div>
              <div className="border-b pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-gray-900">
                      Heat Pump Water Heater
                    </p>
                    <p className="text-sm text-gray-600">
                      ENERGY STAR rated or AHRI listed
                    </p>
                  </div>
                  <p className="font-semibold text-forest-600 text-right whitespace-nowrap ml-4">
                    $400 – $500
                  </p>
                </div>
              </div>
              <div className="border-b pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-gray-900">
                      Electrical Panel Upgrade
                    </p>
                    <p className="text-sm text-gray-600">
                      Increased amperage, certified electrician required
                    </p>
                  </div>
                  <p className="font-semibold text-forest-600 text-right whitespace-nowrap ml-4">
                    Up to $1,500
                  </p>
                </div>
              </div>
              <div className="border-b pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-gray-900">
                      Whole Home Efficiency Bonus
                    </p>
                    <p className="text-sm text-gray-600">
                      25% bonus on standard rebates when you complete 3+
                      projects within 2 years (energy audit required)
                    </p>
                  </div>
                  <p className="font-semibold text-forest-600 text-right whitespace-nowrap ml-4">
                    +25% bonus
                  </p>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-gray-900">
                      Electric Space Heating Rate
                    </p>
                    <p className="text-sm text-gray-600">
                      Reduced rate Oct–May for homes heated 50%+ by heat pump.
                      Call Xcel to enroll.
                    </p>
                  </div>
                  <p className="font-semibold text-forest-600 text-right whitespace-nowrap ml-4">
                    6.5¢/kWh
                  </p>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  vs. standard rate (see Xcel for current pricing)
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t">
              <a
                href="https://mn.my.xcelenergy.com/s/residential/home-rebates"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 font-medium hover:underline text-sm"
              >
                Xcel Energy Rebates Page ↗
              </a>
            </div>
          </div>

          {/* CenterPoint */}
          <div className="card mt-6">
            <h3 className="text-xl font-semibold mb-4">CenterPoint Energy</h3>
            <p className="text-sm text-gray-500 mb-4">
              Natural gas service in Twin Cities metro area
            </p>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-gray-900">
                      Ducted Air Source Heat Pump
                    </p>
                    <p className="text-sm text-gray-600">
                      Must be paired with 92%+ AFUE gas furnace (hybrid setup).
                      Switchover at 40°F or lower.
                    </p>
                  </div>
                  <p className="font-semibold text-forest-600 text-right whitespace-nowrap ml-4">
                    $1,100
                  </p>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  $400 for new construction
                </p>
              </div>
              <div className="border-b pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-gray-900">
                      Insulation + Air Sealing
                    </p>
                    <p className="text-sm text-gray-600">
                      Attic, wall insulation, and air sealing combined
                    </p>
                  </div>
                  <p className="font-semibold text-forest-600 text-right whitespace-nowrap ml-4">
                    Up to $2,800
                  </p>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-gray-900">
                      High-Efficiency Furnace
                    </p>
                    <p className="text-sm text-gray-600">
                      Varies by efficiency rating
                    </p>
                  </div>
                  <p className="font-semibold text-forest-600 text-right whitespace-nowrap ml-4">
                    Up to $1,000
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t">
              <a
                href="https://www.centerpointenergy.com/en-us/SaveEnergyandMoney/Pages/default.aspx?sa=mn&au=res"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 font-medium hover:underline text-sm"
              >
                CenterPoint Energy Programs ↗
              </a>
            </div>
          </div>

          {/* Minnesota Power */}
          <div className="card mt-6">
            <h3 className="text-xl font-semibold mb-4">Minnesota Power</h3>
            <p className="text-sm text-gray-500 mb-4">
              Electric service in northeastern Minnesota (Duluth area)
            </p>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-gray-900">
                      Air Source Heat Pump
                    </p>
                    <p className="text-sm text-gray-600">
                      Must use participating contractor.{" "}
                      <a
                        href="https://www.mnpower.com/ProgramsRebates/ASHPRebates"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-600 underline"
                      >
                        See MN Power for current amounts
                      </a>.
                    </p>
                  </div>
                  <p className="font-semibold text-forest-600 text-right whitespace-nowrap ml-4">
                    Varies by system
                  </p>
                </div>
              </div>
              <div className="border-b pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-gray-900">
                      Ground Source Heat Pump
                    </p>
                    <p className="text-sm text-gray-600">
                      $1,000/ton with MNGHPA Master Installer
                    </p>
                  </div>
                  <p className="font-semibold text-forest-600 text-right whitespace-nowrap ml-4">
                    $800 – $1,000/ton
                  </p>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-gray-900">
                      Heat Pump Water Heater
                    </p>
                    <p className="text-sm text-gray-600">
                      Valid through Dec 31, 2026.{" "}
                      <a
                        href="https://www.mnpower.com/ProgramsRebates/WaterHeaterRebate"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-600 underline"
                      >
                        See MN Power for amount
                      </a>.
                    </p>
                  </div>
                  <p className="font-semibold text-forest-600 text-right whitespace-nowrap ml-4">
                    $300+
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t">
              <a
                href="https://www.mnpower.com/ProgramsRebates/ASHPRebates"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 font-medium hover:underline text-sm"
              >
                Minnesota Power Rebates ↗
              </a>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mt-8">
            <p>
              <strong>Electric co-ops:</strong> Many Minnesota electric
              cooperatives also offer heat pump rebates and dual fuel rates.
              Check with your local co-op directly. Use the{" "}
              <a
                href="https://www.mnashp.org/incentives-rates-financing"
                target="_blank"
                rel="noopener noreferrer"
              >
                MN ASHP Collaborative utility rebate database
              </a>{" "}
              to look up your specific utility.
            </p>
          </div>
        </div>
      </section>

      {/* City Programs */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <div className="prose prose-lg max-w-none">
            <h2>City and local programs (stackable)</h2>
            <p>
              Several Minnesota cities offer bonus rebates that stack on top of
              utility rebates. Most require you to receive the utility rebate
              first.
            </p>
          </div>

          <div className="space-y-4 mt-8">
            <div className="card">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">Minneapolis</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Bonus rebates for insulation, ASHP, HPWH, and furnace
                    upgrades. Must receive utility rebate first. Projects
                    completed after Dec 15, 2025. First come, first served.
                  </p>
                </div>
                <p className="font-semibold text-forest-600 text-right whitespace-nowrap ml-4">
                  Up to $14,000
                </p>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Total program cap across all eligible improvements: $14,000 in
                Green Zones · $5,000 all other Minneapolis residents. Multiple
                projects can each earn a bonus up to the cap.
              </p>
              <a
                href="https://www.mncee.org/minneapolis-bonus-rebate-program"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 text-xs font-medium hover:underline mt-2 inline-block"
              >
                Full program details at CEE ↗
              </a>
            </div>

            <div className="card">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">Edina</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Community Climate Action Fund matches utility rebates for
                    cold climate ASHPs. Home Energy Squad visit required within 36
                    months.
                  </p>
                </div>
                <p className="font-semibold text-forest-600 text-right whitespace-nowrap ml-4">
                  50 – 100% match
                </p>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                100% match for environmental justice bonus qualifying residents
              </p>
            </div>

            <div className="card">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">St. Louis Park</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Climate Champions cost-share matches utility rebates. Home
                    Energy Squad visit required. Apply before project completion.
                  </p>
                </div>
                <p className="font-semibold text-forest-600 text-right whitespace-nowrap ml-4">
                  50 – 100% match
                </p>
              </div>
            </div>

            <div className="card">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">Coon Rapids</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Green Homes Program matches 50% of awarded utility rebate for
                    ASHPs.
                  </p>
                </div>
                <p className="font-semibold text-forest-600 text-right whitespace-nowrap ml-4">
                  Up to $250
                </p>
              </div>
            </div>

            <div className="card">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">Northfield</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Matches 50% of awarded Xcel Energy heat pump rebates.
                  </p>
                </div>
                <p className="font-semibold text-forest-600 text-right whitespace-nowrap ml-4">
                  Up to $2,500
                </p>
              </div>
            </div>

            <div className="card">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">Hopkins</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Climate Solutions Fund rebates for ENERGY STAR cold climate
                    ASHPs. Income-qualified option available.
                  </p>
                </div>
                <p className="font-semibold text-forest-600 text-right whitespace-nowrap ml-4">
                  Varies
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mt-8">
            <p>
              This list is not exhaustive. Other Minnesota cities may have
              similar programs. Check with your city's sustainability or energy
              office directly.
            </p>
          </div>
        </div>
      </section>

      {/* HEAR/HOMES */}
      <section className="py-12">
        <div className="container-narrow">
          <div className="prose prose-lg max-w-none">
            <h2>HEAR and HOMES rebates (funded but not launched)</h2>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-6 not-prose">
              <p className="text-amber-800 font-medium mb-2">Current status</p>
              <p className="text-gray-700 mb-3">
                As of February 2, 2026, the Minnesota Department of Commerce
                states: <strong>"Save Energy Minnesota has not launched yet.
                Minnesota is waiting for formal approval from US Department of
                Energy to launch the program. There is no estimated program
                launch date."</strong>
              </p>
              <p className="text-sm text-gray-600">
                This applies to HEAR, HOMES, the state heat pump rebate, and
                residential electrical panel grants. These are state-administered
                rebates (not tax credits) and will require program enrollment and
                contractor approval when they launch.
              </p>
              <p className="text-xs text-gray-500 mt-3">
                Program status last updated by MN Commerce: February 2, 2026.
                Page last reviewed: {formattedDate}.
              </p>
            </div>

            <h3>What these programs will offer (when they launch)</h3>

            <p><strong>HEAR (Home Electrification and Appliance Rebates)</strong></p>
            <ul>
              <li>Point-of-sale rebates for income-qualified households</li>
              <li>Covers heat pumps, heat pump water heaters, insulation, air sealing, electrical panels</li>
              <li>Up to $8,000 for households below 80% AMI</li>
              <li>Up to $4,000 for households between 80–150% AMI</li>
              <li>Requires working with an approved contractor</li>
              <li><strong>Cannot be applied retroactively</strong></li>
            </ul>

            <p><strong>HOMES (Home Efficiency Rebates)</strong></p>
            <ul>
              <li>Whole-home energy efficiency rebates</li>
              <li>Amount based on modeled energy savings and household income</li>
              <li>Requires BPI-2400 compliant energy assessment before upgrades</li>
              <li>Minnesota is prioritizing weatherization upgrades</li>
              <li>May be retroactive to August 16, 2022, but this is not guaranteed</li>
            </ul>

            <p><strong>State Heat Pump Rebate</strong></p>
            <ul>
              <li>Additional state rebate that stacks on top of HEAR</li>
              <li>Requires HEAR approval first</li>
              <li>Only for ENERGY STAR certified cold climate ASHPs</li>
              <li>Will not launch until HEAR launches</li>
            </ul>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-6 not-prose">
              <p className="text-red-800 font-medium mb-2">
                Critical: do not install early if you plan to use HEAR
              </p>
              <p className="text-gray-700">
                HEAR rebates are not retroactive. If you install a heat pump
                before the program launches and before being approved through an
                approved contractor, you will not be eligible for the HEAR
                rebate or the state heat pump rebate. The Minnesota
                Department of Commerce does not recommend delaying needed
                repairs, but if you can wait and may be income-qualified,
                tracking the launch is important.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stacking */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <div className="prose prose-lg max-w-none">
            <h2>How stacking works (today vs. when HEAR launches)</h2>
            <p>
              Stacking depends on whether HEAR/HOMES has launched. Here's the
              safe way to think about it.
            </p>

            <h3>Installing now (before HEAR launches)</h3>
            <ol>
              <li>
                <strong>Utility rebate</strong> (Xcel, CenterPoint, Minnesota
                Power, or your co-op)
              </li>
              <li>
                <strong>City bonus rebate</strong> (often requires the utility
                rebate first)
              </li>
            </ol>

            <h3>Once HEAR launches (income-qualified households)</h3>
            <ol>
              <li>
                <strong>HEAR rebate</strong> (point-of-sale, not retroactive)
              </li>
              <li>
                <strong>State heat pump rebate</strong> (requires HEAR approval
                first)
              </li>
              <li>
                <strong>Utility rebate</strong> (if allowed alongside HEAR for
                your utility/program)
              </li>
              <li>
                <strong>City bonus rebate</strong> (often requires utility
                documentation)
              </li>
            </ol>

            <p>
              Xcel's Whole Home Efficiency bonus (25% on standard rebates) can
              also apply if you complete three or more qualifying projects within
              two years and start with an energy audit.
            </p>
          </div>
        </div>
      </section>

      {/* Financing */}
      <section className="py-12">
        <div className="container-narrow">
          <div className="prose prose-lg max-w-none">
            <h2>Financing options</h2>
            <p>
              Even with rebates, heat pumps require significant upfront
              investment. Minnesota has specific financing programs:
            </p>
            <ul>
              <li>
                <strong>Center for Energy and Environment (CEE)</strong> — Offers
                several loan programs for energy upgrades including heat pumps
              </li>
              <li>
                <strong>Minnesota Energy Loan Plus</strong> — Low-interest
                financing for qualifying energy improvements
              </li>
              <li>
                <strong>Home Energy Squad</strong> — Xcel/CenterPoint customers
                can get subsidized energy audits ($200 rebate from Xcel) that
                help plan upgrades and qualify for additional programs
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* What To Do */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <div className="bg-gray-900 text-white rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-white">
              What to do next
            </h2>
            <ol className="space-y-3 text-gray-300">
              <li>
                <strong className="text-white">1.</strong> Identify your
                utilities (electric + gas) — your rebates depend on who serves
                your home.
              </li>
              <li>
                <strong className="text-white">2.</strong> Check your city — do
                they have a bonus rebate that stacks with utility programs?
              </li>
              <li>
                <strong className="text-white">3.</strong> Get an energy audit —
                Home Energy Squad visits help you qualify for more programs and
                plan the right upgrades.
              </li>
              <li>
                <strong className="text-white">4.</strong> If you may be
                income-qualified (below 150% AMI), decide whether to wait for
                HEAR or proceed with utility rebates now. Remember: HEAR is not
                retroactive.
              </li>
              <li>
                <strong className="text-white">5.</strong> If you proceed now,
                stack utility + city rebates and enroll in Xcel's electric space
                heating rate after installation.
              </li>
            </ol>
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
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">
                Are there federal heat pump tax credits in Minnesota in 2026?
              </h3>
              <p className="text-gray-600">
                No. Both Section 25C and 25D ended for property placed in
                service after December 31, 2025. See our{" "}
                <Link
                  href="/federal-heat-pump-tax-credit-expired"
                  className="text-brand-600 underline"
                >
                  federal credits explainer
                </Link>{" "}
                for details.
              </p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">
                What heat pump rebates are available in Minnesota in 2026?
              </h3>
              <p className="text-gray-600">
                Utility rebates are the primary incentive. Xcel Energy offers up
                to $2,250 per heating ton for cold climate ASHPs. CenterPoint
                offers $1,100 for ducted ASHPs paired with a gas furnace.
                Minnesota Power and co-ops also have programs. Several cities
                offer additional matching rebates.
              </p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">
                Has Minnesota's HEAR/HOMES program launched?
              </h3>
              <p className="text-gray-600">
                No. As of February 2, 2026, the program has not launched and
                there is no estimated date. HEAR rebates cannot be applied
                retroactively.
              </p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">
                Can I stack utility and city rebates?
              </h3>
              <p className="text-gray-600">
                Yes, in most cases. Cities like Minneapolis, Edina, St. Louis
                Park, Coon Rapids, and Northfield offer bonuses that stack on
                utility rebates. Most require the utility rebate first.
              </p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">
                Does Xcel offer a lower electric rate for heat pump owners?
              </h3>
              <p className="text-gray-600">
                Yes. The electric space heating rate is about 6.5¢/kWh from
                October through May (check Xcel for current standard rate). Call Xcel at
                800-895-4999 to enroll. Your heat pump must provide at least 50%
                of your home's heating.
              </p>
            </div>
            <div className="pb-6">
              <h3 className="text-lg font-semibold mb-2">
                Should I wait for HEAR/HOMES or install now?
              </h3>
              <p className="text-gray-600">
                If you need a system now, utility and city rebates are available
                today. If you can wait and may be income-qualified (below 150%
                AMI), tracking the HEAR launch could mean significant additional
                savings. The key factor: HEAR is not retroactive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Sources</h2>
          <div className="space-y-4">
            <a
              href="https://mn.gov/commerce/energy/consumer/energy-programs/hear.jsp"
              target="_blank"
              rel="noopener noreferrer"
              className="card block hover:shadow-md transition-shadow"
            >
              <p className="font-semibold text-brand-600">
                MN Dept. of Commerce — HEAR Program ↗
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Program status, eligibility, and "no estimated launch date"
                notice (updated 2/2/2026)
              </p>
            </a>
            <a
              href="https://mn.gov/commerce/energy/consumer/energy-programs/homes.jsp"
              target="_blank"
              rel="noopener noreferrer"
              className="card block hover:shadow-md transition-shadow"
            >
              <p className="font-semibold text-brand-600">
                MN Dept. of Commerce — HOMES Program ↗
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Whole-home efficiency rebate details
              </p>
            </a>
            <a
              href="https://mn.gov/commerce/energy/consumer/energy-programs/heat-pump.jsp"
              target="_blank"
              rel="noopener noreferrer"
              className="card block hover:shadow-md transition-shadow"
            >
              <p className="font-semibold text-brand-600">
                MN Dept. of Commerce — State Heat Pump Rebate ↗
              </p>
              <p className="text-sm text-gray-500 mt-1">
                State rebate program tied to HEAR
              </p>
            </a>
            <a
              href="https://mn.my.xcelenergy.com/s/residential/home-rebates"
              target="_blank"
              rel="noopener noreferrer"
              className="card block hover:shadow-md transition-shadow"
            >
              <p className="font-semibold text-brand-600">
                Xcel Energy — Residential Rebates ↗
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Current rebate programs and amounts
              </p>
            </a>
            <a
              href="https://www.centerpointenergy.com/en-us/SaveEnergyandMoney/Pages/default.aspx?sa=mn&au=res"
              target="_blank"
              rel="noopener noreferrer"
              className="card block hover:shadow-md transition-shadow"
            >
              <p className="font-semibold text-brand-600">
                CenterPoint Energy — MN Residential Programs ↗
              </p>
              <p className="text-sm text-gray-500 mt-1">
                CIP rebate programs for gas customers
              </p>
            </a>
            <a
              href="https://www.mnashp.org/incentives-rates-financing"
              target="_blank"
              rel="noopener noreferrer"
              className="card block hover:shadow-md transition-shadow"
            >
              <p className="font-semibold text-brand-600">
                MN ASHP Collaborative — Incentives Database ↗
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Utility rebate lookup, city programs, and financing
              </p>
            </a>
            <a
              href="https://www.mncee.org/minneapolis-bonus-rebate-program"
              target="_blank"
              rel="noopener noreferrer"
              className="card block hover:shadow-md transition-shadow"
            >
              <p className="font-semibold text-brand-600">
                CEE — Minneapolis Bonus Rebate Program ↗
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Up to $14,000 in Green Zones, $5,000 elsewhere
              </p>
            </a>
            <a
              href="https://www.irs.gov/newsroom/faqs-for-modification-of-sections-25c-25d-25e-30c-30d-45l-45w-and-179d-under-public-law-119-21-139-stat-72-july-4-2025-commonly-known-as-the-one-big-beautiful-bill-obbb"
              target="_blank"
              rel="noopener noreferrer"
              className="card block hover:shadow-md transition-shadow"
            >
              <p className="font-semibold text-brand-600">
                IRS Fact Sheet 2025-05 — OBBBA Energy Credit FAQs ↗
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Official confirmation of 25C/25D termination
              </p>
            </a>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Last verified: {formattedDate}
          </p>
        </div>
      </section>

      {/* Related */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Related guides
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/federal-heat-pump-tax-credit-expired"
              className="card hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 mb-2">
                Federal Heat Pump Tax Credits Ended
              </h3>
              <p className="text-gray-600 text-sm">
                Why 25C and 25D are gone, what replaced them, and what the
                difference is between tax credits and rebates.
              </p>
            </Link>
            <Link
              href="/heat-pumps"
              className="card hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 mb-2">
                Heat Pump Incentive Status
              </h3>
              <p className="text-gray-600 text-sm">
                Day-accurate status on heat pump rebates by state.
              </p>
            </Link>
            <Link
              href="/battery"
              className="card hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 mb-2">
                Home Battery Guide 2026
              </h3>
              <p className="text-gray-600 text-sm">
                What changed for home batteries after federal credits ended.
              </p>
            </Link>
            <Link
              href="/about"
              className="card hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 mb-2">
                About Our Methodology
              </h3>
              <p className="text-gray-600 text-sm">
                How we verify incentive status and what our timestamps mean.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
