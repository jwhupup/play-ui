import { withInstall } from '../install'
import Modal from './src/index.vue'

export const PlModal = withInstall(Modal, 'PlModal')
export default PlModal
export * from './src/modal'
