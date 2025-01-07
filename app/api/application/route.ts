import { siteAPI } from '@/data/siteMetadata'
import { NextResponse } from 'next/server'
const dummy = [
  {
    id: 1,
    title: 'Valorant',
    description: 'Application 1 description',
    href: '/store/valorant',
    imgSrc: '/games/x.png',
  },
]
export async function GET() {
  const data = await fetch(`${siteAPI}/applications`, {
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-cache',
  })
  if (data.ok) {
    return NextResponse.json({
      data: await data.json(),
    })
  }
  return NextResponse.json({
    data: dummy,
  })
}
