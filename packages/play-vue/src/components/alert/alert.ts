import type { ComponentColor } from '../../types/components'
import type { ExtractPropTypes, PropType } from 'vue'

export const alertProps = {
  type: {
    type: String as PropType<'solid' | 'soft'>,
    default: 'solid',
  },
  color: {
    type: String as PropType<ComponentColor>,
    default: 'teal',
  },
  title: String,
  description: String,
  icon: String,
  closable: Boolean,
}

export type AlertProps = ExtractPropTypes<typeof alertProps>
