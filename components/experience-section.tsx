'use client'

import { useState, useRef, useMemo } from 'react'
import { useReveal } from '@/hooks/use-reveal'
import { Play, Pause, Music } from 'lucide-react'

// Pre-computed stable values for waveform bars to avoid hydration mismatch
const WAVEFORM_BARS = [
  67, 92, 60, 81, 39, 25, 95, 74, 93, 42,
  10, 46, 80, 14, 8, 80, 35, 20, 33, 39
]

const artworks = [
  {
    id: 1,
    title: 'Sueni Mebi Dhong',
    subtitle: 'EP: Serkhai Gawa',
    color: 'oklch(0.70 0.13 50)',
    bg: 'oklch(0.70 0.13 50 / 0.12)',
    waveColor: 'oklch(0.78 0.12 55)',
    imgSrc: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sueni%20Mebi%20Dhong-Q4P2npeIXVM5bx9uG2iYcU6Idk91se.png',
    audioSrc: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sueni%20Mebi%20Dhong%20Music-4ErdS54LcgDd1sjADTiqJJHL6hbpL3.mp3',
  },
  {
    id: 2,
    title: 'Zhawong Ga',
    subtitle: 'EP: Serkhai Gawa',
    color: 'oklch(0.65 0.14 200)',
    bg: 'oklch(0.65 0.14 200 / 0.12)',
    waveColor: 'oklch(0.7 0.12 200)',
    imgSrc: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Zhawong%20Ga-hrYdZXm5hPRWnl8YPnbawKsYgpIZvX.png',
    audioSrc: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Zhawong%20Ga%20Music-YSNIWmNw16jVSbn4ddho61UbLGd0PG.mp3',
  },
  {
    id: 3,
    title: 'Chhemla',
    subtitle: 'EP: Serkhai Gawa',
    color: 'oklch(0.70 0.12 150)',
    bg: 'oklch(0.70 0.12 150 / 0.12)',
    waveColor: 'oklch(0.72 0.11 150)',
    imgSrc: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Chhemla-niSbZByx85OEJufM6OGVeCyZ9ssK3d.png',
    audioSrc: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Chhemla%20Music-IEmnoxYe4DMllt1TzxAETTCPzgkHLo.mp3',
  },
  {
    id: 4,
    title: 'Dren Ni Yoega',
    subtitle: 'EP: Serkhai Gawa',
    color: 'oklch(0.68 0.12 300)',
    bg: 'oklch(0.68 0.12 300 / 0.12)',
    waveColor: 'oklch(0.68 0.12 300)',
    imgSrc: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dren%20Ni%20Yoega-8BUN53L2aAvzJu5E0QkdPVb3E7HrY1.png',
    audioSrc: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dren%20Ni%20Yoega%20Music-QrzrHiOWPe3tlFlLC2NAePYllBnsBF.mp3',
  },
]

function SongCard({ artwork }: { artwork: typeof artworks[0] }) {
  const { ref, revealed } = useReveal()
  const [playing, setPlaying] = useState(false)
  const [hovered, setHovered] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play()
      setPlaying(true)
    }
  }

  return (
    <div
      ref={ref}
      className={`reveal ${revealed ? 'revealed' : ''}`}
    >
      <audio
        ref={audioRef}
        src={artwork.audioSrc}
        preload="none"
        onEnded={() => setPlaying(false)}
      />
      <div
        className="group relative rounded-2xl overflow-hidden border border-border/40 transition-all duration-500 cursor-pointer"
        style={{
          background: hovered ? artwork.bg : 'rgba(255,255,255,0.02)',
          borderColor: hovered ? `${artwork.color}28` : 'rgba(255,255,255,0.06)',
          boxShadow: hovered ? `0 8px 24px rgba(0,0,0,0.25), 0 0 16px ${artwork.color}10` : 'none',
          transform: hovered ? 'translateY(-4px)' : 'none',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={togglePlay}
      >
        {/* Album art */}
        <div className="aspect-square w-full relative overflow-hidden">
          <img
            src={artwork.imgSrc}
            alt={artwork.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Play overlay */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
              hovered || playing ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ background: 'oklch(0 0 0 / 0.4)' }}
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-200 active:scale-95"
              style={{
                background: artwork.color,
                boxShadow: `0 0 10px ${artwork.color}30`,
              }}
            >
              {playing ? (
                <Pause size={18} className="text-background" />
              ) : (
                <Play size={18} className="text-background ml-1" />
              )}
            </div>
          </div>

          {/* Now playing indicator */}
          {playing && (
            <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-[10px] tracking-wide"
              style={{ background: artwork.color, color: 'oklch(0.06 0 0)' }}>
              <Music size={9} />
              Playing
            </div>
          )}
        </div>

        {/* Info */}
        <div className="p-5">
          <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'rgba(255,255,255,0.85)', lineHeight: 1.3, marginBottom: '4px' }}>{artwork.title}</h3>
          <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.04em' }}>{artwork.subtitle}</p>

          {/* Waveform bars */}
          <div className="flex items-end gap-[2px] h-6 mt-4" style={{ opacity: 0.28 }}>
            {WAVEFORM_BARS.map((height, i) => (
              <div
                key={i}
                className="w-0.5 rounded-sm"
                style={{
                  backgroundColor: artwork.waveColor,
                  height: `${height}%`,
                  minHeight: '3px',
                  animation: playing ? `wave ${0.5 + (i % 10) * 0.1}s ${i * 0.05}s ease-in-out infinite` : 'none',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function ExperienceSection() {
  const { ref, revealed } = useReveal()

  return (
    <section id="experience" className="py-24 px-6" style={{ background: 'transparent', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={ref} className={`mb-6 reveal ${revealed ? 'revealed' : ''}`}>
          <span className="text-xs tracking-widest uppercase mb-4 block" style={{ color: 'oklch(0.78 0.12 55)' }}>
            Experience the Work
          </span>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-balance">
            Serkhai Gawa <span style={{ color: 'oklch(0.78 0.12 55)', textShadow: '0 0 20px oklch(0.78 0.12 55 / 0.25)' }}>EP</span>
          </h2>
        </div>
        <p className="mb-16" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.32)', lineHeight: 1.7, maxWidth: '400px' }}>
          Visual identity and artwork created for this EP.<br />Click a track to hear it.
        </p>

        <p style={{ fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', marginBottom: '20px' }}>
          Listen &amp; Feel
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {artworks.map((artwork) => (
            <SongCard key={artwork.id} artwork={artwork} />
          ))}
        </div>

      </div>
    </section>
  )
}
