import Card from '@/components/Card'
import siteMetadata from '@/data/siteMetadata'
import { Metadata } from 'next'
import { IApplication } from '@/types/application'
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
  const { data: applications } = await getApplication()
  return (
    <div className="xs:grid-cols-1 grid justify-center gap-4 sm:grid-cols-2 md:grid-cols-4">
      {applications?.map((app: IApplication, index: number) => {
        return <Card key={index} {...app}></Card>
      })}
    </div>
  )
}
