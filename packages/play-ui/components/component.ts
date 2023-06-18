export type ComponentState = 'primary' | 'info' | 'success' | 'warning' | 'danger'
export type ComponentSize = 'mini' | 'small' | 'medium' | 'large'

// alert
export interface AlertProps {
  type?: 'solid' | 'soft' | 'outline'
  state?: ComponentState
  title?: string
  description?: string
  icon?: string
  closable?: boolean
}

// checkbox
export interface CheckboxProps {
  modelValue: boolean
  lable?: string
  value?: any
  indeterminate?: boolean
  disabled?: boolean
}

// icon
export interface IconProps {
  name: string
}

// input
export type InputType = 'bordered' | 'underline' | 'light'
export interface InputRule {
  pattern?: RegExp
  message?: string
  require?: string
}

export interface InputProps {
  modelValue: string | number
  type?: InputType
  nativeType?: string
  size?: ComponentSize
  placeholder?: string
  rule?: InputRule
  disabled?: boolean
}

// table
export interface TableProps {
  width?: number
  header: TableHeaderCell[]
  data: Record<string, any>[]
  fixedHeader?: boolean
  striped?: boolean
  border?: boolean
}

export interface TableConfig {
  striped: boolean
  width: number
  columns: TableHeaderCell[]
  data: Record<string, any>[]
}

export interface TableHeaderCell {
  name: string
  key?: string
  width?: number
  index?: number
  children?: TableHeaderCell[]
}

export interface TableHeaderCellProps {
  data: TableHeaderCell
}

export interface TableCellProps {
  data: any
}

export interface TableRowProps {
  data: Record<string, any>[]
}

// tag
export type TagType = 'solid' | 'outline' | 'soft'
export type TagShape = 'rounded' | 'pilled'

export interface TagProps {
  type?: TagType
  shape?: TagShape
  state?: ComponentState
  closable?: Boolean
  indicator?: Boolean
}
