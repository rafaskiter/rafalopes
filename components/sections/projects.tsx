import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { ProjectsStack } from "./projects-stack";
import { projects } from "@/content/projects";

export function Projects() {
  return (
    <section id="projetos" className="relative">
      <Container className="pt-[var(--section-y)]">
        <div className="max-w-4xl">
          <Reveal>
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-muted">
              Projetos
            </p>
          </Reveal>
          <h2 className="font-display text-balance text-3xl leading-[1.1] sm:text-4xl lg:text-5xl">
            <TextReveal text="Projetos dos quais me orgulho particularmente — concebidos e comunicados com um propósito bem definido." />
          </h2>
        </div>
      </Container>

      <ProjectsStack projects={projects} />
    </section>
  );
}
