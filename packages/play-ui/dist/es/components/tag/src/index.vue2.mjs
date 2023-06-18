import { defineComponent, ref, openBlock, createElementBlock, normalizeClass, createCommentVNode, renderSlot, createBlock, unref } from "vue";
import { PlIcon } from "../../icon/index.mjs";
const _hoisted_1 = {
  key: 0,
  class: "is-indicator"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
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
    const tagEl = ref();
    const handleClose = (evt) => {
      var _a, _b;
      (_b = (_a = tagEl.value) == null ? void 0 : _a.parentNode) == null ? void 0 : _b.removeChild(tagEl.value);
      emits("close", evt);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "tagEl",
        ref: tagEl,
        class: normalizeClass(["pl-tag", [`pl-tag--${_ctx.type}`, `pl-tag--${_ctx.shape}`, `pl-tag--${_ctx.state}`]])
      }, [
        _ctx.indicator ? (openBlock(), createElementBlock("i", _hoisted_1)) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "default"),
        _ctx.closable ? (openBlock(), createBlock(unref(PlIcon), {
          key: 1,
          class: "is-closable",
          name: "bi-x-lg",
          onClick: handleClose
        })) : createCommentVNode("", true)
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=index.vue2.mjs.map
