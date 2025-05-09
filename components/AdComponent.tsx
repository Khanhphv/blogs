'use client'

export default function AdComponent() {
  return (
    <div id="ad-container" className="w-full">
      <iframe
        className="h-auto w-full"
        style={{
          border: 'none',
          overflow: 'hidden',
          minHeight: '600px',
          maxWidth: '160px',
        }}
        frameBorder="0"
        src="/ads.html"
      />
    </div>
  )
}
