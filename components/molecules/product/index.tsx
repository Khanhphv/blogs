'use client'
import { IProduct } from '@/types/product'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useCartStore } from '@/app/store/useCartStore'

export function ProductItem({ product }: { product: IProduct }) {
  const router = useRouter()
  const addCart = () => {
    // const cartState = useCartStore.getState()
    // cartState.increase(product)
    router.push('/product/' + product.id)
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
