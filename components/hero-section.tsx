'use client'

import { useEffect, useRef, useState } from 'react'

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

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#0B0B0F' }}
    >
      {/* Breathing amber orb — reduced ~25% from previous */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-glow-breathe"
        style={{
          width: '800px',
          height: '550px',
          background: 'radial-gradient(ellipse, rgba(230, 161, 90, 0.065) 0%, transparent 68%)',
          borderRadius: '50%',
        }}
      />

      {/* Aurora sweep — reduced ~25% from previous */}
      <div
        className="absolute inset-0 pointer-events-none animate-aurora"
        style={{
          background: 'linear-gradient(105deg, transparent 30%, rgba(230, 161, 90, 0.03) 50%, transparent 70%)',
        }}
      />

      {/* Mouse-driven glow — reduced ~25% from previous */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 70% 50% at ${50 + mousePos.x * 8}% ${45 + mousePos.y * 8}%, rgba(230, 161, 90, 0.075) 0%, transparent 70%)`,
          transition: 'background 0.4s ease',
        }}
      />

      {/* Main content — slight top offset so it floats in space */}
      <div
        className="relative z-10 text-center px-6 max-w-4xl mx-auto w-full"
        style={{ marginTop: '6vh' }}
      >

        {/* Headline line 1 */}
        <div
          className="font-sans font-extrabold leading-[1.06] tracking-tight text-white"
          style={{
            fontSize: 'clamp(44px, 8vw, 92px)',
            animation: 'fade-in-up 1s 0.15s ease-out forwards',
            opacity: 0,
            marginBottom: '0.08em',
          }}
        >
          You are heard.
        </div>

        {/* Headline line 2 — white text with soft glow only behind "remembered?" */}
        <div
          className="font-sans font-extrabold leading-[1.06] tracking-tight text-white"
          style={{
            fontSize: 'clamp(44px, 8vw, 92px)',
            animation: 'fade-in-up 1s 0.45s ease-out forwards',
            opacity: 0,
            marginBottom: '64px',
          }}
        >
          But are you{' '}
          <span className="relative inline-block">
            {/* Soft radial glow sitting behind the word */}
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

        {/* Support line — breathable spacing, softer color */}
        <p
          style={{
            fontSize: 'clamp(14px, 1.6vw, 17px)',
            lineHeight: 1.75,
            color: '#A1A1AA',
            maxWidth: '600px',
            margin: '0 auto 56px',
            animation: 'fade-in-up 1s 0.75s ease-out forwards',
            opacity: 0,
          }}
        >
          I design digital stages that turn independent music artists into
          <br />
          <span style={{ color: '#E6A15A', fontWeight: 600 }}>
            Powerful Personal Brands
          </span>
        </p>

        {/* Single CTA */}
        <div style={{ animation: 'fade-in-up 1s 1.05s ease-out forwards', opacity: 0 }}>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
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
              boxShadow: '0 4px 24px rgba(230, 161, 90, 0.18)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.03)'
              e.currentTarget.style.boxShadow = '0 4px 32px rgba(230, 161, 90, 0.32)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.boxShadow = '0 4px 24px rgba(230, 161, 90, 0.18)'
            }}
          >
            Start a Project
          </button>
        </div>
      </div>

      {/* Minimal scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        style={{ animation: 'fade-in 1s 1.5s ease-out forwards', opacity: 0 }}
      >
        <div
          className="w-px h-10"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.08), transparent)' }}
        />
        <span style={{ fontSize: '9px', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#333338' }}>
          Scroll
        </span>
      </div>
    </section>
  )
}
