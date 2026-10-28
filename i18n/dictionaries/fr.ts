import Blime from "@/public/projects/blime.jpg"
import { Education, Experience, Link, SkillGroup, Venture } from "@/types"

import { siteUrl } from "@/i18n/config"

export const dictionary = {
  profile: {
    name: "Louis Thomas",
    headline: "Tech Lead / Dev Fullstack · TypeScript, React, AI",
    location: "Toulon, France",
    workMode: "Remote ou hybride",
    website: { label: "louisthomas.pro", url: siteUrl } satisfies Link,
    linkedin: { label: "linkedin.com/in/louis-thomas", url: "https://www.linkedin.com/in/louis-thomas" } satisfies Link,
    phone: { label: "06 51 49 70 56", url: "tel:+33651497056" } satisfies Link,
    pitch:
      "Tech Lead / Dev Fullstack, plus de 9 ans d’expérience en TypeScript, ex-CTO Minea. J’aime construire des produits de bout en bout, de l’architecture à l’expérience utilisateur, en conciliant exigences techniques et enjeux business. Code lisible et solutions faciles à maintenir.",
    summary:
      "Tech Lead / Dev Fullstack avec plus de 9 ans d’expérience en TypeScript, dont 2 ans et demi comme CTO de Minea (SaaS à plus de 500 k€ de MRR). J’aime construire des produits de bout en bout, de l’architecture à l’expérience utilisateur, en conciliant exigences techniques et enjeux business. Face aux défis techniques complexes, je privilégie un code lisible et des solutions faciles à maintenir et à faire évoluer.",
    availability: "Ouvert à un poste de Tech Lead / Dev Fullstack ou de CTO, et aux missions freelance.",
    availabilityDetails:
      "Ouvert à un poste de Tech Lead / Dev Fullstack ou de CTO, ainsi qu’à des missions freelance. Remote partout en France ou hybride autour de Toulon, déplacements ponctuels à Paris.",
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
        "Collecte des publicités concurrentes, avis clients et historiques de tests ; analyse LLM et embeddings pour regrouper les créations et faire émerger les tendances marketing.",
        "Dashboard et serveur MCP pour consulter les analyses d’une marque.",
      ],
    },
    {
      company: "Blime",
      role: "Cofondateur & CTO",
      start: "2025-12",
      end: "2026-01",
      logo: Blime,
      summary: "Recherche et analyse de créateurs YouTube pour les marques, pouvant indexer jusqu’à 10 millions de créateurs.",
      description: "Moteur de recherche d’influenceurs YouTube.",
      highlights: [
        "Pipelines data qui ingèrent, enrichissent et mettent à jour des millions de créateurs et de vidéos YouTube.",
        "Lancement auprès des premiers utilisateurs avec abonnements payants.",
      ],
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
        "Refonte de l’architecture en Next.js pour gagner en flexibilité et accélérer l’itération produit.",
        "Optimisation des performances pour absorber les pics de trafic liés aux campagnes marketing et aux webinaires.",
        "Automatisation du support avec l’IA.",
        "Collaboration CDO/CMO sur produit, UX et marketing.",
      ],
    },
    {
      company: "DBS Bank",
      role: "Lead technique produit & Chef de projet",
      location: "Singapour",
      start: "2020-10",
      end: "2022-04",
      description: "Construction d’un CRM interne avec une équipe de 10 personnes.",
      highlights: [
        "Définition de l’architecture front-end et de la roadmap technique.",
        "Coordination avec des équipes réparties dans plusieurs pays.",
      ],
    },
    {
      company: "Decathlon",
      role: "Développeur · IT Ops",
      location: "France · Singapour",
      start: "2017-09",
      end: "2020-08",
      highlights: [
        "Maintenance et évolution d’applications de formation ; outils de reporting et d’analyse pour les équipes métier.",
        "Backend et coordination agile sur une application mobile e-commerce (Singapour), avec des équipes internationales.",
      ],
    },
  ] satisfies Experience[],
  skills: [
    { label: "Front", items: ["TypeScript", "Next.js", "React", "TanStack", "Tailwind"] },
    { label: "Back", items: ["Node.js", "PostgreSQL", "Supabase", "Stripe"] },
    { label: "Data & IA", items: ["ETL", "ClickHouse", "Elasticsearch", "LLM", "Embeddings", "MCP"] },
    { label: "Infra", items: ["Vercel", "AWS", "Docker", "CI/CD"] },
  ] satisfies SkillGroup[],
  education: [
    { school: "Polytech Tours", degree: "Diplôme d’ingénieur, informatique", start: 2017, end: 2020 },
  ] satisfies Education[],
  languages: [
    { label: "Français", level: "Langue maternelle" },
    { label: "Anglais", level: "Courant" },
  ],
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
