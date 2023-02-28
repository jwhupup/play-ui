import { withInstall } from '../../utils/install'
import Modal from './modal.vue'

export const PlModal = withInstall(Modal, 'PlModal')
export default PlModal
export type { ModalProps } from './modal'
