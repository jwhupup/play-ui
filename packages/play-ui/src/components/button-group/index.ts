import _PlButtonGroup from './button-group.vue'
import type { App } from 'vue'

_PlButtonGroup.install = (app: App) => {
  app.component('PlButtonGroup', _PlButtonGroup)
}
export const PlButtonGroup = _PlButtonGroup
export default PlButtonGroup
