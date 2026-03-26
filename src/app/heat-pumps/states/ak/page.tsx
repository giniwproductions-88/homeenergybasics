import Link from "next/link";
import type { Metadata } from "next";
import { incentives, formatDate } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Alaska Heat Pump Rebates 2026: $4,000–$17,500 + ACES Program | Home Energy Basics",
  description:
    "ACES offers $4,000–$8,500 for coastal communities. Fairbanks change-out covers up to $17,500. Federal credits ended. Every Alaska heat pump incentive in 2026.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/states/ak",
  },
  openGraph: {
    title: "Alaska Heat Pump Rebates 2026",
    description:
      "ACES grants up to $8,500, Fairbanks change-out up to $17,500, utility rebates up to $1,000 — the complete guide to Alaska heat pump incentives after federal credits expired.",
    url: "https://homeenergybasics.com/heat-pumps/states/ak",
    type: "article",
  },
};

export default function AlaskaPage() {
  const akIncentive = incentives.AK;
  const formattedDate = formatDate(akIncentive.lastVerified);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What heat pump rebates are available in Alaska in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Alaska heat pump incentives depend heavily on where you live. The ACES program offers $4,000\u2013$8,500 for 43 coastal communities from Ketchikan to Kodiak. The Fairbanks North Star Borough air quality change-out program provides $7,500\u2013$17,500 for replacing solid-fuel heating devices. Utility rebates range from $500 to $1,000 through Chugach Electric, Homer Electric, and Alaska Power & Telephone. Federal tax credits (25C/25D) expired December 31, 2025. The IRA-funded HEAR and HOMES programs have not launched in Alaska.",
        },
      },
      {
        "@type": "Question",
        name: "Can I stack the ACES program with utility rebates in Alaska?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. ACES grants (EPA-funded) can generally be stacked with utility rebates from Chugach Electric, Homer Electric, or other providers. However, ACES and HEAR (when it launches) likely cannot fund the same heat pump installation since both are federal grants. Utility rebates from different funding sources stack without restriction. Combined incentives cannot exceed total project cost.",
        },
      },
      {
        "@type": "Question",
        name: "Do heat pumps work in Alaska\u2019s extreme cold?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Modern cold-climate heat pumps work effectively in much of Alaska. In Southeast Alaska (Juneau, Sitka, Ketchikan), where design temperatures are around 3\u00b0F, heat pumps can serve as the sole heating source. In Anchorage (design temp -11\u00b0F), they work well with occasional backup. In Fairbanks (design temp -47\u00b0F), supplemental heating is required for the coldest periods. Even at reduced efficiency in extreme cold, heat pumps deliver significantly more heat per unit of electricity than electric resistance heating.",
        },
      },
      {
        "@type": "Question",
        name: "Who administers Alaska\u2019s heat pump incentive programs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The ACES program is administered by Southeast Conference and Alaska Heat Smart, funded by an EPA Climate Pollution Reduction Grant. The Alaska Housing Finance Corporation (AHFC) administers the state\u2019s IRA-funded rebate programs (HEAR and HOMES, not yet launched), the Weatherization Assistance Program, and energy efficiency loan programs. The Fairbanks North Star Borough Air Quality Division runs the solid-fuel change-out program. Individual utilities administer their own rebate programs.",
        },
      },
      {
        "@type": "Question",
        name: "Has Alaska launched the HEAR rebate program?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. As of March 2026, Alaska\u2019s HEAR and HOMES programs have not launched and no start date has been announced. Alaska was allocated approximately $74.6 million for both programs, administered by the Alaska Energy Authority in partnership with AHFC. When launched, HEAR would provide up to $8,000 for heat pump HVAC and up to $14,000 total per household for income-qualifying homeowners. The programs survived the One Big Beautiful Bill Act and remain funded through 2031.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd data={faqJsonLd} />

      {/* 1. Hero — gradient */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="container-narrow">
          <nav className="text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-brand-600">Home</Link>
            {" "}/{" "}
            <Link href="/heat-pumps" className="hover:text-brand-600">Heat Pumps</Link>
            {" "}/ Alaska
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Alaska Heat Pump Rebates &amp; Incentives (2026)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Alaska heat pump incentives are region-dependent. The ACES program offers <strong>$4,000–$8,500</strong> for
            43 coastal communities, the Fairbanks change-out program covers up to <strong>$17,500</strong> for
            replacing solid-fuel heating, and utility rebates add <strong>$500–$1,000</strong>. Federal
            tax credits ended December 31, 2025. The IRA-funded HEAR and HOMES programs
            have not launched. This guide covers all major Alaska heat pump incentives
            available in 2026, including the ACES program, Fairbanks change-out program,
            utility rebates, and IRA program status. Here&apos;s what&apos;s actually available.
          </p>
          <p className="text-sm text-gray-500">
            Last verified: {formattedDate}
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Rates and program availability may change after this date.
          </p>
        </div>
      </section>

      {/* 2. Status Card — white */}
      <section className="py-8">
        <div className="container-narrow">
          <StatusCard incentive={akIncentive} />
        </div>
      </section>

      {/* 3. Short Version — white */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Short Version</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ ACES Program (43 Coastal Communities)</p>
              <p className="text-sm text-green-900">
                $4,000–$8,500 per household for air-source heat pump installation, income-tiered.
                Funded by a $38.6 million EPA grant. Active and disbursing funds.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Fairbanks Change-Out Program</p>
              <p className="text-sm text-green-900">
                Up to $7,500–$17,500 for replacing wood, coal, or oil heating with a heat pump
                in the Fairbanks North Star Borough nonattainment area.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ Total Potential Savings</p>
              <p className="text-sm text-green-900">
                $5,000 (above 150% AMI, coastal) to $9,500+ (below 80% AMI, coastal).
                Fairbanks solid-fuel change-out grants can reach ~$17,500 total incentives.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">✗ Federal Tax Credits Expired</p>
              <p className="text-sm text-red-900">
                Section 25C and 25D both ended December 31, 2025 under the One Big Beautiful
                Bill Act. No federal tax credit is available for 2026 heat pump installations.
              </p>
            </div>
            <div className="md:col-span-2 bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="font-semibold text-amber-800 mb-1">⚠ Most Programs Are Region-Specific</p>
              <p className="text-sm text-amber-900">
                ACES covers only coastal communities from Ketchikan to Kodiak — not Fairbanks, Anchorage, or the
                Interior. The FNSB change-out covers only the Fairbanks nonattainment area. Anchorage
                residents are limited to the Chugach Electric pilot ($900). IRA-funded HEAR and HOMES
                rebates (up to $14,000) have not launched in Alaska and no start date has been announced.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Federal Expired — bg-gray-50 */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Federal Tax Credits Are Gone</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <p className="text-red-900 leading-relaxed">
              <strong>Both Section 25C and Section 25D federal tax credits ended December 31, 2025.</strong> The
              One Big Beautiful Bill Act (signed July 4, 2025) accelerated their expiration by seven years.
              Section 25C previously covered up to <strong>$2,000</strong> for air-source heat pumps. Section 25D
              covered 30% of geothermal heat pump costs with no cap. Neither credit is available for any
              heat pump installed in 2026. The &quot;placed in service&quot; rule means a system purchased in 2025
              but installed in 2026 does not qualify. For full details, see{" "}
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-red-700 underline">
                Federal Heat Pump Tax Credits Ended
              </Link>.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Alaska has no state income tax, so there are no state-level tax credits for heat pumps
            or any other energy improvements. All remaining incentives come from grant programs,
            utility rebates, and financing programs.
          </p>
        </div>
      </section>

      {/* 5. ACES Program (Primary) — white */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            ACES Program — Alaska&apos;s Largest Active Heat Pump Incentive
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Accelerating Clean Energy Savings (ACES) program is the most significant heat pump
            incentive currently operating in Alaska. Funded by a <strong>$38.6 million</strong> EPA
            Climate Pollution Reduction Grant and administered by Southeast Conference and Alaska
            Heat Smart, ACES provides income-tiered grants for air-source heat pump installation
            across <strong>43 coastal communities</strong> from Ketchikan to Kodiak.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Income Tier</th>
                  <th className="text-left p-3 font-semibold">ACES Grant</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">≤80% of Area Median Income (AMI)</td>
                  <td className="p-3 font-semibold">$8,500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">80–150% AMI</td>
                  <td className="p-3 font-semibold">$6,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Above 150% AMI</td>
                  <td className="p-3 font-semibold">$4,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Applicants must currently heat with oil, propane, gas, or wood and must complete a
            pre-installation energy assessment. Approved cold-climate models include Daikin
            Aurora/Atmosphera, Mitsubishi Hyper Heating M/P series, and Fujitsu LZAH/RLX series.
            The program operates on a reimbursement model — homeowners pay upfront and receive
            grants after installation. Approximately 64 installations have been completed with
            300+ applications in progress as of early 2026.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-amber-800 mb-1">⚠ ACES Does Not Cover Interior Alaska</p>
            <p className="text-sm text-amber-900">
              ACES is limited to 43 coastal and Southcentral communities. Fairbanks, the
              Mat-Su Valley, and most road-system communities between Anchorage and Fairbanks
              are not eligible. Anchorage is not in the ACES service area.
            </p>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Other Alaska Heat Smart Programs</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Alaska Heat Smart also administers two smaller programs. The <strong>Clean Heat Incentive
            Program (CHIP)</strong> provides $1,500–$3,000 for homeowners in Juneau and Sitka earning
            80–125% of AMI. The <strong>Healthy Homes Program</strong> offers up to $15,000 in comprehensive
            home improvements including heat pumps for qualified lower-income families in Juneau.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="font-semibold text-blue-800 mb-1">Juneau: Alaska&apos;s Heat Pump Capital</p>
            <p className="text-sm text-blue-900">
              Juneau has the highest per-capita heat pump adoption rate in Alaska, driven by
              cheap hydroelectric power (97% of the grid) and expensive heating oil. Some
              residents report 50% reductions in heating costs after installing heat pumps.
              Multiple layered programs — ACES, CHIP, Healthy Homes, the Alaska Carbon
              Reduction Fund, and Thermalize Juneau group-purchasing campaigns — make Juneau
              the strongest market for heat pumps in the state.
            </p>
          </div>
        </div>
      </section>

      {/* 6. HEAR / HOMES Status — bg-gray-50 */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            IRA Rebates: HEAR &amp; HOMES Have Not Launched
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Alaska was allocated approximately <strong>$74.6 million</strong> in IRA funding for the
            Home Electrification and Appliance Rebates (HEAR) and Home Efficiency Rebates (HOMES)
            programs, administered by the Alaska Energy Authority in partnership with AHFC.
            As of March 2026, neither program has launched and no start date has been announced.
            Federal funding freezes in early 2025 and program design complexity have contributed
            to the delay.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">What HEAR Would Provide (When It Launches)</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Upgrade</th>
                  <th className="text-left p-3 font-semibold">Maximum Rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Heat pump HVAC</td>
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
                  <td className="p-3">Wiring</td>
                  <td className="p-3 font-semibold">$2,500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Per-household cap</td>
                  <td className="p-3 font-semibold">$14,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            HEAR eligibility would be limited to households below 150% AMI, with those below 80%
            AMI receiving 100% of costs (up to caps) and those at 80–150% AMI receiving 50%.
            The HOMES program would offer performance-based rebates of <strong>$2,000–$8,000</strong> tied
            to measured energy savings of 20–35%. Both programs survived the One Big Beautiful
            Bill Act and remain funded through 2031 or until funds are exhausted.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Active AHFC Programs</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            While HEAR and HOMES are pending, AHFC offers several active programs that can
            support heat pump installations:
          </p>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">New Home Construction Rebate</p>
              <p className="text-sm text-gray-600 mt-1">
                Up to <strong>$10,000</strong> for new construction meeting 5-Star Plus or higher energy
                efficiency standards. Funded at $7 million from IRA appropriations.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Energy Efficiency Interest Rate Reduction</p>
              <p className="text-sm text-gray-600 mt-1">
                Interest rate reductions on AHFC-financed mortgages for energy-efficient homes.
                Applies to the first $250,000 of loan amount. Heat pump installation qualifies
                if it improves the home&apos;s energy rating.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Renovation Loan Program</p>
              <p className="text-sm text-gray-600 mt-1">
                Up to $574,912 for energy improvements to existing owner-occupied homes,
                with terms up to 30 years at fixed rates. Heat pump installation is an
                eligible improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Utility + Local Programs — white */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Utility &amp; Local Programs</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Alaska&apos;s electric cooperatives and utilities offer a patchwork of heat pump incentives
            that vary widely by region. Most programs are modest compared to Lower 48 utilities,
            reflecting the economic reality that heat pumps compete against very different fuel
            costs depending on location.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Utility Rebates</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Utility</th>
                  <th className="text-left p-3 font-semibold">Region</th>
                  <th className="text-left p-3 font-semibold">Heat Pump Rebate</th>
                  <th className="text-left p-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Chugach Electric</td>
                  <td className="p-3">Anchorage</td>
                  <td className="p-3 font-semibold">$900</td>
                  <td className="p-3">Pilot program; $1,500 for commercial</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Homer Electric</td>
                  <td className="p-3">Kenai Peninsula</td>
                  <td className="p-3 font-semibold">$1,000</td>
                  <td className="p-3">$500 member + $500 installer; 20-unit cap</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Alaska Power &amp; Telephone</td>
                  <td className="p-3">SE communities</td>
                  <td className="p-3 font-semibold">$500–$1,000</td>
                  <td className="p-3">$500 match for Sealaska shareholders</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Petersburg Municipal P&amp;L</td>
                  <td className="p-3">Petersburg</td>
                  <td className="p-3 font-semibold">Varies</td>
                  <td className="p-3">HP &amp; HPWH; min HSPF ≥ 9.0</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">GVEA</td>
                  <td className="p-3">Fairbanks</td>
                  <td className="p-3 text-gray-500">—</td>
                  <td className="p-3">REDUCE loan at 3% ($500–$10,000)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">MEA</td>
                  <td className="p-3">Mat-Su Valley</td>
                  <td className="p-3 text-gray-500">—</td>
                  <td className="p-3">Program in development; not launched</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">AEL&amp;P</td>
                  <td className="p-3">Juneau</td>
                  <td className="p-3 text-gray-500">—</td>
                  <td className="p-3">No rebate; favorable rate structure</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Homer Electric&apos;s program requires pre-approval before purchasing or installing, and
            installations must be completed within 90 days of approval. Chugach Electric notes
            that its pilot &quot;may be most beneficial to members who do not have access to natural
            gas service.&quot; A June 2025 study found heat pumps cost Anchorage residents approximately
            <strong> $2,300 more annually</strong> than natural gas heating at current rate structures.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Fairbanks North Star Borough — Air Quality Change-Out Program
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            The FNSB Air Quality Division provides the state&apos;s largest local heat pump incentive
            through its solid-fuel heating change-out program. Fairbanks is an EPA-designated
            PM2.5 nonattainment area with severe winter air quality problems, and the borough
            offers substantial rebates for switching to cleaner heating — including heat pumps.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Device Being Replaced</th>
                  <th className="text-left p-3 font-semibold">Maximum Rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Hydronic heater (wood/coal boiler)</td>
                  <td className="p-3 font-semibold">$17,500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Wood stove, pellet stove, or coal stove</td>
                  <td className="p-3 font-semibold">$7,500</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Applicants must live within the nonattainment area, own the property, and receive
            pre-approval before replacing equipment. Heat pumps are explicitly eligible under
            the &quot;Electricity (Includes Heat Pumps)&quot; replacement category. This program is
            particularly important because Fairbanks residents are not eligible for the
            coastal-only ACES program.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-green-800 mb-1">✓ Best Candidates for Alaska Heat Pump Incentives</p>
            <p className="text-sm text-green-900">
              Southeast Alaska homeowners heating with oil who have access to cheap hydroelectric
              power and ACES grants. Fairbanks homeowners replacing a wood boiler or coal stove
              through the FNSB change-out program (up to <strong>$17,500</strong>). Kenai Peninsula
              homeowners who can stack Homer Electric&apos;s rebate with other programs. Juneau residents
              with access to multiple layered incentives.
            </p>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Other Local Programs</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Beyond ACES and FNSB, Juneau homeowners can access the Alaska Carbon Reduction Fund
            (partial to full funding for lower-income households), the Juneau Carbon Offset Fund,
            and Thermalize Juneau group-purchasing campaigns with bulk pricing. Low-interest loans
            are available through True North Federal Credit Union (up to $12,500 at 4% for 60
            months) and Tongass Federal Credit Union (up to $15,000 at 5.5% for 60 months).
          </p>
          <p className="text-gray-700 leading-relaxed">
            The Northwest Arctic Borough received a separate $55 million DOE grant to install
            850 heat pumps across 10 remote villages — a direct deployment program rather than
            a homeowner application process.
          </p>
        </div>
      </section>

      {/* 9. Stacking — bg-gray-50 */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Programs Stack</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Alaska&apos;s incentive programs can generally be combined, but stacking depends more on
            geography than income. ACES (EPA-funded) and utility rebates stack without restriction
            since they come from different funding sources. ACES and HEAR (when it launches) likely
            cannot fund the same heat pump installation since both are federal grants — homeowners
            would choose one. Combined incentives cannot exceed total project cost.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">Above 150% AMI — Coastal Community, Ducted System (~$14,000)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>ACES rebate: $4,000</li>
                <li>Utility rebate (HEA/AP&amp;T): $500–$1,000</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$5,000</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900 mb-2">80–150% AMI — Coastal Community, Ducted System (~$14,000)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>ACES rebate: $6,000</li>
                <li>Utility rebate (HEA/AP&amp;T): $500–$1,000</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$7,000</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-2">Below 80% AMI — Coastal Community OR Fairbanks Solid-Fuel Switch</p>
              <ul className="text-sm text-green-900 space-y-1">
                <li>Best case coastal: ACES $8,500 + utility $500–$1,000 = ~$9,500</li>
                <li>Best case Fairbanks: FNSB change-out up to $17,500 (hydronic heater)</li>
              </ul>
              <p className="font-semibold text-green-700 mt-2">Realistic maximum: ~$9,500 (coastal) or ~$17,500 (Fairbanks)</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-5">
            <p className="font-semibold text-gray-900 mb-1">What You&apos;ll Actually Pay</p>
            <p className="text-sm text-gray-700">
              For a typical <strong>$10,000–$15,000</strong> heat pump installation: out-of-pocket costs range
              from <strong>$0 (Fairbanks solid-fuel switch or coastal ≤80% AMI) to $9,000+
              (Anchorage with utility rebate only)</strong>. Anchorage homeowners without access to ACES
              or the FNSB program face the highest out-of-pocket costs in the state.
            </p>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Alaska has no state income tax, so there are no state tax credits to stack. GVEA&apos;s
            REDUCE loan (3% interest) provides financing but not a rebate. Low-interest credit
            union loans are available through Alaska Heat Smart partnerships in Southeast Alaska.
          </p>
        </div>
      </section>

      {/* 10. Weatherization — white */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Weatherization Assistance</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Alaska&apos;s Weatherization Assistance Program (WAP) provides free energy improvements for
            income-eligible households at or below <strong>200% of the federal poverty level</strong> ($37,620
            for one person; $78,000 for a family of four in Alaska, which uses higher poverty
            guidelines than the Lower 48). Heat pumps may be installed if the energy audit
            determines they are cost-effective for the home.
          </p>
          <p className="text-gray-700 leading-relaxed">
            WAP is administered by AHFC through local providers including Cook Inlet Housing
            Authority (Anchorage), RurAL CAP, and Alaska CDC. The program is funded at
            approximately $2 million annually plus $18 million in supplemental IIJA funding.
            Contact AHFC at{" "}
            <a
              href="https://www.ahfc.us/efficiency/programs-for-homeowners"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              ahfc.us
            </a>{" "}
            or call 907-338-6100 to check eligibility.
          </p>
        </div>
      </section>

      {/* 11. Climate — bg-gray-50 */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Climate Context: What Works Where</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Alaska spans IECC Climate Zones 7 (Very Cold) and 8 (Subarctic) — the two coldest
            zones in the U.S. classification system. Zone 8 is essentially unique to Alaska and
            covers the Interior and Arctic regions. Heat pump selection must match your local
            design temperature, and supplemental heating is required in most of the state outside
            Southeast Alaska.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">City</th>
                  <th className="text-left p-3 font-semibold">Design Temp (99.6%)</th>
                  <th className="text-left p-3 font-semibold">Climate Zone</th>
                  <th className="text-left p-3 font-semibold">Heat Pump Viability</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Juneau</td>
                  <td className="p-3 font-semibold">3°F</td>
                  <td className="p-3">7</td>
                  <td className="p-3">Excellent — sole heating source</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Anchorage</td>
                  <td className="p-3 font-semibold">-11°F</td>
                  <td className="p-3">7</td>
                  <td className="p-3">Good — occasional backup needed</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Fairbanks</td>
                  <td className="p-3 font-semibold">-47°F</td>
                  <td className="p-3">8</td>
                  <td className="p-3">Supplemental heat required</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Modern cold-climate heat pumps operate effectively down to approximately -13°F to
            -22°F, maintaining a coefficient of performance (COP) of 1.8–2.5 at those
            temperatures. Even at COP 1.8, heat pumps deliver 80% more heat energy than the
            electricity consumed — far more efficient than electric resistance heating (COP 1.0).
            Advanced prototypes being tested at the Cold Climate Housing Research Center in
            Fairbanks are pushing operational limits to -30°F and below.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Alaska is heavily dependent on heating oil: approximately 28–32% of households rely
            on fuel oil as their primary heating fuel, with the percentage much higher in rural
            areas. The statewide average heating oil price across unsubsidized communities was
            <strong> $6.70 per gallon</strong> in 2024, with Western Alaska averaging $8.05 and some
            remote communities exceeding $13 per gallon. Southeast Alaska&apos;s combination of
            affordable hydroelectric power and expensive heating oil creates the strongest
            economic case for heat pumps in the state. For homeowners considering a battery
            backup system alongside a heat pump, see our{" "}
            <Link href="/battery" className="text-brand-600 hover:underline">
              guide to home batteries
            </Link>.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="font-semibold text-amber-800 mb-1">⚠ Common Mistake: Assuming Heat Pumps Replace All Heating in Alaska</p>
            <p className="text-sm text-amber-900">
              Outside Southeast Alaska, most installations are dual-fuel systems where the heat
              pump handles 60–80% of heating load and an existing oil boiler, Toyo stove, or
              electric resistance heater serves as backup during the coldest periods. Sizing
              your heat pump for your region&apos;s design temperature — not just average winter
              temperature — is critical. Work with an installer experienced in cold-climate
              systems.
            </p>
          </div>
        </div>
      </section>

      {/* 12. How to Apply — white */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Apply</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The application process depends on which program you&apos;re pursuing. For the ACES
            program — Alaska&apos;s largest active incentive — follow these steps:
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-gray-900">Check your eligibility</p>
                <p className="text-sm text-gray-700">
                  Confirm your community is in the ACES service area (43 coastal communities
                  from Ketchikan to Kodiak) and that you currently heat with oil, propane, gas,
                  or wood. Visit{" "}
                  <a href="https://akheatsmart.org/aces/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">
                    akheatsmart.org/aces
                  </a>{" "}
                  for the full community list.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900">Complete a pre-installation energy assessment</p>
                <p className="text-sm text-gray-700">
                  Schedule an assessment through Alaska Heat Smart. This determines your income
                  tier and the appropriate heat pump system for your home.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-900">Get quotes and install the system</p>
                <p className="text-sm text-gray-700">
                  Obtain quotes from approved contractors and install an approved cold-climate
                  heat pump model. ACES operates on a reimbursement model — you pay upfront.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <p className="font-semibold text-gray-900">Submit documentation for reimbursement</p>
                <p className="text-sm text-gray-700">
                  After installation, submit your receipts and documentation to Alaska Heat
                  Smart to receive your grant. For Fairbanks residents, apply through the FNSB
                  Air Quality Division at{" "}
                  <a href="https://aq.fnsb.gov/changeout/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">
                    aq.fnsb.gov/changeout
                  </a>{" "}
                  — pre-approval is required before replacing equipment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. What to Watch — bg-gray-50 */}
      <section className="bg-gray-50 py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Watch</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">HEAR &amp; HOMES Launch Timeline</p>
              <p className="text-sm text-gray-600 mt-1">
                Alaska&apos;s $74.6 million in IRA rebate funding is allocated but the consumer-facing
                programs have not launched. AHFC and AEA have not announced a date. Sign up for
                updates at ahfc.us to be notified when applications open.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">IRA Funding Runway</p>
              <p className="text-sm text-gray-600 mt-1">
                HEAR and HOMES survived the One Big Beautiful Bill Act and remain funded
                through 2031. However, future legislative changes could affect program
                availability. The ACES program&apos;s $38.6 million EPA grant has a five-year
                spending window.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Cold-Climate Heat Pump Technology</p>
              <p className="text-sm text-gray-600 mt-1">
                LG and the University of Alaska Anchorage opened cold-climate heat pump research
                labs in 2024. A UAF prototype using R-32 refrigerant showed 54% COP improvement
                at -30°F to -35°F compared to commercial R-410A units. Advancing technology
                could expand viable heat pump use deeper into Interior Alaska.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Cook Inlet Natural Gas Uncertainty</p>
              <p className="text-sm text-gray-600 mt-1">
                Declining Cook Inlet gas production could raise natural gas prices for Anchorage
                and Southcentral homeowners, improving the economics of heat pumps in the region.
                Chugach Electric is already exploring heat pump-specific rate structures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 14. FAQ — white */}
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

      {/* 15. See Also — bg-gray-50 */}
      <section className="py-8 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-3">See also</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/heat-pumps/states/wa" className="text-brand-600 hover:underline">
                Washington Heat Pump Rebates &amp; Incentives
              </Link>
            </li>
            <li>
              <Link href="/heat-pumps/states/or" className="text-brand-600 hover:underline">
                Oregon Heat Pump Rebates &amp; Incentives
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

      {/* 16. Sources — white */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="space-y-2 text-sm">
            {akIncentive.sources.map((source: { label: string; url: string }, index: number) => (
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

      {/* 17. Disclaimer — white */}
      <section className="py-8">
        <div className="container-narrow">
          <div className="bg-gray-100 rounded-lg p-6">
            <p className="text-gray-500 text-xs leading-relaxed">
              <strong>Disclaimer:</strong> This page covers the main statewide, regional,
              utility, and IRA heat pump incentives available to Alaska homeowners in 2026.
              It does not calculate savings, guarantee eligibility, or represent any incentive
              program. Alaska&apos;s incentive landscape varies significantly by region — the ACES
              program covers only coastal communities, the FNSB change-out covers only the
              Fairbanks nonattainment area, and utility programs vary by service territory.
              We verify status regularly but programs can change without notice. Always confirm
              current amounts and eligibility with AHFC, Alaska Heat Smart, your local utility,
              and your contractor before making decisions.
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
