import { resolve } from 'node:path'
import glob from 'fast-glob'
import consola from 'consola'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { build } from 'vite'
import type { OutputOptions } from 'rollup'
import { excludeFiles } from '../utils'
import { buildOutput, componentsRoot } from '../path'

const output: OutputOptions[] = [
  {
    format: 'es',
    dir: resolve(buildOutput, 'es'),
    exports: undefined,
    preserveModules: true,
    preserveModulesRoot: componentsRoot,
    sourcemap: true,
    entryFileNames: '[name].mjs',
  },
  {
    format: 'cjs',
    dir: resolve(buildOutput, 'lib'),
    exports: 'named',
    preserveModules: true,
    preserveModulesRoot: componentsRoot,
    sourcemap: true,
    entryFileNames: '[name].js',
  },
]

export async function buildModule() {
  consola.info('Start building modules...')
  const input = excludeFiles(
    await glob('**/*.{js,ts,vue}', {
      cwd: componentsRoot,
      absolute: true,
      onlyFiles: true,
    }),
  )

  await build({
    plugins: [vue(), vueJsx()],
    build: {
      rollupOptions: {
        input,
        output,
        preserveEntrySignatures: 'allow-extension',
        external: ['vue', /\.less/],
      },
      minify: false,
    },
  })
  consola.success('modules built!')
}
