import { defineComponent, openBlock, createElementBlock, toDisplayString } from "vue";
const _hoisted_1 = { class: "pl-table-cell" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "cell",
  props: {
    data: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, toDisplayString(_ctx.data), 1);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=cell.vue2.mjs.map
