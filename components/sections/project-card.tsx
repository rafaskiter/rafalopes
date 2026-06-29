"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";
import { SeededPlaceholder } from "@/components/placeholder/seeded-placeholder";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.7, delay: (index % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <Link href={`/projetos/${project.slug}`} className="block">
        <div className="relative overflow-hidden rounded-xl">
          <motion.div
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <SeededPlaceholder
              seed={project.cover.seed}
              category={project.category}
              ratio="4/3"
              rounded={false}
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="absolute right-4 top-4 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-bg/90 opacity-0 backdrop-blur transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpRight className="size-5" />
          </div>
        </div>

        <div className="mt-5 flex items-baseline justify-between gap-4">
          <h3 className="font-display text-2xl tracking-tight sm:text-3xl">
            {project.title}
          </h3>
          <span className="shrink-0 text-sm text-muted">{project.year}</span>
        </div>
        <div className="mt-2 flex items-center gap-3 text-sm text-muted">
          <span className="rounded-full border border-line px-3 py-1 text-xs uppercase tracking-wide">
            {project.category}
          </span>
          <span className="text-pretty">{project.summary}</span>
        </div>
      </Link>
    </motion.article>
  );
}
