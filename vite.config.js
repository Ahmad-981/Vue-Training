// import { defineConfig } from 'vite';
// import vue from '@vitejs/plugin-vue';
// import { resolve } from 'path';

// export default defineConfig({
//   plugins: [vue()],
//   build: {
//     lib: {
//       entry: resolve(__dirname, 'src/components/Button.vue'),
//       name: 'Button',
//       fileName: (format) => `button.${format}.js`,
//       formats: ['umd'],
//     },
//     rollupOptions: {
//       external: ['vue'],
//       output: {
//         globals: {
//           vue: 'Vue',
//         },
//       },
//     },
//   },
// });




// import { defineConfig } from 'vite';
// import vue from '@vitejs/plugin-vue';

// export default defineConfig({
//   plugins: [vue({
//     template: {
//       compilerOptions: {
//         isCustomElement: tag => tag === 'text-field' || tag === 'my-button',
//       }
//     }
//   })],
//   build: {
//     lib: {
//       entry: 'src/index.js',  // Entry point for the library
//       name: 'MyVueComponentLibrary',  // Global name
//       // fileName: (format) => `vue-web-component.${format}.js`,
//       fileName: (format) => `text-field.${format}.js`,
//       formats: ['umd'],  // Use UMD format for web components
//     },
//     rollupOptions: {
//       external: ['vue'],  // Vue will be loaded from external, not bundled
//       output: {
//         globals: {
//           vue: 'Vue',  // Define Vue as a global in the browser
//         },
//       },
//     },
//   },
// });

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'TextField',
      fileName: (format) => `text-field.${format}.js`,
      formats: ['umd'],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
