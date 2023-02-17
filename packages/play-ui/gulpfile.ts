import { parallel, series } from 'gulp'
import {
  buildBrowser,
  buildModules,
  buildStyles,
  buildTypes,
} from './build/task'

export default parallel(
  buildBrowser,
  series(buildStyles),
  series(buildModules, buildTypes)
)
