"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const index_vue_vue_type_script_setup_true_lang = require("../../icon/src/index.vue2.js");
const index = require("../../button-group/index.js");
const type = require("./type.js");
const _hoisted_1 = ["type"];
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{ name: "Button" },
  __name: "index",
  props: type.buttonProps,
  emits: ["click"],
  setup(__props) {
    const buttonEl = vue.ref();
    const parent = vue.inject(index.GROUP_BUTTON_KEY, null);
    return (_ctx, _cache) => {
      var _a, _b, _c, _d;
      return vue.openBlock(), vue.createElementBlock("button", {
        ref_key: "buttonEl",
        ref: buttonEl,
        type: _ctx.nativeType,
        class: vue.normalizeClass(["pl-button", [
          `pl-button--${((_a = vue.unref(parent)) == null ? void 0 : _a.type) || _ctx.type}`,
          `pl-button--${((_b = vue.unref(parent)) == null ? void 0 : _b.state) || _ctx.state}`,
          `pl-button--${((_c = vue.unref(parent)) == null ? void 0 : _c.shape) || _ctx.shape}`,
          `pl-button--${((_d = vue.unref(parent)) == null ? void 0 : _d.size) || _ctx.size}`,
          _ctx.disabled && "is-disabled"
        ]]),
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click", $event))
      }, [
        _ctx.iconLeft ? (vue.openBlock(), vue.createBlock(index_vue_vue_type_script_setup_true_lang.default, {
          key: 0,
          class: vue.normalizeClass({ "icon-left": _ctx.$slots.default }),
          name: _ctx.iconLeft
        }, null, 8, ["class", "name"])) : vue.createCommentVNode("", true),
        vue.renderSlot(_ctx.$slots, "default"),
        _ctx.iconRight ? (vue.openBlock(), vue.createBlock(index_vue_vue_type_script_setup_true_lang.default, {
          key: 1,
          class: vue.normalizeClass({ "icon-righ": _ctx.$slots.default }),
          name: _ctx.iconRight
        }, null, 8, ["class", "name"])) : vue.createCommentVNode("", true)
      ], 10, _hoisted_1);
    };
  }
});
exports.default = _sfc_main;
//# sourceMappingURL=index.vue2.js.map
