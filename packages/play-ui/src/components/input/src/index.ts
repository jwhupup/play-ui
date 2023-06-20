import type { PropType } from 'vue'
import type { ComponentSize } from '../../component'

export type InputType = 'bordered' | 'underline' | 'light'

export interface InputRule {
  pattern?: RegExp
  message?: string
  timimg?: string
}

export const inputProps = {
  type: {
    type: Object as PropType<InputType>,
    default: 'bordered',
  },
  nativeType: {
    type: String,
    default: 'text',
  },
  size: {
    type: String as PropType<ComponentSize>,
    default: 'medium',
  },
  modelValue: [String, Number],
  rules: Object as PropType<InputRule | InputRule[]>,
  placeholder: String,
  disabled: Boolean,
  require: Boolean,
}
