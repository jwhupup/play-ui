import type { ExtractPropTypes, PropType } from 'vue'
import type { ComponentState } from '../../component'

export const alertProps = {
  mode: {
    type: String as PropType<'solid' | 'soft' | 'outline'>,
    default: 'solid',
  },
  state: {
    type: String as PropType<ComponentState>,
    default: 'primary',
  },
  title: String,
  description: String,
  icon: String,
  closable: Boolean,
}

export type AlertProps = ExtractPropTypes<typeof alertProps>
