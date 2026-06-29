import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectsStack } from "./projects-stack";
import { projects } from "@/content/projects";

export function Projects() {
  return (
    <section id="projetos" className="relative">
      <Container className="pt-[var(--section-y)]">
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
