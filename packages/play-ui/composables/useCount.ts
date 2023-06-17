import { type Ref, ref, toValue } from 'vue'
import { isNumber } from '../utils'

export interface CountOptions {
  initial?: number
  min?: number | Ref<number>
  max?: number | Ref<number>
}

export const useCount = (options: CountOptions = {}) => {
  const {
    min = -Infinity,
    max = Infinity,
    initial = 0,
  } = options

  const _max = toValue(max)
  const _min = toValue(min)
  const count = ref(initial)

  const add = (step = 1) => {
    if (isNumber(_max) && count.value < _max)
      count.value += step
  }

  const sub = (step = 1) => {
    if (isNumber(_min) && count.value > _min)
      count.value -= step
  }

  const update = (value: number) => {
    if (value >= _min && value <= _max)
      count.value = value
  }

  return {
    count,
    add,
    sub,
    update,
  }
}
