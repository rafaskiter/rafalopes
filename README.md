# Portfólio — Rafael Lopes

Site pessoal para apresentar projetos, experiência e contato.

Estrutura baseada no boilerplate ([BOILERPLATE_MANUAL](https://github.com/lbrezende/muda-facil/blob/main/BOILERPLATE_MANUAL.md)),
usando apenas o núcleo do stack (sem Stripe/Auth/Prisma).

## Stack

- [Next.js 15](https://nextjs.org) (App Router) + TypeScript (strict)
- [Tailwind CSS 4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com) (componentes em `components/ui`)
- [TanStack Query](https://tanstack.com/query) (data fetching no cliente)
- [Zod](https://zod.dev) (validação de schemas)

## Estrutura de pastas

```
app/
  (public)/        → páginas públicas (home)
  globals.css      → Tailwind 4 + tokens de tema
  layout.tsx       → layout raiz (Header/Footer/Providers)
  providers.tsx    → QueryClientProvider
components/
  ui/              → componentes shadcn/ui
  forms/           → formulários (contato)
  layout/          → Header, Footer
  sections/        → seções da landing (Hero, Projects, About, Contact)
lib/
  utils.ts         → helper cn()
  validations.ts   → schemas Zod
  projects.ts      → dados dos projetos
hooks/             → hooks reutilizáveis
types/             → tipos compartilhados
public/screenshots/→ imagens dos projetos
```

## Como rodar

```bash
npm install
cp .env.example .env.local   # ajuste NEXT_PUBLIC_APP_URL
npm run dev                  # http://localhost:3000
```

Scripts: `npm run dev` · `npm run build` · `npm start` · `npm run lint` · `npm run typecheck`

## Personalizar

- Edite os dados em `lib/projects.ts` e os textos em `components/sections/*`.
- Adicione componentes shadcn: `npx shadcn@latest add <componente>`.
- Coloque imagens em `public/screenshots/` e referencie em `lib/projects.ts`.
