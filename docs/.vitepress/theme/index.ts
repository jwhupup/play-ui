import { h, onMounted } from 'vue'
import theme from 'vitepress/theme'
import { useRoute, useRouter } from 'vitepress'
import DemoBlock from '../components/demo-block'
import TeamMember from '../components/team-member'
import Translation from '../components/translation'
import './main.css'
import 'uno.css'

export default {
  ...theme,
  setup() {
    const route = useRoute()
    const router = useRouter()
    const LANG_KEY = 'prefers-play-lang'
    const prefersLang = localStorage.getItem('prefers-play-lang')

    // watchEffect(() => {
    //   if (route.path) {
    //     console.log(route.path)
    //     router.go('/')
    //   }
    // })
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
    app.component('TeamMember', TeamMember)
    app.component('Translation', Translation)
  },
  Layout() {
    return h(theme.Layout, null, {
      'home-features-after': () => h(TeamMember),
      // 'nav-bar-content-after': () => h(Translation),
    })
  },
}
