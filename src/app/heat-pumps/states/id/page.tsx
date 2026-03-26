import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Idaho Heat Pump Rebates 2026: $300–$2,400 Utility Rebates + OEMR Loans | Home Energy Basics",
  description:
    "Idaho Power offers $400–$800. Idaho Falls Power covers up to $2,400. Federal tax credits ended. Here\u2019s every Idaho heat pump incentive in 2026.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/id",
  },
  openGraph: {
    title: "Idaho Heat Pump Rebates 2026",
    description:
      "Utility rebates from $300–$2,400 are all that remain — the complete guide to Idaho heat pump incentives after federal credits expired.",
    url: "https://homeenergybasics.com/heat-pumps/states/id",
    type: "article",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What heat pump rebates are available in Idaho in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Idaho heat pump rebates in 2026 come exclusively from utility programs. Idaho Power offers $400\u2013$800 for ducted air-source heat pumps replacing electric heat. Avista offers $300\u2013$600 through its midstream program. Rocky Mountain Power offers $450\u2013$650. Idaho Falls Power offers the most at $2,000\u2013$2,400 for air-source systems. Federal tax credits (Sections 25C and 25D) expired December 31, 2025, and Idaho rejected IRA-funded HEAR and HOMES rebates.",
      },
    },
    {
      "@type": "Question",
      name: "Can I stack utility rebates with other incentives in Idaho?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stacking options in Idaho are extremely limited. Because Idaho rejected IRA-funded HEAR and HOMES programs and federal tax credits expired, the only layer available is your utility rebate. You can combine a utility rebate with the OEMR State Energy Loan Program (3\u20137% interest, up to $30,000), but the loan reduces financing costs rather than the purchase price. There is no state tax credit for air-source heat pumps.",
      },
    },
    {
      "@type": "Question",
      name: "Why did Idaho reject IRA heat pump rebates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In March 2025, Idaho\u2019s Joint Finance-Appropriations Committee (JFAC) voted to zero out the Office of Energy and Mineral Resources\u2019 request for $24.6 million in federal IRA funding to administer HEAR and HOMES rebate programs. The Republican legislative supermajority rejected the appropriation despite a request from Governor Brad Little. Idaho\u2019s unspent allocation was returned to the federal government for redistribution to participating states.",
      },
    },
    {
      "@type": "Question",
      name: "Do Idaho Power heat pump rebates work for homes with gas heat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Generally no. Idaho Power\u2019s Heating and Cooling Efficiency Program rebates for ducted air-source heat pumps are only available when replacing electric heating systems such as electric baseboard, ceiling cable, or electric forced-air furnaces. Homes heated by natural gas from Intermountain Gas do not qualify for Idaho Power\u2019s standard heat pump rebates, which is a significant limitation in the Boise metro area.",
      },
    },
    {
      "@type": "Question",
      name: "Are cold-climate heat pumps necessary in Idaho?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Idaho is entirely within IECC climate zones 5B and 6B. ASHRAE design temperatures range from 4\u20137\u00B0F in Boise to -2\u00B0F in Idaho Falls. Cold-climate heat pumps (ccASHP) that maintain at least 70% of rated capacity at 5\u00B0F are essential. Standard heat pumps would rely heavily on electric resistance backup below 15\u201320\u00B0F, eliminating most energy savings.",
      },
    },
  ],
};

export default function IdahoPage() {
  const idIncentive = incentives.ID;
  const formattedDate = formatDate(idIncentive.lastVerified);

  return (
    <>
      <JsonLd data={faqJsonLd} />

      {/* 1. HERO */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="container-narrow">
          <nav className="text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-brand-600">Home</Link>
            {" "}/{" "}
            <Link href="/heat-pumps" className="hover:text-brand-600">Heat Pumps</Link>
            {" "}/ Idaho
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Idaho Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Idaho homeowners installing heat pumps in 2026 face one of the weakest incentive
            landscapes in the country. Federal tax credits expired December 31, 2025, and
            Idaho&apos;s legislature rejected IRA-funded HEAR and HOMES rebates before they
            ever launched. The only remaining support comes from utility rebate programs,
            ranging from <strong>$300 to $2,400</strong> depending on your utility. This guide
            covers all major Idaho heat pump incentives available in 2026, including Idaho Power,
            Avista, Rocky Mountain Power, Idaho Falls Power, and the OEMR State Energy Loan
            Program. Here&apos;s what&apos;s actually available.
          </p>
          <p className="text-sm text-gray-500">
            Last verified: {formattedDate}
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Rates and program availability may change after this date.
          </p>
        </div>
      </section>

      {/* 2. STATUS CARD */}
      <section className="py-8">
        <div className="container-narrow">
          <StatusCard incentive={idIncentive} />
        </div>
      </section>

      {/* 3. SHORT VERSION */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Short Version</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Utility Rebates Still Active</p>
              <p className="text-sm text-green-900">
                Idaho Power offers <strong>$400–$800</strong> for ducted heat pumps replacing
                electric heat. Avista offers <strong>$300–$600</strong>. Rocky Mountain Power
                offers <strong>$450–$650</strong>.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Idaho Falls Power — Best in State</p>
              <p className="text-sm text-green-900">
                Idaho Falls Power offers <strong>$2,000–$2,400</strong> for air-source heat pumps
                plus zero-interest on-bill financing up to $10,000. By far the strongest
                program in Idaho.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ OEMR Low-Interest Loan Available</p>
              <p className="text-sm text-green-900">
                The state&apos;s Energy Loan Program offers <strong>$1,000–$30,000</strong> at
                3–7% interest for heat pump installations. Not a rebate, but reduces financing
                costs.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">✗ Federal Tax Credits Expired</p>
              <p className="text-sm text-red-900">
                Section 25C ($2,000 for heat pumps) and Section 25D (30% for geothermal) both
                ended December 31, 2025. No reinstatement legislation has been introduced.
              </p>
            </div>
            <div className="md:col-span-2 bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="font-semibold text-amber-800 mb-1">⚠ Idaho Rejected IRA Rebate Funding</p>
              <p className="text-sm text-amber-900">
                Idaho&apos;s legislature killed $24.6 million in federal HEAR and HOMES funding
                in March 2025. These rebates — worth up to $8,000 per household for low-income
                homeowners — will never launch in Idaho. Only utility rebates remain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEDERAL EXPIRED */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Federal Tax Credits — Both Expired</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <p className="text-red-900 leading-relaxed">
              <strong>Section 25C</strong> (Energy Efficient Home Improvement Credit) provided up to
              <strong> $2,000 per year</strong> for qualifying air-source heat pumps and heat pump
              water heaters. <strong>Section 25D</strong> (Residential Clean Energy Credit) provided
              <strong> 30% of total installed cost</strong> with no cap for geothermal heat pumps.
              Both credits were terminated by the One Big Beautiful Bill Act, signed July 4, 2025,
              for equipment placed in service after <strong>December 31, 2025</strong>. Equipment
              purchased in 2025 but not installed until 2026 does not qualify — installation
              completion date controls eligibility.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Homeowners who had qualifying equipment installed by December 31, 2025 can still claim
            credits on their 2025 tax return using IRS Form 5695. For geothermal systems, Section 25D
            allows unused credit to carry forward to 2026 and beyond.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
              Federal heat pump tax credit expiration explained →
            </Link>
          </p>
        </div>
      </section>

      {/* 5. HEAR / PRIMARY — Idaho Rejected IRA Funding */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            HEAR and HOMES Rebates — Idaho Rejected Federal Funding
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Home Electrification and Appliance Rebates (HEAR) program would have provided
            Idaho homeowners with point-of-sale rebates of up to <strong>$8,000</strong> for heat
            pumps, scaled by income. Households below 80% of Area Median Income (AMI) would have
            received up to 100% of costs. Households at 80–150% AMI would have received up to 50%.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            On March 19, 2025, Idaho&apos;s Joint Finance-Appropriations Committee (JFAC) voted
            to zero out the Idaho Office of Energy and Mineral Resources&apos; (OEMR) request
            for <strong>$24.6 million</strong> in federal IRA funding. Governor Brad Little had
            requested the funds, but the Republican legislative supermajority rejected the
            appropriation. Idaho&apos;s unspent allocation was returned to the federal government
            for redistribution to participating states.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-amber-800 mb-1">⚠ Common Mistake: Expecting IRA Rebates in Idaho</p>
            <p className="text-sm text-amber-900">
              The OEMR website still references these programs but explicitly warns that rebates
              are not available. Do not delay a heat pump purchase expecting HEAR or HOMES rebates
              to launch in Idaho — they will not. Focus on your utility&apos;s current rebate
              program instead.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Idaho does not offer a state income tax credit for air-source heat pumps. A Residential
            Alternative Energy Tax Deduction (Idaho Code §63-3022C) exists for geothermal heat
            pumps only, allowing deductions of 40% in year one and 20% in years two through four,
            with a maximum of <strong>$5,000 per year</strong> and <strong>$20,000 total</strong>.
          </p>
        </div>
      </section>

      {/* 6. OEMR LOAN PROGRAM (Secondary/State Tool) */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            OEMR State Energy Loan Program
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The only meaningful state-level financial tool for Idaho homeowners is the OEMR State
            Energy Loan Program, which offers low-interest loans for energy efficiency projects
            including heat pumps. This is not a rebate — it reduces financing costs but not
            the purchase price.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Term</th>
                  <th className="text-left p-3 font-semibold">Interest Rate</th>
                  <th className="text-left p-3 font-semibold">Loan Range</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">3 years</td>
                  <td className="p-3 font-semibold">3%</td>
                  <td className="p-3">$1,000–$30,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">5 years</td>
                  <td className="p-3 font-semibold">5%</td>
                  <td className="p-3">$1,000–$30,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">7 years</td>
                  <td className="p-3 font-semibold">7%</td>
                  <td className="p-3">$1,000–$30,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            A $100 non-refundable application fee applies. The project must be approved and funded
            before installation begins, and a licensed Idaho contractor is required. Applications
            are processed first-come, first-served through December 31, 2026.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="font-semibold text-blue-800 mb-1">Idaho Falls Power Offers Zero-Interest Financing</p>
            <p className="text-sm text-blue-900">
              If you live in Idaho Falls, the municipal utility offers up to <strong>$10,000</strong> in
              zero-interest on-bill financing over 60 months — significantly better than the OEMR loan.
              This can be combined with Idaho Falls Power&apos;s rebates of <strong>$2,000–$2,400</strong> for
              air-source heat pumps.
            </p>
          </div>
        </div>
      </section>

      {/* 7. UTILITY PROGRAMS */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Utility Rebate Programs</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Utility rebates are the primary financial support for Idaho heat pump installations
            in 2026. Programs vary significantly by territory — from <strong>$300</strong> in
            Avista&apos;s service area to <strong>$2,400</strong> from Idaho Falls Power.
          </p>

          {/* Idaho Power */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Idaho Power — Heating and Cooling Efficiency Program
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Idaho Power serves southern Idaho including Boise, Nampa, Meridian, and Twin Falls.
            Rebates are only available when replacing electric heating systems — homes heated by
            natural gas from Intermountain Gas generally do not qualify.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Replacing</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                  <th className="text-left p-3 font-semibold">Min. Efficiency</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Ducted ASHP (existing home)</td>
                  <td className="p-3">Electric baseboard/ceiling cable</td>
                  <td className="p-3 font-semibold">$400</td>
                  <td className="p-3">7.2 HSPF2</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ducted ASHP (new construction)</td>
                  <td className="p-3">N/A</td>
                  <td className="p-3 font-semibold">$800</td>
                  <td className="p-3">7.2 HSPF2</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ground-source heat pump</td>
                  <td className="p-3">Electric or propane</td>
                  <td className="p-3 font-semibold">$3,000</td>
                  <td className="p-3">3.5 COP</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Open-loop water-source HP</td>
                  <td className="p-3">Electric</td>
                  <td className="p-3 font-semibold">$1,000</td>
                  <td className="p-3">3.5 COP</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Avista */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Avista Utilities — Midstream HVAC Program
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Avista serves northern Idaho including Coeur d&apos;Alene, Moscow, and Lewiston. Rebates
            flow through a midstream program — discounts appear on the contractor invoice rather
            than as a customer-filed rebate.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Tier 1 (8.1 HSPF2)</th>
                  <th className="text-left p-3 font-semibold">Tier 2 (8.5 HSPF2)</th>
                  <th className="text-left p-3 font-semibold">Tier 3 (9.5 HSPF2)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Ducted ASHP (retrofit)</td>
                  <td className="p-3 font-semibold">$300</td>
                  <td className="p-3 font-semibold">$400</td>
                  <td className="p-3 font-semibold">$600</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Mini-split (retrofit)</td>
                  <td className="p-3 font-semibold">$300</td>
                  <td className="p-3 font-semibold">$400</td>
                  <td className="p-3 font-semibold">$600</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">HPWH (min 2.1 UEF)</td>
                  <td className="p-3 font-semibold" colSpan={2}>$500 (retrofit)</td>
                  <td className="p-3 font-semibold">$150 (new construction)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Rocky Mountain Power */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Rocky Mountain Power — Wattsmart Homes
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Rocky Mountain Power serves southeastern Idaho including Pocatello and parts of the
            Idaho Falls area. Equipment must be the primary heat source serving at least 80% of
            conditioned space.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Requirement</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Cold-climate ASHP upgrade</td>
                  <td className="p-3">8.5 HSPF2 / 16.0 SEER2, NEEP ccASHP list</td>
                  <td className="p-3 font-semibold">$450</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Electric resistance conversion to ASHP</td>
                  <td className="p-3">7.5 HSPF2 / 14.3 SEER2</td>
                  <td className="p-3 font-semibold">$650</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">HPWH Tier 1</td>
                  <td className="p-3">Qualified products list</td>
                  <td className="p-3 font-semibold">$400</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">HPWH Tier 2+</td>
                  <td className="p-3">Qualified products list</td>
                  <td className="p-3 font-semibold">$550</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Idaho Falls Power */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Idaho Falls Power — Best Incentives in Idaho
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Idaho Falls Power, the municipal utility serving Idaho Falls, offers the strongest
            heat pump incentive program in the state. Rebates are substantially higher than any
            investor-owned utility, and zero-interest on-bill financing is available.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Conversion Type</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Ducted ASHP</td>
                  <td className="p-3">From electric forced-air furnace</td>
                  <td className="p-3 font-semibold">$2,000</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Variable-speed ASHP</td>
                  <td className="p-3">From electric forced-air furnace</td>
                  <td className="p-3 font-semibold">$2,400</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ductless heat pump</td>
                  <td className="p-3">From zonal electric heat</td>
                  <td className="p-3 font-semibold">$1,600</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ground-source HP</td>
                  <td className="p-3">With desuperheater</td>
                  <td className="p-3 font-semibold">$3,150</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">HPWH 50+ gal (Tier 4)</td>
                  <td className="p-3">Electric tank replacement</td>
                  <td className="p-3 font-semibold">$1,620</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* BPA Co-ops */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            BPA-Funded Electric Cooperatives
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Several Idaho electric cooperatives offer BPA-funded heat pump rebates. Fall River
            Electric Cooperative offers up to <strong>$850</strong> for ASHP conversions
            and <strong>$2,500</strong> for ground-source systems. Clearwater Power
            offers <strong>$750</strong> for heat pump water heaters. Contact your cooperative
            for current program details.
          </p>
        </div>
      </section>

      {/* 8. LOCAL PROGRAMS — Skip (no city programs; Idaho Falls covered under utilities) */}

      {/* 9. STACKING */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Incentives Stack in Idaho</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Stacking options in Idaho are extremely limited compared to states that participate in
            IRA rebate programs. With no federal credits, no HEAR or HOMES rebates, and no state
            tax credit for air-source heat pumps, utility rebates are the only direct cost
            reduction available. The OEMR loan program reduces financing costs but does not
            reduce the purchase price.
          </p>

          <div className="space-y-4 mb-8">
            {/* Above 150% AMI — Idaho Power territory */}
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 150% AMI — Idaho Power Territory (Boise Area, Gas Heat)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Federal tax credit (25C): $0 (expired)</li>
                <li>HEAR rebate: $0 (Idaho rejected funding)</li>
                <li>Idaho Power rebate: $0 (gas-heated homes do not qualify)</li>
                <li>State tax credit: $0 (none for air-source HP)</li>
              </ul>
              <p className="font-semibold text-gray-900 mt-2">Realistic maximum: ~$0</p>
            </div>

            {/* Above 150% AMI — Idaho Power territory, electric heat */}
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 150% AMI — Idaho Power Territory (Electric Heat)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Federal tax credit (25C): $0 (expired)</li>
                <li>HEAR rebate: $0 (Idaho rejected funding)</li>
                <li>Idaho Power rebate: $400–$800</li>
                <li>State tax credit: $0</li>
              </ul>
              <p className="font-semibold text-gray-900 mt-2">Realistic maximum: ~$400–$800</p>
            </div>

            {/* Idaho Falls Power — best case */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">Any Income — Idaho Falls Power Territory</p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>Federal tax credit (25C): $0 (expired)</li>
                <li>HEAR rebate: $0 (Idaho rejected funding)</li>
                <li>Idaho Falls Power rebate: $2,000–$2,400</li>
                <li>Idaho Falls Power zero-interest loan: up to $10,000</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$2,000–$2,400 + zero-interest financing</p>
            </div>
          </div>

          {/* What you'll pay */}
          <div className="bg-gray-100 rounded-lg p-5">
            <p className="font-semibold text-gray-900 mb-1">What You&apos;ll Actually Pay</p>
            <p className="text-sm text-gray-700">
              For a typical <strong>$15,000–$18,000</strong> whole-home ducted heat pump system,
              most Idaho homeowners will pay <strong>$14,200–$17,700 out of pocket</strong> after
              utility rebates. Idaho Falls Power customers are the exception, with net costs
              of <strong>$12,600–$16,000</strong>. Gas-heated homes in Boise may qualify
              for <strong>$0 in rebates</strong> from Idaho Power. There are no state tax credits,
              no HEAR/HOMES rebates, and no federal credits to stack.
            </p>
          </div>
        </div>
      </section>

      {/* 10. WEATHERIZATION */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Idaho Weatherization Assistance Program</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Idaho Weatherization Assistance Program (WAP), administered by the Idaho Department
            of Health and Welfare through local Community Action Agencies, provides free energy
            efficiency upgrades to households at or below 200% of the Federal Poverty Level.
            While the program primarily covers insulation, air sealing, and duct work, heating
            system replacement — potentially including heat pumps — can be included if identified
            as cost-effective during the required energy audit.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Priority goes to families with elderly, disabled, or young members. Wait times can
            extend to three years due to limited funding. Apply through your local Community
            Action Agency or by dialing <strong>2-1-1</strong> (Idaho CareLine).
          </p>
          <p className="text-gray-700 leading-relaxed">
            Idaho Power also runs a separate income-qualified weatherization program offering up
            to <strong>$6,000</strong> in free upgrades for electrically heated homes. Contact
            Idaho Power or your local Community Action Agency for eligibility details.
          </p>
        </div>
      </section>

      {/* 11. CLIMATE CONTEXT */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Idaho Climate Context</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Idaho is entirely within IECC climate zones 5B and 6B. Cold-climate heat pumps
            are essential across the entire state — standard heat pumps would rely heavily on
            electric resistance backup below 15–20°F, eliminating most energy savings.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">City</th>
                  <th className="text-left p-3 font-semibold">Design Temp (99%)</th>
                  <th className="text-left p-3 font-semibold">Annual HDD (Base 65°F)</th>
                  <th className="text-left p-3 font-semibold">Climate Zone</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Boise</td>
                  <td className="p-3 font-semibold">4–7°F</td>
                  <td className="p-3">~5,800–5,900</td>
                  <td className="p-3">5B</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Coeur d&apos;Alene</td>
                  <td className="p-3 font-semibold">5–10°F</td>
                  <td className="p-3">~6,400–6,800</td>
                  <td className="p-3">5B</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Twin Falls</td>
                  <td className="p-3 font-semibold">1–5°F</td>
                  <td className="p-3">~6,100–6,400</td>
                  <td className="p-3">5B</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Pocatello</td>
                  <td className="p-3 font-semibold">1°F</td>
                  <td className="p-3">~6,500–6,800</td>
                  <td className="p-3">6B</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Idaho Falls</td>
                  <td className="p-3 font-semibold">-2°F</td>
                  <td className="p-3">~7,200–7,600</td>
                  <td className="p-3">6B</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-green-800 mb-1">✓ Best Candidates for Heat Pumps in Idaho</p>
            <p className="text-sm text-green-900">
              Homes currently heated with electric resistance (baseboard, ceiling cable, or
              electric forced-air) benefit the most — they qualify for utility rebates and
              will see the largest energy savings. Propane-heated rural homes without natural
              gas access are also strong candidates, given propane&apos;s high and volatile
              pricing. Gas-heated homes in Boise have the weakest economic case due to $0 in
              utility rebates from Idaho Power and low natural gas prices.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Dual-fuel systems (heat pump paired with a gas furnace) are particularly relevant
            for the Boise metro area, where Intermountain Gas Company serves the majority of
            homes. This configuration lets the heat pump handle heating efficiently down to
            approximately 25–35°F while the gas furnace covers the coldest periods.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Pairing a heat pump with a{" "}
            <Link href="/battery" className="text-brand-600 hover:underline">
              home battery system
            </Link>{" "}
            can help manage electricity costs during peak-rate hours, though Idaho&apos;s
            relatively low electricity rates make the payback longer than in states with
            higher rates or strong time-of-use pricing.
          </p>
        </div>
      </section>

      {/* 12. HOW TO APPLY */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Apply for Idaho Heat Pump Rebates</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Most Idaho utility rebates are claimed through the installing contractor or submitted
            directly to your utility after installation. The OEMR loan requires pre-approval.
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-gray-900">Identify your electric utility</p>
                <p className="text-sm text-gray-700">
                  Rebate amounts and eligibility rules differ by utility. Check whether you are
                  served by Idaho Power, Avista, Rocky Mountain Power, Idaho Falls Power, or an
                  electric cooperative.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900">Choose a participating contractor</p>
                <p className="text-sm text-gray-700">
                  Idaho Power and Rocky Mountain Power require program-eligible contractors.
                  Avista&apos;s midstream program requires a participating dealer. Confirm your
                  contractor is enrolled in the program before scheduling installation.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-900">Confirm equipment meets efficiency requirements</p>
                <p className="text-sm text-gray-700">
                  Each utility has specific HSPF2, SEER2, and COP minimums. Rocky Mountain Power
                  requires equipment on the NEEP cold-climate heat pump list. Verify before
                  purchasing.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <p className="font-semibold text-gray-900">Apply for the OEMR loan first (if using)</p>
                <p className="text-sm text-gray-700">
                  If you plan to use the OEMR State Energy Loan Program, apply and receive
                  approval before installation begins. The loan requires a licensed Idaho
                  contractor and a $100 application fee.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                5
              </div>
              <div>
                <p className="font-semibold text-gray-900">Submit your rebate application</p>
                <p className="text-sm text-gray-700">
                  For Avista, the rebate appears as a line-item discount on your contractor
                  invoice. For Idaho Power and Rocky Mountain Power, submit the application
                  after installation (within 90 days for Rocky Mountain Power). Idaho Falls
                  Power processes rebates through their energy efficiency office.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. WHAT TO WATCH */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Watch</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">IRA Funding Runway</p>
              <p className="text-sm text-gray-600 mt-1">
                The One Big Beautiful Bill Act rescinded unobligated IRA rebate funds. States
                that already signed grant agreements retain their allocations, but Idaho never
                reached that stage. The possibility of Idaho accessing IRA rebate funding in the
                future is effectively zero under current law.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Federal Credit Reinstatement</p>
              <p className="text-sm text-gray-600 mt-1">
                No legislation to reinstate Sections 25C or 25D has been introduced as of March
                2026. A change in political control would be required for reinstatement to become
                plausible. Do not delay an installation expecting credits to return.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Utility Program Budgets</p>
              <p className="text-sm text-gray-600 mt-1">
                Utility rebate programs operate on annual budgets and can be modified or
                exhausted. Rocky Mountain Power&apos;s Idaho program was updated March 2, 2026.
                Check your utility&apos;s program page before purchasing to confirm current
                rebate amounts and availability.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Intermountain Gas Policy</p>
              <p className="text-sm text-gray-600 mt-1">
                Intermountain Gas, the dominant gas utility in the Boise metro, does not offer
                heat pump rebates and restricts heat pump use as a condition of its gas equipment
                rebates. Any change in this policy would significantly expand the addressable
                market for heat pumps in Idaho&apos;s largest metro area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 14. FAQ */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqJsonLd.mainEntity.map((faq: { name: string; acceptedAnswer: { text: string } }, index: number) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.name}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 15. SEE ALSO */}
      <section className="py-8 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-3">See also</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/heat-pumps/states/mt" className="text-brand-600 hover:underline">
                Montana Heat Pump Rebates
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/wa" className="text-brand-600 hover:underline">
                Washington Heat Pump Rebates
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/ut" className="text-brand-600 hover:underline">
                Utah Heat Pump Rebates
              </Link>
            </li>
            <li>
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                Federal Heat Pump Tax Credit Expiration Explained
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps" className="text-brand-600 hover:underline">
                All State Heat Pump Incentives
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* 16. SOURCES */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="space-y-2 text-sm">
            {idIncentive.sources.map((source: { label: string; url: string }, index: number) => (
              <li key={index}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 hover:underline"
                >
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 17. DISCLAIMER */}
      <section className="py-8">
        <div className="container-narrow">
          <div className="bg-gray-100 rounded-lg p-6">
            <p className="text-gray-500 text-xs leading-relaxed">
              <strong>Disclaimer:</strong> This page covers the main statewide, utility, and IRA
              heat pump incentives available to Idaho homeowners in 2026. It does not calculate
              savings, guarantee eligibility, or represent any incentive program. Idaho&apos;s
              legislature rejected IRA rebate funding, and federal tax credits have expired —
              verify all program details before making purchasing decisions. We verify status
              regularly but programs can change without notice. Always confirm current amounts
              and eligibility with your utility and contractor before making decisions.
            </p>
          </div>
              <p className="text-sm text-gray-600 mt-4">
            See how this state compares →{" "}
            <Link
              href="/heat-pumps/rebates-by-state"
              className="text-brand-600 hover:underline"
            >
              Heat Pump Rebates by State (2026)
            </Link>
          </p>
      <div className="mt-6 text-center">
            <Link href="/heat-pumps" className="text-brand-600 hover:underline text-sm">
              ← Back to Heat Pumps overview
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
