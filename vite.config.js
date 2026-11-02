import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' lets the build work on GitHub Pages (any repo name) and Vercel.
export default defineConfig({ plugins: [react()], base: './' })
