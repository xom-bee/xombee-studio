import type { Metadata } from 'next'
import { allSongs } from '@/lib/lyrics'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; song: string }>
}): Promise<Metadata> {
  const { slug, song: songSlug } = await params
  const song = allSongs.find((s) => s.slug === songSlug && s.category === slug)

  if (!song) {
    return { title: 'Lyrics — Xom Bee Studio' }
  }

  return {
    title: `${song.title} — Lyrics | Xom Bee Studio`,
    description: `Read the lyrics to ${song.title} by Xom Bee.`,
  }
}

export default function SongLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
