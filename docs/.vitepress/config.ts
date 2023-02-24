import { defineConfig } from 'vitepress'
import { version } from '../../package.json'
import { applyPlugins } from './plugins/code'

const guides = [
  { text: 'Quick Start', link: '/guide/quick-start' },
  { text: 'Installation', link: '/guide/install' },
  // { text: 'Overview', link: '/guide/overview' },
  // { text: 'i18n', link: '/guide/i18n' },
  // { text: 'Theming', link: '/guide/theme' },
  // { text: 'Dark Mode', link: '/guide/dark' },
  // { text: 'Changelog', link: '/guide/changelog' },
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
]

const nav = [
  { text: 'Guide', items: guides },
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
  '/guide': [
    {
      text: 'Developer Guide',
      items: guides,
    },
  ],
  '/components': components,
}

export default defineConfig({
  title: 'Play Vue',
  description:
    'A Vue.js prebuilt component library based on Preline design draft',
  head: [
    ['meta', { property: 'og:title', content: 'Play Vue' }],
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
      appId: '8GNC2KD46U',
      apiKey: '275bb9c86a18563cdd9ede0a8de82b29',
      indexName: 'zyob',
    },
    footer: {
      message: 'MIT Licensed',
      copyright: 'Copyright © 2023-present jwhupup & Play Vue Contributors',
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
})
