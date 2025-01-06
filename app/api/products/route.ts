export async function GET() {
  //   const res = await fetch('https://data.mongodb-api.com/...', {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'API-Key': process.env.DATA_API_KEY,
  //     },
  //   })
  //   const data = await res.json()

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
      title: 'Product 1',
      thumbnail: '/Image.png',
      description: 'Description 1',
      price: 100,
    },
  ]

  return Response.json({ data })
}
