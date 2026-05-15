'use client'

/**
 * Atmospheric "showreel glimpse" layer.
 * Procedural ghost-like warm silhouettes, slow drift, soft light leaks.
 * Sits between HeroCanvas and the film-grain / vignette layers.
 * Compositor-only animations (opacity + transform). Reduced-motion safe via globals.css.
 */
export function HeroShowreel() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden hero-showreel"
      style={{
        mixBlendMode: 'screen',
        opacity: 0.55,
        filter: 'blur(48px) saturate(0.85)',
        animation: 'showreel-fade-in 2.4s 0.4s ease-out forwards',
        willChange: 'opacity',
      }}
    >
      {/* Silhouette 1 — left, large slow drifting warm shape */}
      <div
        style={{
          position: 'absolute',
          top: '12%',
          left: '-8%',
          width: '52%',
          height: '70%',
          background: 'radial-gradient(ellipse 55% 65% at 50% 50%, rgba(230,161,90,0.22) 0%, rgba(230,161,90,0.08) 38%, transparent 72%)',
          animation: 'showreel-drift-a 64s ease-in-out infinite',
          willChange: 'transform, opacity',
        }}
      />

      {/* Silhouette 2 — right side, taller, cooler warm */}
      <div
        style={{
          position: 'absolute',
          top: '5%',
          right: '-12%',
          width: '58%',
          height: '85%',
          background: 'radial-gradient(ellipse 50% 60% at 50% 50%, rgba(218,150,98,0.18) 0%, rgba(180,130,90,0.06) 42%, transparent 75%)',
          animation: 'showreel-drift-b 78s ease-in-out infinite',
          willChange: 'transform, opacity',
        }}
      />

      {/* Silhouette 3 — center-bottom, low and wide (stage floor warmth) */}
      <div
        style={{
          position: 'absolute',
          bottom: '-15%',
          left: '15%',
          width: '70%',
          height: '60%',
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(230,161,90,0.16) 0%, rgba(200,140,90,0.05) 45%, transparent 78%)',
          animation: 'showreel-drift-c 92s ease-in-out infinite',
          willChange: 'transform, opacity',
        }}
      />

      {/* Silhouette 4 — upper center, soft halo (memory of stage light) */}
      <div
        style={{
          position: 'absolute',
          top: '-8%',
          left: '25%',
          width: '50%',
          height: '55%',
          background: 'radial-gradient(ellipse 55% 55% at 50% 50%, rgba(245,200,150,0.14) 0%, rgba(230,161,90,0.04) 40%, transparent 75%)',
          animation: 'showreel-drift-d 56s ease-in-out infinite',
          willChange: 'transform, opacity',
        }}
      />

      {/* Light leak — vertical streak, left, very slow pulse */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '22%',
          width: '12%',
          height: '120%',
          background: 'linear-gradient(180deg, transparent 0%, rgba(230,161,90,0.10) 35%, rgba(245,200,150,0.14) 50%, rgba(230,161,90,0.08) 65%, transparent 100%)',
          transform: 'rotate(-6deg)',
          animation: 'showreel-leak-a 38s ease-in-out infinite',
          willChange: 'opacity, transform',
        }}
      />

      {/* Light leak — vertical streak, right, offset rhythm */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          right: '18%',
          width: '14%',
          height: '125%',
          background: 'linear-gradient(180deg, transparent 0%, rgba(218,150,98,0.08) 32%, rgba(230,161,90,0.12) 52%, rgba(180,130,90,0.06) 68%, transparent 100%)',
          transform: 'rotate(8deg)',
          animation: 'showreel-leak-b 46s ease-in-out infinite',
          willChange: 'opacity, transform',
        }}
      />
    </div>
  )
}
