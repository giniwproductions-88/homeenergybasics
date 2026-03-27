import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import TrackerContent from "./TrackerContent";

export const metadata: Metadata = {
  title:
    "Heat Pump Rebate Tracker 2026: Every State\u2019s Status | Home Energy Basics",
  description:
    "Track heat pump rebate status across all 50 states and DC. See which programs are open, limited, or paused \u2014 with dollar amounts, HEAR/HOMES status, and sources. Updated regularly.",
  alternates: {
    canonical: "https://homeenergybasics.com/heat-pumps/tracker",
  },
  openGraph: {
    title: "US Heat Pump Rebate Tracker 2026 \u2014 All 50 States + DC",
    description:
      "The complete status of heat pump incentives across every U.S. state after federal tax credits expired. Updated regularly from official sources.",
    url: "https://homeenergybasics.com/heat-pumps/tracker",
    type: "article",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which states still have heat pump rebates in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most states have some form of heat pump incentive in 2026, though availability varies widely. States like Colorado, Maine, New York, Wisconsin, and North Carolina have robust open programs. Others like Texas, Ohio, and Florida have limited or utility-only rebates. Federal tax credits (Sections 25C and 25D) expired December 31, 2025, so state and utility programs are now the primary incentives.",
      },
    },
    {
      "@type": "Question",
      name: "What is the HEAR program?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HEAR (Home Electrification and Appliance Rebates) is a federal program funded by the Inflation Reduction Act that provides up to $8,000 per heat pump for income-qualifying households (below 150% of Area Median Income). Each state administers its own HEAR program independently, so launch dates and availability vary. Some states have active HEAR programs while others have not launched yet.",
      },
    },
    {
      "@type": "Question",
      name: "What happened to the federal heat pump tax credit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The federal heat pump tax credits under Sections 25C and 25D expired on December 31, 2025. Section 25C provided up to $2,000 for heat pump installations. Section 25D covered geothermal heat pump systems at 30% of cost. Neither credit is available for installations in 2026 or later.",
      },
    },
    {
      "@type": "Question",
      name: "How much can I get in heat pump rebates in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends entirely on your state and income level. In states with active HEAR programs, income-qualifying households can receive $8,000 or more. Utility rebates vary widely by provider, from as low as $40 to over $4,000. The best states for stacking multiple programs can reach $10,000\u2013$24,000 in total incentives. Check your specific state page for exact amounts.",
      },
    },
    {
      "@type": "Question",
      name: "What does \u2018open\u2019 vs \u2018limited\u2019 vs \u2018paused\u2019 mean?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Open means the state has active, well-funded heat pump incentive programs accepting applications. Limited means incentives exist but are restricted \u2014 either utility-only, region-dependent, partially exhausted, or the HEAR/HOMES programs haven\u2019t launched yet. Paused means major programs have been suspended or closed, though some utility rebates may still be available.",
      },
    },
  ],
};

export default function TrackerPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <TrackerContent />
    </>
  );
}
