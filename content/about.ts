import type {
  Certification,
  EducationEntry,
  SkillGroup,
  TimelineEntry,
} from "@/types";

/** Seção "Sobre" (intro escura, logo após o hero). */
export const aboutIntro = {
  eyebrow: "Sobre",
  heading:
    "Desenho experiências digitais onde estratégia, estética e tecnologia se encontram.",
  body: [
    "Sou Rafa Lopes, designer de produto com mais de uma década de estrada, do design gráfico e do front-end até a experiência de produtos digitais.",
    "Hoje sou Designer UX/UI Sênior no Instituto de Pesquisas Eldorado, trabalhando com interfaces homem-máquina, apps e design systems para marcas de grande porte.",
  ],
} as const;

/** Seção "Sobre mim" detalhada (após os cases). */
export const aboutMe = {
  eyebrow: "Quem está por trás",
  heading: "Curiosidade incansável, obsessão por detalhe.",
  body: [
    "Comecei em 2010 no design gráfico e no front-end, passei sete anos como designer autônomo (TwoMate Design) e, desde 2020, atuo com design de produto no Instituto de Pesquisas Eldorado, onde cresci de Júnior a Sênior.",
    "Meu repertório vai de HMI automotivo (Volkswagen) a gamificação (CPFL) e locação digital (Porto Seguro Olho Mágico). Gosto de problemas grandes e de soluções simples.",
    "Recém-concluí um MBA em Neurociência, Consumo e Marketing na PUCRS, que trouxe uma lente nova sobre comportamento e decisão para o meu trabalho.",
  ],
  photo: { seed: "rafa-lopes-portrait", label: "Rafa Lopes" },
} as const;

/** Experiência profissional (mais recente primeiro). */
export const timeline: TimelineEntry[] = [
  {
    period: "2025 até hoje",
    role: "Designer UX/UI Sênior",
    org: "Instituto de Pesquisas Eldorado",
    description:
      "Design de produto e interfaces homem-máquina (HMI) para clientes de grande porte.",
  },
  {
    period: "2021 a 2025",
    role: "Designer UX/UI Pleno",
    org: "Instituto de Pesquisas Eldorado",
    description:
      "Volkswagen New Infotainment e CPFL Gamification App, entre outros produtos.",
  },
  {
    period: "2020 a 2021",
    role: "Designer UX/UI Júnior",
    org: "Instituto de Pesquisas Eldorado",
    description: "Projetos Porto Seguro Olho Mágico e Riemann Labs.",
  },
  {
    period: "2013 a 2020",
    role: "Designer (autônomo)",
    org: "TwoMate Design",
    description:
      "Identidade visual, design gráfico e web para clientes diversos em São Paulo.",
  },
  {
    period: "2010 a 2013",
    role: "Designer Gráfico e Front-end",
    org: "Grupo Fixa",
    description: "Criação de sites e marcas e desenvolvimento front-end.",
  },
];

export const skills: SkillGroup[] = [
  {
    title: "Design",
    items: [
      "Product Design",
      "UX Research",
      "UI Design",
      "Interfaces Homem-Máquina (HMI)",
      "Design System",
      "Prototipação",
    ],
  },
  {
    title: "Estratégia",
    items: [
      "Design Thinking",
      "UX Strategy",
      "Product Research",
      "Design Ops",
      "Tipografia",
    ],
  },
  {
    title: "Tecnologia",
    items: [
      "HTML & CSS",
      "JavaScript",
      "Unity / C#",
      "Design Tokens",
      "Acessibilidade",
    ],
  },
];

export const tools: string[] = [
  "Figma",
  "Adobe XD",
  "Illustrator",
  "Photoshop",
  "Blender",
  "Unity",
  "Notion",
];

/** Formação acadêmica (mais recente primeiro). */
export const education: EducationEntry[] = [
  {
    period: "2024 a 2025",
    course: "MBA em Neurociência, Consumo e Marketing",
    org: "PUCRS",
  },
  {
    period: "2018 a 2020",
    course: "Tecnólogo em Jogos Digitais",
    org: "Impacta Tecnologia",
  },
  {
    period: "2014 a 2015",
    course: "Programação para Jogos Digitais",
    org: "Etec Guaracy Silveira",
  },
  {
    period: "2011 a 2012",
    course: "Design Gráfico (curso livre)",
    org: "Escola Panamericana de Arte",
  },
  {
    period: "2009 a 2010",
    course: "Comunicação Visual (técnico)",
    org: "Etec de Vila Formosa",
  },
];

/** Licenças e certificados. */
export const certifications: Certification[] = [
  { name: "UX Strategy", org: "Mergo Escola de Design", year: "2021" },
  { name: "Product Research", org: "Mergo Escola de Design", year: "2021" },
  { name: "Design System & Ops", org: "Meiuca", year: "2021" },
  { name: "Adobe XD: do básico aos protótipos", org: "Udemy", year: "2020" },
];
