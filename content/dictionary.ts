import type { Locale } from "@/types";

import * as ptAbout from "@/content/about";
import * as ptContact from "@/content/contact";
import * as ptProjects from "@/content/projects";
import * as ptSettings from "@/content/settings";
import { ui as ptUi } from "@/content/ui";

import * as enAbout from "@/content/en/about";
import * as enContact from "@/content/en/contact";
import * as enProjects from "@/content/en/projects";
import * as enSettings from "@/content/en/settings";
import { ui as enUi } from "@/content/en/ui";

export const locales: Locale[] = ["pt", "en"];
export const defaultLocale: Locale = "pt";

export function isLocale(value: string): value is Locale {
  return (locales as string[]).includes(value);
}

/** Prefixo de rota do idioma. O português mora na raiz, sem prefixo. */
export function localePath(locale: Locale): string {
  return locale === "pt" ? "" : `/${locale}`;
}

/** Caminho da página de um case no idioma dado. */
export function projectPath(locale: Locale, slug: string): string {
  return locale === "pt" ? `/projetos/${slug}` : `/en/projects/${slug}`;
}

/** Caminho da home no idioma dado. */
export function homePath(locale: Locale): string {
  return locale === "pt" ? "/" : "/en";
}

/**
 * Converte a rota atual para a equivalente no outro idioma, para o seletor
 * levar a pessoa à mesma página em vez de jogá-la sempre na home.
 */
export function switchLocalePath(pathname: string, to: Locale): string {
  const caseMatch = pathname.match(/^\/(?:en\/projects|projetos)\/([^/]+)$/);
  if (caseMatch) return projectPath(to, caseMatch[1]);
  return homePath(to);
}

const dictionaries = {
  pt: {
    ui: ptUi,
    settings: ptSettings.settings,
    nav: ptSettings.nav,
    socials: ptSettings.socials,
    seo: ptSettings.seo,
    aboutIntro: ptAbout.aboutIntro,
    aboutMe: ptAbout.aboutMe,
    collabs: ptAbout.collabs,
    timeline: ptAbout.timeline,
    skills: ptAbout.skills,
    tools: ptAbout.tools,
    education: ptAbout.education,
    certifications: ptAbout.certifications,
    contact: ptContact.contact,
    projects: ptProjects.projects,
    galleryItems: ptProjects.galleryItems,
    getProject: ptProjects.getProject,
    getNextProject: ptProjects.getNextProject,
  },
  en: {
    ui: enUi,
    settings: enSettings.settings,
    nav: enSettings.nav,
    socials: ptSettings.socials,
    seo: enSettings.seo,
    aboutIntro: enAbout.aboutIntro,
    aboutMe: enAbout.aboutMe,
    collabs: enAbout.collabs,
    timeline: enAbout.timeline,
    skills: enAbout.skills,
    tools: enAbout.tools,
    education: enAbout.education,
    certifications: enAbout.certifications,
    contact: enContact.contact,
    projects: enProjects.projects,
    galleryItems: enProjects.galleryItems,
    getProject: enProjects.getProject,
    getNextProject: enProjects.getNextProject,
  },
} as const;

/**
 * O tipo sai do dicionário em português, então o inglês não compila se
 * faltar uma chave ou se uma forma divergir.
 */
export type Dictionary = (typeof dictionaries)["pt"];

export function getContent(locale: Locale): Dictionary {
  return dictionaries[locale] as Dictionary;
}

/** Slugs são iguais nos dois idiomas. */
export const projectSlugs = ptProjects.projectSlugs;

/** Rótulo do seletor de idioma — no idioma para o qual ele leva. */
export const localeLabel: Record<Locale, string> = {
  pt: "Português",
  en: "English",
};
