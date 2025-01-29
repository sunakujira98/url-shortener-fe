export type TURLShortenerRequestBody = {
  url: string
}

export type TBaseURL = {
  short_url: string
  long_url: string
}

export type TURL = TBaseURL & {
  id: number
}
