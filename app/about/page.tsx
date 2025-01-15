import { ProductItem } from '@/components/molecules/product'
import { IProduct } from '@/types/product'
import { delay } from '@/utils'

export default async function Products() {
  await delay()
  const url = `${process.env.NEXT_PUBLIC_API}/products`
  const products = await fetch(url)
  const data = await products.json()
  const { data: productsData } = data

  const productItems = productsData.map((product: IProduct) => {
    return <ProductItem key={product.id} product={product} />
  })

  return (
    <>
      <div className="flex flex-wrap gap-4">{productItems}</div>
    </>
  )
}
