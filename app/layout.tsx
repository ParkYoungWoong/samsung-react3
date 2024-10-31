import './globals.css'
import Header from '@/components/Header'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={`antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  )
}

// http://localhost:3000/components
