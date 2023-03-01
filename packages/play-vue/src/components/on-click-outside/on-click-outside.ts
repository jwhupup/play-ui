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
  const container = document.querySelector('.pl-modal--overlay')
  container?.addEventListener(
    'pointerdown',
    (evt) => {
      if (
        !target ||
        target === evt.target ||
        evt.composedPath().includes(target)
      ) {
        return
      }

      handler(evt as MouseEvent)
    },
    { passive: true }
  )
}
