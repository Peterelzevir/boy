import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BtW aKUh GaNTeNG GaKK SaYAnGG 🥰😍🤭🤭🥵',
  description: 'untuk orang ganteng njir 😍',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
