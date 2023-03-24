import type { ExtractPropTypes, PropType } from 'vue'
import type { ComponentState } from '../../type'

export const alertProps = {
  type: {
    type: String as PropType<'solid' | 'soft' | 'outline'>,
    default: 'solid',
  },
  state: {
    type: String as PropType<ComponentState>,
    default: 'info',
  },
  title: String,
  description: String,
  icon: String,
  closable: Boolean,
}

export type PlAlertProps = ExtractPropTypes<typeof alertProps>
