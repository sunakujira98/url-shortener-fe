'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'

import { ScreenSpinner } from '@/components/ScreenSpinner'
import { apiInstance } from '@/domain/api/api-instance'
import { TURL } from '@/domain/types/url-shortener.types'

type ShortURLPageProps = {
  shortURL: string
}

export default function ShortURLPage({ shortURL }: ShortURLPageProps) {
  const router = useRouter()

  useEffect(() => {
    const checkUrl = async () => {
      try {
        const response = await apiInstance.get<TURL>(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/url-shortener/${shortURL}`,
        )

        window.location.href = response.data.long_url
      } catch {
        toast.error('Invalid URL or URL not found')
        router.push('/')
      }
    }

    checkUrl()
  }, [shortURL, router])

  return <ScreenSpinner message="Please wait..." />
}
