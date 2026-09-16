"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/types";
import { locales, localeLabel, switchLocalePath } from "@/content/dictionary";
import { cn } from "@/lib/utils";

/**
 * Troca de idioma preservando a página: de um case em português vai para o
 * mesmo case em inglês, e não para a home.
 */
export function LocaleSwitch({
  current,
  onDark = false,
  className,
}: {
  current: Locale;
  onDark?: boolean;
  className?: string;
}) {
  const pathname = usePathname();

  return (
    <div className={cn("flex items-center gap-1.5 text-sm", className)}>
      {locales.map((locale, i) => {
        const active = locale === current;
        return (
          <span key={locale} className="flex items-center gap-1.5">
            {i > 0 && (
              <span aria-hidden className={onDark ? "text-on-dark/30" : "text-ink/25"}>
                /
              </span>
            )}
            <Link
              href={switchLocalePath(pathname, locale)}
              hrefLang={locale}
              aria-current={active ? "true" : undefined}
              aria-label={localeLabel[locale]}
              className={cn(
                "uppercase transition-colors",
                onDark
                  ? active
                    ? "text-on-dark"
                    : "text-on-dark/50 hover:text-on-dark"
                  : active
                    ? "text-ink"
                    : "text-ink/45 hover:text-ink",
              )}
            >
              {locale}
            </Link>
          </span>
        );
      })}
    </div>
  );
}
