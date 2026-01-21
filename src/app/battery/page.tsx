import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home Battery Guide 2026 | Home Energy Basics',
  description: 'Home battery storage guide for 2026. What changed after the federal tax credit, which batteries still make sense, and honest economics.',
  alternates: {
    canonical: 'https://homeenergybasics.com/battery',
  },
}

export default function BatteryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-50 via-white to-gray-50 py-12 md:py-16">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-brand-600 font-medium mb-2">
              <Link href="/" className="hover:underline">Home</Link> / Home Batteries
            </p>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Home Battery Guide 2026
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              The federal tax credit landscape changed. Here's what still makes sense for home battery storage—and what doesn't.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Context */}
      <section className="py-12">
        <div className="container-narrow">
          <div className="card-highlight mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">The Short Version</h2>
            <p className="text-gray-700">
              Home batteries can still make financial sense in 2026—but the math changed. 
              Whether it works for you depends on your utility rates, time-of-use structure, 
              and whether you have solar. We'll break it down honestly.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2>What Changed in 2026</h2>
            <p>
              The federal Investment Tax Credit (ITC) for standalone batteries expired for most residential installations. 
              Batteries paired with solar still qualify for the solar ITC, but standalone battery purchases lost their federal incentive.
            </p>
            <p>
              This shifts the economics significantly. Without the 30% federal credit, a $15,000 battery system 
              is now $15,000—not $10,500 after credits.
            </p>

            <h2>When Batteries Still Make Sense</h2>
            <ul>
              <li><strong>Paired with new solar:</strong> The solar ITC still applies to battery storage installed with solar panels</li>
              <li><strong>High time-of-use rate differentials:</strong> If your utility charges 3-4x more during peak hours, arbitrage still works</li>
              <li><strong>Frequent outages:</strong> Backup power has real value in areas with unreliable grid</li>
              <li><strong>State incentives:</strong> California SGIP, Massachusetts SMART, and other state programs still exist</li>
            </ul>

            <h2>When Batteries Don't Make Sense</h2>
            <ul>
              <li><strong>Flat-rate electricity:</strong> No arbitrage opportunity without time-of-use rates</li>
              <li><strong>No solar, no state incentives:</strong> Pure economics are challenging without credits</li>
              <li><strong>Short-term ownership:</strong> Payback periods are now 10-15+ years in many cases</li>
            </ul>

            <h2>State Incentives Still Available</h2>
            <p>
              Several states offer their own battery incentives that can significantly improve the economics:
            </p>
            <ul>
              <li><strong>California:</strong> Self-Generation Incentive Program (SGIP) for qualifying customers</li>
              <li><strong>Massachusetts:</strong> SMART program includes battery adders</li>
              <li><strong>Vermont:</strong> Battery storage incentives through utilities</li>
              <li><strong>Oregon:</strong> State tax credits for battery storage</li>
            </ul>
          </div>

          <div className="mt-12 p-6 bg-gray-50 rounded-xl">
            <h3 className="font-semibold text-gray-900 mb-2">What This Page Doesn't Do</h3>
            <p className="text-gray-600 text-sm">
              We don't calculate your specific savings, recommend specific products, or guarantee incentive availability. 
              Local utility rules, installation costs, and program changes affect your actual economics. 
              This is a starting point for research, not financial advice.
            </p>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-gray-50">
        <div className="container-wide">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Related Guides</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/battery/what-changed" className="card hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">What Changed in 2026</h3>
              <p className="text-gray-600 text-sm">Detailed breakdown of federal policy changes and what they mean for homeowners.</p>
            </Link>
            <Link href="/heat-pumps" className="card hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Heat Pump Incentive Status</h3>
              <p className="text-gray-600 text-sm">Day-accurate status on heat pump rebates by state.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
