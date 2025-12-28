import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          // React core
          'react-vendor': ['react', 'react-dom'],
          // Animation & drag libraries
          'ui-vendor': ['framer-motion', 'react-draggable', 'react-dnd', 'react-dnd-html5-backend'],
          // Utilities
          'utils-vendor': ['axios', 'dayjs', 'howler'],
          // Charts (large library)
          'charts': ['recharts'],
          // Webamp (large library)
          'webamp': ['webamp'],
          // Icons
          'icons': ['react-icons'],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
})
