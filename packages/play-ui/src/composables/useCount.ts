import { type Ref, ref, toValue } from 'vue'
import { isNumber } from '../utils'

export interface CountOptions {
  initial?: number
  min?: number | Ref<number>
  max?: number | Ref<number>
}

export function useCount(options: CountOptions = {}) {
  const {
    min = -Infinity,
    max = Infinity,
    initial = 0,
  } = options

  const count = ref(initial)

  const add = (step = 1) => {
    if (isNumber(toValue(max)) && count.value < toValue(max)) {
      if (count.value + step > toValue(max))
        return count.value = toValue(max)
      count.value += step
    }
  }

  const sub = (step = 1) => {
    if (isNumber(toValue(min)) && count.value > toValue(min)) {
      if (count.value - step < toValue(min))
        return count.value = toValue(min)
      count.value -= step
    }
  }

  const update = (value: number) => {
    if (value >= toValue(min) && value <= toValue(max))
      count.value = value
  }

  return {
    count,
    add,
    sub,
    update,
  }
}
