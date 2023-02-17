import { dest, src } from 'gulp'
import consola from 'consola'
import chalk from 'chalk'
import gulpLess from 'gulp-less'
import gulpImportLess from 'gulp-import-less'
import autoprefixer from 'gulp-autoprefixer'
import cleanCSS from 'gulp-clean-css'

export async function buildStyles() {
  return src('src/style/**/*.less')
    .pipe(gulpImportLess())
    .pipe(gulpLess())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(
      cleanCSS({}, (details) => {
        consola.success(
          `${chalk.cyan(details.name)}: ${chalk.yellow(
            details.stats.originalSize / 1000
          )} KB -> ${chalk.green(details.stats.minifiedSize / 1000)} KB`
        )
      })
    )
    .pipe(dest('dist/style'))
}
