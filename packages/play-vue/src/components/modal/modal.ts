import type { ExtractPropTypes } from 'vue'

export const modalProps = {
  visible: Boolean,
  title: {
    type: String,
    default: '',
  },
  mask: {
    type: Boolean,
    default: true,
  },
  showClose: {
    type: Boolean,
    default: true,
  },
}

export type ModalProps = ExtractPropTypes<typeof modalProps>
