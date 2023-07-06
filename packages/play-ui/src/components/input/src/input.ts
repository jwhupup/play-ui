import type { ExtractPropTypes, PropType } from 'vue'
import type { ComponentSize } from '../../component'

export type InputMode = 'bordered' | 'underline' | 'light'

export const inputProps = {
  modelValue: {
    type: [String, Number],
    default: '',
  },
  mode: {
    type: String as PropType<InputMode>,
    default: 'bordered',
  },
  type: {
    type: String,
    default: 'text',
  },
  size: {
    type: String as PropType<ComponentSize>,
    default: 'medium',
  },
  errorTip: String,
  successTip: String,
  infoTip: String,
  prefixIcon: String,
  suffixIcon: String,
  placeholder: String,
  disabled: Boolean,
  clearable: Boolean,
  pattern: RegExp,
}

export type InputProps = ExtractPropTypes<typeof inputProps>
