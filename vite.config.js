import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/apad-hw03-react/', // IMPORTANT for GitHub Pages project URL
})
