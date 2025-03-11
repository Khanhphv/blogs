import React from 'react'
import NewsList from '@/components/molecules/NewsList'
import { getNews } from './utils/getNews'

export default function Page() {
  const news = getNews()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Latest News</h1>
        <p className="mt-2 text-gray-600">
          Stay updated with the latest developments
        </p>
      </div>

      <NewsList news={news} />
    </div>
  )
}
