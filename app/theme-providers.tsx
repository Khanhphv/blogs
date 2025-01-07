'use client'

import { ThemeProvider, useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeProviders({ children }: { children: React.ReactNode }) {
  const { setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // When mounted on client, now we can show the UI
  useEffect(() => {
    setTheme('dark')
    setMounted(true)
  }, [])

  return (
    <ThemeProvider attribute="class" defaultTheme={'dark'} enableSystem>
      {children}
    </ThemeProvider>
  )
}
