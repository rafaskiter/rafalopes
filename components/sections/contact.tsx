import { ContactForm } from "@/components/forms/contact-form";

export function Contact() {
  return (
    <section id="contato" className="border-t border-[var(--border)]">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Contato</h2>
        <p className="mt-2 text-[var(--muted-foreground)]">
          Quer conversar sobre um projeto? Envie uma mensagem.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
