import { resolve } from 'node:path'
import { dest, src } from 'gulp'
import glob from 'fast-glob'
import gulpLess from 'gulp-less'
import gulpImportLess from 'gulp-import-less'
import autoprefixer from 'gulp-autoprefixer'
import cleanCSS from 'gulp-clean-css'
import { existsSync, outputFileSync, readFileSync } from 'fs-extra'
import { componentsPath, distPath, stylesPath } from '../path'
import { excludeFiles, uppercaseFirstWord } from '../utils'

export async function buildStyle() {
  const stylePath = resolve(distPath, 'styles')

  return src([
    resolve(stylesPath, '**/*.less'),
    resolve(componentsPath, '**/*.less'),
  ])
    .pipe(gulpImportLess())
    .pipe(gulpLess())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(
      cleanCSS({}, (details) => {
        genStyleEntry(details)
      }),
    )
    .pipe(dest(stylePath))
}

interface CssInfo {
  path: string
  name: string
}

async function genStyleEntry(cssInfo: CssInfo) {
  if (cssInfo.path.includes(componentsPath)) {
    const componentPaths = excludeFiles(
      await glob('*/', {
        cwd: componentsPath,
        deep: 1,
        absolute: true,
        onlyFiles: false,
      }),
    )
    const components = componentPaths.map(comp => comp.split('components/')[1])

    const componentName = cssInfo.name.split(/[\\|\/]/)[1]

    const importReg = /import\s+(?:(?!type\s+\{)\w+\s+)*?(?<!{)(\w+)\s+from/g

    const importCommon = 'import \'../../base.css\'\nimport \'./index.css\'\n'

    const isExist = existsSync(resolve(componentsPath, componentName, 'src/index.vue'))

    const importContent = (
      readFileSync(
        resolve(
          componentsPath, componentName,
          `src/index.${isExist ? 'vue' : 'tsx'}`,
        ),
        'utf-8',
      ).match(importReg) || []
    )
      .filter(
        path => components.some(
          comp => path.includes(uppercaseFirstWord(comp)),
        ),
      )
      .reduce(
        (prev, curr) => (
          prev += curr.replace(
            importReg,
            'import \'../../$1/src/index.css\'\n',
          ).toLowerCase()
        ),
        importCommon,
      )

    outputFileSync(
      resolve(
        distPath, 'styles',
        `${cssInfo.name.split('.')[0].slice(1)}.js`,
      ),
      importContent,
    )
  }
}
