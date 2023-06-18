import { resolve } from 'node:path'
import { dest, src } from 'gulp'
import gulpLess from 'gulp-less'
import gulpImportLess from 'gulp-import-less'
import autoprefixer from 'gulp-autoprefixer'
import cleanCSS from 'gulp-clean-css'
import { existsSync, outputFileSync, readFileSync } from 'fs-extra'
import { componentsPath, distPath, stylesPath } from '../path'

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

function genStyleEntry(cssInfo: CssInfo) {
  if (cssInfo.path.includes(componentsPath)) {
    const noStyleComps = []

    const compName = cssInfo.name.split(/\\|\//)[1]

    const importReg = /import .* from '(.*).vue'/g

    const importCommon = 'import \'../../base.css\'\nimport \'./index.css\'\n'

    const isExist = existsSync(resolve(componentsPath, compName, 'src/index.vue'))

    const importContent = (
      readFileSync(resolve(componentsPath, compName, `src/index.${isExist ? 'vue' : 'tsx'}`), 'utf-8').match(importReg) || []
    )
      .filter(path => noStyleComps.every(comp => !path.includes(comp)))
      .reduce((prev, curr) => prev += curr.replace(importReg, 'import \'$1.css\'\n'), importCommon)

    outputFileSync(resolve(distPath, 'styles', `${cssInfo.name.split('.')[0].slice(1)}.js`), importContent)
  }
}
