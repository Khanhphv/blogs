import { PiSmileyMelting } from 'react-icons/pi'
import { MENU as MENU_CONSTANT } from '@/constant/app'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

export const MENU = [
  {
    title: 'Home',
    href: MENU_CONSTANT.HOME,
    icon: <PiSmileyMelting size={30} />,
  },

  {
    title: 'Product',
    href: '/products',
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
      <div className={`h-full w-full flex-row ${className}`}>
        <div className="container flex justify-between gap-4 bg-background">
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
    <div className={`flex grow ${className}`}>
      <div className="flex grow justify-center gap-10">
        {MENU.map((i, index) => {
          return (
            <>
              <Link
                key={index}
                href={i.href}
                className={`flex items-center justify-center hover:underline ${
                  segment === i.href.replace('/', '') ? 'underline' : ''
                }`}
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
