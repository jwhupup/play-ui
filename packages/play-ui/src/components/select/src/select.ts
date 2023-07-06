import type { PropType } from 'vue'
import type { ComponentSize } from '../../component'
import type { InputMode } from '../../input/src/input'

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
  size: {
    type: String as PropType<ComponentSize>,
    default: 'medium',
  },
  infoTip: {
    type: String,
    default: '',
  },
  prefixIcon: String,
  suffixIcon: String,
  placeholder: String,
  disabled: Boolean,
  clearable: Boolean,
  multiple: Boolean,
}
