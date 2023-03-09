import { h } from 'vue'
import * as components from 'play-vue'
import theme from 'vitepress/theme'
import DemoBlock from '../components/demo-block'
import Overview from '../components/overview'
import WarnBadge from '../components/WarnBadge'
import CommnBadge from '../components/CommnBadge'
import UpdateBadge from '../components/UpdateBadge'
import NewBadge from '../components/NewBadge'
import TeamMember from '../components/TeamMember'
import 'play-vue/components/badge/src/index.less'
import './main.css'
import 'uno.css'

export default {
  ...theme,
  enhanceApp({ app }) {
    for (const name of Object.keys(components)) {
      if (name.startsWith('Pl'))
        app.component(name, components[name])
    }

    app.component('Demo', DemoBlock)
    app.component('Overview', Overview)
    app.component('WarnBadge', WarnBadge)
    app.component('CommnBadge', CommnBadge)
    app.component('UpdateBadge', UpdateBadge)
    app.component('NewBadge', NewBadge)
    app.component('TeamMember', TeamMember)

    const root = document.querySelector('html')
    const theme = localStorage.getItem('vitepress-theme-appearance') as string
    root?.setAttribute('data-theme', theme === 'auto' ? 'light' : theme)

    const timer = setInterval(() => {
      document?.querySelector('.VPSwitch')?.addEventListener('click', () => {
        clearInterval(timer)
        if (root?.getAttribute('data-theme') === 'dark')
          return root?.setAttribute('data-theme', 'light')
        return root?.setAttribute('data-theme', 'dark')
      })
    }, 1000)
  },
  Layout() {
    return h(theme.Layout, null, {
      'home-features-after': () => h(TeamMember),
    })
  },
}
