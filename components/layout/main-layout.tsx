'use client'
import { useEffect } from 'react'
import Header from '../molecules/header'

interface Props {
  children: React.ReactNode
  direction?: 'horizontal' | 'vertical'
}
export const MainLayout = (props: Props) => {
  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {})
    resizeObserver.observe(document.body)
    return () => resizeObserver.disconnect()
  }, [])
  return (
    <div className="flex h-full w-full">
      <Header />
      {/* <Navbar vertical={vertical} /> */}
      <div
        className={`mt-[60px] flex w-full justify-center sm:container max-sm:mb-[50px] sm:min-h-full sm:pl-[70px]`}
      >
        <div className="w-full max-w-[640px] pb-[60px]">{props.children}</div>
      </div>
    </div>
  )
}
