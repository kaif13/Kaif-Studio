import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function inlineCssPlugin() {
  return {
    name: 'inline-css',
    apply: 'build',
    enforce: 'post',
    generateBundle(_, bundle) {
      const htmlAsset = Object.values(bundle).find(
        (asset) => asset.type === 'asset' && asset.fileName === 'index.html',
      )

      if (!htmlAsset) return

      let html = String(htmlAsset.source)

      for (const [fileName, asset] of Object.entries(bundle)) {
        if (asset.type !== 'asset' || !fileName.endsWith('.css')) continue

        const linkTag = `<link rel="stylesheet" crossorigin href="/${fileName}">`

        if (!html.includes(linkTag)) continue

        html = html.replace(linkTag, `<style>${asset.source}</style>`)
        delete bundle[fileName]
      }

      htmlAsset.source = html
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), inlineCssPlugin()],
})
