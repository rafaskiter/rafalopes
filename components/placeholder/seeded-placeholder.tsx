import type { Category, Ratio } from "@/types";
import { rngFrom } from "@/lib/seed";
import { cn } from "@/lib/utils";

/** Paletas por categoria — sofisticadas e de baixo contraste interno. */
const palettes: Record<Category, [string, string, string]> = {
  Branding: ["#1f1b16", "#c8501e", "#e8d9c5"],
  "Identidade Visual": ["#14213d", "#4f6d7a", "#dbe4e9"],
  "UX Design": ["#0f1f1c", "#2f7a6a", "#d6e7df"],
  "UI Design": ["#161a2b", "#5b6bd6", "#dadffb"],
  Websites: ["#1a1410", "#a6772b", "#ece2cf"],
  Games: ["#1a0f1f", "#8b3fd6", "#e3d4f0"],
};

const ratioPad: Record<Ratio, string> = {
  "1/1": "100%",
  "4/3": "75%",
  "16/9": "56.25%",
  "3/4": "133.33%",
  "21/9": "42.857%",
};

interface SeededPlaceholderProps {
  seed: string;
  category?: Category;
  ratio?: Ratio;
  label?: string;
  className?: string;
  rounded?: boolean;
  priority?: boolean;
  /** Preenche o elemento pai (que deve ser position:relative) ignorando o ratio. */
  fill?: boolean;
}

/**
 * Placeholder abstrato determinístico (SVG). Mesma seed gera sempre o mesmo
 * visual — substituível por imagens reais no futuro sem mudar o layout.
 */
export function SeededPlaceholder({
  seed,
  category = "UI Design",
  ratio = "4/3",
  label,
  className,
  rounded = true,
  fill = false,
}: SeededPlaceholderProps) {
  const rnd = rngFrom(seed);
  const [dark, mid, light] = palettes[category];
  const id = `g-${Math.floor(rnd() * 1e9).toString(36)}`;

  const angle = Math.floor(rnd() * 360);
  const shapeCount = 3 + Math.floor(rnd() * 3);

  // Composição geométrica determinística.
  const shapes = Array.from({ length: shapeCount }, () => {
    const kind = rnd();
    const cx = 10 + rnd() * 80;
    const cy = 10 + rnd() * 80;
    const size = 12 + rnd() * 42;
    const fill = rnd() > 0.5 ? mid : light;
    const opacity = 0.25 + rnd() * 0.5;
    return { kind, cx, cy, size, fill, opacity, rot: rnd() * 360 };
  });

  return (
    <div
      className={cn(
        "overflow-hidden bg-ink/5",
        fill ? "absolute inset-0 h-full w-full" : "relative w-full",
        rounded && "rounded-lg",
        className,
      )}
      style={fill ? undefined : { paddingBottom: ratioPad[ratio] }}
      role="img"
      aria-label={label ? `Imagem ilustrativa: ${label}` : "Imagem ilustrativa"}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={id} gradientTransform={`rotate(${angle} 0.5 0.5)`}>
            <stop offset="0%" stopColor={dark} />
            <stop offset="100%" stopColor={mid} />
          </linearGradient>
        </defs>
        <rect width="100" height="100" fill={`url(#${id})`} />
        {shapes.map((s, i) =>
          s.kind > 0.66 ? (
            <circle key={i} cx={s.cx} cy={s.cy} r={s.size / 2} fill={s.fill} opacity={s.opacity} />
          ) : s.kind > 0.33 ? (
            <rect
              key={i}
              x={s.cx - s.size / 2}
              y={s.cy - s.size / 2}
              width={s.size}
              height={s.size}
              fill={s.fill}
              opacity={s.opacity}
              transform={`rotate(${s.rot} ${s.cx} ${s.cy})`}
            />
          ) : (
            <line
              key={i}
              x1={s.cx - s.size}
              y1={s.cy}
              x2={s.cx + s.size}
              y2={s.cy}
              stroke={s.fill}
              strokeWidth={1 + (i % 3)}
              opacity={s.opacity}
              transform={`rotate(${s.rot} ${s.cx} ${s.cy})`}
            />
          ),
        )}
      </svg>

      {label && (
        <span className="absolute bottom-3 left-3 z-10 rounded-full bg-black/35 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm">
          {label}
        </span>
      )}
    </div>
  );
}
