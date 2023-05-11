import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { build } from 'vite'
import consola from 'consola'
import { buildOutput, componentsRoot } from '../path'

export async function buildBundled() {
  consola.info('Start building bundle...')

  const input = resolve(componentsRoot, 'index.ts')
  await build({
    plugins: [vue(), vueJsx()],
    build: {
      lib: {
        entry: input,
        name: 'PlayUi',
        formats: ['es', 'umd'],
        fileName: 'play-ui',
      },
      rollupOptions: {
        output: {
          dir: resolve(buildOutput, 'bundle'),
          globals: {
            vue: 'Vue',
          },
        },
        external: ['vue', /\.less/],
      },
    },
  })

  consola.success('bundle built!')
}
