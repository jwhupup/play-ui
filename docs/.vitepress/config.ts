import { defineConfig } from 'vitepress'
import { version } from '../../packages/play-vue/package.json'
import { applyPlugins } from './plugins/code'

const guides = [
  { text: 'Quick Start', link: '/guide/quick-start' },
  { text: 'Installation', link: '/guide/install' },
]

const zhGuides = [
  { text: 'Quick Start', link: '/locales/guide/quick-start' },
  { text: 'Installation', link: '/locales/guide/install' },
]

const components = [
  {
    text: 'Basic',
    items: [
      {
        text: 'Button',
        link: '/components/button',
      },
      {
        text: 'Button Group',
        link: '/components/button-group',
      },
      {
        text: 'Badge',
        link: '/components/badge',
      },
      {
        text: 'Tag',
        link: '/components/tag',
      },
      {
        text: 'Icon',
        link: '/components/icon',
      },
    ],
  },
  {
    text: 'Feedback',
    items: [
      {
        text: 'Alert',
        link: '/components/alert',
      },
      {
        text: 'Modal',
        link: '/components/modal',
      },
    ],
  },
]

const zhComponents = [
  {
    text: 'Basic',
    items: [
      {
        text: 'Button',
        link: '/locales/zh/components/button',
      },
      {
        text: 'Button Group',
        link: '/locales/zh/components/button-group',
      },
      {
        text: 'Badge',
        link: '/locales/zh/components/badge',
      },
      {
        text: 'Tag',
        link: '/locales/zh/components/tag',
      },
      {
        text: 'Icon',
        link: '/locales/zh/components/icon',
      },
    ],
  },
  {
    text: 'Feedback',
    items: [
      {
        text: 'Alert',
        link: '/locales/zh/components/alert',
      },
      {
        text: 'Modal',
        link: '/locales/zh/components/modal',
      },
    ],
  },
]

const nav = [
  { text: 'Guide', items: guides },
  { text: '导航', items: guides },
  { text: 'Components', items: components },
  {
    text: `v${version}`,
    items: [
      {
        text: 'Release Notes',
        link: 'https://github.com/jwhupup/play-vue/releases',
      },
    ],
  },
]

const sidebar = {
  '/locales/zh/guide': [
    {
      text: 'Developer Guide',
      items: zhGuides,
    },
  ],
  '/locales/zh/components': [
    {
      text: 'Developer Guide',
      items: zhComponents,
    },
  ],
  '/guide': [
    {
      text: 'Developer Guide',
      items: guides,
    },
  ],
  '/components': components,
}

export default defineConfig({
  title: 'Play UI',
  description:
    'A Vue.js prebuilt component library based on Preline design draft',
  head: [
    ['meta', { property: 'og:title', content: 'Play UI' }],
    [
      'meta',
      {
        property: 'og:description',
        content:
          'A Vue.js prebuilt component library based on Preline design draft',
      },
    ],
    [
      'meta',
      { property: 'og:url', content: 'https://github.com/jwhupup/play-vue' },
    ],
    ['meta', { name: 'referrer', content: 'no-referrer' }],
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
    [
      'link',
      {
        href: 'https://fonts.googleapis.com/css2?family=Readex+Pro:wght@200;400;600&display=swap',
        rel: 'stylesheet',
      },
    ],
    [
      'link',
      {
        href: 'https://gw.alipayobjects.com/os/k/font/lxgwwenkaiscreenr.css',
        rel: 'stylesheet',
      },
    ],
  ],
  themeConfig: {
    logo: '/logo.png',
    editLink: {
      pattern: 'https://github.com/jwhupup/play-vue/edit/main/docs/:path',
      text: 'Suggest changes to this page',
    },
    nav,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/jwhupup/play-vue' },
    ],
    sidebar,
    algolia: {
      appId: '8MY90XETI9',
      apiKey: '636f709b1d37514bd8893154430045c0',
      indexName: 'playui',
    },
    footer: {
      message: 'MIT Licensed',
      copyright: 'Copyright © 2023-present jwhupup & Play UI Contributors',
    },
  },
  markdown: {
    config: (md) => {
      applyPlugins(md)
    },
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
  },
  lastUpdated: true,
})
