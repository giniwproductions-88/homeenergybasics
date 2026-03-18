// src/app/heat-pumps/states/ma/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";

export const metadata: Metadata = {
  title:
    "Massachusetts Heat Pump Rebates 2026: Mass Save Incentives After Federal Credits Ended | Home Energy Basics",
  description:
    "No federal heat pump tax credits in 2026. Massachusetts homeowners can still get up to $8,500 through Mass Save, $25,000 income-qualified, plus 0% financing and seasonal electric rate discounts.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/ma",
  },
  openGraph: {
    title: "Massachusetts Heat Pump Rebates 2026: What's Actually Available",
    description:
      "Federal credits ended. Mass Save rebates up to $8,500 (or $25,000 income-qualified) are the primary incentive. HEAR not yet live. Here's the complete picture.",
    url: "https://homeenergybasics.com/heat-pumps/states/ma",
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

export default function MassachusettsHeatPumpPage() {
  const maIncentive = incentives.MA;
  const formattedDate = formatDate(maIncentive.lastVerified);

  const lastVerified = "March 17, 2026";

  const faqs = [
    {
      question:
        "Are there federal heat pump tax credits in Massachusetts in 2026?",
      answer:
        "No. The IRS states that the Section 25C Energy Efficient Home Improvement Credit and the Section 25D Residential Clean Energy Credit apply only to qualifying property placed in service through December 31, 2025. The One Big Beautiful Bill Act (OBBBA) terminated both credits years ahead of schedule. Massachusetts homeowners installing heat pumps in 2026 should not plan on any federal tax credits.",
    },
    {
      question: "How much can I get from Mass Save for a heat pump in 2026?",
      answer:
        "Mass Save offers up to $8,500 for a whole-home air-source heat pump installation ($2,650 per ton), up to $13,500 for a ground-source (geothermal) system, and $750 for a heat pump water heater. Income-qualified households can receive up to $16,000–$25,000, and the lowest-income households may qualify for no-cost installation.",
    },
    {
      question: "What is the Mass Save HEAT Loan?",
      answer:
        "The HEAT Loan provides 0% APR financing up to $25,000 to cover costs remaining after rebates. Repayment terms are income-tiered: 7 years at or below 135% state median income, 5 years for 135–300% SMI, and 3 years above 300% SMI. The loan is available through participating lenders and can be combined with Mass Save rebates.",
    },
    {
      question: "Are HEAR rebates available in Massachusetts?",
      answer:
        "Not yet for individual homeowners. Massachusetts was allocated $145.9 million in IRA HEAR/HOMES funding. The Department of Energy Resources (DOER) is integrating HEAR into Mass Save's existing income-eligible programs, but the program has not launched for standard homeowner applications as of March 2026. Check masssave.com for updates.",
    },
    {
      question:
        "Can I combine Mass Save rebates with other incentives?",
      answer:
        "Yes. Mass Save rebates can be combined with the HEAT Loan (0% financing), Alternative Energy Credits (AECs), and the Massachusetts sales tax exemption on heat pump equipment. You cannot combine multiple Mass Save rebate types on the same piece of equipment. Federal tax credits are no longer available to stack.",
    },
    {
      question:
        "What is the seasonal heat pump electric rate in Massachusetts?",
      answer:
        "Since November 2025, Eversource, National Grid, and Unitil offer reduced distribution and transmission charges for heat pump households from November 1 through April 30 each year. The DPU estimates average savings of approximately $540 per winter. Customers who installed heat pumps through Mass Save since January 2019 were auto-enrolled.",
    },
    {
      question: "Do I need to remove my old heating system to get the full rebate?",
      answer:
        "For the highest whole-home rebate ($2,650/ton), yes — you must remove or disconnect your fossil fuel heating system and the home must be sufficiently weatherized. The partial-home tier ($1,125/ton) allows you to keep a fossil fuel backup system with integrated controls. The basic tier ($250/ton) applies to simpler installations like replacing an existing heat pump.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
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
      <JsonLd data={faqJsonLd} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-700">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/heat-pumps" className="hover:text-gray-700">
            Heat Pumps
          </Link>{" "}
          / Massachusetts
        </nav>

        {/* Hero */}
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Massachusetts Heat Pump Rebates 2026: What&apos;s Actually Available
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            There are <strong>no federal heat pump tax credits in 2026</strong>.
            Massachusetts homeowners now rely almost entirely on{" "}
            <strong>Mass Save rebates</strong> — which are still among the
            highest in the country, but more complex than ever.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last updated: {formattedDate}
          </p>
        </header>

        {/* Status Card */}
        <StatusCard incentive={maIncentive} />

        {/* Quick Answer Box */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              Massachusetts — Active (Mass Save)
            </span>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-gray-700">
            <div>
              <strong>Whole-home rebate:</strong> up to $8,500
            </div>
            <div>
              <strong>Income-qualified:</strong> up to $25,000 (or no-cost)
            </div>
            <div>
              <strong>0% financing:</strong> up to $25,000 (HEAT Loan)
            </div>
            <div>
              <strong>Ground-source:</strong> up to $13,500
            </div>
            <div>
              <strong>Federal tax credits:</strong>{" "}
              <span className="text-red-600 font-medium">
                ❌ Ended Dec 31, 2025
              </span>
            </div>
            <div>
              <strong>HEAR rebates:</strong>{" "}
              <span className="text-amber-600 font-medium">
                ⚠️ Not yet available
              </span>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4 font-medium">
            Bottom line: Strong incentives remain — but only through Mass Save.
            Act sooner rather than later; rebates are trending down annually.
          </p>
        </div>

        {/* ===== SECTION 1: What You Can Actually Get ===== */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What You Can Actually Get in 2026
          </h2>
          <p className="text-gray-600 mb-6">
            Mass Save — the statewide program funded by Eversource, National
            Grid, Cape Light Compact, Unitil, Berkshire Gas, and Liberty
            Utilities — offers three tiers of air-source heat pump rebates in
            2026. All systems must be ENERGY STAR Cold Climate certified, appear
            on the{" "}
            <a
              href="https://www.masssave.com/heat-pump-qualified-list"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Mass Save Qualified Products List
            </a>
            , and use next-generation refrigerants (R-32 or R-454B). R-410A
            systems are no longer eligible as of January 1, 2026.
          </p>

          {/* ASHP Rebate Table */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Air-Source Heat Pump Rebates
          </h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 border-b font-semibold">Tier</th>
                  <th className="text-left p-3 border-b font-semibold">
                    Per-Ton Rebate
                  </th>
                  <th className="text-left p-3 border-b font-semibold">
                    Per-Home Cap
                  </th>
                  <th className="text-left p-3 border-b font-semibold">
                    Key Requirement
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 font-medium">Whole-home</td>
                  <td className="p-3">$2,650/ton</td>
                  <td className="p-3">$8,500</td>
                  <td className="p-3 text-gray-600">
                    Remove/disconnect fossil fuel system; home must be
                    sufficiently weatherized
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Partial-home</td>
                  <td className="p-3">$1,125/ton</td>
                  <td className="p-3">$8,500</td>
                  <td className="p-3 text-gray-600">
                    Integrated controls from QPL; fossil fuel backup switches at
                    ≤30°F (gas/oil) or ≤5°F (propane)
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Basic</td>
                  <td className="p-3">$250/ton</td>
                  <td className="p-3">$2,500</td>
                  <td className="p-3 text-gray-600">
                    Replacing existing heat pump, additions under 500 sq ft, or
                    previously unconditioned spaces
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-600 mb-4">
            Partial-home installations can earn two additional bonuses: a{" "}
            <strong>$500 sizing bonus</strong> when sized via ACCA Manual J to
            meet 90–120% of total heating load, and a{" "}
            <strong>$500 weatherization bonus</strong> when recommended
            insulation and air sealing are completed within 12 months.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-amber-800">
              <strong>Rebates are declining.</strong> Whole-home dropped from
              $3,000/ton (cap $10,000) in 2025 to $2,650/ton (cap $8,500) in
              2026. Industry sources project further reductions to approximately
              $2,500/ton in 2027. Earlier action means higher savings.
            </p>
          </div>

          {/* GSHP + HPWH */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Ground-Source &amp; Water Heating
          </h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 border-b font-semibold">
                    Equipment
                  </th>
                  <th className="text-left p-3 border-b font-semibold">
                    Rebate
                  </th>
                  <th className="text-left p-3 border-b font-semibold">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 font-medium">
                    Ground-source HP (whole-home)
                  </td>
                  <td className="p-3">$13,500 flat</td>
                  <td className="p-3 text-gray-600">
                    Down from $15,000 in 2025
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">
                    Ground-source HP (partial)
                  </td>
                  <td className="p-3">$2,000/ton (cap $13,500)</td>
                  <td className="p-3 text-gray-600">
                    Cape Light Compact cap is $15,000
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Heat pump water heater</td>
                  <td className="p-3">$750 instant</td>
                  <td className="p-3 text-gray-600">
                    Point-of-sale via participating retailers — no mail-in claim
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ===== SECTION 2: Federal Credits Are Gone ===== */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Federal Tax Credits Are Gone — Mass Save Is the Entire Game Now
          </h2>
          <p className="text-gray-600 mb-4">
            The federal incentive landscape changed dramatically on July 4, 2025
            when the One Big Beautiful Bill Act (OBBBA) was signed into law. The
            IRS states that both residential energy tax credits are terminated
            for property placed in service after December 31, 2025:
          </p>
          <div className="space-y-4 mb-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <strong className="text-red-700">
                  Section 25C — Energy Efficient Home Improvement Credit:
                </strong>{" "}
                Previously provided 30% up to $2,000/year for heat pumps and
                heat pump water heaters. Filed on IRS Form 5695, Part II.{" "}
                <strong>Terminated.</strong> No extension or replacement
                legislation has been proposed.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <strong className="text-red-700">
                  Section 25D — Residential Clean Energy Credit:
                </strong>{" "}
                Previously provided 30% with no dollar cap for geothermal
                installations. Unused credits could be carried forward.{" "}
                <strong>Terminated.</strong> Taxpayers who completed qualifying
                geothermal installations before the deadline may still carry
                forward unused credit amounts.
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-500 mb-6">
            Many websites still incorrectly claim these credits are available
            through 2032. The IRS confirmed the expiration in{" "}
            <a
              href="https://www.irs.gov/newsroom/faqs-for-modification-of-sections-25c-25d-25e-30c-30d-45l-45w-and-179d-under-public-law-119-21-139-stat-72-july-4-2025-commonly-known-as-the-one-big-beautiful-bill-obbb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              FAQ document IR-2025-86
            </a>
            .
          </p>
        </section>

        {/* ===== SECTION 3: Income-Qualified ===== */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Income-Qualified: The Real Opportunity
          </h2>
          <p className="text-gray-600 mb-6">
            Mass Save&apos;s enhanced incentive programs dramatically increase
            rebate values for lower-income households. A family of four earning
            $132,764 or less may qualify. Households enrolled in SNAP,
            MassHealth, LIHEAP, or fuel assistance may auto-qualify without
            income documentation.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 border-b font-semibold">
                    Equipment
                  </th>
                  <th className="text-left p-3 border-b font-semibold">
                    Standard
                  </th>
                  <th className="text-left p-3 border-b font-semibold">
                    Income-Qualified
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 font-medium">Air-source HP (whole/partial)</td>
                  <td className="p-3">Up to $8,500</td>
                  <td className="p-3 font-medium text-green-700">
                    Up to $16,000
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">
                    Air-source HP (lowest income, turnkey)
                  </td>
                  <td className="p-3">N/A</td>
                  <td className="p-3 font-medium text-green-700">
                    Up to no cost
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Ground-source HP</td>
                  <td className="p-3">$13,500</td>
                  <td className="p-3 font-medium text-green-700">
                    Up to $25,000
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Weatherization</td>
                  <td className="p-3">75% off</td>
                  <td className="p-3 font-medium text-green-700">
                    No-cost (100%)
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Electrical panel upgrades</td>
                  <td className="p-3">Not covered</td>
                  <td className="p-3 font-medium text-green-700">
                    Up to 100% covered
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-600 mb-4">
            For the lowest-income households, Mass Save offers a fully managed
            turnkey program: no-cost weatherization, no-cost air-source heat
            pump installation, electrical panel upgrades covered at 100%, and
            end-to-end project management.
          </p>
          <p className="text-sm text-gray-500">
            Check eligibility:{" "}
            <a
              href="https://www.masssave.com/residential/rebates-offers-services/income-based-offers/save-with-enhanced-incentives"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Mass Save Enhanced Incentives
            </a>
          </p>
        </section>

        {/* ===== SECTION 4: Hidden Perks ===== */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Hidden Perks Most People Miss
          </h2>

          <div className="space-y-6">
            {/* Seasonal Rate */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">
                Seasonal Heat Pump Electric Rate (~$540/Winter)
              </h3>
              <p className="text-sm text-gray-700">
                Since November 2025, Eversource, National Grid, and Unitil offer
                reduced distribution and transmission charges for heat pump
                households from November 1 through April 30. The DPU estimates
                average savings of approximately $540 per winter. Over 100,000
                customers were auto-enrolled — those who installed heat pumps
                through Mass Save since January 2019. A Switchbox/Acadia Center
                analysis found that under these rates, 64% of Massachusetts
                households would save money by switching to a heat pump.
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Source:{" "}
                <a
                  href="https://www.mass.gov/info-details/residential-electric-seasonal-heat-pump-rates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  mass.gov — Seasonal heat pump rates
                </a>
              </p>
            </div>

            {/* HEAT Loan */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">
                0% HEAT Loan — Up to $25,000
              </h3>
              <p className="text-sm text-gray-700">
                The HEAT Loan covers costs remaining after rebates at 0% APR.
                Terms are income-tiered: 7 years for households at or below 135%
                of state median income, 5 years for 135–300% SMI, and 3 years
                above 300% SMI. Additional financing includes the Massachusetts
                Community Climate Bank&apos;s Energy Saver Home Loan (0.5–2%
                interest, up to $100,000, 20-year terms, for households up to
                135% AMI).
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Source:{" "}
                <a
                  href="https://www.masssave.com/residential/rebates-offers-services/financing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Mass Save — Financing
                </a>
              </p>
            </div>

            {/* Sales Tax */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">
                Sales Tax Exemption (6.25%)
              </h3>
              <p className="text-sm text-gray-700">
                Heat pump equipment is exempt from the 6.25% Massachusetts sales
                tax under MGL 64H.6(dd). This is applied at the point of
                purchase and stacks with all other incentives.
              </p>
            </div>

            {/* AECs */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">
                Alternative Energy Credits (AECs)
              </h3>
              <p className="text-sm text-gray-700">
                Earned through the DOER&apos;s Alternative Energy Portfolio
                Standard and pre-minted for 10 years upfront. Current market
                value is modest — approximately $300–$500 for an air-source heat
                pump and $900–$1,200 for a ground-source system. The application
                is complex; DOER recommends working through an AEC aggregator.
              </p>
            </div>
          </div>
        </section>

        {/* ===== SECTION 5: Stacking ===== */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What You Can Stack (and What You Can&apos;t)
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <h3 className="font-semibold text-green-800 mb-3">
                ✅ Can Combine
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Mass Save rebate + HEAT Loan (0% financing)</li>
                <li>Mass Save rebate + Alternative Energy Credits</li>
                <li>Mass Save rebate + sales tax exemption (6.25%)</li>
                <li>Mass Save rebate + Energy Saver Home Loan</li>
                <li>Mass Save rebate + seasonal electric rate</li>
                <li>
                  Mass Save rebate + HEAR (when launched, income-eligible only)
                </li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <h3 className="font-semibold text-red-800 mb-3">
                ❌ Cannot Combine
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  Multiple Mass Save rebate types on the same equipment
                </li>
                <li>
                  Federal tax credits (25C/25D — no longer available)
                </li>
                <li>HEAR + HOMES on the same measure</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===== SECTION 6: HEAR Status ===== */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            HEAR Rebates: Authorized But Not Yet Live
          </h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-4">
            <p className="text-sm text-amber-800 font-medium mb-2">
              ⚠️ Status as of {lastVerified}
            </p>
            <p className="text-sm text-gray-700">
              Massachusetts was allocated $145.9 million in IRA funding ($73.2M
              for HOMES, $72.8M for HEAR). DOER is integrating HEAR directly
              into Mass Save&apos;s existing income-eligible programs — there
              will be no separate application process. However, the program has
              not yet fully launched for individual homeowner applications. HEAR
              could provide up to $8,000 per household for heat pumps for
              households at or below 80% of area median income.
            </p>
          </div>
          <p className="text-sm text-gray-500">
            The HOMES allocation is split between a Municipal Light Plant
            program (~$25M for 50 communities not covered by Mass Save) and an
            Affordable Housing Decarbonization Grant Program (~$45M for
            deed-restricted affordable rental housing).
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Source:{" "}
            <a
              href="https://www.mass.gov/info-details/federal-funding-opportunities"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Mass.gov — DOER Federal Funding Updates
            </a>
          </p>
        </section>

        {/* ===== SECTION 7: How to Apply ===== */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How to Apply for Mass Save Heat Pump Rebates
          </h2>
          <ol className="space-y-4 text-sm text-gray-700">
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center text-xs font-bold text-gray-600">
                1
              </span>
              <div>
                <strong>Confirm eligibility</strong> — use the{" "}
                <a
                  href="https://www.masssave.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  online pre-verification tool
                </a>{" "}
                at masssave.com.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center text-xs font-bold text-gray-600">
                2
              </span>
              <div>
                <strong>Schedule a no-cost Home Energy Assessment</strong> —
                call 866-527-7283. Whole-home rebates require the home to be
                sufficiently weatherized (built after 2000, or past
                weatherization completed, or less than $1,000 in remaining
                weatherization needs).
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center text-xs font-bold text-gray-600">
                3
              </span>
              <div>
                <strong>Find a qualifying contractor</strong> — through the{" "}
                <a
                  href="https://www.masssave.com/residential/find-a-contractor/find-a-heat-pump-installer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Heat Pump Installer Network (HPIN)
                </a>
                .
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center text-xs font-bold text-gray-600">
                4
              </span>
              <div>
                <strong>Purchase and install</strong> eligible equipment between
                January 1 and December 31, 2026.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center text-xs font-bold text-gray-600">
                5
              </span>
              <div>
                <strong>Submit the rebate form</strong> online or by mail with
                required documentation by February 28, 2027.
              </div>
            </li>
          </ol>
        </section>

        {/* ===== SECTION 8: What to Watch ===== */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What to Watch (2026–2027)
          </h2>
          <div className="space-y-3 text-sm text-gray-700">
            <p>
              <strong>HEAR launch:</strong> When DOER finalizes DOE approval and
              fully launches HEAR through Mass Save, income-eligible households
              will gain access to an additional $8,000 in federal point-of-sale
              rebates.
            </p>
            <p>
              <strong>Rebates trending down:</strong> Whole-home dropped from
              $3,000/ton in 2025 to $2,650/ton in 2026, with ~$2,500/ton
              projected for 2027. The window for maximum incentive value
              continues to narrow.
            </p>
            <p>
              <strong>Budget pressure:</strong> The DPU cut the 2025–2027 Mass
              Save plan by $500 million (from $5B to $4.5B), with the entire
              reduction coming from the residential program.
            </p>
            <p>
              <strong>Clean Heat Standard delayed:</strong> Originally set for
              2026, now postponed to no earlier than 2028. Would have required
              heating fuel suppliers to earn clean heat credits.
            </p>
            <p>
              <strong>Seasonal rate impact:</strong> The first full winter of
              discounted electric rates (2025–2026) will provide real-world data
              on heat pump operating cost savings in Massachusetts.
            </p>
          </div>
        </section>

        {/* ===== SECTION 9: Utilities ===== */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Utilities: Same Base Rebates, Some Differences
          </h2>
          <p className="text-gray-600 mb-4">
            All four major utility program administrators deliver Mass Save
            rebates at identical standard amounts. There are no utility-specific
            add-on rebates beyond the Mass Save framework. Key differences:
          </p>
          <div className="space-y-3 text-sm text-gray-700">
            <p>
              <strong>Eversource</strong> — largest territory. Offers up-front
              barrier mitigation incentives up to $7,000 for issues like
              knob-and-tube wiring removal or vermiculite abatement.
            </p>
            <p>
              <strong>National Grid</strong> — second-largest utility. Standard
              Mass Save rebates, no unique add-on programs.
            </p>
            <p>
              <strong>Cape Light Compact</strong> (Cape Cod and Martha&apos;s
              Vineyard) — slightly more generous income-qualified offerings: 80%
              of installed cost for moderate-income and 100% for income-eligible
              customers. Ground-source partial-home cap is $15,000 vs. $13,500
              elsewhere.
            </p>
            <p>
              <strong>Unitil</strong> — north-central Massachusetts. Standard
              Mass Save rebates, no unique programs.
            </p>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-b border-gray-200 pb-6">
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== Sources ===== */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Sources</h2>
          <ul className="space-y-2">
            {maIncentive.sources.map((source) => (
              <li key={source.url} className="text-sm">
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-xs text-gray-400 mt-4">
            Sources last verified: {lastVerified}. Incentive amounts and
            eligibility may change. Always confirm current details directly with
            Mass Save or your utility before making purchasing decisions.
          </p>
        </section>

        {/* ===== Cross-links ===== */}
        <nav className="border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500 mb-3">
            More state heat pump incentive guides:
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/heat-pumps/states/ca"
              className="text-sm text-blue-600 hover:underline"
            >
              California →
            </Link>
            <Link
              href="/heat-pumps/states/mn"
              className="text-sm text-blue-600 hover:underline"
            >
              Minnesota →
            </Link>
            <Link
              href="/heat-pumps/states/me"
              className="text-sm text-blue-600 hover:underline"
            >
              Maine →
            </Link>
            <Link
              href="/heat-pumps"
              className="text-sm text-blue-600 hover:underline"
            >
              All States →
            </Link>
          </div>
        </nav>
      </article>
    </>
  );
}
