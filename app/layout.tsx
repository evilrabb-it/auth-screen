import { Geist_Sans } from 'next/font/google'
import './globals.css'

const geistSans = Geist_Sans({
  subsets: ['latin'],
  variable: '--font-geist-sans',
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
    <html lang="en" className={geistSans.variable}>
      <body className="font-geistSans bg-white text-black">
        {children}
      </body>
    </html>
  )
}
