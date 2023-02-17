import type {
  ComponentResolver,
  SideEffectsInfo,
} from 'unplugin-vue-components'

export interface PlayUiResolverOptions {
  importStyle?: boolean
}

export const isSSR = Boolean(
  process.env.SSR ||
    process.env.SSG ||
    process.env.VITE_SSR ||
    process.env.VITE_SSG
)

export function kebabCase(key: string) {
  const result = key.replace(/([A-Z])/g, ' $1').trim()
  return result.split(' ').join('-').toLowerCase()
}

function getSideEffects(
  dirName: string,
  options: PlayUiResolverOptions
): SideEffectsInfo | undefined {
  const { importStyle = true } = options
  if (!importStyle || isSSR) return
  return [
    'play-ui/dist/style/base.css',
    `play-ui/dist/style/components/${dirName}.css`,
  ]
}

export function PlayUiResolver(
  options: PlayUiResolverOptions = {}
): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.startsWith('Pl')) {
        const partialName = name.slice(2)
        return {
          name,
          from: `play-ui`,
          sideEffects: getSideEffects(kebabCase(partialName), options),
        }
      }
    },
  }
}
