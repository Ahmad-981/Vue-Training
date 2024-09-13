import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag === 'text-field' || tag === 'my-button' || tag === 'my-vue-component'
        }
      },
    }),
  ],
  build: {
    lib: {
      entry: "src/index.js",
      name: "MyVueComponentLibrary",
      fileName: (format) => `my-vue-component.${format}.js`,
      formats: ["umd"],
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
    // cssCodeSplit: false,
  },
});
