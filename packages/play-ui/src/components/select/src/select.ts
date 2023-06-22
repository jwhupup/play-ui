import type { PropType } from 'vue'
import type { ComponentSize } from '../../component'

export type InputMode = 'bordered' | 'underline' | 'light'
export interface SelectOption {
  name: string
  value?: any
}

export const selectProps = {
  modelValue: {
    type: Object as PropType<SelectOption>,
    default: () => ({}),
  },
  options: {
    type: Array as PropType<SelectOption[]>,
    default: [],
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
  infoTip: {
    type: String,
    default: 'this is warm tip.',
  },
  prefixIcon: String,
  suffixIcon: String,
  placeholder: String,
  disabled: Boolean,
  clearable: Boolean,
  multiple: Boolean,
}
