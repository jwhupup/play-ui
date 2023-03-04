import type { ExtractPropTypes, PropType } from 'vue'
import type { ComponentColor } from '../../type'

export type ButtonNativeType = 'button' | 'reset' | 'submit'
export type ButtonShape = 'rounded' | 'pilled' | 'circle'
export type ButtonSize = 'small' | 'medium' | 'large'
export type ButtonType =
  | 'solid'
  | 'outline'
  | 'ghost'
  | 'soft'
  | 'white'
  | 'link'

export const buttonProps = {
  type: {
    type: String as PropType<ButtonType>,
    default: 'white',
  },
  nativeType: {
    type: String as PropType<ButtonNativeType>,
    default: 'button',
  },
  shape: {
    type: String as PropType<ButtonShape>,
    default: 'rounded',
  },
  size: {
    type: String as PropType<ButtonSize>,
    default: 'medium',
  },
  color: {
    type: String as PropType<ComponentColor>,
    default: 'teal',
  },
  disabled: Boolean,
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
