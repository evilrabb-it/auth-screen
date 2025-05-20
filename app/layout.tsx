import './globals.css'
import { GeistMono } from 'geist/font/mono'

export const metadata = {
  title: 'Evil Rabbit — Access',
  description: 'Secure access to Evil Rabbit’s platform. Sign in or register to continue.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={GeistMono.variable}>
      <body className="font-mono bg-white text-black">{children}</body>
    </html>
  )
}
