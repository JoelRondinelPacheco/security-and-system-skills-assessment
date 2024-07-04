import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import ThemeContextProvider from '@/context/theme.context'
import ThemeWrapper from '@/context/theme-wrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <ThemeContextProvider>
          <ThemeWrapper>
            <Header />  
            {children}
            <Footer />
          </ThemeWrapper>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
