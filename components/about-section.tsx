'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

const tags = ['Visual Identity Designer', 'UI/UX Designer', 'Brand Strategist', 'Creative Artist']

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [imgHovered, setImgHovered] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.12 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="relative py-24 px-6 overflow-hidden" style={{ background: '#0B0B0F' }}>
      {/* Section background glow */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 80% 60% at 40% 50%, oklch(0.78 0.12 55 / 0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Glow bridge — bleeds from image toward text */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '10%',
        transform: 'translateY(-50%)',
        width: '55%',
        height: '60%',
        background: 'radial-gradient(ellipse at 30% 50%, oklch(0.78 0.12 55 / 0.07) 0%, transparent 65%)',
        filter: 'blur(40px)',
        pointerEvents: 'none',
      }} />

      <div className="max-w-7xl mx-auto">
        <div style={{ gridTemplateColumns: '1fr 1px 1fr', gap: '0 clamp(32px, 5vw, 72px)', alignItems: 'center' }}
          className="block lg:grid">

          {/* Visual side — enters first */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(32px)',
            transition: 'opacity 0.9s 0s cubic-bezier(0.22, 1, 0.36, 1), transform 0.9s 0s cubic-bezier(0.22, 1, 0.36, 1)',
          }}>
            <div className="relative">

              {/* Portrait */}
              <div
                onMouseEnter={() => setImgHovered(true)}
                onMouseLeave={() => setImgHovered(false)}
                className="relative overflow-hidden aspect-4/5 max-w-sm mx-auto lg:mx-0"
                style={{
                  borderRadius: '20px',
                  background: 'oklch(0.09 0 0)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  boxShadow: imgHovered
                    ? '0 0 48px oklch(0.78 0.12 55 / 0.14), 0 24px 64px rgba(0,0,0,0.6)'
                    : '0 0 28px oklch(0.78 0.12 55 / 0.06), 0 20px 48px rgba(0,0,0,0.5)',
                  transition: 'box-shadow 0.5s ease',
                }}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DP-IUvgkwaS1zk02fbi9UmPeZEo3uWO3g.jpg"
                  alt="Sangay Yoesel — Visual Identity Designer"
                  fill
                  style={{
                    objectFit: 'cover', objectPosition: 'top',
                    transform: imgHovered ? 'scale(1.03)' : 'scale(1)',
                    transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
                  }}
                />
                {/* Dark overlay */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to bottom, rgba(0,0,0,0.10) 0%, transparent 35%, rgba(6,6,10,0.75) 100%)',
                  pointerEvents: 'none',
                }} />
                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0" style={{ padding: '28px 24px 24px' }}>
                  <p style={{
                    fontSize: '10px',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'oklch(0.78 0.12 55)',
                    marginBottom: '6px',
                    fontWeight: 500,
                  }}>
                    Visual Identity Designer
                  </p>
                  <h3 style={{
                    fontSize: 'clamp(22px, 2.5vw, 28px)',
                    fontWeight: 700,
                    fontFamily: 'serif',
                    color: '#FFFFFF',
                    textShadow: '0 0 24px oklch(0.78 0.12 55 / 0.30), 0 2px 12px rgba(0,0,0,0.6)',
                    lineHeight: 1.2,
                  }}>
                    Sangay Yoesel
                  </h3>
                </div>
              </div>

            </div>

            {/* Stats row */}
            <div style={{
              display: 'flex',
              gap: 'clamp(8px, 2vw, 16px)',
              marginTop: '20px',
              maxWidth: '100%',
              marginLeft: 'auto',
              marginRight: 'auto',
            }} className="lg:mx-0">
              {[
                { value: '3+', label: 'Years Creating' },
                { value: '10+', label: 'Projects Delivered' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    flex: 1,
                    borderRadius: '14px',
                    border: '1px solid rgba(255,255,255,0.05)',
                    background: 'rgba(255,255,255,0.025)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    padding: 'clamp(12px, 2.5vw, 16px) clamp(12px, 3vw, 20px)',
                    textAlign: 'center',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)'
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.3), 0 0 20px oklch(0.78 0.12 55 / 0.08)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'
                  }}
                >
                  <p style={{
                    fontSize: '28px', fontWeight: 700, fontFamily: 'serif',
                    color: 'oklch(0.78 0.12 55)', lineHeight: 1, marginBottom: '6px',
                  }}>{stat.value}</p>
                  <p style={{
                    fontSize: '11px', color: 'rgba(255,255,255,0.28)',
                    letterSpacing: '0.06em', textTransform: 'uppercase',
                  }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Vertical divider — desktop only */}
          <div className="hidden lg:block" style={{
            width: '1px',
            alignSelf: 'stretch',
            background: 'linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.07) 25%, rgba(255,255,255,0.07) 75%, transparent 100%)',
          }} />

          {/* Content side — enters with delay */}
          <div className="mt-12 lg:mt-0" style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(32px)',
            transition: 'opacity 0.9s 0.28s cubic-bezier(0.22, 1, 0.36, 1), transform 0.9s 0.28s cubic-bezier(0.22, 1, 0.36, 1)',
          }}>
            <span className="text-xs tracking-widest uppercase mb-6 block" style={{ color: 'oklch(0.78 0.12 55)' }}>
              About
            </span>

            <h2 className="font-serif font-bold mb-8 leading-tight" style={{ fontSize: 'clamp(36px, 4.5vw, 56px)' }}>
              <span style={{ color: 'rgba(255,255,255,0.45)', display: 'block' }}>Where sound becomes</span>
              <span
                className="text-glow"
                style={{ color: 'oklch(0.78 0.12 55)', display: 'block' }}
              >
                identity
              </span>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {[
                { text: "Music was my first language.", weight: 500, opacity: 0.85, mt: 0 },
                { text: "Design became how I translated it for the world.", weight: 400, opacity: 0.42, mt: 10 },
                { text: null, mt: 28 },
                { text: "I grew up in sound.", weight: 500, opacity: 0.75, mt: 0 },
                { text: "I learned early that music is not just audio.", weight: 400, opacity: 0.40, mt: 8 },
                { text: "It is emotion, structure, and identity.", weight: 400, opacity: 0.40, mt: 4 },
                { text: null, mt: 28 },
                { text: "When I found design, everything connected.", weight: 500, opacity: 0.75, mt: 0 },
                { text: "It became the bridge between what artists feel", weight: 400, opacity: 0.40, mt: 8 },
                { text: "and what the world sees.", weight: 400, opacity: 0.40, mt: 4 },
                { text: null, mt: 28 },
                { text: "Today, I work with creatives who want to be seen.", weight: 500, opacity: 0.80, mt: 0 },
                { text: "I turn their sound into visual identity.", weight: 400, opacity: 0.40, mt: 8 },
                { text: "Something real, intentional, and lasting.", weight: 400, opacity: 0.40, mt: 4 },
                { text: null, mt: 28 },
                { text: "My goal is simple.", weight: 600, opacity: 0.90, mt: 0 },
                { text: null, mt: 14 },
                { text: "To help artists own their stage.", weight: 700, opacity: 1, mt: 0, accent: true },
                { text: "Before the world decides to give them one.", weight: 500, opacity: 0.45, mt: 6 },
              ].map((line, i) => (
                line.text === null
                  ? <div key={i} style={{ height: line.mt }} />
                  : <p key={i} style={{
                      fontSize: (line as {accent?: boolean}).accent ? 'clamp(16px, 1.6vw, 20px)' : 'clamp(14px, 1.3vw, 17px)',
                      fontWeight: line.weight,
                      color: (line as {accent?: boolean}).accent ? 'oklch(0.82 0.11 55)' : `rgba(255,255,255,${line.opacity})`,
                      textShadow: (line as {accent?: boolean}).accent ? '0 0 16px oklch(0.78 0.12 55 / 0.18)' : 'none',
                      lineHeight: 1.85,
                      marginTop: line.mt,
                    }}>
                      {line.text}
                    </p>
              ))}
            </div>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '40px' }}>
              {tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: '9px 20px',
                    borderRadius: '999px',
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '0.07em',
                    border: '1px solid rgba(255,255,255,0.07)',
                    color: 'rgba(255,255,255,0.28)',
                    transition: 'border-color 0.35s ease, color 0.35s ease, box-shadow 0.35s ease',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'oklch(0.78 0.12 55 / 0.35)'
                    e.currentTarget.style.color = 'rgba(255,255,255,0.72)'
                    e.currentTarget.style.boxShadow = '0 0 18px oklch(0.78 0.12 55 / 0.10)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                    e.currentTarget.style.color = 'rgba(255,255,255,0.28)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
