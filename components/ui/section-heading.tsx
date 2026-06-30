import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  /** "xl" para declarações de seção; "lg" padrão. */
  size?: "lg" | "xl";
  className?: string;
  as?: "h1" | "h2";
}

const sizes = {
  lg: "text-4xl sm:text-5xl lg:text-6xl",
  xl: "text-[2.75rem] leading-[1.02] sm:text-6xl lg:text-[5rem]",
} as const;

/** Cabeçalho de seção: rótulo (kicker com filete) + título display em Corben. */
export function SectionHeading({
  eyebrow,
  title,
  size = "lg",
  className,
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <div className={className}>
      {eyebrow && (
        <Reveal>
          <span className="mb-5 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-accent">
            <span className="size-1.5 rounded-full bg-current" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Tag
        className={cn(
          "font-display tracking-tight text-balance leading-[1.06]",
          sizes[size],
        )}
      >
        <TextReveal text={title} />
      </Tag>
    </div>
  );
}
