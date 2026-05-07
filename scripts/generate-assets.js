/**
 * Yoesel Brand Asset Generator
 * Converts SVG source files to PNG at all required sizes.
 * Run with: node scripts/generate-assets.js
 */

const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const ROOT = path.join(__dirname, '..')
const BRANDING = path.join(ROOT, 'public', 'branding')
const FAVICON_DIR = path.join(BRANDING, 'favicon')
const LOGO_DIR = path.join(BRANDING, 'logo')
const APP_DIR = path.join(ROOT, 'app')

async function svgToPng(svgPath, outputPath, width, height) {
  const svg = fs.readFileSync(svgPath)
  await sharp(svg)
    .resize(width, height || width)
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(outputPath)
  console.log(`  ✓ ${path.relative(ROOT, outputPath)} (${width}×${height || width})`)
}

async function buildICO(pngPath32, outputPath) {
  // Build a minimal single-image ICO wrapping the 32x32 PNG
  const pngData = fs.readFileSync(pngPath32)
  const pngSize = pngData.length
  const offset = 6 + 16 // ICONDIR + one ICONDIRENTRY

  const ico = Buffer.alloc(offset + pngSize)

  // ICONDIR header
  ico.writeUInt16LE(0, 0)      // reserved
  ico.writeUInt16LE(1, 2)      // type: icon
  ico.writeUInt16LE(1, 4)      // count: 1 image

  // ICONDIRENTRY
  ico.writeUInt8(32, 6)        // width
  ico.writeUInt8(32, 7)        // height
  ico.writeUInt8(0, 8)         // color count
  ico.writeUInt8(0, 9)         // reserved
  ico.writeUInt16LE(1, 10)     // planes
  ico.writeUInt16LE(32, 12)    // bit count
  ico.writeUInt32LE(pngSize, 14) // image size
  ico.writeUInt32LE(offset, 18)  // image offset

  // PNG data
  pngData.copy(ico, offset)

  fs.writeFileSync(outputPath, ico)
  console.log(`  ✓ ${path.relative(ROOT, outputPath)} (ICO)`)
}

async function main() {
  console.log('\n🎨 Yoesel Brand Asset Generator\n')

  const faviconSvg = path.join(FAVICON_DIR, 'favicon-source.svg')

  // ── Favicon PNGs ───────────────────────────────────────────────────────────
  console.log('Favicon PNGs:')
  const faviconSizes = [16, 32, 64, 180, 192, 512]
  for (const size of faviconSizes) {
    await svgToPng(faviconSvg, path.join(FAVICON_DIR, `icon-${size}x${size}.png`), size)
  }

  // ── favicon.ico (32x32 PNG wrapped in ICO) ────────────────────────────────
  console.log('\nfavicon.ico:')
  const png32 = path.join(FAVICON_DIR, 'icon-32x32.png')
  await buildICO(png32, path.join(FAVICON_DIR, 'favicon.ico'))
  // Also place in app/ so Next.js serves it at /favicon.ico
  await buildICO(png32, path.join(APP_DIR, 'favicon.ico'))
  console.log(`  ✓ app/favicon.ico (ICO)`)

  // ── apple-touch-icon for Next.js (180x180) ────────────────────────────────
  console.log('\nApp icons (Next.js auto-detection):')
  await svgToPng(faviconSvg, path.join(APP_DIR, 'apple-icon.png'), 180)

  // ── Logo PNGs (high-res exports) ──────────────────────────────────────────
  console.log('\nLogo PNGs:')
  const logos = [
    { file: 'yoesel-primary.svg',  w: 640, h: 360 },
    { file: 'yoesel-dark.svg',     w: 640, h: 360 },
    { file: 'yoesel-glow.svg',     w: 640, h: 360 },
    { file: 'yoesel-minimal.svg',  w: 640, h: 360 },
    { file: 'yoesel-white.svg',    w: 640, h: 360 },
    { file: 'yoesel-black.svg',    w: 640, h: 360 },
    { file: 'yoesel-wordmark.svg', w: 520, h: 112 },
    { file: 'yoesel-symbol.svg',   w: 320, h: 320 },
  ]
  for (const { file, w, h } of logos) {
    const src = path.join(LOGO_DIR, file)
    const out = path.join(LOGO_DIR, file.replace('.svg', '.png'))
    await svgToPng(src, out, w, h)
  }

  // ── Profile avatar PNG ────────────────────────────────────────────────────
  console.log('\nSocial PNGs:')
  await svgToPng(
    path.join(BRANDING, 'social', 'profile-avatar.svg'),
    path.join(BRANDING, 'social', 'profile-avatar.png'),
    400
  )

  console.log('\n✅ All assets generated successfully.\n')
}

main().catch((err) => {
  console.error('Generation failed:', err.message)
  process.exit(1)
})
