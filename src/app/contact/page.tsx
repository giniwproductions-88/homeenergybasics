import Link from "next/link";
import type { Metadata } from "next";

// Operator decision 7/21: contact@ is the site address (also on /about).
// Networks verify this address exists — confirm forwarding for
// contact@homeenergybasics.com receives (and can reply) before applying.
const CONTACT_EMAIL = "contact@homeenergybasics.com";

export const metadata: Metadata = {
  title: "Contact | Home Energy Basics",
  description:
    "Contact Home Energy Basics to report an outdated rebate figure, a broken link, or a program change, or for partnership and press inquiries.",
  alternates: {
    canonical: "https://homeenergybasics.com/contact",
  },
  openGraph: {
    title: "Contact | Home Energy Basics",
    description:
      "Report an outdated rebate figure or program change, or reach us for partnership and press inquiries.",
    url: "https://homeenergybasics.com/contact",
    type: "article",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="container-narrow">
          <nav className="text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-brand-600">Home</Link>
            {" "}/ Contact
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            The fastest way to reach us is email. We read everything, and
            reader reports are one of the main ways outdated program details
            get caught.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Email</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-brand-600 hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Especially useful</p>
              <p className="text-sm text-green-900">
                A rebate amount that no longer matches the program&apos;s own
                page, a program that opened or closed, a broken link, or a
                state we should cover next. Include the page URL and, if you
                have it, a link to the official source.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Also welcome</p>
              <p className="text-sm text-gray-600 mt-1">
                Press inquiries, partnership questions, and corrections of any
                kind. We typically respond within a few business days.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What we can&apos;t help with</h2>
          <p className="text-gray-700 leading-relaxed">
            We can&apos;t determine your personal eligibility for any rebate,
            process applications, or recommend specific contractors. For
            eligibility questions, contact the program administrator listed in
            the Sources section of the relevant state page — those are the
            people who can give you a binding answer.
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="container-narrow">
          <div className="mt-6 text-center">
            <Link href="/" className="text-brand-600 hover:underline text-sm">
              ← Back to Home Energy Basics
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
