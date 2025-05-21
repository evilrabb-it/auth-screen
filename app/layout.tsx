import './globals.css'

export const metadata = {
  title: 'Team Access',
  description: 'Secure access to Evil Rabbit’s workspace. Sign in or request to continue.',
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
