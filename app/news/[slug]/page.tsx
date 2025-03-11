import { getNews } from '../utils/getNews'
import ReactMarkdown from 'react-markdown'

export default function NewsDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const allNews = getNews()
  const news = allNews.find((item) => item.slug === params.slug)

  if (!news) {
    return <div>News not found</div>
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 rounded-lg bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-lime-100 px-4 py-1.5 text-sm font-medium text-lime-800">
                {news.category}
              </span>
              <time className="text-sm text-gray-600">
                {new Date(news.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900">
              {news.title}
            </h1>
            <p className="mt-4 text-xl leading-relaxed text-gray-600">
              {news.description}
            </p>
          </div>

          <article className="prose prose-lg max-w-none rounded-lg bg-white p-6 shadow-sm prose-headings:font-bold prose-h2:text-2xl prose-h2:text-gray-900 prose-h3:text-xl prose-h3:text-gray-800 prose-p:text-gray-600 prose-strong:font-semibold prose-strong:text-gray-900 prose-li:text-gray-600">
            <ReactMarkdown>{news.content || ''}</ReactMarkdown>
          </article>
        </div>
      </div>
    </div>
  )
}
