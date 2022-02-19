import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { VitePWA } from 'vite-plugin-pwa';

const manifest = {
  "short_name": "Drink Tracker",
  "name": "Drink Tracker",
  "icons": [
    {
      "src": "https://cdn.glitch.global/5ecd9d32-71f4-420b-ad21-eeaafcb59156/android-chrome-192x192.png?v=1644858005976",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "https://cdn.glitch.global/5ecd9d32-71f4-420b-ad21-eeaafcb59156/android-chrome-512x512.png?v=1644858009644",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#FFFFA0"
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VitePWA({
      manifest: manifest
    })
  ],
  
  build: {
    outDir: "build",
    assetInlineLimit: 0
  },
  server: {
    strictPort: true,
    hmr: {
      port: 443 // Run the websocket server on the SSL port
    }
  }
});
