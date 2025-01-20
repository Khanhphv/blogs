import { delay } from '@/utils'

export default async function Home() {
  await delay(5000)
  const url = `${process.env.NEXT_PUBLIC_API}/products`
  const products = await fetch(url)
  const data = await products.json()
  const { data: productsData } = data

  return <></>
}
