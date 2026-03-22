// ============================================================
// ADD TO: src/data/incentives.ts
// UPDATE StateCode type: 'CA' | 'MN' | 'ME' | 'MA' | 'OR' | 'WA' | 'NY'
// Then add these three entries to the incentives Record:
// ============================================================

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
        label: "PSE — HEAR Program",
        url: "https://www.pse.com/en/rebates/hear",
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
