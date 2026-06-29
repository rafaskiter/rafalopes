"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { galleryItems } from "@/content/projects";
import { SeededPlaceholder } from "@/components/placeholder/seeded-placeholder";

/** Posições espalhadas (em %), profundidade do parallax e tamanho. */
const layout = [
  { x: 8, y: 18, w: 150, depth: 1.4, ratio: "3/4" as const },
  { x: 78, y: 12, w: 170, depth: 1.0, ratio: "4/3" as const },
  { x: 64, y: 62, w: 190, depth: 1.7, ratio: "1/1" as const },
  { x: 18, y: 64, w: 160, depth: 1.2, ratio: "4/3" as const },
  { x: 86, y: 46, w: 130, depth: 2.0, ratio: "3/4" as const },
  { x: 40, y: 8, w: 120, depth: 0.8, ratio: "1/1" as const },
  { x: 2, y: 42, w: 120, depth: 2.2, ratio: "1/1" as const },
  { x: 48, y: 74, w: 140, depth: 1.5, ratio: "4/3" as const },
];

export function FloatingGallery() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const sx = useSpring(mx, { stiffness: 60, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 60, damping: 18, mass: 0.6 });

  function handleMove(e: React.MouseEvent) {
    if (reduce) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left - rect.width / 2) / rect.width);
    my.set((e.clientY - rect.top - rect.height / 2) / rect.height);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className="pointer-events-none absolute inset-0 hidden md:block"
      aria-hidden="true"
    >
      {layout.map((pos, i) => {
        const item = galleryItems[i % galleryItems.length];
        return (
          <FloatingItem
            key={item.seed}
            sx={sx}
            sy={sy}
            pos={pos}
            seed={item.seed}
            category={item.category}
            index={i}
          />
        );
      })}
    </div>
  );
}

function FloatingItem({
  sx,
  sy,
  pos,
  seed,
  category,
  index,
}: {
  sx: ReturnType<typeof useSpring>;
  sy: ReturnType<typeof useSpring>;
  pos: (typeof layout)[number];
  seed: string;
  category: (typeof galleryItems)[number]["category"];
  index: number;
}) {
  const tx = useTransform(sx, (v) => v * pos.depth * 60);
  const ty = useTransform(sy, (v) => v * pos.depth * 60);

  return (
    <motion.div
      className="absolute"
      style={{
        left: `${pos.x}%`,
        top: `${pos.y}%`,
        width: pos.w,
        x: tx,
        y: ty,
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.4 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="rotate-[var(--r)] shadow-[0_24px_60px_-24px_rgba(0,0,0,0.35)]" style={{ ["--r" as string]: `${(index % 2 ? 1 : -1) * (2 + (index % 3))}deg` }}>
        <SeededPlaceholder seed={seed} category={category} ratio={pos.ratio} />
      </div>
    </motion.div>
  );
}
