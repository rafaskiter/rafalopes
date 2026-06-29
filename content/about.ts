import type { SkillGroup, TimelineEntry } from "@/types";

/** Seção "Sobre" (intro escura, logo após o hero). */
export const aboutIntro = {
  eyebrow: "Sobre",
  heading:
    "Desenho experiências digitais onde estratégia, estética e tecnologia se encontram.",
  body: [
    "Sou Rafa Lopes, designer de produto com mais de uma década dedicada a transformar problemas complexos em interfaces claras, humanas e memoráveis.",
    "Trabalho na interseção entre marca, produto e código — do conceito de uma identidade visual à entrega de um design system vivo, sempre guiado por propósito e evidência.",
  ],
} as const;

/** Seção "Sobre mim" detalhada (após os cases). */
export const aboutMe = {
  eyebrow: "Quem está por trás",
  heading: "Curiosidade incansável, obsessão por detalhe.",
  body: [
    "Acredito que bom design é, antes de tudo, bom pensamento. Começo cada projeto ouvindo: pessoas, dados e contexto. Só então a forma aparece — e quando aparece, ela tem motivo.",
    "Já liderei squads de produto, conduzi pesquisas com usuários, prototipei jogos e construí design systems adotados por times inteiros. Gosto de problemas grandes e de soluções simples.",
    "Fora da tela, fotografo, viajo e colecciono boas histórias — combustível para as ideias que viram projeto.",
  ],
  photo: { seed: "rafa-lopes-portrait", label: "Rafa Lopes" },
} as const;

export const timeline: TimelineEntry[] = [
  {
    period: "2021 — hoje",
    role: "Lead Product Designer",
    org: "Estúdio independente",
    description:
      "Direção de design de produtos digitais para startups e marcas autorais, do discovery ao handoff.",
  },
  {
    period: "2018 — 2021",
    role: "Senior UX/UI Designer",
    org: "Consultoria de inovação",
    description:
      "Pesquisa, prototipação e design systems para clientes de varejo, finanças e saúde.",
  },
  {
    period: "2015 — 2018",
    role: "Designer Visual",
    org: "Agência de branding",
    description:
      "Criação de identidades visuais, naming e direção de arte para campanhas multicanal.",
  },
  {
    period: "2013 — 2015",
    role: "Designer Júnior",
    org: "Studio criativo",
    description:
      "Primeiros passos em design digital, motion e ilustração para web.",
  },
];

export const skills: SkillGroup[] = [
  {
    title: "Design",
    items: [
      "Product Design",
      "UX Research",
      "UI Design",
      "Design System",
      "Branding",
      "Prototipação",
    ],
  },
  {
    title: "Estratégia",
    items: [
      "Design Thinking",
      "Service Design",
      "Workshops",
      "Arquitetura de Informação",
      "Métricas de produto",
    ],
  },
  {
    title: "Tecnologia",
    items: [
      "HTML & CSS",
      "React / Next.js",
      "Framer Motion",
      "Design Tokens",
      "Acessibilidade (WCAG)",
    ],
  },
];

export const tools: string[] = [
  "Figma",
  "Framer",
  "Adobe CC",
  "Blender",
  "Spline",
  "Notion",
  "Linear",
  "Webflow",
];
