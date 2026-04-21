'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import Image from 'next/image'
import { Pause, Play } from 'lucide-react'
import type { Track } from '@/lib/tracks'

// ─── Types ────────────────────────────────────────────────────────────────────

type AudioContextType = {
  currentTrack: Track | null
  isPlaying: boolean
  currentTime: number
  duration: number
  playerVisible: boolean
  playTrack: (track: Track) => void
  togglePlay: () => void
  seek: (fraction: number) => void
  closePlayer: () => void
}

// ─── Context ──────────────────────────────────────────────────────────────────

const AudioCtx = createContext<AudioContextType | null>(null)

export function useAudio() {
  const ctx = useContext(AudioCtx)
  if (!ctx) throw new Error('useAudio must be used within AudioProvider')
  return ctx
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatTime(s: number): string {
  if (!s || isNaN(s)) return '0:00'
  const m = Math.floor(s / 60)
  const sec = Math.floor(s % 60)
  return `${m}:${sec.toString().padStart(2, '0')}`
}

// ─── Player UI ────────────────────────────────────────────────────────────────

function GlobalAudioPlayer({
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
  const [hovered, setHovered] = useState(false)
  const [btnPressing, setBtnPressing] = useState(false)
  const [infoVisible, setInfoVisible] = useState(true)
  const prevTrackId = useRef<string | null>(null)

  useEffect(() => {
    if (track?.id && track.id !== prevTrackId.current) {
      setInfoVisible(false)
      const t = setTimeout(() => {
        setInfoVisible(true)
        prevTrackId.current = track.id
      }, 160)
      return () => clearTimeout(t)
    }
  }, [track?.id])

  const handleBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    onSeek(Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width)))
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '0',
        left: '0',
        right: '0',
        zIndex: 200,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(calc(100% + 8px))',
        transition: 'opacity 0.35s ease, transform 0.4s cubic-bezier(0.22,1,0.36,1)',
        pointerEvents: visible ? 'auto' : 'none',
        padding: 'clamp(0px, 2vw, 16px)',
        paddingBottom: 'max(env(safe-area-inset-bottom), clamp(0px, 2vw, 16px))',
      }}
    >
      <div
        className="relative"
        style={{
          background: hovered ? 'rgba(22,22,28,0.96)' : 'rgba(16,16,20,0.92)',
          backdropFilter: 'blur(28px)',
          WebkitBackdropFilter: 'blur(28px)',
          borderRadius: 'clamp(0px, 2vw, 16px)',
          border: '1px solid rgba(255,255,255,0.06)',
          boxShadow: hovered
            ? '0 12px 48px rgba(0,0,0,0.65), 0 2px 8px rgba(0,0,0,0.30)'
            : '0 8px 40px rgba(0,0,0,0.55), 0 2px 8px rgba(0,0,0,0.30)',
          padding: 'clamp(10px, 2vw, 14px) clamp(12px, 3vw, 20px)',
          transition: 'background 0.25s ease, box-shadow 0.25s ease',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Mobile: progress bar on top, row below */}
        {/* Desktop: single 3-column row */}

        {/* Progress bar — always full width on mobile, center col on desktop */}
        <div className="block md:hidden" style={{ marginBottom: '10px' }}>
          <div
            style={{
              height: '2px',
              background: 'rgba(255,255,255,0.08)',
              borderRadius: '2px',
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
                borderRadius: '2px',
                transition: 'width 0.1s linear',
              }}
            />
          </div>
        </div>

        <div
          className="grid"
          style={{
            gridTemplateColumns: 'auto 1fr auto',
            alignItems: 'center',
            gap: 'clamp(10px, 3vw, 20px)',
            display: 'grid',
            paddingRight: 'clamp(40px, 8vw, 48px)',
          }}
        >
          {/* LEFT — cover + text */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(10px, 2vw, 16px)',
              opacity: infoVisible ? 1 : 0,
              transition: 'opacity 0.15s ease',
              minWidth: 0,
            }}
          >
            {track && (
              <div
                style={{
                  width: 'clamp(36px, 5vw, 46px)',
                  height: 'clamp(36px, 5vw, 46px)',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  flexShrink: 0,
                  boxShadow: `0 0 14px color-mix(in srgb, ${track.color} 35%, transparent)`,
                }}
              >
                <Image
                  src={track.imgSrc}
                  alt={track.title}
                  width={46}
                  height={46}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
            )}
            <div style={{ minWidth: 0 }}>
              <p
                style={{
                  fontSize: '9px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.35)',
                  marginBottom: '3px',
                }}
              >
                Now Playing
              </p>
              <p
                style={{
                  fontSize: 'clamp(12px, 2vw, 14px)',
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.88)',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  maxWidth: 'clamp(72px, 22vw, 200px)',
                }}
              >
                {track?.title ?? ''}
              </p>
            </div>
          </div>

          {/* CENTER — progress bar (hidden on mobile, shown on desktop) */}
          <div
            className="hidden md:block"
            style={{
              height: '3px',
              background: 'rgba(255,255,255,0.08)',
              borderRadius: '2px',
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
                borderRadius: '2px',
                transition: 'width 0.1s linear',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: `${progress * 100}%`,
                transform: 'translate(-50%, -50%)',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: track?.color ?? 'oklch(0.78 0.12 55)',
                boxShadow: `0 0 6px color-mix(in srgb, ${track?.color ?? 'oklch(0.78 0.12 55)'} 60%, transparent)`,
                transition: 'left 0.1s linear',
                opacity: hovered ? 1 : 0,
                scale: hovered ? '1' : '0.5',
              }}
            />
          </div>

          {/* RIGHT — play button + time + close */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(6px, 1.8vw, 14px)', flexShrink: 0 }}>
            <button
              onClick={onToggle}
              onMouseDown={() => setBtnPressing(true)}
              onMouseUp={() => setBtnPressing(false)}
              onMouseLeave={() => setBtnPressing(false)}
              style={{
                width: 'clamp(32px, 8vw, 38px)',
                height: 'clamp(32px, 8vw, 38px)',
                borderRadius: '50%',
                background: track?.color ?? 'oklch(0.78 0.12 55)',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                transform: btnPressing ? 'scale(0.88)' : 'scale(1)',
                transition: 'transform 0.15s ease, box-shadow 0.2s ease',
                boxShadow: `0 0 16px color-mix(in srgb, ${track?.color ?? 'oklch(0.78 0.12 55)'} 40%, transparent)`,
              }}
            >
              {isPlaying ? (
                <Pause size={13} style={{ color: 'var(--color-bg)' }} />
              ) : (
                <Play size={13} style={{ color: 'var(--color-bg)', marginLeft: '2px' }} />
              )}
            </button>

            <div
              className="hidden sm:flex"
              style={{
                alignItems: 'center',
                gap: '3px',
                fontSize: '11px',
                fontVariantNumeric: 'tabular-nums',
                letterSpacing: '0.04em',
              }}
            >
              <span style={{ color: 'rgba(255,255,255,0.60)' }}>{formatTime(currentTime)}</span>
              <span style={{ color: 'rgba(255,255,255,0.18)' }}>/</span>
              <span style={{ color: 'rgba(255,255,255,0.28)' }}>{formatTime(duration)}</span>
            </div>

          </div>
        </div>

        {/* Close button — absolute, always at right edge with proper tap area */}
        <div className="pr-2">
          <button
            onClick={onClose}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2
                       w-11 h-11 sm:w-10 sm:h-10
                       flex items-center justify-center
                       rounded-full
                       hover:bg-white/10
                       transition"
            style={{ color: 'rgba(255,255,255,0.35)', border: 'none', background: 'none', cursor: 'pointer' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.75)' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.35)' }}
            aria-label="Close player"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── Provider ─────────────────────────────────────────────────────────────────

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [playerVisible, setPlayerVisible] = useState(false)
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

  const playTrack = useCallback((track: Track) => {
    const audio = audioRef.current
    if (!audio) return
    if (currentTrack?.id === track.id) {
      if (isPlaying) { audio.pause(); setIsPlaying(false) }
      else { audio.play().catch(() => {}); setIsPlaying(true) }
      return
    }
    setCurrentTrack(track)
    setPlayerVisible(true)
    setIsPlaying(true)
    setCurrentTime(0)
    audio.src = track.audioSrc
    audio.play().catch(() => setIsPlaying(false))
  }, [currentTrack, isPlaying])

  const togglePlay = useCallback(() => {
    const audio = audioRef.current
    if (!audio || !currentTrack) return
    if (isPlaying) { audio.pause(); setIsPlaying(false) }
    else { audio.play().catch(() => {}); setIsPlaying(true) }
  }, [currentTrack, isPlaying])

  const seek = useCallback((fraction: number) => {
    const audio = audioRef.current
    if (!audio || !duration) return
    const t = Math.max(0, Math.min(1, fraction)) * duration
    audio.currentTime = t
    setCurrentTime(t)
  }, [duration])

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
    <AudioCtx.Provider value={{ currentTrack, isPlaying, currentTime, duration, playerVisible, playTrack, togglePlay, seek, closePlayer }}>
      {children}
      <GlobalAudioPlayer
        track={currentTrack}
        visible={playerVisible}
        isPlaying={isPlaying}
        currentTime={currentTime}
        duration={duration}
        onToggle={togglePlay}
        onSeek={seek}
        onClose={closePlayer}
      />
    </AudioCtx.Provider>
  )
}
