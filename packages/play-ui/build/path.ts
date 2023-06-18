import { resolve } from 'node:path'

export const rootPath = resolve(__dirname, '..')
export const srcPath = resolve(rootPath, 'src')
export const distPath = resolve(rootPath, 'dist')
export const stylesPath = resolve(srcPath, 'styles')
export const componentsPath = resolve(srcPath, 'components')
