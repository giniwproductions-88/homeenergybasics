'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/battery', label: 'Home Batteries' },
  { href: '/heat-pumps', label: 'Heat Pumps' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Close the menu on navigation — App Router does not remount this component.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="container-wide py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-gray-900 hover:text-brand-600 transition-colors">
          ⚡ Home Energy Basics
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="md:hidden p-2 text-gray-600"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <nav id="mobile-nav" className="md:hidden border-t border-gray-100">
          <ul className="container-wide py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-gray-600 hover:text-gray-900 font-medium"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
