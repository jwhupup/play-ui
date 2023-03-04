import type {
  ComponentResolver,
  SideEffectsInfo,
} from 'unplugin-vue-components'

export interface PlayResolverOptions {
  importStyle?: boolean | 'less'
  dev?: boolean
}

export const isSSR = Boolean(
  process.env.SSR
    || process.env.SSG
    || process.env.VITE_SSR
    || process.env.VITE_SSG,
)

export function kebabCase(key: string) {
  const result = key.replace(/([A-Z])/g, ' $1').trim()
  return result.split(' ').join('-').toLowerCase()
}

function getSideEffects(
  dirName: string,
  options: PlayResolverOptions,
): SideEffectsInfo | undefined {
  const { importStyle = true } = options

  if (!importStyle || isSSR)
    return

  const noStyleComps = ['on-click-outside']

  if (noStyleComps.includes(dirName))
    return

  if (importStyle === 'less')
    return ['play-vue/styles/base.less', `play-vue/components/${dirName}/src/index.less`]

  return [`play-vue/dist/styles/${dirName}/src/index.js`]
}

export function PlayResolver(
  options: PlayResolverOptions = {},
): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.startsWith('Pl')) {
        const partialName = name.slice(2)
        return {
          name,
          from: 'play-vue',
          sideEffects: getSideEffects(kebabCase(partialName), options),
        }
      }
    },
  }
}
