import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Evil Rabbit — Access',
  description: 'Secure access to Evil Rabbit’s platform. Sign in or register to continue.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
