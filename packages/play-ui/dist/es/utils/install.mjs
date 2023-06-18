const prefix = "Pl";
function withInstall(comp) {
  comp.install = (app) => {
    app.component(`${prefix}${comp.name}`, comp);
  };
  return comp;
}
export {
  withInstall
};
//# sourceMappingURL=install.mjs.map
