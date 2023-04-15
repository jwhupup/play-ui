import type { ExtractPropTypes, PropType } from 'vue'
import type { ComponentSize } from '../../type'

export type InputType = 'bordered' | 'underline' | 'light'
export interface InputRule {
  pattern?: RegExp
  message?: string
  require?: string
}

export const inputProps = {
  modelValue: {
    type: String as PropType<string | number>,
    default: '',
  },
  type: {
    type: String as PropType<InputType>,
    default: 'default',
  },
  size: {
    type: String as PropType<ComponentSize>,
    default: 'small',
  },
  nativeType: {
    type: String,
    default: 'text',
  },
  placeholder: String,
  rule: Object as PropType<InputRule>,
  disabled: Boolean,
}

export type InputProps = ExtractPropTypes<typeof inputProps>
