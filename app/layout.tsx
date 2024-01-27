import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ReduxProvider } from '@/redux/provider'
import ToasterContext from './context/ToasterContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chilin',
  description: 'Kedai Kopi Online, Dengan Kopi Terbaik',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <ToasterContext />
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}
