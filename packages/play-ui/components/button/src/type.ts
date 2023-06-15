import type { ComponentSize, ComponentState } from '../../component'

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
