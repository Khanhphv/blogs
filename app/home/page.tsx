'use client'
import { HomePage } from '@/components/views/home-page'
import { useSession } from 'next-auth/react'

export default function Home() {
  const session = useSession()

  return (
    <>
      <HomePage />
    </>
  )
}
