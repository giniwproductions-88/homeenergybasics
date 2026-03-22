"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { StateIncentive } from "@/data/incentives";
import { getStatusDisplay } from "@/data/incentives";
import StatusCard from "@/components/StatusCard";

interface StateFilterProps {
  states: StateIncentive[];
}

export default function StateFilter({ states }: StateFilterProps) {
  const [search, setSearch] = useState("");

  // Sort alphabetically by state name
  const sorted = useMemo(
    () => [...states].sort((a, b) => a.stateName.localeCompare(b.stateName)),
    [states]
  );

  // Filter by search term (matches state name or state code)
  const filtered = useMemo(() => {
    if (!search.trim()) return sorted;
    const term = search.toLowerCase().trim();
    return sorted.filter(
      (s) =>
        s.stateName.toLowerCase().includes(term) ||
        s.stateCode.toLowerCase().includes(term)
    );
  }, [sorted, search]);

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Browse by state</h2>
      {/* Alphabetical Quick-Jump + Search */}
      <div className="mb-8">
        {/* Search Input */}
        <div className="relative mb-4">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search states..."
            className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 text-sm"
            aria-label="Filter states by name"
          />
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-sm"
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>

        {/* Alphabetical State List */}
        {!search && (
          <div className="flex flex-wrap gap-2">
            {sorted.map((s) => {
              const display = getStatusDisplay(s.status);
              return (
                <Link
                  key={s.stateCode}
                  href={`/heat-pumps/states/${s.stateCode.toLowerCase()}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-md text-sm text-gray-700 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 transition-colors"
                >
                  <span className="text-xs">{display.emoji}</span>
                  {s.stateName}
                </Link>
              );
            })}
          </div>
        )}
      </div>

      {/* Results count when searching */}
      {search && (
        filtered.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <p className="text-lg mb-1">No states match your search.</p>
            <p className="text-sm">We&apos;re adding new states regularly — check back soon.</p>
          </div>
        ) : (
          <p className="text-sm text-gray-500 mb-4">
            Showing {filtered.length} state{filtered.length !== 1 ? "s" : ""}
          </p>
        )
      )}

      {/* State Cards */}
      <div className="space-y-8">
        {filtered.map((incentive) => (
          <div key={incentive.stateCode}>
            <StatusCard incentive={incentive} />
            <div className="mt-4">
              <Link
                href={`/heat-pumps/states/${incentive.stateCode.toLowerCase()}`}
                className="btn-primary inline-block"
              >
                View {incentive.stateName} program details &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
