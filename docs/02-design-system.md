# 2 · Design System

[← Handbook index](README.md)

---

## 2.1 Typography system

Two typefaces, loaded via `next/font/google` with `display: swap` and exposed as CSS
variables (`app/layout.tsx`):

| Role            | Family                      | Variable           | Used for                                  |
| --------------- | --------------------------- | ------------------ | ----------------------------------------- |
| **Identity**    | Cormorant Garamond (serif)  | `--font-cormorant` | Brand name, emotional headlines, authored moments |
| **System**      | Inter (sans)                | `--font-inter`     | UI, body, navigation, microcopy, data     |

Principles:

- **Serif = who, Sans = what.** Serif is reserved for identity and feeling; sans
  carries everything functional. This split is consistent across the site and the
  brand assets (the `YOESEL` wordmark is serif; the descriptor is sans).
- **Fluid sizing.** Headlines use `clamp()` (e.g. the hero scales
  `clamp(32px, 11vw, 92px)`) so type is composed for the viewport, not broken into
  arbitrary breakpoints.
- **Tight tracking on large type, open tracking on small caps.** Large display text
  uses negative letter-spacing for density; small descriptors use wide positive
  tracking for an engraved, considered feel.

## 2.2 Color system

A deliberately tiny palette. Scarcity is the point.

| Token            | Value                       | Meaning                                          |
| ---------------- | --------------------------- | ------------------------------------------------ |
| Canvas / base    | `#0B0B0F`                   | The material everything sits in                  |
| Brand amber      | `#E6A15A`                   | The single light source — brand, focus, action   |
| Pure white       | `#FFFFFF` (opacity-tiered)  | Text and structure, never at full strength as body |

There is no secondary brand color. Amber earns its meaning by being the **only**
chromatic element; introducing a second accent would dilute it.

## 2.3 Spacing philosophy

Space is treated as composition, not gap. The system favors **large, confident
negative space** over dense layouts — emptiness signals that each element was chosen.
Vertical rhythm uses fluid `clamp()` margins so breathing room scales with the
viewport rather than collapsing on mobile. The rule: _if removing an element doesn't
hurt the argument, the space it leaves is better than the element._

## 2.4 Motion principles

Motion is **breath, not performance**. Rules:

1. **Eased, never linear; slow, never snappy.** Reveals are ~700ms–1.4s with
   `ease-out`. Nothing bounces.
2. **Motion paces attention.** Hero lines fade in sequentially (`0.15s`, `0.45s`,
   `0.75s`, `1.05s` delays) so the eye is led through the thesis in order.
3. **Ambient motion is sub-perceptual.** The canvas, grain, and glow move slowly
   enough to feel alive but never to distract.
4. **Motion is a privilege, not a default.** Every motion system checks
   `prefers-reduced-motion` and has a static equivalent (see [§6](06-accessibility-performance.md)).

## 2.5 Interaction philosophy

- **Direct manipulation over chrome.** The hero glow follows the cursor by writing
  styles directly to the DOM — zero React re-renders — so interaction feels physical,
  not stateful.
- **Stable interaction hooks.** Interactive targets that other systems depend on (the
  hero CTA) carry a stable `id` (`#hero-cta`) rather than being matched by label
  text, so copy can change without breaking behavior.
- **No interaction without feedback.** Buttons reflect `sending` / `cooldown` state;
  errors are announced; focus is always visible.

## 2.6 Visual hierarchy

Hierarchy is built with **three levers, in this order**: position → contrast → motion.
Color is *not* a primary hierarchy lever (the palette is too small). The most
important element is the one that is most centered, most contrasted, and revealed
last. Amber is used only at the apex of a hierarchy (brand, primary action), never to
rank body content.

## 2.7 Accessibility contrast strategy

The site is intentionally dark and cinematic, which is in tension with WCAG contrast.
The resolution is a **tiered token system** in `app/globals.css` rather than blanket
brightening (which would flatten hierarchy and destroy the atmosphere):

| Token              | Value                       | Used for                                  |
| ------------------ | --------------------------- | ----------------------------------------- |
| `--text-secondary` | `rgba(255,255,255,0.66)`    | Supporting copy, nav links, footer text   |
| `--text-meta`      | `rgba(255,255,255,0.62)`    | Meta labels, captions, indices, role tags |

The strategy: **raise the floor, preserve the ceiling.** Functional text that conveys
information meets AA against `#0B0B0F`; purely decorative, `aria-hidden` elements
(e.g. the ambient "SCROLL" hint) are allowed to sit below AA because they carry no
information and are hidden from assistive tech. This is a defensible, intentional line
— not an oversight. See [§6](06-accessibility-performance.md) and
[§8](08-presentation-defense.md).

→ Continue to [§3 UX Architecture](03-ux-architecture.md)
