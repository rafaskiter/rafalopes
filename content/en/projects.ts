import type { GalleryItem, Project } from "@/types";

/**
 * English case studies. Mirrors content/projects.ts one-to-one: same slugs,
 * images, layouts and metrics — only the prose changes. Keep both in sync
 * when a case is edited.
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
      "Porto Seguro's platform for renting without a deposit or a guarantor. A system for agencies and an app for tenants.",
    intro:
      "Renting with no deposit and no guarantor, with real guarantees for the landlord. A product born in Porto Seguro's innovation lab.",
    role: ["Product Designer", "UX Research", "UI Design"],
    services: ["Discovery", "UX Research", "Design System", "UI", "App"],
    cover: {
      seed: "olho-magico-cover",
      src: "/cases/olho-magico/cover.png",
      alt: "Olho Mágico, an admin system for rental agencies and an app for tenants",
      ratio: "16/9",
      fit: "cover",
      category: "UX Design",
    },
    card: {
      seed: "olho-magico-card",
      src: "/cases/olho-magico/cover-2.png",
      alt: "A family at home using Olho Mágico, by Porto Seguro",
      fit: "cover",
      category: "UX Design",
    },
    color: "#5b16c4",
    blocks: [
      {
        id: "resumo",
        layout: "text",
        eyebrow: "Summary",
        heading: "Renting without a deposit or a guarantor",
        body: [
          "Olho Mágico is Porto Seguro's platform for unlocking property rentals: tenants rent with no deposit and no guarantor, while landlords get real guarantees, backed by Porto's rental insurance.",
          "I worked on the product end to end: from research with agencies and tenants to the web admin system and the tenant app.",
        ],
      },
      {
        id: "contexto",
        layout: "text",
        eyebrow: "Context",
        heading: "Straight out of the innovation lab",
        body: [
          "The project was born in Porto Seguro's innovation lab, a competitive track for creating digital products that talk to the company's wider ecosystem.",
          "Porto already had relationships with rental agencies through its rental insurance. What was missing was a robust system to turn that relationship into a digital flow, from contract to billing to payouts.",
        ],
      },
      {
        id: "problema",
        layout: "text",
        eyebrow: "Problem",
        heading: "Rental guarantees are friction",
        body: [
          "Requiring a deposit or a guarantor drives away good tenants and stalls deals for the agency. On the other side, the landlord needs protection against missed payments.",
          "The processes lived in spreadsheets, emails and PDFs: contracts, amendments, billing and payouts with no traceability. The challenge was orchestrating all of it with the trust the Porto Seguro name carries.",
        ],
      },
      {
        id: "desafio",
        layout: "split",
        eyebrow: "Challenge",
        heading: "How might we?",
        body: [
          'Before any screen, we framed the problem as "How Might We" statements, voted on with the team and with Porto Seguro.',
          "The winning themes showed where it hurt: communication and interdependent tasks, re-entering data, reliance on outside companies, and reporting.",
        ],
        media: [
          {
            seed: "olho-magico-ideacao-desafio",
            src: "/cases/olho-magico/ideacao-desafio.png",
            alt: "Workshop challenge frame: How Might We statements after voting",
            ratio: "16/9",
            fit: "contain",
          },
        ],
      },
      {
        id: "ideacao",
        layout: "wide-media",
        eyebrow: "Ideation workshop",
        heading: "From sticky note to priority",
        body: [
          "I facilitated a remote workshop with Porto Seguro: challenge framing, open ideation, clustering, and a prioritisation matrix crossing innovation with technical feasibility. We left with a genuinely prioritised backlog, not a wall of sticky notes.",
        ],
        media: [
          {
            seed: "olho-magico-ideacao-workshop",
            src: "/cases/olho-magico/ideacao-workshop.png",
            alt: "Full ideation workshop board: challenge, ideation, clustering and prioritisation matrix",
            ratio: "21/9",
            fit: "contain",
          },
        ],
      },
      {
        id: "artefatos",
        layout: "list",
        eyebrow: "Artefacts & methods",
        heading: "How we got there",
        list: [
          {
            title: "Smart Sail Boat Workshop",
            description: "An exercise to map what propels the product and what holds it back.",
          },
          {
            title: "Design Thinking",
            description: "Problem framing and ideation with the cross-functional team.",
          },
          {
            title: "UX Research",
            description: "Qualitative interviews with agencies, landlords and tenants.",
          },
          {
            title: "Reports and insights",
            description: "Research synthesised into findings the product could act on.",
          },
          {
            title: "Prototypes",
            description: "Low and high fidelity, to validate flows before building.",
          },
          {
            title: "Usability testing",
            description: "Validation with real users at every iteration.",
          },
        ],
      },
      {
        id: "marca",
        layout: "wide-media",
        eyebrow: "Brand",
        heading: "Renting that changes everything",
        body: [
          "The identity translates the product's promise: a vivid purple, a lively palette and the Axiforma typeface, endorsed by Porto Seguro and Zap. Usage guidelines kept it consistent from the app to sales material.",
        ],
        media: [
          {
            seed: "olho-magico-marca",
            src: "/cases/olho-magico/marca.png",
            alt: "Olho Mágico brand guidelines: logo, tagline, colour palette and typography",
            ratio: "16/9",
            fit: "cover",
          },
        ],
      },
      {
        id: "entregue",
        layout: "wide-media",
        eyebrow: "Delivery",
        heading: "What shipped",
        body: [
          "A complete product for both sides of the relationship: an admin system for the agency and an app for the tenant, both wired into the Porto Seguro ecosystem.",
        ],
        media: [
          {
            seed: "olho-magico-entregue",
            src: "/cases/olho-magico/entregue.png",
            alt: "What shipped: digital contract, billing, payouts and app",
            ratio: "16/9",
            fit: "contain",
          },
        ],
      },
      {
        id: "entregaveis",
        layout: "list",
        eyebrow: "Scope delivered",
        heading: "Four fronts",
        list: [
          {
            title: "Digital contract",
            description: "Clauses and modifiers for the initially advertised terms.",
          },
          {
            title: "Tenant billing",
            description: "Scheduling and billing flow, with handling for missed payments.",
          },
          {
            title: "Automated payouts",
            description: "Distribution across landlord, agency and Porto Seguro.",
          },
          {
            title: "Tenant app",
            description: "Invoices, property and contract details in the palm of the hand.",
          },
        ],
      },
      {
        id: "sistema",
        layout: "wide-media",
        eyebrow: "Admin system",
        heading: "The agency's day to day",
        body: [
          "User and permission management by department, contracts with amendments and support tickets, payouts, usage, reports and invoicing. All in a clear interface carrying the Olho Mágico identity.",
        ],
        media: [
          {
            seed: "olho-magico-sistema",
            src: "/cases/olho-magico/sistema.png",
            alt: "System screens: first access, users, contracts and contract detail",
            ratio: "1/1",
            fit: "contain",
          },
        ],
      },
      {
        id: "app",
        layout: "wide-media",
        eyebrow: "Tenant app",
        heading: "The whole tenancy in your pocket",
        body: [
          "The app gives tenants autonomy: duplicate invoices, property and contract details, a direct line to the agency, and a full payment history.",
        ],
        media: [
          {
            seed: "olho-magico-app",
            src: "/cases/olho-magico/app.png",
            alt: "Tenant app screens: login, home and payment history",
            ratio: "4/3",
            fit: "contain",
          },
        ],
      },
      {
        id: "app-detalhe",
        layout: "media-grid",
        eyebrow: "App in detail",
        heading: "Clarity, down to the invoice",
        body: [
          "Three moments that sum up the care for the tenant: a frictionless first access, a home screen that says plainly when a payment is overdue, and the invoice broken out line by line, from rent to the water bill.",
        ],
        media: [
          {
            seed: "olho-magico-app-login",
            src: "/cases/olho-magico/app-login.png",
            alt: "Olho Mágico app login screen",
            ratio: "3/4",
            fit: "contain",
            label: "First access",
          },
          {
            seed: "olho-magico-app-home",
            src: "/cases/olho-magico/app-home.png",
            alt: "App home screen flagging overdue payments",
            ratio: "3/4",
            fit: "contain",
            label: "Overdue handling",
          },
          {
            seed: "olho-magico-app-pagamentos",
            src: "/cases/olho-magico/app-pagamentos.png",
            alt: "Payment history with an itemised invoice: rent, property tax, service charge and water",
            ratio: "3/4",
            fit: "contain",
            label: "Transparent invoice",
          },
        ],
      },
      {
        id: "testes-numeros",
        layout: "metrics",
        metrics: [
          { value: "5", label: "Agencies in the usability test" },
          { value: "12", label: "Tasks assessed per user" },
          { value: "7", label: "Tasks with a 100% success rate" },
        ],
      },
      {
        id: "testes",
        layout: "wide-media",
        eyebrow: "Usability testing",
        heading: "Test, learn, adjust",
        body: [
          "We tested the system with five real rental agencies, task by task, recording success, hesitation and failure alongside each user's comments.",
          "Every failure became a design decision: notifications moved out of the cards and got a settings entry next to the invoices, and the payment history gained a modal on desktop.",
        ],
        media: [
          {
            seed: "olho-magico-teste-usabilidade",
            src: "/cases/olho-magico/teste-usabilidade.png",
            alt: "Usability test report with agencies: task matrix, comments and solutions",
            ratio: "4/3",
            fit: "contain",
          },
        ],
      },
      {
        id: "ecossistema",
        layout: "quote",
        quote: {
          text: "More than screens, Olho Mágico connected a friction-heavy process to Porto Seguro's product ecosystem, with the trust renting needed.",
        },
      },
      {
        id: "fechamento",
        layout: "wide-media",
        media: [
          {
            seed: "olho-magico-fechamento",
            src: "/cases/olho-magico/fechamento.png",
            alt: "Have you looked through the Olho Mágico today?",
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
      "A white-label automotive infotainment system for Instituto Eldorado, built to dress up technical and commercial demos.",
    intro:
      "The car experience, reimagined. A modern, versatile white-label in-car interface, ready to dress every Eldorado demo.",
    role: ["HMI Designer", "UI Design", "Design Engineer", "3D"],
    services: ["White Label", "HMI", "UI Design", "3D / Blender", "Design System"],
    cover: {
      seed: "aura-os-cover",
      src: "/cases/aura-os/cover.png",
      alt: "Aura OS running in a vehicle: cluster and centre screens",
      ratio: "16/9",
      fit: "cover",
      category: "UI Design",
    },
    card: {
      seed: "aura-os-card",
      src: "/cases/aura-os/home.png",
      alt: "Aura OS home screen",
      fit: "cover",
      category: "UI Design",
    },
    color: "#0d1730",
    blocks: [
      {
        id: "resumo",
        layout: "text",
        eyebrow: "Summary",
        heading: "An in-car experience, rethought",
        body: [
          "Aura OS is a white-label infotainment system I created at Instituto Eldorado. The idea was to have a solid, good-looking base that could dress the institute's many technical and commercial demos without starting from scratch each time.",
          "From the home screen to the instrument cluster, everything was designed to look like a real product, ready to go into a car.",
        ],
      },
      {
        id: "premissas",
        layout: "list",
        eyebrow: "Principles",
        heading: "What guided the project",
        list: [
          {
            title: "Versatility",
            description:
              "A white label able to support Eldorado's range of technical and commercial presentations.",
          },
          {
            title: "Contemporary references",
            description:
              "Studying the current state of the art to stay aesthetically relevant in the market.",
          },
          {
            title: "Technical range",
            description:
              "Raising the value proposition and the quality of what reaches the client.",
          },
          {
            title: "Tight deadline",
            description: "Delivering high-quality work inside a very limited window.",
          },
        ],
      },
      {
        id: "inspiracao",
        layout: "text",
        eyebrow: "Direction",
        heading: "Looking to the Chinese market",
        body: [
          "The visual direction drew heavily on Chinese cars, which dominated the automotive interface conversation in 2026. Wide screens, an elegant dark mode, the vehicle's own render taking centre stage, and a clean, technical graphic language.",
        ],
      },
      {
        id: "processo",
        layout: "wide-media",
        eyebrow: "Process",
        heading: "From wireframe to 3D render",
        body: [
          "The car on the screens was modelled and rendered in 3D in Blender, from the initial grey block to the lit version that goes into the interface.",
        ],
        media: [
          {
            seed: "aura-os-process",
            src: "/cases/aura-os/process-3d.png",
            alt: "Stages of modelling the car in 3D in Blender",
            ratio: "21/9",
            fit: "contain",
          },
        ],
      },
      {
        id: "home",
        layout: "wide-media",
        eyebrow: "Home screen",
        heading: "Everything at hand, without the noise",
        body: [
          "The home screen brings media, navigation, climate and consumption into one calm composition, with the vehicle render anchoring the scene.",
        ],
        media: [
          {
            seed: "aura-os-home",
            src: "/cases/aura-os/home.png",
            alt: "Aura OS home screen with player, navigation and consumption",
            ratio: "16/9",
            fit: "cover",
          },
        ],
      },
      {
        id: "drive",
        layout: "wide-media",
        eyebrow: "Drive Mode",
        heading: "Driving modes",
        body: [
          "Selecting driving modes such as Eco and Sport, read at a glance, with the car responding at the centre of the screen.",
        ],
        media: [
          {
            seed: "aura-os-drive",
            src: "/cases/aura-os/drive.png",
            alt: "Aura OS driving mode selection screen",
            ratio: "16/9",
            fit: "cover",
          },
        ],
      },
      {
        id: "cluster",
        layout: "wide-media",
        eyebrow: "Cluster",
        heading: "Instrument panel",
        body: [
          "The cluster shows speed, gear, range and energy in a clean read, designed to be understood in a glance.",
        ],
        media: [
          {
            seed: "aura-os-cluster",
            src: "/cases/aura-os/cluster.png",
            alt: "Aura OS instrument cluster",
            ratio: "21/9",
            fit: "contain",
          },
        ],
      },
      {
        id: "veiculo",
        layout: "wide-media",
        eyebrow: "Vehicle control",
        heading: "Exterior and interior",
        body: [
          "Shortcuts for doors, charging, wheels and climate, always with the 3D car as a spatial reference.",
        ],
        media: [
          {
            seed: "aura-os-car",
            src: "/cases/aura-os/car.png",
            alt: "Vehicle control screen, exterior and interior",
            ratio: "16/9",
            fit: "cover",
          },
        ],
      },
      {
        id: "fecho",
        layout: "quote",
        quote: {
          text: "A base that looks like a real product: handsome enough to sell the idea, flexible enough to become many demos.",
        },
      },
    ],
  },

  // 3 — Sam MANAGER (Samtronic) [Health/HMI] ---------------------------------
  {
    slug: "sammanager",
    title: "Sam MANAGER",
    client: "Samtronic",
    category: "UX Design",
    type: "produto",
    year: 2020,
    featured: true,
    summary:
      "A monitoring hub for infusion pumps, managing up to 25 beds remotely and in real time.",
    intro:
      "How does one nurse watch 25 beds at once without missing the alarm that matters? Sam MANAGER puts the whole ICU on a single screen.",
    role: ["UX/UI Designer", "Screen design", "Icon design"],
    services: ["UX Research", "UI Design", "Design System", "Icons"],
    cover: {
      seed: "sammanager-cover",
      src: "/cases/sammanager/cover.png",
      alt: "A nurse monitoring 25 beds on the Sam MANAGER dashboard on a tablet",
      ratio: "16/9",
      fit: "cover",
      category: "UX Design",
    },
    card: {
      seed: "sammanager-card",
      src: "/cases/sammanager/cover.png",
      alt: "The Sam MANAGER dashboard on a tablet",
      fit: "cover",
      category: "UX Design",
    },
    color: "#0f7a3c",
    blocks: [
      {
        id: "resumo",
        layout: "text",
        eyebrow: "Summary",
        heading: "The whole ICU on one screen",
        body: [
          "Sam MANAGER is Samtronic's monitoring hub for infusion pumps. Remotely and in real time, the team follows each patient's therapy, anticipates the end of an infusion and silences alarms without leaving the nurses' station.",
          "I worked on designing the screens, looking for ways to visualise the data that kept nurses on top of the pumps without drowning them in information.",
        ],
      },
      {
        id: "contexto",
        layout: "text",
        eyebrow: "Context",
        heading: "Every second counts",
        body: [
          "In an ICU, a pump with a critical battery or an interrupted therapy is an emergency. But the alarms sound on the equipment, far from whoever needs to act, and a single bed can have up to 8 pumps running at once.",
          "The challenge was giving the team one prioritised, trustworthy view that worked both in the rush of 25 beds and in the detail of a single pump.",
        ],
      },
      {
        id: "pesquisa",
        layout: "text",
        eyebrow: "Research",
        heading: "Listening to people on the floor",
        body: [
          "We ran surveys across several hospital departments, with different levels of criticality and routine, to understand where the pain was in handling the pumps.",
          "The research guided what the hub should actually show: the data and features professionals most wanted to see, rather than the ones that were easy to display.",
        ],
      },
      {
        id: "leitos",
        layout: "wide-media",
        eyebrow: "Bed view",
        heading: "One card per patient",
        body: [
          "Each card is a bed: name, sex, age and the progress of every drug being infused, with up to 8 pumps per patient. When something goes off track, the whole card changes colour (red for high priority, yellow for medium) and shows the alarm with a clear icon.",
        ],
        media: [
          {
            seed: "sammanager-leitos",
            src: "/cases/sammanager/dashboard-leitos.png",
            alt: "Bed dashboard: a grid of 25 patients with infusion bars and alarms",
            ratio: "16/9",
            fit: "cover",
          },
        ],
      },
      {
        id: "adaptativo",
        layout: "split",
        eyebrow: "Adaptive layout",
        heading: "Fewer beds, more detail",
        body: [
          "The dashboard automatically detects how many patients are active and reorganises the grid: 6, 9, 16, 20 or 25 beds. With fewer beds the cards grow and show more information; empty beds become empty cards.",
          "That way the same screen serves a packed ICU and a department with only a few patients, always legible from a distance.",
        ],
        media: [
          {
            seed: "sammanager-6leitos",
            src: "/cases/sammanager/dashboard-6leitos.png",
            alt: "Dashboard with 6 beds: larger, more detailed cards",
            ratio: "16/9",
            fit: "cover",
          },
        ],
      },
      {
        id: "numeros",
        layout: "metrics",
        metrics: [
          { value: "25", label: "Beds monitored on one screen" },
          { value: "8", label: "Pumps per bed" },
          { value: "2", label: "Modes: by bed and by equipment" },
        ],
      },
      {
        id: "equipamentos",
        layout: "wide-media",
        eyebrow: "By equipment + Light mode",
        heading: "Prioritise the pumps asking for attention",
        body: [
          "In equipment mode, the centre column highlights the most critical pumps while the side panel lists up to 80, ordered by priority (red, yellow, green, grey). We also designed a light mode so the team could pick whatever worked better in their environment.",
        ],
        media: [
          {
            seed: "sammanager-equipamentos",
            src: "/cases/sammanager/light-equipamentos.png",
            alt: "Light mode in equipment view with a side list of pumps ordered by priority",
            ratio: "16/9",
            fit: "cover",
          },
        ],
      },
      {
        id: "detalhe",
        layout: "wide-media",
        eyebrow: "Patient detail",
        heading: "From the overview to the pump",
        body: [
          "A tap on any card opens the patient: every active pump on that bed and the parameters of the selected one (flow mode, KVO, occlusion, volume). This is where the alarm gets resolved, with three clear actions: silence, acknowledge and reset.",
        ],
        media: [
          {
            seed: "sammanager-detalhe",
            src: "/cases/sammanager/paciente-detalhe.png",
            alt: "Patient detail screen with active pumps, parameters and alarm actions",
            ratio: "16/9",
            fit: "cover",
          },
        ],
      },
      {
        id: "acoes",
        layout: "list",
        eyebrow: "Alarms",
        heading: "Three actions, no ambiguity",
        list: [
          {
            title: "Silence",
            description: "Temporarily pauses the alarm, confirmed by the pump before it takes effect.",
          },
          {
            title: "Acknowledge",
            description: "Switches the alarm off entirely once confirmed.",
          },
          { title: "Reset", description: "Clears every alarm on the bed at once." },
        ],
      },
      {
        id: "icones",
        layout: "icons",
        eyebrow: "Icons",
        heading: "A visual language of its own",
        body: [
          "I drew the product's entire icon library: alarms, infusion types, pump states and actions. Consistent strokes that have to be read at a glance, even from across the room.",
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
        eyebrow: "Management system",
        heading: "Registration and management on the desktop",
        body: [
          "Beyond the hub, Sam MANAGER has a web system for registering pumps and users, with access groups, reports and clinical engineering. A pump record ties together its identifier, IP, department, wing and bed — which is what makes the right bed show up in the right place on the dashboard.",
        ],
        media: [
          {
            seed: "sammanager-sistema",
            src: "/cases/sammanager/sistema-mock.png",
            alt: "Sam MANAGER web system: managing users and access groups",
            ratio: "16/9",
            fit: "cover",
          },
        ],
      },
      {
        id: "fecho",
        layout: "quote",
        quote: {
          text: "Monitoring 25 beds shouldn't be a puzzle. Sam MANAGER turns a sea of pumps into clear priorities, so the team can act on what matters.",
        },
      },
    ],
  },

  // 4 — Assis International Holding [Corporate website] -----------------------
  {
    slug: "assis-holding",
    title: "Assis Holding",
    client: "Assis International Holding",
    category: "Websites",
    type: "website",
    year: 2016,
    featured: true,
    summary:
      "A corporate website for a holding company with businesses across several sectors: history, strategy, governance and team in a single navigation.",
    intro:
      "A holding company with many fronts has a lot to say. The challenge was saying all of it without wearing out the visitor.",
    role: ["UX/UI Designer", "Visual Design", "Development"],
    services: ["Information Architecture", "UX/UI Design", "Visual Design", "Front-end"],
    cover: {
      seed: "assis-cover",
      src: "/cases/assis/cover.png",
      alt: "The Assis International Holding home page on a laptop, with the line “We look beyond the here and now”",
      ratio: "16/9",
      fit: "cover",
      category: "Websites",
    },
    card: {
      seed: "assis-card",
      src: "/cases/assis/cover.png",
      alt: "The Assis International Holding corporate website on a laptop",
      fit: "cover",
      category: "Websites",
    },
    color: "#001e62",
    blocks: [
      {
        id: "resumo",
        layout: "text",
        eyebrow: "Summary",
        heading: "A whole holding company on one site",
        body: [
          "Assis International Holding invests in, advises and provides services to the companies within its own group, across quite different sectors. The site had to convey that scale clearly, elegantly and to the point.",
          "I worked from content to delivery: organising the information, designing the interface and building the responsive site.",
        ],
      },
      {
        id: "contexto",
        layout: "text",
        eyebrow: "Context",
        heading: "A lot of information to fit without tiring anyone",
        body: [
          "History, strategy, values, areas of operation, team, governance, news and contact. All of it had to live on the site without turning a visit into a long read.",
          "So the starting point wasn't the layout, it was the content: understanding what existed, what was essential, and how each piece related to the others inside the experience.",
        ],
      },
      {
        id: "numeros",
        layout: "metrics",
        metrics: [
          { value: "7", label: "Content areas in the navigation" },
          { value: "10", label: "Corporate pages beyond the home" },
          { value: "3", label: "Languages: Portuguese, English and Spanish" },
        ],
      },
      {
        id: "arquitetura",
        layout: "list",
        eyebrow: "Information architecture",
        heading: "Seven paths, no maze",
        list: [
          {
            title: "About",
            description: "Who we are, strategy and philosophy, culture and values, and the founder's message.",
          },
          { title: "Areas of operation", description: "The sectors the group invests in and operates." },
          { title: "Team", description: "The people behind the group's decisions." },
          {
            title: "Corporate governance",
            description: "How the holding is structured and holds itself accountable.",
          },
          { title: "News", description: "Announcements and developments across the group." },
          { title: "Careers", description: "The way in for people who want to work at the group." },
          { title: "Contact", description: "Direct channels and the head office address in São Paulo." },
        ],
      },
      {
        id: "home",
        layout: "text",
        eyebrow: "Home",
        heading: "The home page as a summary",
        body: [
          "The home page presents the group's positioning, highlights what matters and leads the visitor toward more specific information. People arriving understand what the holding is before deciding where to go.",
          "The opening line — “We look beyond the here and now” — sets the tone in one sentence and one image: a company that thinks long term.",
        ],
      },
      {
        id: "paginas",
        layout: "media-grid",
        eyebrow: "Consistency",
        heading: "The same logic on every page",
        body: [
          "Each inner page opens with a feature image and organises its text into short blocks with supporting visuals on the right. Different kinds of content, the same reading structure — the identity holds from the first page to the last.",
        ],
        media: [
          {
            seed: "assis-home-full",
            src: "/cases/assis/assisholding_com.png",
            alt: "The complete Assis International Holding home page",
            label: "Home",
            ratio: "3/4",
            fit: "contain",
          },
          {
            seed: "assis-estrategia-full",
            src: "/cases/assis/estrategiaefilosofia.png",
            alt: "The Strategy and Philosophy inner page, with text blocks and supporting images",
            label: "Strategy and Philosophy",
            ratio: "3/4",
            fit: "contain",
          },
        ],
      },
      {
        id: "linguagem",
        layout: "split",
        eyebrow: "Visual language",
        heading: "Corporate, without excess",
        body: [
          "The palette came from the brand itself: navy as the corporate base, with gold reserved for details — rules, section titles and highlights.",
          "The rest is typography, spacing and hierarchy. No decorative element competes with the content: the credibility comes from the order, not the ornament.",
        ],
        media: [
          {
            seed: "assis-marca",
            src: "/cases/assis/logotipo-plate.png",
            alt: "The Assis International Holding logo in navy and gold",
            ratio: "21/9",
            fit: "contain",
          },
        ],
      },
      {
        id: "implementacao",
        layout: "text",
        eyebrow: "Design and implementation",
        heading: "From layout to live site",
        body: [
          "Beyond designing the interface, I built it. Designing and building in the same project sped up the decisions: I could test a hierarchy straight in the browser instead of guessing.",
          "Each block was considered for different content formats and screen sizes, preserving in the responsive layout the hierarchy created in the design.",
        ],
      },
      {
        id: "fecho",
        layout: "quote",
        quote: {
          text: "A corporate site doesn't need to show everything at once. It needs to make clear where everything is.",
        },
      },
    ],
  },
];

/** Lookup helpers ----------------------------------------------------------- */
export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string): Project {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
}

/** Floating gallery items in the hero: the case covers. */
export const galleryItems: GalleryItem[] = projects.map((p) => ({
  seed: p.cover.seed,
  title: p.title,
  category: p.category,
  year: p.year,
  description: p.summary,
  src: p.card?.src,
}));
