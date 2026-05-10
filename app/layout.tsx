import type { Metadata, Viewport } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@/components/analytics'
import { Navbar } from '@/components/navbar'
import { BackgroundLayer } from '@/components/background-layer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://yoesel.com'),
  title: {
    default: 'Yoesel — Digital Designer for Creative Artists',
    template: '%s — Yoesel',
  },
  description:
    'I design personal websites that help artists be seen and remembered. Visual identity, UI/UX, and brand design by Sangay Yoesel.',
  keywords: ['visual identity', 'music artist branding', 'UI/UX design', 'Bhutan', 'Yoesel', 'Sangay Yoesel', 'portfolio', 'web design'],
  authors: [{ name: 'Sangay Yoesel' }],
  creator: 'Sangay Yoesel',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Yoesel',
    title: 'Yoesel — Digital Designer for Creative Artists',
    description: 'Personal websites for creative artists. Visual identity, UI/UX, and brand design.',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'Yoesel — Digital Designer for Creative Artists',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yoesel — Digital Designer for Creative Artists',
    description: 'Personal websites for creative artists. Visual identity, UI/UX, and brand design.',
    images: ['/api/og'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#0f0f0f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} bg-background`}>
      <body className="font-sans antialiased overflow-x-hidden">
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:px-4 focus:py-2 focus:bg-background focus:text-foreground focus:rounded-lg focus:border focus:border-border"
        >
          Skip to main content
        </a>
        <BackgroundLayer />
        <Navbar />
        <div className="w-full overflow-hidden">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}
