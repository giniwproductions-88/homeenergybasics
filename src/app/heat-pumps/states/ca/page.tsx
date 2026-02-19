import Link from 'next/link'
import type { Metadata } from 'next'
import { incentives, formatDate } from '@/data/incentives'
import StatusCard from '@/components/StatusCard'

export const metadata: Metadata = {
  title: 'California Heat Pump Rebates | Home Energy Basics',
  description: 'Current status of California heat pump incentives. State programs, utility rebates, and IRA-funded rebates (state-administered) explained. Federal tax credits are not available in 2026.',
  alternates: {
    canonical: 'https://homeenergybasics.com/heat-pumps/states/ca',
  },
}

export default function CaliforniaPage() {
  const caIncentive = incentives.CA
  const formattedDate = formatDate(caIncentive.lastVerified)

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-energy-50 via-white to-gray-50 py-12 md:py-16">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-brand-600 font-medium mb-2">
              <Link href="/" className="hover:underline">Home</Link> / <Link href="/heat-pumps" className="hover:underline">Heat Pumps</Link> / California
            </p>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              California Heat Pump Rebates
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Current status and program details for heat pump incentives in California.
            </p>
          </div>
        </div>
      </section>

      {/* Status Card */}
      <section className="py-12">
        <div className="container-narrow">
          <StatusCard incentive={caIncentive} />
        </div>
      </section>

      {/* Detailed Information */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <div className="prose prose-lg max-w-none">
            <h2>California Heat Pump Programs</h2>
            <p>
              California has multiple overlapping incentive programs for heat pumps. 
              Availability and funding levels vary significantly by region.
            </p>

            <h3>Federal tax credits (not available in 2026)</h3>
            <p>
              Federal residential heat pump tax credits (Section 25C) and geothermal
              credits (Section 25D) ended for property placed in service after
              December 31, 2025. In 2026, California homeowners should plan around
              state, utility, and IRA-funded rebate programs instead of federal tax
              credits. See our{' '}
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 underline">
                federal credits explainer
              </Link>.
            </p>

            <h3>State-Level Programs</h3>
            <ul>
              <li><strong>TECH Clean California:</strong> Incentives for heat pump water heaters and space heating in homes with gas appliances</li>
              <li><strong>Self-Generation Incentive Program (SGIP):</strong> Primarily battery storage incentives (often relevant if you pair a heat pump with backup power)</li>
              <li><strong>IRA Home Energy Rebates (HEAR/HOMES):</strong> Federal funds administered through California as point-of-sale or performance-based rebates (status and rollout may vary)</li>
            </ul>

            <h3>Utility Programs</h3>
            <p>
              Major California utilities offer their own rebates that can often be stacked with state programs:
            </p>
            <ul>
              <li><strong>PG&E:</strong> Heat pump rebates for space and water heating</li>
              <li><strong>SCE:</strong> Southern California Edison electrification incentives</li>
              <li><strong>SDG&E:</strong> San Diego Gas & Electric rebate programs</li>
              <li><strong>Municipal utilities:</strong> SMUD, LADWP, and others have separate programs</li>
            </ul>

            <h3>Why "Limited"?</h3>
            <p>
              California's status is marked "Limited / Region-Dependent" because:
            </p>
            <ul>
              <li>Funding caps have been reached in some programs</li>
              <li>Certain utility territories have waitlists</li>
              <li>Program availability varies by income level and location</li>
              <li>Some programs have paused enrollment while processing applications</li>
            </ul>
            <p>
              Always confirm current availability directly with your utility and
              the relevant program portal before starting a project.
            </p>

            <h3>What to Do</h3>
            <ol>
              <li>Check your specific utility's current rebate availability</li>
              <li>Verify your eligibility for income-qualified programs</li>
              <li>Get quotes from multiple contractors who are familiar with program requirements</li>
              <li>Apply for rebates early—many programs are first-come, first-served</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Official Sources</h2>
          <div className="space-y-4">
            {caIncentive.sources.map((source) => (
              <a
                key={source.url}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card block hover:shadow-md transition-shadow"
              >
                <p className="font-semibold text-brand-600">{source.label} ↗</p>
                <p className="text-sm text-gray-500">{source.url}</p>
              </a>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Last verified: {formattedDate}
          </p>
        </div>
      </section>

      {/* Back link */}
      <section className="py-8">
        <div className="container-narrow">
          <Link href="/heat-pumps" className="text-brand-600 hover:underline font-medium">
            ← Back to Heat Pump Status
          </Link>
        </div>
      </section>
    </>
  )
}
