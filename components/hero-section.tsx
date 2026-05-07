'use client'

import { useEffect, useRef } from 'react'

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!heroRef.current || !glowRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      // Direct DOM update — no React re-render
      glowRef.current.style.background =
        `radial-gradient(ellipse 70% 50% at ${x}% ${y}%, rgba(230, 161, 90, 0.075) 0%, transparent 70%)`
    }
    const el = heroRef.current
    el?.addEventListener('mousemove', handleMouse, { passive: true })
    return () => el?.removeEventListener('mousemove', handleMouse)
  }, [])

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'transparent' }}
    >
      {/* Breathing amber orb */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-glow-breathe"
        style={{
          width: '800px',
          height: '550px',
          background: 'radial-gradient(ellipse, rgba(230, 161, 90, 0.065) 0%, transparent 68%)',
          borderRadius: '50%',
        }}
      />

      {/* Aurora sweep */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none animate-aurora"
        style={{
          background: 'linear-gradient(105deg, transparent 30%, rgba(230, 161, 90, 0.03) 50%, transparent 70%)',
        }}
      />

      {/* Mouse-driven glow — DOM-managed, no re-renders */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 45%, rgba(230, 161, 90, 0.075) 0%, transparent 70%)',
          transition: 'background 0.4s ease',
        }}
      />

      {/* Main content */}
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
            color: 'rgba(255,255,255,0.45)',
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
          <button
            onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            aria-label="View my portfolio work"
            style={{
              background: '#E6A15A',
              color: '#0B0B0F',
              borderRadius: '999px',
              padding: '14px 28px',
              fontWeight: 700,
              fontSize: '12px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 24px rgba(230, 161, 90, 0.22)',
              transition: 'transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.04) translateY(-1px)'
              e.currentTarget.style.boxShadow = '0 8px 40px rgba(230, 161, 90, 0.42)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1) translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 24px rgba(230, 161, 90, 0.22)'
            }}
          >
            View My Work
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden="true"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        style={{ animation: 'fade-in 1s 1.5s ease-out forwards', opacity: 0 }}
      >
        <div
          className="w-px h-10"
          style={{
            background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.14), transparent)',
            animation: 'scrollHint 2.4s ease-in-out infinite',
          }}
        />
        <span style={{ fontSize: '9px', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)' }}>
          Scroll
        </span>
      </div>
    </section>
  )
}
