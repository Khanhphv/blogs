'use client'
import { IProduct } from '@/types/product'
import Image from 'next/image'
import { useCartStore } from '@/app/store/useCartStore'
import Link from 'next/link'

export interface Item {
  id: number
  title?: string
  thumbnail?: string
  href?: string
}
export function ProductItem<P extends Item>({ product }: { product: P }) {
  return (
    <>
      <div key={product.id} className="flex flex-col">
        <Link href={product.href || ''} target="_blank">
          {product.thumbnail && (
            <Image
              width={200}
              height={200}
              src={product.thumbnail}
              alt={product.title || ''}
              className="rounded"
              style={{ width: '200px', height: '200px' }}
            />
          )}
        </Link>
      </div>
    </>
  )
}

export function ProductDetail({ product }: { product: IProduct }) {
  const addCart = () => {
    const cartState = useCartStore.getState()
    cartState.increase(product)
  }

  const checkout = () => {}
  return (
    <>
      <div className="border p-2">
        <div>Name: {product.title}</div>
        <div>
          Price: {product.price}{' '}
          {product?.discount ? '-' + product.discount : ''}
        </div>
        <div>Description: {product.description}</div>
        <input type="number" className="border" placeholder="amount" />
        <div className="mt-2 flex gap-2">
          <button className="border p-2" onClick={addCart}>
            Add to cart
          </button>
          <button className="border p-2" onClick={checkout}>
            Checkout
          </button>
        </div>
      </div>
    </>
  )
}
