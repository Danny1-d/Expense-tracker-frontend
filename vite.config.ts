import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    port: 3002,
    host: '0.0.0.0',
    allowedHosts: [
      'expense-tracker-frontend-jfk3.onrender.com',
      'localhost',
    ]
    // proxy: {
    //   '/auth': {
    //     target: 'http://localhost:5000',
    //     changeOrigin: true,
    //     secure: false,
    //     // rewrite: (path) => path.replace(/^\/auth/, ''),
    //   },
    // },
  }
})
