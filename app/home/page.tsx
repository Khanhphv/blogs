import { delay } from '@/utils'

export default async function Home() {
  await delay(5000)
  const url = `${process.env.NEXT_PUBLIC_API}/playlist`
  const res = await fetch(url)
  const data = await res.json()
  const { data: playlists } = data

  return (
    <>
      <div>
        {playlists.map((i: any) => {
          return (
            <div key={i.id} className="mt-2 min-h-[200px] border-b">
              <p className="text-xl font-bold">{i.title}</p>
              <p className="text-sm">{i.description}</p>
              <div className="flex"></div>
            </div>
          )
        })}
      </div>
    </>
  )
}
