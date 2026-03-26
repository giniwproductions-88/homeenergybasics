import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Ohio Heat Pump Rebates 2026: Almost None Available (HEAR $8,000 Pending) | Home Energy Basics",
  description:
    "Ohio&apos;s $249M IRA rebates haven&apos;t launched. Utility programs ended under HB 6. Here&apos;s every Ohio heat pump incentive in 2026.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/oh",
  },
  openGraph: {
    title: "Ohio Heat Pump Rebates 2026",
    description:
      "Ohio&apos;s $249M in IRA rebates remain pending and utility programs were dismantled — the complete guide to Ohio heat pump incentives after federal credits expired.",
    url: "https://homeenergybasics.com/heat-pumps/states/oh",
    type: "article",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What heat pump rebates are available in Ohio in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ohio has very limited heat pump rebates in 2026. Federal tax credits (Sections 25C and 25D) expired December 31, 2025. The state\u2019s $249 million IRA rebate programs (HEAR and HOMES) have not yet launched. Most utility rebate programs were dismantled by Ohio House Bill 6 in 2019. The strongest currently available incentives are the ECO-Link loan program (3% interest rate reduction on up to $50,000), AEP Ohio\u2019s income-qualified HELP program, and the statewide HWAP weatherization program for low-income households.",
      },
    },
    {
      "@type": "Question",
      name: "Can I stack HEAR, HOMES, and utility rebates in Ohio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Federal rules permit stacking HOMES, HEAR, and utility rebates on the same project, but HEAR and HOMES cannot both be applied to the same measure. They can be braided across different measures in one project. For example, HEAR could cover the heat pump while HOMES covers insulation. Total stacked incentives cannot exceed total project cost. However, Ohio\u2019s HEAR and HOMES programs have not yet launched as of March 2026.",
      },
    },
    {
      "@type": "Question",
      name: "Why don\u2019t Ohio utilities offer heat pump rebates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ohio House Bill 6, enacted in 2019, dismantled mandated energy efficiency programs for all Ohio electric distribution utilities, ending them by December 31, 2020. This eliminated the framework for residential rebate programs at AEP Ohio, Duke Energy Ohio, AES Ohio, and FirstEnergy\u2019s Ohio subsidiaries. A bipartisan bill to reauthorize voluntary programs died in the Ohio Senate in December 2024. AEP Ohio\u2019s HELP program (income-qualified only) is the main surviving utility incentive.",
      },
    },
    {
      "@type": "Question",
      name: "When will Ohio\u2019s IRA rebate programs (HEAR and HOMES) launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ohio was awarded approximately $249 million in IRA rebate funding. The Ohio Department of Development designed the programs and received DOE approval, but has not announced a firm launch date. Industry sources expected launch sometime in 2026. IRA funding for these programs remains authorized through September 30, 2031. Monitor development.ohio.gov for official launch announcements.",
      },
    },
    {
      "@type": "Question",
      name: "Do cold-climate heat pumps work well in Ohio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Ohio is in IECC Climate Zone 5A with ASHRAE heating design temperatures ranging from about -2\u00b0F in Toledo to 5\u00b0F in Cincinnati. Modern cold-climate heat pumps rated to ENERGY STAR Cold Climate specifications maintain at least 70% of rated heating capacity at 5\u00b0F and are well-suited for Ohio winters. For northern Ohio cities like Toledo and Cleveland, cold-climate-rated equipment is essential rather than optional.",
      },
    },
    {
      "@type": "Question",
      name: "Is it worth installing a heat pump in Ohio in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on your income bracket and timing. Low-income homeowners (below 80% AMI) have the strongest path through HWAP and the upcoming HEAR program, which could cover the full cost. Middle-income homeowners (80\u2013150% AMI) should consider waiting for HEAR to launch, which would cover 50% of costs up to $8,000. Above-150% AMI homeowners face the thinnest incentive stack \u2014 mostly ECO-Link financing savings and potential HOMES rebates up to $4,000. If your furnace is failing and you cannot wait, ECO-Link plus a cold-climate heat pump is a sound investment for long-term energy savings. If you can wait 6\u201312 months, the HEAR/HOMES launch could significantly reduce your out-of-pocket cost.",
      },
    },
  ],
};

export default function OhioPage() {
  const ohIncentive = incentives.OH;
  const formattedDate = formatDate(ohIncentive.lastVerified);

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
            {" "}/ Ohio
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ohio Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Most Ohio homeowners will see little to no direct rebates until federal IRA programs launch. Federal tax credits expired, Ohio&apos;s <strong>$249 million</strong> in IRA rebate funding remains pending, and utility rebate programs were dismantled by House Bill 6 in 2019. The strongest active incentive is the ECO-Link loan program, which provides a <strong>3% interest rate reduction</strong> on qualifying home improvement loans up to <strong>$50,000</strong>. For most homeowners, this is one of the weakest incentive environments in the country right now. This guide covers all major Ohio heat pump incentives available in 2026, including HEAR, HOMES, AEP Ohio HELP, ECO-Link, and HWAP. Here&apos;s what&apos;s actually available.
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
          <StatusCard incentive={ohIncentive} />
        </div>
      </section>

      {/* 3. SHORT VERSION */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The short version</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ HEAR rebates: up to $8,000 for heat pumps</p>
              <p className="text-sm text-green-900">Ohio&apos;s Home Electrification and Appliance Rebates (HEAR) program will cover up to $8,000 for heat pumps for households below 150% of Area Median Income (AMI). The program has not yet launched.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ ECO-Link: 3% rate reduction on loans up to $50,000</p>
              <p className="text-sm text-green-900">The ECO-Link program from the Ohio Treasurer provides a 3% interest rate reduction on qualifying home improvement loans, including heat pump installations. This is the strongest active incentive available to all Ohio homeowners.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Potential savings: $500 to $8,000+</p>
              <p className="text-sm text-green-900">$500–$750 (above 150% AMI via utility rebates) to $8,000+ (below 80% AMI via HEAR when launched). Full electrification packages can reach ~$16,000 total incentives for income-qualified households.</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">✗ Federal tax credits expired</p>
              <p className="text-sm text-red-900">Section 25C ($2,000/year for heat pumps) and Section 25D (30% for geothermal) both ended December 31, 2025. No federal tax credit is available for heat pumps installed in 2026.</p>
            </div>
            <div className="md:col-span-2 bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="font-semibold text-amber-800 mb-1">⚠ Ohio&apos;s IRA programs have not launched yet</p>
              <p className="text-sm text-amber-900">Ohio was awarded $249 million in HEAR and HOMES funding, but neither program is accepting applications as of March 2026. Homeowners who can wait may benefit from monitoring the Ohio Department of Development for launch announcements. Contractors claiming specific HEAR/HOMES rebate amounts are premature.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEDERAL EXPIRED */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Federal tax credits: both expired</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <p className="text-red-900 leading-relaxed">
              <strong>Section 25C</strong> (Energy Efficient Home Improvement Credit) and <strong>Section 25D</strong> (Residential Clean Energy Credit) both terminated for any property placed in service after December 31, 2025. The One Big Beautiful Bill Act (OBBBA), signed July 4, 2025, accelerated the sunset of both credits. A heat pump purchased in 2025 but installed in January 2026 <strong>does not qualify</strong> — the installation completion date is the controlling event. For more details, see our{" "}
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                federal heat pump tax credit explainer
              </Link>.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Section 25C previously provided <strong>30% of project costs up to $2,000 per year</strong> for heat pumps and heat pump water heaters. Section 25D provided <strong>30% with no dollar cap</strong> for geothermal heat pump systems. These were the most broadly accessible incentives available to Ohio homeowners regardless of income.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Homeowners who completed qualifying installations on or before December 31, 2025 can still claim the credit on their 2025 tax return using IRS Form 5695. For Section 25D, unused credit amounts from 2025 installations may be carried forward to future tax years.
          </p>
        </div>
      </section>

      {/* 5. HEAR (pending) */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Home Electrification and Appliance Rebates (HEAR) — pending</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Ohio was awarded approximately <strong>$124.2 million</strong> in HEAR funding under the Inflation Reduction Act. The program is administered by the Ohio Department of Development. As of March 2026, the program has not launched. HEAR provides point-of-sale rebates exclusively for households below 150% of Area Median Income (AMI), verified at the county level using HUD income data.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Expected HEAR rebate amounts</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Measure</th>
                  <th className="text-left p-3 font-semibold">Maximum rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Heat pump (HVAC)</td>
                  <td className="p-3 font-semibold">$8,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">$1,750</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Electrical panel upgrade</td>
                  <td className="p-3 font-semibold">$4,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Electric wiring upgrade</td>
                  <td className="p-3 font-semibold">$2,500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Insulation, air sealing, ventilation</td>
                  <td className="p-3 font-semibold">$1,600</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Electric stove/cooktop</td>
                  <td className="p-3 font-semibold">$840</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Electric clothes dryer</td>
                  <td className="p-3 font-semibold">$840</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3 font-semibold">Per-household cap</td>
                  <td className="p-3 font-semibold">$14,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            For households <strong>below 80% AMI</strong>: 100% of project costs covered up to per-item caps. For households at <strong>80–150% AMI</strong>: 50% of project costs covered up to per-item caps. Households <strong>above 150% AMI</strong> are not eligible for HEAR.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="font-semibold text-amber-800 mb-1">⚠ Common mistake: assuming HEAR is available now</p>
            <p className="text-sm text-amber-900">Several Ohio HVAC contractor websites promote HEAR rebate amounts as if they are currently available. Ohio&apos;s HEAR program has not launched. Do not rely on contractor marketing — verify directly with the Ohio Department of Development at development.ohio.gov before making purchasing decisions based on expected rebates.</p>
          </div>
        </div>
      </section>

      {/* 6. HOMES (pending) */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Home Efficiency Rebates (HOMES) — pending</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Ohio was also awarded approximately <strong>$124.6 million</strong> in HOMES funding. Unlike HEAR, HOMES is available to all income levels based on demonstrated whole-home energy savings via modeling or measurement. As of March 2026, this program has not launched either.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Expected HOMES rebate amounts</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Energy savings achieved</th>
                  <th className="text-left p-3 font-semibold">Below 80% AMI</th>
                  <th className="text-left p-3 font-semibold">80–150% AMI</th>
                  <th className="text-left p-3 font-semibold">Above 150% AMI</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">20–34% reduction</td>
                  <td className="p-3 font-semibold">Up to $4,000</td>
                  <td className="p-3 font-semibold">Up to $2,000</td>
                  <td className="p-3 font-semibold">Up to $2,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">35%+ reduction</td>
                  <td className="p-3 font-semibold">Up to $8,000</td>
                  <td className="p-3 font-semibold">Up to $4,000</td>
                  <td className="p-3 font-semibold">Up to $4,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed">
            HOMES requires a whole-home energy audit to document savings. This makes it particularly relevant for Ohio homeowners combining a heat pump installation with insulation, air sealing, or window upgrades — a common approach in Ohio&apos;s older housing stock.
          </p>
        </div>
      </section>

      {/* 7. UTILITY PROGRAMS */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Utility programs: mostly dismantled by House Bill 6</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Ohio House Bill 6, enacted October 21, 2019, dismantled mandated energy efficiency programs for all Ohio electric distribution utilities, ending them by December 31, 2020. A bipartisan bill (HB 79) to reauthorize voluntary programs died in the Ohio Senate in December 2024 without a vote. Most Ohio utilities have no active general-population heat pump rebate programs.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-blue-800 mb-1">Ohio&apos;s unique policy situation</p>
            <p className="text-sm text-blue-900">Ohio is one of very few states where utility efficiency programs were eliminated by state law. The HB 6 scandal — which led to the imprisonment of the Ohio House Speaker — also removed renewable portfolio standards. This makes Ohio&apos;s incentive landscape unusually thin compared to neighboring states like Pennsylvania and Michigan, where utilities offer $500–$1,000+ in heat pump rebates.</p>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">AEP Ohio — HELP program (income-qualified only)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            AEP Ohio operates the High Efficiency for Low-Income Program (HELP), the only active utility heat pump program in Ohio with meaningful incentives. This is not a standard rebate open to all customers.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Detail</th>
                  <th className="text-left p-3 font-semibold">HELP program</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Eligibility</td>
                  <td className="p-3">AEP Ohio residential customer, household income ≤300% FPL</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Below 200% FPL tier</td>
                  <td className="p-3 font-semibold">Products/services at no cost</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">200–300% FPL tier</td>
                  <td className="p-3 font-semibold">Products/services at low cost (~$2,000–$3,000)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">ASHP requirements</td>
                  <td className="p-3">≥16 SEER2, ≥8.5 HSPF2, below 65,000 Btu/h</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Application</td>
                  <td className="p-3">Through authorized contractors at aepohhelp.com</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Duke Energy Ohio — no active program</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Duke Energy&apos;s Ohio service territory residential rebate programs were discontinued following HB 6. Duke&apos;s national website displays HVAC rebate pages, but these serve other jurisdictions (Carolinas, Florida, Indiana) — not Ohio. Duke serves approximately 730,000 electric customers in southwestern Ohio.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">AES Ohio (Dayton area) — no active program</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            AES Ohio (formerly Dayton Power &amp; Light) ended all energy efficiency programs by December 31, 2020 under HB 6. AES has a limited program providing smart thermostat rebates and weatherization services for low- and middle-income households, but no heat pump or heat pump water heater rebates.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">FirstEnergy Ohio — previous program expired</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            FirstEnergy&apos;s Ohio subsidiaries (Ohio Edison, The Illuminating Company, Toledo Edison) operated a residential products rebate program from June 2023 to May 2024 that offered <strong>$500 heat pump water heater rebates</strong> but did not include air-source heat pump rebates. As of March 2026, only a smart thermostat rebate and the Community Connections program (free energy services for customers ≤200% FPG) remain active. FirstEnergy filed a sixth Electric Security Plan (ESP6) with PUCO in January 2025 proposing new efficiency programs, but ESP6 has not yet been approved.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Natural gas utilities — no heat pump programs</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Columbia Gas of Ohio (NiSource) and Enbridge Gas Ohio (formerly Dominion Energy Ohio, sold to Enbridge in March 2024) operate only income-eligible weatherization programs. As gas utilities, neither has offered electric heat pump rebates. Columbia Gas&apos;s WarmChoice program provides free weatherization for households ≤200% FPG.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Cincinnati area: local resources</h3>
          <p className="text-gray-700 leading-relaxed">
            The Cincinnati area has the most developed local heat pump ecosystem in Ohio. <strong>Electrify Cincy</strong>, administered by the City of Cincinnati, provides a network of city-certified heat pump contractors and education resources. The <strong>Greater Cincinnati Energy Alliance (GCEA)</strong> administers the City of Cincinnati Residential Rebate Program — up to <strong>$1,500</strong> (50% of costs, minimum $1,000 project) for energy efficiency improvements including HVAC upgrades. GCEA covers Hamilton, Butler, Warren, and Clermont counties. No other major Ohio city operates a direct heat pump incentive program.
          </p>
        </div>
      </section>

      {/* 8. ECO-LINK + STATE FINANCING */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">ECO-Link and state financing</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The ECO-Link (Energy Conservation for Ohioans Linked Deposit Program), administered by the Ohio Treasurer of State, is the strongest currently available statewide incentive. It is not a rebate — it is a loan interest rate reduction that lowers the cost of financing a heat pump installation.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Detail</th>
                  <th className="text-left p-3 font-semibold">ECO-Link</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Rate reduction</td>
                  <td className="p-3 font-semibold">Up to 3% off market rate</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Maximum loan</td>
                  <td className="p-3 font-semibold">$50,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Term</td>
                  <td className="p-3">5 years (7 years for home equity loans over $25,000)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Eligibility</td>
                  <td className="p-3">Ohio primary residence owner, ENERGY STAR products, certified contractor</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Eligible equipment</td>
                  <td className="p-3">ASHP, geothermal, HPWH, insulation, windows, solar</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Application</td>
                  <td className="p-3">Through participating banks at tos.ohio.gov</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <p className="font-semibold text-green-800 mb-1">✓ Best candidates for ECO-Link</p>
            <p className="text-sm text-green-900">Homeowners above 150% AMI who are not eligible for HEAR. A 3% rate reduction on a $15,000 heat pump loan saves approximately $1,200–$1,400 in interest over 5 years. Combined with a utility rebate of $500–$750 (where available), this is the primary incentive path for middle- and upper-income Ohio homeowners in 2026.</p>
          </div>
        </div>
      </section>

      {/* 9. STACKING */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How programs stack in Ohio</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Federal rules permit combining HOMES, HEAR, and utility rebates on the same project, but HOMES and HEAR cannot both be applied to the same measure. They can be braided across different measures in a single project. Total stacked incentives cannot exceed total project cost. The stacking scenarios below assume eventual HEAR/HOMES availability.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 150% AMI — ducted heat pump system ($15,000 installed)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>HEAR: $0 (not eligible)</li>
                <li>HOMES (35%+ savings): up to $4,000</li>
                <li>Section 25C: $0 (expired)</li>
                <li>Utility rebate (best case): $500–$750</li>
                <li>ECO-Link: 3% rate reduction on loan (not a rebate)</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$4,500–$4,750</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">80–150% AMI — ducted heat pump system ($15,000 installed)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>HEAR (50% of costs): up to $7,500</li>
                <li>HOMES (separate weatherization, 35%+ savings): up to $4,000</li>
                <li>Section 25C: $0 (expired)</li>
                <li>Utility rebate: $500–$750</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum (HP only): ~$8,000–$8,250</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">Below 80% AMI — ducted heat pump system ($15,000 installed)</p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>HEAR (100% of costs): up to $8,000</li>
                <li>HOMES (separate weatherization, 35%+ savings): up to $8,000</li>
                <li>AEP Ohio HELP (if applicable): $2,000–$3,000 cost reduction</li>
                <li>HWAP (if qualified): free system replacement</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: near-zero out of pocket</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-5 mb-6">
            <p className="font-semibold text-gray-900 mb-1">What you&apos;ll actually pay</p>
            <p className="text-sm text-gray-700">For a typical $15,000 ducted heat pump installation: above-150% AMI homeowners should expect <strong>$10,250–$14,500 out of pocket</strong> depending on whether HOMES launches and utility rebates are available. Low-income homeowners (below 80% AMI) have a path to near-zero cost through HEAR + HWAP + utility programs, but only after HEAR launches. Until then, most Ohio homeowners pay full price minus financing savings from ECO-Link.</p>
          </div>

          <p className="text-xs text-gray-400">
            Ohio has no state tax credit for heat pumps. The stacking scenarios above do not include potential manufacturer rebates, which vary by brand and change frequently.
          </p>
        </div>
      </section>

      {/* 10. WEATHERIZATION */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ohio Home Weatherization Assistance Program (HWAP)</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            HWAP provides <strong>free</strong> weatherization services — including potential heating system replacement — for households at or below 200% of the Federal Poverty Guidelines (e.g., <strong>$64,300</strong> for a family of four in 2025). The program is administered by the Ohio Department of Development through 35 Community Action Agencies across all 88 Ohio counties.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            HWAP can include heat pump installation if an energy audit determines it is the most cost-effective solution. Since 1977, the program has weatherized over <strong>304,000</strong> Ohio homes, with average energy bill reductions of 20–30%. The program is active year-round but has extensive waiting lists.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Apply at{" "}
            <a href="https://energyhelp.ohio.gov" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">energyhelp.ohio.gov</a>
            {" "}or call 1-800-282-0880 to find your local Community Action Agency.
          </p>
        </div>
      </section>

      {/* 11. CLIMATE */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ohio climate and heat pump performance</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Ohio sits entirely in IECC Climate Zone 5A (Cold-Moist). ASHRAE heating design temperatures confirm the need for cold-climate-rated equipment across the state. Approximately 64% of Ohio homes heat with natural gas, meaning most heat pump installations displace gas furnaces — a fuel-switching scenario where incentives are especially important for driving adoption.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">City</th>
                  <th className="text-left p-3 font-semibold">99.6% design temp</th>
                  <th className="text-left p-3 font-semibold">Annual HDD (base 65°F)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Toledo</td>
                  <td className="p-3 font-semibold">-1.8°F</td>
                  <td className="p-3">~6,500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Cleveland</td>
                  <td className="p-3 font-semibold">1.0°F</td>
                  <td className="p-3">~6,150</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Akron</td>
                  <td className="p-3 font-semibold">0.1°F</td>
                  <td className="p-3">~5,970</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Columbus</td>
                  <td className="p-3 font-semibold">1.4°F</td>
                  <td className="p-3">~5,660</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Dayton</td>
                  <td className="p-3 font-semibold">~0°F</td>
                  <td className="p-3">~5,620</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Cincinnati</td>
                  <td className="p-3 font-semibold">5.1°F</td>
                  <td className="p-3">~4,870</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            The ENERGY STAR Cold Climate Heat Pump specification requires ≥15.2 SEER2, ≥8.1 HSPF2, a COP ≥1.75 at 5°F, and heating capacity at 5°F must be ≥70% of rated capacity at 47°F. These specifications are well-matched to Ohio&apos;s climate. For northern Ohio cities (Toledo, Cleveland, Akron), cold-climate-rated equipment is essential rather than optional.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Ohio homeowners considering a heat pump paired with battery storage can review our{" "}
            <Link href="/battery" className="text-brand-600 hover:underline">guide to home batteries</Link>
            {" "}for current economics and incentive details.
          </p>
        </div>
      </section>

      {/* 12. HOW TO APPLY */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to apply for Ohio incentives</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            With federal credits gone and HEAR/HOMES pending, the application process in Ohio currently centers on ECO-Link financing and income-qualified programs.
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-gray-900">Check your AMI bracket</p>
                <p className="text-sm text-gray-700">Use HUD income limits for your Ohio county to determine whether you fall below 80%, between 80–150%, or above 150% of Area Median Income. This determines your eligibility for HEAR (when launched), HOMES tier, and HELP.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900">Apply for ECO-Link pre-approval</p>
                <p className="text-sm text-gray-700">Contact a participating bank listed at tos.ohio.gov to apply for an ECO-Link loan with the 3% interest rate reduction. Have your contractor provide an ENERGY STAR equipment specification and project estimate.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-900">Get a home energy audit</p>
                <p className="text-sm text-gray-700">A whole-home energy audit establishes a baseline for HOMES program eligibility (which requires documented energy savings of 20%+ or 35%+). This positions you to claim HOMES rebates as soon as the program launches.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <p className="font-semibold text-gray-900">Monitor HEAR/HOMES launch</p>
                <p className="text-sm text-gray-700">Check the Ohio Department of Development at development.ohio.gov and energyhelp.ohio.gov for official launch announcements. If you can delay installation, waiting for HEAR could save up to $8,000 for income-qualified households.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. WHAT TO WATCH */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to watch for in Ohio</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">IRA funding runway</p>
              <p className="text-sm text-gray-600 mt-1">IRA funding for HEAR and HOMES remains authorized through September 30, 2031 or until depleted. The OBBBA did not terminate these programs. However, future congressional action could modify or rescind remaining funds. Ohio&apos;s $249 million allocation is secure for now, but the political environment around IRA spending remains volatile.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">HEAR/HOMES launch timing</p>
              <p className="text-sm text-gray-600 mt-1">The Ohio Department of Development received DOE approval but has not announced a launch date. Industry sources expected launch sometime in 2026. When the programs go live, demand will likely be high — get your energy audit and contractor quotes prepared in advance.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">FirstEnergy ESP6 proceedings</p>
              <p className="text-sm text-gray-600 mt-1">FirstEnergy filed its sixth Electric Security Plan with PUCO in January 2025, proposing new residential efficiency programs for Ohio Edison, The Illuminating Company, and Toledo Edison customers. If approved, this could restore utility rebates for northeastern Ohio homeowners. Monitor PUCO docket proceedings for updates.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">State legislative action on efficiency mandates</p>
              <p className="text-sm text-gray-600 mt-1">HB 79, which would have reauthorized voluntary utility efficiency programs, died in December 2024. Similar legislation could be reintroduced in the current General Assembly. If passed, it would allow Ohio utilities to voluntarily offer residential rebate programs again.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 14. FAQ */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently asked questions</h2>
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
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-3">See also</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/heat-pumps/states/pa" className="text-brand-600 hover:underline">
                Pennsylvania Heat Pump Rebates 2026
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/mi" className="text-brand-600 hover:underline">
                Michigan Heat Pump Rebates 2026
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/in" className="text-brand-600 hover:underline">
                Indiana Heat Pump Rebates 2026
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/ky" className="text-brand-600 hover:underline">
                Kentucky Heat Pump Rebates 2026
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/wv" className="text-brand-600 hover:underline">
                West Virginia Heat Pump Rebates 2026
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

      {/* 16. SOURCES */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="space-y-2 text-sm">
            {ohIncentive.sources.map((source: { label: string; url: string }, index: number) => (
              <li key={index}>
                <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">
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
              <strong>Disclaimer:</strong> This page covers the main statewide, utility, and IRA heat pump incentives available to Ohio homeowners in 2026. It does not calculate savings, guarantee eligibility, or represent any incentive program. Ohio&apos;s HEAR and HOMES programs have not launched as of March 2026, and expected rebate amounts may change when programs are finalized. We verify status regularly but programs can change without notice. Always confirm current amounts and eligibility with the Ohio Department of Development, your utility, and your contractor before making decisions.
            </p>
          </div>
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
