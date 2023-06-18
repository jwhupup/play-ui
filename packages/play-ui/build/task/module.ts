import { resolve } from 'node:path'
import glob from 'fast-glob'
import consola from 'consola'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { build } from 'vite'
import type { OutputOptions } from 'rollup'
import { excludeFiles } from '../utils'
import { distPath, srcPath } from '../path'

const output: OutputOptions[] = [
  {
    format: 'es',
    dir: resolve(distPath, 'es'),
    exports: undefined,
    preserveModules: true,
    preserveModulesRoot: srcPath,
    sourcemap: true,
    entryFileNames: '[name].mjs',
  },
  {
    format: 'cjs',
    dir: resolve(distPath, 'lib'),
    exports: 'named',
    preserveModules: true,
    preserveModulesRoot: srcPath,
    sourcemap: true,
    entryFileNames: '[name].js',
  },
]

export async function buildModule() {
  consola.info('Start building modules...')
  const input = excludeFiles(
    await glob('**/*.{ts,tsx,vue}', {
      cwd: srcPath,
      absolute: true,
      onlyFiles: true,
    }),
  )
  console.log(input)

  await build({
    plugins: [vue(), vueJsx()],
    build: {
      rollupOptions: {
        input,
        output,
        preserveEntrySignatures: 'allow-extension',
        external: ['vue'],
      },
      minify: false,
    },
  })
  consola.success('modules built!')
}
