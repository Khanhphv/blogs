import React from 'react'

interface ResponsiveIframeProps {
  src: string
  height?: number | string
  className?: string
  style?: React.CSSProperties
  scrolling?: 'yes' | 'no' | 'auto'
}

export default function ResponsiveIframe({
  src,
  height = '100%',
  className = '',
  style = {},
  scrolling = 'no',
}: ResponsiveIframeProps) {
  return (
    <div className="relative w-full">
      <iframe
        src={src}
        height={height}
        scrolling={scrolling}
        className={`w-full ${className}`}
        style={{ border: 'none', ...style }}
      />
    </div>
  )
}
