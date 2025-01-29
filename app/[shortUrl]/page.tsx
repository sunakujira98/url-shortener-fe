import ShortURLPage from '@/sections/ShortURL'

interface PageProps {
  params: Promise<{
    shortUrl: string
  }>
}

export default async function Page({ params }: PageProps) {
  const { shortUrl } = await params
  return <ShortURLPage shortURL={shortUrl} />
}
