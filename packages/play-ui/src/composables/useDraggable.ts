import { type MaybeRef } from 'vue'
import { onMounted, onUnmounted, ref, toValue } from 'vue'

export interface DraggableOptions {
  target?: MaybeRef<HTMLElement | undefined>
  /**
   * Avoiding positional calculation errors caused by css style 'transform: translate()'.
   */
  translateX?: MaybeRef<number>
  translateY?: MaybeRef<number>
}

export function useDraggable(
  handle: MaybeRef<HTMLElement | undefined>,
  options: DraggableOptions = {},
) {
  const {
    target = document.documentElement,
    translateX = 0,
    translateY = 0,
  } = options

  let unhandle: HTMLElement | undefined
  let untarget: HTMLElement | undefined
  const handleRect = ref<DOMRect>()
  const pointerStartPos = ref({ x: 0, y: 0 })

  onMounted(() => {
    unhandle = toValue(handle)
    untarget = toValue(target)

    if (!unhandle || !untarget)
      return

    unhandle.addEventListener('dragstart', dragstart)
    untarget.addEventListener('dragenter', dragenter)
    untarget.addEventListener('dragover', dragover)
    untarget.addEventListener('dragleave', dragleave)
    untarget.addEventListener('drop', drop)
  })

  onUnmounted(() => {
    if (!unhandle || !untarget)
      return

    unhandle.removeEventListener('dragstart', dragstart)
    untarget.removeEventListener('dragenter', dragenter)
    untarget.removeEventListener('dragover', dragover)
    untarget.removeEventListener('dragleave', dragleave)
    untarget.removeEventListener('drop', drop)
  })

  function dragstart(evt: DragEvent) {
    // console.log('dragstart: ', evt)
    handleRect.value = unhandle?.getBoundingClientRect()
    pointerStartPos.value.x = evt.clientX
    pointerStartPos.value.y = evt.clientY
  }

  function dragenter(evt: DragEvent) {
    evt.dataTransfer!.dropEffect = 'move'
    // console.log('dragenter: ', evt)
  }

  function dragover(evt: DragEvent) {
    // console.log('dragover: ', evt, evt.clientX, evt.clientY)
    evt.preventDefault()
  }

  function dragleave(evt: DragEvent) {
    // console.log('dragleave: ', evt)
    evt.dataTransfer!.dropEffect = 'none'
  }

  function drop(evt: DragEvent) {
    // console.log('drop: ', evt)
    if (!handleRect.value || !unhandle)
      return

    console.log(toValue(translateX))

    unhandle.style.position = 'absolute'
    unhandle.style.top = `${handleRect.value.y + toValue(translateY) + evt.clientY - pointerStartPos.value.y}px`
    unhandle.style.left = `${handleRect.value.x + toValue(translateX) + evt.clientX - pointerStartPos.value.x}px`
  }
}
