'use client'

import Link from 'next/link'
import { useState } from 'react'

// ─────────────────────────────────────────────────────────────────────────────
// CaseStudyNav — cinematic closing navigation for case study pages.
//
// Motion language:
//   ← View All Projects
//     • Whole link slides left 3px on hover — directional retreat, feels like
//       returning to a wider space
//     • Underline traces left→right via scaleX transform (compositor-only)
//     • Color lifts from ghost to near-white — breadcrumb becomes a presence
//
//   Next Case Study →
//     • Whole block lifts 2px — emerges toward the reader, not away
//     • Arrow drifts right 4px with spring easing — directional momentum
//     • Ambient amber radial glow fades in behind the CTA (opacity-animated,
//       GPU-only) — the next destination warms the space before you arrive
//     • Label text warms from near-invisible to legible — contextualises the title
//
//   Atmospheric floor warmth:
//     • Faint radial glow rising from below the whole nav row — the case study
//       atmosphere bleeding into the closing movement, not abruptly ending
// ─────────────────────────────────────────────────────────────────────────────

interface CaseStudyNavProps {
  /** URL of the next case study */
  nextHref: string
  /** Display name of the next case study */
  nextTitle: string
}

export function CaseStudyNav({ nextHref, nextTitle }: CaseStudyNavProps) {
  const [backHovered, setBackHovered] = useState(false)
  const [nextHovered, setNextHovered] = useState(false)

  return (
    <div style={{ position: 'relative' }}>

      {/* Atmospheric floor warmth — the case study environment closes, not cuts */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-40px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '75%',
          height: '160px',
          background: 'radial-gradient(ellipse 80% 100% at 50% 90%, rgba(230,161,90,0.036) 0%, transparent 68%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{
        position: 'relative',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        paddingTop: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '20px',
      }}>

        {/* ── ← View All Projects ────────────────────────────────────────── */}
        <Link
          href="/work"
          aria-label="View all projects"
          onMouseEnter={() => setBackHovered(true)}
          onMouseLeave={() => setBackHovered(false)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
            color: backHovered ? 'rgba(255,255,255,0.78)' : 'rgba(255,255,255,0.36)',
            transform: backHovered ? 'translateX(-4px)' : 'translateX(0)',
            transition: 'color 0.55s cubic-bezier(0.16, 1, 0.30, 1), transform 0.55s cubic-bezier(0.16, 1, 0.30, 1)',
          }}
        >
          {/* Arrow — travels left with the whole link */}
          <span style={{
            fontSize: '15px',
            lineHeight: 1,
            display: 'inline-block',
            fontWeight: 300,
          }}>
            ←
          </span>

          {/* Label with scaleX underline */}
          <span style={{ position: 'relative', display: 'inline-block' }}>
            <span style={{
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.04em',
              display: 'block',
            }}>
              View All Projects
            </span>
            {/* Underline — scaleX(0→1) from left, compositor-only transform */}
            <span
              aria-hidden="true"
              style={{
                position: 'absolute',
                bottom: '-2px',
                left: 0,
                width: '100%',
                height: '1px',
                background: 'rgba(255,255,255,0.30)',
                transformOrigin: 'left center',
                transform: backHovered ? 'scaleX(1)' : 'scaleX(0)',
                transition: 'transform 0.55s cubic-bezier(0.16, 1, 0.30, 1)',
                display: 'block',
              }}
            />
          </span>
        </Link>

        {/* ── Next Case Study → ──────────────────────────────────────────── */}
        <Link
          href={nextHref}
          aria-label={`Next case study: ${nextTitle}`}
          onMouseEnter={() => setNextHovered(true)}
          onMouseLeave={() => setNextHovered(false)}
          style={{
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '6px',
            textDecoration: 'none',
            position: 'relative',
            transform: nextHovered ? 'translateY(-2px)' : 'translateY(0)',
            transition: 'transform 0.55s cubic-bezier(0.16, 1, 0.30, 1)',
          }}
        >
          {/* Ambient hover warmth — opacity-animated radial glow, GPU-only */}
          <span
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: '-18px -22px',
              background: 'radial-gradient(ellipse 80% 100% at 80% 60%, rgba(230,161,90,0.12) 0%, transparent 70%)',
              opacity: nextHovered ? 1 : 0,
              transition: 'opacity 0.75s cubic-bezier(0.16, 1, 0.30, 1)',
              pointerEvents: 'none',
              borderRadius: '12px',
            }}
          />

          {/* Label — warms into view on hover */}
          <span style={{
            fontSize: '10px',
            fontWeight: 500,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: nextHovered ? 'rgba(255,255,255,0.52)' : 'rgba(255,255,255,0.28)',
            transition: 'color 0.55s cubic-bezier(0.16, 1, 0.30, 1)',
          }}>
            Next Case Study
          </span>

          {/* Title + arrow — arrow drifts right with spring easing */}
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '15px',
            fontWeight: 600,
            letterSpacing: '-0.01em',
            color: '#E6A15A',
          }}>
            {nextTitle}
            <span style={{
              fontSize: '14px',
              lineHeight: 1,
              display: 'inline-block',
              fontWeight: 400,
              transform: nextHovered ? 'translateX(5px)' : 'translateX(0)',
              transition: 'transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)',
            }}>
              →
            </span>
          </span>
        </Link>

      </div>
    </div>
  )
}
