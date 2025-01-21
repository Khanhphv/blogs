import { Post } from '@/types/types'
import Image from 'next/image'

export default async function Home() {
  const url = `${process.env.NEXT_PUBLIC_API}/post`
  const res = await fetch(url)
  if (!res.ok) return

  const data = await res.json()
  const { data: post } = data

  const formatData = []
  const step = 3
  for (let i = 0; i < post.length; i += step) {
    const group = post.slice(i, i + step)
    while (group.length < step) {
      group.push({}) // Fill the remaining slots with empty objects
    }
    formatData.push(group)
  }
  return (
    <div className="flex flex-col gap-2">
      {formatData.map((j: Post[], index: number) => {
        return (
          <div className="flex gap-2" key={index}>
            {j.map((p: Post, index: number) => (
              <div key={index} className="flex-1">
                {p?.thumbnail ? (
                  <Image
                    className="h-full w-full rounded object-cover"
                    src={p?.thumbnail}
                    width={200}
                    height={200}
                    alt={p?.description}
                  />
                ) : (
                  <></>
                )}
              </div>
            ))}
          </div>
        )
      })}
    </div>
  )
}
