import { writeFile } from 'fs/promises'
import { resolve } from 'node:path'
import consola from 'consola'
import chalk from 'chalk'
import pkg from '../packages/play-vue/package.json'

const pkgPath = resolve(process.cwd(), 'packages/play-vue/package.json')

export const updatePkgVersion = (version: string) => {
  consola.info(`${chalk.cyan('Updating version...')}`)

  consola.info(
    `${chalk.green(pkg.name)} version from ${chalk.green(
      pkg.version
    )} to ${chalk.green(version)}`
  )

  pkg.version = version

  writeFile(pkgPath, JSON.stringify(pkg, undefined, 2), 'utf-8')
    .then(() => consola.success(`${pkg.name} version updated!`))
    .catch((err) => consola.error(err))
}
