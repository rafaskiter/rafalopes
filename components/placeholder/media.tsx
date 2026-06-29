"use client";

import { useState } from "react";
import Image from "next/image";
import type { Category, Ratio } from "@/types";
import { cn } from "@/lib/utils";
import { SeededPlaceholder } from "./seeded-placeholder";

const ratioPad: Record<Ratio, string> = {
  "1/1": "100%",
  "4/3": "75%",
  "16/9": "56.25%",
  "3/4": "133.33%",
  "21/9": "42.857%",
};

interface MediaProps {
  seed: string;
  src?: string;
  alt?: string;
  category?: Category;
  ratio?: Ratio;
  label?: string;
  className?: string;
  rounded?: boolean;
  fill?: boolean;
  fit?: "cover" | "contain";
  sizes?: string;
}

/**
 * Renderiza uma imagem real (next/image) quando `src` existe; caso contrário
 * — ou se a imagem falhar ao carregar — cai para o placeholder por seed.
 * Assim o layout funciona antes mesmo dos arquivos reais existirem.
 */
export function Media({
  seed,
  src,
  alt,
  category,
  ratio = "4/3",
  label,
  className,
  rounded = true,
  fill = false,
  fit = "cover",
  sizes = "(max-width: 768px) 100vw, 50vw",
}: MediaProps) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <SeededPlaceholder
        seed={seed}
        category={category}
        ratio={ratio}
        label={label}
        rounded={rounded}
        fill={fill}
        className={className}
      />
    );
  }

  const objectFit = fit === "contain" ? "object-contain" : "object-cover";

  if (fill) {
    return (
      <div className={cn("absolute inset-0 overflow-hidden bg-ink/5", rounded && "rounded-lg", className)}>
        <Image
          src={src}
          alt={alt ?? label ?? ""}
          fill
          sizes={sizes}
          className={objectFit}
          onError={() => setFailed(true)}
        />
      </div>
    );
  }

  return (
    <div
      className={cn("relative w-full overflow-hidden bg-ink/5", rounded && "rounded-lg", className)}
      style={{ paddingBottom: ratioPad[ratio] }}
    >
      <Image
        src={src}
        alt={alt ?? label ?? ""}
        fill
        sizes={sizes}
        className={objectFit}
        onError={() => setFailed(true)}
      />
      {label && (
        <span className="absolute bottom-3 left-3 z-10 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm">
          {label}
        </span>
      )}
    </div>
  );
}
