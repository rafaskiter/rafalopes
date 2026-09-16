import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] flex-col items-center justify-center px-6 text-center">
      <p className="font-display text-[clamp(5rem,18vw,12rem)] leading-none">404</p>
      <h1 className="mt-4 font-display text-2xl sm:text-3xl">
        Esta página se perdeu no fluxo.
      </h1>
      <p className="mt-3 max-w-sm text-muted">
        O endereço não existe ou foi movido. Vamos voltar ao início?
      </p>
      <Link href="/" className={buttonVariants({ className: "mt-8" })}>
        Voltar ao início
      </Link>
    </section>
  );
}
