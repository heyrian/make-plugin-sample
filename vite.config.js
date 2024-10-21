import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import vuetify from 'vite-plugin-vuetify'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  plugins: [
    vue(),
    vuetify({
      autoImport: true
    }),
    AutoImport({
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
      },
      imports: ['vue', 'vue-i18n'],
      vueTemplate: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'RianComponentUI',
      formats: ['es', 'umd'],
      fileName: (format) => `component-ui.${format}.js`,
    },
    cssCodeSplit: true,
    rollupOptions: {
      external: ['vue', 'vuetify', 'vue-i18n'],
      output: {
        globals: {
          vue: 'Vue',
          vuetify: 'Vuetify',
          'vue-i18n': 'VueI18n',
        },
        // 指定 CSS 輸出路徑
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return `styles/component-ui.${assetInfo.name}`
          }
          return assetInfo.name
        },
      },
    },
  },
})
