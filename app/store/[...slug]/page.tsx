import StoreCard from '@/components/StoreCard'
import { VALORANT } from '@/data/constant'

export default function Page({
  params: { slug },
}: {
  params: { slug: string }
}) {
  return (
    <div className="flex grow flex-col justify-center">
      <h2 className="text-center text-2xl font-bold uppercase">{slug}</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {VALORANT.map((e, index) => {
          return <StoreCard key={index} {...e}></StoreCard>
        })}
      </div>
    </div>
  )
}
