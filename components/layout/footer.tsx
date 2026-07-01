import Link from "next/link";
import { nav, settings, socials } from "@/content/settings";
import { contact } from "@/content/contact";
import { buttonVariants } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/whatsapp";

export function Footer() {
  const whatsappHref = `https://wa.me/${settings.whatsapp}?text=${encodeURIComponent(
    contact.whatsappMessage,
  )}`;

  return (
    <footer className="px-3 pb-3 sm:px-4 sm:pb-4">
      <div className="relative overflow-hidden rounded-[2rem] bg-ink text-on-dark [--line:var(--line-on-dark)] [--muted:var(--muted-on-dark)] sm:rounded-[2.75rem]">
        {/* Textura de marca repetida, bem sutil */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-repeat opacity-[0.10]"
          style={{
            backgroundImage: "url('/brand/texture.png')",
            backgroundSize: "300px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
            <div>
              <p className="font-display text-4xl tracking-tight sm:text-5xl">
                Vamos conversar.
              </p>
              <a
                href={`mailto:${settings.email}`}
                className="mt-4 inline-block text-muted underline-offset-4 transition-colors hover:text-on-dark hover:underline"
              >
                {settings.email}
              </a>

              <div className="mt-8">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonVariants({ variant: "solid", size: "lg" })}
                >
                  <WhatsAppIcon /> {contact.whatsappLabel}
                </a>
              </div>
            </div>

            <nav aria-label="Navegação do rodapé">
              <p className="mb-4 text-xs uppercase tracking-widest text-muted">Navegação</p>
              <ul className="space-y-2">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-muted transition-colors hover:text-on-dark">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Redes sociais">
              <p className="mb-4 text-xs uppercase tracking-widest text-muted">Social</p>
              <ul className="space-y-2">
                {socials.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted transition-colors hover:text-on-dark"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="mt-16 flex flex-col items-start justify-between gap-2 border-t border-line pt-8 text-sm text-muted sm:flex-row sm:items-center">
            <p>
              © {new Date().getFullYear()} {settings.fullName}. {settings.location}.
            </p>
            <p>Feito por mim :)</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
