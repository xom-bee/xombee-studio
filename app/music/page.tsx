'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Play, Pause, ChevronRight, Music2 } from 'lucide-react'
import { allTracks, featuredEP, type Track } from '@/lib/tracks'
import { PageNav } from '@/components/page-nav'

function formatTime(s: number): string {
  if (!s || isNaN(s)) return '0:00'
  const m = Math.floor(s / 60)
  const sec = Math.floor(s % 60)
  return `${m}:${sec.toString().padStart(2, '0')}`
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  const [visible, setVisible] = useState(false)
  useEffect(() => { const t = setTimeout(() => setVisible(true), 60); return () => clearTimeout(t) }, [])

  return (
    <section
      style={{
        paddingTop: 'clamp(140px, 20vw, 180px)',
        paddingBottom: 'clamp(40px, 6vw, 64px)',
        paddingLeft: '24px',
        paddingRight: '24px',
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
          style={{
            display: 'grid',
            gridTemplateColumns: '5fr 6fr',
            gap: 'clamp(48px, 7vw, 88px)',
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
                href="/lyrics"
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
          ? 'scale(1.02) translateY(-4px)'
          : hovered
          ? 'scale(1.03)'
          : 'scale(1)',
        transition: pressing
          ? 'transform 0.1s ease'
          : 'transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s ease',
        willChange: 'transform',
        boxShadow: isActive
          ? `0 0 0 1px ${track.color}55, 0 0 28px ${track.color}28, 0 16px 40px rgba(0,0,0,0.45)`
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
            background: isActive
              ? track.color
              : 'rgba(255,255,255,0.12)',
            opacity: isActive ? 1 : hovered ? 1 : 0.15,
            transform: hovered || isActive ? 'scale(1)' : 'scale(0.90)',
            boxShadow: isActive
              ? `0 0 18px ${track.color}55`
              : hovered
              ? '0 0 12px rgba(255,255,255,0.10)'
              : 'none',
            transition: 'opacity 0.3s ease, transform 0.3s cubic-bezier(0.22,1,0.36,1), background 0.3s ease, box-shadow 0.3s ease',
          }}
        >
          {isActive && isPlaying ? (
            <Pause size={12} style={{ color: 'var(--color-bg)' }} />
          ) : (
            <Play size={12} style={{ color: isActive ? 'var(--color-bg)' : 'rgba(255,255,255,0.90)', marginLeft: '2px' }} />
          )}
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
      <div style={{ padding: '12px 2px 8px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '8px' }}>
        <div style={{ minWidth: 0 }}>
          <p
            style={{
              fontSize: '14px',
              fontWeight: 500,
              color: isActive ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.78)',
              transition: 'color 0.3s ease',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {track.title}
          </p>
          <p style={{ fontSize: '11px', color: isActive ? `${track.color}` : 'rgba(255,255,255,0.28)', marginTop: '3px', letterSpacing: '0.03em', transition: 'color 0.3s ease' }}>
            {track.ep}
          </p>
        </div>

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
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ gap: '24px' }}
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

// ─── Audio Player ─────────────────────────────────────────────────────────────

function AudioPlayer({
  track,
  visible,
  isPlaying,
  currentTime,
  duration,
  onToggle,
  onSeek,
  onClose,
}: {
  track: Track | null
  visible: boolean
  isPlaying: boolean
  currentTime: number
  duration: number
  onToggle: () => void
  onSeek: (fraction: number) => void
  onClose: () => void
}) {
  const progress = duration > 0 ? currentTime / duration : 0

  const handleBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    onSeek(Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width)))
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(100%)',
        transition: 'opacity 0.4s ease, transform 0.45s cubic-bezier(0.22,1,0.36,1)',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <div
        style={{
          background: 'rgba(11,11,15,0.94)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          padding: '10px clamp(16px, 5vw, 56px) 14px',
        }}
      >
        {/* Progress bar */}
        <div
          style={{
            height: '2px',
            background: 'rgba(255,255,255,0.07)',
            borderRadius: '1px',
            marginBottom: '14px',
            cursor: 'pointer',
            position: 'relative',
          }}
          onClick={handleBarClick}
        >
          <div
            style={{
              position: 'absolute',
              inset: '0 auto 0 0',
              width: `${progress * 100}%`,
              background: track?.color ?? 'oklch(0.78 0.12 55)',
              borderRadius: '1px',
              transition: 'width 0.3s linear',
            }}
          />
        </div>

        {/* Controls row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          {/* Track info */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0 }}>
            {track && (
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  flexShrink: 0,
                  boxShadow: `0 0 12px ${track.color}35`,
                }}
              >
                <Image
                  src={track.imgSrc}
                  alt={track.title}
                  width={38}
                  height={38}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
            )}
            <div style={{ minWidth: 0 }}>
              <p
                style={{
                  fontSize: '13px',
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.85)',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {track?.title ?? ''}
              </p>
              <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.28)', marginTop: '1px' }}>
                {track?.ep ?? ''}
              </p>
            </div>
          </div>

          {/* Play / Pause */}
          <button
            onClick={onToggle}
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              background: track?.color ?? 'oklch(0.78 0.12 55)',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              transition: 'transform 0.2s ease',
              boxShadow: `0 0 18px ${track?.color ?? 'oklch(0.78 0.12 55)'}35`,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.08)' }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
          >
            {isPlaying ? (
              <Pause size={15} style={{ color: 'var(--color-bg)' }} />
            ) : (
              <Play size={15} style={{ color: 'var(--color-bg)', marginLeft: '2px' }} />
            )}
          </button>

          {/* Time + Close */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              gap: '14px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '11px',
                fontVariantNumeric: 'tabular-nums',
                letterSpacing: '0.04em',
              }}
            >
              <span style={{ color: 'rgba(255,255,255,0.55)' }}>{formatTime(currentTime)}</span>
              <span style={{ color: 'rgba(255,255,255,0.18)' }}>/</span>
              <span style={{ color: 'rgba(255,255,255,0.28)' }}>{formatTime(duration)}</span>
            </div>
            <button
              onClick={onClose}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px',
                color: 'rgba(255,255,255,0.28)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'opacity 0.2s ease, transform 0.2s ease',
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.70)'
                e.currentTarget.style.transform = 'scale(1.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.28)'
                e.currentTarget.style.transform = 'scale(1)'
              }}
              aria-label="Close player"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function MusicPage() {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = new Audio()
    audioRef.current = audio
    audio.addEventListener('timeupdate', () => setCurrentTime(audio.currentTime))
    audio.addEventListener('loadedmetadata', () => setDuration(audio.duration))
    audio.addEventListener('durationchange', () => setDuration(audio.duration))
    audio.addEventListener('ended', () => setIsPlaying(false))
    return () => { audio.pause(); audio.src = '' }
  }, [])

  const playTrack = useCallback(
    (track: Track) => {
      const audio = audioRef.current
      if (!audio) return
      if (currentTrack?.id === track.id) {
        if (isPlaying) { audio.pause(); setIsPlaying(false) }
        else { audio.play().catch(() => {}); setIsPlaying(true) }
        return
      }
      // Optimistic update — UI responds instantly, audio loads behind it
      setCurrentTrack(track)
      setPlayerVisible(true)
      setIsPlaying(true)
      setCurrentTime(0)
      audio.src = track.audioSrc
      audio.play().catch(() => setIsPlaying(false))
    },
    [currentTrack, isPlaying],
  )

  const togglePlay = useCallback(() => {
    const audio = audioRef.current
    if (!audio || !currentTrack) return
    if (isPlaying) { audio.pause(); setIsPlaying(false) }
    else { audio.play().catch(() => {}); setIsPlaying(true) }
  }, [currentTrack, isPlaying])

  const seek = useCallback(
    (fraction: number) => {
      const audio = audioRef.current
      if (!audio || !duration) return
      const t = Math.max(0, Math.min(1, fraction)) * duration
      audio.currentTime = t
      setCurrentTime(t)
    },
    [duration],
  )

  const [playerVisible, setPlayerVisible] = useState(false)

  const closePlayer = useCallback(() => {
    const audio = audioRef.current
    if (audio) { audio.pause(); audio.currentTime = 0 }
    setIsPlaying(false)
    setPlayerVisible(false)
    setTimeout(() => {
      setCurrentTime(0)
      setDuration(0)
      setCurrentTrack(null)
    }, 450)
  }, [])

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      <PageNav />
      <main className="page-enter" style={{ paddingBottom: currentTrack ? '90px' : '0', transition: 'padding-bottom 0.4s ease' }}>
        <Hero />
        <FeaturedEP onPlayAll={() => playTrack(allTracks[0])} />
        <TrackGrid currentTrack={currentTrack} isPlaying={isPlaying} onPlay={playTrack} />
      </main>
      <AudioPlayer
        track={currentTrack}
        visible={playerVisible}
        isPlaying={isPlaying}
        currentTime={currentTime}
        duration={duration}
        onToggle={togglePlay}
        onSeek={seek}
        onClose={closePlayer}
      />
    </div>
  )
}
