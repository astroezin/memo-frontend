import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Output directory for the build
    rollupOptions: {
      input: {
        main: './index.html',  // Ensure this points to your index.html file
      },
    },
  },
});