"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const _hoisted_1 = { class: "pl-table-cell" };
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "cell",
  props: {
    data: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, vue.toDisplayString(_ctx.data), 1);
    };
  }
});
exports.default = _sfc_main;
//# sourceMappingURL=cell.vue2.js.map
