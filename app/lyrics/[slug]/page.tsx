'use client'

import { use, useState } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { allSongs } from '@/lib/lyrics'
import { PageNav } from '@/components/page-nav'

const categoryMeta: Record<string, string> = {
  original:  'Original Songs',
  dzongkha:  'Dzongkha Songs',
  english:   'English Songs',
  nepali:    'Nepali Songs',
  hindi:     'Hindi Songs',
}

function SongRow({
  title,
  index,
  href,
}: {
  title: string
  index: number
  href: string
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link href={href} style={{ textDecoration: 'none' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '18px 0',
          borderBottom: '1px solid rgba(255,255,255,0.025)',
          cursor: 'pointer',
          transition: 'padding-left 0.3s cubic-bezier(0.22,1,0.36,1)',
          paddingLeft: hovered ? '3px' : '0',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '24px' }}>
          <span
            style={{
              fontSize: '11px',
              fontVariantNumeric: 'tabular-nums',
              letterSpacing: '0.06em',
              minWidth: '18px',
              color: hovered ? 'oklch(0.78 0.12 55)' : 'rgba(255,255,255,0.14)',
              transition: 'color 0.25s ease',
            }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>

          <div>
            <p
              style={{
                fontSize: '17px',
                fontWeight: 500,
                color: hovered ? 'rgba(255,255,255,0.90)' : 'rgba(255,255,255,0.65)',
                transition: 'color 0.25s ease',
                marginBottom: '3px',
              }}
            >
              {title}
            </p>
          </div>
        </div>

        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          style={{
            color: 'oklch(0.78 0.12 55)',
            flexShrink: 0,
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translateX(4px)' : 'translateX(0)',
            transition: 'opacity 0.25s ease, transform 0.25s ease',
          }}
        >
          <path
            d="M3 8h10M9 4l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </Link>
  )
}

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  if (!categoryMeta[slug]) notFound()
  const label = categoryMeta[slug]
  const songs = allSongs.filter((s) => s.category === slug).sort((a, b) => a.title.localeCompare(b.title))
  if (songs.length === 0) notFound()

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      <PageNav />

      <main
        className="page-enter"
        style={{
          maxWidth: '680px',
          margin: '0 auto',
          padding: 'clamp(120px, 18vw, 180px) clamp(24px, 5vw, 48px) 100px',
        }}
      >
        {/* Back */}
        <Link
          href="/lyrics"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '10px',
            color: 'rgba(255,255,255,0.16)',
            textDecoration: 'none',
            letterSpacing: '0.06em',
            marginBottom: '14px',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.40)' }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.16)' }}
        >
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M10 6.5H3M6 3L3 6.5 6 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Categories
        </Link>

        {/* Category heading */}
        <div style={{ marginBottom: 'clamp(48px, 7vw, 72px)' }}>
          <h1
            className="font-serif font-bold"
            style={{
              fontSize: 'clamp(40px, 7vw, 64px)',
              color: 'rgba(255,255,255,0.90)',
              lineHeight: 1,
              letterSpacing: '-0.03em',
            }}
          >
            {label}
          </h1>
        </div>

        {/* Song list */}
        {songs.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
            {songs.map((song, i) => (
              <SongRow
                key={song.slug}
                title={song.title}

                index={i}
                href={`/lyrics/${slug}/${song.slug}`}
              />
            ))}
          </div>
        ) : (
          <p
            style={{
              fontSize: '15px',
              color: 'rgba(255,255,255,0.22)',
              fontStyle: 'italic',
              lineHeight: 1.6,
            }}
          >
            No songs in this category yet.
          </p>
        )}

        {/* Footer */}
      </main>
    </div>
  )
}
