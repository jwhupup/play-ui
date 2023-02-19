import ButtonGroup from './button-group.vue'
import type { App } from 'vue'

ButtonGroup.install = (app: App) => {
  app.component('PlButtonGroup', ButtonGroup)
}
export const PlButtonGroup = ButtonGroup
export default PlButtonGroup
