"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
function useToggle() {
  const state = vue.ref(false);
  const onOpen = (cb) => vue.watch(state, () => state.value && (cb == null ? void 0 : cb()));
  const onClose = (cb) => vue.watch(state, () => state.value || (cb == null ? void 0 : cb()));
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
exports.useToggle = useToggle;
//# sourceMappingURL=useToggle.js.map
