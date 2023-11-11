import { StaticImageData } from "next/image"

export type Project = {
  urls: {
    github?: string
    playStore?: string
    figma?: string
    website?: string
    plugin?: string
  }
  title: string
  imageSrc: StaticImageData
  description: string
  tags: string[]
}

export type StackItem = {
  id: string
  title: string
  description: string
  url: string
  imageSrc: StaticImageData
  tags: string[]
}

export type AlbumItem = {
  description: string
  imageSrc: StaticImageData
}
