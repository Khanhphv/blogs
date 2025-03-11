'use client'

import React from 'react'
import Link from 'next/link'

type NewsItem = {
  id: number
  title: string
  description: string
  date: string
  category: string
  slug: string
}

interface NewsListProps {
  news: NewsItem[]
}

export default function NewsList({ news }: NewsListProps) {
  return (
    <div className="grid gap-6">
      {news.map((news) => (
        <Link key={news.id} href={`/news/${news.slug}`} className="group block">
          <article className="rounded-lg border bg-card p-6 transition-all hover:shadow-lg">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-lime-100 px-3 py-1 text-sm text-lime-800">
                {news.category}
              </span>
              <time className="text-sm text-gray-500">
                {new Date(news.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>

            <h2 className="mt-4 text-xl font-semibold group-hover:text-lime-600">
              {news.title}
            </h2>

            <p className="mt-2 text-gray-600">{news.description}</p>

            <div className="mt-4">
              <span className="text-sm font-medium text-lime-600 group-hover:text-lime-700">
                Read more →
              </span>
            </div>
          </article>
        </Link>
      ))}
    </div>
  )
}
