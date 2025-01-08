import { ProductItem } from '@/components/molecules/product'
import { IProduct } from '@/types/product'
import { delay } from '@/utils'

export default async function Products() {
  const products = await fetch('http://localhost:3000/api/products')
  const data = await products.json()
  const { data: productsData } = data

  const productItems = productsData.map((product: IProduct) => {
    return <ProductItem key={product.id} product={product} />
  })

  return <>{/* <div className="flex flex-wrap gap-4">{productItems}</div> */}</>
}
