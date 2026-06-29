"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import type { Project } from "@/types";
import { StackCard } from "./project-card";

/** Container do deck empilhável: mede o scroll e distribui a progressão aos cards. */
export function ProjectsStack({ projects }: { projects: Project[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={ref} className="relative">
      {projects.map((project, i) => (
        <StackCard
          key={project.slug}
          project={project}
          index={i}
          total={projects.length}
          progress={scrollYProgress}
        />
      ))}
    </div>
  );
}
