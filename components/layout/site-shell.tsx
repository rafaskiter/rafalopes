import { Urbanist, Corben } from "next/font/google";
import type { Locale } from "@/types";
import { getContent } from "@/content/dictionary";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

const corben = Corben({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-corben",
  display: "swap",
});

/** Código de idioma para o atributo lang do documento. */
const htmlLang: Record<Locale, string> = { pt: "pt-BR", en: "en" };

/**
 * Casca comum aos dois idiomas. Cada layout raiz a usa com o seu locale,
 * o que é o que permite servir o lang correto no <html> — um layout único
 * não teria como saber em qual idioma está.
 */
export function SiteShell({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const { ui } = getContent(locale);

  return (
    <html
      lang={htmlLang[locale]}
      className={`${urbanist.variable} ${corben.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-bg text-ink antialiased">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-on-dark"
        >
          {ui.skipToContent}
        </a>
        <SmoothScroll>
          <Header locale={locale} />
          <main id="conteudo">{children}</main>
          <Footer locale={locale} />
        </SmoothScroll>
      </body>
    </html>
  );
}
