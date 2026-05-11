/**
 * Generates app/icon.png — the primary Yoesel favicon at 512×512.
 * Run: node scripts/generate-favicon.js
 */

const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const ROOT = path.join(__dirname, '..')
const APP_DIR = path.join(ROOT, 'app')

// Exact brand amber — matches every component in the site
const AMBER = '#E6A15A'
const BG = '#0B0B0F'

// 512×512 SVG — optimised for clarity at every scale
// Hex centre (256,256), v_r=190, h_r=178 (brand ratio 30/32)
// Stroke 5px — bold enough to read at 16px tab, clean at 512px
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">

  <!-- Background -->
  <rect width="512" height="512" fill="${BG}"/>

  <!-- Subtle centred glow — a single radial, very restrained -->
  <radialGradient id="g" cx="50%" cy="50%" r="44%">
    <stop offset="0%"   stop-color="${AMBER}" stop-opacity="0.14"/>
    <stop offset="100%" stop-color="${AMBER}" stop-opacity="0"/>
  </radialGradient>
  <rect width="512" height="512" fill="url(#g)"/>

  <!-- Hexagon — flat-top orientation, brand proportions -->
  <!-- centre (256,256) · v_r 190 · h_r 178                 -->
  <polygon
    points="256,66 434,161 434,351 256,446 78,351 78,161"
    stroke="${AMBER}"
    stroke-width="5"
    stroke-linejoin="round"
    fill="${AMBER}"
    fill-opacity="0.07"
  />

  <!-- SY monogram — large, centred, readable at 16 px -->
  <text
    x="256" y="292"
    text-anchor="middle"
    fill="${AMBER}"
    font-size="108"
    font-weight="700"
    font-family="Georgia,'Times New Roman',serif"
    letter-spacing="8"
  >SY</text>

</svg>`

async function main() {
  const outPath = path.join(APP_DIR, 'icon.png')

  await sharp(Buffer.from(svg))
    .resize(512, 512)
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(outPath)

  const stat = fs.statSync(outPath)
  console.log(`\n✓ app/icon.png generated`)
  console.log(`  Dimensions : 512 × 512 px`)
  console.log(`  File size  : ${(stat.size / 1024).toFixed(1)} KB`)
  console.log(`  Background : ${BG}`)
  console.log(`  Amber      : ${AMBER}`)
  console.log(`  Format     : PNG (lossless)\n`)
}

main().catch(err => {
  console.error('Failed:', err.message)
  process.exit(1)
})
