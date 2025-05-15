import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // ✅ This fixes blank page issue on file://
  plugins: [react()],
})
