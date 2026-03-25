import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: 'Home Energy Basics',
  description: 'Clear, honest guides to home batteries and heat pump incentives. No fluff, just facts.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
            </nav>

            {/* Mobile menu button */}
            <button className="md:hidden p-2 text-gray-600">
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
                  Clear, honest energy guides. No fluff.
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
                  <li><Link href="/federal-heat-pump-tax-credit-expired" className="hover:text-white">Federal Credit (Expired)</Link></li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-white font-semibold mb-4">Info</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/about" className="hover:text-white">About</Link></li>
                </ul>
              </div>
            </div>

            {/* State pages — full alphabetical grid */}
            <div className="mt-10 pt-8 border-t border-gray-800">
              <h4 className="text-white font-semibold mb-4">Heat Pump Rebates by State</h4>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-2 text-sm">
                <li><Link href="/heat-pumps/states/az" className="hover:text-white">Arizona</Link></li>
                <li><Link href="/heat-pumps/states/ca" className="hover:text-white">California</Link></li>
                <li><Link href="/heat-pumps/states/co" className="hover:text-white">Colorado</Link></li>
                <li><Link href="/heat-pumps/states/ct" className="hover:text-white">Connecticut</Link></li>
                <li><Link href="/heat-pumps/states/ga" className="hover:text-white">Georgia</Link></li>
                <li><Link href="/heat-pumps/states/il" className="hover:text-white">Illinois</Link></li>
                <li><Link href="/heat-pumps/states/ma" className="hover:text-white">Massachusetts</Link></li>
                <li><Link href="/heat-pumps/states/md" className="hover:text-white">Maryland</Link></li>
                <li><Link href="/heat-pumps/states/me" className="hover:text-white">Maine</Link></li>
                <li><Link href="/heat-pumps/states/mi" className="hover:text-white">Michigan</Link></li>
                <li><Link href="/heat-pumps/states/mn" className="hover:text-white">Minnesota</Link></li>
                <li><Link href="/heat-pumps/states/nh" className="hover:text-white">New Hampshire</Link></li>
                <li><Link href="/heat-pumps/states/nj" className="hover:text-white">New Jersey</Link></li>
                <li><Link href="/heat-pumps/states/nm" className="hover:text-white">New Mexico</Link></li>
                <li><Link href="/heat-pumps/states/nv" className="hover:text-white">Nevada</Link></li>
                <li><Link href="/heat-pumps/states/ny" className="hover:text-white">New York</Link></li>
                <li><Link href="/heat-pumps/states/ok" className="hover:text-white">Oklahoma</Link></li>
                <li><Link href="/heat-pumps/states/or" className="hover:text-white">Oregon</Link></li>
                <li><Link href="/heat-pumps/states/pa" className="hover:text-white">Pennsylvania</Link></li>
                <li><Link href="/heat-pumps/states/ri" className="hover:text-white">Rhode Island</Link></li>
                <li><Link href="/heat-pumps/states/tx" className="hover:text-white">Texas</Link></li>
                <li><Link href="/heat-pumps/states/va" className="hover:text-white">Virginia</Link></li>
                <li><Link href="/heat-pumps/states/vt" className="hover:text-white">Vermont</Link></li>
                <li><Link href="/heat-pumps/states/wa" className="hover:text-white">Washington</Link></li>
                <li><Link href="/heat-pumps/states/wi" className="hover:text-white">Wisconsin</Link></li>
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
