import { defineConfig } from 'astro/config';
import { fileURLToPath, URL } from 'node:url';


export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      }
    }
  }
});