import type { OutputOptions } from 'rollup'

export const modulesOutputConfig: OutputOptions[] = [
  {
    format: 'esm',
    dir: 'dist/es',
    exports: undefined,
    preserveModules: true,
    preserveModulesRoot: 'src',
    sourcemap: true,
    entryFileNames: '[name].mjs',
  },
  {
    format: 'cjs',
    dir: 'dist/lib',
    exports: 'named',
    preserveModules: true,
    preserveModulesRoot: 'src',
    sourcemap: true,
    entryFileNames: '[name].js',
  },
]

export const browserOutputConfig: OutputOptions[] = [
  {
    format: 'umd',
    file: 'dist/browser/index.min.js',
    exports: 'named',
    name: 'PlayUi',
    globals: {
      vue: 'Vue',
    },
    sourcemap: true,
  },
  {
    format: 'esm',
    file: 'dist/browser/index.min.mjs',
    sourcemap: true,
  },
]
