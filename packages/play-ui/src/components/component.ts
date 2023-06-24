export type ComponentState = 'primary' | 'info' | 'success' | 'warning' | 'danger'
export type ComponentSize = 'mini' | 'small' | 'medium' | 'large'

// checkbox
export interface CheckboxProps {
  modelValue: boolean
  lable?: string
  value?: any
  indeterminate?: boolean
  disabled?: boolean
}
