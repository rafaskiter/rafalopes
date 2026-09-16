"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import type { Locale, Project } from "@/types";
import { StackCard } from "./project-card";
import { SoonCard } from "./soon-card";

/** Container do deck empilhável: mede o scroll e distribui a progressão aos cards. */
export function ProjectsStack({
  projects,
  locale,
}: {
  projects: Project[];
  locale: Locale;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const stackSize = projects.length + 1;

  return (
    <div ref={ref} className="relative">
      {projects.map((project, i) => (
        <StackCard
          key={project.slug}
          project={project}
          index={i}
          total={projects.length}
          stackSize={stackSize}
          progress={scrollYProgress}
          locale={locale}
        />
      ))}
      <SoonCard
        locale={locale}
        index={projects.length}
        stackSize={stackSize}
        progress={scrollYProgress}
      />
    </div>
  );
}
