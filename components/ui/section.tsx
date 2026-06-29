import { cn } from "@/lib/utils";
import { Container } from "./container";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Tema escuro (fundo quase-preto, texto claro). */
  dark?: boolean;
  containerSize?: "default" | "wide" | "narrow";
  bleed?: boolean; // sem container (full-bleed)
}

/** Bloco de seção com ritmo vertical e tema claro/escuro consistentes. */
export function Section({
  dark = false,
  containerSize = "default",
  bleed = false,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative",
        dark && "bg-ink text-on-dark [--line:var(--line-on-dark)] [--muted:var(--muted-on-dark)]",
        className,
      )}
      style={{ paddingBlock: "var(--section-y)" }}
      {...props}
    >
      {bleed ? children : <Container size={containerSize}>{children}</Container>}
    </section>
  );
}
