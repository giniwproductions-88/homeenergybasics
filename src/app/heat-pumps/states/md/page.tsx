import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Maryland Heat Pump Rebates 2026: EmPOWER + Utility Programs | Home Energy Basics",
  description:
    "EmPOWER Maryland offers up to $15,000 for electrification projects. BGE, Pepco, Potomac Edison, SMECO, and Delmarva all have midstream rebates. Federal 25C is gone. HEAR hasn't launched. Here's what's real.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/md",
  },
  openGraph: {
    title: "Maryland Heat Pump Rebates 2026",
    description:
      "EmPOWER up to $15,000 for electrification. Potomac Edison Switch-to-Electric up to $5,700. Montgomery County adds $2,500. Full breakdown.",
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
          text: "Maryland's main incentive is EmPOWER Maryland, which offers up to $15,000 (or 75% of project cost) for electrification projects through the Home Performance with ENERGY STAR pathway. Each utility also offers midstream rebates of $800–$1,700 per heat pump without requiring an audit. Potomac Edison's Switch-to-Electric program adds up to $4,000 on top. Montgomery County's Electrify MC adds $2,500 for cold-climate heat pumps. The federal 25C tax credit expired December 31, 2025.",
        },
      },
      {
        "@type": "Question",
        name: "What is EmPOWER Maryland?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "EmPOWER Maryland is a state-mandated energy efficiency program funded by utility ratepayer surcharges. It operates through each utility (BGE, Pepco, Potomac Edison, Delmarva Power, SMECO) and offers two pathways: the Home Performance with ENERGY STAR whole-home pathway (up to $15,000 for electrification) and midstream HVAC rebates ($800–$1,700 instant through contractors). A $100 energy audit is required for the HPwES pathway.",
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
          text: "Potomac Edison (western Maryland — Frederick, Hagerstown) currently offers the most generous per-equipment incentives through its Switch-to-Electric program. A cold-climate heat pump can receive $1,700 standard + $4,000 switch-to-electric adder = $5,700 total. Other utilities offer $800–$1,700 through midstream rebates, or up to $15,000 through the whole-home HPwES pathway.",
        },
      },
      {
        "@type": "Question",
        name: "Can I stack EmPOWER with Montgomery County rebates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. EmPOWER utility rebates and Montgomery County's Electrify MC incentives stack — they are funded by different sources. A Montgomery County homeowner with Pepco could combine up to $15,000 EmPOWER + $2,500 Electrify MC + $500 HPWH = roughly $18,000 in a best-case scenario.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a cold-climate heat pump in Maryland?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For most of Maryland (Baltimore, Annapolis, DC suburbs), a standard heat pump works well — design temperatures are 13–17°F. For western Maryland (Frederick, Hagerstown, Cumberland), cold-climate models are advisable since design temperatures drop to 8–12°F. All EmPOWER utilities offer higher rebates for cold-climate models ($1,700 vs. $1,300).",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd data={faqJsonLd} />

      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #f0f9ff 0%, #ffffff 50%, #f9fafb 100%)",
          padding: "3rem 1rem 2rem",
        }}
      >
        <div className="container-narrow">
          <p style={{ color: "#2563eb", fontWeight: 500, marginBottom: "0.5rem", fontSize: "0.9rem" }}>
            <Link href="/" style={{ textDecoration: "none", color: "#2563eb" }}>Home</Link>
            {" / "}
            <Link href="/heat-pumps" style={{ textDecoration: "none", color: "#2563eb" }}>Heat Pumps</Link>
            {" / "}
            Maryland
          </p>
          <h1 style={{ fontSize: "2.25rem", fontWeight: 700, color: "#111827", marginBottom: "1rem", lineHeight: 1.2 }}>
            Maryland Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p style={{ fontSize: "1.15rem", color: "#4b5563", lineHeight: 1.6, maxWidth: "42rem" }}>
            Federal tax credits are gone, but Maryland&apos;s EmPOWER program expanded
            significantly in May 2025. Depending on your utility territory and whether you
            qualify for income-based programs, you may be able to offset anywhere from
            a few thousand dollars to $15,000+ on a heat
            pump project. Here&apos;s what&apos;s actually available.
          </p>
          <p style={{ fontSize: "0.85rem", marginTop: "1rem", opacity: 0.6 }}>
            Last verified: {formattedDate}
          </p>
          <p style={{ fontSize: "0.85rem", opacity: 0.6 }}>
            Program rules and rebate amounts may change after this date.
          </p>
        </div>
      </section>

      {/* Status Card */}
      <section style={{ padding: "2rem 1rem 0" }}>
        <div className="container-narrow">
          <StatusCard incentive={mdIncentive} />
        </div>
      </section>

      {/* Short Version */}
      <section style={{ padding: "2rem 1rem" }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            The Short Version
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "1rem",
            }}
          >
            <div
              style={{
                background: "#fef2f2",
                border: "1px solid #fecaca",
                borderRadius: "8px",
                padding: "1.25rem",
              }}
            >
              <p style={{ fontWeight: 600, color: "#991b1b", marginBottom: "0.5rem" }}>
                ✗ Federal Tax Credits
              </p>
              <p style={{ fontSize: "0.95rem", color: "#7f1d1d" }}>
                Both 25C ($2,000 heat pump) and 25D (30% geothermal) expired Dec 31,
                2025. No replacement exists.
              </p>
            </div>
            <div
              style={{
                background: "#f0fdf4",
                border: "1px solid #bbf7d0",
                borderRadius: "8px",
                padding: "1.25rem",
              }}
            >
              <p style={{ fontWeight: 600, color: "#166534", marginBottom: "0.5rem" }}>
                ✓ EmPOWER Utility Rebates
              </p>
              <p style={{ fontSize: "0.95rem", color: "#14532d" }}>
                Up to $15,000 (electrification, whole-home pathway) or $800–$1,700
                instant per unit (midstream, no audit needed). All five major utilities
                participate.
              </p>
            </div>
            <div
              style={{
                background: "#fffbeb",
                border: "1px solid #fde68a",
                borderRadius: "8px",
                padding: "1.25rem",
              }}
            >
              <p style={{ fontWeight: 600, color: "#92400e", marginBottom: "0.5rem" }}>
                ⚠ $136.8M HEAR/HOMES Pending
              </p>
              <p style={{ fontSize: "0.95rem", color: "#78350f" }}>
                Maryland was allocated $136.8 million in IRA rebates. Neither program
                has launched. MEA cannot confirm a date.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Federal Credits — Dead */}
      <section style={{ padding: "2rem 1rem" }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            Federal Tax Credits Are Gone
          </h2>
          <div
            style={{
              background: "#fef2f2",
              border: "1px solid #fecaca",
              borderRadius: "8px",
              padding: "1.5rem",
            }}
          >
            <p style={{ color: "#991b1b", fontWeight: 600, marginBottom: "0.75rem" }}>
              Both expired December 31, 2025
            </p>
            <p style={{ color: "#7f1d1d", fontSize: "0.95rem", marginBottom: "0.75rem" }}>
              The One Big Beautiful Bill Act (signed July 4, 2025) accelerated expiration
              of both Section 25C ($2,000/year for heat pumps) and Section 25D (30% of
              geothermal costs). Equipment must have been <strong>installed by Dec 31,
              2025</strong> to qualify — purchase date doesn&apos;t matter.
            </p>
            <p style={{ color: "#7f1d1d", fontSize: "0.95rem" }}>
              The only exception: if you completed installation in 2025 but couldn&apos;t
              use the full 25D credit on your 2025 return, you can carry unused amounts
              forward to 2026.{" "}
              <Link
                href="/federal-heat-pump-tax-credit-expired"
                style={{ color: "#dc2626", fontWeight: 500 }}
              >
                Full details →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* HEAR Status */}
      <section style={{ padding: "0 1rem 2rem" }}>
        <div className="container-narrow">
          <div
            style={{
              background: "#fffbeb",
              border: "1px solid #fde68a",
              borderRadius: "8px",
              padding: "1.5rem",
            }}
          >
            <p style={{ color: "#92400e", fontWeight: 600, marginBottom: "0.75rem" }}>
              ⚠ HEAR &amp; HOMES Programs — Not Yet Launched
            </p>
            <p style={{ color: "#78350f", fontSize: "0.95rem", marginBottom: "0.75rem" }}>
              Maryland was allocated ~$136.8 million in IRA home energy rebates: $68.6M
              for HOMES (modeled savings) and $68.2M for HEAR (income-qualified
              electrification). Both received conditional DOE approval, and Maryland
              Environmental Service issued an RFP for a service provider in July 2025.
            </p>
            <p style={{ color: "#78350f", fontSize: "0.95rem" }}>
              <strong>As of March 2026, neither program is accepting applications.</strong>{" "}
              When HEAR launches, income-qualified households (below 80% AMI) could
              receive up to $8,000 for heat pumps and $1,750 for heat pump water heaters.
              These are separate from EmPOWER rebates and are expected to stack.
            </p>
          </div>
        </div>
      </section>

      {/* EmPOWER Maryland — Main Program */}
      <section style={{ padding: "2rem 1rem" }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            EmPOWER Maryland — The Main Program
          </h2>
          <p style={{ color: "#374151", lineHeight: 1.7, marginBottom: "1rem" }}>
            EmPOWER is Maryland&apos;s state-mandated energy efficiency program, funded
            by utility ratepayer surcharges. Every major utility participates: BGE,
            Pepco, Potomac Edison, Delmarva Power, and SMECO. There are two ways to
            access rebates:
          </p>

          <h3 style={{ fontSize: "1.15rem", fontWeight: 600, marginBottom: "0.75rem" }}>
            Path 1: Home Performance with ENERGY STAR (HPwES) — Whole-Home
          </h3>
          <p style={{ color: "#374151", lineHeight: 1.7, marginBottom: "1rem" }}>
            This is the high-value path. A $100 energy audit (subsidized — normally ~$400)
            leads to modeled savings recommendations. As of May 2025, electrification
            projects (converting from fossil fuel to heat pump) qualify for up to{" "}
            <strong>$15,000 or 75% of total project cost</strong>, whichever is less.
            Non-electrification improvements cap at $10,000 or 75%. Oil and propane
            systems now qualify — a significant expansion from prior cycles.
          </p>

          <h3 style={{ fontSize: "1.15rem", fontWeight: 600, marginBottom: "0.75rem" }}>
            Path 2: Midstream HVAC Rebates — Per-Equipment, No Audit
          </h3>
          <p style={{ color: "#374151", lineHeight: 1.7, marginBottom: "1rem" }}>
            Instant rebates applied at the point of sale through participating
            contractors. No energy audit required. Available to all homeowners. Amounts
            vary slightly by utility but are standardized across EmPOWER:
          </p>

          <div style={{ overflowX: "auto", marginBottom: "1.5rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
              <thead>
                <tr style={{ background: "#f3f4f6" }}>
                  <th style={{ padding: "0.75rem", textAlign: "left", borderBottom: "2px solid #d1d5db" }}>Equipment</th>
                  <th style={{ padding: "0.75rem", textAlign: "right", borderBottom: "2px solid #d1d5db" }}>Midstream Rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                  <td style={{ padding: "0.75rem" }}>Cold-climate heat pump (ducted)</td>
                  <td style={{ padding: "0.75rem", textAlign: "right", fontWeight: 600 }}>$1,700</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                  <td style={{ padding: "0.75rem" }}>Standard air-source heat pump (ducted)</td>
                  <td style={{ padding: "0.75rem", textAlign: "right", fontWeight: 600 }}>Up to $1,300</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                  <td style={{ padding: "0.75rem" }}>Ductless mini-split</td>
                  <td style={{ padding: "0.75rem", textAlign: "right", fontWeight: 600 }}>$800</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                  <td style={{ padding: "0.75rem" }}>Heat pump water heater</td>
                  <td style={{ padding: "0.75rem", textAlign: "right", fontWeight: 600 }}>$900–$1,600</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                  <td style={{ padding: "0.75rem" }}>Geothermal heat pump</td>
                  <td style={{ padding: "0.75rem", textAlign: "right", fontWeight: 600 }}>$7,000–$7,100</td>
                </tr>
                <tr>
                  <td style={{ padding: "0.75rem" }}>Smart thermostat</td>
                  <td style={{ padding: "0.75rem", textAlign: "right", fontWeight: 600 }}>$100</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{ color: "#6b7280", fontSize: "0.85rem", fontStyle: "italic" }}>
            HPwES and midstream are generally either/or for the same equipment. You pick
            one path, not both. HPwES offers higher total caps but requires the audit and
            comprehensive project scope.
          </p>
        </div>
      </section>

      {/* Utility Breakdown */}
      <section style={{ padding: "2rem 1rem" }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            Utility-by-Utility Differences
          </h2>
          <p style={{ color: "#374151", lineHeight: 1.7, marginBottom: "1.5rem" }}>
            All five utilities share the EmPOWER framework above. The differences are
            in bonus programs and electrification adders.
          </p>

          {/* BGE */}
          <div
            style={{
              background: "#f9fafb",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              padding: "1.25rem",
              marginBottom: "1rem",
            }}
          >
            <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.5rem" }}>
              BGE (Baltimore Gas &amp; Electric)
            </h3>
            <p style={{ fontSize: "0.95rem", color: "#374151", marginBottom: "0.5rem" }}>
              Largest utility in Maryland. Baltimore metro + surrounding counties.
            </p>
            <p style={{ fontSize: "0.95rem", color: "#374151", marginBottom: "0.5rem" }}>
              <strong>HPwES</strong>: Up to $15,000 electrification / $10,000 non-electrification.{" "}
              <strong>Midstream</strong>: Standard table above. <strong>HPWH</strong>: Up
              to $1,600 via appliance rebate program (instant at Lowe&apos;s/Home Depot or
              mail-in).
            </p>
            <p style={{ fontSize: "0.95rem", color: "#374151" }}>
              <strong>Income-qualified</strong>: Limited Income Program — pay $250–$750
              co-pay for up to $5,000–$10,000 in upgrades including HVAC replacement.
            </p>
          </div>

          {/* Pepco */}
          <div
            style={{
              background: "#f9fafb",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              padding: "1.25rem",
              marginBottom: "1rem",
            }}
          >
            <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.5rem" }}>
              Pepco (Potomac Electric Power)
            </h3>
            <p style={{ fontSize: "0.95rem", color: "#374151", marginBottom: "0.5rem" }}>
              Montgomery County, Prince George&apos;s County, DC suburbs.
            </p>
            <p style={{ fontSize: "0.95rem", color: "#374151", marginBottom: "0.5rem" }}>
              <strong>HPwES</strong>: Up to $15,000 electrification. Includes 0% interest
              financing for 24 months option.{" "}
              <strong>Midstream</strong>: Same as BGE.{" "}
              <strong>HPWH</strong>: Up to $1,600.
            </p>
            <p style={{ fontSize: "0.95rem", color: "#374151" }}>
              Pepco territory overlaps with Montgomery County&apos;s Electrify MC program
              — these stack (see Local Programs below).
            </p>
          </div>

          {/* Potomac Edison */}
          <div
            style={{
              background: "#f0fdf4",
              border: "1px solid #bbf7d0",
              borderRadius: "8px",
              padding: "1.25rem",
              marginBottom: "1rem",
            }}
          >
            <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.5rem" }}>
              ⭐ Potomac Edison (FirstEnergy) — Best Per-Equipment Rebates
            </h3>
            <p style={{ fontSize: "0.95rem", color: "#374151", marginBottom: "0.5rem" }}>
              Western Maryland: Frederick, Hagerstown, Cumberland.
            </p>
            <p style={{ fontSize: "0.95rem", color: "#374151", marginBottom: "0.75rem" }}>
              Potomac Edison runs a dedicated <strong>Switch-to-Electric Program</strong>{" "}
              that adds a bonus on top of standard midstream rebates:
            </p>
            <div style={{ overflowX: "auto", marginBottom: "0.75rem" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
                <thead>
                  <tr style={{ background: "#dcfce7" }}>
                    <th style={{ padding: "0.6rem", textAlign: "left", borderBottom: "2px solid #86efac" }}>Equipment</th>
                    <th style={{ padding: "0.6rem", textAlign: "right", borderBottom: "2px solid #86efac" }}>Standard</th>
                    <th style={{ padding: "0.6rem", textAlign: "right", borderBottom: "2px solid #86efac" }}>Switch Adder</th>
                    <th style={{ padding: "0.6rem", textAlign: "right", borderBottom: "2px solid #86efac" }}>Combined</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                    <td style={{ padding: "0.6rem" }}>Cold-climate HP</td>
                    <td style={{ padding: "0.6rem", textAlign: "right" }}>$1,700</td>
                    <td style={{ padding: "0.6rem", textAlign: "right" }}>+$4,000</td>
                    <td style={{ padding: "0.6rem", textAlign: "right", fontWeight: 700 }}>$5,700</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                    <td style={{ padding: "0.6rem" }}>Standard ASHP</td>
                    <td style={{ padding: "0.6rem", textAlign: "right" }}>~$1,500</td>
                    <td style={{ padding: "0.6rem", textAlign: "right" }}>+$3,500</td>
                    <td style={{ padding: "0.6rem", textAlign: "right", fontWeight: 700 }}>~$5,000</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                    <td style={{ padding: "0.6rem" }}>Ductless mini-split</td>
                    <td style={{ padding: "0.6rem", textAlign: "right" }}>~$800</td>
                    <td style={{ padding: "0.6rem", textAlign: "right" }}>+$3,000</td>
                    <td style={{ padding: "0.6rem", textAlign: "right", fontWeight: 700 }}>~$3,800</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                    <td style={{ padding: "0.6rem" }}>HPWH</td>
                    <td style={{ padding: "0.6rem", textAlign: "right" }}>$1,500</td>
                    <td style={{ padding: "0.6rem", textAlign: "right" }}>+$2,500</td>
                    <td style={{ padding: "0.6rem", textAlign: "right", fontWeight: 700 }}>$4,000</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "0.6rem" }}>Electrical make-ready</td>
                    <td style={{ padding: "0.6rem", textAlign: "right" }}>—</td>
                    <td style={{ padding: "0.6rem", textAlign: "right" }}>$3,000</td>
                    <td style={{ padding: "0.6rem", textAlign: "right", fontWeight: 700 }}>$3,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: "0.85rem", color: "#6b7280", fontStyle: "italic" }}>
              Switch-to-Electric requires decommissioning your fossil fuel system. Programs
              valid through December 31, 2026.
            </p>
          </div>

          {/* SMECO */}
          <div
            style={{
              background: "#f9fafb",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              padding: "1.25rem",
              marginBottom: "1rem",
            }}
          >
            <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.5rem" }}>
              SMECO (Southern Maryland Electric Cooperative)
            </h3>
            <p style={{ fontSize: "0.95rem", color: "#374151", marginBottom: "0.5rem" }}>
              Charles, St. Mary&apos;s, Calvert, parts of Prince George&apos;s counties.
            </p>
            <p style={{ fontSize: "0.95rem", color: "#374151" }}>
              <strong>HPWH</strong>: $1,600 instant rebate.{" "}
              <strong>ASHP midstream</strong>: Participates in EmPOWER midstream
              (~$1,300–$1,700 range, applied through contractors).{" "}
              <strong>Bonus</strong>: FlexHome Pilot — $800 enrollment bonus + up to
              $96/year in bill credits for HPWH owners who join demand response.
            </p>
          </div>

          {/* Delmarva */}
          <div
            style={{
              background: "#f9fafb",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              padding: "1.25rem",
              marginBottom: "1rem",
            }}
          >
            <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.5rem" }}>
              Delmarva Power
            </h3>
            <p style={{ fontSize: "0.95rem", color: "#374151", marginBottom: "0.5rem" }}>
              Eastern Shore of Maryland.
            </p>
            <p style={{ fontSize: "0.95rem", color: "#374151" }}>
              <strong>HPwES</strong>: Up to $15,000 electrification / $10,000 non-electrification.{" "}
              <strong>HPWH</strong>: Up to $1,600.{" "}
              Standard EmPOWER midstream structure. Eastern Shore has higher propane and
              fuel oil use — electrification rebates are particularly relevant here.
            </p>
          </div>

          {/* Choptank */}
          <div
            style={{
              background: "#fef2f2",
              border: "1px solid #fecaca",
              borderRadius: "8px",
              padding: "1.25rem",
            }}
          >
            <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.5rem" }}>
              Choptank Electric Cooperative — Limited
            </h3>
            <p style={{ fontSize: "0.95rem", color: "#7f1d1d" }}>
              Parts of Eastern Shore. Does <strong>not</strong> participate in EmPOWER
              HVAC midstream. No dedicated air-source heat pump rebate. Offers HPWH rebate
              and income-eligible weatherization (Chop-A-Watt, up to $7,000). If you&apos;re
              on Choptank, your options are limited until HEAR launches.
            </p>
          </div>
        </div>
      </section>

      {/* Local Programs */}
      <section style={{ padding: "2rem 1rem" }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            Local Programs Worth Knowing
          </h2>

          <div
            style={{
              background: "#f0fdf4",
              border: "1px solid #bbf7d0",
              borderRadius: "8px",
              padding: "1.25rem",
              marginBottom: "1rem",
            }}
          >
            <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.5rem" }}>
              Montgomery County — Electrify MC
            </h3>
            <p style={{ fontSize: "0.95rem", color: "#374151", marginBottom: "0.5rem" }}>
              The standout local program. Cold-climate heat pump: <strong>$2,500</strong>.
              Mini-split: $2,000. HPWH: $500. Shared flue bonus (electrifying 2 fossil
              appliances): $1,000. Oil tank removal: $500. Stacks with Pepco/BGE
              EmPOWER rebates.
            </p>
            <p style={{ fontSize: "0.95rem", color: "#374151" }}>
              Also offers HEECAP Homes Grants ($1.5M fund for LMI electrification) and
              an energy efficiency property tax credit up to $250/year.
            </p>
          </div>

          <div
            style={{
              background: "#f9fafb",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              padding: "1.25rem",
              marginBottom: "1rem",
            }}
          >
            <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.5rem" }}>
              Howard County
            </h3>
            <p style={{ fontSize: "0.95rem", color: "#374151" }}>
              No ASHP rebate. Geothermal property tax credit: up to $5,000 (50% of
              eligible costs). Partners with Solar United Neighbors on a Switch Together
              Heat Pump Co-op for group-purchase discounts.
            </p>
          </div>

          <div
            style={{
              background: "#f9fafb",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              padding: "1.25rem",
            }}
          >
            <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.5rem" }}>
              Other Counties
            </h3>
            <p style={{ fontSize: "0.95rem", color: "#374151" }}>
              Prince George&apos;s County has a Clean Energy Program, but the electric
              incentive component was paused as of early 2025. Anne Arundel and Baltimore
              counties offer geothermal property tax credits. Most Maryland homeowners
              outside Montgomery County will rely primarily on their utility&apos;s
              EmPOWER program.
            </p>
          </div>
        </div>
      </section>

      {/* Financing */}
      <section style={{ padding: "2rem 1rem" }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            Financing Options
          </h2>
          <p style={{ color: "#374151", lineHeight: 1.7, marginBottom: "1rem" }}>
            With federal credits gone, low-interest loans bridge the gap:
          </p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
              <thead>
                <tr style={{ background: "#f3f4f6" }}>
                  <th style={{ padding: "0.75rem", textAlign: "left", borderBottom: "2px solid #d1d5db" }}>Program</th>
                  <th style={{ padding: "0.75rem", textAlign: "right", borderBottom: "2px solid #d1d5db" }}>Rate</th>
                  <th style={{ padding: "0.75rem", textAlign: "right", borderBottom: "2px solid #d1d5db" }}>Max Amount</th>
                  <th style={{ padding: "0.75rem", textAlign: "left", borderBottom: "2px solid #d1d5db" }}>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                  <td style={{ padding: "0.75rem" }}>BeSMART Complete</td>
                  <td style={{ padding: "0.75rem", textAlign: "right" }}>4.99% APR</td>
                  <td style={{ padding: "0.75rem", textAlign: "right" }}>$30,000</td>
                  <td style={{ padding: "0.75rem" }}>Requires energy audit, up to 10 years</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                  <td style={{ padding: "0.75rem" }}>BeSMART ENERGY STAR</td>
                  <td style={{ padding: "0.75rem", textAlign: "right" }}>6.99% APR</td>
                  <td style={{ padding: "0.75rem", textAlign: "right" }}>$30,000</td>
                  <td style={{ padding: "0.75rem" }}>Single-measure upgrades, no audit</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                  <td style={{ padding: "0.75rem" }}>Clean Energy Advantage</td>
                  <td style={{ padding: "0.75rem", textAlign: "right" }}>0% for 24 mo</td>
                  <td style={{ padding: "0.75rem", textAlign: "right" }}>$50,000</td>
                  <td style={{ padding: "0.75rem" }}>Must combine with utility rebates</td>
                </tr>
                <tr>
                  <td style={{ padding: "0.75rem" }}>EmPOWER HPwES financing</td>
                  <td style={{ padding: "0.75rem", textAlign: "right" }}>0% for 24 mo</td>
                  <td style={{ padding: "0.75rem", textAlign: "right" }}>Varies</td>
                  <td style={{ padding: "0.75rem" }}>Through Pepco and some utilities</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Stacking */}
      <section style={{ padding: "2rem 1rem" }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            Realistic Incentive Stacking
          </h2>
          <p style={{ color: "#374151", lineHeight: 1.7, marginBottom: "1rem" }}>
            What a Maryland homeowner replacing a gas furnace with a cold-climate heat
            pump system (typical project cost: $14,000–$20,000) could realistically
            receive:
          </p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
              <thead>
                <tr style={{ background: "#f3f4f6" }}>
                  <th style={{ padding: "0.75rem", textAlign: "left", borderBottom: "2px solid #d1d5db" }}>Layer</th>
                  <th style={{ padding: "0.75rem", textAlign: "right", borderBottom: "2px solid #d1d5db" }}>BGE Territory</th>
                  <th style={{ padding: "0.75rem", textAlign: "right", borderBottom: "2px solid #d1d5db" }}>Pepco + MoCo</th>
                  <th style={{ padding: "0.75rem", textAlign: "right", borderBottom: "2px solid #d1d5db" }}>Potomac Edison</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                  <td style={{ padding: "0.75rem" }}>Federal 25C/25D</td>
                  <td style={{ padding: "0.75rem", textAlign: "right", color: "#dc2626" }}>$0</td>
                  <td style={{ padding: "0.75rem", textAlign: "right", color: "#dc2626" }}>$0</td>
                  <td style={{ padding: "0.75rem", textAlign: "right", color: "#dc2626" }}>$0</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                  <td style={{ padding: "0.75rem" }}>EmPOWER HPwES</td>
                  <td style={{ padding: "0.75rem", textAlign: "right" }}>Up to $15,000</td>
                  <td style={{ padding: "0.75rem", textAlign: "right" }}>Up to $15,000</td>
                  <td style={{ padding: "0.75rem", textAlign: "right" }}>Up to $15,000</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                  <td style={{ padding: "0.75rem" }}>OR midstream (no audit)</td>
                  <td style={{ padding: "0.75rem", textAlign: "right" }}>$1,700</td>
                  <td style={{ padding: "0.75rem", textAlign: "right" }}>$1,700</td>
                  <td style={{ padding: "0.75rem", textAlign: "right" }}>$5,700</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                  <td style={{ padding: "0.75rem" }}>Local programs</td>
                  <td style={{ padding: "0.75rem", textAlign: "right" }}>—</td>
                  <td style={{ padding: "0.75rem", textAlign: "right" }}>$2,500</td>
                  <td style={{ padding: "0.75rem", textAlign: "right" }}>—</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                  <td style={{ padding: "0.75rem" }}>HEAR (when launched)</td>
                  <td style={{ padding: "0.75rem", textAlign: "right", color: "#92400e" }}>Pending</td>
                  <td style={{ padding: "0.75rem", textAlign: "right", color: "#92400e" }}>Pending</td>
                  <td style={{ padding: "0.75rem", textAlign: "right", color: "#92400e" }}>Pending</td>
                </tr>
                <tr style={{ background: "#f0fdf4" }}>
                  <td style={{ padding: "0.75rem", fontWeight: 700 }}>Realistic today</td>
                  <td style={{ padding: "0.75rem", textAlign: "right", fontWeight: 700 }}>~$1,700–$15,000</td>
                  <td style={{ padding: "0.75rem", textAlign: "right", fontWeight: 700 }}>~$4,200–$17,500</td>
                  <td style={{ padding: "0.75rem", textAlign: "right", fontWeight: 700 }}>~$5,700–$18,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ color: "#6b7280", fontSize: "0.85rem", marginTop: "0.75rem", fontStyle: "italic" }}>
            Range depends on whether you choose HPwES (higher cap, audit required) or
            midstream (instant, no audit). HPwES and midstream are generally either/or
            for the same equipment. Income-qualified homeowners may pay nothing through
            LIEEP/WAP programs.
          </p>
        </div>
      </section>

      {/* Climate Context */}
      <section style={{ padding: "2rem 1rem" }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            Climate: Do You Need a Cold-Climate Heat Pump?
          </h2>
          <p style={{ color: "#374151", lineHeight: 1.7, marginBottom: "1rem" }}>
            Maryland is mostly IECC Climate Zone 4A (Mixed-Humid) — heat pumps work well
            statewide. Western Maryland (Garrett County) is Zone 5A.
          </p>
          <div style={{ overflowX: "auto", marginBottom: "1rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
              <thead>
                <tr style={{ background: "#f3f4f6" }}>
                  <th style={{ padding: "0.75rem", textAlign: "left", borderBottom: "2px solid #d1d5db" }}>City</th>
                  <th style={{ padding: "0.75rem", textAlign: "right", borderBottom: "2px solid #d1d5db" }}>Design Temp</th>
                  <th style={{ padding: "0.75rem", textAlign: "left", borderBottom: "2px solid #d1d5db" }}>ccASHP?</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                  <td style={{ padding: "0.75rem" }}>Baltimore</td>
                  <td style={{ padding: "0.75rem", textAlign: "right" }}>13–15°F</td>
                  <td style={{ padding: "0.75rem" }}>Optional</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                  <td style={{ padding: "0.75rem" }}>Annapolis</td>
                  <td style={{ padding: "0.75rem", textAlign: "right" }}>16–17°F</td>
                  <td style={{ padding: "0.75rem" }}>Optional</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                  <td style={{ padding: "0.75rem" }}>Frederick</td>
                  <td style={{ padding: "0.75rem", textAlign: "right" }}>10–12°F</td>
                  <td style={{ padding: "0.75rem" }}>Advisable</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                  <td style={{ padding: "0.75rem" }}>Hagerstown</td>
                  <td style={{ padding: "0.75rem", textAlign: "right" }}>8–10°F</td>
                  <td style={{ padding: "0.75rem" }}>Advisable</td>
                </tr>
                <tr>
                  <td style={{ padding: "0.75rem" }}>Oakland (Garrett)</td>
                  <td style={{ padding: "0.75rem", textAlign: "right" }}>0–2°F</td>
                  <td style={{ padding: "0.75rem" }}>Strongly recommended</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ color: "#374151", lineHeight: 1.7 }}>
            Most Maryland homes heat with natural gas (~49%) or electricity (~41%). The
            Eastern Shore has notably higher propane and fuel oil use (15–25%) due to
            limited gas infrastructure — those households see the largest savings from
            switching to a heat pump.
          </p>
        </div>
      </section>

      {/* How to Apply */}
      <section style={{ padding: "2rem 1rem" }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            How to Apply
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              {
                step: 1,
                title: "Check your utility",
                desc: "Your utility determines which specific programs you can access. Find yours at your electric bill or utility website.",
              },
              {
                step: 2,
                title: "Choose your path: HPwES or midstream",
                desc: "For maximum rebate (up to $15,000), schedule a $100 HPwES energy audit through your utility. For a quick rebate ($800–$1,700), go midstream through a participating contractor — no audit needed.",
              },
              {
                step: 3,
                title: "Get quotes from participating contractors",
                desc: "HPwES requires a BPI-certified contractor. Midstream rebates are applied through the contractor network. Each utility maintains a contractor list.",
              },
              {
                step: 4,
                title: "Check for local programs",
                desc: "Montgomery County residents should apply to Electrify MC for an additional $2,500. Howard County has a geothermal tax credit.",
              },
              {
                step: 5,
                title: "Apply for financing if needed",
                desc: "BeSMART loans (4.99–6.99% APR, up to $30,000) or Clean Energy Advantage (0% for 24 months, up to $50,000). Apply before or alongside your project.",
              },
            ].map((item) => (
              <div
                key={item.step}
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    background: "#2563eb",
                    color: "white",
                    borderRadius: "50%",
                    width: "2rem",
                    height: "2rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    fontWeight: 700,
                    fontSize: "0.9rem",
                  }}
                >
                  {item.step}
                </div>
                <div>
                  <p style={{ fontWeight: 600, marginBottom: "0.25rem" }}>
                    {item.title}
                  </p>
                  <p style={{ color: "#4b5563", fontSize: "0.95rem" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Watch */}
      <section style={{ padding: "2rem 1rem" }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            What to Watch
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <p style={{ color: "#374151", lineHeight: 1.7 }}>
              <strong>HEAR/HOMES launch</strong> — When these programs go live, income-qualified
              households could get up to $8,000 for a heat pump on top of EmPOWER rebates.
              No confirmed date yet.
            </p>
            <p style={{ color: "#374151", lineHeight: 1.7 }}>
              <strong>EmPOWER cycle budget</strong> — Current funding is confirmed through
              2026. The Public Service Commission reviews budgets annually. 2027 levels
              are not guaranteed at current amounts.
            </p>
            <p style={{ color: "#374151", lineHeight: 1.7 }}>
              <strong>Midstream rebate adjustments</strong> — BGE updated its midstream
              incentive amounts around September 2025. Specific dollar amounts can shift
              mid-cycle. Confirm current amounts with your contractor.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "2rem 1rem" }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {faqJsonLd.mainEntity.map(
              (
                faq: { "@type": string; name: string; acceptedAnswer: { "@type": string; text: string } },
                i: number
              ) => (
                <div key={i}>
                  <h3
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 600,
                      marginBottom: "0.5rem",
                      color: "#111827",
                    }}
                  >
                    {faq.name}
                  </h3>
                  <p style={{ color: "#374151", lineHeight: 1.7 }}>
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Sources */}
      <section style={{ padding: "2rem 1rem" }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Sources</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {mdIncentive.sources.map(
              (source: { label: string; url: string }, i: number) => (
                <li key={i} style={{ marginBottom: "0.5rem" }}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#2563eb",
                      textDecoration: "none",
                      fontSize: "0.95rem",
                    }}
                  >
                    {source.label} ↗
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </section>

      {/* Cross-links */}
      <section style={{ padding: "2rem 1rem" }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            Related Pages
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "0.75rem",
            }}
          >
            {[
              { href: "/heat-pumps/states/nj", label: "New Jersey Rebates" },
              { href: "/heat-pumps/states/ny", label: "New York Rebates" },
              {
                href: "/federal-heat-pump-tax-credit-expired",
                label: "Federal Credits Expired",
              },
              { href: "/battery", label: "Home Battery Guide" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: "block",
                  padding: "0.75rem 1rem",
                  background: "#f9fafb",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  color: "#2563eb",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                }}
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section style={{ padding: "2rem 1rem 3rem" }}>
        <div className="container-narrow">
          <p style={{ color: "#9ca3af", fontSize: "0.8rem", lineHeight: 1.6 }}>
            This page is for informational purposes only and does not constitute
            financial or tax advice. Rebate amounts, eligibility, and program
            availability can change. Verify all details with your utility and the
            Maryland Energy Administration before making purchasing decisions. Last
            verified: {formattedDate}.
          </p>
          <p style={{ marginTop: "1rem" }}>
            <Link
              href="/heat-pumps"
              style={{ color: "#2563eb", textDecoration: "none", fontSize: "0.9rem" }}
            >
              ← Back to all states
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
