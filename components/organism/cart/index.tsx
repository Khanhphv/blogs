'use client'

import { useCartStore } from '@/app/store/useCartStore'
import siteMetadata from '@/data/siteMetadata'
import { IProduct } from '@/types/product'
import Image from 'next/image'
import Link from 'next/link'
import { PiShoppingCartSimpleLight } from 'react-icons/pi'
export function Cart() {
  const products = useCartStore((state) => state.products)
  return (
    <Link href="/cart" className="flex items-center whitespace-nowrap">
      <PiShoppingCartSimpleLight size={30} />
      {products.length ? `(${products.length})` : ''}
    </Link>
  )
}

export function CartProducts() {
  const products = useCartStore((state) => state.products)
  return (
    <>
      {products.length > 0 && (
        <div
          className="w-[150px] cursor-pointer p-2 hover:underline"
          onClick={() => {
            useCartStore.getState().removeAll()
          }}
        >
          Clear all
        </div>
      )}
      {products.length > 0 ? (
        products.map((p, index) => {
          const { title = '', download = '', amount, ...others } = p
          return (
            <div
              key={index}
              className={`align-center mb-4 flex w-full max-w-[500px] flex-col justify-between overflow-hidden rounded-md border-2 hover:bg-slate-900`}
            >
              <>
                <div>
                  <div className="flex justify-between p-2">
                    <p>{title}</p>
                    <div className="flex">
                      <Image
                        loading="eager"
                        alt={title}
                        src={'/download.webp'}
                        width={16}
                        height={16}
                      ></Image>
                      {download}
                    </div>
                  </div>
                  <div className="flex justify-between p-2">
                    <div>Amount</div>
                    <div className="text-green-500">{amount}</div>
                  </div>
                </div>
              </>
            </div>
          )
        })
      ) : (
        <>
          <Image width={300} height={300} src={'/empty-cart.png'} alt="empty" />
        </>
      )}
      {products.length > 0 && (
        <a
          target="_blank"
          href={siteMetadata.discord}
          className="block w-full max-w-[500px] bg-lime-500 py-2 text-center"
        >
          Checkout
        </a>
      )}
    </>
  )
}
