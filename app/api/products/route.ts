import { social } from './dummy'

export async function GET() {
  const data = social

  return Response.json({ data })
}
