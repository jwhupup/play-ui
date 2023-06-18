"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const index_vue_vue_type_script_setup_true_lang$1 = require("../../button/src/index.vue2.js");
const index_vue_vue_type_script_setup_true_lang = require("../../icon/src/index.vue2.js");
const index = require("../../../utils/index.js");
const _hoisted_1 = {
  key: 0,
  class: "pl-alert--title"
};
const _hoisted_2 = {
  key: 1,
  class: "pl-alert--description"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{ name: "Alert" },
  __name: "index",
  props: {
    type: { default: "solid" },
    state: { default: "info" },
    title: {},
    description: {},
    icon: {},
    closable: { type: Boolean }
  },
  emits: ["close"],
  setup(__props, { emit: emits }) {
    const visible = vue.ref(true);
    const alertEl = vue.ref();
    const handleClose = (evt) => {
      visible.value = false;
      emits("close", evt);
    };
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.Transition, {
        "leave-active-class": vue.unref(index.animation)("fadeOut")
      }, {
        default: vue.withCtx(() => [
          visible.value ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 0,
            ref_key: "alertEl",
            ref: alertEl,
            class: vue.normalizeClass(["pl-alert", [`pl-alert--${_ctx.type}`, `pl-alert--${_ctx.state}`]])
          }, [
            _ctx.icon ? (vue.openBlock(), vue.createBlock(index_vue_vue_type_script_setup_true_lang.default, {
              key: 0,
              name: _ctx.icon
            }, null, 8, ["name"])) : vue.createCommentVNode("", true),
            vue.createElementVNode("div", null, [
              vue.renderSlot(_ctx.$slots, "title"),
              !_ctx.$slots.title && _ctx.title ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_1, vue.toDisplayString(_ctx.title), 1)) : vue.createCommentVNode("", true),
              vue.renderSlot(_ctx.$slots, "default"),
              !_ctx.$slots.default && _ctx.description ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2, vue.toDisplayString(_ctx.description), 1)) : vue.createCommentVNode("", true)
            ]),
            _ctx.closable ? (vue.openBlock(), vue.createBlock(index_vue_vue_type_script_setup_true_lang$1.default, {
              key: 1,
              type: "link",
              state: "info",
              "icon-left": "x-lg",
              onClick: handleClose
            })) : vue.createCommentVNode("", true)
          ], 2)) : vue.createCommentVNode("", true)
        ]),
        _: 3
      }, 8, ["leave-active-class"]);
    };
  }
});
exports.default = _sfc_main;
//# sourceMappingURL=index.vue2.js.map
