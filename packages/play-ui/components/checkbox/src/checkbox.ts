import type { ExtractPropTypes } from 'vue'

export const checkboxProps = {
  lable: String,
  modelValue: Boolean,
  indeterminate: Boolean,
  disabled: Boolean,
}

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>
