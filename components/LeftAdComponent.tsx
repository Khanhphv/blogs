'use client'
import { useEffect, useState } from 'react'
import ResponsiveIframe from './ResponsiveIframe'

interface AdProps {
  url?: string
  height?: number
  fallbackBehavior?: 'redirect' | 'newWindow' | 'none'
}

const DEFAULT_AD_PROPS = {
  height: 700,
  fallbackBehavior: 'newWindow' as const,
}

const enforceHttps = (url: string) => {
  // Replace http:// with https:// or add https:// if no protocol is specified
  if (url.startsWith('http://')) {
    return url.replace('http://', 'https://')
  }
  if (!url.startsWith('https://')) {
    return `https://${url}`
  }
  return url
}

export default function LeftAdComponent({
  url = 'https://www.profitableratecpm.com/wgvpg30k2v?key=da746dbb4d47f7aac6113412d340e71a',
  height = DEFAULT_AD_PROPS.height,
  fallbackBehavior = DEFAULT_AD_PROPS.fallbackBehavior,
}: AdProps) {
  const [iframeError, setIframeError] = useState(false)
  const adUrl = enforceHttps(url)

  useEffect(() => {
    const handleIframeError = () => {
      setIframeError(true)
      if (fallbackBehavior === 'newWindow') {
        window.open(adUrl, '_blank', 'noopener,noreferrer')
      } else if (fallbackBehavior === 'redirect') {
        window.location.href = adUrl
      }
    }

    window.addEventListener('securitypolicyviolation', handleIframeError)
    return () => {
      window.removeEventListener('securitypolicyviolation', handleIframeError)
    }
  }, [adUrl, fallbackBehavior])

  if (iframeError) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-gray-100 p-4 text-center text-sm text-gray-600">
        Ad content is available in a new window
      </div>
    )
  }

  return (
    <ResponsiveIframe
      src={adUrl}
      height={height}
      onError={() => setIframeError(true)}
    />
  )
}
