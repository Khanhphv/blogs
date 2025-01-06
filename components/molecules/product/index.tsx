'use client'
import { IProduct } from '@/types/product'
import Image from 'next/image'

export default function ProductItem({ product }: { product: IProduct }) {
  const addCart = () => {
    const cartLocal = localStorage.getItem('cart') ?? ''
    const cartStore = cartLocal ? JSON.parse(cartLocal) : []
    alert('add to cart')
    cartStore.push(product)
    localStorage.setItem('cart', JSON.stringify(cartStore))
  }
  return (
    <>
      <div key={product.id} className="flex flex-col border-2">
        <Image
          width={200}
          height={200}
          src={product.thumbnail}
          alt={product.title}
        />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <button onClick={addCart} className="">
          Add to cart
        </button>
        <button className="">Checkout</button>
      </div>
    </>
  )
}
