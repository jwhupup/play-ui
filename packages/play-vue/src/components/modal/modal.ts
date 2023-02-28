import type { ExtractPropTypes, PropType } from 'vue'

export const modalProps = {
  modelValue: Boolean,
}

export type ModalProps = ExtractPropTypes<typeof modalProps>
