'use client'

import { useEffect, useState, useMemo } from 'react'

// Pre-computed stable values for sound wave bars to avoid hydration mismatch
const LOADING_WAVE_BARS = [
  { height: 24, duration: 1.2, opacity: 0.8 },
  { height: 16, duration: 1.0, opacity: 0.7 },
  { height: 28, duration: 1.4, opacity: 0.9 },
  { height: 12, duration: 0.9, opacity: 0.65 },
  { height: 20, duration: 1.1, opacity: 0.75 },
  { height: 30, duration: 1.5, opacity: 0.85 },
  { height: 14, duration: 0.85, opacity: 0.7 },
  { height: 22, duration: 1.3, opacity: 0.8 },
  { height: 18, duration: 1.0, opacity: 0.75 },
  { height: 26, duration: 1.2, opacity: 0.9 },
  { height: 10, duration: 0.95, opacity: 0.65 },
  { height: 20, duration: 1.1, opacity: 0.8 },
]

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval)
          return 100
        }
        return p + 100 / 45 // ~4.5s
      })
    }, 100)

    const timer = setTimeout(() => {
      setFadeOut(true)
      setTimeout(onComplete, 600)
    }, 5000)

    return () => {
      clearInterval(interval)
      clearTimeout(timer)
    }
  }, [onComplete])

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background transition-opacity duration-700 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Ambient glow background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, oklch(0.78 0.12 55 / 0.4) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Logo */}
      <div className="relative flex flex-col items-center gap-6 animate-fade-in">
        {/* Hexagonal logo mark */}
        <div className="relative">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="animate-spin-slow opacity-20 absolute inset-0">
            <polygon
              points="40,2 74,20 74,60 40,78 6,60 6,20"
              stroke="oklch(0.78 0.12 55)"
              strokeWidth="1"
              fill="none"
            />
          </svg>
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <polygon
              points="40,8 70,24 70,56 40,72 10,56 10,24"
              stroke="oklch(0.78 0.12 55)"
              strokeWidth="1.5"
              fill="none"
            />
            <text x="40" y="45" textAnchor="middle" fill="oklch(0.78 0.12 55)" fontSize="18" fontWeight="700" fontFamily="serif" className="animate-pulse-glow">
              XB
            </text>
          </svg>
        </div>

        {/* Studio name */}
        <div className="text-center">
          <h1
            className="font-serif text-4xl md:text-5xl font-bold tracking-widest uppercase animate-logo-glow"
            style={{ color: 'oklch(0.78 0.12 55)' }}
          >
            Xom Bee
          </h1>
          <p className="text-muted-foreground text-xs tracking-[0.4em] uppercase mt-2">Studio</p>
        </div>

        {/* Sound wave bars */}
        <div className="flex items-center gap-1 h-8">
          {LOADING_WAVE_BARS.map((bar, i) => (
            <div
              key={i}
              className="w-1 rounded-full"
              style={{
                backgroundColor: 'oklch(0.78 0.12 55)',
                height: `${bar.height}px`,
                animation: `wave ${bar.duration}s ${i * 0.07}s ease-in-out infinite`,
                opacity: bar.opacity,
              }}
            />
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-12 w-48">
        <div className="h-px bg-border rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-100 ease-linear"
            style={{
              width: `${Math.min(progress, 100)}%`,
              background: 'oklch(0.78 0.12 55)',
              boxShadow: '0 0 8px oklch(0.78 0.12 55 / 0.8)',
            }}
          />
        </div>
        <p className="text-muted-foreground text-[10px] tracking-widest uppercase mt-3 text-center">
          Loading experience
        </p>
      </div>
    </div>
  )
}
