"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const table = require("./table.js");
const headerCell_vue_vue_type_script_setup_true_lang = require("./header-cell.vue2.js");
const row_vue_vue_type_script_setup_true_lang = require("./row.vue2.js");
const _hoisted_1 = { class: "pl-table-body" };
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
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
    const tableEl = vue.ref();
    table.genTableConfig(props, tableEl);
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        ref_key: "tableEl",
        ref: tableEl,
        class: vue.normalizeClass(["pl-table", { "pl-table--border": !_ctx.border }])
      }, [
        vue.createElementVNode("div", {
          class: vue.normalizeClass(["pl-table-header", { "pl-table-header--fixed": _ctx.fixedHeader }])
        }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.header, (cell, index) => {
            return vue.openBlock(), vue.createBlock(headerCell_vue_vue_type_script_setup_true_lang.default, {
              key: index,
              data: cell
            }, null, 8, ["data"]);
          }), 128))
        ], 2),
        vue.createElementVNode("div", _hoisted_1, [
          vue.createVNode(row_vue_vue_type_script_setup_true_lang.default, { data: _ctx.data }, null, 8, ["data"])
        ])
      ], 2);
    };
  }
});
exports.default = _sfc_main;
//# sourceMappingURL=index.vue2.js.map
