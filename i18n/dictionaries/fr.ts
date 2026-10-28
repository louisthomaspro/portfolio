import Blime from "@/public/projects/blime.jpg"
import { Education, Experience, Link, SkillGroup, Venture } from "@/types"

import { siteUrl } from "@/i18n/config"

export const dictionary = {
  profile: {
    name: "Louis Thomas",
    headline: "Tech Lead / Fullstack · TypeScript, React, AI, Remote ou Toulon",
    location: "Toulon, France",
    workMode: "Remote ou hybride",
    website: { label: "louisthomas.pro", url: siteUrl } satisfies Link,
    linkedin: { label: "linkedin.com/in/louis-thomas", url: "https://www.linkedin.com/in/louis-thomas" } satisfies Link,
    phone: { label: "06 51 49 70 56", url: "tel:+33651497056" } satisfies Link,
    pitch:
      "Tech Lead / Fullstack, plus de 9 ans d’expérience en TypeScript. Je combine rigueur technique, vision produit et IA appliquée pour transformer des idées en systèmes robustes et scalables. J’aime le code lisible et les architectures simples.",
    summary:
      "Tech Lead / Fullstack avec plus de 9 ans d’expérience en TypeScript, dont 2 ans et demi comme CTO de Minea (SaaS à plus de 500 k€ de revenu mensuel récurrent, 4 000 inscriptions par jour). Je combine rigueur technique, vision produit et IA appliquée pour transformer des idées en systèmes robustes et scalables. J’aime le code lisible, les architectures simples et les équipes qui livrent sans se bloquer.",
    availability: "Ouvert à un poste de Tech Lead / Fullstack ou de CTO, et aux missions freelance.",
    availabilityDetails:
      "Ouvert à un poste de Tech Lead / Fullstack ou de CTO, ainsi qu’à des missions freelance. Remote partout en France ou hybride autour de Toulon, déplacements ponctuels à Paris.",
  },
  ventures: [
    {
      company: "Hinter",
      role: "Cofondateur & CTO",
      start: "2026-02",
      end: "2026-06",
      summary: "Analyse publicitaire par IA pour les marques e-commerce et les agences, menée jusqu’au stade prototype.",
      description:
        "Analyse publicitaire par IA pour les marques e-commerce et les agences, menée jusqu’au stade prototype.",
      note: "Menée jusqu’au stade prototype.",
      highlights: [
        "Collecte et rapprochement des publicités concurrentes, des avis clients et de l’historique des tests de chaque marque.",
        "Pipelines d’analyse multimodale, d’embeddings et de regroupement des contenus.",
        "Dashboard et serveur MCP pour consulter les analyses d’une marque.",
      ],
      stack: ["TanStack Start", "Supabase", "Trigger.dev", "Vercel"],
    },
    {
      company: "Blime",
      role: "Cofondateur & CTO",
      start: "2025-12",
      end: "2026-01",
      logo: Blime,
      summary: "Recherche et analyse de créateurs YouTube pour les marques, pouvant indexer jusqu’à 10 millions de créateurs.",
      highlights: [
        "Moteur de recherche pouvant indexer jusqu’à 10 millions de créateurs YouTube.",
        "Pipelines d’enrichissement des profils : liens des vidéos, fréquence de publication, médiane des vues.",
        "Lancement auprès des premiers utilisateurs avec abonnements payants.",
      ],
      stack: ["Next.js", "Supabase", "Elasticsearch", "Stripe", "AWS"],
    },
  ] satisfies Venture[],
  experiences: [
    {
      company: "Minea",
      role: "CTO & Développeur full-stack",
      start: "2023-04",
      end: "2025-10",
      description:
        "Pilotage technique et développement de la V2 d’un SaaS à plus de 500 k€ de MRR et 4 000 inscriptions par jour.",
      metrics: [
        { value: "500 k€", label: "de MRR" },
        { value: "4 000", label: "inscriptions / jour" },
      ],
      highlights: [
        "Refonte de l’architecture en Next.js et pilotage de la transition de la V1 à la V2.",
        "Optimisation des performances pour absorber les pics de trafic liés aux campagnes marketing et aux webinaires.",
        "Pipelines d’embeddings pour les images et les vidéos, et tagging automatique des publicités à grande échelle.",
        "Automatisation du support avec l’IA.",
        "Accompagnement technique de deux développeurs.",
        "Collaboration avec le CDO et le CMO sur les fonctionnalités, l’expérience utilisateur et les besoins marketing.",
      ],
      stack: ["Next.js", "Vercel", "PostgreSQL", "ClickHouse", "Elasticsearch", "Stripe"],
    },
    {
      company: "DBS Bank",
      role: "Lead technique produit & Chef de projet",
      location: "Singapour",
      start: "2020-10",
      end: "2022-04",
      description:
        "Pilotage technique du périmètre produit et gestion de projet dans une équipe de 8 à 10 personnes, en binôme avec le lead data.",
      highlights: [
        "Définition de l’architecture front-end et de la roadmap technique d’un CRM interne.",
        "Accompagnement des développeurs et résolution des difficultés techniques.",
        "Coordination avec des équipes réparties dans plusieurs pays.",
      ],
    },
    {
      company: "Decathlon Singapore",
      role: "Scrum Master & Développeur",
      location: "Singapour",
      start: "2020-03",
      end: "2020-08",
      highlights: [
        "Développement d’API avec Spring Boot pour une nouvelle application mobile e-commerce.",
        "Coordination des équipes internationales et animation des pratiques agiles en tant que Scrum Master.",
      ],
    },
    {
      company: "Decathlon France",
      role: "Développeur & IT Ops",
      start: "2017-09",
      end: "2020-03",
      highlights: [
        "Maintenance et évolution d’applications de formation, avec un travail sur leur fiabilité et leur facilité d’utilisation.",
        "Développement d’outils de reporting et d’analyse pour le suivi de l’activité et l’aide à la décision des équipes métier.",
      ],
    },
    {
      company: "Freelance",
      role: "Développeur web",
      start: "2014-01",
      end: "2019-03",
      description:
        "Sites web et solutions sur mesure pour des artisans et des indépendants, de la définition des besoins à la livraison et aux évolutions.",
    },
  ] satisfies Experience[],
  skills: [
    { label: "Front", items: ["TypeScript", "Next.js", "React", "TanStack", "Tailwind CSS"] },
    { label: "Back", items: ["Node.js", "PostgreSQL", "Supabase", "Stripe"] },
    {
      label: "Data",
      items: ["Pipelines ETL et d’enrichissement", "ClickHouse", "Elasticsearch", "Recherche vectorielle"],
    },
    { label: "IA", items: ["Orchestration de LLM", "Embeddings multimodaux", "Workflows automatisés", "MCP"] },
    { label: "Infra", items: ["Vercel", "AWS", "Trigger.dev", "CI/CD"] },
    { label: "Leadership", items: ["Architecture logicielle", "Encadrement technique", "Scrum", "Gestion de projet"] },
  ] satisfies SkillGroup[],
  education: [
    { school: "Polytech Tours", degree: "Diplôme d’ingénieur, informatique", start: 2017, end: 2020 },
    { school: "IUT de Lens", degree: "DUT Informatique", start: 2015, end: 2017 },
    { school: "Lycée Jean Monnet", degree: "Baccalauréat, sciences de l’ingénieur", start: 2012, end: 2015 },
  ] satisfies Education[],
  languages: [
    { label: "Français", level: "Langue maternelle" },
    { label: "Anglais", level: "Courant, usage professionnel" },
  ],
  awards: [{ label: "Hackathon UTC Compiègne", detail: "Prix du design, 2e au classement général" }],
  ui: {
    viewCv: "Voir mon CV",
    fullCv: "CV complet",
    experience: "Expérience",
    home: "Accueil",
    downloadPdf: "Télécharger en PDF",
    about: "À propos",
    available: "Disponible",
    contactMe: "Me contacter",
    location: "Localisation",
    myStack: "Ma stack",
    loadMore: "Voir plus",
    filterStack: "Filtrer la stack",
    stackLabel: "Stack",
    cvPageTitle: "CV",
    ogSubtitle: "Ex-CTO de Minea",
    sections: {
      profile: "Profil",
      experience: "Expérience",
      skills: "Compétences",
      education: "Formation",
      languages: "Langues",
      awards: "Distinctions",
    },
    dates: {
      present: "aujourd’hui",
      since: "Depuis",
      year: "an",
      years: "ans",
      month: "mois",
    },
  },
}

export type Dictionary = typeof dictionary
