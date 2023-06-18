"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const prefix = "Pl";
function withInstall(comp) {
  comp.install = (app) => {
    app.component(`${prefix}${comp.name}`, comp);
  };
  return comp;
}
exports.withInstall = withInstall;
//# sourceMappingURL=install.js.map
