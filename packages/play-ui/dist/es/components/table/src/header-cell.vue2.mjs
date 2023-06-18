import { defineComponent, computed, openBlock, createElementBlock, normalizeStyle, createElementVNode, toDisplayString, Fragment, renderList, createBlock, createCommentVNode } from "vue";
const _hoisted_1 = { class: "pl-table-cell" };
const _hoisted_2 = {
  key: 0,
  class: "pl-table-header-cell-children"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "HeaderCell" },
  __name: "header-cell",
  props: {
    data: {}
  },
  setup(__props) {
    const props = __props;
    const columnWidth = computed(() => {
      if (!props.data.children)
        return `width: var(--pl-table-column-${props.data.index}-width);`;
      return "";
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "pl-table-header-cell",
        style: normalizeStyle(columnWidth.value)
      }, [
        createElementVNode("div", _hoisted_1, toDisplayString(_ctx.data.name), 1),
        _ctx.data.children ? (openBlock(), createElementBlock("div", _hoisted_2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.data.children, (childCell) => {
            return openBlock(), createBlock(_sfc_main, {
              key: childCell.name,
              data: childCell
            }, null, 8, ["data"]);
          }), 128))
        ])) : createCommentVNode("", true)
      ], 4);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=header-cell.vue2.mjs.map
