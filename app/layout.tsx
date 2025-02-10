import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
import { SessionProvider } from 'next-auth/react'
import { Analytics } from '@vercel/analytics/react'
import { UserLayout } from '@/components/layout/user-layout'
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  keywords: siteMetadata.keyword,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
    description: siteMetadata.description,
  },
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const basePath = process.env.DOMAIN_URL || ''
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href={`${basePath}/logo.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${basePath}/logo.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${basePath}/logo.png`}
        />
        <link
          rel="manifest"
          href={`${basePath}/static/favicons/site.webmanifest`}
        />
        <link
          rel="mask-icon"
          href={`${basePath}/static/favicons/safari-pinned-tab.svg`}
          color="#5bbad5"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#fff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#000"
        />
      </head>
      <body suppressHydrationWarning>
        {/* <SessionProvider> */}
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Analytics />
          <div className="webkit-gap"></div>
          {/* {children} */}
          <UserLayout>{children}</UserLayout>
        </ThemeProvider>
        {/* </SessionProvider> */}
      </body>
      <GoogleAnalytics gaId="GTM-N7TBW7X5" />
    </html>
  )
}
