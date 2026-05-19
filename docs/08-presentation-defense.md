# 8 · Presentation Defense Notes

[← Handbook index](README.md)

This section is a panel-defense brief. It assumes a critical reviewer.

---

## 8.1 Strongest talking points

Lead with these:

1. **The product is the proof.** "I sell memorable identity for artists — and the site
   itself is engineered to be remembered, not just seen. The medium is the argument."
2. **Restraint is a decision.** One accent color, one mark, one narrative path — every
   omission is intentional and defensible. Nothing is unfinished; things are *chosen*.
3. **Engineering maturity is visible.** No animation library (hand-written canvas
   engine), hydration-safe state machine, tiered accessibility tokens, hardened API.
   The craft claim is backed by the code.
4. **Accessibility inside a dark cinematic identity.** Most "premium dark" sites fail
   contrast. This one solved it with a *tiered token system* instead of surrendering
   the aesthetic — a senior tradeoff.
5. **Graceful degradation everywhere.** Reduced motion, no JS storage, API failure —
   each has a designed path, not a broken one.

## 8.2 Likely panel questions (with answers)

**"Isn't a dark site with low-opacity text an accessibility problem?"**
Informational text meets WCAG AA via the `--text-secondary` / `--text-meta` tiers
against `#0B0B0F`. The only sub-AA element is the ambient "SCROLL" hint — it is
`aria-hidden`, conveys no information, and is an intentional decorative exception. We
raised the floor for information without flattening the hierarchy.

**"Why a custom canvas engine instead of a library?"**
A library would add hundreds of KB and still not produce *this* motion. The cinematic
layer is the brand's differentiator, so it is owned, tunable, and dependency-free.
Bundle and control both win.

**"Why does the intro only show once? Isn't that inconsistent?"**
Deliberate. A cinematic intro on every navigation becomes friction. It plays once per
session (sessionStorage), is skipped entirely for reduced-motion users, and is
hydration-safe (SSR and first client render both do nothing until the decision is
made client-side). Consistency for a returning visitor *is* the fast path.

**"In-memory rate limiting resets on cold start — isn't that weak?"**
It's proportionate. This is a low-traffic contact form; an in-process sliding window
blunts scripted abuse without a Redis dependency the brand would have to operate. The
tradeoff is documented in the route. Choosing the smaller correct tool is the mature
answer, not the gap.

**"What stops spam?"**
Layered: a honeypot field (bot fills it → fake 200, silently dropped), a client
cooldown, a server sliding-window IP limit with a minimum gap, input validation, and
HTML escaping. No single point, no CAPTCHA tax on real users.

**"Why so little content / why one page?"**
Memory, not density, is the product (the thesis). Depth exists on demand
(`/work/*`, `/about`). The shallow narrative IA is the strategy, not a missing
feature.

**"Why target only creative artists?"**
A narrow audience makes every decision decidable and makes the work and the buyer
reinforce each other. Broad audiences produce generic products; this is the opposite
claim.

## 8.3 Technical tradeoff explanations

| Tradeoff                          | Defense                                                            |
| --------------------------------- | ------------------------------------------------------------------ |
| Custom engine vs. library         | Control + bundle size + differentiation > convenience              |
| In-memory limiter vs. Redis       | Proportionate to traffic; no infra to operate; documented limits   |
| Once-per-session intro            | Friction reduction; reduced-motion + hydration safety preserved    |
| Tiered contrast vs. full brighten | Preserves hierarchy/atmosphere while meeting AA for information     |
| Static SVG source vs. templating  | Version-controlled, diff-able, reviewable; no premature abstraction |

## 8.4 Intentional design decisions (not accidents)

State these as choices if questioned:

- The entrance is slow **on purpose** (deceleration before any ask).
- The palette is tiny **on purpose** (amber means something because it's rare).
- The ask comes last and quiet **on purpose** (the argument is already made).
- The "SCROLL" hint is faint **on purpose** (ambient, hidden from AT, non-essential).
- The IA is shallow **on purpose** (memory over density).

## 8.5 Defensible UX reasoning (one-liners)

- "Attention is cheap; memory is the product."
- "Every dead end is a UX bug — even the error state has a `mailto:` exit."
- "Motion is breath, not entertainment — and it always has a still equivalent."
- "The site doesn't describe the capability; it *is* the capability."

## 8.6 What NOT to do before the panel

- Do not redesign the mark or palette — the system is mature; changes read as nerves.
- Do not 'fix' the intro state machine under time pressure — it is correct and fragile.
- Do not blanket-brighten text — it flattens the hierarchy you can defend.
- **Do** commit the working tree and regenerated assets, write the README (done),
  and verify the `yoesel.com` domain matches the live deployment.

→ Continue to [§9 Repository & Maintenance Standards](09-repository-maintenance.md)
