"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
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
            <p className="mt-6 max-w-md text-pretty text-lg text-muted">
              {contact.body}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "outline", className: "mt-8" })}
            >
              <MessageCircle /> {contact.whatsappLabel}
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
