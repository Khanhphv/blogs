import Card from '@/components/Card'
import siteMetadata from '@/data/siteMetadata'
import { Metadata } from 'next'
const getApplication = async () => {
  const data = await fetch(`${siteMetadata.siteUrl}/api/application`, {
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  if (data.ok) {
    const application = await data.json()
    return application
  }
  return { data: [] }
}
export const metadata: Metadata = {
  title: 'Applications',
  description: '...',
}

export default async function Applications() {
  const { data: applicaitons } = await getApplication()
  return (
    <div className="-m-4 flex grow flex-wrap items-center justify-center">
      {applicaitons?.map((app, index: number) => {
        return <Card key={index} {...app}></Card>
      })}
    </div>
  )
}
