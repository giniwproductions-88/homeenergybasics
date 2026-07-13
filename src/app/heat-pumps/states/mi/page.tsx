import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Michigan Heat Pump Rebates 2026: Up to $8,000 MiHER + Utility Programs | Home Energy Basics",
  description:
    "MiHER offers up to $8,000 for heat pumps (income-qualified; Detroit District intake paused). DTE and Consumers Energy add $150\u2013$1,200. Federal credits ended.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/mi",
  },
  openGraph: {
    title: "Michigan Heat Pump Rebates 2026",
    description:
      "MiHER HEAR rebates up to $8,000 + utility rebates from DTE, Consumers Energy, TCLP, and more \u2014 the complete guide to Michigan heat pump incentives after federal credits expired.",
    url: "https://homeenergybasics.com/heat-pumps/states/mi",
    type: "article",
    publishedTime: "2026-03-22T22:05:30-05:00",
    modifiedTime: `${incentives.MI.lastVerified}T00:00:00Z`,
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Michigan Heat Pump Rebates & Incentives (2026)",
  datePublished: "2026-03-22T22:05:30-05:00",
  dateModified: `${incentives.MI.lastVerified}T00:00:00Z`,
  author: { "@type": "Organization", name: "Home Energy Basics", url: "https://homeenergybasics.com" },
  publisher: { "@type": "Organization", name: "Home Energy Basics", url: "https://homeenergybasics.com" },
  mainEntityOfPage: "https://homeenergybasics.com/heat-pumps/states/mi",
};

export default function MichiganPage() {
  const miIncentive = incentives.MI;
  const formattedDate = formatDate(miIncentive.lastVerified);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What heat pump rebates are available in Michigan in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Michigan\u2019s main heat pump rebate is the MiHER HEAR program, which offers up to $8,000 for a heat pump at point of sale for households at or below 150% of Area Median Income. Utility rebates add $150\u2013$1,200 from the major utilities: DTE Energy offers $150\u2013$1,200, Consumers Energy offers $300\u2013$350, and Lansing BWL offers $200\u2013$600. Traverse City Light & Power offered up to $3,000 in its 2025\u20132026 program year, which ended June 30, 2026; a new schedule had not been posted as of July 2026. The federal Section 25C tax credit expired December 31, 2025.",
        },
      },
      {
        "@type": "Question",
        name: "Is the Michigan MiHER program still open?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, with two important restrictions as of July 2026. EGLE states that applications are currently open to low- to moderate-income households only (at or below 150% of Area Median Income), and new income-qualified applications for properties in the EGLE Detroit District are temporarily suspended while the program reviews current applications against its regional funding allocations. Elsewhere in Michigan, income-qualified households can apply. MiHER includes both HEAR (appliance-specific rebates) and HOMES (whole-home performance rebates), with $210 million in total funding.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get a heat pump rebate if I heat with natural gas in Michigan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not from the big utilities. DTE Energy restricts heat pump rebates to electric customers replacing existing electric heating. Consumers Energy is stricter still: its ducted air-source and ground-source rebates require replacement of an existing heat pump, and only its mini-split rebate allows replacing any primary electric heat system. Neither covers gas-to-electric conversions. However, the MiHER HEAR program specifically supports fuel-switching from gas or propane to electric heat pumps. Ann Arbor\u2019s A2ZERO program also covered gas-to-electric conversions in its 2025\u20132026 year, which closed June 30, 2026, with renewal planned.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a cold-climate heat pump in Michigan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Michigan\u2019s winter design temperatures range from 0\u00b0F in Detroit and Grand Rapids to -10\u00b0F in Marquette. Cold-climate heat pumps rated to operate efficiently at 5\u00b0F or below are essential statewide. Look for equipment meeting ENERGY STAR cold-climate criteria: COP of 1.75 or greater at 5\u00b0F.",
        },
      },
      {
        "@type": "Question",
        name: "Can I stack Michigan heat pump rebates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Utility rebates, MiHER (HEAR or HOMES), and local programs like Ann Arbor\u2019s A2ZERO draw from different funding sources and can stack. The key constraint is that HOMES and HEAR cannot cover the same individual measure. When A2ZERO\u2019s 2025\u20132026 year was open, a low-income Ann Arbor household could combine HEAR ($8,000) + A2ZERO ($5,500) + DTE ($1,200) for over $14,000 toward a cold-climate system; with A2ZERO between program years as of July 2026, the live stack is HEAR plus a utility rebate where eligible.",
        },
      },
      {
        "@type": "Question",
        name: "What happened to the federal heat pump tax credit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Both the Section 25C ($2,000/year for heat pumps) and Section 25D (30% for geothermal) federal tax credits expired December 31, 2025 under the One Big Beautiful Bill Act. As of July 2026, the IRS guidance reflects the credits as ended and no replacement federal heat pump credit is active.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd data={faqJsonLd} />
      <JsonLd data={articleJsonLd} />

      {/* 1. Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="container-narrow">
          <nav className="text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-brand-600">Home</Link>
            {" "}/{" "}
            <Link href="/heat-pumps" className="hover:text-brand-600">Heat Pumps</Link>
            {" "}/ Michigan
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Michigan Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Federal tax credits are gone, but Michigan&apos;s <strong>$210 million</strong> MiHER
            program offers up to <strong>$8,000</strong> per heat pump for income-qualified
            households — with applications currently limited to low- to moderate-income
            households, and new income-qualified applications paused in the EGLE Detroit
            District. Utility rebates add <strong>$150–$1,200</strong> from DTE and Consumers
            Energy. This guide covers all major Michigan heat pump incentives available
            in 2026, including MiHER HEAR and HOMES, utility rebates from DTE, Consumers
            Energy, TCLP, and BWL, plus Ann Arbor&apos;s A2ZERO program. Here&apos;s
            what&apos;s actually available.
          </p>
          <p className="text-sm text-gray-500">
            Updated {formattedDate} — verified against official program sources
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Rates and program availability may change after this date.
          </p>
        </div>
      </section>

      {/* 2. Status Card */}
      <section className="py-8">
        <div className="container-narrow">
          <StatusCard incentive={miIncentive} />
        </div>
      </section>

      {/* 3. Short Version */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Short Version</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ MiHER HEAR Rebates</p>
              <p className="text-sm text-green-900">
                Up to <strong>$8,000</strong> per heat pump at point of sale for households
                ≤150% AMI. Enhanced rebates (100% of costs) for ≤80% AMI. Covers
                fuel-switching from gas/propane. <strong>$14,000</strong> total household cap.
                As of July 2026, applications are open to low- to moderate-income households
                only, and new income-qualified applications are paused in the EGLE Detroit
                District.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Utility Rebates</p>
              <p className="text-sm text-green-900">
                DTE Energy up to <strong>$1,200</strong>. Consumers Energy <strong>$300–$350</strong>.
                BWL up to <strong>$600</strong>. All stack with MiHER. TCLP&apos;s up-to-<strong>$3,000</strong> rebate
                and Ann Arbor A2ZERO&apos;s <strong>$4,000–$5,500</strong> both belong to 2025–26
                program years that ended June 30, 2026 — new schedules were pending as of July 2026.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Total Potential Savings</p>
              <p className="text-sm text-green-900">
                Up to ~$9,200 today for income-qualified households (HEAR $8,000 + DTE
                $1,200 where eligible). Households above 150% AMI are currently limited
                to utility rebates ($150–$1,200, and only when replacing existing electric
                heat). If A2ZERO renews at prior levels, low-income Ann Arbor stacks can
                again reach ~$14,700.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">✗ Federal Tax Credits Expired</p>
              <p className="text-sm text-red-900">
                Both Section 25C ($2,000/year for heat pumps) and Section 25D (30% for
                geothermal) expired December 31, 2025. Not available for 2026 installations.
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 md:col-span-2">
              <p className="font-semibold text-amber-800 mb-1">⚠ DTE and Consumers Energy Restrict Gas-to-Electric Conversions</p>
              <p className="text-sm text-amber-900">
                Michigan&apos;s two largest utilities exclude gas-to-electric conversions.
                DTE limits heat pump rebates to electric customers replacing existing
                electric heating. Consumers Energy is stricter: ducted air-source and
                ground-source rebates require replacing an existing heat pump, and only
                the mini-split rebate allows replacing any primary electric heat system.
                Since most Michigan homes heat with gas, this pushes fuel-switching
                households toward MiHER HEAR, which specifically covers gas-to-electric
                conversions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Federal Expired */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Federal Tax Credits: Both Expired</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <p className="text-red-900 leading-relaxed">
              The One Big Beautiful Bill Act (signed July 4, 2025) terminated
              both residential energy tax credits effective December 31, 2025.{" "}
              <strong>Section 25C</strong> had provided up to $2,000/year for
              heat pumps. <strong>Section 25D</strong> had covered 30% of
              geothermal heat pump costs with no cap. Equipment must have been{" "}
              <strong>installed by December 31, 2025</strong> to qualify — the IRS
              defines the expenditure date as when installation is completed, not when
              equipment is purchased or paid for. For 25D, unused credit from
              qualifying 2025 expenditures can be carried forward to future tax
              years. Section 25C offers no carryforward. As of July 2026, no
              replacement federal heat pump credit is active.{" "}
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                Full details on the federal credit expiration →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* 5. MiHER Program — HEAR + HOMES */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            MiHER: Michigan&apos;s $210 Million State Rebate Program
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Michigan launched both components of the Michigan Home Energy Rebates
            (MiHER) program statewide on April 14, 2025, administered by the
            Department of Environment, Great Lakes, and Energy (EGLE). Total IRA
            funding: <strong>$210 million</strong>. CLEAResult handles implementation and
            application processing (call center: 855-510-7080).
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-amber-800 mb-1">⚠ Current Application Status (July 2026)</p>
            <p className="text-sm text-amber-900">
              EGLE states that applications are currently open to <strong>low- to
              moderate-income households only</strong> — households above 150% AMI cannot
              currently apply. In addition, new income-qualified applications for
              properties in the <strong>EGLE Detroit District</strong> are temporarily
              suspended while the program reviews submitted applications against its
              regional funding allocations; Detroit District participation is approaching
              the program&apos;s single-family funding cap. Applications already submitted
              continue to be processed, and applicants whose applications expire during
              the suspension will be permitted to reapply once intake reopens.
            </p>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            HEAR (Home Electrification and Appliance Rebates)
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Point-of-sale rebates applied as a discount at installation
            through approved MiHER contractors. Specifically supports
            fuel-switching (gas/propane to electric heat pump). Rebate income
            is not taxable per IRS Announcement 2024-19.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Measure</th>
                  <th className="text-left p-3 font-semibold">Maximum Rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Heat pump (space heating/cooling)</td>
                  <td className="p-3 font-semibold">Up to $8,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">Up to $1,750</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Electric panel upgrade</td>
                  <td className="p-3 font-semibold">Up to $4,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Insulation, air sealing, ventilation</td>
                  <td className="p-3 font-semibold">Up to $1,600</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Electric wiring</td>
                  <td className="p-3 font-semibold">Up to $2,500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Electric stove or dryer</td>
                  <td className="p-3 font-semibold">Up to $840</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">Total household cap</td>
                  <td className="p-3 font-semibold">$14,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Income determines the rebate percentage:</strong>
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Income Tier</th>
                  <th className="text-left p-3 font-semibold">Rebate Coverage</th>
                  <th className="text-left p-3 font-semibold">HEAR Eligible?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">≤80% AMI</td>
                  <td className="p-3 font-semibold">Up to 100% of approved costs</td>
                  <td className="p-3">Yes (enhanced)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">81–150% AMI</td>
                  <td className="p-3 font-semibold">Up to 50% of approved costs</td>
                  <td className="p-3">Yes (standard)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">&gt;150% AMI</td>
                  <td className="p-3 text-gray-500">Not eligible for HEAR</td>
                  <td className="p-3 text-gray-500">No — and cannot currently apply to MiHER at all (as of July 2026)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mb-6">
            All work must be pre-approved and performed by an approved MiHER
            contractor. Retroactive claims are not accepted.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-amber-800 mb-1">⚠ Common Mistake: Pre-Approval Is Required</p>
            <p className="text-sm text-amber-900">
              MiHER does not accept retroactive claims. Your project must be
              pre-approved before installation starts. If you install a heat pump
              before getting MiHER approval, you cannot receive the rebate after the
              fact — even if you would have qualified.
            </p>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            HOMES (Home Efficiency Rebates)
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Whole-home performance approach. Rebates scale with modeled energy savings.
            HOMES was designed to serve all income levels, but as of July 2026 EGLE is
            accepting MiHER applications from low- to moderate-income households only —
            so households above 150% AMI cannot currently access HOMES either.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Energy Savings</th>
                  <th className="text-left p-3 font-semibold">Standard Rebate</th>
                  <th className="text-left p-3 font-semibold">≤80% AMI Rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">20–34% savings</td>
                  <td className="p-3 font-semibold">$2,000</td>
                  <td className="p-3 font-semibold">$4,000</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">35%+ savings</td>
                  <td className="p-3 font-semibold">$4,000</td>
                  <td className="p-3 font-semibold">$8,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Low-income cap</td>
                  <td className="p-3 text-gray-500">—</td>
                  <td className="p-3 font-semibold">Up to 80% of costs, $20,000 max</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">
            HOMES and HEAR cannot be combined for the same individual measure
            but can fund different upgrades within the same project.
          </p>
        </div>
      </section>

      {/* 6. Utility Rebates */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Utility Rebates</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Michigan&apos;s utility rebates vary enormously, and{" "}
            <strong>neither DTE nor Consumers Energy covers gas-to-electric
            conversions</strong>. DTE limits heat pump rebates to electric customers
            replacing existing electric heating; Consumers Energy requires replacement
            of an existing heat pump for its ducted air-source and ground-source rebates
            (only its mini-split rebate allows replacing any primary electric heat
            system). Since most Michigan homes heat with natural gas, this pushes
            fuel-switching households toward MiHER HEAR.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-blue-800 mb-1">Traverse City Has Offered Michigan&apos;s Best Utility Rebates</p>
            <p className="text-sm text-blue-900">
              TCLP&apos;s 2025–26 program year paid up to <strong>$3,000</strong> per cold-climate
              heat pump system — far more than DTE&apos;s $1,200 or Consumers Energy&apos;s $350.
              That program year ended June 30, 2026, and TCLP had not posted a new-year
              schedule as of July 2026; confirm current amounts at 231-922-4940 before
              purchase. TCLP also offers on-bill financing ($5,000–$30,000).
            </p>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">DTE Energy</h3>
          <p className="text-sm text-gray-500 mb-4">Detroit metro, ~2.3 million electric customers</p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Cold-climate ASHP (16+ SEER2, 9.1+ HSPF2, EER2 ≥10)</td>
                  <td className="p-3 font-semibold">$1,200</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Cold-climate ASHP (lower efficiency tiers)</td>
                  <td className="p-3 font-semibold">$900–$1,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Standard ASHP (non-cold-climate)</td>
                  <td className="p-3 font-semibold">$150–$500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ductless mini-split</td>
                  <td className="p-3 font-semibold">$700–$1,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ground-source heat pump</td>
                  <td className="p-3 font-semibold">$600–$800</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mb-6">
            All equipment must be AHRI-certified matched systems. Rebates
            limited to customers replacing existing electric heating. Funds are
            first-come, first-served and limited — DTE&apos;s rebate page shows a live
            funds-remaining gauge, so check availability before committing.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Consumers Energy</h3>
          <p className="text-sm text-gray-500 mb-4">Western/central Michigan, ~1.9 million electric customers</p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">ASHP (SEER2 15.2+)</td>
                  <td className="p-3 font-semibold">$300</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ductless mini-split (SEER2 17+, HSPF2 8+)</td>
                  <td className="p-3 font-semibold">$350</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ground-source heat pump</td>
                  <td className="p-3 font-semibold">$200–$300</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mb-6">
            2026 program covers installs January 1 – December 31, 2026, first-come,
            first-served while funds last. Does not differentiate between cold-climate
            and standard ASHPs. Eligibility is narrow: the ducted ASHP and ground-source
            rebates require replacement of an existing heat pump; the mini-split rebate
            allows replacement of any primary electric heat system. Equipment must be
            installed by a participating Trade Ally, who submits the application.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Traverse City Light &amp; Power (TCLP)</h3>
          <p className="text-sm text-gray-500 mb-4">Traverse City area — Michigan&apos;s most generous utility rebates in 2025–26; new program year pending</p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Cold-climate ducted ASHP (SEER2 ≥15.2, EER2 ≥9, HSPF2 ≥8.1, COP ≥1.75 at 5°F)</td>
                  <td className="p-3 font-semibold">$3,000/system</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Standard ducted ASHP (SEER2 ≥15.2, no COP requirement)</td>
                  <td className="p-3 font-semibold">$1,500/system</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Cold-climate ductless mini-split (SEER2 ≥16, COP ≥1.75 at 5°F)</td>
                  <td className="p-3 font-semibold">$3,000/system</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">HPWH (≤55 gal, UEF ≥2.2)</td>
                  <td className="p-3 font-semibold">$1,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Electric panel upgrade</td>
                  <td className="p-3 font-semibold">$1,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mb-6">
            Amounts above are from TCLP&apos;s 2025–26 program year (July 1, 2025 – June 30,
            2026), which has ended; TCLP had not posted a 2026–27 schedule as of July 2026.
            The panel upgrade rebate required installation of an EV charger or a 240V
            appliance. On-bill financing available ($5,000–$30,000). Confirm current
            offers at 231-922-4940.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Lansing Board of Water &amp; Light (BWL)</h3>
          <p className="text-sm text-gray-500 mb-4">Lansing area — Hometown Energy Savers® program</p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Central ASHP (tiered by SEER2: 15.2–21+)</td>
                  <td className="p-3 font-semibold">$200–$600</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Mini/multi-split</td>
                  <td className="p-3 font-semibold">$300 ($500 if replacing electric resistance)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">HPWH (ENERGY STAR, EF ≥2.0)</td>
                  <td className="p-3 font-semibold">$500</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mb-6">
            Program runs January–December 2026. Administered by Michigan Energy Options.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Other Michigan Utilities</h3>
          <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
            <p className="font-semibold text-gray-900">UPPCO (Upper Peninsula)</p>
            <p className="text-sm text-gray-600 mt-1">
              Offers heat pump rebates and an EMPOWER program with free upgrades for income-qualified customers. UPPCO territory was a MiHER pilot region. Contact (906) 449-2222 or energyefficiency@uppco.com for current rebate amounts.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
            <p className="font-semibold text-gray-900">Great Lakes Energy (cooperative)</p>
            <p className="text-sm text-gray-600 mt-1">
              Air-source heat pump rebates of $250–$750. Geothermal rebates of $500–$750. Members using heat pumps as primary heat may qualify for the Efficient Electric Heating (EEH) rate — a 3¢/kWh credit on heat pump energy use during the November–May heating season. Contact (888) 485-2537 for current program details.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <p className="font-semibold text-gray-900">Cherryland Electric (cooperative)</p>
            <p className="text-sm text-gray-600 mt-1">
              Most recent published schedule (2025): $500 for centralized ASHPs, $500 for mini-splits, $500 for HPWHs, $1,000 for geothermal. $10,000 annual cap per membership. Supports fuel-switching from gas/propane. Contact (231) 486-9261 to confirm 2026 availability.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Local Programs — Ann Arbor A2ZERO */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ann Arbor: A2ZERO Home Energy Rebate Program
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Ann Arbor operates Michigan&apos;s only major city-level heat pump incentive, funded by a voter-approved Community Climate Action Millage ($1.9M annually). Dual-fuel systems (heat pump + gas furnace backup) are not eligible — the program pushes toward full electrification. Equipment must be NEEP-listed with minimum SEER2 15.2 and HSPF2 8.0. Rebates are capped at 90% of project cost; up to two mini-split systems per address can each earn the heat pump rebate. The amounts below are from the 2025–26 program year, which closed June 30, 2026 — see the note under the table.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Measure</th>
                  <th className="text-left p-3 font-semibold">Market Rate</th>
                  <th className="text-left p-3 font-semibold">Income-Qualified (≤120% AMI)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Cold-climate HP (central or mini-split)</td>
                  <td className="p-3 font-semibold">$4,000</td>
                  <td className="p-3 font-semibold">$5,500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ductwork modifications</td>
                  <td className="p-3 font-semibold">$1,500</td>
                  <td className="p-3 font-semibold">$2,500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">$1,000</td>
                  <td className="p-3 font-semibold">$2,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Electric panel upgrade</td>
                  <td className="p-3 font-semibold">$1,000</td>
                  <td className="p-3 font-semibold">$2,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">
            The 2025–26 program year closed June 30, 2026 — rebate amounts were valid
            through that date, and applications were due by it. The city has said it
            plans to offer these rebates in future years under the Community Climate
            Action Millage, but a 2026–27 application had not been posted as of July
            2026; check osi.a2gov.org/rebates for the new program year. Ann Arbor
            explicitly encourages stacking A2ZERO with MiHER and utility rebates.
          </p>
        </div>
      </section>

      {/* 9. Stacking */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Programs Stack</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Utility rebates, MiHER (HOMES/HEAR), and A2ZERO draw from different funding sources and can stack. The key constraint: HOMES and HEAR cannot cover the same measure. Two program-status caveats shape every scenario as of July 2026: MiHER applications are open to low- to moderate-income households only (with new income-qualified applications paused in the EGLE Detroit District), and A2ZERO is between program years. Scenario: <strong>$17,500</strong> whole-home ducted cold-climate ASHP installation.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 150% AMI — Utility Only (for now)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>HEAR: not eligible</li>
                <li>HOMES: not currently available — MiHER applications are limited to ≤150% AMI households as of July 2026</li>
                <li>Utility rebate: $150–$1,200 (DTE, only when replacing existing electric heating; Consumers only when replacing an existing heat pump or, for mini-splits, electric heat)</li>
                <li>Federal 25C/25D: $0 (expired)</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: $0–$1,200 (often $0 for gas-heated homes)</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 150% AMI in Ann Arbor</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>HOMES: not currently available (see above)</li>
                <li>A2ZERO (market rate, $4,000 in 2025–26): between program years — renewal planned but not yet posted</li>
                <li>DTE rebate: up to $1,200 (electric-heat replacements only)</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum today: $0–$1,200; ~$5,200 if A2ZERO renews at prior levels</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">80–150% AMI — HEAR + Utility (the live stack)</p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>HEAR heat pump rebate: up to $8,000 (new applications paused in the EGLE Detroit District)</li>
                <li>DTE or Consumers rebate: $150–$1,200 where the replacement rules above are met</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$8,000–$9,200</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Below 80% AMI in Ann Arbor — Best Case (when A2ZERO reopens)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>HEAR heat pump rebate: up to $8,000 (up to 100% of approved costs at this income tier)</li>
                <li>A2ZERO (income-qualified, $5,500 in 2025–26): between program years</li>
                <li>DTE rebate: up to $1,200 (electric-heat replacements only)</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum today: ~$9,200; ~$14,700 if A2ZERO renews at prior levels</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-5 mb-6">
            <p className="font-semibold text-gray-900 mb-1">What You&apos;ll Actually Pay</p>
            <p className="text-sm text-gray-700">
              On a <strong>$17,500</strong> project as of July 2026: <strong>roughly $8,300 (income-qualified with HEAR $8,000 + DTE $1,200) up to the full $17,500 (above 150% AMI in a gas-heated home, where no rebate currently applies)</strong>. Qualifying households (≤150% AMI, outside the paused Detroit District) will see up to $8,000 in MiHER incentives on the heat pump itself — and households ≤80% AMI can have up to 100% of approved costs covered within HEAR&apos;s caps. If A2ZERO reopens at prior levels, low-income Ann Arbor out-of-pocket can fall to ~$2,800. The loss of the $2,000 Section 25C credit is most acutely felt by households above 150% AMI, who currently have no MiHER path at all. No state tax credit exists for air-source heat pumps in Michigan.
            </p>
          </div>

          <p className="text-sm text-gray-500">
            The 25C loss adds ~$2,000 to out-of-pocket for above-150% AMI households.
            HOMES was designed to partially offset this for whole-home projects achieving
            35%+ energy savings, but is not currently open to that income group while
            MiHER intake is limited to low- to moderate-income households.
          </p>
        </div>
      </section>

      {/* 10. Weatherization + Financing */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Weatherization &amp; Financing</h2>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Michigan Saves</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Michigan Saves offers unsecured financing through participating credit unions, with advertised rates as low as <strong>6.24% APR</strong> and terms up to 180 months. Maximum loan amounts vary by lender and can reach $100,000 in some cases. Can be combined with all rebate programs.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Weatherization Assistance Program (WAP)</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Michigan&apos;s WAP provides free energy upgrades — potentially including heat pump installation — for households at or below 200% of the Federal Poverty Level. Administered by the Michigan Department of Health and Human Services through 26 Community Action Agencies across the state.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <p className="font-semibold text-green-800 mb-1">✓ Best Candidates for Heat Pumps in Michigan</p>
            <p className="text-sm text-green-900">
              Households ≤150% AMI who qualify for MiHER HEAR (up to $8,000), outside the paused EGLE Detroit District. Homeowners switching from propane or fuel oil in rural and northern Michigan (largest operating cost savings). Ann Arbor residents, once A2ZERO&apos;s next program year opens, who can stack A2ZERO + MiHER + DTE. TCLP customers in Traverse City if TCLP renews its up-to-$3,000 rebate. Low-income households who may qualify for both WAP and HEAR.
            </p>
          </div>
        </div>
      </section>

      {/* 11. Climate */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cold Climate: Why Equipment Choice Matters</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Michigan spans IECC Climate Zones 5A through 7. Cold-climate ASHPs meeting ENERGY STAR criteria (COP ≥1.75 at 5°F) are essential statewide, and equipment rated to −15°F or lower is strongly recommended for northern Michigan and the Upper Peninsula.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">City</th>
                  <th className="text-left p-3 font-semibold">Design Temp</th>
                  <th className="text-left p-3 font-semibold">Primary Heating Fuel</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Detroit</td>
                  <td className="p-3 font-semibold">0°F</td>
                  <td className="p-3">Natural gas</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Grand Rapids</td>
                  <td className="p-3 font-semibold">~0°F</td>
                  <td className="p-3">Natural gas</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Lansing</td>
                  <td className="p-3 font-semibold">−3.5°F</td>
                  <td className="p-3">Natural gas</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Marquette</td>
                  <td className="p-3 font-semibold">−8 to −10°F</td>
                  <td className="p-3">Propane / fuel oil</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Natural gas dominates southern Michigan heating. Propane and fuel oil concentrate in rural areas, northern Michigan, and the UP. Heat pumps are most economically attractive where they displace propane or fuel oil, making rural and UP households the strongest economic candidates for conversion — and also the areas requiring the most capable cold-climate equipment.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Manual J load calculations are important in Michigan&apos;s climate. Proper ductwork assessment matters too — many Michigan homes have aging duct systems designed for furnaces that may need modification for optimal heat pump performance. For information on pairing heat pumps with home battery storage, see our{" "}
            <Link href="/battery" className="text-brand-600 hover:underline">
              guide to home batteries in 2026
            </Link>.
          </p>
        </div>
      </section>

      {/* 12. How to Apply */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Apply</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <p className="font-semibold text-gray-900">Check your income eligibility</p>
                <p className="text-sm text-gray-700">HEAR requires ≤150% AMI. Enhanced rebates at ≤80% AMI. Use your household size and county to determine your AMI level. As of July 2026, MiHER applications are open to low- to moderate-income households only, and new income-qualified applications are paused for properties in the EGLE Detroit District.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <p className="font-semibold text-gray-900">Find an approved MiHER contractor</p>
                <p className="text-sm text-gray-700">HEAR rebates must go through an approved contractor who applies the discount at point of sale. Call 855-510-7080 for the contractor list.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <p className="font-semibold text-gray-900">Get pre-approval before work begins</p>
                <p className="text-sm text-gray-700">MiHER does not accept retroactive claims. Your project must be pre-approved before installation starts.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
              <div>
                <p className="font-semibold text-gray-900">Apply for your utility rebate separately</p>
                <p className="text-sm text-gray-700">Utility rebates use their own application processes. Your contractor can often help with this. Ann Arbor residents should also watch for A2ZERO&apos;s next program year through the City of Ann Arbor — it stacks with MiHER and utility rebates when open.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. What to Watch */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Watch</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">MiHER Intake Restrictions</p>
              <p className="text-sm text-gray-600 mt-1">As of July 2026, MiHER applications are open to low- to moderate-income households only, and new income-qualified applications are paused in the EGLE Detroit District while the program assesses participation against its regional funding allocations. EGLE has said the Detroit District will reopen if its assessment finds sufficient capacity, and that applicants whose applications expire during the pause can reapply once intake reopens. Either restriction lifting — or the pause widening — changes this page&apos;s numbers.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">IRA Funding Runway</p>
              <p className="text-sm text-gray-600 mt-1">MiHER&apos;s $210 million in IRA funding is expected to last until September 2031 or until depleted — and the Detroit District pause shows regional allocations can bind much sooner. Federal policy changes could affect the timeline. Monitor fund levels at michigan.gov/egle or call 855-510-7080.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">DTE Funding Availability</p>
              <p className="text-sm text-gray-600 mt-1">DTE rebate funds are first-come, first-served and limited; DTE&apos;s rebate page displays a live funds-remaining gauge. When funds run out, the program pauses until the next cycle. Check availability before committing to a project.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">TCLP and A2ZERO New Program Years</p>
              <p className="text-sm text-gray-600 mt-1">Both TCLP&apos;s residential incentive program and Ann Arbor&apos;s A2ZERO rebates ran on program years that ended June 30, 2026. Ann Arbor has said it plans to offer rebates in future years under the Community Climate Action Millage; TCLP&apos;s posted measures list still shows the 2025–26 year. New schedules for either could raise or change the amounts on this page.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Utility Gas-to-Electric Policy</p>
              <p className="text-sm text-gray-600 mt-1">DTE currently limits heat pump rebates to electric-heat replacements, and Consumers Energy requires an existing heat pump for its ducted and ground-source rebates. If either utility expands to cover gas-to-electric fuel-switching, it would significantly change the rebate landscape for most Michigan homeowners.</p>
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

      {/* 15. See Also */}
      <section className="py-8 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-3">See also</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/heat-pumps/states/wi" className="text-brand-600 hover:underline">
                Wisconsin Heat Pump Rebates &amp; Incentives (2026)
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/il" className="text-brand-600 hover:underline">
                Illinois Heat Pump Rebates &amp; Incentives (2026)
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/in" className="text-brand-600 hover:underline">
                Indiana Heat Pump Rebates &amp; Incentives (2026)
              </Link>
            </li>
            <li>
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                Federal Heat Pump Tax Credits Ended — What It Means
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
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="space-y-2 text-sm">
            {miIncentive.sources.map((source: { label: string; url: string }, index: number) => (
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
              <strong>Disclaimer:</strong> This page covers the main statewide, utility, and local heat pump incentives available to Michigan homeowners in 2026. It does not calculate savings, guarantee eligibility, or represent any incentive program. Michigan has additional cooperatives and municipal utilities that may offer rebates not listed here. We verify status regularly but programs can change without notice. Always confirm current amounts and eligibility with EGLE, your utility, and your contractor before making decisions.
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
