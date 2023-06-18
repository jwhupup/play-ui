"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const install = require("../../utils/install.js");
const index = require("./src/index.js");
const item = require("./src/item.js");
const PlVirtualList = install.withInstall(index.default);
const PlVirtualListItem = install.withInstall(item.default);
PlVirtualList.PlVirtualListItem = PlVirtualListItem;
exports.PlVirtualList = PlVirtualList;
exports.PlVirtualListItem = PlVirtualListItem;
exports.default = PlVirtualList;
//# sourceMappingURL=index.js.map
