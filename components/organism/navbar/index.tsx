'use client'
import { PiSmileyMelting } from 'react-icons/pi'
import { MENU as MENU_CONSTANT } from '@/constant/app'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import MobileNav from '@/components/MobileNav'

export const MENU = [
  {
    title: 'Home',
    href: MENU_CONSTANT.HOME,
    icon: <PiSmileyMelting size={30} />,
  },

  {
    title: 'Applications',
    href: '/applications',
    icon: <PiSmileyMelting size={30} />,
  },

  {
    title: 'Product',
    href: '/store/valorant',
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
  return (
    <>
      <div
        className={`h-full w-full flex-row ${className} sticky top-0 bg-background`}
      >
        <div className="flex justify-between gap-4 bg-background">
          {children}
        </div>
      </div>
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
  const segment = useSelectedLayoutSegment()
  return (
    <div className={`flex grow justify-end ${className}`}>
      <div className="flex grow justify-center gap-10 max-sm:hidden">
        {MENU.map((i, index) => {
          return (
            <>
              <Link
                key={index}
                href={i.href}
                className={`flex items-center justify-center hover:text-lime-400 ${
                  segment && i.href.includes(segment) ? 'text-lime-400' : ''
                }`}
              >
                {i.title}
              </Link>
            </>
          )
        })}
      </div>

      <div className="align-end flex items-center gap-4">
        {children}
        <MobileNav />
      </div>
    </div>
  )
}
