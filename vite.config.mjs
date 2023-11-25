import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
    visualizer({
      open: true, // This will open the visualization in your browser after the build is completed.
      gzipSize: true, // Show gzip sizes
      brotliSize: true, // Show brotli sizes
      filename: 'bundle-analysis.html', // The output filename for the visualization file.
    }),
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'mathjax3-react',
      formats: ['es', 'umd'],
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
});
