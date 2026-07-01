"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { Category, Ratio } from "@/types";
import { Media } from "@/components/placeholder/media";

interface CaseMediaProps {
  seed: string;
  src?: string;
  alt?: string;
  category?: Category;
  ratio?: Ratio;
  label?: string;
  fit?: "cover" | "contain";
  sizes?: string;
}

/**
 * Mídia de case: aumenta um pouco no hover e, quando há imagem real, permite
 * ampliar em tela cheia ao clicar/tocar (lightbox). Sem src, é só o placeholder.
 */
export function CaseMedia({ seed, src, alt, category, ratio = "4/3", label, fit, sizes }: CaseMediaProps) {
  const [open, setOpen] = useState(false);
  const expandable = Boolean(src);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const inner = (
    <div className="overflow-hidden rounded-lg">
      <div className="transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-[1.04]">
        <Media seed={seed} src={src} alt={alt} category={category} ratio={ratio} label={label} fit={fit} sizes={sizes} rounded={false} />
      </div>
    </div>
  );

  if (!expandable) return inner;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={alt ? `Ampliar: ${alt}` : "Ampliar imagem"}
        className="group block w-full cursor-zoom-in"
      >
        {inner}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              aria-label="Fechar"
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              <X className="size-5" />
            </button>
            <motion.div
              initial={{ scale: 0.94 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.94 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src as string}
                alt={alt ?? ""}
                className="max-h-[90vh] max-w-[95vw] rounded-lg object-contain shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
