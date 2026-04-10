import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/db-hwmap-src-map-client/',
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
})
