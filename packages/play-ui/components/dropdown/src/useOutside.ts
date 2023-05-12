import type { Ref } from 'vue'
import { onMounted, onUnmounted, ref } from 'vue'

export type OutsideTrigger = 'click' | 'mouseenter' | 'contextmenu'

export const useOutside = (target: Ref<HTMLElement | undefined>, triggers: OutsideTrigger | OutsideTrigger[]) => {
  const isOutside = ref(false)
  const _triggers = Array.isArray(triggers) ? triggers : [triggers]

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
    _triggers.forEach(trigger => document.addEventListener(trigger, listener))
  })

  onUnmounted(() => {
    _triggers.forEach(trigger => document.removeEventListener(trigger, listener))
  })

  return isOutside
}
