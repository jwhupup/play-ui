import type { ExtractPropTypes } from 'vue'

export const modalProps = {
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
  visible: Boolean,
}

export type PlModalProps = ExtractPropTypes<typeof modalProps>
