// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  base: 'https://julietadelgado.github.io/QuinStreet--Programming-Assessment---Frontend-Developer/',
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      }
    }
  }
})