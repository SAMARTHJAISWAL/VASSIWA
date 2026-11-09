import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      // react-datepicker 7's "browser" field points at a minified UMD bundle, which Vite
      // prefers and whose default export then arrives as an object instead of the component.
      // Point the bare import at its ES module build (the CSS subpath import is unaffected).
      {
        find: /^react-datepicker$/,
        replacement: fileURLToPath(
          new URL('./node_modules/react-datepicker/dist/es/index.js', import.meta.url)
        ),
      },
    ],
  },
  server: {
    // Same port Create React App used, so existing bookmarks and docs still work.
    port: 3000,
  },
  preview: {
    port: 3000,
  },
  build: {
    // Keep CRA's output folder so deploy scripts that expect frontend/build keep working.
    outDir: 'build',
  },
  test: {
    environment: 'jsdom',
    globals: true,
  },
});
