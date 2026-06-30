"use client";

import { useState } from "react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button, buttonVariants } from "@/components/ui/button";
import { contactSchema } from "@/lib/validations";
import { contact } from "@/content/contact";
import { settings } from "@/content/settings";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [success, setSuccess] = useState(false);

  const whatsappHref = `https://wa.me/${settings.whatsapp}?text=${encodeURIComponent(
    contact.whatsappMessage,
  )}`;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const parsed = contactSchema.safeParse({
      name: data.get("name"),
      email: data.get("email"),
      message: data.get("message"),
    });

    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        next[issue.path[0] as keyof Errors] = issue.message;
      }
      setErrors(next);
      return;
    }

    setErrors({});
    const { name, email, message } = parsed.data;
    // Integração futura: POST /api/contact (Resend). Por ora, mailto.
    window.location.href = `mailto:${settings.email}?subject=${encodeURIComponent(
      `Contato do portfólio de ${name}`,
    )}&body=${encodeURIComponent(`${message}\n\nEnviado por ${name} (${email})`)}`;
    setSuccess(true);
  }

  const field =
    "w-full border-0 border-b border-line bg-transparent py-3 text-lg outline-none transition-colors placeholder:text-muted/60 focus:border-ink";

  return (
    <Section id="contato" className="border-t border-line">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div>
          <SectionHeading eyebrow={contact.eyebrow} title={contact.heading} size="xl" />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-pretty text-xl text-muted">
              {contact.body}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "solid", className: "mt-8" })}
            >
              <WhatsAppIcon /> {contact.whatsappLabel}
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} noValidate className="space-y-8">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm text-muted">
                {contact.form.name.label}
              </label>
              <input id="name" name="name" className={field} placeholder={contact.form.name.placeholder} />
              {errors.name && <p className="mt-2 text-sm text-accent">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm text-muted">
                {contact.form.email.label}
              </label>
              <input id="email" name="email" type="email" className={field} placeholder={contact.form.email.placeholder} />
              {errors.email && <p className="mt-2 text-sm text-accent">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm text-muted">
                {contact.form.message.label}
              </label>
              <textarea id="message" name="message" rows={4} className={field} placeholder={contact.form.message.placeholder} />
              {errors.message && <p className="mt-2 text-sm text-accent">{errors.message}</p>}
            </div>
            <Button type="submit" size="lg">
              {contact.form.submit}
            </Button>
            {success && (
              <p className="text-sm text-muted" role="status">
                {contact.form.success}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
    </svg>
  );
}
