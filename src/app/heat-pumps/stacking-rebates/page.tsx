import Link from "next/link";
import type { Metadata } from "next";
import { formatDate } from "@/data/incentives";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Can You Stack Heat Pump Rebates? State-by-State Stacking Rules (2026) | Home Energy Basics",
  description:
    "Yes — most heat pump rebates stack. HEAR + utility + state programs can combine to cover $5,000–$20,000+. Here's how stacking works in every state, with real dollar examples.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/stacking-rebates",
  },
  openGraph: {
    title: "Can You Stack Heat Pump Rebates? (2026)",
    description:
      "HEAR, utility, and state rebates can stack. Here's exactly how — with real dollar math from 10 states.",
    url: "https://homeenergybasics.com/heat-pumps/stacking-rebates",
    type: "article",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can you stack heat pump rebates from different programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, in most states. Utility rebates, state-administered programs, and IRA-funded HEAR or HOMES rebates can typically stack together. The main rule is that total incentives generally cannot exceed 100% of project cost. Some states have additional restrictions — check your specific state guide for details.",
      },
    },
    {
      "@type": "Question",
      name: "Can HEAR rebates stack with utility rebates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. HEAR (Home Electrification and Appliance Rebates) is designed to stack with utility programs. The federal guidance allows HEAR to combine with other non-federal incentives as long as the total does not exceed the project cost. Most state HEAR programs explicitly allow utility stacking.",
      },
    },
    {
      "@type": "Question",
      name: "Can you stack HEAR and HOMES rebates on the same project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, but for different components. HEAR covers specific appliances (heat pumps, heat pump water heaters, electric panels, wiring). HOMES covers whole-home energy efficiency improvements measured by total energy savings. You cannot use both for the same piece of equipment, but you can use HEAR for the heat pump and HOMES for insulation, air sealing, and other efficiency work on the same project.",
      },
    },
    {
      "@type": "Question",
      name: "What is the maximum amount of rebates you can stack?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The practical maximum varies by state. In states with the deepest stacking (New York, Wisconsin, Maryland), income-qualified households can stack $15,000–$24,000 in combined rebates on a single project. The general rule is that total incentives cannot exceed 100% of project cost. Most homeowners above 150% AMI can realistically stack $2,000–$5,000.",
      },
    },
    {
      "@type": "Question",
      name: "Do state tax credits stack with rebates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. State tax credits (available in Colorado, New Mexico, New York, Oregon, South Carolina, and a few others) stack on top of rebate programs because they are a different type of incentive. A tax credit reduces your state income tax owed, while a rebate reduces your upfront cost. They do not count against each other.",
      },
    },
    {
      "@type": "Question",
      name: "Can I still claim a federal tax credit for a heat pump in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Federal heat pump tax credits under Sections 25C and 25D expired December 31, 2025. They were repealed by the One Big Beautiful Bill Act. There is no federal tax credit to stack in 2026. HEAR and HOMES are rebate programs, not tax credits.",
      },
    },
  ],
};

export default function StackingRebatesPage() {
  const verifiedDate = "2026-03-24";
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
            {" "}/ Stacking Rebates
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Can You Stack Heat Pump Rebates? State-by-State Stacking Rules (2026)
          </h1>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Yes — in most states, you can combine{" "}
            <Link href="/heat-pumps" className="text-brand-600 hover:underline">
              heat pump rebates
            </Link>{" "}
            from multiple programs on the same project. HEAR, HOMES, utility rebates,
            state tax credits, and local municipal programs can stack to cover{" "}
            <strong>$5,000–$20,000+</strong> of a heat pump installation. But
            the rules vary by state, and getting the order wrong can cost you thousands.
            This guide covers how stacking works, what the limits are, and shows real
            dollar examples from 10 states.{" "}
            <Link href="/heat-pumps/rebates-by-state" className="text-brand-600 hover:underline">
              Compare incentives across all states →
            </Link>
          </p>

          <p className="text-sm text-gray-500">
            Last verified: {formattedDate}
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Rates and program availability may change after this date.
          </p>

          <nav className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            <a href="#how-stacking-works" className="text-brand-600 hover:underline">How stacking works</a>
            <a href="#examples" className="text-brand-600 hover:underline">Real examples</a>
            <a href="#mistakes" className="text-brand-600 hover:underline">Common mistakes</a>
            <a href="#rules" className="text-brand-600 hover:underline">Stacking rules table</a>
          </nav>
        </div>
      </section>

      {/* ---- 2. THE SHORT VERSION ---- */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Short Version</h2>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ What stacks</p>
              <p className="text-sm text-green-900">
                HEAR + utility rebates + state tax credits + local municipal programs.
                Most states allow all of these to combine on the same project.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">✓ HEAR + HOMES together</p>
              <p className="text-sm text-green-900">
                Yes, but for different items. HEAR for the heat pump, HOMES for insulation
                and air sealing. Not both for the same equipment.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="font-semibold text-red-800 mb-1">✗ Federal tax credits</p>
              <p className="text-sm text-red-900">
                Gone. Sections 25C and 25D expired December 31, 2025. Nothing to stack
                at the federal level.{" "}
                <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                  Details →
                </Link>
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="font-semibold text-amber-800 mb-1">⚠ The 100% rule</p>
              <p className="text-sm text-amber-900">
                Total stacked incentives generally cannot exceed 100% of the project cost.
                This is the main federal guardrail on stacking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- 3. HOW STACKING WORKS ---- */}
      <section className="py-12 bg-gray-50" id="how-stacking-works">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How Heat Pump Rebate Stacking Works
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            A heat pump installation typically costs <strong>$12,000–$18,000</strong> for
            a ducted whole-home system. In states with strong programs, you can apply
            multiple layers of incentives to bring that cost down significantly. Here
            are the layers, from largest to smallest.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Layer 1: HEAR — Up to $8,000 per heat pump
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Home Electrification and Appliance Rebates program is the largest single
            incentive available. It covers up to <strong>$8,000 per heat pump</strong> for
            households below 150% of Area Median Income (AMI). Below 80% AMI, HEAR can
            cover 100% of costs. At 80–150% AMI, it covers 50% up to the cap. Above 150%
            AMI, HEAR does not apply. Not every state has launched HEAR yet — check your{" "}
            <Link href="/heat-pumps/rebates-by-state" className="text-brand-600 hover:underline">
              state&apos;s status
            </Link>.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Layer 2: HOMES — Up to $4,000–$10,000 for whole-home projects
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Home Efficiency Rebates program rewards measured energy savings across
            your entire home. If your project achieves 35%+ energy reduction, HOMES pays
            up to <strong>$4,000</strong> (above 80% AMI) or <strong>$8,000–$10,000</strong>{" "}
            (below 80% AMI). HOMES and HEAR can apply to the same project for different
            components — HEAR for the heat pump, HOMES for insulation, air sealing, and
            other efficiency work.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Layer 3: Utility rebates — $200–$4,000
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Your electric utility likely offers its own rebate, separate from state and
            federal programs. These range from $200 (small co-ops) to $4,000+ (PSE in
            Washington, Con Edison in New York). Utility rebates almost always stack with
            HEAR and HOMES because they come from different funding sources (ratepayer
            charges, not federal money).
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Layer 4: State tax credits — $500–$10,000
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            A handful of states offer their own tax credits for heat pumps. Colorado
            has a <strong>$1,000</strong> credit, New York covers{" "}
            <strong>25% up to $10,000</strong> for geothermal, Oregon offers the
            Residential Energy Tax Credit, and New Mexico has both a sustainable building
            credit and a geothermal credit. Tax credits always stack with rebates because
            they are a different type of incentive — they reduce your state taxes, not
            your upfront cost.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Layer 5: Local and municipal programs — $500–$5,500
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Some cities and counties add their own incentives on top. Ann Arbor&apos;s
            A2ZERO adds <strong>$4,000–$5,500</strong>, Montgomery County&apos;s Electrify
            MC adds <strong>$2,500</strong>, and Minneapolis Green Cost Share stacks up to{" "}
            <strong>$14,000</strong>. These are the most commonly overlooked layer.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="font-semibold text-blue-800 mb-1">
              The stacking order matters
            </p>
            <p className="text-sm text-blue-900">
              Most state programs calculate their rebate based on the total project cost
              before other incentives. But some programs reduce the eligible cost by the
              amount of other rebates already applied. Check your state&apos;s rules for
              the order of operations — applying in the wrong sequence can reduce your
              total by hundreds or thousands of dollars.
            </p>
          </div>
        </div>
      </section>

      {/* ---- 4. REAL STACKING EXAMPLES ---- */}
      <section className="py-12" id="examples">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Real Stacking Examples by State
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            All examples assume a ducted cold-climate heat pump system with a total
            installed cost of <strong>$15,000</strong>. Actual amounts depend on your
            specific equipment, contractor, and income tier.
          </p>

          {/* Colorado */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            <Link href="/heat-pumps/states/co" className="text-brand-600 hover:underline">
              Colorado
            </Link>{" "}
            — Below 150% AMI
          </h3>
          <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
            <ul className="text-sm text-gray-700 space-y-1">
              <li>HEAR rebate: <strong>$8,000</strong></li>
              <li>Xcel Energy utility rebate: <strong>$2,250/ton (~$4,500 for 2-ton)</strong></li>
              <li>Colorado state tax credit: <strong>$1,000</strong></li>
            </ul>
            <p className="font-semibold text-green-700 mt-2">
              Total stacked: ~$13,500
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Out of pocket on a $15,000 project: ~$1,500
            </p>
          </div>

          {/* Wisconsin */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            <Link href="/heat-pumps/states/wi" className="text-brand-600 hover:underline">
              Wisconsin
            </Link>{" "}
            — Below 80% AMI
          </h3>
          <div className="bg-green-50 border border-green-200 rounded-lg p-5 mb-6">
            <ul className="text-sm text-gray-700 space-y-1">
              <li>HEAR rebate (100% coverage): <strong>$8,000</strong></li>
              <li>HOMES whole-home rebate: <strong>up to $10,000</strong></li>
              <li>Focus on Energy instant discount: <strong>$400–$900</strong></li>
            </ul>
            <p className="font-semibold text-green-700 mt-2">
              Total stacked: up to ~$18,900
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Out of pocket: potentially $0 (100% rule caps total at project cost)
            </p>
          </div>

          {/* New York */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            <Link href="/heat-pumps/states/ny" className="text-brand-600 hover:underline">
              New York
            </Link>{" "}
            — DAC-designated area
          </h3>
          <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
            <ul className="text-sm text-gray-700 space-y-1">
              <li>Clean Heat Program (utility): <strong>$5,000–$12,000</strong></li>
              <li>EmPower+ (income-qualified): <strong>up to $24,000</strong></li>
              <li>Geothermal tax credit (25% up to $10,000): <strong>if applicable</strong></li>
            </ul>
            <p className="font-semibold text-green-700 mt-2">
              Total stacked: $10,000–$24,000+
            </p>
            <p className="text-sm text-gray-600 mt-1">
              New York has the deepest incentive stack in the country. DAC (Disadvantaged
              Community) designation unlocks the highest utility tier.
            </p>
          </div>

          {/* Maryland */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            <Link href="/heat-pumps/states/md" className="text-brand-600 hover:underline">
              Maryland
            </Link>{" "}
            — Potomac Edison territory
          </h3>
          <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
            <ul className="text-sm text-gray-700 space-y-1">
              <li>EmPOWER Maryland (75% of cost, max $15,000): <strong>$11,250</strong></li>
              <li>Switch-to-Electric bonus: <strong>up to $4,000</strong></li>
              <li>Midstream contractor rebate: <strong>$800–$1,700</strong></li>
            </ul>
            <p className="font-semibold text-green-700 mt-2">
              Total stacked: ~$15,000+
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Potomac Edison territory stacks deepest in Maryland. Other utilities
              (BGE, Pepco, Delmarva) offer the EmPOWER base but not the Switch-to-Electric bonus.
            </p>
          </div>

          {/* Michigan */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            <Link href="/heat-pumps/states/mi" className="text-brand-600 hover:underline">
              Michigan
            </Link>{" "}
            — Ann Arbor, below 150% AMI
          </h3>
          <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
            <ul className="text-sm text-gray-700 space-y-1">
              <li>MiHER (HEAR) point-of-sale rebate: <strong>$8,000</strong></li>
              <li>DTE Energy utility rebate: <strong>$150–$1,200</strong></li>
              <li>Ann Arbor A2ZERO: <strong>$4,000–$5,500</strong></li>
            </ul>
            <p className="font-semibold text-green-700 mt-2">
              Total stacked: ~$12,200–$14,700
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Ann Arbor is one of the best cities in the country for heat pump stacking
              because the municipal program layers on top of state and utility.
            </p>
          </div>

          {/* Maine */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            <Link href="/heat-pumps/states/me" className="text-brand-600 hover:underline">
              Maine
            </Link>{" "}
            — Income-qualified (Tier 3)
          </h3>
          <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
            <ul className="text-sm text-gray-700 space-y-1">
              <li>Efficiency Maine Tier 3 rebate: <strong>$9,000</strong> (ducted whole-home)</li>
              <li>Whole-home bonus (Mar–Dec 2026): <strong>$500</strong></li>
              <li>Home Energy Loan (0% APR): <strong>covers remainder</strong></li>
            </ul>
            <p className="font-semibold text-green-700 mt-2">
              Total stacked: ~$9,500 + 0% financing
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Maine does not have active HEAR for most homeowners yet, but Efficiency
              Maine&apos;s own income-tiered program is generous enough to stand alone.
            </p>
          </div>

          {/* Massachusetts */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            <Link href="/heat-pumps/states/ma" className="text-brand-600 hover:underline">
              Massachusetts
            </Link>{" "}
            — Whole-home conversion
          </h3>
          <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
            <ul className="text-sm text-gray-700 space-y-1">
              <li>Mass Save whole-home rebate ($2,650/ton, max 3.5 ton): <strong>$8,500</strong></li>
              <li>Sizing bonus: <strong>$500</strong></li>
              <li>Weatherization bonus: <strong>$500</strong></li>
              <li>HEAT Loan (0% APR, up to $50,000): <strong>covers remainder</strong></li>
            </ul>
            <p className="font-semibold text-green-700 mt-2">
              Total stacked: ~$9,500 + 0% financing
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Must use R-32 or R-454B refrigerant — R-410A systems are excluded from Mass Save.
            </p>
          </div>

          {/* New Hampshire */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            <Link href="/heat-pumps/states/nh" className="text-brand-600 hover:underline">
              New Hampshire
            </Link>{" "}
            — Above 150% AMI (HEAR not yet available)
          </h3>
          <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
            <ul className="text-sm text-gray-700 space-y-1">
              <li>NHSaves utility rebate: <strong>$250–$1,250/ton</strong></li>
              <li>NE Heat Pump Accelerator: <strong>$650/unit</strong></li>
            </ul>
            <p className="font-semibold text-green-700 mt-2">
              Total stacked: ~$1,900–$4,150 (depending on system size)
            </p>
            <p className="text-sm text-gray-600 mt-1">
              When HEAR launches (expected mid-summer 2026), income-qualifying households
              will be able to add up to $8,000 on top. Projects started before HEAR
              launches are not retroactively eligible.
            </p>
          </div>

          {/* Rhode Island */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            <Link href="/heat-pumps/states/ri" className="text-brand-600 hover:underline">
              Rhode Island
            </Link>{" "}
            — Clean Heat RI
          </h3>
          <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
            <ul className="text-sm text-gray-700 space-y-1">
              <li>Clean Heat RI (60% of cost, max $11,500): <strong>$9,000</strong></li>
              <li>RI Energy per-ton rebate: <strong>$200–$400</strong></li>
            </ul>
            <p className="font-semibold text-green-700 mt-2">
              Total stacked: ~$9,200–$11,900
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Note: HEAR in Rhode Island does not cover heat pump HVAC — only electrical
              upgrades and appliances. Clean Heat RI is the primary program.
            </p>
          </div>

          {/* Texas */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            <Link href="/heat-pumps/states/tx" className="text-brand-600 hover:underline">
              Texas
            </Link>{" "}
            — Austin Energy territory
          </h3>
          <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
            <ul className="text-sm text-gray-700 space-y-1">
              <li>Austin Energy rebates: <strong>~$3,000</strong></li>
              <li>Austin Energy 0% APR financing: <strong>available</strong></li>
              <li>No state program, no HEAR: <strong>$0</strong></li>
            </ul>
            <p className="font-semibold text-amber-700 mt-2">
              Total stacked: ~$3,000
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Texas shows the other end of the spectrum — stacking is limited because
              there is no state program and SECO has not launched HEAR. Most Texas
              utilities offer less than Austin Energy.
            </p>
          </div>

          <div className="bg-gray-100 rounded-lg p-5">
            <p className="font-semibold text-gray-900 mb-1">
              What you&apos;ll actually pay
            </p>
            <p className="text-sm text-gray-700">
              On a <strong>$15,000</strong> ducted heat pump installation: income-qualified
              households in strong-stacking states pay <strong>$0–$3,000 out of pocket</strong>.
              Above-income households in moderate states pay{" "}
              <strong>$8,000–$12,000</strong>. In limited states with no HEAR,
              expect <strong>$12,000–$15,000</strong> — essentially the full cost minus
              a small utility rebate.
            </p>
          </div>
        </div>
      </section>

      {/* ---- 5. COMMON STACKING MISTAKES ---- */}
      <section className="py-12 bg-gray-50" id="mistakes">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Common Stacking Mistakes
          </h2>

          <div className="space-y-4">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="font-semibold text-amber-800 mb-1">
                ⚠ Starting work before HEAR launches in your state
              </p>
              <p className="text-sm text-amber-900">
                HEAR rebates are not retroactive. If your state has approved HEAR funding
                but the program has not launched yet, installing a heat pump now means you
                cannot claim HEAR later. In states like New Hampshire, Connecticut, and
                Pennsylvania where launch is expected in 2026, waiting could save you
                $4,000–$8,000.
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="font-semibold text-amber-800 mb-1">
                ⚠ Applying for the wrong program first
              </p>
              <p className="text-sm text-amber-900">
                Some programs calculate your rebate based on total project cost after
                other incentives. If you apply for a percentage-based program last instead
                of first, the eligible cost is lower and your rebate shrinks. Ask your
                contractor or state energy office about the optimal application order.
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="font-semibold text-amber-800 mb-1">
                ⚠ Assuming HEAR covers everyone
              </p>
              <p className="text-sm text-amber-900">
                HEAR has income limits. Households above 150% AMI get no HEAR rebate.
                Households at 80–150% AMI get a partial rebate (50% of costs up to cap).
                Only households below 80% AMI get the full amount. If you are above 150%
                AMI, your stack is limited to utility + state programs only.
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="font-semibold text-amber-800 mb-1">
                ⚠ Missing the municipal layer
              </p>
              <p className="text-sm text-amber-900">
                City and county rebates are the most overlooked stacking layer. Programs
                like Ann Arbor A2ZERO ($4,000–$5,500), Montgomery County Electrify MC
                ($2,500), and Minneapolis Green Cost Share (up to $14,000) can dramatically
                change the math. These are not listed in state or federal databases —
                check with your city directly.
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="font-semibold text-amber-800 mb-1">
                ⚠ Confusing HEAR with the expired federal tax credit
              </p>
              <p className="text-sm text-amber-900">
                HEAR is a point-of-sale rebate — it reduces your upfront cost at the time
                of purchase. The old 25C credit was a tax credit you claimed on your
                federal return months later. They work differently and have different
                rules. The federal credit no longer exists.{" "}
                <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                  Full details →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- 6. WHO BENEFITS MOST ---- */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Who Benefits Most From Stacking
          </h2>

          <div className="space-y-4 mb-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">
                ✓ Best candidates for deep stacking
              </p>
              <p className="text-sm text-green-900">
                Households below 80% AMI in states with active HEAR programs (Colorado,
                Wisconsin, Michigan, North Carolina, Georgia, Arizona, Washington, Indiana).
                These households can stack HEAR (100% coverage up to $8,000) + utility
                rebates + HOMES for insulation work. Many can get a full system for
                $0–$2,000 out of pocket.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="font-semibold text-green-800 mb-1">
                ✓ Good candidates
              </p>
              <p className="text-sm text-green-900">
                Households at 80–150% AMI in states with HEAR + strong utility programs.
                The partial HEAR rebate (50% up to cap) plus utility rebates typically
                covers $4,000–$8,000 of a $15,000 project.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">
                Moderate candidates
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Households above 150% AMI in states with strong utility programs (New York,
                Maryland, Maine, Massachusetts). No HEAR, but utility and state programs
                alone can cover $2,000–$9,000 depending on the state.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">
                Limited stacking available
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Households in states without HEAR and with small utility rebates (Texas,
                Ohio, Florida, Idaho, South Dakota). Expect $0–$1,500 total rebates.
                The decision to install a heat pump in these states depends on energy
                savings, not incentives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- 7. STACKING RULES TABLE ---- */}
      <section className="py-12 bg-gray-50" id="rules">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Stacking Rules Quick Reference
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Can these programs combine? Here&apos;s the general rule. State-specific
            exceptions are noted in each{" "}
            <Link href="/heat-pumps/rebates-by-state" className="text-brand-600 hover:underline">
              state guide
            </Link>.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Combination</th>
                  <th className="text-left p-3 font-semibold">Stacks?</th>
                  <th className="text-left p-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-3">HEAR + utility rebate</td>
                  <td className="p-3 font-semibold">✓ Yes</td>
                  <td className="p-3">Different funding sources. Explicitly allowed.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">HEAR + HOMES (same project)</td>
                  <td className="p-3 font-semibold">✓ Yes</td>
                  <td className="p-3">For different items. HEAR for heat pump, HOMES for insulation.</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">HEAR + state tax credit</td>
                  <td className="p-3 font-semibold">✓ Yes</td>
                  <td className="p-3">Different incentive types (rebate vs tax credit).</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">HEAR + municipal rebate</td>
                  <td className="p-3 font-semibold">✓ Yes</td>
                  <td className="p-3">Different funding sources. Subject to 100% rule.</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-3">Utility + state program</td>
                  <td className="p-3 font-semibold">✓ Yes</td>
                  <td className="p-3">Almost always. A few states have exceptions.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">HEAR + HEAR (two heat pumps)</td>
                  <td className="p-3 font-semibold">✓ Yes</td>
                  <td className="p-3">Up to $8,000 per heat pump, per household.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">HEAR + HOMES (same equipment)</td>
                  <td className="p-3 font-semibold text-red-700">✗ No</td>
                  <td className="p-3">Cannot double-dip on the same piece of equipment.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Any combo exceeding 100% of cost</td>
                  <td className="p-3 font-semibold text-red-700">✗ No</td>
                  <td className="p-3">Total incentives capped at project cost.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Federal 25C/25D + anything</td>
                  <td className="p-3 font-semibold text-gray-500">—</td>
                  <td className="p-3 text-gray-500">N/A. Federal credits expired Dec 31, 2025.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ---- 8. HOW TO APPLY ---- */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How to Apply for Stacked Rebates
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            The process varies by state, but here is the general sequence that works
            in most programs.
          </p>

          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-gray-900">Check your income tier</p>
                <p className="text-sm text-gray-700">
                  Determine if your household is below 80%, 80–150%, or above 150% of
                  your area&apos;s AMI. This determines HEAR eligibility and amount. Your
                  state energy office or program website will have an AMI calculator.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900">Identify all available layers</p>
                <p className="text-sm text-gray-700">
                  Check your state guide for HEAR/HOMES status, then check your specific
                  utility&apos;s rebate page, then search for city/county programs. Build
                  a list of every rebate you are eligible for before contacting a contractor.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-900">Get quotes from participating contractors</p>
                <p className="text-sm text-gray-700">
                  Many HEAR and utility programs require you to use approved or
                  participating contractors. Ask the contractor which rebates they can
                  apply at point of sale and which require separate applications.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <p className="font-semibold text-gray-900">Apply in the right order</p>
                <p className="text-sm text-gray-700">
                  If HEAR is a point-of-sale rebate in your state, it will be applied
                  by the contractor at purchase. Utility rebates are sometimes instant
                  (midstream) and sometimes mailed after installation. State tax credits
                  are claimed on your annual return. Confirm the sequence with your
                  program administrator.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- 9. WHAT TO WATCH ---- */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What to Watch
          </h2>

          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">HEAR launches in more states</p>
              <p className="text-sm text-gray-600 mt-1">
                As of March 2026, about a dozen states have launched HEAR. Dozens more
                have approved funding. Each new launch adds an $8,000 stacking layer for
                income-qualifying households. Check your state guide for the latest status.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">IRA funding runway</p>
              <p className="text-sm text-gray-600 mt-1">
                HEAR and HOMES are funded by the Inflation Reduction Act. The total
                allocation is fixed — when a state&apos;s funds run out, the program
                closes. States with high demand (Colorado, Michigan) could exhaust funds
                in 2026 or 2027. The political environment around IRA funding continues
                to shift.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="font-semibold text-gray-900">Utility program changes</p>
              <p className="text-sm text-gray-600 mt-1">
                Utility rebate programs reset annually. Amounts, equipment requirements,
                and eligibility rules can change each program year. Pennsylvania&apos;s
                Act 129 Phase IV expires May 2026, and APS in Arizona eliminated all
                residential rebates in 2026.
              </p>
            </div>
          </div>
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
              <Link href="/heat-pumps" className="text-brand-600 hover:underline">
                All State Heat Pump Incentives — Hub Page
              </Link>
            </li>
            <li>
              <Link href="/federal-heat-pump-tax-credit-expired" className="text-brand-600 hover:underline">
                Federal Heat Pump Tax Credits Ended — Full Explainer
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
              <strong>Disclaimer:</strong> This page explains general stacking rules
              for heat pump rebates across U.S. states in 2026. It does not calculate
              savings, guarantee eligibility, or represent any incentive program.
              Stacking examples use hypothetical project costs and may not reflect
              your actual installation. Program rules, dollar amounts, and stacking
              policies can change without notice. Always confirm current stacking
              rules, amounts, and eligibility with your state energy office, utility,
              and contractor before making decisions.
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
