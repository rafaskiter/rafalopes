"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import { galleryItems } from "@/content/projects";
import { SeededPlaceholder } from "@/components/placeholder/seeded-placeholder";

/** Posições espalhadas (em %), profundidade do parallax e tamanho. */
const layout = [
  { x: 8, y: 16, w: 150, depth: 1.4, ratio: "3/4" as const },
  { x: 77, y: 12, w: 172, depth: 1.0, ratio: "4/3" as const },
  { x: 63, y: 60, w: 192, depth: 1.7, ratio: "1/1" as const },
  { x: 17, y: 63, w: 160, depth: 1.2, ratio: "4/3" as const },
  { x: 85, y: 45, w: 132, depth: 2.1, ratio: "3/4" as const },
  { x: 39, y: 6, w: 120, depth: 0.8, ratio: "1/1" as const },
  { x: 1, y: 41, w: 122, depth: 2.3, ratio: "1/1" as const },
  { x: 47, y: 73, w: 142, depth: 1.5, ratio: "4/3" as const },
];

/** Amplitude (px) do deslocamento por unidade de profundidade. */
const AMP = 90;

export function FloatingGallery() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const sx = useSpring(mx, { stiffness: 50, damping: 16, mass: 0.7 });
  const sy = useSpring(my, { stiffness: 50, damping: 16, mass: 0.7 });

  // Escuta o mouse na janela inteira (o container é pointer-events-none).
  useEffect(() => {
    if (reduce) return;
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my, reduce]);

  return (
    <div
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
            reduce={!!reduce}
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
  reduce,
}: {
  sx: MotionValue<number>;
  sy: MotionValue<number>;
  pos: (typeof layout)[number];
  seed: string;
  category: (typeof galleryItems)[number]["category"];
  index: number;
  reduce: boolean;
}) {
  // Parallax: cada peça orbita junto do mouse conforme sua profundidade.
  const tx = useTransform(sx, (v) => v * pos.depth * AMP);
  const ty = useTransform(sy, (v) => v * pos.depth * AMP);
  // Leve inclinação para reforçar a sensação de órbita.
  const rotate = useTransform(sx, (v) => v * pos.depth * 5);

  const baseRot = (index % 2 ? 1 : -1) * (2 + (index % 3));
  const floatDur = 6 + (index % 4);

  return (
    <motion.div
      className="absolute"
      style={{ left: `${pos.x}%`, top: `${pos.y}%`, width: pos.w, x: tx, y: ty, rotate }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.4 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Camada interna: flutuar/orbitar contínuo e independente do mouse. */}
      <motion.div
        className="shadow-[0_24px_60px_-24px_rgba(0,0,0,0.35)]"
        style={{ rotate: baseRot }}
        animate={
          reduce
            ? undefined
            : {
                y: [0, -10, 0, 8, 0],
                x: [0, 6, 0, -6, 0],
              }
        }
        transition={{
          duration: floatDur,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.3,
        }}
      >
        <SeededPlaceholder seed={seed} category={category} ratio={pos.ratio} />
      </motion.div>
    </motion.div>
  );
}
