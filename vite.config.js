import { defineConfig } from 'vite';
import { resolve } from 'path';
import { nodeResolve } from '@rollup/plugin-node-resolve';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/components/kr0nwave-app.js',
      formats: ['es'],
    },
		manifest: true,
    rollupOptions: {
      external: /^lit/,
			input: {
				main: resolve(__dirname, 'index.html'),
			},
			plugins: [nodeResolve()]
    },
  },
})
