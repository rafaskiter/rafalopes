"use client";

import Link from "next/link";
import { motion, useTransform, type MotionValue } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import type { Locale } from "@/types";
import { getContent, homePath } from "@/content/dictionary";

interface SoonCardProps {
  locale: Locale;
  index: number;
  stackSize: number;
  progress: MotionValue<number>;
}

/** Card que fecha o deck: avisa que o portfólio ainda receberá novos projetos. */
export function SoonCard({ locale, index, stackSize, progress }: SoonCardProps) {
  const { ui } = getContent(locale);
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
            {ui.soon.eyebrow}
          </span>
          <h3 className="max-w-3xl text-balance font-display text-[clamp(2rem,6vw,4rem)] leading-[1.05] tracking-tight">
            {ui.soon.heading}
          </h3>
          <p className="max-w-xl text-pretty text-lg text-muted sm:text-xl">
            {ui.soon.body}
          </p>
          <Link
            href={`${homePath(locale)}#contato`}
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            {ui.soon.cta}
          </Link>
        </div>
      </motion.div>

      {/* Fora do card, na folga entre ele e o fim da tela: este é o último
          card do deck e ocupa a viewport inteira, então sem uma dica aqui o
          site parece terminar. Escondido em telas baixas, onde o card chega
          perto do rodapé e os dois se encostariam. */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute bottom-7 left-1/2 hidden -translate-x-1/2 text-muted/40 [@media(min-height:720px)]:block"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
      >
        <ChevronDown className="size-7" strokeWidth={1} />
      </motion.span>
    </div>
  );
}
