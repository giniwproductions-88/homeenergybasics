// src/data/utilities.ts
// Utility / program-administrator data model — first-class entity.
// Mirrors incentives.ts conventions: status enum, lastVerified (YYYY-MM-DD,
// monotonic — never moves backward), sources array rendered on-page.
//
// IMPORTANT: lastVerified follows playbook rule 1 — it is set only after a
// real verification pass with quoted source text. Entries below that have
// lastVerified: "" are SCHEMA STUBS and must not ship until verified.

import type { StateCode } from "./incentives";

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
  lastVerified: string; // YYYY-MM-DD — monotonic, rule-1 gated
  // 2-3 sentence hub-card summary. Same constraints as state summaries:
  // primary dollar amounts, primary program names, ~350 chars max.
  summary: string;
  sources: UtilitySource[]; // minimum 4, administrator pages first
}

export const utilities: Record<UtilitySlug, UtilityEntity> = {
  // ── PILOT 1 — build first ────────────────────────────────────────────
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

  // ── PILOT 2-6 — schema placeholders, do not ship ─────────────────────
  "efficiency-maine": {
    slug: "efficiency-maine",
    name: "Efficiency Maine",
    shortName: "Efficiency Maine",
    type: "administrator",
    territories: [
      { state: "ME", hasHeatPumpProgram: true, note: "VERIFY at build (ME state page verified 7/14 — reuse research, re-confirm)" },
    ],
    status: "open",
    lastVerified: "",
    summary: "STUB",
    sources: [],
  },
  "duke-energy": {
    slug: "duke-energy",
    name: "Duke Energy",
    shortName: "Duke",
    type: "iou",
    territories: [
      { state: "NC", hasHeatPumpProgram: false, note: "VERIFY — Progress vs Carolinas territories differ" },
      { state: "SC", hasHeatPumpProgram: false, note: "VERIFY" },
      { state: "FL", hasHeatPumpProgram: false, note: "VERIFY" },
      { state: "IN", hasHeatPumpProgram: false, note: "VERIFY" },
      { state: "OH", hasHeatPumpProgram: false, note: "VERIFY" },
      { state: "KY", hasHeatPumpProgram: false, note: "VERIFY" },
    ],
    status: "open",
    lastVerified: "",
    summary: "STUB",
    sources: [],
  },
  "tva-energyright": {
    slug: "tva-energyright",
    name: "TVA EnergyRight",
    shortName: "TVA",
    type: "federal-power",
    territories: [
      { state: "TN", hasHeatPumpProgram: false, note: "VERIFY — delivered via local power companies" },
      { state: "AL", hasHeatPumpProgram: false, note: "VERIFY" },
      { state: "MS", hasHeatPumpProgram: false, note: "VERIFY" },
      { state: "KY", hasHeatPumpProgram: false, note: "VERIFY" },
      { state: "GA", hasHeatPumpProgram: false, note: "VERIFY — small NW GA territory" },
    ],
    status: "open",
    lastVerified: "",
    summary: "STUB",
    sources: [],
  },
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
