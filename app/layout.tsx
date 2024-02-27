import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ReduxProvider } from '@/redux/provider'
import ToasterContext from './context/ToasterContext'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chilin',
  description: 'Kedai Kopi Online, Dengan Kopi Terbaik',
  icons: {
   icon:`/logo.png`,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/logo.png"/>
      </head>
      <body className={inter.className}>
        <ReduxProvider>
          <ToasterContext />
          {children}
        </ReduxProvider>
        <Script data-client-key={`${process.env.NEXT_PUBLIC_CLIENT_KEY_MIDTRANS}`} src="https://app.sandbox.midtrans.com/snap/snap.js"/>
      </body>
    </html>
  )
}
