import type { ExtractPropTypes } from 'vue'

export const checkboxProps = {
  lable: String,
  value: Object,
  modelValue: Boolean,
  indeterminate: Boolean,
  disabled: Boolean,
}

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>
