import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Home Energy Basics',
  description: 'How we verify incentive status, our methodology, and what our timestamps mean.',
  alternates: {
    canonical: 'https://homeenergybasics.com/about',
  },
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-brand-50 py-12 md:py-16">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              About Home Energy Basics
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Clear, honest guides to home energy decisions. No calculators that lie. 
              No rebate promises that don't exist.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container-narrow">
          <div className="prose prose-lg max-w-none">
            
            <h2>Why This Site Exists</h2>
            <p>
              Home energy decisions—batteries, heat pumps, solar—are complicated by bad information. 
              Calculator tools that assume best-case scenarios. Rebate articles that are months out of date. 
              Sales pitches disguised as advice.
            </p>
            <p>
              This site exists to provide something simpler: current, verified facts about what's actually available, 
              with honest context about what makes sense (and what doesn't).
            </p>

            <h2>Our Methodology</h2>
            
            <h3>Incentive Status Tracking</h3>
            <p>
              For our heat pump incentive tracker, we:
            </p>
            <ul>
              <li>Check official state and utility program pages directly</li>
              <li>Note the date we last verified each status</li>
              <li>Mark programs as "limited" when funding caps, waitlists, or regional restrictions apply</li>
              <li>Automatically flag data as potentially stale after 30 days without verification</li>
            </ul>

            <h3>What Our Timestamps Mean</h3>
            <ul>
              <li><strong>"As of":</strong> The date the displayed status was accurate</li>
              <li><strong>"Last verified":</strong> When we last checked the official sources</li>
            </ul>
            <p>
              If data is more than 30 days old, we force the status to "limited" and show a warning. 
              This prevents stale data from misleading visitors.
            </p>

            <h3>Our Sources</h3>
            <p>
              We only cite official sources: state energy agencies, utility company program pages, 
              and federal government resources. We don't rely on news articles, forums, or aggregator sites.
            </p>

            <h2>What We Don't Do</h2>
            <ul>
              <li><strong>Calculate savings:</strong> Too many variables we can't know about your situation</li>
              <li><strong>Guarantee eligibility:</strong> Program rules change and have exceptions we can't anticipate</li>
              <li><strong>Recommend specific products:</strong> We're not a review site or sales channel</li>
              <li><strong>Provide tax advice:</strong> Consult a tax professional for credit eligibility</li>
            </ul>

            <h2>Contact</h2>
            <p>
              Found an error? Have a suggestion? We want to hear from you.
            </p>
            <p>
              Email: <a href="mailto:hello@homeenergybasics.com">hello@homeenergybasics.com</a>
            </p>

          </div>
        </div>
      </section>

      {/* Back to home */}
      <section className="py-8 bg-gray-50">
        <div className="container-narrow text-center">
          <Link href="/" className="btn-primary">
            ← Back to Home
          </Link>
        </div>
      </section>
    </>
  )
}
