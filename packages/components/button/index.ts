import _PlButton from './button.vue'
import type { App } from 'vue'

_PlButton.install = (app: App) => {
  app.component('PlButton', _PlButton)
}
export const PlButton = _PlButton
export default PlButton
