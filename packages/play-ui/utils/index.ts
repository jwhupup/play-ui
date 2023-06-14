export * from './install'
export * from './types'

export function runAsync(cb: () => any) {
  const timer = setTimeout(() => {
    clearTimeout(timer)
    cb()
  }, 0)
}

export function first2UpperCase(word?: string) {
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
