'use client'

import { useState } from 'react'
import { LoadingScreen } from '@/components/loading-screen'
import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { QuoteSection } from '@/components/quote-section'
import { PortfolioSection } from '@/components/portfolio-section'
import { LogoSection } from '@/components/logo-section'
import { MoodboardSection } from '@/components/moodboard-section'
import { ProcessSection } from '@/components/process-section'
import { AboutSection } from '@/components/about-section'
import { SkillsSection } from '@/components/skills-section'
import { EducationSection } from '@/components/education-section'
import { ExperienceSection } from '@/components/experience-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export default function Home() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      {/* Loading screen */}
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}

      {/* Main site — fades in after load */}
      <div
        className={`transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      >
        <Navbar />

        <main id="main-content">
          <HeroSection />
          <QuoteSection />
          <PortfolioSection />
          <LogoSection />
          <MoodboardSection />
          <ProcessSection />
          <AboutSection />
          <SkillsSection />
          <EducationSection />
          <ExperienceSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </>
  )
}
