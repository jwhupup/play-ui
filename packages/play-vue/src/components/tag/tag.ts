import type { PropType } from 'vue'

export const tagProps = {
  type: {
    type: String as PropType<'solid' | 'outline' | 'soft'>,
    default: 'solid',
  },
  shape: {
    type: String as PropType<'rounded' | 'pilled'>,
    default: 'rounded',
  },
  color: {
    type: String as PropType<
      'blue' | 'teal' | 'red' | 'yellow' | 'gray' | 'deepGray'
    >,
    default: 'blue',
  },
  closable: Boolean,
  indicator: Boolean,
  customColor: String,
}
