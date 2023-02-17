import type { ExtractPropTypes, InjectionKey, PropType } from 'vue'

export const buttonGroupProps = {
  type: {
    type: String as PropType<'solid' | 'outline' | 'white'>,
    default: 'white',
  },
  shape: {
    type: String as PropType<'rounded' | 'pilled'>,
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
  vertical: Boolean,
  disabled: Boolean,
}

export const GROUP_BUTTON_KEY: InjectionKey<
  ExtractPropTypes<typeof buttonGroupProps>
> = Symbol('pl-button-group')
