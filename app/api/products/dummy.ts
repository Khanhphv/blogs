import { IProduct } from '@/types/product'
import { Social } from '@/types/types'

export const dummy: IProduct[] = [
  {
    id: 1,
    title: 'Product 1',
    thumbnail: '/Image.png',
    description: 'Description 1',
    price: 100,
  },
  {
    id: 2,
    title: 'Product 2',
    thumbnail: '/Image.png',
    description: 'Description 2',
    price: 100,
  },
]

export const social: Social[] = [
  {
    title: 'Instagram',
    thumbnail: '/socials/instagram.png',
    href: 'https://www.instagram.com/khanhphamviet_/',
  },
  {
    title: 'Facebook',
    thumbnail: '/socials/facebook.jpg',
    href: 'https://www.facebook.com/khanh.phamviet',
  },
]
