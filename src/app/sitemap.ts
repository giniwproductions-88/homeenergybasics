import { MetadataRoute } from "next";
import { incentives } from "@/data/incentives";
import { shippedUtilities } from "@/data/utilities";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://homeenergybasics.com";
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/heat-pumps`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/battery`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/battery/what-changed`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/federal-heat-pump-tax-credit-expired`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/heat-pumps/rebates-by-state`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/heat-pumps/stacking-rebates`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/heat-pumps/cost`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/heat-pumps/vs-furnace`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/heat-pumps/when-not-to`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/affiliate-disclosure`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
  const statePages: MetadataRoute.Sitemap = Object.values(incentives).map(
    (state) => ({
      url: `${baseUrl}/heat-pumps/states/${state.stateCode.toLowerCase()}`,
      lastModified: new Date(`${state.lastVerified}T00:00:00Z`),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })
  );
  const utilityPages: MetadataRoute.Sitemap = shippedUtilities().map(
    (utility) => ({
      url: `${baseUrl}/heat-pumps/utilities/${utility.slug}`,
      lastModified: new Date(`${utility.lastVerified}T00:00:00Z`),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })
  );
  return [...staticPages, ...statePages, ...utilityPages];
}
