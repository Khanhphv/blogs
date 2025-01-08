'use client'
import { HTMLAttributes, useContext, useMemo } from 'react'
import { Avatar, AvatarImage, AvatarFallback } from '../../ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../ui/dropdown-menu'

import { signIn, signOut, useSession } from 'next-auth/react'
import { AuthContext } from '../../authorize'
// import { login as loginApi } from '@/api/user'

type HeaderProps = HTMLAttributes<HTMLDivElement>

export default function LoginButton(props: HeaderProps) {
  const login = () => {
    signIn('google')
  }
  const logout = async () => {
    signOut()
  }

  const { data, status } = useSession()

  const name = useMemo(() => {
    const names = data?.user?.name?.split(' ')
    return names?.[names?.length - 1].slice(0, 1)
  }, [data?.user?.name])

  if (status === 'authenticated') {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src={data?.user?.image || ''} />
            <AvatarFallback className="border-2 bg-white font-bold">
              {name}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40 rounded-md border bg-popover shadow-md">
          <DropdownMenuItem onClick={() => logout()} className="text-center">
            <button className="font-medium leading-none">Sign out</button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  } else if (status === 'unauthenticated') {
    return (
      <div className="cursor-pointer hover:text-lime-400" onClick={login}>
        {props.children}
      </div>
    )
  } else {
    return <></>
  }
}
