import type { Project } from "@/types";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { Media } from "@/components/placeholder/media";

export function CaseHero({ project }: { project: Project }) {
  return (
    <header className="pt-[calc(var(--header-h,4.5rem)+clamp(3rem,8vh,6rem))]">
      <Container>
        <Reveal>
          <p className="text-sm uppercase tracking-[0.3em] text-muted">
            {project.category} · {project.year}
          </p>
        </Reveal>
        <h1 className="mt-6 font-display text-[clamp(3rem,10vw,8rem)] leading-[0.9] tracking-tight">
          {project.title}
        </h1>
        <p className="mt-8 max-w-2xl text-balance text-xl text-muted sm:text-2xl">
          <TextReveal text={project.intro} />
        </p>

        {/* Metadados */}
        <div className="mt-12 grid gap-8 border-t border-line pt-8 sm:grid-cols-3">
          <Meta label="Cliente" values={[project.client]} />
          <Meta label="Atuação" values={project.role} />
          <Meta label="Serviços" values={project.services} />
        </div>
      </Container>

      <Container className="mt-14">
        <Reveal>
          <div className="overflow-hidden rounded-xl">
            <Media
              seed={project.cover.seed}
              src={project.cover.src}
              alt={project.cover.alt}
              fit={project.cover.fit}
              category={project.category}
              ratio="16/9"
              rounded={false}
              sizes="(max-width: 1280px) 100vw, 1200px"
            />
          </div>
        </Reveal>
      </Container>
    </header>
  );
}

function Meta({ label, values }: { label: string; values: string[] }) {
  return (
    <div>
      <p className="mb-2 text-xs uppercase tracking-widest text-muted">{label}</p>
      <ul className="space-y-1">
        {values.map((v) => (
          <li key={v} className="text-sm">
            {v}
          </li>
        ))}
      </ul>
    </div>
  );
}
