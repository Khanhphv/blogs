import { IProduct } from '@/types/product'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export interface CartState {
  products: IProduct[]
  increase: (product: IProduct) => void
  removeAll: () => void
}

export const useCartStore = create<CartState>()(
  devtools(
    persist(
      (set) => ({
        products: [],
        increase: (p: IProduct) =>
          set((state) => {
            const index = state.products.findIndex((item) => item.id === p.id)
            let data
            if (index !== -1) {
              data = state.products.map((item: IProduct) =>
                item.id === p.id
                  ? { ...item, amount: (item.amount ?? 0) + 1 }
                  : item
              )
            } else {
              data = [...state.products, { ...p, amount: 1 }]
            }

            return {
              products: data,
            }
          }),
        removeAll: () => set({ products: [] }),
      }),
      { name: 'cartStore' }
    )
  )
)
