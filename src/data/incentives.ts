export type StateCode = "CA" | "MN" | "ME" | "MA" | "OR" | "WA" | "NY";

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
    lastVerified: "2026-03-22",
    summary:
      "Most California statewide heat pump rebates are fully reserved. TECH Clean California single-family incentives and HEEHRA single-family rebates are exhausted statewide. Federal tax credits (25C/25D) ended December 31, 2025. Utility rebates remain available — SMUD boosted incentives to $3,000–$4,000 in February 2026. HOMES (~$291M) and HEEHRA Phase II ($152M) are funded but not yet launched.",
    sources: [
      {
        label: "TECH Clean California — Incentives",
        url: "https://techcleanca.com/incentives/",
      },
      {
        label: "TECH — HEEHRA Rebates",
        url: "https://techcleanca.com/incentives/heehrarebates/",
      },
      {
        label: "CA Energy Commission — IRA Rebates",
        url: "https://www.energy.ca.gov/programs-and-topics/programs/inflation-reduction-act-residential-energy-rebate-programs",
      },
      {
        label: "SMUD — Heat Pump Rebates",
        url: "https://www.smud.org/Rebates-and-Savings-Tips/Rebates-for-My-Home/Heating-and-Cooling-Rebates",
      },
      {
        label: "The Switch Is On — Incentive Finder",
        url: "https://incentives.switchison.org/",
      },
      {
        label: "IRS 25C (expired)",
        url: "https://www.irs.gov/credits-deductions/energy-efficient-home-improvement-credit",
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
        url: "https://mn.my.xcelenergy.com/s/residential/heating-cooling/heat-pumps",
      },
      {
        label: "CenterPoint Energy — Ducted ASHP Rebate",
        url: "https://www.centerpointenergy.com/en-us/SaveEnergyandMoney/Pages/Residential-Ducted-Air-Source-Heat-Pump-Rebate.aspx?sa=mn&au=res",
      },
      {
        label: "Minnesota Power — ASHP Rebates",
        url: "https://www.mnpower.com/ProgramsRebates/ASHPRebates",
      },
      {
        label: "MN Commerce — Save Energy Minnesota",
        url: "https://mn.gov/commerce/energy/consumer/energy-programs/save-energy-mn.jsp",
      },
      {
        label: "IRS 25C (expired)",
        url: "https://www.irs.gov/credits-deductions/energy-efficient-home-improvement-credit",
      },
      {
        label: "Minneapolis Energy Rebates",
        url: "https://www.minneapolismn.gov/government/programs-initiatives/environmental-programs/green-cost-share/energy-efficiency/energy-rebates/",
      },
      {
        label: "MN ASHP Collaborative — All Incentives",
        url: "https://www.mnashp.org/incentives-rates-financing",
      },
      {
        label: "Xcel Energy Programs & Rebates",
        url: "https://www.xcelenergy.com/programs_and_rebates",
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

  MA: {
    stateCode: "MA",
    stateName: "Massachusetts",
    status: "open",
    lastVerified: "2026-03-21",
    summary:
      "Massachusetts heat pump rebates are active through Mass Save. Whole-home rebates are $2,650 per ton (max $8,500), partial-home $1,125 per ton (max $8,500), and basic $250 per ton (max $2,500). A $500 sizing bonus and $500 weatherization bonus are available. R-410A systems no longer qualify — only next-generation refrigerants (R-32, R-454B). Federal tax credits (25C/25D) ended December 31, 2025. The 0% HEAT Loan provides up to $25,000 in financing.",
    sources: [
      {
        label: "Mass Save — Air Source Heat Pumps",
        url: "https://www.masssave.com/residential/rebates-offers-services/heating-and-cooling/heat-pumps/air-source-heat-pumps",
      },
      {
        label: "Mass Save — Heat Pumps Overview",
        url: "https://www.masssave.com/residential/rebates-offers-services/heating-and-cooling/heat-pumps",
      },
      {
        label: "Mass Save — Enhanced Rebates (Income-Eligible)",
        url: "https://www.masssave.com/residential/rebates-offers-services/income-based-offers/save-with-enhanced-incentives/enhanced-heating-and-cooling-rebates",
      },
      {
        label: "MA DOER — Energy Rebates & Incentives",
        url: "https://www.mass.gov/guides/massachusetts-energy-rebates-incentives",
      },
      {
        label: "IRS 25C (expired)",
        url: "https://www.irs.gov/credits-deductions/energy-efficient-home-improvement-credit",
      },
    ],
  },

  OR: {
    stateCode: "OR",
    stateName: "Oregon",
    status: "open",
    lastVerified: "2026-03-18",
    summary:
      "Oregon heat pump rebates are active through Energy Trust of Oregon ($800–$1,000) and stackable with ODOE's HP3 program ($2,000, owner-occupied funding exhausted). Federal tax credits (25C/25D) ended December 31, 2025. Federal HOMES and HEAR rebates are expected to launch Spring 2026 but are not yet available. No state tax credit exists.",
    sources: [
      {
        label: "Energy Trust — Heat Pump Incentives",
        url: "https://www.energytrust.org/residential/incentives/furnace-and-heat-pump",
      },
      {
        label: "Energy Trust — Special Promotion",
        url: "https://www.energytrust.org/incentives/limited-time-promotion-for-ducted-and-ductless-heat-pumps/",
      },
      {
        label: "ODOE — HP3 Program",
        url: "https://www.oregon.gov/energy/Incentives/Pages/HP3.aspx",
      },
      {
        label: "ODOE — Home Energy Rebates (HOMES/HEAR)",
        url: "https://www.oregon.gov/energy/Incentives/Pages/home-energy-rebates.aspx",
      },
      {
        label: "ODOE — Heat Pump Programs Overview",
        url: "https://www.oregon.gov/energy/Incentives/Pages/heat-pumps.aspx",
      },
      {
        label: "Oregon HIPPO Incentive Hub",
        url: "https://incentives.oregon.gov/about",
      },
      {
        label: "IRS 25C (expired)",
        url: "https://www.irs.gov/credits-deductions/energy-efficient-home-improvement-credit",
      },
    ],
  },

  WA: {
    stateCode: "WA",
    stateName: "Washington",
    status: "open",
    lastVerified: "2026-03-18",
    summary:
      "Washington has active heat pump rebates through utility programs (PSE up to $5,000 income-qualified) and a state-funded HEAR program (~$103.6M from Climate Commitment Act). Federal tax credits (25C/25D) ended December 31, 2025. Federal IRA rebate programs (HARP/HOMES) are not yet launched — still in final DOE preparation. I-2066 litigation is pending at the WA Supreme Court.",
    sources: [
      {
        label: "WA Commerce — IRA Home Energy Rebates",
        url: "https://www.commerce.wa.gov/energy-incentives/ira-home-energy-rebates/",
      },
      {
        label: "WA Commerce — State HEAR Program",
        url: "https://www.commerce.wa.gov/energy-incentives/hear/",
      },
      {
        label: "PSE — Heat Pump Rebates",
        url: "https://www.pse.com/en/rebates/heating/electric-resistance-to-air-source-heat-pump-conversion-rebate",
      },
      {
        label: "PSE — Heating Rebates",
        url: "https://www.pse.com/en/rebates/heating",
      },
      {
        label: "Seattle City Light — Home Energy Solutions",
        url: "https://www.seattle.gov/city-light/residential-services/home-energy-solutions",
      },
      {
        label: "WA HEAR Administrators",
        url: "https://www.wahear.com/",
      },
      {
        label: "IRS 25C (expired)",
        url: "https://www.irs.gov/credits-deductions/energy-efficient-home-improvement-credit",
      },
    ],
  },

  NY: {
    stateCode: "NY",
    stateName: "New York",
    status: "open",
    lastVerified: "2026-03-18",
    summary:
      "New York has the nation's most aggressive heat pump incentives through the NYS Clean Heat program, reauthorized 2026–2030 with $5.36 billion. Utility rebates range from $6,000–$12,000 for air-source (decommissioning) and up to $25,000 for ground-source. Federal tax credits (25C/25D) ended December 31, 2025. HEAR/HOMES rebates are live through EmPower+ for income-eligible households. New Weatherized Tier launched March 1, 2026.",
    sources: [
      {
        label: "NYS Clean Heat Program Manual v1.1",
        url: "https://cleanheat.ny.gov/assets/pdf/NYS%20Clean%20Heat%20Program%20Manual%202025.12.12_REFILE.pdf",
      },
      {
        label: "Clean Heat 2026–2030 Implementation Plan",
        url: "https://cleanheat.ny.gov/assets/pdf/Clean%20Heat%20Implementation%20Plan%202026-2030.pdf",
      },
      {
        label: "NYSERDA — EmPower+",
        url: "https://www.nyserda.ny.gov/All-Programs/EmPower-New-York-Program",
      },
      {
        label: "NYSERDA — IRA Homeowners",
        url: "https://www.nyserda.ny.gov/All-Programs/Inflation-Reduction-Act/Inflation-Reduction-Act-homeowners",
      },
      {
        label: "Con Edison — Heat Pump Rebates",
        url: "https://www.coned.com/en/save-money/rebates-incentives-tax-credits/rebates-incentives-tax-credits-for-residential-customers/electric-heating-and-cooling-technology-for-renters-homeowners/save-on-a-central-air-source-heat-pump",
      },
      {
        label: "Central Hudson — Heat Pump Incentives",
        url: "https://www.cenhud.com/my-energy/save-energy-money/residential-incentives/heat-pumps-residential",
      },
      {
        label: "PSEG Long Island — Heat Pump Rebates",
        url: "https://www.psegliny.com/en/saveenergyandmoney/homeefficiency/HomeComfort/HeatPumps/Rebates",
      },
      {
        label: "IRS 25C (expired)",
        url: "https://www.irs.gov/credits-deductions/energy-efficient-home-improvement-credit",
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
