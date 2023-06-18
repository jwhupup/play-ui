import type { InjectionKey } from 'vue'
import { withInstall } from '../../utils'
import type { ButtonGroupProps } from './src/type'
import ButtonGroup from './src/index.vue'

export const PlButtonGroup = withInstall(ButtonGroup)
export default PlButtonGroup
export const GROUP_BUTTON_KEY: InjectionKey<ButtonGroupProps> = Symbol('pl-button-group')
export * from './src/type'
