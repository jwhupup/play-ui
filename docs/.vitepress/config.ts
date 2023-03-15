import { fileURLToPath } from 'node:url'
import type { UserConfig } from 'vitepress'
import { defineConfig } from 'vitepress'
import { version } from '../../packages/play-vue/package.json'
import { applyPlugins } from './plugins/code'

const enGuides = [
  { text: 'Quick Start', link: '/langs/en/guide/quick-start' },
  { text: 'Installation', link: '/langs/en/guide/install' },
]

const zhGuides = [
  { text: '快速开始', link: '/langs/zh/guide/quick-start' },
  { text: '安装', link: '/langs/zh/guide/install' },
]

const enComponents = [
  {
    text: 'Basic',
    items: [
      {
        text: 'Button',
        link: '/langs/en/components/button',
      },
      {
        text: 'Button Group',
        link: '/langs/en/components/button-group',
      },
      {
        text: 'Badge',
        link: '/langs/en/components/badge',
      },
      {
        text: 'Tag',
        link: '/langs/en/components/tag',
      },
      {
        text: 'Icon',
        link: '/langs/en/components/icon',
      },
    ],
  },
  {
    text: 'Feedback',
    items: [
      {
        text: 'Alert',
        link: '/langs/en/components/alert',
      },
      {
        text: 'Modal',
        link: '/langs/en/components/modal',
      },
    ],
  },
]

const zhComponents = [
  {
    text: '基础组件',
    items: [
      {
        text: 'Button',
        link: '/langs/zh/components/button',
      },
      {
        text: 'Button Group',
        link: '/langs/zh/components/button-group',
      },
      {
        text: 'Badge',
        link: '/langs/zh/components/badge',
      },
      {
        text: 'Tag',
        link: '/langs/zh/components/tag',
      },
      {
        text: 'Icon',
        link: '/langs/zh/components/icon',
      },
    ],
  },
  {
    text: '反馈组件',
    items: [
      {
        text: 'Alert',
        link: '/langs/zh/components/alert',
      },
      {
        text: 'Modal',
        link: '/langs/zh/components/modal',
      },
    ],
  },
]

const nav = {
  en: [
    { text: 'Guide', items: enGuides },
    { text: 'Components', items: enComponents },
    {
      text: `v${version}`,
      items: [
        {
          text: 'Release Notes',
          link: 'https://github.com/jwhupup/play-vue/releases',
        },
      ],
    },
  ],
  zh: [
    { text: '指南', items: zhGuides },
    { text: '组件', items: zhComponents },
    {
      text: `v${version}`,
      items: [
        {
          text: '发布说明',
          link: 'https://github.com/jwhupup/play-vue/releases',
        },
      ],
    },
  ],
}

const sidebar = {
  '/langs/zh/guide': [
    {
      text: '开发者指南',
      items: zhGuides,
    },
  ],
  '/langs/zh/components': zhComponents,
  '/langs/en/guide': [
    {
      text: 'Developer Guide',
      items: enGuides,
    },
  ],
  '/langs/en/components': enComponents,
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
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: '/langs/en/',
    },
    zh: {
      label: '中文',
      lang: 'zh',
      link: '/langs/zh/',
    },
  },
  lastUpdated: true,
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPNavBarMenu\.vue$/,
          replacement: fileURLToPath(
            new URL('./components/nav-bar-menu/index.vue', import.meta.url),
          ),
        },
      ],
    },
  },
} as UserConfig)
