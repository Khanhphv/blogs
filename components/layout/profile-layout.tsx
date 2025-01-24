'use client'
import Image from 'next/image'
import { app } from '@/constant/app'
import { SocialIcons } from '../organism/socials'
import { MENU as MENU_CONSTANT } from '@/constant/app'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props {
  children: React.ReactNode
}

const MENU = [
  {
    title: 'Home',
    href: MENU_CONSTANT.HOME,
  },
  {
    title: 'Story',
    href: MENU_CONSTANT.STORY,
  },
]
export const ProfileLayout = (props: Props) => {
  const segment = usePathname()

  const uploadFIle = async (e: any) => {
    console.log(e.target.files)
    const formData = new FormData()
    formData.append('file', e.target.files[0])
    const url = `${process.env.NEXT_PUBLIC_API}/upload`
    const res = await fetch(url, {
      method: 'POST',
      body: formData,
    })
    console.log(res)
  }

  return (
    <div>
      <div className="flex gap-4">
        <Image
          className="rounded-full"
          src="/Image.png"
          width={200}
          height={200}
          style={{ width: '150px', height: '150px' }}
          alt="logo"
        />
        <div className="flex flex-col">
          <h1 className="text-2xl">{app.name}</h1>
          <h2>@{app.nickname}</h2>
          <SocialIcons />
          <div>
            <input type="file" onChange={uploadFIle} />
          </div>
        </div>
      </div>
      <div className="mt-6 grid grid-flow-col justify-stretch border-t">
        {MENU.map((i) => {
          return (
            <Link
              key={i.title}
              href={i.href}
              className={`flex items-center justify-center p-2 ${
                segment === i.href ? 'border-t-2' : ''
              }`}
            >
              {i.title}
            </Link>
          )
        })}
      </div>
      <div className="mt-[30px]">{props.children}</div>
    </div>
  )
}
