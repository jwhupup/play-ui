import { createRouter, createWebHistory } from 'vue-router'
import type { App } from 'vue'
import routes from '~pages'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export function setupRouter(app: App) {
  app.use(router)
}
