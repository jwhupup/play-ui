import type { Ref } from 'vue'
import { onMounted, onUnmounted, ref } from 'vue'

export type OutsideTrigger = 'click' | 'mouseenter' | 'contextmenu'
export type OutsideCallback = (isOutside: Ref<boolean>) => void

export const useOutside = (
  target: Ref<HTMLElement | undefined>,
  triggers: OutsideTrigger | OutsideTrigger[],
  callback?: OutsideCallback,
) => {
  const isOutside = ref(false)
  const _triggers = Array.isArray(triggers) ? triggers : [triggers]

  const listener = (evt: MouseEvent) => {
    if (target.value) {
      if (target.value.contains(evt.target as HTMLElement))
        isOutside.value = false
      else
        isOutside.value = true
    }

    if (callback)
      callback(isOutside)
  }

  const listen = () => {
    _triggers.forEach(trigger => document.addEventListener(trigger, listener))
  }

  const clean = () => {
    _triggers.forEach(trigger => document.removeEventListener(trigger, listener))
  }

  onMounted(() => listen())

  onUnmounted(() => clean())

  return { isOutside, listen, clean }
}
