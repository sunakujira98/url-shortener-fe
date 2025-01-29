import ShortURLPage from '@/pages/ShortURL'

interface PageProps {
  params: {
    shortUrl: string
  }
}

export default async function Page({ params }: PageProps) {
  const { shortUrl } = await params
  return <ShortURLPage shortURL={shortUrl} />
}
