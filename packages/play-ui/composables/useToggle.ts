import { type Ref, type WatchStopHandle, ref, watch } from 'vue'

export interface CloseOption {
  delay?: number
}

export interface ToggleHandler {
  state: Ref<boolean>
  open: () => any
  close: (option?: CloseOption) => any
  toggle: () => any
  onOpen: (cb: () => any) => WatchStopHandle
  onClose: (cb: () => any) => WatchStopHandle
}

export function useToggle(): ToggleHandler {
  const state = ref(false)
  const onOpen = (cb: () => any) => watch(state, () => state.value && cb?.())
  const onClose = (cb: () => any) => watch(state, () => state.value || cb?.())
  const toggle = () => state.value = !state.value
  const open = () => state.value = true
  const close = (option?: CloseOption) => {
    if (option?.delay)
      setTimeout(() => state.value = false, option.delay)
    else
      state.value = false
  }

  return {
    state,
    toggle,
    open,
    close,
    onOpen,
    onClose,
  }
}
