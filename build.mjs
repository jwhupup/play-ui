import { resolve } from 'path'
import { rollup } from 'rollup'
import glob from 'fast-glob'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import vue from '@vitejs/plugin-vue'
import commonjs from '@rollup/plugin-commonjs'
import esbuild from 'rollup-plugin-esbuild'

function pathResolve(dir) {
  return resolve(process.cwd(), '.', dir)
}

export const excludeFiles = (files) => {
  const excludes = ['node_modules', 'test', 'mock', 'gulpfile', 'dist']
  return files.filter(
    (path) => !excludes.some((exclude) => path.includes(exclude))
  )
}
export const buildModules = async () => {
  const input = excludeFiles(
    await glob('**/*.{js,ts,vue}', {
      cwd: pathResolve('packages'),
      absolute: true,
      onlyFiles: true,
    })
  )
  console.log(input)
  const bundle = await rollup({
    input,
    output: [
      {
        format: 'esm',
        dir: 'dist/components/es',
        exports: undefined,
        preserveModules: true,
        preserveModulesRoot: 'packages/components',
        sourcemap: true,
        entryFileNames: '[name].mjs',
      },
      {
        format: 'cjs',
        dir: 'dist/components/lib',
        exports: 'named',
        preserveModules: true,
        preserveModulesRoot: 'packages/components',
        sourcemap: true,
        entryFileNames: '[name].js',
      },
    ],
    plugins: [
      vue({
        isProduction: false,
      }),
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
    external: ['vue'],
    treeshake: false,
  })

  if (bundle) {
    await bundle.write({
      format: 'esm',
      dir: 'dist/components/es',
      exports: undefined,
      preserveModules: true,
      preserveModulesRoot: 'packages/components',
      sourcemap: true,
      entryFileNames: '[name].mjs',
    })
    await bundle.write({
      format: 'cjs',
      dir: 'dist/components/lib',
      exports: 'named',
      preserveModules: true,
      preserveModulesRoot: 'packages/components',
      sourcemap: true,
      entryFileNames: '[name].js',
    })
    await bundle.close()
  }
  process.exit(0)
}

buildModules()
