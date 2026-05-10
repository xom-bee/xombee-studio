'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  nx: number        // normalized x, -1.6 to 1.6
  ny: number        // normalized y, -1.1 to 1.1
  z: number         // depth -200 to 200 (positive = closer = larger)
  vx: number
  vy: number
  vz: number
  baseSize: number
  phase: number
  baseOpacity: number
}

interface FgHaze {
  nx: number        // normalized screen position
  ny: number
  size: number      // radius in pixels — large, bokeh-like
  baseOp: number
  breathPhase: number
  breathSpd: number
  driftAmp: number
  driftPhase: number
  driftSpd: number
}

interface WaveEvent {
  nextAt: number    // t-seconds when next pulse fires
  start: number     // t-seconds when current pulse started, -1 = inactive
  duration: number
  intensity: number
}

const A = '230,161,90'
const FOCAL = 480
const TAU = Math.PI * 2

export function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const mobile = window.innerWidth < 768
    const N = mobile ? 110 : 230

    let W = 0, H = 0, cx = 0, cy = 0

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      W = canvas!.offsetWidth
      H = canvas!.offsetHeight
      cx = W / 2
      cy = H / 2
      canvas!.width = W * dpr
      canvas!.height = H * dpr
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    // ── Depth particles — uniform ellipsoid distribution
    const particles: Particle[] = Array.from({ length: N }, () => {
      const theta = Math.random() * TAU
      const phi = Math.acos(2 * Math.random() - 1)
      const r = Math.cbrt(Math.random())
      return {
        nx: r * Math.sin(phi) * Math.cos(theta) * 1.5,
        ny: r * Math.sin(phi) * Math.sin(theta) * 0.85,
        z: (Math.random() - 0.5) * 400,
        vx: (Math.random() - 0.5) * 1.8e-4,
        vy: (Math.random() - 0.5) * 1.2e-4,
        vz: (Math.random() - 0.5) * (mobile ? 3e-5 : 6e-5),
        baseSize: 0.8 + Math.random() * 1.8,
        phase: Math.random() * TAU,
        baseOpacity: 0.10 + Math.random() * 0.30,
      }
    })

    // ── Foreground atmospheric haze — large soft bokeh closest to viewer
    // These sit in front of all other layers, creating true depth separation
    const FG_N = mobile ? 5 : 9
    const foreground: FgHaze[] = Array.from({ length: FG_N }, () => ({
      nx: (Math.random() - 0.5) * 2.2,
      ny: (Math.random() - 0.5) * 1.5,
      size: 75 + Math.random() * 115,
      baseOp: 0.006 + Math.random() * 0.009,
      breathPhase: Math.random() * TAU,
      breathSpd: 0.038 + Math.random() * 0.036,
      driftAmp: 14 + Math.random() * 22,
      driftPhase: Math.random() * TAU,
      driftSpd: 0.016 + Math.random() * 0.020,
    }))

    // ── Floating planes
    const PLANES = [
      { fx: 0.20, fy: 0.42, fw: 0.20, fh: 0.60, angle: 0.68,  skewX: -18, rotSpd: 8e-4,   floatSpd: 5e-4,   op: 0.022, ph: 0.0 },
      { fx: 0.80, fy: 0.56, fw: 0.26, fh: 0.40, angle: -0.42, skewX:  14, rotSpd: 6e-4,   floatSpd: 4e-4,   op: 0.018, ph: 1.8 },
      { fx: 0.60, fy: 0.28, fw: 0.32, fh: 0.30, angle:  0.24, skewX:  -9, rotSpd: 5e-4,   floatSpd: 3.5e-4, op: 0.015, ph: 3.2 },
      { fx: 0.36, fy: 0.74, fw: 0.22, fh: 0.44, angle: -0.76, skewX:  20, rotSpd: 9e-4,   floatSpd: 6e-4,   op: 0.019, ph: 0.6 },
      { fx: 0.88, fy: 0.24, fw: 0.16, fh: 0.35, angle:  1.08, skewX: -22, rotSpd: 5.5e-4, floatSpd: 3.8e-4, op: 0.014, ph: 4.5 },
    ]

    // ── Waveform ribbons
    const WAVES = [
      { yF: 0.465, freq: 0.88, amp: 0.052, spd:  0.13, spd2:  0.07, baseOp: 0.055, breathAmp: 0.024, breathSpd: 0.09 },
      { yF: 0.530, freq: 1.55, amp: 0.032, spd: -0.19, spd2: -0.10, baseOp: 0.035, breathAmp: 0.016, breathSpd: 0.07 },
      { yF: 0.400, freq: 0.52, amp: 0.068, spd:  0.09, spd2:  0.05, baseOp: 0.024, breathAmp: 0.012, breathSpd: 0.06 },
    ]

    // Per-wave micro-pulse events — each wave independently develops brief surges
    const waveEvents: WaveEvent[] = WAVES.map(() => ({
      nextAt: 8 + Math.random() * 14,
      start: -1,
      duration: 2.5 + Math.random() * 2.0,
      intensity: 0.45 + Math.random() * 0.55,
    }))

    // ── Volumetric glow
    const GLOWS = [
      { xF: 0.50, yF: 0.46, rF: 0.38, rVar: 0.04, rSpd: 0.13, xDrift: 0.04, yDrift: 0.02, xSpd: 0.07, ySpd: 0.09, c0: 0.058, c1: 0.022, brSpd: 0.22, brAmp: 0.14 },
      { xF: 0.50, yF: 0.50, rF: 0.22, rVar: 0.03, rSpd: 0.10, xDrift: 0.06, yDrift: 0.04, xSpd: 0.05, ySpd: 0.08, c0: 0.038, c1: 0.00,  brSpd: 0.17, brAmp: 0.12 },
    ]

    // ── Cinematic light sweep state
    // Fires every 12-20s, travels partially across the scene like a stage light
    let sweepStart = -1
    let nextSweepAt = 12 + Math.random() * 8
    let sweepLTR = Math.random() > 0.5
    let sweepDuration = 7 + Math.random() * 2.5
    let sweepTravelFrac = 0.52 + Math.random() * 0.38   // how far it crosses (52–90% of width)

    // ── CTA environmental response
    // The ambient space subtly responds when the user hovers the CTA
    let ctaHovered = false
    let ctaGlowAlpha = 0      // lerps 0→1 on hover, drives glow intensity
    let ctaCanvasX = 0        // CTA center in canvas-relative px (updated on hover)
    let ctaCanvasY = 0

    let ctaEl: Element | null = null
    const onCtaEnter = () => {
      ctaHovered = true
      if (ctaEl) {
        const cr = canvas.getBoundingClientRect()
        const br = ctaEl.getBoundingClientRect()
        ctaCanvasX = br.left + br.width  / 2 - cr.left
        ctaCanvasY = br.top  + br.height / 2 - cr.top
      }
    }
    const onCtaLeave = () => { ctaHovered = false }

    // Wait for CTA's 1.05s fade-in animation to complete before attaching
    const ctaTimer = window.setTimeout(() => {
      ctaEl = document.querySelector('[aria-label="View my portfolio work"]')
      ctaEl?.addEventListener('mouseenter', onCtaEnter)
      ctaEl?.addEventListener('mouseleave', onCtaLeave)
    }, 1400)

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    let raf = 0
    const t0 = performance.now()
    let lastFrame = 0
    const FRAME_INTERVAL = 1000 / 30

    function draw(now: number) {
      raf = requestAnimationFrame(draw)
      if (now - lastFrame < FRAME_INTERVAL) return
      lastFrame = now

      const t = (now - t0) * 0.001
      ctx!.clearRect(0, 0, W, H)

      // ── Depth focus cycles — four incommensurable periods create asymmetric breathing
      // Each layer's atmospheric presence slowly shifts relative to the others.
      // Using prime-adjacent ratios (23, 29, 37, 41) ensures cycles never fully sync.
      const planeFocus = 0.82 + Math.sin(t * TAU / 23) * 0.18   // planes: dominant → recede
      const waveFocus  = 0.82 + Math.sin(t * TAU / 29) * 0.18   // waves: independent phase
      const glowFocus  = 0.82 + Math.sin(t * TAU / 37) * 0.18   // glow: slowest drift
      const partFocus  = 0.80 + Math.sin(t * TAU / 41) * 0.20   // particles: widest range

      // ── Layer 0: Cinematic light sweep ──────────────────────────────────────
      // A soft diagonal band — stage light catching part of the scene, then passing.
      // Fires infrequently (12-20s apart), travels a partial arc, very low opacity.
      if (sweepStart < 0 && t >= nextSweepAt) {
        sweepStart = t
        nextSweepAt   = t + 12 + Math.random() * 8
        sweepLTR      = Math.random() > 0.5
        sweepDuration = 7 + Math.random() * 2.5
        sweepTravelFrac = 0.52 + Math.random() * 0.38
      }

      if (sweepStart >= 0) {
        const progress = (t - sweepStart) / sweepDuration
        if (progress >= 1) {
          sweepStart = -1
        } else {
          // Ease-in-out so sweep accelerates and decelerates like a real light move
          const eased = progress < 0.5
            ? 2 * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 2) / 2

          // Opacity rises and falls — peaks at midpoint, never seen at full entry/exit
          const sweepOp = Math.sin(progress * Math.PI) * 0.036

          // Sweep center: enters from one edge, travels partial distance across scene
          const travelW = W * sweepTravelFrac
          const sweepCenterX = sweepLTR
            ? -W * 0.10 + travelW * eased       // left edge → partial right
            : W  * 1.10 - travelW * eased       // right edge → partial left

          ctx!.save()
          ctx!.translate(cx, cy * 0.9)   // anchor slightly above center — stage light source
          ctx!.rotate(-0.19)             // diagonal tilt like angled theatrical lighting
          const lx = sweepCenterX - cx   // position in rotated coordinate space
          const bh = 128                 // half-band width in px
          const sg = ctx!.createLinearGradient(lx - bh, 0, lx + bh, 0)
          sg.addColorStop(0,    `rgba(${A},0)`)
          sg.addColorStop(0.30, `rgba(${A},${sweepOp * 0.45})`)
          sg.addColorStop(0.50, `rgba(${A},${sweepOp})`)
          sg.addColorStop(0.70, `rgba(${A},${sweepOp * 0.45})`)
          sg.addColorStop(1,    `rgba(${A},0)`)
          ctx!.fillStyle = sg
          ctx!.fillRect(lx - bh, -H * 1.3, bh * 2, H * 2.6)
          ctx!.restore()
        }
      }

      // ── Layer 1: Floating planes ─────────────────────────────────────────────
      for (const pl of PLANES) {
        const px = pl.fx * W
        const py = pl.fy * H + Math.sin(t * pl.floatSpd * 1000 + pl.ph) * 0.028 * H
        const angle = pl.angle + Math.sin(t * pl.rotSpd * 1000 + pl.ph * 0.7) * 0.11
        const breath = 0.65 + Math.sin(t * 0.14 + pl.ph) * 0.35
        const op = pl.op * breath * planeFocus    // depth focus modulation
        const pw = pl.fw * W
        const ph = pl.fh * H

        ctx!.save()
        ctx!.translate(px, py)
        ctx!.rotate(angle)
        ctx!.transform(1, 0, Math.tan((pl.skewX * Math.PI) / 180), 1, 0, 0)

        const grad = ctx!.createLinearGradient(-pw / 2, 0, pw / 2, 0)
        grad.addColorStop(0,    `rgba(${A},${op * 3.5})`)
        grad.addColorStop(0.06, `rgba(${A},${op})`)
        grad.addColorStop(0.94, `rgba(${A},${op})`)
        grad.addColorStop(1,    `rgba(${A},${op * 3.5})`)
        ctx!.fillStyle = grad
        ctx!.fillRect(-pw / 2, -ph / 2, pw, ph)

        ctx!.strokeStyle = `rgba(${A},${op * 2.2})`
        ctx!.lineWidth = 0.5
        ctx!.strokeRect(-pw / 2, -ph / 2, pw, ph)
        ctx!.restore()
      }

      // ── Layer 2: Waveform ribbons ────────────────────────────────────────────
      const SEG = 110
      for (let i = 0; i < WAVES.length; i++) {
        const wv = WAVES[i]
        const we = waveEvents[i]

        // Advance micro-pulse event timer
        if (we.start < 0 && t >= we.nextAt) {
          we.start    = t
          we.nextAt   = t + 10 + Math.random() * 12
          we.duration = 2.5 + Math.random() * 2.0
          we.intensity = 0.45 + Math.random() * 0.55
        }
        // Normalized pulse envelope: sin arch over event duration
        const eventPulse = we.start >= 0
          ? Math.sin(((t - we.start) / we.duration) * Math.PI) * we.intensity
          : 0
        if (we.start >= 0 && t - we.start >= we.duration) we.start = -1

        // Base opacity modulated by depth focus + micro-pulse
        const op = (wv.baseOp + Math.sin(t * wv.breathSpd * 8 + 1) * wv.breathAmp) * waveFocus
        const ampBoost = 1 + eventPulse * 0.30   // up to +30% amplitude during pulse

        ctx!.beginPath()
        for (let j = 0; j <= SEG; j++) {
          const x = (j / SEG) * W
          const nx = (j / SEG) * Math.PI * 4
          const y =
            H * wv.yF +
            Math.sin(nx * wv.freq       + t * wv.spd  * 8) * H * wv.amp * ampBoost +
            Math.sin(nx * wv.freq * 2.2 + t * wv.spd2 * 8) * H * wv.amp * 0.28
          j === 0 ? ctx!.moveTo(x, y) : ctx!.lineTo(x, y)
        }
        ctx!.strokeStyle = `rgba(${A},${Math.max(0.01, op + eventPulse * 0.022)})`
        ctx!.lineWidth = 0.75 + eventPulse * 0.35
        ctx!.stroke()
      }

      // ── Layer 3: Volumetric glow ─────────────────────────────────────────────
      for (const gl of GLOWS) {
        const br = 0.5 + Math.sin(t * gl.brSpd) * gl.brAmp
        const r  = W * (gl.rF + Math.sin(t * gl.rSpd) * gl.rVar) * br
        const gx = cx + Math.sin(t * gl.xSpd) * W * gl.xDrift
        const gy = H  * gl.yF + Math.sin(t * gl.ySpd) * H * gl.yDrift
        const g  = ctx!.createRadialGradient(gx, gy, 0, gx, gy, r)
        g.addColorStop(0,   `rgba(${A},${gl.c0 * glowFocus})`)
        g.addColorStop(0.5, `rgba(${A},${gl.c1 * glowFocus})`)
        g.addColorStop(1,   `rgba(${A},0)`)
        ctx!.beginPath()
        ctx!.arc(gx, gy, r, 0, TAU)
        ctx!.fillStyle = g
        ctx!.fill()
      }

      // CTA ambient response — soft glow blooms near the button on hover
      // Lerps at 0.05/frame (~1.5s to full) so the response feels atmospheric, not reactive
      ctaGlowAlpha += ((ctaHovered ? 1 : 0) - ctaGlowAlpha) * 0.05
      if (ctaGlowAlpha > 0.004 && ctaCanvasX > 0) {
        const ctaR = W * 0.22
        const ctaG = ctx!.createRadialGradient(ctaCanvasX, ctaCanvasY, 0, ctaCanvasX, ctaCanvasY, ctaR)
        ctaG.addColorStop(0, `rgba(${A},${0.040 * ctaGlowAlpha})`)
        ctaG.addColorStop(1, `rgba(${A},0)`)
        ctx!.beginPath()
        ctx!.arc(ctaCanvasX, ctaCanvasY, ctaR, 0, TAU)
        ctx!.fillStyle = ctaG
        ctx!.fill()
      }

      // ── Layer 4: Depth particles (3D perspective projection) ─────────────────
      for (const p of particles) {
        p.nx += p.vx
        p.ny += p.vy
        p.z  += p.vz
        if (p.nx >  1.6) p.nx = -1.6; else if (p.nx < -1.6) p.nx =  1.6
        if (p.ny >  1.1) p.ny = -1.1; else if (p.ny < -1.1) p.ny =  1.1
        if (p.z  >  200) p.z  = -200; else if (p.z  < -200) p.z  =  200

        // Micro-pulse: two irrational-ratio sin waves beat against the primary breathe.
        // The result is quasi-random brightness variation — never perfectly periodic.
        const micro = (Math.sin(t * 1.73 + p.phase * 3.1) + Math.sin(t * 0.83 + p.phase * 2.3)) * 0.5

        const depth  = FOCAL + p.z
        const scale  = FOCAL / depth
        const sx     = cx + p.nx * cx * scale
        const sy     = cy + p.ny * cy * scale
        const size   = Math.max(p.baseSize * scale, 0.35)
        const breathe = 0.4 + Math.sin(t * 0.55 + p.phase) * 0.6 + micro * 0.12
        const depth01 = (p.z + 200) / 400
        const op     = Math.min(p.baseOpacity * breathe * (0.15 + depth01 * 0.85) * partFocus, 0.52)

        ctx!.beginPath()
        ctx!.arc(sx, sy, size, 0, TAU)
        ctx!.fillStyle = `rgba(${A},${op})`
        ctx!.fill()
      }

      // ── Layer 5: Foreground atmospheric haze ─────────────────────────────────
      // Large, extremely faint radial gradients drifting closest to the viewer.
      // Creates air — the cinematic gap between the scene and the typography.
      for (const fg of foreground) {
        const breath = 0.25 + Math.sin(t * fg.breathSpd * TAU + fg.breathPhase) * 0.75
        const op = fg.baseOp * breath
        if (op < 0.001) continue

        const fx = cx + fg.nx * cx + Math.sin(t * fg.driftSpd * TAU + fg.driftPhase) * fg.driftAmp
        const fy = cy + fg.ny * cy + Math.cos(t * fg.driftSpd * TAU * 0.68 + fg.driftPhase) * fg.driftAmp * 0.5

        const fgG = ctx!.createRadialGradient(fx, fy, 0, fx, fy, fg.size)
        fgG.addColorStop(0, `rgba(${A},${op})`)
        fgG.addColorStop(1, `rgba(${A},0)`)
        ctx!.beginPath()
        ctx!.arc(fx, fy, fg.size, 0, TAU)
        ctx!.fillStyle = fgG
        ctx!.fill()
      }
    }

    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      window.clearTimeout(ctaTimer)
      ctaEl?.removeEventListener('mouseenter', onCtaEnter)
      ctaEl?.removeEventListener('mouseleave', onCtaLeave)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  )
}
