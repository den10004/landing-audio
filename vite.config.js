import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    sourcemap: false,
    assetsInlineLimit: 4096,
  },
});
