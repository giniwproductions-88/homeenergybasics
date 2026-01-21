import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home Energy Basics',
  description: 'Clear, honest guides to home batteries and heat pump incentives. No fluff, just facts.',
  alternates: {
    canonical: 'https://homeenergybasics.com',
  },
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-50 via-white to-energy-50 py-16 md:py-24">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Home Energy Basics
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-4">
              Clear, honest guides to home batteries and heat pump incentives. 
              No calculators that lie. No rebate promises that don't exist. Just facts.
            </p>
            <p className="text-gray-500 mb-8">
              Home batteries and heat pumps are often evaluated together as part of broader home electrification decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Two Sections */}
      <section className="py-16">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Battery Section */}
            <Link 
              href="/battery"
              className="card hover:shadow-lg hover:border-brand-300 transition-all group"
            >
              <div className="text-4xl mb-4">🔋</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-600 transition-colors">
                Home Battery Storage
              </h2>
              <p className="text-gray-600 mb-4">
                What changed in 2026, which batteries still make sense, and honest economics after the federal credit ended.
              </p>
              <span className="text-brand-600 font-semibold">
                Read the guide →
              </span>
            </Link>

            {/* Heat Pump Section */}
            <Link 
              href="/heat-pumps"
              className="card hover:shadow-lg hover:border-brand-300 transition-all group"
            >
              <div className="text-4xl mb-4">🌡️</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-600 transition-colors">
                Heat Pump Incentives
              </h2>
              <p className="text-gray-600 mb-4">
                Day-accurate status on heat pump rebates by state. Are programs open, limited, or paused? We track it.
              </p>
              <span className="text-brand-600 font-semibold">
                Check status →
              </span>
            </Link>

          </div>
        </div>
      </section>

      {/* What This Site Is */}
      <section className="py-16 bg-gray-50">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What This Site Is (And Isn't)
          </h2>
          <p className="text-gray-600 mb-6">
            This site tracks publicly available information about home energy equipment and incentives. 
            We don't calculate savings, guarantee eligibility, or sell equipment. 
            Local utility rules and program availability always apply.
          </p>
          <p className="text-sm text-gray-500">
            Questions? <Link href="/about" className="text-brand-600 hover:underline">Learn more about our methodology</Link>.
          </p>
        </div>
      </section>
    </>
  )
}
