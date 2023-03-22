import { h, onMounted } from 'vue'
import theme from 'vitepress/theme'
import * as components from 'play-ui'
import DemoBlock from '../components/demo-block'
import TeamMember from '../components/team-member'
import 'uno.css'
import './main.css'
import 'play-ui/dist/styles/index.css'

export default {
  ...theme,
  setup() {
    onMounted(() => {
      const html = document.documentElement
      const toggleTheme = () => {
        if (html.classList.contains('dark'))
          html.setAttribute('data-theme', 'dark')
        else
          html.setAttribute('data-theme', 'light')
      }

      toggleTheme()

      const observer = new MutationObserver(() => {
        toggleTheme()
        observer.takeRecords()
      })

      observer.observe(html, { attributes: true, childList: false, subtree: false })
    })
  },
  enhanceApp({ app }) {
    for (const name of Object.keys(components)) {
      if (name.startsWith('Pl'))
        app.component(name, components[name])
    }
    app.component('Demo', DemoBlock)
    app.component('TeamMember', TeamMember)
  },
  Layout() {
    return h(theme.Layout, null, {
      'home-features-after': () => h(TeamMember),
    })
  },
}
