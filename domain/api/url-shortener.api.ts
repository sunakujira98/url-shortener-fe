import { TURL, TURLShortenerRequestBody } from '../types/url-shortener.types'

import { apiInstance } from './api-instance'

const BASE_URL = '/api/url-shortener'

export const urlShortenerAPI = {
  create: async function (requestBody: TURLShortenerRequestBody): Promise<TURL> {
    const result = await apiInstance.post<TURL>(`${process.env.NEXT_PUBLIC_BACKEND_URL}${BASE_URL}`, requestBody)

    return result.data
  },
}
