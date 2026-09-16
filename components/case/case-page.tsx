import { notFound } from "next/navigation";
import type { Locale } from "@/types";
import { getContent } from "@/content/dictionary";
import { CaseHero } from "@/components/case/case-hero";
import { CaseBlock } from "@/components/case/case-block";
import { CaseNext } from "@/components/case/case-next";

/** Página de case, compartilhada pelas rotas dos dois idiomas. */
export function CasePage({ locale, slug }: { locale: Locale; slug: string }) {
  const { getProject, getNextProject } = getContent(locale);
  const project = getProject(slug);
  if (!project) notFound();

  const next = getNextProject(project.slug);

  return (
    <article className="pb-12">
      <CaseHero project={project} locale={locale} />
      <div className="mt-8">
        {project.blocks.map((block) => (
          <CaseBlock
            key={block.id}
            block={block}
            category={project.category}
            locale={locale}
          />
        ))}
      </div>
      <CaseNext project={next} locale={locale} />
    </article>
  );
}
