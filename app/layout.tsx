import './globals.css'
import Header from '@/components/Header'
import { Noto_Sans_KR } from 'next/font/google'

export const metadata = {
  title: {
    template: 'Next / %s',
    default: '기본 제목'
  }
}

const noto = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-noto-sans-kr'
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={`${noto.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  )
}

// http://localhost:3000/components
