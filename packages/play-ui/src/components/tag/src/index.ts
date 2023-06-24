import type { ComponentState } from '../../component'

export type TagType = 'solid' | 'outline' | 'soft'
export type TagShape = 'rounded' | 'pilled'

export interface TagProps {
  mode?: TagType
  shape?: TagShape
  state?: ComponentState
  closable?: Boolean
  indicator?: Boolean
}
