"use client";

import { useState } from "react";
import { contactSchema } from "@/lib/validations";
import { Button } from "@/components/ui/button";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const result = contactSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    });

    if (!result.success) {
      const fieldErrors: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof Errors;
        fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    // TODO: enviar para um endpoint (ex.: /api/contact com Resend).
    // Por enquanto abre o cliente de e-mail.
    const { name, email, message } = result.data;
    window.location.href = `mailto:skiter.rafael@gmail.com?subject=${encodeURIComponent(
      `Contato do portfólio — ${name}`,
    )}&body=${encodeURIComponent(`${message}\n\nDe: ${name} <${email}>`)}`;
    setSent(true);
  }

  const inputClass =
    "w-full rounded-md border border-[var(--input)] bg-[var(--background)] px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]";

  return (
    <form onSubmit={handleSubmit} className="mt-8 max-w-xl space-y-4" noValidate>
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium">
          Nome
        </label>
        <input id="name" name="name" className={inputClass} />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium">
          E-mail
        </label>
        <input id="email" name="email" type="email" className={inputClass} />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={inputClass}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message}</p>
        )}
      </div>

      <Button type="submit">Enviar</Button>
      {sent && (
        <p className="text-sm text-[var(--muted-foreground)]">
          Abrindo seu cliente de e-mail…
        </p>
      )}
    </form>
  );
}
