"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import type { Locale } from "@/types";
import { getContent, homePath } from "@/content/dictionary";
import { LocaleSwitch } from "@/components/layout/locale-switch";
import { LogoColor } from "@/components/icons/logo-color";
import { LogoOutline } from "@/components/icons/logo-outline";
import { cn } from "@/lib/utils";

export function Header({ locale }: { locale: Locale }) {
  const { nav, settings, ui } = getContent(locale);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Só a home abre com hero escuro; as demais rotas começam no fundo claro.
  const onDarkHero = pathname === homePath(locale) && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
          scrolled
            ? "border-b border-line/70 bg-bg/70 backdrop-blur-xl"
            : "border-b border-transparent",
        )}
      >
      <div className="mx-auto flex h-[var(--header-h,4.5rem)] max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        <Link
          href={homePath(locale)}
          className="relative z-50 flex items-center"
          onClick={() => setOpen(false)}
          aria-label={`${settings.fullName} — ${ui.header.home}`}
        >
          {/* O wrapper sobrevive à troca das duas artes, então é ele que anima
              o tamanho — uma transição no filho seria cortada pelo remount. */}
          <span
            className={cn(
              "block transition-[width,height] duration-500 ease-[var(--ease-out)]",
              // O outline pesa menos que a versão cheia e pede mais corpo.
              onDarkHero ? "h-14 w-14" : "h-10 w-10",
            )}
          >
            {onDarkHero ? (
              <LogoOutline className="h-full w-full text-on-dark" />
            ) : (
              <LogoColor className="h-full w-full" />
            )}
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label={ui.header.mainNav}>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group relative text-sm transition-colors",
                onDarkHero
                  ? "text-on-dark/75 hover:text-on-dark"
                  : "text-ink/70 hover:text-ink",
              )}
            >
              {item.label}
              <span
                className={cn(
                  "absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full",
                  onDarkHero ? "bg-on-dark" : "bg-ink",
                )}
              />
            </Link>
          ))}
          <LocaleSwitch current={locale} onDark={onDarkHero} />
        </nav>

        <button
          className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
          aria-label={open ? ui.header.closeMenu : ui.header.openMenu}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{ui.header.menu}</span>
          <div className={cn("flex w-6 flex-col gap-[5px]", onDarkHero ? "text-on-dark" : "text-ink")}>
            <span className={cn("h-px bg-current transition-transform duration-300", open && "translate-y-[6px] rotate-45")} />
            <span className={cn("h-px bg-current transition-opacity duration-300", open && "opacity-0")} />
            <span className={cn("h-px bg-current transition-transform duration-300", open && "-translate-y-[6px] -rotate-45")} />
          </div>
        </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-bg md:hidden"
          >
            <nav className="flex h-full flex-col justify-center gap-2 px-8" aria-label={ui.header.mobileNav}>
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-5xl tracking-tight"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + nav.length * 0.08 }}
                className="mt-8"
              >
                <LocaleSwitch current={locale} className="text-lg" />
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
