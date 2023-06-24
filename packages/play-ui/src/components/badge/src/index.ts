import type { ExtractPropTypes, PropType } from 'vue'
import type { ComponentState } from '../../component'

export const badgeProps = {
  state: {
    type: String as PropType<ComponentState>,
    default: 'primary',
  },
  max: {
    type: Number,
    default: 99,
  },
  dot: Boolean,
  hidden: Boolean,
  value: [String, Number],
}

export type BadgeProps = ExtractPropTypes<typeof badgeProps>
