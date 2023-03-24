import { withInstall } from '../install'
import Table from './src/index.vue'

export const PlTable = withInstall(Table, 'PlTable')
export default PlTable
export * from './src/table'
