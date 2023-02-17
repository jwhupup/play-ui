import { nodeResolve } from '@rollup/plugin-node-resolve'
import { rollup } from 'rollup'
import vue from '@vitejs/plugin-vue'
import commonjs from '@rollup/plugin-commonjs'
import esbuild, { minify as minifyPlugin } from 'rollup-plugin-esbuild'
import consola from 'consola'
import { browserOutputConfig } from '../config'
import type { Plugin } from 'rollup'

export async function buildBrowser() {
  consola.info('Start building browser...')
  const plugins: Plugin[] = [
    vue(),
    nodeResolve({
      extensions: ['.mjs', '.js', '.json', '.ts'],
    }),
    commonjs(),
    esbuild({
      exclude: [],
      sourceMap: true,
      target: 'es2018',
      loaders: {
        '.vue': 'ts',
      },
      treeShaking: true,
      legalComments: 'eof',
    }),
    minifyPlugin({
      target: 'es2018',
      sourceMap: true,
    }),
  ]
  const bundle = await rollup({
    input: 'src/index.ts',
    plugins,
    external: ['vue'],
    treeshake: true,
  })
  await Promise.all(browserOutputConfig.map((option) => bundle.write(option)))
  await bundle.close()
  consola.success('browser built!')
}
