"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const config = vue.ref({
  striped: false,
  width: 0,
  columns: [],
  data: []
});
const genTableConfig = (props, el) => {
  let index = 0;
  let totalWidth = 0;
  vue.watchEffect(() => {
    config.value.width = props.width ?? 180;
    config.value.striped = props.striped ?? false;
    config.value.data = props.data;
  });
  config.value.columns.length = 0;
  genColumnConfig(props.header);
  vue.onMounted(() => {
    const scrollbarWidth = 7;
    config.value.columns.forEach((column, index2, array) => {
      var _a, _b, _c, _d;
      if (index2 === array.length - 1) {
        (_c = el.value) == null ? void 0 : _c.style.setProperty(
          `--pl-table-column-${column.index}-width`,
          `${totalWidth > ((_a = el.value) == null ? void 0 : _a.clientWidth) ? config.value.width : ((_b = el.value) == null ? void 0 : _b.clientWidth) - totalWidth - scrollbarWidth}px`
        );
      } else {
        totalWidth += column.width ?? config.value.width;
        (_d = el.value) == null ? void 0 : _d.style.setProperty(`--pl-table-column-${column.index}-width`, `${column.width ?? config.value.width}px`);
      }
    });
  });
  function genColumnConfig(header) {
    header.forEach((cell) => {
      if (cell.children) {
        genColumnConfig(cell.children);
      } else {
        cell.index = index++;
        config.value.columns.push({ index, ...cell });
      }
    });
  }
};
exports.config = config;
exports.genTableConfig = genTableConfig;
//# sourceMappingURL=table.js.map
