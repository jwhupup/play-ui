import { resolve } from 'node:path'

export const projectRoot = resolve(__dirname, '..')

export const sourceRoot = resolve(projectRoot, 'src')
export const componentsRoot = resolve(sourceRoot, 'components')
export const pluginsRoot = resolve(sourceRoot, 'plugins')
export const stylesRoot = resolve(sourceRoot, 'styles')
export const utilsRoot = resolve(sourceRoot, 'utils')

export const buildOutput = resolve(projectRoot, 'dist')
