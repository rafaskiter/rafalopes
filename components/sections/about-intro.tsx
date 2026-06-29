import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { aboutIntro } from "@/content/about";

export function AboutIntro() {
  return (
    <Section dark id="intro">
      <SectionHeading
        eyebrow={aboutIntro.eyebrow}
        title={aboutIntro.heading}
        size="xl"
        className="max-w-5xl"
      />
      <div className="mt-12 grid max-w-3xl gap-6 text-lg text-muted">
        {aboutIntro.body.map((p, i) => (
          <Reveal key={i} delay={0.1 + i * 0.1}>
            <p className="text-pretty">{p}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
