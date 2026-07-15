"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/types";
import { Media } from "@/components/placeholder/media";

export function CaseNext({ project }: { project: Project }) {
  return (
    <section className="border-t border-line">
      <Link href={`/projetos/${project.slug}`} className="group block">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-20 sm:px-8 lg:grid-cols-[1fr_auto] lg:px-12">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-muted">
              Próximo projeto
            </p>
            <h2 className="mt-4 flex items-center gap-4 font-display text-4xl tracking-tight transition-transform duration-500 group-hover:translate-x-2 sm:text-6xl">
              {project.title}
              <ArrowRight className="size-8 transition-transform duration-500 group-hover:translate-x-2" />
            </h2>
            <p className="mt-3 text-muted">
              {project.category} · {project.year}
            </p>
          </div>
          <motion.div
            className="w-full overflow-hidden rounded-xl lg:w-80"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Media
              seed={project.cover.seed}
              src={project.cover.src}
              alt={project.cover.alt}
              fit={project.cover.fit}
              category={project.category}
              ratio="4/3"
              rounded={false}
              sizes="320px"
            />
          </motion.div>
        </div>
      </Link>
    </section>
  );
}
