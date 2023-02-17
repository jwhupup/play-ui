import Tag from './tag.vue'
import type { App } from 'vue'

Tag.install = (app: App) => {
  app.component('PlTag', Tag)
}

export const PlTag = Tag
export default PlTag
