export async function GET() {
  const data = [
    {
      id: 1,
      title: 'Product 1',
      thumbnail: '/Image.png',
      description: 'Description 1',
      price: 100,
    },
    {
      id: 2,
      title: 'Product 2',
      thumbnail: '/Image.png',
      description: 'Description 2',
      price: 100,
    },
  ]

  return Response.json({ data })
}

export async function POST() {}
