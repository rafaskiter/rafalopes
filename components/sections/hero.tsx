import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-24 sm:py-32">
      <p className="text-sm font-medium text-[var(--muted-foreground)]">
        Olá, eu sou
      </p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
        Rafael Lopes
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-[var(--muted-foreground)]">
        Desenvolvedor de software. Construo produtos web rápidos, acessíveis e
        bem desenhados. Confira alguns dos meus projetos abaixo.
      </p>
      <div className="mt-8 flex gap-3">
        <Link href="/#projetos" className={buttonVariants()}>
          Ver projetos
        </Link>
        <Link href="/#contato" className={buttonVariants({ variant: "outline" })}>
          Entrar em contato
        </Link>
      </div>
    </section>
  );
}
