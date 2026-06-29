import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { aboutIntro } from "@/content/about";

export function AboutIntro() {
  return (
    <Section dark id="intro">
      <div className="max-w-5xl">
        <Reveal>
          <p className="mb-8 text-sm uppercase tracking-[0.3em] text-muted">
            {aboutIntro.eyebrow}
          </p>
        </Reveal>
        <h2 className="font-display text-balance text-3xl leading-[1.1] sm:text-5xl lg:text-6xl">
          <TextReveal text={aboutIntro.heading} />
        </h2>
        <div className="mt-10 grid max-w-3xl gap-6 text-lg text-muted">
          {aboutIntro.body.map((p, i) => (
            <Reveal key={i} delay={0.1 + i * 0.1}>
              <p className="text-pretty">{p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
