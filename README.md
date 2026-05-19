# YOESEL — Portfolio & Creative Identity Platform

> _I design professional personal websites that help creative artists express their identity online._

A cinematic, single-narrative portfolio and studio site for **Sangay Yoesel**, a digital
designer for creative artists. The product is not a template-filled CV page — it is an
engineered argument that **being seen is not the same as being remembered**, demonstrated
through the experience itself.

---

## Quick start

```bash
npm install
npm run dev        # Next.js dev server (Turbopack) → http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
npm run lint       # eslint
```

### Required environment variables

The contact form uses [Resend](https://resend.com). Without these it degrades
gracefully (the form shows a friendly failure with a `mailto:` fallback), but email
will not send.

| Variable             | Required | Purpose                                                                 |
| -------------------- | -------- | ----------------------------------------------------------------------- |
| `RESEND_API_KEY`     | Yes      | Resend API key used by `app/api/contact/route.ts`.                      |
| `CONTACT_FROM_EMAIL` | Prod     | Verified sender, e.g. `Yoesel <hello@yourdomain.com>`. Falls back to the Resend sandbox sender for local dev. |
| `CONTACT_TO_EMAIL`   | Prod     | Inbox that receives submissions. Defaults to the owner's address.       |

> The production domain is currently hardcoded as `https://yoesel.com` in
> `app/layout.tsx`, `app/robots.ts`, and `app/sitemap.ts`. **Verify this matches the
> live deployment domain before shipping** — it controls canonical URLs, the sitemap,
> and Open Graph image resolution.

---

## Tech stack

| Layer       | Choice                                                |
| ----------- | ----------------------------------------------------- |
| Framework   | Next.js 16.2 (App Router, Turbopack)                  |
| UI runtime  | React 19                                              |
| Language    | TypeScript 5.7 (strict)                               |
| Styling     | Tailwind CSS v4 + `tw-animate-css` + CSS custom properties |
| Typography  | Inter + Cormorant Garamond (`next/font/google`)       |
| Email       | Resend                                                |
| Motion      | Hand-written Canvas 2D engine + CSS keyframes         |
| Icons       | lucide-react                                          |

## Documentation

This repository ships a full product handbook in [`docs/`](docs/). Start at the
[documentation index](docs/README.md). It is written for collaborators, future
maintainers, presentation panels, and reviewers.

| #   | Document                                                          | Covers                                                            |
| --- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| 1   | [Brand Foundation](docs/01-brand-foundation.md)                   | Identity, positioning, DNA, persona, philosophy, tone             |
| 2   | [Design System](docs/02-design-system.md)                         | Type, color, spacing, motion, hierarchy, contrast strategy        |
| 3   | [UX Architecture](docs/03-ux-architecture.md)                     | Narrative flow, IA, emotional pacing, "seen vs remembered"        |
| 4   | [Front-End Engineering](docs/04-frontend-engineering.md)          | Stack decisions, canvas engine, hydration, contact hardening      |
| 5   | [Brand Asset System](docs/05-brand-asset-system.md)               | Logo kit, SVG strategy, favicons, descriptor rules                |
| 6   | [Accessibility & Performance](docs/06-accessibility-performance.md)| WCAG, focus, contrast tiers, idle scheduling, motion reduction   |
| 7   | [Product Philosophy](docs/07-product-philosophy.md)               | Why it exists, the problem, why it isn't a template               |
| 8   | [Presentation Defense Notes](docs/08-presentation-defense.md)     | Talking points, likely panel questions, tradeoff defenses         |
| 9   | [Repository & Maintenance Standards](docs/09-repository-maintenance.md) | README, commits, env, asset regeneration, scalability        |

## Project structure

```
app/                 App Router routes, layouts, metadata, API routes
  api/contact/       Hardened contact endpoint (Resend + rate limit + honeypot)
  api/og/            Dynamic Open Graph image (edge runtime)
  work/              Case studies: scan2dine, q-less, xom-bee, druk-art-hub
  about/             About route
components/           Section components + hero canvas engine + UI primitives
hooks/                Shared React hooks
public/branding/      Brand asset system (logo / favicon / social / presentation)
scripts/              SVG → raster asset generation pipeline
docs/                 This product handbook
```

## License & ownership

Personal portfolio and brand system for Sangay Yoesel. Source and brand assets are
not licensed for reuse without permission.

---

🤖 Documentation system generated with [Claude Code](https://claude.com/claude-code)
