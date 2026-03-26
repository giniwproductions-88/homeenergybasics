import Link from "next/link";
import type { Metadata } from "next";
import { formatDate } from "@/data/incentives";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Heat Pump Cost in 2026: What You'll Actually Pay (With Rebates) | Home Energy Basics",
  description:
    "A heat pump costs $12,000–$18,000 installed. After state rebates, many homeowners pay $3,000–$10,000. Here's the full cost breakdown — equipment, labor, electrical, permits, and what rebates actually cover.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/cost",
  },
  openGraph: {
    title: "Heat Pump Cost in 2026: What You'll Actually Pay",
    description:
      "Full cost breakdown: equipment, labor, electrical, permits — and what state rebates actually cover.",
    url: "https://homeenergybasics.com/heat-pumps/cost",
    type: "article",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a heat pump cost to install in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A ducted whole-home heat pump typically costs $12,000–$18,000 fully installed in 2026. This includes equipment ($6,000–$10,000), labor ($3,000–$6,000), and additional costs like electrical upgrades, permits, and ductwork modifications. Ductless mini-split systems cost $3,500–$8,000 for 1–2 zones. After state and utility rebates, many homeowners pay $3,000–$10,000 out of pocket.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a heat pump cost after rebates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on your state and income. In states with strong rebate programs (New York, Colorado, Wisconsin, Maryland), homeowners can receive $5,000–$15,000+ in combined rebates, bringing the out-of-pocket cost to $3,000–$8,000. Income-qualified households (below 80% AMI) in states with active HEAR programs can sometimes pay $0–$3,000. In states with minimal rebates, expect to pay $12,000–$16,000.",
      },
    },
    {
      "@type": "Question",
      name: "Is there still a federal tax credit for heat pumps in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The Section 25C Energy Efficient Home Improvement Credit is no longer available for equipment placed in service after December 31, 2025. It was repealed by the One Big Beautiful Bill Act. There is no federal tax credit for heat pumps in 2026. State and utility rebates are the only financial incentives available.",
      },
    },
    {
      "@type": "Question",
      name: "Why do heat pump installation costs vary so much?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The biggest cost variables are system type (ducted vs ductless), system size (tonnage), equipment tier (standard vs cold-climate vs variable-speed), electrical panel capacity (200-amp upgrade may be needed), ductwork condition, labor rates in your region, and permit requirements. A simple ductless mini-split in a mild climate can cost $3,500. A cold-climate ducted system with an electrical panel upgrade in the Northeast can cost $20,000+.",
      },
    },
    {
      "@type": "Question",
      name: "Does a heat pump require an electrical panel upgrade?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not always, but often in older homes. A ducted heat pump typically requires a 30–60 amp dedicated circuit. If your home has a 100-amp panel that is already near capacity, you may need an upgrade to 200 amps, which costs $1,500–$3,000. Homes built after 2000 with 200-amp panels usually do not need an upgrade. Your contractor or electrician can assess this during the quote process.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a ductless mini-split heat pump cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A single-zone ductless mini-split costs $3,500–$5,500 installed. A multi-zone system (2–4 indoor units on one outdoor unit) costs $6,000–$14,000. Mini-splits are a good option for homes without existing ductwork, room additions, or supplemental heating/cooling. They are generally cheaper per zone than ducted systems but more expensive per square foot for whole-home coverage.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take for a heat pump to pay for itself?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Payback depends on what fuel you are replacing, your rebates, and your energy prices. Replacing oil or propane heat: 3–6 years. Replacing electric resistance heat: 3–5 years. Replacing a gas furnace with strong rebates ($5,000+): 4–8 years. Replacing a gas furnace with minimal rebates and cheap gas: 12–20+ years. The payback shortens significantly with state and utility rebates.",
      },
    },
    {
      "@type": "Question",
      name: "Why are heat pump quotes from contractors so different?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contractor quotes vary 20–40% for the same home because of differences in equipment brand and tier (builder-grade vs premium), system sizing approach (rule-of-thumb vs Manual J calculation), scope of work (whether electrical upgrades, ductwork, permits, and thermostat are included or extra), and markup. Always compare quotes with the same scope and ask each contractor to itemize equipment, labor, electrical, permits, and ductwork separately.",
      },
    },
  ],
};

export default function HeatPumpCostPage() {
  const verifiedDate = "2026-03-25";
  const formattedDate = formatDate(verifiedDate);

  return (
    <>
      <JsonLd data={faqJsonLd} />

      {/* ---- 1. HERO ---- */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="container-narrow">
          <nav className="text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-brand-600">Home</Link>
            {" "}/{" "}
            <Link href="/heat-pumps" className="hover:text-brand-600">Heat Pumps</Link>
            {" "}/ Cost
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Real Cost of Installing a Heat Pump in 2026
          </h1>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            A ducted whole-home heat pump costs <strong>$12,000–$18,000</strong>{" "}
            installed before rebates. After{" "}
            <Link href="/heat-pumps/rebates-by-state" className="text-brand-600 hover:underline">
              state and utility rebates
            </Link>, many homeowners pay{" "}
            <strong>$3,000–$10,000 out of pocket</strong>. But the total depends on
            your system type, home&apos;s electrical setup, ductwork condition, and
            where you live. Federal heat pump tax credits are no longer available for
            equipment placed in service after December 31, 2025 — state and utility
            rebates are the only financial help in 2026. Heat pump installation costs
            vary significantly by region because labor rates, permitting requirements,
            and available rebates differ from state to state. This guide breaks down
            every cost component so you know what to expect before getting quotes.
          </p>

          <p className="text-sm text-gray-500">
            Last verified: {formattedDate}
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Rates and program availability may change after this date.
          </p>

          <nav className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            <a href="#breakdown" className="text-brand-600 hover:underline">Cost breakdown</a>
            <a href="#system-types" className="text-brand-600 hover:underline">By system type</a>
            <a href="#hidden" className="text-brand-600 hover:underline">Hidden costs</a>
            <a href="#after-rebates" className="text-brand-600 hover:underline">After rebates</a>
            <a href="#payback" className="text-brand-600 hover:underline">Payback period</a>
          </nav>
        </div>
      </section>

      {/* ---- 2. SHORT VERSION ---- */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Short Version</h2>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Before rebates</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Ducted whole-home: <strong>$12,000–$18,000</strong></li>
                <li>Ductless mini-split (1 zone): <strong>$3,500–$5,500</strong></li>
                <li>Ductless multi-zone (2–4): <strong>$6,000–$14,000</strong></li>
                <li>Dual-fuel (add HP to furnace): <strong>$10,000–$14,000</strong></li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">After rebates (strong states)</p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>Above 150% AMI: <strong>$7,000–$13,000</strong></li>
                <li>80–150% AMI: <strong>$4,000–$10,000</strong></li>
                <li>Below 80% AMI: <strong>$0–$5,000</strong></li>
              </ul>
              <p className="text-xs text-green-800 mt-2">
                <Link href="/heat-pumps/stacking-rebates" className="text-brand-600 hover:underline">
                  How rebates stack →
                </Link>
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">✗ Federal tax credits are gone</p>
              <p className="text-sm text-red-900">
                The Section 25C credit is no longer available for equipment placed in
                service after December 31, 2025.{" "}
                <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                  Details →
                </Link>
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="font-semibold text-amber-800 mb-1">⚠ Biggest cost variables</p>
              <p className="text-sm text-amber-900">
                Electrical panel upgrades ($1,500–$3,000), ductwork repair ($2,000–$5,000),
                and cold-climate equipment premiums ($1,000–$3,000) are the items that push
                costs above typical ranges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- 3. COST BREAKDOWN ---- */}
      <section className="py-12 bg-gray-50" id="breakdown">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Full Cost Breakdown
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Here is where the money goes on a typical ducted whole-home heat pump
            installation in a 2,000 sq ft home with existing ductwork.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Cost Component</th>
                  <th className="text-left p-3 font-semibold">Typical Range</th>
                  <th className="text-left p-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 font-semibold">Equipment (outdoor + indoor unit)</td>
                  <td className="p-3 font-semibold">$6,000–$10,000</td>
                  <td className="p-3 text-sm text-gray-600">Cold-climate and variable-speed models cost more. 2–5 ton range.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Labor (HVAC installation)</td>
                  <td className="p-3 font-semibold">$3,000–$6,000</td>
                  <td className="p-3 text-sm text-gray-600">Varies by region. Urban areas and Northeast tend higher.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Thermostat</td>
                  <td className="p-3">$200–$500</td>
                  <td className="p-3 text-sm text-gray-600">Heat pump-compatible smart thermostat recommended.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Refrigerant line set</td>
                  <td className="p-3">$300–$800</td>
                  <td className="p-3 text-sm text-gray-600">New lines if switching from AC-only or if existing lines are incompatible.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Electrical work (circuit, disconnect)</td>
                  <td className="p-3">$500–$1,500</td>
                  <td className="p-3 text-sm text-gray-600">Dedicated 30–60 amp circuit. More if panel is near capacity.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Permits and inspection</td>
                  <td className="p-3">$200–$600</td>
                  <td className="p-3 text-sm text-gray-600">Required in most jurisdictions. Some contractors include in quote.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Concrete pad / mounting</td>
                  <td className="p-3">$100–$400</td>
                  <td className="p-3 text-sm text-gray-600">For outdoor unit. Snow stands extra in cold climates.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Old system removal / disposal</td>
                  <td className="p-3">$200–$500</td>
                  <td className="p-3 text-sm text-gray-600">Refrigerant recovery required by law.</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3 font-semibold">Typical total (no surprises)</td>
                  <td className="p-3 font-semibold">$12,000–$18,000</td>
                  <td className="p-3 text-sm text-gray-600">Before rebates. Before any panel or ductwork upgrades.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="font-semibold text-blue-800 mb-1">
              What contractors include in the quote varies
            </p>
            <p className="text-sm text-blue-900">
              Some contractors bundle permits, thermostat, and disposal into a single
              price. Others itemize everything. Always ask what is and is not included
              before comparing quotes. The biggest surprise items are electrical work
              and ductwork — ask specifically if those are extra.
            </p>
          </div>
        </div>
      </section>

      {/* ---- 4. BY SYSTEM TYPE ---- */}
      <section className="py-12" id="system-types">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Cost by System Type
          </h2>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">System Type</th>
                  <th className="text-left p-3 font-semibold">Total Installed</th>
                  <th className="text-left p-3 font-semibold">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Ducted whole-home (standard)</td>
                  <td className="p-3 font-semibold">$12,000–$15,000</td>
                  <td className="p-3 text-sm text-gray-600">Homes with existing ductwork. Moderate climates.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ducted whole-home (cold-climate)</td>
                  <td className="p-3 font-semibold">$14,000–$18,000</td>
                  <td className="p-3 text-sm text-gray-600">Northern states. Rated to -15°F or below.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ductless mini-split (1 zone)</td>
                  <td className="p-3 font-semibold">$3,500–$5,500</td>
                  <td className="p-3 text-sm text-gray-600">Single room, addition, or supplemental.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ductless multi-zone (2–4)</td>
                  <td className="p-3 font-semibold">$6,000–$14,000</td>
                  <td className="p-3 text-sm text-gray-600">Homes without ductwork.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Dual-fuel (HP + gas furnace)</td>
                  <td className="p-3 font-semibold">$10,000–$14,000</td>
                  <td className="p-3 text-sm text-gray-600">Cold climates with cheap gas.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Geothermal (ground-source)</td>
                  <td className="p-3 font-semibold">$20,000–$35,000+</td>
                  <td className="p-3 text-sm text-gray-600">Highest efficiency. Requires ground loop.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="font-semibold text-amber-800 mb-1">⚠ Ductless is not always cheaper</p>
            <p className="text-sm text-amber-900">
              A single mini-split is cheap. But covering a whole house with 4–6 ductless
              zones can cost <strong>$14,000–$20,000+</strong> — more than a ducted
              system. Ductless is most cost-effective for targeted zones or homes that
              genuinely have no ductwork.
            </p>
          </div>
        </div>
      </section>

      {/* ---- 5. HIDDEN COSTS ---- */}
      <section className="py-12 bg-gray-50" id="hidden">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Hidden Costs That Push the Price Up
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            The $12,000–$18,000 range assumes a straightforward installation. These
            items can add $1,500–$8,000+ if they apply to your home.
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Electrical panel upgrade — $1,500–$3,000</p>
              <p className="text-sm text-gray-600 mt-1">
                Homes with 100-amp panels (common pre-2000) may need an upgrade to 200
                amps. This is the most common hidden cost. HEAR rebates in some states
                cover up to $4,000 for panel upgrades as a separate line item.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Ductwork repair or modification — $2,000–$5,000</p>
              <p className="text-sm text-gray-600 mt-1">
                Leaky, undersized, or disconnected ducts waste 20–40% of conditioned
                air. Heat pumps push air at lower temperatures than furnaces, so duct
                leaks are more noticeable. Sealing existing ducts costs $1,000–$2,500.
                Replacing sections costs $2,000–$5,000.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Cold-climate equipment premium — $1,000–$3,000</p>
              <p className="text-sm text-gray-600 mt-1">
                Cold-climate models with variable-speed compressors and enhanced defrost
                cost more. In northern states this is not optional — a standard heat pump
                will underperform in winter.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Refrigerant transition — $0–$500</p>
              <p className="text-sm text-gray-600 mt-1">
                The industry is moving from R-410A to R-32 and R-454B. Some state programs
                (like{" "}
                <Link href="/heat-pumps/states/ma" className="text-brand-600 hover:underline">
                  Mass Save
                </Link>) exclude R-410A systems from rebates, limiting equipment options.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Backup heat strip — $300–$800</p>
              <p className="text-sm text-gray-600 mt-1">
                Electric resistance backup for extreme cold. Standard in cold climates.
                If not included in your quote, add $300–$800.
              </p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-5">
            <p className="font-semibold text-gray-900 mb-1">
              Realistic total with common add-ons
            </p>
            <p className="text-sm text-gray-700">
              Ducted cold-climate HP + panel upgrade + duct sealing in a 2,000 sq ft
              home: <strong>$16,000–$22,000</strong> before rebates. After $5,000–$10,000
              in{" "}
              <Link href="/heat-pumps/stacking-rebates" className="text-brand-600 hover:underline">
                stacked rebates
              </Link>: <strong>$6,000–$14,000 out of pocket</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* ---- 6. AFTER REBATES ---- */}
      <section className="py-12" id="after-rebates">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What You&apos;ll Actually Pay (After Rebates)
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Rebates are the biggest variable in your final cost. Here is what a typical
            $15,000 ducted installation looks like after rebates in different state tiers.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">State Tier</th>
                  <th className="text-left p-3 font-semibold">Typical Rebates</th>
                  <th className="text-left p-3 font-semibold">You Pay</th>
                  <th className="text-left p-3 font-semibold">Example States</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3 font-semibold">Strong (income-qualified)</td>
                  <td className="p-3 font-semibold">$10,000–$15,000</td>
                  <td className="p-3 font-semibold text-green-700">$0–$5,000</td>
                  <td className="p-3 text-sm">
                    <Link href="/heat-pumps/states/wi" className="text-brand-600 hover:underline">WI</Link>,{" "}
                    <Link href="/heat-pumps/states/co" className="text-brand-600 hover:underline">CO</Link>,{" "}
                    <Link href="/heat-pumps/states/ny" className="text-brand-600 hover:underline">NY</Link>,{" "}
                    <Link href="/heat-pumps/states/md" className="text-brand-600 hover:underline">MD</Link>
                  </td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3 font-semibold">Strong (above 150% AMI)</td>
                  <td className="p-3 font-semibold">$5,000–$9,000</td>
                  <td className="p-3 font-semibold text-green-700">$6,000–$10,000</td>
                  <td className="p-3 text-sm">
                    <Link href="/heat-pumps/states/me" className="text-brand-600 hover:underline">ME</Link>,{" "}
                    <Link href="/heat-pumps/states/ma" className="text-brand-600 hover:underline">MA</Link>,{" "}
                    <Link href="/heat-pumps/states/ri" className="text-brand-600 hover:underline">RI</Link>,{" "}
                    <Link href="/heat-pumps/states/nj" className="text-brand-600 hover:underline">NJ</Link>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Moderate</td>
                  <td className="p-3 font-semibold">$1,500–$4,000</td>
                  <td className="p-3 font-semibold">$11,000–$13,500</td>
                  <td className="p-3 text-sm">
                    <Link href="/heat-pumps/states/ct" className="text-brand-600 hover:underline">CT</Link>,{" "}
                    <Link href="/heat-pumps/states/mn" className="text-brand-600 hover:underline">MN</Link>,{" "}
                    <Link href="/heat-pumps/states/or" className="text-brand-600 hover:underline">OR</Link>,{" "}
                    <Link href="/heat-pumps/states/pa" className="text-brand-600 hover:underline">PA</Link>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Limited</td>
                  <td className="p-3 font-semibold">$0–$1,500</td>
                  <td className="p-3 font-semibold">$13,500–$15,000</td>
                  <td className="p-3 text-sm">
                    <Link href="/heat-pumps/states/tx" className="text-brand-600 hover:underline">TX</Link>,{" "}
                    <Link href="/heat-pumps/states/oh" className="text-brand-600 hover:underline">OH</Link>,{" "}
                    <Link href="/heat-pumps/states/fl" className="text-brand-600 hover:underline">FL</Link>,{" "}
                    <Link href="/heat-pumps/states/id" className="text-brand-600 hover:underline">ID</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            <Link href="/heat-pumps/rebates-by-state" className="text-brand-600 hover:underline">
              Find your state&apos;s exact rebate amounts →
            </Link>
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="font-semibold text-amber-800 mb-1">⚠ HEAR changes the math dramatically</p>
            <p className="text-sm text-amber-900">
              If your state has launched HEAR and your income is below 150% AMI, a single
              HEAR rebate covers up to <strong>$8,000</strong>. Below 80% AMI, HEAR can
              cover 100% of costs. Above 150% AMI, HEAR does not apply.{" "}
              <Link href="/heat-pumps/stacking-rebates" className="text-brand-600 hover:underline">
                Stacking rules →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ---- 7. PAYBACK PERIOD ---- */}
      <section className="py-12 bg-gray-50" id="payback">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Payback Period: How Long to Break Even
          </h2>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Replacing</th>
                  <th className="text-left p-3 font-semibold">Annual Savings</th>
                  <th className="text-left p-3 font-semibold">With $5K Rebates</th>
                  <th className="text-left p-3 font-semibold">No Rebates</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Oil furnace ($4.00/gal)</td>
                  <td className="p-3 font-semibold">$1,500–$2,500/yr</td>
                  <td className="p-3 font-semibold text-green-700">3–5 years</td>
                  <td className="p-3">5–8 years</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Propane ($2.50/gal)</td>
                  <td className="p-3 font-semibold">$1,000–$1,800/yr</td>
                  <td className="p-3 font-semibold text-green-700">4–6 years</td>
                  <td className="p-3">6–10 years</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Electric resistance</td>
                  <td className="p-3 font-semibold">$800–$1,500/yr</td>
                  <td className="p-3 font-semibold text-green-700">3–5 years</td>
                  <td className="p-3">6–10 years</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Gas furnace (avg price)</td>
                  <td className="p-3 font-semibold">$300–$600/yr</td>
                  <td className="p-3">5–8 years</td>
                  <td className="p-3">12–20 years</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Gas furnace (cheap gas)</td>
                  <td className="p-3 font-semibold">$100–$300/yr</td>
                  <td className="p-3 text-amber-700">10–15 years</td>
                  <td className="p-3 text-red-700">20+ years</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5 mb-4">
            <p className="font-semibold text-green-800 mb-1">✓ Fastest payback</p>
            <p className="text-sm text-green-900">
              Replacing oil, propane, or electric resistance heat in a state with $5,000+
              rebates. Payback: 3–5 years. After that, every year is pure savings.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <p className="font-semibold text-gray-900">When payback is too long</p>
            <p className="text-sm text-gray-600 mt-1">
              If payback exceeds 12–15 years, components may need replacement before you
              break even.{" "}
              <Link href="/heat-pumps/when-not-to" className="text-brand-600 hover:underline">
                See when a heat pump doesn&apos;t make sense →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ---- 8. HOW TO GET BEST PRICE ---- */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How to Get the Best Price
          </h2>

          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <p className="font-semibold text-gray-900">Stack every available rebate</p>
                <p className="text-sm text-gray-700">
                  HEAR + utility + state credit + municipal programs can combine. The
                  difference between one rebate and full stacking can be{" "}
                  <strong>$3,000–$8,000</strong>.{" "}
                  <Link href="/heat-pumps/stacking-rebates" className="text-brand-600 hover:underline">
                    Full stacking guide →
                  </Link>
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <p className="font-semibold text-gray-900">Get 3 quotes minimum</p>
                <p className="text-sm text-gray-700">
                  Pricing varies 20–40% between contractors in the same market. Make sure
                  each quote includes the same scope.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <p className="font-semibold text-gray-900">Don&apos;t oversize the system</p>
                <p className="text-sm text-gray-700">
                  Insist on a Manual J load calculation. An oversized system costs more
                  upfront, cycles inefficiently, and creates humidity problems.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
              <div>
                <p className="font-semibold text-gray-900">Install in spring or fall</p>
                <p className="text-sm text-gray-700">
                  Off-peak scheduling means shorter waits and more negotiating room.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">5</div>
              <div>
                <p className="font-semibold text-gray-900">Use 0% financing if available</p>
                <p className="text-sm text-gray-700">
                  Programs like{" "}
                  <Link href="/heat-pumps/states/ma" className="text-brand-600 hover:underline">Mass Save HEAT Loan</Link>,{" "}
                  <Link href="/heat-pumps/states/me" className="text-brand-600 hover:underline">Efficiency Maine Home Energy Loan</Link>, and{" "}
                  <Link href="/heat-pumps/states/ct" className="text-brand-600 hover:underline">Connecticut Smart-E Loan</Link>{" "}
                  let you spread costs interest-free.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- 9. VS FURNACE LINK ---- */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How Does This Compare to a Gas Furnace?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            A heat pump replaces both your furnace and AC. When you compare total system
            cost (heat pump vs furnace + AC together), the gap is much smaller than most
            people expect — and rebates often eliminate it entirely.
          </p>

          <p className="text-gray-700 leading-relaxed">
            <Link href="/heat-pumps/vs-furnace" className="text-brand-600 hover:underline">
              Heat Pump vs Furnace: The Real Math in 2026 →
            </Link>
          </p>
        </div>
      </section>

      {/* ---- 10. FAQ ---- */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqJsonLd.mainEntity.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.name}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- 11. SEE ALSO ---- */}
      <section className="py-8 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-3">See also</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/heat-pumps/rebates-by-state" className="text-brand-600 hover:underline">
                Heat Pump Rebates by State — Where Incentives Are Still Available (2026)
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/stacking-rebates" className="text-brand-600 hover:underline">
                Can You Stack Heat Pump Rebates? State-by-State Stacking Rules
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/vs-furnace" className="text-brand-600 hover:underline">
                Heat Pump vs Furnace: The Real Math in 2026
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/when-not-to" className="text-brand-600 hover:underline">
                When NOT to Get a Heat Pump
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps" className="text-brand-600 hover:underline">
                All State Heat Pump Incentives — Hub Page
              </Link>
            </li>
            <li>
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                Federal Heat Pump Tax Credits Ended
              </Link>
            </li>
            <li>
              <Link href="/battery" className="text-brand-600 hover:underline">
                Are Home Batteries Worth It in 2026?
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* ---- 12. DISCLAIMER ---- */}
      <section className="py-8">
        <div className="container-narrow">
          <div className="bg-gray-100 rounded-lg p-6">
            <p className="text-gray-500 text-xs leading-relaxed">
              <strong>Disclaimer:</strong> This page provides general cost estimates
              for heat pump installations in 2026 based on industry averages and
              publicly available data. It does not calculate costs for your specific
              home, guarantee pricing, or represent any contractor or incentive program.
              Actual costs depend on your location, home size, ductwork condition,
              electrical capacity, equipment selection, and contractor pricing. Always
              get multiple contractor quotes and confirm current rebate amounts with
              your state energy office and utility before making HVAC decisions.
            </p>
          </div>
          <p className="text-sm text-gray-600 mt-4 text-center">
            See how your state compares →{" "}
            <Link
              href="/heat-pumps/rebates-by-state"
              className="text-brand-600 hover:underline"
            >
              Heat Pump Rebates by State (2026)
            </Link>
          </p>
          <div className="mt-4 text-center">
            <Link
              href="/heat-pumps"
              className="text-brand-600 hover:underline text-sm"
            >
              ← Back to Heat Pumps overview
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
