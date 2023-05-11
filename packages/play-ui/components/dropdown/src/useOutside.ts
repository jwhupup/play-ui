import type { Ref } from 'vue'
import { onMounted, onUnmounted, ref } from 'vue'

export type OutsideTrigger = 'click' | 'mouseenter' | 'contextmenu'

export const useOutside = (target: Ref<HTMLElement | undefined>, trigger: OutsideTrigger) => {
  const isOutside = ref(false)

  const listener = (evt: MouseEvent) => {
    evt.preventDefault()
    if (target.value) {
      if (target.value.contains(evt.target as HTMLElement))
        isOutside.value = false
      else
        isOutside.value = true
    }
  }

  onMounted(() => {
    document.addEventListener(trigger, listener)
  })

  onUnmounted(() => {
    document.removeEventListener(trigger, listener)
  })

  return isOutside
}
