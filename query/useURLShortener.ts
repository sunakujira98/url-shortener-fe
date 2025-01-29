import { useMutation } from '@tanstack/react-query'

import { urlShortenerAPI } from '@/domain/api/url-shortener.api'

export const useCreateURLShortenerMutation = () => {
  const mutation = useMutation({
    mutationFn: urlShortenerAPI.create,
  })

  return mutation
}
