import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './router'
import { setupStore } from './store'
import DemoBlock from '@/components/demo-block.vue'

const app = createApp(App)

setupRouter(app)

setupStore(app)

app.component(DemoBlock.name, DemoBlock)

app.mount('#app')
