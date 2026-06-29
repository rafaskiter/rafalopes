import Link from "next/link";
import { projects } from "@/lib/projects";

export function Projects() {
  return (
    <section id="projetos" className="mx-auto max-w-5xl px-4 py-16">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Projetos</h2>
      <p className="mt-2 text-[var(--muted-foreground)]">
        Uma seleção de coisas em que trabalhei.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-6 transition-shadow hover:shadow-md"
          >
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="mt-2 text-sm text-[var(--muted-foreground)]">
              {project.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-[var(--secondary)] px-3 py-1 text-xs text-[var(--secondary-foreground)]"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex gap-4 text-sm">
              {project.url && (
                <Link
                  href={project.url}
                  target="_blank"
                  className="font-medium underline-offset-4 hover:underline"
                >
                  Ver site
                </Link>
              )}
              {project.repo && (
                <Link
                  href={project.repo}
                  target="_blank"
                  className="font-medium underline-offset-4 hover:underline"
                >
                  Código
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
