"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const copy = require("./copy.js");
const table = require("./table.js");
const cell_vue_vue_type_script_setup_true_lang = require("./cell.vue2.js");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{ name: "Row" },
  __name: "row",
  props: {
    data: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.data, (row) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, {
          key: row[_ctx.key]
        }, [
          vue.createElementVNode("div", {
            class: vue.normalizeClass(["pl-table-row", { "pl-table-row--striped": vue.unref(table.config).striped }])
          }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(table.config).columns, (col, colIndex) => {
              return vue.openBlock(), vue.createBlock(cell_vue_vue_type_script_setup_true_lang.default, {
                key: colIndex,
                data: row[col.key],
                style: vue.normalizeStyle(`width: var(--pl-table-column-${colIndex}-width);`),
                onContextmenu: ($event) => vue.unref(copy.handelCopy)(row, col.key, row[col.key])
              }, null, 8, ["data", "style", "onContextmenu"]);
            }), 128))
          ], 2),
          row.children ? (vue.openBlock(), vue.createBlock(_sfc_main, {
            key: 0,
            data: row.children
          }, null, 8, ["data"])) : vue.createCommentVNode("", true)
        ], 64);
      }), 128);
    };
  }
});
exports.default = _sfc_main;
//# sourceMappingURL=row.vue2.js.map
