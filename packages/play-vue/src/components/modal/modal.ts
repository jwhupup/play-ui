import type { ExtractPropTypes } from 'vue'

export const modalProps = {
  modelValue: Boolean,
}

export type ModalProps = ExtractPropTypes<typeof modalProps>
