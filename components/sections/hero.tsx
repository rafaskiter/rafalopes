"use client";

import { motion } from "framer-motion";
import { settings } from "@/content/settings";
import { FloatingGallery } from "@/components/hero/floating-gallery";

export function Hero() {
  return (
    <section
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 text-on-dark sm:px-6"
      style={{
        background:
          "radial-gradient(135% 95% at 50% 112%, rgba(77,166,255,0.55) 0%, rgba(77,166,255,0.16) 28%, rgba(16,3,37,0) 58%), #100325",
      }}
    >
      <FloatingGallery />

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-2 text-xs uppercase tracking-[0.3em] text-on-dark/55 sm:text-sm"
        >
          {settings.fullName}
        </motion.p>

        <h1 className="font-display text-[clamp(4.5rem,25vw,20rem)] leading-[0.9] tracking-tight">
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

        {/* Glass card: garante a legibilidade do subtítulo mesmo com card flutuante atrás. */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.4)] backdrop-blur-md sm:px-7 sm:py-3"
        >
          <p className="text-pretty text-sm font-medium text-on-dark sm:text-base">
            {settings.roles.join("  ·  ")}
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[0.7rem] uppercase tracking-widest text-on-dark/55 sm:text-xs"
      >
        <span>Role para explorar</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="block h-8 w-px bg-white/30"
        />
      </motion.div>
    </section>
  );
}
