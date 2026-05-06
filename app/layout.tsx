import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@/components/analytics'
import { Navbar } from '@/components/navbar'
import { BackgroundLayer } from '@/components/background-layer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Yoesel — Digital Designer for Creative Artists',
  description:
    'I design personal websites that help artists be seen and remembered. Visual identity, UI/UX, and brand design by Sangay Yoesel.',
  keywords: ['visual identity', 'music artist branding', 'UI/UX design', 'Bhutan', 'Yoesel', 'Sangay Yoesel'],
  authors: [{ name: 'Sangay Yoesel' }],
  openGraph: {
    title: 'Yoesel',
    description: 'Digital designer for creative artists',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
      },
    ],
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
    <html lang="en" className={`${inter.variable} bg-background`}>
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
        <Script
          id="clarity-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","wf3rv1xmng");`,
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6PC3WD41GG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6PC3WD41GG');
          `}
        </Script>
      </body>
    </html>
  )
}
