import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectsStack } from "./projects-stack";
import { projects } from "@/content/projects";

export function Projects() {
  return (
    <section id="projetos" className="relative">
      {/* Textura de marca repetida no fundo da seção */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-repeat opacity-60"
        style={{ backgroundImage: "url('/brand/texture.png')", backgroundSize: "340px" }}
      />
      <Container className="relative pt-[var(--section-y)]">
        <SectionHeading
          eyebrow="Projetos"
          title="Projetos que ajudei a construir com um propósito bem definido."
          className="max-w-4xl"
        />
      </Container>

      <ProjectsStack projects={projects} />
    </section>
  );
}
