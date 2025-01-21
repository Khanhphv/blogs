import { Post, SOURCE } from '@/types/types'

const dummy: Post[] = [
  {
    id: 1,
    title: 'Playlist 1',
    thumbnail: 'https://picsum.photos/200/300',
    description: 'Description 1',
    author: 'Khanh Pham',
    like: 100,
    comment: 100,
    sources: [
      {
        url: 'https://avtshare01.rz.tu-ilmenau.de/avt-vqdb-uhd-1/test_1/segments/bigbuck_bunny_8bit_15000kbps_1080p_60.0fps_h264.mp4',
        type: SOURCE.VIDEO,
      },
    ],
  },
]

const faker = async () => {
  const size = 100

  const res = await fetch(`https://picsum.photos/v2/list?page=2&limit=${size}`)
  const listImage = await res.json()

  const tmp = []
  for (let i = 0; i < size; i++) {
    tmp.push({
      ...dummy[0],
      id: i,
      thumbnail: listImage[i].download_url,
    })
  }
  return tmp
}
export async function GET() {
  const data = await faker()

  return Response.json({ data })
}
