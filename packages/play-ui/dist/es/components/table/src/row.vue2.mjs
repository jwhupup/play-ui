import { defineComponent, openBlock, createElementBlock, Fragment, renderList, createElementVNode, normalizeClass, unref, createBlock, normalizeStyle, createCommentVNode } from "vue";
import { handelCopy } from "./copy.mjs";
import { config } from "./table.mjs";
import _sfc_main$1 from "./cell.vue2.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "Row" },
  __name: "row",
  props: {
    data: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.data, (row) => {
        return openBlock(), createElementBlock(Fragment, {
          key: row[_ctx.key]
        }, [
          createElementVNode("div", {
            class: normalizeClass(["pl-table-row", { "pl-table-row--striped": unref(config).striped }])
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(config).columns, (col, colIndex) => {
              return openBlock(), createBlock(_sfc_main$1, {
                key: colIndex,
                data: row[col.key],
                style: normalizeStyle(`width: var(--pl-table-column-${colIndex}-width);`),
                onContextmenu: ($event) => unref(handelCopy)(row, col.key, row[col.key])
              }, null, 8, ["data", "style", "onContextmenu"]);
            }), 128))
          ], 2),
          row.children ? (openBlock(), createBlock(_sfc_main, {
            key: 0,
            data: row.children
          }, null, 8, ["data"])) : createCommentVNode("", true)
        ], 64);
      }), 128);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=row.vue2.mjs.map
