"use client";

import { Fragment, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

/**
 * Revela um título palavra a palavra (efeito de máscara).
 * Usa useInView com um ref num container block-level — gatilho determinístico,
 * sem depender da propagação de whileInView por variants em elementos inline.
 */
export function TextReveal({ text, className, delay = 0 }: TextRevealProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  if (reduce) return <span className={className}>{text}</span>;

  const words = text.split(" ");

  return (
    <span ref={ref} className={cn("inline-block", className)}>
      {words.map((w, i) => (
        <Fragment key={i}>
          <span className="inline-block overflow-hidden pb-[0.12em] align-bottom">
            <motion.span
              className="inline-block"
              initial={{ y: "115%" }}
              animate={inView ? { y: 0 } : { y: "115%" }}
              transition={{
                duration: 0.7,
                delay: delay + i * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {w}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </Fragment>
      ))}
    </span>
  );
}
