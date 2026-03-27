"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  incentives,
  type IncentiveStatus,
  getStatusDisplay,
  formatDate,
} from "@/data/incentives";

type FilterOption = "all" | IncentiveStatus;

export default function TrackerContent() {
  const [filter, setFilter] = useState<FilterOption>("all");
  const [search, setSearch] = useState("");

  const allStates = useMemo(
    () =>
      Object.values(incentives).sort((a, b) =>
        a.stateName.localeCompare(b.stateName)
      ),
    []
  );

  const counts = useMemo(
    () => ({
      total: allStates.length,
      open: allStates.filter((s) => s.status === "open").length,
      limited: allStates.filter((s) => s.status === "limited").length,
      paused: allStates.filter((s) => s.status === "paused").length,
    }),
    [allStates]
  );

  const filtered = useMemo(() => {
    return allStates.filter((s) => {
      if (filter !== "all" && s.status !== filter) return false;
      if (
        search &&
        !s.stateName.toLowerCase().includes(search.toLowerCase()) &&
        !s.stateCode.toLowerCase().includes(search.toLowerCase())
      )
        return false;
      return true;
    });
  }, [allStates, filter, search]);

  const filterButtons: { key: FilterOption; label: string; count: number }[] = [
    { key: "all", label: "All States", count: counts.total },
    { key: "open", label: "Open", count: counts.open },
    { key: "limited", label: "Limited", count: counts.limited },
    { key: "paused", label: "Paused", count: counts.paused },
  ];

  function getFilterClasses(key: FilterOption): string {
    const base =
      "px-4 py-2 rounded-lg text-sm font-semibold transition-colors";
    if (filter === key) {
      switch (key) {
        case "open":
          return `${base} bg-green-600 text-white`;
        case "limited":
          return `${base} bg-amber-500 text-white`;
        case "paused":
          return `${base} bg-red-600 text-white`;
        default:
          return `${base} bg-gray-900 text-white`;
      }
    }
    return `${base} bg-gray-100 text-gray-700 hover:bg-gray-200`;
  }

  function getStatusBadge(status: IncentiveStatus) {
    const display = getStatusDisplay(status);
    return (
      <span
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${display.bgClass} ${display.colorClass}`}
      >
        {display.emoji} {display.label}
      </span>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="container-narrow">
          <nav className="text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-brand-600">
              Home
            </Link>
            {" / "}
            <Link href="/heat-pumps" className="hover:text-brand-600">
              Heat Pumps
            </Link>
            {" / "}
            Tracker
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Heat Pump Rebate Tracker: Every State&apos;s Status in 2026
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Federal heat pump tax credits (Sections 25C and 25D) expired
            December 31, 2025. What&apos;s left varies dramatically by state.
            This tracker shows the current status of heat pump rebates and
            incentives across all 50 states and Washington DC &mdash; including
            IRA-funded HEAR and HOMES programs, utility rebates, and state tax
            credits. This guide covers every active and pending heat pump
            incentive program in the United States in 2026. Here&apos;s
            what&apos;s actually available.
          </p>
          <p className="text-sm text-gray-500">
            Updated regularly from state energy offices, utility programs, and
            official government sources.
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Programs and availability may change after these dates.
          </p>
        </div>
      </section>

      {/* Summary Stats */}
      <section className="py-8">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            National Snapshot
          </h2>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <button
              onClick={() => setFilter("open")}
              className="bg-green-50 border border-green-200 rounded-lg p-5 text-center hover:border-green-400 transition-colors"
            >
              <p className="text-3xl font-bold text-green-700">
                {counts.open}
              </p>
              <p className="text-sm font-semibold text-green-800">
                States Open
              </p>
            </button>
            <button
              onClick={() => setFilter("limited")}
              className="bg-amber-50 border border-amber-200 rounded-lg p-5 text-center hover:border-amber-400 transition-colors"
            >
              <p className="text-3xl font-bold text-amber-700">
                {counts.limited}
              </p>
              <p className="text-sm font-semibold text-amber-800">
                States Limited
              </p>
            </button>
            <button
              onClick={() => setFilter("paused")}
              className="bg-red-50 border border-red-200 rounded-lg p-5 text-center hover:border-red-400 transition-colors"
            >
              <p className="text-3xl font-bold text-red-700">
                {counts.paused}
              </p>
              <p className="text-sm font-semibold text-red-800">
                States Paused
              </p>
            </button>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            As of March 2026, <strong>{counts.open} U.S. states have active heat pump rebate programs</strong>, while <strong>{counts.limited} states only offer limited incentives</strong> through utilities or pending HEAR/HOMES programs.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>&quot;Open&quot;</strong> means the state has active,
            well-funded programs accepting applications.{" "}
            <strong>&quot;Limited&quot;</strong> means incentives exist but are
            restricted &mdash; utility-only, region-dependent, or HEAR/HOMES
            haven&apos;t launched yet.{" "}
            <strong>&quot;Paused&quot;</strong> means major programs are
            suspended or closed.
          </p>
        </div>
      </section>

      {/* Filters + Search + Table */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Heat Pump Rebates by State (2026)
          </h2>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {filterButtons.map((btn) => (
              <button
                key={btn.key}
                onClick={() => setFilter(btn.key)}
                className={getFilterClasses(btn.key)}
              >
                {btn.label} ({btn.count})
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search by state name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-80 px-4 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent"
            />
          </div>

          {/* Results count */}
          <p className="text-sm text-gray-500 mb-4">
            Showing {filtered.length} of {counts.total} states
          </p>

          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">State</th>
                  <th className="text-left p-3 font-semibold">Status</th>
                  <th className="text-left p-3 font-semibold">
                    What&apos;s Available
                  </th>
                  <th className="text-left p-3 font-semibold">Verified</th>
                  <th className="text-left p-3 font-semibold"></th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((state) => (
                  <tr key={state.stateCode} className="border-b">
                    <td className="p-3">
                      <Link
                        href={`/heat-pumps/states/${state.stateCode.toLowerCase()}`}
                        className="text-brand-600 hover:underline font-semibold"
                      >
                        {state.stateName}
                      </Link>
                    </td>
                    <td className="p-3">{getStatusBadge(state.status)}</td>
                    <td className="p-3 text-gray-700 max-w-md">
                      {state.summary.length > 180
                        ? `${state.summary.slice(0, 180)}...`
                        : state.summary}
                    </td>
                    <td className="p-3 text-gray-500 whitespace-nowrap">
                      {formatDate(state.lastVerified)}
                    </td>
                    <td className="p-3 whitespace-nowrap">
                      <Link
                        href={`/heat-pumps/states/${state.stateCode.toLowerCase()}`}
                        className="text-brand-600 hover:underline text-sm"
                      >
                        {state.stateName} heat pump rebates &rarr;
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-3">
            {filtered.map((state) => {
              const display = getStatusDisplay(state.status);
              return (
                <Link
                  key={state.stateCode}
                  href={`/heat-pumps/states/${state.stateCode.toLowerCase()}`}
                  className="block bg-white border border-gray-200 rounded-lg p-4 hover:border-gray-400 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold text-gray-900">
                      {state.stateName}
                    </p>
                    {getStatusBadge(state.status)}
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed mb-2">
                    {state.summary.length > 140
                      ? `${state.summary.slice(0, 140)}...`
                      : state.summary}
                  </p>
                  <p className="text-xs text-gray-400">
                    Verified {formatDate(state.lastVerified)}
                  </p>
                </Link>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
              <p className="text-gray-500">
                No states match your search. Try a different term.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Federal Context */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why This Tracker Exists
          </h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <p className="text-red-900 leading-relaxed">
              <strong>Federal heat pump tax credits ended December 31, 2025.</strong>{" "}
              The Section 25C credit (up to $2,000 for heat pumps) and Section
              25D credit (30% for geothermal systems) were eliminated by the One
              Big Beautiful Bill Act signed July 4, 2025. No federal tax credit
              is available for heat pump installations in 2026 or later.{" "}
              <Link
                href="/federal-heat-pump-tax-credit-expired"
                className="text-red-700 underline hover:text-red-900"
              >
                Full details on the federal credit expiration &rarr;
              </Link>
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            With federal credits gone, state programs, utility rebates, and
            IRA-funded HEAR and HOMES rebates are the only incentives remaining.
            But the landscape is fragmented &mdash; some states have robust
            programs worth $10,000 or more, while others have almost nothing.
            Program availability changes frequently as states launch HEAR/HOMES
            programs, utility budgets reset, and funding gets exhausted.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This tracker provides a single reference for the current status of
            heat pump incentives across every U.S. state. All data is verified
            against official state energy office websites, utility program pages,
            and IRS guidance. Each state links to a detailed page with specific
            dollar amounts, stacking scenarios, and application steps.
          </p>
        </div>
      </section>

      {/* Blue insight card */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Key Patterns Across States
          </h2>
          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
              <p className="font-semibold text-blue-800 mb-1">
                HEAR is the biggest variable
              </p>
              <p className="text-sm text-blue-900">
                States with active HEAR programs offer up to $8,000 per heat
                pump for households below 150% of Area Median Income. States
                where HEAR hasn&apos;t launched yet are limited to utility
                rebates only &mdash; often $200&ndash;$1,500.
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
              <p className="font-semibold text-blue-800 mb-1">
                Utility rebates are the floor, not the ceiling
              </p>
              <p className="text-sm text-blue-900">
                Even in states marked &quot;limited,&quot; most homeowners can
                access some utility rebate. The range is wide: from $40 (FPL in
                Florida) to $4,000+ (Puget Sound Energy in Washington). Check
                your specific utility on the state page.
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
              <p className="font-semibold text-blue-800 mb-1">
                Income qualification unlocks the largest rebates
              </p>
              <p className="text-sm text-blue-900">
                Households below 80% AMI can access the highest rebate tiers in
                most states &mdash; often $14,000&ndash;$24,000 when stacking
                HEAR, HOMES, and utility programs. Above 150% AMI, you&apos;re
                typically limited to utility rebates and HOMES only.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Verify */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How We Verify This Data
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Every state page is built from primary sources: state energy office
            websites, utility rebate program pages, IRS publications, and
            official program portals. We do not rely on third-party aggregators,
            blog posts, or outdated databases.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Each page lists its sources with direct links. The &quot;last
            verified&quot; date on each state page reflects when we last
            confirmed the information against these sources. Programs that change
            or expire are updated as we become aware of them.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="font-semibold text-amber-800 mb-1">
              ⚠ This is a reference, not financial advice
            </p>
            <p className="text-sm text-amber-900">
              Incentive programs can change without notice. Dollar amounts,
              eligibility rules, and program availability may differ from
              what&apos;s shown here. Always confirm current details with your
              state energy office, utility provider, and contractor before making
              purchasing decisions.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Which states still have heat pump rebates in 2026?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Most states have some form of heat pump incentive, though
                availability varies widely. States like Colorado, Maine, New
                York, Wisconsin, and North Carolina have robust open programs.
                Others like Texas, Ohio, and Florida have limited or
                utility-only rebates. Federal tax credits (Sections 25C and 25D)
                expired December 31, 2025, so state and utility programs are the
                primary incentives remaining.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What is the HEAR program?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                HEAR (Home Electrification and Appliance Rebates) is a federal
                program funded by the Inflation Reduction Act that provides up
                to $8,000 per heat pump for income-qualifying households (below
                150% of Area Median Income). Each state administers its own HEAR
                program independently, so launch dates and availability vary.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What happened to the federal heat pump tax credit?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Sections 25C and 25D expired December 31, 2025. Section 25C
                provided up to $2,000 for heat pump installations. Section 25D
                covered geothermal systems at 30% of cost. Neither is available
                for installations in 2026 or later.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How much can I get in heat pump rebates in 2026?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                It depends on your state and income level. In states with active
                HEAR programs, income-qualifying households can receive $8,000
                or more. Utility rebates vary widely by provider, from
                as low as $40 to over $4,000. The best states for stacking multiple programs
                can reach $10,000&ndash;$24,000 in total incentives.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What does &quot;open&quot; vs &quot;limited&quot; vs
                &quot;paused&quot; mean?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>Open</strong> means the state has active, well-funded
                programs accepting applications.{" "}
                <strong>Limited</strong> means incentives exist but are
                restricted &mdash; either utility-only, region-dependent,
                partially exhausted, or HEAR/HOMES haven&apos;t launched.{" "}
                <strong>Paused</strong> means major programs have been suspended
                or closed, though some utility rebates may still be available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* See Also */}
      <section className="py-8 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-3">See also</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/heat-pumps"
                className="text-brand-600 hover:underline"
              >
                All State Heat Pump Incentives
              </Link>
            </li>
            <li>
              <Link
                href="/federal-heat-pump-tax-credit-expired"
                className="text-brand-600 hover:underline"
              >
                Federal Heat Pump Tax Credits Ended &mdash; What It Means
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

      {/* Disclaimer */}
      <section className="py-8">
        <div className="container-narrow">
          <div className="bg-gray-100 rounded-lg p-6">
            <p className="text-gray-500 text-xs leading-relaxed">
              <strong>Disclaimer:</strong> This tracker covers the main
              statewide, utility, and IRA heat pump incentives available to U.S.
              homeowners in 2026. It does not calculate savings, guarantee
              eligibility, or represent any incentive program. We verify status
              regularly but programs can change without notice. Always confirm
              current amounts and eligibility with your state energy office,
              utility provider, and contractor before making decisions.
            </p>
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/heat-pumps"
              className="text-brand-600 hover:underline text-sm"
            >
              &larr; Back to Heat Pumps overview
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
