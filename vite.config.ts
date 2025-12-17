import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // Polyfill process.env for the existing code structure
    'process.env': process.env
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});