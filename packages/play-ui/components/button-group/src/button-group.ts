import type { ExtractPropTypes, InjectionKey, PropType } from 'vue'
import type { ButtonSize } from '../../button/src/button'
import type { ComponentState } from '../../type'

export type ButtonGroupType = 'solid' | 'outline' | 'white'
export type ButtonGroupShape = 'rounded' | 'pilled'

export const buttonGroupProps = {
  type: {
    type: String as PropType<ButtonGroupType>,
    default: 'solid',
  },
  state: {
    type: String as PropType<ComponentState>,
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

export type PlButtonGroupProps = ExtractPropTypes<typeof buttonGroupProps>

export const GROUP_BUTTON_KEY: InjectionKey<PlButtonGroupProps>
  = Symbol('pl-button-group')
