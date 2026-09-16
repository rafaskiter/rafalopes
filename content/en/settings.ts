import type { NavItem } from "@/types";
import { settings as base } from "@/content/settings";

/**
 * Only the translatable parts. Everything locale-independent (email, phone,
 * social links, canonical URL) stays in content/settings.ts.
 */
export const settings = {
  ...base,
  roles: ["Product Designer", "UX/UI Designer", "HMI", "Design Engineer"],
  shortBio:
    "A product designer who looks after digital experiences with purpose, from strategy to interface.",
  location: "Brazil · Remote",
} as const;

export const nav: NavItem[] = [
  { label: "Work", href: "/en#projetos" },
  { label: "About", href: "/en#sobre" },
  { label: "Contact", href: "/en#contato" },
];

export const seo = {
  title: `${base.fullName} · Product Designer`,
  description:
    "Portfolio of Rafa Lopes, a product designer working across UX/UI, HMI and design engineering. Branding, visual identity, websites and digital products with purpose.",
  keywords: [
    "Product Designer",
    "UX Designer",
    "UI Designer",
    "HMI",
    "Design Engineer",
    "Branding",
    "Visual Identity",
    "Portfolio",
    "Rafa Lopes",
  ],
  ogImage: "/og.png",
} as const;
