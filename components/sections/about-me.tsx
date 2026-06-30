import Link from "next/link";
import { ArrowDownToLine, Linkedin } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SeededPlaceholder } from "@/components/placeholder/seeded-placeholder";
import { buttonVariants } from "@/components/ui/button";
import { aboutMe, timeline, skills, tools } from "@/content/about";
import { settings, socials } from "@/content/settings";

export function AboutMe() {
  const linkedin = socials.find((s) => s.label === "LinkedIn")?.href ?? "#";

  return (
    <Section id="sobre" className="border-t border-line">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1fr] lg:gap-16">
        {/* Foto + ações */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <div className="overflow-hidden rounded-xl">
              <SeededPlaceholder
                seed={aboutMe.photo.seed}
                category="Identidade Visual"
                ratio="3/4"
                label={aboutMe.photo.label}
                rounded={false}
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={settings.cvUrl} className={buttonVariants({ variant: "solid" })}>
                <ArrowDownToLine /> Baixar CV
              </Link>
              <Link
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ variant: "outline" })}
              >
                <Linkedin /> LinkedIn
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Texto + listas */}
        <div>
          <SectionHeading eyebrow={aboutMe.eyebrow} title={aboutMe.heading} />
          <div className="mt-8 grid gap-5 text-xl text-muted">
            {aboutMe.body.map((p, i) => (
              <Reveal key={i} delay={0.05 * i}>
                <p className="text-pretty">{p}</p>
              </Reveal>
            ))}
          </div>

          {/* Timeline */}
          <Reveal>
            <h3 className="mb-6 mt-14 text-sm uppercase tracking-[0.2em] text-ink">
              Trajetória
            </h3>
          </Reveal>
          <ul className="space-y-px">
            {timeline.map((entry, i) => (
              <Reveal as="li" key={i} delay={0.04 * i}>
                <div className="grid gap-1 border-t border-line py-5 sm:grid-cols-[8rem_1fr] sm:gap-6">
                  <span className="text-sm text-muted">{entry.period}</span>
                  <div>
                    <p className="font-medium">
                      {entry.role} · <span className="text-muted">{entry.org}</span>
                    </p>
                    <p className="mt-1 text-sm text-muted">{entry.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>

          {/* Skills */}
          <Reveal>
            <h3 className="mb-6 mt-14 text-sm uppercase tracking-[0.2em] text-ink">
              Skills
            </h3>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-3">
            {skills.map((group, i) => (
              <Reveal key={group.title} delay={0.05 * i}>
                <p className="mb-3 font-medium">{group.title}</p>
                <ul className="space-y-1.5 text-sm text-muted">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          {/* Ferramentas */}
          <Reveal>
            <h3 className="mb-6 mt-14 text-sm uppercase tracking-[0.2em] text-ink">
              Ferramentas
            </h3>
          </Reveal>
          <Reveal>
            <ul className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <li
                  key={tool}
                  className="rounded-full border border-line px-4 py-2 text-sm"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
