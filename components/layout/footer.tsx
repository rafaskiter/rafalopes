export function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-4 py-8 text-sm text-[var(--muted-foreground)] sm:flex-row">
        <p>© {new Date().getFullYear()} Rafael Lopes. Todos os direitos reservados.</p>
        <p>Feito com Next.js e Tailwind CSS.</p>
      </div>
    </footer>
  );
}
