import { CartProducts } from '@/components/organism/cart'

export default function Cart() {
  return (
    <div>
      <div>
        <h1 className="text-2xl">Products</h1>
        <CartProducts />
      </div>
    </div>
  )
}
