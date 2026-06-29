import type { MetadataRoute } from "next";
import { settings } from "@/content/settings";
import { projectSlugs } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: settings.url, lastModified: now, changeFrequency: "monthly", priority: 1 },
    ...projectSlugs.map((slug) => ({
      url: `${settings.url}/projetos/${slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
  ];
}
