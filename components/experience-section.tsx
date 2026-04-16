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
          background: hovered ? artwork.bg : 'oklch(0.09 0 0)',
          borderColor: hovered ? `${artwork.color}40` : undefined,
          boxShadow: hovered ? `0 0 30px ${artwork.color}20` : undefined,
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
                boxShadow: `0 0 20px ${artwork.color}60`,
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
          <h3 className="font-serif font-bold text-foreground text-lg leading-tight mb-1">{artwork.title}</h3>
          <p className="text-muted-foreground text-xs tracking-wide">{artwork.subtitle}</p>

          {/* Waveform bars */}
          <div className="flex items-end gap-[2px] h-6 mt-4 opacity-50">
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
    <section id="experience" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={ref} className={`mb-6 reveal ${revealed ? 'revealed' : ''}`}>
          <span className="text-xs tracking-widest uppercase mb-4 block" style={{ color: 'oklch(0.78 0.12 55)' }}>
            Experience the Work
          </span>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-balance">
            Serkhai Gawa <span className="text-glow" style={{ color: 'oklch(0.78 0.12 55)' }}>EP</span>
          </h2>
        </div>
        <p className="text-muted-foreground mb-16 max-w-lg leading-relaxed">
          Album artwork and visual identity created for this EP. Click any track to experience the sound and design together.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {artworks.map((artwork) => (
            <SongCard key={artwork.id} artwork={artwork} />
          ))}
        </div>

        {/* YouTube video */}
        <div className="mt-16">
          <p className="text-xs tracking-widest uppercase mb-6 block" style={{ color: 'oklch(0.78 0.12 55)' }}>
            Official Music Video
          </p>
          <div
            className="relative w-full rounded-2xl overflow-hidden border border-border/40"
            style={{ paddingBottom: '56.25%' }}
          >
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/ElnpNEgbtR0"
              title="Serkhai Gawa — Xom Bee"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
