import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Home Energy Basics",
  description:
    "Have a question about heat pump rebates or home energy incentives? Contact the Home Energy Basics team.",
  alternates: {
    canonical: "https://homeenergybasics.com/contact",
  },
  openGraph: {
    title: "Contact Us | Home Energy Basics",
    description:
      "Have a question about heat pump rebates or home energy incentives? Contact the Home Energy Basics team.",
    url: "https://homeenergybasics.com/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* ---- HERO ---- */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="container-narrow">
          <nav className="text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-brand-600">
              Home
            </Link>
            {" "}/ Contact
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>

          <p className="text-lg text-gray-700 leading-relaxed">
            Have a question, correction, or suggestion? We&apos;d like to hear
            from you.
          </p>
        </div>
      </section>

      {/* ---- CONTACT INFO ---- */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            The fastest way to reach us is by email. We typically respond within
            1–2 business days.
          </p>

          <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-gray-900 mb-1">Email</p>
            <p className="text-sm text-gray-700">
              <a
                href="mailto:contact@homeenergybasics.com"
                className="text-brand-600 hover:underline"
              >
                contact@homeenergybasics.com
              </a>
            </p>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            What we can help with
          </h3>

          <div className="space-y-4 mb-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">
                ✓ Corrections and updates
              </p>
              <p className="text-sm text-green-900">
                Found a rebate amount that&apos;s changed, a program
                that&apos;s launched or closed, or a broken source link? Let us
                know and we&apos;ll verify and update.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">
                ✓ Missing programs
              </p>
              <p className="text-sm text-green-900">
                Know about a utility rebate, local municipal program, or state
                incentive we haven&apos;t covered? Send us the details and
                source link.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">
                ✓ Media and partnerships
              </p>
              <p className="text-sm text-green-900">
                Journalists, researchers, and organizations working on energy
                efficiency topics are welcome to reach out.
              </p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="font-semibold text-amber-800 mb-1">
              ⚠ What we can&apos;t do
            </p>
            <p className="text-sm text-amber-900">
              We are an informational resource, not a contractor or program
              administrator. We cannot process rebate applications, provide
              contractor referrals, or determine your eligibility for specific
              programs. For those questions, contact your{" "}
              <Link
                href="/heat-pumps"
                className="text-brand-600 hover:underline"
              >
                state&apos;s program administrator
              </Link>{" "}
              directly.
            </p>
          </div>
        </div>
      </section>

      {/* ---- ABOUT LINK ---- */}
      <section className="py-8 bg-gray-50">
        <div className="container-narrow">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <p className="text-sm text-gray-500 mb-1">About this site</p>
            <p className="text-gray-700 leading-relaxed">
              Home Energy Basics is an independent guide tracking U.S. heat pump
              rebates and home electrification incentives. Every rebate amount,
              program status, and source link is verified against official state,
              utility, and federal program pages.{" "}
              <Link href="/about" className="text-brand-600 hover:underline">
                See our verification methodology
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ---- BACK LINK ---- */}
      <section className="py-8">
        <div className="container-narrow text-center">
          <Link
            href="/"
            className="text-brand-600 hover:underline text-sm"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </>
  );
}
