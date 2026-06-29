# Rafa Lopes — Portfólio

Portfólio premium de **Rafa Lopes** — Designer de Produto, UX/UI e Creative Technologist.
Visual minimalista, scroll fluido, microinterações sofisticadas e estudos de caso
estruturados, prontos para receber conteúdo real.

Inspirado nos conceitos de navegação e ritmo de [clou.ch](https://www.clou.ch) — sem copiar
layout, textos ou imagens.

## Stack

- [Next.js 15](https://nextjs.org) (App Router) + TypeScript (strict)
- [Tailwind CSS 4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) — animações e reveals
- [Lenis](https://lenis.darkroom.engineering/) — scroll suave
- [Zod](https://zod.dev) — validação do formulário
- Fontes: **Instrument Serif** (display) + **Inter** (texto) via `next/font`

## Estrutura

```
app/
  page.tsx                 → home (one-page: hero, sobre, projetos, sobre mim, contato)
  projetos/[slug]/page.tsx → estudos de caso (SSG, 6 projetos)
  layout.tsx               → fontes, SEO, SmoothScroll, Header, Footer
  icon · opengraph-image · twitter-image · manifest · robots · sitemap
  not-found.tsx
components/
  ui/        → Container, Button, Section
  layout/    → Header, Footer, SmoothScroll (Lenis)
  motion/    → Reveal, TextReveal
  hero/      → FloatingGallery (placeholders que seguem o mouse)
  sections/  → Hero, AboutIntro, Projects, ProjectCard, AboutMe, Contact
  case/      → CaseHero, CaseBlock, CaseNext
  placeholder/ → SeededPlaceholder (visuais abstratos determinísticos)
content/     → settings, projects, about, contact  (camada de conteúdo, zero hardcode)
lib/         → utils (cn), seed (PRNG determinístico), validations (Zod)
types/       → contratos compartilhados
```

## Conteúdo

Todo o texto vive em `content/`. Para publicar trabalhos reais, edite
`content/projects.ts` (cada projeto declara blocos que os componentes de case
renderizam) e os arquivos `about.ts` / `settings.ts` / `contact.ts`.

As imagens são **placeholders gerados por seed** (`SeededPlaceholder`) — mesma seed
gera sempre o mesmo visual. Para usar imagens reais depois, basta trocar esse
componente por `next/image` mantendo o mesmo layout.

## Configurar

Ajuste em `content/settings.ts`: e-mail, WhatsApp, links sociais, URL do CV e
`NEXT_PUBLIC_APP_URL`. O formulário de contato usa `mailto:` por enquanto —
o ponto de integração com um endpoint (ex.: Resend) está marcado em
`components/sections/contact.tsx`.

## Rodar

```bash
npm install
cp .env.example .env.local   # defina NEXT_PUBLIC_APP_URL
npm run dev                  # http://localhost:3000
```

Scripts: `dev` · `build` · `start` · `lint` · `typecheck`

## Deploy

Pronto para a [Vercel](https://vercel.com/new) — importe o repositório
`rafaskiter/rafalopes` e defina `NEXT_PUBLIC_APP_URL` nas variáveis de ambiente.
