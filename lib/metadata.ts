import type { Metadata } from "next";
import type { Locale } from "@/types";
import { getContent, homePath, projectPath } from "@/content/dictionary";
import { settings } from "@/content/settings";

const ogLocale: Record<Locale, string> = { pt: "pt_BR", en: "en_US" };

/**
 * Mapa hreflang apontando cada idioma para a sua URL equivalente. Sem isso o
 * Google trata as duas versões como conteúdo duplicado e escolhe uma delas —
 * na prática, some com a versão em inglês.
 */
function languagesFor(path: (locale: Locale) => string) {
  return {
    "pt-BR": path("pt"),
    en: path("en"),
    "x-default": path("pt"),
  };
}

/** Metadados da home em um idioma. */
export function homeMetadata(locale: Locale): Metadata {
  const { seo, settings: s } = getContent(locale);

  return {
    metadataBase: new URL(settings.url),
    title: { default: seo.title, template: `%s · ${settings.fullName}` },
    description: seo.description,
    keywords: [...seo.keywords],
    authors: [{ name: settings.fullName }],
    creator: settings.fullName,
    openGraph: {
      type: "website",
      locale: ogLocale[locale],
      url: homePath(locale),
      siteName: settings.fullName,
      title: seo.title,
      description: seo.description,
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
    alternates: {
      canonical: homePath(locale),
      languages: languagesFor(homePath),
    },
    other: { "og:site_description": s.shortBio },
  };
}

/** Metadados de uma página de case em um idioma. */
export function caseMetadata(locale: Locale, slug: string): Metadata {
  const { getProject } = getContent(locale);
  const project = getProject(slug);
  if (!project) return {};

  const title = `${project.title} · ${project.category}`;

  return {
    title,
    description: project.summary,
    alternates: {
      canonical: projectPath(locale, slug),
      languages: languagesFor((l) => projectPath(l, slug)),
    },
    openGraph: {
      title: `${title} | ${settings.fullName}`,
      description: project.summary,
      type: "article",
      locale: ogLocale[locale],
      url: projectPath(locale, slug),
    },
  };
}
