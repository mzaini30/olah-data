import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {VitePWA} from 'vite-plugin-pwa'

const namaAplikasi = 'Vite App'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VitePWA({
    manifest: {
      name: namaAplikasi,
      short_name: namaAplikasi,
      icons: [{
        src: '/logo.png',
        sizes: '200x200',
        type: 'image/png'
      }]
    },
    workbox: {
      globPatterns: ['**/*']
    }
  })]
})
