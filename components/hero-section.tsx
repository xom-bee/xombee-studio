'use client'

import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { HeroCanvas } from './hero-canvas'

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const grainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Mouse-driven glow — direct DOM, zero re-renders
    const handleMouse = (e: MouseEvent) => {
      if (!heroRef.current || !glowRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      glowRef.current.style.background =
        `radial-gradient(ellipse 60% 45% at ${x}% ${y}%, rgba(230, 161, 90, 0.055) 0%, transparent 70%)`
    }
    const el = heroRef.current
    el?.addEventListener('mousemove', handleMouse, { passive: true })

    // Film grain — rendered once to a canvas, applied as tiling CSS background
    if (grainRef.current) {
      const c = document.createElement('canvas')
      c.width = 128
      c.height = 128
      const ctx = c.getContext('2d')
      if (ctx) {
        const d = ctx.createImageData(128, 128)
        for (let i = 0; i < d.data.length; i += 4) {
          const v = Math.floor(Math.random() * 255)
          d.data[i] = v; d.data[i + 1] = v; d.data[i + 2] = v; d.data[i + 3] = 255
        }
        ctx.putImageData(d, 0, 0)
        grainRef.current.style.backgroundImage = `url(${c.toDataURL()})`
      }
    }

    return () => el?.removeEventListener('mousemove', handleMouse)
  }, [])

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'transparent' }}
    >

      {/* ── BACKGROUND SYSTEM ──────────────────────────────────────────────── */}

      {/* Cinematic canvas — particles, waveforms, floating planes, volumetric glow */}
      <HeroCanvas />

      {/* Film grain — static, rendered once, no animation cost */}
      <div
        aria-hidden="true"
        ref={grainRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundSize: '128px 128px',
          backgroundRepeat: 'repeat',
          opacity: 0.04,
          mixBlendMode: 'screen',
        }}
      />

      {/* Mouse-driven glow — DOM-managed, no re-renders */}
      <div
        aria-hidden="true"
        ref={glowRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 45% at 50% 45%, rgba(230, 161, 90, 0.055) 0%, transparent 70%)',
          transition: 'background 0.5s ease',
        }}
      />

      {/* Readability vignette — frames the scene, protects typography */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 90% 80% at 50% 46%, transparent 30%, rgba(11,11,15,0.58) 100%),
            linear-gradient(to bottom, rgba(11,11,15,0.24) 0%, transparent 20%, transparent 78%, rgba(11,11,15,0.36) 100%)
          `,
        }}
      />

      {/* ── END BACKGROUND SYSTEM ─────────────────────────────────────────── */}

      {/* ── CONTENT ────────────────────────────────────────────────────────── */}
      <div
        className="relative z-10 text-center px-3 sm:px-6 max-w-4xl mx-auto w-full"
        style={{ marginTop: '6vh' }}
      >

        {/* Headline line 1 */}
        <div
          className="font-sans font-extrabold leading-[1.06] tracking-tight text-white"
          style={{
            fontSize: 'clamp(32px, 11vw, 92px)',
            animation: 'fade-in-up 1s 0.15s ease-out forwards',
            opacity: 0,
            marginBottom: '0.08em',
          }}
        >
          You are heard.
        </div>

        {/* Headline line 2 */}
        <div
          className="font-sans font-extrabold leading-[1.06] tracking-tight text-white"
          style={{
            fontSize: 'clamp(32px, 11vw, 92px)',
            animation: 'fade-in-up 1s 0.45s ease-out forwards',
            opacity: 0,
            marginBottom: 'clamp(32px, 6vw, 64px)',
          }}
        >
          But are you{' '}
          <span className="relative inline-block">
            <span
              aria-hidden="true"
              className="absolute pointer-events-none"
              style={{
                inset: '-40px -48px',
                background: 'radial-gradient(ellipse at 50% 55%, rgba(230, 161, 90, 0.13) 0%, transparent 65%)',
                filter: 'blur(18px)',
              }}
            />
            remembered?
          </span>
        </div>

        {/* Support line */}
        <p
          style={{
            fontSize: 'clamp(14px, 1.6vw, 17px)',
            lineHeight: 1.75,
            color: 'rgba(255,255,255,0.68)',
            maxWidth: '600px',
            margin: '0 auto clamp(28px, 5vw, 56px)',
            animation: 'fade-in-up 1s 0.75s ease-out forwards',
            opacity: 0,
          }}
        >
          I design professional personal websites for{' '}
          <span style={{ color: '#E6A15A', fontWeight: 600 }}>
            Creative Artists
          </span>
        </p>

        {/* CTA */}
        <div style={{ animation: 'fade-in-up 1s 1.05s ease-out forwards', opacity: 0 }}>
          <Button
            variant="filled"
            aria-label="View my portfolio work"
            onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </Button>
        </div>

      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden="true"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
        style={{ animation: 'fade-in 1s 1.5s ease-out forwards', opacity: 0 }}
      >
        <div
          className="w-px h-10"
          style={{
            background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.14), transparent)',
            animation: 'scrollHint 2.4s ease-in-out infinite',
          }}
        />
        <span
          style={{
            fontSize: '9px',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.22)',
          }}
        >
          Scroll
        </span>
      </div>

    </section>
  )
}
