export function About() {
  return (
    <section id="sobre" className="border-t border-[var(--border)]">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Sobre</h2>
        <div className="mt-4 max-w-2xl space-y-4 text-[var(--muted-foreground)]">
          <p>
            Escreva aqui um parágrafo sobre você: sua trajetória, com o que
            trabalha e o que te motiva.
          </p>
          <p>
            Inclua tecnologias que domina, áreas de interesse e o tipo de projeto
            que gosta de construir.
          </p>
        </div>
      </div>
    </section>
  );
}
