# 9 · Repository & Maintenance Standards

[← Handbook index](README.md)

---

## 9.1 README expectations

The root [`README.md`](../README.md) is the front door for recruiters, collaborators,
and panels. It must always contain, in this order: the positioning line, quick-start
commands, required environment variables, the tech stack, a link into this handbook,
and the project structure. **It is not a placeholder** — a one-line README on a
product of this quality is itself a defect (it contradicts the craft claim). Keep it
current with the stack.

## 9.2 Commit philosophy

- **Atomic, narrated commits.** One intent per commit, written so the history reads
  as a changelog. Avoid "Initial commit" repeated — squash setup noise.
- **Assets travel with their source.** A brand SVG edit and its regenerated
  `.png`/`.ico` belong in the **same commit**. An uncommitted binary diff means the
  pipeline wasn't run (see §9.4).
- **Docs travel with behavior.** If a decision in this handbook changes, change the
  doc in the same commit as the code.
- **Never present from a dirty tree.** Before any review or submission, the working
  tree should be committed and the branch coherent.

## 9.3 Environment variables

| Variable             | Scope     | Notes                                                            |
| -------------------- | --------- | ---------------------------------------------------------------- |
| `RESEND_API_KEY`     | All       | Without it, contact email fails *gracefully* (mailto fallback).  |
| `CONTACT_FROM_EMAIL` | Prod      | Verified domain sender. Dev falls back to Resend sandbox.        |
| `CONTACT_TO_EMAIL`   | Prod      | Destination inbox. Defaults to owner address.                    |

**Domain consistency check (do before every deploy):** `https://yoesel.com` is
hardcoded in `app/layout.tsx` (`metadataBase`), `app/robots.ts`, and
`app/sitemap.ts`. If the live domain differs, canonical URLs, the sitemap, and OG
image resolution all break. Treat this as a release checklist item.

## 9.4 Asset regeneration workflow

```bash
# 1. Edit the authored SVG in public/branding/** (source of truth)
# 2. Regenerate every raster derivative:
node scripts/generate-assets.js     # favicons, ICO, logo PNGs, avatar
node scripts/generate-favicon.js    # app/icon.png (primary mark)
# 3. Commit the SVG AND the regenerated binaries together
```

Rules:

- **Never hand-edit a `.png` or `.ico`.** They are build outputs.
- **The descriptor never changes** (`DIGITAL DESIGNER FOR CREATIVE ARTISTS`); only
  per-asset type sizing may be tuned for footprint. See [§5](05-brand-asset-system.md).
- After regeneration, grep the branding tree to confirm no retired descriptor
  (`DESIGN & MUSIC`) has reappeared.

## 9.5 Future scalability notes

The architecture is intentionally small. Grow it only when a real need appears, not
preemptively:

| If you need…                         | Do this                                                        |
| ------------------------------------ | -------------------------------------------------------------- |
| Many more case studies               | Move `/work/*` to content collections / MDX, keep the IA shallow |
| Real spam pressure on contact        | Promote the in-memory limiter to a shared store (Redis/Upstash) — only then |
| Multi-language                       | Introduce i18n routing; keep the canonical facts table per locale |
| A CMS for the artist-clients         | Add a data layer behind the existing section components, unchanged UI |
| Design-token reuse across projects   | Extract `globals.css` tokens into a small published package    |

The guiding rule matches the brand: **add only what the argument needs.** Premature
abstraction is the same mistake as a template — complexity that isn't earned.

## 9.6 Maintenance principles (summary)

1. Source of truth is code + authored SVG + this handbook — keep them in sync.
2. Canonical facts (positioning, descriptor, thesis, colors) live in the
   [handbook index](README.md); change them everywhere or nowhere.
3. Every dependency, every variant, every abstraction must justify its existence.
4. Degrade gracefully; never dead-end; never present from a dirty tree.

[← Back to handbook index](README.md)
