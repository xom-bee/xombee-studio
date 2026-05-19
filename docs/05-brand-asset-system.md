# 5 · Brand Asset System

[← Handbook index](README.md)

---

## 5.1 Logo structure

The kit is a complete variant set built from one geometry (flat-top hexagon + `SY`
serif monogram + optional ghost ring). Variants exist so the mark is correct in every
context, not so it can be redesigned per use:

| Variant            | Context                                              |
| ------------------ | ---------------------------------------------------- |
| `yoesel-primary`   | Default — amber on dark                               |
| `yoesel-dark`      | Dark surfaces, white wordmark                         |
| `yoesel-glow`      | Hero / cinematic placements (heavy bloom)             |
| `yoesel-minimal`   | Flat, no glow, no ring — dense or print contexts      |
| `yoesel-white`     | Monochrome white (single-color light-on-dark)        |
| `yoesel-black`     | Monochrome black (single-color on white)             |
| `yoesel-wordmark`  | Wordmark only — tight horizontal lockups             |
| `yoesel-symbol`    | Mark only — avatars, favicons, app icons             |

## 5.2 SVG strategy

**SVG is the source of truth; raster is generated.** Every lockup is authored as a
hand-written, hand-tuned SVG (no exported-from-design-tool cruft). This is
deliberate:

- SVGs are version-controlled, diff-able, and reviewable in a PR.
- The geometry is parametric (hexagon points, scale factors are commented), so a
  variant can be reasoned about, not just looked at.
- Raster (`.png`, `.ico`) is **derived** via `scripts/generate-assets.js` — never
  hand-edited. Editing a PNG directly is a process error.

## 5.3 Favicon system

`scripts/generate-favicon.js` builds the primary 512×512 mark; `generate-assets.js`
produces the full favicon set (16/32/64/180/192/512), a single-image `.ico`, and the
Next.js auto-detected `app/favicon.ico` + `app/apple-icon.png`. The favicon is
**mark-only and descriptor-free** — at 16px a tagline is noise, so the icon carries
only the hexagon + `SY`.

## 5.4 OG / social assets

Two layers, intentionally separate:

- **Live previews** are served by the **dynamic edge route `/api/og`** — this is what
  social platforms actually fetch. Cached `max-age=86400, swr=604800`.
- **Static collateral** (`public/branding/social/og-image.svg`, `twitter-card.svg`,
  `banner.svg`, `profile-avatar`) is downloadable brand handoff material and a
  fallback. It is *not* duplication — it is the design-file counterpart of the
  generated route. Both must carry the identical descriptor.

## 5.5 Descriptor rules

**The descriptor is canonical and singular:**

```
DIGITAL DESIGNER FOR CREATIVE ARTISTS
```

Rules:

1. It appears identically in metadata (`app/layout.tsx`), the dynamic OG route, and
   **every** static brand asset. It matches the `<title>` token.
2. It is always **secondary** to the wordmark: smaller, lighter, wide-tracked.
3. Per-asset `font-size` / `letter-spacing` may be tuned so the line keeps a
   consistent *visual footprint* across canvas sizes — but the **string never
   changes**.
4. The old `DESIGN & MUSIC` descriptor is retired. It must not reappear. (Legitimate
   *content* references to "music" in case studies — e.g. a music-artist client — are
   not the descriptor and are correct.)

## 5.6 Asset folder structure

```
public/branding/
  favicon/        favicon-source.svg + generated icons + .ico
  logo/           8 lockup variants (.svg authored, .png generated)
  social/         og-image / twitter-card / banner / profile-avatar
  presentation/   poster / showcase / wallpaper (pitch surfaces)
scripts/
  generate-assets.js    SVG → raster pipeline (run after ANY svg edit)
  generate-favicon.js   app/icon.png (primary mark)
```

**Workflow contract:** edit SVG → run `node scripts/generate-assets.js` → commit SVG
**and** regenerated raster together. An uncommitted binary diff means the pipeline
wasn't run. See [§9](09-repository-maintenance.md).

→ Continue to [§6 Accessibility & Performance](06-accessibility-performance.md)
