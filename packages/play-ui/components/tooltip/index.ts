import { withInstall } from '../../utils'
import Tooltip from './src/index'

export const PlTooltip: typeof Tooltip = withInstall(Tooltip)
export default PlTooltip
export * from './src/index'
