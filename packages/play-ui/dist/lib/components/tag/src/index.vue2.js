"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const index = require("../../icon/index.js");
const _hoisted_1 = {
  key: 0,
  class: "is-indicator"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{ name: "Tag" },
  __name: "index",
  props: {
    type: { default: "solid" },
    shape: { default: "rounded" },
    state: { default: "primary" },
    closable: {},
    indicator: {}
  },
  emits: ["close"],
  setup(__props, { emit: emits }) {
    const tagEl = vue.ref();
    const handleClose = (evt) => {
      var _a, _b;
      (_b = (_a = tagEl.value) == null ? void 0 : _a.parentNode) == null ? void 0 : _b.removeChild(tagEl.value);
      emits("close", evt);
    };
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        ref_key: "tagEl",
        ref: tagEl,
        class: vue.normalizeClass(["pl-tag", [`pl-tag--${_ctx.type}`, `pl-tag--${_ctx.shape}`, `pl-tag--${_ctx.state}`]])
      }, [
        _ctx.indicator ? (vue.openBlock(), vue.createElementBlock("i", _hoisted_1)) : vue.createCommentVNode("", true),
        vue.renderSlot(_ctx.$slots, "default"),
        _ctx.closable ? (vue.openBlock(), vue.createBlock(vue.unref(index.PlIcon), {
          key: 1,
          class: "is-closable",
          name: "bi-x-lg",
          onClick: handleClose
        })) : vue.createCommentVNode("", true)
      ], 2);
    };
  }
});
exports.default = _sfc_main;
//# sourceMappingURL=index.vue2.js.map
