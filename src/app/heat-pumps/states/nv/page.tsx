import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Nevada Heat Pump Rebates 2026: $510–$3,400 + NV Energy PowerShift | Home Energy Basics",
  description:
    "NV Energy offers $510–$3,400 for heat pumps. IRA HEAR covers up to $8,000. Federal tax credits ended. Here's every Nevada heat pump incentive in 2026.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/nv",
  },
  openGraph: {
    title: "Nevada Heat Pump Rebates 2026",
    description:
      "NV Energy rebates up to $3,400 plus pending IRA programs up to $8,000 — the complete guide to Nevada heat pump incentives after federal credits expired.",
    url: "https://homeenergybasics.com/heat-pumps/states/nv",
    type: "article",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What heat pump rebates are available in Nevada in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NV Energy\u2019s PowerShift program offers $510\u2013$3,400 for air-source heat pumps and $400 for heat pump water heaters. Federal Section 25C and 25D tax credits expired December 31, 2025. Nevada\u2019s IRA-funded HEAR and HOMES rebate programs (up to $8,000 for qualifying households) are approved but have not yet launched as of March 2026. Nevada has no state income tax, so there are no state-level heat pump tax credits.",
      },
    },
    {
      "@type": "Question",
      name: "Can I stack NV Energy rebates with HEAR or HOMES in Nevada?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, NV Energy PowerShift rebates can be combined with state-administered HEAR or HOMES rebates once those programs launch, as they come from different funding sources. However, HEAR and HOMES cannot be used on the same measure \u2014 you can use different programs for different parts of the same project (for example, HEAR for the heat pump and HOMES for envelope upgrades). Total rebates cannot exceed total project cost.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a cold-climate heat pump in Nevada?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on where you live. Las Vegas has a heating design temperature around 29\u00b0F, so any standard heat pump works well. Reno\u2019s design temperature is approximately 9\u00b0F, which requires a cold-climate heat pump (ccASHP) to maintain adequate heating capacity. Elko drops to around -3\u00b0F to -5\u00b0F, making cold-climate equipment essential and a dual-fuel backup recommended.",
      },
    },
    {
      "@type": "Question",
      name: "Who administers Nevada\u2019s heat pump rebate programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NV Energy administers the PowerShift rebate program directly through participating contractors. The Governor\u2019s Office of Energy (GOE) oversees the pending HEAR and HOMES programs, with implementation contracted to a consortium of VEIC, Everblue, and APTIM. The Nevada Housing Division administers the Weatherization Assistance Program through regional subgrantees.",
      },
    },
    {
      "@type": "Question",
      name: "When will Nevada\u2019s HEAR and HOMES rebate programs launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As of March 2026, the launch date remains listed as \u201cTBD \u2014 Pending federal review and program guidance\u201d on the Governor\u2019s Office of Energy website. Nevada was allocated approximately $96 million in IRA funding and awarded an implementation contract in December 2024. Homeowners should monitor energy.nv.gov for launch announcements.",
      },
    },
  ],
};

export default function NevadaPage() {
  const nvIncentive = incentives.NV;
  const formattedDate = formatDate(nvIncentive.lastVerified);

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
            {" "}/ Nevada
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nevada Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Federal tax credits are gone, and Nevada&apos;s IRA-funded state rebate programs
            haven&apos;t launched yet. In 2026, most homeowners rely on NV Energy PowerShift
            rebates (<strong>$510–$3,400</strong> for heat pumps), with up to{" "}
            <strong>$8,000</strong> coming later through pending HEAR and HOMES programs. This
            guide covers all major Nevada heat pump incentives available in 2026, including NV
            Energy PowerShift, HEAR, HOMES, and weatherization programs. Here&apos;s what&apos;s
            actually available.
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
          <StatusCard incentive={nvIncentive} />
        </div>
      </section>

      {/* 3. Short Version */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Short Version</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ NV Energy PowerShift rebates</p>
              <p className="text-sm text-green-900">
                $510–$3,400 for ducted air-source heat pumps, $1,360–$2,720 for ductless mini-splits,
                and $400 for heat pump water heaters. Applied as instant point-of-sale discounts through
                participating contractors.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ IRA rebates approved (pending launch)</p>
              <p className="text-sm text-green-900">
                Nevada was allocated ~$96 million for HEAR and HOMES programs. HEAR covers up to $8,000
                for heat pumps for households below 150% AMI. Launch date is TBD.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Total potential savings</p>
              <p className="text-sm text-green-900">
                $510–$2,000 (above 150% AMI) to $11,400+ (below 80% AMI) once HEAR launches.
                Full electrification packages can reach ~$14,000 total incentives for
                income-qualifying households.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">✗ Federal tax credits expired</p>
              <p className="text-sm text-red-900">
                Section 25C ($2,000/year for heat pumps) and Section 25D (30% for geothermal)
                both ended December 31, 2025 under the One Big Beautiful Bill Act. No replacement
                credits have been enacted.
              </p>
            </div>
            <div className="md:col-span-2 bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="font-semibold text-amber-800 mb-1">⚠ HEAR and HOMES have not launched yet</p>
              <p className="text-sm text-amber-900">
                As of March 2026, only NV Energy rebates are confirmed active. The state&apos;s $96 million
                IRA allocation is approved but consumer-facing programs remain pending. Apply for NV
                Energy PowerShift rebates now — HEAR and HOMES can be applied for separately when
                they become available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Federal Expired */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Federal Tax Credits Have Ended</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <p className="text-red-900 leading-relaxed">
              <strong>Section 25C</strong> (Energy Efficient Home Improvement Credit) and{" "}
              <strong>Section 25D</strong> (Residential Clean Energy Credit) were both terminated
              by the One Big Beautiful Bill Act, effective <strong>December 31, 2025</strong>.
              Section 25C had provided up to <strong>$2,000 per year</strong> for qualifying heat
              pumps. Section 25D covered geothermal heat pumps at 30% with no dollar cap. Neither
              credit is available for equipment installed in 2026.{" "}
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-red-800 underline">
                Full details on what changed
              </Link>.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            The &quot;placed in service&quot; rules are strict: equipment must have been physically
            installed and operational by December 31, 2025 to qualify. A homeowner who paid in 2025
            but whose installation was completed in January 2026 cannot claim either credit. Payment
            timing is irrelevant — only the installation completion date matters.
          </p>
          <p className="text-gray-700 leading-relaxed">
            One favorable provision survived: unused Section 25D credits from qualifying 2025
            installations can be carried forward to future tax years.
          </p>
        </div>
      </section>

      {/* 5. HEAR (Primary — pending) */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Home Electrification and Appliance Rebates (HEAR)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Nevada was allocated approximately <strong>$47.9 million</strong> for the HEAR program,
            which targets households below 150% of Area Median Income (AMI). With{" "}
            <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
              federal tax credits now expired
            </Link>, HEAR is the primary federal incentive pathway for Nevada homeowners. The
            Governor&apos;s Office of Energy (GOE) awarded a <strong>$96 million</strong>{" "}
            implementation contract to a consortium of VEIC, Everblue, and APTIM in December 2024.
            As of March 2026, the program launch date is listed as &quot;TBD — Pending federal
            review and program guidance.&quot;
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">HEAR rebate amounts (when launched)</h3>
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
                  <td className="p-3">Heat pump (space heating/cooling)</td>
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
                  <td className="p-3">Electrical wiring</td>
                  <td className="p-3 font-semibold">$2,500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Weatherization (insulation, air sealing)</td>
                  <td className="p-3 font-semibold">$1,600</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump clothes dryer or electric stove</td>
                  <td className="p-3 font-semibold">$840</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Maximum per household</td>
                  <td className="p-3 font-semibold">$14,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Households at or below <strong>80% AMI</strong> receive coverage of 100% of costs up to
            these caps. Households at <strong>80–150% AMI</strong> receive 50% of costs up to these
            caps. Households above 150% AMI are not eligible for HEAR.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="font-semibold text-blue-800 mb-1">Nevada has no state income tax</p>
            <p className="text-sm text-blue-900">
              Because Nevada has no state income tax, there are no state-level tax credits for heat
              pumps — and there never will be. This makes utility rebates and federal IRA programs the
              only incentive pathways for Nevada homeowners.
            </p>
          </div>
        </div>
      </section>

      {/* 6. HOMES (Secondary — pending) */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Home Efficiency Rebates (HOMES)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Nevada was allocated approximately <strong>$48.2 million</strong> for the HOMES program,
            which rewards whole-home energy savings and is open to all income levels. Unlike HEAR,
            HOMES does not cap eligibility by income — but the rebate amounts are based on the
            percentage of energy reduction achieved across the whole home.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Energy reduction</th>
                  <th className="text-left p-3 font-semibold">Standard rebate</th>
                  <th className="text-left p-3 font-semibold">Low-income (≤80% AMI)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">35%+ reduction</td>
                  <td className="p-3 font-semibold">Up to $4,000 (50% of costs)</td>
                  <td className="p-3 font-semibold">Up to $8,000 (80% of costs)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">20–34% reduction</td>
                  <td className="p-3 font-semibold">Up to $2,000 (50% of costs)</td>
                  <td className="p-3 font-semibold">Up to $4,000 (80% of costs)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="font-semibold text-amber-800 mb-1">⚠ Common mistake: confusing HEAR and HOMES</p>
            <p className="text-sm text-amber-900">
              HEAR and HOMES cannot be used on the same measure, but can cover different parts of the
              same project — for example, HEAR for the heat pump equipment and HOMES for envelope
              upgrades like insulation and air sealing. Choosing the right combination depends on your
              income level and project scope.
            </p>
          </div>
        </div>
      </section>

      {/* 7. NV Energy Utility Programs */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">NV Energy PowerShift Rebates</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            NV Energy serves approximately 90% of Nevada — including Las Vegas, Reno, Henderson, and
            Elko — and its PowerShift program is the only currently active, confirmed rebate for heat
            pump installations. Rebates are applied as instant point-of-sale discounts through
            participating contractors. The program operates on first-come, first-served funding with
            a 2026 budget of <strong>$11.1 million</strong>. Apply early — this program exhausted its
            budget by July 2024 and required an emergency reallocation.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Equipment</th>
                  <th className="text-left p-3 font-semibold">Standard rebate</th>
                  <th className="text-left p-3 font-semibold">Income-qualified</th>
                  <th className="text-left p-3 font-semibold">Minimum efficiency</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Ducted air-source heat pump</td>
                  <td className="p-3 font-semibold">$510–$3,400</td>
                  <td className="p-3 font-semibold">Up to $3,400</td>
                  <td className="p-3">15.2 SEER2 / 7.8 HSPF2</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ductless mini-split heat pump</td>
                  <td className="p-3 font-semibold">$1,360–$2,720</td>
                  <td className="p-3 font-semibold">Up to $2,720+</td>
                  <td className="p-3">18 SEER2 / 9 HSPF2</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Heat pump water heater</td>
                  <td className="p-3 font-semibold">$400</td>
                  <td className="p-3 font-semibold">$400</td>
                  <td className="p-3">ENERGY STAR certified</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">AC tune-up</td>
                  <td className="p-3 font-semibold">$200</td>
                  <td className="p-3 font-semibold">$300</td>
                  <td className="p-3 text-gray-500">—</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Smart thermostat</td>
                  <td className="p-3 font-semibold">Free</td>
                  <td className="p-3 font-semibold">Free</td>
                  <td className="p-3 text-gray-500">—</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mb-6">
            Higher-efficiency systems (higher SEER2/HSPF2) qualify for larger rebates within each
            tier. All equipment must be AHRI certified and under 65,000 BTU/h.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Income-qualified eligibility is automatic for customers enrolled in the Nevada Energy
            Assistance Program (EAP) or residing in affordable housing administered by the Southern
            Nevada Regional Housing Authority, Reno Housing Authority, Nevada Rural Housing Authority,
            HUD, or Section 8 programs.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Other Nevada utilities</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Boulder City Electric Utility</strong> offers tiered heat pump rebates:{" "}
            <strong>$600</strong> at 16 SEER/9 HSPF, <strong>$1,200</strong> at 18 SEER/10 HSPF,
            and <strong>$2,400</strong> at 20+ SEER/11+ HSPF. Income-qualified residents can receive{" "}
            <strong>$2,000–$4,000</strong>. However, Boulder City serves only about 16,000 residents.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Southwest Gas</strong> (natural gas utility for parts of Las Vegas and Reno)
            does not offer heat pump rebates — its programs focus exclusively on gas appliances. Other
            rural co-ops and municipal utilities generally do not offer heat pump-specific programs.
          </p>
        </div>
      </section>

      {/* 9. Stacking */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Programs Stack</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            NV Energy PowerShift rebates can be combined with state-administered HEAR or HOMES
            rebates once those programs launch, since they come from different funding sources. NV
            Energy&apos;s terms prohibit stacking with other NV Energy programs but do not restrict
            combining with state programs. HEAR and HOMES cannot be used on the same measure but can
            cover different components of the same project.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            For a typical <strong>$12,000–$15,000</strong> ducted air-source heat pump installation:
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 150% AMI — ducted heat pump</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>NV Energy PowerShift: $510–$2,000</li>
                <li>HOMES (if 35%+ energy savings): up to $4,000</li>
                <li>HEAR: not eligible at this income</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$6,000</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">80–150% AMI — ducted heat pump</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>NV Energy PowerShift: $510–$2,000</li>
                <li>HEAR (50% of costs, up to $8,000): ~$5,000–$7,500</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$9,500</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">Below 80% AMI — ducted heat pump</p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>NV Energy income-qualified: up to $3,400</li>
                <li>HEAR (100% of costs, up to $8,000): up to $8,000</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$11,400</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-5">
            <p className="font-semibold text-gray-900 mb-1">What You&apos;ll Actually Pay</p>
            <p className="text-sm text-gray-700">
              On a $12,000–$15,000 installation: <strong>$6,000–$14,500 out of pocket</strong> for
              above-150% AMI households (NV Energy only, until HOMES launches). With HEAR,
              moderate-income households could pay <strong>$2,500–$9,500</strong>, and low-income
              households may pay <strong>$600–$3,600</strong> or less. These ranges assume HEAR
              launches — until then, only NV Energy rebates reduce costs.
            </p>
          </div>
        </div>
      </section>

      {/* 10. Weatherization */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Weatherization and Financing</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Nevada <strong>Weatherization Assistance Program (WAP)</strong>, administered by
            the Nevada Housing Division, provides free energy efficiency upgrades — including HVAC
            repair or replacement — for households at or below 200% of the Federal Poverty Level.
            Services are delivered through three regional subgrantees: HELP of Southern Nevada (Las
            Vegas, Henderson), Rural Nevada Development Corporation (rural counties), and Community
            Services Agency (Washoe County, Carson City).
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Governor&apos;s Office of Energy also runs the <strong>HEROS program</strong> (Home
            Energy Retrofit Opportunity for Seniors), providing free energy assessments and
            weatherization for income-qualifying seniors with per-home budgets of approximately{" "}
            <strong>$6,000–$8,000</strong>.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Nevada Clean Energy Fund RE-UP Loans</h3>
          <p className="text-gray-700 leading-relaxed">
            The Nevada Clean Energy Fund offers <strong>RE-UP loans</strong> of{" "}
            <strong>$3,000–$50,000</strong> at fixed rates of 7.50%–12.00% with terms of 3–10
            years. No minimum credit score is required and there are no dealer fees or application
            fees. Small rate discounts are available for joint applications (0.50%), low-income
            applicants (0.25%), and shorter loan terms (0.50%). These are not zero-interest loans
            but may help bridge the gap for homeowners who cannot cover upfront costs.
          </p>
        </div>
      </section>

      {/* 11. Climate */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Climate Context: Two Different Nevadas</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Nevada spans two dramatically different climate zones that directly affect which heat
            pump to install. Choosing the wrong type for your location can mean inadequate heating,
            higher bills, or both.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">City</th>
                  <th className="text-left p-3 font-semibold">IECC Zone</th>
                  <th className="text-left p-3 font-semibold">Design temp (99.6%)</th>
                  <th className="text-left p-3 font-semibold">Heat pump type needed</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Las Vegas</td>
                  <td className="p-3">3B (hot-dry)</td>
                  <td className="p-3 font-semibold">~29°F</td>
                  <td className="p-3">Standard — prioritize high SEER2</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Reno</td>
                  <td className="p-3">5B (cold-dry)</td>
                  <td className="p-3 font-semibold">~9°F</td>
                  <td className="p-3">Cold-climate (ccASHP) required</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Elko</td>
                  <td className="p-3">5B/6B border</td>
                  <td className="p-3 font-semibold">~-3°F to -5°F</td>
                  <td className="p-3">Cold-climate + dual-fuel backup</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Las Vegas</strong> is one of America&apos;s most cooling-dominant cities, with
            roughly 3,200–3,600 cooling degree days versus only 2,000–2,200 heating degree days.
            Standard heat pumps work well here year-round. Prioritize high SEER2 and EER ratings
            to handle extreme summer cooling loads exceeding 110°F.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Reno</strong> is the opposite: approximately 5,674 heating degree days versus
            only 508 cooling degree days, with 166 days per year below freezing. Cold-climate heat
            pumps maintain roughly 70% or more of rated capacity at 5°F with a COP above 2.0 —
            standard units may shut down or rely entirely on electric resistance backup at these
            temperatures.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Elko</strong> averages around 7,000 heating degree days with winter lows
            regularly below 0°F. A dual-fuel configuration (cold-climate heat pump plus gas or
            propane furnace backup) is the most practical approach here.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-green-800 mb-1">✓ Best candidates for heat pumps in Nevada</p>
            <p className="text-sm text-green-900">
              Las Vegas homeowners replacing aging AC/furnace combos (heat pumps handle both jobs in
              one unit). Propane-heated homes in rural Nevada (high fuel savings). Reno homeowners
              willing to invest in cold-climate models. Income-qualifying households statewide (once
              HEAR launches, rebates can cover most or all equipment costs).
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Desert-specific considerations include accelerated coil fouling from dust (requiring
            monthly filter changes during summer), UV degradation of outdoor components, and altitude
            derating of 2–5% per 1,000 feet above sea level — relevant even in Las Vegas at 2,178
            feet and especially in Reno (4,505 feet) and Elko (5,075 feet). About 68% of Nevada
            homes heat with natural gas and 23% with electricity.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Considering pairing a heat pump with a{" "}
            <Link href="/battery" className="text-brand-600 hover:underline">
              home battery system
            </Link>? Our battery guide covers current economics and whether storage makes sense
            with Nevada&apos;s net metering rules.
          </p>
        </div>
      </section>

      {/* 12. How to Apply */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Apply</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            NV Energy PowerShift rebates are applied at the point of sale through participating
            contractors — there is no separate application or reimbursement process.
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-gray-900">Find a participating NV Energy contractor</p>
                <p className="text-sm text-gray-700">
                  Use NV Energy&apos;s contractor directory at{" "}
                  <a href="https://www.nvenergy.com/save-with-powershift" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">nvenergy.com/save-with-powershift</a>.
                  Only work with contractors enrolled in the PowerShift program — the rebate cannot
                  be applied retroactively.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900">Confirm equipment meets efficiency requirements</p>
                <p className="text-sm text-gray-700">
                  Minimum 15.2 SEER2 / 7.8 HSPF2 for ducted systems or 18 SEER2 / 9 HSPF2 for
                  ductless. Higher-efficiency equipment qualifies for larger rebates. All equipment
                  must be AHRI certified and under 65,000 BTU/h.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-900">Rebate is applied as an instant discount</p>
                <p className="text-sm text-gray-700">
                  The contractor applies the rebate directly to your invoice — no paperwork to
                  submit, no check to wait for. The discount appears on your final bill.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <p className="font-semibold text-gray-900">Check income-qualified eligibility for higher rebates</p>
                <p className="text-sm text-gray-700">
                  If you&apos;re enrolled in the Nevada Energy Assistance Program (EAP) or reside
                  in qualifying affordable housing, confirm with NV Energy to receive the higher
                  income-qualified rebate tier.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. What to Watch */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Watch</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">HEAR and HOMES launch date</p>
              <p className="text-sm text-gray-600 mt-1">
                Nevada&apos;s $96 million IRA allocation is approved and an implementation team is
                in place. A consumer-facing launch would immediately expand available rebates by
                $8,000 or more for qualifying households. Monitor energy.nv.gov for updates.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">IRA funding runway</p>
              <p className="text-sm text-gray-600 mt-1">
                The One Big Beautiful Bill Act preserved IRA rebate funding but political
                uncertainty remains. Executive Order 14154 briefly froze IRA disbursements in
                January 2025 before courts intervened. Future policy changes could affect the
                timeline or scope of Nevada&apos;s programs.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">NV Energy PowerShift budget</p>
              <p className="text-sm text-gray-600 mt-1">
                The program has a 2026 budget of $11.1 million (increasing to $15.6 million in
                2027). This program has historically run out of funding mid-year — it exhausted
                its $7.845 million budget by July 2024. Apply early.
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

      {/* 15. See Also */}
      <section className="py-8 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-3">See also</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/heat-pumps/states/ca" className="text-brand-600 hover:underline">
                California Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/az" className="text-brand-600 hover:underline">
                Arizona Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/ut" className="text-brand-600 hover:underline">
                Utah Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/or" className="text-brand-600 hover:underline">
                Oregon Heat Pump Rebates &amp; Incentives
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
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="space-y-2 text-sm">
            {nvIncentive.sources.map((source: { label: string; url: string }, index: number) => (
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
              <strong>Disclaimer:</strong> This page covers the main statewide, utility, and IRA
              heat pump incentives available to Nevada homeowners in 2026. It does not calculate
              savings, guarantee eligibility, or represent any incentive program. NV Energy
              PowerShift rebates are subject to annual budget limits and may be exhausted before
              year-end. HEAR and HOMES program details reflect federal guidelines and may change
              when Nevada finalizes its state plan. We verify status regularly but programs can
              change without notice. Always confirm current amounts and eligibility with NV Energy,
              the Governor&apos;s Office of Energy, and your contractor before making decisions.
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
