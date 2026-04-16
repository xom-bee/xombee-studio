'use client'

import { useReveal } from '@/hooks/use-reveal'

export function AboutSection() {
  const { ref, revealed } = useReveal()
  const { ref: textRef, revealed: textRevealed } = useReveal()

  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none opacity-[0.06]"
        style={{
          background: 'radial-gradient(circle, oklch(0.78 0.12 55) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual side */}
          <div ref={ref} className={`reveal ${revealed ? 'revealed' : ''}`}>
            <div className="relative">
              {/* Portrait placeholder with artistic treatment */}
              <div
                className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-sm mx-auto lg:mx-0"
                style={{
                  background: 'oklch(0.09 0 0)',
                  border: '1px solid oklch(0.18 0 0)',
                }}
              >
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DP-IUvgkwaS1zk02fbi9UmPeZEo3uWO3g.jpg"
                  alt="Sangay Yoesel — Visual Identity Designer playing acoustic guitar in a studio setting"
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
                {/* Color overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to bottom, transparent 40%, oklch(0.06 0 0) 100%), linear-gradient(135deg, oklch(0.78 0.12 55 / 0.1) 0%, transparent 60%)',
                  }}
                />
                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs tracking-widest uppercase mb-1" style={{ color: 'oklch(0.78 0.12 55)' }}>
                    Visual Identity Designer
                  </p>
                  <h3 className="font-serif text-2xl font-bold text-foreground">Sangay Yoesel</h3>
                </div>
              </div>

              {/* Floating stats */}
              <div
                className="absolute -right-4 top-12 rounded-xl border border-border/40 px-4 py-3 glow-border animate-float-delay"
                style={{ background: 'oklch(0.09 0 0)' }}
              >
                <p className="text-2xl font-serif font-bold" style={{ color: 'oklch(0.78 0.12 55)' }}>3+</p>
                <p className="text-xs text-muted-foreground">Years Creating</p>
              </div>
              <div
                className="absolute -left-4 bottom-20 rounded-xl border border-border/40 px-4 py-3 glow-border animate-float"
                style={{ background: 'oklch(0.09 0 0)' }}
              >
                <p className="text-2xl font-serif font-bold" style={{ color: 'oklch(0.78 0.12 55)' }}>10+</p>
                <p className="text-xs text-muted-foreground">Projects Delivered</p>
              </div>

              {/* Decorative ring */}
              <div className="absolute -top-8 -right-8 pointer-events-none animate-spin-slow opacity-20">
                <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
                  <circle cx="80" cy="80" r="70" stroke="oklch(0.78 0.12 55)" strokeWidth="0.5" strokeDasharray="4 8" />
                </svg>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div ref={textRef} className={`reveal ${textRevealed ? 'revealed' : ''}`}>
            <span className="text-xs tracking-widest uppercase mb-6 block" style={{ color: 'oklch(0.78 0.12 55)' }}>
              About
            </span>

            <h2 className="font-serif text-5xl md:text-6xl font-bold mb-8 leading-tight text-balance">
              Where sound becomes <span className="text-glow" style={{ color: 'oklch(0.78 0.12 55)' }}>identity</span>
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m <span className="text-foreground font-medium">Sangay Yoesel</span> — an independent artist and designer from Thimphu, Bhutan. Music has always been my first language. Design became how I translated it for the world to see.
              </p>
              <p>
                Growing up immersed in sound, I understood early that music is more than audio — it&apos;s an emotional architecture. When I discovered design, I found the bridge between what artists feel and what the world sees.
              </p>
              <p>
                Today, I work with <span className="text-foreground font-medium">musicians and creatives</span> who refuse to be just another voice in the feed. I translate their sound into visual identity — crafting brands that carry emotional weight, strategic intent, and unmistakable presence.
              </p>
              <p>
                My goal is simple: to help independent artists own their stage, even before the world gives them one.
              </p>
            </div>

            {/* Role badges */}
            <div className="flex flex-wrap gap-3 mt-8">
              {['Visual Identity Designer', 'UI/UX Designer', 'Brand Strategist', 'Music Enthusiast'].map((role) => (
                <span
                  key={role}
                  className="px-4 py-2 rounded-full text-xs tracking-wide border border-border/50 text-muted-foreground hover:border-primary/40 hover:text-foreground transition-all duration-300"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
