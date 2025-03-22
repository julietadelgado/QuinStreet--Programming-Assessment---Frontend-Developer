// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/QuinStreet--Programming-Assessment---Frontend-Developer/',
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      }
    }
  }
})