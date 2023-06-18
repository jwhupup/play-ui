import { defineComponent, openBlock, createElementBlock, normalizeClass } from "vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "Icon" },
  __name: "index",
  props: {
    name: {}
  },
  emits: ["click"],
  setup(__props, { emit }) {
    const onClick = () => emit("click");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("i", {
        class: normalizeClass(["bi", `bi-${_ctx.name}`]),
        onClick
      }, null, 2);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=index.vue2.mjs.map
