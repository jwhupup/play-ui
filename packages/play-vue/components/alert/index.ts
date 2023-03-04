import { withInstall } from '../../utils'
import Alert from './src/index.vue'

export const PlAlert = withInstall(Alert, 'PlAlert')
export default PlAlert
export type { AlertProps } from './src/alert'
