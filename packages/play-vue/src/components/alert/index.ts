import { withInstall } from '../../utils/install'
import Alert from './alert.vue'

export const PlAlert = withInstall(Alert, 'PlAlert')
export default PlAlert
export type { AlertProps } from './alert'
