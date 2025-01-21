export interface Social {}

export interface Source {
  url: string
  type: SourceType
}
export enum SOURCE {
  VIDEO = 'video',
  IMAGE = 'image',
}

export type SourceType = SOURCE.IMAGE | SOURCE.VIDEO
export interface Post {
  id: number
  title: string
  thumbnail: string
  description: string
  author: string
  like: number
  comment: number
  sources?: Source[]
}
