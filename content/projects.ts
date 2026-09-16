import type { GalleryItem, Project } from "@/types";

/**
 * Estudos de caso. Conteúdo fictício, estruturado para soar real e para
 * facilitar a futura migração a um CMS. Cada projeto declara blocos que os
 * componentes de case renderizam de forma genérica.
 */
export const projects: Project[] = [
  // 1 — Olho Mágico (Porto Seguro) ------------------------------------------
  {
    slug: "olho-magico",
    title: "Olho Mágico",
    client: "Porto Seguro",
    category: "UX Design",
    type: "produto",
    year: 2021,
    featured: true,
    summary:
      "Plataforma da Porto Seguro para locação sem caução nem fiador. Um sistema para imobiliárias e um app para o inquilino.",
    intro:
      "Alugar sem caução e sem fiador, com garantias reais para o proprietário. Um produto que nasceu no Quinto Andar de inovação da Porto Seguro.",
    role: ["Product Designer", "UX Research", "UI Design"],
    services: ["Discovery", "UX Research", "Design System", "UI", "App"],
    cover: {
      seed: "olho-magico-cover",
      src: "/cases/olho-magico/cover.png",
      alt: "Olho Mágico, sistema administrativo para imobiliárias e app para inquilino",
      ratio: "16/9",
      fit: "cover",
      category: "UX Design",
    },
    card: {
      seed: "olho-magico-card",
      src: "/cases/olho-magico/cover-2.png",
      alt: "Família em casa usando o Olho Mágico, da Porto Seguro",
      fit: "cover",
      category: "UX Design",
    },
    color: "#5b16c4",
    blocks: [
      {
        id: "resumo",
        layout: "text",
        eyebrow: "Resumo",
        heading: "Locação sem caução e sem fiador",
        body: [
          "O Olho Mágico é a plataforma da Porto Seguro para destravar a locação de imóveis: o inquilino aluga sem caução e sem fiador, enquanto o proprietário ganha garantias reais, sustentadas pelo seguro fiança da Porto.",
          "Atuei no design do produto de ponta a ponta: da pesquisa com imobiliárias e inquilinos ao sistema administrativo web e ao aplicativo do inquilino.",
        ],
      },
      {
        id: "contexto",
        layout: "text",
        eyebrow: "Contexto",
        heading: "Direto do Quinto Andar",
        body: [
          "O projeto nasceu no Quinto Andar de inovação da Porto Seguro, uma frente competitiva para criar produtos digitais que conversam com o ecossistema da companhia.",
          "A Porto já tinha relacionamento com imobiliárias por meio do seguro fiança. Faltava um sistema robusto que transformasse essa relação em um fluxo digital, do contrato à cobrança e ao repasse.",
        ],
      },
      {
        id: "problema",
        layout: "text",
        eyebrow: "Problema",
        heading: "Garantia locatícia é fricção",
        body: [
          "Exigir caução ou fiador afasta bons inquilinos e trava negócios para a imobiliária. Do outro lado, o proprietário precisa de segurança contra inadimplência.",
          "Os processos viviam em planilhas, e-mails e PDFs: contratos, aditivos, cobranças e repasses sem rastreabilidade. O desafio era orquestrar tudo isso com a confiança que o nome Porto Seguro carrega.",
        ],
      },
      {
        id: "desafio",
        layout: "split",
        eyebrow: "Desafio",
        heading: "Como nós podemos?",
        body: [
          "Antes de qualquer tela, enquadramos o problema como declarações de \"Como Nós Podemos\", votadas com o time e com a Porto Seguro.",
          "Os temas vencedores mostraram onde doía: comunicação e interdependência de atividades, recadastramento de dados, dependência de empresas externas e relatórios.",
        ],
        media: [
          {
            seed: "olho-magico-ideacao-desafio",
            src: "/cases/olho-magico/ideacao-desafio.png",
            alt: "Frame do desafio no workshop: declarações Como Nós Podemos votadas",
            ratio: "16/9",
            fit: "contain",
          },
        ],
      },
      {
        id: "ideacao",
        layout: "wide-media",
        eyebrow: "Workshop de ideação",
        heading: "Do post-it à prioridade",
        body: [
          "Facilitei um workshop remoto com a Porto Seguro: desafio, ideação livre, agrupamento de ideias e uma matriz de priorização cruzando inovação com viabilidade técnica. Saímos com um backlog priorizado de verdade, não com uma parede de post-its.",
        ],
        media: [
          {
            seed: "olho-magico-ideacao-workshop",
            src: "/cases/olho-magico/ideacao-workshop.png",
            alt: "Board completo do workshop de ideação: desafio, ideação, agrupamento e matriz de priorização",
            ratio: "21/9",
            fit: "contain",
          },
        ],
      },
      {
        id: "artefatos",
        layout: "list",
        eyebrow: "Artefatos & métodos",
        heading: "Como chegamos lá",
        list: [
          { title: "Smart Sail Boat Workshop", description: "Dinâmica para mapear o que impulsiona e o que freia o produto." },
          { title: "Design Thinking", description: "Enquadramento do problema e ideação com o time multidisciplinar." },
          { title: "UX Research", description: "Entrevistas qualitativas com imobiliárias, proprietários e inquilinos." },
          { title: "Relatórios e insights", description: "Síntese da pesquisa em achados acionáveis para o produto." },
          { title: "Protótipos", description: "Baixa e alta fidelidade para validar fluxos antes de construir." },
          { title: "Testes de usabilidade", description: "Validação com usuários reais a cada iteração." },
        ],
      },
      {
        id: "marca",
        layout: "wide-media",
        eyebrow: "Marca",
        heading: "Alugar que muda tudo",
        body: [
          "A identidade traduz a promessa do produto: um roxo vibrante, paleta viva e a tipografia Axiforma, com endosso da Porto Seguro e do Zap. As orientações de uso garantiram consistência do app ao material comercial.",
        ],
        media: [
          {
            seed: "olho-magico-marca",
            src: "/cases/olho-magico/marca.png",
            alt: "Orientações de uso da marca Olho Mágico: logotipo, tagline, paleta de cores e tipografia",
            ratio: "16/9",
            fit: "cover",
          },
        ],
      },
      {
        id: "entregue",
        layout: "wide-media",
        eyebrow: "Entrega",
        heading: "O que foi entregue",
        body: [
          "Um produto completo para os dois lados da relação: um sistema administrativo para a imobiliária e um aplicativo para o inquilino, integrados ao ecossistema Porto Seguro.",
        ],
        media: [
          {
            seed: "olho-magico-entregue",
            src: "/cases/olho-magico/entregue.png",
            alt: "O que foi entregue: contrato digital, cobrança, repasses e app",
            ratio: "16/9",
            fit: "contain",
          },
        ],
      },
      {
        id: "entregaveis",
        layout: "list",
        eyebrow: "Escopo entregue",
        heading: "Quatro frentes",
        list: [
          { title: "Contrato digital", description: "Cláusulas e modificadores das condições iniciais anunciadas." },
          { title: "Cobrança dos inquilinos", description: "Fluxo de programação e cobrança com gestão da inadimplência." },
          { title: "Repasses automatizados", description: "Distribuição para proprietário, imobiliária e Porto Seguro." },
          { title: "Aplicativo do inquilino", description: "Boletos, dados do imóvel e do contrato na palma da mão." },
        ],
      },
      {
        id: "sistema",
        layout: "wide-media",
        eyebrow: "Sistema administrativo",
        heading: "O dia a dia da imobiliária",
        body: [
          "Gestão de usuários e permissões por setor, contratos com aditivos e atendimentos, repasses, consumo, relatórios e nota fiscal. Tudo em uma interface clara, com a identidade Olho Mágico.",
        ],
        media: [
          {
            seed: "olho-magico-sistema",
            src: "/cases/olho-magico/sistema.png",
            alt: "Telas do sistema: primeiro acesso, usuários, contratos e detalhe do contrato",
            ratio: "1/1",
            fit: "contain",
          },
        ],
      },
      {
        id: "app",
        layout: "wide-media",
        eyebrow: "App do inquilino",
        heading: "Tudo do aluguel no bolso",
        body: [
          "O aplicativo dá ao inquilino autonomia: segunda via de boleto, dados do imóvel e do contrato, canal direto com a imobiliária e histórico completo de pagamentos.",
        ],
        media: [
          {
            seed: "olho-magico-app",
            src: "/cases/olho-magico/app.png",
            alt: "Telas do app do inquilino: login, home e histórico de pagamentos",
            ratio: "4/3",
            fit: "contain",
          },
        ],
      },
      {
        id: "app-detalhe",
        layout: "media-grid",
        eyebrow: "App em detalhe",
        heading: "Clareza até no boleto",
        body: [
          "Três momentos que resumem o cuidado com o inquilino: primeiro acesso sem fricção, a home avisando com franqueza quando há pagamento em atraso e a fatura aberta item a item, do aluguel à conta de água.",
        ],
        media: [
          {
            seed: "olho-magico-app-login",
            src: "/cases/olho-magico/app-login.png",
            alt: "Tela de login do app Olho Mágico",
            ratio: "3/4",
            fit: "contain",
            label: "Primeiro acesso",
          },
          {
            seed: "olho-magico-app-home",
            src: "/cases/olho-magico/app-home.png",
            alt: "Home do app com aviso de pagamentos em atraso",
            ratio: "3/4",
            fit: "contain",
            label: "Gestão de inadimplência",
          },
          {
            seed: "olho-magico-app-pagamentos",
            src: "/cases/olho-magico/app-pagamentos.png",
            alt: "Histórico de pagamentos com fatura detalhada: aluguel, IPTU, condomínio e água",
            ratio: "3/4",
            fit: "contain",
            label: "Fatura transparente",
          },
        ],
      },
      {
        id: "testes-numeros",
        layout: "metrics",
        metrics: [
          { value: "5", label: "Imobiliárias no teste de usabilidade" },
          { value: "12", label: "Tarefas avaliadas por usuário" },
          { value: "7", label: "Tarefas com 100% de sucesso" },
        ],
      },
      {
        id: "testes",
        layout: "wide-media",
        eyebrow: "Testes de usabilidade",
        heading: "Testar, aprender, ajustar",
        body: [
          "Testamos o sistema com cinco imobiliárias reais, tarefa por tarefa, registrando sucesso, dúvida e falha com os comentários de cada usuário.",
          "Cada falha virou decisão de design: as notificações saíram de dentro dos cards e ganharam um ponto de configuração junto dos boletos, e o histórico de pagamentos ganhou um modal na versão desktop.",
        ],
        media: [
          {
            seed: "olho-magico-teste-usabilidade",
            src: "/cases/olho-magico/teste-usabilidade.png",
            alt: "Relatório do teste de usabilidade com imobiliárias: matriz de tarefas, comentários e soluções",
            ratio: "4/3",
            fit: "contain",
          },
        ],
      },
      {
        id: "ecossistema",
        layout: "quote",
        quote: {
          text: "Mais do que telas, o Olho Mágico conectou um processo cheio de fricção ao ecossistema de produtos da Porto Seguro, com a confiança que o aluguel precisava.",
        },
      },
      {
        id: "fechamento",
        layout: "wide-media",
        media: [
          {
            seed: "olho-magico-fechamento",
            src: "/cases/olho-magico/fechamento.png",
            alt: "Já espiou pelo Olho Mágico hoje?",
            ratio: "16/9",
            fit: "cover",
          },
        ],
      },
    ],
  },

  // 2 — Aura OS (Instituto Eldorado) [HMI] -----------------------------------
  {
    slug: "aura-os",
    title: "Aura OS",
    client: "Instituto Eldorado",
    category: "UI Design",
    type: "produto",
    year: 2026,
    featured: true,
    summary:
      "White label de infotainment automotivo para o Instituto Eldorado, feito para vestir apresentações técnicas e comerciais.",
    intro:
      "The car experience, reimagined. Uma interface de bordo white label, moderna e versátil, pronta para vestir cada demonstração do Eldorado.",
    role: ["HMI Designer", "UI Design", "Design Engineer", "3D"],
    services: ["White Label", "HMI", "UI Design", "3D / Blender", "Design System"],
    cover: {
      seed: "aura-os-cover",
      src: "/cases/aura-os/cover.png",
      alt: "Aura OS aplicado em um veículo: cluster e telas centrais",
      ratio: "16/9",
      fit: "cover",
      category: "UI Design",
    },
    card: {
      seed: "aura-os-card",
      src: "/cases/aura-os/home.png",
      alt: "Tela inicial do Aura OS",
      fit: "cover",
      category: "UI Design",
    },
    color: "#0d1730",
    blocks: [
      {
        id: "resumo",
        layout: "text",
        eyebrow: "Resumo",
        heading: "Uma experiência de bordo, repensada",
        body: [
          "O Aura OS é um sistema de infotainment white label que criei no Instituto Eldorado. A ideia era ter uma base sólida e bonita, capaz de vestir as muitas demonstrações técnicas e comerciais do instituto sem começar do zero a cada projeto.",
          "Da tela inicial ao painel de instrumentos, tudo foi desenhado para parecer um produto real, pronto para ir ao carro.",
        ],
      },
      {
        id: "premissas",
        layout: "list",
        eyebrow: "Premissas",
        heading: "O que guiou o projeto",
        list: [
          { title: "Versatilidade", description: "Uma white label capaz de dar suporte às diversas demandas de apresentações técnicas e comerciais do Eldorado." },
          { title: "Referências contemporâneas", description: "Investigar o que há de mais atual para garantir relevância estética e modernidade no mercado." },
          { title: "Repertório técnico", description: "Elevar a proposta de valor e a qualidade das soluções entregues ao cliente." },
          { title: "Prazo curto", description: "Entregar soluções de alta qualidade dentro de um tempo de execução bem limitado." },
        ],
      },
      {
        id: "inspiracao",
        layout: "text",
        eyebrow: "Direção",
        heading: "Olhando para o mercado chinês",
        body: [
          "A direção visual bebeu muito dos carros chineses, que dominaram as conversas sobre interface automotiva em 2026. Telas amplas, modo escuro elegante, o render do próprio veículo em destaque e uma linguagem gráfica limpa e tecnológica.",
        ],
      },
      {
        id: "processo",
        layout: "wide-media",
        eyebrow: "Processo",
        heading: "Do wireframe ao render 3D",
        body: [
          "O carro que aparece nas telas foi modelado e renderizado em 3D no Blender, do bloco cinza inicial até a versão iluminada que entra na interface.",
        ],
        media: [
          { seed: "aura-os-process", src: "/cases/aura-os/process-3d.png", alt: "Etapas da modelagem 3D do carro no Blender", ratio: "21/9", fit: "contain" },
        ],
      },
      {
        id: "home",
        layout: "wide-media",
        eyebrow: "Tela inicial",
        heading: "Tudo à mão, sem ruído",
        body: [
          "A home reúne mídia, navegação, clima e consumo em uma composição calma, com o render do veículo ancorando a cena.",
        ],
        media: [
          { seed: "aura-os-home", src: "/cases/aura-os/home.png", alt: "Tela inicial do Aura OS com player, navegação e consumo", ratio: "16/9", fit: "cover" },
        ],
      },
      {
        id: "drive",
        layout: "wide-media",
        eyebrow: "Drive Mode",
        heading: "Modos de condução",
        body: [
          "Seleção de modos de direção como Eco e Sport, com leitura imediata e o carro respondendo no centro da tela.",
        ],
        media: [
          { seed: "aura-os-drive", src: "/cases/aura-os/drive.png", alt: "Tela de seleção de modo de condução do Aura OS", ratio: "16/9", fit: "cover" },
        ],
      },
      {
        id: "cluster",
        layout: "wide-media",
        eyebrow: "Cluster",
        heading: "Painel de instrumentos",
        body: [
          "O cluster traz velocímetro, marcha, autonomia e energia em uma leitura limpa, pensada para ser entendida num relance.",
        ],
        media: [
          { seed: "aura-os-cluster", src: "/cases/aura-os/cluster.png", alt: "Painel de instrumentos do Aura OS", ratio: "21/9", fit: "contain" },
        ],
      },
      {
        id: "veiculo",
        layout: "wide-media",
        eyebrow: "Controle do veículo",
        heading: "Exterior e interior",
        body: [
          "Atalhos para portas, carregamento, rodas e clima, sempre com o carro em 3D como referência espacial.",
        ],
        media: [
          { seed: "aura-os-car", src: "/cases/aura-os/car.png", alt: "Tela de controle do veículo, exterior e interior", ratio: "16/9", fit: "cover" },
        ],
      },
      {
        id: "fecho",
        layout: "quote",
        quote: {
          text: "Uma base que parece produto de verdade: bonita o bastante para vender a ideia e flexível o suficiente para virar muitas demonstrações.",
        },
      },
    ],
  },

  // 3 — SamMANAGER (Samtronic) [Saúde/HMI] ------------------------------------
  {
    slug: "sammanager",
    // Com espaço: sem ele o nome não tem onde quebrar e vaza da tela no
    // título do case. Nos textos corridos a grafia original é mantida.
    title: "Sam MANAGER",
    client: "Samtronic",
    category: "UX Design",
    type: "produto",
    year: 2020,
    featured: true,
    summary:
      "Central de monitoramento de bombas de infusão para gerenciar até 25 leitos, à distância e em tempo real.",
    intro:
      "Como um enfermeiro cuida de 25 leitos ao mesmo tempo sem perder o alarme que importa? O SamMANAGER coloca a UTI inteira em uma tela.",
    role: ["UX/UI Designer", "Concepção de telas", "Design de ícones"],
    services: ["UX Research", "UI Design", "Design System", "Ícones"],
    cover: {
      seed: "sammanager-cover",
      src: "/cases/sammanager/cover.png",
      alt: "Enfermeira monitorando 25 leitos no dashboard do SamMANAGER em um tablet",
      ratio: "16/9",
      fit: "cover",
      category: "UX Design",
    },
    card: {
      seed: "sammanager-card",
      src: "/cases/sammanager/cover.png",
      alt: "Dashboard do SamMANAGER em um tablet",
      fit: "cover",
      category: "UX Design",
    },
    color: "#0f7a3c",
    blocks: [
      {
        id: "resumo",
        layout: "text",
        eyebrow: "Resumo",
        heading: "A UTI inteira em uma tela",
        body: [
          "O SamMANAGER é a central de monitoramento da Samtronic para as bombas de infusão. À distância e em tempo real, a equipe acompanha a terapia de cada paciente, antecipa o fim da infusão e silencia alarmes sem sair do posto.",
          "Participei da concepção das telas, buscando formas de visualização que deixassem os enfermeiros de olho nas bombas sem se afogar em informação.",
        ],
      },
      {
        id: "contexto",
        layout: "text",
        eyebrow: "Contexto",
        heading: "Cada segundo conta",
        body: [
          "Numa UTI, uma bomba com bateria crítica ou terapia interrompida é urgência. Mas os alarmes tocam nos equipamentos, longe de quem precisa agir, e um leito pode ter até 8 bombas rodando ao mesmo tempo.",
          "O desafio era dar à equipe uma visão única, priorizada e confiável, que funcionasse tanto na correria de 25 leitos quanto no detalhe de uma única bomba.",
        ],
      },
      {
        id: "pesquisa",
        layout: "text",
        eyebrow: "Pesquisa",
        heading: "Ouvindo quem está na ponta",
        body: [
          "Aplicamos questionários em diversos setores hospitalares, com criticidades e rotinas diferentes, para entender onde estavam as dores no manejo das bombas.",
          "A pesquisa guiou o que a central deveria mostrar de fato: os dados e recursos que os profissionais mais queriam ver, e não os que eram fáceis de exibir.",
        ],
      },
      {
        id: "leitos",
        layout: "wide-media",
        eyebrow: "Visualização por leitos",
        heading: "Um card por paciente",
        body: [
          "Cada card é um leito: nome, sexo, idade e o progresso de cada droga em infusão, com até 8 bombas por paciente. Quando algo foge do esperado, o card inteiro muda de cor (vermelho para alta prioridade, amarelo para média) e mostra o alarme com um ícone claro.",
        ],
        media: [
          {
            seed: "sammanager-leitos",
            src: "/cases/sammanager/dashboard-leitos.png",
            alt: "Dashboard por leitos: grade de 25 pacientes com barras de infusão e alarmes",
            ratio: "16/9",
            fit: "cover",
          },
        ],
      },
      {
        id: "adaptativo",
        layout: "split",
        eyebrow: "Layout adaptativo",
        heading: "Quanto menos leitos, mais detalhe",
        body: [
          "O dashboard reconhece automaticamente quantos pacientes estão ativos e reorganiza a grade: 6, 9, 16, 20 ou 25 leitos. Com menos leitos, os cards crescem e mostram mais informação; leitos vazios viram cards vazios.",
          "Assim a mesma tela serve tanto para uma UTI lotada quanto para um setor com poucos pacientes, sempre legível a distância.",
        ],
        media: [
          {
            seed: "sammanager-6leitos",
            src: "/cases/sammanager/dashboard-6leitos.png",
            alt: "Dashboard com 6 leitos: cards maiores e mais detalhados",
            ratio: "16/9",
            fit: "cover",
          },
        ],
      },
      {
        id: "numeros",
        layout: "metrics",
        metrics: [
          { value: "25", label: "Leitos monitorados em uma tela" },
          { value: "8", label: "Bombas por leito" },
          { value: "2", label: "Modos: por leitos e por equipamentos" },
        ],
      },
      {
        id: "equipamentos",
        layout: "wide-media",
        eyebrow: "Por equipamentos + Light mode",
        heading: "Priorize as bombas que pedem atenção",
        body: [
          "No modo por equipamentos, a coluna central destaca as bombas mais críticas e a lateral lista até 80 bombas, ordenadas por prioridade (vermelho, amarelo, verde, cinza). Desenhamos também um modo claro (light) para a equipe escolher o que funciona melhor no ambiente.",
        ],
        media: [
          {
            seed: "sammanager-equipamentos",
            src: "/cases/sammanager/light-equipamentos.png",
            alt: "Modo claro por equipamentos com lista lateral de bombas ordenada por prioridade",
            ratio: "16/9",
            fit: "cover",
          },
        ],
      },
      {
        id: "detalhe",
        layout: "wide-media",
        eyebrow: "Detalhe do paciente",
        heading: "Do panorama à bomba",
        body: [
          "Um toque em qualquer card abre o paciente: todas as bombas ativas no leito e os parâmetros da bomba selecionada (modo de vazão, KVO, oclusão, volume). É daqui que o alarme é resolvido, com três ações claras: silenciar, reconhecer e reiniciar.",
        ],
        media: [
          {
            seed: "sammanager-detalhe",
            src: "/cases/sammanager/paciente-detalhe.png",
            alt: "Tela de detalhe do paciente com bombas ativas, parâmetros e ações de alarme",
            ratio: "16/9",
            fit: "cover",
          },
        ],
      },
      {
        id: "acoes",
        layout: "list",
        eyebrow: "Alarmes",
        heading: "Três ações, sem ambiguidade",
        list: [
          { title: "Silenciar", description: "Pausa temporária do alarme, confirmada pela bomba antes de valer." },
          { title: "Reconhecer", description: "Desativa o alarme por completo depois da confirmação." },
          { title: "Reiniciar", description: "Reseta todos os alarmes do leito de uma vez." },
        ],
      },
      {
        id: "icones",
        layout: "icons",
        eyebrow: "Ícones",
        heading: "Uma linguagem visual própria",
        body: [
          "Desenhei toda a biblioteca de ícones do produto: alarmes, tipos de infusão, estados das bombas e ações. Traços consistentes que precisam ser lidos num relance, mesmo à distância.",
        ],
        icons: [
          "/cases/sammanager/icones/Ativo 35.svg",
          "/cases/sammanager/icones/Ativo 36.svg",
          "/cases/sammanager/icones/Ativo 37.svg",
          "/cases/sammanager/icones/Ativo 38.svg",
          "/cases/sammanager/icones/Ativo 39.svg",
          "/cases/sammanager/icones/Ativo 40.svg",
          "/cases/sammanager/icones/Ativo 41.svg",
          "/cases/sammanager/icones/Ativo 42.svg",
          "/cases/sammanager/icones/Ativo 43.svg",
          "/cases/sammanager/icones/Ativo 44.svg",
          "/cases/sammanager/icones/Ativo 45.svg",
          "/cases/sammanager/icones/Ativo 46.svg",
          "/cases/sammanager/icones/Ativo 47.svg",
          "/cases/sammanager/icones/Ativo 48.svg",
          "/cases/sammanager/icones/Ativo 49.svg",
          "/cases/sammanager/icones/Ativo 50.svg",
          "/cases/sammanager/icones/Ativo 51.svg",
          "/cases/sammanager/icones/Ativo 52.svg",
          "/cases/sammanager/icones/Ativo 53.svg",
          "/cases/sammanager/icones/Ativo 54.svg",
        ],
      },
      {
        id: "sistema",
        layout: "wide-media",
        eyebrow: "Sistema de gestão",
        heading: "Cadastro e gestão no computador",
        body: [
          "Além da central, o SamMANAGER tem um sistema web para cadastrar bombas e usuários, com grupos de acesso, relatórios e engenharia clínica. Um cadastro de bomba amarra identificação, IP, setor, ala e leito, o que faz o leito certo aparecer no lugar certo do dashboard.",
        ],
        media: [
          {
            seed: "sammanager-sistema",
            src: "/cases/sammanager/sistema-mock.png",
            alt: "Sistema web do SamMANAGER: gestão de usuários e grupos de acesso",
            ratio: "16/9",
            fit: "cover",
          },
        ],
      },
      {
        id: "fecho",
        layout: "quote",
        quote: {
          text: "Monitorar 25 leitos não pode ser um quebra-cabeça. O SamMANAGER transforma um mar de bombas em prioridades claras, para a equipe agir no que importa.",
        },
      },
    ],
  },

  // 4 — Assis International Holding [Website institucional] -------------------
  {
    slug: "assis-holding",
    title: "Assis Holding",
    client: "Assis International Holding",
    category: "Websites",
    type: "website",
    year: 2016,
    featured: true,
    summary:
      "Site institucional de uma holding com negócios em vários setores: história, estratégia, governança e equipe em uma navegação só.",
    intro:
      "Uma holding com muitas frentes tem muito o que contar. O desafio era dizer tudo sem cansar quem chega.",
    role: ["UX/UI Designer", "Visual Design", "Desenvolvimento"],
    services: ["Arquitetura de Informação", "UX/UI Design", "Visual Design", "Front-end"],
    cover: {
      seed: "assis-cover",
      src: "/cases/assis/cover.png",
      alt: "Home da Assis International Holding em um notebook, com a chamada “Nós olhamos para além do aqui e agora”",
      ratio: "16/9",
      fit: "cover",
      category: "Websites",
    },
    card: {
      seed: "assis-card",
      src: "/cases/assis/cover.png",
      alt: "Site institucional da Assis International Holding em um notebook",
      fit: "cover",
      category: "Websites",
    },
    color: "#001e62",
    blocks: [
      {
        id: "resumo",
        layout: "text",
        eyebrow: "Resumo",
        heading: "A holding inteira em um site",
        body: [
          "A Assis International Holding investe, aconselha e presta serviço para as empresas do próprio grupo, em setores bem diferentes entre si. O site precisava traduzir essa dimensão de forma clara, sofisticada e objetiva.",
          "Atuei do conteúdo à entrega: organizei a informação, desenhei a interface e implementei o site responsivo.",
        ],
      },
      {
        id: "contexto",
        layout: "text",
        eyebrow: "Contexto",
        heading: "Muita informação para caber sem cansar",
        body: [
          "História, estratégia, valores, áreas de atuação, equipe, governança, notícias e contato. Tudo precisava estar no site sem transformar a visita em uma leitura longa demais.",
          "Por isso o ponto de partida não foi o layout, foi o conteúdo: entender o que existia, o que era essencial e como cada informação se relacionava com as outras dentro da experiência.",
        ],
      },
      {
        id: "numeros",
        layout: "metrics",
        metrics: [
          { value: "7", label: "Áreas de conteúdo na navegação" },
          { value: "10", label: "Páginas institucionais além da home" },
          { value: "3", label: "Idiomas: português, inglês e espanhol" },
        ],
      },
      {
        id: "arquitetura",
        layout: "list",
        eyebrow: "Arquitetura da informação",
        heading: "Sete caminhos, sem labirinto",
        list: [
          {
            title: "Sobre",
            description:
              "Quem somos, estratégia e filosofia, cultura e valores e a mensagem do fundador.",
          },
          { title: "Área de Atuação", description: "Os setores em que o grupo investe e opera." },
          { title: "Equipe", description: "As pessoas por trás das decisões do grupo." },
          {
            title: "Governança Corporativa",
            description: "Como a holding se estrutura e presta contas.",
          },
          { title: "News", description: "Notícias e movimentos do grupo." },
          { title: "Carreira", description: "Porta de entrada para quem quer trabalhar no grupo." },
          { title: "Contato", description: "Canais diretos e o endereço da sede, em São Paulo." },
        ],
      },
      {
        id: "home",
        layout: "text",
        eyebrow: "Home",
        heading: "A home como síntese",
        body: [
          "A home apresenta o posicionamento do grupo, destaca o que é relevante e conduz o visitante para as informações mais específicas. Quem chega entende o que é a holding antes de decidir para onde ir.",
          "A chamada de abertura — “Nós olhamos para além do aqui e agora” — dá o tom em uma frase e uma imagem: uma empresa que pensa em longo prazo.",
        ],
      },
      {
        id: "paginas",
        layout: "media-grid",
        eyebrow: "Consistência",
        heading: "A mesma lógica em todas as páginas",
        body: [
          "Cada página interna abre com uma imagem de destaque e organiza o texto em blocos curtos, com apoio visual à direita. Tipos de conteúdo diferentes, mesma estrutura de leitura — a identidade se mantém do começo ao fim da navegação.",
        ],
        media: [
          {
            seed: "assis-home-full",
            src: "/cases/assis/assisholding_com.png",
            alt: "Página inicial completa do site da Assis International Holding",
            label: "Home",
            ratio: "3/4",
            fit: "contain",
          },
          {
            seed: "assis-estrategia-full",
            src: "/cases/assis/estrategiaefilosofia.png",
            alt: "Página interna de Estratégia e Filosofia, com blocos de texto e imagens de apoio",
            label: "Estratégia e Filosofia",
            ratio: "3/4",
            fit: "contain",
          },
        ],
      },
      {
        id: "linguagem",
        layout: "split",
        eyebrow: "Linguagem visual",
        heading: "Corporativa, sem excesso",
        body: [
          "A paleta saiu da própria marca: o azul-marinho como base institucional e o dourado reservado para detalhes — filetes, títulos de seção e destaques.",
          "O resto é tipografia, espaçamento e hierarquia. Nenhum elemento decorativo disputa atenção com o conteúdo: a credibilidade vem da ordem, não do enfeite.",
        ],
        media: [
          {
            seed: "assis-marca",
            src: "/cases/assis/logotipo-plate.png",
            alt: "Logotipo da Assis International Holding em azul-marinho e dourado",
            ratio: "21/9",
            fit: "contain",
          },
        ],
      },
      {
        id: "implementacao",
        layout: "text",
        eyebrow: "Design e implementação",
        heading: "Do layout ao site no ar",
        body: [
          "Além da concepção da interface, fiz a implementação. Desenhar e construir no mesmo projeto acelerou as decisões: dava para testar uma hierarquia direto no navegador em vez de supor.",
          "Cada bloco foi pensado para formatos de conteúdo e resoluções diferentes, preservando no responsivo a hierarquia criada no design.",
        ],
      },
      {
        id: "fecho",
        layout: "quote",
        quote: {
          text: "Um site institucional não precisa mostrar tudo de uma vez. Precisa deixar claro onde está cada coisa.",
        },
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
 * Itens da galeria flutuante do hero: os covers dos cases.
 */
export const galleryItems: GalleryItem[] = projects.map((p) => ({
  seed: p.cover.seed,
  title: p.title,
  category: p.category,
  year: p.year,
  description: p.summary,
  src: p.card?.src,
}));
