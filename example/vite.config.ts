import { resolve } from 'path'
import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import { PlayResolver } from 'play-vue/dist/lib/plugins/resolvers'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}

export default defineConfig({
  plugins: [
    vue(),
    Pages({
      dirs: 'src/demos',
    }),
    Components({
      resolvers: [
        PlayResolver({
          importStyle: 'less',
          dev: true,
        }),
      ],
    }),
  ],
  resolve: {
    alias: [
      // @/xxxx => src/xxxx
      {
        find: /@\//,
        replacement: `${pathResolve('src')}/`,
      },
    ],
  },
})
