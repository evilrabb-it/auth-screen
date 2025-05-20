import { Geist_Mono } from 'next/font/google'
import './globals.css'

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata = {
  title: 'Evil Rabbit — Access',
  description: 'Secure access to Evil Rabbit’s platform. Sign in or register to continue.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={geistMono.variable}>
      <body className="font-mono bg-white text-black">{children}</body>
    </html>
  )
}
