import { parallel, series } from 'gulp'
import { buildBrowser, buildModules, copyTypes } from './build/task'

export default parallel(buildBrowser, series(buildModules, copyTypes))
