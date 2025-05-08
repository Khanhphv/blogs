'use client'
import Image from './Image'
import { useEffect } from 'react'

const Card = ({ title = '', imgSrc = ' ', href = '' }) => {
  useEffect(() => {}, [])
  return (
    <div className="md h-[300px] max-w-[300px]">
      <div
        className={`${imgSrc} h-full overflow-hidden rounded-md bg-slate-900 p-4 hover:scale-105`}
      >
        <div
          style={{
            width: '100%',
            height: '80%',
          }}
        >
          <Image
            alt={title}
            src={imgSrc}
            className="h-full w-full bg-transparent object-cover"
            width={250}
            height={250}
            style={{
              maxHeight: '100%',
            }}
          />
        </div>

        <p className="text-2xl">{title}</p>

        <div className="flex justify-between">
          <div>Status</div>
          <div className="text-lime-400">Working</div>
        </div>
      </div>
    </div>
  )
}

export default Card
