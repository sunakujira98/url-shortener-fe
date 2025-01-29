import axios, { AxiosError } from 'axios'

export type APIError = {
  status: string
  error: {
    code: string
    message: string
    status: number
    details?: Array<{ field: string; message: string }>
  }
}

export const apiInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

apiInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError<APIError>) => {
    const errorMessage = error.response?.data?.error?.message || 'An unexpected error occurred'
    const errorCode = error.response?.data?.error?.code || 'UNKNOWN_ERROR'
    const statusCode = error.response?.status || 500

    return Promise.reject({
      message: errorMessage,
      code: errorCode,
      status: statusCode,
    })
  },
)
