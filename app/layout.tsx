import './globals.css'

export const metadata = {
  title: 'Team Access',
  description: 'Secure access to Evil Rabbit’s workspace. Sign in or request to continue.',
  keywords: ['Evil Rabbit', 'Team Access', 'Authentication UI', 'Sign In', 'Access Request'],
  authors: [{ name: 'Evil Rabbit' }],
  creator: 'Evil Rabbit',
  metadataBase: new URL('https://team-access.vercel.app'),
  openGraph: {
    title: 'Team Access – Evil Rabbit',
    description: 'Secure access to Evil Rabbit’s workspace.',
    url: 'https://team-access.vercel.app',
    siteName: 'Evil Rabbit',
    images: [
      {
        url: '/evilrabbit-opengraph.png',
        width: 1200,
        height: 630,
        alt: 'Evil Rabbit Logo',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Team Access – Evil Rabbit',
    description: 'Secure access to Evil Rabbit’s workspace.',
    images: ['/evilrabbit-opengraph.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
