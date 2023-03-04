import { withInstall } from '../../utils/install'
import Modal from './src/index.vue'

export const PlModal = withInstall(Modal, 'PlModal')
export default PlModal
export type { ModalProps } from './src/modal'
