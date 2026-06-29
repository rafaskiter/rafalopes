import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "projeto-exemplo-1",
    title: "Projeto Exemplo 1",
    description:
      "Descreva aqui o que o projeto faz, o problema que resolve e seu papel nele.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    url: "https://example.com",
    repo: "https://github.com/usuario/repo",
  },
  {
    slug: "projeto-exemplo-2",
    title: "Projeto Exemplo 2",
    description:
      "Outro projeto. Troque por trabalhos reais do seu portfólio quando quiser.",
    tags: ["React", "API"],
    repo: "https://github.com/usuario/repo",
  },
];
