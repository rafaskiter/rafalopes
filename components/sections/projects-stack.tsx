"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import type { Project } from "@/types";
import { StackCard } from "./project-card";
import { SoonCard } from "./soon-card";

/** Container do deck empilhável: mede o scroll e distribui a progressão aos cards. */
export function ProjectsStack({ projects }: { projects: Project[] }) {
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
        />
      ))}
      <SoonCard
        index={projects.length}
        stackSize={stackSize}
        progress={scrollYProgress}
      />
    </div>
  );
}
