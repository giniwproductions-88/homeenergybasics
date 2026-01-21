import Link from 'next/link'
import type { Metadata } from 'next'
import { incentives } from '@/data/incentives'
import StatusCard from '@/components/StatusCard'

export const metadata: Metadata = {
  title: 'Heat Pump Incentive Status | Home Energy Basics',
  description: 'Day-accurate heat pump rebate status by state. Are programs open, limited, or paused? We track it so you know before you call.',
  alternates: {
    canonical: 'https://homeenergybasics.com/heat-pumps',
  },
}

export default function HeatPumpsPage() {
  const caIncentive = incentives.CA

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-50 via-white to-energy-50 py-12 md:py-16">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-brand-600 font-medium mb-2">
              <Link href="/" className="hover:underline">Home</Link> / Heat Pumps
            </p>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Heat Pump Incentive Status
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Day-accurate status on heat pump rebates. Are programs open, limited, or paused? 
              We track it so you know before you call an installer.
            </p>
          </div>
        </div>
      </section>

      {/* Status Card */}
      <section className="py-12">
        <div className="container-narrow">
          <StatusCard incentive={caIncentive} />

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/heat-pumps/states/ca" className="btn-primary">
              View California program details →
            </Link>
          </div>
        </div>
      </section>

      {/* What This Site Is */}
      <section className="py-8">
        <div className="container-narrow">
          <div className="p-6 bg-gray-50 rounded-xl">
            <h3 className="font-semibold text-gray-900 mb-2">What This Site Is (And Isn't)</h3>
            <p className="text-gray-600 text-sm">
              This site tracks public rebate availability by state. It does not calculate savings or guarantee eligibility. 
              Local utility rules always apply. We verify status regularly but programs can change without notice.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-12 bg-gray-50">
        <div className="container-wide">
          <h2 className="text-xl font-bold text-gray-900 mb-6">More States Coming</h2>
          <p className="text-gray-600 mb-6">
            We're adding more states soon. Priority list based on incentive availability:
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            {['New York', 'Massachusetts', 'Washington', 'Oregon'].map((state) => (
              <div key={state} className="card bg-white">
                <p className="font-medium text-gray-900">{state}</p>
                <p className="text-sm text-gray-500">Coming soon</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12">
        <div className="container-wide">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Related Guides</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/battery" className="card hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Home Battery Guide 2026</h3>
              <p className="text-gray-600 text-sm">What changed for home batteries after the federal credit landscape shifted.</p>
            </Link>
            <Link href="/about" className="card hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">About Our Methodology</h3>
              <p className="text-gray-600 text-sm">How we verify incentive status and what our timestamps mean.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
