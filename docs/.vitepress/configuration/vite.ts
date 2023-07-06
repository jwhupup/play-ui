import { fileURLToPath } from 'node:url'
import Unocss from 'unocss/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { PlayResolver } from 'play-ui/dist/lib/components/resolver'

export const vite = {
  resolve: {
    alias: [
      {
        find: /^.*\/VPNavBarMenu\.vue$/,
        replacement: fileURLToPath(
          new URL('../components/nav-bar-menu/index.vue', import.meta.url),
        ),
      },
    ],
  },
  plugins: [
    vueJsx(),
    Unocss(),
    Components({
      resolvers: [
        PlayResolver(),
      ],
    }),
    AutoImport({
      resolvers: [
        PlayResolver(),
      ],
    }),
  ],
  server: {
    fs: {
      allow: ['..'],
    },
  },
}
