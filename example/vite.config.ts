import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { PlayResolver } from 'play-ui/dist/lib/resolver'
import Unocss from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      presets: [
        presetUno({
          attributifyPseudo: true,
        }),
        presetAttributify(),
      ],
    }),
    Components({
      resolvers: [
        PlayResolver({
          importStyle: 'less',
        }),
      ],
    }),
  ],
})
