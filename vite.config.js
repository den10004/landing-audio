import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: './',
  build: {
    sourcemap: false,
    assetsInlineLimit: 4096,
  },
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icons/*.png'],
      manifest: {
        name: 'Landing App',
        short_name: 'Landing',
        start_url: './index.html',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#333333',
        icons: [
          {
            src: 'icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          }
        ],
      }
    })
  ]
});
