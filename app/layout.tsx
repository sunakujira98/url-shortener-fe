import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'
import ReactQueryProvider from '@/providers/QueryClientProvider'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'cendekin',
  description: 'Your simple URL shortener',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <ReactQueryProvider>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
      </ReactQueryProvider>
    </html>
  )
}
