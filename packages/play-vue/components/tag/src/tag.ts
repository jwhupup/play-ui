import type { ComponentColor } from '../../type'
import type { ExtractPropTypes, PropType } from 'vue'

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
  color: {
    type: String as PropType<ComponentColor>,
    default: 'teal',
  },
  closable: Boolean,
  indicator: Boolean,
}

export type TagProps = ExtractPropTypes<typeof tagProps>
