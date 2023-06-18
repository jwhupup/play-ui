import type { UnionPick } from '../../../utils'
import type { ButtonShape, ButtonType } from '../../button/src/type'
import type { ComponentSize, ComponentState } from '../../component'

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
