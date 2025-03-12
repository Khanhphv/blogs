import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import puppeteer from 'puppeteer'
import { writeFile } from 'fs/promises'
import TurndownService from 'turndown'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

interface PubgNews {
  title: string
  date: string
  category: string
  platform: string[]
  link: string
  content?: string
}

async function weeklyTask() {
  try {
    console.log('Starting PUBG news crawler...')

    const turndownService = new TurndownService({
      headingStyle: 'atx',
      codeBlockStyle: 'fenced',
    })

    // Configure turndown to handle some special cases
    turndownService.addRule('imageRule', {
      filter: ['img'],
      replacement: function (content: string, node: Node): string {
        const img = node as HTMLImageElement
        const alt = img.alt || ''
        const src = img.src || ''
        return `![${alt}](${src})`
      },
    })

    const browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage()

    await page.goto('https://www.pubg.com/en/news', {
      waitUntil: 'networkidle0',
    })

    // Extract news list
    const newsLinks = await page.evaluate(() => {
      const articles = Array.from(
        document.getElementsByClassName('post-contents__card')
      ) as HTMLElement[]

      return articles.map((article) => ({
        title:
          (
            article.getElementsByClassName(
              'post__description'
            )[0] as HTMLElement
          )?.textContent?.trim() || '',
        date:
          (
            article.getElementsByClassName('post__bottom')?.[0] as HTMLElement
          )?.textContent?.trim() || '',
        category: 'PUBG',
        platform: Array.from(article.querySelectorAll('.platform')).map(
          (p) => (p as HTMLElement).textContent?.trim() || ''
        ),
        link: (article.querySelector('a') as HTMLAnchorElement)?.href || '',
      }))
    })

    // Visit each article and extract content
    const news: PubgNews[] = []
    for (const item of newsLinks) {
      console.log(`Crawling: ${item.title}`)
      await page.goto(item.link, { waitUntil: 'networkidle0' })

      const content = await page.evaluate(() => {
        const articleContent = document.querySelector('.news-detail__content')
        return articleContent?.innerHTML || ''
      })

      // Convert HTML content to Markdown
      const markdownContent = turndownService.turndown(content)

      news.push({
        ...item,
        content: markdownContent,
      })

      // Add a small delay to avoid rate limiting
      await new Promise((resolve) => setTimeout(resolve, 1000))
    }

    await browser.close()

    // Save to JSON
    const dataPath = join(process.cwd(), 'app/news/data/pubg-news.json')
    await writeFile(dataPath, JSON.stringify(news, null, 2))

    // Create markdown files
    for (const item of news) {
      const markdownContent = `---
title: "${item.title}"
date: "${item.date}"
category: "${item.category}"
platforms: ${JSON.stringify(item.platform)}
---

${item.content}

[Original Article](${item.link})
`

      const fileName = item.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')

      await writeFile(
        join(process.cwd(), `app/news/data/${fileName}.md`),
        markdownContent
      )
    }

    console.log('Successfully updated PUBG news data')
  } catch (error) {
    console.error('Error running weekly news crawler:', error)
    process.exit(1)
  }
}

weeklyTask()
