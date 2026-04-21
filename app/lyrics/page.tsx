'use client'

import Link from 'next/link'
import { useState } from 'react'
import { PageNav } from '@/components/page-nav'
import { allSongs } from '@/lib/lyrics'

const allCategories = [
  { label: 'Original Songs', slug: 'original'  },
  { label: 'Dzongkha Songs', slug: 'dzongkha'  },
  { label: 'English Songs',  slug: 'english'   },
  { label: 'Nepali Songs',   slug: 'nepali'    },
  { label: 'Hindi Songs',    slug: 'hindi'     },
]

// Only show categories that actually have songs — no empty dead ends
const categories = allCategories.filter(cat =>
  allSongs.some(song => song.category === cat.slug)
)

function CategoryRow({ label, slug, index }: { label: string; slug: string; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link href={`/lyrics/${slug}`} style={{ textDecoration: 'none' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '24px 0',
          borderBottom: '1px solid rgba(255,255,255,0.025)',
          cursor: 'pointer',
          transition: 'padding-left 0.3s cubic-bezier(0.22,1,0.36,1)',
          paddingLeft: hovered ? '4px' : '0',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Index + Label */}
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

          <span
            style={{
              fontSize: 'clamp(22px, 3.5vw, 30px)',
              fontWeight: 600,
              letterSpacing: '-0.01em',
              color: hovered ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.62)',
              transition: 'color 0.25s ease',
            }}
          >
            {label}
          </span>
        </div>

        {/* Arrow */}
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
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </Link>
  )
}

export default function LyricsPage() {
  return (
    <div style={{ background: '#0B0B0F', minHeight: '100vh' }}>
      <PageNav />

      <main
        className="page-enter"
        style={{
          maxWidth: '680px',
          margin: '0 auto',
          padding: 'clamp(100px, 18vw, 180px) clamp(20px, 5vw, 48px) 100px',
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: 'clamp(56px, 8vw, 80px)' }}>
          <h1
            className="font-serif font-bold"
            style={{
              fontSize: 'clamp(48px, 8vw, 80px)',
              color: 'rgba(255,255,255,0.90)',
              lineHeight: 1,
              letterSpacing: '-0.03em',
              marginBottom: '20px',
            }}
          >
            Lyrics
          </h1>
          <p
            style={{
              fontSize: '15px',
              color: 'rgba(255,255,255,0.30)',
              fontStyle: 'italic',
              lineHeight: 1.5,
            }}
          >
            Words behind the songs.
          </p>
        </div>

        {/* Categories */}
        <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid rgba(255,255,255,0.025)' }}>
          {categories.map((cat, i) => (
            <CategoryRow key={cat.slug} label={cat.label} slug={cat.slug} index={i} />
          ))}
        </div>

        {/* Footer note */}
      </main>
    </div>
  )
}
