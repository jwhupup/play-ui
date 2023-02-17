import { copy } from 'fs-extra'
import consola from 'consola'

export async function buildTypes() {
  consola.info('Start copy types...')
  const src = 'dist/types'
  copy(src, 'dist/es', { recursive: true })
  copy(src, 'dist/lib', { recursive: true })
  consola.success('copy types complete!')
}
