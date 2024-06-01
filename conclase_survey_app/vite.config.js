import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    cors: {
      origin: 'http://localhost:4007',  // Adjust the origin if needed
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true
    },
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: 5173,
    }
  },
})
