'use client'
import Image from './Image'
import Link from './Link'
import { useEffect, useState } from 'react'

const Card = ({ title = '', description = '', imgSrc = ' ', href = '' }) => {
  const [isShowing, setIsShowing] = useState(false)
  useEffect(() => {
    setTimeout(() => setIsShowing(true), 500)
  }, [])
  return (
    <div className="md max-w-[300px] transform">
      <div
        className={`${imgSrc} overflow-hidden rounded-md bg-slate-900 p-4 hover:scale-105`}
      >
        {imgSrc &&
          (href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              <Image
                alt={title}
                src={imgSrc}
                className="h-full w-full object-cover object-center"
                width={250}
                height={250}
              />
            </Link>
          ) : (
            <>
              <Image
                alt={title}
                src={imgSrc}
                className="h-full w-full bg-transparent object-cover"
                width={250}
                height={250}
              />
            </>
          ))}
        <p className="text-2xl">{title}</p>
        <div className="flex justify-between">
          <div>Amount</div>
          <div>12</div>
        </div>
        <div className="flex justify-between">
          <div>Status</div>
          <div>Working</div>
        </div>
      </div>
    </div>
  )
}

export default Card
