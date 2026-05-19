# 4 · Front-End Engineering

[← Handbook index](README.md)

---

## 4.1 Tech stack

| Layer       | Choice                                  | Why                                                    |
| ----------- | --------------------------------------- | ------------------------------------------------------ |
| Framework   | Next.js 16.2 (App Router, Turbopack)    | Server components, file routing, edge OG, image opt.   |
| UI runtime  | React 19                                | Native `inert`, modern transitions, concurrent-safe.   |
| Language    | TypeScript 5.7 (strict)                 | Discriminated unions for component contracts.          |
| Styling     | Tailwind v4 + CSS custom properties     | Utility velocity + a real token layer for theming.     |
| Email       | Resend                                  | Minimal, typed, no SMTP infrastructure to maintain.    |
| Motion      | Hand-written Canvas 2D + CSS keyframes  | Full control over the cinematic layer; no heavy deps.  |

The dependency list is intentionally short (`next`, `react`, `resend`,
`lucide-react`). Every dependency is a liability the brand has to defend; the canvas
engine is hand-written specifically to avoid a multi-hundred-KB animation library.

## 4.2 Architecture decisions

- **Server-first, client where it earns it.** Components are server components unless
  they need interactivity or browser APIs; the cinematic systems (`hero-canvas`,
  loader, contact) are explicitly `'use client'`.
- **Typed component contracts.** Shared primitives (e.g. the `Button`) use
  discriminated-union props so invalid variant combinations fail at compile time.
- **Tokens over hardcoded values.** Contrast and theme decisions live in
  `app/globals.css` custom properties so a change is one edit, not a sweep.
- **Stable interaction hooks.** Cross-component interaction targets use IDs
  (`#hero-cta`), never label-text matching, so copy and behavior are decoupled.

## 4.3 Performance strategy

- **No animation library.** The entire cinematic layer is Canvas 2D +
  `requestAnimationFrame` + CSS, eliminating a large bundle cost.
- **Render-once where possible.** Film grain is generated **one time** to an
  offscreen canvas and applied as a tiling CSS background — no per-frame cost.
- **Zero-re-render interaction.** The hero glow writes `style.background` directly to
  a ref'd DOM node on `mousemove`; React never re-renders for pointer movement.
- **Visibility-gated work.** Animation loops pause when off-screen / hidden via
  `IntersectionObserver` and visibility checks, so the engine doesn't burn frames the
  user can't see.
- **Edge OG with long cache.** `/api/og` runs on the edge runtime and is served with
  `max-age=86400, stale-while-revalidate=604800` (`next.config.mjs`).
- **Image pipeline.** AVIF/WebP, explicit device/image sizes configured in
  `next.config.mjs`.

## 4.4 Canvas engine philosophy

The hero canvas (particles, waveforms, floating planes, volumetric glow) is a
purpose-built engine, not a generic library, because the brand needs the motion to
*mean* something specific (sound, presence, memory) and to be tunable frame by frame.
Principles:

- **One loop, many systems.** A single `requestAnimationFrame` loop drives all
  subsystems; no competing timers.
- **Cheap math, expensive feel.** Effects are built from simple primitives composed
  for a rich result, keeping per-frame cost low.
- **Degrades, never breaks.** If the canvas can't initialize, the page is still
  complete and readable — the engine is enhancement, not scaffolding.

## 4.5 Hydration-safe orchestration

The first-visit intro is the riskiest piece of state in the app (it depends on
`sessionStorage`, which the server cannot know). It is solved with an explicit phase
machine in `app/page.tsx`:

```
type Phase = 'pending' | 'intro' | 'done'
```

- SSR and the first client render **both** start in `'pending'` — page hidden, no
  loader, no transition. This guarantees **zero hydration mismatch**.
- One frame later, a `useEffect` reads `sessionStorage` + `prefers-reduced-motion`
  and resolves to `'intro'` or `'done'`. The decision happens against a constant dark
  background, so the transition is visually seamless.
- A module-level `introResolved` flag short-circuits client-side navigations back to
  `/` so the intro never replays within a runtime.

This is documented inline because it is deliberately counter-intuitive: the
"do nothing on first render" choice is the thing that makes it correct.

## 4.6 Reduced-motion handling

`prefers-reduced-motion` is a **first-class branch**, not an afterthought:

- The cinematic intro is skipped entirely for reduced-motion users (a forced animated
  delay is exactly what the preference forbids).
- The hero mouse-glow listener is not attached under reduced motion.
- Ambient canvas motion respects the same preference.

The reduced-motion path is a complete, designed experience — not a broken one.

## 4.7 Accessibility systems

- Skip-to-content link as the first focusable element (`app/layout.tsx`).
- Semantic landmarks (`<main id="main-content">`, nav, footer).
- Mobile navigation implements a focus trap, `Escape` to close, focus restoration to
  the trigger, and `inert`/`aria-modal` semantics.
- Live regions: the contact form error is `role="alert" aria-live="assertive"`.

Full detail in [§6 Accessibility & Performance](06-accessibility-performance.md).

## 4.8 Contact form hardening

`app/api/contact/route.ts` + `components/contact-section.tsx` are hardened without
over-engineering:

- **Honeypot.** A visually-hidden `company` field; if filled, the API returns a fake
  `200` and silently drops the message — bots get no signal.
- **In-memory sliding-window rate limit.** `WINDOW_MS = 10min`,
  `MAX_PER_WINDOW = 4`, `MIN_GAP_MS = 20s`, keyed by IP, with opportunistic map
  pruning. Deliberately **not** Redis: this is a low-traffic contact form and an
  in-process window is the proportionate tool. The tradeoff (resets on cold start,
  per-instance) is documented in the route.
- **Client cooldown.** The submit button enters a `cooldown` state so a user can't
  hammer it; mirrors the server limit for good UX.
- **Input safety.** Required-field + email-shape + length validation; all values
  HTML-escaped before being placed in the email body.
- **Sender identity.** Env-driven `CONTACT_FROM_EMAIL` / `CONTACT_TO_EMAIL` with a
  Resend sandbox fallback for local dev; `replyTo` set to the visitor so replies are
  one click.
- **Graceful failure.** Network/API failure produces a friendly message **with a
  `mailto:` fallback** so the user's intent is never lost (Zero Dead Ends).

## 4.9 Interaction robustness

- Copy changes can't break behavior (ID-based hooks).
- Pointer interaction can't cause render storms (direct DOM writes).
- Storage being unavailable (private mode) can't crash the app (every
  `sessionStorage` access is `try/catch`, treated as "first visit").
- The contact form can't be left in a stuck state (`finally` always clears
  `sending`).

→ Continue to [§5 Brand Asset System](05-brand-asset-system.md)
