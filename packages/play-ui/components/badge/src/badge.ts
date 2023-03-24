import type { ExtractPropTypes, PropType } from 'vue'
import type { ComponentState } from '../../type'

export const badgeProps = {
  state: {
    type: String as PropType<ComponentState>,
    default: 'info',
  },
  max: {
    type: Number,
    default: 99,
  },
  value: {
    type: [Number, String] as PropType<number | string>,
    default: '',
  },
  dot: Boolean,
  hidden: Boolean,
}

export type PlBadgeProps = ExtractPropTypes<typeof badgeProps>
