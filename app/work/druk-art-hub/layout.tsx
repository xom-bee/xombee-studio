import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Druk Art Hub',
  description: 'Case study: Druk Art Hub — a digital platform for Bhutanese artists to showcase and connect. UI/UX design and branding by Sangay Yoesel.',
  openGraph: {
    title: 'Druk Art Hub — Yoesel',
    description: 'Case study: Digital platform for Bhutanese artists. UI/UX design and brand identity.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
