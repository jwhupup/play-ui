import { type Ref, ref, toValue } from 'vue'

export interface CountOptions {
  initial?: number
  min?: number | Ref<number>
  max?: number | Ref<number>
}

export const useCount = (options?: CountOptions) => {
  const count = ref(options?.initial || 0)

  const gtMax = () => {
    return (
      options?.max
      && toValue(options.max) !== undefined
      && toValue(options.max) !== null
      && toValue(options.max) <= count.value
    )
  }

  const ltMin = () => {
    return (
      options?.min
      && toValue(options.min) !== undefined
      && toValue(options.min) !== null
      && toValue(options.min) >= count.value
    )
  }

  const add = (step = 1) => {
    if (gtMax())
      return
    count.value = count.value + step
  }

  const sub = (step = 1) => {
    if (ltMin())
      return
    count.value = count.value - step
  }

  const update = (value: number) => {
    if (gtMax() && ltMin())
      return
    count.value = value
  }

  return {
    count,
    add,
    sub,
    update,
  }
}
