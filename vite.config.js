import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: tag => tag === 'my-vue-component'
      }
    }
  })],
  build: {
    lib: {
      entry: 'src/index.js',  // Entry point for the library
      name: 'MyVueComponentLibrary',  // Global name
      fileName: (format) => `vue-web-component.${format}.js`,
      formats: ['umd'],  // Use UMD format for web components
    },
    rollupOptions: {
      external: ['vue'],  // Vue will be loaded from external, not bundled
      output: {
        globals: {
          vue: 'Vue',  // Define Vue as a global in the browser
        },
      },
    },
  },
});
