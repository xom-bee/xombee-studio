'use client'

import Link from 'next/link'
import Image from 'next/image'

export function AboutPreviewSection() {
  return (
    <section style={{ background: 'transparent', paddingTop: 'clamp(72px, 10vw, 120px)', paddingBottom: 'clamp(72px, 10vw, 120px)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(48px, 8vw, 96px)',
          flexWrap: 'wrap',
        }}>

          {/* Text side */}
          <div style={{ flex: '1 1 300px', maxWidth: '500px' }}>

            <div style={{
              fontSize: 'clamp(18px, 2vw, 22px)',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: '#E6A15A',
              marginBottom: '20px',
            }}>
              About
            </div>

            {/* Heading */}
            <p style={{
              fontSize: 'clamp(26px, 3.5vw, 36px)',
              fontWeight: 700,
              lineHeight: 1.15,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              marginBottom: '28px',
            }}>
              I started with music.
            </p>

            {/* Group 1 */}
            <div style={{ marginBottom: '24px' }}>
              <p style={{ fontSize: 'clamp(14px, 1.4vw, 16px)', fontWeight: 400, lineHeight: 1.75, color: 'rgba(255,255,255,0.45)' }}>
                It was the first way I expressed myself.<br />
                But I realized something was missing.
              </p>
            </div>

            {/* Group 2 */}
            <div style={{ marginBottom: '24px' }}>
              <p style={{ fontSize: 'clamp(14px, 1.4vw, 16px)', fontWeight: 400, lineHeight: 1.75, color: 'rgba(255,255,255,0.30)' }}>
                The feeling was there.<br />
                The identity was not.
              </p>
            </div>

            {/* Group 3 — emphasis */}
            <div style={{ marginBottom: '24px' }}>
              <p style={{ fontSize: 'clamp(14px, 1.4vw, 16px)', fontWeight: 600, lineHeight: 1.75, color: 'rgba(255,255,255,0.82)' }}>
                That is where{' '}
                <span style={{ color: '#E6A15A' }}>design</span>
                {' '}came in.
              </p>
            </div>

            {/* Group 4 */}
            <div style={{ marginBottom: '40px' }}>
              <p style={{ fontSize: 'clamp(14px, 1.4vw, 16px)', fontWeight: 400, lineHeight: 1.75, color: 'rgba(255,255,255,0.45)' }}>
                Today, I design digital experiences that help creative artists express who they are and be remembered.
              </p>
            </div>

            {/* CTA */}
            <Link
              href="/about"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.04em',
                color: 'rgba(255,255,255,0.55)',
                textDecoration: 'none',
                transition: 'color 0.25s ease, gap 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#E6A15A'
                e.currentTarget.style.gap = '16px'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.55)'
                e.currentTarget.style.gap = '10px'
              }}
            >
              Read Full Story
              <span style={{ fontSize: '16px', lineHeight: 1, color: '#E6A15A' }}>→</span>
            </Link>

          </div>

          {/* Image side */}
          <div style={{
            flex: '1 1 300px',
            maxWidth: '420px',
            aspectRatio: '4 / 5',
            position: 'relative',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(230,161,90,0.06), 0 0 40px rgba(230,161,90,0.07)',
          }}>
            <Image
              src="/images/trust-portrait.JPG"
              alt="Sangay Yoesel"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
              sizes="(max-width: 768px) 100vw, 420px"
            />
            {/* Left edge fade */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, rgba(11,11,15,0.35) 0%, transparent 30%)',
              pointerEvents: 'none',
            }} />
            {/* Bottom fade */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, transparent 50%, rgba(11,11,15,0.65) 100%)',
              pointerEvents: 'none',
            }} />
            {/* Warm amber tint */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(230,161,90,0.04)',
              pointerEvents: 'none',
            }} />
          </div>

        </div>
      </div>
    </section>
  )
}
