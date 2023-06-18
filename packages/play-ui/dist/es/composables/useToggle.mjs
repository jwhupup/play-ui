import { ref, watch } from "vue";
function useToggle() {
  const state = ref(false);
  const onOpen = (cb) => watch(state, () => state.value && (cb == null ? void 0 : cb()));
  const onClose = (cb) => watch(state, () => state.value || (cb == null ? void 0 : cb()));
  const toggle = () => state.value = !state.value;
  const open = () => state.value = true;
  const close = (option) => {
    if (option == null ? void 0 : option.delay)
      setTimeout(() => state.value = false, option.delay);
    else
      state.value = false;
  };
  return {
    state,
    toggle,
    open,
    close,
    onOpen,
    onClose
  };
}
export {
  useToggle
};
//# sourceMappingURL=useToggle.mjs.map
