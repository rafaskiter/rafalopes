import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { ProjectCard } from "./project-card";
import { projects } from "@/content/projects";

export function Projects() {
  return (
    <Section id="projetos">
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

      <div className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
