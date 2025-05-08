'use client'
import Image from 'next/image'
import { useCartStore } from '@/app/store/useCartStore'
import siteMetadata from '@/data/siteMetadata'
import { IProduct } from '@/types/product'

const StoreCard = (product: IProduct) => {
  const { title = '', imgSrc = '', download = '', ...others } = product
  const addCart = () => {
    const cartState = useCartStore.getState()
    cartState.increase(product)
  }
  return (
    <div
      className={`${imgSrc} flex flex-col justify-between overflow-hidden rounded-md border-2 hover:scale-105 hover:bg-slate-900`}
    >
      <>
        <img
          alt={title}
          src={imgSrc}
          className="w-full bg-transparent object-cover"
          width={250}
          height={250}
          style={{
            width: 300,
            height: 250,
          }}
        />
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
            <div>Status</div>
            <div className="text-green-500">Working</div>
          </div>
          <a
            href={siteMetadata.discord}
            target="_blank"
            className="block w-full bg-gray-700 p-2 text-center text-white"
          >
            Download
          </a>
          <button
            onClick={addCart}
            className="mt-2 w-full bg-gray-700 p-2 text-white"
          >
            Add to cart
          </button>
        </div>
      </>
    </div>
  )
}

export default StoreCard
