import { ProductItem } from '@/components/molecules/product'
import { IProduct } from '@/types/product'

export default async function Products() {
  const products = await fetch('http://localhost:3000/api/products')
  const data = await products.json()
  const { data: productsData } = data

  const productItems = productsData.map((product: IProduct) => {
    return <ProductItem key={product.id} product={product} />
  })

  return (
    <>
      <h1>Product</h1>
      <code>{JSON.stringify(productsData, null, 2)}</code>
      <div className="flex flex-wrap">{productItems}</div>
    </>
  )
}
