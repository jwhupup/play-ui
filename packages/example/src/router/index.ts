import { createRouter, createWebHistory } from 'vue-router'
import type { App } from 'vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/hello',
      component: () => import('../components/HelloWorld.vue'),
    },
  ],
})

export function setupRouter(app: App) {
  app.use(router)
}
