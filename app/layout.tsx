import type { Metadata } from "next";
import { Urbanist, Fredoka } from "next/font/google";
import "./globals.css";
import { settings, seo } from "@/content/settings";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fredoka",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(settings.url),
  title: {
    default: seo.title,
    template: `%s · ${settings.fullName}`,
  },
  description: seo.description,
  keywords: [...seo.keywords],
  authors: [{ name: settings.fullName }],
  creator: settings.fullName,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: settings.url,
    siteName: settings.fullName,
    title: seo.title,
    description: seo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${urbanist.variable} ${fredoka.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-bg text-ink antialiased">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-on-dark"
        >
          Pular para o conteúdo
        </a>
        <SmoothScroll>
          <Header />
          <main id="conteudo">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
