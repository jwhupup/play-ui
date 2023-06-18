"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
function useExpose(apis) {
  const instance = vue.getCurrentInstance();
  if (instance)
    Object.assign(instance.proxy, apis);
}
exports.useExpose = useExpose;
//# sourceMappingURL=useExpose.js.map
