import Button from './button.vue'
import type { App } from 'vue'

Button.install = (app: App) => {
  app.component('PlButton', Button)
}
export const PlButton = Button
export default PlButton
