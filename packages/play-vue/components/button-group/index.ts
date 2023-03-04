import { withInstall } from '../../utils/install'
import ButtonGroup from './src/index.vue'

export const PlButtonGroup = withInstall(ButtonGroup, 'PlButtonGroup')
export default PlButtonGroup
export type { ButtonGroupProps } from './src/button-group'
export * from './src/button-group'
