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
  },
  Layout() {
    return h(theme.Layout, null, {
      'home-features-after': () => h(TeamMember),
    })
  },
}
