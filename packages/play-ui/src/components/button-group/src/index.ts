import type { InjectionKey } from 'vue'
import type { UnionPick } from '../../../utils'
import type { ButtonShape, ButtonType } from '../../button'
import type { ComponentSize, ComponentState } from '../../component'

export type ButtonGroupType = UnionPick<ButtonType, 'solid' | 'outline' | 'white'>
export type ButtonGroupShape = UnionPick<ButtonShape, 'rounded' | 'pilled'>

export interface ButtonGroupProps {
  mode?: ButtonGroupType
  state?: ComponentState
  size?: ComponentSize
  shape?: ButtonGroupShape
  vertical?: boolean
  disabled?: boolean
}

export const GROUP_BUTTON_KEY: InjectionKey<ButtonGroupProps> = Symbol('pl-button-group')
