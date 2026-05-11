import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Scan2Dine',
  description: 'Case study: Scan2Dine — a QR-based digital menu system for restaurants. UI/UX design and frontend development by Sangay Yoesel.',
  openGraph: {
    title: 'Scan2Dine — Yoesel',
    description: 'Case study: QR-based digital dining menu system. UI/UX design and frontend development.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
