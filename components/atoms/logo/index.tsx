import { app } from '@/constant/app'
import { cn } from '@/lib/utils'

import { Advent_Pro } from 'next/font/google'

const font = Advent_Pro({ subsets: ['latin'], style: ['normal', 'italic'] })
export default function Logo() {
  return (
    <div className={cn('text-3xl font-bold', font.className)}>
      {app.nickname}
    </div>
  )
}
