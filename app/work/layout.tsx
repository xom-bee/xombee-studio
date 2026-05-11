import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Selected projects in UI/UX design, frontend development, and visual identity by Sangay Yoesel. Druk Art Hub, Xom Bee, Scan2Dine, and more.',
  openGraph: {
    title: 'Work — Yoesel',
    description: 'Selected projects in UI/UX design, frontend development, and visual identity.',
  },
}

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
