import '@styles/globals.css';
import { Inter } from 'next/font/google'
import { Sacramento } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const sacramento = Sacramento({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-sacramento',
})

export const metadata = {
  title: 'The Body Shape Calculator',
  description: 'A Calculator to help women discover their body shape and learn how to dress for it.',
}

export default function RootLayout({ children }) {
  return (
    <html className={`${sacramento.variable}`} lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
