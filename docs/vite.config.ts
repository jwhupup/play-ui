import { defineConfig } from 'vite'
import Unocss from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import { PlayResolver } from 'play-vue/dist/lib/plugins/resolvers'

export default defineConfig({
  plugins: [
    Unocss(),
    Components({
      resolvers: [
        PlayResolver({
          importStyle: 'less',
        }),
      ],
    }),
  ],
})
