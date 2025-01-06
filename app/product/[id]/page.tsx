import { ProductDetail } from '@/components/molecules/product'
import { IProduct } from '@/types/product'

async function getProduct(id: string) {
  const product = await fetch('http://localhost:3000/api/products/' + id)
  if (product.ok) return await product.json()
  return {}
}

export default async function Product({ params }: { params: { id: string } }) {
  const { id } = params
  const { data: product }: { data: IProduct } = await getProduct(id)

  return (
    <>
      <ProductDetail product={product} />
    </>
  )
}
