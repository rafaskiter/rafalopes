import type {
  Certification,
  EducationEntry,
  SkillGroup,
  TimelineEntry,
} from "@/types";

/** Intro section (dark band, right after the hero). */
export const aboutIntro = {
  eyebrow: "About",
  heading:
    "I design digital experiences where strategy, aesthetics and technology meet.",
  body: [
    "I'm Rafa Lopes, a product designer with over a decade on the road — from graphic design and front-end to digital product experience.",
    "Today I'm a Senior UX/UI Designer at Instituto de Pesquisas Eldorado, working on human-machine interfaces, apps and design systems for large-scale brands.",
  ],
} as const;

/** Detailed "about" section (after the cases). */
export const aboutMe = {
  eyebrow: "Who's behind it",
  heading: "Relentless curiosity, obsession with detail.",
  body: [
    "I started in 2010 in graphic design and front-end, spent seven years freelancing (TwoMate Design) and, since 2020, have worked in product design at Instituto de Pesquisas Eldorado, where I grew from Junior to Senior.",
    "My range runs from automotive HMI (Volkswagen) to gamification (CPFL) and digital rentals (Porto Seguro Olho Mágico). I like big problems and simple solutions.",
    "I recently finished an MBA in Neuroscience, Consumer Behaviour and Marketing at PUCRS, which gave me a new lens on behaviour and decision-making in my work.",
  ],
  photo: { seed: "rafa-lopes-portrait", label: "Rafa Lopes" },
} as const;

/** Nomes de marca não se traduzem — a lista é a mesma nos dois idiomas. */
export { collabs } from "@/content/about";

/** Professional experience (most recent first). */
export const timeline: TimelineEntry[] = [
  {
    period: "2025 — present",
    role: "Senior UX/UI Designer",
    org: "Instituto de Pesquisas Eldorado",
    description:
      "Product design and human-machine interfaces (HMI) for large-scale clients.",
  },
  {
    period: "2021 — 2025",
    role: "Mid-level UX/UI Designer",
    org: "Instituto de Pesquisas Eldorado",
    description:
      "Volkswagen New Infotainment and the CPFL Gamification App, among other products.",
  },
  {
    period: "2020 — 2021",
    role: "Junior UX/UI Designer",
    org: "Instituto de Pesquisas Eldorado",
    description: "Porto Seguro Olho Mágico and Riemann Labs projects.",
  },
  {
    period: "2013 — 2020",
    role: "Designer (freelance)",
    org: "TwoMate Design",
    description:
      "Visual identity, graphic and web design for a range of clients in São Paulo.",
  },
  {
    period: "2010 — 2013",
    role: "Graphic Designer and Front-end Developer",
    org: "Grupo Fixa",
    description: "Building websites and brands, plus front-end development.",
  },
];

export const skills: SkillGroup[] = [
  {
    title: "Design",
    items: [
      "Product Design",
      "UX Research",
      "UI Design",
      "Human-Machine Interfaces (HMI)",
      "Design Systems",
      "Prototyping",
    ],
  },
  {
    title: "Strategy",
    items: [
      "Design Thinking",
      "UX Strategy",
      "Product Research",
      "Design Ops",
      "Typography",
    ],
  },
  {
    title: "Technology",
    items: [
      "HTML & CSS",
      "JavaScript",
      "Unity / C#",
      "Design Tokens",
      "Accessibility",
    ],
  },
];

/** Nomes de ferramentas não se traduzem. */
export { tools } from "@/content/about";

/** Education (most recent first). */
export const education: EducationEntry[] = [
  {
    period: "2024 — 2025",
    course: "MBA in Neuroscience, Consumer Behaviour and Marketing",
    org: "PUCRS",
  },
  {
    period: "2018 — 2020",
    course: "Associate Degree in Digital Games",
    org: "Impacta Tecnologia",
  },
  {
    period: "2014 — 2015",
    course: "Programming for Digital Games",
    org: "Etec Guaracy Silveira",
  },
  {
    period: "2011 — 2012",
    course: "Graphic Design (short course)",
    org: "Escola Panamericana de Arte",
  },
  {
    period: "2009 — 2010",
    course: "Visual Communication (technical degree)",
    org: "Etec de Vila Formosa",
  },
];

/** Licenses and certificates. */
export const certifications: Certification[] = [
  { name: "UX Strategy", org: "Mergo Escola de Design", year: "2021" },
  { name: "Product Research", org: "Mergo Escola de Design", year: "2021" },
  { name: "Design System & Ops", org: "Meiuca", year: "2021" },
  { name: "Adobe XD: from basics to prototypes", org: "Udemy", year: "2020" },
];
