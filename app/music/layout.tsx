import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Music — Xom Bee Studio',
  description: 'Music by Xom Bee',
}

export default function MusicLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
