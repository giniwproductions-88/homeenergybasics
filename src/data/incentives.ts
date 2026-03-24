export type StateCode = "AL" | "CA" | "MN" | "ME" | "MA" | "MD" | "MI" | "OR" | "WA" | "NY" | "CT" | "CO" | "IL" | "TX" | "NJ" | "PA" | "VA" | "RI" | "VT" | "NH" | "WI" | "GA" | "HI" | "IA" | "AZ" | "NV" | "NM" | "NC" | "FL" | "OH" | "IN" | "TN" | "SC" | "MO" | "DC";

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
  AL: {
    stateCode: "AL",
    stateName: "Alabama",
    status: "limited",
    lastVerified: "2026-03-23",
    summary:
      "Alabama has no statewide heat pump rebate. TVA EnergyRight offers $500\u20131,500 in northern Alabama. Alabama Power offers $1,000 for gas-to-electric conversions. Rural co-ops offer $300\u2013400/ton. Federal tax credits expired. IRA HEAR rebates not yet launched.",
    sources: [
      {
        label: "Alabama Power \u2014 Rebates & Incentives",
        url: "https://www.alabamapower.com/residential/save-money-and-energy/rebates-and-incentives.html",
      },
      {
        label: "TVA EnergyRight \u2014 Residential Rebates",
        url: "https://energyright.com/residential/rebates/",
      },
      {
        label: "ADECA \u2014 IRA Home Energy Rebates Program",
        url: "https://adeca.alabama.gov/ira-rebates/",
      },
      {
        label: "ADECA \u2014 Weatherization Assistance Program",
        url: "https://adeca.alabama.gov/weatherization/",
      },
      {
        label: "Baldwin EMC \u2014 Heat Pump Rebate",
        url: "https://www.baldwinemc.com/member-benefits/member-programs/heat-pump-rebate/",
      },
      {
        label: "Central Alabama EC \u2014 Heat Pump Rebates",
        url: "https://caec.coop/member-benefits-services/heat-pumps/",
      },
      {
        label: "Wiregrass EC \u2014 Rebate Program",
        url: "https://www.wiregrass.coop/energy-conservation/rebate-program/",
      },
      {
        label: "IRS \u2014 25C/25D Termination FAQ",
        url: "https://www.irs.gov/newsroom/faqs-for-modification-of-sections-25c-25d-25e-30c-30d-45l-45w-and-179d-under-public-law-119-21-139-stat-72-july-4-2025-commonly-known-as-the-one-big-beautiful-bill-obbb",
      },
    ],
  },

  CA: {
    stateCode: "CA",
    stateName: "California",
    status: "limited",
    lastVerified: "2026-03-22",
    summary:
      "Most California statewide heat pump rebates are fully reserved. TECH Clean California single-family incentives and HEEHRA single-family rebates are exhausted statewide. Federal tax credits (25C/25D) ended December 31, 2025. Utility rebates remain — SMUD offers up to $3,000–$4,000 and LADWP up to $2,500/ton. HOMES (~$291M) and HEEHRA Phase II ($152M) are funded but not yet launched.",
    sources: [
      {
        label: "TECH Clean California",
        url: "https://techcleancalifornia.com/",
      },
      {
        label: "Switch Is On — California Rebates",
        url: "https://www.switchison.org/",
      },
      {
        label: "SMUD — Heating & Cooling Rebates",
        url: "https://www.smud.org/Rebates-and-Savings-Tips/Rebates-for-My-Home/Heating-and-Cooling-Rebates",
      },
      {
        label: "LADWP — Consumer Rebate Program",
        url: "https://www.ladwp.com/residential-services/assistance-programs/consumer-rebate-program",
      },
      {
        label: "CA Energy Commission — IRA Rebates",
        url: "https://www.energy.ca.gov/programs-and-topics/programs/inflation-reduction-act-residential-energy-rebate-programs",
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
    lastVerified: "2026-03-22",
    summary:
      "Xcel Energy offers up to $2,000 for cold-climate heat pumps (plus $600 insulation bonus). CenterPoint adds $1,100 for dual-fuel systems. Minnesota Power offers $400 for ducted ASHP. Minneapolis Green Cost Share stacks up to $14,000. Federal 25C/25D expired Dec 31, 2025. Save Energy Minnesota (HEAR + $4,000 state HP rebate) has not launched — no date set.",
    sources: [
      {
        label: "Xcel Energy — MN 2024-2026 Rebate Summary (PDF)",
        url: "https://www.xcelenergy.com/staticfiles/xe-responsive/Working%20With%20Us/24-1-201%20MN%20Res%20Rebate%20Summary%20Information%20Sheet.pdf",
      },
      {
        label: "CenterPoint Energy — MN Ducted ASHP Rebate",
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
        label: "MN Commerce — Residential Heat Pump Rebate",
        url: "https://mn.gov/commerce/energy/consumer/energy-programs/heat-pump.jsp",
      },
      {
        label: "Minneapolis — Green Cost Share / Energy Rebates",
        url: "https://www.minneapolismn.gov/government/programs-initiatives/environmental-programs/green-cost-share/energy-efficiency/energy-rebates/",
      },
      {
        label: "CEE — Minneapolis Bonus Rebate Program",
        url: "https://www.mncee.org/minneapolis-bonus-rebate-program",
      },
      {
        label: "IRS 25C (expired)",
        url: "https://www.irs.gov/credits-deductions/energy-efficient-home-improvement-credit",
      },
    ],
  },

  ME: {
    stateCode: "ME",
    stateName: "Maine",
    status: "open",
    lastVerified: "2026-03-22",
    summary:
      "Efficiency Maine heat pump rebates are active and well-funded through Triennial Plan VI ($529.3M). Rebates range from $1,000–$3,000 per unit for non-ducted systems and $3,000–$9,000 for ducted whole-home systems, with income-based tiers. A $500 whole-home bonus is available March–December 2026. Federal tax credits (25C/25D) ended December 31, 2025. HEAR is partially active for mobile homes and affordable multifamily only.",
    sources: [
      {
        label: "Efficiency Maine — Residential Heat Pump Rebates",
        url: "https://www.efficiencymaine.com/at-home/residential-heat-pump-rebates/",
      },
      {
        label: "Efficiency Maine — Whole-Home Heat Pump Rebates",
        url: "https://www.efficiencymaine.com/whole-home-heat-pump-rebates/",
      },
      {
        label: "Efficiency Maine — Heat Pump Water Heaters",
        url: "https://www.efficiencymaine.com/at-home/heat-pump-water-heaters/",
      },
      {
        label: "Efficiency Maine — Home Energy Loans",
        url: "https://www.efficiencymaine.com/at-home/energy-loans/",
      },
      {
        label: "IRS 25C (expired)",
        url: "https://www.irs.gov/credits-deductions/energy-efficient-home-improvement-credit",
      },
    ],
  },

  MA: {
    stateCode: "MA",
    stateName: "Massachusetts",
    status: "open",
    lastVerified: "2026-03-22",
    summary:
      "Mass Save heat pump rebates are active and recently restructured. Whole-home rebates reach $2,650/ton (max $8,500) with income-based adders. Partial-home rebates are $1,125/ton. A $500 sizing bonus and $500 weatherization bonus are available. R-410A refrigerant systems are excluded — must use R-32 or R-454B. Federal tax credits (25C/25D) ended December 31, 2025. HEAR funding is being delivered through Mass Save for households ≤60% AMI.",
    sources: [
      {
        label: "Mass Save — Heat Pump Rebates",
        url: "https://www.masssave.com/residential/rebates-and-incentives/heating-and-cooling",
      },
      {
        label: "Mass Save — HEAT Loan (0% Financing)",
        url: "https://www.masssave.com/residential/rebates-and-incentives/heat-loan-program",
      },
      {
        label: "Mass Save — Income-Eligible Programs",
        url: "https://www.masssave.com/residential/income-eligible-programs",
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
    lastVerified: "2026-03-22",
    summary:
      "Oregon heat pump rebates are available through Energy Trust of Oregon for Portland General Electric and Pacific Power customers. Rebates range from $800–$3,500+ depending on system type, efficiency, and income qualification. The Oregon Department of Energy also offers a Residential Energy Tax Credit for certain installations. Federal tax credits (25C/25D) ended December 31, 2025. Oregon's HEAR program launched in 2025.",
    sources: [
      {
        label: "Energy Trust of Oregon — Heating & Cooling",
        url: "https://www.energytrust.org/residential/heating-cooling/",
      },
      {
        label: "Oregon Dept of Energy — Residential Energy Tax Credits",
        url: "https://www.oregon.gov/energy/Incentives/Pages/RETC.aspx",
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
    lastVerified: "2026-03-22",
    summary:
      "Washington heat pump rebates are available through multiple utilities. Puget Sound Energy offers up to $4,000 for ducted heat pumps and $1,500 for ductless. Avista, Clark Public Utilities, and Snohomish PUD also offer programs. Washington's HEAR program launched in 2025 with up to $14,000 for income-qualified households. Federal tax credits (25C/25D) ended December 31, 2025.",
    sources: [
      {
        label: "Puget Sound Energy — Heat Pump Rebates",
        url: "https://www.pse.com/rebates/heat-pump-rebates",
      },
      {
        label: "WA Dept of Commerce — Home Energy Rebates",
        url: "https://www.commerce.wa.gov/growing-the-economy/energy/home-energy-rebates/",
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
    lastVerified: "2026-03-22",
    summary:
      "New York heat pump incentives are active through the NYS Clean Heat Program, administered by six utilities. Rebates range from $5,000–$12,000 for air-source heat pumps depending on utility territory, decommissioning status, and DAC designation. EmPower+ and HEAR provide up to $24,000 for income-qualified households. The state geothermal tax credit covers 25% up to $10,000. Federal tax credits (25C/25D) ended December 31, 2025.",
    sources: [
      {
        label: "NYSERDA — NYS Clean Heat Program",
        url: "https://www.nyserda.ny.gov/All-Programs/Heat-Pump-Program",
      },
      {
        label: "NYSERDA — EmPower+",
        url: "https://www.nyserda.ny.gov/All-Programs/EmPower-New-York-Program",
      },
      {
        label: "Con Edison — Heat Pump Incentives",
        url: "https://www.coned.com/en/save-money/rebates-incentives-tax-credits/rebates-incentives-tax-credits-for-residential-customers/electric-heating-and-cooling-technology-for-renters-homeowners/save-on-a-central-air-source-heat-pump",
      },
      {
        label: "National Grid — Electric Heating & Cooling",
        url: "https://www.nationalgridus.com/Upstate-NY-Home/Energy-Saving-Programs/Electric-Heating-Cooling",
      },
      {
        label: "Central Hudson — Heat Pump Incentives",
        url: "https://www.cenhud.com/en/my-energy/save-energy-money/residential-incentives/heatpumpincentives/",
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

  CT: {
    stateCode: "CT",
    stateName: "Connecticut",
    status: "open",
    lastVerified: "2026-03-22",
    summary:
      "Connecticut heat pump incentives are active through Energize CT. Rebates range from $250–$1,000 per ton depending on system type and fuel switching. Federal tax credits ended December 31, 2025. HEAR rebates are funded but not yet available. The Smart-E Loan offers 0.99% APR financing through March 31, 2026.",
    sources: [
      {
        label: "Energize CT — Air-Source Heat Pump Rebates",
        url: "https://www.energizect.com/rebates-incentives/heating-cooling/heat-pumps/residential-air-source",
      },
      {
        label: "Energize CT — Energy Optimization Rebates",
        url: "https://www.energizect.com/rebates-incentives/heating-cooling/heat-pumps/residential-energy-optimization",
      },
      {
        label: "Energize CT — Heat Pump Water Heater Rebates",
        url: "https://www.energizect.com/rebates-incentives/residential-water-heater/heat-pump",
      },
      {
        label: "Energize CT — Income-Eligible Programs (HES-IE)",
        url: "https://www.energizect.com/energy-evaluations/income-eligible-options",
      },
      {
        label: "CT DEEP — IRA Home Energy Rebate Programs (HEAR/HOMES status)",
        url: "https://portal.ct.gov/deep/energy/inflation-reduction-act-home-energy-rebate-programs",
      },
      {
        label: "Energize CT — IRA FAQ",
        url: "https://www.energizect.com/IRA-FAQ",
      },
      {
        label: "IRS 25C (expired)",
        url: "https://www.irs.gov/credits-deductions/energy-efficient-home-improvement-credit",
      },
    ],
  },

  CO: {
    stateCode: "CO",
    stateName: "Colorado",
    status: "open",
    lastVerified: "2026-03-22",
    summary:
      "Colorado offers HEAR rebates up to $8,000 for cold-climate heat pumps (income-qualified), Xcel Energy utility rebates up to $2,250/ton, and a $1,000 state tax credit for air-source systems. Federal 25C/25D credits ended December 31, 2025.",
    sources: [
      {
        label: "Colorado HEAR program — Colorado Energy Office",
        url: "https://energyoffice.colorado.gov/home-energy-rebates",
      },
      {
        label: "Colorado HEAR FAQ — Colorado Energy Office",
        url: "https://energyoffice.colorado.gov/ira-rebate-faq",
      },
      {
        label: "Colorado state heat pump tax credit — Colorado Energy Office",
        url: "https://energyoffice.colorado.gov/hptc",
      },
      {
        label: "Xcel Energy heat pumps — residential",
        url: "https://co.my.xcelenergy.com/s/residential/heating-cooling/heat-pumps",
      },
      {
        label: "Colorado Springs Utilities — rebates and incentives",
        url: "https://www.csu.org/rebates-incentives/residential-hvac",
      },
      {
        label: "Holy Cross Energy — residential rebates 2026",
        url: "https://www.holycross.com/member-programs/energy-efficiency-and-rebates/residential-rebates-2026",
      },
      {
        label: "Weatherization Assistance Program — Colorado Energy Office",
        url: "https://energyoffice.colorado.gov/weatherization-assistance-program",
      },
      {
        label: "Colorado Sun — heat pump installations doubled in 2025",
        url: "https://coloradosun.com/2026/02/19/heat-pump-colorado-rebates-contractors/",
      },
    ],
  },

  IL: {
    stateCode: "IL",
    stateName: "Illinois",
    status: "open",
    lastVerified: "2026-03-22",
    summary:
      "Federal tax credits expired. Utility rebates up to $2,000 are available through ComEd, Ameren Illinois, MidAmerican Energy, and some municipal utilities. Illinois HEAR and HOMES rebates are still pending launch.",
    sources: [
      {
        label: "Illinois EPA — Energy Rebates",
        url: "https://epa.illinois.gov/topics/energy/energy-rebates.html",
      },
      {
        label: "ComEd — Heating & Cooling Rebates",
        url: "https://www.comed.com/ways-to-save/for-your-home/rebates-discounts/heating-cooling-discounts",
      },
      {
        label: "Ameren Illinois — HVAC Discounts",
        url: "https://amerenillinoissavings.com/residential/products-discounts-and-rebates/hvac-and-water-heating-discounts/",
      },
      {
        label: "MidAmerican Energy — Home Discounts",
        url: "https://www.midamericanenergy.com/home-discounts-and-rebates",
      },
      {
        label: "IRS — OBBB FAQs",
        url: "https://www.irs.gov/newsroom/faqs-for-modification-of-sections-25c-25d-25e-30c-30d-45l-45w-and-179d-under-public-law-119-21-139-stat-72-july-4-2025-commonly-known-as-the-one-big-beautiful-bill-obbb",
      },
      {
        label: "EIA — Illinois State Profile",
        url: "https://www.eia.gov/state/analysis.php?sid=IL",
      },
    ],
  },

  TX: {
    stateCode: "TX",
    stateName: "Texas",
    status: "limited",
    lastVerified: "2026-03-22",
    summary:
      "Texas has no statewide heat pump rebate program and no state income tax. Rebates come from your local utility and vary widely. Austin Energy offers approximately $3,000 for whole-home projects plus 0% APR financing. Oncor provides performance-based incentives through approved contractors. CenterPoint offers up to $500 per unit. CPS Energy pays $90–$310 per ton. Federal tax credits (25C/25D) ended December 31, 2025. Texas received $690 million in IRA HOMES/HEAR rebate funding, but SECO has not launched the program.",
    sources: [
      {
        label: "Austin Energy — Rebates & Incentives",
        url: "https://savings.austinenergy.com/residential/offerings",
      },
      {
        label: "Oncor — Home Energy Efficiency Program",
        url: "https://www.oncor.com/content/oncorwww/talot/en/home/get-started/residential/home-efficiency.html",
      },
      {
        label: "CenterPoint Energy — Residential Efficiency Programs",
        url: "https://www.centerpointenergy.com/en-us/residential/save-energy-money/electric-efficiency-programs/residential-electric-efficiency?sa=ho",
      },
      {
        label: "CPS Energy — SaveNow Rebates",
        url: "https://resi-savenow.cpsenergy.com/",
      },
      {
        label: "SECO — IRA Rebates (HOMES/HEAR Status)",
        url: "https://comptroller.texas.gov/programs/seco/funding/ira/",
      },
      {
        label: "IRS 25C (expired)",
        url: "https://www.irs.gov/credits-deductions/energy-efficient-home-improvement-credit",
      },
      {
        label: "AEP Texas — Residential Programs",
        url: "https://aeptxsaves.com/residential-programs/",
      },
      {
        label: "CoServ — Energy Saving Programs",
        url: "https://www.coserv.com/energy-solutions/energy-savings/energy-saving-programs/",
      },
      {
        label: "TDHCA — Weatherization Assistance Program",
        url: "https://www.tdhca.texas.gov/ca/wap",
      },
    ],
  },

  NJ: {
    stateCode: "NJ",
    stateName: "New Jersey",
    status: "open",
    lastVerified: "2026-03-22",
    summary:
      "New Jersey heat pump rebates are active through the statewide Whole Home program (up to $7,500 cash-back plus 0% financing) and all four electric utilities (PSE&G, JCP&L, Atlantic City Electric, RECO). Programs stack. Federal tax credits (25C/25D) ended December 31, 2025. The state's $185 million in IRA HEAR/HOMES funding has not launched consumer-facing programs as of March 22, 2026.",
    sources: [
      {
        label: "NJ Whole Home Program (Ciel Power)",
        url: "https://www.cielpower.com/incentives-and-rebates",
      },
      {
        label: "PSE&G HVAC Instant Rebates",
        url: "https://homeenergy.pseg.com/heatingandcooling",
      },
      {
        label: "JCP&L HVAC Rebates (CLEAResult)",
        url: "https://residential.energysavenj.com/jersey-central/hvac/",
      },
      {
        label: "Atlantic City Electric HVAC Program",
        url: "https://homeenergysavings.atlanticcityelectric.com/residential/rebates/hvac-efficiency-program",
      },
      {
        label: "RECO Heat Pump Rebates",
        url: "https://www.oru.com/en/save-money/rebates-incentives-credits/new-jersey-customers/incentives-for-residential-customers-nj/efficient-products/heating-cooling-equipment",
      },
      {
        label: "NJ BPU — IRA HEAR/HOMES Funding ($185M)",
        url: "https://www.nj.gov/bpu/newsroom/2025/approved/20250127.html",
      },
      {
        label: "NJ Comfort Partners (Income-Eligible)",
        url: "https://www.njcleanenergy.com/CP",
      },
      {
        label: "NJNG SAVEGREEN Heat Pump Rebates",
        url: "https://www.savegreen.com/applications/residential-applications/hvac-and-water-heating-rebate-application.aspx",
      },
      {
        label: "IRS — 25C/25D Expiration (OBBBA FAQ)",
        url: "https://www.irs.gov/newsroom/faqs-for-modification-of-sections-25c-25d-25e-30c-30d-45l-45w-and-179d-under-public-law-119-21-139-stat-72-july-4-2025-commonly-known-as-the-one-big-beautiful-bill-obbb",
      },
    ],
  },

  MD: {
    stateCode: "MD",
    stateName: "Maryland",
    status: "open",
    lastVerified: "2026-03-22",
    summary:
      "EmPOWER Maryland offers up to $15,000 for electrification projects (75% of cost) through all five major utilities. Midstream rebates of $800–$1,700 per heat pump are available instantly through contractors. Potomac Edison's Switch-to-Electric program adds up to $4,000 on top. Montgomery County's Electrify MC adds $2,500. Federal 25C/25D expired. HEAR/HOMES ($136.8M) not yet launched.",
    sources: [
      {
        label: "BGE Smart Energy — Heating & Cooling",
        url: "https://bgesmartenergy.com/residential/help-me-save/heating-cooling",
      },
      {
        label: "Pepco — HVAC Efficiency Program",
        url: "https://homeenergysavings.pepco.com/md/residential/hvac-efficiency-program",
      },
      {
        label: "Potomac Edison — Switch to Electric",
        url: "https://energysavemd-home.com/switch-to-electric-program/",
      },
      {
        label: "Delmarva Power — HVAC Efficiency",
        url: "https://homeenergysavings.delmarva.com/md/residential/hvac-efficiency-program",
      },
      {
        label: "SMECO — Heat Pump Water Heaters",
        url: "https://www.smeco.coop/energy-efficiency/residential-programs/appliance-rebates/heat-pump-water-heaters/",
      },
      {
        label: "MEA — IRA Rebates Status",
        url: "https://energy.maryland.gov/Pages/IRArebates.aspx",
      },
      {
        label: "MEA — Financial Resources & Incentives",
        url: "https://energy.maryland.gov/Pages/BuildingIncentives.aspx",
      },
      {
        label: "Montgomery County — Electrify MC",
        url: "https://www.montgomerycountymd.gov/DEP/energy/homes/electrify-mc.html",
      },
      {
        label: "DHCD — BeSMART Home Loans",
        url: "https://dhcd.maryland.gov/Energy-Home-Repair/pages/homeowner-loans/besmart.aspx",
      },
      {
        label: "IRS — 25C/25D Expiration (OBBBA FAQ)",
        url: "https://www.irs.gov/newsroom/faqs-for-modification-of-sections-25c-25d-25e-30c-30d-45l-45w-and-179d-under-public-law-119-21-139-stat-72-july-4-2025-commonly-known-as-the-one-big-beautiful-bill-obbb",
      },
    ],
  },

  MI: {
    stateCode: "MI",
    stateName: "Michigan",
    status: "open",
    lastVerified: "2026-03-22",
    summary:
      "Michigan's $210 million MiHER program offers up to $8,000 for heat pumps at point of sale for income-qualifying households (≤150% AMI). DTE Energy rebates run $150–$1,200. Consumers Energy offers $300–$350. Traverse City Light & Power offers up to $3,000. Ann Arbor's A2ZERO adds $4,000–$5,500. Federal tax credits (25C/25D) ended December 31, 2025.",
    sources: [
      {
        label: "MiHER Home Energy Rebates (EGLE)",
        url: "https://www.michigan.gov/egle/about/organization/materials-management/energy/rfps-loans/home-energy-rebate-programs",
      },
      {
        label: "MiHER: How to Get Your Rebate",
        url: "https://www.michigan.gov/egle/about/organization/materials-management/energy/rfps-loans/home-energy-rebate-programs/get-rebate",
      },
      {
        label: "DTE Energy Heat Pump Rebates",
        url: "https://www.dteenergy.com/us/en/residential/save-money-energy/rebates-and-offers/air-conditioners.html",
      },
      {
        label: "Consumers Energy Heating & Cooling Rebates",
        url: "https://www.consumersenergy.com/residential/save-money-and-energy/rebates/heating-and-cooling",
      },
      {
        label: "TCLP Residential Incentives (2025–2026 PDF)",
        url: "https://www.tclp.org/wp-content/uploads/2026/03/Energy-Rewards-Residential-Measures-Updated.pdf",
      },
      {
        label: "Lansing BWL 2026 Rebate Application",
        url: "https://www.lbwl.com/sites/default/files/documents/BWL%20HES_Residential%20Application_2026_v01.09.pdf",
      },
      {
        label: "Ann Arbor A2ZERO Home Energy Rebates",
        url: "https://www.a2gov.org/sustainability-innovations-home/sustainability-me/for-families-individuals/home-energy-rebates/",
      },
      {
        label: "Michigan Saves Financing",
        url: "https://michigansaves.org/home-energy-improvements/",
      },
      {
        label: "IRS 25C (expired)",
        url: "https://www.irs.gov/credits-deductions/energy-efficient-home-improvement-credit",
      },
    ],
  },

  PA: {
    stateCode: "PA",
    stateName: "Pennsylvania",
    status: "limited",
    lastVerified: "2026-03-22",
    summary:
      "Pennsylvania heat pump incentives are limited to utility rebates under Act 129 Phase IV (expiring May 31, 2026). PECO customers can stack up to $1,950 with EAP bonuses. PPL offers $350–$1,250, Duquesne Light $375–$425, FirstEnergy $200–$325, UGI up to $1,250. Federal 25C/25D ended December 31, 2025. Penn Energy Savers ($258.9M HEAR/HOMES) has not launched — awaiting federal approval.",
    sources: [
      {
        label: "PA DEP — Inflation Reduction Act / Penn Energy Savers",
        url: "https://www.pa.gov/agencies/dep/residents/saving-energy/inflation-reduction-act",
      },
      {
        label: "Penn Energy Savers (consumer site)",
        url: "https://www.pennenergysavers.com",
      },
      {
        label: "PHFA HEELP Loan Program",
        url: "https://www.phfa.org/programs/repairs/heelp.aspx",
      },
      {
        label: "EAP Residential HVAC Rebate Program",
        url: "https://www.eap.org/rebate/2026-hvac-rebate",
      },
      {
        label: "PPL Electric Savings Portal",
        url: "https://ppl.clearesult.com/",
      },
      {
        label: "Duquesne Light Watt Choices",
        url: "https://www.dlcwattchoices.com/residentialrebates/",
      },
      {
        label: "FirstEnergy PA Rebates",
        url: "https://rebates.energysavepa.com/",
      },
      {
        label: "UGI Electric Equipment Rebates",
        url: "https://www.ugi.com/rebates-for-home/electric/equipment-rebate-program/",
      },
      {
        label: "Philadelphia Energy Authority",
        url: "https://philaenergy.org",
      },
      {
        label: "PA PUC — Act 129 Phase V Approval",
        url: "https://www.puc.pa.gov/press-release/2025/puc-approves-next-phase-of-state-energy-efficiency-program-06182025",
      },
    ],
  },

  VA: {
    stateCode: "VA",
    stateName: "Virginia",
    status: "limited",
    lastVerified: "2026-03-22",
    summary:
      "Federal tax credits expired Dec 31, 2025. Virginia's $188M in IRA-funded HOMES and HEAR rebates remain pending — Virginia Energy is assessing the impact of federal funding freezes. Utility rebates are the primary incentive: Washington Gas offers up to $2,000 for dual-fuel heat pumps in Northern Virginia, Dominion Energy offers HPWH rebates of $250–$400 and central HP rebates through its Home Retrofit Program, and Appalachian Power provides $300–$400 for mini-splits. Most electric cooperatives offer no direct rebates. Low-income households can access free upgrades through WAP and Dominion's EnergyShare program.",
    sources: [
      {
        label: "Virginia Energy — Home Energy Rebates FAQ",
        url: "https://www.energy.virginia.gov/energy-efficiency/HomeEnergyRebatesFrequentlyAskedQuestions.shtml",
      },
      {
        label: "IRS — OBBBA FAQ (25C/25D Expiration)",
        url: "https://www.irs.gov/newsroom/faqs-for-modification-of-sections-25c-25d-25e-30c-30d-45l-45w-and-179d-under-public-law-119-21-139-stat-72-july-4-2025-commonly-known-as-the-one-big-beautiful-bill-obbb",
      },
      {
        label: "Dominion Energy Savings — Water & Energy Rebates",
        url: "https://www.domsavings.com/home-program/water-energy-rebate",
      },
      {
        label: "Washington Gas — VA Home Heating Rebates",
        url: "https://wgsmartsavings.com/programs-rebates/va/home-heating",
      },
      {
        label: "Appalachian Power — TakeCharge VA Rebates",
        url: "https://takechargeva.com/rebates",
      },
      {
        label: "Virginia DHCD — Weatherization Assistance Program",
        url: "https://www.dhcd.virginia.gov/wx",
      },
      {
        label: "Charlottesville — Retrofit Mini Grant",
        url: "https://www.charlottesville.gov/m/newsflash/home/detail/2241",
      },
      {
        label: "Virginia Energy Sense — Incentives & Rebates",
        url: "https://www.virginiaenergysense.org/incentives-and-rebates/",
      },
    ],
  },

  RI: {
    stateCode: "RI",
    stateName: "Rhode Island",
    status: "open",
    lastVerified: "2026-03-22",
    summary:
      "Clean Heat RI covers up to 60% of heat pump costs (max $11,500) and is the primary incentive available in 2026. Rhode Island Energy adds smaller per-ton rebates. Federal tax credits are gone, and HEAR does not cover heat pump HVAC systems in Rhode Island (only electrical upgrades and appliances).",
    sources: [
      {
        label: "Clean Heat RI — OER",
        url: "https://energy.ri.gov/heating-cooling/clean-heat-ri",
      },
      {
        label: "Clean Heat RI Incentives",
        url: "https://cleanheatri.com/resources/incentives/",
      },
      {
        label: "RI Energy — Electric Heating & Cooling Rebates",
        url: "https://www.rienergy.com/site/ways-to-save/save-money-with-rebates-and-incentives/electric-heating-and-cooling",
      },
      {
        label: "HEAR/HOMES — RI OER",
        url: "https://energy.ri.gov/energy-incentives/home-energy-rebate-programs",
      },
      {
        label: "IRS — 25C/25D Expiration (OBBBA FAQ)",
        url: "https://www.irs.gov/newsroom/faqs-for-modification-of-sections-25c-25d-25e-30c-30d-45l-45w-and-179d-under-public-law-119-21-139-stat-72-july-4-2025-commonly-known-as-the-one-big-beautiful-bill-obbb",
      },
      {
        label: "Green Energy Consumers Alliance — RI",
        url: "https://www.greenenergyconsumers.org/heatpumps/Incentives",
      },
      {
        label: "Capital Good Fund — DoubleGreen",
        url: "https://capitalgoodfund.org/loans/weatherization/",
      },
    ],
  },

  VT: {
    stateCode: "VT",
    stateName: "Vermont",
    status: "open",
    lastVerified: "2026-03-22",
    summary:
      "Vermont heat pump rebates come from Efficiency Vermont ($2,200 ducted, $375–$475/head ductless) and utility-specific programs. Burlington Electric offers up to $7,950 for income-qualified ducted systems — the highest in the state. GMP income bonus adds $2,200/condenser for ≤80% AMI households. Federal 25C/25D ended Dec 31, 2025. HEAR ($29.2M) is on pause.",
    sources: [
      {
        label: "Efficiency Vermont — Heat Pump Rebates",
        url: "https://www.efficiencyvermont.com/rebates/list/heat-pump-heating-cooling-system",
      },
      {
        label: "Green Mountain Power — Heat Pump Programs",
        url: "https://greenmountainpower.com/rebates-programs/home-and-yard/heat-pump/",
      },
      {
        label: "Burlington Electric Department — Heat Pumps",
        url: "https://www.burlingtonelectric.com/heatpumps/",
      },
      {
        label: "Vermont Electric Cooperative — Energy Transformation",
        url: "https://vermontelectric.coop/energy-transformation-programs",
      },
      {
        label: "Vermont Gas Systems — Residential Rebates",
        url: "https://vgsvt.com/savings/residentialrebate/",
      },
      {
        label: "VT Dept of Public Service — IRA Home Energy Rebates",
        url: "https://publicservice.vermont.gov/efficiency/inflation-reduction-act-bolster-vermont-weatherization-and-electrification-efforts",
      },
      {
        label: "VT DCF — Weatherization Assistance Program",
        url: "https://dcf.vermont.gov/benefits/weatherization",
      },
      {
        label: "Efficiency Vermont — Home Energy Loan",
        url: "https://www.efficiencyvermont.com/services/financing/homes/home-energy-loan",
      },
      {
        label: "IRS — OBBBA FAQ (25C/25D Expiration)",
        url: "https://www.irs.gov/newsroom/faqs-for-modification-of-sections-25c-25d-25e-30c-30d-45l-45w-and-179d-under-public-law-119-21-139-stat-72-july-4-2025-commonly-known-as-the-one-big-beautiful-bill-obbb",
      },
    ],
  },

  NH: {
    stateCode: "NH",
    stateName: "New Hampshire",
    status: "open",
    lastVerified: "2026-03-22",
    summary:
      "NHSaves rebates of $250–$1,250/ton are the primary incentive, plus a new $650/unit NE Heat Pump Accelerator. HEAR rebates (up to $8,000) are approved but not yet launched — expected mid-Summer 2026. Federal 25C/25D expired Dec 31, 2025. Projects started before HEAR launch are not eligible. R-410A banned from NHSaves qualified list for 2026.",
    sources: [
      {
        label: "NHSaves — Heat Pumps & Central A/C",
        url: "https://nhsaves.com/residential/electric-heating-cooling-equipment/",
      },
      {
        label: "NHSaves — Heat Pump Water Heater",
        url: "https://nhsaves.com/residential/heat-pump-water-heater-2/",
      },
      {
        label: "NH DOE — HEAR Program",
        url: "https://www.energy.nh.gov/funding-opportunities/funding-opportunities-homeowners/home-electrification-and-appliance-rebates",
      },
      {
        label: "NH DOE — HOMES Program",
        url: "https://www.energy.nh.gov/funding-opportunities/funding-opportunities-homeowners/home-efficiency-rebates-program",
      },
      {
        label: "NH DOE — Rebates Hub",
        url: "https://www.energy.nh.gov/consumers/energy-efficiency/energy-efficiency-rebates-and-incentives",
      },
      {
        label: "NE Heat Pump Accelerator",
        url: "https://www.nehpa.org/",
      },
      {
        label: "NH DOE — Weatherization Assistance",
        url: "https://www.energy.nh.gov/consumers/help-energy-and-utility-bills/weatherization-assistance-program",
      },
      {
        label: "IRS 25C (expired)",
        url: "https://www.irs.gov/credits-deductions/energy-efficient-home-improvement-credit",
      },
    ],
  },

  WI: {
    stateCode: "WI",
    stateName: "Wisconsin",
    status: "open",
    lastVerified: "2026-03-22",
    summary:
      "Focus on Energy offers $400–$900 instant discounts for air-source heat pumps statewide. IRA-funded HEAR rebates cover up to $8,000 for income-qualifying households (below 150% AMI). HOMES rebates up to $10,000 are available at all income levels for whole-home projects. Federal tax credits expired December 31, 2025. Wisconsin was the first state to launch the HOMES program.",
    sources: [
      {
        label: "Focus on Energy — Heating & Cooling",
        url: "https://focusonenergy.com/residential/heating-and-cooling",
      },
      {
        label: "Focus on Energy — IRA HEAR Program",
        url: "https://focusonenergy.com/ira-hear",
      },
      {
        label: "Focus on Energy — Home Energy Rebates (HOMES)",
        url: "https://focusonenergy.com/home-energy-rebates",
      },
      {
        label: "Wisconsin PSC — Federal Funding",
        url: "https://psc.wi.gov/Pages/ServiceType/OEI/FederalFunding.aspx",
      },
      {
        label: "Wisconsin PSC — Heat Pumps",
        url: "https://psc.wi.gov/Pages/ServiceType/OEI/HeatPumps.aspx",
      },
      {
        label: "IRS — 25C/25D Termination FAQ",
        url: "https://www.irs.gov/newsroom/faqs-for-modification-of-sections-25c-25d-25e-30c-30d-45l-45w-and-179d-under-public-law-119-21",
      },
    ],
  },

  GA: {
    stateCode: "GA",
    stateName: "Georgia",
    status: "open",
    lastVerified: "2026-03-23",
    summary:
      "HEAR rebates cover up to $8,000 for heat pumps (\u2264150% AMI). HER whole-home rebates up to $4,000 (all incomes) or $16,000 (\u226480% AMI). Georgia Power HEIP offers up to $1,000. EMC rebates $100\u2013$600. Federal 25C/25D credits expired Dec 2025.",
    sources: [
      {
        label: "Georgia\u2019s Home Energy Rebates (GEFA)",
        url: "https://energyrebates.georgia.gov/",
      },
      {
        label: "GEFA \u2014 HEAR Program Details",
        url: "https://energyrebates.georgia.gov/home-electrification-and-appliance-rebates",
      },
      {
        label: "GEFA \u2014 Home Energy Rebates FAQ",
        url: "https://energyrebates.georgia.gov/faqs",
      },
      {
        label: "Georgia Power \u2014 Home Energy Improvement Program",
        url: "https://www.georgiapower.com/residential/solutions/home-solutions/heip.html",
      },
      {
        label: "Jackson EMC \u2014 Heat Pump Rebate",
        url: "https://www.jacksonemc.com/member-services/home-services/rebates-incentives-loans/heat-pump-rebate",
      },
      {
        label: "GreyStone Power \u2014 Rebate Requirements",
        url: "https://www.greystonepower.com/rebate-requirements",
      },
      {
        label: "Sawnee EMC \u2014 Rebates and Incentives",
        url: "https://sawnee.coop/rebates-and-incentives",
      },
      {
        label: "GEFA \u2014 Weatherization Assistance Program",
        url: "https://gefa.georgia.gov/weatherization-assistance-program",
      },
      {
        label: "IRS 25C (expired)",
        url: "https://www.irs.gov/credits-deductions/energy-efficient-home-improvement-credit",
      },
    ],
  },

  HI: {
    stateCode: "HI",
    stateName: "Hawaii",
    status: "open",
    lastVerified: "2026-03-23",
    summary:
      "Hawaii Energy offers $450\u2013$700 instant rebates for heat pump water heaters and $450\u2013$550 for mini-splits through June 2026. eHale HEAR program (up to $14,000 for income-qualified households) expected to launch in 2026. Federal 25C/25D credits expired Dec 2025. KIUC offers separate $500 HPWH rebate on Kauai.",
    sources: [
      {
        label: "Hawaii State Energy Office \u2014 eHale Energy Saver Rebate Program",
        url: "https://energy.hawaii.gov/ehale-rebates/",
      },
      {
        label: "Hawaii Energy \u2014 HVAC Rebates",
        url: "https://hawaiienergy.com/for-homes/rebates/hvac/",
      },
      {
        label: "Hawaii Energy \u2014 Water Heating Rebates",
        url: "https://hawaiienergy.com/for-homes/rebates/water-heating/",
      },
      {
        label: "KIUC \u2014 Heat Pump Water Heater Rebate Program",
        url: "https://kiuc.coop/form/heat-pump-water-heater-rebate-pr",
      },
      {
        label: "Hawaii Green Infrastructure Authority \u2014 GEM$ On-Bill Program",
        url: "https://gems.hawaii.gov/gems-on-bill/",
      },
      {
        label: "Governor Green \u2014 HEAR Program Announcement",
        url: "https://governor.hawaii.gov/main/lowering-costs-for-working-class-families-the-home-electrification-and-appliance-rebates-hear-program/",
      },
      {
        label: "Hawaii DLIR \u2014 Weatherization Assistance Program",
        url: "https://labor.hawaii.gov/ocs/service-programs-index/weatherization-assistance-program/",
      },
    ],
  },

  IA: {
    stateCode: "IA",
    stateName: "Iowa",
    status: "limited",
    lastVerified: "2026-03-23",
    summary:
      "MidAmerican Energy and Alliant Energy offer $300\u2013$713 instant discounts for air-source heat pumps, with cold-climate models at the top tier. Iowa\u2019s $121M HEAR/HOMES IRA allocation is funded but programs have not launched. Federal 25C/25D credits expired Dec 31, 2025.",
    sources: [
      {
        label: "Iowa Energy & Infrastructure Funding Hub \u2014 HEAR/HOMES Status",
        url: "https://iafederalfunding.org/individuals/",
      },
      {
        label: "MidAmerican Energy \u2014 Home Discounts and Rebates",
        url: "https://www.midamericanenergy.com/home-discounts-and-rebates",
      },
      {
        label: "MidAmerican Energy \u2014 Iowa Residential Qualifications",
        url: "https://www.midamericanenergy.com/ia_qualifications-and-conditions",
      },
      {
        label: "Alliant Energy \u2014 Iowa Instant Discounts",
        url: "https://www.alliantenergy.com/ways-to-save/instant-discounts/iowa",
      },
      {
        label: "Alliant Energy \u2014 Rebate Terms and Conditions",
        url: "https://www.alliantenergy.com/ways-to-save/rebates/terms",
      },
      {
        label: "Iowa Economic Development Authority \u2014 Residential Energy Programs",
        url: "https://opportunityiowa.gov/community/energy/grants-funding/residential-energy-efficiency-programs",
      },
      {
        label: "Iowa HHS \u2014 Weatherization Assistance Program",
        url: "https://hhs.iowa.gov/assistance-programs/housing-rent-assistance/weatherization-assistance",
      },
      {
        label: "City of Ames \u2014 Smart Energy Residential Rebates",
        url: "https://www.cityofames.org/My-Government/Departments/Electric/Smart-Energy/Residential-Programs",
      },
      {
        label: "Eastern Iowa REC \u2014 Rebates",
        url: "https://www.easterniowa.com/rebates",
      },
      {
        label: "IRS \u2014 25C/25D Termination FAQ",
        url: "https://www.irs.gov/newsroom/faqs-for-modification-of-sections-25c-25d-25e-30c-30d-45l-45w-and-179d-under-public-law-119-21-139-stat-72-july-4-2025-commonly-known-as-the-one-big-beautiful-bill-obbb",
      },
    ],
  },

  AZ: {
    stateCode: "AZ",
    stateName: "Arizona",
    status: "open",
    lastVerified: "2026-03-23",
    summary:
      "Efficiency Arizona HEAR offers up to $8,000 per heat pump for households below 150% AMI. SRP Cool Cash provides up to $1,125 for variable-capacity systems. APS eliminated all residential rebates in 2026. Federal tax credits expired December 31, 2025. HOMES program expected later in 2026.",
    sources: [
      {
        label: "Efficiency Arizona \u2014 HEAR Program",
        url: "https://efficiencyarizona.com/the-hear-program/",
      },
      {
        label:
          "Arizona Governor\u2019s Office of Resiliency \u2014 Efficiency Arizona",
        url: "https://resilient.az.gov/resiliency-programs/energy-programs/energy-affordability/efficiency-arizona",
      },
      {
        label: "SRP \u2014 Air Conditioner Rebates (Cool Cash)",
        url: "https://www.srpnet.com/energy-savings-rebates/home/rebates/air-conditioner",
      },
      {
        label: "SRP \u2014 Heat Pump Water Heater Rebates",
        url: "https://www.srpnet.com/energy-savings-rebates/home/rebates/heat-pump-water-heater",
      },
      {
        label: "APS \u2014 Residential Energy Options (rebates discontinued)",
        url: "https://www.aps.com/en/Residential/Save-Money-and-Energy/Your-Energy-Your-Options",
      },
      {
        label: "TEP / UniSource \u2014 Efficient Home Program",
        url: "https://www.uesaz.com/efficient-home-program/",
      },
      {
        label:
          "City of Flagstaff \u2014 Home Weatherization and Energy Rebate Program",
        url: "https://www.flagstaff.az.gov/2912/Home-Weatherization-and-Energy-Rebate-Pr",
      },
      {
        label:
          "Arizona Department of Housing \u2014 Weatherization Assistance Program",
        url: "https://housing.az.gov/arizona-weatherization-assistance-program",
      },
      {
        label: "IRS \u2014 25C/25D Termination FAQ",
        url: "https://www.irs.gov/newsroom/one-big-beautiful-bill-provisions",
      },
    ],
  },

  NV: {
    stateCode: "NV",
    stateName: "Nevada",
    status: "limited",
    lastVerified: "2026-03-23",
    summary:
      "NV Energy PowerShift offers $510\u2013$3,400 for heat pumps (active, first-come first-served). IRA-funded HEAR (up to $8,000) and HOMES programs approved but not yet launched. Federal 25C/25D tax credits expired Dec 2025. No state tax credits (no state income tax).",
    sources: [
      {
        label: "NV Energy \u2014 PowerShift Rebate Program",
        url: "https://www.nvenergy.com/save-with-powershift",
      },
      {
        label: "Nevada Governor\u2019s Office of Energy \u2014 Home Efficiency Rebates",
        url: "https://www.energy.nv.gov/funding-opportunities/home-efficiency-rebates-program/",
      },
      {
        label: "Nevada Clean Energy Fund \u2014 Federal Rebates (HEAR)",
        url: "https://nevadacef.org/federal-rebates/",
      },
      {
        label: "Nevada Clean Energy Fund \u2014 RE-UP Loans",
        url: "https://nevadacef.org/re-up-loans/",
      },
      {
        label: "DSIRE \u2014 NV Energy Residential Energy Efficiency Rebate Program",
        url: "https://programs.dsireusa.org/system/program/detail/3138",
      },
      {
        label: "Nevada Housing Division \u2014 Weatherization Assistance Program",
        url: "https://housing.nv.gov/programs/Weatherization/",
      },
      {
        label: "Boulder City \u2014 Utility Rebate Program",
        url: "https://www.bcnv.org/284/Utility-Rebate-Program",
      },
      {
        label: "IRS \u2014 25C/25D Termination FAQ",
        url: "https://www.irs.gov/newsroom/one-big-beautiful-bill-provisions",
      },
    ],
  },

  NM: {
    stateCode: "NM",
    stateName: "New Mexico",
    status: "limited",
    lastVerified: "2026-03-23",
    summary:
      "HEAR offers up to $8,000 per heat pump but is currently restricted to households below 80% AMI. PNM rebates cover $550\u2013$700. Sustainable Building Tax Credit adds ~$500\u2013$1,000. Geothermal credit covers 30% up to $9,000 at all income levels. Federal 25C/25D credits expired.",
    sources: [
      {
        label: "NM HEAR Program (ECMD)",
        url: "https://clean.energy.nm.gov/programs/hear/",
      },
      {
        label: "EMNRD Sustainable Building Tax Credit",
        url: "https://www.emnrd.nm.gov/ecmd/tax-incentives/sustainable-building-tax-credit-sbtc/",
      },
      {
        label: "EMNRD Geothermal Heat Pump Tax Credit",
        url: "https://www.emnrd.nm.gov/ecmd/tax-incentives/ggchp-tax-credit/",
      },
      {
        label: "PNM Heating & Cooling Midstream Program",
        url: "https://www.pnm.com/midstream",
      },
      {
        label: "PNM CLEAResult HPWH Rebates",
        url: "https://pnm.clearesult.com/heat-pump-water-heaters-55-gallons-or-less",
      },
      {
        label: "El Paso Electric NM Residential Programs",
        url: "https://www.epelectric.com/energy-efficiency/new-mexico-residential-energy-efficiency-programs/residential-comprehensive",
      },
      {
        label: "Tri-State Electrify and Save (Co-ops)",
        url: "https://350newmexico.org/rural-electric-coop-rebates/",
      },
      {
        label: "EMNRD HOMES/HER RFP",
        url: "https://www.emnrd.nm.gov/ecmd/about-us/requests-for-proposals-applications/home-efficiency-rebates-her-rfp/",
      },
    ],
  },

  NC: {
    stateCode: "NC",
    stateName: "North Carolina",
    status: "open",
    lastVerified: "2026-03-23",
    summary:
      "Energy Saver NC is live statewide with up to $8,000 through HEAR or $16,000 through HOMES for income-qualifying households. Duke Energy adds $500\u2013$1,000 in utility rebates. Federal 25C/25D tax credits expired Dec 31, 2025. Households above 150% AMI are limited to utility rebates only.",
    sources: [
      {
        label: "Energy Saver NC \u2014 Program Portal",
        url: "https://www.energysavernc.org/",
      },
      {
        label: "NC DEQ \u2014 Energy Saver North Carolina",
        url: "https://www.deq.nc.gov/energy-climate/state-energy-office/energy-saver-north-carolina",
      },
      {
        label: "Energy Saver NC \u2014 HEAR Program Details",
        url: "https://www.energysavernc.org/about-the-program/home-electrification-and-appliance-rebates-hear/",
      },
      {
        label: "NC DEQ \u2014 All 100 Counties Press Release (Feb 2026)",
        url: "https://www.deq.nc.gov/news/press-releases/2026/02/10/governor-stein-deq-announce-cost-saving-energy-program-now-available-all-100-counties",
      },
      {
        label: "Duke Energy \u2014 HVAC Replacement Rebates",
        url: "https://www.duke-energy.com/home/products/home-energy-improvement/hvac-replacement",
      },
      {
        label: "Duke Energy \u2014 Heat Pump Water Heater Rebates",
        url: "https://www.duke-energy.com/home/products/home-energy-improvement/heat-pump-water-heater",
      },
      {
        label: "Duke Energy \u2014 Increased Incentives Announcement (Jan 2025)",
        url: "https://news.duke-energy.com/releases/new-year-bigger-incentives-as-temperatures-fall-in-the-carolinas-duke-energy-increases-financial-incentives-for-customer-energy-efficiency-and-demand-response-programs",
      },
      {
        label: "Dominion Energy NC \u2014 Save Energy",
        url: "https://www.dominionenergy.com/north-carolina-electric/save-energy/my-home",
      },
      {
        label: "Piedmont Electric \u2014 Heat Pump Rebate",
        url: "https://pemc.coop/rebates-and-programs/heat-pump-rebate/",
      },
      {
        label: "Blue Ridge Energy \u2014 Smart Rebates",
        url: "https://www.blueridgeenergy.com/residential/smart-rebates",
      },
      {
        label: "NC DEQ \u2014 Weatherization Assistance Program",
        url: "https://www.deq.nc.gov/energy-climate/state-energy-office/weatherization-assistance-program",
      },
      {
        label: "Carolina SURE Loan Program",
        url: "https://energyfundsforall.org/upgrades-for-residential-efficiency/",
      },
      {
        label: "IRS \u2014 25C/25D Termination FAQ",
        url: "https://www.irs.gov/newsroom/one-big-beautiful-bill-provisions",
      },
    ],
  },

  FL: {
    stateCode: "FL",
    stateName: "Florida",
    status: "limited",
    lastVerified: "2026-03-23",
    summary:
      "No federal credits or state tax incentives. Utility rebates of $40\u2013$1,150 from FPL, Duke Energy, TECO, JEA, and OUC are the primary incentives. Florida\u2019s $346M HEAR/HOMES allocation remains unlaunched.",
    sources: [
      {
        label: "FDACS \u2014 Florida Energy Saver Program",
        url: "https://floridaenergysaverprogram.fdacs.gov/en-US/",
      },
      {
        label: "FPL \u2014 Residential HVAC Program Standards",
        url: "https://www.fpl.com/content/dam/fplgp/us/en/save/pdf/residential-air-conditioning-program-standards.pdf",
      },
      {
        label: "Duke Energy Florida \u2014 HVAC Replacement Rebates",
        url: "https://www.duke-energy.com/Home/Products/Home-Energy-Improvement/HVAC-Replacement?jur=FL01",
      },
      {
        label: "Duke Energy Florida \u2014 HPWH Rebates",
        url: "https://www.duke-energy.com/home/products/home-energy-improvement/heat-pump-water-heater",
      },
      {
        label: "Tampa Electric \u2014 Heating & Cooling Program",
        url: "https://www.tampaelectric.com/residential/saveenergy/heatingcooling/",
      },
      {
        label: "JEA \u2014 Heating and Cooling Rebates",
        url: "https://www.jea.com/residential_customers/residential_rebates/heating_and_cooling_rebates/",
      },
      {
        label: "OUC \u2014 Residential Rebates",
        url: "https://www.ouc.com/residential/save-energy-water-money/rebates",
      },
      {
        label: "IRS \u2014 25C/25D Termination FAQ",
        url: "https://www.irs.gov/newsroom/one-big-beautiful-bill-provisions",
      },
    ],
  },

  OH: {
    stateCode: "OH",
    stateName: "Ohio",
    status: "limited",
    lastVerified: "2026-03-23",
    summary:
      "Ohio has almost no heat pump rebates in 2026. Federal credits expired, utility programs were dismantled by HB 6, and the state\u2019s $249M in IRA rebates (HEAR/HOMES) have not launched. ECO-Link offers 3% loan rate reductions up to $50,000. AEP Ohio\u2019s HELP covers low-income households.",
    sources: [
      {
        label: "Ohio Department of Development",
        url: "https://development.ohio.gov",
      },
      {
        label: "Ohio Treasurer \u2014 ECO-Link Program",
        url: "https://www.tos.ohio.gov/",
      },
      {
        label: "AEP Ohio HELP Program",
        url: "https://www.aepohio.com/homeupgrades",
      },
      {
        label: "Ohio Energy Help (HWAP)",
        url: "https://energyhelp.ohio.gov",
      },
      {
        label: "AES Ohio \u2014 HB 6 Program End Notice",
        url: "https://www.aes-ohio.com/mandated-end-energy-efficiency-programs",
      },
      {
        label: "FirstEnergy Ohio Efficiency Programs",
        url: "https://www.firstenergycorp.com/save_energy/save_energy_ohio/for_your_home.html",
      },
      {
        label: "Electrify Cincy",
        url: "https://electrifycincy.org/replace/",
      },
      {
        label: "Ohio Consumers\u2019 Counsel \u2014 HWAP Factsheet",
        url: "https://www.occ.ohio.gov/factsheet/home-weatherization-assistance-program",
      },
      {
        label: "IRS \u2014 25C/25D Termination FAQ",
        url: "https://www.irs.gov/newsroom/one-big-beautiful-bill-provisions",
      },
    ],
  },

  IN: {
    stateCode: "IN",
    stateName: "Indiana",
    status: "open",
    lastVerified: "2026-03-23",
    summary:
      "Indiana Energy Saver Program (HEAR) offers up to $8,000 for heat pumps for households below 150% AMI. HOMES rebates cover up to $4,000 for other homeowners. Utility rebates add $275\u2013$3,000. Federal tax credits expired Dec 31, 2025.",
    sources: [
      {
        label: "Indiana Office of Energy Development \u2014 Home Energy Rebates",
        url: "https://www.in.gov/oed/grants-and-funding-opportunities/homeowner-incentives/",
      },
      {
        label: "Indiana Energy Saver Program",
        url: "https://indianaenergysaver.com/",
      },
      {
        label: "Indiana Energy Saver \u2014 Home Appliance Rebate (HEAR)",
        url: "https://indianaenergysaver.com/programs/home-appliance-rebate/",
      },
      {
        label: "Indiana Energy Saver \u2014 Home Efficiency Rebate (HOMES)",
        url: "https://indianaenergysaver.com/programs/home-efficiency-rebate/",
      },
      {
        label: "AES Indiana \u2014 Home Improvement Rebates",
        url: "https://www.aesindiana.com/home-improvement-rebates",
      },
      {
        label: "Duke Energy Indiana \u2014 Smart $aver Rebates",
        url: "https://www.duke-energy.com/home/products/home-energy-improvement/hvac-replacement",
      },
      {
        label: "NIPSCO \u2014 Residential Rebates",
        url: "https://www.nipsco.com/energy-efficiency/for-your-home/rebates",
      },
      {
        label: "CenterPoint Energy Indiana \u2014 Residential Rebates",
        url: "https://centerpointenergyindiana-residential-rebate.clearesult.com/browse-products",
      },
      {
        label: "IHCDA \u2014 Weatherization Assistance Program",
        url: "https://www.in.gov/ihcda/homeowners-and-renters/weatherizationenergy-conservation/",
      },
      {
        label: "Bloomington Green Home Improvement Program",
        url: "https://bloomington.in.gov/sustainability/bghip",
      },
    ],
  },

  TN: {
    stateCode: "TN",
    stateName: "Tennessee",
    status: "limited",
    lastVerified: "2026-03-23",
    summary:
      "TVA EnergyRight rebates ($500\u2013$1,500) are the only active incentive in Tennessee in 2026. IRA-funded HEAR and HOMES rebates are approved but not yet launched (expected Q3 2026). Federal tax credits expired December 31, 2025.",
    sources: [
      {
        label: "TVA EnergyRight \u2014 Heat Pump Rebates",
        url: "https://energyright.com/residential/rebates/heat-pump/",
      },
      {
        label: "TDEC \u2014 Home Energy Rebate Programs",
        url: "https://www.tn.gov/environment/program-areas/energy/state-energy-office--seo-/programs-projects/programs-and-projects/inflation-reduction-act/home-energy-rebate-programs.html",
      },
      {
        label: "EPB \u2014 Home Energy Improvement Rebates",
        url: "https://epb.com/energy/save-energy-and-money/rebates-incentives/home-energy-improvement-rebates/",
      },
      {
        label: "MTE \u2014 Home Rebates",
        url: "https://mte.com/HomeRebates",
      },
      {
        label: "THDA \u2014 Weatherization Assistance Program",
        url: "https://thda.org/help-for-homeowners/weatherization-assistance-program/",
      },
      {
        label: "IRS \u2014 25C/25D Termination FAQ",
        url: "https://www.irs.gov/newsroom/faqs-for-modification-of-sections-25c-25d-25e-30c-30d-45l-45w-and-179d-under-public-law-119-21-139-stat-72-july-4-2025-commonly-known-as-the-one-big-beautiful-bill-obbb",
      },
    ],
  },

  SC: {
    stateCode: "SC",
    stateName: "South Carolina",
    status: "limited",
    lastVerified: "2026-03-23",
    summary:
      "Utility rebates of $300\u20131,000 from Duke Energy, Dominion Energy, and Santee Cooper. SC geothermal tax credit covers 25% up to $3,500. HEAR/HOMES rebates (up to $14,000) pending launch. Federal tax credits expired.",
    sources: [
      {
        label: "SC Energy Office \u2014 Rebates",
        url: "https://energy.sc.gov/rebates",
      },
      {
        label: "SC Energy Office \u2014 Home Energy Rebate Programs",
        url: "https://energy.sc.gov/programs/funding/home-energy-rebate-programs",
      },
      {
        label: "Duke Energy \u2014 Home Energy Improvement",
        url: "https://www.duke-energy.com/home/products/home-energy-improvement",
      },
      {
        label: "Dominion Energy SC \u2014 Heating & Cooling Rebates",
        url: "https://www.dominionenergy.com/south-carolina/save-energy/heating-and-cooling-rebates",
      },
      {
        label: "Santee Cooper \u2014 EmpowerHome",
        url: "https://www.santeecooper.com/programs-incentives/empowerhome/",
      },
      {
        label: "SC DOR Form TC-38 (Geothermal Credit)",
        url: "https://dor.sc.gov/forms-site/Forms/TC38.pdf",
      },
      {
        label: "Electric Cooperatives of SC \u2014 Help My House",
        url: "https://www.ecsc.org/help-my-house",
      },
    ],
  },

  MO: {
    stateCode: "MO",
    stateName: "Missouri",
    status: "limited",
    lastVerified: "2026-03-23",
    summary:
      "No statewide rebate or state tax credit. Utility rebates range $200\u2013$5,000: Ameren offers $2,000 for ducted ASHPs, Evergy $650\u2013$1,200, Columbia W&L up to $2,600. HEAR/HOMES ($151M) pending. Federal credits expired.",
    sources: [
      {
        label: "Missouri DNR \u2014 IRA Home Energy Rebates Programs",
        url: "https://dnr.mo.gov/energy/what-were-doing/inflation-reduction-act-home-energy-rebates-programs",
      },
      {
        label: "Ameren Missouri \u2014 PAYS HVAC Incentives",
        url: "https://www.ameren.com/missouri/residential/energy-efficiency/hvac",
      },
      {
        label: "Evergy \u2014 Heat Pump Rebates",
        url: "https://www.evergy.com/ways-to-save/discounts-link/heating-and-cooling/heat-pump",
      },
      {
        label: "Columbia Water & Light \u2014 Heat Pump Rebates",
        url: "https://www.como.gov/utilities/columbia-power-partners/residential-programs-and-tools/air-conditioner-and-heat-pump-rebates/",
      },
      {
        label: "City Utilities of Springfield \u2014 HVAC Rebate",
        url: "https://www.cityutilities.net/269/HVAC-Rebate",
      },
      {
        label: "Missouri Rural Electric Cooperative \u2014 Rebates",
        url: "https://www.morec.org/rebates-products/",
      },
      {
        label: "Missouri DNR \u2014 Weatherization Assistance",
        url: "https://dnr.mo.gov/energy/weatherization",
      },
      {
        label: "IRS \u2014 Energy Efficient Home Improvement Credit (25C, expired)",
        url: "https://www.irs.gov/credits-deductions/energy-efficient-home-improvement-credit",
      },
      {
        label: "Missouri Energy Office \u2014 Financing and Rebates",
        url: "https://energy.mo.gov/grants-financing",
      },
    ],
  },

  DC: {
    stateCode: "DC",
    stateName: "Washington DC",
    status: "open",
    lastVerified: "2026-03-23",
    summary:
      "DCSEU offers up to $5,000 for heat pumps and $1,600 for HPWHs when switching from gas to electric, plus $3,200 in electrification service rebates. Total realistic rebates reach $9,800. Federal 25C/25D credits expired. AHEP provides no-cost electrification for households below 80% AMI but is currently waitlisted.",
    sources: [
      {
        label: "DCSEU \u2014 Residential Electrification Rebates",
        url: "https://www.dcseu.com/residential-rebates/electrify",
      },
      {
        label: "DCSEU \u2014 Residential Electric HVAC Rebates",
        url: "https://www.dcseu.com/residential-rebates/heating-cooling",
      },
      {
        label: "DCSEU \u2014 Affordable Home Electrification Program",
        url: "https://www.dcseu.com/affordable-home-electrification",
      },
      {
        label: "DOEE \u2014 IRA Rebates & Tax Incentives",
        url: "https://doee.dc.gov/service/ira-rebates-tax-incentives",
      },
      {
        label: "DCSEU \u2014 Apply for Residential Rebates",
        url: "https://www.dcseu.com/residential-rebates/apply",
      },
      {
        label: "DC Green Bank \u2014 Clean Energy Advantage Loan",
        url: "https://cealoan.org/washington-dc/",
      },
      {
        label: "DOEE \u2014 Weatherization Assistance Program",
        url: "https://doee.dc.gov/service/wap",
      },
    ],
  },
};

/**
 * Format a YYYY-MM-DD date string for display.
 * Uses UTC to prevent server/client timezone drift.
 */
export function formatDate(dateString: string): string {
  const date = new Date(`${dateString}T00:00:00Z`);
  return date.toLocaleDateString("en-US", {
    timeZone: "UTC",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

/**
 * Calculate days since verification date.
 * Uses UTC to prevent timezone drift between server/client.
 * Returns 0 if date is in the future (clock skew protection).
 */
export function getDaysSinceVerification(lastVerified: string): number {
  const verified = new Date(`${lastVerified}T00:00:00Z`);
  const now = new Date();
  const todayUTC = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
  );
  const diffMs = todayUTC.getTime() - verified.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  return Math.max(0, diffDays);
}

/**
 * Check if verification is stale (> 30 days old).
 * Exactly 30 days = not stale.
 */
export function isStale(lastVerified: string): boolean {
  return getDaysSinceVerification(lastVerified) > 30;
}

export function getStatusDisplay(status: IncentiveStatus): {
  label: string;
  emoji: string;
  colorClass: string;
  bgClass: string;
} {
  switch (status) {
    case "open":
      return {
        label: "Open",
        emoji: "🟢",
        colorClass: "text-green-700",
        bgClass: "bg-green-100",
      };
    case "limited":
      return {
        label: "Limited / Region-Dependent",
        emoji: "🟡",
        colorClass: "text-yellow-800",
        bgClass: "bg-yellow-100",
      };
    case "paused":
      return {
        label: "Paused / Closed",
        emoji: "🔴",
        colorClass: "text-red-700",
        bgClass: "bg-red-100",
      };
    default: {
      const _exhaustive: never = status;
      return _exhaustive;
    }
  }
}
