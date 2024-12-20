import { useEffect, useMemo, useState } from 'react'
import { PiSmileyMelting } from 'react-icons/pi'
import { VscNote } from 'react-icons/vsc'
import { MENU as MENU_CONSTANT } from '@/constant/app'
import _ from 'lodash'
import Link from 'next/link'

export const MENU = [
  {
    title: 'Home',
    href: MENU_CONSTANT.HOME,
    icon: <PiSmileyMelting size={30} />,
  },
  {
    title: 'Contact',
    href: '/contact',
    icon: <VscNote size={30} />,
  },
  {
    title: 'Product',
    href: '/product',
    icon: <PiSmileyMelting size={30} />,
  },
  {
    title: 'About',
    href: '/about',
    icon: <PiSmileyMelting size={30} />,
  },
]

export const Navbar = ({
  children,
  className,
}: {
  children?: React.ReactNode
  className?: string
}) => {
  const [isLoaded, setIsLoaded] = useState(false)

  const classNameMain = useMemo(() => {
    return `flex-row w-full h-full ${className}`
  }, [className])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <>
      {isLoaded && (
        <div className={`${classNameMain}`}>
          <div className="flex justify-between gap-4 container bg-background">
            {children}
          </div>
        </div>
      )}
    </>
  )
}

export const Sidebar = ({
  className = '',
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div className={`flex grow ${className}`}>
      <div className="flex grow gap-10  justify-center">
        {MENU.map((i, v) => {
          return (
            <>
              <Link
                href={i.href}
                className="flex justify-center items-center hover:underline"
              >
                {i.title}
              </Link>
            </>
          )
        })}
      </div>

      <div className="flex gap-4 items-center">{children}</div>
    </div>
  )
}
