import type { MetadataRoute } from "next";
import { settings } from "@/content/settings";
import { locales, projectSlugs, homePath, projectPath } from "@/content/dictionary";

/**
 * Lista as duas versões de cada página e declara as alternativas em
 * `languages`. É o mesmo sinal do hreflang, dito no sitemap: sem ele o
 * buscador pode indexar só um dos idiomas.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const abs = (path: string) => `${settings.url}${path === "/" ? "" : path}`;

  const alternates = (path: (locale: typeof locales[number]) => string) => ({
    languages: {
      "pt-BR": abs(path("pt")),
      en: abs(path("en")),
    },
  });

  return [
    ...locales.map((locale) => ({
      url: abs(homePath(locale)),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 1,
      alternates: alternates(homePath),
    })),
    ...locales.flatMap((locale) =>
      projectSlugs.map((slug) => ({
        url: abs(projectPath(locale, slug)),
        lastModified: now,
        changeFrequency: "yearly" as const,
        priority: 0.8,
        alternates: alternates((l) => projectPath(l, slug)),
      })),
    ),
  ];
}
