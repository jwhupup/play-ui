import { type Ref, ref, watchPostEffect } from 'vue'
import { runAsync } from '../utils'

export function useOutside(target: Ref<HTMLElement | undefined>, watcher: Ref<boolean>) {
  const isOutside = ref(false)

  const listener = (evt: MouseEvent) => {
    isOutside.value = false
    isOutside.value = !target.value!.contains(evt.target)
  }

  watchPostEffect(() => {
    if (watcher.value)
      runAsync(() => document.addEventListener('click', listener))
    else
      document.removeEventListener('click', listener)
  })

  return {
    isOutside,
  }
}
