import { ref, watch, watchEffect } from "vue";
import { useToggle } from "./useToggle.mjs";
import { useExpose } from "./useExpose.mjs";
import { useOutside } from "./useOutside.mjs";
const useModal = (emit) => {
  const modal = ref();
  const toggle = useToggle();
  const { isOutside } = useOutside(modal, toggle.state);
  watch(toggle.state, (value) => emit(value ? "open" : "close"));
  watchEffect(() => isOutside.value && (toggle.state.value = false));
  useExpose(toggle);
  return {
    modal: Object.assign(modal, toggle)
  };
};
export {
  useModal
};
//# sourceMappingURL=useModal.mjs.map
