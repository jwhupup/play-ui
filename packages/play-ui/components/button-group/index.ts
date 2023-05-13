import type { InjectionKey } from 'vue'
import { withInstall } from '../install'
import type { ButtonGroupProps } from '../component'
import ButtonGroup from './src/index.vue'

export const PlButtonGroup = withInstall(ButtonGroup)
export default PlButtonGroup
export const GROUP_BUTTON_KEY: InjectionKey<ButtonGroupProps> = Symbol('pl-button-group')
