'use client'
import { useEffect, useState } from 'react'
import { Navbar, Sidebar } from '../organism/navbar'
import Header from '../molecules/header'
import LoginButton from '../molecules/login-button'
import Logo from '../atoms/logo'

interface Props {
  children: React.ReactNode
  direction?: 'horizontal' | 'vertical'
}
export const UserLayout = (props: Props) => {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col">
        <Navbar className=" border-b-2 p-2">
          <Logo />
          <Sidebar>
            <>
              Cart
              <LoginButton>Login</LoginButton>
            </>
          </Sidebar>
        </Navbar>
        <div
          className={`sm:min-h-full w-full sm:container max-sm:mb-[50px] flex justify-center sm:pl-[70px] mt-[60px]`}
        >
          <div className="container pb-[60px] w-full">{props.children}</div>
        </div>
      </div>
    </div>
  )
}
