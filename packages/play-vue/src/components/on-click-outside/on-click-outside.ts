export type Fn = () => void
export type EventHandler<T> = (evt: T) => void

export function onClickOutside(
  target: HTMLElement,
  handler: EventHandler<MouseEvent>
) {
  // const listener = (evt: MouseEvent) => {
  //   const el = target

  //   console.log(evt.composedPath().includes(el), 'listener')

  //   if (!el || el === evt.target || evt.composedPath().includes(el)) return

  //   handler(evt)
  // }

  // window.addEventListener('click', listener, { passive: true }),

  let shouldListen = false

  window.addEventListener(
    'pointerdown',
    (evt) => {
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
        handler(evt as MouseEvent)
        shouldListen = false
      }
    },
    { passive: true }
  )
}
