import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig, type PluginOption } from 'vite'
import viteCompression from 'vite-plugin-compression'
import vueDevTools from 'vite-plugin-vue-devtools'
import { compress, dropConsole, sourcemap } from './configs/build'

const plugins: PluginOption = [
  vue(),
  vueDevTools(),
  UnoCSS(),
  AutoImport({
    imports: [
      'vue',
      '@vueuse/core',
      'pinia',
      'vue-router',
      { 'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar'] },
    ],
    vueTemplate: true,
    dts: 'types/auto-imports.d.ts',
  }),
  Components({ resolvers: [NaiveUiResolver()], dts: 'types/components.d.ts' }),
]
if (compress) {
  plugins.push(viteCompression({
    algorithm: 'gzip',
    deleteOriginFile: false,
  }))
}

export default defineConfig({
  base: './',
  plugins,
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    proxy: {
      '/brdcontrol-service': {
        target: 'http://192.168.5.213:5555',
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  esbuild: {
    pure: dropConsole ? ['console.log', 'debugger'] : [],
  },
  build: {
    chunkSizeWarningLimit: 1500,
    sourcemap,
  },
})
