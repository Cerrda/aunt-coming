import { fileURLToPath, URL } from 'node:url'
import { VantResolver } from '@vant/auto-import-resolver'
import vue from '@vitejs/plugin-vue'
import postcssPxConversion from 'postcss-px-conversion'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig, type PluginOption } from 'vite'
import viteCompression from 'vite-plugin-compression'
import { VitePWA } from 'vite-plugin-pwa'
import { compress, dropConsole, sourcemap } from './configs/build'
import { DESIGN_WIDTH } from './configs/ui'

const plugins: PluginOption = [
  vue(),
  UnoCSS(),
  AutoImport({
    imports: [
      'vue',
      '@vueuse/core',
      'pinia',
      'vue-router',
    ],
    resolvers: [VantResolver()],
    vueTemplate: true,
    dts: 'types/auto-imports.d.ts',
  }),
  Components({
    resolvers: [VantResolver()],
    dts: 'types/components.d.ts',
  }),
  VitePWA({
    registerType: 'autoUpdate',
    manifest: {
      name: '姨妈来咯',
      short_name: '姨妈来咯',
      theme_color: '#ffffff',
      icons: [
        {
          src: '/pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: '/pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
  }),
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
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
    postcss: {
      plugins: [
        postcssPxConversion({
          viewportWidth: DESIGN_WIDTH,
        }),
      ],
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
