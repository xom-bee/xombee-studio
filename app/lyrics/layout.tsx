import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lyrics — Xom Bee Studio',
  description: 'Lyrics written by Xom Bee',
}

export default function LyricsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
