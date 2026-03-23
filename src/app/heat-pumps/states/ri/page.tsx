// src/app/heat-pumps/states/ri/page.tsx

import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Rhode Island Heat Pump Rebates 2026: What's Actually Available | Home Energy Basics",
  description:
    "Clean Heat RI covers up to 60% of heat pump costs (max $11,500) but expires Dec 31, 2026. Federal tax credits ended. Here's the complete Rhode Island incentive picture.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/ri",
  },
  openGraph: {
    title: "Rhode Island Heat Pump Rebates 2026",
    description:
      "Clean Heat RI up to $11,500, RI Energy utility rebates, HEAR electrical upgrades — what's available for Rhode Island homeowners after federal credits ended.",
    url: "https://homeenergybasics.com/heat-pumps/states/ri",
    type: "article",
  },
};

export default function RhodeIslandPage() {
  const riIncentive = incentives.RI;
  const formattedDate = formatDate(riIncentive.lastVerified);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What heat pump rebates are available in Rhode Island in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Clean Heat RI covers up to 60% of heat pump installation costs, capped at $11,500 per address. Rhode Island Energy adds $150–$400 per ton in utility rebates ($1,250/ton for electric resistance replacement). Heat pump water heaters qualify for $2,500 from Clean Heat RI plus $600 from RI Energy. Federal tax credits expired December 31, 2025. The HEAR program covers electrical upgrades but not heat pump HVAC systems in Rhode Island.",
        },
      },
      {
        "@type": "Question",
        name: "Is there a federal tax credit for heat pumps in Rhode Island in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Both the Section 25C Energy Efficient Home Improvement Credit and Section 25D Residential Clean Energy Credit expired December 31, 2025 under the One Big Beautiful Bill Act. Equipment installed in 2026 does not qualify, even if purchased in 2025.",
        },
      },
      {
        "@type": "Question",
        name: "What is the maximum heat pump incentive in Rhode Island?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For standard-income homeowners, the maximum realistic stack is approximately $13,300: up to $11,500 from Clean Heat RI for the heat pump, $1,200 from RI Energy ($400/ton for 3 tons), plus $2,500 and $600 respectively for a heat pump water heater. Low-income households (at or below 150% of State Median Income) can qualify for 100% project coverage up to $18,000, potentially achieving $0 out-of-pocket.",
        },
      },
      {
        "@type": "Question",
        name: "When does Clean Heat RI expire?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Clean Heat RI must spend all funds by December 31, 2026. This is a hard ARPA deadline. The program launched with $25 million and over $10 million had been distributed by late 2024. Once funds are exhausted or the deadline passes, the program ends. No replacement has been announced.",
        },
      },
      {
        "@type": "Question",
        name: "Does HEAR cover heat pump installations in Rhode Island?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Rhode Island strategically excluded heat pump HVAC systems and heat pump water heaters from its HEAR program because those are already covered by Clean Heat RI. Rhode Island's HEAR program covers enabling electrical work: panel upgrades (up to $4,000), wiring (up to $2,500), and ENERGY STAR appliances like stoves and dryers.",
        },
      },
      {
        "@type": "Question",
        name: "Do heat pumps work in Rhode Island winters?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Rhode Island's ASHRAE design temperatures range from 5°F to 10°F depending on location. Modern cold-climate heat pumps operate efficiently down to -13°F to -15°F, providing a 15–25°F safety margin. Most homes do not require backup heating in typical conditions. Clean Heat RI requires ENERGY STAR 6.1 Cold Climate certified equipment.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd data={faqJsonLd} />

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #f0f9ff 0%, #ffffff 50%, #f0fdf4 100%)", padding: "3rem 1rem 2rem" }}>
        <div className="container-narrow">
          <p style={{ color: "#2563eb", fontWeight: 500, marginBottom: "0.5rem", fontSize: "0.9rem" }}>
            <Link href="/" style={{ textDecoration: "none", color: "#2563eb" }}>Home</Link>
            {" / "}
            <Link href="/heat-pumps" style={{ textDecoration: "none", color: "#2563eb" }}>Heat Pumps</Link>
            {" / "}
            Rhode Island
          </p>
          <h1 style={{ fontSize: "2.25rem", fontWeight: 800, color: "#111827", marginBottom: "1.25rem", lineHeight: 1.15 }}>
            Rhode Island Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p style={{ fontSize: "1.15rem", color: "#4b5563", lineHeight: 1.7, maxWidth: "44rem" }}>
            Clean Heat RI — a $25 million state program covering up to 60% of heat pump costs
            (max $11,500) — is the main incentive for Rhode Island homeowners in 2026. But it
            expires December 31, 2026 and funding is already being used quickly.
          </p>
          <p style={{ fontSize: "1.15rem", color: "#4b5563", lineHeight: 1.7, maxWidth: "44rem", marginTop: "0.75rem" }}>
            With federal tax credits gone, most homeowners rely on a combination of Clean Heat RI
            and Rhode Island Energy rebates. In most cases, total incentives land between
            $10,000 and $13,000 — and low-income households can qualify for $0 out-of-pocket
            projects.
          </p>
          <p style={{ fontSize: "1.15rem", color: "#4b5563", lineHeight: 1.7, marginTop: "0.75rem" }}>
            Here&apos;s what&apos;s actually available.
          </p>
          <p style={{ fontSize: "0.85rem", color: "#6b7280", marginTop: "1.25rem" }}>
            Last verified: {formattedDate}
          </p>
          <p style={{ fontSize: "0.8rem", color: "#9ca3af", marginTop: "0.25rem" }}>
            Rates and program availability may change after this date.
          </p>
        </div>
      </section>

      {/* Status Card */}
      <section style={{ padding: "2rem 1rem" }}>
        <div className="container-narrow">
          <StatusCard incentive={riIncentive} />
        </div>
      </section>

      {/* Short Version */}
      <section style={{ padding: "1rem 1rem 2rem" }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "1rem" }}>
            Short Version
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
            <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "0.75rem", padding: "1.25rem" }}>
              <p style={{ fontWeight: 600, color: "#166534", marginBottom: "0.25rem" }}>✓ Clean Heat RI</p>
              <p style={{ fontSize: "0.9rem", color: "#374151" }}>Up to $11,500 (60% of cost). Expires Dec 31, 2026.</p>
            </div>
            <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "0.75rem", padding: "1.25rem" }}>
              <p style={{ fontWeight: 600, color: "#166534", marginBottom: "0.25rem" }}>✓ RI Energy Utility Rebates</p>
              <p style={{ fontSize: "0.9rem", color: "#374151" }}>$150–$400/ton standard. $1,250/ton electric resistance switch.</p>
            </div>
            <div style={{ background: "#fffbeb", border: "1px solid #fde68a", borderRadius: "0.75rem", padding: "1.25rem" }}>
              <p style={{ fontWeight: 600, color: "#92400e", marginBottom: "0.25rem" }}>⚠ HEAR (IRA Rebates)</p>
              <p style={{ fontSize: "0.9rem", color: "#374151" }}>Open for electrical upgrades only. Does not cover heat pump HVAC systems.</p>
            </div>
            <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "0.75rem", padding: "1.25rem" }}>
              <p style={{ fontWeight: 600, color: "#991b1b", marginBottom: "0.25rem" }}>✗ Federal Tax Credits</p>
              <p style={{ fontSize: "0.9rem", color: "#374151" }}>25C and 25D both expired Dec 31, 2025. $0 for 2026 installs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Federal Credits Dead */}
      <section style={{ padding: "1rem 1rem 2rem" }}>
        <div className="container-narrow">
          <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "0.75rem", padding: "1.25rem" }}>
            <p style={{ color: "#991b1b", fontSize: "0.95rem" }}>
              <strong>Federal tax credits ended.</strong> Both 25C ($2,000/year for heat pumps)
              and 25D (30% for geothermal) expired December 31, 2025 under the One Big Beautiful
              Bill Act. Equipment installed in 2026 does not qualify — even if purchased in 2025.{" "}
              <Link
                href="/federal-heat-pump-tax-credit-expired"
                style={{ color: "#991b1b", fontWeight: 600, textDecoration: "underline" }}
              >
                Full details →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Clean Heat RI */}
      <section style={{ padding: "2rem 1rem" }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem" }}>
            Clean Heat RI — The Main Incentive
          </h2>
          <p style={{ color: "#4b5563", lineHeight: 1.7, marginBottom: "1rem" }}>
            Administered by the Rhode Island Office of Energy Resources and operated by InClime,
            Clean Heat RI is funded with $25 million from ARPA. Over 2,900 rebates totaling $10+
            million had been issued by late 2024. All funds must be spent by December 31, 2026 —
            once exhausted, the program ends permanently with no announced replacement.
          </p>

          <h3 style={{ fontSize: "1.15rem", fontWeight: 600, marginBottom: "0.75rem" }}>
            Standard Residential (All Income Levels)
          </h3>
          <p style={{ color: "#4b5563", lineHeight: 1.7, marginBottom: "0.75rem" }}>
            Must be displacing natural gas, propane, or oil heating. Electric resistance
            customers should use RI Energy&apos;s enhanced rebate instead.
          </p>
          <div style={{ overflowX: "auto", marginBottom: "1.5rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
              <thead>
                <tr style={{ background: "#f8fafc", borderBottom: "2px solid #e5e7eb" }}>
                  <th style={{ padding: "0.75rem", textAlign: "left" }}>Equipment</th>
                  <th style={{ padding: "0.75rem", textAlign: "left" }}>Incentive</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                  <td style={{ padding: "0.75rem" }}>Air-source heat pump</td>
                  <td style={{ padding: "0.75rem" }}><strong>60% of system + installation cost, up to $11,500</strong> per address</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                  <td style={{ padding: "0.75rem" }}>Ground-source (geothermal) heat pump</td>
                  <td style={{ padding: "0.75rem" }}>60% of cost, up to $11,500</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                  <td style={{ padding: "0.75rem" }}>Air-to-water heat pump</td>
                  <td style={{ padding: "0.75rem" }}>60% of cost, up to $11,500</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                  <td style={{ padding: "0.75rem" }}>Heat pump water heater</td>
                  <td style={{ padding: "0.75rem" }}><strong>$2,500</strong> flat per system</td>
                </tr>
                <tr>
                  <td style={{ padding: "0.75rem" }}>Lifetime cap per address</td>
                  <td style={{ padding: "0.75rem" }}><strong>$18,000</strong> (includes all past Clean Heat RI incentives)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 style={{ fontSize: "1.15rem", fontWeight: 600, marginBottom: "0.75rem" }}>
            Income-Eligible (≤150% State Median Income)
          </h3>
          <p style={{ color: "#4b5563", lineHeight: 1.7, marginBottom: "1rem" }}>
            Covers <strong>100% of project cost, up to $18,000</strong> per address — including
            electrical service upgrades. Income limit for a family of four: $178,500. This tier
            currently has a waitlist. The rebate is applied at point of sale — the contractor
            deducts it directly from your invoice.
          </p>

          <h3 style={{ fontSize: "1.15rem", fontWeight: 600, marginBottom: "0.75rem" }}>
            Equipment Requirements
          </h3>
          <p style={{ color: "#4b5563", lineHeight: 1.7, marginBottom: "0.5rem" }}>
            Equipment must meet <strong>ENERGY STAR 6.1 Cold Climate</strong> criteria and appear
            on the <a href="https://ashp.neep.org" target="_blank" rel="noopener noreferrer"
            style={{ color: "#2563eb", textDecoration: "underline" }}>RI NEEP Qualified Products List</a>.
            Heat pump water heaters need <strong>UEF ≥3.30</strong> (240V) or <strong>UEF ≥2.20</strong> (120V/split).
            Installation must use a contractor from the Clean Heat RI Heat Pump Installer Network (HPIN).
            The home must be sufficiently weatherized.
          </p>
        </div>
      </section>

      {/* HEAR Program */}
      <section style={{ padding: "2rem 1rem", background: "#fffbeb" }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem" }}>
            HEAR Program (IRA-Funded) — Electrical Upgrades Only
          </h2>
          <p style={{ color: "#4b5563", lineHeight: 1.7, marginBottom: "1rem" }}>
            Rhode Island was the first New England state to launch the HEAR low-income pathway
            (September 2024), using $31.8 million in federal IRA funding. However, <strong>Rhode
            Island strategically excluded heat pump HVAC systems and heat pump water heaters</strong> from
            its HEAR program because those are already covered by Clean Heat RI. HEAR covers
            enabling infrastructure and appliances only:
          </p>
          <div style={{ overflowX: "auto", marginBottom: "1rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
              <thead>
                <tr style={{ background: "#fef3c7", borderBottom: "2px solid #fde68a" }}>
                  <th style={{ padding: "0.75rem", textAlign: "left" }}>Item</th>
                  <th style={{ padding: "0.75rem", textAlign: "left" }}>Low-Income (≤80% AMI)</th>
                  <th style={{ padding: "0.75rem", textAlign: "left" }}>Moderate (80–150% AMI)</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                  <td style={{ padding: "0.75rem" }}>Electrical panel upgrade</td>
                  <td style={{ padding: "0.75rem" }}>Up to <strong>$4,000</strong></td>
                  <td style={{ padding: "0.75rem" }}>Up to $2,000</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                  <td style={{ padding: "0.75rem" }}>Electrical wiring</td>
                  <td style={{ padding: "0.75rem" }}>Up to <strong>$2,500</strong></td>
                  <td style={{ padding: "0.75rem" }}>Up to $1,250</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                  <td style={{ padding: "0.75rem" }}>ENERGY STAR electric stove/induction</td>
                  <td style={{ padding: "0.75rem" }}>Up to $840</td>
                  <td style={{ padding: "0.75rem" }}>Up to $420</td>
                </tr>
                <tr>
                  <td style={{ padding: "0.75rem" }}>ENERGY STAR HP clothes dryer</td>
                  <td style={{ padding: "0.75rem" }}>Up to $840</td>
                  <td style={{ padding: "0.75rem" }}>Up to $420</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ color: "#92400e", fontSize: "0.9rem", lineHeight: 1.7 }}>
            <strong>Important:</strong> Some commercial sources cite &quot;HEAR: up to $8,000 for
            heat pumps.&quot; That figure is the federal statutory maximum — not what Rhode
            Island&apos;s actual program covers. The official RI OER materials confirm HEAR covers
            panels, wiring, stoves, and dryers — not heat pump HVAC systems. The moderate-income
            pathway remains under development. Contact: Energy.HEAR@energy.ri.gov.
          </p>
        </div>
      </section>

      {/* Rhode Island Energy Utility Rebates */}
      <section style={{ padding: "2rem 1rem" }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem" }}>
            Rhode Island Energy — Utility Rebates
          </h2>
          <p style={{ color: "#4b5563", lineHeight: 1.7, marginBottom: "1rem" }}>
            Rhode Island Energy (formerly National Grid RI) serves roughly 97% of RI electric
            customers and administers the primary utility-funded heat pump rebates. These are
            ratepayer-funded and unaffected by the federal credit expiration.
          </p>

          <h3 style={{ fontSize: "1.15rem", fontWeight: 600, marginBottom: "0.75rem" }}>
            Standard Rebates (Replacing Oil, Gas, or Propane)
          </h3>
          <div style={{ overflowX: "auto", marginBottom: "1.5rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
              <thead>
                <tr style={{ background: "#f8fafc", borderBottom: "2px solid #e5e7eb" }}>
                  <th style={{ padding: "0.75rem", textAlign: "left" }}>Equipment</th>
                  <th style={{ padding: "0.75rem", textAlign: "left" }}>Rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                  <td style={{ padding: "0.75rem" }}>Ducted central / ducted mini-split</td>
                  <td style={{ padding: "0.75rem" }}>Up to <strong>$400/ton</strong></td>
                </tr>
                <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                  <td style={{ padding: "0.75rem" }}>Ductless mini-split</td>
                  <td style={{ padding: "0.75rem" }}>$150–$200/ton</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                  <td style={{ padding: "0.75rem" }}>Heat pump water heater</td>
                  <td style={{ padding: "0.75rem" }}>Up to <strong>$600</strong></td>
                </tr>
                <tr>
                  <td style={{ padding: "0.75rem" }}>ENERGY STAR smart thermostat</td>
                  <td style={{ padding: "0.75rem" }}>$75 each</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 style={{ fontSize: "1.15rem", fontWeight: 600, marginBottom: "0.75rem" }}>
            Enhanced Rebates (Replacing Electric Baseboard/Resistance)
          </h3>
          <p style={{ color: "#4b5563", lineHeight: 1.7, marginBottom: "1rem" }}>
            If you&apos;re replacing electric resistance heating (baseboard, wall heaters, etc.),
            RI Energy offers <strong>$1,250 per ton</strong> — significantly higher than the
            standard rate. For a 3-ton system, that&apos;s $3,750.
          </p>

          <h3 style={{ fontSize: "1.15rem", fontWeight: 600, marginBottom: "0.75rem" }}>
            Requirements
          </h3>
          <p style={{ color: "#4b5563", lineHeight: 1.7, marginBottom: "0.5rem" }}>
            You must complete a <strong>free EnergyWise Home Energy Assessment</strong> (call
            888-633-7947). Home must be insulated and weatherized per EnergyWise recommendations.
            Systems must be AHRI-certified, ductless units must appear on the NEEP cold-climate
            list with COP &gt;1.75 at 5°F, and ducted systems need minimum SEER2 &gt;14.3 /
            HSPF2 &gt;7.7. Limit: 4 heat pump rebates and 2 smart thermostats per account.
            Submit documentation within 90 days of installation.
          </p>
        </div>
      </section>

      {/* Small Utilities */}
      <section style={{ padding: "2rem 1rem", background: "#f8fafc" }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem" }}>
            Smaller Utilities
          </h2>

          <h3 style={{ fontSize: "1.15rem", fontWeight: 600, marginBottom: "0.5rem" }}>
            Block Island Power Company
          </h3>
          <p style={{ color: "#4b5563", lineHeight: 1.7, marginBottom: "1rem" }}>
            Serves ~1,600 customers on Block Island. Offers $250/ton (ducted) and $150/ton
            (ductless) for air-source heat pumps, plus up to $300 for HPWHs. Annual cap:
            $750 per customer. Block Island has the highest electricity rates in RI (~$0.35/kWh),
            making efficiency improvements especially valuable.
          </p>

          <h3 style={{ fontSize: "1.15rem", fontWeight: 600, marginBottom: "0.5rem" }}>
            Clear River Electric (Pascoag/Burrillville)
          </h3>
          <p style={{ color: "#4b5563", lineHeight: 1.7 }}>
            Serves about 2% of RI customers. Offers $350/ton (fossil fuel switch) or $700/ton
            (electric resistance switch) for heat pumps, plus up to $450 for HPWHs.
          </p>
        </div>
      </section>

      {/* Financing */}
      <section style={{ padding: "2rem 1rem" }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem" }}>
            Financing Options
          </h2>

          <h3 style={{ fontSize: "1.15rem", fontWeight: 600, marginBottom: "0.5rem" }}>
            RI Energy 0% HEAT Loan
          </h3>
          <p style={{ color: "#4b5563", lineHeight: 1.7, marginBottom: "1rem" }}>
            Up to <strong>$25,000 at 0% APR for up to 7 years</strong>. Requires a free
            EnergyWise assessment. Lending partner: BankFive. One of the most generous
            energy efficiency loan programs in New England.
          </p>

          <h3 style={{ fontSize: "1.15rem", fontWeight: 600, marginBottom: "0.5rem" }}>
            Capital Good Fund DoubleGreen Loan
          </h3>
          <p style={{ color: "#4b5563", lineHeight: 1.7, marginBottom: "1rem" }}>
            $500–$25,000 at <strong>0% APR</strong> for 24–84 months. No closing fee or down
            payment. Household income must be ≤$140,000. Providence-based CDFI.
            Contact: loans@goodfund.us or 866-584-3651.
          </p>
        </div>
      </section>

      {/* Stacking */}
      <section style={{ padding: "2rem 1rem", background: "#f0fdf4" }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem" }}>
            How Programs Stack
          </h2>
          <p style={{ color: "#4b5563", lineHeight: 1.7, marginBottom: "1rem" }}>
            Clean Heat RI + RI Energy utility rebates stack cleanly — Clean Heat RI&apos;s own
            website lists utility rebates as additional incentives. HEAR also stacks with both,
            and since HEAR covers electrical work (not heat pumps), there&apos;s no overlap.
            Total incentives cannot exceed project cost.
          </p>

          <h3 style={{ fontSize: "1.15rem", fontWeight: 600, marginBottom: "0.75rem" }}>
            Typical Homeowner (Above 150% AMI, Replacing Oil)
          </h3>
          <p style={{ color: "#4b5563", lineHeight: 1.7, marginBottom: "0.5rem" }}>
            Scenario: 3-ton cold-climate heat pump ($15,000) + HPWH ($3,500) = $18,500 total
          </p>
          <div style={{ overflowX: "auto", marginBottom: "1.5rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
              <thead>
                <tr style={{ background: "#dcfce7", borderBottom: "2px solid #86efac" }}>
                  <th style={{ padding: "0.75rem", textAlign: "left" }}>Program</th>
                  <th style={{ padding: "0.75rem", textAlign: "right" }}>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                  <td style={{ padding: "0.75rem" }}>Clean Heat RI (60% of $15,000)</td>
                  <td style={{ padding: "0.75rem", textAlign: "right" }}><strong>$9,000</strong></td>
                </tr>
                <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                  <td style={{ padding: "0.75rem" }}>RI Energy ($400/ton × 3)</td>
                  <td style={{ padding: "0.75rem", textAlign: "right" }}>$1,200</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                  <td style={{ padding: "0.75rem" }}>Clean Heat RI — HPWH</td>
                  <td style={{ padding: "0.75rem", textAlign: "right" }}>$2,500</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                  <td style={{ padding: "0.75rem" }}>RI Energy — HPWH</td>
                  <td style={{ padding: "0.75rem", textAlign: "right" }}>$600</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                  <td style={{ padding: "0.75rem" }}>Federal 25C</td>
                  <td style={{ padding: "0.75rem", textAlign: "right", color: "#991b1b" }}>$0 (expired)</td>
                </tr>
                <tr style={{ background: "#dcfce7" }}>
                  <td style={{ padding: "0.75rem", fontWeight: 700 }}>Total incentives</td>
                  <td style={{ padding: "0.75rem", textAlign: "right", fontWeight: 700 }}>~$13,300</td>
                </tr>
                <tr>
                  <td style={{ padding: "0.75rem", fontWeight: 700 }}>Your out-of-pocket</td>
                  <td style={{ padding: "0.75rem", textAlign: "right", fontWeight: 700, color: "#166534" }}>~$5,200</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 style={{ fontSize: "1.15rem", fontWeight: 600, marginBottom: "0.75rem" }}>
            Low-Income Homeowner (≤80% AMI, Replacing Oil)
          </h3>
          <p style={{ color: "#4b5563", lineHeight: 1.7, marginBottom: "0.5rem" }}>
            Same system ($18,500) + electrical panel/wiring upgrades ($5,000) = $23,500 total
          </p>
          <div style={{ overflowX: "auto", marginBottom: "1rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
              <thead>
                <tr style={{ background: "#dcfce7", borderBottom: "2px solid #86efac" }}>
                  <th style={{ padding: "0.75rem", textAlign: "left" }}>Program</th>
                  <th style={{ padding: "0.75rem", textAlign: "right" }}>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                  <td style={{ padding: "0.75rem" }}>Clean Heat RI income-eligible (100%, up to $18,000)</td>
                  <td style={{ padding: "0.75rem", textAlign: "right" }}><strong>$18,000</strong></td>
                </tr>
                <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                  <td style={{ padding: "0.75rem" }}>HEAR — panel upgrade</td>
                  <td style={{ padding: "0.75rem", textAlign: "right" }}>$4,000</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                  <td style={{ padding: "0.75rem" }}>HEAR — wiring</td>
                  <td style={{ padding: "0.75rem", textAlign: "right" }}>$2,500</td>
                </tr>
                <tr style={{ background: "#dcfce7" }}>
                  <td style={{ padding: "0.75rem", fontWeight: 700 }}>Your out-of-pocket</td>
                  <td style={{ padding: "0.75rem", textAlign: "right", fontWeight: 700, color: "#166534" }}>$0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What Actually Matters */}
      <section style={{ padding: "2rem 1rem" }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem" }}>
            What Actually Matters in Rhode Island
          </h2>
          <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "0.75rem", padding: "1.5rem" }}>
            <p style={{ color: "#374151", lineHeight: 1.8, marginBottom: "0.75rem" }}>
              <strong>Clean Heat RI is doing almost all the heavy lifting</strong> — and it ends
              December 31, 2026. There is no announced replacement.
            </p>
            <p style={{ color: "#374151", lineHeight: 1.8, marginBottom: "0.75rem" }}>
              <strong>HEAR does not pay for heat pumps here</strong> — only electrical upgrades
              and appliances. If someone tells you HEAR covers $8,000 for a heat pump in Rhode
              Island, that&apos;s wrong.
            </p>
            <p style={{ color: "#374151", lineHeight: 1.8, marginBottom: "0.75rem" }}>
              <strong>Utility rebates are small but stack cleanly.</strong> RI Energy&apos;s
              $400/ton adds $1,200 on a typical 3-ton system — not life-changing, but free money.
            </p>
            <p style={{ color: "#374151", lineHeight: 1.8 }}>
              <strong>Oil and propane homes see the biggest savings.</strong> At $4–5+/gallon for
              heating oil, the economics are strong even at RI&apos;s high electricity rates
              (~30¢/kWh). Gas homes are more borderline — heat pumps cost roughly the same per BTU
              to operate, so the payback depends more on equipment age and AC needs.
            </p>
          </div>
        </div>
      </section>

      {/* Climate Context */}
      <section style={{ padding: "2rem 1rem", background: "#f8fafc" }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem" }}>
            Climate Context
          </h2>
          <p style={{ color: "#4b5563", lineHeight: 1.7, marginBottom: "1rem" }}>
            Rhode Island falls entirely in ASHRAE Climate Zone 5A (Cold, Humid). Design
            temperatures range from about 5°F inland (Woonsocket) to 10°F along the coast
            (Newport). Modern cold-climate heat pumps operate down to -13°F to -15°F — providing
            a 15–25°F safety margin. Most homes do not require backup heating in typical conditions.
          </p>
          <p style={{ color: "#4b5563", lineHeight: 1.7, marginBottom: "1rem" }}>
            About 24% of RI households still heat with oil — well above the national average of
            roughly 4%. At $4–5+/gallon, heating oil is significantly more expensive per BTU than
            a cold-climate heat pump, even at RI&apos;s high electricity rates. The effective cost
            per million BTU makes the comparison clearer: roughly $34 for a heat pump (COP 2.5)
            versus $38 for oil and $49 for propane.
          </p>
          <p style={{ color: "#4b5563", lineHeight: 1.7 }}>
            Rhode Island&apos;s electricity rates are among the highest in the country at
            approximately 29–31¢/kWh. Heat pumps are cost-competitive with oil and propane
            but roughly comparable to natural gas — meaning gas-heated homes should evaluate
            the full picture including AC value and equipment age before switching.
          </p>
        </div>
      </section>

      {/* How to Apply */}
      <section style={{ padding: "2rem 1rem" }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem" }}>
            How to Apply
          </h2>
          <div style={{ lineHeight: 1.8, color: "#4b5563" }}>
            <p style={{ marginBottom: "0.75rem" }}>
              <strong>Step 1:</strong> Schedule a free{" "}
              <a href="https://www.rienergy.com/site/ways-to-save/ways-to-save-energy/home-energy-assessment" target="_blank"
                rel="noopener noreferrer" style={{ color: "#2563eb", textDecoration: "underline" }}>
                EnergyWise Home Energy Assessment
              </a>{" "}
              through RI Energy (888-633-7947). This is required for both utility rebates and
              the 0% HEAT Loan.
            </p>
            <p style={{ marginBottom: "0.75rem" }}>
              <strong>Step 2:</strong> Complete any recommended weatherization (insulation, air
              sealing). This may be partially or fully covered by EnergyWise.
            </p>
            <p style={{ marginBottom: "0.75rem" }}>
              <strong>Step 3:</strong> Choose a contractor from the{" "}
              <a href="https://cleanheatri.com/find-an-installer/" target="_blank"
                rel="noopener noreferrer" style={{ color: "#2563eb", textDecoration: "underline" }}>
                Clean Heat RI Installer Network (HPIN)
              </a>. Using an HPIN contractor is required for Clean Heat RI rebates.
            </p>
            <p style={{ marginBottom: "0.75rem" }}>
              <strong>Step 4:</strong> Your contractor applies the Clean Heat RI rebate at point
              of sale — you see the discount on your invoice. No separate application needed.
            </p>
            <p>
              <strong>Step 5:</strong> Submit RI Energy rebate paperwork within 90 days of
              installation. Your contractor can often handle this too.
            </p>
          </div>
        </div>
      </section>

      {/* What to Watch */}
      <section style={{ padding: "2rem 1rem", background: "#fffbeb" }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem" }}>
            What to Watch
          </h2>
          <p style={{ color: "#4b5563", lineHeight: 1.7, marginBottom: "0.75rem" }}>
            <strong>Clean Heat RI funding:</strong> Over $10 million of $25 million was already
            committed by late 2024. Program could be exhausted well before the Dec 31, 2026
            deadline. Check{" "}
            <a href="https://cleanheatri.com" target="_blank" rel="noopener noreferrer"
              style={{ color: "#2563eb", textDecoration: "underline" }}>cleanheatri.com</a>
            {" "}for current availability.
          </p>
          <p style={{ color: "#4b5563", lineHeight: 1.7, marginBottom: "0.75rem" }}>
            <strong>HOMES program:</strong> RI submitted its application to DOE, but launch has
            not been confirmed. If approved, it could add $2,000–$8,000 for whole-home energy
            improvements depending on income.
          </p>
          <p style={{ color: "#4b5563", lineHeight: 1.7, marginBottom: "0.75rem" }}>
            <strong>HEAR moderate-income pathway:</strong> Still under development. When launched,
            it would cover electrical upgrades for households at 80–150% AMI.
          </p>
          <p style={{ color: "#4b5563", lineHeight: 1.7 }}>
            <strong>NE Heat Pump Accelerator:</strong> $35–40 million over 5 years for RI as part
            of a regional EPA grant. No residential rebate details yet — this is early-stage
            market transformation.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "2rem 1rem" }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
            Frequently Asked Questions
          </h2>
          {faqJsonLd.mainEntity.map(
            (faq: { name: string; acceptedAnswer: { text: string } }, index: number) => (
              <div
                key={index}
                style={{
                  marginBottom: "1.5rem",
                  paddingBottom: "1.5rem",
                  borderBottom:
                    index < faqJsonLd.mainEntity.length - 1
                      ? "1px solid #e5e7eb"
                      : "none",
                }}
              >
                <h3 style={{ fontSize: "1.05rem", marginBottom: "0.5rem" }}>
                  {faq.name}
                </h3>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#374151" }}>
                  {faq.acceptedAnswer.text}
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Sources */}
      <section style={{ padding: "2rem 1rem", background: "#f8fafc" }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>Sources</h2>
          <ul
            style={{
              fontSize: "0.85rem",
              lineHeight: 1.8,
              paddingLeft: "1.25rem",
              color: "#666",
            }}
          >
            {riIncentive.sources.map(
              (source: { label: string; url: string }, index: number) => (
                <li key={index}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {source.label}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </section>

      {/* Cross-Links */}
      <section style={{ padding: "2rem 1rem" }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "1rem" }}>
            See Also
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <Link
              href="/heat-pumps/states/ma"
              style={{ color: "#2563eb", fontSize: "0.95rem" }}
            >
              Massachusetts heat pump rebates →
            </Link>
            <Link
              href="/heat-pumps/states/ct"
              style={{ color: "#2563eb", fontSize: "0.95rem" }}
            >
              Connecticut heat pump rebates →
            </Link>
            <Link
              href="/federal-heat-pump-tax-credit-expired"
              style={{ color: "#2563eb", fontSize: "0.95rem" }}
            >
              Federal heat pump tax credit changes →
            </Link>
            <Link
              href="/heat-pumps"
              style={{ color: "#2563eb", fontSize: "0.95rem" }}
            >
              All states →
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section style={{ padding: "2rem 1rem" }}>
        <div className="container-narrow">
          <p
            style={{
              fontSize: "0.8rem",
              color: "#999",
              lineHeight: 1.6,
              fontStyle: "italic",
            }}
          >
            This page is for informational purposes only and does not constitute tax,
            legal, or financial advice. Rebate amounts, eligibility requirements, and
            program availability are subject to change. Verify all details with the
            relevant utility or program administrator before making purchasing decisions.
            Last verified {formattedDate}.
          </p>
          <p style={{ marginTop: "1.5rem" }}>
            <Link
              href="/heat-pumps"
              style={{
                color: "#2563eb",
                textDecoration: "none",
                fontSize: "0.95rem",
              }}
            >
              ← Back to Heat Pump Guide
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
