import type { ExtractPropTypes } from 'vue'

export const modalProps = {
  visible: Boolean,
  title: {
    type: String,
    default: 'Modal title',
  },
}

export type ModalProps = ExtractPropTypes<typeof modalProps>
