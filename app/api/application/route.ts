import { VALORANT } from '@/data/constant'
import { NextResponse } from 'next/server'
const dummy = VALORANT
export async function GET() {
  return NextResponse.json({
    data: dummy,
  })
}
