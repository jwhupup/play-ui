import type {
  ComponentResolver,
  SideEffectsInfo,
} from 'unplugin-vue-components'

export interface PlayResolverOptions {
  importStyle?: boolean | 'less'
  from?: string
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

  const noStyleComps: string[] = []

  if (noStyleComps.includes(dirName))
    return

  if (importStyle === 'less')
    return ['play-ui/styles/base.less', `play-ui/components/${dirName}/src/index.less`]

  return [`play-ui/dist/styles/${dirName}/src/index.js`]
}

export function PlayResolver(
  options: PlayResolverOptions = {},
): ComponentResolver {
  const { from = 'play-ui' } = options
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.startsWith('Pl')) {
        const partialName = name.slice(2)
        return {
          name,
          from,
          sideEffects: getSideEffects(kebabCase(partialName), options),
        }
      }
    },
  }
}
