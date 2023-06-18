"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const useToggle = require("./useToggle.js");
const useExpose = require("./useExpose.js");
const useOutside = require("./useOutside.js");
const useModal = (emit) => {
  const modal = vue.ref();
  const toggle = useToggle.useToggle();
  const { isOutside } = useOutside.useOutside(modal, toggle.state);
  vue.watch(toggle.state, (value) => emit(value ? "open" : "close"));
  vue.watchEffect(() => isOutside.value && (toggle.state.value = false));
  useExpose.useExpose(toggle);
  return {
    modal: Object.assign(modal, toggle)
  };
};
exports.useModal = useModal;
//# sourceMappingURL=useModal.js.map
