import type { ExtractPropTypes, PropType } from 'vue'
import type { ComponentSize, ComponentState } from '../../type'

export type ButtonNativeType = 'button' | 'reset' | 'submit'
export type ButtonShape = 'rounded' | 'pilled' | 'circle' | 'plain'
export type ButtonType =
  | 'solid'
  | 'outline'
  | 'ghost'
  | 'white'
  | 'link'

export const buttonProps = {
  type: {
    type: String as PropType<ButtonType>,
    default: 'solid',
  },
  nativeType: {
    type: String as PropType<ButtonNativeType>,
    default: 'button',
  },
  shape: {
    type: String as PropType<ButtonShape>,
    default: 'rounded',
  },
  state: {
    type: String as PropType<ComponentState>,
    default: 'info',
  },
  size: {
    type: String as PropType<ComponentSize>,
    default: 'medium',
  },
  disabled: Boolean,
}

export type PlButtonProps = ExtractPropTypes<typeof buttonProps>
