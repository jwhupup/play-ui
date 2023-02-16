import { copy } from 'fs-extra'
import consola from 'consola'
import { pathResolve } from '../utils'

export async function copyTypes() {
  consola.info('Start copy types...')
  const src = pathResolve('dist/types')
  copy(src, pathResolve('dist/es'), { recursive: true })
  copy(src, pathResolve('dist/lib'), { recursive: true })
  consola.success('copy types complete!')
}
