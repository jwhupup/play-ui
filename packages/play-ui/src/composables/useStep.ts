import { computed } from 'vue'
import { useCount } from '.'

export function useStep<T>(
  modelValue: T[],
  emit: (event: 'update:modelValue', ...args: any[]) => void,
) {
  const steps = computed({
    get() {
      return modelValue
    },
    set(value) {
      emit('update:modelValue', value)
    },
  })

  const {
    count: current,
    add: next,
    sub: prev,
    update: toggle,
  } = useCount({
    min: 0,
    max: computed(() => steps.value.length - 1),
  })

  const add = (step: T) => {
    steps.value?.push(step)
  }

  const sub = (stepIndex: number) => {
    steps.value?.splice(stepIndex, 1)
  }

  return {
    steps,
    current,
    next,
    prev,
    toggle,
    add,
    sub,
  }
}
