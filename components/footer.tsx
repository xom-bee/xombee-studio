'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { Divider } from '@/components/ui/divider'

export function Footer() {
  const headingRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.2 }
    )
    if (headingRef.current) observer.observe(headingRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{`
.ft-nav-link {
          font-size: 13px;
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.42s cubic-bezier(0.22, 1, 0.36, 1);
          display: block;
        }
        .ft-nav-link:hover { color: rgba(255,255,255,0.88); }
.ft-back-top {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 11px;
          letter-spacing: 0.05em;
          color: var(--text-meta);
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          transition: color 0.42s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .ft-back-top:hover { color: rgba(255,255,255,0.85); }
        .ft-back-top:hover .ft-arrow { transform: translateY(-3px); }
        .ft-arrow {
          display: inline-block;
          transition: transform 0.42s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .ft-bottom-bar {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 16px;
          padding-top: 16px;
          padding-bottom: 24px;
          border-top: 1px solid rgba(255,255,255,0.04);
        }
        .ft-tagline { text-align: center; }
        @media (max-width: 640px) {
          .ft-bottom-bar {
            grid-template-columns: 1fr auto;
          }
          .ft-tagline { display: none; }
        }
      `}</style>

      <Divider />

      <footer style={{ background: 'transparent' }}>

        {/* ── 1. HERO MESSAGE ── */}
        <div
          ref={headingRef}
          style={{
            textAlign: 'center',
            padding: 'clamp(48px, 6vw, 72px) clamp(24px, 5vw, 64px) clamp(32px, 4vw, 48px)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Footer atmosphere — slow exhale. The page's final breath. */}

          {/* Primary amber haze — breathes once every 20s, the loudest of the three */}
          <div style={{
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '560px', height: '220px',
            background: 'radial-gradient(ellipse, rgba(230,161,90,0.065) 0%, rgba(230,161,90,0.018) 50%, transparent 72%)',
            pointerEvents: 'none',
            animation: 'section-breathe-a 20s ease-in-out infinite',
          }} />

          {/* Left ambient — very faint, slow counter-drift */}
          <div style={{
            position: 'absolute',
            top: '30%', left: '10%',
            width: '240px', height: '140px',
            background: 'radial-gradient(ellipse, rgba(230,161,90,0.028) 0%, transparent 68%)',
            pointerEvents: 'none',
            animation: 'section-breathe-c 32s ease-in-out infinite 6s',
          }} />

          {/* Right ambient — subtle, whisper-level, almost nothing */}
          <div style={{
            position: 'absolute',
            top: '25%', right: '8%',
            width: '200px', height: '120px',
            background: 'radial-gradient(ellipse, rgba(230,161,90,0.020) 0%, transparent 65%)',
            pointerEvents: 'none',
            animation: 'section-breathe-b 38s ease-in-out infinite 14s',
          }} />

          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(22px)',
            transition: 'opacity 1.4s cubic-bezier(0.16, 1, 0.30, 1), transform 1.4s cubic-bezier(0.16, 1, 0.30, 1)',
          }}>
            <p className="font-serif" style={{
              fontSize: 'clamp(22px, 3vw, 36px)',
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              color: 'rgba(255,255,255,0.85)',
              textShadow: '0 0 60px rgba(230,161,90,0.10)',
              marginBottom: '12px',
            }}>
              Your story deserves a stage.
            </p>
            <p className="font-serif" style={{
              fontSize: 'clamp(13px, 1.4vw, 16px)',
              fontWeight: 400,
              fontStyle: 'italic',
              lineHeight: 1.5,
              color: 'rgba(255,247,235,0.55)',
              letterSpacing: '0.02em',
            }}>
              Let&apos;s make it unforgettable.
            </p>
          </div>
        </div>

        {/* ── 2. MAIN CONTENT ── */}
        <Container>
          <div style={{
            paddingTop: 'clamp(28px, 4vw, 40px)',
            paddingBottom: 'clamp(28px, 4vw, 40px)',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '48px',
            flexWrap: 'wrap',
          }}>

            {/* Brand */}
            <div style={{ maxWidth: '320px' }}>
              {/* Logo + Name */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <svg width="26" height="26" viewBox="0 0 80 80" fill="none">
                  <polygon
                    points="40,8 70,24 70,56 40,72 10,56 10,24"
                    stroke="#E6A15A" strokeWidth="1.5"
                    fill="rgba(230,161,90,0.07)"
                  />
                  <text x="40" y="47" textAnchor="middle" fill="#E6A15A" fontSize="18" fontWeight="700" letterSpacing="2">SY</text>
                </svg>
                <span className="font-serif" style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  letterSpacing: '0.10em',
                  color: 'rgba(255,255,255,0.85)',
                }}>
                  Yoesel
                </span>
              </div>

              {/* Role */}
              <p style={{
                fontSize: '10px',
                fontWeight: 500,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#E6A15A',
                opacity: 0.60,
                marginBottom: '14px',
              }}>
                Digital Designer for Creative Artists
              </p>

              {/* Description */}
              <p style={{
                fontSize: '13px',
                lineHeight: 1.75,
                color: 'rgba(255,255,255,0.52)',
                marginBottom: '16px',
              }}>
                I design professional personal websites that help creative artists express their identity online.
              </p>

              {/* Location */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                  <circle cx="5" cy="5" r="4" stroke="rgba(255,255,255,0.42)" strokeWidth="0.8" />
                  <circle cx="5" cy="5" r="1.4" fill="rgba(255,255,255,0.42)" />
                </svg>
                <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.66)', letterSpacing: '0.02em' }}>
                  Thimphu, Bhutan
                </span>
              </div>
            </div>

            {/* Quick nav */}
            <div>
              <p style={{
                fontSize: '10px',
                fontWeight: 500,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.62)',
                marginBottom: '16px',
              }}>
                Navigation
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Link href="/work" className="ft-nav-link">Work</Link>
                <Link href="/about" className="ft-nav-link">About</Link>
                <Link href="/#contact" className="ft-nav-link">Contact</Link>
              </div>
            </div>

          </div>

          {/* ── 3. BOTTOM BAR ── */}
          <div className="ft-bottom-bar">
            <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.62)', letterSpacing: '0.02em' }}>
              &copy; 2026 Yoesel
            </p>
            <p className="ft-tagline" style={{ fontSize: '11px', color: 'rgba(255,247,235,0.62)', fontStyle: 'italic', letterSpacing: '0.02em' }}>
              Your sound deserves to be felt
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="ft-back-top"
              style={{ justifySelf: 'end' }}
            >
              Back to top <span className="ft-arrow">↑</span>
            </button>
          </div>
        </Container>

      </footer>
    </>
  )
}
