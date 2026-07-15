import type { NavItem, SocialLink } from "@/types";

/**
 * Configurações globais do site. Centraliza identidade, navegação, links
 * sociais e metadados de SEO para troca fácil no futuro.
 */
export const settings = {
  name: "Rafa Lopes",
  fullName: "Rafael Lopes",
  roles: ["Designer de Produto", "UX/UI Designer", "HMI", "Design Engineer"],
  shortBio:
    "Designer de produto que cuida das experiências digitais com propósito, da estratégia à interface.",
  email: "skiter.rafael@gmail.com",
  /** Apenas dígitos, formato internacional. Configurar quando definido. */
  whatsapp: "5500000000000",
  location: "Brasil · Remoto",
  /** URL pública — usada em metadados, canonical e sitemap. */
  url: process.env.NEXT_PUBLIC_APP_URL ?? "https://rafalopes.vercel.app",
  /** Substituir pelos links reais quando disponíveis. */
  cvUrl: "/cv-rafa-lopes.pdf",
} as const;

export const nav: NavItem[] = [
  { label: "Projetos", href: "/#projetos" },
  { label: "Sobre mim", href: "/#sobre" },
  { label: "Contato", href: "/#contato" },
];

export const socials: SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rafaskiter" },
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "Behance", href: "https://www.behance.net/" },
  { label: "Dribbble", href: "https://dribbble.com/" },
];

export const seo = {
  title: `${settings.fullName} · ${settings.roles[0]}`,
  description:
    "Portfólio de Rafa Lopes, designer de produto que trabalha entre UX/UI, HMI e Design Engineering. Branding, identidade visual, websites e produtos digitais com propósito.",
  keywords: [
    "Designer de Produto",
    "UX Designer",
    "UI Designer",
    "HMI",
    "Design Engineer",
    "Branding",
    "Identidade Visual",
    "Portfólio",
    "Rafa Lopes",
  ],
  ogImage: "/og.png",
} as const;
