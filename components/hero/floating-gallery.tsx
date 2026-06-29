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
import { Media } from "@/components/placeholder/media";

/**
 * Posições espalhadas (em %), profundidade do parallax e tamanho.
 * `mobile: true` marca as peças que aparecem também em telas pequenas
 * (cantos), evitando poluir o centro onde fica o texto.
 */
const layout = [
  { x: 5, y: 14, w: 204, depth: 1.4, ratio: "1/1" as const, mobile: true },
  { x: 76, y: 10, w: 220, depth: 1.0, ratio: "4/3" as const, mobile: true },
  { x: 63, y: 60, w: 240, depth: 1.7, ratio: "1/1" as const, mobile: true },
  { x: 13, y: 63, w: 208, depth: 1.2, ratio: "4/3" as const, mobile: true },
  { x: 85, y: 44, w: 176, depth: 2.1, ratio: "3/4" as const, mobile: false },
  { x: 38, y: 4, w: 158, depth: 0.8, ratio: "1/1" as const, mobile: false },
  { x: 0, y: 40, w: 160, depth: 2.3, ratio: "1/1" as const, mobile: false },
  { x: 47, y: 74, w: 188, depth: 1.5, ratio: "4/3" as const, mobile: false },
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
      className="pointer-events-none absolute inset-0"
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
            src={item.src}
            title={item.title}
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
  src,
  title,
  category,
  index,
  reduce,
}: {
  sx: MotionValue<number>;
  sy: MotionValue<number>;
  pos: (typeof layout)[number];
  seed: string;
  src?: string;
  title: string;
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
      className={pos.mobile ? "absolute" : "absolute hidden sm:block"}
      style={{
        left: `${pos.x}%`,
        top: `${pos.y}%`,
        width: `clamp(104px, 18vw, ${pos.w}px)`,
        x: tx,
        y: ty,
        rotate,
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.4 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Camada interna: flutuar/orbitar contínuo e independente do mouse. */}
      <motion.div
        className="flex flex-col items-center gap-2"
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
        <div className="w-full overflow-hidden rounded-xl shadow-[0_24px_60px_-24px_rgba(0,0,0,0.35)]">
          <Media
            seed={seed}
            src={src}
            category={category}
            ratio={pos.ratio}
            fit="cover"
            rounded={false}
            sizes="280px"
          />
        </div>
        {src && (
          <span className="whitespace-nowrap rounded-full border border-line bg-bg/85 px-3 py-1 text-[0.7rem] font-medium text-ink shadow-sm backdrop-blur">
            {title}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}
