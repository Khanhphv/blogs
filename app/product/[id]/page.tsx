import { ProductDetail } from '@/components/molecules/product'
import { IProduct } from '@/types/product'
import { delay } from '@/utils'

// async function getProduct(id: string) {
//   await delay()
//   const product = await fetch('http://localhost:3000/api/products/' + id, {
//     next: { revalidate: 0 },
//   })
//   if (product.ok) return await product.json()
//   return {}
// }

export default async function Product({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  // const { data: product }: { data: IProduct } = await getProduct(id)

  return <>{/* <ProductDetail product={product} /> */}</>
}
