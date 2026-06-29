import type { CaseBlock as CaseBlockType, Category } from "@/types";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { SeededPlaceholder } from "@/components/placeholder/seeded-placeholder";
import { cn } from "@/lib/utils";

function BlockHeading({ block }: { block: CaseBlockType }) {
  if (!block.eyebrow && !block.heading) return null;
  return (
    <Reveal>
      {block.eyebrow && (
        <span className="mb-4 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-muted">
          <span className="h-px w-7 bg-current opacity-50" />
          {block.eyebrow}
        </span>
      )}
      {block.heading && (
        <h2 className="font-display text-balance text-3xl leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl">
          {block.heading}
        </h2>
      )}
    </Reveal>
  );
}

function Body({ body }: { body?: string[] }) {
  if (!body?.length) return null;
  return (
    <div className="grid gap-5 text-lg text-muted">
      {body.map((p, i) => (
        <Reveal key={i} delay={0.05 * i}>
          <p className="text-pretty">{p}</p>
        </Reveal>
      ))}
    </div>
  );
}

export function CaseBlock({
  block,
  category,
}: {
  block: CaseBlockType;
  category: Category;
}) {
  const media = block.media ?? [];

  switch (block.layout) {
    case "text":
      return (
        <Container className="py-[clamp(3rem,7vh,6rem)]">
          <div className="max-w-3xl">
            <BlockHeading block={block} />
            <div className="mt-8">
              <Body body={block.body} />
            </div>
          </div>
        </Container>
      );

    case "split":
      return (
        <Container className="py-[clamp(3rem,7vh,6rem)]">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <BlockHeading block={block} />
              <div className="mt-8">
                <Body body={block.body} />
              </div>
            </div>
            {media[0] && (
              <Reveal delay={0.1}>
                <SeededPlaceholder
                  seed={media[0].seed}
                  category={category}
                  ratio={media[0].ratio ?? "4/3"}
                  label={media[0].label}
                />
              </Reveal>
            )}
          </div>
        </Container>
      );

    case "wide-media":
      return (
        <Container className="py-[clamp(3rem,7vh,6rem)]">
          {(block.heading || block.body) && (
            <div className="mb-10 max-w-3xl">
              <BlockHeading block={block} />
              <div className="mt-6">
                <Body body={block.body} />
              </div>
            </div>
          )}
          {media[0] && (
            <Reveal>
              <SeededPlaceholder
                seed={media[0].seed}
                category={category}
                ratio={media[0].ratio ?? "21/9"}
                label={media[0].label}
              />
            </Reveal>
          )}
        </Container>
      );

    case "media-grid":
      return (
        <Container className="py-[clamp(3rem,7vh,6rem)]">
          {(block.heading || block.body) && (
            <div className="mb-10 max-w-3xl">
              <BlockHeading block={block} />
              <div className="mt-6">
                <Body body={block.body} />
              </div>
            </div>
          )}
          <div
            className={cn(
              "grid gap-4 sm:gap-6",
              media.length >= 4
                ? "sm:grid-cols-2 lg:grid-cols-3"
                : media.length === 2
                  ? "sm:grid-cols-2"
                  : "sm:grid-cols-3",
            )}
          >
            {media.map((m, i) => (
              <Reveal key={m.seed} delay={0.04 * i}>
                <SeededPlaceholder
                  seed={m.seed}
                  category={category}
                  ratio={m.ratio ?? "1/1"}
                  label={m.label}
                />
              </Reveal>
            ))}
          </div>
        </Container>
      );

    case "metrics":
      return (
        <Container className="py-[clamp(3rem,7vh,6rem)]">
          <div className="grid gap-8 border-y border-line py-12 sm:grid-cols-3">
            {block.metrics?.map((m, i) => (
              <Reveal key={i} delay={0.06 * i}>
                <p className="font-display text-5xl tracking-tight sm:text-6xl">
                  {m.value}
                </p>
                <p className="mt-3 text-sm text-muted">{m.label}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      );

    case "list":
      return (
        <Container className="py-[clamp(3rem,7vh,6rem)]">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:gap-16">
            <BlockHeading block={block} />
            <ul className="space-y-px">
              {block.list?.map((item, i) => (
                <Reveal as="li" key={i} delay={0.04 * i}>
                  <div className="border-t border-line py-5">
                    <p className="text-lg font-medium">{item.title}</p>
                    {item.description && (
                      <p className="mt-1 text-muted">{item.description}</p>
                    )}
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </Container>
      );

    case "quote":
      return (
        <Container className="py-[clamp(4rem,9vh,7rem)]">
          <Reveal>
            <blockquote className="mx-auto max-w-4xl text-center">
              <p className="font-display text-balance text-3xl leading-tight sm:text-4xl lg:text-5xl">
                “{block.quote?.text}”
              </p>
              {block.quote?.author && (
                <footer className="mt-6 text-sm uppercase tracking-widest text-muted">
                  {block.quote.author}
                </footer>
              )}
            </blockquote>
          </Reveal>
        </Container>
      );

    default:
      return null;
  }
}
