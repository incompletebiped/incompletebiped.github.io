import { copyFileSync } from 'node:fs'
import path from 'node:path'

// GitHub Pages has no server-side routing, so a deep link like /writing/some-note
// 404s. Serving the SPA shell as 404.html lets react-router take over client-side.
const distDir = path.resolve(import.meta.dirname, '..', 'dist')
copyFileSync(path.join(distDir, 'index.html'), path.join(distDir, '404.html'))
