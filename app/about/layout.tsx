import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'I design professional personal websites that help creative artists express their identity online.',
  openGraph: {
    title: 'About — Yoesel',
    description: 'I design professional personal websites that help creative artists express their identity online.',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
