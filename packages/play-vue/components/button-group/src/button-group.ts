import type { ExtractPropTypes, InjectionKey, PropType } from 'vue'
import type { ButtonSize } from '../../button/src/button'
import type { ButtonState } from '../../type'

export type ButtonGroupType = 'solid' | 'outline' | 'white'
export type ButtonGroupShape = 'rounded' | 'pilled'

export const buttonGroupProps = {
  type: {
    type: String as PropType<ButtonGroupType>,
    default: 'white',
  },
  state: {
    type: String as PropType<ButtonState>,
    default: 'info',
  },
  shape: {
    type: String as PropType<ButtonGroupShape>,
    default: 'rounded',
  },
  size: {
    type: String as PropType<ButtonSize>,
    default: 'medium',
  },
  vertical: Boolean,
  disabled: Boolean,
}

export type ButtonGroupProps = ExtractPropTypes<typeof buttonGroupProps>

export const GROUP_BUTTON_KEY: InjectionKey<ButtonGroupProps>
  = Symbol('pl-button-group')
