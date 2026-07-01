"use client";

import Link from "next/link";
import {
  motion,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";
import { Media } from "@/components/placeholder/media";
import { readableOn } from "@/lib/utils";

interface StackCardProps {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

/**
 * Card grande no estilo "sticky stacking" (inspirado na clou.ch): cada card
 * gruda no topo e o seguinte desliza por cima enquanto o anterior encolhe.
 */
export function StackCard({ project, index, total, progress }: StackCardProps) {
  const ink = readableOn(project.color);
  const muted = ink === "#0a0a0a" ? "rgba(10,10,10,0.62)" : "rgba(255,255,255,0.72)";

  // Card encolhe conforme os próximos sobem por cima dele.
  const targetScale = 1 - (total - index) * 0.04;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    <div className="sticky top-0 flex h-[100svh] items-start justify-center px-4 sm:px-6">
      <motion.div
        style={{
          backgroundColor: project.color,
          color: ink,
          scale,
          top: `calc(5.5rem + ${index * 16}px)`,
        }}
        className="relative w-full max-w-6xl origin-top overflow-hidden rounded-3xl shadow-[0_40px_120px_-50px_rgba(0,0,0,0.6)]"
      >
        <Link
          href={`/projetos/${project.slug}`}
          className="group grid h-full gap-5 p-6 sm:gap-8 sm:p-10 lg:grid-cols-2 lg:gap-12 lg:p-14"
          aria-label={`Ver projeto ${project.title}`}
        >
          {/* Coluna de texto */}
          <div className="flex flex-col justify-between gap-8">
            <div className="flex items-center justify-between">
              <span className="text-sm tabular-nums opacity-70">
                {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
              <span
                className="flex h-12 w-12 items-center justify-center rounded-full border transition-transform duration-500 group-hover:rotate-45"
                style={{ borderColor: muted }}
              >
                <ArrowUpRight className="size-5" />
              </span>
            </div>

            <div>
              <ul className="mb-5 flex flex-wrap gap-2">
                {project.services.slice(0, 4).map((s) => (
                  <li
                    key={s}
                    className="rounded-full border px-3 py-1 text-xs"
                    style={{ borderColor: muted }}
                  >
                    {s}
                  </li>
                ))}
              </ul>
              <h3 className="font-display text-[2.25rem] leading-[1] tracking-tight sm:text-6xl lg:text-7xl">
                {project.title}
              </h3>
              <p className="mt-4 max-w-md text-pretty text-base sm:mt-5 sm:text-xl" style={{ color: muted }}>
                {project.summary}
              </p>
              <p className="mt-4 text-sm sm:mt-6" style={{ color: muted }}>
                {project.category} · {project.year}
              </p>
            </div>
          </div>

          {/* Coluna de imagem com zoom no hover */}
          <div className="relative min-h-[180px] overflow-hidden rounded-2xl sm:min-h-[240px]">
            <motion.div
              className="absolute inset-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <Media
                seed={(project.card ?? project.cover).seed}
                src={(project.card ?? project.cover).src}
                alt={(project.card ?? project.cover).alt}
                fit={(project.card ?? project.cover).fit}
                category={project.category}
                rounded={false}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}
