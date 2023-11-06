import { StaticImageData } from "next/image"

export type Project = {
  url: string
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
