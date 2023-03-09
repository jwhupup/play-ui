import { defineConfig } from 'vite'
import Unocss from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import { PlayResolver } from 'play-vue/dist/lib/resolver'

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
