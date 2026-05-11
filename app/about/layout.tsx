import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Sangay Yoesel is a digital designer and frontend developer from Thimphu, Bhutan. Specialising in UI/UX design, visual identity, and personal websites for creative artists.',
  openGraph: {
    title: 'About — Yoesel',
    description: 'Digital designer and frontend developer from Bhutan, specialising in creative artist websites and visual identity.',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
