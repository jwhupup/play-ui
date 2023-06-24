import type { ExtractPropTypes, PropType } from 'vue'
import type { ComponentSize, ComponentState } from '../../component'

export type ButtonNativeType = 'button' | 'reset' | 'submit'
export type ButtonShape = 'rounded' | 'pilled' | 'circle' | 'plain'
export type ButtonType = 'solid' | 'outline' | 'ghost' | 'white' | 'link'

export const buttonProps = {
  mode: {
    type: String as PropType<ButtonType>,
    default: 'solid',
  },
  type: {
    type: String as PropType<ButtonNativeType>,
    default: 'button',
  },
  state: {
    type: String as PropType<ComponentState>,
    default: 'primary',
  },
  size: {
    type: String as PropType<ComponentSize>,
    default: 'medium',
  },
  shape: {
    type: String as PropType<ButtonShape>,
    default: 'rounded',
  },
  iconLeft: String,
  iconRight: String,
  disabled: Boolean,
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
