export interface IProduct {
  id: number
  title: string
  thumbnail: string
  description?: string
  price: number | string
  discount?: number
  amount?: number
}
