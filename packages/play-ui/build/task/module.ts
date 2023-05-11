import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import esbuild from 'rollup-plugin-esbuild'
import glob from 'fast-glob'
import consola from 'consola'
import { rollup } from 'rollup'
import { excludeFiles } from '../utils'
import { modulesOutputConfig } from '../config'
import { componentsRoot } from '../path'

export async function buildModule() {
  consola.info('Start building modules...')
  const input = excludeFiles(
    await glob('**/*.{js,ts,vue}', {
      cwd: componentsRoot,
      absolute: true,
      onlyFiles: true,
    }),
  )

  const bundle = await rollup({
    input,
    plugins: [
      vue(),
      vueJsx(),
      nodeResolve({
        extensions: ['.mjs', '.js', '.json', '.ts'],
      }),
      commonjs(),
      esbuild({
        sourceMap: true,
        target: 'es2018',
        loaders: {
          '.vue': 'ts',
        },
      }),
    ],
    external: ['vue', /\.less/],
    treeshake: false,
  })
  await Promise.all(modulesOutputConfig.map(option => bundle.write(option)))
  await bundle.close()
  consola.success('modules built!')
}
