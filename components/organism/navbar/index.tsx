import { useEffect, useMemo, useState } from 'react'
import { PiSmileyMelting } from 'react-icons/pi'
import { VscNote } from 'react-icons/vsc'
import { MENU as MENU_CONSTANT } from '@/constant/app'
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
          <div className="container flex justify-between gap-4 bg-background">
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
      <div className="flex grow justify-center gap-10">
        {MENU.map((i) => {
          return (
            <>
              <Link
                href={i.href}
                className="flex items-center justify-center hover:underline"
              >
                {i.title}
              </Link>
            </>
          )
        })}
      </div>

      <div className="flex items-center gap-4">{children}</div>
    </div>
  )
}
