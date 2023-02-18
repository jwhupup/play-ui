import path from 'node:path'
import { buildOutput, sourceRoot } from './path'
import type { OutputOptions } from 'rollup'

export const modulesOutputConfig: OutputOptions[] = [
  {
    format: 'esm',
    dir: path.resolve(buildOutput, 'es'),
    exports: undefined,
    preserveModules: true,
    preserveModulesRoot: sourceRoot,
    sourcemap: true,
    entryFileNames: '[name].mjs',
  },
  {
    format: 'cjs',
    dir: path.resolve(buildOutput, 'lib'),
    exports: 'named',
    preserveModules: true,
    preserveModulesRoot: sourceRoot,
    sourcemap: true,
    entryFileNames: '[name].js',
  },
]

export const browserOutputConfig: OutputOptions[] = [
  {
    format: 'umd',
    file: path.resolve(buildOutput, 'browser', 'index.min.js'),
    exports: 'named',
    name: 'PlayUi',
    globals: {
      vue: 'Vue',
    },
    sourcemap: true,
  },
  {
    format: 'esm',
    file: path.resolve(buildOutput, 'browser', 'index.min.mjs'),
    sourcemap: true,
  },
]
