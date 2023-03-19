import type { ExtractPropTypes, PropType } from 'vue'
import type { ComponentState } from '../../type'

export type TagType = 'solid' | 'outline' | 'soft'
export type TagShape = 'rounded' | 'pilled'

export const tagProps = {
  type: {
    type: String as PropType<TagType>,
    default: 'solid',
  },
  shape: {
    type: String as PropType<TagShape>,
    default: 'rounded',
  },
  state: {
    type: String as PropType<ComponentState>,
    default: 'info',
  },
  closable: Boolean,
  indicator: Boolean,
}

export type TagProps = ExtractPropTypes<typeof tagProps>
