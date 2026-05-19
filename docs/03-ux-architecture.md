# 3 · UX Architecture

[← Handbook index](README.md)

---

## 3.1 Narrative flow

The home page is a single composed sequence, not a collection of sections. Order is
the argument (`app/page.tsx`):

```
Intro (first visit only) → Hero → Portfolio → About preview → Long-listen → Contact → Footer
```

1. **Intro** — a cinematic loader, shown once per session, that establishes tone
   before any content. It earns the silence the rest of the page depends on.
2. **Hero** — states the thesis: _You are heard. But are you remembered?_ then the
   positioning, then a single action.
3. **Portfolio** — proof. Work shown with cinematic framing so it reads as
   considered, not catalogued.
4. **About preview** — the person behind the craft, in brief, before asking for trust.
5. **Long-listen** — a slower, atmospheric beat that lets the visitor settle.
6. **Contact** — one calm invitation to connect.
7. **Footer** — closes the loop; never a dead end.

## 3.2 Information architecture

The site is intentionally **shallow and linear** at the top level: one narrative page,
with case studies (`/work/*`) and an `/about` route as depth-on-demand. There is no
mega-menu, no nested taxonomy. The IA mirrors the brand: _one voice, one path,
optional depth._ A visitor never has to decide "where do I go" — the page decides for
them, in the order the argument needs.

## 3.3 Emotional pacing

Pacing is engineered, not incidental:

- **Deceleration on entry.** The intro and the staggered hero reveals slow the
  visitor down before any ask. This is the opposite of a conversion-optimized landing
  page, on purpose.
- **Tension then release.** The thesis creates a question ("am I remembered?"); the
  portfolio answers it; the long-listen section releases the tension before contact.
- **The ask comes last and quiet.** By the time the contact section appears, the
  argument is already made; the CTA doesn't need to push.

## 3.4 The "Seen vs Remembered" thesis

This is the spine of the entire product.

> **You are heard. But are you remembered?**

- _Heard_ = momentary attention. Cheap, abundant, forgotten.
- _Remembered_ = durable identity. Scarce, valuable, decisive.

Every UX decision is justified by whether it serves *memory* over *attention*. This is
why the site invests in atmosphere and restraint instead of density and urgency: a
page optimized for attention is forgotten; a page optimized for memory is the product
being sold. The medium **is** the argument — the site proves the thesis by being an
example of it.

## 3.5 Cinematic UX reasoning

"Cinematic" here is a functional choice, not an aesthetic indulgence:

- **A frame implies value.** Darkness, vignette, and grain frame the work the way a
  gallery wall or a film does — the framing tells the visitor "this deserves
  attention" before they evaluate it.
- **Time is a design material.** Film controls when you see things. The loader and
  staggered reveals apply the same control so the thesis lands in sequence.
- **Atmosphere is differentiation.** A template can replicate a layout in minutes; it
  cannot replicate a *felt* atmosphere. The cinematic layer is the moat (see
  [§7](07-product-philosophy.md)).

## 3.6 Zero Dead Ends philosophy

No screen leaves the visitor without a forward path. Every terminal moment resolves:

- The hero resolves into the portfolio (the CTA scrolls, never navigates away
  abruptly).
- Case studies resolve back via persistent navigation, never trapping the visitor in
  a leaf page.
- The footer is a closing, not a wall — it re-offers contact and navigation.
- Error states (contact failure) **never dead-end**: the failure message includes a
  direct `mailto:` fallback so the user's intent always has somewhere to go.

A dead end breaks memory. The product treats "where do I go from here?" as a UX bug.

→ Continue to [§4 Front-End Engineering](04-frontend-engineering.md)
