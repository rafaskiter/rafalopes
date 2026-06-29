import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, getNextProject, projectSlugs } from "@/content/projects";
import { settings } from "@/content/settings";
import { CaseHero } from "@/components/case/case-hero";
import { CaseBlock } from "@/components/case/case-block";
import { CaseNext } from "@/components/case/case-next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const title = `${project.title} · ${project.category}`;
  return {
    title,
    description: project.summary,
    alternates: { canonical: `/projetos/${project.slug}` },
    openGraph: {
      title: `${title} | ${settings.fullName}`,
      description: project.summary,
      type: "article",
      url: `${settings.url}/projetos/${project.slug}`,
    },
  };
}

export default async function CasePage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const next = getNextProject(project.slug);

  return (
    <article className="pb-12">
      <CaseHero project={project} />
      <div className="mt-8">
        {project.blocks.map((block) => (
          <CaseBlock key={block.id} block={block} category={project.category} />
        ))}
      </div>
      <CaseNext project={next} />
    </article>
  );
}
