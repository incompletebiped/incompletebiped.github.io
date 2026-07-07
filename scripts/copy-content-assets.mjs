import { cpSync, existsSync, mkdirSync } from 'node:fs'
import path from 'node:path'

// Images land in content/images via the plugin's "Image Path" setting, which
// must be configured to exactly "content/images" to match this script. The
// plugin rewrites note images to absolute URLs like /content/images/foo.png,
// so we mirror the same relative path into dist/ rather than using Vite's
// public/ dir (whose folder name gets stripped from the served URL).
const repoRoot = path.resolve(import.meta.dirname, '..')
const sourceDir = path.join(repoRoot, 'content/images')
const destDir = path.join(repoRoot, 'dist/content/images')

if (existsSync(sourceDir)) {
  mkdirSync(destDir, { recursive: true })
  cpSync(sourceDir, destDir, { recursive: true, filter: (src) => !src.endsWith('.gitkeep') })
}
