import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(appUrl),
  title: {
    default: "Rafael Lopes — Portfólio",
    template: "%s | Rafael Lopes",
  },
  description: "Portfólio pessoal — projetos, experiência e contato.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: appUrl,
    title: "Rafael Lopes — Portfólio",
    description: "Portfólio pessoal — projetos, experiência e contato.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
