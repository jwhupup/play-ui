import type { ComponentState } from '../../component'

export interface BadgeProps {
  state?: ComponentState
  max?: number
  value?: number | string
  dot?: boolean
  hidden?: boolean
}
