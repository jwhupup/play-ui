import { toRaw } from "vue";
import { config } from "./table.mjs";
let cellData = "";
let columnKey = "";
let rowData = {};
const columnData = [];
const copyRow = () => {
  Reflect.deleteProperty(rowData, "children");
  copy(
    Object.values(rowData).filter((_, index) => index < config.value.columns.length).join(" ")
  );
};
const copyColumn = () => {
  columnData.length = 0;
  getColumnData(config.value.data);
  copy(columnData.join("\n"));
  function getColumnData(data) {
    data.forEach((row) => {
      columnData.push(row[columnKey]);
      if (row.children)
        getColumnData(row.children);
    });
  }
};
const copyCell = () => {
  copy(cellData);
};
const handelCopy = (row, key, cell) => {
  rowData = toRaw(row);
  cellData = cell;
  columnKey = key;
};
function copy(source) {
  if (navigator && "clipboard" in navigator) {
    navigator.clipboard.writeText(source);
  } else {
    const ta = document.createElement("textarea");
    ta.value = source ?? "";
    ta.style.position = "absolute";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
  }
}
export {
  copyCell,
  copyColumn,
  copyRow,
  handelCopy
};
//# sourceMappingURL=copy.mjs.map
