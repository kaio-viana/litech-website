import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import PurgeIcons from 'vite-plugin-purge-icons';

export default defineConfig({
  plugins: [
    react(),
    PurgeIcons()
  ],
  resolve: {
    alias: {
      'sun.svg': './public/sun.svg',
      'moon-stars.svg': '/public/moon-stars.svg',
    }
  }
})
