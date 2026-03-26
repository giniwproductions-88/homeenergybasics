import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Maryland Heat Pump Rebates 2026: Up to $15,000 EmPOWER + Utility Programs | Home Energy Basics",
  description:
    "EmPOWER Maryland offers up to $15,000 for electrification. Midstream rebates $800\u20131,700. Potomac Edison adds $4,000. Federal credits ended.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/md",
  },
  openGraph: {
    title: "Maryland Heat Pump Rebates 2026",
    description:
      "EmPOWER up to $15,000 for electrification. Potomac Edison Switch-to-Electric up to $5,700. Montgomery County adds $2,500 \u2014 the complete guide to Maryland heat pump incentives after federal credits expired.",
    url: "https://homeenergybasics.com/heat-pumps/states/md",
    type: "article",
  },
};

export default function MarylandPage() {
  const mdIncentive = incentives.MD;
  const formattedDate = formatDate(mdIncentive.lastVerified);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What heat pump rebates are available in Maryland in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Maryland\u2019s main incentive is EmPOWER Maryland, which offers up to $15,000 (or 75% of project cost) for electrification projects through the Home Performance with ENERGY STAR pathway. Each utility also offers midstream rebates of $800\u2013$1,700 per heat pump without requiring an audit. Potomac Edison\u2019s Switch-to-Electric program adds up to $4,000 on top. Montgomery County\u2019s Electrify MC adds $2,500 for cold-climate heat pumps. The federal 25C tax credit expired December 31, 2025.",
        },
      },
      {
        "@type": "Question",
        name: "What is EmPOWER Maryland?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "EmPOWER Maryland is a state-mandated energy efficiency program funded by utility ratepayer surcharges. It operates through each utility (BGE, Pepco, Potomac Edison, Delmarva Power, SMECO) and offers two pathways: the Home Performance with ENERGY STAR whole-home pathway (up to $15,000 for electrification) and midstream HVAC rebates ($800\u2013$1,700 instant through contractors). A $100 energy audit is required for the HPwES pathway.",
        },
      },
      {
        "@type": "Question",
        name: "Has Maryland launched the HEAR/HOMES rebate program?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Maryland was allocated approximately $136.8 million in IRA rebate funding, but neither HEAR nor HOMES has launched as of March 2026. MEA cannot confirm a launch date. When HEAR opens, it could provide up to $8,000 for heat pumps for income-qualified households.",
        },
      },
      {
        "@type": "Question",
        name: "Which Maryland utility has the best heat pump rebates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Potomac Edison (western Maryland \u2014 Frederick, Hagerstown) currently offers the most generous per-equipment incentives through its Switch-to-Electric program. A cold-climate heat pump can receive $1,700 standard + $4,000 switch-to-electric adder = $5,700 total. Other utilities offer $800\u2013$1,700 through midstream rebates, or up to $15,000 through the whole-home HPwES pathway.",
        },
      },
      {
        "@type": "Question",
        name: "Can I stack EmPOWER with Montgomery County rebates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. EmPOWER utility rebates and Montgomery County\u2019s Electrify MC incentives stack \u2014 they are funded by different sources. A Montgomery County homeowner with Pepco could combine up to $15,000 EmPOWER + $2,500 Electrify MC + $500 HPWH = roughly $18,000 in a best-case scenario.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a cold-climate heat pump in Maryland?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For most of Maryland (Baltimore, Annapolis, DC suburbs), a standard heat pump works well \u2014 design temperatures are 13\u201317\u00b0F. For western Maryland (Frederick, Hagerstown, Cumberland), cold-climate models are advisable since design temperatures drop to 8\u201312\u00b0F. All EmPOWER utilities offer higher rebates for cold-climate models ($1,700 vs. $1,300).",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd data={faqJsonLd} />

      {/* 1. Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="container-narrow">
          <nav className="text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-brand-600">Home</Link>
            {" "}/{" "}
            <Link href="/heat-pumps" className="hover:text-brand-600">Heat Pumps</Link>
            {" "}/ Maryland
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Maryland Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Federal tax credits are gone, but Maryland&apos;s EmPOWER program expanded
            significantly in May 2025. Depending on your utility territory and whether you
            qualify for income-based programs, you may be able to offset anywhere from
            a few thousand dollars to <strong>$15,000+</strong> on a heat pump project.
            This guide covers all major Maryland heat pump incentives available in 2026,
            including EmPOWER, Potomac Edison Switch-to-Electric, and Montgomery County
            Electrify MC. Here&apos;s what&apos;s actually available.
          </p>
          <p className="text-sm text-gray-500">
            Last verified: {formattedDate}
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Rates and program availability may change after this date.
          </p>
        </div>
      </section>

      {/* 2. Status Card */}
      <section className="py-8">
        <div className="container-narrow">
          <StatusCard incentive={mdIncentive} />
        </div>
      </section>

      {/* 3. Short Version */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Short Version</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ EmPOWER Electrification</p>
              <p className="text-sm text-green-900">
                Up to <strong>$15,000</strong> (or 75% of project cost) through the HPwES
                whole-home pathway. All five major utilities participate. Oil and propane
                conversions now qualify.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Midstream + Switch-to-Electric</p>
              <p className="text-sm text-green-900">
                Instant rebates of <strong>$800–$1,700</strong> per unit through contractors,
                no audit needed. Potomac Edison adds up to <strong>$4,000</strong> through
                Switch-to-Electric for a combined <strong>$5,700</strong> per heat pump.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Total Potential Savings</p>
              <p className="text-sm text-green-900">
                $1,700 (midstream, any income) to ~$17,500 (HPwES + Montgomery County).
                Income-qualified households may pay nothing through LIEEP. Full
                electrification packages can reach ~$18,000+ in total incentives.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">✗ Federal Tax Credits Expired</p>
              <p className="text-sm text-red-900">
                Both 25C ($2,000 heat pump) and 25D (30% geothermal) expired Dec 31, 2025.
                No replacement exists.
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 md:col-span-2">
              <p className="font-semibold text-amber-800 mb-1">⚠ $136.8M HEAR/HOMES Still Pending</p>
              <p className="text-sm text-amber-900">
                Maryland was allocated $136.8 million in IRA rebates ($68.6M HOMES + $68.2M
                HEAR). Neither program has launched as of March 2026. MEA cannot confirm a
                date. When HEAR opens, it could add up to $8,000 for income-qualified
                households on top of EmPOWER.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Federal Expired + HEAR/HOMES Pending */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Federal Tax Credits Are Gone</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <p className="text-red-900 leading-relaxed">
              The One Big Beautiful Bill Act (signed July 4, 2025) accelerated expiration
              of both <strong>Section 25C</strong> ($2,000/year for heat pumps) and{" "}
              <strong>Section 25D</strong> (30% of geothermal costs). Equipment must have
              been <strong>installed by December 31, 2025</strong> to qualify — purchase
              date doesn&apos;t matter. The only exception: if you completed installation
              in 2025 but couldn&apos;t use the full 25D credit on your 2025 return, you
              can carry unused amounts forward to 2026.{" "}
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                Full details →
              </Link>
            </p>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">HEAR &amp; HOMES Programs — Not Yet Launched</h3>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="font-semibold text-amber-800 mb-1">⚠ $136.8 Million Allocated, No Launch Date</p>
            <p className="text-sm text-amber-900 mb-3">
              Maryland was allocated ~$136.8 million in IRA home energy rebates: $68.6M
              for HOMES (modeled savings) and $68.2M for HEAR (income-qualified
              electrification). Both received conditional DOE approval, and Maryland
              Environmental Service issued an RFP for a service provider in July 2025.
            </p>
            <p className="text-sm text-amber-900">
              <strong>As of March 2026, neither program is accepting applications.</strong>{" "}
              When HEAR launches, income-qualified households (below 80% AMI) could
              receive up to $8,000 for heat pumps and $1,750 for heat pump water heaters.
              These are separate from EmPOWER rebates and are expected to stack.
            </p>
          </div>
        </div>
      </section>

      {/* 5. EmPOWER Maryland — Main Program */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">EmPOWER Maryland — The Main Program</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            EmPOWER is Maryland&apos;s state-mandated energy efficiency program, funded
            by utility ratepayer surcharges. Every major utility participates: BGE,
            Pepco, Potomac Edison, Delmarva Power, and SMECO. There are two ways to
            access rebates:
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Path 1: Home Performance with ENERGY STAR (HPwES) — Whole-Home</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            This is the high-value path. A $100 energy audit (subsidized — normally ~$400)
            leads to modeled savings recommendations. As of May 2025, electrification
            projects (converting from fossil fuel to heat pump) qualify for up to{" "}
            <strong>$15,000 or 75% of total project cost</strong>, whichever is less.
            Non-electrification improvements cap at $10,000 or 75%. Oil and propane
            systems now qualify — a significant expansion from prior cycles.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Path 2: Midstream HVAC Rebates — Per-Equipment, No Audit</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Instant rebates applied at the point of sale through participating
            contractors. No energy audit required. Available to all homeowners. Amounts
            vary slightly by utility but are standardized across EmPOWER:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Midstream Rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Cold-climate heat pump (ducted)</td>
                  <td className="p-3 font-semibold">$1,700</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Standard air-source heat pump (ducted)</td>
                  <td className="p-3 font-semibold">Up to $1,300</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ductless mini-split</td>
                  <td className="p-3 font-semibold">$800</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">$900–$1,600</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Geothermal heat pump</td>
                  <td className="p-3 font-semibold">$7,000–$7,100</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Smart thermostat</td>
                  <td className="p-3 font-semibold">$100</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-amber-800 mb-1">⚠ Common Mistake: HPwES and Midstream Don&apos;t Stack</p>
            <p className="text-sm text-amber-900">
              HPwES and midstream are generally either/or for the same equipment. You pick
              one path, not both. HPwES offers higher total caps but requires the $100 audit
              and comprehensive project scope. Midstream is instant and simpler but caps at
              the per-unit amounts above. Decide which path fits your project before signing
              a contract.
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <p className="font-semibold text-green-800 mb-1">✓ Best Candidates for Maryland Rebates</p>
            <p className="text-sm text-green-900">
              Homeowners converting from gas, oil, or propane to a heat pump (electrification
              bonus unlocks the $15,000 HPwES cap). Potomac Edison customers switching from
              fossil fuel (highest per-equipment rebates in the state). Montgomery County
              residents (Electrify MC stacks with EmPOWER). Eastern Shore homeowners on
              propane or fuel oil (largest operating cost savings from switching).
            </p>
          </div>
        </div>
      </section>

      {/* 6. Utility-by-Utility Differences */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Utility-by-Utility Differences</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            All five utilities share the EmPOWER framework above. The differences are
            in bonus programs and electrification adders.
          </p>

          {/* BGE */}
          <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">BGE (Baltimore Gas &amp; Electric)</h3>
            <p className="text-sm text-gray-600 mt-1 mb-2">
              Largest utility in Maryland. Baltimore metro + surrounding counties.
            </p>
            <p className="text-sm text-gray-600 mt-1 mb-2">
              <strong>HPwES</strong>: Up to $15,000 electrification / $10,000 non-electrification.{" "}
              <strong>Midstream</strong>: Standard table above. <strong>HPWH</strong>: Up
              to $1,600 via appliance rebate program (instant at Lowe&apos;s/Home Depot or
              mail-in).
            </p>
            <p className="text-sm text-gray-600">
              <strong>Income-qualified</strong>: Limited Income Program — pay $250–$750
              co-pay for up to $5,000–$10,000 in upgrades including HVAC replacement.
            </p>
          </div>

          {/* Pepco */}
          <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Pepco (Potomac Electric Power)</h3>
            <p className="text-sm text-gray-600 mt-1 mb-2">
              Montgomery County, Prince George&apos;s County, DC suburbs.
            </p>
            <p className="text-sm text-gray-600 mt-1 mb-2">
              <strong>HPwES</strong>: Up to $15,000 electrification. Includes 0% interest
              financing for 24 months option.{" "}
              <strong>Midstream</strong>: Same as BGE.{" "}
              <strong>HPWH</strong>: Up to $1,600.
            </p>
            <p className="text-sm text-gray-600">
              Pepco territory overlaps with Montgomery County&apos;s Electrify MC program
              — these stack (see Local Programs below).
            </p>
          </div>

          {/* Potomac Edison */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-5 mb-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Potomac Edison (FirstEnergy) — Best Per-Equipment Rebates</h3>
            <p className="text-sm text-green-900 mb-3">
              Western Maryland: Frederick, Hagerstown, Cumberland.
            </p>
            <p className="text-sm text-green-900 mb-3">
              Potomac Edison runs a dedicated <strong>Switch-to-Electric Program</strong>{" "}
              that adds a bonus on top of standard midstream rebates:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-3 font-semibold">Equipment</th>
                    <th className="text-left p-3 font-semibold">Standard</th>
                    <th className="text-left p-3 font-semibold">Switch Adder</th>
                    <th className="text-left p-3 font-semibold">Combined</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3">Cold-climate HP</td>
                    <td className="p-3">$1,700</td>
                    <td className="p-3">+$4,000</td>
                    <td className="p-3 font-semibold">$5,700</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Standard ASHP</td>
                    <td className="p-3">~$1,500</td>
                    <td className="p-3">+$3,500</td>
                    <td className="p-3 font-semibold">~$5,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Ductless mini-split</td>
                    <td className="p-3">~$800</td>
                    <td className="p-3">+$3,000</td>
                    <td className="p-3 font-semibold">~$3,800</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">HPWH</td>
                    <td className="p-3">$1,500</td>
                    <td className="p-3">+$2,500</td>
                    <td className="p-3 font-semibold">$4,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Electrical make-ready</td>
                    <td className="p-3 text-gray-500">—</td>
                    <td className="p-3">$3,000</td>
                    <td className="p-3 font-semibold">$3,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-green-900">
              Switch-to-Electric requires decommissioning your fossil fuel system. Programs
              valid through December 31, 2026.
            </p>
          </div>

          {/* SMECO */}
          <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">SMECO (Southern Maryland Electric Cooperative)</h3>
            <p className="text-sm text-gray-600 mt-1 mb-2">
              Charles, St. Mary&apos;s, Calvert, parts of Prince George&apos;s counties.
            </p>
            <p className="text-sm text-gray-600">
              <strong>HPWH</strong>: $1,600 instant rebate.{" "}
              <strong>ASHP midstream</strong>: Participates in EmPOWER midstream
              (~$1,300–$1,700 range, applied through contractors).{" "}
              <strong>Bonus</strong>: FlexHome Pilot — $800 enrollment bonus + up to
              $96/year in bill credits for HPWH owners who join demand response.
            </p>
          </div>

          {/* Delmarva */}
          <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Delmarva Power</h3>
            <p className="text-sm text-gray-600 mt-1 mb-2">
              Eastern Shore of Maryland.
            </p>
            <p className="text-sm text-gray-600">
              <strong>HPwES</strong>: Up to $15,000 electrification / $10,000 non-electrification.{" "}
              <strong>HPWH</strong>: Up to $1,600.{" "}
              Standard EmPOWER midstream structure. Eastern Shore has higher propane and
              fuel oil use — electrification rebates are particularly relevant here.
            </p>
          </div>

          {/* Choptank */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-5 mb-4">
            <p className="font-semibold text-red-800 mb-1">✗ Choptank Electric Cooperative — Limited</p>
            <p className="text-sm text-red-900">
              Parts of Eastern Shore. Does <strong>not</strong> participate in EmPOWER
              HVAC midstream. No dedicated air-source heat pump rebate. Offers HPWH rebate
              and income-eligible weatherization (Chop-A-Watt, up to $7,000). If you&apos;re
              on Choptank, your options are limited until HEAR launches.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="font-semibold text-blue-800 mb-1">Potomac Edison Territory Is the Best Deal in Maryland</p>
            <p className="text-sm text-blue-900">
              Western Maryland homeowners on Potomac Edison can receive up to <strong>$5,700</strong> for
              a single cold-climate heat pump through the Switch-to-Electric program — more
              than three times what most other Maryland utilities offer through midstream
              alone. If you&apos;re in Frederick, Hagerstown, or Cumberland and still
              heating with oil or gas, this is one of the strongest per-equipment incentives
              in the mid-Atlantic.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Local Programs */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Local Programs Worth Knowing</h2>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5 mb-4">
            <p className="font-semibold text-green-800 mb-1">✓ Montgomery County — Electrify MC</p>
            <p className="text-sm text-green-900 mb-2">
              The standout local program. Cold-climate heat pump: <strong>$2,500</strong>.
              Mini-split: $2,000. HPWH: $500. Shared flue bonus (electrifying 2 fossil
              appliances): $1,000. Oil tank removal: $500. Stacks with Pepco/BGE
              EmPOWER rebates.
            </p>
            <p className="text-sm text-green-900">
              Also offers HEECAP Homes Grants ($1.5M fund for LMI electrification) and
              an energy efficiency property tax credit up to $250/year.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
            <p className="font-semibold text-gray-900">Howard County</p>
            <p className="text-sm text-gray-600 mt-1">
              No ASHP rebate. Geothermal property tax credit: up to $5,000 (50% of
              eligible costs). Partners with Solar United Neighbors on a Switch Together
              Heat Pump Co-op for group-purchase discounts.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <p className="font-semibold text-gray-900">Other Counties</p>
            <p className="text-sm text-gray-600 mt-1">
              Prince George&apos;s County has a Clean Energy Program, but the electric
              incentive component was paused as of early 2025. Anne Arundel and Baltimore
              counties offer geothermal property tax credits. Most Maryland homeowners
              outside Montgomery County will rely primarily on their utility&apos;s
              EmPOWER program.
            </p>
          </div>
        </div>
      </section>

      {/* 9. Stacking */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Incentive Stacking</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Maryland&apos;s EmPOWER programs are available at all income levels — the main
            variable is your utility territory and which pathway you choose (HPwES vs.
            midstream). Income matters primarily for LIEEP, WAP, and the future HEAR
            program. Here&apos;s what a homeowner replacing a gas furnace with a
            cold-climate heat pump system (typical project cost: <strong>$14,000–$20,000</strong>)
            could realistically receive:
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 150% AMI — Midstream Path (Any Utility)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>EmPOWER midstream cold-climate HP: $1,700</li>
                <li>EmPOWER midstream HPWH: $1,600</li>
                <li>Montgomery County Electrify MC (if applicable): $2,500 + $500</li>
                <li>Federal 25C/25D: $0 (expired)</li>
                <li>HEAR: not launched</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$3,300 (most territories) to ~$6,300 (Montgomery County)</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">80–150% AMI — HPwES Whole-Home Path</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>EmPOWER HPwES electrification: up to $15,000</li>
                <li>Montgomery County Electrify MC (if applicable): $2,500</li>
                <li>Potomac Edison Switch-to-Electric (if applicable): up to $5,700 per unit instead of midstream</li>
                <li>When HEAR launches: up to $8,000 additional</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$15,000–$17,500 today; potentially ~$25,500 when HEAR launches</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">Below 80% AMI — Best Case</p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>EmPOWER LIEEP: up to $5,000–$10,000 in free upgrades (including HVAC)</li>
                <li>Maryland WAP: additional free weatherization</li>
                <li>When HEAR launches: up to $8,000 HP + $1,750 HPWH</li>
                <li>Montgomery County HEECAP grants (if applicable): additional</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: could pay $0 out of pocket</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-5 mb-6">
            <p className="font-semibold text-gray-900 mb-1">What You&apos;ll Actually Pay</p>
            <p className="text-sm text-gray-700">
              <strong>$0 (income-qualified through LIEEP/WAP) to ~$14,000–$17,000 out of pocket</strong>{" "}
              (above 150% AMI, midstream path on a $16,000–$20,000 project). The HPwES
              pathway significantly reduces out-of-pocket to ~$3,000–$5,000 for most
              projects but requires a $100 audit and comprehensive scope. No state tax
              credit exists for air-source heat pumps. No state-level low-interest loan
              exclusively for heat pumps (BeSMART loans cover broader home improvements).
            </p>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Stacking by Territory</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Because your utility determines which programs you can access, here&apos;s a
            side-by-side for the three most distinct territories:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Layer</th>
                  <th className="text-left p-3 font-semibold">BGE Territory</th>
                  <th className="text-left p-3 font-semibold">Pepco + MoCo</th>
                  <th className="text-left p-3 font-semibold">Potomac Edison</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Federal 25C/25D</td>
                  <td className="p-3 text-gray-500">$0</td>
                  <td className="p-3 text-gray-500">$0</td>
                  <td className="p-3 text-gray-500">$0</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">EmPOWER HPwES</td>
                  <td className="p-3">Up to $15,000</td>
                  <td className="p-3">Up to $15,000</td>
                  <td className="p-3">Up to $15,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">OR midstream (no audit)</td>
                  <td className="p-3 font-semibold">$1,700</td>
                  <td className="p-3 font-semibold">$1,700</td>
                  <td className="p-3 font-semibold">$5,700</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Local programs</td>
                  <td className="p-3 text-gray-500">—</td>
                  <td className="p-3 font-semibold">$2,500</td>
                  <td className="p-3 text-gray-500">—</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">HEAR (when launched)</td>
                  <td className="p-3 text-gray-500">Pending</td>
                  <td className="p-3 text-gray-500">Pending</td>
                  <td className="p-3 text-gray-500">Pending</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="p-3 font-semibold">Realistic today</td>
                  <td className="p-3 font-semibold">~$1,700–$15,000</td>
                  <td className="p-3 font-semibold">~$4,200–$17,500</td>
                  <td className="p-3 font-semibold">~$5,700–$18,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">
            Range depends on whether you choose HPwES (higher cap, audit required) or
            midstream (instant, no audit). HPwES and midstream are generally either/or
            for the same equipment. Income-qualified homeowners may pay nothing through
            LIEEP/WAP programs.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-8">Financing Options</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            With federal credits gone, low-interest loans bridge the gap:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Program</th>
                  <th className="text-left p-3 font-semibold">Rate</th>
                  <th className="text-left p-3 font-semibold">Max Amount</th>
                  <th className="text-left p-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">BeSMART Complete</td>
                  <td className="p-3 font-semibold">4.99% APR</td>
                  <td className="p-3 font-semibold">$30,000</td>
                  <td className="p-3">Requires energy audit, up to 10 years</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">BeSMART ENERGY STAR</td>
                  <td className="p-3 font-semibold">6.99% APR</td>
                  <td className="p-3 font-semibold">$30,000</td>
                  <td className="p-3">Single-measure upgrades, no audit</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Clean Energy Advantage</td>
                  <td className="p-3 font-semibold">0% for 24 mo</td>
                  <td className="p-3 font-semibold">$50,000</td>
                  <td className="p-3">Must combine with utility rebates</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">EmPOWER HPwES financing</td>
                  <td className="p-3 font-semibold">0% for 24 mo</td>
                  <td className="p-3">Varies</td>
                  <td className="p-3">Through Pepco and some utilities</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 10. Weatherization */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Weatherization &amp; Low-Income Programs</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Maryland has several programs specifically for income-qualified households
            that can cover heat pump installations at little or no cost:
          </p>

          <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
            <p className="font-semibold text-gray-900">Maryland Weatherization Assistance Program (WAP)</p>
            <p className="text-sm text-gray-600 mt-1">
              Administered by DHCD. Provides free energy efficiency upgrades — including
              HVAC replacement — to households at or below 200% of federal poverty
              guidelines. Contact your local Community Action Agency to apply.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
            <p className="font-semibold text-gray-900">EmPOWER Limited Income Programs (LIEEP)</p>
            <p className="text-sm text-gray-600 mt-1">
              Each utility runs an income-eligible program under EmPOWER. BGE&apos;s
              Limited Income Program covers up to $5,000–$10,000 in upgrades (including
              HVAC) with a co-pay of $250–$750. Other utilities have similar programs.
              These are separate from WAP and can provide more comprehensive upgrades.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <p className="font-semibold text-gray-900">Choptank Chop-A-Watt</p>
            <p className="text-sm text-gray-600 mt-1">
              Eastern Shore income-eligible program through Choptank Electric. Up to
              $7,000 in weatherization improvements. One of the few options for Choptank
              customers who don&apos;t have access to EmPOWER HVAC midstream rebates.
            </p>
          </div>
        </div>
      </section>

      {/* 11. Climate */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Climate: Do You Need a Cold-Climate Heat Pump?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Maryland is mostly IECC Climate Zone 4A (Mixed-Humid) — heat pumps work well
            statewide. Western Maryland (Garrett County) is Zone 5A.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">City</th>
                  <th className="text-left p-3 font-semibold">Design Temp</th>
                  <th className="text-left p-3 font-semibold">ccASHP?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Baltimore</td>
                  <td className="p-3 font-semibold">13–15°F</td>
                  <td className="p-3">Optional</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Annapolis</td>
                  <td className="p-3 font-semibold">16–17°F</td>
                  <td className="p-3">Optional</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Frederick</td>
                  <td className="p-3 font-semibold">10–12°F</td>
                  <td className="p-3">Advisable</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Hagerstown</td>
                  <td className="p-3 font-semibold">8–10°F</td>
                  <td className="p-3">Advisable</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Oakland (Garrett)</td>
                  <td className="p-3 font-semibold">0–2°F</td>
                  <td className="p-3">Strongly recommended</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Most Maryland homes heat with natural gas (~49%) or electricity (~41%). The
            Eastern Shore has notably higher propane and fuel oil use (15–25%) due to
            limited gas infrastructure — those households see the largest savings from
            switching to a heat pump.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Considering pairing a heat pump with battery storage?{" "}
            <Link href="/battery" className="text-brand-600 hover:underline">
              Read our home battery guide
            </Link>{" "}
            for a full breakdown of costs, incentives, and whether it makes sense in 2026.
          </p>
        </div>
      </section>

      {/* 12. How to Apply */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Apply</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-gray-900">Check your utility</p>
                <p className="text-sm text-gray-700">
                  Your utility determines which specific programs you can access. Find
                  yours on your electric bill or utility website.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900">Choose your path: HPwES or midstream</p>
                <p className="text-sm text-gray-700">
                  For maximum rebate (up to $15,000), schedule a $100 HPwES energy audit
                  through your utility. For a quick rebate ($800–$1,700), go midstream
                  through a participating contractor — no audit needed.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-900">Get quotes from participating contractors</p>
                <p className="text-sm text-gray-700">
                  HPwES requires a BPI-certified contractor. Midstream rebates are applied
                  through the contractor network. Each utility maintains a contractor list.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <p className="font-semibold text-gray-900">Check for local programs</p>
                <p className="text-sm text-gray-700">
                  Montgomery County residents should apply to Electrify MC for an
                  additional $2,500. Howard County has a geothermal tax credit.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                5
              </div>
              <div>
                <p className="font-semibold text-gray-900">Apply for financing if needed</p>
                <p className="text-sm text-gray-700">
                  BeSMART loans (4.99–6.99% APR, up to $30,000) or Clean Energy Advantage
                  (0% for 24 months, up to $50,000). Apply before or alongside your project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. What to Watch */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Watch</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">HEAR/HOMES Launch</p>
              <p className="text-sm text-gray-600 mt-1">
                When these programs go live, income-qualified households could get up to
                $8,000 for a heat pump on top of EmPOWER rebates. No confirmed date yet.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">EmPOWER Cycle Budget</p>
              <p className="text-sm text-gray-600 mt-1">
                Current funding is confirmed through 2026. The Public Service Commission
                reviews budgets annually. 2027 levels are not guaranteed at current amounts.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Midstream Rebate Adjustments</p>
              <p className="text-sm text-gray-600 mt-1">
                BGE updated its midstream incentive amounts around September 2025. Specific
                dollar amounts can shift mid-cycle. Confirm current amounts with your
                contractor.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">IRA Funding Runway</p>
              <p className="text-sm text-gray-600 mt-1">
                Maryland&apos;s $136.8M in HEAR/HOMES funding comes from the Inflation
                Reduction Act. Federal policy changes could affect the timeline or
                availability of these programs. EmPOWER is state-funded and unaffected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 14. FAQ */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqJsonLd.mainEntity.map((faq: { "@type": string; name: string; acceptedAnswer: { "@type": string; text: string } }, index: number) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.name}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 15. See Also */}
      <section className="py-8 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-3">See also</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/heat-pumps/states/va" className="text-brand-600 hover:underline">
                Virginia Heat Pump Rebates &amp; Incentives (2026)
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/pa" className="text-brand-600 hover:underline">
                Pennsylvania Heat Pump Rebates &amp; Incentives (2026)
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/dc" className="text-brand-600 hover:underline">
                Washington DC Heat Pump Rebates &amp; Incentives (2026)
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
          </ul>
        </div>
      </section>

      {/* 16. Sources */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="space-y-2 text-sm">
            {mdIncentive.sources.map((source: { label: string; url: string }, index: number) => (
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
              utility, and IRA heat pump incentives available to Maryland
              homeowners in 2026. It does not calculate savings, guarantee
              eligibility, or represent any incentive program. EmPOWER rebate
              amounts vary by utility and can change mid-cycle; Montgomery County
              and local programs have separate eligibility requirements.
              We verify status regularly but programs can change
              without notice. Always confirm current amounts and eligibility with
              your utility, the Maryland Energy Administration, and your contractor
              before making decisions.
            </p>
          </div>
              <p className="text-sm text-gray-600 mt-4">
            See how this state compares →{" "}
            <Link
              href="/heat-pumps/rebates-by-state"
              className="text-brand-600 hover:underline"
            >
              Heat Pump Rebates by State (2026)
            </Link>
          </p>
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
