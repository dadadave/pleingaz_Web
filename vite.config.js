import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Dev server + production build for the PleinGaz React app.
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
  },
});
