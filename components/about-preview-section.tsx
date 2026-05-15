'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/ui/container'
import { SectionLabel } from '@/components/ui/section-label'

// ─── Scroll-focus constants ───────────────────────────────────────────────────
// Reading zone: fraction of viewport height where attention is centered
const FOCUS_Y_RATIO = 0.42
// Sigma = avg line spacing × this multiplier. Controls spotlight tightness.
// 1.2 makes adjacent lines clearly dimmer while still feeling organic.
const SIGMA_SCALE   = 1.2
const BASE_PAST     = 0.58   // lines the reader has passed — remembered, not gone
const BASE_FUTURE   = 0.34   // lines ahead — atmospheric, not yet spoken
const PEAK          = 0.94   // brightness at focus center
const EASING        = 'color 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94)'

export function AboutPreviewSection() {
  const sectionRef = useRef<HTMLElement>(null)
  // One ref slot per line: [heading, g1, g2, g3, g4]
  const lineRefs = useRef<(HTMLParagraphElement | null)[]>([])

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const lines = lineRefs.current.filter((el): el is HTMLParagraphElement => el !== null)
    if (!lines.length) return

    // Reduced-motion: flat readable opacity, no animation
    if (reduced) {
      lines.forEach(el => { el.style.color = 'rgba(255, 255, 255, 0.78)' })
      return
    }

    // Measure average center-to-center spacing between lines (document-relative,
    // stable across scrolls). This is what makes the sigma self-calibrating.
    const docCenters = lines.map(el => {
      const r = el.getBoundingClientRect()
      return r.top + window.scrollY + r.height / 2
    })
    const spacings = docCenters.slice(1).map((c, i) => c - docCenters[i])
    const avgSpacing = spacings.reduce((a, b) => a + b, 0) / (spacings.length || 1)
    // Pre-compute denominator of the gaussian: 2σ²
    const sigma2x2 = 2 * (avgSpacing * SIGMA_SCALE) ** 2

    const computeFocus = () => {
      const focusY = window.innerHeight * FOCUS_Y_RATIO
      lines.forEach(el => {
        const rect    = el.getBoundingClientRect()
        const center  = rect.top + rect.height / 2
        const dist    = center - focusY
        // Gaussian: 1 at focus, falls off smoothly in both directions
        const t       = Math.exp(-(dist * dist) / sigma2x2)
        // Asymmetric base: past lines linger brighter than future lines
        const base    = dist > 0 ? BASE_FUTURE : BASE_PAST
        const opacity = base + t * (PEAK - base)
        el.style.color = `rgba(255, 255, 255, ${opacity.toFixed(3)})`
      })
    }

    // Paint initial state instantly (no transition) to avoid flash on load
    lines.forEach(el => { el.style.transition = 'none' })
    computeFocus()
    // Enable smooth easing for all subsequent scroll-driven updates
    requestAnimationFrame(() => {
      lines.forEach(el => { el.style.transition = EASING })
    })

    let rafId: number | null = null
    let visible = false

    // Gate scroll work: only compute when section is in the viewport
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      // Update immediately when section scrolls into view (no scroll event needed)
      if (visible) computeFocus()
    }, { threshold: 0 })
    visibilityObserver.observe(section)

    const onScroll = () => {
      if (!visible || rafId !== null) return
      rafId = requestAnimationFrame(() => {
        computeFocus()
        rafId = null
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafId !== null) cancelAnimationFrame(rafId)
      visibilityObserver.disconnect()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        background: 'transparent',
        position: 'relative',
        paddingTop: 'clamp(72px, 10vw, 120px)',
        paddingBottom: 'clamp(72px, 10vw, 120px)',
        overflow: 'hidden',
      }}
    >
      {/* Atmospheric ambient — warm amber orb from the left, like a stage light off-axis */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '15%',
          left: '-8%',
          width: '55%',
          height: '72%',
          background: 'radial-gradient(ellipse, rgba(230,161,90,0.028) 0%, transparent 68%)',
          pointerEvents: 'none',
          animation: 'section-breathe-a 26s ease-in-out infinite',
        }}
      />
      {/* Right-side atmospheric depth — spatial separation */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '10%',
          right: '-5%',
          width: '40%',
          height: '80%',
          background: 'radial-gradient(ellipse, rgba(230,161,90,0.014) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />
      <Container>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(48px, 8vw, 96px)',
          flexWrap: 'wrap',
        }}>

          {/* Text side */}
          <div style={{ flex: '1 1 300px', maxWidth: '500px' }}>

            <SectionLabel>About</SectionLabel>

            {/* Heading — focus index 0 */}
            <p
              ref={el => { lineRefs.current[0] = el }}
              className="font-serif"
              style={{
                fontSize: 'clamp(26px, 3.2vw, 38px)',
                fontWeight: 700,
                lineHeight: 1.1,
                color: 'rgba(255,255,255,0.45)',
                letterSpacing: '-0.01em',
                marginBottom: '24px',
              }}
            >
              I started with music.
            </p>

            {/* Group 1 — focus index 1 */}
            <div style={{ marginBottom: '20px' }}>
              <p
                ref={el => { lineRefs.current[1] = el }}
                style={{ fontSize: 'clamp(14px, 1.4vw, 16px)', fontWeight: 400, lineHeight: 1.80, color: 'rgba(255,255,255,0.45)' }}
              >
                It was the first way I expressed myself.<br />
                But I realized something was missing.
              </p>
            </div>

            {/* Group 2 — focus index 2 */}
            <div style={{ marginBottom: '20px' }}>
              <p
                ref={el => { lineRefs.current[2] = el }}
                style={{ fontSize: 'clamp(14px, 1.4vw, 16px)', fontWeight: 400, lineHeight: 1.80, color: 'rgba(255,255,255,0.45)' }}
              >
                The feeling was there.<br />
                The identity was not.
              </p>
            </div>

            {/* Group 3 — focus index 3
                The amber <span> has an explicit color so it is unaffected
                by the parent p's color changes — it stays amber at all focus levels. */}
            <div style={{ marginBottom: '20px' }}>
              <p
                ref={el => { lineRefs.current[3] = el }}
                style={{ fontSize: 'clamp(14px, 1.4vw, 16px)', fontWeight: 600, lineHeight: 1.80, color: 'rgba(255,255,255,0.45)' }}
              >
                That is where{' '}
                <span style={{ color: '#E6A15A' }}>design</span>
                {' '}came in.
              </p>
            </div>

            {/* Group 4 — focus index 4 */}
            <div style={{ marginBottom: '36px' }}>
              <p
                ref={el => { lineRefs.current[4] = el }}
                style={{ fontSize: 'clamp(14px, 1.4vw, 16px)', fontWeight: 400, lineHeight: 1.80, color: 'rgba(255,255,255,0.45)' }}
              >
                Today, I design digital experiences that help creative artists express who they are and be remembered.
              </p>
            </div>

            {/* CTA — intentionally outside the focus system */}
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
                transition: 'color 0.42s cubic-bezier(0.22, 1, 0.36, 1), gap 0.42s cubic-bezier(0.22, 1, 0.36, 1)',
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
            border: '1px solid rgba(255,255,255,0.07)',
            boxShadow: '0 48px 110px rgba(0,0,0,0.68), 0 0 0 1px rgba(230,161,90,0.08), 0 0 60px rgba(230,161,90,0.09)',
          }}>
            <Image
              src="/images/trust-portrait.png"
              alt="Sangay Yoesel"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
              sizes="(max-width: 768px) 100vw, 420px"
            />
            {/* Cinematic edge vignette — frames portrait like a stage spotlight */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(ellipse 85% 90% at 55% 38%, transparent 28%, rgba(11,11,15,0.62) 100%)',
              pointerEvents: 'none',
            }} />
            {/* Left edge darkness — foreground/background separation */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, rgba(11,11,15,0.42) 0%, transparent 28%)',
              pointerEvents: 'none',
            }} />
            {/* Bottom fade — grounds the figure */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, transparent 42%, rgba(11,11,15,0.72) 100%)',
              pointerEvents: 'none',
            }} />
            {/* Directional amber edge light — as if a warm stage light catches the right side */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to left, rgba(230,161,90,0.055) 0%, transparent 32%)',
              pointerEvents: 'none',
            }} />
            {/* Top fade — cinematic frame top */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, rgba(11,11,15,0.28) 0%, transparent 18%)',
              pointerEvents: 'none',
            }} />
          </div>

        </div>
      </Container>
    </section>
  )
}
