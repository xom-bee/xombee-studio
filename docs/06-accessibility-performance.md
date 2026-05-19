# 6 · Accessibility & Performance

[← Handbook index](README.md)

---

## 6.1 WCAG considerations

The product targets **WCAG 2.1 AA for all informational content** while protecting a
deliberately dark, cinematic identity. The governing principle is **tiered, not
blanket**: text that conveys information meets contrast; purely decorative,
assistive-tech-hidden elements may sit below it because they carry no information.

Conformance touchpoints:

- **1.4.3 Contrast (Minimum)** — informational text meets AA via the contrast token
  tiers (§6.4). Decorative `aria-hidden` flourishes are exempt by design.
- **2.1.1 Keyboard** — all interactive elements are reachable and operable by
  keyboard.
- **2.1.2 No Keyboard Trap** — the mobile nav traps focus *while open by design* and
  releases it on close (a managed trap, the allowed case).
- **2.4.1 Bypass Blocks** — skip-to-content link is the first focusable element.
- **2.4.3 Focus Order** — focus order follows the narrative order.
- **4.1.3 Status Messages** — contact errors use `role="alert"` / `aria-live`.

## 6.2 Keyboard navigation

- Skip link → main content (visible on focus).
- Logical tab order matching visual/narrative order.
- Mobile menu fully operable by keyboard: open, trap, `Escape` to close, return.
- No interactive element depends on hover or pointer to be usable.

## 6.3 Focus management

The mobile navigation is the focus-management showcase:

- On open: focus moves into the dialog; the rest of the page is made `inert`.
- While open: focus is trapped (cannot tab out into hidden content).
- `Escape`: closes and **restores focus to the trigger** that opened it.
- Semantics: `role="dialog"`, `aria-modal`, scroll lock.

Focus is never lost, never sent to `<body>`, never left behind hidden content.

## 6.4 Contrast tier system

Defined once in `app/globals.css`, consumed everywhere:

| Token              | Value                    | Tier            | Used for                              |
| ------------------ | ------------------------ | --------------- | ------------------------------------- |
| `--text-secondary` | `rgba(255,255,255,0.66)` | Supporting      | Nav links, footer, supporting copy    |
| `--text-meta`      | `rgba(255,255,255,0.62)` | Meta            | Captions, indices, role/label tags    |
| (decorative)       | `< 0.40` opacity         | Ambient         | `aria-hidden` flourishes only         |

Rationale: a single global brightening would have destroyed the visual hierarchy that
the design depends on. Tiering **raises the floor for information while preserving the
ceiling for atmosphere** — the defensible middle path. The one knowingly sub-AA
element (the ambient "SCROLL" hint) is `aria-hidden`, conveys nothing, and is
documented as an intentional decorative exception (see [§8](08-presentation-defense.md)).

## 6.5 Adaptive workloads

The cinematic engine scales its own cost to context rather than running flat-out:

- Animation work is gated by `IntersectionObserver` / document visibility — off-screen
  or backgrounded means no frames burned.
- Static-once techniques (film grain rendered a single time, then tiled) remove
  recurring cost entirely.
- Pointer-driven effects bypass React and write to the DOM directly, so interaction
  cost is O(1) per event with no reconciliation.

## 6.6 Idle scheduling

Non-critical, atmosphere-only work is deferred so it never competes with first paint,
hydration, or input responsiveness. The intro decision itself is deferred one frame
into `useEffect` (post-hydration) precisely so it costs nothing on the critical
render path — the page commits first, atmosphere resolves after.

## 6.7 Motion-reduction support

`prefers-reduced-motion: reduce` is honored as a complete alternate experience:

- The first-visit cinematic intro is **skipped entirely** (and marked seen) — a
  forced animated delay is the exact thing the preference prohibits.
- The hero mouse-glow listener is not attached.
- Ambient canvas motion is suppressed/avoided.

The reduced-motion path is designed, not degraded — a reduced-motion visitor still
gets a coherent, premium experience, just a still one.

→ Continue to [§7 Product Philosophy](07-product-philosophy.md)
