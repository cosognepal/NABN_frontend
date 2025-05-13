import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    cssCodeSplit: true, // Ensure CSS is extracted into a separate file
  },
  server: {
    port: 5173,
    strictPort: true,
    host: 'localhost',
    hmr: {
      protocol: 'ws',
      host: 'localhost',
    },
  },
});
