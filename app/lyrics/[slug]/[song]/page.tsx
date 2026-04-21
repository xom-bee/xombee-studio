'use client'

import { use } from 'react'
import Link from 'next/link'
import { allSongs } from '@/lib/lyrics'
import { notFound } from 'next/navigation'
import { PageNav } from '@/components/page-nav'

const categoryMeta: Record<string, string> = {
  original:  'Original Songs',
  dzongkha:  'Dzongkha Songs',
  english:   'English Songs',
  nepali:    'Nepali Songs',
  hindi:     'Hindi Songs',
}

export default function SongPage({
  params,
}: {
  params: Promise<{ slug: string; song: string }>
}) {
  const { slug, song: songSlug } = use(params)
  const song = allSongs.find((s) => s.slug === songSlug && s.category === slug)
const categoryLabel = categoryMeta[slug] ?? slug.replace(/-/g, ' ')

  if (!song) notFound()

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      <PageNav />

      <main
        className="page-enter"
        style={{
          maxWidth: '680px',
          margin: '0 auto',
          padding: 'clamp(120px, 18vw, 160px) clamp(24px, 5vw, 48px) 100px',
        }}
      >
        {/* Back */}
        <Link
          href={`/lyrics/${slug}`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '11px',
            color: 'rgba(255,255,255,0.20)',
            textDecoration: 'none',
            letterSpacing: '0.05em',
            marginBottom: '20px',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.48)' }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.20)' }}
        >
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M10 6.5H3M6 3L3 6.5 6 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to {categoryLabel}
        </Link>

        {/* Song header */}
        <div style={{ marginBottom: '48px' }}>
          <h1
            className="font-serif font-bold"
            style={{
              fontSize: 'clamp(36px, 6vw, 56px)',
              color: 'rgba(255,255,255,0.94)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
            }}
          >
            {song.title}
          </h1>

        </div>

        {/* Lyrics */}
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '420px' }}>
          {song.lines.map((line, i) =>
            line === '' ? (
              <div key={i} style={{ height: '40px' }} />
            ) : (
              <p
                key={i}
                style={{
                  fontSize: 'clamp(15px, 2vw, 17px)',
                  color: 'rgba(255,255,255,0.60)',
                  lineHeight: 2.8,
                  fontWeight: 400,
                  letterSpacing: '0.015em',
                  margin: 0,
                }}
              >
                {line}
              </p>
            )
          )}
        </div>

      </main>
    </div>
  )
}
