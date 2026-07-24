import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure | Home Energy Basics",
  description:
    "Home Energy Basics may earn commissions from affiliate links on some pages. Here is exactly how that works and where those links appear.",
  alternates: {
    canonical: "https://homeenergybasics.com/affiliate-disclosure",
  },
  openGraph: {
    title: "Affiliate Disclosure | Home Energy Basics",
    description:
      "How affiliate links work on Home Energy Basics and where they appear.",
    url: "https://homeenergybasics.com/affiliate-disclosure",
    type: "article",
  },
};

export default function AffiliateDisclosurePage() {
  return (
    <>
      <section className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="container-narrow">
          <nav className="text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-brand-600">Home</Link>
            {" "}/ Affiliate Disclosure
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Affiliate Disclosure
          </h1>
          <p className="text-sm text-gray-500">Effective date: July 21, 2026</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The short version</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Some pages on Home Energy Basics may contain affiliate links.
            When affiliate links are present, clicking one and making a
            purchase may earn us a commission from the retailer at no
            additional cost to you. This is how the site pays for the
            time it takes to keep rebate and incentive information verified
            and current.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="font-semibold text-blue-800 mb-1">What affiliate links never change</p>
            <p className="text-sm text-blue-900">
              Rebate amounts, program status, and eligibility details on this
              site come from official program administrators, utilities, and
              government sources — never from retailers or affiliate partners.
              No company pays to be mentioned, ranked, or recommended.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Where affiliate links appear</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            When present, affiliate links appear only on commercial-intent
            content such as buying guides, cost breakdowns, and product
            comparisons. State rebate and incentive pages are informational:
            their job is to tell you what programs actually offer, and they
            are kept free of product promotion.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We may participate in affiliate programs operated by networks such
            as Impact, CJ Affiliate, ShareASale, Awin, and FlexOffers, and in
            retailer programs including Home Depot and Lowe&apos;s, as well as
            partner programs for home energy services.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">FTC compliance</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            This disclosure is provided in accordance with the Federal Trade
            Commission&apos;s guidelines on endorsements and testimonials
            (16 CFR Part 255). Pages containing affiliate links also carry a
            disclosure statement on the page itself.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Questions about how this works are welcome through the{" "}
            <Link href="/contact" className="text-brand-600 hover:underline">
              Contact page
            </Link>. For how affiliate cookies interact with your browser, see
            the{" "}
            <Link href="/privacy" className="text-brand-600 hover:underline">
              Privacy Policy
            </Link>.
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
