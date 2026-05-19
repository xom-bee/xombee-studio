# YOESEL — Product Handbook

This is the master documentation system for the YOESEL portfolio platform. It exists
to let anyone — the owner, a collaborator, a presentation panel, a future maintainer,
or a reviewer — understand the **full identity, philosophy, architecture, and
engineering direction** of the project without reading the source first.

It is deliberately written as a *creative technology product handbook*, not a wiki.
Every section connects a design or engineering decision back to the central thesis:

> **You are heard. But are you remembered?**
> A portfolio's job is not to be _seen_. It is to be _remembered_.

## How to read this

| If you are a…           | Start with…                                                          |
| ----------------------- | -------------------------------------------------------------------- |
| Presentation panelist   | [§7 Product Philosophy](07-product-philosophy.md) → [§8 Defense Notes](08-presentation-defense.md) |
| Recruiter / reviewer    | [§1 Brand Foundation](01-brand-foundation.md) → [§4 Engineering](04-frontend-engineering.md) |
| New collaborator        | [§3 UX Architecture](03-ux-architecture.md) → [§2 Design System](02-design-system.md) |
| Future maintainer       | [§9 Repository Standards](09-repository-maintenance.md) → [§4 Engineering](04-frontend-engineering.md) |
| Brand / design partner  | [§1 Brand Foundation](01-brand-foundation.md) → [§5 Asset System](05-brand-asset-system.md) |

## Sections

1. [Brand Foundation](01-brand-foundation.md)
2. [Design System](02-design-system.md)
3. [UX Architecture](03-ux-architecture.md)
4. [Front-End Engineering](04-frontend-engineering.md)
5. [Brand Asset System](05-brand-asset-system.md)
6. [Accessibility & Performance](06-accessibility-performance.md)
7. [Product Philosophy](07-product-philosophy.md)
8. [Presentation Defense Notes](08-presentation-defense.md)
9. [Repository & Maintenance Standards](09-repository-maintenance.md)

## Canonical facts (single source of truth)

These appear throughout the product. They must stay identical everywhere.

| Fact            | Value                                                                              |
| --------------- | ---------------------------------------------------------------------------------- |
| Positioning     | _I design professional personal websites that help creative artists express their identity online._ |
| Brand descriptor| `DIGITAL DESIGNER FOR CREATIVE ARTISTS` (used in metadata, OG, all brand assets)   |
| Thesis          | _You are heard. But are you remembered?_                                            |
| Brand amber     | `#E6A15A`                                                                           |
| Canvas / base   | `#0B0B0F`                                                                           |
| Owner           | Sangay Yoesel — digital designer for creative artists (Bhutan)                      |

If you change any of these, update them everywhere and re-run the asset pipeline
(see [§5](05-brand-asset-system.md) and [§9](09-repository-maintenance.md)).
