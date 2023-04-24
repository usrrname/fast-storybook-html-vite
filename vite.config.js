/** @type {import('vite').UserConfig} */
import { defineConfig } from 'vite';
export default defineConfig({
  build: {
    lib: {
      name: 'fast-storybook-7-html-vite',
      entry: 'src/components/index.ts',
      formats: ['es', 'umd', 'cjs'],
    },
    manifest: true,
    rollupOptions: {
      external: /^@microsoft\/fast-(element|foundation)/,
    },
  },
});
