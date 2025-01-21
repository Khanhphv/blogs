const playlists = [
  {
    id: 1,
    title: 'Playlist 1',
    thumbnail: '/Image.png',
    description: 'Description 1',
  },
  {
    id: 2,
    title: 'Playlist 2',
    thumbnail: '/Image.png',
    description: 'Description 2',
  },
]
export async function GET() {
  const data = playlists

  return Response.json({ data })
}
