import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    src:'src',
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'src/scripts/main.js',
        counter: 'src/scripts/counter.js',
      },
    },
  },
})