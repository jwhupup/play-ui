import { toRaw } from 'vue'
import { isString } from './is'

export function createNamespace(block: string) {
  function genClass<T>(props: T) {
    const classSet: string[] = []
    const rawProps = toRaw(props)
    for (const key in rawProps) {
      if (isString(rawProps[key])) {
        classSet.push(`pl-${block}--${rawProps[key]}`)
      }
    }
    return classSet
  }
  return { genClass }
}
