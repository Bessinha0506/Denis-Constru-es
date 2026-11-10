import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Caminho do site no GitHub Pages: https://bessinha0506.github.io/Denis-Constru-es/
  base: '/Denis-Constru-es/',
  server: { port: 5173 },
});
