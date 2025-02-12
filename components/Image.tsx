import NextImage, { ImageProps } from 'next/image'

const basePath = process.env.DOMAIN_URL

const Image = ({ src, ...rest }: ImageProps) => (
  <NextImage src={`${basePath || ''}${src}`} {...rest} />
)

export default Image
