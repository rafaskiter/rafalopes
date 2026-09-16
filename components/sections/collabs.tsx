import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { collabs } from "@/content/about";

/**
 * Faixa de marcas em carrossel infinito. Fundo branco porque os logos vêm
 * com fundo branco chapado — sobre o creme do site apareceria um retângulo.
 */
export function Collabs() {
  return (
    <section className="border-t border-line bg-bg-elevated py-12 sm:py-16">
      <Container>
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-faint">
            Em colaboração com
          </p>
        </Reveal>
      </Container>

      <div className="marquee marquee-mask mt-8 overflow-hidden sm:mt-10">
        {/* Quatro cópias, deslocando -25% (exatamente uma cópia): as outras
            três cobrem a viewport, então nunca abre vão na borda direita.
            O espaçamento é margem por item, e não `gap`, porque `gap` deixa
            a última fresta de fora da conta e o loop saltaria a cada volta. */}
        <ul className="marquee-track flex w-max items-center">
          {[0, 1, 2, 3].map((copia) =>
            collabs.map((marca) => (
              <li key={`${copia}-${marca.name}`} className="mr-14 sm:mr-20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={marca.src}
                  alt={copia === 0 ? marca.name : ""}
                  aria-hidden={copia !== 0}
                  style={{ height: marca.height }}
                  className="w-auto max-w-none opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0"
                />
              </li>
            )),
          )}
        </ul>
      </div>
    </section>
  );
}
