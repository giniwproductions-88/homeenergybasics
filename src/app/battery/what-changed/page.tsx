import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What Changed for Home Batteries in 2026 | Home Energy Basics',
  description: 'Federal tax credit changes for home battery storage in 2026. What expired, what still works, and what it means for your decision.',
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
              The federal tax credit landscape shifted. Here's exactly what changed and what it means.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container-narrow">
          <div className="prose prose-lg max-w-none">
            
            <h2>The Federal Investment Tax Credit (ITC)</h2>
            <p>
              The Inflation Reduction Act of 2022 extended and modified the federal tax credit for clean energy. 
              For home batteries, the key details are:
            </p>

            <div className="card my-6 not-prose">
              <h3 className="font-semibold text-gray-900 mb-4">Batteries WITH Solar</h3>
              <p className="text-gray-600 mb-2">
                If you install a battery at the same time as solar panels, or add a battery to an existing solar system, 
                the battery qualifies for the same 30% federal tax credit as the solar.
              </p>
              <p className="text-sm text-gray-500">
                ✓ Still available through 2032 (steps down after)
              </p>
            </div>

            <div className="card my-6 not-prose border-red-200">
              <h3 className="font-semibold text-gray-900 mb-4">Standalone Batteries (No Solar)</h3>
              <p className="text-gray-600 mb-2">
                For batteries installed without solar—as pure backup or grid arbitrage systems—the federal credit 
                situation is more complex. Standalone battery systems may not qualify for the residential clean energy credit.
              </p>
              <p className="text-sm text-gray-500">
                ⚠️ Consult a tax professional for your specific situation
              </p>
            </div>

            <h2>What This Means Practically</h2>
            <p>
              For most homeowners considering battery storage:
            </p>
            <ul>
              <li>If you're adding solar anyway, adding a battery is more attractive than ever</li>
              <li>If you already have solar, adding a battery may still qualify (consult your tax advisor)</li>
              <li>If you want a battery without any solar, the economics are significantly harder</li>
            </ul>

            <h2>State Incentives Fill Some Gaps</h2>
            <p>
              Several states offer their own incentives that can make standalone batteries more viable:
            </p>
            <ul>
              <li><strong>California SGIP:</strong> Significant rebates for qualifying customers, especially in fire-risk areas</li>
              <li><strong>Massachusetts:</strong> ConnectedSolutions program pays for battery dispatch</li>
              <li><strong>Vermont:</strong> Utility programs for battery storage</li>
            </ul>
            <p>
              These programs have their own eligibility rules, caps, and availability windows. 
              Check our <Link href="/heat-pumps">incentive status tracker</Link> for current availability.
            </p>

            <h2>The Bottom Line</h2>
            <p>
              The "golden era" of heavily-subsidized standalone batteries may be over, but batteries paired with solar 
              remain well-supported. State programs can still make standalone batteries work in specific situations.
            </p>
            <p>
              Before making a decision, get actual quotes from installers and consult with a tax professional 
              about your specific credit eligibility.
            </p>

          </div>

          <div className="mt-12 p-6 bg-gray-50 rounded-xl">
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
