import { NextRequest } from 'next/server'
import { dummy } from '../dummy'

export async function GET(
  rq: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params

  const data = dummy.find((p) => p.id === Number(id))

  return Response.json({ data })
}
