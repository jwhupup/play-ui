export * from './install'
export * from './types'
export * from './is'

export function runAsync(cb: () => any) {
  const timer = setTimeout(() => {
    clearTimeout(timer)
    cb()
  }, 0)
}

export function uppercaseFirstWord(word?: string) {
  if (!word)
    return word

  return word
    .toLowerCase()
    .replace(/[a-z]{1}/, letter => letter.toUpperCase())
}

export function range(start: number, stop: number, step: number) {
  return Array.from(
    { length: (stop - start) / step + 1 },
    (_, i) => start + i * step,
  )
}

/**
 * only animation.css
 */
export function animation(
  name: string | undefined,
  speed: 'slow' | 'slower' | 'fast' | 'faster' = 'faster',
  repeat: 1 | 2 | 3 | 'infinite' = 1,
) {
  return `\
  animate__animated animate__${name} \
  animate__${speed} \
  animate__${repeat === 'infinite' ? 'infinite' : `__repeat-${repeat}`}`
}

export function unrepeatObjectArray<T extends { [key: string]: unknown }>(array: T[], key: string) {
  const unrepeat = new Map()
  for (const item of array)
    unrepeat.set(item[key], item)

  return Array.from(unrepeat.values())
}
