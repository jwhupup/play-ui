import { getCurrentInstance } from "vue";
function useExpose(apis) {
  const instance = getCurrentInstance();
  if (instance)
    Object.assign(instance.proxy, apis);
}
export {
  useExpose
};
//# sourceMappingURL=useExpose.mjs.map
