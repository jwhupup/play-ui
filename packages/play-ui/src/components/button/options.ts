import type { PropType } from 'vue'

export const buttonProps = {
  type: {
    type: String as PropType<
      'solid' | 'outline' | 'ghost' | 'soft' | 'white' | 'link'
    >,
    default: 'white',
  },
  nativeType: {
    type: String as PropType<'button' | 'reset' | 'submit'>,
    default: 'button',
  },
  shape: {
    type: String as PropType<'rounded' | 'pilled' | 'circle'>,
    default: 'rounded',
  },
  size: {
    type: String as PropType<'small' | 'medium' | 'large'>,
    default: 'medium',
  },
  color: {
    type: String as PropType<
      'blue' | 'teal' | 'red' | 'yellow' | 'gray' | 'deepGray'
    >,
    default: 'blue',
  },
  disabled: Boolean,
}
