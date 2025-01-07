'use client'
import Image from './Image'
import Link from './Link'
// import { Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'

const Card = ({ title = '', description = '', imgSrc, href }) => {
  const [isShowing, setIsShowing] = useState(false)
  useEffect(() => {
    setTimeout(() => setIsShowing(true), 500)
  }, [])
  return (
    <div className="md max-w-[300px] transform">
      {/* <Transition
        as={Fragment}
        show={isShowing}
        enter="transform transition duration-[400ms]"
        enterFrom="opacity-0 rotate-[-120deg] scale-50"
        enterTo="opacity-100 rotate-0 scale-100"
        leave="transform duration-200 transition ease-in-out"
        leaveFrom="opacity-100 rotate-0 scale-100 "
        leaveTo="opacity-0 scale-95 "
      >
        <div
          className={`${imgSrc}   overflow-hidden rounded-md p-4 hover:scale-105 hover:bg-slate-900`}
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
                  className="h-full w-full bg-transparent object-cover object-cover"
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
      </Transition> */}
    </div>
  )
}

export default Card
