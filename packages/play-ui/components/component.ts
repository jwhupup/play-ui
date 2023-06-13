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

// badge
export interface BadgeProps {
  state?: ComponentState
  max?: number
  value?: number | string
  dot?: boolean
  hidden?: boolean
}

// button
export type ButtonNativeType = 'button' | 'reset' | 'submit'
export type ButtonShape = 'rounded' | 'pilled' | 'circle' | 'plain'
export type ButtonType = 'solid' | 'outline' | 'ghost' | 'white' | 'link'

export interface ButtonProps {
  type?: ButtonType
  nativeType?: ButtonNativeType
  state?: ComponentState
  size?: ComponentSize
  shape?: ButtonShape
  iconLeft?: string
  iconRight?: string
  disabled?: boolean
}

// button group
export type ButtonGroupType = UnionPick<ButtonType, 'solid' | 'outline' | 'white'>
export type ButtonGroupShape = UnionPick<ButtonShape, 'rounded' | 'pilled'>

export interface ButtonGroupProps {
  type?: ButtonGroupType
  state?: ComponentState
  size?: ComponentSize
  shape?: ButtonGroupShape
  vertical?: boolean
  disabled?: boolean
}

// checkbox
export interface CheckboxProps {
  modelValue: boolean
  lable?: string
  value?: any
  indeterminate?: boolean
  disabled?: boolean
}

// dropdown
export type DropdownTrigger = 'mouseenter' | 'click' | 'contextmenu'

export interface DropdownData {
  name: string
  title?: string
  divider?: boolean
  disabled?: boolean
  trigger?: DropdownTrigger
  menuButton?: Partial<Pick<ButtonProps, 'state' | 'type' | 'iconLeft' | 'iconRight'> & { badge: Partial<BadgeProps> }>
  callback?: () => void
  children?: DropdownData[]
}

export interface DropdownProps {
  data: DropdownData[]
  trigger?: DropdownTrigger
  disabled?: boolean
  customPosition?: boolean
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

// modal
export interface ModalProps {
  title?: string
  mask?: boolean
  showClose?: boolean
  visible?: boolean
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
