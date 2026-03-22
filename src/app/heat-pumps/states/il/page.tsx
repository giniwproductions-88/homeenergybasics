import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Illinois Heat Pump Rebates 2026: What's Actually Available | Home Energy Basics",
  description:
    "Federal tax credits ended. Utility rebates of $300–$2,000 through ComEd, Ameren Illinois, and MidAmerican Energy are the primary incentive. Illinois HEAR and HOMES programs remain pending. Here's the complete picture.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/il",
  },
  openGraph: {
    title: "Illinois Heat Pump Rebates 2026",
    description:
      "ComEd, Ameren Illinois, MidAmerican Energy — utility-by-utility heat pump rebate guide for Illinois. Federal credits gone, state IRA programs pending.",
    url: "https://homeenergybasics.com/heat-pumps/states/il",
    type: "article",
  },
};

export default function IllinoisPage() {
  const ilIncentive = incentives.IL;
  const formattedDate = formatDate(ilIncentive.lastVerified);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What heat pump rebates are available in Illinois in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Illinois heat pump rebates in 2026 come from your electric utility. ComEd offers up to $2,000 for ducted heat pumps and up to $1,000 for ductless systems. Ameren Illinois offers $900 for ducted and $630 for ductless. MidAmerican Energy offers $300–$713 with a cold-climate premium. The federal 25C tax credit expired December 31, 2025. Illinois HEAR and HOMES rebate programs have not yet launched.",
        },
      },
      {
        "@type": "Question",
        name: "Is there a federal tax credit for heat pumps in Illinois in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. The federal Section 25C Energy Efficient Home Improvement Credit expired December 31, 2025 under the One Big Beautiful Bill Act. Equipment purchased in 2025 but installed in 2026 does not qualify. There is no federal tax credit for heat pump installations in 2026.",
        },
      },
      {
        "@type": "Question",
        name: "What is the status of Illinois HEAR rebates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Illinois received $131.5 million for the HEAR program (Home Electrification and Appliance Rebates), but as of March 2026 the program is not operational. DOE approval has not been finalized. Illinois is initially allocating 100% of HEAR funds to low-income households at or below 80% AMI. Retroactive rebates will not be offered.",
        },
      },
      {
        "@type": "Question",
        name: "Do Nicor Gas or Peoples Gas offer heat pump rebates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Illinois gas utilities — Nicor Gas, Peoples Gas, and North Shore Gas — do not offer rebates for electric heat pumps. Their programs support only gas equipment. If you have both ComEd and Nicor Gas service, your heat pump rebate comes from ComEd.",
        },
      },
      {
        "@type": "Question",
        name: "Can I stack utility rebates with HEAR or HOMES rebates in Illinois?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, when those programs launch. Utility rebates can stack with HEAR or HOMES rebates. HEAR and HOMES cannot be combined on the same measure, but can cover different measures on the same project. Total rebates cannot exceed total project cost.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a cold-climate heat pump in Illinois?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Chicago's ASHRAE winter design temperature is −5°F. Cold-climate-rated heat pumps — meeting ENERGY STAR's Cold Climate specification of COP ≥1.75 at 5°F — are essential for reliable heating performance in most of Illinois.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd data={faqJsonLd} />

      {/* Hero */}
      <section style={{ padding: "2rem 1rem 1rem" }}>
        <div className="container-narrow">
          <p style={{ fontSize: "0.85rem", color: "#666", marginBottom: "1rem" }}>
            <Link href="/heat-pumps" style={{ color: "#2563eb", textDecoration: "none" }}>
              Heat Pump Guide
            </Link>
            {" → "}
            Illinois
          </p>
          <h1 style={{ fontSize: "1.85rem", lineHeight: 1.2, marginBottom: "0.75rem" }}>
            Illinois Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p style={{ fontSize: "1.05rem", color: "#374151", lineHeight: 1.7 }}>
            With federal tax credits gone and state IRA rebate programs still pending
            launch, utility rebates are the main financial incentive available to Illinois
            homeowners installing heat pumps in 2026. Here&apos;s what&apos;s actually
            available.
          </p>
          <p style={{ fontSize: "0.85rem", color: "#999", marginTop: "0.75rem" }}>
            Last verified: {formattedDate}
          </p>
        </div>
      </section>

      {/* Status Card */}
      <section style={{ padding: "1rem 1rem 2rem" }}>
        <div className="container-narrow">
          <StatusCard incentive={ilIncentive} />
        </div>
      </section>

      {/* Short Version */}
      <section style={{ padding: "2rem 1rem", background: "#f0f7ff" }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
            The Short Version
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              {
                icon: "✓",
                color: "#16a34a",
                bg: "#f0fdf4",
                title: "Utility rebates",
                text: "$300–$2,000 from ComEd, Ameren Illinois, or MidAmerican Energy",
              },
              {
                icon: "⚠",
                color: "#d97706",
                bg: "#fffbeb",
                title: "HEAR / HOMES",
                text: "$263M allocated but not yet operational — no confirmed launch date",
              },
              {
                icon: "✗",
                color: "#dc2626",
                bg: "#fef2f2",
                title: "Federal tax credits",
                text: "25C and 25D both expired December 31, 2025",
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  background: card.bg,
                  borderRadius: "0.75rem",
                  padding: "1.25rem",
                  border: `1px solid ${card.color}22`,
                }}
              >
                <p
                  style={{
                    fontSize: "1.5rem",
                    color: card.color,
                    marginBottom: "0.25rem",
                    fontWeight: 700,
                  }}
                >
                  {card.icon}
                </p>
                <p style={{ fontWeight: 600, marginBottom: "0.25rem" }}>{card.title}</p>
                <p style={{ fontSize: "0.9rem", color: "#555", lineHeight: 1.5 }}>
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Federal Credits */}
      <section style={{ padding: "2rem 1rem" }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: "1.35rem", marginBottom: "1rem" }}>
            Federal Tax Credits — Gone for 2026
          </h2>
          <div
            style={{
              background: "#fef2f2",
              border: "1px solid #fecaca",
              borderRadius: "0.75rem",
              padding: "1.25rem",
              marginBottom: "1.5rem",
            }}
          >
            <p style={{ fontWeight: 600, color: "#991b1b", marginBottom: "0.5rem" }}>
              Both credits expired December 31, 2025
            </p>
            <p style={{ fontSize: "0.95rem", color: "#374151", lineHeight: 1.7 }}>
              The <strong>25C</strong> (Energy Efficient Home Improvement Credit, up to
              $2,000 for heat pumps) and <strong>25D</strong> (Residential Clean Energy
              Credit, 30% for geothermal) were both terminated by the One Big Beautiful
              Bill Act. Equipment purchased in 2025 but installed in 2026 does not
              qualify — the IRS defines eligibility by when installation is completed, not
              when equipment is purchased. Homeowners who completed qualifying 25D
              installations (geothermal) by December 31, 2025 may still carry forward
              unused credit to future tax years.
            </p>
          </div>
          <p style={{ fontSize: "0.85rem", color: "#999" }}>
            Sources:{" "}
            <a
              href="https://www.irs.gov/credits-deductions/energy-efficient-home-improvement-credit"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#2563eb" }}
            >
              IRS — 25C
            </a>
            {" · "}
            <a
              href="https://www.irs.gov/newsroom/faqs-for-modification-of-sections-25c-25d-25e-30c-30d-45l-45w-and-179d-under-public-law-119-21-139-stat-72-july-4-2025-commonly-known-as-the-one-big-beautiful-bill-obbb"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#2563eb" }}
            >
              IRS — OBBB FAQs
            </a>
          </p>
        </div>
      </section>

      {/* State Programs */}
      <section style={{ padding: "2rem 1rem", background: "#f8fafc" }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: "1.35rem", marginBottom: "1rem" }}>
            State Programs — Funded but Pending
          </h2>

          {/* HEAR */}
          <div
            style={{
              background: "#fffbeb",
              border: "1px solid #fde68a",
              borderRadius: "0.75rem",
              padding: "1.25rem",
              marginBottom: "1.5rem",
            }}
          >
            <p style={{ fontWeight: 600, color: "#92400e", marginBottom: "0.5rem" }}>
              ⚠ HEAR (Home Electrification and Appliance Rebates) — Not Yet Operational
            </p>
            <p style={{ fontSize: "0.95rem", color: "#374151", lineHeight: 1.7 }}>
              Illinois received $131.5 million for HEAR. The Illinois EPA administers it,
              but DOE approval has not been finalized. When launched, HEAR will offer up to{" "}
              <strong>$8,000 for a heat pump</strong>, up to $1,750 for a heat pump water
              heater, and up to $14,000 total per household. Illinois is initially
              allocating 100% of HEAR funds to <strong>low-income households (≤80% AMI)</strong>,
              with rebates covering up to 100% of costs. Retroactive rebates will not be offered.
            </p>
          </div>

          {/* HOMES */}
          <div
            style={{
              background: "#fffbeb",
              border: "1px solid #fde68a",
              borderRadius: "0.75rem",
              padding: "1.25rem",
              marginBottom: "1.5rem",
            }}
          >
            <p style={{ fontWeight: 600, color: "#92400e", marginBottom: "0.5rem" }}>
              ⚠ HOMES (Home Efficiency Rebates) — Pilot Phase, Pending DOE Approval
            </p>
            <p style={{ fontSize: "0.95rem", color: "#374151", lineHeight: 1.7 }}>
              Illinois received $132 million for HOMES, administered by DCEO through local
              agencies. Final consumer-facing rebate pathways and pilot details are not yet
              fully live. Rebates will be based on modeled whole-home energy savings, with
              higher amounts for income-qualified households. Illinois is initially targeting
              100% of HOMES funds to low-income households (≤80% AMI).
            </p>
          </div>

          <p style={{ fontSize: "0.95rem", color: "#374151", lineHeight: 1.7, marginBottom: "1rem" }}>
            <strong>State tax credits:</strong> Illinois does not currently offer a state
            income tax credit for residential heat pumps.
          </p>
          <p style={{ fontSize: "0.95rem", color: "#374151", lineHeight: 1.7 }}>
            <strong>Financing:</strong> The{" "}
            <a
              href="https://www.ilenergyloan.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#2563eb" }}
            >
              Illinois Energy Loan Program
            </a>{" "}
            offers on-bill financing for heat pumps at 7.74% fixed APR with terms of
            1–10 years. This is not a subsidized low-interest program.
          </p>
          <p style={{ fontSize: "0.85rem", color: "#999", marginTop: "1rem" }}>
            Sources:{" "}
            <a
              href="https://epa.illinois.gov/topics/energy/energy-rebates.html"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#2563eb" }}
            >
              Illinois EPA — Energy Rebates
            </a>
            {" · "}
            <a
              href="https://www.ilsag.info/wp-content/uploads/IEPA-Office-of-Energy-IRA-Home-Energy-Rebate-Update-7.23.2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#2563eb" }}
            >
              ILSAG IRA Update (July 2025)
            </a>
          </p>
        </div>
      </section>

      {/* Utility Rebates */}
      <section style={{ padding: "2rem 1rem" }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: "1.35rem", marginBottom: "0.5rem" }}>
            Utility Rebates — This Is Where the Money Is
          </h2>
          <p style={{ fontSize: "0.95rem", color: "#666", marginBottom: "1.5rem" }}>
            Your electric utility determines which rebate you can access. Gas utilities
            (Nicor Gas, Peoples Gas, North Shore Gas) do not offer electric heat pump rebates.
          </p>

          {/* ComEd */}
          <div
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "0.75rem",
              padding: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <h3 style={{ fontSize: "1.15rem", marginBottom: "0.75rem" }}>
              ComEd — Chicago Metro &amp; Northern Illinois
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "0.75rem",
                marginBottom: "1rem",
              }}
            >
              <div
                style={{
                  background: "#f0fdf4",
                  borderRadius: "0.5rem",
                  padding: "1rem",
                  textAlign: "center",
                }}
              >
                <p style={{ fontSize: "1.5rem", fontWeight: 700, color: "#16a34a" }}>
                  Up to $2,000
                </p>
                <p style={{ fontSize: "0.85rem", color: "#555" }}>Ducted heat pump</p>
              </div>
              <div
                style={{
                  background: "#f0fdf4",
                  borderRadius: "0.5rem",
                  padding: "1rem",
                  textAlign: "center",
                }}
              >
                <p style={{ fontSize: "1.5rem", fontWeight: 700, color: "#16a34a" }}>
                  Up to $1,000
                </p>
                <p style={{ fontSize: "0.85rem", color: "#555" }}>Ductless mini-split</p>
              </div>
              <div
                style={{
                  background: "#f0fdf4",
                  borderRadius: "0.5rem",
                  padding: "1rem",
                  textAlign: "center",
                }}
              >
                <p style={{ fontSize: "1.5rem", fontWeight: 700, color: "#16a34a" }}>
                  Up to $2,075
                </p>
                <p style={{ fontSize: "0.85rem", color: "#555" }}>
                  With smart thermostat
                </p>
              </div>
            </div>
            <p style={{ fontSize: "0.95rem", color: "#374151", lineHeight: 1.7, marginBottom: "0.75rem" }}>
              Rebates are tiered by efficiency — higher SEER2 and HSPF2 ratings earn
              larger rebates. A <strong>ComEd Residential Heating and Cooling Trade
              Ally</strong> must perform the installation. Check ComEd&apos;s current
              program materials for application deadlines.
            </p>
            <p style={{ fontSize: "0.95rem", color: "#374151", lineHeight: 1.7 }}>
              <strong>Income-eligible customers</strong> can access enhanced rebates and
              whole-home electrification improvements (including heat pump water heaters)
              through ComEd&apos;s Income Eligible Solutions program.
            </p>
            <p style={{ fontSize: "0.85rem", color: "#999", marginTop: "0.75rem" }}>
              <a
                href="https://www.comed.com/ways-to-save/for-your-home/rebates-discounts/heating-cooling-discounts"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#2563eb" }}
              >
                ComEd Heating &amp; Cooling Rebates ↗
              </a>
              {" · "}
              <a
                href="https://goelectric.comed.com/incentives-and-financing/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#2563eb" }}
              >
                ComEd Go Electric ↗
              </a>
            </p>
          </div>

          {/* Ameren */}
          <div
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "0.75rem",
              padding: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <h3 style={{ fontSize: "1.15rem", marginBottom: "0.75rem" }}>
              Ameren Illinois — Central &amp; Southern Illinois
            </h3>
            <p style={{ fontSize: "0.95rem", color: "#374151", lineHeight: 1.7, marginBottom: "0.75rem" }}>
              Ameren offers <strong>instant discounts</strong> applied at the point of
              purchase through participating distributors — no separate rebate application
              needed:
            </p>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.9rem",
                marginBottom: "1rem",
              }}
            >
              <thead>
                <tr style={{ borderBottom: "2px solid #e5e7eb" }}>
                  <th style={{ textAlign: "left", padding: "0.5rem 0.75rem" }}>Equipment</th>
                  <th style={{ textAlign: "right", padding: "0.5rem 0.75rem" }}>Discount</th>
                  <th style={{ textAlign: "left", padding: "0.5rem 0.75rem" }}>Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { equip: "Ducted ASHP", amt: "$900", notes: "≥15.2 SEER2, ≥8.1 HSPF2; limit 2/acct" },
                  { equip: "Ductless mini-split", amt: "$630", notes: "≥16 SEER2, ≥8.55 HSPF2; limit 2/acct" },
                  { equip: "HPWH (installed)", amt: "$1,150", notes: "Through Program Ally contractor" },
                  { equip: "HPWH (self-install)", amt: "$800", notes: "Online rebate or Lowe's/HD coupon" },
                  { equip: "Geothermal", amt: "$1,350–$5,400", notes: "+$500 with desuperheater" },
                ].map((row) => (
                  <tr
                    key={row.equip}
                    style={{ borderBottom: "1px solid #f3f4f6" }}
                  >
                    <td style={{ padding: "0.5rem 0.75rem" }}>{row.equip}</td>
                    <td style={{ padding: "0.5rem 0.75rem", textAlign: "right", fontWeight: 600 }}>
                      {row.amt}
                    </td>
                    <td style={{ padding: "0.5rem 0.75rem", color: "#666", fontSize: "0.85rem" }}>
                      {row.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontSize: "0.95rem", color: "#374151", lineHeight: 1.7 }}>
              <strong>Income-qualified customers</strong> can receive up to 80% cost
              coverage through the Home Efficiency Income Qualified Program, including
              heating and cooling upgrades.
            </p>
            <p style={{ fontSize: "0.85rem", color: "#999", marginTop: "0.75rem" }}>
              <a
                href="https://amerenillinoissavings.com/residential/products-discounts-and-rebates/hvac-and-water-heating-discounts/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#2563eb" }}
              >
                Ameren Illinois HVAC Discounts ↗
              </a>
            </p>
          </div>

          {/* MidAmerican */}
          <div
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "0.75rem",
              padding: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <h3 style={{ fontSize: "1.15rem", marginBottom: "0.75rem" }}>
              MidAmerican Energy — Western Illinois (Quad Cities)
            </h3>
            <p style={{ fontSize: "0.95rem", color: "#374151", lineHeight: 1.7, marginBottom: "0.75rem" }}>
              MidAmerican is the only major Illinois utility with an explicit{" "}
              <strong>cold-climate heat pump premium</strong>:
            </p>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.9rem",
                marginBottom: "1rem",
              }}
            >
              <thead>
                <tr style={{ borderBottom: "2px solid #e5e7eb" }}>
                  <th style={{ textAlign: "left", padding: "0.5rem 0.75rem" }}>Equipment</th>
                  <th style={{ textAlign: "right", padding: "0.5rem 0.75rem" }}>Standard</th>
                  <th style={{ textAlign: "right", padding: "0.5rem 0.75rem" }}>Cold-Climate</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { equip: "Air-source HP", std: "$300–$563", cc: "$563–$713" },
                  { equip: "Ductless mini-split", std: "$375", cc: "$525" },
                  { equip: "Geothermal", std: "$900–$1,200", cc: "—" },
                  { equip: "HPWH", std: "$225", cc: "—" },
                ].map((row) => (
                  <tr
                    key={row.equip}
                    style={{ borderBottom: "1px solid #f3f4f6" }}
                  >
                    <td style={{ padding: "0.5rem 0.75rem" }}>{row.equip}</td>
                    <td style={{ padding: "0.5rem 0.75rem", textAlign: "right", fontWeight: 600 }}>
                      {row.std}
                    </td>
                    <td style={{ padding: "0.5rem 0.75rem", textAlign: "right", fontWeight: 600, color: "#2563eb" }}>
                      {row.cc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontSize: "0.9rem", color: "#666", lineHeight: 1.6 }}>
              Rebates capped at 70% of equipment cost. Limit 2 per equipment type per
              address.
            </p>
            <p style={{ fontSize: "0.85rem", color: "#999", marginTop: "0.75rem" }}>
              <a
                href="https://www.midamericanenergy.com/home-discounts-and-rebates"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#2563eb" }}
              >
                MidAmerican Home Discounts ↗
              </a>
            </p>
          </div>

          {/* Gas Utilities */}
          <div
            style={{
              border: "1px solid #fecaca",
              borderRadius: "0.75rem",
              padding: "1.5rem",
              marginBottom: "1.5rem",
              background: "#fef2f2",
            }}
          >
            <h3 style={{ fontSize: "1.15rem", marginBottom: "0.75rem" }}>
              Nicor Gas · Peoples Gas · North Shore Gas — No Electric Heat Pump Rebates
            </h3>
            <p style={{ fontSize: "0.95rem", color: "#374151", lineHeight: 1.7 }}>
              Illinois&apos;s three largest gas utilities do not offer rebates for electric
              heat pumps. Their programs support only gas equipment. Peoples Gas and North
              Shore Gas offer a niche rebate for gas absorption heat pumps ($575–$700),
              but that&apos;s a gas-fired technology. If you have both ComEd and Nicor Gas
              service, your heat pump rebate comes from ComEd.
            </p>
          </div>

          {/* Municipal */}
          <div
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "0.75rem",
              padding: "1.5rem",
            }}
          >
            <h3 style={{ fontSize: "1.15rem", marginBottom: "0.75rem" }}>
              Municipal Utilities
            </h3>
            <ul style={{ paddingLeft: "1.25rem", fontSize: "0.95rem", lineHeight: 1.8, color: "#374151" }}>
              <li>
                <strong>Springfield CWLP:</strong> $200 per ton of cooling capacity, plus a
                9% Electric Heat Rate Discount on your bill from mid-September through mid-May
              </li>
              <li>
                <strong>Naperville Electric:</strong> $500–$600 depending on efficiency tier
                (limit 1, until funding runs out)
              </li>
              <li>
                <strong>Rural electric co-ops</strong> (EnerStar, Corn Belt, MJM, Eastern
                Illini): up to $700–$1,800 depending on co-op — check with yours directly
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Stacking */}
      <section style={{ padding: "2rem 1rem", background: "#f8fafc" }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: "1.35rem", marginBottom: "1rem" }}>
            How Programs Stack
          </h2>
          <p style={{ fontSize: "0.95rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.5rem" }}>
            Utility rebates can stack with HEAR or HOMES rebates once those programs
            launch. HEAR and HOMES cannot be combined on the same measure but can cover
            different measures on the same project. Total rebates cannot exceed total
            project cost.
          </p>

          {/* Median income */}
          <div
            style={{
              background: "#fff",
              border: "1px solid #e5e7eb",
              borderRadius: "0.75rem",
              padding: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <h3 style={{ fontSize: "1.05rem", marginBottom: "0.75rem" }}>
              Median-Income Homeowner (above 150% AMI)
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "0.75rem" }}>
              For a typical whole-home ducted cold-climate heat pump at $15,000–$20,000:
            </p>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.9rem",
              }}
            >
              <tbody>
                {[
                  { label: "Federal 25C", amt: "$0", note: "Expired" },
                  { label: "HEAR rebate", amt: "$0", note: "Not eligible above 150% AMI" },
                  { label: "ComEd utility rebate", amt: "Up to $2,000", note: "Available now" },
                ].map((row) => (
                  <tr key={row.label} style={{ borderBottom: "1px solid #f3f4f6" }}>
                    <td style={{ padding: "0.5rem 0.75rem" }}>{row.label}</td>
                    <td style={{ padding: "0.5rem 0.75rem", textAlign: "right", fontWeight: 600 }}>
                      {row.amt}
                    </td>
                    <td style={{ padding: "0.5rem 0.75rem", color: "#666", fontSize: "0.85rem" }}>
                      {row.note}
                    </td>
                  </tr>
                ))}
                <tr style={{ background: "#f0f7ff" }}>
                  <td style={{ padding: "0.5rem 0.75rem", fontWeight: 700 }}>
                    Realistic total
                  </td>
                  <td
                    style={{
                      padding: "0.5rem 0.75rem",
                      textAlign: "right",
                      fontWeight: 700,
                      color: "#16a34a",
                    }}
                  >
                    $1,400–$2,000
                  </td>
                  <td style={{ padding: "0.5rem 0.75rem" }}></td>
                </tr>
              </tbody>
            </table>
            <p style={{ fontSize: "0.9rem", color: "#666", marginTop: "0.75rem", lineHeight: 1.6 }}>
              This is a significant drop from 2025, when the same homeowner could stack a
              $2,000 federal credit on top of the utility rebate for $3,400–$4,000 total.
            </p>
          </div>

          {/* Income qualified */}
          <div
            style={{
              background: "#fff",
              border: "1px solid #e5e7eb",
              borderRadius: "0.75rem",
              padding: "1.5rem",
            }}
          >
            <h3 style={{ fontSize: "1.05rem", marginBottom: "0.75rem" }}>
              Income-Qualified Homeowner (≤80% AMI)
            </h3>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.9rem",
              }}
            >
              <tbody>
                {[
                  { label: "HEAR (heat pump)", amt: "Up to $8,000", note: "When launched" },
                  { label: "HEAR (panel + wiring)", amt: "Up to $6,500", note: "When launched" },
                  { label: "ComEd income-eligible", amt: "~$2,000+", note: "Available now" },
                ].map((row) => (
                  <tr key={row.label} style={{ borderBottom: "1px solid #f3f4f6" }}>
                    <td style={{ padding: "0.5rem 0.75rem" }}>{row.label}</td>
                    <td style={{ padding: "0.5rem 0.75rem", textAlign: "right", fontWeight: 600 }}>
                      {row.amt}
                    </td>
                    <td style={{ padding: "0.5rem 0.75rem", color: "#666", fontSize: "0.85rem" }}>
                      {row.note}
                    </td>
                  </tr>
                ))}
                <tr style={{ background: "#f0f7ff" }}>
                  <td style={{ padding: "0.5rem 0.75rem", fontWeight: 700 }}>
                    Potential total
                  </td>
                  <td
                    style={{
                      padding: "0.5rem 0.75rem",
                      textAlign: "right",
                      fontWeight: 700,
                      color: "#16a34a",
                    }}
                  >
                    Up to ~$16,000
                  </td>
                  <td style={{ padding: "0.5rem 0.75rem", color: "#666", fontSize: "0.85rem" }}>
                    Subject to cost cap
                  </td>
                </tr>
              </tbody>
            </table>
            <p style={{ fontSize: "0.9rem", color: "#374151", marginTop: "1rem", lineHeight: 1.6 }}>
              <strong>Available now:</strong>{" "}
              <a
                href="https://www.chicago.gov/city/en/depts/doh/provdrs/homeowners/svcs/green-homes-chicago.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#2563eb" }}
              >
                Green Homes Chicago
              </a>{" "}
              covers up to $50,000 in free upgrades for eligible Chicago homeowners
              (≤80% AMI, owner-occupied 1–4 units). The{" "}
              <a
                href="https://dceo.illinois.gov/communityservices/homeweatherization.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#2563eb" }}
              >
                Illinois Home Weatherization Assistance Program (IHWAP)
              </a>{" "}
              provides up to $20,000 in free improvements including HVAC replacement for
              households at or below 200% of the Federal Poverty Level.
            </p>
          </div>
        </div>
      </section>

      {/* Climate Context */}
      <section style={{ padding: "2rem 1rem" }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: "1.35rem", marginBottom: "1rem" }}>
            Climate Context — Cold-Climate Heat Pumps Are Essential
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "0.75rem",
              marginBottom: "1.5rem",
            }}
          >
            {[
              { city: "Chicago", temp: "−5°F", zone: "5A" },
              { city: "Springfield", temp: "−3°F", zone: "5A" },
              { city: "Carbondale", temp: "~5°F", zone: "4A" },
            ].map((loc) => (
              <div
                key={loc.city}
                style={{
                  background: "#eff6ff",
                  borderRadius: "0.5rem",
                  padding: "1rem",
                  textAlign: "center",
                }}
              >
                <p style={{ fontWeight: 600 }}>{loc.city}</p>
                <p style={{ fontSize: "1.25rem", fontWeight: 700, color: "#2563eb" }}>
                  {loc.temp}
                </p>
                <p style={{ fontSize: "0.8rem", color: "#666" }}>
                  Design temp · Zone {loc.zone}
                </p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "0.95rem", color: "#374151", lineHeight: 1.7, marginBottom: "1rem" }}>
            Cold-climate-rated heat pumps — meeting ENERGY STAR&apos;s specification of
            COP ≥1.75 at 5°F — are essential for reliable performance in most of
            Illinois. MidAmerican Energy is currently the only major Illinois utility
            offering a cold-climate premium in its rebate tiers.
          </p>
          <p style={{ fontSize: "0.95rem", color: "#374151", lineHeight: 1.7 }}>
            Roughly three-quarters of Illinois households heat with natural gas, making
            most heat pump installations a gas-to-electric fuel switch. That means
            potentially eliminating your gas service charges but possibly requiring an
            electrical panel upgrade. Gas utilities offer no support for this
            transition — your electric utility is where the rebates are.
          </p>
        </div>
      </section>

      {/* Local Programs */}
      <section style={{ padding: "2rem 1rem", background: "#f8fafc" }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: "1.35rem", marginBottom: "1rem" }}>
            Local Programs
          </h2>

          <div style={{ marginBottom: "1.5rem" }}>
            <h3 style={{ fontSize: "1.05rem", marginBottom: "0.5rem" }}>
              Chicago — Green Homes Chicago
            </h3>
            <p style={{ fontSize: "0.95rem", color: "#374151", lineHeight: 1.7 }}>
              Chicago has periodically reopened Green Homes Chicago, which can cover up to{" "}
              <strong>$50,000 in free energy upgrades</strong> per home, including
              cold-climate heat pump systems, weatherization, and high-efficiency
              appliances. Administered by the Department of Housing with Elevate and Zero
              Homes. Eligibility: owner-occupied 1–4 unit properties, household income
              ≤80% AMI.{" "}
              <a
                href="https://www.chicago.gov/city/en/depts/doh/provdrs/homeowners/svcs/green-homes-chicago.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#2563eb" }}
              >
                Check the city website for current enrollment status ↗
              </a>
            </p>
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <h3 style={{ fontSize: "1.05rem", marginBottom: "0.5rem" }}>
              Evanston — Sustain Evanston
            </h3>
            <p style={{ fontSize: "0.95rem", color: "#374151", lineHeight: 1.7 }}>
              Grants up to $25,000 per business for sustainability projects including heat
              pumps. Evanston also passed the Healthy Buildings Ordinance in 2025, the
              first building performance standard in Illinois.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: "1.05rem", marginBottom: "0.5rem" }}>
              Other Cities
            </h3>
            <p style={{ fontSize: "0.95rem", color: "#374151", lineHeight: 1.7 }}>
              Cook County has no direct residential heat pump rebate. Springfield,
              Peoria, Champaign, and Rockford have no city-specific programs — residents
              rely on their utility programs and Springfield residents benefit from CWLP.
            </p>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section style={{ padding: "2rem 1rem" }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: "1.35rem", marginBottom: "1rem" }}>
            How to Apply
          </h2>
          <div style={{ fontSize: "0.95rem", color: "#374151", lineHeight: 1.8 }}>
            <p style={{ marginBottom: "1rem" }}>
              <strong>ComEd customers:</strong> Find a ComEd Residential Heating and
              Cooling Trade Ally, install qualifying equipment, and submit your rebate
              application. Visit{" "}
              <a
                href="https://www.comed.com/ways-to-save/for-your-home/rebates-discounts/heating-cooling-discounts"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#2563eb" }}
              >
                comed.com
              </a>{" "}
              or call 855-433-2700.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Ameren Illinois customers:</strong> Purchase through a participating
              distributor for the instant discount at checkout. No separate application
              needed. For the income-qualified program, visit{" "}
              <a
                href="https://amerenillinoissavings.com/residential/energy-efficiency-home-upgrades/single-family-homeowners/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#2563eb" }}
              >
                amerenillinoissavings.com
              </a>.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>MidAmerican Energy customers:</strong> Apply online or by mail after
              purchase. Visit{" "}
              <a
                href="https://www.midamericanenergy.com/home-discounts-and-rebates"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#2563eb" }}
              >
                midamericanenergy.com
              </a>.
            </p>
            <p>
              <strong>IHWAP (income-qualified):</strong> Contact your local Community
              Action Agency or call 1-833-711-0374. Email: communityassist@illinois.gov.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "2rem 1rem", background: "#f8fafc" }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: "1.35rem", marginBottom: "1rem" }}>
            Frequently Asked Questions
          </h2>
          {faqJsonLd.mainEntity.map(
            (faq: { name: string; acceptedAnswer: { text: string } }, index: number) => (
              <div
                key={index}
                style={{
                  marginBottom: "1.25rem",
                  paddingBottom: "1.25rem",
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
      <section style={{ padding: "2rem 1rem" }}>
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
            {ilIncentive.sources.map(
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

      {/* See Also */}
      <section style={{ padding: "2rem 1rem", background: "#f8fafc" }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>See Also</h2>
          <ul
            style={{
              fontSize: "0.95rem",
              lineHeight: 2,
              paddingLeft: "1.25rem",
            }}
          >
            <li>
              <Link href="/heat-pumps/states/mn" style={{ color: "#2563eb" }}>
                Minnesota Heat Pump Rebates
              </Link>
            </li>
            <li>Wisconsin Heat Pump Rebates <em>(coming soon)</em></li>
            <li>
              <Link
                href="/federal-heat-pump-tax-credit-expired"
                style={{ color: "#2563eb" }}
              >
                Federal Heat Pump Tax Credits Ended
              </Link>
            </li>
            <li>
              <Link href="/battery" style={{ color: "#2563eb" }}>
                Are Home Batteries Worth It in 2026?
              </Link>
            </li>
          </ul>
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
