'use client'

import { use, useEffect, useRef } from 'react'
import Link from 'next/link'
import { allSongs } from '@/lib/lyrics'
import { notFound } from 'next/navigation'
import { PageNav } from '@/components/page-nav'

const categoryMeta: Record<string, string> = {
  original: 'Original Songs',
  dzongkha: 'Dzongkha Songs',
  english:  'English Songs',
  nepali:   'Nepali Songs',
  hindi:    'Hindi Songs',
}

export default function SongPage({
  params,
}: {
  params: Promise<{ slug: string; song: string }>
}) {
  const { slug, song: songSlug } = use(params)
  const song = allSongs.find((s) => s.slug === songSlug && s.category === slug)
  const categoryLabel = categoryMeta[slug] ?? slug.replace(/-/g, ' ')
  const lyricsRef = useRef<HTMLDivElement>(null)

  // Scroll-based focus: lines near viewport center brighten, edges dim
  useEffect(() => {
    const update = () => {
      if (!lyricsRef.current) return
      const lines = lyricsRef.current.querySelectorAll<HTMLElement>('[data-lyric]')
      const center = window.innerHeight / 2
      lines.forEach((el) => {
        const rect = el.getBoundingClientRect()
        const elCenter = rect.top + rect.height / 2
        const dist = Math.abs(elCenter - center)
        const normalized = Math.min(dist / (window.innerHeight * 0.55), 1)
        el.style.opacity = String(0.25 + (1 - normalized) * 0.55)
      })
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  if (!song) notFound()

  return (
    <div
      style={{
        background: 'var(--color-bg)',
        minHeight: '100vh',
        position: 'relative',
      }}
    >
      {/* Fixed ambient glow */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '400px',
          background: 'radial-gradient(ellipse at top, oklch(0.78 0.12 55 / 0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      {/* Fixed center spotlight — reinforces the focus effect */}
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '500px',
          height: '300px',
          background: 'radial-gradient(ellipse, rgba(255,255,255,0.015) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <PageNav />

      <main
        className="page-enter"
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '820px',
          margin: '0 auto',
          padding: 'clamp(120px, 18vw, 160px) clamp(28px, 6vw, 80px) 140px',
          textAlign: 'center',
        }}
      >
        {/* Back links */}
        <div style={{ textAlign: 'left', marginBottom: '56px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Link
            href="/music"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '7px',
              fontSize: '12px',
              color: 'rgba(255,255,255,0.42)',
              textDecoration: 'none',
              letterSpacing: '0.04em',
              transition: 'color 0.2s ease',
              fontWeight: 500,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.80)' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.42)' }}
          >
            <svg width="14" height="14" viewBox="0 0 13 13" fill="none">
              <path d="M10 6.5H3M6 3L3 6.5 6 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Music
          </Link>
          <Link
            href={`/lyrics/${slug}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '10px',
              color: 'rgba(255,255,255,0.20)',
              textDecoration: 'none',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.45)' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.20)' }}
          >
            <svg width="11" height="11" viewBox="0 0 13 13" fill="none">
              <path d="M10 6.5H3M6 3L3 6.5 6 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {categoryLabel}
          </Link>
        </div>

        {/* Song title */}
        <div style={{ marginBottom: 'clamp(72px, 10vw, 104px)' }}>
          <h1
            className="font-serif font-bold"
            style={{
              fontSize: 'clamp(40px, 7vw, 64px)',
              color: 'rgba(255,255,255,0.92)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
            }}
          >
            {song.title}
          </h1>
          <div
            style={{
              width: '32px',
              height: '1px',
              background: 'oklch(0.78 0.12 55 / 0.40)',
              margin: '28px auto 0',
            }}
          />
        </div>

        {/* Lyrics */}
        <div
          ref={lyricsRef}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {song.lines.map((line, i) =>
            line === '' ? (
              <div key={i} style={{ height: '52px' }} />
            ) : (
              <p
                key={i}
                data-lyric
                style={{
                  fontSize: 'clamp(16px, 2.4vw, 20px)',
                  color: 'rgba(255,255,255,0.80)',
                  lineHeight: 2.4,
                  fontWeight: 400,
                  letterSpacing: '0.02em',
                  marginBottom: '2px',
                  transition: 'opacity 0.35s ease',
                }}
              >
                {line}
              </p>
            )
          )}
        </div>

        {/* Gold dot footer */}
        <div style={{ marginTop: '80px', display: 'flex', justifyContent: 'center' }}>
          <div
            style={{
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              background: 'oklch(0.78 0.12 55 / 0.35)',
            }}
          />
        </div>
      </main>
    </div>
  )
}
