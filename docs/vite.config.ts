import { defineConfig } from 'vite'
import Unocss from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import { PlayResolver } from 'play-vue/dist/lib/resolver'

let resolverOptions = {}

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === undefined) {
  resolverOptions = {
    importStyle: 'less',
    from: 'play-vue/components/index',
  }
}

export default defineConfig({
  plugins: [
    Unocss(),
    Components({
      resolvers: [
        PlayResolver(resolverOptions),
      ],
    }),
  ],
  server: {
    fs: {
      allow: ['..'],
    },
  },
})
