import type { Metadata } from "next";
import { projectSlugs } from "@/content/dictionary";
import { caseMetadata } from "@/lib/metadata";
import { CasePage } from "@/components/case/case-page";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  return caseMetadata("en", slug);
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  return <CasePage locale="en" slug={slug} />;
}
