import path from 'node:path'
import { copy } from 'fs-extra'
import consola from 'consola'
import { buildOutput } from '../path'

export async function buildTypes() {
  consola.info('Start copy types...')
  const src = path.resolve(buildOutput, 'types')
  copy(src, path.resolve(buildOutput, 'es'), { recursive: true })
  copy(src, path.resolve(buildOutput, 'lib'), { recursive: true })
  consola.success('copy types complete!')
}
