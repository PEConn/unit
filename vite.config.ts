import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { VitePWA } from 'vite-plugin-pwa'

const manifest = {
  short_name: "Units",
  name: "Unit by Unit",
  icons: [
    {
      src: "https://cdn.glitch.global/5ecd9d32-71f4-420b-ad21-eeaafcb59156/android-chrome-192x192.png?v=1644858005976",
      type: "image/png",
      sizes: "192x192"
    },
    {
      src: "https://cdn.glitch.global/5ecd9d32-71f4-420b-ad21-eeaafcb59156/android-chrome-512x512.png?v=1644858009644",
      type: "image/png",
      sizes: "512x512"
    }
  ],
  start_url: "/",
  display: "standalone",
  theme_color: "#FFFFA0"
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: manifest
      // workbox: { sourcemap: true },
      // strategies: 'injectManifest',
    })
  ]
})
