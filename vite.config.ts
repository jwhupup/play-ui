import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      // @/xxxx => src/xxxx
      {
        find: /@\//,
        replacement: `${pathResolve('src')}/`,
      },
    ],
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      name: '@vvv/components',
    },
    rollupOptions: {
      external: ['vue'],
      input: './packages/components/index.ts',
      output: {
        dir: './packages/components/dist',
      },
    },
  },
})
