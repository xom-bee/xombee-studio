'use client'

import { useState, useEffect } from 'react'
import { LoadingScreen } from '@/components/loading-screen'
import { HeroSection } from '@/components/hero-section'
import { PortfolioSection } from '@/components/portfolio-section'
import { AboutPreviewSection } from '@/components/about-preview-section'
import { LongListenSection } from '@/components/long-listen-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

// Per-session marker — set once the intro has played. Survives hard refresh
// within the same tab session, so refreshes never replay the 3.5s intro.
const INTRO_SEEN_KEY = 'yoesel:intro-seen'

// In-memory fast path — once resolved in this runtime, client-side route
// changes back to "/" never replay (or re-evaluate) the intro.
let introResolved = false

type Phase = 'pending' | 'intro' | 'done'

export default function Home() {
  // SSR and the first client render must agree, so we always start in
  // 'pending': page rendered hidden, NO transition, NO loader. This means
  // there is no hydration mismatch and no flash of the loader before we
  // know whether this is a first visit. The decision is made in useEffect
  // (one frame later, against a constant dark background — visually seamless).
  const [phase, setPhase] = useState<Phase>('pending')

  useEffect(() => {
    // Already shown earlier in this runtime (e.g. SPA nav away and back).
    if (introResolved) {
      setPhase('done')
      return
    }

    let seen = false
    try {
      seen = sessionStorage.getItem(INTRO_SEEN_KEY) === '1'
    } catch {
      // sessionStorage blocked (private mode / strict settings) → treat as
      // a first visit; the intro simply plays, no crash.
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Skip the cinematic intro for returning sessions AND for users who have
    // requested reduced motion — a forced animated delay is exactly what that
    // preference asks us not to do.
    if (seen || reducedMotion) {
      introResolved = true
      try { sessionStorage.setItem(INTRO_SEEN_KEY, '1') } catch {}
      setPhase('done')
      return
    }

    setPhase('intro')
  }, [])

  const handleLoadComplete = () => {
    try { sessionStorage.setItem(INTRO_SEEN_KEY, '1') } catch {}
    introResolved = true
    setPhase('done')
  }

  const showLoader = phase === 'intro'
  const contentVisible = phase === 'done'

  return (
    <>
      {showLoader && <LoadingScreen onComplete={handleLoadComplete} />}

      <div
        className={contentVisible ? 'opacity-100' : 'opacity-0'}
        style={{
          // 'pending' is a sub-frame internal state — never animate it.
          // The first-visit intro and the returning-visitor settle both
          // get the same 700ms premium reveal once a decision is made.
          transition: phase === 'pending' ? 'none' : 'opacity 700ms ease',
        }}
      >
        <main id="main-content">
          <HeroSection />
          <PortfolioSection />
          <AboutPreviewSection />
          <LongListenSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </>
  )
}
