import type { GalleryItem, Project } from "@/types";

/**
 * Estudos de caso. Conteúdo fictício, estruturado para soar real e para
 * facilitar a futura migração a um CMS. Cada projeto declara blocos que os
 * componentes de case renderizam de forma genérica.
 */
export const projects: Project[] = [
  // 1 — UX/UI ----------------------------------------------------------------
  {
    slug: "vitalize",
    title: "Vitalize",
    client: "Vitalize Health",
    category: "UX Design",
    type: "ux",
    year: 2024,
    featured: true,
    summary:
      "Redesenho de um app de saúde preventiva que transformou exames complexos em hábitos diários.",
    intro:
      "Como tornar a saúde preventiva tão simples quanto abrir um app — do dado clínico ao próximo passo, em segundos.",
    role: ["Lead Product Designer", "UX Research", "UI Design"],
    services: ["Discovery", "Pesquisa", "UX/UI", "Design System", "Testes"],
    cover: { seed: "vitalize-cover", ratio: "16/9", category: "UX Design" },
    blocks: [
      {
        id: "resumo",
        layout: "text",
        eyebrow: "Resumo",
        heading: "Saúde preventiva sem fricção",
        body: [
          "A Vitalize oferecia exames laboratoriais de altíssima qualidade, mas seus usuários abandonavam o app antes de entender os resultados. O desafio era traduzir dados clínicos densos em ações claras do dia a dia.",
          "Conduzi o redesenho de ponta a ponta — da pesquisa à entrega do design system — elevando a retenção em 30 dias de 22% para 58%.",
        ],
      },
      {
        id: "metricas",
        layout: "metrics",
        metrics: [
          { value: "+164%", label: "Retenção em 30 dias" },
          { value: "4.8★", label: "Avaliação nas lojas" },
          { value: "-41%", label: "Tickets de suporte" },
        ],
      },
      {
        id: "contexto",
        layout: "split",
        eyebrow: "Contexto",
        heading: "Um produto excelente que ninguém entendia",
        body: [
          "A base de usuários crescia via marketing, mas a ativação despencava na primeira leitura de resultados. Telas cheias de números, jargões médicos e nenhuma priorização.",
          "O time de produto suspeitava de um problema de onboarding; a pesquisa revelou algo mais profundo — falta de tradução entre dado e ação.",
        ],
        media: [{ seed: "vitalize-context", ratio: "4/3" }],
      },
      {
        id: "problema",
        layout: "text",
        eyebrow: "Problema",
        heading: "O dado existia. O significado, não.",
        body: [
          "Usuários recebiam dezenas de biomarcadores sem hierarquia. \"Está tudo bem? O que eu faço agora?\" era a pergunta recorrente em entrevistas.",
          "Definimos a métrica-norte: número de usuários que completam uma ação recomendada na primeira semana.",
        ],
      },
      {
        id: "objetivos",
        layout: "list",
        eyebrow: "Objetivos",
        heading: "O que precisávamos resolver",
        list: [
          { title: "Clareza", description: "Transformar resultados em uma narrativa compreensível em 30 segundos." },
          { title: "Ação", description: "Sempre oferecer um próximo passo concreto e priorizado." },
          { title: "Confiança", description: "Comunicar rigor clínico sem intimidar." },
          { title: "Hábito", description: "Criar laços de retorno que façam sentido para a vida real." },
        ],
      },
      {
        id: "pesquisa",
        layout: "split",
        eyebrow: "Pesquisa · Desk Research",
        heading: "Ouvir antes de desenhar",
        body: [
          "Realizei 18 entrevistas em profundidade, análise de 600 reviews e um benchmark de 12 produtos de saúde e finanças — referências de como apps traduzem complexidade.",
          "O desk research em fintechs foi revelador: a forma como um extrato bancário resume \"o que mudou\" inspirou a tela de resultados.",
        ],
        media: [{ seed: "vitalize-research", ratio: "4/3" }],
      },
      {
        id: "personas",
        layout: "list",
        eyebrow: "Personas",
        heading: "Para quem desenhamos",
        list: [
          { title: "A Preventiva", description: "Cuida da saúde proativamente e quer entender tendências ao longo do tempo." },
          { title: "O Pragmático", description: "Quer apenas saber se está tudo certo e o que fazer se não estiver." },
          { title: "O Recém-diagnosticado", description: "Precisa de orientação acolhedora e confiável para mudar hábitos." },
        ],
      },
      {
        id: "jornada",
        layout: "wide-media",
        eyebrow: "Mapa de Jornada",
        heading: "Do exame ao hábito",
        body: [
          "Mapeamos a jornada do agendamento ao acompanhamento contínuo, identificando os picos de ansiedade e os momentos ideais para recomendações.",
        ],
        media: [{ seed: "vitalize-journey", ratio: "21/9" }],
      },
      {
        id: "fluxos",
        layout: "media-grid",
        eyebrow: "Fluxos & Wireframes",
        heading: "Estrutura antes da estética",
        body: [
          "Prototipei os fluxos críticos em baixa fidelidade e validei a arquitetura de informação com card sorting antes de qualquer pixel.",
        ],
        media: [
          { seed: "vitalize-wire-1", ratio: "3/4" },
          { seed: "vitalize-wire-2", ratio: "3/4" },
          { seed: "vitalize-wire-3", ratio: "3/4" },
        ],
      },
      {
        id: "ui",
        layout: "wide-media",
        eyebrow: "UI Final",
        heading: "Calma, clara, confiável",
        body: [
          "A interface usa cor com parcimônia — verde para o que está bem, âmbar para atenção. Cada resultado abre com uma frase humana e um próximo passo.",
        ],
        media: [{ seed: "vitalize-ui", ratio: "16/9" }],
      },
      {
        id: "design-system",
        layout: "media-grid",
        eyebrow: "Design System",
        heading: "Consistência que escala",
        body: [
          "Construímos o \"Pulse DS\": tokens, componentes acessíveis e documentação viva no Figma, sincronizada com o código.",
        ],
        media: [
          { seed: "vitalize-ds-1", ratio: "1/1" },
          { seed: "vitalize-ds-2", ratio: "1/1" },
          { seed: "vitalize-ds-3", ratio: "1/1" },
          { seed: "vitalize-ds-4", ratio: "1/1" },
        ],
      },
      {
        id: "testes",
        layout: "text",
        eyebrow: "Testes",
        heading: "Validação contínua",
        body: [
          "Cinco rodadas de teste de usabilidade moderado e dois testes A/B em produção. A taxa de compreensão dos resultados subiu de 54% para 92%.",
        ],
      },
      {
        id: "resultados",
        layout: "quote",
        quote: {
          text: "Pela primeira vez eu entendi meus exames sem precisar do Google. Sei exatamente o que fazer.",
          author: "Usuária, teste de produção",
        },
      },
      {
        id: "licoes",
        layout: "text",
        eyebrow: "Lições aprendidas",
        heading: "O que levo deste projeto",
        body: [
          "Complexidade não se resolve com mais informação, e sim com melhor hierarquia. E confiança, em saúde, se constrói no tom — não só no dado.",
        ],
      },
    ],
  },

  // 2 — Branding -------------------------------------------------------------
  {
    slug: "raiz-cafe",
    title: "Raíz Café",
    client: "Raíz Café Especial",
    category: "Branding",
    type: "branding",
    year: 2023,
    featured: true,
    summary:
      "Identidade visual de uma torrefação de café especial com origem rastreável e alma artesanal.",
    intro:
      "Uma marca que celebra a origem — do grão ao gole, cada detalhe conta a história de quem planta.",
    role: ["Direção de Arte", "Branding", "Naming"],
    services: ["Naming", "Identidade Visual", "Aplicações", "Packaging"],
    cover: { seed: "raiz-cover", ratio: "16/9", category: "Branding" },
    blocks: [
      {
        id: "contexto",
        layout: "split",
        eyebrow: "Contexto",
        heading: "Do produtor para a xícara",
        body: [
          "A Raíz nasceu do desejo de aproximar quem produz de quem consome café especial. Faltava uma marca à altura da qualidade do grão.",
          "O briefing pedia algo artesanal, mas contemporâneo — longe do clichê rústico do setor.",
        ],
        media: [{ seed: "raiz-context", ratio: "4/3" }],
      },
      {
        id: "objetivo",
        layout: "list",
        eyebrow: "Objetivo",
        heading: "O que a marca precisava entregar",
        list: [
          { title: "Origem", description: "Tornar a rastreabilidade um símbolo de orgulho." },
          { title: "Distinção", description: "Destacar-se nas prateleiras de cafés especiais." },
          { title: "Escala", description: "Sistema flexível para edições por safra e produtor." },
        ],
      },
      {
        id: "naming",
        layout: "text",
        eyebrow: "Naming",
        heading: "Raíz: o que sustenta tudo",
        body: [
          "Entre dezenas de rotas, \"Raíz\" venceu por carregar dupla leitura — a raiz da planta e a origem da história. Curto, memorável e fácil de pronunciar internacionalmente.",
        ],
      },
      {
        id: "conceito",
        layout: "split",
        eyebrow: "Conceito",
        heading: "Crescer a partir da origem",
        body: [
          "O conceito \"da raiz ao gole\" organiza toda a expressão da marca: formas que brotam, gestos manuais e uma paleta terrosa e viva.",
        ],
        media: [{ seed: "raiz-concept", ratio: "4/3" }],
      },
      {
        id: "moodboard",
        layout: "media-grid",
        eyebrow: "Moodboard",
        heading: "Territórios visuais",
        media: [
          { seed: "raiz-mood-1", ratio: "1/1" },
          { seed: "raiz-mood-2", ratio: "1/1" },
          { seed: "raiz-mood-3", ratio: "1/1" },
          { seed: "raiz-mood-4", ratio: "1/1" },
        ],
      },
      {
        id: "tipografia",
        layout: "wide-media",
        eyebrow: "Tipografia",
        heading: "Serifa com personalidade",
        body: [
          "Uma serifa de alto contraste para o logotipo, equilibrada por uma grotesca neutra nos textos — tradição encontra modernidade.",
        ],
        media: [{ seed: "raiz-type", ratio: "21/9" }],
      },
      {
        id: "paleta",
        layout: "media-grid",
        eyebrow: "Paleta & Grid",
        heading: "Cores da terra, ritmo do grid",
        body: [
          "Tons de terra, verde-folha e um vermelho-cereja vibrante como acento. O grid modular garante consistência das embalagens ao digital.",
        ],
        media: [
          { seed: "raiz-color-1", ratio: "1/1" },
          { seed: "raiz-color-2", ratio: "1/1" },
          { seed: "raiz-grid", ratio: "1/1" },
        ],
      },
      {
        id: "marca",
        layout: "wide-media",
        eyebrow: "Construção da marca · Área de proteção",
        heading: "O símbolo e suas regras",
        body: [
          "Um símbolo que combina uma raiz e um grão, com área de proteção, versões monocromáticas e usos mínimos definidos para cada contexto.",
        ],
        media: [{ seed: "raiz-logo", ratio: "16/9" }],
      },
      {
        id: "aplicacoes",
        layout: "media-grid",
        eyebrow: "Aplicações & Mockups",
        heading: "A marca no mundo real",
        body: [
          "Packaging, canecas, banners, cartões, camisetas, outdoor e redes sociais — um sistema coeso em todos os pontos de contato.",
        ],
        media: [
          { seed: "raiz-pack", ratio: "4/3", label: "Packaging" },
          { seed: "raiz-mug", ratio: "4/3", label: "Canecas" },
          { seed: "raiz-card", ratio: "4/3", label: "Cartões" },
          { seed: "raiz-shirt", ratio: "4/3", label: "Camisetas" },
          { seed: "raiz-outdoor", ratio: "4/3", label: "Outdoor" },
          { seed: "raiz-social", ratio: "4/3", label: "Redes Sociais" },
        ],
      },
      {
        id: "resultados",
        layout: "metrics",
        metrics: [
          { value: "+72%", label: "Reconhecimento de marca" },
          { value: "3×", label: "Vendas no e-commerce" },
          { value: "12", label: "Edições por safra lançadas" },
        ],
      },
    ],
  },

  // 3 — Website --------------------------------------------------------------
  {
    slug: "atlas-studio",
    title: "Atlas Studio",
    client: "Atlas Arquitetura",
    category: "Websites",
    type: "website",
    year: 2024,
    featured: true,
    summary:
      "Site institucional imersivo para um escritório de arquitetura, com narrativa de portfólio fluida.",
    intro:
      "Arquitetura é espaço e tempo. O site precisava ser uma caminhada — não um catálogo.",
    role: ["Designer", "Creative Developer"],
    services: ["UX/UI", "Front-end", "Motion", "Performance"],
    cover: { seed: "atlas-cover", ratio: "16/9", category: "Websites" },
    blocks: [
      {
        id: "problema",
        layout: "split",
        eyebrow: "Problema",
        heading: "Um portfólio que não respirava",
        body: [
          "O site antigo era uma grade densa de fotos. Bonito, mas frio — não transmitia o cuidado espacial que define o estúdio.",
          "Precisávamos de ritmo, escala e silêncio: a sensação de percorrer um edifício.",
        ],
        media: [{ seed: "atlas-problem", ratio: "4/3" }],
      },
      {
        id: "arquitetura",
        layout: "wide-media",
        eyebrow: "Arquitetura de Informação",
        heading: "Menos páginas, mais narrativa",
        body: [
          "Reduzimos a estrutura a quatro destinos essenciais e transformamos cada projeto em uma história rolável, com transições contínuas.",
        ],
        media: [{ seed: "atlas-ia", ratio: "21/9" }],
      },
      {
        id: "wireframes",
        layout: "media-grid",
        eyebrow: "Wireframes",
        heading: "O esqueleto da experiência",
        media: [
          { seed: "atlas-wire-1", ratio: "3/4" },
          { seed: "atlas-wire-2", ratio: "3/4" },
          { seed: "atlas-wire-3", ratio: "3/4" },
        ],
      },
      {
        id: "ui",
        layout: "wide-media",
        eyebrow: "UI",
        heading: "Tipografia monumental, imagens que respiram",
        body: [
          "Grande escala tipográfica, generoso espaço em branco e fotografia em tela cheia. A interface some para o conteúdo aparecer.",
        ],
        media: [{ seed: "atlas-ui", ratio: "16/9" }],
      },
      {
        id: "componentes",
        layout: "media-grid",
        eyebrow: "Componentes",
        heading: "Sistema enxuto e reutilizável",
        body: [
          "Um conjunto pequeno de componentes — hero, galeria, citação, índice — combinados de formas diferentes para cada projeto.",
        ],
        media: [
          { seed: "atlas-comp-1", ratio: "1/1" },
          { seed: "atlas-comp-2", ratio: "1/1" },
          { seed: "atlas-comp-3", ratio: "1/1" },
        ],
      },
      {
        id: "responsividade",
        layout: "split",
        eyebrow: "Responsividade",
        heading: "Da ultrawide ao bolso",
        body: [
          "Cada layout foi pensado em cinco breakpoints. A experiência de scroll suave se adapta sem perder fluidez no mobile.",
        ],
        media: [{ seed: "atlas-responsive", ratio: "4/3" }],
      },
      {
        id: "resultados",
        layout: "metrics",
        metrics: [
          { value: "99", label: "Performance no Lighthouse" },
          { value: "+3min", label: "Tempo médio na página" },
          { value: "+48%", label: "Contatos qualificados" },
        ],
      },
    ],
  },

  // 4 — Game -----------------------------------------------------------------
  {
    slug: "lumen",
    title: "Lumen",
    client: "Estúdio Aurora (conceito)",
    category: "Games",
    type: "game",
    year: 2023,
    summary:
      "Direção de interface e arte conceitual para um jogo de puzzle atmosférico sobre luz e memória.",
    intro:
      "Em Lumen, você guia uma centelha por um mundo apagado. A interface precisava desaparecer para a emoção brilhar.",
    role: ["Game UI/UX", "Concept", "Direção Visual"],
    services: ["Game Design", "HUD & Menus", "Concept Art", "Protótipos"],
    cover: { seed: "lumen-cover", ratio: "16/9", category: "Games" },
    blocks: [
      {
        id: "gameplay",
        layout: "split",
        eyebrow: "Gameplay",
        heading: "Luz como mecânica",
        body: [
          "O jogador manipula feixes de luz para revelar caminhos e memórias. A clareza visual da mecânica era inegociável.",
          "Cada puzzle ensina sem tutorial — pela própria linguagem visual.",
        ],
        media: [{ seed: "lumen-gameplay", ratio: "4/3" }],
      },
      {
        id: "narrativa",
        layout: "text",
        eyebrow: "Narrativa",
        heading: "Uma história contada sem palavras",
        body: [
          "Lumen evita texto. A narrativa emerge de ambientes, cor e som — o design de interface precisava respeitar esse silêncio.",
        ],
      },
      {
        id: "hud",
        layout: "wide-media",
        eyebrow: "HUD",
        heading: "Interface diegética e mínima",
        body: [
          "O HUD vive no mundo: a energia da centelha é a própria luz do personagem. Zero poluição na tela.",
        ],
        media: [{ seed: "lumen-hud", ratio: "21/9" }],
      },
      {
        id: "menus",
        layout: "media-grid",
        eyebrow: "Menus & Interface",
        heading: "Calma até nas pausas",
        body: [
          "Menus com transições suaves e tipografia delicada, mantendo a atmosfera mesmo fora da partida.",
        ],
        media: [
          { seed: "lumen-menu-1", ratio: "16/9" },
          { seed: "lumen-menu-2", ratio: "16/9" },
        ],
      },
      {
        id: "concept",
        layout: "media-grid",
        eyebrow: "Concept Art",
        heading: "Mundos de penumbra e brilho",
        media: [
          { seed: "lumen-concept-1", ratio: "4/3" },
          { seed: "lumen-concept-2", ratio: "4/3" },
          { seed: "lumen-concept-3", ratio: "4/3" },
          { seed: "lumen-concept-4", ratio: "4/3" },
        ],
      },
      {
        id: "prototipos",
        layout: "split",
        eyebrow: "Protótipos",
        heading: "Testar a sensação cedo",
        body: [
          "Protótipos jogáveis em poucas semanas validaram leitura, dificuldade e o \"feel\" da luz antes da produção.",
        ],
        media: [{ seed: "lumen-proto", ratio: "4/3" }],
      },
      {
        id: "resultados",
        layout: "quote",
        quote: {
          text: "A interface some e você esquece que está jogando — só sente.",
          author: "Playtester, sessão de concept",
        },
      },
    ],
  },

  // 5 — Design System --------------------------------------------------------
  {
    slug: "constelacao-ds",
    title: "Constelação DS",
    client: "Grupo Norte",
    category: "UI Design",
    type: "design-system",
    year: 2024,
    summary:
      "Design system multimarca que unificou cinco produtos sob uma única linguagem, sem perder identidade.",
    intro:
      "Cinco produtos, cinco times, um só DNA. Um sistema que acelera sem engessar.",
    role: ["Design System Lead"],
    services: ["Tokens", "Componentes", "Documentação", "Governança"],
    cover: { seed: "constelacao-cover", ratio: "16/9", category: "UI Design" },
    blocks: [
      {
        id: "contexto",
        layout: "split",
        eyebrow: "Contexto",
        heading: "Cinco produtos, zero consistência",
        body: [
          "Cada squad reinventava botões, cores e padrões. O resultado era retrabalho, inconsistência e uma marca diluída.",
          "A meta: um sistema compartilhado que respeitasse a identidade de cada produto.",
        ],
        media: [{ seed: "constelacao-context", ratio: "4/3" }],
      },
      {
        id: "principios",
        layout: "list",
        eyebrow: "Princípios",
        heading: "As regras do jogo",
        list: [
          { title: "Acessível por padrão", description: "Contraste e foco garantidos em cada componente." },
          { title: "Tema sem fork", description: "Multimarca via tokens, não via cópias de código." },
          { title: "Documentação viva", description: "Quem usa, encontra — e confia." },
        ],
      },
      {
        id: "fundacoes",
        layout: "media-grid",
        eyebrow: "Fundações · Tokens",
        heading: "A base invisível",
        body: [
          "Tokens semânticos de cor, espaçamento, tipografia e raio, com camadas de tema por marca e por modo (claro/escuro).",
        ],
        media: [
          { seed: "constelacao-token-1", ratio: "1/1" },
          { seed: "constelacao-token-2", ratio: "1/1" },
          { seed: "constelacao-token-3", ratio: "1/1" },
        ],
      },
      {
        id: "componentes",
        layout: "media-grid",
        eyebrow: "Componentes",
        heading: "Biblioteca que escala",
        body: [
          "Mais de 60 componentes acessíveis, do átomo ao padrão, com variantes e estados documentados.",
        ],
        media: [
          { seed: "constelacao-comp-1", ratio: "4/3" },
          { seed: "constelacao-comp-2", ratio: "4/3" },
          { seed: "constelacao-comp-3", ratio: "4/3" },
          { seed: "constelacao-comp-4", ratio: "4/3" },
        ],
      },
      {
        id: "documentacao",
        layout: "wide-media",
        eyebrow: "Documentação & Governança",
        heading: "Adoção começa na confiança",
        body: [
          "Portal de documentação com diretrizes de uso, do-and-don't e um processo claro de contribuição e versionamento.",
        ],
        media: [{ seed: "constelacao-docs", ratio: "21/9" }],
      },
      {
        id: "resultados",
        layout: "metrics",
        metrics: [
          { value: "-58%", label: "Tempo de entrega de telas" },
          { value: "5", label: "Produtos unificados" },
          { value: "100%", label: "Componentes acessíveis (WCAG AA)" },
        ],
      },
    ],
  },

  // 6 — Produto Digital ------------------------------------------------------
  {
    slug: "fluxo",
    title: "Fluxo",
    client: "Fluxo (startup)",
    category: "Identidade Visual",
    type: "produto",
    year: 2025,
    summary:
      "Do zero ao MVP: estratégia, marca e produto de uma ferramenta de foco para times remotos.",
    intro:
      "Uma startup com uma intuição e uma planilha. Saímos com marca, produto e os primeiros usuários apaixonados.",
    role: ["Product Designer", "Estratégia", "Branding"],
    services: ["Estratégia", "Discovery", "Branding", "UX/UI", "MVP"],
    cover: { seed: "fluxo-cover", ratio: "16/9", category: "Identidade Visual" },
    blocks: [
      {
        id: "contexto",
        layout: "split",
        eyebrow: "Contexto",
        heading: "Foco virou artigo de luxo",
        body: [
          "Times remotos afogados em notificações. A Fluxo queria devolver às pessoas blocos de trabalho profundo.",
          "Entrei como designer fundador de produto: da tese à primeira tela.",
        ],
        media: [{ seed: "fluxo-context", ratio: "4/3" }],
      },
      {
        id: "problema",
        layout: "text",
        eyebrow: "Problema",
        heading: "Ferramentas de foco que distraem",
        body: [
          "A ironia do mercado: apps de produtividade cheios de recursos que competem pela sua atenção. Apostamos no oposto — radical simplicidade.",
        ],
      },
      {
        id: "estrategia",
        layout: "list",
        eyebrow: "Estratégia & Descoberta",
        heading: "Apostas validadas cedo",
        list: [
          { title: "Sessões, não tarefas", description: "O produto organiza tempo, não listas infinitas." },
          { title: "Ritmo do time", description: "Foco individual visível e respeitado pelo grupo." },
          { title: "Silêncio como recurso", description: "Notificações pausam por padrão durante o foco." },
        ],
      },
      {
        id: "marca",
        layout: "wide-media",
        eyebrow: "Branding",
        heading: "Uma identidade que acalma",
        body: [
          "Marca minimalista, com uma paleta sóbria e uma marca-símbolo que evoca uma onda — o estado de fluxo.",
        ],
        media: [{ seed: "fluxo-brand", ratio: "21/9" }],
      },
      {
        id: "mvp",
        layout: "media-grid",
        eyebrow: "MVP",
        heading: "O essencial, bem feito",
        body: [
          "Lançamos com três telas: iniciar sessão, foco e revisão. Cada uma polida ao detalhe, porque o MVP também é a marca.",
        ],
        media: [
          { seed: "fluxo-mvp-1", ratio: "3/4" },
          { seed: "fluxo-mvp-2", ratio: "3/4" },
          { seed: "fluxo-mvp-3", ratio: "3/4" },
        ],
      },
      {
        id: "iteracoes",
        layout: "split",
        eyebrow: "Iterações",
        heading: "Aprender com os primeiros usuários",
        body: [
          "Ciclos semanais com 30 early adopters guiaram cada decisão. O onboarding encolheu de 6 para 2 passos.",
        ],
        media: [{ seed: "fluxo-iter", ratio: "4/3" }],
      },
      {
        id: "resultados",
        layout: "metrics",
        metrics: [
          { value: "0→1", label: "Produto lançado em 14 semanas" },
          { value: "1.200", label: "Usuários na lista de espera" },
          { value: "63%", label: "Retenção semanal no beta" },
        ],
      },
    ],
  },
];

/** Lookup helpers ----------------------------------------------------------- */
export const projectSlugs = projects.map((p) => p.slug);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string): Project {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
}

/**
 * Itens da galeria flutuante do hero. Inclui os covers dos cases e algumas
 * peças extras para enriquecer a composição (mais de 6 itens).
 */
export const galleryItems: GalleryItem[] = [
  ...projects.map((p) => ({
    seed: p.cover.seed,
    title: p.title,
    category: p.category,
    year: p.year,
    description: p.summary,
  })),
  {
    seed: "extra-identidade-aurora",
    title: "Aurora",
    category: "Identidade Visual",
    year: 2022,
    description: "Identidade fluida para um festival de arte digital.",
  },
  {
    seed: "extra-ui-painel",
    title: "Painel Vega",
    category: "UI Design",
    year: 2023,
    description: "Dashboard de dados em tempo real para logística.",
  },
  {
    seed: "extra-branding-horta",
    title: "Horta Urbana",
    category: "Branding",
    year: 2022,
    description: "Marca para uma rede de hortas comunitárias.",
  },
];
