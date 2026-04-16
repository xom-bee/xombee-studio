'use client'

import { useEffect, useRef, useState } from 'react'

function Particle({ delay, duration, opacity, left }: { delay: string; duration: string; opacity: number; left: string }) {
  return (
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: '2px',
        height: '2px',
        background: 'oklch(0.78 0.12 55)',
        boxShadow: '0 0 6px oklch(0.78 0.12 55)',
        animation: `particle-drift ${duration} ${delay} linear infinite`,
        opacity,
        left,
        bottom: '-10px',
      }}
    />
  )
}

// Pre-computed stable values for sound wave bars to avoid hydration mismatch
const HERO_WAVE_BARS = [
  { height: 65, duration: 1.2 }, { height: 35, duration: 0.9 }, { height: 80, duration: 1.5 },
  { height: 45, duration: 1.0 }, { height: 70, duration: 1.3 }, { height: 25, duration: 0.8 },
  { height: 55, duration: 1.1 }, { height: 90, duration: 1.6 }, { height: 40, duration: 0.95 },
  { height: 60, duration: 1.25 }, { height: 30, duration: 0.85 }, { height: 75, duration: 1.4 },
  { height: 50, duration: 1.05 }, { height: 85, duration: 1.55 }, { height: 20, duration: 0.75 },
  { height: 68, duration: 1.15 }, { height: 42, duration: 0.92 }, { height: 78, duration: 1.45 },
  { height: 33, duration: 0.88 }, { height: 62, duration: 1.22 }, { height: 48, duration: 1.02 },
  { height: 72, duration: 1.35 }, { height: 38, duration: 0.9 }, { height: 58, duration: 1.18 },
  { height: 28, duration: 0.82 }, { height: 82, duration: 1.52 }, { height: 52, duration: 1.08 },
  { height: 66, duration: 1.28 }, { height: 44, duration: 0.98 }, { height: 76, duration: 1.42 },
  { height: 36, duration: 0.86 }, { height: 88, duration: 1.58 },
]

function SoundWaveBars() {
  return (
    <div className="flex items-end gap-[3px] h-20 opacity-30">
      {HERO_WAVE_BARS.map((bar, i) => (
        <div
          key={i}
          className="w-1 rounded-sm flex-shrink-0"
          style={{
            backgroundColor: 'oklch(0.78 0.12 55)',
            minHeight: '4px',
            animation: `wave ${bar.duration}s ${i * 0.05}s ease-in-out infinite`,
            height: `${bar.height}%`,
          }}
        />
      ))}
    </div>
  )
}

export function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      setMousePos({
        x: (e.clientX - rect.left - rect.width / 2) / rect.width,
        y: (e.clientY - rect.top - rect.height / 2) / rect.height,
      })
    }
    const el = heroRef.current
    el?.addEventListener('mousemove', handleMouse)
    return () => el?.removeEventListener('mousemove', handleMouse)
  }, [])

  const particles = Array.from({ length: 20 }).map((_, i) => ({
    left: `${(i * 4.7 + 3) % 100}%`,
    delay: `${i * 0.7}s`,
    duration: `${10 + (i % 8)}s`,
    opacity: 0.3 + (i % 5) * 0.1,
  }))

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Deep background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 80% 60% at ${50 + mousePos.x * 10}% ${45 + mousePos.y * 10}%, oklch(0.78 0.12 55 / 0.08) 0%, transparent 70%)`,
          transition: 'background 0.3s ease',
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(oklch(0.96 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(0.96 0 0) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Particles */}
      {particles.map((p, i) => (
        <Particle
          key={i}
          left={p.left}
          delay={p.delay}
          duration={p.duration}
          opacity={p.opacity}
        />
      ))}

      {/* Floating 3D rings */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          transform: `translate(calc(-50% + ${mousePos.x * 15}px), calc(-50% + ${mousePos.y * 15}px))`,
          transition: 'transform 0.4s ease-out',
        }}
      >
        <svg width="600" height="600" viewBox="0 0 600 600" fill="none" className="animate-spin-slow opacity-[0.06]">
          <ellipse cx="300" cy="300" rx="280" ry="100" stroke="oklch(0.78 0.12 55)" strokeWidth="1" />
          <ellipse cx="300" cy="300" rx="220" ry="78" stroke="oklch(0.78 0.12 55)" strokeWidth="0.5" />
        </svg>
      </div>
      <div
        className="absolute top-1/2 left-1/2 pointer-events-none"
        style={{
          transform: `translate(calc(-50% + ${-mousePos.x * 20}px), calc(-50% + ${-mousePos.y * 20}px))`,
          transition: 'transform 0.6s ease-out',
        }}
      >
        <svg
          width="400"
          height="400"
          viewBox="0 0 400 400"
          fill="none"
          className="opacity-[0.08]"
          style={{ animation: 'spin-slow 30s linear infinite reverse' }}
        >
          <circle cx="200" cy="200" r="180" stroke="oklch(0.78 0.12 55)" strokeWidth="0.5" strokeDasharray="4 12" />
          <circle cx="200" cy="200" r="140" stroke="oklch(0.78 0.12 55)" strokeWidth="1" strokeDasharray="2 8" />
        </svg>
      </div>

      {/* Floating geometric elements */}
      <div
        className="absolute top-24 right-20 animate-float opacity-20 pointer-events-none"
        style={{ filter: 'drop-shadow(0 0 10px oklch(0.78 0.12 55))' }}
      >
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <polygon points="30,4 56,18 56,42 30,56 4,42 4,18" stroke="oklch(0.78 0.12 55)" strokeWidth="1" fill="none" />
        </svg>
      </div>
      <div
        className="absolute bottom-32 left-16 animate-float-delay opacity-15 pointer-events-none"
        style={{ filter: 'drop-shadow(0 0 8px oklch(0.78 0.12 55))' }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect x="4" y="4" width="32" height="32" stroke="oklch(0.78 0.12 55)" strokeWidth="1" fill="none" transform="rotate(15 20 20)" />
        </svg>
      </div>
      <div
        className="absolute top-40 left-24 animate-float-delay-2 opacity-20 pointer-events-none"
        style={{ filter: 'drop-shadow(0 0 6px oklch(0.78 0.12 55))' }}
      >
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          <circle cx="15" cy="15" r="12" stroke="oklch(0.78 0.12 55)" strokeWidth="1" fill="none" />
          <circle cx="15" cy="15" r="4" fill="oklch(0.78 0.12 55)" />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Studio label */}
        <div className="flex items-center justify-center gap-3 mb-8" style={{ animation: 'fade-in 0.6s 0.2s ease-out forwards', opacity: 0 }}>
          <div className="w-8 h-px" style={{ background: 'oklch(0.78 0.12 55)' }} />
          <span className="text-xs tracking-[0.3em] uppercase" style={{ color: 'oklch(0.78 0.12 55)' }}>
            Xom Bee Studio
          </span>
          <div className="w-8 h-px" style={{ background: 'oklch(0.78 0.12 55)' }} />
        </div>

        {/* Hook */}
        <h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-balance mb-6"
          style={{ animation: 'fade-in-up 0.8s 0.4s ease-out forwards', opacity: 0 }}
        >
          You are heard.
          <br />
          <span className="text-glow" style={{ color: 'oklch(0.78 0.12 55)' }}>
            But are you remembered?
          </span>
        </h1>

        {/* Subtext */}
        <p
          className="text-muted-foreground text-base md:text-xl leading-relaxed max-w-2xl mx-auto mb-10 text-pretty"
          style={{ animation: 'fade-in-up 0.8s 0.6s ease-out forwards', opacity: 0 }}
        >
          Your music deserves more than a page. It deserves a digital stage.
        </p>

        {/* Tagline */}
        <div
          className="border border-border/50 rounded-2xl px-6 py-4 inline-block mb-12 glow-border"
          style={{ animation: 'fade-in-up 0.8s 0.8s ease-out forwards', opacity: 0 }}
        >
          <p className="text-sm md:text-base text-foreground/80 leading-relaxed max-w-xl">
            I design digital stages that turn independent music artists into
            <br />
            <span className="font-semibold" style={{ color: 'oklch(0.78 0.12 55)' }}>
              Powerful Personal Brands.
            </span>
          </p>
        </div>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          style={{ animation: 'fade-in-up 0.8s 1s ease-out forwards', opacity: 0 }}
        >
          <button
            onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-full font-medium text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105"
            style={{
              background: 'oklch(0.78 0.12 55)',
              color: 'oklch(0.06 0 0)',
              boxShadow: '0 0 30px oklch(0.78 0.12 55 / 0.4)',
            }}
          >
            View My Work
          </button>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-full font-medium text-sm tracking-widest uppercase border border-border/60 text-foreground hover:border-primary/60 transition-all duration-300 hover:scale-105 glow-border"
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* Sound wave at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 flex justify-center pb-6"
        style={{ animation: 'fade-in 0.6s 1.4s ease-out forwards', opacity: 0 }}
      >
        <SoundWaveBars />
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 right-8 flex flex-col items-center gap-2"
        style={{ animation: 'fade-in 0.6s 1.6s ease-out forwards', opacity: 0 }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-primary to-transparent animate-float" />
        <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground rotate-90 origin-center mt-4">
          Scroll
        </span>
      </div>
    </section>
  )
}
