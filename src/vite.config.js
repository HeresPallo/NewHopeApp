import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration
export default defineConfig({
  root: 'src',  // Ensures Vite uses the `src` folder as the root
  plugins: [react()],
  build: {
    outDir: 'dist',  // Ensure the output is within the `src` folder
    emptyOutDir: true,  // Clears the previous build
  },
});

