import { ref, watchPostEffect } from "vue";
import { runAsync } from "../utils/index.mjs";
function useOutside(target, watcher) {
  const isOutside = ref(false);
  const listener = (evt) => {
    isOutside.value = false;
    isOutside.value = !target.value.contains(evt.target);
  };
  watchPostEffect(() => {
    if (watcher.value)
      runAsync(() => document.addEventListener("click", listener));
    else
      document.removeEventListener("click", listener);
  });
  return {
    isOutside
  };
}
export {
  useOutside
};
//# sourceMappingURL=useOutside.mjs.map
