import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'src',  // Ensures Vite looks for `index.html` and other files inside `src`
  plugins: [react()],
  build: {
    outDir: '../dist',  // Output build
