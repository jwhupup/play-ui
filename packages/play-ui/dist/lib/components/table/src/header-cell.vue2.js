"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const _hoisted_1 = { class: "pl-table-cell" };
const _hoisted_2 = {
  key: 0,
  class: "pl-table-header-cell-children"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{ name: "HeaderCell" },
  __name: "header-cell",
  props: {
    data: {}
  },
  setup(__props) {
    const props = __props;
    const columnWidth = vue.computed(() => {
      if (!props.data.children)
        return `width: var(--pl-table-column-${props.data.index}-width);`;
      return "";
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: "pl-table-header-cell",
        style: vue.normalizeStyle(columnWidth.value)
      }, [
        vue.createElementVNode("div", _hoisted_1, vue.toDisplayString(_ctx.data.name), 1),
        _ctx.data.children ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.data.children, (childCell) => {
            return vue.openBlock(), vue.createBlock(_sfc_main, {
              key: childCell.name,
              data: childCell
            }, null, 8, ["data"]);
          }), 128))
        ])) : vue.createCommentVNode("", true)
      ], 4);
    };
  }
});
exports.default = _sfc_main;
//# sourceMappingURL=header-cell.vue2.js.map
