import React from 'react'

interface ResponsiveIframeProps {
  src: string
  height?: number | string
  className?: string
  style?: React.CSSProperties
  scrolling?: 'yes' | 'no' | 'auto'
  onError?: () => void
}

export default function ResponsiveIframe({
  src,
  height = '100%',
  className = '',
  style = {},
  scrolling = 'no',
  onError,
}: ResponsiveIframeProps) {
  return (
    <div className="relative w-full">
      <iframe
        src={src}
        height={height}
        scrolling={scrolling}
        className={`w-full ${className}`}
        style={{ border: 'none', ...style }}
        onError={onError}
      />
    </div>
  )
}
