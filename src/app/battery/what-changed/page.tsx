import Link from 'next/link'
import type { Metadata } from 'next'

/*
  CONTENT CORRECTION — 2026-07-26 (battery discovery sitting)
  Previous version claimed the 30% residential credit was "still available
  through 2032" — pre-OBBBA content, false since systems placed in service
  after Dec 31, 2025. Sources verified 2026-07-26:
  - ENERGY STAR, "Battery Storage Technology Tax Credit": "30% for property
    placed in service after December 31, 2021, and before January 1, 2026";
    claim via IRS Form 5695. (administrator-class source)
    https://www.energystar.gov/about/federal-tax-credits/battery-storage-technology
  - solarpermitsolutions.com (2026): 25D terminated by OBBBA (signed
    July 4, 2025) for systems placed in service after Dec 31, 2025; applies
    to homeowner cash/loan purchases; 48E commercial ITC remains for
    third-party-owned storage through 2032.
  - Enphase (2026): "After 2025, homeowner-owned batteries will no longer
    qualify... The ITC for standalone battery systems continues through 2032
    under third-party ownership."
  - Cost range echoes our own /battery hub ($10,000–$16,000 installed, no
    federal incentive) for internal consistency.
  State program mentions kept deliberately non-specific (no dollar figures,
  no open/closed status) pending per-program verification — playbook rules.
*/

export const metadata: Metadata = {
  title: 'What Changed for Home Batteries in 2026 | Home Energy Basics',
  description:
    'The 30% federal battery tax credit expired for systems placed in service after December 31, 2025. What ended, what still qualifies in 2026, and where the remaining incentives are.',
  alternates: {
    canonical: 'https://homeenergybasics.com/battery/what-changed',
  },
}

export default function WhatChangedPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-energy-50 via-white to-gray-50 py-12 md:py-16">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-brand-600 font-medium mb-2">
              <Link href="/" className="hover:underline">Home</Link> / <Link href="/battery" className="hover:underline">Batteries</Link> / What Changed
            </p>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              What Changed for Home Batteries in 2026
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              The 30% federal tax credit for home batteries ended on December 31, 2025.
              Here's exactly what expired, what still qualifies, and where the remaining money is.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container-narrow">
          <div className="prose prose-lg max-w-none">

            <h2>The 30% Federal Credit Expired</h2>
            <p>
              The Residential Clean Energy Credit (Section 25D) covered 30% of the cost of a
              qualifying home battery — but only for systems <strong>placed in service on or
              before December 31, 2025</strong>. Legislation signed on July 4, 2025 ended the
              credit early; it had originally been scheduled to run through 2032. That earlier
              schedule is what many older guides — including a previous version of this
              page — still describe.
            </p>

            <div className="card my-6 not-prose border-red-200">
              <h3 className="font-semibold text-gray-900 mb-4">Buying a Battery in 2026</h3>
              <p className="text-gray-600 mb-2">
                If you purchase a battery with cash or a loan and it's placed in service in
                2026 or later, there is no federal tax credit — whether the battery is
                installed with solar, added to existing solar, or standalone. The
                with-solar/standalone distinction that mattered under the old rules no
                longer changes the federal answer for homeowner-owned systems.
              </p>
              <p className="text-sm text-gray-500">
                ✗ No 30% federal credit for homeowner-purchased systems placed in service after Dec 31, 2025
              </p>
            </div>

            <h2>If Your Battery Was Installed in 2025</h2>
            <p>
              The credit isn't gone retroactively. If your system was installed and placed in
              service by December 31, 2025, you can still claim 30% of qualified costs when
              you file your 2025 federal return, using IRS Form 5695. The
              <strong> placed-in-service date</strong> — not the purchase or contract
              date — is what determines eligibility, and qualifying batteries needed a
              capacity of at least 3 kilowatt-hours.
            </p>

            <h2>What Still Qualifies Federally</h2>
            <div className="card my-6 not-prose">
              <h3 className="font-semibold text-gray-900 mb-4">Leased and Third-Party-Owned Systems</h3>
              <p className="text-gray-600 mb-2">
                A separate commercial credit (Section 48E) remains available for battery
                systems owned by a business — which includes batteries installed at your
                home under a lease or power purchase agreement. The credit goes to the
                company that owns the system, not to you directly, but it can show up as
                lower lease pricing. This structure is currently scheduled to remain
                available for storage into the 2030s.
              </p>
              <p className="text-sm text-gray-500">
                ✓ Third-party ownership is now the main federal pathway — compare lease terms carefully
              </p>
            </div>

            <h2>State and Utility Programs Are Now the Main Game</h2>
            <p>
              With the federal credit gone for purchased systems, the incentives that remain
              are state and utility programs — and they vary enormously:
            </p>
            <ul>
              <li><strong>State rebate programs</strong> such as California's SGIP offer battery rebates to qualifying customers, with their own eligibility rules and funding cycles</li>
              <li><strong>Utility battery programs</strong> (including Massachusetts' ConnectedSolutions and various Vermont utility offerings) pay you for letting the utility dispatch your battery during peak demand</li>
              <li><strong>Virtual power plant (VPP) enrollment</strong> — a growing number of utilities pay ongoing credits for enrolled batteries</li>
            </ul>
            <p>
              These programs open, pause, and change frequently, and dollar amounts depend on
              your specific utility and eligibility — verify current status directly with the
              program before signing anything. For heat pump incentives, our{' '}
              <Link href="/heat-pumps">rebate status tracker</Link> tracks program
              availability by state.
            </p>

            <h2>What This Means Practically</h2>
            <p>
              For most homeowners considering battery storage in 2026:
            </p>
            <ul>
              <li>Expect to pay full price federally — typically $10,000–$16,000 installed — not the net-of-credit figures many older guides still quote</li>
              <li>Your state and utility now determine most of the economics: time-of-use rates, VPP payments, and state rebates matter more than ever</li>
              <li>If a lease or PPA is offered in your area, the third-party credit may make its pricing surprisingly competitive with buying — read the terms closely</li>
              <li>If you installed in 2025, claim your credit on your 2025 return — it doesn't carry into 2026 purchases</li>
            </ul>

            <h2>The Bottom Line</h2>
            <p>
              The era of federally subsidized homeowner-purchased batteries ended with 2025.
              Batteries can still make sense — but the case now rests on your utility rates,
              your solar setup, and what your state offers, not on a federal credit. For the
              full decision framework, see our guide to{' '}
              <Link href="/battery">whether home batteries are worth it in 2026</Link>.
            </p>
            <p>
              Before making a decision, get actual quotes from installers and consult a tax
              professional about your specific situation.
            </p>

          </div>

          <div className="mt-12 p-6 bg-gray-50 rounded-xl">
            <p className="text-gray-600 text-sm mb-2">
              <strong>Last verified:</strong> July 26, 2026. Federal credit status confirmed
              against ENERGY STAR and IRS Form 5695 guidance.
            </p>
            <p className="text-gray-600 text-sm">
              <strong>Disclaimer:</strong> This information is for educational purposes only and should not be considered tax advice.
              Federal tax law is complex and subject to interpretation. Consult a qualified tax professional for guidance on your specific situation.
            </p>
          </div>
        </div>
      </section>

      {/* Back link */}
      <section className="py-8">
        <div className="container-narrow">
          <Link href="/battery" className="text-brand-600 hover:underline font-medium">
            ← Back to Battery Guide
          </Link>
        </div>
      </section>
    </>
  )
}
