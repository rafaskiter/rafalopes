import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectsStack } from "./projects-stack";
import type { Locale } from "@/types";
import { getContent } from "@/content/dictionary";

export function Projects({ locale }: { locale: Locale }) {
  const { projects, ui } = getContent(locale);

  return (
    <section id="projetos" className="relative bg-bg-elevated">
      {/* Textura de marca repetida no fundo da seção */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-repeat opacity-60"
        style={{ backgroundImage: "url('/brand/texture.png')", backgroundSize: "340px" }}
      />
      <Container className="relative pt-[var(--section-y)]">
        <SectionHeading
          eyebrow={ui.projects.eyebrow}
          title={ui.projects.heading}
          className="max-w-4xl"
        />
      </Container>

      <ProjectsStack projects={projects} locale={locale} />
    </section>
  );
}
