import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Chemin relatif adapté à OVH
  server: {
    port: 5173,
    host: true,
    proxy: {
      '/api': {
        target: 'https://api.emailjs.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
});
