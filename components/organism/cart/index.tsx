'use client'

import { useCartStore } from '@/app/store/useCartStore'
import { IProduct } from '@/types/product'
import Link from 'next/link'

export function Cart() {
  const products = useCartStore((state) => state.products)
  return (
    <Link href="/cart">
      Cart{products.length ? `(${products.length})` : ''}
    </Link>
  )
}

export function CartProducts() {
  const products = useCartStore((state) => state.products)
  return (
    <>
      <button
        className="rounded-none border p-2"
        onClick={() => {
          useCartStore.getState().removeAll()
        }}
      >
        Remove All
      </button>
      {products.map((p: IProduct, index) => (
        <div key={index} className="my-2 border-2">
          <p>{p.title}</p>
          <p>Amount:{p.amount}</p>
        </div>
      ))}
    </>
  )
}
