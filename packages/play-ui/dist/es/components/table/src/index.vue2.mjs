import { defineComponent, ref, openBlock, createElementBlock, normalizeClass, createElementVNode, Fragment, renderList, createBlock, createVNode } from "vue";
import { genTableConfig } from "./table.mjs";
import _sfc_main$1 from "./header-cell.vue2.mjs";
import _sfc_main$2 from "./row.vue2.mjs";
const _hoisted_1 = { class: "pl-table-body" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "Tables" },
  __name: "index",
  props: {
    width: {},
    header: {},
    data: {},
    fixedHeader: { type: Boolean },
    striped: { type: Boolean },
    border: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const tableEl = ref();
    genTableConfig(props, tableEl);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "tableEl",
        ref: tableEl,
        class: normalizeClass(["pl-table", { "pl-table--border": !_ctx.border }])
      }, [
        createElementVNode("div", {
          class: normalizeClass(["pl-table-header", { "pl-table-header--fixed": _ctx.fixedHeader }])
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.header, (cell, index) => {
            return openBlock(), createBlock(_sfc_main$1, {
              key: index,
              data: cell
            }, null, 8, ["data"]);
          }), 128))
        ], 2),
        createElementVNode("div", _hoisted_1, [
          createVNode(_sfc_main$2, { data: _ctx.data }, null, 8, ["data"])
        ])
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=index.vue2.mjs.map
