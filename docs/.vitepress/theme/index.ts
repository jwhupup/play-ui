import { h, onMounted } from 'vue'
import theme from 'vitepress/theme'
import DemoBlock from '../components/demo-block'
import Overview from '../components/overview'
import WarnBadge from '../components/WarnBadge'
import CommnBadge from '../components/CommnBadge'
import UpdateBadge from '../components/UpdateBadge'
import NewBadge from '../components/NewBadge'
import TeamMember from '../components/TeamMember'
import './main.css'
import 'uno.css'

export default {
  ...theme,
  setup() {
    onMounted(() => {
      const theme = localStorage.getItem('vitepress-theme-appearance')
      const htmlEl = document.querySelector('html') as HTMLHtmlElement

      htmlEl.setAttribute('data-theme', theme === 'auto' ? 'light' : 'dark')

      document.querySelector('.VPSwitch')?.addEventListener('click', () => {
        if (htmlEl.getAttribute('data-theme') === 'dark')
          return htmlEl.setAttribute('data-theme', 'light')
        return htmlEl.setAttribute('data-theme', 'dark')
      })
    })
  },
  enhanceApp({ app }) {
    app.component('Demo', DemoBlock)
    app.component('Overview', Overview)
    app.component('WarnBadge', WarnBadge)
    app.component('CommnBadge', CommnBadge)
    app.component('UpdateBadge', UpdateBadge)
    app.component('NewBadge', NewBadge)
    app.component('TeamMember', TeamMember)
  },
  Layout() {
    return h(theme.Layout, null, {
      'home-features-after': () => h(TeamMember),
    })
  },
}
