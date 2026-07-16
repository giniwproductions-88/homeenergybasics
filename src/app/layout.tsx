import type { Metadata } from 'next'
import Link from 'next/link'
import { incentives } from '@/data/incentives'
import './globals.css'

export const metadata: Metadata = {
  title: 'Home Energy Basics',
  description: 'Heat pump rebates and incentives by state, verified against official program sources. Utility rebates, state programs, and federal status in one place.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const footerStates = Object.values(incentives).sort((a, b) =>
    a.stateName.localeCompare(b.stateName)
  )

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="border-b border-gray-100 bg-white sticky top-0 z-50">
          <div className="container-wide py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-gray-900 hover:text-brand-600 transition-colors">
              ⚡ Home Energy Basics
            </Link>
            
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/battery" className="text-gray-600 hover:text-gray-900 font-medium">
                Home Batteries
              </Link>
              <Link href="/heat-pumps" className="text-gray-600 hover:text-gray-900 font-medium">
                Heat Pumps
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900 font-medium">
                About
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900 font-medium">
                Contact
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              type="button"
              aria-label="Open navigation menu"
              className="md:hidden p-2 text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 mt-16">
          <div className="container-wide py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Brand */}
              <div className="col-span-2 md:col-span-1">
                <h3 className="text-lg font-bold text-white mb-3">
                  ⚡ Home Energy Basics
                </h3>
                <p className="text-sm leading-relaxed">
                  Heat pump rebates and incentives, verified against official program sources.
                </p>
              </div>

              {/* Battery */}
              <div>
                <h4 className="text-white font-semibold mb-4">Home Batteries</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/battery" className="hover:text-white">Battery Guide</Link></li>
                  <li><Link href="/battery/what-changed" className="hover:text-white">What Changed in 2026</Link></li>
                </ul>
              </div>

              {/* Heat Pumps */}
              <div>
                <h4 className="text-white font-semibold mb-4">Heat Pumps</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/heat-pumps" className="hover:text-white">Incentive Status</Link></li>
                  <li><Link href="/heat-pumps/rebates-by-state" className="hover:text-white">Rebates by State</Link></li>
                  <li><Link href="/heat-pumps/tracker" className="hover:text-white">Rebate Tracker</Link></li>
                  <li><Link href="/heat-pumps/cost" className="hover:text-white">Heat Pump Cost (2026)</Link></li>
                  <li><Link href="/heat-pumps/vs-furnace" className="hover:text-white">Heat Pump vs Furnace</Link></li>
                  <li><Link href="/heat-pumps/stacking-rebates" className="hover:text-white">Stacking Rebates</Link></li>
                  <li><Link href="/heat-pumps/when-not-to" className="hover:text-white">When NOT to Get One</Link></li>
                  <li><Link href="/heat-pumps/utilities/xcel-energy" className="hover:text-white">Xcel Energy Rebates</Link></li>
                  <li><Link href="/federal-heat-pump-tax-credit-expired" className="hover:text-white">Federal Credit (Expired)</Link></li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-white font-semibold mb-4">Info</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/about" className="hover:text-white">About</Link></li>
                  <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                </ul>
              </div>
            </div>

            {/* State pages — rendered from incentives.ts (single source of truth) */}
            <div className="mt-10 pt-8 border-t border-gray-800">
              <h4 className="text-white font-semibold mb-4">Heat Pump Rebates by State</h4>
              <p className="text-sm mb-4">
                <Link href="/heat-pumps/rebates-by-state" className="hover:text-white">
                  Where Rebates Are Still Available (2026) →
                </Link>
              </p>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-2 text-sm">
                {footerStates.map((state) => (
                  <li key={state.stateCode}>
                    <Link
                      href={`/heat-pumps/states/${state.stateCode.toLowerCase()}`}
                      className="hover:text-white"
                    >
                      {state.stateName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-800 mt-10 pt-8 text-sm">
              <p>© {new Date().getFullYear()} Home Energy Basics. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
