import { withInstall } from '../install'
import Tables from './src/index.vue'

export const PlTables = withInstall(Tables, 'PlTables')
export default PlTables
export * from './src/tables'
