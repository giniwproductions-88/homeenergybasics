// src/app/federal-heat-pump-tax-credit-expired/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

const LAST_UPDATED = "February 18, 2026";

export const metadata: Metadata = {
  title:
    "Federal Heat Pump Tax Credits Ended in 2025 — What Still Works in 2026 | Home Energy Basics",
  description:
    "Section 25C and 25D residential energy tax credits ended Dec 31, 2025 under OBBBA. Here's what homeowners can still use in 2026: utility rebates, city programs, and upcoming HEAR/HOMES rebates.",
  alternates: {
    canonical: "https://homeenergybasics.com/federal-heat-pump-tax-credit-expired",
  },
  openGraph: {
    title:
      "Federal Heat Pump Tax Credits Ended in 2025 — What Still Works in 2026",
    description:
      "25C and 25D ended after Dec 31, 2025. Utility rebates and city programs still exist. HEAR/HOMES rebates are funded but state-administered — launch timing varies.",
    url: "https://homeenergybasics.com/federal-heat-pump-tax-credit-expired",
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

export default function FederalCreditExpiredPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Did the federal heat pump tax credit end?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The Energy Efficient Home Improvement Credit (Section 25C) and the Residential Clean Energy Credit (Section 25D) are not available for property placed in service after December 31, 2025. This was accelerated by the One Big Beautiful Bill Act (OBBBA), signed July 4, 2025.",
        },
      },
      {
        "@type": "Question",
        name: "Is the geothermal (25D) credit still available in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Many sites still claim the 25D geothermal credit runs through 2032 — that was the original IRA schedule. The OBBBA accelerated its termination. The IRS states the Residential Clean Energy Credit (25D) is not available for expenditures made after December 31, 2025.",
        },
      },
      {
        "@type": "Question",
        name: 'What does "placed in service" mean for these credits?',
        acceptedAnswer: {
          "@type": "Answer",
          text: "For Section 25D, an expenditure is treated as made when the original installation is completed. If your installation finishes in 2026, it does not qualify — regardless of when you signed a contract or made a deposit.",
        },
      },
      {
        "@type": "Question",
        name: "What incentives still exist in 2026 if federal tax credits are gone?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Utility rebates, city and county programs, and state incentives (where active) are still available. Additionally, HEAR and HOMES rebate programs — funded by the Inflation Reduction Act but administered by states — will launch on a state-by-state basis.",
        },
      },
      {
        "@type": "Question",
        name: "Are HEAR/HOMES rebates the same as tax credits?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. HEAR and HOMES are rebate programs, often applied at point of sale or as reimbursement. They are income-based or savings-based, administered by individual states, and are completely separate from the expired federal tax credits.",
        },
      },
      {
        "@type": "Question",
        name: "Is the Minnesota HEAR/HOMES program available yet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. As of February 2, 2026, Minnesota's Save Energy Minnesota program has not launched. The state is waiting for formal approval from the US Department of Energy. There is no estimated launch date. HEAR rebates cannot be applied retroactively.",
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
              / Federal Credits Ended
            </p>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Federal Heat Pump Tax Credits Ended in 2025 — What Still Works in
              2026
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              If you're seeing guides that claim a federal{" "}
              <strong>$2,000 heat pump tax credit</strong> or a{" "}
              <strong>30% geothermal credit "through 2032"</strong> is still
              available, you're looking at outdated information. Both Section 25C
              and Section 25D ended for property placed in service after{" "}
              <strong>December 31, 2025</strong>.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: {LAST_UPDATED}
            </p>
          </div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-12 border-b">
        <div className="container-wide">
          <div className="card-highlight">
            <h2 className="text-xl font-semibold mb-6">
              Quick summary for 2026
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-red-600 mb-3">
                  ✗ Expired (Dec 31, 2025)
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>
                    <strong>Section 25C</strong> — Air-source heat pumps,
                    insulation, windows, HVAC
                  </li>
                  <li>
                    <strong>Section 25D</strong> — Geothermal, solar, battery
                    storage, fuel cells
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-forest-600 mb-3">
                  ✓ Still active
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>Utility company rebates</li>
                  <li>City and county programs</li>
                  <li>State rebates (where available)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-amber-600 mb-3">
                  ⏳ Funded but pending
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>
                    <strong>HEAR</strong> rebates (income-based)
                  </li>
                  <li>
                    <strong>HOMES</strong> rebates (savings-based)
                  </li>
                  <li>Launch timing varies by state</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Changed */}
      <section className="py-12">
        <div className="container-narrow">
          <div className="prose prose-lg max-w-none">
            <h2>What changed (and why so many pages are wrong)</h2>
            <p>
              The Inflation Reduction Act of 2022 originally extended these
              credits through 2032 (25C) and 2034 (25D). Many websites, tools,
              and even some contractor marketing materials still reflect those
              original dates.
            </p>
            <p>
              That changed on July 4, 2025, when the One Big Beautiful Bill Act
              (OBBBA) was signed into law. It accelerated the termination of both
              credits.
            </p>
            <p>
              The IRS confirmed the details in Fact Sheet 2025-05 (August 21,
              2025):
            </p>
            <ul>
              <li>
                <strong>Section 25C</strong> is not allowed for property placed
                in service after December 31, 2025
              </li>
              <li>
                <strong>Section 25D</strong> is not allowed for expenditures made
                after December 31, 2025
              </li>
            </ul>
            <p>
              For 25D specifically, the IRS clarified that an expenditure is
              treated as made when the original installation is completed. If
              installation finishes in 2026, you cannot claim the credit —
              regardless of when you signed a contract or paid a deposit.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-8 not-prose">
              <p className="text-amber-800 font-medium mb-2">
                Common misinformation to watch for
              </p>
              <p className="text-gray-700">
                "The 30% geothermal credit is on a separate track through 2032."
                This was true under the original IRA schedule. It is no longer
                accurate. Both air-source (25C) and geothermal (25D) federal
                credits ended on the same date: December 31, 2025.
              </p>
            </div>

            <h2>Tax credit vs. rebate — an important distinction</h2>
            <p>
              This matters because the words get used interchangeably online, and
              they shouldn't:
            </p>
            <ul>
              <li>
                <strong>Tax credit</strong> — Claimed when you file federal
                taxes. Reduces what you owe. This is what 25C and 25D were. No
                longer available for 2026 installations.
              </li>
              <li>
                <strong>Rebate</strong> — Cash back, often at point of sale or
                via reimbursement. Utility programs, city programs, and
                HEAR/HOMES all fall in this category. Many are still active or
                upcoming.
              </li>
            </ul>

            <h2>What homeowners can still use in 2026</h2>

            <h3>Utility rebates</h3>
            <p>
              Often the most reliable "right now" incentive. Utility companies
              run efficiency programs under state regulatory frameworks, and
              these are independent of federal tax credits. Check your utility's
              current rebate page directly.
            </p>

            <h3>City and county programs</h3>
            <p>
              Many municipalities offer their own rebates, grants, or cost-share
              programs. These can often stack with utility rebates. Check your
              city or county energy office.
            </p>

            <h3>State programs</h3>
            <p>
              Some states have active rebate programs separate from HEAR/HOMES.
              Availability varies widely.
            </p>

            <h3>HEAR and HOMES (IRA-funded, state-administered)</h3>
            <p>
              These are the rebate programs people often confuse with the expired
              tax credits. Key facts:
            </p>
            <ul>
              <li>Funded by the Inflation Reduction Act</li>
              <li>Administered by individual states, not the IRS</li>
              <li>HEAR is income-based (up to $8,000 for low-income households)</li>
              <li>HOMES is savings-based (tied to energy reduction)</li>
              <li>
                Launch timing is entirely state-by-state — some states have
                launched, many have not
              </li>
              <li>
                HEAR rebates generally cannot be applied retroactively — do not
                install before your state's program launches
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Minnesota Callout */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <div className="card">
            <h2 className="text-xl font-semibold mb-4">Minnesota status</h2>
            <p className="text-gray-700 mb-4">
              Minnesota's "Save Energy Minnesota" umbrella — which covers HEAR,
              HOMES, the state heat pump rebate, and residential electrical panel
              grants — <strong>has not launched</strong>.
            </p>
            <p className="text-gray-700 mb-4">
              As of February 2, 2026, the Minnesota Department of Commerce
              states: "Minnesota is waiting for formal approval from US
              Department of Energy to launch the program. There is{" "}
              <strong>no estimated program launch date</strong>."
            </p>
            <p className="text-gray-700 mb-4">
              The state heat pump rebate requires HEAR approval first, and HEAR
              does not allow retroactive rebates. If you install before the
              program launches, you will not be eligible.
            </p>
            <div className="mt-6 pt-4 border-t">
              <p className="text-sm text-gray-500 mb-3">What's active now in Minnesota:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Utility rebates (Xcel Energy, CenterPoint Energy, Minnesota Power, etc.)</li>
                <li>• City programs (varies by municipality)</li>
                <li>• Conservation Improvement Program (CIP) incentives</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What To Do */}
      <section className="py-12">
        <div className="container-narrow">
          <div className="bg-gray-900 text-white rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-white">
              What to do next
            </h2>
            <ol className="space-y-3 text-gray-300">
              <li>
                <strong className="text-white">1.</strong> Plan your 2026 budget
                without federal residential tax credits.
              </li>
              <li>
                <strong className="text-white">2.</strong> Check utility and city
                incentives first — these are often the most accessible and
                immediate.
              </li>
              <li>
                <strong className="text-white">3.</strong> If you may be
                income-qualified, track your state's HEAR/HOMES launch before
                signing contracts. Many programs won't reimburse retroactively.
              </li>
              <li>
                <strong className="text-white">4.</strong> Be skeptical of any
                2026 marketing that references "$2,000 federal credit" or "30%
                geothermal credit" — verify the source date.
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">
                Did the federal heat pump tax credit end?
              </h3>
              <p className="text-gray-600">
                Yes. Both the Energy Efficient Home Improvement Credit (Section
                25C) and the Residential Clean Energy Credit (Section 25D) ended
                for property placed in service after December 31, 2025. This was
                accelerated by the OBBBA, signed July 4, 2025.
              </p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">
                Is the geothermal (25D) credit still available in 2026?
              </h3>
              <p className="text-gray-600">
                No. Many sites still claim the 25D geothermal credit runs
                through 2032 — that was the original IRA schedule. The OBBBA
                accelerated its termination to December 31, 2025.
              </p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">
                What does "placed in service" mean?
              </h3>
              <p className="text-gray-600">
                For Section 25D, the IRS treats the expenditure as made when
                installation is completed. If your project finishes in 2026, it
                doesn't qualify — even if you signed a contract or paid in 2025.
              </p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">
                What incentives still exist in 2026?
              </h3>
              <p className="text-gray-600">
                Utility rebates, city and county programs, state incentives
                (where active), and upcoming HEAR/HOMES rebate programs. These
                are separate from federal tax credits and are administered
                locally or by states.
              </p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">
                Are HEAR/HOMES rebates the same as tax credits?
              </h3>
              <p className="text-gray-600">
                No. They are rebate programs — often applied at point of sale or
                as reimbursement. They are income-based or savings-based,
                administered by individual states, and are completely separate
                from the expired federal tax credits.
              </p>
            </div>
            <div className="pb-6">
              <h3 className="text-lg font-semibold mb-2">
                Is the Minnesota HEAR/HOMES program available yet?
              </h3>
              <p className="text-gray-600">
                No. As of February 2, 2026, Minnesota's Save Energy Minnesota
                program has not launched. The state is waiting for formal DOE
                approval. There is no estimated launch date, and HEAR rebates
                cannot be applied retroactively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Sources</h2>
          <div className="space-y-4">
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
                Official IRS guidance on 25C, 25D, and other energy credit
                termination dates under Public Law 119-21
              </p>
            </a>
            <a
              href="https://www.irs.gov/credits-deductions/residential-clean-energy-credit"
              target="_blank"
              rel="noopener noreferrer"
              className="card block hover:shadow-md transition-shadow"
            >
              <p className="font-semibold text-brand-600">
                IRS — Residential Clean Energy Credit (Section 25D) ↗
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Confirms credit is not available for property placed in service
                after December 31, 2025
              </p>
            </a>
            <a
              href="https://www.irs.gov/credits-deductions/home-energy-tax-credits"
              target="_blank"
              rel="noopener noreferrer"
              className="card block hover:shadow-md transition-shadow"
            >
              <p className="font-semibold text-brand-600">
                IRS — Home Energy Tax Credits (Section 25C) ↗
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Energy Efficient Home Improvement Credit overview
              </p>
            </a>
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
                Minnesota HEAR status, eligibility, and "no estimated launch
                date" notice (updated 2/2/2026)
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
                Minnesota HOMES status and program details
              </p>
            </a>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Last verified: {LAST_UPDATED}
          </p>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Related guides on Home Energy Basics
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/battery"
              className="card hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 mb-2">
                Home Battery Guide 2026
              </h3>
              <p className="text-gray-600 text-sm">
                What changed for home batteries after the federal credit
                landscape shifted.
              </p>
            </Link>
            <Link
              href="/battery/what-changed"
              className="card hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 mb-2">
                What Changed for Batteries in 2026
              </h3>
              <p className="text-gray-600 text-sm">
                Federal policy changes and what they mean for battery storage
                decisions.
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
