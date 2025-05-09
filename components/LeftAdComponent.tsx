import ResponsiveIframe from './ResponsiveIframe'

interface AdProps {
  url?: string
  height?: number
}

const DEFAULT_AD_PROPS = {
  height: 700,
}

export default function LeftAdComponent({
  url = 'https://www.profitableratecpm.com/wgvpg30k2v?key=da746dbb4d47f7aac6113412d340e71a',
  height = DEFAULT_AD_PROPS.height,
}: AdProps) {
  const adUrl = url

  return <ResponsiveIframe src={adUrl} height={height} />
}
