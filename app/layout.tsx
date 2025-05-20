import { GeistSans } from 'geist/font/sans'
import './globals.css'

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
    <html lang="en" className={GeistSans.className}>
      <body className="bg-white text-black">
        {children}
      </body>
    </html>
  )
}
