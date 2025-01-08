import { CartProducts } from '@/components/organism/cart'

export default function Cart() {
  return (
    <div className="container p-4">
      <h1 className="text-2xl">Cart</h1>
      <CartProducts />
    </div>
  )
}
