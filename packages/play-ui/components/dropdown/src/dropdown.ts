import type { ExtractPropTypes, PropType } from 'vue'
import type { PlButtonProps } from '../../button'
import type { PlBadgeProps } from '../../badge'

export type DropdownTrigger = 'mouseenter' | 'click' | 'contextmenu'

export interface DropdownData {
  name: string
  title?: string
  divider?: boolean
  disabled?: boolean
  trigger?: DropdownTrigger
  menuButton?: Partial<Pick<PlButtonProps, 'state' | 'type' | 'iconLeft' | 'iconRight'> & { badge: Partial<PlBadgeProps> }>
  callback?: () => void
  children?: DropdownData[]
}

export const dropdownProps = {
  data: {
    type: Array as PropType<DropdownData[]>,
    require: true,
    default: () => [],
  },
  trigger: {
    type: String as PropType<DropdownTrigger>,
    default: 'mouseenter',
  },
  disabled: Boolean,
  customPosition: Boolean,
}

export type PlDropdownProps = ExtractPropTypes<typeof dropdownProps>
