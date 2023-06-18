"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const index = require("../index.js");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{ name: "ButtonGroup" },
  __name: "index",
  props: {
    type: { default: "solid" },
    state: { default: "info" },
    size: { default: "medium" },
    shape: { default: "rounded" },
    vertical: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    vue.provide(index.GROUP_BUTTON_KEY, props);
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(["pl-button-group", { "is-vertical": _ctx.vertical }])
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
exports.default = _sfc_main;
//# sourceMappingURL=index.vue2.js.map
