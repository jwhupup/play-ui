"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{ name: "Icon" },
  __name: "index",
  props: {
    name: {}
  },
  emits: ["click"],
  setup(__props, { emit }) {
    const onClick = () => emit("click");
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("i", {
        class: vue.normalizeClass(["bi", `bi-${_ctx.name}`]),
        onClick
      }, null, 2);
    };
  }
});
exports.default = _sfc_main;
//# sourceMappingURL=index.vue2.js.map
