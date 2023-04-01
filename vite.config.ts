import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      layouts:  path.resolve(__dirname, "./src/layouts"),
      pages:  path.resolve(__dirname, "./src/pages"),
      component: path.resolve(__dirname, "./src/core/component"),
      features: path.resolve(__dirname, "./src/features"),
      types: path.resolve(__dirname, "./src/core/types"),
      utils: path.resolve(__dirname, "./src/core/utils"),
      styles: path.resolve(__dirname, "./src/styles"),
      hooks: path.resolve(__dirname, "./src/core/hooks"),
      data: path.resolve(__dirname, "./src/core/data")
    }
  }
})
