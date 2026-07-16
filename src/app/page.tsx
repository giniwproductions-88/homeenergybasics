import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home Energy Basics',
  description: 'Find every heat pump rebate available in your state. Utility rebates, state incentives, and federal program status — verified against official sources.',
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
              Find every heat pump rebate available in your state
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-4">
              Utility rebates, state incentives, and federal program status in one place —
              verified against official program sources and dated, so you know exactly
              what&apos;s available right now.
            </p>
            <p className="text-gray-500 mb-8">
              We also cover home battery storage, which many homeowners evaluate
              alongside heat pumps as part of a broader electrification decision.
            </p>
            <Link
              href="/heat-pumps"
              className="inline-block bg-brand-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-brand-700 transition-colors"
            >
              Check your state&apos;s rebates →
            </Link>
          </div>
        </div>
      </section>

      {/* Two Sections */}
      <section className="py-16">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">

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
                State-by-state rebate status for all 50 states and DC. Which programs are
                open, limited, or paused — with dollar amounts, stacking rules, and a
                last-verified date on every page.
              </p>
              <span className="text-brand-600 font-semibold">
                Check status →
              </span>
            </Link>

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
                What changed in 2026, which batteries still make sense, and the real
                economics after the federal credit ended.
              </p>
              <span className="text-brand-600 font-semibold">
                Read the guide →
              </span>
            </Link>

          </div>
        </div>
      </section>

      {/* How We Verify */}
      <section className="py-16 bg-gray-50">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How We Verify
          </h2>
          <p className="text-gray-600 mb-6">
            Every rebate figure on this site is checked against the program
            administrator&apos;s official documentation — not blogs or aggregators.
            Each state page shows its sources and the date it was last verified,
            and we re-verify when programs change.
          </p>
          <p className="text-gray-600 mb-6">
            Home Energy Basics researches and verifies rebate information
            independently against official program sources. Our content is not
            influenced by any program, utility, or manufacturer.
          </p>
          <p className="text-sm text-gray-500">
            <Link href="/about" className="text-brand-600 hover:underline">Read our full methodology</Link>.
          </p>
        </div>
      </section>
    </>
  )
}
