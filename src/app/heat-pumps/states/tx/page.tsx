import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Texas Heat Pump Rebates 2026: What's Actually Available | Home Energy Basics",
  description:
    "Texas has no statewide heat pump program — rebates come from your utility. Austin Energy offers ~$3,000, Oncor and CenterPoint offer hundreds. Federal tax credits ended. Here's the complete 2026 picture.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/tx",
  },
  openGraph: {
    title: "Texas Heat Pump Rebates 2026",
    description:
      "Utility-by-utility heat pump rebate guide for Texas. Austin Energy, Oncor, CenterPoint, CPS Energy — what's available now.",
    url: "https://homeenergybasics.com/heat-pumps/states/tx",
    type: "article",
  },
};

export default function TexasPage() {
  const txIncentive = incentives.TX;
  const formattedDate = formatDate(txIncentive.lastVerified);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What heat pump rebates are available in Texas in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Texas has no statewide heat pump rebate program. Rebates come from your local utility. Austin Energy offers approximately $3,000 for whole-home projects, Oncor provides performance-based incentives through approved contractors, CenterPoint offers up to $500 per unit, and CPS Energy pays $90–$310 per ton. The federal Section 25C tax credit expired December 31, 2025. Texas has no state income tax, so no state-level credits are possible.",
        },
      },
      {
        "@type": "Question",
        name: "Is there a federal tax credit for heat pumps in Texas in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. The federal Section 25C Energy Efficient Home Improvement Credit expired December 31, 2025 under the One Big Beautiful Bill Act (OBBBA). There is no federal tax credit for residential heat pump installations in 2026. Your utility rebate is the primary incentive available.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between a TDU and a REP in Texas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In Texas's deregulated electricity market, your TDU (Transmission and Distribution Utility) owns the power lines and administers energy efficiency rebate programs. Your REP (Retail Electric Provider) sells you electricity. Your TDU is determined by your address and cannot be changed. Switching REPs does not affect your rebate eligibility. The major TDUs are Oncor (DFW), CenterPoint (Houston), AEP Texas (South Texas), and TNMP.",
        },
      },
      {
        "@type": "Question",
        name: "What happened to the $690 million in IRA rebates for Texas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Texas was allocated $690 million in federal HOMES and HEAR rebate funding through the Inflation Reduction Act. The State Energy Conservation Office (SECO) is still in the procurement process and has not launched either program. SECO warns there are no approved contractors yet. When launched, income-qualified households could receive up to $8,000 for heat pump installations.",
        },
      },
      {
        "@type": "Question",
        name: "Which Texas utility offers the best heat pump rebate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Austin Energy offers the most generous rebates in Texas, with whole-home heat pump projects averaging $3,000 in rebates plus 0% APR financing through Velocity Credit Union. CPS Energy in San Antonio offers $90–$310 per ton. In the deregulated market, Oncor provides performance-based incentives that can reach into the thousands for larger, higher-efficiency systems.",
        },
      },
      {
        "@type": "Question",
        name: "What SEER2 rating should I get for a heat pump in Texas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The DOE minimum for Texas is SEER2 14.3, but this does not qualify for most utility rebates. SEER2 16+ is recommended for Texas's cooling-dominant climate. Variable-speed compressors are important for humidity control, especially in Houston and the Gulf Coast. Higher-efficiency systems also qualify for larger utility rebates.",
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
            / Texas
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Texas heat pump rebates and incentives in 2026
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Texas has no statewide heat pump program and no state income tax. Your rebate
            depends entirely on which utility serves your home. Here is what is actually
            available right now — utility by utility — with no filler.
          </p>
          <p className="text-sm text-gray-500">
            Last verified: {formattedDate}
          </p>
        </div>
      </section>

      {/* Status Card */}
      <section style={{ padding: "2rem 1rem 0" }}>
        <div className="container-narrow">
          <StatusCard incentive={txIncentive} />
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
                Both 25C ($2,000 heat pump) and 25D (geothermal) expired Dec 31, 2025.
                No replacement exists. Texas has no state income tax, so no state credits
                are possible either.
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
                ✓ Utility Rebates (Varies)
              </p>
              <p style={{ fontSize: "0.95rem", color: "#14532d" }}>
                Austin Energy: ~$3,000 whole-home. Oncor: performance-based through
                contractors. CenterPoint: up to $500. CPS Energy: $90–$310/ton.
                Your utility = your rebate.
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
                ⚠ $690M IRA Rebates Pending
              </p>
              <p style={{ fontSize: "0.95rem", color: "#78350f" }}>
                Texas was allocated $690 million in federal HOMES/HEAR rebates, but SECO
                has not launched the program. No approved contractors exist yet. When live,
                income-qualified households could get up to $8,000.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Federal Credits Dead */}
      <section style={{ padding: "2rem 1rem" }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            Federal Heat Pump Tax Credits: Gone in 2026
          </h2>
          <div
            style={{
              background: "#fef2f2",
              border: "1px solid #fecaca",
              borderRadius: "8px",
              padding: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <p style={{ fontWeight: 600, color: "#991b1b", marginBottom: "0.75rem" }}>
              Both residential energy tax credits expired December 31, 2025
            </p>
            <p style={{ fontSize: "0.95rem", color: "#7f1d1d", marginBottom: "0.75rem" }}>
              The One Big Beautiful Bill Act (OBBBA), signed July 4, 2025 as Public Law
              119-21, terminated the Section 25C Energy Efficient Home Improvement Credit
              and the Section 25D Residential Clean Energy Credit for any property placed
              in service after December 31, 2025. These credits had been scheduled to
              continue through 2032–2034 under the Inflation Reduction Act.
            </p>
            <p style={{ fontSize: "0.95rem", color: "#7f1d1d", marginBottom: "0.75rem" }}>
              As of March 2026, no federal residential heat pump tax credit is in effect.
              Texas also has no state income tax, which means no state-level tax credits
              for heat pumps are possible regardless of federal policy.
            </p>
            <p style={{ fontSize: "0.9rem", color: "#991b1b" }}>
              If you installed a qualifying heat pump before January 1, 2026, you can
              still claim the credit on your 2025 tax return using IRS Form 5695.
            </p>
          </div>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
            The OBBBA did <strong>not</strong> repeal the IRA&apos;s HOMES and HEAR rebate
            programs (Sections 50121 and 50122). These are separately appropriated federal
            funds, not tax-code provisions. They survive — but Texas has not launched them
            yet. More on that below.
          </p>
        </div>
      </section>

      {/* How Texas Works: TDU vs REP */}
      <section style={{ padding: "2rem 1rem", background: "#f8fafc" }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            How Texas Is Different: Your Utility Determines Your Rebate
          </h2>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1rem" }}>
            Most of Texas operates in a deregulated electricity market. Unlike states
            with a single statewide program, Texas split its utilities into two roles:
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1rem",
              marginBottom: "1.5rem",
            }}
          >
            <div
              style={{
                background: "white",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                padding: "1.25rem",
              }}
            >
              <p style={{ fontWeight: 600, marginBottom: "0.5rem" }}>
                TDU (Transmission &amp; Distribution Utility)
              </p>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.6 }}>
                Owns the power lines and meters. Administers energy efficiency rebate
                programs. Determined by your address — <strong>you cannot change your
                TDU</strong>. Major TDUs: Oncor (DFW), CenterPoint (Houston), AEP Texas
                (South TX), TNMP (select areas).
              </p>
            </div>
            <div
              style={{
                background: "white",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                padding: "1.25rem",
              }}
            >
              <p style={{ fontWeight: 600, marginBottom: "0.5rem" }}>
                REP (Retail Electric Provider)
              </p>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.6 }}>
                Sells you electricity. You choose your REP and can switch freely. Over
                300 REPs operate in Texas. Compare plans at{" "}
                <a
                  href="https://www.powertochoose.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PowerToChoose.org
                </a>
                . <strong>Switching REPs does not affect your rebate eligibility.</strong>
              </p>
            </div>
          </div>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
            Some areas are regulated instead of deregulated — notably Austin (Austin
            Energy) and San Antonio (CPS Energy). In those cities, one utility handles
            everything: generation, delivery, billing, and rebates.
          </p>
        </div>
      </section>

      {/* Austin Energy */}
      <section style={{ padding: "2rem 1rem" }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: "1.5rem", marginBottom: "0.25rem" }}>
            Austin Energy — Best Rebates in Texas
          </h2>
          <p style={{ fontSize: "0.85rem", color: "#666", marginBottom: "1rem" }}>
            Municipal utility · Austin metro · Regulated
          </p>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1rem" }}>
            Austin Energy operates the most generous heat pump incentive program in
            Texas. Two tracks are available:
          </p>

          <h3 style={{ fontSize: "1.15rem", marginBottom: "0.75rem" }}>
            Home Energy Savings (Whole-Home Program)
          </h3>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1rem" }}>
            Rebates averaging <strong>$3,000</strong> for qualifying whole-home projects
            that combine a heat pump with building envelope improvements. Heat pump
            rebates within this program range from $1,000 to $1,600 depending on
            efficiency tier (SEER2 15.2+ through 17.0+), with additional rebates for duct
            sealing, insulation, smart thermostats, and solar screens stacking on top.
            Home must be 10+ years old.
          </p>

          <h3 style={{ fontSize: "1.15rem", marginBottom: "0.75rem" }}>
            Standalone AC/Heat Pump Rebate
          </h3>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1rem" }}>
            Rebate averaging <strong>$800</strong> for a qualifying system installed
            without the whole-home package. Tiered by efficiency rating — higher SEER2
            earns a larger rebate. All components (condenser, air handler, coil) must be
            replaced.
          </p>

          <h3 style={{ fontSize: "1.15rem", marginBottom: "0.75rem" }}>
            Heat Pump Water Heater
          </h3>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1rem" }}>
            <strong>$800 rebate</strong> for ENERGY STAR certified hybrid/heat pump water
            heater with Energy Factor ≥2.0. Existing unit must be 10+ years old. No
            participating contractor required — apply directly within 90 days of purchase.
          </p>

          <h3 style={{ fontSize: "1.15rem", marginBottom: "0.75rem" }}>
            0% APR Financing
          </h3>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1rem" }}>
            Austin Energy partners with Velocity Credit Union for <strong>0% APR
            loans</strong> on Home Energy Savings projects. Available December 1, 2025
            through September 30, 2026. Loans from $1,500 to $25,000 for up to 10 years.
            Minimum 600 credit score.
          </p>

          <h3 style={{ fontSize: "1.15rem", marginBottom: "0.75rem" }}>
            Income-Qualified Weatherization
          </h3>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1rem" }}>
            Free home energy improvements for customers enrolled in Austin Energy&apos;s
            Customer Assistance Program at or below 80% Median Family Income. Includes
            insulation, solar screens, LED lighting, duct repair, air sealing, and a
            rebate plus 0% financing on a new AC/heat pump system.
          </p>

          <div
            style={{
              background: "#f0fdf4",
              border: "1px solid #bbf7d0",
              borderRadius: "8px",
              padding: "1rem",
              marginBottom: "1rem",
            }}
          >
            <p style={{ fontSize: "0.9rem", color: "#166534" }}>
              <strong>Key details:</strong> Participating contractor required for
              AC/heat pump and whole-home programs. Applications within 90 days of
              installation. Austin Energy uses a tiered rate structure averaging ~$0.12/kWh.
              Get at least 3 contractor estimates.
            </p>
          </div>
          <p style={{ fontSize: "0.85rem", color: "#666" }}>
            Source:{" "}
            <a
              href="https://savings.austinenergy.com/residential/offerings"
              target="_blank"
              rel="noopener noreferrer"
            >
              savings.austinenergy.com
            </a>
          </p>
        </div>
      </section>

      {/* Oncor */}
      <section style={{ padding: "2rem 1rem", background: "#f8fafc" }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: "1.5rem", marginBottom: "0.25rem" }}>
            Oncor — Dallas-Fort Worth, Lubbock, Waco, Tyler
          </h2>
          <p style={{ fontSize: "0.85rem", color: "#666", marginBottom: "1rem" }}>
            Deregulated TDU · ~10 million customers · Largest TDU in Texas
          </p>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1rem" }}>
            Oncor&apos;s Home Energy Efficiency (HEE) Standard Offer Program provides
            performance-based incentives for heat pump installations. Unlike flat rebates,
            the incentive amount varies based on your system&apos;s size, efficiency
            rating, and calculated energy savings.
          </p>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1rem" }}>
            Contractor-reported data from approved Oncor Service Providers indicates
            incentives can range from several hundred dollars for smaller systems to
            potentially <strong>$2,000–$3,400</strong> for large, high-efficiency
            installations. Higher SEER2 ratings earn meaningfully larger incentives.
          </p>

          <h3 style={{ fontSize: "1.15rem", marginBottom: "0.75rem" }}>
            Key Program Requirements
          </h3>
          <ul style={{ fontSize: "0.95rem", lineHeight: 1.8, paddingLeft: "1.25rem", marginBottom: "1rem" }}>
            <li>
              <strong>Approved contractor required</strong> — homeowners cannot apply
              directly. Find a provider at{" "}
              <a
                href="https://www.oncor.com/content/oncorwww/talot/en/home/findaprovider.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                oncor.com
              </a>
            </li>
            <li>
              Some contractor and third-party program guidance indicates a DOE-listed
              smart thermostat may be required for HVAC incentives — confirm with your
              participating Oncor service provider before signing
              (Google Nest, ecobee, Honeywell Home, Emerson Sensi)
            </li>
            <li>
              2026 program cycle: approximately February through November (first-come,
              first-served — funds have historically run out before year-end)
            </li>
            <li>
              ENERGY STAR certification required. SEER2 16+ recommended for best
              incentive value
            </li>
          </ul>

          <h3 style={{ fontSize: "1.15rem", marginBottom: "0.75rem" }}>
            Oncor Retail Products Program
          </h3>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1rem" }}>
            Separate from the HEE program — point-of-sale discounts at participating
            retailers (Home Depot, Lowe&apos;s, Best Buy, Costco). Heat pump water
            heaters up to $500 off. Smart thermostats up to $65 off.
          </p>

          <h3 style={{ fontSize: "1.15rem", marginBottom: "0.75rem" }}>
            Low-Income Weatherization
          </h3>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1rem" }}>
            Households at or below 200% of federal poverty guidelines may qualify for
            Oncor&apos;s Low-Income Weatherization (LIW) program, which provides enhanced
            HVAC incentives plus free insulation and air sealing.
          </p>
          <p style={{ fontSize: "0.85rem", color: "#666" }}>
            Source:{" "}
            <a
              href="https://www.oncor.com/content/oncorwww/talot/en/home/get-started/residential/home-efficiency.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              oncor.com
            </a>
          </p>
        </div>
      </section>

      {/* CenterPoint */}
      <section style={{ padding: "2rem 1rem" }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: "1.5rem", marginBottom: "0.25rem" }}>
            CenterPoint Energy — Houston Metro
          </h2>
          <p style={{ fontSize: "0.85rem", color: "#666", marginBottom: "1rem" }}>
            Deregulated TDU · Houston, Galveston, Beaumont-Port Arthur
          </p>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1rem" }}>
            CenterPoint&apos;s Standard Offer Program (SOP) provides up to{" "}
            <strong>$500 per qualifying heat pump unit</strong>. ENERGY STAR certification
            required. Like Oncor, incentives are administered through approved Service
            Providers — the contractor handles the application and passes savings as an
            invoice discount.
          </p>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1rem" }}>
            Additional programs include a <strong>$75 smart thermostat</strong> instant
            discount and a <strong>free CoolSaver A/C tune-up</strong> (system must be
            1+ years old, no tune-up in last 5 years).
          </p>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1rem" }}>
            CenterPoint also runs a Hard-to-Reach program for households at or below
            200% of federal poverty guidelines, often covering 100% of costs for eligible
            upgrades.
          </p>
          <div
            style={{
              background: "#eff6ff",
              border: "1px solid #bfdbfe",
              borderRadius: "8px",
              padding: "1rem",
              marginBottom: "1rem",
            }}
          >
            <p style={{ fontSize: "0.9rem", color: "#1e40af" }}>
              <strong>Houston tip:</strong> After installing a heat pump, shop for a new
              fixed-rate electricity plan on{" "}
              <a
                href="https://www.powertochoose.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                PowerToChoose.org
              </a>
              . Heat pumps use more electricity than gas furnaces for heating, so locking
              in a low rate ($0.10–$0.12/kWh) maximizes your savings.
            </p>
          </div>
          <p style={{ fontSize: "0.85rem", color: "#666" }}>
            Source:{" "}
            <a
              href="https://www.centerpointenergy.com/en-us/residential/save-energy-money/electric-efficiency-programs/residential-electric-efficiency?sa=ho"
              target="_blank"
              rel="noopener noreferrer"
            >
              centerpointenergy.com
            </a>
          </p>
        </div>
      </section>

      {/* CPS Energy */}
      <section style={{ padding: "2rem 1rem", background: "#f8fafc" }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: "1.5rem", marginBottom: "0.25rem" }}>
            CPS Energy — San Antonio
          </h2>
          <p style={{ fontSize: "0.85rem", color: "#666", marginBottom: "1rem" }}>
            Municipal utility · San Antonio &amp; Bexar County · Regulated
          </p>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1rem" }}>
            CPS Energy offers tiered per-ton rebates for central heat pumps and ductless
            mini-splits through its residential energy efficiency program. Rebate amounts
            range from approximately <strong>$90 to $310 per ton</strong> depending on
            efficiency rating and whether the installation is an early replacement or
            replace-on-burnout. Higher-efficiency systems (SEER2 16+) earn the top tier.
          </p>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1rem" }}>
            For a typical 4-ton system at the highest tier, that works out to roughly
            $1,100 in rebates. All HVAC equipment must be installed by a Texas
            TDLR-licensed contractor. A permit number is required for projects within
            San Antonio city limits.
          </p>

          <h3 style={{ fontSize: "1.15rem", marginBottom: "0.75rem" }}>
            Casa Verde Weatherization
          </h3>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1rem" }}>
            Income-qualified CPS Energy customers may qualify for the Casa Verde
            Weatherization program, which provides free or heavily subsidized home
            improvements including insulation, air sealing, HVAC upgrades, and LED
            lighting. Historically, participants have received an average of approximately
            $5,000 in improvements.
          </p>
          <div
            style={{
              background: "#f0fdf4",
              border: "1px solid #bbf7d0",
              borderRadius: "8px",
              padding: "1rem",
              marginBottom: "1rem",
            }}
          >
            <p style={{ fontSize: "0.9rem", color: "#166534" }}>
              <strong>2026 program dates:</strong> February 1, 2026 – January 31, 2027.
              Applications must be filed within 30 days of work completion.
              Apply at{" "}
              <a
                href="https://cpsenergy.clearesult.com/central-ac"
                target="_blank"
                rel="noopener noreferrer"
              >
                cpsenergy.clearesult.com
              </a>{" "}
              or call (210) 353-2272.
            </p>
          </div>
          <p style={{ fontSize: "0.85rem", color: "#666" }}>
            Source:{" "}
            <a
              href="https://resi-savenow.cpsenergy.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              cpsenergy.com
            </a>
          </p>
        </div>
      </section>

      {/* Other Utilities */}
      <section style={{ padding: "2rem 1rem" }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            Other Texas Utilities
          </h2>

          <h3 style={{ fontSize: "1.15rem", marginBottom: "0.5rem" }}>
            AEP Texas (South &amp; West Texas)
          </h3>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
            AEP Texas does not currently publish a simple homeowner-facing heat pump
            rebate. Available incentives are mainly contractor- or builder-channel
            programs through the Residential Standard Offer Program. AEP Texas also
            operates a Targeted Low-Income Program providing free efficiency upgrades
            for qualifying households. Contact:{" "}
            <a
              href="https://aeptxsaves.com/residential-programs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              aeptxsaves.com
            </a>
          </p>

          <h3 style={{ fontSize: "1.15rem", marginBottom: "0.5rem" }}>
            TNMP / Texas-New Mexico Power (Select Areas)
          </h3>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
            TNMP offers tiered rebates for heat pumps and heat pump water heaters through
            their residential efficiency programs. Amounts vary by efficiency tier and
            income qualification. Check current amounts at{" "}
            <a
              href="https://texasefficiency.com/tnmp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              texasefficiency.com/tnmp
            </a>{" "}
            or contact a participating contractor.
          </p>

          <h3 style={{ fontSize: "1.15rem", marginBottom: "0.5rem" }}>
            CoServ Electric (Denton/Collin County)
          </h3>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
            CoServ does not currently offer heat pump rebates or equipment incentives.
            They do offer free home energy assessments and a demand response bill credit
            program through smart thermostats. Source:{" "}
            <a
              href="https://www.coserv.com/energy-solutions/energy-savings/energy-saving-programs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              coserv.com
            </a>
          </p>

          <h3 style={{ fontSize: "1.15rem", marginBottom: "0.5rem" }}>
            Electric Co-ops
          </h3>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1rem" }}>
            Some Texas electric cooperatives offer modest heat pump rebates. Tri-County
            Electric Cooperative provides up to $200 for qualifying heat pumps (SEER2
            15.2+). United Cooperative Services offers $200 flat for air-source heat
            pumps (SEER2 16.2+) plus $150 for heat pump water heaters. These programs
            have limited funding and vary year to year — contact your co-op directly.
          </p>
        </div>
      </section>

      {/* HEAR/HOMES */}
      <section style={{ padding: "2rem 1rem", background: "#f8fafc" }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            $690 Million in IRA Rebates: Allocated but Not Launched
          </h2>
          <div
            style={{
              background: "#fffbeb",
              border: "1px solid #fde68a",
              borderRadius: "8px",
              padding: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <p style={{ fontWeight: 600, color: "#92400e", marginBottom: "0.75rem" }}>
              ⚠ SECO has not launched the HOMES or HEAR programs as of March 2026
            </p>
            <p style={{ fontSize: "0.95rem", color: "#78350f", marginBottom: "0.75rem" }}>
              Texas was allocated <strong>$690 million</strong> in federal rebate funding
              through the Inflation Reduction Act for two programs: HOMES (whole-house
              efficiency) and HEAR (electrification appliance rebates). The State Energy
              Conservation Office (SECO), under the Texas Comptroller, administers both.
            </p>
            <p style={{ fontSize: "0.95rem", color: "#78350f", marginBottom: "0.75rem" }}>
              SECO is still in procurement — selecting a third-party program implementer
              (RFP closed July 2025) and a program monitor (RFP closed February 2026).
              No launch date has been announced. SECO explicitly warns:{" "}
              <em>
                &quot;There are currently no approved contractors for these programs. We
                strongly advise against entering into any agreements associated with the
                HOMES and HEAR rebate programs until they are formally launched.&quot;
              </em>
            </p>
            <p style={{ fontSize: "0.9rem", color: "#92400e" }}>
              Monitor status at:{" "}
              <a
                href="https://comptroller.texas.gov/programs/seco/funding/ira/"
                target="_blank"
                rel="noopener noreferrer"
              >
                comptroller.texas.gov/programs/seco/funding/ira/
              </a>
            </p>
          </div>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1rem" }}>
            When launched, the HEAR program will provide point-of-sale rebates to
            income-qualified households: up to <strong>$8,000 for heat pumps</strong>,
            $1,750 for heat pump water heaters, and $4,000 for electrical panel upgrades.
            Households below 80% of Area Median Income (AMI) would receive 100% of
            project costs covered. Those between 80–150% AMI would receive 50%. The HOMES
            program provides rebates based on measured or modeled whole-house energy
            savings.
          </p>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
            Funds are available until depleted or September 30, 2031. Given that Texas
            received the largest state allocation in the country, this program could
            significantly change the rebate landscape when it arrives.
          </p>
        </div>
      </section>

      {/* Stacking */}
      <section style={{ padding: "2rem 1rem" }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            Stacking Rebates: What You Can Combine
          </h2>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
            With no federal tax credit in 2026, Texas homeowners are limited to utility
            rebates and manufacturer promotions. Here is what stacking looks like today:
          </p>
          <div
            style={{
              overflowX: "auto",
              marginBottom: "1.5rem",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.9rem",
              }}
            >
              <thead>
                <tr style={{ background: "#f1f5f9", textAlign: "left" }}>
                  <th style={{ padding: "0.75rem", borderBottom: "2px solid #e2e8f0" }}>
                    Layer
                  </th>
                  <th style={{ padding: "0.75rem", borderBottom: "2px solid #e2e8f0" }}>
                    Austin Energy
                  </th>
                  <th style={{ padding: "0.75rem", borderBottom: "2px solid #e2e8f0" }}>
                    Oncor (DFW)
                  </th>
                  <th style={{ padding: "0.75rem", borderBottom: "2px solid #e2e8f0" }}>
                    CPS Energy (SA)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: "0.75rem", borderBottom: "1px solid #e2e8f0" }}>
                    Utility rebate
                  </td>
                  <td style={{ padding: "0.75rem", borderBottom: "1px solid #e2e8f0" }}>
                    ~$3,000
                  </td>
                  <td style={{ padding: "0.75rem", borderBottom: "1px solid #e2e8f0" }}>
                    Varies (hundreds to thousands)
                  </td>
                  <td style={{ padding: "0.75rem", borderBottom: "1px solid #e2e8f0" }}>
                    ~$800–$1,100 (4-ton)
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "0.75rem", borderBottom: "1px solid #e2e8f0" }}>
                    Federal 25C
                  </td>
                  <td
                    colSpan={3}
                    style={{
                      padding: "0.75rem",
                      borderBottom: "1px solid #e2e8f0",
                      color: "#991b1b",
                    }}
                  >
                    Expired — $0
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "0.75rem", borderBottom: "1px solid #e2e8f0" }}>
                    HEAR (when launched)
                  </td>
                  <td
                    colSpan={3}
                    style={{
                      padding: "0.75rem",
                      borderBottom: "1px solid #e2e8f0",
                      color: "#92400e",
                    }}
                  >
                    Up to $8,000 for income-qualified — not yet available
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "0.75rem", borderBottom: "1px solid #e2e8f0" }}>
                    Manufacturer rebates
                  </td>
                  <td
                    colSpan={3}
                    style={{ padding: "0.75rem", borderBottom: "1px solid #e2e8f0" }}
                  >
                    $150–$1,665 (seasonal, varies by brand)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
            The biggest near-term opportunity is for Austin Energy customers who combine
            the whole-home rebate (~$3,000) with 0% APR financing. When HEAR launches,
            low-income households in any Texas utility territory could stack their utility
            rebate with up to $8,000 in federal point-of-sale rebates.
          </p>
        </div>
      </section>

      {/* Climate & Specs */}
      <section style={{ padding: "2rem 1rem", background: "#f8fafc" }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            Choosing the Right Heat Pump for Texas
          </h2>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1rem" }}>
            Texas is a cooling-dominant market — cooling accounts for 70–80% of annual
            HVAC energy use in most regions. Your SEER2 rating (cooling efficiency) has
            2–3x more impact on annual energy bills than HSPF2 (heating efficiency).
          </p>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1rem" }}>
            The DOE minimum for Texas (Southeast Region) is SEER2 14.3, but that{" "}
            <strong>does not qualify for most utility rebates</strong>. Most programs
            require ENERGY STAR certification (SEER2 15.2+), and CPS Energy&apos;s top
            tier requires SEER2 16+.
          </p>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1rem" }}>
            For Houston and the Gulf Coast, <strong>variable-speed compressors are
            strongly recommended</strong>. Single-stage compressors short-cycle in humid
            conditions, leaving indoor humidity uncontrolled. Variable-speed units run
            longer at lower capacity, providing extended dehumidification cycles.
          </p>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
            All installations require a <strong>TDLR-licensed HVAC contractor</strong>{" "}
            (Texas Department of Licensing and Regulation). Most cities require mechanical
            permits for HVAC replacement. Unpermitted work can void insurance coverage
            and manufacturer warranties.
          </p>
        </div>
      </section>

      {/* Income-Qualified Programs */}
      <section style={{ padding: "2rem 1rem" }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            Income-Qualified Programs
          </h2>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1rem" }}>
            Texas operates a statewide Weatherization Assistance Program (WAP) through
            the Texas Department of Housing and Community Affairs (TDHCA) for
            income-qualified households. WAP provides
            free whole-house energy improvements — including HVAC replacement —
            at no cost to eligible households. Contact your local
            subrecipient agency, call 877-541-7905, or dial 2-1-1.
          </p>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1rem" }}>
            The Comprehensive Energy Assistance Program (CEAP) provides utility bill
            payment assistance, emergency energy crisis services, and equipment like
            portable cooling/heating units for households at or below 150% of federal
            poverty guidelines.
          </p>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
            Several utilities run their own low-income programs in addition to WAP:{" "}
            Austin Energy Weatherization Assistance, Oncor Low-Income Weatherization,
            CPS Energy Casa Verde, CenterPoint Hard-to-Reach, and AEP Texas Targeted
            Low-Income.
          </p>
        </div>
      </section>

      {/* What to Watch */}
      <section style={{ padding: "2rem 1rem", background: "#f8fafc" }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>What to Watch</h2>
          <ul
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.8,
              paddingLeft: "1.25rem",
            }}
          >
            <li style={{ marginBottom: "0.5rem" }}>
              <strong>SECO IRA program launch</strong> — the single biggest variable.
              When HOMES/HEAR go live, income-qualified Texans could access up to $8,000
              in additional rebates. No date announced.
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong>Oncor budget depletion</strong> — Oncor&apos;s HEE program is
              first-come, first-served and has historically exhausted funds before
              year-end. Apply early.
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong>Austin Energy 0% APR window</strong> — the Velocity Credit Union
              financing offer runs through September 30, 2026. After that, terms may
              change.
            </li>
            <li>
              <strong>Federal credit restoration</strong> — no legislation is currently
              in effect, but this could change. We will update this page if it does.
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "2rem 1rem" }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>
            Frequently Asked Questions
          </h2>
          {faqJsonLd.mainEntity.map(
            (
              faq: { name: string; acceptedAnswer: { text: string } },
              index: number
            ) => (
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
            {txIncentive.sources.map(
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
