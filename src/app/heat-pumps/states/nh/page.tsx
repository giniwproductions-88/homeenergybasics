import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "New Hampshire Heat Pump Rebates 2026: $2,000/Ton NHSaves + $650 Accelerator | Home Energy Basics",
  description:
    "NHSaves offers up to $2,000/ton. NE Accelerator adds $650. HEAR up to $8,000 coming mid-2026. Federal credits ended. Every NH heat pump incentive in 2026.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/nh",
  },
  openGraph: {
    title: "New Hampshire Heat Pump Rebates 2026",
    description:
      "NHSaves up to $2,000/ton plus $650 NE Accelerator — the complete guide to New Hampshire heat pump incentives after federal credits expired.",
    url: "https://homeenergybasics.com/heat-pumps/states/nh",
    type: "article",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What heat pump rebates are available in New Hampshire in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NHSaves offers $250 per ton (standard) or up to $2,000 per ton (replacing electric resistance heat, Eversource/Liberty/Unitil as of March 23, 2026). NHEC offers up to $1,250 per ton for electric resistance replacement. The New England Heat Pump Accelerator adds $650 per outdoor unit. Heat pump water heaters receive $900 from NHSaves plus $300 from the Accelerator. There is no federal tax credit for 2026 installations. HEAR rebates (up to $8,000) are expected to launch mid-Summer 2026.",
      },
    },
    {
      "@type": "Question",
      name: "Can I stack NHSaves and HEAR rebates in New Hampshire?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NHSaves rebates (ratepayer-funded) can stack with HEAR (federally funded) since they come from different funding sources. However, the NE Heat Pump Accelerator (also federally funded via CPRG grants) likely will not stack with HEAR. Total combined incentives cannot exceed 100% of project cost.",
      },
    },
    {
      "@type": "Question",
      name: "What refrigerant is required for NHSaves rebates in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Starting in 2026, NHSaves requires R-32 or R-454B refrigerant. R-410A systems are no longer on the NHSaves Heat Pump Qualified Product List and do not qualify for any rebate. Confirm your contractor is installing equipment with an approved refrigerant before signing a contract.",
      },
    },
    {
      "@type": "Question",
      name: "Should I wait for HEAR before installing a heat pump in New Hampshire?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you are replacing oil or propane and your current system still works, waiting for HEAR could save $7,500\u2013$8,000 \u2014 far more than the ~$1,400 available today from NHSaves plus the Accelerator. However, if your system has failed or you are replacing electric resistance heat (which qualifies for up to $2,000/ton now at Eversource/Liberty/Unitil), installing sooner may make sense. Projects started before HEAR launches are not eligible.",
      },
    },
    {
      "@type": "Question",
      name: "Who administers New Hampshire\u2019s heat pump programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NHSaves rebates are administered jointly by New Hampshire\u2019s four electric utilities: Eversource, Liberty, Unitil, and NH Electric Cooperative. The NE Heat Pump Accelerator is administered by the Northeast Energy Efficiency Partnerships (NEEP). HEAR will be administered by the NH Department of Energy when it launches.",
      },
    },
  ],
};

export default function NewHampshirePage() {
  const nhIncentive = incentives.NH;
  const formattedDate = formatDate(nhIncentive.lastVerified);

  return (
    <>
      <JsonLd data={faqJsonLd} />

      {/* 1. Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="container-narrow">
          <nav className="text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-brand-600">Home</Link>
            {" "}/{" "}
            <Link href="/heat-pumps" className="hover:text-brand-600">Heat Pumps</Link>
            {" "}/ New Hampshire
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            New Hampshire Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            New Hampshire heat pump incentives have two layers active right now: NHSaves utility rebates (up to <strong>$2,000 per ton</strong> for electric resistance replacement) and the new <strong>$650</strong> NE Heat Pump Accelerator. Federal tax credits expired December 31, 2025, and the state&apos;s HEAR program has not launched yet. This guide covers all major New Hampshire heat pump incentives available in 2026, including NHSaves, the NE Accelerator, HEAR status, and financing options. Here&apos;s what&apos;s actually available.
          </p>
          <p className="text-sm text-gray-500">
            Last verified: {formattedDate}
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Rates and program availability may change after this date.
          </p>
        </div>
      </section>

      {/* 2. Status Card */}
      <section className="py-8">
        <div className="container-narrow">
          <StatusCard incentive={nhIncentive} />
        </div>
      </section>

      {/* 3. Short Version */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Short Version</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">&#10003; NHSaves Utility Rebates</p>
              <p className="text-sm text-green-900">$250/ton standard or up to $2,000/ton replacing electric resistance (Eversource/Liberty/Unitil, as of 3/23/2026). NHEC offers up to $1,250/ton. $900 for heat pump water heaters.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">&#10003; NE Heat Pump Accelerator: $650/Unit</p>
              <p className="text-sm text-green-900">$650 per cold-climate heat pump outdoor unit plus $300 per HPWH. Instant point-of-sale discount through participating distributors. Stacks with NHSaves.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">&#10003; Total Potential Savings</p>
              <p className="text-sm text-green-900">$900 (standard oil replacement) to $10,650+ (electric resistance replacement with Accelerator). If HEAR launches, income-qualified households could reach ~$11,000+ total incentives.</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">&#10007; Federal Tax Credits Expired</p>
              <p className="text-sm text-red-900">Section 25C ($2,000) and Section 25D (30% geothermal) both expired December 31, 2025. No replacement legislation exists.</p>
            </div>
            <div className="md:col-span-2 bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="font-semibold text-amber-800 mb-1">&#9888; HEAR Approved But Not Launched &mdash; Projects Before Launch Don&apos;t Qualify</p>
              <p className="text-sm text-amber-900">New Hampshire&apos;s $34.7 million HEAR allocation is approved but the program has not launched. NH DOE expects mid-Summer 2026. Projects started before the official launch date are not eligible for retroactive rebates. R-410A systems are banned from the NHSaves Qualified Product List for 2026 &mdash; only R-32 or R-454B qualify.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Federal Expired */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Federal Tax Credits Have Ended</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <p className="text-red-900 leading-relaxed">
              <strong>Section 25C</strong> (Energy Efficient Home Improvement Credit) and{" "}
              <strong>Section 25D</strong> (Residential Clean Energy Credit) both expired on{" "}
              <strong>December 31, 2025</strong>, under the One Big Beautiful Bill Act (Public Law 119-21).
              The 25C credit previously covered up to <strong>$2,000</strong> for qualifying heat pumps.
              The 25D credit covered <strong>30% of installed cost</strong> for geothermal heat pumps
              with no dollar cap. Neither credit is available for systems installed in 2026.
              For details, see our{" "}
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-red-700 underline hover:text-red-900">
                federal heat pump tax credit explainer
              </Link>.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Equipment purchased in 2025 but not installed until 2026 does not qualify. The &quot;placed in service&quot; date is when installation was complete and the system was operational. Homeowners who completed installations before the deadline but lacked sufficient tax liability may carry forward unused credit amounts.
          </p>
        </div>
      </section>

      {/* 5. NHSaves / Primary Utility Program */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">NHSaves Utility Rebates &mdash; Active Now</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            NHSaves is the umbrella energy efficiency program coordinating across New Hampshire&apos;s four electric utilities: Eversource, Liberty, Unitil, and NH Electric Cooperative. The 2026 program year covers installations through December 30, 2026, with rebate forms due by January 30, 2027.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-blue-800 mb-1">2026 Refrigerant Change</p>
            <p className="text-sm text-blue-900">R-410A is no longer on the NHSaves Heat Pump Qualified Product List. Only systems using <strong>R-32 or R-454B</strong> refrigerant qualify for rebates. Confirm your contractor is installing eligible equipment before signing a contract.</p>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Eversource, Liberty, and Unitil (Identical Structure)</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                  <th className="text-left p-3 font-semibold">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Air-source heat pump &mdash; standard tier</td>
                  <td className="p-3 font-semibold">$250/ton</td>
                  <td className="p-3">Replacing oil, gas, or propane. No pre-approval needed.</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Air-source heat pump &mdash; enhanced tier</td>
                  <td className="p-3 font-semibold">$2,000/ton</td>
                  <td className="p-3">Replacing electric resistance. Pre-verification required at NHSaves.com/GetVerified. Effective 3/23/2026 ($1,250/ton for installs 1/1&ndash;3/22/2026).</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">$900</td>
                  <td className="p-3">ENERGY STAR certified, UEF &#8805; 3.30 (or &#8805; 2.80 for 120V/15A).</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Central air conditioner</td>
                  <td className="p-3 font-semibold">$70/ton</td>
                  <td className="p-3">ENERGY STAR certified.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Wi-Fi thermostat (with HP)</td>
                  <td className="p-3 font-semibold">$85</td>
                  <td className="p-3">Limit 1 per zone per account.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            Maximum <strong>5 tons per account</strong> ($1,250 at standard tier / <strong>$10,000</strong> at enhanced tier). Rebate is calculated as AHRI cooling capacity (BTU) &#247; 12,000 &#215; per-ton rate.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">NH Electric Cooperative &mdash; Different Structure</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            NHEC uses an adder system rather than a single enhanced tier. All adders require the heat pump to offset at least 80% of total heating load:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Tier</th>
                  <th className="text-left p-3 font-semibold">Amount</th>
                  <th className="text-left p-3 font-semibold">Requirement</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Standard</td>
                  <td className="p-3 font-semibold">$250/ton</td>
                  <td className="p-3">Same as other utilities</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">+ Whole-house adder</td>
                  <td className="p-3 font-semibold">+$250/ton</td>
                  <td className="p-3">&#8805;80% heating load, replacing fossil fuel</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">+ Weatherization adder</td>
                  <td className="p-3 font-semibold">+$250/ton</td>
                  <td className="p-3">Also completing Home Energy Performance work same year</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Max for fossil-fuel switchers</td>
                  <td className="p-3 font-semibold">$750/ton</td>
                  <td className="p-3">Standard + whole-house + weatherization</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Electric resistance retrofit</td>
                  <td className="p-3 font-semibold">$1,250/ton</td>
                  <td className="p-3">Separate path, requires &#8805;80% load offset</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Equipment Requirements (All Utilities)</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Metric</th>
                  <th className="text-left p-3 font-semibold">Ducted</th>
                  <th className="text-left p-3 font-semibold">Ductless</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">SEER2</td>
                  <td className="p-3">&#8805; 15.2</td>
                  <td className="p-3">&#8805; 16.0</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">EER2</td>
                  <td className="p-3">&#8805; 10.0</td>
                  <td className="p-3">&#8805; 9.0</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">HSPF2</td>
                  <td className="p-3">&#8805; 8.1</td>
                  <td className="p-3">&#8805; 9.5</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">COP at 5&#176;F</td>
                  <td className="p-3">&#8805; 1.75</td>
                  <td className="p-3">&#8805; 1.75</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. NE Heat Pump Accelerator */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">New England Heat Pump Accelerator &mdash; $650 Per Unit</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Launched February 2026, this <strong>$450 million</strong> five-state regional program (CT, ME, MA, NH, RI) provides instant point-of-sale discounts through participating distributors. It operates as a &quot;midstream&quot; incentive &mdash; distributors receive the payment and pass savings through to contractors and consumers.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Incentive</th>
                  <th className="text-left p-3 font-semibold">Valid Through</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Cold-climate ASHP (&lt;5.4 tons)</td>
                  <td className="p-3 font-semibold">$650/outdoor unit</td>
                  <td className="p-3">Q3 2029</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">ENERGY STAR HPWH</td>
                  <td className="p-3 font-semibold">$300/unit</td>
                  <td className="p-3">Q3 2029</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            These incentives <strong>stack with NHSaves rebates</strong> (different funding sources &mdash; ratepayer vs. federal CPRG grants). However, they will <strong>likely not stack with HEAR</strong> when it launches, since both are federally funded.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="font-semibold text-amber-800 mb-1">&#9888; Common Mistake: Assuming the Accelerator Applies Automatically</p>
            <p className="text-sm text-amber-900">Not all distributors are enrolled in the Accelerator program yet. Ask your contractor to confirm the $650 discount is applied at purchase. If they&apos;re unfamiliar, point them to nehpa.org.</p>
          </div>
        </div>
      </section>

      {/* 7. HEAR Status */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">HEAR Rebates: Approved But Not Yet Launched</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            New Hampshire&apos;s HEAR program (Home Electrification and Appliance Rebates) has been approved by the U.S. Department of Energy. The state&apos;s <strong>$34.7 million</strong> allocation has been received, but the NH Department of Energy is still selecting a program implementer. Launch is currently expected <strong>mid-Summer 2026</strong>.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Income Level</th>
                  <th className="text-left p-3 font-semibold">Coverage</th>
                  <th className="text-left p-3 font-semibold">Max HP Rebate</th>
                  <th className="text-left p-3 font-semibold">Household Cap</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Below 80% AMI</td>
                  <td className="p-3">100% of project cost</td>
                  <td className="p-3 font-semibold">$8,000</td>
                  <td className="p-3">$14,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">80&ndash;150% AMI</td>
                  <td className="p-3">50% of project cost</td>
                  <td className="p-3 font-semibold">$8,000</td>
                  <td className="p-3">$14,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Above 150% AMI</td>
                  <td className="p-3 text-gray-500">Not eligible</td>
                  <td className="p-3 text-gray-500">&mdash;</td>
                  <td className="p-3 text-gray-500">&mdash;</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 8. Financing */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Financing Options</h2>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Program</th>
                  <th className="text-left p-3 font-semibold">Rate</th>
                  <th className="text-left p-3 font-semibold">Amount</th>
                  <th className="text-left p-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">NHSaves Energy Efficiency Loan (Eastern Bank)</td>
                  <td className="p-3 font-semibold">0% APR</td>
                  <td className="p-3">$1,000&ndash;$15,000, 12&ndash;84 months</td>
                  <td className="p-3 font-semibold">Available</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Eversource Clean Energy Fund Loan (NEIF)</td>
                  <td className="p-3 font-semibold">0% APR</td>
                  <td className="p-3">Up to $10,000, 10-year term</td>
                  <td className="p-3 text-gray-500">Fully subscribed</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed">
            The NHSaves loan requires a Home Energy Performance audit first. The Eversource Clean Energy Fund is currently not accepting new applications.
          </p>
        </div>
      </section>

      {/* 9. Stacking */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Programs Stack</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            NHSaves (ratepayer-funded) stacks with the NE Accelerator (federal CPRG). When HEAR launches, it should stack with NHSaves but likely not with the Accelerator (both federally funded). The scenarios below show a typical <strong>3-ton ducted cold-climate system</strong> installed for <strong>$15,000</strong>.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 150% AMI &mdash; Replacing Oil (Today)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>NHSaves standard tier (3 &#215; $250): $750</li>
                <li>NE Heat Pump Accelerator (1 outdoor unit): $650</li>
                <li>Federal tax credit: $0 (expired)</li>
                <li>HEAR: $0 (not eligible above 150% AMI)</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$1,400</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">80&ndash;150% AMI &mdash; Replacing Oil (After HEAR Launches)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>HEAR (50% of $15,000, capped at $8,000): $7,500</li>
                <li>NHSaves standard tier (3 &#215; $250): $750</li>
                <li>NE Accelerator (may not stack with HEAR): $0&ndash;$650</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum if HEAR launches: ~$8,250&ndash;$8,900</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">Below 80% AMI &mdash; After HEAR Launches (Best Case)</p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>HEAR (100% of costs, up to $8,000): $8,000</li>
                <li>NHSaves standard tier (3 &#215; $250): $750</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$8,750+</p>
              <p className="text-sm text-green-800 mt-1">NHSaves Income-Eligible services (up to $15,000) may cover remaining costs for lowest-income households through Community Action Agencies.</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-5">
            <p className="font-semibold text-gray-900 mb-1">What You&apos;ll Actually Pay</p>
            <p className="text-sm text-gray-700">
              For a 3-ton system installed for $15,000: most homeowners above 150% AMI pay <strong>$13,600 out of pocket</strong> today (NHSaves + Accelerator only). Electric resistance replacements at Eversource/Liberty/Unitil pay as little as <strong>$8,350</strong> ($6,000 enhanced rebate + $650 Accelerator). When HEAR launches, income-qualifying households could see costs drop to <strong>$6,100&ndash;$6,750</strong> or less.
            </p>
          </div>
        </div>
      </section>

      {/* 10. Weatherization */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Income-Eligible Programs and Weatherization</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>NHSaves Income-Eligible Energy Assistance</strong> provides up to <strong>$15,000 in total services</strong> including energy audits, insulation, heating/cooling equipment, and appliance upgrades. Delivered through Community Action Agencies.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The <strong>Weatherization Assistance Program (WAP)</strong> provides free weatherization services for households at or below <strong>60% of State Median Income</strong>. Recipients of SSI, TANF, LIHEAP, or aid for families with children auto-qualify. Heat pumps can be installed through the Building Weatherization Program if the energy audit demonstrates cost-effectiveness.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <p className="font-semibold text-green-800 mb-1">&#10003; Best Candidates for a Heat Pump in New Hampshire</p>
            <p className="text-sm text-green-900">Homeowners replacing oil or propane heating (58% of NH households &mdash; highest fuel cost savings). Homeowners replacing electric resistance heat ($2,000/ton enhanced rebate at Eversource/Liberty/Unitil). Income-qualifying households who can wait for HEAR (up to $8,000). Anyone with a failed system who needs immediate replacement &mdash; $1,400+ available today.</p>
          </div>
        </div>
      </section>

      {/* 11. Climate Context */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Climate Context</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            New Hampshire is firmly cold-climate territory, and roughly <strong>58% of households</strong> heat with petroleum fuels (oil and propane), making it one of the most compelling states for heat pump economics.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Location</th>
                  <th className="text-left p-3 font-semibold">ASHRAE 99% Design Temp</th>
                  <th className="text-left p-3 font-semibold">Climate Zone</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Manchester</td>
                  <td className="p-3 font-semibold">~&#8722;2&#176;F</td>
                  <td className="p-3">5A</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Concord</td>
                  <td className="p-3 font-semibold">~&#8722;3&#176;F</td>
                  <td className="p-3">6A</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Berlin (northern NH)</td>
                  <td className="p-3 font-semibold">~&#8722;13&#176;F</td>
                  <td className="p-3">6A</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            At NH electricity rates ($0.22&ndash;$0.26/kWh), a cold-climate heat pump costs roughly <strong>$2,000&ndash;$2,300/year</strong> to operate a typical home &mdash; compared to <strong>$2,800&ndash;$3,200/year</strong> for oil or propane. Annual savings of <strong>$600&ndash;$1,200</strong> depending on the fuel being displaced.
          </p>
          <p className="text-gray-700 leading-relaxed">
            For more on how home batteries interact with heat pumps and time-of-use rates, see our{" "}
            <Link href="/battery" className="text-brand-600 hover:underline">home battery guide</Link>.
          </p>
        </div>
      </section>

      {/* 12. How to Apply */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Apply</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Since utility rebates are the primary active incentive, the application process depends on your electric utility:
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <p className="font-semibold text-gray-900">Check Your Utility</p>
                <p className="text-sm text-gray-700">Your electric utility determines your rebate structure. Find your utility on your electric bill or at nhsaves.com. Eversource, Liberty, Unitil, and NHEC each have different enhanced-tier structures.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <p className="font-semibold text-gray-900">If Replacing Electric Resistance: Pre-Verify</p>
                <p className="text-sm text-gray-700">Go to NHSaves.com/GetVerified before installation to qualify for the enhanced tier ($2,000/ton at Eversource/Liberty/Unitil, $1,250/ton at NHEC).</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <p className="font-semibold text-gray-900">Choose a Qualifying System</p>
                <p className="text-sm text-gray-700">Confirm the system uses R-32 or R-454B refrigerant and appears on the NHSaves Heat Pump Qualified Product List. Ask your contractor about the NE Accelerator $650 discount at nehpa.org.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
              <div>
                <p className="font-semibold text-gray-900">Submit Your Rebate Form</p>
                <p className="text-sm text-gray-700">After installation, file your NHSaves rebate online or by mail. Processing takes 6&ndash;8 weeks. The Accelerator discount should already be applied at purchase.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. What to Watch */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Watch</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">HEAR Launch Date</p>
              <p className="text-sm text-gray-600 mt-1">NH DOE targets mid-Summer 2026. Monitor energy.nh.gov for the official announcement. Projects started before launch don&apos;t qualify for retroactive rebates.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">IRA Funding Runway</p>
              <p className="text-sm text-gray-600 mt-1">HEAR and HOMES funds remain available until expended or September 30, 2031. The OBBBA did not repeal IRA rebate allocations. NH&apos;s HOMES program ($34.9 million) has not yet received DOE approval &mdash; no launch date set.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">NE Accelerator Distributor Enrollment</p>
              <p className="text-sm text-gray-600 mt-1">The program is new and not all distributors are enrolled yet. If your contractor doesn&apos;t know about the $650 discount, point them to nehpa.org.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">NHSaves Enhanced Tier Rate Change</p>
              <p className="text-sm text-gray-600 mt-1">As of March 23, 2026, the enhanced tier for electric resistance replacement at Eversource/Liberty/Unitil increased from $1,250/ton to $2,000/ton. NHEC remains at $1,250/ton. Confirm your utility&apos;s current rate before installation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 14. FAQ */}
      <section className="bg-gray-50 py-12">
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

      {/* 15. See Also */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-3">See also</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/heat-pumps/states/vt" className="text-brand-600 hover:underline">
                Vermont Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/me" className="text-brand-600 hover:underline">
                Maine Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/ma" className="text-brand-600 hover:underline">
                Massachusetts Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li>
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                Federal Heat Pump Tax Credits Have Ended &mdash; What to Know
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

      {/* 16. Sources */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="space-y-2 text-sm">
            {nhIncentive.sources.map((source: { label: string; url: string }, index: number) => (
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

      {/* 17. Disclaimer */}
      <section className="py-8">
        <div className="container-narrow">
          <div className="bg-gray-100 rounded-lg p-6">
            <p className="text-gray-500 text-xs leading-relaxed">
              <strong>Disclaimer:</strong> This page covers the main utility,
              regional, and IRA heat pump incentives available to New Hampshire
              homeowners in 2026. It does not calculate savings, guarantee
              eligibility, or represent any incentive program. NHSaves rebate
              amounts differ between utilities (Eversource/Liberty/Unitil vs. NHEC)
              and changed effective March 23, 2026. We verify status regularly but
              programs can change without notice. Always confirm current amounts and
              eligibility with NHSaves, your electric utility, and your contractor
              before making decisions.
            </p>
          </div>
          <div className="mt-6 text-center">
            <Link href="/heat-pumps" className="text-brand-600 hover:underline text-sm">
          <p className="text-sm text-gray-600 mt-4">
            See how this state compares ?{" "}
            <Link
              href="/heat-pumps/rebates-by-state"
              className="text-brand-600 hover:underline"
            >
              Heat Pump Rebates by State (2026)
            </Link>
          </p>
              &#8592; Back to Heat Pumps overview
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
