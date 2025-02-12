import StoreCard from '@/components/StoreCard'
import siteMetadata from '@/data/siteMetadata'
import { IProduct } from '@/types/product'
import type { Metadata } from 'next'
import { metadata as rootMetaData } from '@/app/layout'

async function getProduct(id: string) {
  const product = await fetch(`${siteMetadata.siteUrl}/api/products`, {
    next: { revalidate: 0 },
  })
  if (product.ok) return await product.json()
  return []
}

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug

  return {
    ...rootMetaData,
    title: slug,
  }
}
export default async function Page({
  params: { slug },
}: {
  params: { slug: string }
}) {
  const { data } = await getProduct(slug)
  return (
    <div className="flex grow flex-col justify-center">
      <h2 className="mb-4 text-center text-2xl font-bold uppercase">{slug}</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {data.map((e: IProduct, index: number) => {
          return <StoreCard key={index} {...e}></StoreCard>
        })}
      </div>
    </div>
  )
}
