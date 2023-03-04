import type { ComponentColor } from '../../type'
import type { ExtractPropTypes, PropType } from 'vue'

export const badgeProps = {
  color: {
    type: String as PropType<ComponentColor>,
    default: 'teal',
  },
  max: {
    type: Number,
    default: 99,
  },
  dot: Boolean,
  hidden: Boolean,
  value: {
    type: [Number, String] as PropType<number | string>,
    default: '',
  },
}

export type BadgeProps = ExtractPropTypes<typeof badgeProps>
