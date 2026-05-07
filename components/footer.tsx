'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

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
          color: rgba(255,255,255,0.35);
          text-decoration: none;
          transition: color 0.22s ease;
          display: block;
        }
        .ft-nav-link:hover { color: rgba(255,255,255,0.75); }
.ft-back-top {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 11px;
          letter-spacing: 0.05em;
          color: rgba(255,255,255,0.22);
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          transition: color 0.2s ease;
        }
        .ft-back-top:hover { color: rgba(255,255,255,0.70); }
        .ft-back-top:hover .ft-arrow { transform: translateY(-3px); }
        .ft-arrow {
          display: inline-block;
          transition: transform 0.2s ease;
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

      {/* Thin amber divider */}
      <div style={{
        width: '100%',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(230,161,90,0.18) 35%, rgba(230,161,90,0.18) 65%, transparent)',
      }} />

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
          {/* Soft ambient glow */}
          <div style={{
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '480px', height: '180px',
            background: 'radial-gradient(ellipse, rgba(230,161,90,0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 1s cubic-bezier(0.22,1,0.36,1), transform 1s cubic-bezier(0.22,1,0.36,1)',
          }}>
            <p style={{
              fontFamily: 'serif',
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
            <p style={{
              fontFamily: 'serif',
              fontSize: 'clamp(13px, 1.4vw, 16px)',
              fontWeight: 400,
              fontStyle: 'italic',
              lineHeight: 1.5,
              color: 'rgba(255,255,255,0.26)',
              letterSpacing: '0.02em',
            }}>
              Let&apos;s make it unforgettable.
            </p>
          </div>
        </div>

        {/* ── 2. MAIN CONTENT ── */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
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
                <span style={{
                  fontFamily: 'serif',
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
                color: 'rgba(255,255,255,0.30)',
                marginBottom: '16px',
              }}>
                I design personal websites that help artists be seen and remembered.
              </p>

              {/* Location */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                  <circle cx="5" cy="5" r="4" stroke="rgba(255,255,255,0.20)" strokeWidth="0.8" />
                  <circle cx="5" cy="5" r="1.4" fill="rgba(255,255,255,0.20)" />
                </svg>
                <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.20)', letterSpacing: '0.02em' }}>
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
                color: 'rgba(255,255,255,0.22)',
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
            <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.18)', letterSpacing: '0.02em' }}>
              &copy; 2026 Yoesel
            </p>
            <p className="ft-tagline" style={{ fontSize: '11px', color: 'rgba(255,255,255,0.14)', fontStyle: 'italic', letterSpacing: '0.02em' }}>
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
        </div>

      </footer>
    </>
  )
}
