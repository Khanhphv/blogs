import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type NewsItem = {
  id: number
  title: string
  description: string
  date: string
  category: string
  slug: string
  content?: string
}

export function getNews(): NewsItem[] {
  const newsDirectory = path.join(process.cwd(), 'app/news/data')
  const fileNames = fs.readdirSync(newsDirectory)

  const allNews = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(newsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        content,
        ...(data as Omit<NewsItem, 'slug' | 'content'>),
      }
    })

  // Sort by date
  return allNews.sort((a, b) => (a.date < b.date ? 1 : -1))
}
