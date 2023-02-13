import _PlTag from './tag.vue'
import type { App } from 'vue'

_PlTag.install = (app: App) => {
  app.component('PlTag', _PlTag)
}

export const PlTag = _PlTag
export default PlTag
