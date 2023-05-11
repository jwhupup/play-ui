import type { ExtractPropTypes, PropType } from 'vue'
import type { PlButtonProps } from '../../button'
import type { PlBadgeProps } from '../../badge'

export type DropdownTrigger = 'mouseenter' | 'click' | 'contextmenu'

export interface DropdownData {
  name: string
  divider?: boolean
  trigger?: DropdownTrigger
  menuButton?: Partial<Pick<PlButtonProps, 'state' | 'type' | 'disabled' | 'iconLeft' | 'iconRight'> & { badge: Partial<PlBadgeProps> }>
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
    default: 'click',
  },
}

export type PlDropdownProps = ExtractPropTypes<typeof dropdownProps>
