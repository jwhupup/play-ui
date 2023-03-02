import { isSupportedEvent } from '../../utils/client'

export type Fn = () => void
export type TriggerHandler<T> = (evt: T) => void

export function onClickOutside(
  target: HTMLElement,
  handler: TriggerHandler<MouseEvent | PointerEvent>
) {
  let shouldListen = false

  window.addEventListener(
    isSupportedEvent('onpointerdown') ? 'pointerdown' : 'click',
    (evt: any) => {
      if (
        !target ||
        target === evt.target ||
        evt.composedPath().includes(target)
      ) {
        return
      }

      if (!shouldListen && evt.detail === 0) {
        shouldListen = true
        return
      }

      if (shouldListen) {
        handler(evt)
        shouldListen = false
      }
    },
    { passive: true }
  )
}
