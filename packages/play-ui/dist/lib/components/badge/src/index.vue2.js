"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const _hoisted_1 = { class: "pl-badge-container" };
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{ name: "Badge" },
  __name: "index",
  props: {
    state: { default: "primary" },
    max: { default: 99 },
    value: {},
    dot: { type: Boolean },
    hidden: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const bagdeValue = vue.computed(() => {
      if (Number(props.value) >= props.max)
        return `${props.max}+`;
      return props.value;
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
        vue.renderSlot(_ctx.$slots, "default"),
        vue.createElementVNode("div", {
          class: vue.normalizeClass(["pl-badge", [
            {
              "is-position": _ctx.$slots.default,
              "is-dot": !_ctx.value || _ctx.dot,
              "is-hidden": _ctx.hidden
            },
            `pl-badge--${_ctx.state}`
          ]])
        }, vue.toDisplayString(_ctx.dot ? "" : bagdeValue.value), 3)
      ]);
    };
  }
});
exports.default = _sfc_main;
//# sourceMappingURL=index.vue2.js.map
