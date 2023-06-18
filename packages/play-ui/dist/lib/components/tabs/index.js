"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const install = require("../../utils/install.js");
const index = require("./src/index.js");
const pane = require("./src/pane.js");
const PlTabs = install.withInstall(index.default);
const PlTabPane = install.withInstall(pane.default);
PlTabs.PlTabPane = PlTabPane;
exports.PL_TAB_KEY = index.PL_TAB_KEY;
exports.PlTabPane = PlTabPane;
exports.PlTabs = PlTabs;
exports.default = PlTabs;
//# sourceMappingURL=index.js.map
