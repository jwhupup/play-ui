import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { PlayResolver } from 'play-ui/dist/lib/resolver'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      dts: 'src/components.d.ts',
      globs: ['*.{vue}'],
      resolvers: [
        PlayResolver({
          importStyle: 'less',
        }),
      ],
    }),
  ],
})
