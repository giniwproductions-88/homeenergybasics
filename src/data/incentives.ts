export type StateCode = "CA" | "MN" | "ME";

export type IncentiveStatus = "open" | "limited" | "paused";

export interface IncentiveSource {
  label: string;
  url: string;
}

export interface StateIncentive {
  stateCode: StateCode;
  stateName: string;
  status: IncentiveStatus;
  lastVerified: string; // YYYY-MM-DD
  summary: string;
  sources: IncentiveSource[];
}

export const incentives: Record<StateCode, StateIncentive> = {
  CA: {
    stateCode: "CA",
    stateName: "California",
    status: "limited",
    lastVerified: "2026-02-18",
    summary:
      "California heat pump rebates are currently limited and vary by region. Some state and utility-run programs remain active, but funding caps, pauses, or waitlists apply in many areas. Federal tax credits (25C/25D) are not available in 2026. Availability depends on where you live and which utility serves your home.",
    sources: [
      {
        label: "TECH Clean California",
        url: "https://techcleancalifornia.com/",
      },
      {
        label: "IRS Energy Credits (expired)",
        url: "https://www.irs.gov/credits-deductions/energy-efficient-home-improvement-credit",
      },
      {
        label: "CPUC Self-Generation Incentive Program",
        url: "https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/self-generation-incentive-program",
      },
    ],
  },

  MN: {
    stateCode: "MN",
    stateName: "Minnesota",
    status: "open",
    lastVerified: "2026-03-16",
    summary:
      "Minnesota utility heat pump rebates are active and available now. Xcel Energy, CenterPoint Energy, Minnesota Power, and electric co-ops all offer rebates through their CIP programs. Several cities offer additional stacking rebates. Federal tax credits (25C/25D) ended December 31, 2025. The state HEAR/HOMES program has not launched.",
    sources: [
      {
        label: "Xcel Energy Heat Pumps",
        url: "https://www.xcelenergy.com/programs_and_rebates/residential_programs_and_rebates/heating_and_cooling/air_source_heat_pumps",
      },
      {
        label: "CenterPoint Energy Rebates",
        url: "https://www.centerpointenergy.com/en-us/residential/save-energy-money/rebates-programs/heating-cooling",
      },
      {
        label: "Minnesota Power Rebates",
        url: "https://www.mnpower.com/residential/rebates",
      },
      {
        label: "MN Commerce Dept — HEAR Status",
        url: "https://mn.gov/commerce/energy/consumer/save-energy-money/home-energy-rebate/",
      },
      {
        label: "IRS 25C (expired)",
        url: "https://www.irs.gov/credits-deductions/energy-efficient-home-improvement-credit",
      },
      {
        label: "Minneapolis Home Energy Rebate",
        url: "https://www.minneapolismn.gov/resident-services/property-housing/housing-assistance/home-energy/",
      },
      {
        label: "Edina Energy Rebate",
        url: "https://www.edinamn.gov/1614/Energy-Rebate-Programs",
      },
      {
        label: "Xcel Clean Heat Plan",
        url: "https://co.my.xcelenergy.com/s/savings-offerings/residential/clean-heat-plan",
      },
    ],
  },

  ME: {
    stateCode: "ME",
    stateName: "Maine",
    status: "open",
    lastVerified: "2026-03-16",
    summary:
      "Efficiency Maine heat pump rebates are active and well-funded. Rebates range from $1,000 to $3,000 per outdoor unit depending on income, with lifetime caps of $3,000 to $9,000. A $500 bonus applies to whole-home upgrades completed March 1 – December 31, 2026. Federal tax credits (25C/25D) ended December 31, 2025. HEAR is partially active for mobile homes and affordable multifamily only — not standard single-family homes.",
    sources: [
      {
        label: "Efficiency Maine — Non-Ducted Rebates",
        url: "https://www.efficiencymaine.com/at-home/residential-heat-pump-rebates/",
      },
      {
        label: "Efficiency Maine — Ducted Rebates",
        url: "https://www.efficiencymaine.com/residential-ducted-heat-pump-rebates/",
      },
      {
        label: "Efficiency Maine — Whole-Home Rebates",
        url: "https://www.efficiencymaine.com/whole-home-heat-pump-rebates/",
      },
      {
        label: "Efficiency Maine — Income Verification",
        url: "https://www.efficiencymaine.com/income-based-eligibility-verification/",
      },
      {
        label: "Efficiency Maine — Vendor Locator",
        url: "https://www.efficiencymaine.com/at-home/vendor-locator/",
      },
      {
        label: "Maine DOER — HEAR Program",
        url: "https://www.maine.gov/energy/initiatives/infrastructure/home-energy-rebates",
      },
      {
        label: "IRS 25C (expired)",
        url: "https://www.irs.gov/credits-deductions/energy-efficient-home-improvement-credit",
      },
      {
        label: "NE Heat Pump Accelerator",
        url: "https://portal.ct.gov/deep/energy/new-england-heat-pump-accelerator",
      },
    ],
  },
};

export function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function isStale(dateStr: string, thresholdDays: number = 30): boolean {
  const [year, month, day] = dateStr.split("-").map(Number);
  const verified = new Date(year, month - 1, day);
  const now = new Date();
  const diffMs = now.getTime() - verified.getTime();
  const diffDays = diffMs / (1000 * 60 * 60 * 24);
  return diffDays > thresholdDays;
}
