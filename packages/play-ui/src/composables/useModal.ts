import { ref, watch, watchEffect } from 'vue'
import { useExpose, useOutside, useToggle } from '.'

export function useModal(emit: (event: 'open' | 'close') => void) {
  const modal = ref<HTMLElement>()
  const toggle = useToggle()
  const { isOutside } = useOutside(modal, toggle.state)

  watch(toggle.state, value => emit(value ? 'open' : 'close'))
  watchEffect(() => isOutside.value && (toggle.state.value = false))
  useExpose(toggle)

  return {
    modal: Object.assign(modal, toggle),
  }
}
