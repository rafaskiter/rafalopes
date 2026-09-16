"use client";

import Link from "next/link";
import { motion, useTransform, type MotionValue } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";

interface SoonCardProps {
  index: number;
  stackSize: number;
  progress: MotionValue<number>;
}

/** Card que fecha o deck: avisa que o portfólio ainda receberá novos projetos. */
export function SoonCard({ index, stackSize, progress }: SoonCardProps) {
  const targetScale = 1 - (stackSize - index) * 0.04;
  const scale = useTransform(progress, [index / stackSize, 1], [1, targetScale]);

  return (
    <div className="sticky top-0 flex h-[100svh] items-center justify-center px-4 sm:px-6">
      <motion.div
        style={{ scale, top: `${index * 16}px` }}
        className="relative w-full max-w-6xl origin-top overflow-hidden rounded-3xl border border-line bg-bg-elevated shadow-[0_40px_120px_-50px_rgba(0,0,0,0.6)]"
      >
        <div className="flex flex-col items-center gap-6 px-6 py-20 text-center sm:px-10 sm:py-28">
          <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-accent">
            <span className="size-1.5 rounded-full bg-current" />
            Em construção
          </span>
          <h3 className="max-w-3xl text-balance font-display text-[clamp(2rem,6vw,4rem)] leading-[1.05] tracking-tight">
            Em breve, mais projetos por aqui
          </h3>
          <p className="max-w-xl text-pretty text-lg text-muted sm:text-xl">
            Este site ainda está em construção. Estou preparando outros trabalhos
            para publicar — entre eles projetos de branding, identidade visual e
            produto digital.
          </p>
          <Link
            href="/#contato"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            Falar comigo
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
