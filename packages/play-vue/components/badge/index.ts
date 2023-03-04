import { withInstall } from '../../utils/install'
import Badge from './src/index.vue'

export const PlBadge = withInstall(Badge, 'PlBadge')
export default PlBadge
export type { BadgeProps } from './src/badge'
