import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { PlayResolver } from 'play-ui/dist/lib/components/resolver'
import Unocss from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Unocss({
      presets: [
        presetUno({
          attributifyPseudo: true,
        }),
        presetAttributify(),
      ],
    }),
    AutoImport({
      resolvers: [
        PlayResolver({
          importStyle: 'less',
          from: 'play-ui/src/index',
        }),
      ],
    }),
    Components({
      dts: false,
      resolvers: [
        PlayResolver({
          importStyle: 'less',
          from: 'play-ui/src/index',
        }),
      ],
    }),
  ],
})
