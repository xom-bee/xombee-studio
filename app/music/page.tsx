'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Play, Pause, ChevronRight, Music2 } from 'lucide-react'
import { allTracks, featuredEP, type Track } from '@/lib/tracks'
import { PageNav } from '@/components/page-nav'
import { useAudio } from '@/components/audio-provider'

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  const [visible, setVisible] = useState(false)
  useEffect(() => { const t = setTimeout(() => setVisible(true), 60); return () => clearTimeout(t) }, [])

  return (
    <section
      style={{
        paddingTop: 'clamp(140px, 20vw, 180px)',
        paddingBottom: 'clamp(40px, 6vw, 64px)',
        paddingLeft: 'clamp(12px, 4vw, 24px)',
        paddingRight: 'clamp(12px, 4vw, 24px)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Blurred EP art — cinematic depth layer */}
      <div
        style={{
          position: 'absolute',
          inset: '-40px',
          backgroundImage: `url(${allTracks[0].imgSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(48px) saturate(0.6)',
          opacity: 0.18,
          transform: 'scale(1.1)',
          pointerEvents: 'none',
        }}
      />
      {/* Dark gradient over the blurred art — keeps text readable */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, var(--color-bg) 0%, rgba(11,11,15,0.55) 40%, rgba(11,11,15,0.55) 60%, var(--color-bg) 100%)',
          pointerEvents: 'none',
        }}
      />
      {/* Accent glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '350px',
          background: 'radial-gradient(ellipse, oklch(0.78 0.12 55 / 0.06) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />
      <span
        className="text-xs tracking-widest uppercase block mb-5"
        style={{
          color: 'rgba(255,255,255,0.45)',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(10px)',
          transition: 'opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)',
        }}
      >
        Xom Bee
      </span>
      <h1
        className="font-serif font-bold"
        style={{
          fontSize: 'clamp(56px, 10vw, 96px)',
          color: 'rgba(255,255,255,0.92)',
          lineHeight: 1,
          letterSpacing: '-0.03em',
          marginBottom: '28px',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(12px)',
          transition: 'opacity 0.8s 0.12s cubic-bezier(0.22,1,0.36,1), transform 0.8s 0.12s cubic-bezier(0.22,1,0.36,1)',
        }}
      >
        Music
      </h1>
      <p
        style={{
          fontSize: 'clamp(14px, 1.8vw, 17px)',
          color: 'rgba(255,255,255,0.24)',
          fontStyle: 'italic',
          letterSpacing: '0.01em',
          lineHeight: 1.4,
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(10px)',
          transition: 'opacity 0.7s 0.26s cubic-bezier(0.22,1,0.36,1), transform 0.7s 0.26s cubic-bezier(0.22,1,0.36,1)',
        }}
      >
        Some stories don't fit in design. So I wrote them into songs.
      </p>

      <div
        style={{
          marginTop: '48px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.7s 0.5s ease',
        }}
      >
        <span style={{ fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>
          Explore tracks
        </span>
        <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: '12px', animation: 'scrollHint 2s 1s ease-in-out infinite' }}>
          ↓
        </span>
      </div>
    </section>
  )
}

// ─── Featured EP ──────────────────────────────────────────────────────────────

function FeaturedEP({ onPlayAll }: { onPlayAll: () => void }) {
  const [hovered, setHovered] = useState(false)

  return (
    <section
      style={{
        padding: '0 clamp(24px, 6vw, 80px) clamp(48px, 6vw, 64px)',
        borderTop: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', paddingTop: 'clamp(36px, 5vw, 56px)' }}>
        <div
          className="grid md:grid-cols-[5fr_6fr]"
          style={{
            gap: 'clamp(32px, 7vw, 88px)',
            alignItems: 'center',
          }}
        >
          {/* Cover */}
          <div
            style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              aspectRatio: '1',
              maxWidth: '420px',
              margin: '0 auto',
              width: '100%',
              boxShadow: hovered
                ? '0 40px 120px rgba(0,0,0,0.7), 0 0 60px oklch(0.78 0.12 55 / 0.12)'
                : '0 24px 80px rgba(0,0,0,0.5)',
              transform: hovered ? 'scale(1.015)' : 'scale(1)',
              transition: 'box-shadow 0.5s ease, transform 0.5s cubic-bezier(0.22,1,0.36,1)',
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <Image
              src={featuredEP.coverSrc}
              alt={featuredEP.title}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Info */}
          <div>
            <span className="text-xs tracking-widest uppercase block mb-5" style={{ color: 'oklch(0.78 0.12 55)' }}>
              Featured EP
            </span>
            <h2
              className="font-serif font-bold"
              style={{
                fontSize: 'clamp(36px, 5vw, 56px)',
                color: 'rgba(255,255,255,0.90)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                marginBottom: '8px',
              }}
            >
              {featuredEP.title}
            </h2>
            <p className="text-xs tracking-widest uppercase mb-6" style={{ color: 'rgba(255,255,255,0.28)' }}>
              {featuredEP.subtitle}
            </p>
            <p
              style={{
                fontSize: 'clamp(14px, 1.5vw, 16px)',
                color: 'rgba(255,255,255,0.40)',
                lineHeight: 1.75,
                marginBottom: '40px',
                maxWidth: '260px',
              }}
            >
              {featuredEP.description}
            </p>

            <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap' }}>
              <button
                onClick={onPlayAll}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 26px',
                  borderRadius: '999px',
                  background: 'oklch(0.70 0.09 55)',
                  color: 'var(--color-bg)',
                  fontSize: '13px',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 8px 24px oklch(0.78 0.12 55 / 0.22)'
                  e.currentTarget.style.background = 'oklch(0.74 0.10 55)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.background = 'oklch(0.70 0.09 55)'
                }}
              >
                <Play size={13} fill="currentColor" />
                Play All
              </button>

              <Link
                href="#tracks"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '12px 24px',
                  borderRadius: '999px',
                  background: 'rgba(255,255,255,0.03)',
                  color: 'rgba(255,255,255,0.38)',
                  fontSize: '13px',
                  fontWeight: 500,
                  border: '1px solid rgba(255,255,255,0.08)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease, border-color 0.2s ease, background 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'rgba(255,255,255,0.80)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255,255,255,0.38)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                }}
              >
                View Tracks
                <ChevronRight size={13} />
              </Link>

              <Link
                href="/lyrics/original"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '12px 24px',
                  borderRadius: '999px',
                  background: 'transparent',
                  color: 'rgba(255,255,255,0.22)',
                  fontSize: '13px',
                  fontWeight: 500,
                  border: '1px solid rgba(255,255,255,0.06)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease, border-color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'rgba(255,255,255,0.65)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255,255,255,0.22)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                }}
              >
                <Music2 size={12} />
                Read Lyrics
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Track Card ───────────────────────────────────────────────────────────────

function TrackCard({
  track,
  isActive,
  isPlaying,
  onPlay,
}: {
  track: Track
  isActive: boolean
  isPlaying: boolean
  onPlay: (t: Track) => void
}) {
  const [hovered, setHovered] = useState(false)
  const [pressing, setPressing] = useState(false)

  return (
    <div
      style={{
        borderRadius: '16px',
        overflow: 'visible',
        cursor: 'pointer',
        transform: pressing
          ? 'scale(0.97)'
          : isActive
          ? 'scale(1.015) translateY(-3px)'
          : hovered
          ? 'scale(1.008)'
          : 'scale(1)',
        filter: !isActive && hovered ? 'brightness(1.08)' : 'brightness(1)',
        transition: pressing
          ? 'transform 0.1s ease'
          : 'transform 0.25s ease, box-shadow 0.25s ease, filter 0.25s ease',
        willChange: 'transform',
        boxShadow: isActive
          ? `0 0 0 1px color-mix(in srgb, ${track.color} 55%, transparent), 0 0 12px color-mix(in srgb, ${track.color} 10%, transparent), 0 10px 28px rgba(0,0,0,0.35)`
          : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setPressing(false) }}
      onPointerDown={() => setPressing(true)}
      onPointerUp={() => setPressing(false)}
      onClick={() => onPlay(track)}
    >
      {/* Clip inner content without clipping the outer glow */}
      <div style={{ borderRadius: '16px', overflow: 'hidden' }}>
      {/* Cover */}
      <div style={{ position: 'relative', width: '100%', paddingBottom: '100%', overflow: 'hidden', borderRadius: '14px' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
        <Image
          src={track.imgSrc}
          alt={track.title}
          fill
          style={{
            objectFit: 'cover',
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
            transition: 'transform 0.6s cubic-bezier(0.22,1,0.36,1)',
          }}
        />

        {/* Base gradient overlay — cinematic bottom depth */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, transparent 45%, rgba(0,0,0,0.30) 70%, rgba(0,0,0,0.72) 100%)',
          }}
        />

        {/* Cinematic dark overlay — deepens on hover */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.38)',
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.4s ease',
          }}
        />

        {/* Active color tint — subtle hue wash */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `color-mix(in srgb, ${track.color} 14%, transparent)`,
            opacity: isActive ? 1 : 0,
            transition: 'opacity 0.4s ease',
          }}
        />

        {/* Play button — consistent position and behavior on every card */}
        <div
          style={{
            position: 'absolute',
            bottom: '10px',
            right: '10px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            background: isActive ? track.color : 'rgba(255,255,255,0.12)',
            opacity: isActive ? 1 : hovered ? 1 : 0.15,
            transform: hovered || isActive ? 'scale(1)' : 'scale(0.90)',
            boxShadow: isActive
              ? `0 0 20px color-mix(in srgb, ${track.color} 50%, transparent)`
              : hovered
              ? '0 0 12px rgba(255,255,255,0.10)'
              : 'none',
            transition: 'opacity 0.3s ease, transform 0.3s cubic-bezier(0.22,1,0.36,1), background 0.3s ease, box-shadow 0.3s ease',
          }}
        >
          <span
            key={isActive && isPlaying ? 'pause' : 'play'}
            style={{ display: 'flex', animation: 'iconPop 0.18s cubic-bezier(0.22,1,0.36,1)' }}
          >
            {isActive && isPlaying ? (
              <Pause size={12} style={{ color: 'var(--color-bg)' }} />
            ) : (
              <Play size={12} style={{ color: isActive ? 'var(--color-bg)' : 'rgba(255,255,255,0.90)', marginLeft: '2px' }} />
            )}
          </span>
        </div>

        {/* Waveform indicator when playing */}
        {isActive && (
          <div
            style={{
              position: 'absolute',
              top: '10px',
              left: '10px',
              display: 'flex',
              gap: '2px',
              alignItems: 'flex-end',
              height: '14px',
            }}
          >
            {[4, 7, 5, 7, 4].map((h, i) => (
              <div
                key={i}
                style={{
                  width: '2px',
                  height: `${isPlaying ? h : 3}px`,
                  background: track.color,
                  borderRadius: '1px',
                  animation: isPlaying ? `wave ${0.6 + i * 0.1}s ${i * 0.08}s ease-in-out infinite` : 'none',
                  transition: 'height 0.3s ease',
                }}
              />
            ))}
          </div>
        )}
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: '14px 4px 12px 4px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '8px' }}>
        <div style={{ minWidth: 0, paddingLeft: '2px', marginBottom: '2px' }}>
          <p
            style={{
              fontSize: '14px',
              fontWeight: 500,
              lineHeight: 1.3,
              color: isActive ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.78)',
              transition: 'color 0.3s ease',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {track.title}
          </p>
          <p style={{ fontSize: '11px', color: isActive && isPlaying ? track.color : 'rgba(255,255,255,0.28)', marginTop: '4px', letterSpacing: '0.03em', transition: 'color 0.3s ease' }}>
            {isActive && isPlaying ? (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <span
                  style={{
                    display: 'inline-block',
                    width: '5px',
                    height: '5px',
                    borderRadius: '50%',
                    background: track.color,
                    animation: 'pulse 1.4s ease-in-out infinite',
                  }}
                />
                Playing
              </span>
            ) : track.ep}
          </p>
        </div>

        {/* Read lyrics link — appears on hover */}
        <Link
          href={`/lyrics/original/${track.slug}`}
          onClick={(e) => e.stopPropagation()}
          style={{
            fontSize: '10px',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.28)',
            textDecoration: 'none',
            flexShrink: 0,
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.25s ease, color 0.2s ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.65)' }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.28)' }}
        >
          Lyrics
        </Link>

        {/* Micro waveform — appears on hover or when active */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            gap: '2px',
            height: '14px',
            flexShrink: 0,
            opacity: hovered || isActive ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
        >
          {[5, 9, 6].map((h, i) => (
            <div
              key={i}
              style={{
                width: '2px',
                borderRadius: '1px',
                background: isActive ? track.color : 'rgba(255,255,255,0.35)',
                height: `${h}px`,
                animation: isActive && isPlaying
                  ? `wave ${0.5 + i * 0.15}s ${i * 0.1}s ease-in-out infinite`
                  : 'none',
                transition: 'background 0.3s ease, height 0.3s ease',
              }}
            />
          ))}
        </div>
      </div>
      </div>
    </div>
  )
}

// ─── Track Grid ───────────────────────────────────────────────────────────────

function TrackGrid({
  currentTrack,
  isPlaying,
  onPlay,
}: {
  currentTrack: Track | null
  isPlaying: boolean
  onPlay: (t: Track) => void
}) {
  return (
    <section
      id="tracks"
      style={{
        padding: '0 clamp(24px, 6vw, 80px) clamp(56px, 8vw, 80px)',
        borderTop: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', paddingTop: 'clamp(40px, 5vw, 56px)' }}>
        <p
          className="text-xs tracking-widest uppercase"
          style={{ color: 'rgba(255,255,255,0.45)', marginBottom: '36px' }}
        >
          All Tracks
        </p>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          style={{ gap: 'clamp(16px, 3vw, 24px)' }}
        >
          {allTracks.map((track) => (
            <TrackCard
              key={track.id}
              track={track}
              isActive={currentTrack?.id === track.id}
              isPlaying={isPlaying && currentTrack?.id === track.id}
              onPlay={onPlay}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function MusicPage() {
  const { currentTrack, isPlaying, playerVisible, playTrack } = useAudio()

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      <PageNav />
      <main className="page-enter" style={{ paddingBottom: playerVisible ? 'clamp(80px, 12vw, 96px)' : '0', transition: 'padding-bottom 0.4s ease' }}>
        <Hero />
        <FeaturedEP onPlayAll={() => playTrack(allTracks[0])} />
        <TrackGrid currentTrack={currentTrack} isPlaying={isPlaying} onPlay={playTrack} />
      </main>
    </div>
  )
}
