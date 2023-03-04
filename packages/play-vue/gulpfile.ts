import { parallel, series } from 'gulp'
import {
  buildBrowser,
  buildModules,
  buildStyles,
  buildTypes,
} from './build/task'

export default parallel(
  buildBrowser,
  buildStyles,
  series(buildModules, buildTypes)
)
