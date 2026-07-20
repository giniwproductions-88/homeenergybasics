// src/data/utilities.ts
// Utility / program-administrator data model — first-class entity.
// Mirrors incentives.ts conventions: status enum, ISODate stamps, sources
// array rendered on-page.
//
// DATE FIELDS (parity with incentives.ts, 2026-07-20):
//   lastVerified — last checked against primary sources. Playbook rule 1:
//     set only after a real verification pass with quoted source text.
//   lastUpdated  — last actual content change to this entity's data/page.
//   INVARIANT: lastUpdated <= lastVerified. A verify-no-changes pass bumps
//   lastVerified ONLY. Both monotonic — never move backward.
// Entries with lastVerified: "" are SCHEMA STUBS and must not ship until
// verified (shippedUtilities() gates on this).

import type { StateCode } from "./incentives";

type Digit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
export type ISODate = `${number}-${Digit}${Digit}-${Digit}${Digit}`;

export type UtilitySlug =
  | "xcel-energy"
  | "efficiency-maine"
  | "duke-energy"
  | "tva-energyright"
  | "florida-power-light"
  | "smud";

// "administrator" covers non-utility program operators (Efficiency Maine,
// Energy Trust of Oregon, Mass Save, Focus on Energy). Everything lives
// under /heat-pumps/utilities/ regardless of type — the type field exists
// so page copy can describe the entity honestly.
export type UtilityType =
  | "iou" // investor-owned utility
  | "municipal" // muni (SMUD)
  | "coop" // electric cooperative
  | "federal-power" // TVA
  | "administrator"; // statewide efficiency program administrator

export type UtilityStatus = "open" | "limited" | "paused";

export interface UtilitySource {
  label: string;
  url: string;
}

// One entry per state territory. This is the many-to-many join:
// a utility page renders one program section per territory, and each
// territory links back to that state's page.
export interface UtilityTerritory {
  state: StateCode;
  // Whether this territory has an active residential heat pump program.
  // Territories with no program still appear in the service-area list
  // (so a ND Xcel customer landing on the page gets a truthful answer)
  // but get no rebate section.
  hasHeatPumpProgram: boolean;
  // 1-sentence territory note for the service-area table, e.g.
  // "ASHP and dual-fuel rebates via CIP" or "No residential HP rebate".
  note: string;
  // Optional display override for the table's rebate column when a plain
  // Yes/No misleads (e.g. Wisconsin: "Via Focus on Energy").
  rebateLabel?: string;
}

export interface UtilityEntity {
  slug: UtilitySlug;
  name: string; // "Xcel Energy" — full name, used in h1/meta
  shortName: string; // "Xcel" — prose after first reference
  type: UtilityType;
  territories: UtilityTerritory[];
  status: UtilityStatus; // overall: open if any territory program open
  lastVerified: ISODate | ""; // rule-1 gated; "" = unshipped stub
  lastUpdated: ISODate | ""; // last content change; <= lastVerified
  // 2-3 sentence hub-card summary. Same constraints as state summaries:
  // primary dollar amounts, primary program names, ~350 chars max.
  summary: string;
  sources: UtilitySource[]; // minimum 4, administrator pages first
}

export const utilities: Record<UtilitySlug, UtilityEntity> = {
  // ── PILOT 1 — shipped 2026-07-15 ─────────────────────────────────────
  "xcel-energy": {
    slug: "xcel-energy",
    name: "Xcel Energy",
    shortName: "Xcel",
    type: "iou",
    // Full 8-state territory. No cross-state fact transplants applies to
    // utilities too: MN Xcel rebates say nothing about WI Xcel rebates.
    // All 8 territories verified 2026-07-14 (operator pastes + fetched
    // official PDFs). See XCEL-RESEARCH-HANDOFF-2026-07-14.md for quotes
    // and full rate detail. Order here is canonical presentation order:
    // program states by rebate size, then non-program territories.
    territories: [
      { state: "CO", hasHeatPumpProgram: true, note: "$750–$2,250/heating ton by tier; income-qualified support up to full cost" },
      { state: "MN", hasHeatPumpProgram: true, note: "$1,100–$2,000 per system by equipment and customer type" },
      { state: "NM", hasHeatPumpProgram: true, note: "Installer-quoted amounts; electric customers only" },
      { state: "WI", hasHeatPumpProgram: false, rebateLabel: "Via Focus on Energy", note: "No standalone Xcel rebate; statewide program applies" },
      { state: "ND", hasHeatPumpProgram: false, note: "Reduced electric heating rate covers heat pumps; no purchase rebate" },
      { state: "SD", hasHeatPumpProgram: false, note: "Reduced electric heating rate covers heat pumps; no purchase rebate" },
      { state: "TX", hasHeatPumpProgram: false, note: "Efficiency-services program and demand-response credits only" },
      { state: "MI", hasHeatPumpProgram: false, note: "Efficiency rebates route through statewide Efficiency United" },
    ],
    status: "open",
    lastVerified: "2026-07-14",
    lastUpdated: "2026-07-14",
    summary: "Xcel offers heat pump rebates in 3 of its 8 states: up to $2,000 in Minnesota, $2,250 per heating ton in Colorado (with fuel-burning-system bonus), and unpublished installer-quoted amounts in New Mexico. Federal 25C/25D credits ended Dec 31, 2025.",
    sources: [
      { label: "Xcel Energy — Minnesota 2024–2026 Rebate Summary (PDF)", url: "https://www.xcelenergy.com/staticfiles/xe-responsive/Working%20With%20Us/24-1-201%20MN%20Res%20Rebate%20Summary%20Information%20Sheet.pdf" },
      { label: "Xcel Energy — MN Residential HVAC Rebate Application 24-01-506 (PDF)", url: "https://www.xcelenergy.com/staticfiles/xe-responsive/Programs%20and%20Rebates/Residential/24-01-506_MN-Res_HVAC_OpenPrgms_app.pdf" },
      { label: "Xcel Energy — Colorado Heat Pumps (rebate page + 2025–2026 Rebate Summary 25-10-417)", url: "https://co.my.xcelenergy.com/s/residential/heating-cooling/heat-pumps" },
      { label: "Xcel Energy — Minnesota Heat Pumps", url: "https://mn.my.xcelenergy.com/s/residential/heating-cooling/heat-pumps" },
      { label: "Xcel Energy — New Mexico Heat Pumps", url: "https://nm.my.xcelenergy.com/s/residential/heating-cooling/heat-pumps" },
      { label: "Xcel Energy — North Dakota Home Rebates", url: "https://nd.my.xcelenergy.com/s/residential/home-rebates" },
      { label: "Xcel Energy — South Dakota Home Rebates", url: "https://sd.my.xcelenergy.com/s/residential/home-rebates" },
      { label: "Xcel Energy — Texas Home Rebates", url: "https://tx.my.xcelenergy.com/s/residential/home-rebates" },
      { label: "Xcel Energy — Michigan Home Rebates", url: "https://mi.my.xcelenergy.com/s/residential/home-rebates" },
      { label: "Efficiency United (Michigan statewide program; Xcel is a participating utility)", url: "https://eu.clearesult.com/" },
      { label: "Focus on Energy (Wisconsin statewide program)", url: "https://focusonenergy.com" },
    ],
  },

  // ── PILOT 3 — Efficiency Maine (administrator, single territory) ─────
  "efficiency-maine": {
    slug: "efficiency-maine",
    name: "Efficiency Maine",
    shortName: "Efficiency Maine",
    type: "administrator",
    // Statewide program administrator — one territory, all of Maine.
    // Verified 2026-07-16 at rule-1 depth: whole-home rebate matrix
    // (brochure rev 249, 6/24/2026 + live page fetch), HPWH claim form
    // rev 210 (4/22/2026), geothermal page (live fetch — 1/3 of cost up
    // to $3,000, NOT flat), LMI reservation request rev 1/1/2026
    // (low-income supplemental = $3,000 for one unit), loans PDF rev
    // 5-15-2025 (program active; rates verified 7/14 via operator paste).
    territories: [
      { state: "ME", hasHeatPumpProgram: true, note: "$1,000–$9,000 by income and system type; $500 whole-home bonus through Dec 2026" },
    ],
    status: "open",
    lastVerified: "2026-07-16",
    lastUpdated: "2026-07-16",
    summary: "Efficiency Maine, the state's independent efficiency program administrator, pays $1,000–$3,000 per outdoor unit or $3,000–$9,000 for ducted whole-home heat pumps by income tier, plus a $500 bonus through Dec 2026, $1,150 for heat pump water heaters, and Green Bank loans up to $25,000. Federal 25C/25D credits ended Dec 31, 2025.",
    sources: [
      { label: "Efficiency Maine — Whole-Home Heat Pump Rebates", url: "https://www.efficiencymaine.com/whole-home-heat-pump-rebates/" },
      { label: "Efficiency Maine — Heat Pump Rebate Brochure (PDF)", url: "https://www.efficiencymaine.com/docs/Heat-Pump-Rebate-Brochure.pdf" },
      { label: "Efficiency Maine — Heat Pump Water Heater Rebate (PDF)", url: "https://www.efficiencymaine.com/docs/HPWH_Rebate.pdf" },
      { label: "Efficiency Maine — Geothermal Heat Pump Rebates", url: "https://www.efficiencymaine.com/at-home/geothermal/" },
      { label: "Efficiency Maine — LMI Heat Pump Reservation Request (PDF)", url: "https://www.efficiencymaine.com/docs/LMI_Residential_HP_Reservation_Request.pdf" },
      { label: "Efficiency Maine — Home Energy Loans (PDF)", url: "https://www.efficiencymaine.com/docs/EMT-Home-Energy-Loans.pdf" },
      { label: "Maine DOER — Home Energy Rebates (HEAR)", url: "https://www.maine.gov/energy/initiatives/infrastructure/home-energy-rebates" },
    ],
  },

  // ── PILOT 4 — Duke Energy (six states, five programs) ────────────────
  "duke-energy": {
    slug: "duke-energy",
    name: "Duke Energy",
    shortName: "Duke",
    type: "iou",
    // All 6 territories verified 2026-07-20 at administrator depth via
    // operator browser pastes (duke-energy.com serves content by a
    // location cookie; each capture confirmed by the header's state
    // indicator). NC/SC/IN/KY run Smart $aver with per-state tables and
    // effective dates; FL runs the separate Home Energy Improvement
    // program (Home Energy Check prerequisite); OH has NO residential
    // heat pump or efficiency rebates (post-deregulation menu carries
    // supplier-choice and renewable programs only — affirmative absence
    // captured 7/20).
    // SCRAPER NOTE: duke-energy.com bot-blocks fetchers AND cookie-gates
    // jurisdictions — mute-list candidate, human-verify browser cadence
    // like Xcel. Do not add to check-sources.mjs targets.
    // KY HPWH: category offered; amount not captured 7/20 — verify on
    // next Duke touch before quoting a KY HPWH figure anywhere.
    territories: [
      { state: "NC", hasHeatPumpProgram: true, note: "Smart $aver: $350–$900 heat pump replacement, up to $2,500 conversions; $500 HPWH" },
      { state: "SC", hasHeatPumpProgram: true, note: "Same Smart $aver tables as NC; some Greenwood-area customers excluded from the HPWH rebate" },
      { state: "IN", hasHeatPumpProgram: true, note: "Smart $aver: $400–$700 replacement, up to $3,000 dual-fuel conversion; $350 HPWH" },
      { state: "FL", hasHeatPumpProgram: true, note: "Home Energy Improvement: $500 heat pump, up to $1,000 strip-heat conversion; free Home Energy Check required" },
      { state: "KY", hasHeatPumpProgram: true, note: "Smart $aver: $300–$800 by efficiency tier and replacement timing" },
      { state: "OH", hasHeatPumpProgram: false, note: "No residential heat pump or efficiency rebates; supplier-choice and renewable programs only" },
    ],
    status: "open",
    lastVerified: "2026-07-20",
    lastUpdated: "2026-07-20",
    summary: "Duke Energy pays residential heat pump rebates in 5 of its 6 states: up to $2,500 for conversions in North Carolina and South Carolina, $3,000 in Indiana, $1,000 in Florida, and $800 in Kentucky, plus $350–$500 heat pump water heater rebates. Ohio has no residential program. Federal 25C/25D credits ended Dec 31, 2025.",
    sources: [
      { label: "Duke Energy — Smart $aver Home Improvement Rebates (NC, SC, IN, KY — content set by site location)", url: "https://www.duke-energy.com/home/products/smart-saver" },
      { label: "Duke Energy — Smart $aver Heat Pump Water Heater Rebate (content set by site location)", url: "https://www.duke-energy.com/home/products/smart-saver/heat-pump-water-heater" },
      { label: "Duke Energy Florida — Home Energy Improvement HVAC Replacement", url: "https://www.duke-energy.com/home/products/home-energy-improvement/hvac-replacement" },
      { label: "Duke Energy Florida — Home Energy Improvement Heat Pump Water Heater", url: "https://www.duke-energy.com/home/products/home-energy-improvement/heat-pump-water-heater" },
      { label: "NC DEQ — Energy Saver North Carolina Energy Efficiency Rebates (stacking rules)", url: "https://www.deq.nc.gov/energy-climate/state-energy-office/energy-saver-north-carolina/energy-efficiency-rebates" },
    ],
  },

  // ── PILOT 5 — TVA EnergyRight (federal power, seven states) ──────────
  "tva-energyright": {
    slug: "tva-energyright",
    name: "TVA EnergyRight",
    shortName: "TVA",
    type: "federal-power",
    // Verified 2026-07-20 at rule-1 depth: energyright.com heat-pump page
    // (modified 7/15/26), geothermal page (6/18/26), rebates index
    // (3/28/26), financing (7/13/26), Home Uplift (4/17/26) all fetched
    // live with quotes in session; entity facts (153 LPCs, seven states)
    // quoted from tva.com. The rebate menu is REGION-WIDE and identical in
    // every territory — one program, not seven — which is why the notes
    // repeat: the many-to-many join here carries coverage truth, not
    // program differentiation. Delivery is via local power companies;
    // financing and Home Uplift participation vary by LPC, not by state.
    // HPWH: ABSENT from the current TVA residential menu (financeable
    // only; some LPCs run their own) — no TVA-level HPWH figure anywhere.
    territories: [
      { state: "TN", hasHeatPumpProgram: true, note: "Full EnergyRight menu; TVA serves almost all of the state" },
      { state: "AL", hasHeatPumpProgram: true, note: "Full EnergyRight menu; partial TVA coverage — confirm your local power company is TVA-served" },
      { state: "GA", hasHeatPumpProgram: true, note: "Full EnergyRight menu; partial TVA coverage — confirm your local power company is TVA-served" },
      { state: "KY", hasHeatPumpProgram: true, note: "Full EnergyRight menu; partial TVA coverage — confirm your local power company is TVA-served" },
      { state: "MS", hasHeatPumpProgram: true, note: "Full EnergyRight menu; partial TVA coverage — confirm your local power company is TVA-served" },
      { state: "NC", hasHeatPumpProgram: true, note: "Full EnergyRight menu; partial TVA coverage — confirm your local power company is TVA-served" },
      { state: "VA", hasHeatPumpProgram: true, note: "Full EnergyRight menu; partial TVA coverage — confirm your local power company is TVA-served" },
    ],
    status: "open",
    lastVerified: "2026-07-20",
    lastUpdated: "2026-07-20",
    summary: "TVA EnergyRight pays $500–$800 for ducted heat pumps, $800 for mini splits, and $1,500 for geothermal region-wide across all seven Valley states, delivered through 153 local power companies. $0-down financing to $20,000 and ~$10,000 average free upgrades via Home Uplift where the LPC participates. Federal 25C/25D credits ended Dec 31, 2025.",
    sources: [
      { label: "TVA EnergyRight — Heat Pump Rebate", url: "https://energyright.com/residential/rebates/heat-pump/" },
      { label: "TVA EnergyRight — Geothermal Heat Pump Rebate", url: "https://energyright.com/residential/rebates/geothermal-heat-pump/" },
      { label: "TVA EnergyRight — All Residential Rebates", url: "https://energyright.com/residential/rebates/" },
      { label: "TVA EnergyRight — Financing", url: "https://energyright.com/residential/energy-upgrades-bill-assistance/financing/" },
      { label: "TVA EnergyRight — Home Uplift", url: "https://energyright.com/residential/energy-upgrades-bill-assistance/home-uplift/" },
      { label: "TVA — Public Power Partnerships (153 local power companies)", url: "https://www.tva.com/energy/public-power-partnerships" },
    ],
  },

  // ── FPL — schema placeholder, do not ship ────────────────────────────
  "florida-power-light": {
    slug: "florida-power-light",
    name: "Florida Power & Light",
    shortName: "FPL",
    type: "iou",
    territories: [
      { state: "FL", hasHeatPumpProgram: false, note: "VERIFY" },
    ],
    status: "open",
    lastVerified: "",
    lastUpdated: "",
    summary: "STUB",
    sources: [],
  },
  smud: {
    slug: "smud",
    name: "SMUD",
    shortName: "SMUD",
    type: "municipal",
    // Single-territory municipal utility: ~900 sq mi, most of Sacramento
    // County + small adjoining portions of Placer and Yolo counties.
    // Verified 2026-07-16 at rule-1 depth (fetched smud.org program pages,
    // quotes in session). Amounts reflect the February 2026 increase.
    // No income tiers in SMUD's published residential rebate tables.
    territories: [
      { state: "CA", hasHeatPumpProgram: true, note: "$1,000–$3,000 heat pump HVAC and $1,000–$4,000 HPWH by conversion type; $2,000 Go Electric bonus" },
    ],
    status: "open",
    lastVerified: "2026-07-16",
    lastUpdated: "2026-07-16",
    summary: "SMUD, Sacramento's community-owned utility, pays $2,000–$3,000 for gas-to-electric heat pump HVAC conversions and $3,000–$4,000 for heat pump water heaters, plus a $2,000 Go Electric panel-and-circuit bonus — up to ~$9,750 combined with induction. Federal 25C/25D credits ended Dec 31, 2025.",
    sources: [
      { label: "SMUD — Heating and Cooling Rebates (heat pump HVAC)", url: "https://www.smud.org/Rebates-and-Savings-Tips/Rebates-for-My-Home/Heating-and-Cooling-Rebates" },
      { label: "SMUD — Appliance Rebates (heat pump water heater, induction)", url: "https://www.smud.org/Rebates-and-Savings-Tips/Rebates-for-My-Home/Home-Appliances-and-Electronics-Rebates" },
      { label: "SMUD — Go Electric Bonus Rebates", url: "https://www.smud.org/Rebates-and-Savings-Tips/Improve-Home-Efficiency/Go-Electric-Bonus-Package" },
      { label: "SMUD — News: SMUD Boosts Rebates for Heat Pumps (February 2026)", url: "https://www.smud.org/Corporate/About-us/News-and-Media/2026/2026/SMUD-boosts-rebates-for-heat-pumps" },
      { label: "SMUD — Service Territory Map", url: "https://www.smud.org/Corporate/About-us/SMUDs-Territory-Map" },
      { label: "SMUD Contractor Network", url: "https://smudcontractornetwork.org/" },
    ],
  },
};

// Join helper: utilities serving a given state — used by state pages to
// render "Your utility" cross-links, and by the utilities hub.
export function utilitiesForState(state: StateCode): UtilityEntity[] {
  return Object.values(utilities).filter((u) =>
    u.territories.some((t) => t.state === state)
  );
}

// Only utilities with at least one verified, shipped page should surface
// in cross-links. Gate on lastVerified being set.
export function shippedUtilities(): UtilityEntity[] {
  return Object.values(utilities).filter((u) => u.lastVerified !== "");
}
