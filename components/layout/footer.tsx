import Link from "next/link";
import { nav, settings, socials } from "@/content/settings";

export function Footer() {
  return (
    <footer className="bg-ink text-on-dark [--line:var(--line-on-dark)] [--muted:var(--muted-on-dark)]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
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
    </footer>
  );
}
