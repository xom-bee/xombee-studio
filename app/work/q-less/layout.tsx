import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Q-Less',
  description: 'Case study: Q-Less — a queue management system designed to reduce waiting time. UI/UX design by Sangay Yoesel.',
  openGraph: {
    title: 'Q-Less — Yoesel',
    description: 'Case study: Queue management system reducing patient and customer wait times.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
