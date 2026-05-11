import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Xom Bee Official',
  description: 'Case study: Xom Bee Official — a personal website for a music artist to showcase songs and music videos. UI/UX design and frontend development by Sangay Yoesel.',
  openGraph: {
    title: 'Xom Bee Official — Yoesel',
    description: 'Case study: Music artist personal website. UI/UX design and frontend development.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
