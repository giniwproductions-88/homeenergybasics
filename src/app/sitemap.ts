import { MetadataRoute } from "next";
import { incentives } from "@/data/incentives";

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
  ];

  const statePages: MetadataRoute.Sitemap = Object.values(incentives).map(
    (state) => ({
      url: `${baseUrl}/heat-pumps/states/${state.stateCode.toLowerCase()}`,
      lastModified: new Date(`${state.lastVerified}T00:00:00Z`),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })
  );

  return [...staticPages, ...statePages];
}
