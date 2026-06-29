"use client";

import { motion } from "framer-motion";
import { settings } from "@/content/settings";
import { FloatingGallery } from "@/components/hero/floating-gallery";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 pt-[var(--header-h,4.5rem)]">
      <FloatingGallery />

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-2 text-sm uppercase tracking-[0.3em] text-muted"
        >
          {settings.fullName}
        </motion.p>

        <h1 className="font-display text-[clamp(5rem,26vw,22rem)] leading-[0.82] tracking-tight">
          {"Olá :)".split("").map((char, i) => (
            <motion.span
              key={i}
              className="inline-block"
              initial={{ opacity: 0, y: "0.3em" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.1 + i * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {char === " " ? " " : char}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-md text-pretty text-base text-ink/70 sm:text-lg"
        >
          {settings.roles.join(" · ")}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-widest text-muted"
      >
        <span>Role para explorar</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="block h-8 w-px bg-ink/30"
        />
      </motion.div>
    </section>
  );
}
