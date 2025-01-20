import { app } from '@/constant/app'
import Link from 'next/link'
import { FaInstagram, FaFacebook } from 'react-icons/fa'

const Socials = [
  {
    name: 'Facebook',
    href: app.facebook,
    icon: <FaFacebook size={25} />,
  },
  {
    name: 'Instagram',
    href: app.instagram,
    icon: <FaInstagram size={25} />,
  },
]

export const SocialIcons = () => {
  return (
    <div className="mt-4 flex w-fit gap-2 rounded-lg p-2">
      {Socials.map((i) => {
        return (
          <Link key={i.name} href={i.href} target="_blank">
            {i.icon}
          </Link>
        )
      })}
    </div>
  )
}
