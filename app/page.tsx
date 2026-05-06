'use client'

import { useState } from 'react'
import { LoadingScreen } from '@/components/loading-screen'
import { HeroSection } from '@/components/hero-section'
import { PortfolioSection } from '@/components/portfolio-section'
import { AboutPreviewSection } from '@/components/about-preview-section'
import { ProcessSection } from '@/components/process-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

// Persists across client-side route changes — resets only on hard refresh
let siteHasLoaded = false

export default function Home() {
  const [loaded, setLoaded] = useState(siteHasLoaded)

  const handleLoadComplete = () => {
    siteHasLoaded = true
    setLoaded(true)
  }

  return (
    <>
      {!loaded && <LoadingScreen onComplete={handleLoadComplete} />}

      <div
        className={`transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      >
        <main id="main-content">
          <HeroSection />
          <PortfolioSection />
          <AboutPreviewSection />
          <ProcessSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </>
  )
}
