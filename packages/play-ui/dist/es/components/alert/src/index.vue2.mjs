import { defineComponent, ref, openBlock, createBlock, Transition, unref, withCtx, createElementBlock, normalizeClass, createCommentVNode, createElementVNode, renderSlot, toDisplayString } from "vue";
import _sfc_main$2 from "../../button/src/index.vue2.mjs";
import _sfc_main$1 from "../../icon/src/index.vue2.mjs";
import { animation } from "../../../utils/index.mjs";
const _hoisted_1 = {
  key: 0,
  class: "pl-alert--title"
};
const _hoisted_2 = {
  key: 1,
  class: "pl-alert--description"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
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
    const visible = ref(true);
    const alertEl = ref();
    const handleClose = (evt) => {
      visible.value = false;
      emits("close", evt);
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        "leave-active-class": unref(animation)("fadeOut")
      }, {
        default: withCtx(() => [
          visible.value ? (openBlock(), createElementBlock("div", {
            key: 0,
            ref_key: "alertEl",
            ref: alertEl,
            class: normalizeClass(["pl-alert", [`pl-alert--${_ctx.type}`, `pl-alert--${_ctx.state}`]])
          }, [
            _ctx.icon ? (openBlock(), createBlock(_sfc_main$1, {
              key: 0,
              name: _ctx.icon
            }, null, 8, ["name"])) : createCommentVNode("", true),
            createElementVNode("div", null, [
              renderSlot(_ctx.$slots, "title"),
              !_ctx.$slots.title && _ctx.title ? (openBlock(), createElementBlock("span", _hoisted_1, toDisplayString(_ctx.title), 1)) : createCommentVNode("", true),
              renderSlot(_ctx.$slots, "default"),
              !_ctx.$slots.default && _ctx.description ? (openBlock(), createElementBlock("div", _hoisted_2, toDisplayString(_ctx.description), 1)) : createCommentVNode("", true)
            ]),
            _ctx.closable ? (openBlock(), createBlock(_sfc_main$2, {
              key: 1,
              type: "link",
              state: "info",
              "icon-left": "x-lg",
              onClick: handleClose
            })) : createCommentVNode("", true)
          ], 2)) : createCommentVNode("", true)
        ]),
        _: 3
      }, 8, ["leave-active-class"]);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=index.vue2.mjs.map
