// src/app/heat-pumps/utilities/page.tsx
//
// Utility & Program hub — HUB-PAGE-RULESET.md governs this page.
// Core invariants: everything renders from shippedUtilities() (§4);
// shipping a new utility page requires ZERO edits here (§5); no
// hand-written counts (§8); no lastVerified stamp (§2.1 — this page
// makes no first-order rebate claims of its own).

import Link from "next/link";
import type { Metadata } from "next";
import { shippedUtilities } from "@/data/utilities";
import type { UtilityEntity, UtilityType } from "@/data/utilities";
import { incentives } from "@/data/incentives";
import type { StateCode } from "@/data/incentives";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Utility & Program Heat Pump Rebates 2026 | Home Energy Basics",
  description:
    "Find current heat pump rebates from utilities and program administrators, with dedicated 2026 guides organized by provider and state.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/utilities",
  },
};

// Static presentation map (§4): entity-type display labels only.
// Maps the full UtilityType enum so future types render without edits.
const typeLabels: Record<UtilityType, string> = {
  iou: "Utility",
  municipal: "Municipal utility",
  coop: "Electric cooperative",
  "federal-power": "Federal power program",
  administrator: "Program administrator",
};

export default function UtilitiesHubPage() {
  // §7.1: deterministic alphabetical order by display name — never
  // source-file insertion order.
  const shipped = [...shippedUtilities()].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  // §7.2: invert territory data. A provider appears beneath a state ONLY
  // where hasHeatPumpProgram is true. Because the outer loop walks the
  // alphabetically sorted provider list, each state's provider list is
  // automatically alphabetical too (§7.4).
  const byState = new Map<StateCode, UtilityEntity[]>();
  for (const u of shipped) {
    for (const t of u.territories) {
      if (!t.hasHeatPumpProgram) continue;
      const list = byState.get(t.state) ?? [];
      list.push(u);
      byState.set(t.state, list);
    }
  }
  // §7.4: states ordered alphabetically by canonical state name,
  // resolved from incentives.ts (§1.2) — no hand-written name map.
  const statesWithPrograms = Array.from(byState.keys()).sort((a, b) =>
    incentives[a].stateName.localeCompare(incentives[b].stateName)
  );

  // Helper for provider-card territory lines: canonical state names,
  // alphabetical, joined for prose display.
  const stateNames = (codes: StateCode[]): string =>
    codes
      .map((c) => incentives[c].stateName)
      .sort((a, b) => a.localeCompare(b))
      .join(" · ");

  // §12: ItemList derives from the SAME sorted dataset that renders the
  // page — no separate schema inventory.
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Utility & Program Heat Pump Rebate Guides",
    itemListElement: shipped.map((u, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: u.name,
      url: `https://homeenergybasics.com/heat-pumps/utilities/${u.slug}`,
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why isn't my utility listed here?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We publish dedicated provider guides one at a time, and most U.S. utilities, cooperatives, and program administrators don't have one yet. Absence from this page does not mean your utility has no rebate. Your state's heat pump incentive guide covers utility, municipal, cooperative, and state-administered programs even when those providers don't have standalone pages here.",
        },
      },
      {
        "@type": "Question",
        name: "Can utility rebates be combined with state incentives?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Often, yes — many utility rebates stack with state and income-qualified programs, though every program sets its own rules and some prohibit combining. The federal 25C and 25D tax credits ended December 31, 2025, so stacking today usually means utility plus state or income-qualified programs. Each provider guide covers stacking for its own territories.",
        },
      },
      {
        "@type": "Question",
        name: "Why does a provider appear under some states it serves but not others?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Serving a state is not the same as offering a heat pump rebate there. Providers appear in the state lookup only where they run an active residential heat pump program. Each provider guide shows the full service territory, including states with no program.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd data={itemListJsonLd} />
      <JsonLd data={faqJsonLd} />

      {/* 1. HERO */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="container-narrow">
          <nav className="text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-brand-600">Home</Link>
            {" "}/{" "}
            <Link href="/heat-pumps" className="hover:text-brand-600">Heat Pumps</Link>
            {" "}/ Utilities &amp; Programs
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Utility &amp; Program Heat Pump Rebates
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Some of the biggest heat pump rebates come from utilities and
            program administrators rather than state programs. This page
            collects every dedicated provider guide we publish — each one
            verified against the provider&apos;s own program documents — and
            organizes them two ways: by provider, and by state. Coverage is
            expanding; if your provider isn&apos;t here yet, your state guide
            is the place to start.
          </p>
        </div>
      </section>

      {/* 2. PROVIDER & PROGRAM GUIDES */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Provider &amp; Program Guides
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Every guide below is a full breakdown of that provider&apos;s
            heat pump rebates: amounts, equipment requirements, how the
            programs stack with state incentives, and how to apply.
          </p>
          <div className="space-y-4">
            {shipped.map((u) => {
              const programStates = u.territories
                .filter((t) => t.hasHeatPumpProgram)
                .map((t) => t.state);
              const serviceOnlyStates = u.territories
                .filter((t) => !t.hasHeatPumpProgram)
                .map((t) => t.state);
              return (
                <div
                  key={u.slug}
                  className="bg-white border border-gray-200 rounded-lg p-5"
                >
                  <p className="font-semibold text-gray-900">
                    <Link
                      href={`/heat-pumps/utilities/${u.slug}`}
                      className="text-brand-600 hover:underline"
                    >
                      {u.name}
                    </Link>{" "}
                    <span className="text-sm text-gray-500 font-normal">
                      — {typeLabels[u.type]}
                    </span>
                  </p>
                  <p className="text-sm text-gray-600 mt-1">{u.summary}</p>
                  <p className="text-sm text-gray-700 mt-2">
                    <strong>Heat pump rebate programs:</strong>{" "}
                    {stateNames(programStates)}
                  </p>
                  {serviceOnlyStates.length > 0 && (
                    <p className="text-sm text-gray-500 mt-1">
                      Also serves, without a provider-run heat pump rebate:{" "}
                      {stateNames(serviceOnlyStates)}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. FIND BY STATE */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Find Programs by State
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            States below list the covered providers that run heat pump rebate
            programs there. A listed provider may serve only part of a state,
            so confirm your own utility before planning around any rebate.
            Every state name links to that state&apos;s full incentive guide,
            which also covers programs without dedicated pages here.
          </p>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
            {statesWithPrograms.map((code) => (
              <div key={code}>
                <p className="font-semibold text-gray-900">
                  <Link
                    href={`/heat-pumps/states/${code.toLowerCase()}`}
                    className="hover:text-brand-600"
                  >
                    {incentives[code].stateName}
                  </Link>
                </p>
                <ul className="mt-1 space-y-1 text-sm">
                  {byState.get(code)?.map((u) => (
                    <li key={u.slug}>
                      <Link
                        href={`/heat-pumps/utilities/${u.slug}`}
                        className="text-brand-600 hover:underline"
                      >
                        {u.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. UTILITY NOT LISTED? */}
      <section className="py-12">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Utility Not Listed?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We add dedicated provider guides one at a time, so most U.S.
            utilities, cooperatives, municipal utilities, and program
            administrators don&apos;t have one yet. That is a statement about
            our coverage, not about your rebate — many providers without a
            page here still offer real heat pump incentives.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Your state guide is the fallback: every state page covers the
            utility, municipal, cooperative, and state-administered programs
            available in that state, including providers without standalone
            guides.
          </p>
          <p>
            <Link
              href="/heat-pumps"
              className="text-brand-600 hover:underline"
            >
              Find your state&apos;s heat pump incentive guide &rarr;
            </Link>
          </p>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
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

      {/* 6. BACK LINK */}
      <section className="py-8">
        <div className="container-narrow">
          <div className="text-center">
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
