import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Home Energy Basics",
  description:
    "How Home Energy Basics handles visitor data: what we collect, what we do not collect, and how affiliate links and third-party services are used.",
  alternates: {
    canonical: "https://homeenergybasics.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Home Energy Basics",
    description:
      "How Home Energy Basics handles visitor data and third-party services.",
    url: "https://homeenergybasics.com/privacy",
    type: "article",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="container-narrow">
          <nav className="text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-brand-600">Home</Link>
            {" "}/ Privacy Policy
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500">Effective date: July 21, 2026</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What we collect</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Home Energy Basics is an informational website. We do not require
            accounts, logins, or registration, and we do not ask you to submit
            personal information to read any page on this site.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our hosting provider (Vercel) automatically records standard server
            logs when you visit, which may include your IP address, browser
            type, pages requested, and timestamps. This data is used for
            security, performance, and aggregate traffic measurement, not to
            identify individual visitors.
          </p>
          <p className="text-gray-700 leading-relaxed">
            If you contact us by email, we receive the information you choose
            to send. We use it only to respond and do not add you to any
            mailing list.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and analytics</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We do not currently use display advertising or sell visitor data
            to data brokers. If advertising is added in the future, this
            policy will be updated to explain the services involved and any
            choices available to visitors. Any analytics we use are for
            aggregate measurement of which pages are read, not for building
            profiles of individual visitors.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Third-party sites we link to — including government program
            administrators, utilities, and retailers — have their own privacy
            policies. We do not control what those sites collect once you
            leave ours.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Affiliate links</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Some pages on this site may contain affiliate links. When
            affiliate links are present, clicking one and making a purchase
            may result in the retailer setting a cookie in your browser to
            attribute the sale, and we may earn a commission at no
            additional cost to you. These cookies are set by the affiliate
            network or retailer, not by us. See our{" "}
            <Link href="/affiliate-disclosure" className="text-brand-600 hover:underline">
              Affiliate Disclosure
            </Link>{" "}
            for details.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Affiliate relationships never determine the program information we
            publish. State rebate and incentive pages remain informational and
            are verified against official program sources.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your choices and contact</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            You can block cookies in your browser settings without losing
            access to any content on this site. If you have questions about
            this policy or want any information you&apos;ve sent us deleted,
            contact us through the{" "}
            <Link href="/contact" className="text-brand-600 hover:underline">
              Contact page
            </Link>.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We may update this policy as the site changes. The effective date
            above reflects the most recent revision.
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
