import { Project } from "@/types"

export const projects: Project[] = [
  {
    url: "https://play.google.com/store/apps/details?id=app.vercel.sea_life.twa",
    title: "Sea Life",
    imageUrl: "/projects/sea-life.png",
    description: "Explore the marine life of many places with more than 1000 cards of common or unusual species.",
    tags: ["Next.js", "Firebase", "Play Store"],
  },
  {
    url: "https://vercel.com/integrations/lighthouse-guard",
    title: "Lighthouse Guard",
    imageUrl: "/projects/lighthouse-guard.jpg",
    description: "Streamline your performance monitoring process. Check which commits dropped your Lighthouse score.",
    tags: ["Next.js", "Vercel Integration"],
  },
  {
    url: "https://sea-life.vercel.app/",
    title: "MonPanier",
    imageUrl: "/projects/mon-panier.png",
    description: "Connect with your local shops and order online. Eat local, eat fresh.",
    tags: ["Prototype", "Figma"],
  },
]
