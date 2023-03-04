import path from 'node:path'
import { copy, remove } from 'fs-extra'
import consola from 'consola'
import { buildOutput } from '../path'

export async function buildTypes() {
  consola.info('Start copy types...')
  const src = path.resolve(buildOutput, 'types')
  await copy(`${src}/components`, src, { recursive: true })
  await remove(`${src}/components`)
  Promise.all(
    ['es', 'lib'].map(dir =>
      copy(src, path.resolve(buildOutput, dir), { recursive: true }),
    ),
  )
  consola.success('copy types complete!')
}
