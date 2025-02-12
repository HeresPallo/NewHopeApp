import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration
export default defineConfig({
  root: 'src',  // Ensures that Vite looks for `index.html` and other files inside `src`
  plugins: [react()],
  build: {
    outDir: '../dist',  // This ensures the build is output to the root directory
  },
});
